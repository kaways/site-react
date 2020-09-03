import LazyLoad from 'react-lazyload'

class PassoPassoModule extends React.Component {
    constructor(props) {
        super(props);

        this.toggleOpen = this.toggleOpen.bind(this);

        this.state = {
            isOpen: this.props.open,
        };
    }

    toggleOpen(){
        if(this.state.isOpen) {
            this.setState({isOpen: false})
        } else {
            this.setState({isOpen: true})
        }
    }

    render() {
        const children = this.props.children
        return (
            <section>
            {
                React.Children.map(children, (child, i) => {
                    if (child.type == 'h3') return <h3 onClick={this.toggleOpen} >{child.props.children}</h3>
                    
                    if (child.type == 'p') return <p>{React.Children.map(child.props.children, (pChil, i) => {
                        if (pChil.type == 'a') return <a href={pChil.props.url} target={pChil.props.blank?'_blank':'_self'} rel='noopener' >{pChil.props.children}</a>
                        return pChil
                    })}</p>

                    if (child.type == 'img') return <div className='desktop'><img alt={child.props.alt} className={child.props.className} height={child.props.height} src={child.props.src} title={child.props.title} width={child.props.width} /></div>
                    
                    if (child.type == 'mobilePicture') return <div className='mobile'>
                        <LazyLoad once height={288}>
                            <picture>
                                {
                                    React.Children.map(child.props.children, (imgChild) => {
                                        if (imgChild.type == 'source') return <source srcSet={imgChild.props.srcSet} type={imgChild.props.type} />
                                        if (imgChild.type == 'img') return <img alt={imgChild.props.alt} className={imgChild.props.className} height={imgChild.props.height} src={imgChild.props.src} title={imgChild.props.title} width={imgChild.props.width} type={imgChild.props.type} />
                                    })
                                }
                            </picture>
                        </LazyLoad>
                        {
                            React.Children.map(child.props.children, (imgChild) => {
                                if (imgChild.type == 'p') return <p>{React.Children.map(imgChild.props.children, (pChil, i) => {
                                    if (pChil.type == 'a') return <a href={pChil.props.url} target={pChil.props.blank?'_blank':'_self'} rel='noopener' >{pChil.props.children}</a>
                                    return pChil
                                })}</p>
                            })
                        }
                    </div>
                })
            }
            <style jsx>{`
                section {
                    width:1000px;
                    max-width:90%;
                    margin: 60px auto;
                    text-align:center;
                }
                h3 {
                    text-align: center;
                    font-size: 1.7rem;
                    line-height: 2rem;
                    font-weight: 700;
                    display: inline-block;
                    max-width: 720px;
                    padding: 25px 0 40px;
                    margin: 0;
                    background-color: #ffffff;
                    position: relative;
                    color: #174676;
                }
                h3::before {
                    content:'';
                    display:block;
                    width: 120px;
                    height: 6px;
                    position: absolute;
                    top: 5px;
                    left: 50%;
                    border-radius: 6px;
                    transform:translateX(-50%);
                    background:#f8c44f;
                }
                div.desktop {
                    display:block;
                }
                div.mobile {
                    display:none;
                }
                @media (max-width:800px) {
                    div.mobile {
                        display:block;
                    }
                    div.desktop {
                        display:none;
                    }
                }
            `}</style>
            </section>
        )
    }
}

export default PassoPassoModule