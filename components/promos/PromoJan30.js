import LazyLoad from 'react-lazyload';

class PromoJan30 extends React.Component {
    render() {
        return (
            <div className="promoWrap">
                <LazyLoad height={121}><picture>
                    <source srcSet={require('../../static/images/campanhas/janeiro30/2019.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/janeiro30/2019.png')} type="image/png" />
                    <img alt='2019' title='2019' width='207px' height='121px' src={require('../../static/images/campanhas/janeiro30/2019.png')} />
                </picture></LazyLoad>
                <LazyLoad height={101}><picture>
                    <source srcSet={require('../../static/images/campanhas/janeiro30/coupon.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/janeiro30/coupon.png')} type="image/png" />
                    <img alt='coupon' title='coupon' width='266px' height='101px' src={require('../../static/images/campanhas/janeiro30/coupon.png')} />
                </picture></LazyLoad>
                <LazyLoad height={73}><picture>
                    <source srcSet={require('../../static/images/campanhas/janeiro30/certificado.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/janeiro30/certificado.png')} type="image/png" />
                    <img alt='certificado' title='certificado' width='224px' height='73px' src={require('../../static/images/campanhas/janeiro30/certificado.png')} />
                </picture></LazyLoad>
                <div className='responsive'>
                    <LazyLoad height={101}><picture>
                        <source srcSet={require('../../static/images/campanhas/janeiro30/coupon-resp.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/campanhas/janeiro30/coupon-resp.png')} type="image/png" />
                        <img alt='coupon-resp' title='coupon-resp' width='266px' height='101px' src={require('../../static/images/campanhas/janeiro30/coupon-resp.png')} />
                    </picture></LazyLoad>
                </div>
                <article>
                    <a className='assine' href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/">ASSINE AGORA</a>
                    <a className='cliente' href="https://materiais.vhsys.com.br/cs-upgrade-de-plano-vhsys">JÁ SOU CLIENTE</a>
                </article>
                <small>*Promoção não cumulativa e válida apenas para novas contratações nos planos anuais.</small>
                <style jsx>{`
                    div.promoWrap {
                        background: linear-gradient(174deg,#4079c8,#345d9d);
                        display: block;
                        width: 100%;
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0;
                        position: relative;
                        text-align: center;
                        top: 0;
                        z-index: 1;
                    }
                    img, picture {
                        display:inline-block;
                        vertical-align:middle;
                    }
                    picture {
                        margin:10px 5px;
                    }
                    .responsive {
                        display:none;
                    }
                    article {
                        display:inline-block;
                        vertical-align:middle;
                        width:230px;
                        margin:10px 5px;
                    }
                    a.assine {
                        display: inline-block;
                        padding: 10px 50px;
                        border-radius: 30px;
                        font-size: 1.1rem;
                        border: 0;
                        background-color: #f1c53e;
                        color: #224177;
                        font-weight: 600;
                        -webkit-transition: 0.2s;
                        -webkit-transition: 0.2s;
                        -webkit-transition: 0.2s;
                        transition: 0.2s;
                        cursor: pointer;
                        -webkit-text-decoration: none;
                        text-decoration: none;
                    }
                    a.assine:hover {
                        background-color: #ffc000;
                    }
                    a.cliente {
                        display: inline-block;
                        padding: 5px 20px;
                        border-radius: 30px;
                        border: 0;
                        background-color: transparent;
                        color: #ffffff;
                        border: 2px solid #f1c53e;
                        font-weight: 600;
                        margin: 10px 0;
                        -webkit-transition: 0.2s;
                        -webkit-transition: 0.2s;
                        -webkit-transition: 0.2s;
                        transition: 0.2s;
                        cursor: pointer;
                        -webkit-text-decoration: none;
                        text-decoration: none;
                    }
                    a.cliente:hover {
                        background-color: rgba(241, 197, 62, 0.2);
                    }
                    small {
                        color: white;
                        position: absolute;
                        display: block;
                        bottom: 2px;
                        right: 10vw;
                    }
                    @media (max-width:1015px) {
                        picture:nth-child(1) {
                            display:none;
                        }
                    }
                    @media (max-width:785px) {
                        picture {
                            display:none;
                        }
                        .responsive {
                            display:inline-block;
                        }
                        .responsive picture {
                            display:inline-block;
                        }
                        small {
                        position: relative;
                        display: block;
                        bottom: 2px;
                        right: auto;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default PromoJan30