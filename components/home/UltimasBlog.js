import LazyLoad from 'react-lazyload';

const UltimasBlog = () => (
    <section>
        <a rel="noopener" href="https://blog.vhsys.com.br/nota-fiscal-eletronica-nf/" target="_blank">
            <article>
                <LazyLoad once height={190}><picture>
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog01.jpg?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog01.jpg')} type="image/jpeg" />
                    <img alt='blog01' title='blog01' width='350px' height='190px' src={require('../../static/images/uniqueComponents/ultimasBlog/blog01.jpg')} />
                </picture></LazyLoad>
                <h4>Nota Fiscal Eletrônica (NF-e): o que é e como emitir esse documento</h4>
            </article>
        </a>
        <a rel="noopener" href="https://blog.vhsys.com.br/certificado-digital-gratuito-para-emitir-nota-fiscal/" target="_blank">
            <article>
                <LazyLoad once height={190}><picture>
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog02.jpg?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog02.jpg')} type="image/jpeg" />
                    <img alt='blog02' title='blog02' width='350px' height='190px' src={require('../../static/images/uniqueComponents/ultimasBlog/blog02.jpg')} />
                </picture></LazyLoad>
                <h4>Certificado Digital Gratuito para emitir nota fiscal (NF-e)</h4>
            </article>
        </a>
        <a rel="noopener" href="https://blog.vhsys.com.br/como-controlar-o-fluxo-de-caixa/" target="_blank">
            <article>
                <LazyLoad once height={190}><picture>
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog03.jpg?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/uniqueComponents/ultimasBlog/blog03.jpg')} type="image/jpeg" />
                    <img alt='blog03' title='blog03' width='350px' height='190px' src={require('../../static/images/uniqueComponents/ultimasBlog/blog03.jpg')} />
                </picture></LazyLoad>
                <h4>Pequenas empresas: saiba como controlar o fluxo de caixa</h4>
            </article>
        </a>
    <style jsx>{`
        section {
            width:100%;
            background-color:#ffffff;
            padding: 30px 0 20px;
            text-align:center;
        }
        article {
            display:inline-block;
            vertical-align:top;
            width:350px;
            max-width: calc(90% - 50px);
            margin: 0px 22px 20px;
            border: 1px solid transparent;
            border-radius: 10px;
            transition:0.3s;
        }
        img, picture {
            border-radius: 7px 7px 2px 2px;
            transition: 0.3s;
            opacity: 0.7;
            max-width:100%;
            height:auto;
        }
        h4 {
            padding:0 20px 10px;
            color: #174676;
            font-weight: 500;
            font-size: 1.3rem;
            line-height: 1.8rem;
            transition: 0.3s;
        }
        article:hover {
            border: 1px solid #eeeeee;
            box-shadow: 0px 25px 25px -20px #aaa;
        }
        article:hover h4 {
            color: #25b6bf;
            transition: 0.3s;
        }
        article:hover img, article:hover picture{
            transition: 0.3s;
            opacity:1;
        }
    `}</style>
    </section>
)

export default UltimasBlog