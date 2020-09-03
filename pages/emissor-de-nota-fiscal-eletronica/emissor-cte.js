import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import Head from 'next/head';
import HeaderPageFunc from "../../components/headers/HeaderPageFunc"
import MenuDark from "../../components/menus/MenuDark"
import BottomBlue from "../../components/bars/BottomBlue"
import DefaultH2 from '../../components/titulos/DefaultH2'
import DefaultCta from '../../components/cta/DefaultCta'
import ModuleFuncionalidadesSec from '../../components/content/ModuleFuncionalidadesSec'
import ContentModuleFAQ from '../../components/content/ContentModuleFAQ'
import RodapeDefault from '../../components/rodape/RodapeDefault'
import RodapeEssential from '../../components/rodape/RodapeEssential'
import VideoEmbed from '../../components/embeds/VideoEmbed'
import ListCard from '../../components/cards/ListCard'
import LazyLoad from 'react-lazyload'
import GetPrice from '../../components/data/GetPrice'
import BreadCrumbs from "../../components/embeds/BreadCrumbs"

class emissorCTe extends React.Component {
    static async getInitialProps(ctx) {
        const gotNookies = parseCookies(ctx)
        // ------------------------------------------------
        // User dataLayer Buildup
        // ------------------------------------------------
        let userData
        let tagManagerArgs = {
            gtmId: 'GTM-PM7PS6M',
            dataLayer: {
                pageType: 'Home',
                contentType: 'Home',
            }
        }
        if(gotNookies.userData) {
            userData =  JSON.parse(unescape( gotNookies.userData ) )
            
            tagManagerArgs.dataLayer.userId = userData.userId
            tagManagerArgs.dataLayer.userWorkWith = userData.userWorkWith
            tagManagerArgs.dataLayer.userActivity = userData.userActivity
            tagManagerArgs.dataLayer.userCompanySize = userData.userCompanySize
            tagManagerArgs.dataLayer.userInvoicesNumber = userData.userInvoicesNumber
            tagManagerArgs.dataLayer.userPlan = userData.userPlan
            tagManagerArgs.dataLayer.userTotalApps = userData.userTotalApps
            tagManagerArgs.dataLayer.userAppsNames = userData.userAppsNames
            tagManagerArgs.dataLayer.userType = userData.userType
        } else {
            tagManagerArgs.dataLayer.userType = 'Visitante'
        }

        return { 'tagManagerArgs': tagManagerArgs, 'userData': userData }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        TagManager.initialize(this.props.tagManagerArgs)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>VHSYS | Sistema de Gestão Empresarial</title>
                    <meta name="description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais."/>
                    <link rel="canonical" href="https://vhsys.com.br/" />
                    <meta property="og:title" content="VHSYS - Sistema de Gestão" />
                    <meta property="og:description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais." />
                    <meta name="google-site-verification" content="QupQLuuNyV3gAAkapKoUgNggbsdyzNpSDWw6hERsh3s" />
                    <script dangerouslySetInnerHTML={{
                    __html: `window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");$.src="https://v2.zopim.com/?1ar29Lh3lV8opQpVXKvIPJeBj1DFbQuQ";z.t=+new Date;$.type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script")`,
                    }}>
                    </script>
                </Head>
                <MenuDark />
                <HeaderPageFunc
                    imgName='emissor-cte'
                    h1n='Emissor de '
                    h1b='CT-e'
                    subtitulo='Elimine os erros por digitação manual, calcule os impostos automaticamente e tenha mais segurança e agilidade com o emissor de CT-e do sistema VHSYS.'
                    breadcrumbs={
                        <BreadCrumbs theme='dark'>
                            <a url='/emissor-de-nota-fiscal-eletronica/' blank={false}>Emissor de Nota Fiscal Eletrônica</a>
                            <>Emissor CT-e</>
                        </BreadCrumbs>
                    }
                />
                <DefaultH2
                    titulo='Reduza os custos e o tempo na emissão de CTe e tenha mais facilidade para realizar suas entregas no prazo'
                />
                <section className="videoMask">
                    <LazyLoad once height='100%'>
                        <img height='100%' width='auto' src={require('../../static/images/vetor/video-background.svg')} alt='video-background' title='video-background' />
                    </LazyLoad>
                    <div>
                        <VideoEmbed videoTag='ZrMHZZCwHtQ' />
                    </div>
                </section>
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_01.jpg')} />
                    </picture>
                    <h3>O que é CT-e?</h3>
                    <p>A sigla CT-e significa <strong>Conhecimento de Transporte Eletrônico</strong>. Ele é um documento virtual que acompanha a prestação de serviços de carregamento de carga. É utilizado para comprovações fiscais de qualquer operação de transporte ou frete. Além de dar mais agilidade no processo de transporte, a utilização do CT-e ainda permite a eliminação de diversos documentos fiscais impressos, incluindo a Nota Fiscal de Serviço de Transporte.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_02.jpg')} />
                    </picture>
                    <h3>Emissor de CT-e do VHSYS</h3>
                    <p>O programa para <strong>emitir CT-e</strong> no VHSYS tem um ambiente simples, prático e intuitivo, facilitando as operações fiscais da sua empresa. Com ele você garante vantagens como: armazenamento automático e digital de todos os documentos durante um período de cinco anos; pode preencher e emitir o <strong>Conhecimento de Transporte Eletrônico</strong> de qualquer local, já que o sistema é em nuvem e possibilita o acesso de qualquer lugar e plataforma (computador, tablet ou celular); Também é possível </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/' blank={false}>obter gratuitamente o Certificado Digital A1 </a>
                    <p>para emissão de CT-e. E a principal vantagem é que o emissão de CT-e é só um recurso do sistema que é a ferramenta completa e integrada para você gerenciar sua transportadora.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-cte/screen_03.jpg')} />
                    </picture>
                    <h3>Certificado Digital CT-e gratuito</h3>
                    <p>Assim como para </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/' blank={false}>emissão de Notas Fiscais Eletrônicas </a>
                    <p>, para emitir um Conhecimento de Transporte Eletrônico você vai precisar de um Certificado Digital, que nada mais é do que um documento eletrônico que funciona como uma identidade digital da pessoa física e jurídica no ambiente virtual. R$ 215,00 é o custo médio de um Certificado Digital A1, mas com o VHSYS você pode obtê-lo gratuitamente, basta contratar o sistema em qualquer categoria de plano no período anual que você ganha o Certificado. Além de ter um sistema completo para gerenciamento de empresas, você tem o <strong>emissor de CT-e</strong> e </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/' blank={false}>ganha o Certificado Digital A1.</a>
                </ModuleFuncionalidadesSec>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Conte com um emissor de CT-e que facilita seu dia a dia. Com o VHSYS você emite todos os tipos de nota fiscal a partir de R$'
                        ,<GetPrice plan='plan' />
                    ]}
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <section className='firstGrid'>
                    <ListCard svgIcon='nfe02' iconWidth='90px' iconHeight='auto' h3='Preenchimento automático' >
                        <>Elimine o trabalho manual de preencher todos os campos do CT-e para todas as emissões que fizer. Com o VHSYS você pode copiar os dados de um </>
                        <strong>Conhecimento de transporte </strong> 
                        <>já emitido e replicar para outros documentos. Assim você economiza muito mais tempo e torna a emissão mais prática.</>
                    </ListCard>
                    <ListCard svgIcon='notebook02' iconWidth='90px' iconHeight='auto' h3='Integrado ao financeiro' >
                        <>Você pode acompanhar o faturamento e fazer todo o </>
                        <a url='/controle-financeiro/' blank={false}>controle financeiro </a>
                        <>das notas emitidas de maneira rápida, basta clicar em "lançar contas" logo após a </>
                        <strong> emissão do CT-e</strong>
                        <>. Desta forma, o valor da nota será automaticamente cadastrado no seu </>
                        <a url='/controle-financeiro/contas-a-receber/' blank={false}>contas a receber</a>
                        <>. O Sistema VHSYS é totalmente integrado, permitindo que você use apenas um software e tenha o controle de todas as áreas do seu negócio.</>
                    </ListCard>
                    <ListCard svgIcon='mail01' iconWidth='90px' iconHeight='auto' h3='Envio por e-mail' >
                        <>Para dar mais agilidade aos processos, você pode enviar o </>
                        <strong>CT-e </strong>
                        <>por e-mail para o destinatário ou seus clientes. Caso você precise imprimir o documento, isso pode ser feito em folhas A4 e com uma impressora comum.</>
                    </ListCard>
                    <ListCard svgIcon='type01' iconWidth='90px' iconHeight='auto' h3='Controle o status de cada CT-e' >
                        <>Para ter o controle mais preciso sobre suas </>
                        <strong>emissões de CT-e</strong>
                        <>, pagamentos e histórico, você pode controlar o status de cada um dos </>
                        <strong>Conhecimentos de Transporte</strong>
                        <>. Os três status existentes são: atendido, em aberto e em andamento.</>
                    </ListCard>
                    <ListCard svgIcon='cloud01' iconWidth='90px' iconHeight='auto' h3='Backups automáticos' >
                        <>Com o sistema VHSYS você não corre o risco de perder informações importantes. Nosso sistema realiza backups diariamente, garantindo assim que nenhum dado seja perdido.</>
                    </ListCard>
                </section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada='Emita o Conhecimento de Transporte Eletrônico de forma prática e rápida e ganhe tempo para realizar suas entregas no prazo'
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <DefaultH2
                    titulo='Tire suas dúvidas:'
                />
                <section className='faq'><ol>
                <ContentModuleFAQ open={true}>
                    <h3>Como emitir CT-e?</h3>
                    <p>
                        <>Para emitir o cte você precisa primeiramente cadastrar sua empresa junto a Secretaria de Estado da Fazenda (Sefaz), depois será necessário ter um Certificado Digital (você pode conseguir o Certificado gratuitamente </>
                        <a url='/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/' blank={false}>clicando aqui</a>
                        <>) e um emissor de Conhecimento de Transporte (CT-e). Após a emissão e autorização online do CT-e será emitido o DACTE (Documento Auxiliar do Conhecimento de Transporte Eletrônico), quando o transporte poderá ser iniciado. Nosso sistema é a melhor opção do mercado, pois trata-se de um sistema completo de gerenciamento empresarial com o emissor de CT-e incluso, ou seja, você pode gerenciar todo seu negócio através de um único software e, ainda, fazer a emissão de conhecimento de transporte. Além disso, nosso emissor tem uma interface simples e intuitiva facilitando todo o processo de preenchimento e emissão.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Esse é o CT-e 3.0?</h3>
                    <p>
                        <>Sim, o emissor de CT-e do VHSYS é atualizado e corresponde a todas as exigências do governo.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são as vantagens de emitir CT-e com VHSYS?</h3>
                    <p>
                        <>São muitas, a principal delas é que você vai contar não apenas com um emissor de CT-e, mas também terá a disposição um sistema completo para gerenciar o seu negócio, com módulos de Controle Financeiro, Controle de Vendas, Controle de Estoque, Emissão de Notas Fiscais e, ainda, tem uma loja de aplicativos integrada para você personalizar o sistema conforme sua necessidade.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são as vantagens de emitir CT-e com VHSYS?</h3>
                    <p>
                        <>São muitas, a principal delas é que você vai contar não apenas com um </>
                        <strong>emissor de CT-e, </strong>
                        <></>
                        <>mas também terá a disposição um sistema completo para gerenciar o seu negócio, com módulos de </>
                        <a url='/controle-financeiro/' blank={false}>Controle Financeiro, </a>
                        <a url='/controle-de-vendas/' blank={false}>Controle de Vendas, </a>
                        <a url='/controle-de-estoque/' blank={false}>Controle de Estoque, </a>
                        <a url='/emissor-de-nota-fiscal-eletronica/' blank={false}>Emissão de Notas Fiscais e, </a>
                        <>ainda, tem uma </>
                        <a url='/loja-de-aplicativos/' blank={false}>loja de aplicativos integrada </a>
                        <>para você personalizar o sistema conforme sua necessidade.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são os benefícios do Emissor de CT-e do VHSYS?</h3>
                    <ol>
                        <li>
                            <>- Com ele você não se preocupa com o armazenamento das informações. Todas as emissões ficam armazenadas automaticamente durante o período de 5 anos.</>
                        </li>
                        <li>
                            <>- Você poupa muito tempo ao preencher informações, pois o sistema conta com o preenchimento automático. Além disso, é possível copiar um CT-e já emitido e replicar em uma nova emissão mudando apenas as informações necessárias.</>
                        </li>
                        <li>
                            <>- Você poderá emitir o CT-e de qualquer lugar, pois o sistema VHSYS é totalmente online. Ou seja, não há necessidade de um computador com o sistema instalado em sua empresa, você pode emitir de onde estiver através de um celular, tablet, notebook ou computador.</>
                        </li>
                        <li>
                            <>- Equipe de suporte especializada e rápida. Caso tenha alguma dúvida ou precise resolver algum problema do sistema, pode contar com nossa equipe de suporte. Nos comprometemos em atender o seu chamado em no máximo 1 hora. Muito melhor do que usar emissores gratuitos que não te dão assistência quando necessário.</>
                        </li>
                    </ol>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Diferença entre CT-e e NF-e?</h3>
                    <p>
                        <>Como já vimos o Conhecimento de Transporte (CT-e) é um documento de existência apenas digital obrigatório para a movimentação de mercadorias em todo o Brasil. Ele é totalmente digital e sua emissão e o armazenamento são eletrônicos. A emissão de cte é para transporte de cargas e frete intermunicipal e interestadual. O pagamento do imposto neste caso é para o Estado, o conhecido ICMS (Imposto sobre Circulação de Mercadorias e Serviços).</>
                    </p>
                    <p>
                        <>Já a NF-e também é um documento obrigatório e digital, com armazenamento e emissão eletrônica. Ela serve para fazer o recolhimento de impostos de todas as transações de vendas ou serviços prestados. Para o transporte de cargas ou frete, a NF-e é utilizada quando a operação é feita dentro do mesmo município, pois quando você emite uma </>
                        <a url='/emissor-de-nota-fiscal-eletronica/emissor-nfe/' blank={false}>Nota Fiscal Eletrônica </a>
                        <>paga o ISS (Imposto Sobre Serviço).</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais os benefícios do CT-e?</h3>
                    <p>
                        <>Você terá mais segurança jurídica, pois o documento atende todas as obrigatoriedades da Secretaria do Estado da Fazenda (Sefaz) e possui a Certificação Digital, que funciona como uma assinatura no ambiente eletrônico. Além disso, terá uma grande redução dos custos com impressão e armazenamento desses documentos. Terá a redução de tempo de parada nas estradas, pois o motorista não precisará mais apresentar diversos papéis para a fiscalização. Reduz significativamente a possibilidade de erros, pois todo o processo fica automatizado e você não corre o risco de ter problemas com a receita federal.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais documentos o CT-e substitui?</h3>
                    <p>
                        <>Atualmente o Conhecimento de transportes substitui seis documentos que era necessário enviar junto com a carga. São eles:</>
                    </p>
                    <ol>
                        <li>
                            <>- Conhecimento de transporte Rodoviário de Cargas, modelo 8;</>
                        </li>
                        <li>
                            <>- Conhecimento de transporte Aquaviário de Cargas, modelo 9;</>
                        </li>
                        <li>
                            <>- Conhecimento Aéreo, modelo 10;</>
                        </li>
                        <li>
                            <>- Conhecimento de transporte Ferroviário de Cargas, modelo 11</>
                        </li>
                        <li>
                            <>- Nota Fiscal de Serviço de Transport e, modelo 7, quando utilizada em transporte de cargas;</>
                        </li>
                        <li>
                            <>- Conhecimento de serviço de transporte ferroviário de cargas modelo 27.</>
                        </li>
                    </ol>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada='Precisa de mais agilidade para fazer a emissão do CT-e? Conte com o sistema mais eficaz, conte com o VHSYS!'
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <BottomBlue />
                <RodapeDefault />
                <RodapeEssential />
            <style jsx>{`
                section.videoMask {
                    width:1100px;
                    max-width:100%;
                    text-align:center;
                    margin: 60px auto;
                    padding: 30px 0;
                    position:relative;
                }
                section.videoMask img {
                    position:absolute;
                    top:0;
                    left:50%;
                    transform:translateX(-50%);
                    width:auto;
                    height:100%;
                }
                section.videoMask div {
                    display:inline-block;
                    width:700px;
                    max-width:90%;
                }
                section.firstGrid {
                    width:1100px;
                    max-width:calc(100% - 20px);
                    margin:60px auto 0;
                    text-align: center;
                }
                section.faq {
                    margin-bottom:60px;
                }
            `}
            </style>
            </div>
        )
    }
}

export default withRouter(emissorCTe);