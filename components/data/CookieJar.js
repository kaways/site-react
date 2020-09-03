import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'

class CookieJar extends React.Component {
    // ------------------------------------------------
    // User Data Treatment (Cookies & dataLayer)
    // ------------------------------------------------
    static async getInitialProps(ctx) {

        const gotNookies = parseCookies(ctx)
        const fullPath = encodeURIComponent('vhsys.com.br'+ctx.asPath)
        // ------------------------------------------------
        // Cookies set
        // ------------------------------------------------
        if(gotNookies.origemAcesso) {
            if (ctx.query.utm_source || ctx.query.int_source || ctx.query.intCamp || ctx.query.parceiro || ctx.query.contabilidade || ctx.query.cupom ) {
                setCookie(ctx, 'origemAcesso', fullPath, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    domain: 'vhsys.com.br'
                })
            }
        } else {
            if (ctx.query.utm_source || ctx.query.int_source || ctx.query.intCamp || ctx.query.parceiro || ctx.query.contabilidade || ctx.query.cupom ) {
                setCookie(ctx, 'origemAcesso', fullPath, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    domain: 'vhsys.com.br'
                })
            } else {
                setCookie(ctx, 'origemAcesso', 'vhsys.com.br', {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    domain: 'vhsys.com.br'
                })
            }
        }
        if  (ctx.query.cupom) {
            setCookie(ctx, 'trial_cupom', ctx.query.cupom, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.parceiro) {
            setCookie(ctx, 'trial_parceiro', ctx.query.parceiro, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.contabilidade) {
            setCookie(ctx, 'trial_contabilidade', ctx.query.contabilidade, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.alice) {
            setCookie(ctx, 'trial_contabilidade', ctx.query.alice, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.email_empresa) {
            setCookie(ctx, 'trial_empresa', ctx.query.email_empresa, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                domain: 'vhsys.com.br'
            })
        }
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

        let promo = {
            j30: {
                start: new Date('01/10/2019 00:00:00'),
                // end: new Date('01/30/2019 13:23:00')
                end: new Date('02/01/2019 00:00:00')
            },
            f10: {
                start: new Date('02/01/2019 00:00:00'),
                // start: new Date('01/30/2019 13:23:00'),
                end: new Date('02/28/2019 00:00:00')
            }
        }
        let promoNow = false
        if (new Date() > promo.f10.start && new Date() < promo.f10.end) { promoNow = 'default-10' }
        else if (new Date() > promo.j30.start && new Date() < promo.j30.end) { promoNow = 'default-30' }

        return { 'tagManagerArgs': tagManagerArgs, 'promoNow': promoNow, 'userData': userData }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // TagManager.initialize(this.props.tagManagerArgs)
    }

    render() {
        return (<div></div>)
    }
}

export default withRouter(CookieJar);