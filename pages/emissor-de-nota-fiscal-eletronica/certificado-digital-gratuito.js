import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import Head from 'next/head';
import HeaderCatFunc from "../../components/headers/HeaderCatFunc"
import MenuLight from "../../components/menus/MenuLight"
import BottomBlue from "../../components/bars/BottomBlue"
import CertRegulation from "../../components/especifico/CertRegulation"
import DefaultH2 from '../../components/titulos/DefaultH2'
import DefaultCta from '../../components/cta/DefaultCta'
import PassoPassoModule from '../../components/content/PassoPassoModule'
import ContentModuleFAQ from '../../components/content/ContentModuleFAQ'
import ModuleFuncionalidadesSec from '../../components/content/ModuleFuncionalidadesSec'
import ListCard from '../../components/cards/ListCard'
import ListDoubleCard from '../../components/cards/ListDoubleCard'
import RodapeDefault from '../../components/rodape/RodapeDefault'
import RodapeEssential from '../../components/rodape/RodapeEssential'
import VideoEmbed from '../../components/embeds/VideoEmbed'
import CertificadoDigCoupon from '../../components/especifico/CertificadoDigCoupon'
import LazyLoad from 'react-lazyload'

class CertificadoDG extends React.Component {
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

        this.openRegulation = this.openRegulation.bind(this);
        this.handleRegulationUnmount = this.handleRegulationUnmount.bind(this);

