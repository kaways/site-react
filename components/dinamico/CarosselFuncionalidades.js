import Slider from "react-slick";

const CFModulo = (props) => (
    <div className="textCard">
        <p>
            {props.texto}
        </p>
        <p>
            {props.chamada}
        </p>
        {props.lista}
        <div className="moreApps">
            <strong>Aplicativos para {props.titulo}:</strong>
        </div>
        <div className="moreApps right">
            <a aria-label={props.icoTag01} href={props.icoLink01}>
                <div className="tags">
                    <span>{props.icoTag01}</span>
                    <img alt={props.ico01} title={props.ico01} src={"./static/images/icons/loja_apps_square/"+props.ico01+".png"} />
                </div>
            </a>
            <a aria-label={props.icoTag02} href={props.icoLink02}>
                <div className="tags">
                    <span>{props.icoTag02}</span>
                    <img alt={props.ico02} title={props.ico02} src={"./static/images/icons/loja_apps_square/"+props.ico02+".png"} />
                </div>
            </a>
            <a aria-label={props.icoTag03} href={props.icoLink03}>
                <div className="tags">
                    <span>{props.icoTag03}</span>
                    <img alt={props.ico03} title={props.ico03} src={"./static/images/icons/loja_apps_square/"+props.ico03+".png"} />
                </div>
            </a>
            <a aria-label="Veja Mais Apps" href='https://vhsys.com.br/loja-de-aplicativos/'>
                <div className="tags more">
                    <span>Mais Apps</span>
                    <img alt='loja_apps' title='loja_apps' src={"./static/images/icons/loja_apps_square/loja_apps.png"} />
                </div>
            </a>
        </div>
    <style jsx>{`
    p {
        color: #929292;
    }
    .moreApps {
        display:inline-block;
        vertical-align: top;
        width:calc(100% - 250px);
        min-width:200px;
    }
    .moreApps.right {
        width:250px;
        max-width:100%;
        text-align:center;
    }
    .moreApps strong {
        font-weight: 600;
        color:#345d9d;
        vertical-align: top;
        margin-bottom:15px;
        display: inline-block;
    }
    .moreApps div.tags {
        position:relative;
        display:inline-block;
        vertical-align:top;
        cursor:pointer;
    }
    .moreApps span {
        position: absolute;
        bottom: calc(100% + 10px);
        right: 0;
        white-space: nowrap;
        background-color: #ffffff;
        box-shadow: 0 0 1px 1px #e3e3e3;
        padding: 2px 15px;
        border-radius: 3px;
        opacity:0;
        transition:0.2s;
        visibility:hidden;
    }
    .moreApps span:before {
        content: '';
        display: block;
        width: 5px;
        height: 10px;
        background-color: #ffffff;
        border-left: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        position: absolute;
        top: calc(100% - 5px);
        right: 20px;
        transform: rotate(-63deg);
    }
    .moreApps div.tags:hover > span {
        opacity:1;
        visibility:visible;
        transition:0.2s;
    }
    .moreApps img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: inline-block;
        margin: 5px;
        vertical-align: top;
        transition:0.2s;
    }
    .moreApps img:hover {
        margin: 0 5px 10px;
        transition:0.2s;
        box-shadow: 0 10px 13px -10px #000000;
    }
    .moreApps .more img {
        border-radius:50px;
        overflow: hidden;
    }
    `}</style>
    </div>
)

