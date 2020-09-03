import VideoEmbed from '../embeds/VideoEmbed'
import ExperimenteBtn from '../buttons/ExperimenteBtn'

const PorqueVHSYS = () => (
    <section>
        <article className='left'>
            <h3>PORQUE ESCOLHER A VHSYS</h3>
            <div>
                <img alt='Atendimento' title='Atendimento' src={require("../../static/images/vetor/icons/icon_0001.svg")} />
                <p><strong>Atendimento eficiente</strong>Suporte ilimitado e gratuito. Atendimento em no máximo 1 hora.</p>
            </div>
            <div>
                <img alt='Segurança' title='Segurança' src={require("../../static/images/vetor/icons/icon_0002.svg")} />
                <p><strong>Segurança</strong>Seus dados ficam 100% seguros em nosso sistema.</p>
            </div>
            <div>
                <img alt='treinamentos' title='treinamentos' src={require("../../static/images/vetor/icons/icon_0003.svg")} />
                <p><strong>treinamentos online</strong>Vídeos, e-books, manuais e webinars à sua disposição.</p>
            </div>
            <ExperimenteBtn btnText={`Experimente Grátis por 7 Dias`} btnStyle='whyVHSYS' />
        </article>
        <article>
            <VideoEmbed videoTag='AAmiJRurius' />
        </article>
    <style jsx>{`
        section {
            width:100%;
            background-color:#f0f5fc;
            padding:50px 0 70px;
            text-align:center;
        }
        article {
            display:inline-block;
            vertical-align:middle;
            width:650px;
            max-width:calc(100% - 30px);
            margin:0 15px;
        }
        article.left {
            width:530px;
        }
        section > img {
            display:inline-block;
            vertical-align:middle;
            max-width:90%;
        }
        article > div img {
            display:inline-block;
            width:60px;
            vertical-align:middle;
            margin-right:8px;
        }
        article > div p {
            display: inline-block;
            width: calc(100% - 80px);
            vertical-align: middle;
            color: #738091;
            font-size: 0.9rem;
            text-align: left;
            padding:10px 0  10px 10px;
            margin: 15px 0;
        }
        article h3 {
            display: block;
            text-align: left;
            text-transform: uppercase;
            font-weight:600;
            vertical-align: middle;
            color: #2a3f80;
            font-size: 1.7rem;
            margin:0 0 20px;
        }
        article > div p > strong {
            display: block;
            text-align: left;
            text-transform: uppercase;
            font-weight:600;
            vertical-align: middle;
            color: #2a3f80;
            font-size: 1.1rem;
        }
    `}</style>
    </section>
)

export default PorqueVHSYS