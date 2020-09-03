import ExperimenteBtn from '../buttons/ExperimenteBtn'

class CarosselSegmentos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const children = this.props.children
        return (
            <section>
                {
                    React.Children.map(children, (child, i) => {
                        console.log(child.type.name)
                        if (child.type == 'h3') return <h3>{child.props.children}</h3>
                    })
                }
                <article className='cards'>
                {
                    React.Children.map(children, (child, i) => {
                        if (child.type.name&&child.type.name == 'AppCard') return child
                    })
                }
                </article>
                <article className='buttons'>
                    <ExperimenteBtn btnText='EXPERIMENTE GRÁTIS' btnStyle='green' />
                    <a aria-label='CONTRATE AGORA' href='https://cadastro.vhsys.com.br/checkout/cadastro/#/' className='conBtn'>CONTRATE AGORA</a>
                </article>
                <style jsx>{`
                    section {
                        background-color: rgb(241, 243, 248);
                        padding: 50px 0;
                        text-align:center;
                    }
                    h3 {
                        font-size: 1.9rem;
                        line-height: 1.9rem;
                        color: rgb(23,70,118);
                        position: relative;
                        font-weight: 600;
                        margin: 0;
                        padding: 30px 0;
                        cursor: pointer;
                    }
                a.conBtn {
                    display:inline-block;
                    padding: 15px 30px;
                    border: 0;
                    font-size: 1rem;
                    line-height: 1rem;
                    border-radius:40px;
                    margin:10px 20px 0;
                    text-decoration:none;
                    font-weight:600;
                    text-transform:uppercase;
                    background-color:#365d9d;
                    border-bottom: 3px solid #2e4f85;
                    color:#ffffff;
                    transition: all 0.1s linear;
                }
                a.conBtn:hover {
                    background-color:#2e4f85;
                    transition: all 0.1s linear;
                }
                `}</style>
            </section>
        )
    }
}
export default CarosselSegmentos