function TagObject(){var bb="OWS3SLYLH7SQPX8L";var aO='';var bp='';var cookie_appnexusid=0;var storage_appnexusid=0;var v='https:'==document.location.protocol?'https://':'http://';function setLocalStorage(key,value){try{if(!isDisplay()){localStorage.setItem(key,value);}}catch(e){}};function getLocalStorage(key,V){V=typeof V!=='undefined'?V:'';try{if(!isDisplay()){return(localStorage.getItem(key)===null)?V:localStorage.getItem(key);}}catch(e){}return V;};function aI(bA,value,bK){if(!isDisplay()){if(typeof(bK)=='undefined'){bK=365;}var aF=new Date();aF.setDate(aF.getDate()+bK);var C=escape(value)+((bK==null)?"":"; expires="+aF.toUTCString())+"; path=/";document.cookie=bA+"="+C;}};function aY(bA,V){V=typeof V!=='undefined'?V:'';if(isDisplay())return V;var C=document.cookie;var H=C.indexOf(" "+bA+"=");if(H== -1){H=C.indexOf(bA+"=");}if(H== -1){C=V;}else{H=C.indexOf("=",H)+1;var bG=C.indexOf(";",H);if(bG== -1){bG=C.length;}C=unescape(C.substring(H,bG));}return C;};function isDisplay(){return(typeof(window.azameoDisplay)!='undefined')};this.getUserid=function(){return bb;};this.ConstructAppnexusRedirectionURL=function(L){l=('https:'==document.location.protocol?'https://secure.adnxs.com/getuid?':'http://ib.adnxs.com/getuid?')+L;return l;};this.ConstructURL=function(h,path,customData){var url="tag.azame.net/tag/"+path;url=v+url+h;if(customData!=""){url+=url.indexOf("?")!= -1?"&":"?";url+="customData="+customData;}return url;};this.IncludeScript=function(url,onloadfunction,script_id){var head=document.getElementsByTagName('head')[0];var ar=document.createElement('script');ar.type='application/javascript';ar.setAttribute('src',url);if(script_id!==undefined){ar.setAttribute('id',"azameo_"+script_id);}ar.setAttribute('async',"true");if(onloadfunction){ar.addEventListener("load",onloadfunction);}head.appendChild(ar);};this.IncludeImage=function(url){var body=document.getElementsByTagName('body')[0];var T=document.createElement('img');T.setAttribute('style','display:none;');T.setAttribute('width','1px');T.setAttribute('height','1px');T.src=url;body.appendChild(T);};this.SendCustomData=function(){h="?u="+bb;this.SendData(h,"data.js",window.azameoData);};this.SendData=function(h,path,customData,K){if(typeof(customData)!=='undefined'){customData=encodeURIComponent(JSON.stringify(customData));try{delete(window.azameoData)}catch(G){}}else{customData="";}K=typeof K!=='undefined'?K:false;aE=this.ConstructURL(h,path,customData);aE=K?this.ConstructAppnexusRedirectionURL(aE):aE;this.IncludeScript(aE,false,path);};this.AddToSegmentAppNexus=function(appnexusid,t){url='https:'==document.location.protocol?"https://secure.adnxs.com/seg?add=":"http://ib.adnxs.com/seg?add=";url+=t+"&t=2";this.IncludeImage(url)};this.GetAppNexusID=function(){if(!isDisplay()){J=parseInt(cookie_appnexusid);if(J==0)J=parseInt(storage_appnexusid);j=Math.round(new Date().getTime()/1000);h="?u="+bb;if(location.href)h+="&url="+encodeURIComponent(location.href);if((J==0)||((j-J)>86400)){customData={"appnexusid":"$UID"};this.SendData(h,"data.js",customData,true);}}};this.ValidateAppNexusID=function(){try{j=Math.round(new Date().getTime()/1000);aI("azameo_appnexusid",j);setLocalStorage("azameo_appnexusid",j);}catch(e){}};this.ValidateConversion=function(){try{setLocalStorage("conversion_query","");aI("conversion_query","");}catch(e){}};this.CheckConversion=function(){try{k=aY("conversion_query","");if(k==""){k=getLocalStorage("conversion_query","");}if(k!=""){this.SendData(k,"conversion",window.azameoData);}}catch(e){}if(window.azameoTagEvent){azameoTag.Conversion();}};this.Conversion=function(){if(typeof window.azameoTagEvent!=='undefined'){if(typeof window.azameoCart!='undefined'){window.azameoTagEvent["cart"]=window.azameoTagEvent["cart"]||[];for(var i=0;i<window.azameoCart.length;i++){window.azameoTagEvent["cart"].push(window.azameoCart[i]);}}bp=getLocalStorage("storage_azameo_userid","");aO=aY("cookie_azameo_id","");h="?u="+bb;if(aO!="")h+="&cu="+encodeURIComponent(aO);if(bp!="")h+="&lsu="+encodeURIComponent(bp);if(typeof window.azameoSite!='undefined'){h+="&site="+encodeURIComponent(window.azameoSite)}if(location.href)h+="&url="+encodeURIComponent(location.href);h+="&conversionData="+encodeURIComponent(JSON.stringify(window.azameoTagEvent));try{setLocalStorage("conversion_query",h);aI("conversion_query",h);}catch(e){}this.SendData(h,"conversion",window.azameoData)}};this.Display=function(){if(isDisplay()){h="?u="+bb;url=window.location.href;try{url=window.top.location.href}catch(e){}if(url)h+="&url="+encodeURIComponent(url);for(var key in window.azameoDisplay){h+="&"+encodeURIComponent(key)+"="+encodeURIComponent(window.azameoDisplay[key]);}if(navigator.userAgent)h+="&userAgent="+encodeURIComponent(navigator.userAgent);this.SendData(h,"display",window.azameoData)}};this.DisplayEvent=function(eventtype){eventtype=typeof eventtype!=='undefined'?eventtype:'';h="?u="+bb;url=window.location.href;try{url=window.top.location.href}catch(e){}if(url)h+="&url="+encodeURIComponent(url);if(eventtype)h+="&type="+encodeURIComponent(eventtype);if(isDisplay()){for(var key in window.azameoDisplay){h+="&"+encodeURIComponent(key)+"="+encodeURIComponent(window.azameoDisplay[key]);}}if(navigator.userAgent)h+="&userAgent="+encodeURIComponent(navigator.userAgent);this.SendData(h,"displayevent",window.azameoData)};this.OptOut=function(){aI("azameo_optout",1);};this.IsOptOut=function(){return aY("azameo_optout",0)==1;};this.Navigation=function(R){R=typeof R!=='undefined'?R:'';aO='';bp='';cookie_appnexusid=0;storage_appnexusid=0;bp=getLocalStorage("storage_azameo_userid","");storage_appnexusid=getLocalStorage("azameo_appnexusid",0);aO=aY("cookie_azameo_id","");cookie_appnexusid=aY("azameo_appnexusid",0);var h="?u="+encodeURIComponent(bb);if(aO!="")h+="&cu="+encodeURIComponent(aO);else aI("cookie_azameo_id",bb);if(bp!="")h+="&lsu="+encodeURIComponent(bp);else setLocalStorage("storage_azameo_userid",bb);if(typeof window.azameoSite!='undefined'){h+="&site="+encodeURIComponent(window.azameoSite)}if(typeof window.azameoProduct!='undefined'){h+="&product="+encodeURIComponent(window.azameoProduct)}if(navigator.userAgent)h+="&userAgent="+encodeURIComponent(navigator.userAgent);if(R){window.azameoTagExecuted=0;window.azameoTagExecuted=false;h+="&url="+encodeURIComponent(R);if(location.href)h+="&referer="+encodeURIComponent(location.href);}else{if(location.href)h+="&url="+encodeURIComponent(location.href);if(window.document.referrer)h+="&referer="+encodeURIComponent(window.document.referrer);}this.SendData(h,"navigation",window.azameoData)};this.ViewProduct=function(product_id){product_id=typeof product_id!=='undefined'?product_id:window.azameoTag.azameoProduct;aO='';bp='';cookie_appnexusid=0;storage_appnexusid=0;bp=getLocalStorage("storage_azameo_userid","");storage_appnexusid=getLocalStorage("azameo_appnexusid",0);aO=aY("cookie_azameo_id","");cookie_appnexusid=aY("azameo_appnexusid",0);var h="?u="+encodeURIComponent(bb);if(aO!="")h+="&cu="+encodeURIComponent(aO);else aI("cookie_azameo_id",bb);if(bp!="")h+="&lsu="+encodeURIComponent(bp);else setLocalStorage("storage_azameo_userid",bb);if(typeof window.azameoSite!='undefined'){h+="&site="+encodeURIComponent(window.azameoSite)}if(typeof window.azameoProduct!='undefined'){h+="&product="+encodeURIComponent(product_id)}if(navigator.userAgent)h+="&userAgent="+encodeURIComponent(navigator.userAgent);if(location.href)h+="&url="+encodeURIComponent(location.href);this.SendData(h,"product",window.azameoData)};this.AddToCart=function(ref){ref=typeof ref!=='undefined'?ref:"addtocart"+new Date().getTime();window.azameoTagEvent={name:"addtocart",ref:ref,type:"addtocart"};window.azameoCart=window.azameoCart||[];this.Conversion();}};azameoTag=new TagObject();if(!window.azameoSilent){if(!azameoTag.IsOptOut()){azameoTag.CheckConversion();if(window.azameoDisplay){azameoTag.Display();}else{azameoTag.Navigation();}}}