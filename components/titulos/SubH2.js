class SubH2 extends React.Component {

    render() {
        return (
            <section>
                <article>
                    <h2>
                        { this.props.titulo }
                    </h2>
                    {this.props.subtitulo?
                    <p>{ this.props.subtitulo }</p>
                    :
                    null
                    }
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
                    font-size: 1.7rem;
                    line-height: 2rem;
                    font-weight: 700;
                    display: inline-block;
                    max-width: 720px;
                    padding: 10px 80px;
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

export default SubH2