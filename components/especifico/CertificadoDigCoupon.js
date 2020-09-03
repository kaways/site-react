import CertificadoBtn from '../buttons/CertificadoBtn'

class CertificadoDigCoupon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    
    render() {
        return (
            <section>
                <article>
                    <h3>Certificado Digital A1 e-CNPJ</h3>
                    <p className='top'><span><small>de R$215,00</small>por apenas</span> <strong>R$ 150,00!</strong></p>
                    <p className='bottom'>Preço promocional para os 100 primeiros clientes</p>
                    <div className='butons'>
                        <span>Ligue grátis 0800 940 1506</span>
                        <CertificadoBtn  btnText='Solicite uma Ligação' btnStyle="green" />
                    </div>
                </article>
                <style jsx>{`
                    section {
                        width:900px;
                        max-width:95%;
                        margin: 50px auto 0;
                        text-align: center;
                        background: linear-gradient(-10deg, rgb(255, 233, 167) 30%, rgb(241, 197, 62), rgb(255, 233, 167) 60%);
                        border-radius: 20px;
                    }
                    article {
                        display:inline-block;
                        padding: 30px 0;
                    }
                    h3 {
                        font-size:2.3rem;
                        line-height:2.6rem;
                        margin: 0 0 15px;
                        color: rgb(23, 70, 118);
                    }
                    p.top {
                        display:block;
                        margin: 1px;
                    }
                    p.top span{
                        font-size: 1.4rem;
                        position: relative;
                        vertical-align: bottom;
                        margin: 1rem 0 0;
                        display: inline-block;
                    }
                    p.top span small{
                        font-size: 1rem;
                        position: relative;
                        vertical-align: bottom;
                        position: absolute;
                        bottom: 1.5rem;
                        left: 0;
                        text-decoration: line-through;
                        color: rgb(222, 0, 0);
                    }
                    p.top strong {
                        font-size: 3.2rem;
                        line-height: 3.2rem;
                        position: relative;
                        vertical-align: bottom;
                        margin: 1px;
                        white-space: nowrap;
                    }
                    div.bottom {
                        color: rgb(167, 139, 38);
                        border-radius: 50px;
                        margin: 20px 0;
                        font-size: 1.2rem;
                        line-height: 1.2rem;
                    }
                    div.butons span {
                        display: inline-block;
                        font-size: 1.1rem;
                        line-height: 1.1rem;
                        background: linear-gradient(16deg,rgb(19, 139, 172),rgb(23,70,118));
                        color: rgb(255, 255, 255);
                        padding: 17px 25px;
                        border-radius: 15px;
                        margin: 6px 15px 0;
                    }
                `}</style>
            </section>
        )
    }
}

export default CertificadoDigCoupon
