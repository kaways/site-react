import LazyLoad from 'react-lazyload'
import Waypoint from 'react-waypoint'

class ModuleFuncionalidadesOnlyText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        this.setState({visible: true})
    }

    render() {
        const children1 = this.props.children[0].props.children
        const children2 = this.props.children[1].props.children
        return (
            <section className={this.state.visible?'visible':''}>
                <div className='waypoint'><Waypoint onEnter={this.onEnter} /></div>
                <article className="text">
                    {
                        React.Children.map(children1, (child, i) => {
                            if (child.type == 'h3') return <h3>{child.props.children}</h3>
                        })
                    }
                    <p>
                    {
                        React.Children.map(children1, (child, i) => {
                            if (child.type == 'p') return child.props.children
                            if (child.type == 'a') return <a href={child.props.url} target={child.props.blank?'_blank':'_self'} rel='noopener' >{child.props.children}</a>
                        })
                    }
                    </p>
                </article>
                <article className="text">
                    {
                        React.Children.map(children2, (child, i) => {
                            if (child.type == 'h3') return <h3>{child.props.children}</h3>
                        })
                    }
                    <p>
                    {
                        React.Children.map(children2, (child, i) => {
                            if (child.type == 'p') return child.props.children
                            if (child.type == 'a') return <a href={child.props.url} target={child.props.blank?'_blank':'_self'} rel='noopener' >{child.props.children}</a>
                        })
                    }
                    </p>
                </article>
            <style jsx>{`
                section {
                    width:980px;
                    max-width:100%;
                    margin: 70px auto;
                    text-align:center;
                    transform:translateX(+60px);
                    opacity:0;
                    transition:all 0.5s linear;
                    position:relative;
                    clear:both;
                }
                section.visible {
                    transform:translateX(0);
                    opacity:1;
                }
                article {
                    display:inline-block;
                    vertical-align:top;
                    width:446px;
                    min-height:280px;
                    margin:20px 20px 0;
                    max-width:90%;
                }
                div.waypoint {
                    position:absolute;
                    top:50%;
                    right:100%;
                }
                img {
                    width: calc(100% + 4px);
                    transform: translateX(-1px) translateY(-1px);
                    height: auto;
                    display: block;
                }
                picture {
                    max-width:100%;
                    height:auto;
                    display:block;
                    margin-bottom: -2px;
                }
                article.text {
                    text-align:left;
                }
                h3 {
                    color: #174676;
                    font-size: 1.6rem;
                    line-height: 1.8rem;
                    margin: 0;
                    padding-top: 5px;
                    position:relative;
                }
                p {
                    font-size:1.1rem;
                    line-height:1.6rem;
                    color:#7c87a0;
                    font-weight: 200;
                }
                p a{
                    font-size:1.1rem;
                    line-height:1.6rem;
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
                @media (max-width:971px){
                    article.image.right{
                        float:inherit;
                    }
                    article.text {
                        width:90%;
                    }
                }
            `}
            </style>
            </section>
        )
    }
}

export default ModuleFuncionalidadesOnlyText