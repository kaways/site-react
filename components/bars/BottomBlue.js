import Waypoint from 'react-waypoint'
import DefaultTrialForm from '../forms/DefaultTrialForm'
import CallMeForm from '../forms/CallMeForm'
import _ from 'lodash'

let _isMounted = false

class BottomBlue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: 'fixed',
            show: '',
            visibleExp: false,
            visibleLig: false
        };
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);

        this.onClickExp = this.onClickExp.bind(this);
        this.onClickLig = this.onClickLig.bind(this);

        this.handleFormUnmount = this.handleFormUnmount.bind(this);
        this.dataLayerPushCall = this.dataLayerPushCall.bind(this);
        this.dataLayerPushBuy = this.dataLayerPushBuy.bind(this);
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
    
    onClickExp(e) {
        e.preventDefault()
        this.dataLayerPushBuy('Experimente')
        if (!this.state.visibleExp) {
            if(_isMounted){
                this.setState({visibleExp: true})
            }
        }
    }
    
    onClickLig(e) {
        e.preventDefault()
        if (!this.state.visibleLig) {
            if(_isMounted){
                this.setState({visibleLig: true})
            }
        }
    }

    handleFormUnmount(){
        if(_isMounted){
            this.setState({visibleExp: false});
        }
    }

    componentDidMount () {
        _isMounted = true
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', _.throttle(this.handleScroll, 500));
    }
    
    handleScroll() {
        let bottom = window.pageYOffset;
        if(bottom > 400) {
            if(_isMounted){
                this.setState({show: 'showing'});
            }
        } else {
            if(_isMounted){
                this.setState({show: ''});
            }
        }
    }

    onEnter() {
        if(_isMounted){
            this.setState({fixed: ''})
        }
    }

    onLeave() {
        if(_isMounted){
            this.setState({fixed:'fixed'})
        }
    }

    render() {
        return (
        <section id='bottomBlue'>
            <Waypoint
                onEnter={this.onEnter}
                leaveFunc={this.onLeave}
                onLeave={function(props){if(props.currentPosition == 'below'){this.props.leaveFunc()}}}>
            </Waypoint>
            <div className={"barContainer "+this.state.fixed+" "+this.state.show}>
                <div className="marginFix">
                    <button aria-label='Experimente Grátis' onClick={this.onClickExp} className={'exp'}>Experimente Grátis</button>
                    <a aria-label="Contrate Agora" href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/" className='con'onClick={()=>{this.dataLayerPushBuy('Contrate')}}>
                        Contrate Agora
                    </a>
                    <article>
                        <img alt='telefone' title='telefone' width='30px' height='30px' src={require('../../static/images/vetor/icons/telefone.svg')} />
                        <span onClick={()=>{this.dataLayerPushCall('Telefone de Contato')}}>
                            Fale conosco <strong>0800 007 0017</strong>
                        </span>
                    </article>
                    <article>
                        <a aria-label="Numero WhatsApp" rel="noopener" href="https://api.whatsapp.com/send?phone=5541991886054&text=Ol%C3%A1!%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20que%20o%20VHSYS%20oferece?" target="_blank" onClick={()=>{this.dataLayerPushCall('WhatsApp')}}>
                            <img alt='whatsapp' title='whatsapp' width='30px' height='30px' src={require('../../static/images/vetor/icons/whatsapp.svg')} />
                            <span>
                                WhatsApp <strong>(41) 9 9188-6054</strong>
                            </span>
                        </a>
                    </article>
                    <button aria-label='Nós ligamos' onClick={this.onClickLig} className={'lig'}>Nós ligamos</button>
                </div>
            </div>
            {this.state.visibleExp ? <DefaultTrialForm closeform={this.handleFormUnmount} emailvalue={undefined} /> : null}
            {this.state.visibleLig ? <CallMeForm closeform={this.handleFormUnmount} /> : null}
        <style jsx>{`
            section {
                width:100%;
                height: 65px;
                font-size:1rem;
                background-color: #174676;
            }
            div.barContainer {
                width:100%;
                height: 65px;
                background-color:#174676;
                bottom:0;
                left:0;
                color:#ffffff;
                padding:0;
                text-align:center;
                transition: 0.2s;
                z-index:5;
                overflow:hidden;
                position:relative;
                transform: translateY(70px) translateZ(0);
            }
            div.barContainer.fixed {
                position:fixed;
            }
            div.barContainer.showing {
                transform:translateY(0);
            }
            div.marginFix {
                width:1200px;
                max-width:90%;
                margin:0 auto;
            }
            section img {
                max-height: 30px;
                vertical-align: middle;
            }
            article {
                display: inline-block;
                margin: 10px 20px;
                color:#365d9d;
            }
            span {
                display:inline-block;
                vertical-align: middle;
                padding-left:10px;
                color:#ffffff;
                text-align:left;
                transition:0.2s;
            }
            span strong {
                display: block;
                text-align:left;
            }
            a span:hover {
                color: #4fc35d;
            }
            button.exp {
                float:left;
                display:inline-block;
                border: 0;
                font-size:1rem;
                line-height: 1.5rem;
                padding:7px 30px;
                margin:15px 15px 15px 0;
                border-radius:40px;
                text-decoration:none;
                font-weight:400;
                text-transform:uppercase;
                background-color:#00adbb;
                border-bottom: 3px solid #0b8791;
                color:#ffffff;
                transition: all 0.1s linear;
                cursor:pointer;
            }
            button.exp:hover {
                background-color:#0098a4;
                transition: all 0.1s linear;
            }
            a.con {
                display:inline-block;
                font-size:1rem;
                line-height: 1.5rem;
                margin-left:10px;
                padding:7px 30px;
                border-radius: 30px;
                color: #ffffff;
                font-weight:600;
                cursor:pointer;
                text-transform:uppercase;
                text-decoration:none;
                border-bottom: 4px solid #127a4b;
                background-color: #4fc35d;
                transition: background-color 0.2s linear, color 0.2s linear;
                margin:15px;
                float:left;
            }
            a.con:hover {
                background-color: #17a929;
                transition: background-color 0.2s linear, color 0.2s linear;
            }
            button.lig {
                display:inline-block;
                font-size:1rem;
                line-height: 1.5rem;
                padding:7px 30px;
                border:0;
                border-radius: 30px;
                color: #365d9d;
                font-weight:600;
                cursor:pointer;
                text-transform:uppercase;
                text-decoration:none;
                border-bottom: 4px solid #365d9d;
                background-color: #ffffff;
                transition: background-color 0.2s linear, color 0.2s linear;
                margin:15px 0 15px 15px;
                float:right;
            }
            button.lig:hover {
                background-color: #dadada;
                color: #365d9d;
                transition: background-color 0.2s linear, color 0.2s linear;
            }
            @media (max-width:1200px) {
                a.con, button.exp, button {
                    float:none;
                }
            }
        `}</style>
        </section>
        )
    }
}

export default BottomBlue