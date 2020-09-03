import axios from 'axios';
import LazyLoad from 'react-lazyload';

class TabelaDefault extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            plan: ''
        }

        this.dataLayerPush = this.dataLayerPush.bind(this);
    }

    componentDidMount() {
        axios
        .post('/getplanos')
        .then(res => {
            this.setState({ plan: res.data.data });
        })
    }

    dataLayerPush(position,plan,price,type,ref) {
        if (typeof window !== 'undefined') 
        {
            window.dataLayer.push({
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {'list': ref},
                        'products': [{
                            'name': plan,
                            'id': 'REF',
                            'price': price,
                            'brand': type,
                            'category': type,
                            'list': ref,
                            'position': position
                        }]
                    }
                }
            });
            window.dataLayer.push({
                'event': 'productClick',
                'ecommerce': {
                    'detail ': {
                        'actionField': {'list': ref},
                        'products': [{
                            'name': plan,
                            'id': 'REF',
                            'price': price,
                            'brand': type,
                            'category': type,
                            'list': ref,
                            'position': position
                        }]
                    }
                }
            })
            window.dataLayer.push({
                'ecommerce': {
                    'add ': {
                        'products': [{
                            'name': plan,
                            'id': 'REF',
                            'price': price,
                            'brand': type,
                            'category': type,
                            'quantity': 1
                        }]
                    }
                }
            })
            dataLayer.push({'event': 'ecommerceHelper'})
        }
    }

    render() {
        return (
        <section>
            <article>
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/mei.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/mei.png')} type="image/png" />
                        <img alt='mei' title='mei' width='61px' height='70px' src={require('../../static/images/icons/medals/mei.png')} />
                    </picture></LazyLoad>
                    <h5>MEI</h5>
                    <s>De 59,90</s>
                    <p>53<strong>,91</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 71,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/MEI" onClick={()=>{this.dataLayerPush(1,'MEI','718.80','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            1
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            5
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            25
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            15
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
            <article>
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/bronze.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/bronze.png')} type="image/png" />
                        <img alt='bronze' title='bronze' width='61px' height='70px' src={require('../../static/images/icons/medals/bronze.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.plan?this.state.plan['0'].nome_plano:''}</h5>
                    <s>De 79,90</s>
                    <p>71<strong>,92</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 95,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/BRONZE" onClick={()=>{this.dataLayerPush(1,'BRONZE','958.8.80','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            1
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            25
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            125
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            75
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
            <article>
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/prata.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/prata.png')} type="image/png" />
                        <img alt='prata' title='prata' width='61px' height='70px' src={require('../../static/images/icons/medals/prata.png')} />
                    </picture></LazyLoad>
                    <h5>PRATA</h5>
                    <s>De 99,90</s>
                    <p>89<strong>,92</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 119,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/PRATA" onClick={()=>{this.dataLayerPush(1,'PRATA','1198.8','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            2
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            60
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            300
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            180
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
            <article className="recomendado">
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/ouro.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/ouro.png')} type="image/png" />
                        <img alt='ouro' title='ouro' width='61px' height='70px' src={require('../../static/images/icons/medals/ouro.png')} />
                    </picture></LazyLoad>
                    <h5>OURO</h5>
                    <s>De 169,90</s>
                    <p>152<strong>,91</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 203,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/OURO" onClick={()=>{this.dataLayerPush(1,'OURO','2038.8','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            3
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            150
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            750
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            450
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
            <article>
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/platina.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/platina.png')} type="image/png" />
                        <img alt='platina' title='platina' width='61px' height='70px' src={require('../../static/images/icons/medals/platina.png')} />
                    </picture></LazyLoad>
                    <h5>PLATINA</h5>
                    <s>De 259,90</s>
                    <p>233<strong>,91</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 311,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/PLATINA" onClick={()=>{this.dataLayerPush(1,'PLATINA','3118.8','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            4
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            300
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            1500
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            900
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
            <article>
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/diamante.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/diamante.png')} type="image/png" />
                        <img alt='diamante' title='diamante' width='61px' height='70px' src={require('../../static/images/icons/medals/diamante.png')} />
                    </picture></LazyLoad>
                    <h5>DIAMANTE</h5>
                    <s>De 299,90</s>
                    <p>269<strong>,91</strong></p>
                    <small>por mês no plano anual</small>
                    <span>Economize <strong>R$ 359,88</strong></span>
                    <a href="https://cadastro.vhsys.com.br/checkout/cadastro/?#/DIAMANTE" onClick={()=>{this.dataLayerPush(1,'DIAMANTE','3598.8','anual',this.props.parentPageRef)}}>
                    CONTRATAR
                    </a>
                </div>
                <div className="tabelaInfo">
                    <ol>
                        <li>
                            <p><span>Usuários</span>
                            5
                            </p>
                        </li>
                        <li>
                            <p><span>NF-e e NFS-e</span>
                            500
                            </p>
                        </li>
                        <li>
                            <p><span>NFC-e</span>
                            2500
                            </p>
                        </li>
                        <li>
                            <p><span>CT-e</span>
                            1500
                            </p>
                        </li>
                        <li>
                            <p><span>Suporte Técnico</span>
                            Gratuito e Ilimitado
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
        <style jsx>{`
        section {
            width:100%;
            max-width:1200px;
            margin:auto;
            text-align: center;
            padding: 60px 50px 80px;
        }
        article {
            border:2px solid #174676;
            display:inline-block;
            vertical-align:top;
            border-left:0;
            text-align:center;
            padding:10px;
            margin-top: 30px;
        }
        article:nth-child(1) {
            border:2px solid #174676;
            border-radius:20px 0 0 20px;
        }
        article:nth-last-child(1) {
            border:2px solid #174676;
            border-radius:0 20px 20px 0;
            border-left:0;
        }
        .recomendado {
            padding: 30px 10px 15px;
            border: 0;
            background-color: #174676;
            border-radius: 10px;
            vertical-align: middle;
            margin-top: 15px;
            margin-left: -2px;
            position:relative;
        }
        .recomendado:before {
            content: 'MAIS VENDIDO';
            position: absolute;
            bottom: calc(100% - 20px);
            left: 0;
            background-color: #2abec6;
            color: #ffffff;
            border-radius: 15px 15px 0 0;
            width: 100%;
            padding: 10px 0 28px;
            z-index: -1;
            font-size: 0.9rem;
            font-weight: 600;
        }
        .tabelaHeader {
            line-height:0.8em;
            color:#174676;
        }
        .tabelaHeader img {

        }
        .tabelaHeader h5 {
            font-size:1.1rem;
            color:#174676;
            font-weight:600;
        }
        .tabelaHeader s {
            font-size:0.8rem;
            color:#898989;
        }
        .tabelaHeader p {
            color:#25b6bf;
            font-size:2.6rem;
            font-weight:600;
            position:relative;
            line-height: 1em;
            margin:10px;

        }
        .tabelaHeader p > strong {
            font-size:1.2rem;
            font-weight:400;
            position:absolute;
            bottom:0;

        }
        .tabelaHeader small {
            font-size:0.8rem;
            color:#898989;
            padding: 0 0 10px;
            display:block;
        }
        .tabelaHeader div {
            display:block;
        }
        .tabelaHeader span {
            font-size:0.8rem;
            display:block;
            color:#898989;
        }
        .tabelaHeader span > strong {
            color:#365d9d;
            font-weight:600;
        }
        .tabelaHeader a {
            background-color: #ffffff;
            color:#365d9d;
            border:1px solid #365d9d;
            border-bottom:4px solid #365d9d;
            margin-top:10px;
            padding: 11px 15px;
            border-radius:30px;
            text-decoration:none;
            display:inline-block;
            font-weight:600;
            transition:background-color 0.2s ease-in-out, color 0.2s linear;
        }
        .tabelaHeader a:hover {
            background-color: #365d9d;
            color:#ffffff;
            transition:background-color 0.2s ease-in-out, color 0.2s linear;
        }
        .tabelaInfo {
            line-height:0.8em;
            color:#174676;
            
        }
        .tabelaInfo ol {
            list-style:none;
            padding:0;
            margin-bottom:0;
        }
        .tabelaInfo ol > li {
            position:relative;
            text-align:center;
        }
        .tabelaInfo ol > li p {
            border-bottom:2px solid #0896a3;
            padding:15px 0;
            display:inline-block;
            width:80%;
            margin:0;
            text-align:center;
        }
        .tabelaInfo ol > li:last-child p {
            border-bottom:0;
            line-height:1.3em;
        }
        .tabelaInfo ol > li span {
            position: absolute;
            right: calc(100% + 30px);
            width: 300px;
            text-align:right;
        }
        article:not(:first-child) .tabelaInfo ol > li span {
            display:none;
        }
        .tabelaInfo ul {
            
        }
        .tabelaInfo ul > li {
            
        }
        .recomendado h5,.recomendado s,.recomendado small,.recomendado span,.recomendado span strong,.recomendado li p,.recomendado ol li p span{
            color:#ffffff;
        }
        .recomendado a {
            background-color:#59ca68;
            border-bottom:4px solid #47aa54;
            color:#ffffff;
        }
        .recomendado a:hover {
            background-color: #1a942a;
            border-bottom:4px solid #47aa54;
            color:#ffffff;
        }
        @media (max-width: 1100px) {
            section {
                padding:0;
            }
            article {
                max-width:80%;
                margin:30px auto;
                display:block;
                border: 2px solid #174676;
                border-radius:30px;
                margin-top: 10px;
            }
            article:nth-child(1) {
                border: 2px solid #174676;
                border-radius:30px;
            }
            article:nth-last-child(1) {
                border: 2px solid #174676;
                border-radius:30px;
            }
            .recomendado {
                margin-top: 65px;
                margin-left: auto;
            }
            .tabelaHeader {
                display:inline-block;
                width:140px;
                vertical-align:middle;
            }
            .tabelaInfo {
                display: inline-block;
                width:calc(100% - 145px);
                vertical-align:middle;
            }
            .tabelaInfo ol > li p {
                white-space: nowrap;
                text-align:center;
            }
            .tabelaInfo ol > li:last-child p {
                white-space: normal;
            }
            .tabelaInfo ol > li span {
                position: relative;
                right: 0;
                width: auto;
                text-align:center;
                padding-right:10px;
                color: #174676;
                font-weight:600;
            }
            article:not(:first-child) .tabelaInfo ol > li span {
                display:inline-block;
                text-align:center;
            }
            article .tabelaInfo ol > li span {
                display:inline-block;
            }
        }
        `}</style>

        </section>
        )
    }
}

export default TabelaDefault