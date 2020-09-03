class BreadCrumbs extends React.Component {
    render() {
        const children = this.props.children
        return (
            <article className={this.props.theme}>
                <span><a href="/">Home</a></span>
                {
                    React.Children.map(children, (child, i) => {
                            if (child.type == 'a') return <span><a href={child.props.url} target={child.props.blank?'_blank':'_self'} rel='noopener' >{child.props.children}</a></span>
                            return <span>{child}</span>
                    })
                }
            <style jsx>{`
                article {
                    width:100%;
                }
                span {
                    color:rgb(208, 208, 208);

                }
                .dark span {
                    color:#000;
                }
                span:not(:first-of-type)::before {
                    content: '>';
                    padding: 0 10px;
                    font-weight: 600;
                }
                span a{
                    color:#fff;
                    text-decoration:underline;
                }
                .dark span a {
                    color:#174676;
                }
                span a:hover{
                    color:rgb(242, 243, 248);
                    text-decoration:underline;
                }
                .dark span a:hover {
                    color:#215f9e;
                }
            `}
            </style>
            </article>
        )
    }
}

export default BreadCrumbs