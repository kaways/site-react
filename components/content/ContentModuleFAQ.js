class ContentModuleFAQ extends React.Component {
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
            <li className={this.state.isOpen?"outside open":"outside"}>
            {
                React.Children.map(children, (child, i) => {
                    if (child.type == 'h3') return <h3 onClick={this.toggleOpen} >{child.props.children}</h3>
                    
                    if (child.type == 'p') return <p>{React.Children.map(child.props.children, (pChil, i) => {
                        if (pChil.type == 'a') return <a href={pChil.props.url} target={pChil.props.blank?'_blank':'_self'} rel='noopener' >{pChil.props.children}</a>
                        return pChil
                    })}</p>

                    if (child.type == 'ol') return <ol>{React.Children.map(child.props.children, (olChild, i) => {
                        if (olChild.type == 'strong') return <strong>{olChild.props.children}</strong>
                        return <li>{React.Children.map(olChild.props.children, (liChil, i) => {
                            if (liChil.type == 'a') return <a href={liChil.props.url} target={liChil.props.blank?'_blank':'_self'} rel='noopener' >{liChil.props.children}</a>
                            return liChil
                        })}</li>
                    })}</ol>

                    if (child.type == 'table') return <div className='tableHide'>{child}</div>
                })
            }
            <style jsx>{`
                li.outside {
                    margin: 0 auto;
                    padding: 0;
                    display:block;
                    width:800px;
                    max-width:90%;
                    border-bottom: dotted 1px #d7dbe7;
                }
                h3 {
                    font-size: 1.4rem;
                    line-height: 1.6rem;
                    color: #174676;
                    position: relative;
                    font-weight: 600;
                    margin:0;
                    padding: 20px 30px 20px 0;
                    cursor:pointer;
                }
                h3::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 30px;
                    right: 12px;
                    width: 6px;
                    height: 6px;
                    border-radius: 1px;
                    transform: rotate(45deg);
                    border-top: 0;
                    border-right: 3px solid #00adbb;
                    border-bottom: 3px solid #00adbb;
                    border-left: 0;
                    transition:0.3s;
                }
                li.open h3::before {
                    transform: rotate(-135deg);
                    transition:0.3s;
                }
                p {
                    color: #7c87a0;
                    font-weight: 400;
                    margin: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition:0.3s;
                }
                li.open p {
                    max-height: 1000px;
                    margin: 0 0 20px 0;
                }
                li .tableHide {
                    overflow:hidden;
                    max-height: 0px;
                    transition:0.3s;
                }
                li.open .tableHide {
                    max-height: 1000px;
                    transition:0.3s;
                }
                p a{
                    color:#096ee2;
                    font-weight:600;
                    text-decoration:none;
                    transition:0.2s;
                }
                p a:hover{
                    text-decoration:underline;
                    color: #174676;
                    transition:0.2s;
                }
                ol {
                    margin: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition:0.3s;
                }
                li.open ol {
                    margin: 0 0 20px 0;
                    max-height: 1000px;
                }
                ol li {
                    font-size: 0.9rem;
                    line-height: 1.2rem;
                    padding: 0 0 5px 20px;
                    color: #7c87a0;
                    font-weight: 400;
                    margin: 0;
                }
                ol li a{
                    color:#096ee2;
                    font-weight:600;
                    text-decoration:none;
                    transition:0.2s;
                }
                ol li a:hover{
                    text-decoration:underline;
                    color: #174676;
                    transition:0.2s;
                }
            `}</style>
            </li>
        )
    }
}

export default ContentModuleFAQ