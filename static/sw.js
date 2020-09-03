"use strict";var precacheConfig=[["static/css/fonts-big.css","e5457f76033bcadd7775660c75ace03b"],["static/css/fonts.css","74ddd04c8ec8f4b6dfa0d07876e3d44b"],["static/css/normalize-big.css","91934dd84d9a4dcaa7b6eb75ff3e159d"],["static/css/normalize.css","67fa5145224f7cc9a9e0cb0aceaccdf1"],["static/favicon.ico","8b0dd12ef3a33ccd484fb73f9031dc1f"],["static/fonts/OpenSans-Bold.woff","f87c7980e3c04b47aec2e1c182308aeb"],["static/fonts/OpenSans-Bold.woff2","c9e6ced6ee6d6f30cc5d3de2a811c27a"],["static/fonts/OpenSans-ExtraBold.woff","29a8b1d56f79853bf4a1690cd1dbec3c"],["static/fonts/OpenSans-ExtraBold.woff2","f2cc18d929ab128d73bc828bb18a1a0b"],["static/fonts/OpenSans-Light.woff","df242428fd06b20811421e2c5db03179"],["static/fonts/OpenSans-Light.woff2","375b048cb30e73c4bea44faea5027b05"],["static/fonts/OpenSans-Regular.woff","9863aaace5fcaf897956737ef26b427f"],["static/fonts/OpenSans-Regular.woff2","a725497524525c361f0d545e4e8ec577"],["static/fonts/OpenSans-SemiBold.woff","729e6a0d278376882d2b8409d6872474"],["static/fonts/OpenSans-SemiBold.woff2","dbee1c4201517c33a8c7269601afc5c7"],["static/fonts/TitilliumWeb-Black.woff","338e3ee5ad03463ab440de05db309b49"],["static/fonts/TitilliumWeb-Black.woff2","cf66eb75f85fa3aea778361cfdbbcada"],["static/fonts/TitilliumWeb-Bold.woff","44cad29e0d0ab7769c8e920a52c351d2"],["static/fonts/TitilliumWeb-Bold.woff2","9ce158afcacc112f35f82c109916db2d"],["static/fonts/TitilliumWeb-ExtraLight.woff","e7fe3d36ba7107ce7a0096f8e0dab162"],["static/fonts/TitilliumWeb-ExtraLight.woff2","0c9f1cba029fb8832175b1b2a288594b"],["static/fonts/TitilliumWeb-Light.woff","04034e1658fad31f0547789b383916f8"],["static/fonts/TitilliumWeb-Light.woff2","27c2c13dd3844632f87148510e1e2140"],["static/fonts/TitilliumWeb-Regular.woff","334c8d81160fbedb944ff9b229734b8b"],["static/fonts/TitilliumWeb-Regular.woff2","faf27ccfaba46b8d46f4a09a9ff81c26"],["static/fonts/TitilliumWeb-SemiBold.woff","e2c8d171c15a36a989e832e69d3c3c98"],["static/fonts/TitilliumWeb-SemiBold.woff2","5591ca691a89fd574e90b8876ac662c1"],["static/fonts/stylesheet.css","35af40527829e2f6123a0eba8c748bc2"],["static/images/andApp.jpg","fc9feb01a6a19dfccc6ab7b61ad723e1"],["static/images/backgrounds/cta/defaultCtaBlue.jpg","51168e93c566cc1f8a39cc05873eada2"],["static/images/backgrounds/cta/defaultCtaYellow.jpg","a6c627464d81b95a47bacd53445c2248"],["static/images/campanhas/fev10/10porcento.png","5e4aed5644b91625aabde42320afa727"],["static/images/campanhas/fev10/badge.png","848d20ea447ba3898a119e4a0ebc894d"],["static/images/campanhas/fev10/certificado.png","55f0b46c0b9e339b17becc988201f627"],["static/images/campanhas/fev10/coupon-resp.png","4b425acc9fd49e8b9250c13a1db9a0ee"],["static/images/campanhas/fev10/plus.png","06670eec5acca0ffea20b1978aab98de"],["static/images/campanhas/janeiro30/2019.png","5decaa732fb6add9088b5dbd78110e12"],["static/images/campanhas/janeiro30/badge.png","90f39e2cfa3ed659cf62b7b4aa43b560"],["static/images/campanhas/janeiro30/certificado.png","7a2197a6aabdb29106bf3ceed53a43d6"],["static/images/campanhas/janeiro30/coupon-resp.png","f3211b9d75f4ec51fd4ef73fafacda56"],["static/images/campanhas/janeiro30/coupon.png","4ed57b7d8b92db0f83b0a2de01e7d1ea"],["static/images/icons/dropDownArrow.png","c22a1149af0bccd7e8e268ba0c789c0e"],["static/images/icons/loja_apps_round/ico-agenda.png","bea4d484c897bff97599ba2d90719523"],["static/images/icons/loja_apps_round/ico-avisos_internos.png","37719b8c552eb3925e6f271e6b5f4742"],["static/images/icons/loja_apps_round/ico-backup_nfe.png","143322ba1cbccf766947d7e4466360bd"],["static/images/icons/loja_apps_round/ico-boleto_facil.png","c2e57c517a9d27e006b08dee7362badf"],["static/images/icons/loja_apps_round/ico-cobrancas.png","bc3a8d50e65ca9d0e2b540917af380bb"],["static/images/icons/loja_apps_round/ico-comprovantes.png","b60634f19b353bac7561b46bb718c6f2"],["static/images/icons/loja_apps_round/ico-consulta_cpf.png","1ecde00128f29230f5c49bd288f344b3"],["static/images/icons/loja_apps_round/ico-controle_bens.png","d6f2cb918ee7b6d4b8c0db9bdaa4fa21"],["static/images/icons/loja_apps_round/ico-email_marketing.png","d5b788153ce9ddee7a442c171cf34ad2"],["static/images/icons/loja_apps_round/ico-etiquetas.png","796b8f79a2bc95384ae7e0a1cbe82f16"],["static/images/icons/loja_apps_round/ico-funcionarios.png","8e8ac1c9d8cd806a5aa3c824dba9a345"],["static/images/icons/loja_apps_round/ico-funil.png","d9bb418431780808c35ea822df742679"],["static/images/icons/loja_apps_round/ico-gestao_projetos.png","1db079a00047d62ad932f0678b7e152e"],["static/images/icons/loja_apps_round/ico-icms_st.png","a5583c7502d8f38a81e583084be48c58"],["static/images/icons/loja_apps_round/ico-locacoes.png","5ba28d24604c362d7fab82b1ac725300"],["static/images/icons/loja_apps_round/ico-mercado_livre.png","8f6179e3fc6229d0c43f28eb7b824c7c"],["static/images/icons/loja_apps_round/ico-multi_empresas.png","1d5e57b74aefadd9e9b81bfb91109eda"],["static/images/icons/loja_apps_round/ico-nuvem_shop.png","5f848b516791d92c8c1228fe0cff4735"],["static/images/icons/loja_apps_round/ico-olist.png","9a41f8758c6b84dfc2602ee17aa29532"],["static/images/icons/loja_apps_round/ico-rd_station.png","870704446edbb080c628e587ff87397f"],["static/images/icons/loja_apps_round/ico-sms.png","823ccd121fcc7f2efa6adaa6681c2c42"],["static/images/icons/loja_apps_round/ico-vhdesk.png","026fbc69d39c8e14cef098d8e7789545"],["static/images/icons/loja_apps_round/ico-vhdrive.png","c7d4f3762a79c459e866260961d88e2b"],["static/images/icons/loja_apps_round/ico-woocommerce.png","4620f00b48bc9ad353b437dfc3e6d178"],["static/images/icons/loja_apps_square/ico-agenda.png","24458b86360a25bf296c5c7c3ba079c0"],["static/images/icons/loja_apps_square/ico-avisos_internos.png","ce6b5bea7afefe7791397c5b1a298333"],["static/images/icons/loja_apps_square/ico-backup_nfe.png","08fa0583e2caff4c244cbcce30ef20df"],["static/images/icons/loja_apps_square/ico-boleto_facil.png","70a9a17607148d455973cdf34c084320"],["static/images/icons/loja_apps_square/ico-cobrancas.png","08775cff04d99a62ffefb2963f32e0e5"],["static/images/icons/loja_apps_square/ico-comprovantes.png","da288d870479b8ace5fef892adc1fb6e"],["static/images/icons/loja_apps_square/ico-consulta_cpf.png","9c15713aaf76518e0dfe7b690e0918a8"],["static/images/icons/loja_apps_square/ico-controle_bens.png","d8b308aa4dd90e69d5647e3a8983eca0"],["static/images/icons/loja_apps_square/ico-darf.png","5b43a916b5089d6be7395460db024493"],["static/images/icons/loja_apps_square/ico-email_marketing.png","49fa29293b809833d4e43557c867b412"],["static/images/icons/loja_apps_square/ico-etiquetas.png","7742da6983f3e621a30ffe6da2838ca3"],["static/images/icons/loja_apps_square/ico-expedicao.png","6d732a1215ab93b5cb48fed848afb41e"],["static/images/icons/loja_apps_square/ico-funcionarios.png","3b83c470b708d0092a2dd0bf721d4a56"],["static/images/icons/loja_apps_square/ico-funil.png","3d8f7c803f4fa8efa6eed3fdde80bdaa"],["static/images/icons/loja_apps_square/ico-gestao_projetos.png","406e038e0079ab12c5402da5683b1b42"],["static/images/icons/loja_apps_square/ico-icms_st.png","dc5cab2d161aa493debba97674baaf81"],["static/images/icons/loja_apps_square/ico-locacoes.png","28c191616d26f2bd4df717271ea37279"],["static/images/icons/loja_apps_square/ico-mercado_livre.png","326cc375ad67838852b0bfb9a8b25930"],["static/images/icons/loja_apps_square/ico-multi_empresas.png","54a9d2377e88b16c71045fcad82ae0d2"],["static/images/icons/loja_apps_square/ico-nuvem_shop.png","0b94f3f269fa4f61ac25be2a3c6d8421"],["static/images/icons/loja_apps_square/ico-olist.png","5f2ad0e56e80b0cb038b63a6158cea29"],["static/images/icons/loja_apps_square/ico-rd_station.png","47d385169420bc9c766f3b2a1c64bda4"],["static/images/icons/loja_apps_square/ico-receba-ja.png","525701749fbffaca98b0e93c90dfddcb"],["static/images/icons/loja_apps_square/ico-sms.png","fe9c319ee0c901efca9aa06c79f4c3b8"],["static/images/icons/loja_apps_square/ico-vhdesk.png","747ec653207f7447634db38d06ff3724"],["static/images/icons/loja_apps_square/ico-vhdrive.png","3ab9286d7151ee0c3c152dc4cc32676a"],["static/images/icons/loja_apps_square/ico-woocommerce.png","027cb6bc3843d905f6c8054c3697c650"],["static/images/icons/loja_apps_square/loja_apps.png","3550bc09ac858e7997fadefbaae60e3d"],["static/images/icons/medals/bronze.png","9e027966b53d3f8eabb077c7bd138871"],["static/images/icons/medals/diamante.png","aeaf24747035dfbd7aa5ed8ddd9d9d4d"],["static/images/icons/medals/mei.png","9e212b67616601851c234fc0b0b46013"],["static/images/icons/medals/ouro.png","ccc9d82e1d32e84d994b17f5d4fb347e"],["static/images/icons/medals/platina.png","300627446b79a7d527b2649124093733"],["static/images/icons/medals/prata.png","e924f1945ff7d9515b98c25cd9fbceb9"],["static/images/layouts/home/header-default.jpg","6661de501e10d4988b870a9ab99c6628"],["static/images/layouts/home/header-mask.png","de0bb1cea4d53efc4a26e61b82ebba87"],["static/images/layouts/home/list-ico.jpg","bf59e7630fe23b2479d1f32c633343ed"],["static/images/temp/imagens/ico_01.jpg","66a5fc786dd2ebe939919735a1b8a2d7"],["static/images/temp/imagens/ico_02.jpg","bf59e7630fe23b2479d1f32c633343ed"],["static/images/temp/imagens/ico_03.jpg","cd378de723e56764da521cf2e4f70d83"],["static/images/uniqueComponents/depoimentos/depo_daniel_v.png","6b4eed090309a0aa2c43c2b8eb933bdc"],["static/images/uniqueComponents/depoimentos/depo_edgar_jr.png","123735d7605e77fa1720419fa0408e32"],["static/images/uniqueComponents/depoimentos/depo_haroldo.png","5a864fee3cb07563f08f23671ddb9ee2"],["static/images/uniqueComponents/depoimentos/depoimentos_bg.jpg","177344380572283a814d96458449ae50"],["static/images/uniqueComponents/depoimentos/yellowStar.png","a47ca548b11d2a88075ae0fd771897ce"],["static/images/uniqueComponents/getTheApp/andApp.jpg","ecc7d373ba058d74ad31ac276e4ce911"],["static/images/uniqueComponents/getTheApp/macApp.jpg","476b279b562ad7d24a10f2328faf63c2"],["static/images/uniqueComponents/getTheApp/responsiveScreens.jpg","1d311cbc8b8d796fbffff2404bb2d9cc"],["static/images/uniqueComponents/homeFuncionalidadesCarossel/ControleVendas.png","9d37c1d74b46b3dce986478cc785546e"],["static/images/uniqueComponents/homeFuncionalidadesCarossel/EmissorNF.png","4fdb5899552ab20d1bcc9a464520208f"],["static/images/uniqueComponents/homeFuncionalidadesCarossel/controleEstoque.png","6e47f07a4cc34bfba6b57b81d7e2b672"],["static/images/uniqueComponents/homeFuncionalidadesCarossel/controleFinanceiro.png","1a2f97ce3bc778c0a84c36e5b6c44ac3"],["static/images/uniqueComponents/homeLojaAppsModule/app_01a.jpg","c6b133e88c42f02ae8c17256d686cee3"],["static/images/uniqueComponents/homeLojaAppsModule/app_01b.jpg","0a93448bbc59c82b92aec4b05d73fb35"],["static/images/uniqueComponents/homeLojaAppsModule/app_01c.jpg","57e3d0f69adfe2b07d22cbae963b8aa3"],["static/images/uniqueComponents/homeLojaAppsModule/app_02a.jpg","bebcbc531ed84d11af4e931b59c43cdd"],["static/images/uniqueComponents/homeLojaAppsModule/app_02b.jpg","384490616df77be85ce0a9ed7938e9a9"],["static/images/uniqueComponents/homeLojaAppsModule/app_02c.jpg","c6b133e88c42f02ae8c17256d686cee3"],["static/images/uniqueComponents/homeLojaAppsModule/app_03a.jpg","0a93448bbc59c82b92aec4b05d73fb35"],["static/images/uniqueComponents/homeLojaAppsModule/app_03b.jpg","18f371e69ec7c9f8d011df9ae53610a1"],["static/images/uniqueComponents/homeLojaAppsModule/app_03c.jpg","bebcbc531ed84d11af4e931b59c43cdd"],["static/images/uniqueComponents/homeLojaAppsModule/app_04a.jpg","384490616df77be85ce0a9ed7938e9a9"],["static/images/uniqueComponents/homeLojaAppsModule/app_04b.jpg","57e3d0f69adfe2b07d22cbae963b8aa3"],["static/images/uniqueComponents/homeLojaAppsModule/app_04c.jpg","0a93448bbc59c82b92aec4b05d73fb35"],["static/images/uniqueComponents/homeLojaAppsModule/app_05a.jpg","18f371e69ec7c9f8d011df9ae53610a1"],["static/images/uniqueComponents/homeLojaAppsModule/app_05b.jpg","c6b133e88c42f02ae8c17256d686cee3"],["static/images/uniqueComponents/homeLojaAppsModule/app_05c.jpg","384490616df77be85ce0a9ed7938e9a9"],["static/images/uniqueComponents/homeLojaAppsModule/app_06a.jpg","57e3d0f69adfe2b07d22cbae963b8aa3"],["static/images/uniqueComponents/homeLojaAppsModule/app_06b.jpg","bebcbc531ed84d11af4e931b59c43cdd"],["static/images/uniqueComponents/homeLojaAppsModule/app_06c.jpg","18f371e69ec7c9f8d011df9ae53610a1"],["static/images/uniqueComponents/homeLojaAppsModule/comunicacao.png","d7d95d0a52c84ab7b8875c516428cb46"],["static/images/uniqueComponents/homeLojaAppsModule/gestao.png","eba3032972dd8d604a112b5446dfe05c"],["static/images/uniqueComponents/homeLojaAppsModule/integracoes.png","020bfa203b1536a6c281b64032a58c24"],["static/images/uniqueComponents/homeLojaAppsModule/organizacao.png","2505d56286b9384460ce3f4518939c62"],["static/images/uniqueComponents/ultimasBlog/blog01.jpg","81290519124d31a7f8cf70272ec7acb7"],["static/images/uniqueComponents/ultimasBlog/blog02.jpg","508f935d4f25d90ebaf01a8f64a25392"],["static/images/uniqueComponents/ultimasBlog/blog03.jpg","ca2495b49bc2f09d2bdb8ee032aae3e5"],["static/images/uniqueComponents/vhsysNaMidia/logo-diario.png","2950c08b4fc4931380a6c68e75a107c7"],["static/images/uniqueComponents/vhsysNaMidia/logo-ecommerce-brasil.png","38628fd23b66a3391b842841da770f18"],["static/images/uniqueComponents/vhsysNaMidia/logo-exame.png","5f8f2090ad3f2a78dc44f2a90bab4fcf"],["static/images/uniqueComponents/vhsysNaMidia/logo-gazeta.png","a830274825d6074c4c8219e671230153"],["static/images/uniqueComponents/vhsysNaMidia/logo-info-money.png","ec498562150ea2ab0776a3a477a1370a"],["static/images/uniqueComponents/vhsysNaMidia/logo-pegn.png","88ca3705316c6ed2e8f1ea7b72de1640"],["static/images/uniqueComponents/vhsysNaMidia/logo-uol.png","55dd559c916091d22fd05422ea207291"],["static/images/vetor/icons/entrar-blue.svg","0fad84bcc5da75e99dafae6c47ad603c"],["static/images/vetor/icons/entrar.svg","9c480b4e59b120fd5a2a3780aa367dab"],["static/images/vetor/icons/icon_0001.svg","92959f349731c92ddf8614ad67a3d6da"],["static/images/vetor/icons/icon_0002.svg","02f3aa726d587d9b9081de1d7e0b397f"],["static/images/vetor/icons/icon_0003.svg","bc110ee31e955ac015607ce147e01cfa"],["static/images/vetor/icons/telefone.svg","fd4717df0a7e3bd07713e9392412a3c7"],["static/images/vetor/icons/telefone_cyan.svg","e19f27a5a5af11dab5758969c8cde860"],["static/images/vetor/icons/whatsapp.svg","7203c0db6c715326ef0f553842829dd2"],["static/images/vetor/icons/whatsapp_cyan.svg","87f75a3632b9d358460c9d1e692bf945"],["static/images/vetor/logos/vhsys-blue.svg","7d8e081cfd91da4b48318bf52c865bd9"],["static/images/vetor/logos/vhsys-white.svg","ebbce61f9ab013af9a7a07139a7ed634"],["static/js/traffic-source-v2.js","b559f05b5517f8d4723802435cdc9811"]],cacheName="sw-precache-v3-test-lighthouse-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(a,t,n){function c(s,i){if(!t[s]){if(!a[s]){var r="function"==typeof require&&require;if(!i&&r)return r(s,!0);if(o)return o(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var f=t[s]={exports:{}};a[s][0].call(f.exports,function(e){var t=a[s][1][e];return c(t||e)},f,f.exports,e,a,t,n)}return t[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)c(n[s]);return c}({1:[function(e,a,t){function n(e,a){((a=a||{}).debug||r.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var a;return e&&e.cache&&(a=e.cache.name),a=a||r.cache.name,caches.open(a)}function o(e,a,t){var c=e.url,o=t.maxAgeSeconds,s=t.maxEntries,i=t.name,r=Date.now();return n("Updating LRU order for "+c+". Max entries is "+s+", max age is "+o),p.getDb(i).then(function(e){return p.setTimestampForUrl(e,c,r)}).then(function(e){return p.expireEntries(e,s,o,r)}).then(function(e){n("Successfully updated IDB.");var t=e.map(function(e){return a.delete(e)});return Promise.all(t).then(function(){n("Done with cache cleanup.")})}).catch(function(e){n(e)})}function s(e){var a=Array.isArray(e);if(a&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(a=!1)}),!a)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,r=e("./options"),p=e("./idb-cache-expiration");a.exports={debug:n,fetchAndCache:function(e,a){var t=(a=a||{}).successResponses||r.successResponses;return fetch(e.clone()).then(function(n){return"GET"===e.method&&t.test(n.status)&&c(a).then(function(t){t.put(e,n).then(function(){var n=a.cache||r.cache;(n.maxEntries||n.maxAgeSeconds)&&n.name&&function(e,a,t){var n=o.bind(null,e,a,t);i=i?i.then(n):n()}(e,t,n)})}),n.clone()})},openCache:c,renameCache:function(e,a,t){return n("Renaming cache: ["+e+"] to ["+a+"]",t),caches.delete(a).then(function(){return Promise.all([caches.open(e),caches.open(a)]).then(function(a){var t=a[0],n=a[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(a){return n.put(e,a)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,a){return c(a).then(function(a){return a.add(e)})},uncache:function(e,a){return c(a).then(function(a){return a.delete(e)})},precache:function(e){e instanceof Promise||s(e),r.preCacheItems=r.preCacheItems.concat(e)},validatePrecacheInput:s,isResponseFresh:function(e,a,t){if(!e)return!1;if(a){var n=e.headers.get("date");if(n&&new Date(n).getTime()+1e3*a<t)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,a,t){var n="sw-toolbox-",c=1,o="store",s="url",i="timestamp",r={};a.exports={getDb:function(e){return e in r||(r[e]=function(e){return new Promise(function(a,t){var r=indexedDB.open(n+e,c);r.onupgradeneeded=function(){r.result.createObjectStore(o,{keyPath:s}).createIndex(i,i,{unique:!1})},r.onsuccess=function(){a(r.result)},r.onerror=function(){t(r.error)}})}(e)),r[e]},setTimestampForUrl:function(e,a,t){return new Promise(function(n,c){var s=e.transaction(o,"readwrite");s.objectStore(o).put({url:a,timestamp:t}),s.oncomplete=function(){n(e)},s.onabort=function(){c(s.error)}})},expireEntries:function(e,a,t,n){return function(e,a,t){return a?new Promise(function(n,c){var r=1e3*a,p=[],f=e.transaction(o,"readwrite"),u=f.objectStore(o);u.index(i).openCursor().onsuccess=function(e){var a=e.target.result;if(a&&t-r>a.value[i]){var n=a.value[s];p.push(n),u.delete(n),a.continue()}},f.oncomplete=function(){n(p)},f.onabort=c}):Promise.resolve([])}(e,t,n).then(function(t){return function(e,a){return a?new Promise(function(t,n){var c=[],r=e.transaction(o,"readwrite"),p=r.objectStore(o),f=p.index(i),u=f.count();f.count().onsuccess=function(){var e=u.result;e>a&&(f.openCursor().onsuccess=function(t){var n=t.target.result;if(n){var o=n.value[s];c.push(o),p.delete(o),e-c.length>a&&n.continue()}})},r.oncomplete=function(){t(c)},r.onabort=n}):Promise.resolve([])}(e,a).then(function(e){return t.concat(e)})})}}},{}],3:[function(e,a,t){function n(e){return e.reduce(function(e,a){return e.concat(a)},[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),o=e("./router"),s=e("./options");a.exports={fetchListener:function(e){var a=o.match(e.request);a?e.respondWith(a(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){c.debug("activate event fired");var a=s.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(a,s.cache.name))},installListener:function(e){var a=s.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+a+"]"),e.waitUntil(c.openCache({cache:{name:a}}).then(function(e){return Promise.all(s.preCacheItems).then(n).then(c.validatePrecacheInput).then(function(a){return c.debug("preCache list: "+(a.join(", ")||"(none)")),e.addAll(a)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,a,t){var n;n=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,a.exports={cache:{name:"$$$toolbox-cache$$$"+n+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,a,t){var n=new URL("./",self.location).pathname,c=e("path-to-regexp"),o=function(e,a,t,o){a instanceof RegExp?this.fullUrlRegExp=a:(0!==a.indexOf("/")&&(a=n+a),this.keys=[],this.regexp=c(a,this.keys)),this.method=e,this.options=o,this.handler=t};o.prototype.makeHandler=function(e){var a;if(this.regexp){var t=this.regexp.exec(e);a={},this.keys.forEach(function(e,n){a[e.name]=t[n+1]})}return function(e){return this.handler(e,a,this.options)}.bind(this)},a.exports=o},{"path-to-regexp":15}],6:[function(e,a,t){var n=e("./route"),c=e("./helpers"),o=function(e,a){for(var t=e.entries(),n=t.next(),c=[];!n.done;){new RegExp(n.value[0]).test(a)&&c.push(n.value[1]),n=t.next()}return c},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(a,t,n){return this.add(e,a,t,n)}}),s.prototype.add=function(e,a,t,o){var s;o=o||{},a instanceof RegExp?s=RegExp:s=(s=o.origin||self.location.origin)instanceof RegExp?s.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(s),e=e.toLowerCase();var i=new n(e,a,t,o);this.routes.has(s)||this.routes.set(s,new Map);var r=this.routes.get(s);r.has(e)||r.set(e,new Map);var p=r.get(e),f=i.regexp||i.fullUrlRegExp;p.has(f.source)&&c.debug('"'+a+'" resolves to same regex as existing route.'),p.set(f.source,i)},s.prototype.matchMethod=function(e,a){var t=new URL(a),n=t.origin,c=t.pathname;return this._match(e,o(this.routes,n),c)||this._match(e,[this.routes.get(RegExp)],a)},s.prototype._match=function(e,a,t){if(0===a.length)return null;for(var n=0;n<a.length;n++){var c=a[n],s=c&&c.get(e.toLowerCase());if(s){var i=o(s,t);if(i.length>0)return i[0].makeHandler(t)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},a.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,a,t){var n=e("../options"),c=e("../helpers");a.exports=function(e,a,t){return t=t||{},c.debug("Strategy: cache first ["+e.url+"]",t),c.openCache(t).then(function(a){return a.match(e).then(function(a){var o=t.cache||n.cache,s=Date.now();return c.isResponseFresh(a,o.maxAgeSeconds,s)?a:c.fetchAndCache(e,t)})})}},{"../helpers":1,"../options":4}],8:[function(e,a,t){var n=e("../options"),c=e("../helpers");a.exports=function(e,a,t){return t=t||{},c.debug("Strategy: cache only ["+e.url+"]",t),c.openCache(t).then(function(a){return a.match(e).then(function(e){var a=t.cache||n.cache,o=Date.now();if(c.isResponseFresh(e,a.maxAgeSeconds,o))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,a,t){var n=e("../helpers"),c=e("./cacheOnly");a.exports=function(e,a,t){return n.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(o,s){var i=!1,r=[],p=function(e){r.push(e.toString()),i?s(new Error('Both cache and network failed: "'+r.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?o(e):p("No result returned")};n.fetchAndCache(e.clone(),t).then(f,p),c(e,a,t).then(f,p)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,a,t){a.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,a,t){var n=e("../options"),c=e("../helpers");a.exports=function(e,a,t){var o=(t=t||{}).successResponses||n.successResponses,s=t.networkTimeoutSeconds||n.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",t),c.openCache(t).then(function(a){var i,r,p=[];if(s){var f=new Promise(function(o){i=setTimeout(function(){a.match(e).then(function(e){var a=t.cache||n.cache,s=Date.now(),i=a.maxAgeSeconds;c.isResponseFresh(e,i,s)&&o(e)})},1e3*s)});p.push(f)}var u=c.fetchAndCache(e,t).then(function(e){if(i&&clearTimeout(i),o.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,t),r=e,new Error("Bad response")}).catch(function(n){return c.debug("Network or response error, fallback to cache ["+e.url+"]",t),a.match(e).then(function(e){if(e)return e;if(r)return r;throw n})});return p.push(u),Promise.race(p)})}},{"../helpers":1,"../options":4}],12:[function(e,a,t){var n=e("../helpers");a.exports=function(e,a,t){return n.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}},{"../helpers":1}],13:[function(e,a,t){var n=e("./options"),c=e("./router"),o=e("./helpers"),s=e("./strategies"),i=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),a.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:c,options:n,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,a,t){a.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,a,t){function n(e,a){for(var t,n=[],c=0,o=0,s="",p=a&&a.delimiter||"/";null!=(t=g.exec(e));){var f=t[0],u=t[1],d=t.index;if(s+=e.slice(o,d),o=d+f.length,u)s+=u[1];else{var l=e[o],m=t[2],b=t[3],h=t[4],v=t[5],_=t[6],w=t[7];s&&(n.push(s),s="");var j=null!=m&&null!=l&&l!==m,x="+"===_||"*"===_,y="?"===_||"*"===_,C=t[2]||p,q=h||v;n.push({name:b||c++,prefix:m||"",delimiter:C,optional:y,repeat:x,partial:j,asterisk:!!w,pattern:q?r(q):w?".*":"[^"+i(C)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&n.push(s),n}function c(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var a=new Array(e.length),t=0;t<e.length;t++)"object"==typeof e[t]&&(a[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,n){for(var s="",i=t||{},r=(n||{}).pretty?c:encodeURIComponent,p=0;p<e.length;p++){var f=e[p];if("string"!=typeof f){var u,d=i[f.name];if(null==d){if(f.optional){f.partial&&(s+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(l(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var g=0;g<d.length;g++){if(u=r(d[g]),!a[p].test(u))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(u)+"`");s+=(0===g?f.prefix:f.delimiter)+u}}else{if(u=f.asterisk?o(d):r(d),!a[p].test(u))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+u+'"');s+=f.prefix+u}}else s+=f}return s}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function r(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function p(e,a){return e.keys=a,e}function f(e){return e.sensitive?"":"i"}function u(e,a,t){l(a)||(t=a||t,a=[]);for(var n=(t=t||{}).strict,c=!1!==t.end,o="",s=0;s<e.length;s++){var r=e[s];if("string"==typeof r)o+=i(r);else{var u=i(r.prefix),d="(?:"+r.pattern+")";a.push(r),r.repeat&&(d+="(?:"+u+d+")*"),o+=d=r.optional?r.partial?u+"("+d+")?":"(?:"+u+"("+d+"))?":u+"("+d+")"}}var g=i(t.delimiter||"/"),m=o.slice(-g.length)===g;return n||(o=(m?o.slice(0,-g.length):o)+"(?:"+g+"(?=$))?"),o+=c?"$":n&&m?"":"(?="+g+"|$)",p(new RegExp("^"+o,f(t)),a)}function d(e,a,t){return l(a)||(t=a||t,a=[]),t=t||{},e instanceof RegExp?function(e,a){var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)a.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,a)}(e,a):l(e)?function(e,a,t){for(var n=[],c=0;c<e.length;c++)n.push(d(e[c],a,t).source);return p(new RegExp("(?:"+n.join("|")+")",f(t)),a)}(e,a,t):function(e,a,t){return u(n(e,t),a,t)}(e,a,t)}var l=e("isarray");a.exports=d,a.exports.parse=n,a.exports.compile=function(e,a){return s(n(e,a))},a.exports.tokensToFunction=s,a.exports.tokensToRegExp=u;var g=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,a,t){!function(){var e=Cache.prototype.addAll,a=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(a)var t=a[1],n=parseInt(a[2]);e&&(!a||"Firefox"===t&&n>=46||"Chrome"===t&&n>=50)||(Cache.prototype.addAll=function(e){function a(e){this.name="NetworkError",this.code=19,this.message=e}var t=this;return a.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new a("Invalid scheme");return fetch(e.clone())}))}).then(function(n){if(n.some(function(e){return!e.ok}))throw new a("Incorrect response status");return Promise.all(n.map(function(a,n){return t.put(e[n],a)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/[.](png|jpg|css)/,toolbox.fastest,{}),toolbox.router.get(/^http.*/,toolbox.networkFirst,{});