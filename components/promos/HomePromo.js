import Waypoint from 'react-waypoint'
import LazyLoad from 'react-lazyload';

import PromoJan30 from '../promos/PromoJan30';
import PromoFev10 from '../promos/PromoFev10';

class HomePromo extends React.Component {
    constructor(props) {
        super(props);

        this.onLeave = this.onLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.closeBox = this.closeBox.bind(this);

        this.state = {
            promoBar: false,
        };
    }

    componentDidMount() {
        if(window.pageYOffset < 100) { 
            setTimeout(function() {
                this.setState({promoBar: true})
            }.bind(this), 1200)
        }
    }

    onLeave(){
        this.setState({promoBar: false})
    }

    onClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({promoBar: true})
    }
    closeBox() {
        this.setState({promoBar: false})
    }

    render() {
        return (
            <section className={this.state.promoBar?'openPromo':null}>
            <button aria-label='Fechar' onClick={this.closeBox}></button>
            {this.props.promoTag == 'default-30'?<PromoJan30 />:null}
            {this.props.promoTag == 'default-10'?<PromoFev10 />:null}
            <Waypoint onLeave={this.onLeave} />
            <span onClick={this.onClick}>
                {this.props.promoTag == 'default-30'?
                <LazyLoad height={84}><picture>
                    <source srcSet={require('../../static/images/campanhas/janeiro30/badge.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/janeiro30/badge.png')} type="image/png" />
                    <img alt='badge' title='badge' width='84px' height='84px' src={require('../../static/images/campanhas/janeiro30/badge.png')} />
                </picture></LazyLoad>
                :null}
                {this.props.promoTag == 'default-10'?
                <LazyLoad height={84}><picture>
                    <source srcSet={require('../../static/images/campanhas/fev10/badge.png?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/campanhas/fev10/badge.png')} type="image/png" />
                    <img alt='badge' title='badge' width='84px' height='84px' src={require('../../static/images/campanhas/fev10/badge.png')} />
                </picture></LazyLoad>
                :null}
            </span>

            <style jsx>{`
                section {
                    position:relative;
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0;
                    position: relative;
                    text-align: center;
                    top: 0;
                    z-index: 14;
                    max-height: 0;
                    overflow: hidden;
                }
                section.openPromo {
                    max-height: 1000px;
                    transition: 1.2s;
                }
                section.openPromo span {
                    transform: translateX(120px);
                    transition:0.2s;
                }
                button {
                    position:absolute;
                    display:block;
                    width: 30px;
                    height: 30px;
                    top: 0;
                    right: 0;
                    z-index:2;
                    background:transparent;
                    border:0;
                    cursor:pointer;
                }
                button:before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 5px;
                    height: 25px;
                    top: 0;
                    left: 0;
                    border-radius: 5px;
                    transform: translateX(5px) translateY(5px) rotate(45deg);
                    background-color: #fff;
                    transition:0.2s;
                }
                button:after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 5px;
                    height: 25px;
                    top: 0;
                    left: 0;
                    border-radius: 5px;
                    transform: translateX(5px) translateY(5px) rotate(-45deg);
                    background-color: #fff;
                    transition:0.2s;
                }
                button:hover::before, button:hover::after {
                    box-shadow: 0 0 7px 0px #fff;
                    transition:0.2s;
                }
                section span {
                    transform: translateX(0);
                    position:fixed;
                    top: 100px;
                    bottom:unset;
                    right: 10px;
                    transition:0.8s;
                }
                @media (max-width:946px) {
                    section span {
                        top:unset;
                        bottom: 60px;
                        right: 0px;
                    }
                }
                picture, img {
                    display:inline-block;
                    cursor:pointer;
                    animation: bounce 2s cubic-bezier(.5,0.05,1,.5) infinite;
                }

                @keyframes bounce {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(3px); }
                }
            `}</style>
            </section>
        )
    }
}

export default HomePromo