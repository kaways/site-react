// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        const gotNookies = parseCookies(ctx)
        const fullPath = 'vhsys.com.br'+ctx.asPath
        // ------------------------------------------------
        // Cookies set
        // ------------------------------------------------
        if(gotNookies.origemAcesso) {
            if (ctx.query.utm_source || ctx.query.int_source || ctx.query.intCamp || ctx.query.parceiro || ctx.query.contabilidade || ctx.query.cupom ) {
                setCookie(ctx, 'origemAcesso', fullPath, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    encode: decodeURIComponent,
                    // domain: 'vhsys.com.br'
                })
            }
        } else {
            if (ctx.query.utm_source || ctx.query.int_source || ctx.query.intCamp || ctx.query.parceiro || ctx.query.contabilidade || ctx.query.cupom ) {
                setCookie(ctx, 'origemAcesso', fullPath, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    encode: decodeURIComponent,
                    // domain: 'vhsys.com.br'
                })
            } else {
                setCookie(ctx, 'origemAcesso', 'vhsys.com.br', {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                    encode: decodeURIComponent,
                    // domain: 'vhsys.com.br'
                })
            }
        }
        if  (ctx.query.cupom) {
            setCookie(ctx, 'trial_cupom', ctx.query.cupom, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                encode: decodeURIComponent,
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.parceiro) {
            setCookie(ctx, 'trial_parceiro', ctx.query.parceiro, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                encode: decodeURIComponent,
                // domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.contabilidade) {
            setCookie(ctx, 'trial_contabilidade', ctx.query.contabilidade, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                encode: decodeURIComponent,
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.alice) {
            setCookie(ctx, 'trial_contabilidade', ctx.query.alice, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                encode: decodeURIComponent,
                domain: 'vhsys.com.br'
            })
        }
        if  (ctx.query.email_empresa) {
            setCookie(ctx, 'trial_empresa', ctx.query.email_empresa, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                encode: decodeURIComponent,
                domain: 'vhsys.com.br'
            })
        }
        return { ...initialProps }
    }

    render() {
        return (
        <html lang="pt-br">
            <Head>
                <link rel="publisher" href="https://plus.google.com/+VHSYSBr"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vhsys.com.br/" />
                <meta property="og:site_name" content="VHSYS" />
                <meta property="og:image" content="https://staticsite.vhsys.com/wp-content/uploads/2018/11/2018-11-14.jpg" />
                <meta property="og:image:secure_url" content="https://staticsite.vhsys.com/wp-content/uploads/2018/11/2018-11-14.jpg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="260" />
                <meta property="og:image:alt" content="VHSYS" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais." />
                <meta name="twitter:title" content="Sistema de Gestão Empresarial - VHSYS" />
                <meta name="twitter:site" content="@vhsys" />
                <meta name="twitter:image" content="https://staticsite.vhsys.com/wp-content/uploads/2018/11/2018-11-14.jpg" />
                <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
                <style jsx global>{`@font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Regular.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Regular.woff) format('woff');font-weight:400;font-style:normal;font-display:swap}`}</style>
                <style jsx global>{`@font-face{font-family:'Open Sans';src:url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Regular.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Regular.woff) format('woff');font-weight:400;font-style:normal;font-display:swap}`}</style>
                <style jsx global>{`
                b,body,div,h1,h2,h3,h4,h5,h6,html,i,p,span,strong,u{font-display:swap}ol,ul{list-style: none;margin: 0;padding: 0;}button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}html{font-size:16px;line-height:1.6;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body,html{width:100%;font-weight:300;max-width:100%;overflow-x:hidden;font-family:'Open Sans',Arial,Tahoma,Sans-Serif}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1,h2,h3,h4,h5,h6{font-weight:400;font-family:'Titillium Web',Arial,Tahoma,Sans-Serif;margin:.67rem 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}.slick-slider,legend{box-sizing:border-box}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects;cursor:pointer}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:600}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}.slick-list:focus,:focus{outline:0}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-slider{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.inputMask{width:calc(100% - 120px);margin-bottom:10px;padding:13px 30px;border-radius:5px;border:0;color:#4a4a4a}.inputMask.error{background-color:#ffc3c3;color:#ab0707}.typedText{position:absolute;font-size:3rem;line-height:3.2rem;font-weight:500;color:#42e5ec;font-family:'Titillium Web',Arial,Tahoma,Sans-Serif}.videoEmbed{position:absolute;top:0;left:0;right:0;bottom:0}
                `}</style>
                <style jsx global>{`
                @font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-ExtraLight.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-ExtraLight.woff) format('woff');font-weight:200;font-style:normal;font-display:swap}@font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Light.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Light.woff) format('woff');font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Bold.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Bold.woff) format('woff');font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-SemiBold.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-SemiBold.woff) format('woff');font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:'Titillium Web';src:url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Black.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/TitilliumWeb-Black.woff) format('woff');font-weight:900;font-style:normal;font-display:swap}@font-face{font-family:'Open Sans';src:url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Light.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Light.woff) format('woff');font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:'Open Sans';src:url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Bold.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-Bold.woff) format('woff');font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:'Open Sans';src:url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-SemiBold.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-SemiBold.woff) format('woff');font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:'Open Sans';src:url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-ExtraBold.woff2) format('woff2'),url(https://staticsite.vhsys.com/ssr/static/fonts/OpenSans-ExtraBold.woff) format('woff');font-weight:800;font-style:normal;font-display:swap}
                `}</style>
                <script dangerouslySetInnerHTML={{
                __html: `window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");$.src="https://v2.zopim.com/?1ar29Lh3lV8opQpVXKvIPJeBj1DFbQuQ";z.t=+new Date;$.type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script")`,
                }}>
                </script>
            </Head>
            <body>
            <Main />
            <NextScript />
            <script type="text/javascript" src="https://staticsite.vhsys.com/ssr/static/js/traffic-source-v2.js?ver=1.0.7"></script>
            </body>
        </html>
        )
    }
}

export default withRouter(MyDocument);