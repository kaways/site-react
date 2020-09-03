import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

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
                    left: -50px;
                    width: 40px;
                    height: 40px;
                    color: transparent;
                    background-color: transparent;
                    border: 0;
                    border-radius:10px;
                    opacity: 0.5;
                    z-index:1;
                    transition:0.3s;
                    cursor:pointer;
                }
                div:hover {
                    background-color:  #a3a3a3;
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
                    right: -50px;
                    width: 40px;
                    height: 40px;
                    color: transparent;
                    background-color: transparent;
                    border: 0;
                    border-radius:10px;
                    opacity: 0.5;
                    z-index:1;
                    transition:0.3s;
                    cursor:pointer;
                }
                div:hover {
                    background-color:  #a3a3a3;
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

class CarosselNaMidia extends React.Component {
    render() {
        const settings = {
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            responsive:
            [
                {
                    breakpoint: 1600,
                    settings: {
                    slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                    slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                    slidesToShow: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                    slidesToShow: 1
                    }
                },
            ],
        }
        return (
            <section>
                <h3>VHSYS na Mídia</h3>
                <article className="DepoimentosSlider">
                    <Slider
                        slidesToShow={4}
                        swipeToSlide={true}
                        arrows={true}
                        dots={false}
                        centerMode={true}
                        centerPadding={'0px'}
                        draggable={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        pauseOnHover={true}
                        {...settings}
                    >
                        <a aria-label='Materia sobre a VHSYS - gazetadopovo.com.br' rel="noopener" href="https://www.gazetadopovo.com.br/economia/livre-iniciativa/empreender/a-empresa-de-informatica-de-sao-jose-dos-pinhais-que-virou-uma-startup-promissora-4kl0k4blccbyytz5jd5mmly8i/"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-gazeta.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-gazeta.png')} type="image/png" />
                                <img alt='logo-gazeta' title='logo-gazeta' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-gazeta.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - exame.abril.com.br' rel="noopener" href="https://exame.abril.com.br/negocios/dino/sistema-erp-a-gestao-empresarial-nao-precisa-ser-tao-complicada-dino89095301131/"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-exame.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-exame.png')} type="image/png" />
                                <img alt='logo-exame' title='logo-exame' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-exame.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - diarioinduscom.com' rel="noopener" href="http://www.diarioinduscom.com/vhsys-investe-na-gestao-de-micro-e-pequenas-empresas/"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-diario.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-diario.png')} type="image/png" />
                                <img alt='logo-diario' title='logo-diario' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-diario.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - ecommercebrasil.com.br' rel="noopener" href="https://www.ecommercebrasil.com.br/noticias/e-commerce-deve-crescer-15-em-2018-e-chegar-a-r-69-bi-de-faturamento/"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-ecommerce-brasil.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-ecommerce-brasil.png')} type="image/png" />
                                <img alt='logo-ecommerce-brasil' title='logo-ecommerce-brasil' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-ecommerce-brasil.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - revistapegn.globo.com' rel="noopener" href="https://revistapegn.globo.com/Publicidade/VHSYS/noticia/2017/08/pouco-dinheiro-muitas-ideias-5-dicas-de-gestao-financeira-para-micro-e-pequenas-empresas.html"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-pegn.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-pegn.png')} type="image/png" />
                                <img alt='logo-pegn' title='logo-pegn' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-pegn.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - infomoney.com.br' rel="noopener" href="https://www.infomoney.com.br/negocios/noticias-corporativas/noticia/5075914/ferramentas-gerenciamento-permitem-emissao-nota-fiscal-eletronica-com-muito-mais"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-info-money.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-info-money.png')} type="image/png" />
                                <img alt='logo-info-money' title='logo-info-money' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-info-money.png')} />
                            </picture></LazyLoad>
                        </a>
                        <a aria-label='Materia sobre a VHSYS - economia.uol.com.br' rel="noopener" href="https://economia.uol.com.br/noticias/pr-newswire/2014/03/26/vhsys-quer-conquistar-pmes-com-software-em-nuvem.htm"  target="_blank">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-uol.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-uol.png')} type="image/png" />
                                <img alt='logo-uol' title='logo-uol' width='220px' height='100px' src={require('../../static/images/uniqueComponents/vhsysNaMidia/logo-uol.png')} />
                            </picture></LazyLoad>
                        </a>
                    </Slider>
                </article>
            <style jsx>{`
                section {   
                    text-align: center;
                    padding: 0 0 50px;
                }
                h3 {
                    display:inline-block;
                    vertical-align:middle;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #8a8a8a;
                    text-align: center;
                    width: 200px;
                }
                article {
                    display:inline-block;
                    vertical-align:middle;
                    width: 900px;
                    margin: auto;
                    max-width: calc(100% - 300px);
                    min-width: 240px;
                    text-align:center;
                    padding:20px 60px;
                }
                img {
                    filter:grayscale(1);
                    transition:0.2s;
                    display:inline-block;
                    border:1px solid #ffffff;
                    max-width:100%;
                }
                img:hover {
                    filter:grayscale(0);
                    transition:0.2s;
                    border:1px solid #d5d5d5;
                    border-radius:5px;
                    box-shadow: 0px 15px 30px -15px #d2d2d2;
                }
            `}</style>
            </section>
        );
    }
}

export default CarosselNaMidia