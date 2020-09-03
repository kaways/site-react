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
import ExperimenteBtn from '../components/buttons/ExperimenteBtn'
import VideoEmbed from '../components/embeds/VideoEmbed'
import DefaultCta from '../components/cta/DefaultCta'
import VideoInsertFuncionalidades from '../components/content/VideoInsertFuncionalidades'
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
        this.dataLayerPushBuy = this.dataLayerPushBuy.bind(this);
        this.state = {};
    }

    componentDidMount(props) {
        TagManager.initialize(this.props.tagManagerArgs)
    }

    dataLayerPushBuy(type) {
        if (typeof window !== 'undefined') 
        {
            window.dataLayer.push({
                'ecommerce': {
                    'promoClick': {
                        'promotions': 
                        [{
                            'id': 'Top Banner',
                            'name': 'Barra Default Top',
                            'creative': 'banner1',
                            'position': type
                        }]
                    }
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Controle Financeiro | VHSYS</title>
                    <meta name="description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais."/>
                    <link rel="canonical" href="https://vhsys.com.br/" />
                    <meta property="og:title" content="VHSYS - Sistema de Gestão - Controle de Estoque" />
                    <meta property="og:description" content="Sistema de gestão empresarial ideal para micro e pequenas empresas. Ferramentas integradas de Emissão de Nota Fiscal, Financeiro, Vendas e Estoque. Saiba mais." />
                    <meta name="google-site-verification" content="QupQLuuNyV3gAAkapKoUgNggbsdyzNpSDWw6hERsh3s" />
                    <script dangerouslySetInnerHTML={{
                    __html: `window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");$.src="https://v2.zopim.com/?1ar29Lh3lV8opQpVXKvIPJeBj1DFbQuQ";z.t=+new Date;$.type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script")`,
                    }}>
                    </script>
                </Head>
                <MenuLight />
                <HeaderCatFunc 
                    imgName='controle-financeiro'
                    h1n='Controle Financeiro'
                    subtitulo='Faça uma gestão financeira eficiente conectando o caixa da sua empresa, as obrigações fiscais e seu contador em um único sistema. Conte com o melhor sistema de controle financeiro para automatizar as tarefas do seu negócio.'
                    headerStyle='financeiro grayMask'
                    breadcrumbs={
                        <BreadCrumbs theme='light'>
                            <>Controle de Estoque</>
                        </BreadCrumbs>
                    }
                    conColor='green'
                >
                <ul>
                    <li><>Controle de contas a pagar e receber;</></li>
                    <li><>Fluxo de caixa diário e mensal;</></li>
                    <li><>DRE Gerencial;</></li>
                    <li><>Conciliação de contas bancárias;</></li>
                    <li><>Integração com a contabilidade;</></li>
                    <li><>Serviços financeiros recorrentes;</></li>
                    <li><>Planejamento financeiro eficaz.</></li>
                </ul>
                </HeaderCatFunc>
                <section className="greyArea">
                    <RecGradCard
                        imgName='refresh'
                        h3={<><strong>100% integrado!</strong> Tenha integração em tempo real com o módulo de vendas e emissão de NF.</>}
                    />
                    <RecGradCard
                        imgName='clock'
                        h3={<><strong>Otimize tempo!</strong> Abandone planilhas e conte com relatórios completos sobre o financeiro.</>}
                    />
                    <RecGradCard
                        imgName='coins'
                        h3={<><strong>Conciliação bancária</strong> te ajuda a ter mais rapidez nos seus lançamentos financeiros.</>}
                    />
                </section>
                <DefaultH2
                    titulo='Controle financeiro empresarial que automatiza processos e integra todas as áreas do seu negócio'
                />
                <section className='firstGrid'>
                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/contaspagar01.svg')} alt='contaspagar01' title='contaspagar01' />
                        </LazyLoad>
                        <h3>Contas a Pagar</h3>
                        <p>
                            <>Com o sistema de controle financeiro VHSYS, você faz o gerenciamento de todas as despesas da sua empresa, controla o vencimento de cada débito, sabe precisamente o que você tem a pagar a cada dia e, assim, evita o atraso e pagamento de juros. Além disso, pode automatizar o pagamento de despesas recorrentes.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/contasreceber01.svg')} alt='contasreceber01' title='contasreceber01' />
                        </LazyLoad>
                        <h3>Contas a Receber</h3>
                        <p>
                            <>Com o contas a receber do programa de controle financeiro VHSYS você controla todo o dinheiro que entra na sua empresa, organizando o caixa e tendo uma visão clara sobre os recebimentos atrasados e futuros, além dos recebimentos do dia.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/notebook02.svg')} alt='notebook02' title='notebook02' />
                        </LazyLoad>
                        <h3>Fluxo de Caixa</h3>
                        <p>
                            <>Com um Fluxo de Caixa preciso você tem uma ampla visão sobre as movimentações de entradas e saídas da empresa de um determinado período dentro do programa de controle financeiro. Acompanhe suas receitas e despesas, fluxo de caixa projetado, fluxo diário e mensal, além dos relatórios detalhados.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/dre01.svg')} alt='dre01' title='dre01' />
                        </LazyLoad>
                        <h3>DRE Gerencial<br />Demonstrativo de resultado financeiro</h3>
                        <p>
                            <>Saiba se seu negócio está ganhando e perdendo dinheiro com base nos dados financeiros. O DRE registra os custos operacionais, valor pago em impostos, preço dos produtos ou serviços prestados e etc. Por fim, apresenta se a empresa teve lucro ou prejuízo em um determinado período.</>
                        </p>
                    </BasicCard>
                    
                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/ofx01.svg')} alt='ofx01' title='ofx01' />
                        </LazyLoad>
                        <h3>Conciliação Bancária OFX</h3>
                        <p>
                            <>A conciliação bancária do sistema de gestão empresarial VHSYS simplifica o gerenciamento financeiro e reduz o trabalho de digitação de movimentações financeiras. A conciliação é feita através da exportação do arquivo OFX disponibilizado pelo banco e sua importação no sistema de controle financeiro.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/controlecontas01.svg')} alt='controlecontas01' title='controlecontas01' />
                        </LazyLoad>
                        <h3>Controle de Contas Bancárias</h3>
                        <p>
                            <>Realize transferências entre contas, movimentações e gestão bancária com facilidade por meio do sistema de controle financeiro. Além disso, com a integração do software aos seus dados, você emite boletos de maneira fácil e rápida.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/gestaocustos01.svg')} alt='gestaocustos01' title='gestaocustos01' />
                        </LazyLoad>
                        <h3>Gestão de Custos</h3>
                        <p>
                            <>O programa de controle financeiro online VHSYS faz a gestão de custos da sua empresa agrupando de maneira eficiente despesas e receitas para uma melhor análise e controle financeiro empresarial. Você ainda pode criar diversos parâmetros de custos dentro do sistema.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/servicos01.svg')} alt='servicos01' title='servicos01' />
                        </LazyLoad>
                        <h3>Serviços Recorrentes</h3>
                        <p>
                            <>Tenha mais agilidade na hora de fazer cobranças! Cadastre os dados do pagamento para que o sistema gere e envie boletos automaticamente. Além disso, a função te dará um histórico detalhado dos seus serviços recorrentes de gerenciamento financeiro.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/notebook04.svg')} alt='notebook04' title='notebook04' />
                        </LazyLoad>
                        <h3>Relatórios financeiros</h3>
                        <p>
                            <>Tenha relatórios financeiros completos e de fácil entendimento para seu planejamento empresarial. Facilite sua rotina recebendo informações precisas dos relatórios de receitas, faturamento mensal, despesas, gestão de custos e despesas, fluxo de caixa e muito mais.</>
                        </p>
                    </BasicCard>
                </section>
                <SimpleCounter 
                    pre01='+ DE' value01='10' pos01='BILHÕES' texto01='movimentados através do sistema VHSYS.'
                    pre02='+ DE' value02='150' pos02='MIL' texto02='empresas já utilizaram o sistema VHSYS'
                    pre03='' value03='335' pos03='mil' texto03='boletos emitidos automaticamente pelo serviços recorrentes'
                />
                <DefaultCta
                    tipo='experimente'
                    btn_class='whyVHSYS'
                    chamada=' Controle Financeiro empresarial com um sistema confiável e prático'
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate Agora!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <VideoInsertFuncionalidades>
                    <h3>Veja como é fácil usar o Gerenciador Financeiro</h3>
                    <p>A falta de uma gestão financeira eficiente e o uso de planilhas podem custar caro para uma empresa. Isso porque é imprescindível ter os recursos e despesas mapeados para tomar decisões acertadas e não colocar o futuro da empresa em risco.</p>
                    <p>Veja como o sistema de controle financeiro VHSYS pode  ajudar a organizar as finanças da empresa.</p>
                    <ExperimenteBtn btnText='Experimente Grátis' btnStyle="green" onClick={()=>{this.dataLayerPushBuy('Experimente')}} />
                    <VideoEmbed videoTag='bZqLEjun0fY' />
                </VideoInsertFuncionalidades>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_01.jpg')} />
                    </picture>
                    <h3>Integração com todas as áreas da empresa</h3>
                    <p>O controle financeiro é um dos módulos do sistema de gestão empresarial VHSYS, ele é totalmente integrado ao </p>
                    <a url="/controle-de-vendas/">controle de vendas</a>
                    <p>, </p>
                    <a url="/emissor-de-nota-fiscal-eletronica/">emissão de notas fiscais</a>
                    <p> e </p>
                    <a url="/controle-de-estoque/">controle de estoque</a>
                    <p>, assim é possível integrar todas as áreas da sua empresa em um único sistema, facilitando a gestão e proporcionando muito mais agilidade.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_02.jpg')} />
                    </picture>
                    <h3>Previsão de fluxo de caixa</h3>
                    <p>Para garantir a saúde financeira da empresa é fundamental dar uma atenção especial para o </p>
                    <a url="http://www.vhsys.com.br/controle-financeiro/fluxo-de-caixa/">fluxo de caixa</a>
                    <p>, pois através dele é possível controlar os recursos do negócio e garantir uma vida financeira saudável. Além disso, você consegue comparar o desempenho das receitas e despesas do mês e, assim, projetar um comportamento futuro.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_03.jpg')} />
                    </picture>
                    <h3>Conciliação bancária</h3>
                    <p>A conciliação bancária OFX te ajuda a poupar tempo e controlar as finanças. É simples, o primeiro passo é fazer a importação do extrato bancário no formato OFX no sistema e ele, automaticamente, identifica e vincula os lançamentos com o mesmo valor e data de vencimento. Assim, você não precisa acessar o controle financeiro para dar baixa em pagamentos.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_04.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_04.jpg')} type="image/jpg" />
                        <img alt='screen_04' title='screen_04' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-financeiro/screen_04.jpg')} />
                    </picture>
                    <h3>Integração Contábil</h3>
                    <p>Para facilitar ainda mais seu dia a dia e garantir que você foque apenas em alcançar o sucesso do negócio, o sistema de controle financeiro empresarial VHSYS permite que seu contador tenha acesso direto às movimentações financeiras da empresa através da </p>
                    <a url="/integracao-contabil-financeira/">integração contábil.</a>
                </ModuleFuncionalidadesCat>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada={['Cuide da saúde financeira da sua empresa com um sistema que te proporciona uma ampla visão e controle dos recursos do seu negócio. Planos a partir de R$',
                    <GetPrice plan='plan' />]}
                    bg_color='purple'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <SubH2
                    titulo='Depoimentos de quem usa'
                />
                <CarosselDepoDefault />
                <DefaultH2
                    titulo='Tire suas dúvidas:'
                />
                <section className='faq'><ol>
                <ContentModuleFAQ open={true}>
                    <h3>O que é controle financeiro?</h3>
                    <p>
                        <>O controle financeiro é um módulo do sistema de gestão empresarial online VHSYS pensado para resolver os maiores problemas que os empreendedores têm ao gerenciar uma empresa. trata-se de um sistema de gestão financeiro completo, onde você pode gerenciar seu fluxo de caixa, contas a pagar e contas a receber, fazer a gestão de custos, controlar contas bancárias, fazer a conciliação bancária, serviços recorrentes e receber relatórios detalhados sobre seu departamento financeiro. Aumentando o controle financeiro e fazendo uma boa gestão financeira sua empresa lucra mais, podendo aumentar de tamanho, investir em pessoas, estrutura, tesouro direto, áreas de atuação e etc.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como fazer controle financeiro da empresa?</h3>
                    <p>
                        <>Como primeiro passo é preciso separar as finanças da empresa das finanças pessoais. Também é fundamental fazer um planejamento financeiro, elencando principalmente; os recursos e despesas mensais; custos recorrentes; vendas feitas em curto e longo prazo;  entre outros fatores que compõem financeiro da empresa. </>
                    </p>
                    <p>
                        <>Para alcançar esse planejamento financeiro empresarial eficiente, é preciso ter o controle de todas as informações, receber relatórios atualizados e em tempo real, manter o caixa sincronizado com as vendas ou prestação de serviços. Neste momento que o sistema para gestão financeira do VHSYS faz a diferença e se torna ideal para você. Com ele você não perde informações, registra todas as movimentações financeiras, acessa informações precisas sobre lucro e prejuízo, automatiza tarefas e muito mais. Experimente grátis agora mesmo, a criação da conta é gratuita.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O VHSYS faz controle financeiro pessoal?</h3>
                    <p>
                        <>Não. O VHSYS é exclusivamente um sistema para controle financeiro empresarial. Com ele você controla todas as áreas da empresa de forma integrada e garante uma boa gestão do negócio. Para cuidar das finanças pessoais você pode adquirir outros softwares de gestão financeira pessoal. Com eles você defina metas, cuida dos gastos com cartão de crédito, contas online e faz o controle financeiro pessoal.</>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada='Não perca mais tempo! Assine o sistema VHSYS e controle as finanças da empresa de forma integrada com as outras áreas do seu negócio.'
                    bg_color='purple'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
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
                    text-align: center;
                }
                section.faq {
                    margin-bottom:60px;
                }
                table.faqTable1 {
                }
                table.faqTable1 th.cell01, table.faqTable1 th.cell02 {
                    vertical-align: top;
                    border: 1px solid rgb(221, 221, 221);
                    width:160px;
                    padding: 7px;
                }
                table.faqTable1 th.cell03 {
                    vertical-align: top;
                    border: 1px solid rgb(221, 221, 221);
                    padding: 7px;
                }
                table.faqTable1 td {
                    vertical-align: top;
                    width: calc(100% - 330px);
                    border: 1px solid rgb(221, 221, 221);
                    padding: 7px;
                }
                
            `}
            </style>
            </div>
        )
    }
}

export default withRouter(emissorNotaFiscal);