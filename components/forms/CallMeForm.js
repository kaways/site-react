import axios from 'axios';
import InputMask from 'react-input-mask';

class CallMeForm extends React.Component {
    constructor(props) {
        super(props);

        this.formCloseHandle = this.formCloseHandle.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFone = this.onChangeFone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            visible: 'closed',
            nome: '',
            nomeErr: false,
            nomeOk: false,
            email: '',
            emailErr: false,
            emailOk: false,
            fone: '',
            foneErr:false,
            foneOk: false,
            formOk: true,
            mask: '(99)9999-99999'
        };
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({visible: 'open'})
        }.bind(this), 50)
        setTimeout(function() {
            this.mailInput.focus();
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
                nome: encodeURI(nome),
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
            phoneNumber.replace(/\D/g, '')
            this.setState({
                fone: phoneNumber.replace(/^\(41\)/g, '').replace(/\D/g, ''),
                foneOk: true,
                foneErr: false
            });
        } else {
            this.setState({
                foneOk: false,
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if( !(this.state.enviando) && this.state.nomeOk && this.state.emailOk && this.state.foneOk ) {
            this.setState({
                formOk: true,
                enviando: true
            });

            let formData = new FormData();
            formData.append('email_usuario', this.state.email)
            formData.append('fone_usuario', this.state.fone)
            formData.append('nome_usuario', this.state.nome)

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            axios.post("/meligue", formData, config)
            .then((result) => {
                if ( result.data== 'Informe o n�mero a chamar' ) {
                    this.setState({
                        fone: '',
                        foneOk: false,
                        foneErr: 'Informe um telefone válido'
                    });
                } else {
                    this.formSuccessHandle();
                }
            })
        } else {
            this.setState({
                formOk: false
            });
        }
    }

    formSuccessHandle() {
        dataLayer.push({'event': 'formSubmitted', 'formName': 'Me Ligue'});
        this.setState({success:true})
        setTimeout(function() {
            this.setState({visible:'close'})
            this.props.closeform()
        }.bind(this), 5000)
    }

    render() {
        return (
            <div id="register-wrapper" className={this.state.visible}>
                <form id="form_experimente">
                <h5>Nós ligamos para você!</h5>
                    <div id="sysmsg" className={(this.state.success || this.state.fail)?'visible':null}><p>{this.state.success?'Envio bem sucedido, em instantes entraremos em contato.':'Houve um erro, por favor tente novamente em alguns instantes.'}</p></div>
                    <span className="close-btn" onClick={this.formCloseHandle}>Fechar</span>

                    <div className={this.state.emailErr?'error visible':'error'}><small >{this.state.emailErr?this.state.emailErr:null}</small></div>
                    <input ref={(input) => { this.mailInput = input; }} type="email" onChange={this.onChangeEmail} className={(this.state.emailOk || this.state.formOk)?null:'error'} placeholder="Informe o seu e-mail"/>

                    <div className={this.state.nomeErr?'error visible':'error'}><small >{this.state.nomeErr?this.state.nomeErr:null}</small></div>
                    <input type="text" onChange={this.onChangeNome} className={(this.state.nomeOk || this.state.formOk)?'':'error'} placeholder="Digite seu Nome" />

                    <div className={this.state.foneErr?'error visible':'error'}><small >{this.state.foneErr?this.state.foneErr:null}</small></div>
                    <InputMask mask={this.state.mask} onChange={this.onChange} maskChar=" " className={(this.state.foneOk || this.state.formOk)?'inputMask':'inputMask error'} onChange={this.onChangeFone} placeholder="Digite seu Telefone"  />

                    <button aria-label={this.state.enviando?'Aguarde...':'Me Ligue'} type="submit" onClick={this.onSubmit}>{this.state.enviando?'Aguarde...':'Me Ligue'}</button>
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
                        background: rgba(11,35,59,0.7);
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

export default CallMeForm