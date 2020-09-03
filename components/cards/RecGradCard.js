function getSVG(imgName) {
    switch(imgName) {
        case 'clock': return require('../../static/images/vetor/cards/clock.svg')
        case 'coins': return require('../../static/images/vetor/cards/coins.svg')
        case 'maisApps': return require('../../static/images/vetor/cards/maisApps.svg')
        case 'money': return require('../../static/images/vetor/cards/money.svg')
        case 'notebook': return require('../../static/images/vetor/cards/notebook.svg')
        case 'printer': return require('../../static/images/vetor/cards/printer.svg')
        case 'refresh': return require('../../static/images/vetor/cards/refresh.svg')
    }
}
class RecGradCard extends React.Component {
    render() {
        return (
            <article>
                <div>
                    <img src={getSVG(this.props.imgName)} alt={this.props.imgName} title={this.props.imgName} />
                    <h3>{this.props.h3}</h3>
                    <a>Saiba Mais</a>
                </div>
            <style jsx>{`
                article {
                    min-height:250px;
                    width: 250px;
                    background: #ffffff;
                    margin: 10px;
                    display: inline-block;
                    border-radius: 20px;
                    box-shadow: 4px 2px 26px -8px #c0c0c0;
                    position:relative;
                    overflow:hidden;
                }
                article::before{
                    content:'';
                    display:block;
                    position:absolute;
                    height:200%;
                    width:100%;
                    top:0;
                    left:0;
                    transform:translateY(-100%);
                    background-image: linear-gradient(to bottom,#01abc3,#2d58a4 50%,#ffffff 100%,#ffffff 100%);
                    background-position:top;
                    transition:transform 0.5s ease-in-out;
                }
                article:hover::before {
                    transform:translateY(0);
                    transition:transform 0.5s ease-in-out;
                }
                div {
                    position:relative;
                }
                img {
                    height: 40px;
                    margin: 20px 0 0;
                    transition: 0s 0.1s ease-in-out;
                }
                article:hover img {
                    transition: 0s 0.1s ease-in-out;
                    filter: brightness(0) invert(1);
                }
                h3 {
                    display: block;
                    width: 200px;
                    height: 110px;
                    margin: 10px auto 15px;
                    font-size: 1rem;
                    line-height: 1.4rem;
                    transition: 0.4s 0.1s ease-in-out;
                }
                article:hover h3 {
                    color:#ffffff;
                    transition: 0.4s 0.1s ease-in-out;
                }
                a{
                    border: 1px solid #0ca7b3;
                    display: inline-block;
                    font-size: 0.9rem;
                    line-height: 0.9rem;
                    padding: 7px 19px;
                    border-radius: 30px;
                    color: #174676;
                    font-weight: 600;
                    transition: 0.4s 0.1s ease-in-out;
                }
                article:hover a {
                    color:#ffffff;
                    transition: 0.4s 0.1s ease-in-out;
                    border: 1px solid #ffffff;
                }
            `}
            </style>
            </article>
        )
    }
}

export default RecGradCard