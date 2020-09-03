import YouTube from 'react-youtube'
import LazyLoad from 'react-lazyload'

class VideoEmbed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.fireVideo = this.fireVideo.bind(this);
        this.startVideo = this.startVideo.bind(this);
    }

    fireVideo() {
        this.setState({loaded: true})
    }

    startVideo(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    render() {
        let pWidth = this.props.width?this.props.width:'100%'
        let pHeight = this.props.height?this.props.height:'100%'
        const opts = {
            height: pHeight,
            width: pWidth,
            playerVars: {
            autoplay: 1
            }
        };
        
        return (
            <div>
                {!this.state.loaded?
                <LazyLoad>
                <img alt='hqdefault' title='hqdefault' src={"https://img.youtube.com/vi/"+this.props.videoTag+"/hqdefault.jpg"} />
                </LazyLoad>
                :
                null
                }
                {!this.state.loaded?
                <button aria-label='Assista o Vídeo' onClick={this.fireVideo}><span></span></button>
                :
                <YouTube
                containerClassName={'videoEmbed'}
                videoId={this.props.videoTag}
                opts={opts}
                onReady={this.startVideo}
                />
                }
            <style jsx>{`
                div {
                    display: inline-block;
                    vertical-align: middle;
                    width: calc(100% - 30px);
                    margin: 0 15px;
                    padding-top: 51.2%;
                    position: relative;
                    border-radius: 5px;
                    overflow: hidden;
                    border: 1px solid rgb(234, 237, 244);
                }
                img {
                    position:absolute;
                    top:50%;
                    left:0;
                    width:100%;
                    height:auto;
                    transform: translateY(-50%);
                    filter:blur(0);
                }
                button {
                    position: absolute;
                    width: 100px;
                    height: 70px;
                    border: 0;
                    border-radius: 20px;
                    background: #e32c26;
                    display: block;
                    top: calc(50% - 35px);
                    left: calc(50% - 40px);
                    box-shadow: 0px 0px 1px 14px #e32c26;
                    transition:0.2s;
                    cursor:pointer;
                }
                button:hover {
                    background: #b30000;
                    box-shadow: 0px 0px 1px 14px #b30000;
                }
                span {
                    display: inline-block;
                    background: linear-gradient(24deg,#ffffff 50%,transparent 54%);
                    width: 35px;
                    height: 16px;
                    position: relative;
                    top: -5px;
                    left: 4px;
                }
                span::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    display: inline-block;
                    background: linear-gradient(155deg,#ffffff 50%,transparent 54%);
                    width: 35px;
                    height: 16px;
                }
            `}</style>
            </div>
        )
    }
}

export default VideoEmbed