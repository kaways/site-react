import axios from 'axios';

class GetPrice extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            pricePlan: '79,90',
            priceMei: '59,90'
        }
    }

    componentDidMount() {
        
        axios
        .post('/getplanos')
        .then(res => {
            let planPrice = 79.90
            let planDiscount = 0
            planPrice = res.data.data[0].mensal
            planDiscount = res.data.data[0].desconto.anual
            planPrice = parseFloat(planPrice.replace(',','.'))
            planPrice = (planPrice*((100-planDiscount)/100)).toLocaleString()
            this.setState({
                pricePlan: planPrice
            })
        })

        axios
        .post('/getmei')
        .then(res => {
            let meiPrice = 59.90
            let meiDiscount = 0
            meiPrice = res.data.data.mensal
            meiDiscount = res.data.data.desconto.anual
            meiPrice = parseFloat(meiPrice.replace(',','.'))
            meiPrice = (meiPrice*((100-meiDiscount)/100)).toLocaleString()
            this.setState({
                priceMei: meiPrice
            })
        })
    }

    render() {
        return (
            <span>
                {this.props.plan=='plan'?this.state.pricePlan:null}
                {this.props.plan=='mei'?this.state.priceMei:null}
            </span>
        )
    }
}
export default GetPrice