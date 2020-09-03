import DefaultTrialForm from '../forms/DefaultTrialForm';

class ExperimenteBtn extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.handleFormUnmount = this.handleFormUnmount.bind(this);

        this.state = {
            visible: false,
            emailPre: ''
        }
    }

    onClick(e) {
        e.preventDefault()
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
            <div className={this.props.mod}>
                <button aria-label={this.props.btnText} onClick={this.onClick} className={this.props.btnStyle}>{this.props.btnText}</button>
                {this.state.visible ? <DefaultTrialForm closeform={this.handleFormUnmount} emailvalue={this.state.emailPre} /> : null}
                <style jsx>{`
                    div {
                        display:inline-block;
                    }
                    button {
                        display:inline-block;
                        padding: 15px 30px;
                        border: 0;
                        font-size: 1rem;
                        line-height: 1rem;
                        border-radius:40px;
                        margin:10px 20px 0;
                        text-decoration:none;
                        font-weight:400;
                        text-transform:uppercase;
                        background-color:#00adbb;
                        border-bottom: 3px solid #0b8791;
                        color:#ffffff;
                        transition: all 0.1s linear;
                        cursor:pointer;
                    }
                    button:hover {
                        background-color:#0098a4;
                        transition: all 0.1s linear;
                    }
                    button.green {
                        background-color:#4fc35d;
                        border-bottom: 3px solid #127a4b;
                        color:#ffffff;
                        transition: all 0.1s linear;
                    }
                    button.green:hover {
                        background-color:#44af51;
                        transition: all 0.1s linear;
                    }
                    button.callus {
                        margin: 5px 0 5px 20px;
                        border: 1px solid #4fc35d;
                        background-color: #4fc35d;
                        padding: 5px 20px;
                        border-radius: 20px;
                        display: inline-block;
                        color: #ffffff;
                        font-weight: 400;
                        font-size: 0.9rem;
                        line-height: 1rem;
                        transition: background-color 0.2s linear, color 0.2s linear;
                        cursor:pointer;
                        text-transform:uppercase;
                        text-decoration:none;
                    }
                    button.callus:hover {
                        background-color: #ffffff;
                        color: #4fc35d;
                        transition: background-color 0.2s linear, color 0.2s linear;
                        white-space:no-wrap;
                    }
                    button.whyVHSYS {
                        background-color: #f8c34f;
                        color: #174676;
                        font-weight: 600;
                        padding: 15px 35px;
                        display: inline-block;
                        text-transform: uppercase;
                        margin: 10px auto 0;
                        border-radius: 30px;
                        border-bottom: 3px solid #d8af33;
                        transition:0.2s;
                    }
                    button.whyVHSYS:hover {
                        background-color: #f3ba0e;
                    }
                    input{display:none;}
                `}</style>
            </div>
        )
    }
}

export default ExperimenteBtn