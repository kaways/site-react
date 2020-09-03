import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

function chooseRequire(imgName) {
    switch(imgName) {
        case 'ico-nuvem_shop': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-nuvem_shop.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-nuvem_shop.png')
        }
        case 'ico-controle_bens': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-controle_bens.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-controle_bens.png')
        }
        case 'ico-email_marketing': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-email_marketing.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-email_marketing.png')
        }
        case 'ico-funcionarios': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-funcionarios.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-funcionarios.png')
        }
        case 'ico-sms': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-sms.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-sms.png')
        }
        case 'ico-olist': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-olist.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-olist.png')
        }
        case 'ico-controle_bens': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-controle_bens.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-controle_bens.png')
        }
        case 'ico-mercado_livre': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-mercado_livre.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-mercado_livre.png')
        }
        case 'ico-vhdrive': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-vhdrive.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-vhdrive.png')
        }
        case 'ico-avisos_internos': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-avisos_internos.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-avisos_internos.png')
        }
        case 'ico-boleto_facil': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-boleto_facil.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-boleto_facil.png')
        }
        case 'ico-locacoes': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-locacoes.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-locacoes.png')
        }
        case 'ico-vhdesk': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-vhdesk.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-vhdesk.png')
        }
        case 'ico-rd_station': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-rd_station.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-rd_station.png')
        }
        case 'ico-cobrancas': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-cobrancas.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-cobrancas.png')
        }
        case 'ico-backup_nfe': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-backup_nfe.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-backup_nfe.png')
        }
        case 'ico-woocommerce': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-woocommerce.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-woocommerce.png')
        }
        case 'ico-funil': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-funil.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-funil.png')
        }
        case 'ico-icms_st': return {
            'webp':require('../../static/images/icons/loja_apps_round/ico-icms_st.png?webp'),
            'png':require('../../static/images/icons/loja_apps_round/ico-icms_st.png')
        }
    }
}

class SliderModule extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const headerSrc = chooseRequire(this.props.img)
        return (
            <a href={ this.props.url }>
                <div className='moduleCont'>
                    <LazyLoad once height={'83'}><picture>
                        <source srcSet={headerSrc.webp} type="image/webp" />
                        <source srcSet={headerSrc.png} type="image/png" />
                        <img alt='header-bg' title='header-bg' width='auto' height='83px' src={headerSrc.png} />
                    </picture></LazyLoad>
                    <p>
                        { this.props.titulo }
                    </p>
                    <span>
                        { this.props.texto }
                    </span>
                </div>
            <style jsx>{`
                a {
                    text-decoration:none;
                }
                div.moduleCont {
                    width: 220px;
                    height: 220px;
                    text-align: center;
                    padding: 0;
                    vertical-align: top;
                }
                div.moduleCont img {
                    display: inline-block;
                    transform: translateY(40px);
                    transition: transform 0.3s;
                }
                div.moduleCont:hover img {
                    transform: translateY(0);
                    transition: transform 0.3s;
                }
                p {
                    display:block;
                    margin: 0;
                    padding: 0;
                    transform: translateY(30px);
                    opacity: 1;
                    transition: transform 0.2s 0.1s, opacity 0.2s;
                    color: #174676;
                    font-weight: 600;
                    font-size: 1.2rem;
                }
                div.moduleCont:hover > p {
                    transform: translateY(0);
                    opacity: 1;
                    transition: transform 0.3s, opacity 0.2s 0.1s;
                }
                span {
                    display:block;
                    margin: 0;
                    padding: 0;
                    opacity: 0;
                    font-weight: 400;
                    font-size: 0.9rem;
                    color:#777777;
                }
                div.moduleCont:hover > span {
                    opacity: 1;
                    transition: transform 0.3s, opacity 0.2s 0.1s;
                }
                @media (max-width: 1180px) {
                    div.moduleCont p {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    div.moduleCont img {
                        transform: translateY(0);
                    }
                    div.moduleCont span {
                        opacity: 1;
                    }
                }
            `}</style>
            </a>
        )
    }
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><span></span>
            <style jsx>{`
                div {
                    position: absolute;
                    top: calc(50% - 15px);
                    left: 40px;
                    width: 40px;
                    height: 40px;
                    color: transparent;
                    background-color: transparent;
                    border: 2px solid #174676;
                    border-radius:30px;
                    opacity: 0.5;
                    z-index:1;
                    transition:0.3s;
                    cursor:pointer;
                }
                div:hover {
                    background-color:  #174676;
                }
                div:hover span{
                    border-top:3px solid #ffffff;
                    border-left:3px solid #ffffff;
                }
                span {
                    position:absolute;
                    width:15px;
                    height:15px;
                    top:11px;
                    left:15px;
                    border-top:3px solid #174676;
                    border-left:3px solid #174676;
                    transform:rotate(-45deg);
                    transition:0.3s;
                }
            `}</style>
        </div>
    );
}
function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><span></span>
            <style jsx>{`
                div {
                    position: absolute;
                    top: calc(50% - 15px);
                    right: 40px;
                    width: 40px;
                    height: 40px;
                    color: transparent;
                    background-color: transparent;
                    border: 2px solid #174676;
                    border-radius:30px;
                    opacity: 0.5;
                    z-index:1;
                    transition:0.3s;
                    cursor:pointer;
                }
                div:hover {
                    background-color:  #174676;
                }
                div:hover span{
                    border-top:3px solid #ffffff;
                    border-left:3px solid #ffffff;
                }
                span {
                    position:absolute;
                    width:15px;
                    height:15px;
                    top:11px;
                    right:15px;
                    border-top:3px solid #174676;
                    border-left:3px solid #174676;
                    transform:rotate(135deg);
                    transition:0.3s;
                }
            `}</style>
        </div>
    );
}

class CarosseLojaApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLA1: null,
            navLA2: null,
            navLA3: null,
            navLA4: null,
            navLA5: null,
            navLA6: null,
            navLA7: null
        };
    }

    componentDidMount() {
        this.setState({
            navLA1: this.slider1,
            navLA2: this.slider2,
            navLA3: this.slider3,
            navLA4: this.slider4,
            navLA5: this.slider5,
            navLA6: this.slider6,
            navLA7: this.slider7,
        });
    }

    render() {
        const settings = {
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };
        return (
            <section className="carLojaAppsHome">
                <article>
                    <div className="sliderCentral">
                        <Slider
                            asNavFor={this.state.navLA2}
                            ref={slider => (this.slider1 = slider)}
                            slidesToShow={1}
                            swipeToSlide={false}
                            arrows={true}
                            draggable={false}
                            fade={true}
                            {...settings}
                        >
                            <div>
                                <h4>Integrações</h4>
                                <LazyLoad once height={342}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/integracoes.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/integracoes.png')} type="image/png" />
                                    <img alt='integracoes' title='integracoes' width='400px' height='342px' src={require('../../static/images/uniqueComponents/homeLojaAppsModule/integracoes.png')} />
                                </picture></LazyLoad>
                            </div>
                            <div>
                                <h4>Gestão</h4>
                                <LazyLoad once height={342}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/gestao.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/gestao.png')} type="image/png" />
                                    <img alt='gestao' title='gestao' width='400px' height='342px' src={require('../../static/images/uniqueComponents/homeLojaAppsModule/gestao.png')} />
                                </picture></LazyLoad>
                            </div>
                            <div>
                                <h4>Comunicação/Controle Fiscal</h4>
                                <LazyLoad once height={342}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/comunicacao.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/homeLojaAppsModule/comunicacao.png')} type="image/png" />
                                    <img alt='comunicacao' title='comunicacao' width='400px' height='342px' src={require('../../static/images/uniqueComponents/homeLojaAppsModule/comunicacao.png')} />
                                </picture></LazyLoad>
                            </div>
                        </Slider>
                    </div>
                </article>
                <article className="sliderPeriferal">
                    <div className="sliderPeriferalPre">
                        <Slider
                            asNavFor= { this.state.navLA3}
                            ref= { slider => (this.slider2 = slider)}
                            arrows={false}
                            draggable={false}
                            speed={330}
                        >
                            <SliderModule
                                url='/loja-de-aplicativos/erp-integracao-nuvem-shop/'
                                img='ico-nuvem_shop'
                                titulo='Nuvem Shop'
                                texto='Emita NF e gerencie o faturamento, pedidos e estoque da loja virtual com um único sistema'
                            />
                            <SliderModule
                                url='/loja-de-aplicativos/controle-de-funcionarios/'
                                img='ico-funcionarios'
                                titulo='Funcionários'
                                texto='Recurso onde você faz o cadastro de funcionários e dá suporte ao RH'
                            />
                            <SliderModule
                                url='/loja-de-aplicativos/envio-sms/'
                                img='ico-sms'
                                titulo='Envio de SMS'
                                texto='Dispare dezenas de mensagens de texto ao mesmo tempo com baixo custo'
                            />
                        </Slider>
                    </div>
                    <div className="sliderPeriferalPre">
                        <Slider
                            asNavFor={this.state.navLA4}
                            ref={slider => (this.slider3 = slider)}
                            arrows={false}
                            draggable={false}
                            speed={360}
                        >
                        <SliderModule
                            url='/loja-de-aplicativos/erp-integracao-olist/'
                            img='ico-olist'
                            titulo='Olist'
                            texto='Venda seus produtos nos maiores e-commerces do Brasil e gerencie tudo pelo VHSYS'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/controle-de-bens/'
                            img='ico-controle_bens'
                            titulo='Controle de Bens'
                            texto='Supervisione todos os ativos da sua empresa e monitore a depreciação'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/email-marketing/'
                            img='ico-email_marketing'
                            titulo='E-mail Marketing '
                            texto='Comunique-se melhor com seus clientes, envie promoções com o e-mail marketing'
                        />
                        </Slider>
                    </div>
                    <div className="sliderPeriferalPre">
                        <Slider
                            asNavFor={this.state.navLA5}
                            ref={slider => (this.slider4 = slider)}
                            arrows={false}
                            draggable={false}
                            speed={400}
                        >
                        <SliderModule
                            url='/loja-de-aplicativos/integracao-mercado-livre/'
                            img='ico-mercado_livre'
                            titulo='Mercado Livre'
                            texto='Integre seu cadastro, publique anúncios e controle suas vendas pelo sistema'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/vh-drive/'
                            img='ico-vhdrive'
                            titulo='VH Drive'
                            texto='Centralize informações e arquivos digitais da sua empresa'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/avisos-internos/'
                            img='ico-avisos_internos'
                            titulo='Avisos Internos'
                            texto='Otimize a comunicação dentro da sua empresa com o aplicativo'
                        />
                        </Slider>
                    </div>
                    <div className="sliderPeriferalPre">
                        <Slider
                            asNavFor={this.state.navLA6}
                            ref={slider => (this.slider5 = slider)}
                            arrows={false}
                            draggable={false}
                            speed={430}
                        >
                        <SliderModule
                            url='/loja-de-aplicativos/boleto-facil/'
                            img='ico-boleto_facil'
                            titulo='Boleto Fácil'
                            texto='Emita boletos com facilidade e pague apenas pelos que forem compensados'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/sistema-para-locacoes/'
                            img='ico-locacoes'
                            titulo='Locações'
                            texto='Melhore sua produtividade e reduza a inadimplência com o app Locações'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/vhdesk/'
                            img='ico-vhdesk'
                            titulo='VH Desk'
                            texto='Tenha um canal de atendimento com seu cliente totalmente integrado ao VHSYS'
                        />
                        </Slider>
                    </div>
                    <div className="sliderPeriferalPre">
                        <Slider
                            asNavFor={this.state.navLA7}
                            ref={slider => (this.slider6 = slider)}
                            arrows={false}
                            draggable={false}
                            speed={300}
                        >
                        <SliderModule
                            url='/loja-de-aplicativos/integracao-rd-station/'
                            img='ico-rd_station'
                            titulo='RD Station'
                            texto='Organize seu funil de vendas integrando o RD Station ao VHSYS'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/sistema-cobrancas/'
                            img='ico-cobrancas'
                            titulo='Cobranças'
                            texto='Faça a gestão dos boletos, enviando automaticamente por SMS ou e-mail'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/backup-nfe/'
                            img='ico-backup_nfe'
                            titulo='Backup NFe'
                            texto='Tenha uma cópia de segurança das notas fiscais da sua empresa por prazo indeterminado'
                        />
                        </Slider>
                    </div>
                    <div className="sliderPeriferalPre">
                        <Slider
                            ref={slider => (this.slider7 = slider)}
                            asNavFor={this.state.navLA1}
                            arrows={false}
                            draggable={false}
                            speed={460}
                        >
                        <SliderModule
                            url='/loja-de-aplicativos/erp-integracao-woocommerce/'
                            img='ico-woocommerce'
                            titulo='WooCommerce'
                            texto='Gerencie o faturamento, estoque, financeiro e emita notas fiscais da sua loja virtual'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/funil-de-vendas-crm/'
                            img='ico-funil'
                            titulo='Funil de Vendas'
                            texto='Controle de todo o processo de vendas, metas de vendedores e atividades diárias'
                        />
                        <SliderModule
                            url='/loja-de-aplicativos/icms-st/'
                            img='ico-icms_st'
                            titulo='ICMS-ST'
                            texto='Realize o cálculo automático do ICMS-ST da sua empresa'
                        />
                        </Slider>
                    </div>
                </article>
                <article>
                    <p>
                        Inovamos para facilitar a forma como você gerencia o seu negócio!
                        <span><i></i></span>
                    </p>
                    <a href='/loja-de-aplicativos/'>Conheça todos os aplicativos do sistema</a>
                </article>
            <style jsx>{`
                section {
                    text-align: center;
                    width: 1000px;
                    margin: 0 auto;
                    max-width: 100%;
                }
                article {
                    text-align: center;
                    clear:both;
                }
                article.sliderPeriferal {
                    margin-top: -620px;
                    margin-bottom: 100px;
                }
                .sliderCentral {
                    display:inline-block;
                    width:560px;
                    margin-top: 180px;
                    max-width:100%;
                }
                .sliderCentral h4 {
                    font-size: 2.1rem;
                    font-weight: 600;
                    margin: 0 0 20px;
                    color: #011957;
                }
                .sliderCentral img {
                    display:inline-block;
                    max-width:90%;
                }
                .sliderPeriferalPre {
                    display:inline-block;
                    width:220px;
                }
                .sliderPeriferalPre:nth-child(1) {
                    margin-top:90px;
                    vertical-align:top;
                }
                .sliderPeriferalPre:nth-child(4) {
                    margin-top:90px;
                    vertical-align:top;
                }
                .sliderPeriferalPre:last-child {
                    margin-left:560px;
                }
                p {
                    margin:0;
                    padding:30px 0 0;
                    display: block;
                }
                a {
                    margin:30px 0 50px;
                    padding:10px 20px;
                    display: inline-block;
                    color:#174676;
                    background-color:#f8c34f;
                    border:0;
                    border-bottom: 3px solid #d8af33;
                    border-radius:40px;
                    font-weight:600;
                    text-decoration:none;
                    transition:0.2s;
                }
                a:hover{
                    background-color:#ffb411;
                }
                @media (max-width: 1180px) {
                    section {
                        width:800px;
                    }
                    article {
                        text-align: center;
                        clear:both;
                    }
                    article.sliderPeriferal {
                        margin-top:0;
                        margin-bottom: 20px;
                    }
                    .sliderCentral {
                        margin-top: 10px;
                    }
                    .sliderPeriferalPre{
                        margin-top:10px;
                    }
                    .sliderPeriferalPre:nth-child(1) {
                        margin-top:10px;
                        vertical-align:top;
                    }
                    .sliderPeriferalPre:nth-child(4) {
                        margin-top:10px;
                        vertical-align:top;
                    }
                    .sliderPeriferalPre:last-child {
                        margin-left:0;
                    }
                }
            `}</style>
            </section>
        );
    }
}

export default CarosseLojaApps