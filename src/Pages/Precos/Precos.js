import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Precos() {
    const [precos, setPrecos] = useState([]);
    const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/AgrolinkScrapper/precos.json');
                const data = await response.json();
                setPrecos(data);
                setProdutosDisponiveis(Object.keys(data));
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
        (precos[produto] || []).forEach(item => {
            allLabelsSet.add(item.mesAno);
        });
    });
    const allLabels = Array.from(allLabelsSet).sort((a, b) => {
        const [mesA, anoA] = a.split('/').map(Number);
        const [mesB, anoB] = b.split('/').map(Number);
        return anoA - anoB || mesA - mesB;
    });

    // Prepare chartData with unified labels and data aligned, inserting null for missing data
    const chartData = {
        labels: allLabels,
        datasets: produtosSelecionados.map((produto, index) => {
            const dataMap = Object.fromEntries((precos[produto] || []).map(item => [item.mesAno, item.mediaNacional]));
            return {
                label: produto,
                data: allLabels.map(label => dataMap[label] ?? null),
                borderColor: colors[index % colors.length],
                backgroundColor: colors[index % colors.length],
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointRadius: 0,
            };
        }),
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
                    <div className="col-lg-3">
                        <h1>Produtos</h1>
                        <p>Selecione até 3 (três) produtos para visualizar no gráfico.</p>
                        <select className="form-select" multiple style={{ minHeight: '300px' }} value={produtosSelecionados} onChange={(e) => {
                            const options = Array.from(e.target.selectedOptions).map(option => option.value);
                            if (options.length <= 3) {
                                setProdutosSelecionados(options);
                            }
                        }}>
                            {produtosDisponiveis.sort().map((produto) => (
                                <option key={produto} value={produto}>{produto}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-lg-9">
                        <h1>Variação de Preços</h1>
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
                        <div className="container-lg bg-light rounded p-5 mb-4" style={{ minHeight: '400px' }}>
                            <Line data={chartData} options={chartOptions}></Line>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg bg-black rounded text-white p-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Mês/Ano</th>
                            {produtosSelecionados.map(produto => (
                                <th key={produto}>{produto}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(precos[produtosSelecionados[0]] || []).map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.mesAno}</td>
                                {produtosSelecionados.map(produto => (
                                    <td key={produto}>
                                        {precos[produto]?.[idx]?.mediaNacional ?? '-'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Precos;