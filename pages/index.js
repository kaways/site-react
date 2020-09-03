import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import Head from 'next/head';
import TopBanner from "../components/promos/TopBanner";
import BottomBlue from "../components/bars/BottomBlue";
import MenuLight from "../components/menus/MenuLight";
import HeaderHomeDefault from '../components/home/HeaderHomeDefault';
import DefaultH2 from '../components/titulos/DefaultH2';
import DefaultH2comLink from '../components/titulos/DefaultH2comLink';
import CarosselFuncionalidadesNew from '../components/dinamico/CarosselFuncionalidadesNew';
import DefaultCta from '../components/cta/DefaultCta';
import CarosseLojaApps from '../components/dinamico/CarosseLojaApps';
import TabelaDefaultDm from '../components/tabelas/TabelaDefaultDm';
import DepoimentosHome from '../components/home/DepoimentosHome';
import GetTheApp from '../components/home/GetTheApp';
import PorqueVHSYS from '../components/home/PorqueVHSYS';
import UltimasBlog from '../components/home/UltimasBlog';
import CarosselNaMidia from '../components/dinamico/CarosselNaMidia';
import RodapeDefault from '../components/rodape/RodapeDefault';
import RodapeEssential from '../components/rodape/RodapeEssential';

class Homepage extends React.Component {
    static async getInitialProps(ctx) {
        const gotNookies = parseCookies(ctx)
        // ------------------------------------------------
        // Promo Setup
        // ------------------------------------------------
        let promo = {
            f30: {
                start: new Date('02/17/2019 11:00:00'),
                end: new Date('03/01/2019 11:00:00')
            },
            f10: {
                start: new Date('02/01/2019 11:00:00'),
                end: new Date('03/25/2019 11:00:00')
            }
        }
        let promoNow = false
        if (new Date() > promo.f30.start && new Date() < promo.f30.end) { promoNow = 'default-30' }
        else if (new Date() > promo.f10.start && new Date() < promo.f10.end) { promoNow = 'default-10' }
    
        // ------------------------------------------------
        // User dataLayer Buildup
        // ------------------------------------------------
        let userData
        let tagManagerArgs = {
            gtmId: 'GTM-PM7PS6M',
            dataLayer: {
                pageType: 'Home',
                contentType: 'Home',
            }
        }
        if(gotNookies.userData) {
            userData =  JSON.parse(unescape( gotNookies.userData ) )
            
            tagManagerArgs.dataLayer.userId = userData.userId
            tagManagerArgs.dataLayer.userWorkWith = userData.userWorkWith
            tagManagerArgs.dataLayer.userActivity = userData.userActivity
            tagManagerArgs.dataLayer.userCompanySize = userData.userCompanySize
            tagManagerArgs.dataLayer.userInvoicesNumber = userData.userInvoicesNumber
            tagManagerArgs.dataLayer.userPlan = userData.userPlan
            tagManagerArgs.dataLayer.userTotalApps = userData.userTotalApps
            tagManagerArgs.dataLayer.userAppsNames = userData.userAppsNames
            tagManagerArgs.dataLayer.userType = userData.userType
        } else {
            tagManagerArgs.dataLayer.userType = 'Visitante'
        }

        // ------------------------------------------------
        // If PriceTable onScreen
        // ------------------------------------------------
        tagManagerArgs.dataLayer.ecommerce = {
            currencyCode: 'BRL',
            impressions:
            [
                {'name': 'BRONZE','id': 'REF','price': '958.8','brand': 'Anual','category': 'Anual','list': 'Home','position': 1},
                {'name': 'PRATA','id': 'REF','price': '1198.8','brand': 'Anual','category': 'Anual','list': 'Home','position': 2},
                {'name': 'OURO','id': 'REF','price': '2038.8','brand': 'Anual','category': 'Anual','list': 'Home','position': 3},
                {'name': 'PLATINA','id': 'REF','price': '3118.8','brand': 'Anual','category': 'Anual','list': 'Home','position': 4},
                {'name': 'DIAMANTE','id': 'REF','price': '3598.8','brand': 'Anual','category': 'Anual','list': 'Home','position': 5}
            ]
        }

        return { 'promoNow': promoNow, 'tagManagerArgs': tagManagerArgs, 'userData': userData }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        TagManager.initialize(this.props.tagManagerArgs)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>VHSYS | Sistema de Gestão Empresarial</title>
                    <meta name="description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais."/>
                    <link rel="canonical" href="https://vhsys.com.br/" />
                    <meta property="og:title" content="VHSYS - Sistema de Gestão" />
                    <meta property="og:description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais." />
                    <meta name="google-site-verification" content="QupQLuuNyV3gAAkapKoUgNggbsdyzNpSDWw6hERsh3s" />
                </Head>
                <TopBanner promoTag={this.props.promoNow}/>
                <MenuLight />
                <HeaderHomeDefault />
                <DefaultH2comLink
                    titulo='Gestão completa e eficiente!'
                    subtitulo1='No VHSYS você tem todas as ferramentas para gerenciar o seu negócio e, ainda, '
                    textolink='personaliza o sistema'
                    url='/loja-de-aplicativos/'
                    subtitulo2=' com aplicativos que mais se adaptam ao que você precisa.'
                />
                <CarosselFuncionalidadesNew />
                <DefaultCta
                    tipo='ligue'
                    chamada='Solicite agora uma ligação e descubra como tornar a  gestão do seu negócio mais eficiente.'
                    bg_color='blue'
                />
                <DefaultH2
                    titulo='Ferramentas adicionais de acordo com sua necessidade'
                    subtitulo='O VHSYS é totalmente personalizável e adaptável. Somos o único sistema de gestão que possui uma loja de aplicativos integrada. Com ela você pode ampliar as ferramentas de gestão conforme as necessidades específicas do seu negócio.'
                />
                <CarosseLojaApps />
                <DepoimentosHome />
                <DefaultH2
                    titulo='Programa de gestão empresarial que se adapta a qualquer tipo de negócio'
                    subtitulo='Escolha o plano conforme sua necessidade e tenha uma nova experiência de gestão. Mais praticidade, rapidez e controle sobre o seu negócio!'
                />
                <TabelaDefaultDm parentPageRef='Home' />
                <DefaultH2
                    titulo='Controle o seu negócio de onde estiver'
                    subtitulo='Você acessa o VHSYS de qualquer dispositivo, seja computador, notebook, tablet ou celular.'
                />
                <GetTheApp />
                <DefaultCta
                    tipo='experimente'
                    chamada='Torne a gestão do seu negócio mais simples e ágil com todos os módulos integrados'
                    bg_color='blue'
                    botao2={true}
                    texto_con='Contrate Agora!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <PorqueVHSYS />
                <DefaultH2
                    titulo='Últimas do Blog'
                />
                <UltimasBlog />
                <CarosselNaMidia />
                <DefaultCta
                    tipo='experimente'
                    chamada='Sua empresa tem muito a crescer. Nós podemos ajudar!'
                    bg_color='yellow'
                    botao2={true}
                    texto_con='Contrate Agora!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <BottomBlue />
                <RodapeDefault />
                <RodapeEssential />
            </div>
        )
    }
}

export default withRouter(Homepage);