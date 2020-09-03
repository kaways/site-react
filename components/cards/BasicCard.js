class BasicCard extends React.Component {
    render() {
        const children = this.props.children
        return (
            <article>
                {
                this.props.titleLink?
                    <h5><a href={this.props.titleLink}>{this.props.title}</a></h5>
                :
                    <h5>{this.props.title}</h5>
                }
                {
                    React.Children.map(children, (child, i) => {
                        if (child.type == 'picture') return <LazyLoad once><picture>
                            {
                                React.Children.map(child.props.children, (imgChild, i) => 
                                {
                                    if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                                    if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                                })
                            }
                        </picture></LazyLoad>
                        if (child.type == 'p') return <p>{child.props.children}</p>
                    })
                }
                <style jsx>{`
                article {
                    display: inline-block;
                    vertical-align: top;
                    width: 300px;
                    margin: 20px 30px 40px;
                    text-align:center;
                }
                h3 {
                    font-weight: 600;
                    line-height: 1.5rem;
                    font-size: 1.3rem;
                    height: 4.6rem;
                    margin: 0;
                    padding: 0 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #174676;
                }
                p {
                    line-height: 1.7rem;
                    font-size: 1rem;
                    margin: 0;
                    color: #7c87a0;
                    text-align: center;
                }
                p a {
                    font-size: 1.1rem;
                    line-height: 1.6rem;
                    color: rgb(9, 110, 226);
                    font-weight: 600;
                    text-decoration: none;
                    transition: 0.2s;
                }
                p a:hover {
                    text-decoration: underline;
                    color: rgb(23, 70, 118);
                    transition: 0.2s;
                }
                `}</style>
            </article>
        )
    }
}

export default BasicCard