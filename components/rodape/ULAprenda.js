class ULAprenda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acordionControl: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        if (this.state.acordionControl) {
            this.setState({
                acordionControl: false
            })
        } else {
            this.setState({
                acordionControl: true
            })
        }
    }

    render() {
        return (
            <article>
                <h3 className={this.state.acordionControl?'open':null} onClick={this.handleToggle}>Aprenda<span></span></h3>
                <div className={this.state.acordionControl?'open':null}>
                    <a href="/erp-online/">
                    ERP Online
                    </a>
                    <a href="https://suporte.vhsys.com.br/treinamento-e-desenvolvimento/">
                    Treinamentos
                    </a>
                    <a href="/nota-fiscal-eletronica-nfe-brasil/">
                    NF-e
                    </a>
                    <a href="/nota-fiscal-do-consumidor-eletronica/">
                    NFC-e
                    </a>
                    <a href="/mei-micro-empreendedor-individual/">
                    MEI
                    </a>
                    <a href="/como-comprar/">
                        Como Comprar Online
                    </a>
                    <a href="https://suporte.vhsys.com.br/glossario/">
                    Glossário
                    </a>
                    <a href="/controle-de-vendas/emissor-de-boleto-de-vendas/">
                    Boleto Bancário
                    </a>
                </div>
                <style jsx>{`
                    article {
                        display: inline-block;
                        width: 190px;
                        margin: 0 60px 0 0;
                        padding: 0;
                        text-align: left;
                        vertical-align:top;
                    }
                    article:last-child {
                        margin: 0 0 0 7px;
                    }
                    article:nth-child(1) {
                        margin: 0 7px 0 0;
                    }
                    h3 {
                        font-weight: 400;
                        font-size: 1.3rem;
                        color: #2fcdd6;
                    }
                    div {
                        list-style:none;
                        padding:0;
                        max-height: 2000px;
                        overflow: hidden;
                        transition:0.3s;
                    }
                    div.open {
                        max-height: 2000px;
                        transition:0.3s;
                    }
                    a {
                        padding:0 0 7px;
                        font-size: 1.1rem;
                        line-height: 1.6rem;
                        font-weight: 200;
                        font-family: 'Titillium Web', Arial, Tahoma, Sans-Serif;
                        color:#ffffff;
                        text-decoration:none;
                        transition:0.2s;
                        position:relative;
                        display:block;
                    }
                    a:hover {
                        text-decoration:none;
                        color: #2fcdd6;
                        transition:0.2s;
                    }
                    .new:after {
                        content: 'Novo';
                        border: 0;
                        position: absolute;
                        left: -15px;
                        width: calc(100% + 30px);
                        text-align: right;
                        bottom: 3px;
                        padding: 5px 8px;
                        border-radius: 0 0 10px;
                        border-bottom: 1px solid #f3cc46;
                        margin-left: 15px;
                        font-size: 0.9rem;
                        line-height: 0.9rem;
                        font-weight: 400;
                        font-style: italic;
                        color: #f3cc46;
                        text-decoration: none;
                    }
                    .new:after {
                        content: 'Novo';
                        border: 0;
                        position:absolute;
                        left:100%;
                        top:50%;
                        transform:translateY(-50%);
                        box-shadow: 0px 0px 10px 0px #ffffff;
                        padding: 5px 8px;
                        border-radius: 20px;
                        margin-left: 15px;
                        font-size: 0.9rem;
                        font-style: italic;
                        color: #f3cc46;
                        text-decoration:none;
                    }
                    @media (max-width:514px) {
                        div {
                            max-height: 0;
                        }
                        h3 span {
                            display: inline-block;
                            height: 10px;
                            width: 10px;
                            background: linear-gradient(135deg,#28cdd6 60%,transparent 50%);
                            transform: rotate(225deg);
                            position: relative;
                            left: 20px;
                            transition:0.3s;
                        }
                        h3.open span {
                            transform: rotate(45deg);
                            transition:0.3s;
                        }
                    }
                `}</style>
            </article>
        )
    }
}

export default ULAprenda