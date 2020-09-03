class ULFones extends React.Component {
    render() {
        return (
            <article>
                <h3>Aquisições</h3>
                <p>
                    Televendas
                    <strong>0800 007 0017</strong>
                </p>
                <h3>Suporte</h3>
                <p>
                    Capitais
                    <strong>4007-2710</strong>
                    Demais Regiões
                    <strong>0800 940 1506</strong>
                </p>
                <style jsx>{`
                    article {
                        display: inline-block;
                        width: 190px;
                        margin: 0;
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
                        font-weight:400;
                        font-size: 1.3rem;
                        color: #2fcdd6;
                    }
                    p {
                        list-style:none;
                        padding:0;
                        font-size: 1.3rem;
                        padding:0 0 7px;
                        font-weight:400;
                    }
                    p strong {
                        display:block;
                        color: #eec849;
                        font-weight:400;
                    }
                `}</style>
            </article>
        )
    }
}

export default ULFones