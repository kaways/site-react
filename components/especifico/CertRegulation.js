import axios from 'axios';

class CertRegulation extends React.Component {
    constructor(props) {
        super(props);

        this.formCloseHandle = this.formCloseHandle.bind(this);

        this.state = {
            visible: 'closed',
        };
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({visible: 'open'})
        }.bind(this), 50)
    }

    formCloseHandle() {
        this.setState({visible: 'close'})
        setTimeout(function() {
            this.props.closeform()
        }.bind(this), 200)
    }

    render() {
        return (
            <section className={this.state.visible}>
                <article>
                    <span className="close-btn" onClick={this.formCloseHandle}>Fechar</span>
                    <div className='overflow'>
                    <h3>REGULAMENTO DA PROMOÇÃO CERTIFICADO DIGITAL GRATUITO</h3>
                    
                    <p><strong>1.</strong> DADOS DA EMPRESA PROMOTORA</p>

                    <p><strong>1.1</strong> A ação promocional “Certificado Digital Gratuito” é uma realização da empresa VHSYS SISTEMA DE GESTÃO S.A. com sede em São José dos Pinhais - PR, na rua Tenente Djalma Dutra, 915. 7º andar - CEP: 83005-360. Inscrita no CNPJ: 12.702.717/0001-64;</p>


                    <p><strong>2.</strong> DADOS DO PRODUTO</p>

                    <p><strong>2.1</strong> O Certificado Digital é do tipo A1, que funciona como uma identidade digital da pessoa física e jurídica no ambiente virtual.</p>

                    <p><strong>2.2</strong> O certificado é válido por 12 (doze) meses. Depois poderá ser renovado junto à certificadora.</p>

                    <p><strong>2.3</strong> A certificadora responsável pelo certificado digital A1 é a Certisign.</p>


                    <p><strong>3.</strong> REGULAMENTO GERAL DA PROMOÇÃO</p>

                    <p><strong>3.1</strong> A promotora concederá sem custos ao cliente/consumidor final um Certificado Digital tipo A1 desde que:</p>

                    <p><strong>a</strong> - O sistema de gestão empresarial VHSYS seja contratado por um período anual;</p>

                    <p><strong>b</strong> -Conste a efetivação do pagamento do software;</p>

                    <p><strong>c</strong> - A contratação tenha sido feita durante o período vigente da promoção que concede o certificado gratuito;</p>

                    <p><strong>d</strong> - O cliente tenha ciência de sua responsabilidade em efetuar o cadastramento da pessoa física ou jurídica junto à certificadora para retirada do documento.</p>


                    <p><strong>4.</strong> SITUAÇÕES QUE NÃO DÃO DIREITO AO CERTIFICADO DIGITAL A1</p>

                    <p><strong>4.1</strong> Quando as promoções não indicam o certificado digital A1 gratuito:</p>

                    <p><strong>a</strong> - Promoção apenas com desconto na contratação anual do software, sem nenhuma especificação de desconto + certificado gratuito;</p>

                    <p><strong>b</strong> - Promoções relâmpago ou de curto prazo com várias modalidades de desconto (Ex: 40%, 50%, 60%, 70% e etc).</p>


                    <p>O cliente/consumidor deverá verificar a oferta antes de concluir a compra e em caso de dúvida entrar em contato com nossa Central de Atendimento – 0800 007 0017</p>
                    </div>
                </article>

                <style jsx>{`
                    section {
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
                    section.open {
                        bottom: 0;
                        opacity:1;
                        visibility:visible;
                    }
                    article {
                        position: relative;
                        width: 500px;
                        max-width: calc(100% - 60px);
                        display: inline-block;
                        margin-top: 20vh;
                        height: 50vh;
                        background: radial-gradient(circle at top right,rgb(235,249,255) 50%,rgb(255,255,255) 75%);
                        overflow: hidden;
                        padding: 30px 5px 0;
                        border-radius: 10px 10px 10px 10px;
                        border: 2px solid #FFF;
                    }
                    div.overflow {
                        overflow-y: scroll;
                        height: 100%;
                        width: calc(100% - 17px);
                        padding: 0 17px;
                    }
                    article h5 {
                        font-size: 2rem;
                        line-height: 2rem;
                        color: #ffffff;
                        margin: 0;
                        font-weight: 100;
                        padding-bottom: 30px;
                    }
                    article p {
                        text-align:left;
                    }
                    .close-btn {
                        position: absolute;
                        top: 0px;
                        right: -2px;
                        background-color: rgb(255, 255, 255);
                        height: 1.7rem;
                        border-radius: 14px;
                        z-index: 0;
                        color: rgb(27, 46, 78);
                        font-family: "Titillium Web",sans-serif;
                        font-size: 1.4rem;
                        padding: 3px 20px;
                        line-height: 1.7rem;
                        cursor: pointer;
                        transition: 0.2s;
                    }
                    .close-btn:hover {
                        box-shadow: 0px 0px 2px 1px rgb(255,218,218);
                        background: rgb(248, 228, 230);
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
            </section>
        )
    }
}

export default CertRegulation