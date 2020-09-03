import CarosselDepoBlue from '../dinamico/CarosselDepoBlue'
import TripleCounter from '../dinamico/TripleCounter'
import LazyLoad from 'react-lazyload'

const DepoimentosHome = () => (
    <LazyLoad>
        <section>
            <article>
                <div className="left">
                    <h3>O que os nossos clientes dizem</h3>
                    <CarosselDepoBlue />
                </div>
                <div className="right">
                    <h4>Números que  falam por nós:</h4>
                    <TripleCounter />
                    <p>A VHSYS atua no mercado de ERP há 7 anos, atendendo todos os estados do Brasil. 95% dos nossos clientes renovam conosco após 12 meses de contrato. Com uma equipe de atendimento preparada e eficiente, garantimos atendimento de chamados em no máximo 1 hora!</p>
                </div>
            </article>
        </section>
    <style jsx>{`
        section {
            background-color: #2b3a7d;
            background-image: url('./static/images/uniqueComponents/depoimentos/depoimentos_bg.jpg');
            background-size:cover;
            background-position:center;
            padding:40px 0;
        }
        article {
            width:100%;
            max-width:1200px;
            margin:auto;
            text-align: center;
        }
        div.left {
            width:480px;
            display:inline-block;
            vertical-align:top;
            text-align: left;
        }
        div.left h3 {
            color:#ffffff;
            font-size:1.8rem;
            text-transform:uppercase;
            text-align:left;
            font-weight:600;
            position:relative;
            padding-bottom:30px;
        }
        div.left h3::after {
            content: '';
            display:block;
            background-color:#29c6d0;
            width:70px;
            height:3px;
            border-radius:5px;
            bottom:15px;
            left:0;
            position:absolute;
        }
        div.right {
            width:calc(100% - 600px);
            display:inline-block;
            vertical-align:top;
            padding: 0 60px;
            text-align: left;
        }
        div.right h4 {
            color:#ffffff;
            font-size:1.8rem;
            text-transform:uppercase;
            text-align:left;
            font-weight:600;
            position:relative;
            padding-bottom:30px;
        }
        div.right h4::after {
            content: '';
            display:block;
            background-color:#29c6d0;
            width:70px;
            height:3px;
            border-radius:5px;
            bottom:15px;
            left:0;
            position:absolute;
        }
        div.right p {
            color: #ffffff;
            font-size:1.1rem;
            line-height:1.2;
            margin:0;
            border-top:1px solid #2e73a9;
            margin: 30px 0 0;
            padding: 30px 5px 0;
        }
        @media (max-width: 1150px) {
        div.left {
            width:85%;
        }
        div.right {
            width:calc(85% - 60px);
        }

        }
    `}</style>
    </LazyLoad>
);

export default DepoimentosHome