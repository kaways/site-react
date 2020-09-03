import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

class CarosselDepoBlue extends React.Component {
    render() {
        return (
            <section>
                <article className="DepoimentosSlider">
                    <Slider
                        slidesToShow={1}
                        swipeToSlide={true}
                        arrows={false}
                        dots={true}
                        centerMode={true}
                        centerPadding={'0px'}
                        draggable={true}
                        autoplay={true}
                        autoplaySpeed={8000}
                        pauseOnHover={true}
                        className={'DepoimentosSlideInner'}
                    >
                        <div className="DepoimentosSlide">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png')} type="image/png" />
                                <img alt='depo_haroldo' title='depo_haroldo' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png')} />
                            </picture></LazyLoad>
                            <div className="DepoimentosHeader">
                                <h5>
                                    Haroldo Andriguetto Junior
                                </h5>
                                <p>Coordenador-Geral da Escola O Pequeno polegar</p>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                            </div>
                            <span>"É um sistema muito ágil, prático e com resultados à mostra, sem nenhuma complicação. O suporte é rápido e muito eficaz, sempre pronto para atender nossa empresa. Recomendamos o sistema sem quaisquer impedimentos. A inovação constante da plataforma otimiza muito nossa gestão."
                            </span>
                        </div>
                        <div className="DepoimentosSlide">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png')} type="image/png" />
                                <img alt='depo_daniel_v' title='depo_daniel_v' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png')} />
                            </picture></LazyLoad>
                            <div className="DepoimentosHeader">
                                <h5>
                                    Daniel Vitor Bueno
                                </h5>
                                <p>Fratti e Bueno</p>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                            </div>
                            <span>"Estamos totalmente satisfeitos com a VHSYS, o sistema não apresenta falhas ou interrupções, além de ser muito simples e fácil de operar. O Suporte é muito eficiente não deixa nenhum chamado sem atendimento. Estão sempre atentos às mudanças de legislação, bem como às sugestões enviadas. Recomendo 100%."
                            </span>
                        </div>
                        <div className="DepoimentosSlide">
                            <LazyLoad once height={100}><picture>
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png?webp')} type="image/webp" />
                                <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png')} type="image/png" />
                                <img alt='depo_edgar_jr' title='depo_edgar_jr' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png')} />
                            </picture></LazyLoad>
                            <div className="DepoimentosHeader">
                                <h5>
                                Edgar Junior
                                </h5>
                                <p>A Exclusiva</p>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                                <LazyLoad once height={15}><picture>
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png?webp')} type="image/webp" />
                                    <source srcSet={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} type="image/png" />
                                    <img alt='yellowStar' title='yellowStar' width='16px' height='15px' src={require('../../static/images/uniqueComponents/depoimentos/yellowStar.png')} />
                                </picture></LazyLoad>
                            </div>
                            <span>"Utilizo o sistema para emissão de Nota Fiscal Eletrônica e gerenciamento de contas e estoque, é muito prático e facilita muito o dia a dia da nossa empresa."
                            </span>
                        </div>
                    </Slider>
                </article>
            <style jsx>{`
                .DepoimentosSlide {
                    margin:0;
                    padding:0;
                    display:block;
                    outline:0;
                }
                .DepoimentosSlide:focus {
                    outline:0;
                }
                .DepoimentosSlide img {
                    display:inline-block;
                }
                .DepoimentosHeader {
                    width:calc(100% - 125px);
                    display:inline-block;
                    vertical-align:top;
                    padding: 0 0 0 20px;
                }
                .DepoimentosHeader h5 {
                    font-size:1.4rem;
                    color:#29c6d0;
                    font-weight:600;
                    text-transform:uppercase;
                    margin:0 0 10px;
                }
                .DepoimentosHeader p {
                    color:#ffffff;
                    font-size:1rem;
                    font-style: italic;
                    margin:5px 0;
                }
                .DepoimentosHeader img, .DepoimentosHeader picture {
                    display:inline-block;
                }
                .DepoimentosSlide span {
                    width:calc(100% - 30px);
                    display:block;
                    margin:15px 0 0;
                    padding:15px 15px 5px;
                    border-top:1px solid #2e73a9;
                    color:#ffffff;
                }
            `}</style>
            <style jsx global>{`
                .DepoimentosSlideInner {
                    
                }
                .DepoimentosSlideInner ul {
                    list-style:none;
                    padding:0;
                    text-align:center;
                }
                .DepoimentosSlideInner ul li {
                    display:inline-block;
                }
                .DepoimentosSlideInner ul li button {
                    border-radius:50px;
                    border:2px solid #ffffff;
                    background-color:transparent;
                    color:transparent;
                    font-size:10px;
                    transition: background-color 0.2s linear;
                    width:15px;
                    height: 16px;
                    display:inline-block;
                    margin: 0 5px;
                }
                .DepoimentosSlideInner ul li.slick-active button {
                    background-color:#25b6bf;
                    transition: background-color 0.2s linear;
                    
                }
            `}</style>
            </section>
        );
    }
}

export default CarosselDepoBlue