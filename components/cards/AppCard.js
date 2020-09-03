import LazyLoad from 'react-lazyload'

class AppCard extends React.Component {
    render() {
        const children = this.props.children
        return (
            <article>
                {
                    React.Children.map(children, (child, i) => {
                        if (child.type == 'h5') return <h5 onClick={this.toggleOpen} >{child.props.children}</h5>

                        if (child.type == 'picture') return <div className='ico'><LazyLoad once><picture>
                            {
                                React.Children.map(child.props.children, (imgChild, i) => 
                                {
                                    if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                                    if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                                })
                            }
                        </picture></LazyLoad></div>

                        if (child.type == 'p') return <p>{child.props.children}</p>

                        return child
                    })
                }
                <style jsx>{`
                article {
                    display: inline-block;
                    vertical-align: top;
                    width: 240px;
                    margin: 20px 10px 40px;
                    text-align: center;
                    background: linear-gradient(30deg,rgb(255,255,255) 30%,rgb(237, 245, 249),rgb(255,255,255) 90%);
                    border-radius: 20px;
                    border: 1px solid rgb(237,242,255);
                    border-bottom: 3px solid rgb(208,208,208);
                }
                h5 {
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
                    margin: 20px;
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

export default AppCard