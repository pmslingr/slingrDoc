!function(e){e.fn.toc=function(n){var o=e.extend({noBackToTopLinks:!1,title:"",minimumHeaders:3,headers:"h1, h2, h3, h4",listType:"ol",showEffect:"show",showSpeed:"slow"},n),t=e(o.headers).filter(function(){var n=e(this).prev().attr("name");return!this.id&&n&&(this.id=e(this).attr("id",n.replace(/\./g,"-"))),this.id}),s=e(this);if(t.length&&!(t.length<o.minimumHeaders)&&s.length){0===o.showSpeed&&(o.showEffect="none");var h,a={show:function(){s.hide().html(d).show(o.showSpeed)},slideDown:function(){s.hide().html(d).slideDown(o.showSpeed)},fadeIn:function(){s.hide().html(d).fadeIn(o.showSpeed)},none:function(){s.html(d)}},l=function(e){return parseInt(e.nodeName.replace("H",""),10)},c=t.map(function(e,n){return l(n)}).get().sort()[0],r=l(t[0]),d=o.title+" <"+o.listType+">";t.on("click",function(){o.noBackToTopLinks||(window.location.hash=this.id)}).addClass("clickable-header").each(function(n,t){if(h=l(t),o.noBackToTopLinks||h!==c||e(t).addClass("top-level-header").after('<i class="icon-arrow-up back-to-top"> </i>'),h===r)d+="<li><a href='#"+t.id+"'>"+t.innerHTML+"</a>";else if(h<=r){for(i=h;i<r;i++)d+="</li></"+o.listType+">";d+="<li><a href='#"+t.id+"'>"+t.innerHTML+"</a>"}else if(h>r){for(i=h;i>r;i--)d+="<"+o.listType+"><li>";d+="<a href='#"+t.id+"'>"+t.innerHTML+"</a>"}r=h}),d+="</"+o.listType+">",o.noBackToTopLinks||e(document).on("click",".back-to-top",function(){e(window).scrollTop(0),window.location.hash=""}),a[o.showEffect]()}}}(jQuery);