import Head from 'next/head';
import HeaderPageFunc from "../../components/headers/HeaderPageFunc"
import MenuDark from "../../components/menus/MenuDark"
import BottomBlue from "../../components/bars/BottomBlue"
import DefaultH2 from '../../components/titulos/DefaultH2'
import DefaultCta from '../../components/cta/DefaultCta'
import ModuleFuncionalidadesSec from '../../components/content/ModuleFuncionalidadesSec'
import ModuleFuncionalidadesOnlyText from '../../components/content/ModuleFuncionalidadesOnlyText'
import ContentModuleFAQ from '../../components/content/ContentModuleFAQ'
import RodapeDefault from '../../components/rodape/RodapeDefault'
import RodapeEssential from '../../components/rodape/RodapeEssential'
import GetPrice from '../../components/data/GetPrice'
import BreadCrumbs from "../../components/embeds/BreadCrumbs"

class emissorMDFE extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                    imgName='emissor-mdfe'
                    h1n='Emissor de '
                    h1b='MDF-e'
                    subtitulo='Tenha muito mais facilidade para emitir MDFe com o VHSYS. Nele você inclui mais de um município para carregar e descarregar cargas, preenche campos através das informações dos cadastros no sistema e tem visão completa sobre os manifestos emitidos.'
                    breadcrumbs={
                        <BreadCrumbs theme='dark'>
                            <a url='/emissor-de-nota-fiscal-eletronica/' blank={true}>Emissor de Nota Fiscal Eletrônica</a>
                            <>Emissor MDF-e</>
                        </BreadCrumbs>
                    }
                />
                <DefaultH2
                    titulo='Com um emissor NF-e integrado ao controle financeiro, vendas e estoque sua empresa vai crescer de maneira estruturada'
                />
                <ModuleFuncionalidadesOnlyText>
                    <div>
                    <h3>Emissor de MDF-e do VHSYS</h3>
                        <p>O Manifesto de Frete Eletrônico agiliza toda a burocracia que envolve o transporte de cargas e padroniza os processos por meio de um documento único e eletrônico. Com o emissor de MDF-e do sistema VHSYS você terá muito mais facilidade para realizar esses processos. Além de ter uma interface simples, prática e intuitiva, a ferramenta proporciona uma série de vantagens tais como: armazenamento automático e digital de todos os documentos durante um período de cinco anos, desta forma, você reduz drasticamente o uso de documento</p>
                        </div>
                    <div>
                        <h3><br /></h3>
                        <p>em papel; você pode preencher e emitir o <strong>Manifesto Eletrônico de Documentos Fiscais</strong> de qualquer local, já que o sistema é em nuvem e possibilita o acesso de qualquer lugar e plataforma (computador, tablet ou celular); No VHSYS também é possível </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/' blank={true}>obter gratuitamente o Certificado Digital A1</a>
                        <p> para emissão de MDF-e. E a principal vantagem é que o emissor de MDF-e é apenas um dos recurso do sistema VHSYS, que se apresenta como a ferramenta completa e integrada para você gerenciar sua transportadora.</p>
                    </div>
                </ModuleFuncionalidadesOnlyText>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_02.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_02.jpg')} type="image/jpg" />
                        <img alt='screen_02' title='screen_02' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_02.jpg')} />
                    </picture>
                    <h3>Vários destinos no mesmo MDF-e</h3>
                    <p>Um dos diferenciais do <strong>Emissor de MDF-e</strong> do VHSYS é que ao preencher o trajeto da carga, você pode informar mais de um município de carregamento e descarregamento. Por exemplo, em um transporte de carga partindo de Curitiba para o Rio de Janeiro, você pode informar paradas em São Paulo e Campinas para descarregar e carregar novamente. Todas essas informações são facilmente adicionadas no MDF-e te ajudando a economizar muito tempo tanto no preenchimento das informações quanto nas paradas de fiscalização.</p>
                </ModuleFuncionalidadesSec>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Conte com um software emissor de MDF-e que facilita seu dia a dia a ',
                        <strong>partir de R$<GetPrice plan='plan' /></strong>
                    ]}
                    bg_color='ice'
                    solid={true}
                    botao2={true}
                    texto_con='Contrate agora'
                    link_con='https://cadastro.vhsys.com.br/checkout/cadastro/?#/'
                    class_con='btn-prim_blue'
                />
                <ModuleFuncionalidadesSec imgPosition='right'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_03.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_03.jpg')} type="image/jpg" />
                        <img alt='screen_03' title='screen_03' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_03.jpg')} />
                    </picture>
                    <h3>Sistema de Gestão Empresarial</h3>
                    <p>Como o emissor de MDF-e faz parte do sistema de gestão empresarial do VHSYS, você tem disponível todas as ferramentas necessárias para gerenciar o seu negócio. Além de emitir os principais tipos de notas fiscais, você pode controlar o financeiro, </p>
                    <a url='/controle-de-estoque/' blank={true}>estoque</a>
                    <p> e </p>
                    <a url='/controle-de-vendas/' blank={true}>vendas</a>
                    <p> tudo de maneira rápida e integrada.</p>
                </ModuleFuncionalidadesSec>
                <ModuleFuncionalidadesSec imgPosition='left'>
                    <picture>
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_04.jpg?webp')} type="image/jpg" />
                        <source srcSet={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_04.jpg')} type="image/jpg" />
                        <img alt='screen_04' title='screen_04' width='446px' height='288px' src={require('../../static/images/layouts/funcionalidades/emissor-mdfe/screen_04.jpg')} />
                    </picture>
                    <h3>Certificado Digital CT-e gratuito</h3>
                    <p>Assim como para </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/' blank={true}>emissão de Notas Fiscais Eletrônicas, </a>
                    <p>para emitir um <strong>Conhecimento de Transporte Eletrônico</strong> você vai precisar de um Certificado Digital, que nada mais é do que um documento eletrônico que funciona como uma identidade digital da pessoa física e jurídica no ambiente virtual. R$ 215,00 é o custo médio de um Certificado Digital A1, mas com o VHSYS você pode obtê-lo gratuitamente, basta contratar o sistema em qualquer categoria de plano no período anual que você ganha o Certificado. Além de ter um sistema completo para gerenciamento de empresas, você tem o <strong>emissor de CT-e</strong> e </p>
                    <a url='/emissor-de-nota-fiscal-eletronica/certificado-digital-gratuito/' blank={true}>ganha o Certificado Digital A1.</a>
                </ModuleFuncionalidadesSec>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada={[
                        'Emita o Manifesto Eletrônico de forma prática e rápida e ',
                        <br />,
                        <strong>ganhe tempo para realizar suas entregas no prazo!</strong>
                    ]}
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
                    <h3>O que é MDF-e?</h3>
                    <p>
                        <>A sigla MDF-e significa <strong>Manifesto Eletrônico de Documentos Fiscais</strong>, ou Manifesto de Frete Eletrônico, como também é chamado. Ele é um documento fiscal eletrônico, usado para registrar as operações de transporte interestaduais, que são feitas por transportadoras, que através do documento terão todos os CT-es agrupados. Ou para empresas que realizam o transporte de mercadorias com veículos próprios e, desta forma, emitem diversas notas fiscais que serão agrupadas no documento.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Para que serve o MDF-e?</h3>
                    <p>
                        <>O Manifesto Eletrônico de Documentos Fiscais tem o objetivo de agilizar o registro em lote de documentos fiscais (como o CT-e e NF-e) e identificar a unidade de carga utilizada, além de outras características do transporte.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que é emissor de nota fiscal?</h3>
                    <p>
                        <>O emissor de nota fiscal é um programa onde são registradas as informações de venda de produtos ou serviços para a emissão da nota. Os sistemas de emissão também são responsáveis por comunicar a Sefaz, que autentica o documento para a emissão.<small>*Promoção não cumulativa.</small></>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais são as vantagens do MDF-e?</h3>
                    <p>
                        <>A principal vantagem que o Manifesto de Cargas leva em relação aos documentos que o precederam é que ele é um documento eletrônico. Isso facilita muito os processos de transporte de cargas e fretes, pois depois de emitir o MDF-e o condutor do veículo precisa carregar apenas o DAMDFE (Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais). O Manifesto Eletrônico ajuda o emissor que consegue gerar o MDF-e muito mais rápido e também não se preocupa com o armazenamento; reduz significativamente o tempo de fiscalização nas estradas; contribui para o fisco reduzir a sonegação de impostos e muito mais.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Emissor de MDF-e do VHSYS</h3>
                    <p>
                        <>Além de emitir MDF-e você conta com ferramentas fundamentais para a gestão do seu negócio. Funcionalidades voltadas para o </>
                        <a url='/controle-financeiro/' blank={false}>controle financeiro</a>
                        <>, de </>
                        <a url='/controle-de-estoque/' blank={false}>controle de estoque</a>
                        <>, </>
                        <a url='/controle-de-vendas/' blank={false}>controle de vendas</a>
                        <> e emissor de documentos fiscais como </>
                        <a url='/emissor-de-nota-fiscal-eletronica/' blank={false}>NF-e</a>
                        <> e </>
                        <a url='/emissor-de-nota-fiscal-eletronica/emissor-cte/' blank={false}>CT-e </a>
                        <>vão te ajudar a automatizar o seu negócio.</>
                    </p>
                    <p>
                        <>Com nosso emissor de Manifesto Eletrônico de Documentos Fiscais você pode controlar o status de cada MDFe emitido, pode enviar por e-mail para o destinatário, adicionar mais municípios para o carregamento e descarregamento de cargas e muito mais. Solicite uma demonstração agora mesmo.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Quais informações constam no MDF-e?</h3>
                    <p>
                        <>No manifesto você terá que preencher as informações gerais como: tipo do transportador, data e hora da emissão, UF de carregamento e descarregamento (podendo incluir mais de um município). Também precisa preencher as informações do percurso; o número de CT-es e/ou </>
                        <a url='/emissor-de-nota-fiscal-eletronica/emissor-nfe/' blank={false}>NF-es</a>
                        <> que constam na carga; valor da carga e peso bruto total; informações do modal rodoviário; identificação do motorista e do veículo (incluindo o reboque se for necessário); se há vale pedágio (Quando há CIOT - Código Identificador da Operação de Transporte); informações do seguro e dados do pagamento se quiser lançar automaticamente no Contas a Receber.</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>O que eu preciso ter para emitir MDF-e?</h3>
                    <p>
                        <>Para emitir MDFe você precisa ser credenciado para </>
                        <a url='/emissor-de-nota-fiscal-eletronica/emissor-cte/' blank={false}>emitir CT-e</a>
                        <> ou NF-e (apenas para carga própria) em todos os estados que serão os destinos finais da sua carga. Ter um sistema emissor e um Certificado Digital. O VHSYS é o sistema ideal para você realizar a emissão de MDFe, pois além de emitir o documento e ser um software completo para gestão do seu negócio, no VHSYS você pode ganhar o Certificado Digital Gratuito (basta contratar o sistema em qualquer categoria de plano no período anual).</>
                    </p>
                </ContentModuleFAQ>
                <ContentModuleFAQ open={false}>
                    <h3>Cancelamento de um MDF-e</h3>
                    <p>
                        <>Na sistemática atual de emissão existe uma regra quanto ao prazo que o emitente tem para cancelar um manifesto. A SEFAZ (Secretaria da Fazenda) exige que o cancelamento seja feito em até 24 horas antes de se iniciar o serviço de transporte. Esse pode ser um grande problema caso você dependa de um emissor gratuito como o da SEFAZ-SP, pois pode não haver tempo suficiente para obter a autorização junto ao emissor. Opte sempre por um sistema que tenha uma equipe de suporte rápida e prepara para atender casos como estes.</>
                    </p>
                </ContentModuleFAQ>
                </ol></section>
                <DefaultCta
                    tipo='experimente'
                    btn_text='Experimente grátis por 7 dias'
                    btn_class='green'
                    chamada='Precisa emitir MDF-e com mais agilidade? Conte com o sistema mais eficaz, conte com o VHSYS!'
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

export default emissorMDFE;