import { withRouter } from 'next/router'
import axios from 'axios'
import InputMask from 'react-input-mask'

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {
        begin = cookies.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end == -1) {
        end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
}

class DefaultTrialForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: 'closed',
            enviando: false,
            success: false,
            fail: false,
            nome: '',
            email: this.props.emailvalue,
            mask: '(99)9999-99999',
            fone: '',
            usuario: '',
            senha: '',
            nomeOk: false,
            emailOk: false,
            foneOk: false,
            usuarioOk: false,
            senhaOk: false,
            formOk: true,
            origemAcesso: '',
            origemCaminho: '',
            parceiro: '',
            contabilidade: '',
            cupom: '',
            nomeErr: false,
            emailErr: false,
            foneErr: false,
            usuarioErr: false,
            senhaErr: false,
        };

        this.formCloseHandle = this.formCloseHandle.bind(this)
        this.formSuccessHandle = this.formSuccessHandle.bind(this)
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeFone = this.onChangeFone.bind(this)
        this.onChangeUsuario = this.onChangeUsuario.bind(this)
        this.onChangeSenha = this.onChangeSenha.bind(this)
        this.autoLogIn = this.autoLogIn.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const {router} = this.props;
        if (this.props.emailvalue != '') {
            this.setState({emailOk: true})
        }
        setTimeout(function() {
            let origemAcessoCookie = getCookie('origemAcesso')?getCookie('origemAcesso'):''
            let origemCaminhoCookie = getCookie('origemAcessoCaminho')?getCookie('origemAcessoCaminho'):''
            let parceiroCookie = getCookie('trial_parceiro')?getCookie('trial_parceiro'):''
            let contabilidadeCookie = getCookie('trial_contabilidade')?getCookie('trial_contabilidade'):''
            let cupomCookie = router.query.cupom?router.query.cupom:getCookie('trial_cupom')

            this.setState({
                visible: 'open',
                origemAcesso: origemAcessoCookie,
                origemCaminho: origemCaminhoCookie,
                parceiro: parceiroCookie,
                contabilidade: contabilidadeCookie,
                cupom: cupomCookie
            })
        }.bind(this), 50)
        setTimeout(function() {
            if (this.props.emailvalue) {
                this.nomeInput.focus();
            } else {
                this.mailInput.focus();
            }
        }.bind(this), 500)
    }

    formCloseHandle() {
        this.setState({visible: 'close'})
        setTimeout(function() {
            this.props.closeform()
        }.bind(this), 200)
    }

    onChangeNome(e) {
        let nome = e.target.value
        if (nome.length >= 1) {
            this.setState({
                nome: nome,
                nomeOk: true,
                nomeErr: false
            });
        } else {
            this.setState({
                nomeOk: false,
                nomeErr: 'Campo Obrigatório'
            });
        }
    }

    onChangeEmail(e) {
        let email = e.target.value
        if (email.length === 0) {
            this.setState({
                email: email,
                emailOk: false,
                emailErr: 'Campo Obrigatório',
            });
        } else {
            if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email)) {
                this.setState({
                    email: email,
                    emailOk: true,
                    emailErr: false
                });
            } else {
                this.setState({
                    email: email,
                    emailOk: false,
                    emailErr: 'Insira um email válido',
                });
            }
        }
    }

    onChangeFone(e) {
        let phoneNumber = e.target.value
        phoneNumber = phoneNumber.replace(/ /gi, "")
        if (phoneNumber.length > 13) {
            this.setState({
                mask: '(99)99999-9999'
            })
        } else {
            this.setState({
                mask: '(99)9999-99999'
            })
        }
        if (phoneNumber.length >= 13) {
            this.setState({
                fone: phoneNumber,
                foneOk: true,
                foneErr: false
            });
        } else {
            this.setState({
                foneOk: false,
            });
        }
    }

    onChangeUsuario(e) {
        let usuario = e.target.value
        if (/^[a-zA-Z0-9_]*$/.test(usuario)) {
                this.setState({
                    usuario: usuario
                });
            if (usuario.length >= 4) {
                this.setState({
                    usuarioOk: true,
                    usuarioErr: false,
                });
            } else {
                this.setState({
                    usuarioOk: false,
                    usuarioErr: 'O usuário deve ter 4 ou mais caracteres'
                });
            }
        }
    }

    onChangeSenha(e) {
        let senha = e.target.value
        if (senha.length >= 4) {
            this.setState({
                senha: senha,
                senhaOk: true,
                senhaErr: false
            });
        } else {
            this.setState({
                senhaOk: false,
                senhaErr: 'A senha deve ter 4 ou mais caracteres'
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if( !(this.state.enviando) && this.state.nomeOk && this.state.emailOk && this.state.foneOk && this.state.usuarioOk && this.state.senhaOk ) {
            this.setState({
                formOk: true,
                enviando: true
            });
            
           let formData = new FormData();
            formData.append('email_empresa', this.state.email)
            formData.append('responsavel_empresa', this.state.nome)
            formData.append('razao_empresa', this.state.nome)
            formData.append('fone_empresa', this.state.fone)
            formData.append('login_usuario', this.state.usuario)
            formData.append('senha_usuario', this.state.senha)
            formData.append('social', '')
            formData.append('origem', this.state.origemAcesso)
            formData.append('origem_caminho', this.state.origemCaminho)
            formData.append('id_parceiro', this.state.parceiro)
            formData.append('id_contabilidade', this.state.contabilidade)
            formData.append('cupom_empresa', this.state.cupom)

        //    let data = {
        //        'email': this.state.email,
        //        'responsavel': this.state.nome,
        //        'fone': this.state.fone,
        //        'login': this.state.usuario,
        //        'senha': this.state.senha,
        //        'social': '',
        //        'origem': this.state.origemAcesso,
        //        'origemCaminho': this.state.origemCaminho,
        //        'parceiro': this.state.parceiro,
        //        'contabilidade': this.state.contabilidade,
        //        'cupom': this.state.cupom

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            axios.post("/criatrial", formData, config)
            .then((result) => {
                if(result.data.retorno.Erro._text === '0') {
                    this.formSuccessHandle();
                } else if(result.data.retorno.Erro._text === '1'){
                    this.setState({
                        formOk: false,
                        enviando: false
                    });
                    if (result.data.retorno.xMotivo._text == 'Informe um e-mail vÃ¡lido!') {
                        this.setState({
                            email: '',
                            emailOk: false,
                            emailErr: 'Informe um e-mail válido'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Este e-mail jÃ¡ foi utilizado!') {
                        this.setState({
                            email: '',
                            emailOk: false,
                            emailErr: 'Esse email já foi usado'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Informe a razao social!') {
                        this.setState({
                            nome: '',
                            nomeOk: false,
                            nomeErr: 'Informe seu nome'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Informe um telefone vÃ¡lido!') {
                        this.setState({
                            fone: '',
                            foneOk: false,
                            foneErr: 'Informe um telefone válido'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Informe o login!') {
                        this.setState({
                            usuario: '',
                            usuarioOk: false,
                            usuarioErr: 'Informe um usuario'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Este usuÃ¡rio jÃ¡ foi utilizado!') {
                        this.setState({
                            usuario: '',
                            usuarioOk: false,
                            usuarioErr: 'Nome de usuario indisponivel'
                        });
                    } else if (result.data.retorno.xMotivo._text == 'Informe a senha!') {
                        this.setState({
                            senha: '',
                            senhaOk: false,
                            senhaErr: 'Informe uma senha'
                        });
                    }
                }
            })
        } else {
            this.setState({
                formOk: false
            });
        }
    }

    formSuccessHandle() {
        dataLayer.push({'event': 'formSubmitted', 'formName': 'Experimente Grátis'});
        this.setState({success:true})
        setTimeout(function() {
            this.setState({visible:'close'})
            this.props.closeform()
            this.autoLogIn(this.state.usuario, this.state.senha)
        }.bind(this), 5000)
    }

    autoLogIn(login, senha) {
        var form = document.createElement("form");
        var element1 = document.createElement("input");
        var element2 = document.createElement("input");
    
        form.method = "POST";
        form.action = "https://app.vhsys.com.br/index.php?Logar=Sim&Cadastrado=1";
    
        element1.value=login;
        element1.name="login";
        form.appendChild(element1);

        element2.value=senha;
        element2.name="senha";
        form.appendChild(element2);

        document.body.appendChild(form);

        form.submit();
    }

    render() {
        return (
            <div id="register-wrapper" className={this.state.visible}>
                <form id="form_experimente" onSubmit={this.onSubmit}>
                    <div id="sysmsg" className={(this.state.success || this.state.fail)?'visible':null}><p>{this.state.success?'Cadastro efetuado com sucesso! Aguarde...':'Houve um erro, por favor tente novamente em alguns instantes.'}</p></div>
                    <span className="close-btn" onClick={this.formCloseHandle}>Fechar</span>
                    <h5>Experimente Grátis</h5>

                    <div className={this.state.emailErr?'error visible':'error'}><small >{this.state.emailErr?this.state.emailErr:null}</small></div>
                    <input ref={(input) => { this.mailInput = input; }} type="email" defaultValue={this.state.email} onChange={this.onChangeEmail} className={(this.state.emailOk)?null:'error'} placeholder="Informe o seu e-mail"/>

                    <div className={this.state.nomeErr?'error visible':'error'}><small >{this.state.nomeErr?this.state.nomeErr:null}</small></div>
                    <input ref={(input) => { this.nomeInput = input; }}  type="text" onChange={this.onChangeNome} className={(this.state.nomeOk || this.state.formOk)?'':'error'} placeholder="Digite seu Nome" />

                    <div className={this.state.foneErr?'error visible':'error'}><small >{this.state.foneErr?this.state.foneErr:null}</small></div>
                    <InputMask mask={this.state.mask} onChange={this.onChange} maskChar=" " className={(this.state.foneOk || this.state.formOk)?'inputMask':'inputMask error'} onChange={this.onChangeFone} placeholder="Digite seu Telefone"  />

                    <div className={this.state.usuarioErr?'error visible':'error'}><small >{this.state.usuarioErr?this.state.usuarioErr:null}</small></div>
                    <input type="text" defaultValue={this.state.usuario} onChange={this.onChangeUsuario} className={(this.state.usuarioOk || this.state.formOk)?null:'error'} placeholder="Digite seu Nome de Usuário" />

                    <div className={this.state.senhaErr?'error visible':'error'}><small >{this.state.senhaErr?this.state.senhaErr:null}</small></div>
                    <input type="password" onChange={this.onChangeSenha} className={(this.state.senhaOk || this.state.formOk)?null:'error'} placeholder="Digite sua Senha" />

                    <button aria-label={this.state.enviando?'Aguarde...':'Experimente Grátis'} type="submit" onClick={this.onSubmit}>{this.state.enviando?'Aguarde...':'Experimente Grátis'}</button>
                    <small className="notice">
                    Clicando no botão acima você concorda com nossos <a href="/termos-de-uso/">termos de uso</a>
                    </small>
                </form>
                <style jsx>{`
                    div#register-wrapper {
                        position: fixed;
                        width: 100%;
                        height: 100vh;
                        bottom: 100%;
                        left: 0;
                        opacity: 0;
                        visibility: hidden;
                        padding: 0;
                        background: rgba(11, 35, 59, 0.7);
                        z-index: 35;
                        transition: 0.3s;
                        text-align:center;
                        box-shadow: 0px 0px 0px 100vh rgba(11, 35, 59, 0.7);
                    }
                    div#register-wrapper.open {
                        bottom: 0;
                        opacity:1;
                        visibility:visible;
                    }
                    form#form_experimente {
                        position:relative;
                        width: 500px;
                        max-width:calc(100% - 60px);
                        display: inline-block;
                        margin-top: calc(50vh - 235px);
                        background: radial-gradient(circle at top right,#174676 40%,#356c91);
                        padding: 30px 5px 20px;
                        border-radius: 10px 10px 10px 10px;
                        border: 2px solid #FFF;
                    }
                    form#form_experimente h5 {
                        font-size: 2rem;
                        line-height: 2rem;
                        color: #ffffff;
                        margin: 0;
                        font-weight: 100;
                        padding-bottom: 30px;
                    }
                    form#form_experimente input {
                        width: calc(100% - 120px);
                        margin-bottom: 10px;
                        padding: 13px 30px;
                        border-radius: 5px;
                        border: 0;
                        color: #4a4a4a;
                    }
                    form#form_experimente input.error {
                        background-color:#ffc3c3;
                        color: #ab0707;
                    }
                    form#form_experimente button {
                        display: block;
                        width: 200px;
                        margin: 15px auto;
                        padding: 10px 0;
                        border: 0;
                        border-radius: 20px;
                        background-color:#4fc35d;
                        color:#ffffff;
                        font-weight:600;
                        cursor:pointer;
                    }
                    form#form_experimente a {
                        color: white;
                        font-weight: 600;
                    }
                    .close-btn {
                        position: absolute;
                        top: -35px;
                        right: -2px;
                        background-color: #fff;
                        height: 60px;
                        border-radius: 25px 25px 0 0;
                        z-index: -1;
                        color: #1b2e4e;
                        font-family: "Titillium Web",sans-serif;
                        font-size: 1.5rem;
                        padding: 3px 20px;
                        line-height: 2rem;
                        cursor: pointer;
                        transition:0.2s;
                    }
                    .close-btn:hover {
                        background-color: #d5f8ff;
                        top: -40px;
                    }
                    div#sysmsg {
                        position:absolute;
                        bottom:0;
                        right:100%;
                        width:100%;
                        height:100%;
                        color:white;
                        opacity:0;
                        background-color: #1b2e4e;
                        border-radius: 30px;
                        transition:opacity 0.2s linear, right 0.01s 0.3s linear;
                    }
                    div#sysmsg p{
                        font-size: 1.4rem;
                        font-family: 'Titillium Web', Arial, Tahoma, Sans-Serif;
                        padding: 90px 40px 0;
                        color:#ffffff;
                    }
                    div#sysmsg.visible{
                        opacity:1;
                        right:0;
                        transition:opacity 0.2s linear;
                    }
                    div.error {
                        font-size: 0.8rem;
                        line-height: 1rem;
                        display: block;
                        text-align: right;
                        position: relative;
                    }
                    div.error small{
                        font-size: 0.9rem;
                        line-height: 1rem;
                        display: none;
                        text-align: center;
                        background-color: #ffffff;
                        color: #a71227;
                        font-weight: 500;
                        padding: 5px 10px;
                        border-radius: 2px 2px 0 0;
                        margin: 0 30px 10px;
                        position: relative;
                        transition: 0.2s;
                    }
                    div.error.visible small{
                        display: inline-block;
                        position: relative;
                        transition: 0.2s;
                        margin-bottom: -20px;

                    }
                    small.notice {
                        color:white;
                    }
                `}</style>
            </div>
        )
    }
}

export default withRouter(DefaultTrialForm)