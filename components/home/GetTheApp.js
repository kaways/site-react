import LazyLoad from 'react-lazyload';

const GetTheApp = () => (
    <section>
        <LazyLoad once height={183}><picture>
            <source srcSet={require('../../static/images/uniqueComponents/getTheApp/responsiveScreens.jpg?webp')} type="image/webp" />
            <source srcSet={require('../../static/images/uniqueComponents/getTheApp/responsiveScreens.jpg')} type="image/jpeg" />
            <img alt='responsiveScreens' title='responsiveScreens' width='587px' height='193px' src={require('../../static/images/uniqueComponents/getTheApp/responsiveScreens.jpg')} />
        </picture></LazyLoad>
        <article>
            <a aria-label='Baixe o App da VHSYS para celular Android' rel="noopener" href="https://play.google.com/store/apps/details?id=br.com.vhsys" target="_blank">
                <LazyLoad once height={100}><picture>
                    <source srcSet={require('../../static/images/uniqueComponents/getTheApp/andApp.jpg?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/uniqueComponents/getTheApp/andApp.jpg')} type="image/jpeg" />
                    <img alt='andApp' title='andApp' width='200px' height='100px' src={require('../../static/images/uniqueComponents/getTheApp/andApp.jpg')} />
                </picture></LazyLoad>
            </a>
            <a aria-label='Baixe o App da VHSYS para celular iOS' rel="noopener" href="https://itunes.apple.com/br/app/vhsys/id999532391?mt=8" target="_blank">
                <LazyLoad once height={100}><picture>
                    <source srcSet={require('../../static/images/uniqueComponents/getTheApp/macApp.jpg?webp')} type="image/webp" />
                    <source srcSet={require('../../static/images/uniqueComponents/getTheApp/macApp.jpg')} type="image/jpeg" />
                    <img alt='macApp' title='macApp' width='200px' height='100px' src={require('../../static/images/uniqueComponents/getTheApp/macApp.jpg')} />
                </picture></LazyLoad>
            </a>
        </article>
    <style jsx>{`
        section {
            width:100%;
            background-size:cover;
            background-position:center;
            padding:50px 0 70px;
            text-align:center;
        }
        picture {
            vertical-align: middle;
            display:inline-block;
            max-width:100%;
        }
        img {
            max-width:90%;
            height:auto;
        }
        section > img {
            display:inline-block;
            vertical-align:middle;
            max-width:90%;
            max-width:100%;
        }
        article {
            display:inline-block;
            vertical-align:middle;
            width:400px;
            max-width:90%;
        }
        article > a {
            background-color: #fdffff;
            color: #174676;
            font-weight: 600;
            -webkit-text-decoration: none;
            text-decoration: none;
            padding: 6px 25px 1px;
            display: block;
            width: 170px;
            margin: 10px auto 15px;
            border-radius: 30px;
            border: 1px solid #edeff1;
            border-bottom: 5px solid #c7d3de;
            transition:0.2s;
        }
        article > a:hover {
            transition:0.2s;
            border: 1px solid #edeff1;
            border-bottom: 1px solid #edeff1;
            margin: 10px auto 19px;
        }
    `}</style>
    </section>
)

export default GetTheApp