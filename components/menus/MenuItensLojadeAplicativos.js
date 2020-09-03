class MenuItensLojadeAplicativos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: 'container'
            };
            this.onEnter = this.onEnter.bind(this);
            this.onLeave = this.onLeave.bind(this);
            this.openLoja = this.openLoja.bind(this);
            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        }

        componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        }

        onEnter() {
            if (this.state.width > 860) {
                this.setState({
                    visible: 'container visible'
                })
            }
        }

        onLeave() {
            if (this.state.width > 860) {
                this.setState({
                    visible: 'container'
                })
            }
        }
        openLoja() {
            if (this.state.width <= 860) {
                if (this.state.visible == 'container visible') {
                    this.setState({
                        visible: 'container'
                    })
                } else {
                    this.setState({
                        visible: 'container visible'
                    })
                }
            }
        }

        render() {
            return (
            <div>
                <ol>
                    <h4>
                    Integrações
                    </h4>
                    <li><a href="/loja-de-aplicativos/meus-pedidos/">
                    Mercos
                    </a></li>
                    <li><a href="/loja-de-aplicativos/integracao-mercado-livre/">
                    Mercado Livre
                    </a></li>
                    <li><a href="/loja-de-aplicativos/boleto-facil/">
                    Boleto Fácil
                    </a></li>
                    <li><a href="/loja-de-aplicativos/erp-integracao-gerencianet/">
                    Gerencianet
                    </a></li>
                    <li><a href="/loja-de-aplicativos/erp-integracao-xtech/">
                    Xtech
                    </a></li>
                    <p><a href="/loja-de-aplicativos/">
                    <b>+</b> Veja mais aplicativos
                    </a></p>
                    {/*
                    <li><a href="/loja-de-aplicativos/erp-integracao-woocommerce/">
                    WooCommerce
                    </a></li>
                    <li><a href="/loja-de-aplicativos/erp-integracao-nuvem-shop/">
                    Nuvem Shop
                    </a></li>
                    <li><a href="/loja-de-aplicativos/erp-integracao-olist/">
                    Olist
                    </a></li>
                    <li><a href="/loja-de-aplicativos/integracao-rd-station/">
                    RD Station
                    </a></li>
                    <li><a href="/loja-de-aplicativos/venda-mais/">
                    Venda+
                    </a></li>
                    <li><a href="/loja-de-aplicativos/integracao-magento/">
                    Magento
                    </a></li>
                    <li><a href="/loja-de-aplicativos/tray/">
                    Loja Tray
                    </a></li>
                    <li><a href="/loja-de-aplicativos/loja-integrada/">
                    Loja Integrada
                    </a></li>
                    <li><a href="/loja-de-aplicativos/integracao-opencart/">
                    Open Cart
                    </a></li>
                    <li><a href="/loja-de-aplicativos/loja-virtual/">
                    Loja Virtual VHSYS
                    </a></li>
                    <li><a href="/loja-de-aplicativos/integracao-via-api/">
                    API VHSYS
                    </a></li> */}
                </ol>
                <ol>
                    <h4>
                    Comunicação
                    </h4>
                    <li><a href="/loja-de-aplicativos/envio-sms/">
                    Envio de SMS
                    </a></li>
                    <li><a href="/loja-de-aplicativos/email-marketing/">
                    E-mail Marketing
                    </a></li>
                    <li><a href="/loja-de-aplicativos/vhdesk/">
                    VH Desk
                    </a></li>
                    <li><a href="/loja-de-aplicativos/sistema-aniversariantes/">
                    Aniversário
                    </a></li>
                    <li><a href="/loja-de-aplicativos/avisos-internos/">
                    Avisos Internos
                    </a></li>
                    <p><a href="/loja-de-aplicativos/">
                    <b>+</b> Veja mais aplicativos
                    </a></p>
                </ol>
                <ol>
                    <h4>
                    Gestão
                    </h4>
                    <li><a href="/loja-de-aplicativos/antecipacao-de-recebiveis/">
                    Antecipação de Recebíveis
                    </a></li>
                    <li><a href="/loja-de-aplicativos/gerenciador-de-assinaturas-e-servicos-recorrentes/">
                    Gerenciador de Assinaturas
                    </a></li>
                    <li><a href="/loja-de-aplicativos/funil-de-vendas-crm/">
                    Funil de Vendas
                    </a></li>
                    <li><a href="/loja-de-aplicativos/sistema-para-locacoes/">
                    Sistema para Locações
                    </a></li>
                    <li><a href="/loja-de-aplicativos/consulta-cpf-e-cnpj/">
                    Consultas CPF/CNPJ
                    </a></li>
                    <p><a href="/loja-de-aplicativos/">
                    <b>+</b> Veja mais aplicativos
                    </a></p>
                    {/*
                    <li><a href="/loja-de-aplicativos/agenda/">
                    Agenda
                    </a></li>
                    <li><a href="/loja-de-aplicativos/controle-de-bens/">
                    Controle de Bens
                    </a></li>
                    <li><a href="/loja-de-aplicativos/controle-de-funcionarios/">
                    Funcionários
                    </a></li>
                    <li><a href="/loja-de-aplicativos/etiquetas/">
                    Etiquetas
                    </a></li>
                    <li><a href="/loja-de-aplicativos/gestao-de-projetos/">
                    Gestão de Projetos
                    </a></li>
                    <li><a href="/loja-de-aplicativos/sistema-cobrancas/">
                    Cobranças
                    </a></li>
                    <li><a href="/loja-de-aplicativos/cotacoes/">
                    Cotações
                    </a></li>
                    <li><a href="/loja-de-aplicativos/expedicao/">
                    Expedição
                    </a></li>
                    <li><a href="/loja-de-aplicativos/rastreamento/">
                    Rastreamento
                    </a></li>
                    <li><a href="/loja-de-aplicativos/pesquisa/">
                    Pesquisa
                    </a></li>
                    <li><a href="/loja-de-aplicativos/multi-empresas/">
                    Multi Empresas
                    </a></li> */}
                </ol>
                <ol>
                    <h4>
                    Controle Fiscal
                    </h4>
                    <li><a href="/loja-de-aplicativos/backup-nfe/">
                    Backup NFe
                    </a></li>
                    <li><a href="/loja-de-aplicativos/emissor-darf/">
                    Emissor DARF
                    </a></li>
                    <li><a href="/loja-de-aplicativos/icms-st/">
                    ICMS-ST
                    </a></li>
                    <li><a href="/loja-de-aplicativos/comprovantes/">
                    Comprovantes
                    </a></li>
                    <li><a href="/loja-de-aplicativos/vh-drive/">
                    VHDrive
                    </a></li>
                    <p><a href="/loja-de-aplicativos/">
                    <b>+</b> Veja mais aplicativos
                    </a></p>
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
                        font-family: 'Titillium Web', sans serif;
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
                        font-size:1.2rem;
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

export default MenuItensLojadeAplicativos