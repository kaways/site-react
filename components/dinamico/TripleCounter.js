import CountUp from 'react-countup'
import Waypoint from 'react-waypoint'

class TripleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfCounter: 0,
            empresasCounter: 0,
            recursosCounter: 0
        };
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        this.setState({
            nfCounter: 2,
            empresasCounter: 150,
            recursosCounter: 40
        })
    }

    render() {
        return (
            <div className="tripleCounter">
                <div className="tripleCell">
                    <CountUp
                        start={0}
                        end={this.state.nfCounter}
                        duration={3.5}
                        delay={1.5}
                        separator=" "
                        decimals={0}
                    />
                    <b>milhões</b>
                    <strong>de Notas Fiscais emitidas</strong>
                </div>
                <div className="tripleCell">
                    <b>+<br />de</b>
                    <CountUp
                        start={0}
                        end={this.state.empresasCounter}
                        duration={3}
                        delay={1.5}
                        separator=" "
                        decimals={0}
                    />
                    <b>k</b>
                    <strong>empresas usaram o VHSYS</strong>
                </div>
                <div className="tripleCell">
                    <b>+<br />de</b>
                    <CountUp
                        start={0}
                        end={this.state.recursosCounter}
                        duration={4}
                        delay={1.5}
                        separator=" "
                        decimals={0}
                    />
                    <b>apps</b>
                    <strong>como recursos extras</strong>
                </div>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                <style jsx>{`
                    .tripleCounter {
                        color:#ffffff;
                        text-align:left;
                    }
                    .tripleCell {
                        width:30%;
                        min-width:180px;
                        color: #fbce39;
                        font-size: 4rem;
                        line-height: 1;
                        font-weight:600;
                        display:inline-block;
                        font-family:'Titillium Web', Arial, Tahoma, Sans-Serif;
                        text-align: center;
                        vertical-align:top;
                        margin: 10px 1.5% 0;
                    }
                    .tripleCell b {
                        display:inline-block;
                        font-size: 2rem;
                        line-height: 1;
                        font-weight:400;
                        text-align: center;
                    }
                    .tripleCell strong {
                        color:#ffffff;
                        display: block;
                        font-size: 1.2rem;
                        line-height: 1;
                        font-weight:400;
                    }
                `}</style>
            </div>
        )
    }
}
export default TripleCounter