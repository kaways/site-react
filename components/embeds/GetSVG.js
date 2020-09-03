import LazyLoad from 'react-lazyload'

function SVGRequire(imgName) {
    switch(imgName) {
        case 'appstore01': return require('../../static/images/vetor/icons/default/appstore01.svg')
        case 'box01': return require('../../static/images/vetor/icons/default/box01.svg')
        case 'certificate01': return require('../../static/images/vetor/icons/default/certificate01.svg')
        case 'certificate02': return require('../../static/images/vetor/icons/default/certificate02.svg')
        case 'cloud01': return require('../../static/images/vetor/icons/default/cloud01.svg')
        case 'country01': return require('../../static/images/vetor/icons/default/country01.svg')
        case 'globe01': return require('../../static/images/vetor/icons/default/globe01.svg')
        case 'helper01': return require('../../static/images/vetor/icons/default/helper01.svg')
        case 'integrate01': return require('../../static/images/vetor/icons/default/integrate01.svg')
        case 'mail01': return require('../../static/images/vetor/icons/default/mail01.svg')
        case 'maintenance01': return require('../../static/images/vetor/icons/default/maintenance01.svg')
        case 'moneybag01': return require('../../static/images/vetor/icons/default/moneybag01.svg')
        case 'nfe01': return require('../../static/images/vetor/icons/default/nfe01.svg')
        case 'nfe02': return require('../../static/images/vetor/icons/default/nfe02.svg')
        case 'notebook01': return require('../../static/images/vetor/icons/default/notebook01.svg')
        case 'notebook02': return require('../../static/images/vetor/icons/default/notebook02.svg')
        case 'notebook03': return require('../../static/images/vetor/icons/default/notebook03.svg')
        case 'register01': return require('../../static/images/vetor/icons/default/register01.svg')
        case 'siglacte01': return require('../../static/images/vetor/icons/default/siglacte01.svg')
        case 'siglanfce01': return require('../../static/images/vetor/icons/default/siglanfce01.svg')
        case 'siglanfe01': return require('../../static/images/vetor/icons/default/siglanfe01.svg')
        case 'siglanfse01': return require('../../static/images/vetor/icons/default/siglanfse01.svg')
        case 'siglamdfe01': return require('../../static/images/vetor/icons/default/siglamdfe01.svg')
        case 'tablet01': return require('../../static/images/vetor/icons/default/tablet01.svg')
        case 'truck01': return require('../../static/images/vetor/icons/default/truck01.svg')
        case 'truck02': return require('../../static/images/vetor/icons/default/truck02.svg')
        case 'type01': return require('../../static/images/vetor/icons/default/type01.svg')
    }
}
class getSVG extends React.Component {
    render() {
        return (
            <LazyLoad once height={this.props.imgHeight?this.props.imgHeight:'auto'}>
                <img height={this.props.imgHeight?this.props.imgHeight:'auto'} width={this.props.imgWidth?this.props.imgWidth:'auto'} src={SVGRequire(this.props.defaultIconName)} alt={this.props.defaultIconName} title={this.props.defaultIconName} />
            <style jsx>{`
                img {
                    margin: 10px;
                }
            `}
            </style>
            </LazyLoad>
        )
    }
}

export default getSVG