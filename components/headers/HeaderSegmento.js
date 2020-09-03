import DefaultTrialForm from '../forms/DefaultTrialForm'
import LazyLoad from 'react-lazyload'

class HeaderSegmento extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleFormUnmount = this.handleFormUnmount.bind(this);
        
        this.state = {
            visible: false,
            emailPre: '',
            emailErr: false,
            animate: 'translate'
        }
    }

    componentDidMount() {
        this.setState({animate: ''})
    }

    onChangeEmail(e) {
        if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(e.target.value)) {
            this.setState({
                emailPre: e.target.value,
                emailErr: 'success'
            });
        } else {
            this.setState({
                emailErr: 'error'
            });
        }
    }
    
    onClick(e) {
        e.preventDefault()
        if (!this.state.visible && this.state.emailErr === 'success') {
            this.setState({
                visible: true
            })
        } else {
            this.setState({
                emailErr: 'error'
            });
        }
    }

    handleFormUnmount(){
        this.setState({
            visible: false
        });
    }

    render() {
        const children = this.props.children
        return (
            <section className={this.props.bgColor} >
                <div className={"headerBG "+this.state.animate}>
                    <LazyLoad once height={'100%'}>
                        <img alt='segmentos-bg' title='segmentos-bg' width='auto' height='100%' src={require('../../static/images/vetor/segmentos-bg.svg')} />
                    </LazyLoad>
                </div>
                <div className="container">
                    <article className={this.props.textColor}>
                        <div className={"headerMask "+this.state.animate}>
                        {
                            React.Children.map(children, (child, i) => {
                                if (child.type == 'picture') return <LazyLoad once height={'100%'}><picture>
                                    {
                                        React.Children.map(child.props.children, (imgChild, i) => 
                                        {
                                            if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                                            if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                                        })
                                    }
                                </picture></LazyLoad>
                            })
                        }
                        </div>
                        {this.props.breadcrumbs}
                        <h1>{this.props.h1n}<b>{this.props.h1b}</b></h1>
                        <form className="form_opener" onSubmit={this.onClick}>
                            <input aria-label="Insira seu E-mail" type="email" name="email" onChange={this.onChangeEmail} className={this.state.emailErr} placeholder="Informe o seu e-mail" />
                            <button aria-label='Experimente Grátis' type="submit" className={this.state.visible+' '+this.props.expColor}>Experimente Grátis</button>
                            <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/" className={this.props.conColor}>Assine Já ></a>
                        </form>
                        {this.state.visible ? <DefaultTrialForm closeform={this.handleFormUnmount} emailvalue={this.state.emailPre} /> : null}
                        <small>Não pedimos cartão de crédito. Teste sem compromisso.</small>
                    </article>
                </div>
                <style jsx>{`
                section {
                    background-color: rgb(239, 243, 246);
                    text-align:left;
                    padding: 0;
                    margin:-66px 0 0;
                    position:relative;
                }
                section::before {
                    content: '';
                    background: linear-gradient(30deg,rgb(255,255,255) 10%,rgba(255,255,255,0) 35%,rgba(255,255,255,0) 56%,rgb(255,255,255) 100%);
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                section.yellow {
                    background-color: rgb(254, 202, 3);
                }
                section.cobalt {
                    background-color: rgb(0, 116, 218);
                }
                section.cyan {
                    background-color: rgb(1, 201, 217);
                }
                section.pink {
                    background-color: rgb(205, 77, 232);
                }
                section.purple {
                    background-color: rgb(155, 71, 219);
                }
                section.darkGray {
                    background-color: rgb(101, 96, 90);
                }
                div.headerMask {
                    position: absolute;
                    bottom: 0;
                    right: calc(100% + 40px);
                    height: calc(100% + 5vh);
                    text-align: right;
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.headerMask.translate {
                    transform: translateX(-100%);
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.headerMaskOff:after {
                    content: '';
                    background: linear-gradient(265deg,rgba(0,0,0,0) 0%,rgb(255,255,255) 0.2%);
                    width: 70vw;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: -70vw;
                }
                div.headerMask picture, div.headerMask img {
                    height: 100%;
                    margin: 0 auto 0 0;
                    display: block;
                    border-radius: 0px 400px 400px 200px;
                    overflow: hidden;
                }
                div.headerBG picture, div.headerBG img {
                    height: 100%;
                    margin: 0 auto 0 0;
                    display: block;
                }
                div.headerBG {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: auto;
                    height: 100%;
                    text-align: right;
                    opacity:0.3;
                    overflow: hidden;
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.container {
                    display:block;
                    width: 1100px;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: calc(5vh + 66px) 0 0;
                    position:relative;
                    text-align: right;
                }
                article {
                    width: 650px;
                    max-width: 90%;
                    display: inline-block;
                    text-align: left;
                    padding: 3vh 30px 8vh;
                    position: relative;
                    color: rgb(0, 26, 86);
                }
                section.darkGray article,
                section.purple article,
                section.pink article,
                section.cobalt article
                {
                    color: rgb(255, 255, 255);
                }
                h1 {
                    font-size: 3rem;
                    line-height: 3.2rem;
                    font-weight: 400;
                    display: inline-block;
                    margin: 40px 0px;
                }
                h1 b {
                    font-size: 4rem;
                    line-height: 4.5rem;
                    font-weight: 700;
                    display: block;
                }
                .typing u{
                    color:transparent;
                    display:contents;
                    font-size:3rem;
                    line-height:3.2rem;
                    font-weight:500;
                    font-family:"Titillium Web", sans serif;
                    padding-bottom:20px;
                    -webkit-user-select: none;       
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                .typedText {
                    display: contents;
                }
                article span {
                    position:absolute;
                    font-size:3rem;
                    line-height:3.2rem;
                    font-weight:500;
                    color:#42e5ec;
                    font-family:"Titillium Web", sans serif;
                }
                small {
                    font-size:0.7rem;
                    line-height:0.7rem;
                    padding: 10px 0 40px 20px;
                    display: block;
                }
                .form_opener input{
                    padding: 17px 20px 14px;
                    border-radius: 30px 0 0 30px;
                    border: 0;
                    width: calc(100% - 410px);
                }
                .form_opener input.error {
                    background-color:#ffc3c3;
                    color: #ab0707;
                }
                .form_opener button{
                    padding: 17px 20px 14px;
                    border-radius: 0 30px 30px 0;
                    border: 0;
                    background-color: #f1c53e;
                    color:#224177;
                    font-weight: 600;
                    transition:0.2s;
                    cursor:pointer;
                    text-transform:uppercase;
                }
                .form_opener button:hover {
                    background-color: #ffc000;
                }
                .green{
                    background-color: #66ce73 !important;
                    color:#ffffff !important;
                }
                .green:hover {
                    background-color: #3c7944 !important;
                }
                .form_opener a{
                    padding: 12px 20px;
                    border-radius: 30px 30px;
                    border: 0;
                    background-color: #174676;
                    color: #ffffff;
                    font-weight: 600;
                    cursor: pointer;
                    margin: 0 10px;
                    text-decoration: none;
                    transition: 0.2s;
                    text-transform: uppercase;
                    display: inline-block;
                }
                .form_opener a:hover{
                    background-color: #345e9e;
                }
                @media (max-width:1020px) {
                    div.container {
                        text-align:center;
                    }
                    
                    div.headerMask {
                        display:none;
                    }
                }
                @media (max-width:700px) {
                    .form_opener input{
                        border-radius: 30px;
                        width: calc(100% - 40px);
                        margin-bottom:10px;
                    }
                    .form_opener button{
                        padding: 15px 20px;
                        border-radius: 30px;
                        width:100%;
                    }
                    .form_opener a{
                        padding: 15px 20px;
                        border-radius: 30px;
                        width: calc(100% - 40px);
                        margin:10px 0;
                        text-align:center;
                    }
                }
                `}</style>
            </section>
        )
    }
}

export default HeaderSegmento