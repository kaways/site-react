import DefaultTrialForm from '../forms/DefaultTrialForm';
import HeaderTyping from '../home/HeaderTyping';
import LazyLoad from 'react-lazyload';

class HeaderHomeDefault extends React.Component {
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
        return (
            <section>
                <div className="headerMask">
                    <LazyLoad once height={'100%'}><picture>
                        <source srcSet={require('../../static/images/layouts/home/header-mask.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/home/header-mask.png')} type="image/png" />
                        <img alt='header-mask' title='header-mask' width='auto' height='100%' src={require('../../static/images/layouts/home/header-mask.png')} />
                    </picture></LazyLoad>
                </div>
                <div className="container">
                    <article>
                        <h1>Sistema de gestão ideal para você</h1>
                        <HeaderTyping />
                        <p>O VHSYS integra todas as áreas do seu negócio proporcionando o total controle financeiro, de vendas, estoque e emissões de notas fiscais.</p>
                        <form className="form_opener" onSubmit={this.onClick}>
                            <input aria-label="Insira seu E-mail" type="email" name="email" onChange={this.onChangeEmail} className={this.state.emailErr} placeholder="Informe o seu e-mail" />
                            <button aria-label='Experimente Grátis' type="submit" className={this.state.visible}>Experimente Grátis</button>
                        </form>
                        {this.state.visible ? <DefaultTrialForm closeform={this.handleFormUnmount} emailvalue={this.state.emailPre} /> : null}
                        <small>Não pedimos cartão de crédito. Teste sem compromisso.</small>
                    </article>
                </div>
                <style jsx>{`
                section {
                    background-color: #345d9d;
                    background: linear-gradient(to top, #2ea7bc, #345d9d);
                    text-align:left;
                    padding: 0;
                    margin: -66px 0 0;
                    position:relative;
                }
                section::after {
                    content: '';
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 40px;
                    position: absolute;
                    background-image: radial-gradient(ellipse at top center, transparent 71%, #fff 72%);
                }
                div.headerMask {
                    position:absolute;
                    bottom: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    text-align:right;
                }
                div.container {
                    display:block;
                    width: 1100px;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: calc(10vh + 66px) 0 10vh;
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
                h1 {
                    font-size:2.8rem;
                    line-height:3.2rem;
                    font-weight:200;
                    display: inline-block;
                    margin:0;
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
                    width: 350px;
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
                }
                .form_opener button:hover {
                    background-color: #ffc000;
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
                }
                `}</style>
            </section>
        )
    }
}

export default HeaderHomeDefault