class CarosselFuncionalidades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navFU1: null,
            navFU2: null
        };
    }

    componentDidMount() {
        this.setState({
            navFU1: this.slider1,
            navFU2: this.slider2
        });
    }

    render() {
        return (
            <section>
                <article className="homeFuncionalidadesSlider">
                    <Slider
                        asNavFor={this.state.navFU1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        infinite={true}
                        centerMode={true}
                        centerPadding={'0px'}
                        draggable={false}
                        speed={200}
                    >
                        <div className="homeFuncionalidadesSlide">
                            <h5>Emissor de Nota Fiscal</h5>
                            <img alt='EmissorNF' title='EmissorNF' src="/static/images/uniqueComponents/homeFuncionalidadesCarossel/EmissorNF.png" />
                        </div>
                        <div className="homeFuncionalidadesSlide">
                            <h5>Controle Financeiro</h5>
                            <img alt='controleFinanceiro' title='controleFinanceiro' src="/static/images/uniqueComponents/homeFuncionalidadesCarossel/controleFinanceiro.png" />
                        </div>
                        <div className="homeFuncionalidadesSlide">
                            <h5>Controle de Vendas</h5>
                            <img alt='ControleVendas' title='ControleVendas' src="/static/images/uniqueComponents/homeFuncionalidadesCarossel/ControleVendas.png" />
                        </div>
                        <div className="homeFuncionalidadesSlide">
                            <h5>Controle de Estoque</h5>
                            <img alt='controleEstoque' title='controleEstoque' src="/static/images/uniqueComponents/homeFuncionalidadesCarossel/controleEstoque.png" />
                        </div>
                    </Slider>
                </article>
                <article className="funcionalidadesText">
                    <Slider
                        ref={slider => (this.slider1 = slider)}
                        slidesToShow={1}
                        arrows={false}
                        draggable={false}
                        adaptiveHeight={true}
                        fade={true}
                        centerMode={true}
                        centerPadding={'0px'}
                        speed={220}
                    >
                        <div className="ModuleText">
                            <CFModulo
                            texto={<span>Facilite a <a aria-label="Emissão de Notas Fiscais" href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/'>Emissão de Notas Fiscais</a> da sua empresa com o Sistema de Gestão Empresarial VHSYS. Emita os principais tipos de notas fiscais eletrônicas com mais agilidade e segurança. Tenha acesso a um histórico detalhado das NFs emitidas, tudo armazenado em nuvem! Além disso, você pode contar com ferramentas adicionais para ter mais praticidade na gestão do seu negócio.</span>}
                            titulo='Emissão de Notas Fiscais'
                            ico01='ico-backup_nfe'
                            icoLink01='/loja-de-aplicativos/backup-nfe/'
                            icoTag01='Back-up NFe'
                            ico02='ico-darf'
                            icoLink02='/loja-de-aplicativos/emissor-darf/'
                            icoTag02='Emissor DARF'
                            ico03='ico-icms_st'
                            icoLink03='/loja-de-aplicativos/icms-st/'
                            icoTag03='ICMS-ST'
                            lista={
                            <ul>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-nfe/'>
                                Emissor de NF-e
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-nfse/'>
                                Emissor de NFS-e
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-nfce/'>
                                Emissor de NFC-e
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-cte/'>
                                Emissor de CT-e
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-mdfe/'>
                                Emissor de MDF-e
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/carta-de-correcao-eletronica/'>
                                Carta de Correção Eletrônica
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/emissor-de-nota-fiscal-importacao-exportacao/'>
                                Nota fiscal de importação e exportação
                            </a></li>
                            <li><a href='https://vhsys.com.br/emissor-de-nota-fiscal-eletronica/relatorio-de-notas-fiscais/'>
                                Relatório de Notas Fiscais
                            </a></li>
                            </ul>
                            }
                            />
                        </div>
                        <div className="ModuleText">
                            <CFModulo
                            texto={<span>O <a href='https://vhsys.com.br/controle-financeiro/'>Controle Financeiro</a> do sistema de gestão VHSYS te ajuda saber de onde vem e para onde vai o dinheiro do seu negócio. Desta forma, você consegue aumentar o lucro da empresa identificando quais são os gargalos que te fazem perder dinheiro e onde você pode investir mais para melhorar os resultados.</span>}
                            chamada='Conheça alguns diferenciais da VHSYS para o Controle Financeiro do seu negócio:'
                            titulo='Controle Financeiro'
                            ico01='ico-receba-ja'
                            icoLink01='/loja-de-aplicativos/antecipacao-de-recebiveis/'
                            icoTag01='Receba Já'
                            ico02='ico-cobrancas'
                            icoLink02='/loja-de-aplicativos/sistema-cobrancas/'
                            icoTag02='Cobranças'
                            ico03='ico-multi_empresas'
                            icoLink03='/loja-de-aplicativos/multi-empresas/'
                            icoTag03='Multi Empresas'
                            lista={
                            <ul>
                                <li><a href='https://vhsys.com.br/controle-financeiro/contas-a-pagar/'>
                                    Contas a Pagar
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/contas-a-receber/'>
                                    Contas a Receber
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/dre-demonstrativo-do-resultado-do-exercicio/'>
                                    DRE Gerencial
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/fluxo-de-caixa/'>
                                    Fluxo de Caixa
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/conciliacao-bancaria/'>
                                    Conciliação Bancária OFX
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/gerenciamento-de-servicos-recorrentes/'>
                                    Serviços Recorrentes
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/gestao-de-custo/'>
                                    Gestão de Custo
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/controle-de-contas-bancarias/'>
                                    Controle de Contas Bancárias
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-financeiro/relatorios-financeiros/'>
                                    Relatórios Financeiros
                                </a></li>
                            </ul>
                            }
                            />
                        </div>
                        <div className="ModuleText">
                            <CFModulo
                            texto={<span>Faça igual as melhores lojas do Brasil e facilite o <a href='https://vhsys.com.br/controle-de-vendas/'>Controle de Vendas</a> da sua empresa com os recursos e ferramentas do VHSYS. Com ele você pode controlar os dados de negócios da sua empresa totalmente online e com as melhores funcionalidades do mercado. Tudo isso de forma simples e em um só programa.</span>}
                            chamada='Conheça as vantagens de ter um sistema de Controle de Vendas Online:'
                            titulo='Controle de Vendas'
                            ico01='ico-funil'
                            icoLink01='/loja-de-aplicativos/funil-de-vendas-crm/'
                            icoTag01='Funil de Vendas'
                            ico02='ico-mercado_livre'
                            icoLink02='/loja-de-aplicativos/integracao-mercado-livre/'
                            icoTag02='Mercado Livre'
                            ico03='ico-boleto_facil'
                            icoLink03='/loja-de-aplicativos/boleto-facil/'
                            icoTag03='Boleto Fácil'
                            lista={
                            <ul>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/sistema-crm/'>
                                    Sistema CRM;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/emissor-de-boleto-de-vendas/'>
                                    Emissor de Boletos;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/orcamentos-de-vendas/'>
                                    Orçamento de Vendas;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/emissao-de-pedidos/'>
                                    Emissão de Pedidos;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/gestao-de-clientes/'>
                                    Cadastro de Clientes;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/gestao-de-vendedores/'>
                                    Gestão de Vendedores;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/proposta-comercial/'>
                                    Proposta Comercial;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/emissor-de-recibo/'>
                                    Emissor de Recibos;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/ordem-de-servico/'>
                                    Ordem de Serviço;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/relatorio-de-vendas/'>
                                    Relatório de Vendas.
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-vendas/sistema-de-pdv-ponto-de-venda/'>
                                    Sistema PDV;
                                </a></li>
                            </ul>
                            }
                            />
                        </div>
                        <div className="ModuleText">
                            <CFModulo
                            texto={<span>Faça o <a href='https://vhsys.com.br/controle-de-estoque/'>Controle de Estoque</a> de maneira moderna e agilize seu trabalho. Com ele você gerencia produtos, recebe informações em tempo real sobre a quantidade e variedade de mercadorias que sua empresa possui. Com o Controle de Estoque da VHSYS seu negócio evita desperdício e sai ganhando!</span>}
                            chamada='Conheça as vantagens de ter um programa de Controle de Estoque online:'
                            titulo='Controle de Estoque'
                            ico01='ico-expedicao'
                            icoLink01='/loja-de-aplicativos/expedicao/'
                            icoTag01='Expedição'
                            ico02='ico-controle_bens'
                            icoLink02='/loja-de-aplicativos/controle-de-bens/'
                            icoTag02='Controle de Bens'
                            ico03='ico-etiquetas'
                            icoLink03='/loja-de-aplicativos/etiquetas/'
                            icoTag03='Etiquetas'
                            lista={
                            <ul>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/giro-de-estoque/'>
                                    Giro de Estoque;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/cadastro-de-produtos/'>
                                    Cadastro de Produtos;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/cadastro-de-fornecedores/'>
                                    Cadastro de Fornecedores;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/cadastro-de-transportadoras/'>
                                    Cadastro de Transportadoras;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/controle-de-compras/'>
                                    Controle de Compras;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/nota-fiscal-de-entrada/'>
                                    Nota Fiscal de Entrada;
                                </a></li>
                                <li><a href='https://vhsys.com.br/controle-de-estoque/relatorio-de-estoque/'>
                                    Relatório de Estoque.
                                </a></li>
                            </ul>
                            }
                            />
                        </div>
                    </Slider>
                </article>
            <style jsx>{`
                section {
                    width:100%;
                    max-width:1100px;
                    margin:auto;
                    padding-bottom:60px;
                }
                article {
                    max-width: calc(50% - 52px);
                    display:inline-block;
                    vertical-align: top;
                    padding:0 25px;
                    margin:20px 0;
                }
                article.funcionalidadesText {
                    border-left:1px solid #b0b0b0;
                }
                div {
                    outline: 0;
                }
                .homeFuncionalidadesSlider {
                    padding-top: 80px;
                    position:relative;
                    cursor:pointer;
                }
                .homeFuncionalidadesSlider::before {
                    content:'';
                    border-bottom:3px solid #777;
                    border-left:3px solid #777;
                    position: absolute;
                    bottom: 25%;
                    left: 31%;
                    width: 10px;
                    height: 10px;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    -webkit-pointer-events: none;       
                    -moz-pointer-events: none;
                    -ms-pointer-events: none;
                    pointer-events: none;
                    z-index:5;
                }
                .homeFuncionalidadesSlider::after {
                    content:'';
                    border-top:3px solid #777;
                    border-right:3px solid #777;
                    position: absolute;
                    bottom: 25%;
                    right: 31%;
                    width: 10px;
                    height: 10px;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    -webkit-pointer-events: none;       
                    -moz-pointer-events: none;
                    -ms-pointer-events: none;
                    pointer-events: none;
                    z-index:5;
                }
                .homeFuncionalidadesSlide:focus {
                    outline: 0;
                }
                .homeFuncionalidadesSlide img {
                    width:50%;
                    margin:120px auto 0;
                    filter: blur(2px);
                    transition:0.2s;
                    opacity: 0.4;
                }
                .homeFuncionalidadesSlide h5 {
                    position: absolute;
                    width: calc(100% - 30px);
                    top: 60px;
                    left: 0;
                    font-size: 0.9rem;
                    line-height: 0.9rem;
                    text-align: center;
                    margin: 0;
                    color: #3f68a8;
                    transition:0.2s;
                    padding: 15px;
                    opacity:0.8;
                }
                div.ModuleText {
                    width:100%;
                }
                div.ModuleText ul {
                    list-style: none;
                    padding:0;
                    width:100%;
                }
                div.ModuleText li {
                    list-style: none;
                    padding: 0 5% 0 0;
                    display: inline-block;
                    width: 45%;
                    min-width: 200px;
                    vertical-align: top;
                    font-size:0.9rem;
                    line-height:1.2rem;
                }
                div.ModuleText a {
                    color: #1a9ea5;
                    background-color: #ffffff;
                    text-decoration:none;
                    cursor:pointer;
                    font-weight:400;
                    transition:0.2s;
                }
                div.ModuleText li a {
                    padding: 0 0 7px 20px;
                    position: relative;
                    display:block;
                    width: 100%;
                }
                div.ModuleText a:hover {
                    color: #567ab2;
                    text-decoration:underline;
                }
                div.ModuleText li a:before {
                    content:'';
                    width:1em;
                    height:1em;
                    position: absolute;
                    top: 0.1em;
                    left:0;
                    background: url('./static/images/layouts/home/list-ico.jpg');
                    background-position:center;
                    background-repeat:no-repeat;
                }
                @media (max-width:1050px) {
                    article {
                        width:600px;
                        max-width: calc(100% - 70px);
                        display: block;
                        padding: 20px 25px;
                        margin:auto;
                    }
                    article.funcionalidadesText {
                        border-left:1px solid transparent;
                    }
                }
            `}</style>
            </section>
        );
    }
}

export default CarosselFuncionalidades