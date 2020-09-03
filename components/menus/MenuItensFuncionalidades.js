import Link from 'next/link'

class MenuItensFuncionalidades extends React.Component {
    render() {
        return (
            <div>
            <ol>
                <h4>
                Para suas Finanças
                </h4>
                <li><a href="/controle-financeiro/contas-a-pagar/">
                Contas a Pagar
                </a></li>
                <li><a href="/controle-financeiro/contas-a-receber/">
                Contas a Receber
                </a></li>
                <li><a href="/controle-financeiro/dre-demonstrativo-do-resultado-do-exercicio/">
                DRE Gerencial
                </a></li>
                <li><a href="/controle-financeiro/fluxo-de-caixa/">
                Fluxo de Caixa
                </a></li>
                <li><a href="/controle-financeiro/gerenciamento-de-servicos-recorrentes/">
                Serviços Recorrentes
                </a></li>
                <p><a href="/controle-financeiro/">
                <b>+</b>Sobre Controle Financeiro
                </a></p>
                {/* <li><a href="/controle-financeiro/gestao-de-custo/">
                Gestão de Custos
                </a></li>
                <li><a href="/controle-financeiro/controle-de-contas-bancarias/">
                Controle de Contas Bancárias
                </a></li>
                <li><a href="/controle-financeiro/conciliacao-bancaria/">
                Conciliação Bancária OFX
                </a></li>
                <li><a href="/controle-financeiro/relatorios-financeiros/">
                Relatórios Financeiros
                </a></li> */}
            </ol>
            <ol>
                <h4>
                Para suas Vendas
                </h4>
                <li><a href="/controle-de-vendas/sistema-de-pdv-ponto-de-venda/">
                Sistema PDV - Ponto de Venda
                </a></li>
                <li><a href="/controle-de-vendas/sistema-crm/">
                Sistema CRM
                </a></li>
                <li><a href="/controle-de-vendas/orcamentos-de-vendas/">
                Orçamentos de Vendas
                </a></li>
                <li><a href="/controle-de-vendas/emissor-de-boleto-de-vendas/">
                Emissão de Boletos
                </a></li>
                <li><a href="/controle-de-vendas/emissao-de-pedidos/">
                Emissão Pedidos
                </a></li>
                <p><a href="/controle-de-vendas/">
                <b>+</b>Sobre Controle de Vendas
                </a></p>
                {/*
                <li><a href="/controle-de-vendas/sistema-de-automacao-comercial/">
                Automação Comercial
                </a></li>
                <li><a href="/controle-de-vendas/gestao-de-clientes/">
                Cadastro de Clientes
                </a></li>
                <li><a href="/controle-de-vendas/gestao-de-vendedores/">
                Gestão de Vendedores
                </a></li>
                <li><a href="/controle-de-vendas/proposta-comercial/">
                Proposta Comercial
                </a></li>
                <li><a href="/controle-de-vendas/emissor-de-recibo/">
                Emissor de Recibo
                </a></li>
                <li><a href="/controle-de-vendas/ordem-de-servico/">
                Ordem de Serviço
                </a></li>
                <li><a href="/controle-de-vendas/relatorio-de-vendas/">
                Relatórios de Vendas
                </a></li> */}
            </ol>
            <ol>
                <h4>
                Para seu Estoque
                </h4>
                <li><a href="/controle-de-estoque/cadastro-de-produtos/">
                Cadastro de Produtos
                </a></li>
                <li><a href="/controle-de-estoque/cadastro-de-fornecedores/">
                Cadastro de Fornecedores
                </a></li>
                <li><a href="/controle-de-estoque/cadastro-de-transportadoras/">
                Cadastro de Transportadoras
                </a></li>
                <li><a href="/controle-de-estoque/giro-de-estoque/">
                Giro de Estoque
                </a></li>
                <li><a href="/controle-de-estoque/controle-de-compras/">
                Controle de Compras
                </a></li>
                <p><a href="/controle-de-estoque/">
                <b>+</b>Sobre Controle de Estoque
                </a></p>
                {/* <li><a href="/controle-de-estoque/nota-fiscal-de-entrada/">
                Nota Fiscal de Entrada
                </a></li>
                <li><a href="/controle-de-estoque/relatorio-de-estoque/">
                Relatórios de Estoque
                </a></li> */}
            </ol>
            <ol>
                <h4>
                Sobre Nota Fiscal
                </h4>
                <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-nfe/">
                Nota Fiscal de Produto
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-nfse/">
                Nota Fiscal de Serviço
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-cte/">
                Emissor CTe
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-mdfe/">
                Emissor MDFe
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-nfce/">
                Nota Fiscal de Consumidor
                </a></li>
                <p><a href="/emissor-de-nota-fiscal-eletronica/">
                <b>+</b>Sobre Emissor de Nota Fiscal
                </a></p>
                {/* <li><a href="/emissor-de-nota-fiscal-eletronica/emissor-de-nota-fiscal-importacao-exportacao/">
                Nota Fiscal de Importação e Exportação
                </a></li>
                <<li><a href="/emissor-de-nota-fiscal-eletronica/carta-de-correcao-eletronica/">
                Carta de Correção Eletrônica
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/">
                Certificado Digital Gratuito*
                </a></li>
                <li><a href="/emissor-de-nota-fiscal-eletronica/relatorio-de-notas-fiscais/">
                Relatórios de Notas Fiscais
                </a></li> */}
            </ol>
                <style jsx>{`
                    ol {
                        list-style:none;
                        display:inline-block;
                        vertical-align:top;
                        width: calc(25% - 20px);
                        padding:0;
                        margin:10px;
                        text-align:left;
                        font-family: 'Titillium Web', Arial, Tahoma, Sans-Serif;
                        font-weight:400;
                    }
                    span {
                        min-height: 64px;
                        display: block;
                        cursor:pointer;
                        padding: 0;
                    }
                    li {
                        border-left: 2px solid #eaeaea;
                        transition:0.2s;
                        padding: 5px 0 5px 10px;
                        line-height:1em;
                    }
                    li:hover {
                        border-left: 2px solid #345d9d;
                        transition:0.2s;
                    }
                    p {
                        margin: 10px 0 0;
                        font-style: italic;
                        color: #33609e;
                    }
                    p a {
                        color: #33609e;
                    }
                    p b {
                        background-color: #2abec6;
                        display: inline-block;
                        border-radius: 30px;
                        color: #ffffff;
                        font-style: normal;
                        vertical-align: baseline;
                        font-weight: 600;
                        font-size: 1.1rem;
                        width: 0.9rem;
                        height: 0.9rem;
                        line-height: 0.7rem;
                        text-align: center;
                        margin-right: 5px;
                    }
                    h4 {
                        margin:0 0 15px;
                        color: #345d9d;
                        font-weight:600;
                        font-size:1.1rem;
                        line-height:1em;
                    }
                    a {
                        color:#8f8f8f;
                        text-decoration:none;
                        font-size:1rem;
                        display:block;
                        line-height:1em;
                    }
                    a:hover {
                        color: #345d9d;
                    }
                    @media (max-width:945px){
                        ol {
                            display:block;
                            width:100%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default MenuItensFuncionalidades