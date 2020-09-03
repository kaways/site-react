import LazyLoad from 'react-lazyload';

class CarosselDepoDefault extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSlide = this.toggleSlide.bind(this);
        
        this.state = {
            slide01: '',
            slide02: 'next',
            slide03: 'used',
        };
    }

    toggleSlide(elemento){
        if(elemento == 1) {
            this.setState({slide01: '',slide02: 'next',slide03: 'used',})
        } else if(elemento == 2) {
            this.setState({slide01: 'used',slide02: '',slide03: 'next',})
        } else if(elemento == 3) {
            this.setState({slide01: 'next',slide02: 'used',slide03: '',})
        }
    }

    render() {
        return (
            <section>
                <LazyLoad once>
                    <article className={this.state.slide01+' depo'}>
                        <picture>
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png?webp')} type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png')} type="image/png" />
                            <img alt='depo_haroldo' title='depo_haroldo' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_haroldo.png')} />
                        </picture>
                        <span>"É um sistema muito ágil, prático e com resultados à mostra, sem nenhuma complicação. O suporte é rápido e muito eficaz, sempre pronto para atender nossa empresa. Recomendamos o sistema sem quaisquer impedimentos. A inovação constante da plataforma otimiza muito nossa gestão."
                        </span>
                        <h5>
                            Haroldo Andriguetto Junior
                        </h5>
                        <p>Coordenador-Geral da Escola O Pequeno polegar</p>
                    </article>
                    <article className={this.state.slide02+' depo'}>
                        <picture>
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png?webp')} type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png')} type="image/png" />
                            <img alt='depo_daniel_v' title='depo_daniel_v' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_daniel_v.png')} />
                        </picture>
                        <span>"Estamos totalmente satisfeitos com a VHSYS, o sistema não apresenta falhas ou interrupções, além de ser muito simples e fácil de operar. O Suporte é muito eficiente não deixa nenhum chamado sem atendimento. Estão sempre atentos às mudanças de legislação, bem como às sugestões enviadas. Recomendo 100%."
                        </span>
                        <h5>
                            Daniel Vitor Bueno
                        </h5>
                        <p>Fratti e Bueno</p>
                    </article>
                    <article className={this.state.slide03+' depo'}>
                        <picture>
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png?webp')} type="image/webp" />
                            <source srcSet={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png')} type="image/png" />
                            <img alt='depo_edgar_jr' title='depo_edgar_jr' width='100px' height='100px' src={require('../../static/images/uniqueComponents/depoimentos/depo_edgar_jr.png')} />
                        </picture>
                        <span>"Utilizo o sistema para emissão de Nota Fiscal Eletrônica e gerenciamento de contas e estoque, é muito prático e facilita muito o dia a dia da nossa empresa."
                        </span>
                        <h5>
                        Edgar Junior
                        </h5>
                        <p>A Exclusiva</p>
                    </article>
                    <article className='control'>
                        <span onClick={() => this.toggleSlide(1)} className={(this.state.slide01=='')?'active':''} ></span>
                        <span onClick={() => this.toggleSlide(2)} className={(this.state.slide02=='')?'active':''} ></span>
                        <span onClick={() => this.toggleSlide(3)} className={(this.state.slide03=='')?'active':''} ></span>
                    </article>
                </LazyLoad>
            <style jsx>{`
                section {
                    width:700px;
                    max-width:90%;
                    margin:30px auto 60px;
                }
                article{
                    width:100%;
                    transform:translateX(0);
                    position:relative;
                    top:0;
                    left:0;
                    text-align:center;
                    transition:0.3s;
                    opacity:1;
                }
                article.used {
                    transform:translateX(-100%);
                    position:absolute;
                    top:0;
                    left:0;
                    opacity:0;
                    transition:0.3s;

                }
                article.next {
                    transform:translateX(100%);
                    position:absolute;
                    top:0;
                    left:0;
                    opacity:0;
                }
                article.depo span {
                    display: block;
                    color: #7c87a0;
                    min-height: 160px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                article.control span {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border: 2px solid #7c87a0;
                    border-radius: 10px;
                    position:relative;
                    margin: 25px 5px 0;
                    overflow:hidden;
                    transition:0.3s;
                    cursor:pointer;
                }
                article.control span::before {
                    content:'';
                    position:absolute;
                    top: 0;
                    left: 0;
                    width:0;
                    height:0;
                    transform:translateX(5px) translateY(5px);
                    background: radial-gradient(#7c87a0 40%,transparent);
                    transition:0.3s;
                }
                article.control span.active::before {
                    position:absolute;
                    top: 0;
                    left: 0;
                    width:100px;
                    height:100px;
                    transform:translateX(-45px) translateY(-45px);
                    background: radial-gradient(#7c87a0 40%,transparent);
                    transition:0.3s;
                }
            `}</style>
            </section>
        );
    }
}

export default CarosselDepoDefault