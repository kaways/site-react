import DefaultTrialForm from '../forms/DefaultTrialForm'
import LazyLoad from 'react-lazyload'

function chooseRequire(imgName) {
    switch(imgName) {
        case 'emissor-nfe': return {
            'webp':require('../../static/images/layouts/funcionalidades/emissor-nfe/header-mask.jpg?webp'),
            'jpg':require('../../static/images/layouts/funcionalidades/emissor-nfe/header-mask.jpg')
        }
        case 'emissor-cte': return {
            'webp':require('../../static/images/layouts/funcionalidades/emissor-cte/header-mask.jpg?webp'),
            'jpg':require('../../static/images/layouts/funcionalidades/emissor-cte/header-mask.jpg')
        }
        case 'emissor-mdfe': return {
            'webp':require('../../static/images/layouts/funcionalidades/emissor-mdfe/header-mask.jpg?webp'),
            'jpg':require('../../static/images/layouts/funcionalidades/emissor-mdfe/header-mask.jpg')
        }
    }
}

class HeaderPageFunc extends React.Component {
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
        const headerSrc = chooseRequire(this.props.imgName)
        const children = this.props.children
        return (
            <section>
                <div className={"headerBG "+this.state.animate}>
                    <LazyLoad once height={'100%'}><picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/header-bg.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/header-bg.png')} type="image/png" />
                        <img alt='header-bg' title='header-bg' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/header-bg.png')} />
                    </picture>
                    </LazyLoad>
                </div>
                <div className="container">
                    <article>
                        <div className={"headerMask "+this.state.animate}>
                            <LazyLoad once height={'100%'}><picture>
                                <source srcSet={headerSrc.webp} type="image/webp" />
                                <source srcSet={headerSrc.jpg} type="image/jpg" />
                                <img alt='header-bg' title='header-bg' width='auto' height='100%' src={headerSrc.jpg} />
                            </picture></LazyLoad>
                        </div>
                        {this.props.breadcrumbs}
                        <h1>{this.props.h1n}<b>{this.props.h1b}</b></h1>
                        <p>{this.props.subtitulo}</p>
                        <ul>
                            {
                                React.Children.map(children, (child, i) => {
                                    if (child.type == 'ul') return <ul>{React.Children.map(child.props.children, (ulChild, i) => {
                                        if (ulChild.type == 'strong') return <strong>{ulChild.props.children}</strong>
                                        return <li>
                                            <svg enableBackground="new 0 0 13 13" version="1.1" viewBox="0 0 13 13">
                                                <path d="m12.786 5.192l-0.011 2e-3c-0.063-0.321-0.331-0.567-0.67-0.567-0.384 0-0.695 0.311-0.695 0.695 0 0.037 0.016 0.069 0.021 0.104l-0.034 6e-3c0.055 0.297 0.092 0.6 0.092 0.913 0 2.755-2.233 4.99-4.989 4.99s-4.99-2.235-4.99-4.991 2.234-4.99 4.99-4.99c0.622 0 1.211 0.128 1.76 0.335l0.014-0.022c0.105 0.066 0.223 0.114 0.355 0.114 0.377 0 0.683-0.305 0.683-0.682 0-0.246-0.138-0.452-0.333-0.572l7e-3 -0.011c-0.017-6e-3 -0.034-0.011-0.05-0.017-0.037-0.019-0.075-0.031-0.115-0.043-0.732-0.29-1.527-0.456-2.363-0.456-3.566 0-6.458 2.91-6.458 6.5s2.892 6.5 6.458 6.5 6.458-2.91 6.458-6.5c1e-3 -0.448-0.044-0.886-0.13-1.308z"/>
                                                <path d="m12.813 1.35c0.061-0.117 0.104-0.244 0.104-0.385 0-0.462-0.364-0.836-0.814-0.836-0.226 0-0.429 0.094-0.576 0.246l-0.016-0.012-4.407 5.823h-5e-3c-0.149 0.169-0.36 0.28-0.6 0.28-0.241 0-0.451-0.112-0.6-0.282l-1.358-1.027-0.012 0.015c-0.12-0.072-0.253-0.125-0.403-0.125-0.449 0-0.813 0.374-0.813 0.835 0 0.229 0.09 0.436 0.235 0.586l-4e-3 5e-3 2.126 1.609-0.017 0.022 0.712 0.54c0.011-2e-3 0.025-5e-3 0.036-7e-3 0.133 0.095 0.285 0.164 0.459 0.164 0.293 0 0.538-0.167 0.682-0.405 4e-3 -1e-3 9e-3 -2e-3 0.013-3e-3l0.46-0.607-0.03-0.023 4.843-6.401-0.015-0.012z"/>
                                            </svg>
                                            {
                                                React.Children.map(ulChild.props.children, (liChil, i) => {
                                                    if (liChil.type == 'a') return <a href={liChil.props.url} target={liChil.props.blank?'_blank':'_self'} rel='noopener' >{liChil.props.children}</a>
                                                    return liChil
                                                })
                                            }
                                        </li>
                                    })}</ul>
                                })
                            }
                        </ul>
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
                    background: #f1f3f8;
                    text-align:left;
                    padding: 0;
                    margin:-66px 0 0;
                    position:relative;
                }
                div.headerMask {
                    position: absolute;
                    bottom: 0;
                    left: calc(100% + 40px);
                    height: calc(100% + 5vh);
                    text-align: right;
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.headerMask.translate {
                    transform: translateX(100%);
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.headerMask:after {
                    content: '';
                    background: linear-gradient(93deg,transparent 70px,#dfe6f1 210px,#dfe6f1 400px,#c8d6ea 1000px);
                    width: 40vw;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 70%;
                }
                div.headerMask picture, div.headerMask img {
                    height:100%;
                    margin: 0 0 0 auto;
                    display: block;
                    border-radius: 400px 0 0 400px;
                    overflow: hidden;
                }
                div.headerBG picture, div.headerBG img {
                    height: 100%;
                    margin: 0 0 0 auto;
                    display: block;
                }
                div.headerBG {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: auto;
                    height: 100%;
                    text-align: right;
                    opacity:0.3;
                    overflow: hidden;
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.headerBG.translate {
                    transform: translateX(-100%);
                    transition: transform 1s cubic-bezier(.05,.88,.58,.54);
                }
                div.container {
                    display:block;
                    width: 1100px;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: calc(5vh + 66px) 0 0;
                    position:relative;
                }
                article {
                    width: 650px;
                    max-width: 90%;
                    display:inline-block;
                    color:#174676;
                    text-align: left;
                    padding-left: 20px;
                    padding-bottom:40px;
                    position:relative;
                }
                h1 {
                    font-size:2.8rem;
                    line-height:3.2rem;
                    font-weight:400;
                    display: inline-block;
                    margin:0;
                }
                h1 b {
                    font-weight:700;
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
                p {
                    font-size: 1.2rem;
                    line-height:1.5rem;
                    font-weight: 200;
                    padding-bottom:15px;
                    min-height:7.5rem;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 40px;
                }
                ul li {
                    padding: 0 0 7px 20px;
                    font-size: 0.9rem;
                }
                ul li svg {
                    height: 1em;
                    padding: 0 7px 0 0;
                    color:#ffffff;
                    fill:#ffffff;
                }
                ul li svg path {
                    fill:#ffffff;
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

export default HeaderPageFunc