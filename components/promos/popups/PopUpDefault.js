
class PopUpDefault extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cst: false,
        };
    }

    render() {
        const children = this.props.children
        return (
            <article className={this.state.visible+" wrapper"}>
                <picture>
                    {
                        React.Children.map(children, (imgChild) => {
                            if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                            if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                        })
                    }
                </picture>
                {
                    React.Children.map(children, (child) => {
                        if (child.type == 'source') return
                        if (child.type == 'img') return
                        return child
                    })
                }
            <style jsx>{`
                    div.wrapper {
                        position: fixed;
                        width: 100%;
                        height: 100vh;
                        bottom: 100%;
                        left: 0;
                        opacity: 0;
                        visibility: hidden;
                        padding: 0;
                        background: rgba(11,35,59,0.7);
                        z-index: 35;
                        transition: 0.3s;
                        text-align:center;
                        box-shadow: 0px 0px 0px 100vh rgba(11, 35, 59, 0.7);
                    }
                    div.wrapper.open {
                        bottom: 0;
                        opacity:1;
                        visibility:visible;
                    }
                    p {

                    }
            `}</style>
            </article>
        )
    }
}

export default PopUpDefault