import LazyLoad from 'react-lazyload'
import Waypoint from 'react-waypoint'

class NFEstadosLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <span>
                <a href="/nota-fiscal-eletronica-nfe-ac/">Acre - AC</a>
                <a href="/nota-fiscal-eletronica-nfe-al/">Alagoas - AL</a>
                <a href="/nota-fiscal-eletronica-nfe-ap/">Amapá - AP</a>
                <a href="/nota-fiscal-eletronica-nfe-am/">Amazonas - AM</a>
                <a href="/nota-fiscal-eletronica-nfe-ba/">Bahia - BA</a>
                <a href="/nota-fiscal-eletronica-nfe-ce/">Ceará - CE</a>
                <a href="/nota-fiscal-eletronica-nfe-df/">Distrito Federal - DF</a>
                <a href="/nota-fiscal-eletronica-nfe-es/">Espirito Santo - ES</a>
                <a href="/nota-fiscal-eletronica-nfe-go/">Goiás - GO</a>
                <a href="/nota-fiscal-eletronica-nfe-ma/">Maranhão - MA</a>
                <a href="/nota-fiscal-eletronica-nfe-mt/">Mato Grosso - MT</a>
                <a href="/nota-fiscal-eletronica-nfe-ms/">Mato Grosso do Sul - MS</a>
                <a href="/nota-fiscal-eletronica-nfe-mg/">Minas Gerais - MG</a>
                <a href="/nota-fiscal-eletronica-nfe-pa/">Pará - PA</a>
                <a href="/nota-fiscal-eletronica-nfe-pb/">Paraíba - PB</a>
                <a href="/nota-fiscal-eletronica-nfe-pr/">Paraná - PR</a>
                <a href="/nota-fiscal-eletronica-nfe-pe/">Pernambuco - PE</a>
                <a href="/nota-fiscal-eletronica-nfe-pi/">Piauí - PI</a>
                <a href="/nota-fiscal-eletronica-nfe-rj/">Rio de Janeiro - RJ</a>
                <a href="/nota-fiscal-eletronica-nfe-rn/">Rio Grande do Norte - RN</a>
                <a href="/nota-fiscal-eletronica-nfe-rs/">Rio Grande do Sul - RS</a>
                <a href="/nota-fiscal-eletronica-nfe-ro/">Rondônia - RO</a>
                <a href="/nota-fiscal-eletronica-nfe-rr/">Roraima - RR</a>
                <a href="/nota-fiscal-eletronica-nfe-sc/">Santa Catarina - SC</a>
                <a href="/nota-fiscal-eletronica-nfe-sp/">São Paulo - SP</a>
                <a href="/nota-fiscal-eletronica-nfe-se/">Sergipe - SE</a>
                <a href="/nota-fiscal-eletronica-nfe-to/">Tocantins - TO</a>
            <style jsx>{`
                span {
                    width: 100%;
                    text-align: center;
                    display: inline-block;
                }
                a {
                    display: inline-block;
                    background: #f0f5fc;
                    color: #174676;
                    width: 180px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 600;
                    border-bottom: 2px solid #174676;
                    font-size: 0.9rem;
                    line-height: 35px;
                    padding: 0 10px;
                    margin: 0 10px 7px 0;
                    text-align: center;
                    transition: 0.2s;
                }
                a:hover {
                    background: #00adbb;
                    color:#ffffff;
                    transition:0.2s;
                }
            `}
            </style>
            </span>
        )
    }
}

export default NFEstadosLinks