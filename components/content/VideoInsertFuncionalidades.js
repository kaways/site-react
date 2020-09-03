import LazyLoad from 'react-lazyload'

class VideoInsertFuncionalidades extends React.Component {
    render() {
        const children = this.props.children
        return (
            <section>
                <div className="container">
                    <article>
                    {
                        React.Children.map(children, (child, i) => {
                            if (child.type == 'h3') return <h3 onClick={this.toggleOpen} >{child.props.children}</h3>
                            
                            if (child.type == 'p') return <p>{React.Children.map(child.props.children, (pChil, i) => {
                                if (pChil.type == 'a') return <a href={pChil.props.url} target={pChil.props.blank?'_blank':'_self'} rel='noopener' >{pChil.props.children}</a>
                                return pChil
                            })}</p>

                            if (child.type.name&&child.type.name == 'VideoEmbed') return

                            return child
                        })
                    }
                    </article>
                    <article>
                        {
                            React.Children.map(children, (child, i) => {
                                if (child.type.name&&child.type.name == 'VideoEmbed') return child
                            })
                        }
                    </article>
                </div>
            <style jsx>{`
                section {
                    width: 100%;
                    margin: 0;
                    padding: 50px 0;
                    background: radial-gradient(circle at center,rgb(46, 91, 157) 30%,rgb(36, 52, 115) 80%);
                    position:relative;
                }
                div.container {
                    width: 1100px;
                    max-width: 100%;
                    margin: 0 auto;
                    text-align:center;
                    position:relative;
                    z-index:1;
                }
                article {
                    text-align:left;
                    width:500px;
                    max-width:95%;
                    color:white;
                    display:inline-block;
                    margin:25px;
                    vertical-align:top;
                }
                h3 {
                    font-size:1.4rem;
                    line-height:1.8rem;
                    margin:0 0 10px;
                }
            `}</style>
            </section>
        )
    }
}

export default VideoInsertFuncionalidades