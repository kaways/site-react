import axios from 'axios';
import LazyLoad from 'react-lazyload';

function getPlansValues(data, meiData = false) {
    if (!meiData) {
        let bronze = data[0];
        bronze.valor = calculaValorPlano(data[0].mensal, data[0].desconto.anual);

        let prata = data[1];
        prata.valor = calculaValorPlano(data[1].mensal, data[1].desconto.anual);

        let ouro = data[2];
        ouro.valor = calculaValorPlano(data[2].mensal, data[2].desconto.anual);

        let platina = data[3];
        platina.valor = calculaValorPlano(data[3].mensal, data[3].desconto.anual);

        let diamante = data[4];
        diamante.valor = calculaValorPlano(data[4].mensal, data[4].desconto.anual);

        return {
            'bronze':bronze,
            'prata':prata,
            'ouro':ouro,
            'platina':platina,
            'diamante':diamante
        }
    } else {
        let mei = data;
        mei.valor = calculaValorPlano(data.mensal, data.desconto.anual);
        return {
            'mei':mei,
        }
    }
}

function calculaValorPlano(valor, desconto) {
    let valorNum = parseFloat( valor.replace('.','').replace(',','.') )
    let valorComDesconto = valorNum*((100-desconto)/100)
    let economia = ((valorNum*12)*(desconto/100)).toLocaleString()
    return {
        int: parseInt(valorComDesconto),
        float: (valorComDesconto % 1).toFixed(2)*100,
        economia: economia
    }
}

