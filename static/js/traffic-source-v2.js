(function(cookieName,domain){var traffic_source_COOKIE_TOKEN_SEPARATOR=">>";var site_hostname="vhsys.com.br";function isRealReferrer(){return document.referrer.split('/')[2]!=site_hostname}
function getURLParameter(param,url){var pageURL;if(isNotNullOrEmpty(url)&&url){pageURL=url.split("?")[1]}else{pageURL=window.location.search.substring(1)}
if(isNotNullOrEmpty(pageURL)&&pageURL){var URLVariables=pageURL.split('&');for(var i=0;i<URLVariables.length;i++){var parameterName=URLVariables[i].split('=');if(parameterName[0]==param){return decodeURIComponent(parameterName[1])}}}
return null}
function getCookie(cookieName){var name=cookieName+"=";var cookieArray=document.cookie.split(';');for(var i=0;i<cookieArray.length;i++){var cookie=cookieArray[i].replace(/^\s+|\s+$/g,'');if(cookie.indexOf(name)==0){return cookie.substring(name.length,cookie.length)}}
return null}
function getIdReferrer(){if(!isNotNullOrEmpty(getCookie('trial_referrer'))&&!getCookie('trial_referrer')){setIdReferrer()}
return getCookie('trial_referrer')}
function setIdReferrer(){var rand=Math.floor((Math.random()*100000)+120);var date=Date();var hash=(getCookie('PHPSESSID')!=null)?getCookie('PHPSESSID').substring(0,15):rand;var trial_referrer=window.btoa(rand+date.substring(0,24));setCookie('trial_referrer',trial_referrer)}
function getLastReferrer(cookieName){var cookie=getCookie(cookieName);if(isNotNullOrEmpty(cookie)){return cookie}
return!1}
function isNotNullOrEmpty(string){return string!==null&&string!==""}
function removeProtocol(href){return href.replace(/.*?:\/\//g,"")}
function setCookie(cookie,value){var expires=new Date();expires.setTime(expires.getTime()+62208000000);document.cookie=cookie+"="+value+"; expires="+expires.toGMTString()+"; domain="+domain+"; path=/"}
function saveReferrer(id_referrer,traffic_source){let url="https://vhsys.com.br/trial-traffic-source/traffic.php";let data={trial_referrer:id_referrer,trial_lastpage:JSON.stringify(traffic_source),token:'N3OSD89DS7632BV659FDB32BVGJ6KJEJH43HFSD023V1290J785445KL54L54SDF'};var xhr=new XMLHttpRequest();xhr.open("POST",url,!0);xhr.setRequestHeader('Content-Type','application/json');xhr.send(data)}
function isDisabled(){var cookie_lastpage=getCookie('trial_lastpage');var cookie_id=getCookie('trial_id_empresa');if(cookie_lastpage==undefined&&cookie_id==undefined){return!1}
if(cookie_lastpage=='DISABLED'||isNotNullOrEmpty(cookie_id)){return!0}
return!1}
if(!isDisabled()){var referrer_id=getIdReferrer();var current_page=removeProtocol(document.URL);var last_page="";var traffic_array=[];if(document.cookie.indexOf(cookieName)===-1){if(isNotNullOrEmpty(document.referrer)){last_page=removeProtocol(document.referrer);traffic_array.push(last_page);traffic_array.push(current_page)}else{last_page="direct::"+current_page;traffic_array.push(last_page)}}else{if(!getURLParameter('utm_expid')){if(isNotNullOrEmpty(document.referrer)&&!getURLParameter('utm_expid',document.referrer)){if(removeProtocol(document.referrer)!=getLastReferrer(cookieName)&&("direct::"+removeProtocol(document.referrer))!=getLastReferrer(cookieName))
{last_page=removeProtocol(document.referrer);traffic_array.push(last_page);if(current_page!=last_page){traffic_array.push(current_page)}}else if(getLastReferrer(cookieName)!=current_page){traffic_array.push(current_page)}}else{if(("direct::"+removeProtocol(document.referrer))!=getLastReferrer(cookieName)){last_page="direct::"+current_page;traffic_array.push(last_page)}}}else{if(isNotNullOrEmpty(current_page)){if(getLastReferrer(cookieName)!=current_page){traffic_array.push(current_page)}}}}
saveReferrer(referrer_id,traffic_array);setCookie(cookieName,current_page)}})("trial_lastpage",".vhsys.com.br")