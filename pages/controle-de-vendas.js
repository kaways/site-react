import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import LazyLoad from 'react-lazyload'
import Head from 'next/head';
import HeaderCatFunc from "../components/headers/HeaderCatFunc"
import MenuDark from "../components/menus/MenuDark"
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
                    <title>Controle de Estoque | VHSYS</title>
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
                <MenuDark />
                <HeaderCatFunc 
                    imgName='controle-de-vendas'
                    h1n='Controle de Vendas'
                    subtitulo='Faça o controle de vendas de seu negócio com precisão e agilidade com o sistema VHSYS. '
                    headerStyle='vendas grayMask'
                    breadcrumbs={
                        <BreadCrumbs theme='light'>
                            <>Controle de Vendas</>
                        </BreadCrumbs>
                    }
                    expColor='green'
                >
                <ul>
                    <li><>Crie orçamento de vendas em poucos cliques;</></li>
                    <li><>Conte com sistema de Ponto de Venda (PDV) integrado;</></li>
                    <li><>Emita pedidos e ordens de serviço com facilidade;</></li>
                    <li><>Faça a gestão de vendedores de forma prática;</></li>
                    <li><>Lance boletos e recibos com rapidez;</></li>
                    <li><>Relacionamento com o cliente via CRM. </></li>
                </ul>
                </HeaderCatFunc>
                <section className="greyArea">
                    <RecGradCard
                        imgName='maisApps'
                        h3={<><strong>Estoque é dinheiro!</strong><br />Reduza gastos controlando o estoque com o VHSYS. 
                            </>}
                    />
                    <RecGradCard
                        imgName='money'
                        h3={<><strong>Otimize tempo!</strong> Abandone planilhas e emita relatórios completos sobre seu estoque.</>}
                    />
                    <RecGradCard
                        imgName='notebook'
                        h3={<>Atualize o estoque de onde estiver. O sistema é <strong>100% online.</strong></>}
                    />
                </section>
                <DefaultH2
                    titulo='Automatize seu controle de estoque, reduza gastos e melhore seu custo de armazenagem com o VHSYS'
                />
                <section className='firstGrid'>
                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/giro01.svg')} alt='notebook01' title='notebook01' />
                        </LazyLoad>
                        <h3>Giro de estoque</h3>
                        <p>
                            <>Por meio do </>
                            <a url='/controle-de-estoque/giro-de-estoque/' blank={false}>giro de estoque</a>
                            <> você calcula a média de produtos necessários para sua empresa e controla a rotatividade de mercadorias. Assim, você planeja suas compras, promoções e como deve ser o investimento em determinado produto, com facilidade. </>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/screen01.svg')} alt='maintenance01' title='maintenance01' />
                        </LazyLoad>
                        <h3>Cadastro de produtos</h3>
                        <p>
                            <>Com o </>
                            <a url='/controle-de-estoque/cadastro-de-produtos/' blank={false}>cadastro de produtos</a>
                            <> é muito mais fácil organizar suas mercadorias e dividi-las por categorias e subcategorias no sistema. Além disso, consegue centralizar todas as informações em um só lugar e consultar via código, nome ou código de barra. </>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/screen02.svg')} alt='globe01' title='globe01' />
                        </LazyLoad>
                        <h3>Cadastro de fornecedores</h3>
                        <p>
                            <>Cadastre seus </>
                            <a url='/controle-de-estoque/cadastro-de-fornecedores/' blank={false}>fornecedores </a>
                            <>em apenas um lugar e facilite seus pedidos de compra, orçamentos, ordens de serviço e muito mais. Você também pode importar sua lista de fornecedores para o sistema em poucos cliques.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/truck01.svg')} alt='register01' title='register01' />
                        </LazyLoad>
                        <h3>Cadastro de transportadoras</h3>
                        <p>
                            <>Importe para o VHSYS sua lista de </>
                            <a url='/controle-de-estoque/cadastro-de-transportadoras/' blank={false}>transportadoras </a>
                            <>e centralize as informações em um só lugar. Assim, é muito mais fácil acompanhar a entrega de seus produtos aos clientes, além de registrar qualquer ocorrência ou observação sobre o transporte.</>
                        </p>
                    </BasicCard>
                    
                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/nfe03.svg')} alt='truck01' title='truck01' />
                        </LazyLoad>
                        <h3>Controle de compras</h3>
                        <p>
                            <>Com o </>
                            <a url='/controle-de-estoque/controle-de-compras/' blank={false}>controle de compras </a>
                            <>você gerencia a entrada de mercadorias, ordens de compra, seu andamento e ainda gera relatórios precisos sobre cada produto do estoque, a data de compra, entrega e muito mais</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/nfce01.svg')} alt='mail01' title='mail01' />
                        </LazyLoad>
                        <h3>Nota Fiscal de Entrada</h3>
                        <p>
                            <>A </>
                            <a url='/nota-fiscal-de-entrada/' blank={false}>Nota Fiscal de Entrada </a>
                            <>é utilizada para comprovar o recebimento de mercadorias e é emitida pelo fornecedor e em alguns casos pelos compradores. No VHSYS, você a emite e também pode importá-la no sistema, para um eficiente controle de estoque.</>
                        </p>
                    </BasicCard>

                    <BasicCard iconHeight='60px'>
                        <LazyLoad once height='60px'>
                            <img height='60px' width='auto' src={require('../static/images/vetor/icons/default/notebook04.svg')} alt='truck02' title='truck02' />
                        </LazyLoad>
                        <h3>Relatório de estoque</h3>
                        <p>
                            <>Elimine planilhas de controle manual e emita relatórios completos sobre seu estoque. Acompanhe a quantidade de produtos armazenados, giro de estoque, rotatividade de mercadorias e muito mais, online e em poucos cliques. 
                            </>
                        </p>
                    </BasicCard>
                </section>
                <SimpleCounter 
                    pre01='+' value01='15' pos01='MILHÕES' texto01='de produtos cadastrados no sistema'
                    pre02='+ DE' value02='150' pos02='MIL' texto02='empresas já utilizaram o sistema VHSYS'
                    pre03='' value03='95' pos03='%' texto03='dos usuários renovam conosco após 12 meses'
                />
                <DefaultCta
                    tipo='experimente'
                    btn_class='whyVHSYS'
                    chamada='Faça o controle de estoque de onde estiver com um sistema online e fácil de usar'
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate Agora!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <VideoInsertFuncionalidades>
                    <h3>Saiba como utilizar o controle de estoque do VHSYS</h3>
                    <p>Fazer o controle de estoque é muito prático e seguro com o VHSYS! Confira neste vídeo todas as facilidades do módulo de gestão de estoque, como cadastro de produtos, fornecedores e transportadoras. Saiba como gerar relatórios, controlar o capital de giro e criar o alerta de estoque mínimo. Veja também como fazer o controle de compras em poucos cliques.</p>
                    <ExperimenteBtn btnText='Experimente Grátis' btnStyle="green" onClick={()=>{this.dataLayerPushBuy('Experimente')}} />
                    <VideoEmbed videoTag='SdgSpPKtW28' />
                </VideoInsertFuncionalidades>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_01.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_01.jpg')} type="image/jpg" />
                        <img alt='screen_01' title='screen_01' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_01.jpg')} />
                    </picture>
                    <h3>Estoque também é dinheiro!</h3>
                    <p>O estoque está ligado ao desenvolvimento de seu negócio e é boa parte do capital que você precisou investir em sua empresa. Desta forma, se seu estoque está parado, seu dinheiro também está. Por isso, é extremamente importante fazer um bom planejamento de compras e vendas, mas também é preciso acompanhar os produtos em estoque, para que comercialize todos e não deixe nada parado em seus espaços físicos de armazenamento, te trazendo prejuízo.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_02.jpg')} />
                    </picture>
                    <h3>Giro de estoque ideal</h3>
                    <p>Com o giro de estoque é possível calcular o estoque médio da empresa, além de controlar a rotatividade de produtos. Assim, você tem uma noção completa das mercadorias que precisa ter, além de saber o que é mais vendido e o que fica mais tempo parado. Isso te ajuda a criar promoções, saber quais produtos deve comprar, além de organizar melhor seus depósitos. Viu só como o controle de estoque pode te ajudar a lucrar mais? Experimente o VHSYS e automatize sua rotina hoje mesmo.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_03.jpg')} />
                    </picture>
                    <h3>Controle de estoque integrado ao vendas e financeiro</h3>
                    <p>Sua rotina seria muito mais fácil se o estoque e </p>
                    <a url="/controle-financeiro/">financeiro </a>
                    <p>fossem atualizados após uma </p>
                    <a url="/controle-de-vendas/">venda</a>
                    <p>, não é mesmo? Com o sistema de controle de estoque VHSYS ao finalizar uma venda, em poucos cliques você atualiza o estoque e financeiro e otimiza seu tempo para fazer a gestão de sua empresa com mais eficiência.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_04.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_04.jpg')} type="image/jpg" />
                        <img alt='screen_04' title='screen_04' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_04.jpg')} />
                    </picture>
                    <h3>Nota fiscal enviada por e-mail</h3>
                    <p>Chega de perder tempo enviando separadamente e-mail para seus clientes com as notas em anexo. Com o emissor de notas do VHSYS você faz isso em apenas um clique e diretamente do sistema, nao precisa nem abrir o seu e-mail. Muito mais praticidade para você e mais profissionalismo para seu negócio.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_05.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_05.jpg')} type="image/jpg" />
                        <img alt='screen_05' title='screen_05' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_05.jpg')} />
                    </picture>
                    <h3>Recursos adicionais na loja de aplicativos</h3>
                    <p>O sistema possui uma loja de aplicativos integrada, que conta com várias funcionalidades que podem ajudar você a melhorar ainda mais a gestão de diversas áreas de sua empresa. Para isso, você conta com alguns aplicativos como: </p>
                    <a url="/loja-de-aplicativos/expedicao/">Expedição</a>
                    <p>, onde você gerencia em um só lugar seus pedidos, notas fiscais, romaneios e ainda emite etiquetas identificadoras, relatórios e muito mais. </p>
                    <a url="/loja-de-aplicativos/cotacoes/">Cotações</a>
                    <p>, que ajuda você a comparar seus orçamentos e na decisão de compra de produtos para sua empresa. </p>
                    <a url="/loja-de-aplicativos/rastreamento/">Rastreamento</a>
                    <p>, que te informa a localização em tempo real de seus entregadores, trazendo mais segurança aos seus funcionários e mercadorias. Além desses, temos mais de 40 aplicativos que auxiliam a gestão de um negócio, confira a </p>
                    <a url="/loja-de-aplicativos/">lista completa.</a>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_06.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_06.jpg')} type="image/jpg" />
                        <img alt='screen_06' title='screen_06' width='446px' height='288px' src={require('../static/images/layouts/funcionalidades/controle-de-estoque/screen_06.jpg')} />
                    </picture>
                    <h3>Integração com contabilidade</h3>
                    <p>O software controle de estoque VHSYS também possui integração com o </p>
                    <a url="/integracao-contabil-financeira/" blank={true}>sistema de sua contabilidade</a>
                    <p>. Assim, seu contador tem acesso às informações sobre seu inventário, aos arquivos xml de suas notas de entrada, notas fiscais, facilitando a entrega de obrigações de sua empresa pela contabilidade. Otimize tempo e diminua erros com a integração contábil VHSYS. </p>
                </ModuleFuncionalidadesCat>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada={['Traga praticidade para seu dia a dia com o controle de estoque VHSYS.']}
                    bg_color='blue'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <SubH2
                    titulo='Depoimentos de quem usa'
                />
                <CarosselDepoDefault />
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada={[
                        'Reduza custos e otimize tempo com o controle de estoque VHSYS. Planos a partir de R$',
                        <GetPrice plan='plan' />
                    ]}
                    bg_color='blue'
                    botao2={true}
                    texto_con='Assine Já!'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_green'
                />
                <DefaultH2
                    titulo='Tire suas dúvidas:'
                />
                <section className='faq'><ol>
                <ContentModuleFAQ open={true}>
                    <h3>O que é gestão de estoque?</h3>
                    <p>
                        <>A gestão e controle de estoque é feito pelas empresas para administrar a entrada e saída de mercadorias, auxilia na redução de custos e também no controle de matérias-primas para a produção industrial ou de produtos acabados, vendidos no varejo. </>
                    </p>
                    <p>
                        <>O controle de estoque envolve algumas atividades, como:</>
                    </p>
                    <ol>
                        <li>
                            <>1. Atualização do estoque periodicamente e com precisão; </>
                        </li>
                        <li>
                            <>2. Controle de perdas de produtos por roubo, prazo de validade, etc; </>
                        </li>
                        <li>
                            <>3. Melhor planejamento de compras para reduzir custos; </>
                        </li>
                        <li>
                            <>4. Estoque de produtos suficiente para atender o cliente; </>
                        </li>
                        <li>
                            <>5. Organização dos espaços de armazenamento.</>
                        </li>
                    </ol>
                    <p>
                        <>Com o sistema de controle de estoque VHSYS, você reduz custos e ganha tempo para gerir outras áreas de sua empresa com tranquilidade. </>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são os tipos de controle de estoque?</h3>
                    <p>
                        <>Os meios mais comuns para o controle de estoque são o caderno, a planilha excel e um sistema ERP. O meio mais indicado para fazer a gestão de estoque é o </>
                        <a url='https://vhsys.com.br/' blank={false}>ERP.</a>
                        <>, por ser online, armazenar os dados com segurança e ainda ser integrado com funcionalidades como vendas e financeiro. </>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais as vantagens e desvantagens dos tipos de controle de estoque?</h3>
                    <table className="faqTable1" cellPadding='0' cellSpacing='0'>
                        <tr>
                            <th className='cell01'>Tipo de Controle</th>
                            <th className='cell02'>Vantagens</th>
                            <th className='cell03'>Desvantagens</th>
                        </tr>
                        <tr>
                            <td>Planilha Excel</td>
                            <td>Baixo investimento</td>
                            <td>O gestor precisa de conhecimentos básicos para automatizar uma planilha com todos os dados de estoque.</td>
                        </tr>
                        <tr>
                            <td>Sistema ERP</td>
                            <td>Economia de tempo, controle online e simplificado</td>
                            <td>Demanda maior investimento.</td>
                        </tr>
                    </table>
                    <p>
                        <>Com o programa de estoque e vendas VHSYS, você tem muito mais facilidade para fazer a gestão de seu estoque. Além disso, você pode fazer o controle de onde estiver, pois o software pode ser acessado via computador, tablet ou celular. </>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Como ter um estoque eficiente?</h3>
                    <p>
                        <>Sabemos que ter um controle de estoque eficiente não é nada fácil. Confira como melhorar sua gestão de maneira simples:</>
                    </p>
                    <ol>
                        <li>
                            <>1. Conte com bons estoquistas;</>
                        </li>
                        <li>
                            <>2. Faça o controle periódico de estoque;</>
                        </li>
                        <li>
                            <>3. Mantenha os depósitos sempre organizados;</>
                        </li>
                        <li>
                            <>4. Faça um bom planejamento de compras;</>
                        </li>
                        <li>
                            <>5. Faça boas parcerias com fornecedores, procurando melhor prazo e preço;</>
                        </li>
                        <li>
                            <>6. Crie promoções com os produtos que estão parados no estoque;</>
                        </li>
                        <li>
                            <>7. Use um </>
                            <a url='https://vhsys.com.br/' blank={false}>programa de controle</a>
                            <> para auxiliar na gestão.</>
                        </li>
                    </ol>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais os benefícios do sistema VHSYS?</h3>
                    <p>
                        <>O software controle de estoque VHSYS conta com diversos benefícios:</>
                    </p>
                    <ol>
                        <li>
                            <><strong>Agilidade:</strong> atualize seu estoque em poucos cliques;</>
                        </li>
                        <li>
                            <><strong>Otimize tempo:</strong> abandone planilhas e emita relatórios completos sobre seu estoque;</>
                        </li>
                        <li>
                            <><strong>Automatize rotinas:</strong> o controle de estoque é integrado ao vendas e financeiro;</>
                        </li>
                        <li>
                            <><strong>Sistema completo:</strong> o VHSYS conta com controle financeiro, de vendas, estoque, emissão de notas fiscais e muito mais, tudo de forma integrada e online.</>
                        </li>
                    </ol>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O VHSYS tem suporte?</h3>
                    <p>
                        <>Sim. O suporte é gratuito e ilimitado, via ligação ou mesmo por abertura de chamados. Além disso, o VHSYS tem uma </>
                        <a url='https://suporte.vhsys.com.br/' blank={true}>página de suporte</a>
                        <>, que vai tirar todas as suas dúvidas com tutoriais, treinamentos e muito mais. Assim, você vai saber tudo sobre controle de estoque e gestão de seu negócio com o sistema.</>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='whyVHSYS'
                    chamada='Elimine suas planilhas e faça a gestão precisa de seu estoque com o VHSYS.'
                    bg_color='blue'
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