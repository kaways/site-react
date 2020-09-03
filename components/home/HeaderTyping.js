import ReactTyped from 'react-typed';

class HeaderTyping extends React.Component {
    render() {
        return (
            <div>
                <ReactTyped
                    loop
                    className="typedText"
                    typeSpeed={80}
                    startDelay={100}
                    backSpeed={80}
                    backDelay={1000}
                    strings={["organizar seu negócio", "potencializar resultados", "automatizar processos", "economizar dinheiro", "poupar tempo"]}
                    smartBackspace={false}
                    shuffle={false}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                />
                <span className="typedText">potencializar resultados</span>
                <style jsx>{`
                    span {
                        font-size:3rem;
                        line-height:3.2rem;
                        font-weight:500;
                        font-family: 'Titillium Web', Arial, Tahoma, Sans-Serif !important;
                        color:transparent;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -khtml-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        display: inline-block;
                        position: relative;
                    }
                .typedText {
                    
                }
                `}</style>
            </div>
        )
    }
}

export default HeaderTyping