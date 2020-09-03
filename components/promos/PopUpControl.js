import PopUpDefault from './popups/PopUpDefaul'
import ExperimenteBtn from '../buttons/ExperimenteBtn'

export default class PopUpControl extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    
    render() {
        return (
            <div>
                {this.props.pupType=='Fev30'?
                <PopUpDefault >
                    <source srcSet={require('../../../static/images/campanhas/2019/02/banner10/certificado.png?webp')} type="image/webp" />
                    <source srcSet={require('../../../static/images/campanhas/2019/02/banner10/certificado.png')} type="image/png" />
                    <img alt='certificado' title='certificado' width='297px' height='91px' src={require('../../../static/images/campanhas/2019/02/banner10/certificado.png')} />
                    <p>teste de texto</p>
                    
                </PopUpDefault>
                :
                <ExperimenteBtn />
                }
            </div>
        )
    }
}