        this.state = {};
    }

    componentDidMount(props) {
        TagManager.initialize(this.props.tagManagerArgs)
    }

    openRegulation(e) {
        e.preventDefault()
        if (!this.state.visible) {
            this.setState({
                visible: true
            })
        }
    }

    handleRegulationUnmount(){
        this.setState({
            visible: false
        });
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
                    imgName='certificado-dg'
                    h1b='Certificado Digital Gratuito*'
                    subtitulo={<span>Válido para a contratação do VHSYS no plano anual.* <br/>Promoção não cumulativa, leia o <a className='certRegulation' aria-label={this.props.btnText} onClick={this.openRegulation}>regulamento</a>.</span>}
                    headerStyle='certificado'
                >
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/certsign_header.png?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/certsign_header.png')} type="image/png" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/certsign_header.png')} />
                    </picture>
                </HeaderCatFunc>
                {this.state.visible ? <CertRegulation closeform={this.handleRegulationUnmount} /> : null}
                <CertificadoDigCoupon />
                <DefaultH2
                    titulo='Emita notas fiscais com facilidade e não se preocupe com o Certificado Digital'
                />
                <section className="videoMask">
                    <LazyLoad once height='100%'>
                        <img height='100%' width='auto' src={require('../../static/images/vetor/video-background.svg')} alt='video-background' title='video-background' />
                    </LazyLoad>
                    <div>
                        <VideoEmbed videoTag='5drT8ovV5IA' />
                    </div>
                </section>
                <section className='firstGrid'>
                    <ListCard svgIcon='nfe01' iconWidth='60px' masked='grayMask' toTheRight={true}>
                        <>No VHSYS, além de ter um emissor de notas fiscais de fácil utilização, totalmente integrado a outros recursos do sistema de gestão como o controle de vendas e financeiro, você ainda tem mais uma grande vantagem: ao contratar o sistema VHSYS no plano anual, o Certificado Digital A1 é grátis enquanto sua conta estiver ativa.</>
                    </ListCard>
                    <ListCard svgIcon='type01' iconWidth='60px' masked='grayMask'>
                        <>Na prática isso representa uma economia de R$ 215 aproximadamente. Vale lembrar que a assinatura eletrônica confirma a autenticidade de documentos e declarações e é obrigatória para empresas que emitem nota fiscal eletrônica (NF-e).</>
                    </ListCard>
                </section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Com o VHSYS você não se preocupa com o armazenamento, nem com o Certificado Digital.'
                    ]}
                    bg_color='cyan'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <PassoPassoModule>
                    <h3>Passo a passo para a aquisição do Certificado Digital gratuito</h3>
                    <img alt='passo-a-passo' title='passo-a-passo' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-a-passo.svg')} />
                    <mobilePicture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_01.jpg?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_01.jpg')} type="image/jpg" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_01.jpg')} />
                        <p><>Contrate o VHSYS no plano anual e ative a conta.</></p>
                    </mobilePicture>
                    <mobilePicture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_02.jpg?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_02.jpg')} type="image/jpg" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_02.jpg')} />
                        <p><>Confira e aceite os termos e condições respondendo ao chamado que será aberto para você no sistema.</></p>
                    </mobilePicture>
                    <mobilePicture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_03.jpg?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_03.jpg')} type="image/jpg" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_03.jpg')} />
                        <p><>Nós enviaremos à você por e-mail uma licença de Certificado Digital A1.</></p>
                    </mobilePicture>
                    <mobilePicture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_04.jpg?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_04.jpg')} type="image/jpg" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_04.jpg')} />
                        <p><>Acesse o e-mail e siga as instruções para cadastro e agendamento junto a Certificadora.</></p>
                    </mobilePicture>
                    <mobilePicture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_05.jpg?webp')} type="image/webp" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_05.jpg')} type="image/jpg" />
                        <img alt='certsign_header' title='certsign_header' width='auto' height='auto' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/passo-passo-mobile_05.jpg')} />
                        <p><>Vá até a certificadora para validar os dados e emitir seu Certificado Digital A1.</></p>
                    </mobilePicture>
                </PassoPassoModule>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Facilite a emissão de notas fiscais da sua empresa e tenha um Certificado Digital gratuito'
                    ]}
                    bg_color='cyan'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_01.jpg')} />
                    </picture>
                    <h3>Emissor de notas fiscais com certificado digital gratuito</h3>
                    <p>O sistema de Emissão de Nota Fiscal VHSYS é totalmente integrado com o processo de </p>
                    <a url='/controle-de-estoque/' blank={true}>vendas </a>
                    <p> e com o </p>
                    <a url='/controle-de-vendas/' blank={true}>setor financeiro </a>
                    <p> . Também emite nota fiscal de serviço eletrônica (NFS-e) e nota fiscal de consumidor (NFC-e), além de outras funções importantes como: emissão de nota fiscal de importação e exportação, carta de correção eletrônica e relatórios de notas fiscais.</p>
                    <p><br /><br /></p>
                    <p>Ter um emissor em conjunto com o Certificado Digital significa ter mais segurança dos dados enviados pela internet e ter a validade jurídica das emissões, já que o Certificado Digital é um arquivo eletrônico responsável por fazer a assinatura digital das empresas. Por ter validade jurídica, ele é essencial para sua empresa cumprir com as obrigações fiscais.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/certificado-digital-gratuito/screen_02.jpg')} />
                    </picture>
                    <h3>Como adquirir o Certificado Digital gratuitamente</h3>
                    <p>Contratando o VHSYS em qualquer categoria de plano, desde que seja no período anual, você ganhará o certificado tipo A1, com validade de 1 ano.</p>
                    <p><br /><br /></p>
                    <p>O passo a passo para a aquisição é: contratar o VHSYS no plano anual e ativar a conta; depois disso, você vai conferir e aceitar os termos e condições respondendo ao chamado que será aberto para você no sistema. Em seguida, nós enviaremos um login e senha de acesso para uma área de voucher. Você acessa e verifica as instruções para validação presencial junto a certificadora. Por fim, é só ir até a certificadora para validar seus dados e emitir seu certificado digital A1.</p>
                </ModuleFuncionalidadesSec>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Economize ao adquirir um emissor de notas fiscais com certificado digital incluso.'
                    ]}
                    bg_color='cyan'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <DefaultH2
                    titulo='Emita notas fiscais com facilidade e não se preocupe com o Certificado Digital'
                    subtitulo='Tenha um emissor de notas fiscais eletrônicas rápido e fácil de usar, além de outros recursos fundamentais para gestão empresarial, tais como: controle financeiro, de vendas e estoque.'
                />
                <section className='secondGrid'>
                    <ListDoubleCard svgIcon='certificate02' iconWidth='50px' h3='CERTIFICADO DIGITAL' masked='grayMask'>
                        <>Economize ao ganhar o Certificado Digital A1 na contratação do VHSYS no plano anual.</>
                    </ListDoubleCard>
                    <a href='/emissor-de-nota-fiscal-eletronica/emissor-nfe/'>
                    <ListDoubleCard svgIcon='siglanfe01' iconWidth='50px' h3='EMISSOR DE NOTA FISCAL DE PRODUTO (NF-e)' masked='grayMask' linked={true}>
                        <>Emissor homologado para envio de notas fiscais para todas as cidades do Brasil.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/emissor-de-nota-fiscal-eletronica/emissor-nfse/'>
                    <ListDoubleCard svgIcon='siglanfse01' iconWidth='50px' h3='EMISSOR DE NOTA FISCAL DE SERVIÇO (NFS-e)' masked='grayMask' linked={true}>
                        <>Facilite a emissão de NFS-e da sua empresa com um emissor rápido, seguro e completo.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/emissor-de-nota-fiscal-eletronica/emissor-nfce/'>
                    <ListDoubleCard svgIcon='siglanfce01' iconWidth='50px' h3='EMISSOR DE NOTA FISCAL DO CONSUMIDOR (NFC-e)' masked='grayMask' linked={true}>
                        <>Um sistema para você emitir NFC-e de qualquer lugar e com muita praticidade.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/emissor-de-nota-fiscal-eletronica/emissor-mdfe/'>
                    <ListDoubleCard svgIcon='siglamdfe01' iconWidth='50px' h3='MANIFESTO ELETRÔNICO DE DOCUMENTOS FISCAIS (MDF-e)' masked='grayMask' linked={true}>
                        <>Emita MDF-e de forma prática e rápida e ganhe tempo para realizar suas entregas no prazo.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/emissor-de-nota-fiscal-eletronica/emissor-cte/'>
                    <ListDoubleCard svgIcon='siglacte01' iconWidth='50px' h3='CONHECIMENTO DE TRANSPORTE ELETRÔNICO (CT-E)' masked='grayMask' linked={true}>
                        <>Faça a emissão de CT-e com rapidez no mesmo sistema que emite NF-e e MDF-e.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/controle-financeiro/'>
                    <ListDoubleCard svgIcon='moneybag01' iconWidth='50px' h3='CONTROLE FINANCEIRO' masked='grayMask' linked={true}>
                        <>Conte com um sistema que automatiza processos e te permite ter uma ampla visão das finanças.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/controle-de-vendas/'>
                    <ListDoubleCard svgIcon='notebook03' iconWidth='50px' h3='CONTROLE DE VENDAS' masked='grayMask' linked={true}>
                        <>PDV, emissão de boletos e pedidos, orçamento de vendas, cadastro de clientes e muito mais</>
                    </ListDoubleCard>
                    </a>
                    <a href='/controle-de-estoque/'>
                    <ListDoubleCard svgIcon='box01' iconWidth='50px' h3='CONTROLE DE ESTOQUE' masked='grayMask' linked={true}>
                        <>Faça o controle preciso do seu estoque e evite o desperdício e os prejuízos.</>
                    </ListDoubleCard>
                    </a>
                    <a href='/loja-de-aplicativos/'>
                    <ListDoubleCard svgIcon='appstore01' iconWidth='50px' h3='LOJA DE APLICATIVOS' masked='grayMask' linked={true}>
                        <>Exclusiva loja de aplicativos com recursos pensados para você personalizar seu sistema.</>
                    </ListDoubleCard>
                    </a>
                    <ListDoubleCard svgIcon='integrate01' iconWidth='50px' h3='INTEGRAÇÕES' masked='grayMask'>
                        <>Integração com plataformas como: Mercado Livre, Woocommerce, RD Station, Olist e muito mais.</>
                    </ListDoubleCard>
                    <ListDoubleCard svgIcon='helper01' iconWidth='50px' h3='SUPORTE' masked='grayMask'>
                        <>Atendimento ao cliente ilimitado e gratuito. Conte com uma equipe especializada.</>
                    </ListDoubleCard>
                </section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Economize ao adquirir um emissor de notas fiscais com certificado digital incluso.'
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
                    <h3>O que é Certificado Digital?</h3>
                    <p>
                        <>Certificado Digital nada mais é do que um documento eletrônico que funciona como uma identidade digital da pessoa física e jurídica no ambiente virtual. Ele garante autenticidade, confidencialidade e integridade nas operações que são realizadas por meio dele, atribuindo validade jurídica.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais informações o Certificado Digital carrega?</h3>
                    <p>
                        <>Nele constam informações como o nome, a chave pública (numeração exclusiva criada na emissão do certificado) e outras informações importantes para a Receita Federal e outros órgãos governamentais.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais os tipos de Certificado Digital?</h3>
                    <p>
                        <>Existem certificados digitais para pessoas físicas (e-CPF), pessoas jurídicas (e-CNPJ) e para fins específicos, como o envio de nota fiscal eletrônica (NF-e) e envio de documentos fiscais para transporte de cargas (</>
                        <a href='/emissor-de-nota-fiscal-eletronica/emissor-cte/'>Conhecimento de Transporte Eletrônico CT-e</a>
                        <>). O Certificado Digital gratuito fornecido pela VHSYS é somente para CNPJs.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é Certificado Digital A1?</h3>
                    <p>
                        <>O Certificado A1 é gerado em software, que fica instalado em um computador ou no dispositivo móvel (smartphone ou tablet) da empresa e, geralmente, tem menor custo ao portador. Porém, sua validade é sempre de 1 ano. Ao final do prazo, é preciso renovar novamente e pagar os valores referentes a nova aquisição.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é Certificado Digital A3?</h3>
                    <p>
                        <>O Certificado A3 é baseado em hardware, seja em token (USB) ou cartão com leitor específico em conformidade com a legislação da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil). Com validade de 1 a 3 anos, o certificado A3 é necessários para algumas situações. São elas: SPED Contábil (Escrituração Contábil Digital); DOI (Declaração Sobre Operações Imobiliárias) e outras.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Qual a diferença entre Certificado Digital A1 e A3?</h3>
                    <p>
                        <>A principal diferença entre os certificados A1 e A3 é a geração e o armazenamento das chaves criptográficas (arquivo digital, token ou cartão).</>
                    </p>
                    <p>
                        <>Enquanto o certificado A1 é gerado e armazenado em software (instalado em um computador ou dispositivo móvel da empresa) o Certificado Digital A3 é gerado em hardware (disponível em token, USB ou cartão).</>
                    </p>
                    <p>
                        <>Outra diferença importante entre eles é que o Certificado Digital A1 tem validade de 1 ano, quanto o certificado A3 pode valer de 1 a 3 anos.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quem precisa de certificação digital?</h3>
                    <p>
                        <>Empresas inscritas nos regimes tributários e que emitem NF-e necessitam de Certificado Digital. Neste caso, engloba as empresas de lucro presumido (cujas declarações mensais e anuais exigidas pela Receita Federal são feitas por meio do Certificado Digital), empresas com funcionários (incluindo as optantes do Simples Nacional que possuem mais de 5 funcionários, para prestar as informações fiscais, trabalhistas e previdenciárias) e em alguns casos o microempreendedor individual (MEI).</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Certificado Digital para MEI?</h3>
                    <p>
                        <>O Certificado Digital não é obrigatório para as MEI, exceto se optar pela emissão da Nota Fiscal Eletrônica. Vale lembrar que a emissão se torna obrigatória se no Estado em que o microempreendedor atue a certificação da NF-e seja obrigatória. Mas se o microempreendedor já possui um certificado digital não terá problema ao emitir as notas.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como obter certificados digitais?</h3>
                    <p>
                        <>Além do VHSYS que emite um Certificado Digital Gratuito para facilitar as emissões das suas notas fiscais, outra forma de obter os certificados o usuário deve solicitar o certificado digital de pessoa física ou jurídica (cpf ou cnpj) em alguma das autoridades certificadoras como a Caixa, Serpro, Receita Federal entre outras (</>
                        <a url='https://www.iti.gov.br/icp-brasil/estrutura' blank={true}>clique aqui para acessar lista</a>
                        <>).</>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada='Evolua hoje mesmo o gerenciamento do seu negócio.'
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
                .certRegulation {
                    color:rgb(255,255,255);
                    text-decoration:underline;
                    font-weight:600;
                }
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
                    margin:0 auto 60px;
                    text-align: center;
                }
                section.secondGrid {
                    width:900px;
                    max-width:calc(100% - 20px);
                    margin:60px auto 60px;
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

export default withRouter(CertificadoDG);