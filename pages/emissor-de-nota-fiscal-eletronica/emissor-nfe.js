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
import VideoEmbed from '../../components/embeds/VideoEmbed';
import ListCard from '../../components/cards/ListCard'
import NFEstadosLinks from '../../components/content/NFEstadosLinks'
import LazyLoad from 'react-lazyload'
import GetPrice from '../../components/data/GetPrice'
import BreadCrumbs from "../../components/embeds/BreadCrumbs"

class emissorNFe extends React.Component {
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
                    imgName='emissor-nfe'
                    h1n='Emissor de '
                    h1b='NF-e'
                    subtitulo='Com o Emissor de Nota Fiscal Eletrônica do VHSYS você gera notas com facilidade e rapidez. Além disso, terá todos os dados armazenados na nuvem, poderá imprimir, exportar, inutilizar notas, fazer carta de correção e ainda enviar tudo por e-mail.'
                    breadcrumbs={
                        <BreadCrumbs theme='dark'>
                            <a url='/emissor-de-nota-fiscal-eletronica/' blank={true}>Emissor de Nota Fiscal Eletrônica</a>
                            <>Emissor NF-e</>
                        </BreadCrumbs>
                    }
                />
                <DefaultH2
                    titulo='Com um emissor NF-e integrado ao controle financeiro, vendas e estoque sua empresa vai crescer de maneira estruturada'
                />
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_01.jpg')} />
                    </picture>
                    <h3>Emissão Nota Fiscal Eletrônica (NF-e)</h3>
                    <p>A nota fiscal eletrônica é a garantia fiscal de que a venda de uma mercadoria ou serviço foi realizada por sua empresa. É através dela que os órgãos responsáveis podem exercer o recolhimento de impostos e fiscalizações necessárias. Emitir nota fiscal é fundamental para manter a legalidade do seu negócio.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_02.jpg')} />
                    </picture>
                    <h3>Emissor NF-e VHSYS</h3>
                    <p>O sistema VHSYS emite nota fiscal de produto, mas também de serviço, consumidor, importação e exportação, além de CT-e e MDF-e. O emissor é homologado em todos os estados do país, permitindo que sua empresa gere nota de onde estiver para todos os seus clientes. Traga mais facilidade para seu negócio com o emissor mais completo do mercado. </p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_03.jpg')} />
                    </picture>
                    <h3>Envio de nota fiscal por e-mail</h3>
                    <p>Envie automaticamente suas notas fiscais e arquivo xml para seus clientes e até contabilidade, por e-mail. Automatize suas rotinas e tenha mais tempo para planejar os próximos passos de seu negócio.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_04.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_04.jpg')} type="image/jpg" />
                        <img alt='screen_04' title='screen_04' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-nfe/screen_04.jpg')} />
                    </picture>
                    <h3>Relatórios gerenciais de notas fiscais</h3>
                    <p>Você consegue emitir diversos relatórios personalizados para sua empresa com o VHSYS. Descubra em poucos cliques a quantidade de notas fiscais emitidas por período, qual o faturamento, para quais clientes foram emitidas e muito mais. </p>
                </ModuleFuncionalidadesSec>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Conte com um emissor de nota fiscal que facilita seu dia a dia. Com o VHSYS você emite nota fiscal eletrônica a partir de R$'
                        ,<GetPrice plan='plan' />
                    ]}
                    bg_color='blue'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_white'
                />
                <section className="videoMask">
                    <LazyLoad once height='100%'>
                        <img height='100%' width='auto' src={require('../../static/images/vetor/video-background.svg')} alt='video-background' title='video-background' />
                    </LazyLoad>
                    <div>
                        <VideoEmbed videoTag='_QXNt31ww1k' />
                    </div>
                </section>
                <section className='firstGrid'>
                    <ListCard svgIcon='nfe01' iconWidth='90px' h3='NF-e 4.0'>
                        <>subtitle='A NF-e 4.0 é o novo padrão para a validação das notas fiscais. A mudança traz novos protocolos de segurança, além de alterações de campos das notas, sendo as principais ao Fundo de Combate à Pobreza (que recebe recursos do ICMS) e ao campo de pagamento (que agora passa a integrar o Grupo de Informações de Pagamento). Assim, a versão 3.1 não tem mais validade perante a Secretaria de Fazenda do Estado (Sefaz). Por isso é fundamental que você possua um emissor de notas fiscais atualizado, como o VHSYS e assim tenha mais tranquilidade e segurança em sua empresa.</>
                    </ListCard>
                    <ListCard svgIcon='type01' iconWidth='90px' h3='Fim do emissor nota fiscal eletrônica gratuito de NF-e'>
                        <>Com o fim do emissor gratuito da Sefaz, muitos gestores buscam novas formas de continuar emitindo notas fiscais para seus clientes. Com o VHSYS, além de contar com um emissor de NFe, você ainda tem diversas funcionalidades que ajudam a melhor a gestão financeira, de vendas e estoque de sua empresa. Evite um emissor NFe grátis e invista em um sistema com suporte e integrado com módulos que facilitam a sua rotina.</>
                    </ListCard>
                    <ListCard svgIcon='country01' iconWidth='90px' h3='Saiba mais sobre a Nota Fiscal Eletrônica no seu estado' >
                        <><NFEstadosLinks /></>
                    </ListCard>
                </section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Automatize sua rotina com o emissor de NFe VHSYS e ganhe tempo para conquistar mais clientes. Planos a partir de R$',<GetPrice plan='plan' />
                    ]}
                    bg_color='blue'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_white'
                />
                <DefaultH2
                    titulo='Tire suas dúvidas:'
                />
                <section className='faq'><ol>
                <ContentModuleFAQ open={true}>
                    <h3>O que é NF-e?</h3>
                    <p>
                        <>A nota fiscal eletrônica é um documento que tem como objetivo registrar a operação de circulação de mercadorias ou prestação de serviços, facilitar a arrecadação fiscal, acompanhar em tempo real as operações comerciais pelo Fisco. A NF e é digital e substitui a nota fiscal impressa.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é Danfe?</h3>
                    <p>
                        <>O Documento Auxiliar da Nota Fiscal Eletrônica (Danfe) tem como função facilitar a consulta da NF-e na internet para a verificação da efetiva existência ou legalidade do documento em questão. Mas, o documento não tem o mesmo valor fiscal e assim não pode substituir as notas fiscais eletrônicas.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é emissor de nota fiscal?</h3>
                    <p>
                        <>O emissor de nota fiscal é um programa onde são registradas as informações de venda de produtos ou serviços para a emissão da nota. Os sistemas de emissão também são responsáveis por comunicar a Sefaz, que autentica o documento para a emissão.<small>*Promoção não cumulativa.</small></>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como emitir nota fiscal?</h3>
                    <p>
                        <>Para emitir notas fiscais é necessário: fazer o credenciamento da empresa na Sefaz, possuir certificado digital, computador com internet e um software para emissão de nota fiscal, como o VHSYS. Após todas essas etapas, você vai preencher sua nota com os seguintes dados:</>
                    </p>
                    <ol>
                        <li>
                            <>1. Dados do Emitente;</>
                        </li>
                        <li>
                            <>2. Dados do Destinatário;</>
                        </li>
                        <li>
                            <>3. Produto ou Serviço;</>
                        </li>
                        <li>
                            <>4. Tributação;</>
                        </li>
                        <li>
                            <>5. Natureza da operação;</>
                        </li>
                        <li>
                            <>6. Forma de pagamento;</>
                        </li>
                        <li>
                            <>7. CFOP;</>
                        </li>
                        <li>
                            <>8. Valores do ICMS ST;</>
                        </li>
                        <li>
                            <>9. Valor total dos produtos ou serviços;</>
                        </li>
                        <li>
                            <>10. alor total do frete;</>
                        </li>
                        <li>
                            <>11. Valor total do seguro;</>
                        </li>
                        <li>
                            <>12. Valor total do desconto;</>
                        </li>
                        <li>
                            <>13. Outras despesas acessórias;</>
                        </li>
                        <li>
                            <>14. Valor total da nota;</>
                        </li>
                        <li>
                            <>15. Valor aproximado total de tributos.</>
                        </li>
                    </ol>
                    <p>
                        <>Se você tiver dúvidas ao preencher todos esses dados em suas notas, não se preocupe. Acesse nossa página de suporte e confira nosso </>
                        <a url='https://suporte.vhsys.com.br/nota-fiscal/' blank={true}>tutorial.</a>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Qual o prazo de armazenamento das notas fiscais?</h3>
                    <p>
                        <>De acordo com a legislação vigente, os emissores de NF-e precisam armazenar as notas geradas por até 5 anos, caso haja a necessidade de conferência posterior ou auditoria.Com o VHSYS, além de emitir nota fiscal de serviço, eletrônica, consumidor e outras, você ainda não precisa se preocupar com o espaço de armazenamento para as notas, pois o sistema arquiva os documentos pelo prazo determinado por lei, na nuvem e com segurança. Além disso, você acaba também reduzindo custos com impressão e arquivamento.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais as vantagens da NF-e?</h3>
                    <p>
                        <>As micro e pequenas empresas precisam emitir notas fiscais, para se manter regulares perante o Fisco. A emissão de nota fiscal eletrônica também traz muitas vantagens aos empresários, confira: </>
                    </p>
                    <ol>
                        <strong>Contribuinte Comprador</strong>
                        <li>
                            <>- Elimina a digitação de notas fiscais na recepção de mercadorias;</>
                        </li>
                        <li>
                            <>- Planeja a logística de entrega através da recepção antecipada de informação da nota;</>
                        </li>
                        <li>
                            <>- Reduz erros de digitação em notas;</>
                        </li>
                        <li>
                            <>- Incentiva o uso de relacionamentos eletrônicos com fornecedores.</>
                        </li>
                    </ol>

                    <ol>
                        <strong>Sociedade</strong>
                        <li>
                            <>- Redução do consumo de papel;</>
                        </li>
                        <li>
                            <>- Incentivo ao comércio eletrônico e ao uso de novas tecnologias;</>
                        </li>
                        <li>
                            <>- Padronização dos relacionamentos eletrônicos entre empresas;</>
                        </li>
                        <li>
                            <>- Surgimento de oportunidades de negócios e empregos na prestação de serviços ligados à NF-e.</>
                        </li>
                    </ol>


                    <ol>
                        <strong>Emissor de NF-e</strong>
                        <li>
                            <>- Redução de custos de impressão e de envio do documento fiscal;</>
                        </li>
                        <li>
                            <>- Redução de custos de armazenagem de documentos;</>
                        </li>
                        <li>
                            <>- Simplificação de obrigações acessórias;</>
                        </li>
                        <li>
                            <>- Redução de tempo de retenção em Postos Fiscais de Fronteira;</>
                        </li>
                        <li>
                            <>- Incentivo a uso de relacionamentos eletrônicos com clientes.</>
                        </li>
                    </ol>

                    <ol>
                        <strong>Administração Tributária</strong>
                        <li>
                            <>- Melhoria no processo de controle fiscal, possibilitando um melhor intercâmbio e compartilhamento de informações entre os fiscos;</>
                        </li>
                        <li>
                            <>- Redução de custos no processo de controle das notas fiscais capturadas pela fiscalização de mercadorias em trânsito;</>
                        </li>
                        <li>
                            <>- Diminuição da sonegação e aumento da arrecadação;</>
                        </li>
                        <li>
                            <>- Suporte a projetos de escrituração eletrônica contábil e fiscal da Secretaria da Receita Federal.</>
                        </li>
                    </ol>


                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais os benefícios do VHSYS?</h3>
                    <p>
                        <>Com o VHSYS, além de fazer a emissão de notas fiscais de sua empresa, ainda é possível gerir todas as áreas de sua empresa com facilidade e precisão. Conte com um sistema completo e integrado de controle financeiro, vendas e estoque e automatize todas as suas rotinas de contas a pagar, receber, fluxo de caixa, giro de estoque, ordem de compra, emissão de pedidos, orçamentos, controle de vendedores e muito mais. </>
                        <a url='https://vhsys.com.br/' blank={false}>Experimente grátis por 7 dias.</a>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada='Conheça o emissor de nota fiscal eletrônica VHSYS'
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
                    margin:0 auto;
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

export default withRouter(emissorNFe);