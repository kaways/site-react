import { withRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import TagManager from 'react-gtm-module'
import Head from 'next/head';
import HeaderSegmento from "../../components/headers/HeaderSegmento"
import MenuDarkSolid from "../../components/menus/MenuDarkSolid"
import BottomBlue from "../../components/bars/BottomBlue"
import DefaultH2 from '../../components/titulos/DefaultH2'
import DefaultCta from '../../components/cta/DefaultCta'
import ModuleFuncionalidadesCat from '../../components/content/ModuleFuncionalidadesCat'
import CarosselSegmentos from '../../components/dinamico/CarosselSegmentos'
import AppCard from '../../components/cards/AppCard'
import ContentModuleFAQ from '../../components/content/ContentModuleFAQ'
import RodapeDefault from '../../components/rodape/RodapeDefault'
import RodapeEssential from '../../components/rodape/RodapeEssential'
import VideoEmbed from '../../components/embeds/VideoEmbed'
import ListCard from '../../components/cards/ListCard'
import LazyLoad from 'react-lazyload'
import GetPrice from '../../components/data/GetPrice'
import BreadCrumbs from "../../components/embeds/BreadCrumbs"

class AlimentosBebidas extends React.Component {
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
                    <title>Moda e Vestuário | Segmento | VHSYS</title>
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
                <MenuDarkSolid bgColor='gray'/>
                <HeaderSegmento
                    h1n='Sistema para '
                    h1b='Loja de Roupas'
                    breadcrumbs={// texto escuro -> theme='dark'
                        <BreadCrumbs theme='dark'>
                            <a url='/segmentos/' blank={false}>Segmentos</a>
                            <>Moda e Vestuário</>
                        </BreadCrumbs>
                    }
                    bgColor='yellow' // yellow cobalt cyan pink purple darkGray
                    expColor='green' // Botão experimente, green
                    conColor='' // Botão contrate, green
                >
                <picture>
                    <source srcSet={require('../../static/images/layouts/segmentos/moda-e-vestuario/header-bg.jpg?webp')} type="image/jpg" />
                    <source srcSet={require('../../static/images/layouts/segmentos/moda-e-vestuario/header-bg.jpg')} type="image/jpg" />
                    <img alt='screen_01' title='screen_01' width='auto' height='auto' src={require('../../static/images/layouts/segmentos/moda-e-vestuario/header-bg.jpg')} />
                </picture>
                </HeaderSegmento>
                <DefaultH2
                    titulo='Com o sistema para loja de roupas da VHSYS você tem controle em um só lugar do financeiro, emissão de notas fiscais e gestão de estoque'
                />
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/controle_financeiro.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/controle_financeiro.jpg')} type="image/jpg" />
                        <img alt='controle_financeiro' title='controle_financeiro' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/controle_financeiro.jpg')} />
                    </picture>
                    <h3>Controle Financeiro</h3>
                    <p>Com o VHSYS o </p>
                    <a url='/controle-financeiro/' blank={false}>controle financeiro </a>
                    <p>da sua loja ficará muito mais prático e descomplicado. Nele você administra o fluxo de caixa, contas a receber, contas a pagar, gestão de custos, controle de contas bancárias, conciliação bancária em formato OFX e </p>
                    <a url='/controle-financeiro/dre-demonstrativo-do-resultado-do-exercicio/' blank={false}>DRE Gerencial</a>
                    <p>. Com o DRE você tem a informação de todos os seus ganhos e despesas e o lucro líquido da empresa, assim você planeja os próximos passos de seu negócio com mais facilidade.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/contas_a_receber.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/contas_a_receber.jpg')} type="image/jpg" />
                        <img alt='contas_a_receber' title='contas_a_receber' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/contas_a_receber.jpg')} />
                    </picture>
                    <h3>Contas a Receber</h3>
                    <p>Com a funcionalidade de </p>
                    <a url='/controle-financeiro/contas-a-receber/' blank={false}>contas a receber</a>
                    <p> do software para loja de roupas da VHSYS, você reduz a inadimplência de sua empresa, pois saberá o montante que tem a receber, assim como ter o controle dos clientes que pagam em dia e os que atrasam os pagamentos. Poderá também fazer a cobrança, emissão de boletos, cadastrar suas despesas e controlar a gestão financeira da empresa, tudo integrado ao fluxo de caixa. Gerencie suas contas a receber com um sistema integrado e lucre mais com sua empresa.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/emissao_nfe.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/emissao_nfe.jpg')} type="image/jpg" />
                        <img alt='emissao_nfe' title='emissao_nfe' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/emissao_nfe.jpg')} />
                    </picture>
                    <h3>Emissão de notas fiscais</h3>
                    <p>No dia a dia de uma loja de roupas é necessário emitir notas fiscais para os clientes. O VHSYS possui integrado ao sistema um </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/' blank={false}>emissor de notas fiscais</a>
                    <p>, com todos os modelos que sua empresa precisa. No VHSYS ainda é possível realizar o cadastro de clientes e com isso agilizar o atendimento ao cliente ao emitir uma NFC-e da venda realizada. Além disso, o sistema salva os arquivos XML para controle e também para estar em regularidade com o Fisco, tudo na nuvem, possibilitando que as acesse de qualquer lugar e hora.</p>
                </ModuleFuncionalidadesCat>

                <CarosselSegmentos>
                    <h3>Combo para Loja de Roupas</h3>

                    <AppCard>
                        <h5>Sistema VHSYS</h5>
                        <picture>
                            <source srcSet={require('../../static/images/icons/loja_apps_round/ico-vhsys.png?webp')} type="image/png" />
                            <source srcSet={require('../../static/images/icons/loja_apps_round/ico-vhsys.png')} type="image/png" />
                            <img alt='gestao_de_estoque' title='gestao_de_estoque' width='112px' height='83px' src={require('../../static/images/icons/loja_apps_round/ico-vhsys.png')} />
                        </picture>
                        <p>Financeiro, Vendas, Estoque, Emissor Nota Fiscal Eletrônica e muito mais.</p>
                    </AppCard>

                    <AppCard>
                        <h5>Sistema VHSYS</h5>
                        <picture>
                            <source srcSet={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png?webp')} type="image/png" />
                            <source srcSet={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png')} type="image/png" />
                            <img alt='cobrancas' title='cobrancas' width='112px' height='83px' src={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png')} />
                        </picture>
                        <p>Financeiro, Vendas, Estoque, Emissor Nota Fiscal Eletrônica e muito mais.</p>
                    </AppCard>

                    <AppCard>
                        <h5>Sistema VHSYS</h5>
                        <picture>
                            <source srcSet={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png?webp')} type="image/png" />
                            <source srcSet={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png')} type="image/png" />
                            <img alt='cobrancas' title='cobrancas' width='112px' height='83px' src={require('../../static/images/icons/loja_apps_square/ico-cobrancas.png')} />
                        </picture>
                        <p>Financeiro, Vendas, Estoque, Emissor Nota Fiscal Eletrônica e muito mais.</p>
                    </AppCard>
                </CarosselSegmentos>
                
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/gestao_de_estoque.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/gestao_de_estoque.jpg')} type="image/jpg" />
                        <img alt='gestao_de_estoque' title='gestao_de_estoque' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/gestao_de_estoque.jpg')} />
                    </picture>
                    <h3>Gestão de estoque</h3>
                    <p>Deixe de lado as suas planilhas e registre todas as suas mercadorias, fornecedores e transportadoras no sistema para lojas de roupas da VHSYS. Nele você realiza o cadastro de seus itens e pode identificá-los utilizando seu código de barras, registrar o tamanho e cor, por exemplo. Além disso, no controle de estoque você tem relatórios que o informam sobre os produtos mais vendidos e os que ficam mais tempo parados, pode definir um estoque mínimo e máximo que o ajudam a realizar a próxima compra de produtos.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/crm.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/crm.jpg')} type="image/jpg" />
                        <img alt='crm' title='crm' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/crm.jpg')} />
                    </picture>
                    <h3>Sistema CRM</h3>
                    <p>O </p>
                    <a url='/controle-de-vendas/sistema-crm/' blank={false}>sistema CRM</a>
                    <p> é integrado ao ERP online da VHSYS e o ajuda na gestão de sua equipe de vendas e relacionamento com o cliente. Ele te ajuda a fazer a gestão de seus consumidores e prospectos. Assim, você pode antecipar a necessidade de seus clientes, pensar em estratégias de como impactá-los e aumentar o lucro da empresa. Com esse sistema, você realiza o cadastro de clientes e integra ao funil de vendas, em que pode acompanhar todos os passos de vendas.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/relatorios_financeiros.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/relatorios_financeiros.jpg')} type="image/jpg" />
                        <img alt='relatorios_financeiros' title='relatorios_financeiros' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/relatorios_financeiros.jpg')} />
                    </picture>
                    <h3>Relatórios</h3>
                    <p>Com o uso de </p>
                    <a url='/controle-financeiro/relatorios-financeiros/' blank={false}>relatórios</a>
                    <p> emitidos pelo Sistema para Loja de Roupas, você pode definir as novas estratégias, acompanhar as vendas, a saúde financeira de sua empresa ou até mesmo saber quanto de mercadoria tem no estoque. Com apenas alguns cliques você terá em mãos relatórios completos com todas as informações que precisar sobre sua empresa, para melhor gerir o seu negócio e pensar nos próximos investimentos.</p>
                </ModuleFuncionalidadesCat>
                <ModuleFuncionalidadesCat imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/loja_de_apps.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/segmentos/screenshots/loja_de_apps.jpg')} type="image/jpg" />
                        <img alt='loja_de_apps' title='loja_de_apps' width='446px' height='288px' src={require('../../static/images/layouts/segmentos/screenshots/loja_de_apps.jpg')} />
                    </picture>
                    <h3>Personalize o seu sistema</h3>
                    <p>O grande diferencial da VHSYS é a sua </p>
                    <a url='/loja-de-aplicativos/' blank={false}>Loja de Aplicativos</a>
                    <p>, que permitem aprimorar o seu software com diversas funcionalidades como melhorar as vendas, a comunicação com clientes e até a organização de tarefas diárias da empresa, por exemplo. Com o VHSYS você evolui seu negócio.</p>
                </ModuleFuncionalidadesCat>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Conte com um emissor de CT-e que facilita seu dia a dia. Com o VHSYS você emite todos os tipos de nota fiscal a partir de R$'
                        ,<GetPrice plan='plan' />
                    ]}
                    bg_color='yellow'
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
                    chamada='Faça um upgrade na gestão de seu negócio agora mesmo!'
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
                section.faq {
                    margin-bottom:60px;
                }
            `}
            </style>
            </div>
        )
    }
}

export default withRouter(AlimentosBebidas);