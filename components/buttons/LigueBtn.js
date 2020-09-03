import CallMeForm from '../forms/CallMeForm';

class LigueBtn extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.handleFormUnmount = this.handleFormUnmount.bind(this);

        this.state = {
            visibleCall: false
        }
    }
    
    onClick(e) {
        e.preventDefault()
        if (!this.state.visible) {
            this.setState({
                visibleCall: true
            })
        }
    }

    handleFormUnmount(){
        this.setState({
            visibleCall: false
        });
    }

    render() {
        return (
            <div>
                <button aria-label='Solicite uma ligação' onClick={this.onClick} className={this.state.visibleCall}>Solicite uma ligação</button>
                {this.state.visibleCall ? <CallMeForm closeform={this.handleFormUnmount} /> : null}
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
                `}</style>
            </div>
        )
    }
}

export default LigueBtn