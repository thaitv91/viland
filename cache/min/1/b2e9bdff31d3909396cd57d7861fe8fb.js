/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
(function(){var root=(typeof exports==='undefined'?window:exports);var config={retinaImageSuffix:'@2x',check_mime_type:true,force_original_dimensions:true};function Retina(){}
root.Retina=Retina;Retina.configure=function(options){if(options===null){options={};}
for(var prop in options){if(options.hasOwnProperty(prop)){config[prop]=options[prop];}}};Retina.init=function(context){if(context===null){context=root;}
var existing_onload=context.onload||function(){};context.onload=function(){var images=document.getElementsByTagName('img'),retinaImages=[],i,image;for(i=0;i<images.length;i+=1){image=images[i];if(!!!image.getAttributeNode('data-no-retina')){retinaImages.push(new RetinaImage(image));}}
existing_onload();};};Retina.isRetina=function(){var mediaQuery='(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';if(root.devicePixelRatio>1){return true;}
if(root.matchMedia&&root.matchMedia(mediaQuery).matches){return true;}
return false;};var regexMatch=/\.\w+$/;function suffixReplace(match){return config.retinaImageSuffix+match;}
function RetinaImagePath(path,at_2x_path){this.path=path||'';if(typeof at_2x_path!=='undefined'&&at_2x_path!==null){this.at_2x_path=at_2x_path;this.perform_check=false;}else{if(undefined!==document.createElement){var locationObject=document.createElement('a');locationObject.href=this.path;locationObject.pathname=locationObject.pathname.replace(regexMatch,suffixReplace);this.at_2x_path=locationObject.href;}else{var parts=this.path.split('?');parts[0]=parts[0].replace(regexMatch,suffixReplace);this.at_2x_path=parts.join('?');}
this.perform_check=true;}}
root.RetinaImagePath=RetinaImagePath;RetinaImagePath.confirmed_paths=[];RetinaImagePath.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match('//'+document.domain));};RetinaImagePath.prototype.check_2x_variant=function(callback){var http,that=this;if(this.is_external()){return callback(false);}else if(!this.perform_check&&typeof this.at_2x_path!=='undefined'&&this.at_2x_path!==null){return callback(true);}else if(this.at_2x_path in RetinaImagePath.confirmed_paths){return callback(true);}else{http=new XMLHttpRequest();http.open('HEAD',this.at_2x_path);http.onreadystatechange=function(){if(http.readyState!==4){return callback(false);}
if(http.status>=200&&http.status<=399){if(config.check_mime_type){var type=http.getResponseHeader('Content-Type');if(type===null||!type.match(/^image/i)){return callback(false);}}
RetinaImagePath.confirmed_paths.push(that.at_2x_path);return callback(true);}else{return callback(false);}};http.send();}};function RetinaImage(el){this.el=el;this.path=new RetinaImagePath(this.el.getAttribute('src'),this.el.getAttribute('data-at2x'));var that=this;this.path.check_2x_variant(function(hasVariant){if(hasVariant){that.swap();}});}
root.RetinaImage=RetinaImage;RetinaImage.prototype.swap=function(path){if(typeof path==='undefined'){path=this.path.at_2x_path;}
var that=this;function load(){if(!that.el.complete){setTimeout(load,5);}else{if(config.force_original_dimensions){that.el.setAttribute('width',that.el.offsetWidth);that.el.setAttribute('height',that.el.offsetHeight);}
that.el.setAttribute('src',path);}}
load();};if(Retina.isRetina()){Retina.init(root);}})();;(function($){var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:false,getWidthFrom:''},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0;i<sticked.length;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css('position','').css('top','');s.stickyElement.parent().removeClass(s.className);s.currentTop=null;}}
else{var newTop=documentHeight-s.stickyElement.outerHeight()
-s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing;}else{newTop=s.topSpacing;}
if(s.currentTop!=newTop){s.stickyElement.css('position','fixed').css('top',newTop);if(typeof s.getWidthFrom!=='undefined'){s.stickyElement.css('width',$(s.getWidthFrom).width());}
s.stickyElement.parent().addClass(s.className);s.currentTop=newTop;}}}},resizer=function(){windowHeight=$window.height();},methods={init:function(options){var o=$.extend(defaults,options);return this.each(function(){var stickyElement=$(this);var stickyId=stickyElement.attr('id');var wrapper=$('<div></div>').attr('id',stickyId+'-sticky-wrapper').addClass(o.wrapperClassName);stickyElement.wrapAll(wrapper);if(o.center){stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});}
if(stickyElement.css("float")=="right"){stickyElement.css({"float":"none"}).parent().css({"float":"right"});}
var stickyWrapper=stickyElement.parent();stickyWrapper.css('height',stickyElement.outerHeight());sticked.push({topSpacing:o.topSpacing,bottomSpacing:o.bottomSpacing,stickyElement:stickyElement,currentTop:null,stickyWrapper:stickyWrapper,className:o.className,getWidthFrom:o.getWidthFrom});});},update:scroller};if(window.addEventListener){window.addEventListener('scroll',scroller,false);window.addEventListener('resize',resizer,false);}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer);}
$.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.sticky');}};$(function(){setTimeout(scroller,0);});})(jQuery);