jQuery.noConflict();jQuery(document).ready(function($){"use strict";if($(".btn-book").length){$(".btn-book").colorbox({inline:true,width:"auto"});$(".btn-book").each(function(){$(this).click(function(){$('#hidhotelname').val($(this).attr('data-title'));});});}
if($(".contact-frm").length){$(".contact-frm").validate({onfocusout:function(element){$(element).valid();},rules:{cname:{required:true,minlength:2},cemail:{required:true,email:true},cmessage:{required:true,minlength:10},txtcap:{required:true,minlength:4,equalTo:"#txthidcap"}}});}
if($(".booknow-frm").length){$(".booknow-frm").validate({onfocusout:function(element){$(element).valid();},debug:true,rules:{txtfname:{required:true,minlength:2},txtemail:{required:true,email:true},txtdate:{required:true}}});}
$('.contact-frm, .booknow-frm').submit(function(){var This=$(this);var data_value=null;if($(This).valid()){var action=$(This).attr('action');data_value=decodeURI($(This).serialize());$.ajax({type:"POST",url:action,data:data_value,success:function(response){$('#ajax_message').html(response);$('#ajax_message').slideDown('slow');if(response.match('success')!==null){$(This).slideUp('slow');}}});}
return false;});});;
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];div.className='fit-vids-style';div.innerHTML='&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';ref.parentNode.insertBefore(div,ref);if(options){$.extend(settings,options);}
return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector);}
var $allVideos=$(this).find(selectors.join(','));$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width');});});};})(jQuery);