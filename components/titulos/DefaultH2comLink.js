class DefaultH2comLink extends React.Component {

    render() {
        return (
            <section>
                <article>
                    <h2>
                        { this.props.titulo }
                    </h2>
                    <p>
                    { this.props.subtitulo1 }
                    <a href={ this.props.url }>
                        { this.props.textolink }
                    </a>
                    { this.props.subtitulo2 }
                    </p>
                </article>
            <style jsx>{`
                section {
                    padding: 60px 0 0;
                    display:block;
                    position:relative;
                    text-align:center;
                }
                article {
                    display:inline-block;
                    width:1200px;
                    max-width:100%;
                }
                h2 {
                    text-align: center;
                    font-size: 2.3rem;
                    line-height: 2.8rem;
                    font-weight:300;
                    display: inline-block;
                    max-width: 90%;
                    padding: 10px 20px;
                    margin: 0;
                    background-color: #ffffff;
                    position: relative;
                    color: #174676;
                }
                p {
                    font-size: 1.1rem;
                    text-align: center;
                    display: inline-block;
                    max-width: 80%;
                    width: 900px;
                    background-color: #ffffff;
                    margin: 0;
                    padding: 0 20px 10px;
                    position: relative;
                    color: #8a8a8a;
                }
                a {
                    text-decoration:none;
                    color:#2abfc6;
                    font-weight:600;
                }
                h2::before {
                    content: '';
                    height: 1px;
                    width: calc(500px - 50%);
                    top: 50%;
                    background-color: #cdcdcd;
                    position: absolute;
                    right: calc(100% + 15px);
                }
                h2::after {
                    content: '';
                    height: 1px;
                    width: calc(500px - 50%);
                    top: 50%;
                    background-color: #cdcdcd;
                    position: absolute;
                    left: calc(100% + 15px);
                }
                @media (max-width:750px) {
                    h2 {
                        max-width: 85%;
                    }
                }
            `}</style>
            </section>
        )
    }
}

export default DefaultH2comLink