import ExperimenteBtn from '../buttons/ExperimenteBtn'
import LigueBtn from '../buttons/LigueBtn'
import LazyLoad from 'react-lazyload';

class DefaultCta extends React.Component {
    render() {
        const children = this.props.chamada
        return (
            <section className={ this.props.bg_color }>
                {this.props.solid?
                null
                :
                <LazyLoad once>
                    <img alt='segmentos-bg' title='segmentos-bg' width='auto' height='100%' src={require('../../static/images/vetor/cta-bg.svg')} className='circleMask'/>
                </LazyLoad>
                }
                <div className='zindex'>
                    <h3>
                        {
                            React.Children.map(children, (child, i) => {
                                return child
                            })
                        }
                    </h3>
                    { this.props.tipo == 'experimente'?
                    <ExperimenteBtn btnText={this.props.btn_text?this.props.btn_text:'Experimente Grátis'} btnStyle={this.props.btn_class?this.props.btn_class:'default'} />
                    :
                    <LigueBtn />
                    }
                    { this.props.botao2?
                    <a aria-label={ this.props.texto_con } href={ this.props.link_con } className={ this.props.class_con }>
                        { this.props.texto_con }
                    </a>
                    :
                    null
                    }
                </div>
            <style jsx>{`
                section {
                    width: calc(100% - 50px);
                    background-size: cover;
                    background-position: center;
                    padding: 50px 25px;
                    text-align:center;
                    position: relative;
                }
                .circleMask {
                    position:absolute;
                    height:100%;
                    width:auto;
                    top:0;
                    left:50%;
                    transform:translateX(-50%);
                    opacity: 0.2;
                }
                .zindex {
                    z-index:1;
                    position:relative;
                }
                .blue {
                    background-color: rgb(0, 96, 170);
                }
                .yellow {
                    background-color: rgb(254, 202, 3);
                }
                .cobalt {
                    background-color: rgb(0, 116, 218);
                }
                .cyan {
                    background-color: rgb(1, 201, 217);
                }
                .pink {
                    background-color: rgb(205, 77, 232);
                }
                .purple {
                    background-color: rgb(155, 71, 219);
                }
                .darkGray {
                    background-color: rgb(101, 96, 90);
                }
                .ice {
                    background-color:rgb(242, 243, 248);
                }
                .blue h3,
                .darkGray h3,
                .purple h3,
                .pink h3,
                .cobalt h3
                {
                    color: rgb(255, 255, 255);
                }
                h3 {
                    font-size:1.8rem;
                    text-align:center;
                    color:#174676;
                    font-weight:400;
                    display: block;
                    max-width: 90%;
                    width: 1200px;
                    margin: 0 auto 20px;
                }
                a {
                    display:inline-block;
                    padding: 15px 30px;
                    border: 0;
                    font-size: 1rem;
                    line-height: 1rem;
                    border-radius:40px;
                    margin:10px 20px 0;
                    text-decoration:none;
                    font-weight:600;
                    text-transform:uppercase;
                }
                .btn-prim_green {
                    background-color:#4fc35d;
                    border-bottom: 3px solid #127a4b;
                    color:#ffffff;
                    transition: all 0.1s linear;
                }
                .btn-prim_green:hover {
                    background-color:#44af51;
                    transition: all 0.1s linear;
                }
                .btn-prim_white {
                    background-color:#eeeeee;
                    border-bottom: 3px solid #aaaaaa;
                    color:#174676;
                    transition: all 0.1s linear;
                }
                .btn-prim_white:hover {
                    background-color:#cccccc;
                    transition: all 0.1s linear;
                }
                .btn-prim_blue {
                    background-color:#365d9d;
                    border-bottom: 3px solid #2e4f85;
                    color:#ffffff;
                    transition: all 0.1s linear;
                }
                .btn-prim_blue:hover {
                    background-color:#2e4f85;
                    transition: all 0.1s linear;
                }
                .btn-prim_cyan {
                    background-color:#00adbb;
                    border-bottom: 3px solid #0b8791;
                    color:#ffffff;
                    transition: all 0.1s linear;
                }
                .btn-prim_cyan:hover {
                    background-color:#0098a4;
                    transition: all 0.1s linear;
                }
            `}</style>
            </section>
        )
    }
}

export default DefaultCta