import CallMeForm from '../forms/CallMeForm'
import ExperimenteBtn from '../buttons/ExperimenteBtn'

class Callus extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.handleFormUnmount = this.handleFormUnmount.bind(this);
        this.dataLayerPushCall = this.dataLayerPushCall.bind(this);
        this.dataLayerPushBuy = this.dataLayerPushBuy.bind(this);

        this.state = {
            visible: false,
            email: '',
            emailErr: false,
        }
    }
    
    dataLayerPushCall(type) {
        if (typeof window !== 'undefined') 
        {
            window.dataLayer.push({
                'event': 'clickToCall',
                'callNumber': type
            });
        }
    }

    dataLayerPushBuy(type) {
        if (typeof window !== 'undefined') 
        {
            window.dataLayer.push({
                'ecommerce': {
                    'promoClick': {
                        'promotions': 
                        [{
                            'id': 'Top Banner',
                            'name': 'Barra Default Top',
                            'creative': 'banner1',
                            'position': type
                        }]
                    }
                }
            });
        }
    }

    onClick(e) {
        e.preventDefault()
        this.dataLayerPushBuy('Me Ligue')
        if (!this.state.visible) {
            this.setState({
                visible: true
            })
        }
    }

    handleFormUnmount(){
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section className={this.props.bgColor} >
                <article>
                    <img alt='telefone_cyan' title='telefone_cyan' width='20px' height='20px' src={require('../../static/images/vetor/icons/telefone_cyan.svg')} />
                    <span onClick={()=>{this.dataLayerPushCall('Telefone de Contato')}}>
                        Fale conosco <strong>0800 007 0017</strong>
                    </span>
                </article>
                <article>
                    <img alt='whatsapp_cyan' title='whatsapp_cyan' width='20px' height='20px' src={require('../../static/images/vetor/icons/whatsapp_cyan.svg')} />
                    <a aria-label="Numero WhatsApp" rel="noopener" href="https://api.whatsapp.com/send?phone=5541991886054&text=Ol%C3%A1!%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20que%20o%20VHSYS%20oferece?" target="_blank" onClick={()=>{this.dataLayerPushCall('WhatsApp')}}>
                        WhatsApp <strong>(41) 9 9188-6054</strong>
                    </a>
                </article>
                <button aria-label='Nós ligamos' onClick={this.onClick}>Nós ligamos</button>
                <ExperimenteBtn btnText='Experimente Grátis' btnStyle="callus" onClick={()=>{this.dataLayerPushBuy('Experimente')}} />
                {this.state.visible ? <CallMeForm closeform={this.handleFormUnmount} /> : null}

            <style jsx>{`
                section {
                    height: 40px;
                    width:100%;
                    font-size:0.9rem;
                    padding:0;
                    text-align:center;
                    overflow: hidden;
                }
                section.white {
                    background-color:#ffffff;
                }
                section img {
                    max-height: 20px;
                    width:auto;
                    vertical-align: middle;
                }
                article {
                    display: inline-block;
                    margin: 0 20px;
                    color:#365d9d;
                    height:30px;
                    padding:5px 0;
                }
                span, a {
                    display:inline-block;
                    vertical-align: middle;
                    padding-left:10px;
                    text-decoration:none;
                    color:#365d9d;
                    transition:0.2s;
                }
                a:hover {
                    color:#3abad0;
                    transition:0.2s;
                }
                span strong, a strong{
                    font-size:1rem;
                    padding-left: 5px;
                    font-weight: 700;
                }
                button {
                    margin: 5px 0 5px 20px;
                    border: 1px solid #365d9d;
                    background-color: #ffffff;
                    padding:5px 20px;
                    border-radius: 20px;
                    color: #365d9d;
                    font-weight:400;
                    transition: background-color 0.2s linear, color 0.2s linear;
                    cursor:pointer;
                    text-transform:uppercase;
                    font-weight: 400;
                    font-size: 0.9rem;
                    line-height: 1rem;
                }
                button:hover {
                    background-color: #365d9d;
                    color: #ffffff;
                    transition: background-color 0.2s linear, color 0.2s linear;
                }
                @media (max-width:860px){
                    section {
                        background-color: #ffffff;
                    }
                    article {
                        display: inline-block;
                        margin: 0 20px;
                        color:#ffffff;
                    }
                }
            `}</style>

            </section>
        )
    }
}

export default Callus