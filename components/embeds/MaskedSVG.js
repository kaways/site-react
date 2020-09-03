import LazyLoad from 'react-lazyload'
import GetSVG from '../../components/embeds/GetSVG'

class MaskedSVG extends React.Component {
    render() {
        return (
            <LazyLoad once height={this.props.imgHeight?this.props.imgHeight:'auto'}>
                <div className={this.props.masked}>
                    <span></span>
                    <GetSVG defaultIconName={this.props.defaultIconName} imgHeight={this.props.imgHeight} imgWidth={this.props.imgWidth} />
                </div>
            <style jsx>{`
                div {
                    display: inline-block;
                    position:relative;
                    margin: 0 15px;
                }
                span {
                    display: inline-block;
                    position: absolute;
                    width: 150%;
                    padding-top: 150%;
                    background: #eaedf1;
                    z-index: -1;
                    top: -25%;
                    left: -25%;
                    border-radius: 50%;
                }
            `}
            </style>
            </LazyLoad>
        )
    }
}

export default MaskedSVG