import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import LazyLoad from 'react-lazyload'
import Head from 'next/head';
import HeaderCatFunc from "../components/headers/HeaderCatFunc"
import MenuLight from "../components/menus/MenuLight"
import BottomBlue from "../components/bars/BottomBlue"
import RecGradCard from "../components/cards/RecGradCard"
import DefaultH2 from '../components/titulos/DefaultH2'
import SubH2 from '../components/titulos/SubH2'
import BasicCard from '../components/cards/BasicCard'
import SimpleCounter from '../components/dinamico/SimpleCounter'
import VideoInsertFuncionalidades from '../components/content/VideoInsertFuncionalidades'
import ExperimenteBtn from '../components/buttons/ExperimenteBtn'
import VideoEmbed from '../components/embeds/VideoEmbed'
import DefaultCta from '../components/cta/DefaultCta'
import ModuleFuncionalidadesCat from '../components/content/ModuleFuncionalidadesCat'
import CarosselDepoDefault from '../components/dinamico/CarosselDepoDefault'
import ContentModuleFAQ from '../components/content/ContentModuleFAQ'
import RodapeDefault from '../components/rodape/RodapeDefault'
import RodapeEssential from '../components/rodape/RodapeEssential'
import GetPrice from '../components/data/GetPrice'
import BreadCrumbs from '../components/embeds/BreadCrumbs'

