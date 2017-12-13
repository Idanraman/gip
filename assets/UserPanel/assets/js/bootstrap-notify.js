(function(a){'function'==typeof define&&define.amd?define(['jquery'],a):'object'==typeof exports?a(require('jquery')):a(jQuery)})(function(a){function b(e){var f=!1;return a('[data-notify="container"]').each(function(g,h){var j=a(h),k=j.find('[data-notify="title"]').text().trim(),l=j.find('[data-notify="message"]').html().trim(),m=k===a('<div>'+e.settings.content.title+'</div>').html().trim(),n=l===a('<div>'+e.settings.content.message+'</div>').html().trim(),o=j.hasClass('alert-'+e.settings.type);return m&&n&&o&&(f=!0),!f}),f}function c(e,f,g){var h={content:{message:'object'==typeof f?f.message:f,title:f.title?f.title:'',icon:f.icon?f.icon:'',url:f.url?f.url:'#',target:f.target?f.target:'-'}};g=a.extend(!0,{},h,g),this.settings=a.extend(!0,{},d,g),this._defaults=d,'-'===this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:'webkitAnimationStart oanimationstart MSAnimationStart animationstart',end:'webkitAnimationEnd oanimationend MSAnimationEnd animationend'},'number'==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),!this.settings.allow_duplicates&&(this.settings.allow_duplicates||b(this))||this.init()}var d={element:'body',position:null,type:'info',allow_dismiss:!0,allow_duplicates:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:'top',align:'right'},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:'_blank',mouse_over:null,animate:{enter:'animated fadeInDown',exit:'animated fadeOutUp'},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:'class',template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i data-notify="icon" class="material-icons"></i><span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var e=arguments[0],f=1;f<arguments.length;f++)e=e.replace(RegExp('\\{'+(f-1)+'\\}','gm'),arguments[f]);return e},a.extend(c.prototype,{init:function(){var e=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),'#'!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(f,g){var h={};for(var j in'string'==typeof f?h[f]=g:h=f,h)switch(j){case'type':this.$ele.removeClass('alert-'+e.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-'+e.settings.type),e.settings.type=h[j],this.$ele.addClass('alert-'+h[j]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-'+h[j]);break;case'icon':var k=this.$ele.find('[data-notify="icon"]');'class'===e.settings.icon_type.toLowerCase()?k.html(h[j]):(!k.is('img')&&k.find('img'),k.attr('src',h[j]));break;case'progress':var l=e.settings.delay-e.settings.delay*(h[j]/100);this.$ele.data('notify-delay',l),this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow',h[j]).css('width',h[j]+'%');break;case'url':this.$ele.find('[data-notify="url"]').attr('href',h[j]);break;case'target':this.$ele.find('[data-notify="url"]').attr('target',h[j]);break;default:this.$ele.find('[data-notify="'+j+'"]').html(h[j]);}var m=this.$ele.outerHeight()+parseInt(e.settings.spacing)+parseInt(e.settings.offset.y);e.reposition(m)},close:function(){e.close()}}},buildNotify:function(){var e=this.settings.content;this.$ele=a(String.format(this.settings.template,this.settings.type,e.title,e.message,e.url,e.target)),this.$ele.attr('data-notify-position',this.settings.placement.from+'-'+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css('display','none'),(!(0>=this.settings.delay)||this.settings.showProgressbar)&&this.settings.showProgressbar||this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){this.$ele.addClass('alert-with-icon'),'class'===this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').html(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is('img')?this.$ele.find('[data-notify="icon"]').attr('src',this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:'absolute',right:'10px',top:'50%',marginTop:'-13px',zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',height:'100%',left:0,position:'absolute',top:0,width:'100%',zIndex:this.settings.z_index+1})},placement:function(){var e=this,f=this.settings.offset.y,g={display:'inline-block',margin:'0px auto',position:this.settings.position?this.settings.position:'body'===this.settings.element?'fixed':'absolute',transition:'all .5s ease-in-out',zIndex:this.settings.z_index},h=!1,j=this.settings;switch(a('[data-notify-position="'+this.settings.placement.from+'-'+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){f=Math.max(f,parseInt(a(this).css(j.placement.from))+parseInt(a(this).outerHeight())+parseInt(j.spacing))}),!0===this.settings.newest_on_top&&(f=this.settings.offset.y),g[this.settings.placement.from]=f+'px',this.settings.placement.align){case'left':case'right':g[this.settings.placement.align]=this.settings.offset.x+'px';break;case'center':g.left=0,g.right=0;}this.$ele.css(g).addClass(this.settings.animate.enter),a.each(['webkit-','moz-','o-','ms-',''],function(k,l){e.$ele[0].style[l+'AnimationIterationCount']=1}),a(this.settings.element).append(this.$ele),!0===this.settings.newest_on_top&&(f=parseInt(f)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(f)),a.isFunction(e.settings.onShow)&&e.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(){h=!0}).one(this.animations.end,function(){a.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)}),setTimeout(function(){!h&&a.isFunction(e.settings.onShown)&&e.settings.onShown.call(this)},600)},bind:function(){var e=this;if(this.$ele.find('[data-notify="dismiss"]').on('click',function(){e.close()}),this.$ele.mouseover(function(){a(this).data('data-hover','true')}).mouseout(function(){a(this).data('data-hover','false')}),this.$ele.data('data-hover','false'),0<this.settings.delay){e.$ele.data('notify-delay',e.settings.delay);var f=setInterval(function(){var g=parseInt(e.$ele.data('notify-delay'))-e.settings.timer;if('false'===e.$ele.data('data-hover')&&'pause'===e.settings.mouse_over||'pause'!=e.settings.mouse_over){var h=100*((e.settings.delay-g)/e.settings.delay);e.$ele.data('notify-delay',g),e.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow',h).css('width',h+'%')}g<=-e.settings.timer&&(clearInterval(f),e.close())},e.settings.timer)}},close:function(){var e=this,f=parseInt(this.$ele.css(this.settings.placement.from)),g=!1;this.$ele.data('closing','true').addClass(this.settings.animate.exit),e.reposition(f),a.isFunction(e.settings.onClose)&&e.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(){g=!0}).one(this.animations.end,function(){a(this).remove(),a.isFunction(e.settings.onClosed)&&e.settings.onClosed.call(this)}),setTimeout(function(){g||(e.$ele.remove(),e.settings.onClosed&&e.settings.onClosed(e.$ele))},600)},reposition:function(e){var f=this,g='[data-notify-position="'+this.settings.placement.from+'-'+this.settings.placement.align+'"]:not([data-closing="true"])',h=this.$ele.nextAll(g);!0===this.settings.newest_on_top&&(h=this.$ele.prevAll(g)),h.each(function(){a(this).css(f.settings.placement.from,e),e=parseInt(e)+parseInt(f.settings.spacing)+a(this).outerHeight()})}}),a.notify=function(e,f){var g=new c(this,e,f);return g.notify},a.notifyDefaults=function(e){return d=a.extend(!0,{},d,e),d},a.notifyClose=function(e){'undefined'==typeof e||'all'===e?a('[data-notify]').find('[data-notify="dismiss"]').trigger('click'):a('[data-notify-position="'+e+'"]').find('[data-notify="dismiss"]').trigger('click')}});