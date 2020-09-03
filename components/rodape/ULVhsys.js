class ULVhsys extends React.Component {
    render() {
        return (
            <article>
                <h3>VHSYS</h3>
                <a href="/funcionalidades/">
                    Funcionalidades
                </a>
                <a href="/integracao-contabil-financeira/" className="new">
                    Integração Contábil
                </a>
                <a href="/segmentos/">
                    Segmentos
                </a>
                <a href="/sobre/">
                    Sobre Nós
                </a>
                <a href="/planos-e-precos/">
                    Planos e Preços
                </a>
                <a href="https://blog.vhsys.com.br/">
                    Blog
                </a>
                <a href="/parceiros/">
                    Parceiros
                </a>
                <a href="/loja-de-aplicativos/">
                    Aplicativos
                </a>
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
                    ul {
                        list-style:none;
                        padding:0;
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
                `}</style>
            </article>
        )
    }
}

export default ULVhsys