class emissorNotaFiscal extends React.Component {
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
        this.state = {};
    }

    componentDidMount(props) {
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
                <MenuLight />
                <HeaderCatFunc 
                    imgName='emissor-nf'
                    h1n='Emissor de Nota Fiscal Eletrônica'
                    headerStyle='emissor grayMask'
                    breadcrumbs={
                        <BreadCrumbs theme='light'>
                            <>Emissor de Nota Fiscal Eletrônica</>
                        </BreadCrumbs>
                    }
                >
                <ul>
                    <li><>Emissão de NF-e, NFS-e, NFC-e, CT-e, MDF-e, importação e exportação;</></li>
                    <li><>Integrado ao vendas, estoque e financeiro;</></li>
                    <li><>Backup automático e ilimitado por até 5 anos;</></li>
                    <li><>Parametrize o sistema e não perca tempo preenchendo notas;</></li>
                    <li><>Envio de notas por e-mail;</></li>
                    <li><>Com certificado digital A1 gratuito*</></li>
                </ul>
                </HeaderCatFunc>
                <section className="greyArea">
                    <RecGradCard
                        imgName='maisApps'
                        h3='Conte com aplicativos exclusivos que facilitam o dia a dia de quem emite nota fiscal.'
                    />
                    <RecGradCard
                        imgName='clock'
                        h3='Economize em média 7h de trabalho por mês emitindo notas fiscais com o VHSYS.'
                    />
                    <RecGradCard
                        imgName='printer'
                        h3='Emita notas fiscais de onde você estiver. O sistema é 100% online.'
                    />
                </section>
                <DefaultH2
                    titulo='Emita todos os tipos de Notas Fiscais Eletrônicas com o sistema de gestão VHSYS'
                />
                <section className='firstGrid'>
                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de NF-e (Nota Fiscal Eletrônica)</h3>
                        <p>
                            <>Emita notas fiscais eletrônicas de produtos em poucos cliques. Após emitir a NF-e, você pode lançar baixa no estoque e no financeiro em poucos clique, enviar Danfe e XML para o cliente por e-mail e muito mais.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/notebook01.svg')} alt='notebook01' title='notebook01' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de NFS-e (Nota Fiscal de Serviço Eletrônica)</h3>
                        <p>
                            <>Com o sistema para emissão de nota fiscal eletrônica do VHSYS você integra suas ordens de serviço e emite NFS-e com muito mais facilidade. Se não usa ordem de serviço pode emitir mesmo assim, o VHSYS está homologado para emitir nota em mais de 1000 cidades.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/maintenance01.svg')} alt='maintenance01' title='maintenance01' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de Nota Fiscal de Importação e Exportação</h3>
                        <p>
                            <>Gere notas fiscais de exportação via produtos, armazene seus dados na nuvem, imprima notas fiscais ou envie tudo por e-mail. Com o VHSYS emitir nota fiscal de importação e exportação é muito mais fácil.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/globe01.svg')} alt='globe01' title='globe01' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de NFC-e (Nota Fiscal de Consumidor Eletrônica)</h3>
                        <p>
                            <>Emita NFC-e de forma simples e ainda utilize uma impressora comum. Com nosso emissor de notas fiscais você pode emitir uma NFC-e através do PDV e, ainda, automatizar a gestão do estoque e financeiro. Você também pode emitir manualmente as NFC-es.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/register01.svg')} alt='register01' title='register01' />
                        </LazyLoad>
                    </BasicCard>
                    
                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de CT-e (Conhecimento de Transporte Eletrônico)</h3>
                        <p>
                            <>Ganhe tempo para realizar suas entregas no prazo fazendo a emissão de CTes de forma simples e rápida. Você pode automatizar o preenchimento e, ainda, não precisa se preocupar com o armazenamento dos CTes.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/truck01.svg')} alt='truck01' title='truck01' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Emissor de MDF-e (Manifesto Eletrônico de Documentos Fiscais)</h3>
                        <p>
                            <>Com o emissor de nota da VHSYS você pode emitir tanto NF-e como CT-e e assim emitir MDF-e. Além disso, você pode consultá-lo quando desejar de qualquer lugar e hora, pois o sistema é online e pode ser acessado via smartphone, tablet ou computador.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/truck02.svg')} alt='truck02' title='truck02' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Carta de Correção Eletrônica</h3>
                        <p>
                            <>Cometeu algum erro na hora de emitir uma nota fiscal? Com a carta de correção eletrônica do sistemas para emissão de nota fiscal VHSYS você consegue reverter esse problema rapidamente. Ainda poderá imprimir a carta ou enviar por e-mail.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/mail01.svg')} alt='mail01' title='mail01' />
                        </LazyLoad>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <h3>Relatórios de Notas Fiscais Emitidas</h3>
                        <p>
                            <>O sistemas de emissão de nota fiscal eletrônica VHSYS gera relatórios completos e precisos sobre a emissão das notas, ajudando na tomada de decisão e controle do negócio.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/tablet01.svg')} alt='tablet01' title='tablet01' />
                        </LazyLoad>
                    </BasicCard>
                    
                    <BasicCard iconHeight='60px'>
                        <h3>Certificado Digital Gratuito*</h3>
                        <p>
                            <>Com o software para emitir nota fiscal do VHSYS você pode ganhar o Certificado Digital A1 gratuitamente, basta contratar um plano do sistema no período anual. *Promoção não cumulativa, consulte regulamento.</>
                        </p>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/certificate01.svg')} alt='certificate01' title='certificate01' />
                        </LazyLoad>
                    </BasicCard>
                </section>
                <SimpleCounter 
                    pre01='+' value01='2' pos01='MILHÕES' texto01='de notas fiscais foram emitidas através do sistema VHSYS.'
                    pre02='+ DE' value02='150' pos02='MIL' texto02='empresas já utilizaram o sistema VHSYS'
                    pre03='+ DE' value03='10' pos03='BILHÕES' texto03='de reais em notas emitidas pelo software'
                />
                <DefaultCta
                    tipo='experimente'
                    btn_class='whyVHSYS'
                    chamada=' Emita todos os tipos de nota fiscal eletrônica com um sistema confiável e prático'
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate Agora!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <VideoInsertFuncionalidades>
                    <h3>Saiba como utilizar o emissor de NF do VHSYS</h3>
                    <p>Se você emite nota fiscal eletrônica confira neste vídeo como fazer isso de maneira prática e segura com o VHSYS! O sistema faz backup de todas suas notas e armazena por 5 anos. Além disso, você pode imprimir, exportar, imprimir em massa, inutilizar notas e fazer carta de correção, além de enviar tudo por e-mail com muita facilidade.</p>
                    <ExperimenteBtn btnText='Experimente Grátis' btnStyle="green" onClick={()=>{this.dataLayerPushBuy('Experimente')}} />
                    <VideoEmbed videoTag='mk-2xdy-kTA' />
                </VideoInsertFuncionalidades>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_01.jpg')} />
                    </picture>
                    <h3>Muito melhor que os emissores gratuitos</h3>
                    <p>Para emitir uma nota fiscal no programa gratuito da Sefaz (secretaria da fazenda), por exemplo, você precisa preencher manualmente todos os campos da nota fiscal, o que te toma muito tempo, não é mesmo? O VHSYS acaba de vez com esse problema! Você vai cadastrar seus produtos (ou serviços), clientes, transportadoras no sistema e, quando for emitir nota, basta selecionar o item desejado que o sistema faz o preenchimento da nota. Isso te permite reduzir o tempo de emissão em menos da metade!</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_02.jpg')} />
                    </picture>
                    <h3>Nota fiscal integrada estoque e financeiro</h3>
                    <p>Já pensou em emitir um nota fiscal e com apenas um clique atualizar a quantidade de produtos no </p>
                    <a url="/controle-de-estoque/">estoque </a>
                    <p>? Com o programa para nota fiscal eletrônica VHSYS isso é possível. E mais, com apenas um clique você também lança a nota no seu </p>
                    <a url="/controle-financeiro/">financeiro </a>
                    <p>em contas a receber e, assim, mantém um bom fluxo de caixa da sua empresa.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_03.jpg')} />
                    </picture>
                    <h3>Certificado Digital Gratuito</h3>
                    <p>No VHSYS você pode ganhar o certificado digital gratuitamente para emitir suas notas fiscais. Basta assinar o software emissor de nota fiscal eletrônica no período anual. (Promoção não cumulativa, confira o regulamento do </p>
                    <a url="/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/">certificado digital gratuito</a>
                    <p>.) Vale lembrar que o Certificado Digital é um documento eletrônico que funciona como uma identidade das empresas no ambiente virtual, ele garante a validade jurídica dos documentos digitais e é obrigatório para emissão de notas.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_04.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_04.jpg')} type="image/jpg" />
                        <img alt='screen_04' title='screen_04' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_04.jpg')} />
                    </picture>
                    <h3>Nota fiscal enviada por e-mail</h3>
                    <p>Chega de perder tempo enviando separadamente e-mail para seus clientes com as notas em anexo. Com o emissor de notas do VHSYS você faz isso em apenas um clique e diretamente do sistema, nao precisa nem abrir o seu e-mail. Muito mais praticidade para você e mais profissionalismo para seu negócio.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_05.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_05.jpg')} type="image/jpg" />
                        <img alt='screen_05' title='screen_05' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_05.jpg')} />
                    </picture>
                    <h3>Recursos adicionais na loja de aplicativos</h3>
                    <p>O VHSYS possui uma loja de aplicativos integrada ao sistema, isso aumenta ainda mais suas ferramentas de gestão. Para a emissão de notas fiscais você conta com os seguintes aplicativos: </p>
                    <a url="/loja-de-aplicativos/icms-st/">ICMS-ST</a>
                    <p>que te ajuda a calcular o imposto ICMS; </p>
                    <a url="/loja-de-aplicativos/backup-nfe/">Backup NFe</a>
                    <p>, que expande a capacidade de armazenamento de suas notas; E o </p>
                    <a url="/loja-de-aplicativos/emissor-darf/">Emissor DARF</a>
                    <p>, que pode ser utilizado para emissão de guias específicas e atualização de juros. Além desses, temos mais de 40 aplicativos que auxiliam a gestão de um negócio, confira a </p>
                    <a url="/loja-de-aplicativos/">lista completa.</a>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_06.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_06.jpg')} type="image/jpg" />
                        <img alt='screen_06' title='screen_06' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/emissor-nota-fiscal/screen_06.jpg')} />
                    </picture>
                    <h3>Integração com contabilidade</h3>
                    <p>Uma das grandes vantagens de ter o emissor de notas VHSYS é que ele pode ser </p>
                    <a url="/integracao-contabil-financeira/" blank={true}>integrado com o sistema da sua contabilidade </a>
                    <p>e você nunca mais vai se preocupar em mandar documentos para o contador. O VHSYS pode ser integrado com os principais sistemas de contabilidade, possibilitando que seu contador tenha acesso direto às XMLs das suas notas emitidas, economizando o seu tempo e o dele.</p>
                </ModuleFuncionalidadesCat>
                <SubH2
                    titulo='Depoimentos de quem usa'
                />
                <CarosselDepoDefault />
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada={[
                        'Conte com um emissor de nota fiscal que facilita seu dia a dia. Com o VHSYS você emite todos os tipos de nota fiscal a partir de R$',
                        <GetPrice plan='plan' />
                    ]}
                    bg_color='cyan'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <DefaultH2
                    titulo='Tire suas dúvidas:'
                />
                <section className='faq'><ol>
                <ContentModuleFAQ open={true}>
                    <h3>O que é e para que serve a nota fiscal?</h3>
                    <p>
                        <>A nota fiscal é um documento digital que serve para comprovar a venda de produtos ou serviços, o faturamento e a cobrança de impostos. Todas as empresas são obrigadas a emitir notas fiscais e a não emissão é caracterizada como sonegação de imposto.</>
                    </p>
                    <p>
                        <>O documento é emitido por um programa emissor nota fiscal, como o VHSYS, e a sua validade é garantida pela assinatura digital, via certificado.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é emissor de nota fiscal?</h3>
                    <p>
                        <>O emissor de nota fiscal é um programa onde são registradas as informações de venda de produtos ou serviços para a emissão da nota. O software para emitir nota fiscal também é responsável por comunicar a SEFAZ, que autentica o documento para a emissão. Tudo isso é feito de forma eletrônica e automatizada.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como emitir nota fiscal?</h3>
                    <p>
                        <>Para emitir notas fiscais é necessário cumprir primeiro alguns requisitos: fazer o credenciamento da empresa na SEFAZ, possuir certificado digital, computador com internet e um software para emissão de nota fiscal, como o VHSYS. Após cumprir esses requisitos, você já pode preencher sua nota, com os seguintes itens:</>
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
                    <h3>O VHSYS é um emissor de notas?</h3>
                    <p>
                        <>O VHSYS também é um emissor de notas fiscais. Com ele é possível emitir NF-e, NFS-e, NFC-e, CT-e, MDF-e, nota de importação e exportação, de entrada, de produto e carta de correção. O sistema de emissão de nota fiscal é integrado às funcionalidades do software de gestão empresarial, de controle de estoque, vendas e financeiro, que automatiza as rotinas de seu negócio.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como consultar a nota fiscal?</h3>
                    <p>
                        <>Consultar a nota fiscal é muito fácil. No software de nota fiscal, você pode buscá-las por status, data de cadastro, pelo CPF ou CNPJ do cliente e até pelo valor total do documento. Você também consegue gerar relatórios sobre a emissão de notas fiscais junto ao sistema, facilitando seu controle e gestão de vendas.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>MEI pode emitir nota fiscal?</h3>
                    <p>
                        <>MEI não é obrigado a emitir nota fiscal, mas é extremamente recomendado que faça a emissão do documento, após a venda de um produto ou serviço. Isso ajuda no controle financeiro, evitando exceder o limite de faturamento, para que não desenquadre de MEI. Além disso, traz mais segurança aos clientes, pois o documento formaliza a venda ou prestação de serviço. A VHSYS tem um plano especial para </>
                        <a url='/mei-micro-empreendedor-individual/' blank={false}>MEI</a>
                        <>, que conta com emissor de nota fiscal.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são os tipos de nota fiscal?</h3>
                    <p>
                        <>Os principais tipos de nota fiscal são: NF-e, NFC-e, NFS-e, CT-e e MDF-e.</>
                    </p>
                    <ol>
                        <li>
                            <a url='/emissor-de-nota-fiscal-eletronica/emissor-nfe/' blank={false}>NF-e:</a>
                            <> Nota Fiscal Eletrônica que documenta as transações de venda;</>
                        </li>
                        <li>
                            <a url='/emissor-de-nota-fiscal-eletronica/emissor-nfce/' blank={false}>NFC-e:</a>
                            <> Nota Fiscal de Consumidor Eletrônica que é emitida para o consumidor final de varejo;</>
                        </li>
                        <li>
                            <a url='/emissor-de-nota-fiscal-eletronica/emissor-nfse/' blank={false}>NFS-e:</a>
                            <> Nota Fiscal Eletrônica de Serviço que é emitida após a realização de um serviço;</>
                        </li>
                        <li>
                            <a url='/emissor-de-nota-fiscal-eletronica/emissor-cte/' blank={false}>CT-e:</a>
                            <> Conhecimento de Transporte Eletrônico que documenta a prestação de serviço de transporte de cargas;</>
                        </li>
                        <li>
                            <a url='/emissor-de-nota-fiscal-eletronica/emissor-mdfe/' blank={false}>MDF-e:</a>
                            <> Manifesto Eletrônico de Documentos Fiscais que vincula todos os documentos fiscais do transporte de cargas. </>
                        </li>
                    </ol>
                    <p>
                        <>Com o sistema para emissão de nota fiscal VHSYS você consegue emitir todos esses tipos de notas, com muita facilidade e segurança. </>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é DANFE?</h3>
                    <p>
                        <>DANFE é a sigla para Documento Auxiliar da Nota Fiscal Eletrônica (NF-e), que é a representação simplificada da NF-e e é impresso. Ele contém as principais informações das notas fiscais e existe fisicamente para que possa haver a circulação de mercadorias. Caso as transportadoras não estejam com o documento impresso, a fiscalização pode aplicar multas. Além disso, ela serve também para a conferência dos produtos pelo cliente no ato da entrega ou para a troca de mercadoria, por exemplo.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é cupom fiscal?</h3>
                    <p>
                        <>O cupom fiscal equivale à nota fiscal, mas é voltado para o consumidor final do varejo (mercados, lojas, restaurantes). Ele formaliza a compra e mostra ao cliente os tributos sobre os produtos adquiridos. No cupom fiscal, é possível visualizar a descrição dos itens, valor de cada um, data, local e hora da compra, assim como o valor pago e até o troco que é recebido. </>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O VHSYS está atualizado para a NF-e 4.0?</h3>
                    <p>
                        <>Sim. O VHSYS está atualizado e todas as notas são emitidas na versão 4.0. Assim, com sistema para emissão de nota fiscal VHSYS você consegue emitir todos os tipos de notas com muita facilidade e ainda conta com um software de gestão completo e integrado de controle de estoque, vendas e financeiro, que automatiza todas as suas rotinas.</>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada='Não perca mais tempo! Assine o sistema VHSYS e emita suas notas fiscais de forma integrada com as outras áreas do seu negócio.'
                    bg_color='cyan'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <BottomBlue />
                <RodapeDefault />
                <RodapeEssential />
            <style jsx>{`
                section.greyArea {
                    width:100%;
                    background:#f6f7fb;
                    text-align:center;
                    padding:25px 0;
                }
                section.firstGrid {
                    width:1100px;
                    max-width:calc(100% - 20px);
                    margin:0 auto;
                    text-align: left;
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

export default withRouter(emissorNotaFiscal);