import LazyLoad from 'react-lazyload'

class CFModulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="textCard">
                <p>
                    {this.props.texto}
                </p>
                <p>
                    {this.props.chamada}
                </p>
                {this.props.lista}
                <div className="moreApps">
                    <strong>Aplicativos para {this.props.titulo}:</strong>
                </div>
                <div className="moreApps right">
                    <a aria-label={this.props.icoTag01} href={this.props.icoLink01}>
                        <div className="tags">
                            <span>{this.props.icoTag01}</span>
                            <img alt={this.props.ico01} title={this.props.ico01} src={"./static/images/icons/loja_apps_square/"+this.props.ico01+".png"} />
                        </div>
                    </a>
                    <a aria-label={this.props.icoTag02} href={this.props.icoLink02}>
                        <div className="tags">
                            <span>{this.props.icoTag02}</span>
                            <img alt={this.props.ico02} title={this.props.ico02} src={"./static/images/icons/loja_apps_square/"+this.props.ico02+".png"} />
                        </div>
                    </a>
                    <a aria-label={this.props.icoTag03} href={this.props.icoLink03}>
                        <div className="tags">
                            <span>{this.props.icoTag03}</span>
                            <img alt={this.props.ico03} title={this.props.ico03} src={"./static/images/icons/loja_apps_square/"+this.props.ico03+".png"} />
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
    }
}

class CarosselFuncionalidadesNew extends React.Component {
    constructor(props) {
        super(props);

        this.forwardSLide = this.forwardSLide.bind(this);
        this.backSLide = this.backSLide.bind(this);
        
        this.state = {
            firstSlide:'first',
            secondSlide:'second',
            thirdSlide:'third',
            fourthSlide:'fourth',
            timer: true
        };
    }
    
    forwardSLide() {
        if(this.state.timer) {
            if(this.state.firstSlide == 'first') {
                this.setState({firstSlide:'fourth',secondSlide:'first',thirdSlide:'second',fourthSlide:'third',timer:false})
            } else if(this.state.firstSlide == 'second') {
                this.setState({firstSlide:'first',secondSlide:'second',thirdSlide:'third',fourthSlide:'fourth',timer:false})
            } else if(this.state.firstSlide == 'third') {
                this.setState({firstSlide:'second',secondSlide:'third',thirdSlide:'fourth',fourthSlide:'first',timer:false})
            } else if(this.state.firstSlide == 'fourth') {
                this.setState({firstSlide:'third',secondSlide:'fourth',thirdSlide:'first',fourthSlide:'second',timer:false})
            }
            setTimeout(function() {
                this.setState({timer: true})
            }.bind(this), 500)
        }
    }
    backSLide() {
        if(this.state.timer) {
            if(this.state.firstSlide == 'first') {
                this.setState({firstSlide:'second',secondSlide:'third',thirdSlide:'fourth',fourthSlide:'first',timer:false})
            } else if(this.state.firstSlide == 'second') {
                this.setState({firstSlide:'third',secondSlide:'fourth',thirdSlide:'first',fourthSlide:'second',timer:false})
            } else if(this.state.firstSlide == 'third') {
                this.setState({firstSlide:'fourth',secondSlide:'first',thirdSlide:'second',fourthSlide:'third',timer:false})
            } else if(this.state.firstSlide == 'fourth') {
                this.setState({firstSlide:'first',secondSlide:'second',thirdSlide:'third',fourthSlide:'fourth',timer:false})
            }
            setTimeout(function() {
                this.setState({timer: true})
            }.bind(this), 500)
        }
    }

    BackSLide() {
        this.setState({visible: 'close'})
    }

