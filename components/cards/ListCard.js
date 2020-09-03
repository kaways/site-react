import MaskedSVG from '../../components/embeds/MaskedSVG'
import GetSVG from '../../components/embeds/GetSVG'

class ListCard extends React.Component {
    render() {
        const children = this.props.children
        return (
            <article className={this.props.toTheRight?'right':'null'}>
                {this.props.masked
                    ?<MaskedSVG defaultIconName={this.props.svgIcon} imgHeight={this.props.iconHeight} imgWidth={this.props.iconWidth} masked={this.props.masked}/>
                    :<GetSVG defaultIconName={this.props.svgIcon} imgHeight={this.props.iconHeight} imgWidth={this.props.iconWidth} />
                }
                <div>
                {this.props.h3
                    ?<h3>{this.props.h3}</h3>
                    :null}
                <p>
                {
                    React.Children.map(children, (child, i) => {
                        if (child.type == 'a') return <a href={child.props.url} target={child.props.blank?'_blank':'_self'} rel='noopener' >{child.props.children}</a>
                        if (child.type == 'strong') return <strong>{child.props.children}</strong>
                        return child
                    })
                }
                </p>
                </div>
                <style jsx>{`
                article {
                    display: inline-block;
                    vertical-align: top;
                    text-align:left;
                    width: 90%;
                    margin: 20px auto 40px;
                }
                div {
                    width:calc(100% - 130px);
                    padding: 0;
                    display: inline-block;
                    vertical-align:top;
                    margin: -20px 0 0 15px;
                }
                article.right div{
                    margin: -20px 15px 0 0;
                    float:left;
                }
                h3 {
                    font-weight: 600;
                    line-height: 1.5rem;
                    font-size: 1.3rem;
                    margin: 0;
                    padding: 0;
                    display: block;
                    color: #174676;
                }
                p {
                    line-height: 1.7rem;
                    font-size: 1rem;
                    margin: 0;
                    padding: 10px 0 0 0;
                    color: #7c87a0;
                    display: block;
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
                @media (max-width:645px) {
                    article {
                        text-align:center;
                    }
                    div, article.right div {
                        width:90%;
                        padding: 0;
                        display: inline-block;
                        vertical-align:top;
                        margin: 10px auto 0;
                        float:none;
                    }
                    h3 {
                        padding: 0 20px;
                        display: block;
                    }
                    p {
                        text-align:left;
                    }
                }
                `}</style>
            </article>
        )
    }
}

export default ListCard