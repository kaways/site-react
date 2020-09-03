import CountUp from 'react-countup'
import Waypoint from 'react-waypoint'

class SimpleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter01: 0,
            counter02: 0,
            counter03: 0
        };
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        this.setState({
            counter01: parseInt(this.props.value01),
            counter02: parseInt(this.props.value02),
            counter03: parseInt(this.props.value03)
        })
    }

    render() {
        return (
            <section>
                <div className="tripleCounter">
                    <div className="tripleCell">
                        <b>{this.props.pre01}</b>
                        <CountUp
                            start={0}
                            end={this.state.counter01}
                            duration={3}
                            delay={1.5}
                            separator=" "
                            decimals={0}
                        />
                        <b>{this.props.pos01}</b>
                        <strong>{this.props.texto01}</strong>
                    </div>
                    <div className="tripleCell">
                        <b>{this.props.pre02}</b>
                        <CountUp
                            start={0}
                            end={this.state.counter02}
                            duration={3}
                            delay={1.5}
                            separator=" "
                            decimals={0}
                        />
                        <b>{this.props.pos02}</b>
                        <strong>{this.props.texto02}</strong>
                    </div>
                    <div className="tripleCell">
                        <b>{this.props.pre03}</b>
                        <CountUp
                            start={0}
                            end={this.state.counter03}
                            duration={3}
                            delay={1.5}
                            separator=" "
                            decimals={0}
                        />
                        <b>{this.props.pos03}</b>
                        <strong>{this.props.texto03}</strong>
                    </div>
                </div>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                <style jsx>{`
                    section {
                        width:100%;
                        background: radial-gradient(circle at center,#2e5c9e 45%,#243372 95%);
                        padding: 1px 0;
                    }
                    .tripleCounter {
                        color:#ffffff;
                        text-align:center;
                        width:1100px;
                        max-width:calc(100% - 100px);
                        margin:30px auto;
                    }
                    .tripleCell {
                        width: 325px;
                        max-width: 100%;
                        color: #fbce39;
                        font-size: 3rem;
                        line-height: 2.4rem;
                        font-weight: 600;
                        padding: 15px 20px;
                        display: inline-block;
                        vertical-align: top;
                        font-family:'Titillium Web', Arial, Tahoma, Sans-Serif;
                    }
                    .tripleCell b {
                        color: #fbce39;
                        font-size: 2.4rem;
                        line-height: 2.4rem;
                        font-weight: 600;
                        padding: 0 10px;
                        display: inline-block;
                        vertical-align: initial;
                        font-family:'Titillium Web', Arial, Tahoma, Sans-Serif;
                        
                    }
                    .tripleCell strong {
                        color:#ffffff;
                        display: block;
                        font-size: 1.2rem;
                        line-height: 1;
                        font-weight:400;
                    }
                `}</style>
            </section>
        )
    }
}
export default SimpleCounter