    render() {
        return (
            <section>
                <article className="homeFuncionalidadesSlider">
                    <div className={"homeFuncionalidadesSlide "+this.state.firstSlide}>
                        <h5>Emissor de Nota Fiscal</h5>
                        <LazyLoad once height={'150'}><picture>
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/EmissorNF.png?webp')}type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/EmissorNF.png')} type="image/png" />
                            <img alt='header-bg' title='header-bg' width='auto' height='150px' src={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/EmissorNF.png')} />
                        </picture></LazyLoad>
                    </div>
                    <div className={"homeFuncionalidadesSlide "+this.state.secondSlide}>
                        <h5>Controle Financeiro</h5>
                        <LazyLoad once height={'150'}><picture>
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleFinanceiro.png?webp')}type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleFinanceiro.png')} type="image/png" />
                            <img alt='header-bg' title='header-bg' width='auto' height='150px' src={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleFinanceiro.png')} />
                        </picture></LazyLoad>
                    </div>
                    <div className={"homeFuncionalidadesSlide "+this.state.thirdSlide}>
                        <h5>Controle de Vendas</h5>
                        <LazyLoad once height={'150'}><picture>
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/ControleVendas.png?webp')}type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/ControleVendas.png')} type="image/png" />
                            <img alt='header-bg' title='header-bg' width='auto' height='150px' src={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/ControleVendas.png')} />
                        </picture></LazyLoad>
                    </div>
                    <div className={"homeFuncionalidadesSlide "+this.state.fourthSlide}>
                        <h5>Controle de Estoque</h5>
                        <LazyLoad once height={'150'}><picture>
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleEstoque.png?webp')}type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleEstoque.png')} type="image/png" />
                            <img alt='header-bg' title='header-bg' width='auto' height='150px' src={require('../../static/images/uniqueComponents/homeFuncionalidadesCarossel/controleEstoque.png')} />
                        </picture></LazyLoad>
                    </div>
                    <span className="controlBack" onClick={this.backSLide}></span>
                    <span className="controlForward" onClick={this.forwardSLide}></span>
                </article>
                <article className="funcionalidadesText">
                    <div className={(this.state.firstSlide=='first')?'ModuleText visible':'ModuleText'}>
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
                    <div className={(this.state.secondSlide=='first')?'ModuleText visible':'ModuleText'}>
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
                    <div className={(this.state.thirdSlide=='first')?'ModuleText visible':'ModuleText'}>
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
                    <div className={(this.state.fourthSlide=='first')?'ModuleText visible':'ModuleText'}>
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
                </article>
            <style jsx>{`
                section {
                    width: 1100px;
                    max-width: 100%;
                    margin:auto;
                    padding-bottom:60px;
                    text-align: center;
                }
                article {
                    max-width: calc(50% - 52px);
                    display:inline-block;
                    vertical-align: top;
                    padding:0;
                    margin:20px 0;
                }
                article.funcionalidadesText {
                    border-left:1px solid #b0b0b0;
                    position:relative;
                    width: 459px;
                    padding: 0 20px;
                    max-width: calc(100% - 40px);
                }
                div {
                    outline: 0;
                }
                .homeFuncionalidadesSlider {
                    padding: 80px 20px 0;
                    position: relative;
                    cursor: pointer;
                    width: 560px;
                    max-width: calc(100% - 40px);
                    min-height:290px;
                    margin:0;
                    text-align:center;
                }
                span.controlBack {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 50%;
                }
                span.controlBack::before {
                    content:'';
                    border-radius: 8px 0px 8px 0;
                    background: radial-gradient(circle at right top,transparent 60%,#174676 64%,#174676 66%,transparent 70%,transparent 72%,#174676 76%);
                    position: absolute;
                    top: 210px;
                    right: 90px;  
                    width: 18px;
                    height: 18px;
                    transform: rotate(45deg);
                    pointer-events: none;
                    z-index:5;
                }
                span.controlForward {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 50%;
                }
                span.controlForward::before {
                    content:'';
                    border-radius: 8px 0px 8px 0;
                    background: radial-gradient(circle at left bottom,transparent 60%,#174676 64%,#174676 66%,transparent 70%,transparent 72%,#174676 76%);
                    position: absolute;
                    top: 210px;
                    left: 90px;
                    width: 18px;
                    height: 18px;
                    transform: rotate(45deg);
                    pointer-events: none;
                    z-index:5;
                }
                .homeFuncionalidadesSlide {
                    display:inline-block;
                    width: 180px;
                    height:260px;
                    position:absolute;
                    top:100px;
                    left:calc(50% - 90px);
                    transition:transform 0.3s linear;
                    opacity:1;
                }
                .homeFuncionalidadesSlide.first {
                    transform:translateX(-100%) translateZ(0);
                    transition:transform 0.3s linear, opacity 0s linear 0.3s;
                }
                .homeFuncionalidadesSlide.second {
                    transform:translateX(0) translateY(-50px) translateZ(0);
                }
                .homeFuncionalidadesSlide.third {
                    transform:translateX(100%) translateZ(0);
                    transition:transform 0.3s linear, opacity 0s linear 0.3s;
                }
                .homeFuncionalidadesSlide.fourth {
                    transform:translateX(0) translateZ(0);
                    opacity:0;
                    transition:transform 0s linear 0.3s, opacity 0.3s linear;
                }
                .homeFuncionalidadesSlide:focus {
                    outline: 0;
                }
                .homeFuncionalidadesSlide img {
                    width:50%;
                    height:auto;
                    margin:40px auto 0;
                    filter: blur(2px);
                    opacity: 0.4;
                    transition:all 0.3s linear;
                }
                .homeFuncionalidadesSlide h5 {
                    font-size: 0.9rem;
                    line-height: 0.9rem;
                    text-align: center;
                    margin: 0;
                    color: #3f68a8;
                    padding: 15px;
                    opacity:0.8;
                    transition:all 0.2s linear;
                }
                .homeFuncionalidadesSlide.second h5{
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                    transition:all 0.2s linear;
                }
                .homeFuncionalidadesSlide.second img{
                    width:90%;
                    filter: blur(0);
                    transition:0.2s;
                    opacity: 1;
                    margin:20px auto 0;
                    transition:all 0.2s linear;
                }
                div.ModuleText {
                    width:100%;
                    opacity:0;
                    visibility:visible;
                    transform:translateX(100%);
                    position:absolute;
                    transition: opacity 0.2s linear, transform 0.01s 0.2s linear;
                }
                div.ModuleText.visible {
                    width:100%;
                    opacity:1;
                    visibility:visible;
                    transform:translateX(0);
                    position:relative;
                    transition: opacity 0.2s linear, transform 0s linear;
                }
                div.ModuleText ul {
                    text-align:left;
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
                @media (max-width:1120px) {
                    section article.funcionalidadesText {
                        border-left:1px solid #ffffff;
                    }
                    div.ModuleText ul {
                        text-align:center;
                    }
                }
            `}</style>
            </section>
        );
    }
}

export default CarosselFuncionalidadesNew