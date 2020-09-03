import LazyLoad from 'react-lazyload';

class PromoFev10 extends React.Component {
    render() {
        return (
            <div className="promoWrap">
                <LazyLoad height={89}><picture>
                    <source srcSet={require('../../static/images/campanhas/fev10/10porcento.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/fev10/10porcento.png')} type="image/png" />
                    <img alt='10porcento' title='10porcento' width='360px' height='89px' src={require('../../static/images/campanhas/fev10/10porcento.png')} />
                </picture></LazyLoad>
                <LazyLoad height={90}><picture>
                    <source srcSet={require('../../static/images/campanhas/fev10/plus.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/fev10/plus.png')} type="image/png" />
                    <img alt='plus' title='plus' width='72px' height='90px' src={require('../../static/images/campanhas/fev10/plus.png')} />
                </picture></LazyLoad>
                <LazyLoad height={91}><picture>
                    <source srcSet={require('../../static/images/campanhas/fev10/certificado.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/fev10/certificado.png')} type="image/png" />
                    <img alt='certificado' title='certificado' width='297px' height='91px' src={require('../../static/images/campanhas/fev10/certificado.png')} />
                </picture></LazyLoad>
                <div className='responsive'>
                    <LazyLoad height={120}><picture>
                        <source srcSet={require('../../static/images/campanhas/fev10/coupon-resp.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/campanhas/fev10/coupon-resp.png')} type="image/png" />
                        <img alt='coupon-resp' title='coupon-resp' width='551px' height='120px' src={require('../../static/images/campanhas/fev10/coupon-resp.png')} />
                    </picture></LazyLoad>
                </div>
                <article>
                    <a className='assine' href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/">ASSINE AGORA</a>
                    <a className='cliente' href="https://materiais.vhsys.com.br/cs-upgrade-de-plano-vhsys">JÁ SOU CLIENTE</a>
                </article>
                <small>*Promoção não cumulativa e válida apenas para novas contratações nos planos anuais.</small>
                <style jsx>{`
                    div.promoWrap {
                        background: linear-gradient(to right,#4d2779,#7e3299);
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
                    }
                    a.assine {
                        display: inline-block;
                        padding: 10px 20px;
                        margin:0 10px;
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
                        margin:0 10px;
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
                    @media (max-width:1125px) {
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
                        img {
                            max-width:95%;
                            height:auto;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default PromoFev10