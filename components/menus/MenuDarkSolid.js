import Callus from "../bars/Callus";
import MenuItensFuncionalidades from './MenuItensFuncionalidades'
import MenuItensLojadeAplicativos from './MenuItensLojadeAplicativos'
import Waypoint from 'react-waypoint'

class MenuLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuSticky: 'menu',
            logo: 'blue',
            funcionalidadesOpen: 'container',
            funcionalidadesArrow: '',
            lojaOpen: 'container',
            lojaArrow: '',
            width: 0,
            height: 0,
            menuOpen: 'closed'
        };
        this.onEnterWaypoint = this.onEnterWaypoint.bind(this);
        this.onLeaveWaypoint = this.onLeaveWaypoint.bind(this);
        this.onMouseOverFuncionalidades = this.onMouseOverFuncionalidades.bind(this);
        this.onMouseLeaveFuncionalidades = this.onMouseLeaveFuncionalidades.bind(this);
        this.openFuncionalidades = this.openFuncionalidades.bind(this);
        this.onMouseOverLoja = this.onMouseOverLoja.bind(this);
        this.onMouseLeaveLoja = this.onMouseLeaveLoja.bind(this);
        this.openLoja = this.openLoja.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.menuToggle = this.menuToggle.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
        if(document.getElementById('zindexDiv').getBoundingClientRect().top < 0){
            this.setState({
                menuSticky: 'menu sticky',
            });
        }
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    onEnterWaypoint() {
        this.setState({
            menuSticky: 'menu',
            logo: 'white',
        })
    }
    onLeaveWaypoint() {
        this.setState({
            menuSticky: 'menu sticky',
            logo: 'blue',
        })
    }

    menuToggle() {
        if (this.state.menuOpen != 'open') {
            this.setState({
                menuOpen: 'open'
            })
        } else {
            this.setState({
                menuOpen: 'closed',
                funcionalidadesOpen: 'container',
                lojaOpen: 'container',
            })
        }
    }

    onMouseOverFuncionalidades() {
        if (this.state.width > 860) {
            this.setState({
                funcionalidadesOpen: 'container visible',
                funcionalidadesArrow: 'visible'
            })
        }
    }
    onMouseLeaveFuncionalidades() {
        if (this.state.width > 860) {
            this.setState({
                funcionalidadesOpen: 'container',
                funcionalidadesArrow: ''
            })
        }
    }
    openFuncionalidades() {
        if (this.state.width <= 860) {
            if (this.state.funcionalidadesOpen == 'container visible') {
                this.setState({
                    funcionalidadesOpen: 'container'
                })
            } else {
                this.setState({
                    funcionalidadesOpen: 'container visible',
                    lojaOpen: 'container'
                })
            }
        }
    }

    onMouseOverLoja() {
        if (this.state.width > 860) {
            this.setState({
                lojaOpen: 'container visible',
                lojaArrow: 'visible'
            })
        }
    }
    onMouseLeaveLoja() {
        if (this.state.width > 860) {
            this.setState({
                lojaOpen: 'container',
                lojaArrow: ''
            })
        }
    }
    openLoja() {
        if (this.state.width <= 860) {
            if (this.state.lojaOpen == 'container visible') {
                this.setState({
                    lojaOpen: 'container'
                })

            } else {
                this.setState({
                    lojaOpen: 'container visible',
                    funcionalidadesOpen: 'container'
                })
            }
        }
    }

    render() {
        return (
            <section className={this.props.bgColor}>
                <Waypoint onEnter={this.onEnterWaypoint}></Waypoint>
                <article className={this.state.menuSticky}>
                <Callus bgColor='white'/>
                    <div className="zindex" id="zindexDiv">
                        <a aria-label='Homepage VHSYS' href="/">
                            <svg className={this.state.logo} width="150px" height="40px" viewBox="0 0 413.211 112.19">
                                <path d="m111.65 48.18c-0.024-0.129-0.047-0.266-0.073-0.398l-0.029-0.156c-1.333-8.359-6.613-8.752-8.2-8.672-0.115 8e-3 -0.233 0.014-0.348 0.025-1.763 0.173-3.344 1.016-4.345 2.317-1.149 1.497-1.526 3.397-1.123 5.646 0.646 3.204 1.025 6.318 1.059 8.746 0.103 11.046-4.026 21.537-11.623 29.557-7.574 7.99-17.789 12.694-28.765 13.241-0.58 0.026-1.171 0.044-1.751 0.052-11.329 0.104-22.023-4.207-30.116-12.141-8.099-7.941-12.62-18.562-12.729-29.903-0.103-11.021 4.016-21.519 11.599-29.556 7.566-8.02 17.758-12.735 28.707-13.282 0.576-0.028 1.159-0.043 1.738-0.048 4.311-0.122 8.284 0.92 11.786 1.837 2.879 0.754 5.364 1.408 7.491 1.3 2.47-0.12 4.159-1.312 5.461-3.855 0.701-1.617 0.739-3.234 0.103-4.804-0.774-1.923-2.516-3.599-4.664-4.491-6.48-2.446-13.321-3.658-20.303-3.592-0.769 6e-3 -1.546 0.031-2.311 0.07-14.478 0.723-27.94 6.934-37.915 17.495-9.999 10.596-15.431 24.464-15.293 39.056 0.142 14.993 6.105 29.03 16.789 39.517 10.684 10.492 24.809 16.189 39.782 16.048 0.769-9e-3 1.554-0.03 2.312-0.069 14.505-0.729 27.992-6.938 37.98-17.503 10.017-10.591 15.458-24.463 15.318-39.047-0.023-2.704-0.201-5.117-0.537-7.39" clipPath="url(#a)"/>
                                <path d="m111.14 4.483c-0.501-0.941-1.172-1.758-1.996-2.445-0.79-0.649-1.647-1.141-2.573-1.485-0.962-0.36-1.959-0.544-2.967-0.544-2.505 0-4.693 1.082-6.163 3.046l-41.103 55.916-13.018-16.877-0.021-0.024-0.019-0.025c-1.553-1.957-3.746-3.031-6.174-3.031-1.118 0-2.197 0.224-3.215 0.673-0.936 0.408-1.772 0.969-2.495 1.664-0.751 0.727-1.352 1.578-1.781 2.53-0.454 0.995-0.688 2.088-0.688 3.227 0 1.025 0.214 1.994 0.635 2.89 0.289 0.593 0.611 1.131 0.979 1.633l0.041 0.054 0.043 0.052 19.379 24.72c0.83 1.037 1.739 1.815 2.728 2.342 1.113 0.585 2.298 0.874 3.548 0.874 1.297 0 2.539-0.334 3.703-0.985 0.999-0.572 1.881-1.341 2.638-2.29l47.639-63.66c0.513-0.629 0.922-1.323 1.219-2.072 0.34-0.84 0.514-1.772 0.514-2.764 0-1.201-0.288-2.354-0.853-3.419" clipPath="url(#a)"/>
                                <path d="m164.08 77.166c-0.63 0.797-1.337 1.417-2.116 1.859-0.779 0.441-1.589 0.664-2.429 0.664-0.846 0-1.624-0.189-2.339-0.568-0.718-0.382-1.409-0.988-2.082-1.832l-23.018-29.433c-0.338-0.464-0.623-0.939-0.853-1.423-0.231-0.483-0.349-1.022-0.349-1.608 0-0.803 0.159-1.549 0.475-2.244 0.315-0.695 0.748-1.305 1.296-1.832 0.543-0.525 1.176-0.947 1.892-1.263 0.717-0.316 1.473-0.472 2.273-0.472 1.728 0 3.159 0.717 4.295 2.145l18.533 24.257 18.373-24.384c1.009-1.345 2.399-2.018 4.169-2.018 0.755 0 1.505 0.134 2.239 0.409 0.738 0.272 1.41 0.661 2.022 1.167 0.608 0.505 1.093 1.094 1.453 1.768 0.357 0.673 0.538 1.389 0.538 2.147 0 0.676-0.106 1.275-0.318 1.8-0.212 0.526-0.506 1.021-0.885 1.483l-23.169 29.378z" clipPath="url(#a)"/>
                                <path d="m243.26 74.072c0 3.662-1.979 5.496-5.935 5.496-3.92 0-5.876-1.834-5.876-5.496v-19.923c0-3.075-3.433-4.611-10.292-4.611h-17.354v24.534c0 3.662-1.979 5.496-5.937 5.496-3.915 0-5.873-1.834-5.873-5.496v-42.467c0-3.621 1.958-5.43 5.873-5.43 3.958 0 5.937 1.809 5.937 5.43v7.389h15.208c16.165 0 24.249 5.008 24.249 15.026v20.052z" clipPath="url(#a)"/>
                                <path d="m300.99 66.363c0 8.629-5.915 12.944-17.744 12.944h-31.067c-3.581 0-5.371-1.724-5.371-5.177 0-3.574 1.79-5.367 5.371-5.367h32.394c2.906 0 4.355-0.862 4.355-2.589v0.788c0-1.644-1.746-2.463-5.239-2.463h-17.113c-12.882 0-19.323-4.169-19.323-12.507v-1.089c0-8.081 6.187-12.123 18.563-12.123h8.526c3.659 0 5.496 1.768 5.496 5.304 0 3.494-1.837 5.24-5.496 5.24h-10.358c-3.324 0-4.986 0.716-4.986 2.148v0.205c0 1.517 2.104 2.273 6.313 2.273h17.431c12.168 0 18.25 4.232 18.25 12.692v-0.279z" clipPath="url(#a)"/>
                                <path d="m413.21 66.363c0 8.629-5.915 12.944-17.747 12.944h-31.067c-3.58 0-5.37-1.724-5.37-5.177 0-3.574 1.79-5.367 5.37-5.367h32.396c2.902 0 4.354-0.862 4.354-2.589v0.788c0-1.644-1.746-2.463-5.239-2.463h-17.112c-12.888 0-19.326-4.169-19.326-12.507v-1.089c0-8.081 6.187-12.123 18.567-12.123h8.524c3.662 0 5.492 1.768 5.492 5.304 0 3.494-1.83 5.24-5.492 5.24h-10.361c-3.325 0-4.985 0.716-4.985 2.148v0.205c0 1.517 2.103 2.273 6.314 2.273h17.43c12.163 0 18.252 4.232 18.252 12.692v-0.279z" clipPath="url(#a)"/>
                                <path d="m355.48 77.343c0 11.283-6.314 16.925-18.945 16.925h-9.221c-3.408 0-5.116-1.768-5.116-5.308 0-3.492 1.708-5.236 5.116-5.236h11.491c3.245 0 5.056-1.473 5.436-4.423h-18.177c-14.358 0-21.533-4.651-21.533-13.956v-21.2c0-3.578 1.979-5.366 5.933-5.366 3.916 0 5.876 1.788 5.876 5.366v21.2c0 2.275 2.78 3.409 8.335 3.409h19.061v-24.608c0-3.578 1.933-5.366 5.808-5.366 3.957 0 5.938 1.788 5.938 5.366v33.197z" clipPath="url(#a)"/>
                            </svg>
                        </a>
                    <div className="menuControl" onClick={this.menuToggle}><span></span><span></span><span></span></div>
                        <div className={'menuItems ' + this.state.menuOpen}>
                            <span onMouseEnter={this.onMouseOverFuncionalidades} onMouseLeave={this.onMouseLeaveFuncionalidades} onClick={this.openFuncionalidades} className={'drop ' + this.state.funcionalidadesArrow}>Funcionalidades<div className={'topArrow ' + this.state.funcionalidadesArrow}></div></span>
                            <article onMouseEnter={this.onMouseOverFuncionalidades} onMouseLeave={this.onMouseLeaveFuncionalidades} className={this.state.funcionalidadesOpen}>
                                <MenuItensFuncionalidades />
                            </article>
                            <a href="/planos-e-precos/"><span>Planos e Preços</span></a>
                            <span onMouseEnter={this.onMouseOverLoja} onMouseLeave={this.onMouseLeaveLoja} onClick={this.openLoja} className={'drop ' + this.state.lojaArrow}>Loja de Aplicativos<div className={'topArrow ' + this.state.lojaArrow}></div></span>
                            <article onMouseEnter={this.onMouseOverLoja} onMouseLeave={this.onMouseLeaveLoja} className={this.state.lojaOpen}>
                                <MenuItensLojadeAplicativos />
                            </article>
                            <a href="/parceiros/"><span>Parceiros</span></a>
                            <a rel="noopener" href="https://blog.vhsys.com.br/" target="_blank"><span>Blog</span></a>
                            <a href="https://app.vhsys.com.br/" className="entrar">
                                <strong>Entrar</strong>
                                <img alt='entrar' title='entrar' width="150px" height="40px" src={require("../../static/images/vetor/icons/entrar-blue.svg")} />
                            </a>
                        </div>
                    </div>
                </article>
                <Waypoint onLeave={this.onLeaveWaypoint}></Waypoint>
            <style jsx>{`
            section {
                background-color: rgba(255,255,255,0);
                position:relative;
                height:104px;
                z-index: 15;
            }
            section.gray {
                background-color: rgb(242, 243, 248);
            }
            article.menu {
                width:100%;
                margin:0 auto;
                position:relative;
                padding: 0;
                background-color: rgba(255,255,255,0);
                top:0;
                left:0;
                z-index:6;
                border-bottom:2px solid rgba(255,255,255,0);
                height:104px;
                transition:0;
            }
            article.menu.sticky {
                position:fixed;
                background-color:rgba(255,255,255,1);
                border-bottom:2px solid #e0e0e0;
                top: -40px;
                transition:0;
            }
            article.menu svg {
                vertical-align:middle;
                padding: 10px;
                fill: #345d9d;
                margin-right:0;
            }
            article.menu svg path{
                fill:#345d9d;
            }
            article.menu.sticky svg {
                fill:#345d9d;
            }
            article.menu.sticky svg path{
                fill:#345d9d;
            }
            .zindex {
                position:absolute;
                width: 1220px;
                max-width:100%;
                top:40px;
                left:50%;
                transform:translateX(-50%);
                z-index:30;
                overflow:visible;
                padding: 0;
            }
            .logo {
                vertical-align: middle;
                display: inline-block;
                vertical-align: middle;
                height: 100%;
            }
            .menuControl {
                display: none;
                width: 30px;
                height: 30px;
                float: right;
                margin: 15px;
                
            }
            .menuControl span {
                background-color: #ffffff;
                display: block;
                height: 6px;
                border-radius: 2px;
                margin: 4px 0px;
            }
            article.menu.sticky .menuControl span {
                background-color: #345d9d;
            }
            .menuItems {
                width: calc(100% - 200px);
                display:inline-block;
                text-align:center;
                padding:0 15px;
            }
            .menuItems span {
                color: #345d9d;
                font-weight:400;
                margin: 0;
                display:inline-block;
                vertical-align: middle;
                height:64px;
                line-height:64px;
                padding:0 15px;
                position:relative;
                cursor:pointer;
            }
            .menuItems span.drop:after {
                content: url('.././static/images/icons/dropDownArrow.png');
                top:0;
                right:2px;
                position:absolute;
                transition:0.3s;
            }
            .menuItems span.drop.visible:after {
                content: url('.././static/images/icons/dropDownArrow.png');
                top:0;
                right:2px;
                position:absolute;
                transform:rotate(-180deg);
                transition:0.3s;
            }
            .menuItems span .topArrow{
                content:'';
                position:absolute;
                bottom:-13px;
                left:50%;
                transform:translateX(-50%) rotate(-135deg);
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, transparent 57%, #ffffff 57%);
                z-index:1;
                opacity:0;
                visibility:hidden;
                transition: opacity 0.1s linear, visibility 0.00001s 0.1s linear;
            }
            .menuItems span .topArrow.visible{
                opacity:1;
                visibility:visible;
            }
            .menuItems span .topArrow{
                
            }
            .menu.sticky span {
                color: #345d9d;
            }
            article.funcionalidades {
            }
            .container {
                top:100%;
                left:50%;
                width:1000px;
                max-width:90%;
                transform: translateX(-50%);
                text-align:center;
                background-color:rgba(255,255,255,1);
                border:2px solid #e0e0e0;
                border-top:2px solid #ffffff;
                padding:5px 20px;
                visibility:hidden;
                opacity: 0;
                transition: opacity 0.1s linear, visibility 0.00001s 0.1s linear;
                position:absolute;
            }
            .container.visible {
                visibility:visible;
                opacity: 1;
                transition: opacity 0.1s linear;
            }
            a.entrar {
                background-color: rgba(0, 0, 0, 0);
                display: inline-block;
                border: 1px solid rgb(23, 70, 118);
                height:40px;
                color: #ffffff;
                float: right;
                margin: 10px 0;
                vertical-align: middle;
                text-decoration:none;
                padding: 0 10px;
                border-radius: 7px;
                transition: background-color 0.2s linear;
            }
            a.entrar:hover {
                background-color: rgba(255, 255, 255, 0.1);
                transition: background-color 0.2s linear;
                border: 1px solid rgb(255, 255, 255);
            }
            article.menu.sticky a.entrar{
                background-color: #345e9e;
            }
            article.menu.sticky a.entrar:hover {
                background-color: rgba(52, 94, 158, 0.8);
            }
            article.menu.sticky a.entrar img{
                filter: contrast(0) brightness(100) ;
            }
            a.entrar strong{
                color: rgb(23, 70, 118);
                font-weight:400;
                line-height: 40px;
                vertical-align: middle;
                display: inline-block;
            }
            article.menu.sticky a.entrar strong{
                color: #ffffff;
            }
            a.entrar img{
                width:20px;
                height: auto;
                margin-left:10px;
                display: inline-block;
                vertical-align: middle;
            }
            @media (max-width:945px){
                .zindex {
                    z-index: 100;
                }
                article.menu svg {
                    margin-right:40px;
                }
                article.menu.sticky {
                    top: 0;
                    transition:background-color 0.3s linear;
                }
                .menuControl {
                    display: inline-block;
                }
                .menuItems {
                    width: 70%;
                    position: static;
                    top:66px;
                    left:0;
                    text-align:left;
                    color:#345d9d;
                    background-color: rgba(255,255,255,1);
                    overflow-y: auto;
                    max-height: calc(100vh - 150px);
                    transition:visibility 0.2s, opacity 0.2s;
                    box-shadow: 0 100vh 0 100vh rgba(0,0,0,0.7);
                    border-radius: 0 0 25px 0;
                }
                .menuItems::scrollbar { display:none }
                .menuItems::-webkit-scrollbar { display:none }
                .menuItems::-moz-scrollbar { display:none }
                .menuItems::-ms-scrollbar { display:none }
                .menuItems::-o-scrollbar { display:none }
                .menuItems.closed {
                    visibility:hidden;
                    opacity:0;
                    display: none;
                    transition:visibility 0.2s, opacity 0.2s;
                }
                .menuItems span {
                    display:block;
                    color: #345d9d;
                }
                .container {
                    position:relative;
                    top:0;
                    left:0;
                    transform:translateX(0);
                    width:100%;
                    text-align:center;
                    background-color:rgba(255,255,255,1);
                    border:0;
                    padding:0;
                    visibility:visible;
                    opacity: 1;
                    overflow:hidden;
                    transition: max-height 0.2s linear;
                    max-height:0;
                }
                .container.visible {
                    visibility:visible;
                    opacity: 1;
                    transition:max-height 0.2s linear;
                    max-height:2000px;
                    overflow:visible;
                }
                a.entrar {
                    float:left;
                }
            }
            `}</style>

            </section>
        )
    }
}

export default MenuLight