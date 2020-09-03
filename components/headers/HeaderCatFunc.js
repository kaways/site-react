import DefaultTrialForm from '../forms/DefaultTrialForm'
import LazyLoad from 'react-lazyload'

function chooseRequire_bg(imgName) {
    switch(imgName) {
        case 'emissor-nf': return {
            'webp':require('../../static/images/layouts/funcionalidades/emissor-nota-fiscal/header-bg.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/emissor-nota-fiscal/header-bg.png')
        }
        case 'controle-financeiro': return {
            'webp':require('../../static/images/layouts/funcionalidades/controle-financeiro/header-bg.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/controle-financeiro/header-bg.png')
        }
        case 'controle-de-vendas': return {
            'webp':require('../../static/images/layouts/funcionalidades/controle-de-vendas/header-bg.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/controle-de-vendas/header-bg.png')
        }
        case 'controle-de-estoque': return {
            'webp':require('../../static/images/layouts/funcionalidades/controle-de-estoque/header-bg.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/controle-de-estoque/header-bg.png')
        }
        case 'certificado-dg': return {
            'webp':require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/header-bg.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/header-bg.png')
        }
    }
}
function chooseRequire_mask(imgName) {
    switch(imgName) {
        case 'emissor-nf': return {
            'webp':require('../../static/images/layouts/funcionalidades/catHeader-mask.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/catHeader-mask.png')
        }
        case 'controle-financeiro': return {
            'webp':require('../../static/images/layouts/funcionalidades/catHeader-mask.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/catHeader-mask.png')
        }
        case 'controle-de-vendas': return {
            'webp':require('../../static/images/layouts/funcionalidades/catHeader-mask.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/catHeader-mask.png')
        }
        case 'controle-de-estoque': return {
            'webp':require('../../static/images/layouts/funcionalidades/catHeader-mask.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/catHeader-mask.png')
        }
        case 'certificado-dg': return {
            'webp':require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/header-mask.png?webp'),
            'png':require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/header-mask.png')
        }
    }
}

class HeaderCatFunc extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleFormUnmount = this.handleFormUnmount.bind(this);
        
        this.state = {
            visible: false,
            emailPre: '',
            emailErr: false
        }
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
        const headerSrcBG = chooseRequire_bg(this.props.imgName)
        const headerSrcMask = chooseRequire_mask(this.props.imgName)
        const children = this.props.children
        return (
            <section className={this.props.headerStyle}>
                <div className="headerMask">
                    <LazyLoad once height={'100%'}><picture>
                        <source srcSet={headerSrcMask.webp} type="image/webp" />
                        <source srcSet={headerSrcMask.png} type="image/png" />
                        <img alt='header-bg' title='header-bg' width='auto' height='100%' src={headerSrcMask.png} />
                    </picture></LazyLoad>
                </div>
                <div className="headerBG">
                    <LazyLoad once height={'100%'}><picture>
                        <source srcSet={headerSrcBG.webp} type="image/webp" />
                        <source srcSet={headerSrcBG.png} type="image/png" />
                        <img alt='header-bg' title='header-bg' width='auto' height='100%' src={headerSrcBG.png} />
                    </picture></LazyLoad>
                </div>
                <div className="container">
                    <article>
                        {this.props.breadcrumbs}
                        <h1>{this.props.h1n}<b>{this.props.h1b}</b></h1>
                        <p>{this.props.subtitulo}</p>
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
                                    if (child.type == 'picture') return <LazyLoad once height={288}><picture>{
                                        React.Children.map(child.props.children, (imgChild) => {
                                            if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                                            if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                                        })
                                    }</picture></LazyLoad>
                                })
                            }
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
                    text-align:left;
                    padding: 0;
                    margin:-66px 0 0;
                    position:relative;
                }
                section.emissor {
                    background: #0ea0ac;
                }
                section.financeiro {
                    background: #7833a8;
                }
                section.financeiro .headerMask {
                    filter: contrast(1) brightness(0.8) hue-rotate(94deg);
                }
                section.vendas {
                    background: #fccb18;
                    color: rgb(23, 70, 118);;
                }
                section.vendas .headerMask {
                    filter: contrast(1) brightness(0.8) hue-rotate(235deg);
                }
                section.vendas article{
                    color: rgb(23, 70, 118);
                }
                section.estoque {
                    background: #335fa8;
                }
                section.estoque .headerMask {
                    filter: contrast(1) brightness(0.8) hue-rotate(54deg);
                }
                section.certificado {
                    background: #13dbeb;
                }
                section::after {
                    content: '';
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 40px;
                    position: absolute;
                    background-image: radial-gradient(ellipse at top center, transparent 71%, #ffffff 72%);
                }
                section.grayMask::after {
                    background-image: radial-gradient(ellipse at top center, transparent 71%, #f6f7fb 72%);
                }
                div.headerBG {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    height: calc(100% - 66px);
                    text-align: right;
                    display: block;
                }
                @media (min-width: 2100px) {
                    div.headerBG {
                        left: auto;
                        right:0;
                    }
                }
                div.headerMask {
                    position: absolute;
                    bottom: 0;
                    right: 50%;
                    transform: translateX(50%);
                    width: auto;
                    height: 100%;
                    text-align: right;
                }
                div.headerMask picture, div.headerMask img {
                    height:100%;
                    display:block;
                    margin: 0 0 0 auto;
                }
                div.container {
                    display:block;
                    width: 1100px;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: calc(5vh + 66px) 0 5vh;
                    position:relative;
                }
                article {
                    width: 650px;
                    max-width: 90%;
                    display:inline-block;
                    color:#ffffff;
                    text-align: left;
                    padding-left: 20px;
                }
                .certificado article {
                    text-align: center;
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
                .certificado h1 {
                    color: #7b18c6;
                    font-size: 3.9rem;
                    line-height: 3.9rem;
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
                img {
                    margin-bottom:20px;
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
                    
                    div.headerBG {
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

export default HeaderCatFunc