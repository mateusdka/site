import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Precos() {
    const [precos, setPrecos] = useState([]);
    const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const [periodoInicial, setPeriodoInicial] = useState('');
    const [periodoFinal, setPeriodoFinal] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/AgrolinkScrapper/precos.json');
                const data = await response.json();
                setProdutosDisponiveis(Object.entries(data).map(([nome, info]) => ({
                    nome,
                    unidade: info.unidade
                })));
                setPrecos(data);
            } catch (error) {
                console.error('Erro ao fazer scraping:', error);
            }
        }

        fetchData();
    }, []);

    // Color palette for datasets
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

    // Compute all unique labels across selected products and sort them chronologically
    const allLabelsSet = new Set();
    produtosSelecionados.forEach(produto => {
        (precos[produto]?.dados || []).forEach(item => {
            allLabelsSet.add(item.mesAno);
        });
    });
    const allLabelsArray = Array.from(allLabelsSet).sort((a, b) => {
        const [mesA, anoA] = a.split('/').map(Number);
        const [mesB, anoB] = b.split('/').map(Number);
        return anoA - anoB || mesA - mesB;
    });

    const filteredLabels = allLabelsArray.filter(label => {
        if (!periodoInicial && !periodoFinal) return true;
        const [mes, ano] = label.split('/').map(Number);
        const [mesIni, anoIni] = periodoInicial ? periodoInicial.split('/').map(Number) : [null, null];
        const [mesFim, anoFim] = periodoFinal ? periodoFinal.split('/').map(Number) : [null, null];

        const data = new Date(ano, mes - 1);
        const inicio = periodoInicial ? new Date(anoIni, mesIni - 1) : null;
        const fim = periodoFinal ? new Date(anoFim, mesFim - 1) : null;

        if (inicio && data < inicio) return false;
        if (fim && data > fim) return false;
        return true;
    });

    // Prepare chartData with unified labels and data aligned, inserting null for missing data
    const chartData = {
        labels: filteredLabels,
        datasets: produtosSelecionados.map((produto, index) => {
            const dataMap = Object.fromEntries((precos[produto]?.dados || []).map(item => [item.mesAno, item.mediaNacional]));
            return {
                label: `${produto} (${precos[produto]?.unidade || ''})`,
                data: filteredLabels.map(label => dataMap[label] ?? null),
                borderColor: colors[index % colors.length],
                backgroundColor: colors[index % colors.length],
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointRadius: 0,
            };
        }),
    };

    const handleExportCSV = () => {
        if (produtosSelecionados.length === 0) return;

        // Gerar cabeçalho
        const headers = ['Mês/Ano', ...produtosSelecionados.map(produto => `${produto} (${precos[produto]?.unidade || ''})`)];

        // Gerar linhas
        const rows = filteredLabels.map((label) => {
            const row = [label];
            produtosSelecionados.forEach(produto => {
                const dataMap = Object.fromEntries((precos[produto]?.dados || []).map(item => [item.mesAno, item.mediaNacional]));
                const valor = dataMap[label];
                row.push(valor !== undefined ? valor.toFixed(2).replace('.', ',') : '');
            });
            return row;
        });

        // Montar conteúdo CSV
        const csvContent = [headers, ...rows].map(e => e.join(';')).join('\n');

        // Data para nome do arquivo
        const today = new Date();
        const dateString = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

        // Criar Blob e baixar
        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `tabela_precos_${dateString}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Chart options for responsiveness and appearance
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `R$ ${context.parsed.y.toFixed(2).replace('.', ',')}`;
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Mês/Ano',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Preço Médio (R$)',
                },
            },
        },
    };

    return (
        <div>
            <div className="container-lg bg-white rounded p-5 banner-home mt-4 mb-4">
                <h3 className="display-4 banner-text rounded p-3">Preços do Agro</h3>
            </div>
            <div className="container-lg bg-black rounded text-white p-5">
                <div className='row'>
                    <div className="col-lg-3 mb-4">
                        <h1>Produtos</h1>
                        <p>Selecione até 5 (cinco) produtos.</p>
                        <select className="form-select mb-4" multiple style={{ minHeight: '300px' }} value={produtosSelecionados} onChange={(e) => {
                            const options = Array.from(e.target.selectedOptions).map(option => option.value);
                            if (options.length <= 5) {
                                setProdutosSelecionados(options);
                            }
                        }}>
                            {produtosDisponiveis.sort((a, b) => a.nome.localeCompare(b.nome)).map((produto) => (
                                <option key={produto.nome} value={produto.nome}>
                                    {produto.nome} ({produto.unidade})
                                </option>
                            ))}
                        </select>
                        <p>Dica: utilize a tecla CTRL para selecionar mais de um produto.</p>
                    </div>
                    <div className="col-lg-9 mb-4">
                        <h1>Histórico de Variação de Preços</h1>
                        <div className='row mb-3'>
                            <div className="col-lg-6 d-flex align-items-center">
                                <p>Dados extraídos do site <a href="https://agrolink.com.br/" className="link-light" target="_blank" rel="noreferrer">Agrolink</a>.</p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <button
                                    className="btn btn-outline-light"
                                    onClick={() => {
                                        const chart = ChartJS.getChart(document.querySelector('canvas'));
                                        const link = document.createElement('a');
                                        link.href = chart.toBase64Image();
                                        link.download = 'grafico_precos.png';
                                        link.click();
                                    }}
                                >
                                    Exportar Gráfico para PNG
                                </button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Período Inicial</label>
                                <select className="form-select" value={periodoInicial} onChange={(e) => setPeriodoInicial(e.target.value)}>
                                    <option value="">Sem filtro</option>
                                    {allLabelsArray.map(label => (
                                        <option key={label} value={label}>{label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label>Período Final</label>
                                <select className="form-select" value={periodoFinal} onChange={(e) => setPeriodoFinal(e.target.value)}>
                                    <option value="">Sem filtro</option>
                                    {allLabelsArray.map(label => (
                                        <option key={label} value={label}>{label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="container-lg bg-light rounded p-5 mb-4" style={{ minHeight: '400px' }}>
                            <Line data={chartData} options={chartOptions}></Line>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h1>Tabela de Preços</h1>
                    <div className='row mb-3'>
                        <div className="col-lg-6 d-flex align-items-center">
                            <p>Valores representam médias mensais de todos os estados brasileiros.</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-end">
                            <button className="btn btn-outline-light mt-3" onClick={handleExportCSV}>
                                Exportar Tabela para CSV
                            </button>
                        </div>
                    </div>
                    <table className="table table-sm table-dark table-striped" style={{ tableLayout: 'fixed' }}>
                        <thead>
                            <tr>
                                <th>Mês/Ano</th>
                                {produtosSelecionados.map(produto => (
                                    <th key={produto}>
                                        {produto} <br /> <span className="mini-text">({precos[produto]?.unidade || ''})</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {filteredLabels.map((label, idx) => (
                                <tr key={idx}>
                                    <td>{label}</td>
                                    {produtosSelecionados.map(produto => {
                                        const dataMap = Object.fromEntries((precos[produto]?.dados || []).map(item => [item.mesAno, item.mediaNacional]));
                                        const valor = dataMap[label];
                                        return (
                                            <td key={produto}>
                                                {valor !== undefined
                                                    ? `R$ ${valor.toFixed(2).replace('.', ',')}`
                                                    : '-'}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Precos;