class TabelaDefaultDm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            mei: {nome_plano: "MEI",valor_plano: "59.90",valor: {int: 59,float: 90,economia: false}},
            bronze: {nome_plano: "Bronze",valor_plano: "79.90",valor: {int: 79,float: 90,economia: false}},
            prata: {nome_plano: "Prata",valor_plano: "99.90",valor: {int: 99,float: 90,economia: false}},
            ouro: {nome_plano: "Ouro",valor_plano: "169.90",valor: {int: 169,float: 90,economia: false}},
            platina: {nome_plano: "Platina",valor_plano: "259.90",valor: {int: 259,float: 90,economia: false}},
            diamante: {nome_plano: "Diamante",valor_plano: "299.90",valor: {int: 299,float: 90,economia: false}}
        }

        this.dataLayerPush = this.dataLayerPush.bind(this);
    }

    componentDidMount() {
        var tablePlans
        axios
        .post('/getplanos')
        .then(res => {
            tablePlans = getPlansValues(res.data.data)
            this.setState({
                bronze: tablePlans.bronze,
                prata: tablePlans.prata,
                ouro: tablePlans.ouro,
                platina: tablePlans.platina,
                diamante: tablePlans.diamante,
            })
        })

        var meiData
        axios
        .post('/getmei')
        .then(res => {
            meiData = getPlansValues(res.data.data, true)
            this.setState({
                mei: meiData.mei
            })
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
                {
                    this.state.mei.valor.economia?
                    <div className='discount'>- {this.state.mei.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/mei.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/mei.png')} type="image/png" />
                        <img alt='mei' title='mei' width='61px' height='70px' src={require('../../static/images/icons/medals/mei.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.mei.nome_plano}</h5>
                    {
                        this.state.mei.valor.economia?
                        <s>De R${this.state.mei.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.mei.valor.int}<strong>,{this.state.mei.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.mei.valor.economia?
                        <span>Economize <strong>R$ {this.state.mei.valor.economia}</strong></span>
                        :
                        null
                    }
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
                {
                    this.state.bronze.valor.economia?
                    <div className='discount'>- {this.state.bronze.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/bronze.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/bronze.png')} type="image/png" />
                        <img alt='bronze' title='bronze' width='61px' height='70px' src={require('../../static/images/icons/medals/bronze.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.bronze.nome_plano}</h5>
                    {
                        this.state.bronze.valor.economia?
                        <s>De R${this.state.bronze.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.bronze.valor.int}<strong>,{this.state.bronze.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.bronze.valor.economia?
                        <span>Economize <strong>R$ {this.state.bronze.valor.economia}</strong></span>
                        :
                        null
                    }
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
                {
                    this.state.prata.valor.economia?
                    <div className='discount'>- {this.state.prata.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/prata.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/prata.png')} type="image/png" />
                        <img alt='prata' title='prata' width='61px' height='70px' src={require('../../static/images/icons/medals/prata.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.prata.nome_plano}</h5>
                    {
                        this.state.prata.valor.economia?
                        <s>De R${this.state.prata.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.prata.valor.int}<strong>,{this.state.prata.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.prata.valor.economia?
                        <span>Economize <strong>R$ {this.state.prata.valor.economia}</strong></span>
                        :
                        null
                    }
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
                {
                    this.state.ouro.valor.economia?
                    <div className='discount'>- {this.state.ouro.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/ouro.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/ouro.png')} type="image/png" />
                        <img alt='ouro' title='ouro' width='61px' height='70px' src={require('../../static/images/icons/medals/ouro.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.ouro.nome_plano}</h5>
                    {
                        this.state.ouro.valor.economia?
                        <s>De R${this.state.ouro.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.ouro.valor.int}<strong>,{this.state.ouro.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.ouro.valor.economia?
                        <span>Economize <strong>R$ {this.state.ouro.valor.economia}</strong></span>
                        :
                        null
                    }
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
                {
                    this.state.platina.valor.economia?
                    <div className='discount'>- {this.state.platina.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/platina.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/platina.png')} type="image/png" />
                        <img alt='platina' title='platina' width='61px' height='70px' src={require('../../static/images/icons/medals/platina.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.platina.nome_plano}</h5>
                    {
                        this.state.platina.valor.economia?
                        <s>De R${this.state.platina.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.platina.valor.int}<strong>,{this.state.platina.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.platina.valor.economia?
                        <span>Economize <strong>R$ {this.state.platina.valor.economia}</strong></span>
                        :
                        null
                    }
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
                {
                    this.state.diamante.valor.economia?
                    <div className='discount'>- {this.state.diamante.desconto.anual}%</div>
                    :
                    null
                }
                <div className="tabelaHeader">
                    <LazyLoad once height={70}><picture>
                        <source srcSet={require('../../static/images/icons/medals/diamante.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/icons/medals/diamante.png')} type="image/png" />
                        <img alt='diamante' title='diamante' width='61px' height='70px' src={require('../../static/images/icons/medals/diamante.png')} />
                    </picture></LazyLoad>
                    <h5>{this.state.diamante.nome_plano}</h5>
                    {
                        this.state.diamante.valor.economia?
                        <s>De R${this.state.diamante.valor_plano}</s>
                        :
                        null
                    }
                    <p>{this.state.diamante.valor.int}<strong>,{this.state.diamante.valor.float}</strong></p>
                    <small>por mês no plano anual</small>
                    {
                        this.state.diamante.valor.economia?
                        <span>Economize <strong>R$ {this.state.diamante.valor.economia}</strong></span>
                        :
                        null
                    }
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
            position:relative;
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
        .discount {
            position: absolute;
            top: -4px;
            font-size: 0.9rem;
            line-height: 0.9rem;
            right: -4px;
            background: rgb(255,222,119);
            color: #174676;
            padding: 8px 0px 8px 6px;
            width: 50px;
            text-align: center;
            border: 2px solid #174676;
            border-radius: 0 5px 0 20px;
            font-weight: 600;
            z-index: 1;
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
        .recomendado .discount {
            top:-2px;
            right:-2px;
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
            text-transform:uppercase;
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
        .tabelaHeader p::before {
            content: 'por';
            font-size: 0.9rem;
            line-height: 0.9rem;
            font-weight: 600;
            position: absolute;
            bottom: 0;
            left: -8px;
            color: #25b6bf;
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

export default TabelaDefaultDm