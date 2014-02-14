---
layout: post
title: Simplest, No-plugin jQuery Modals
excerpt: "<p>Your bandwidth means nothing to me... or, why I'm being lazy with image loading</p>"
---

Simply put, I am lazy, and your bandwidth means nothing to me.

In all seriousness though, I don't care to fiddle around with 
maintaining multiple-sized copies of the same image on this site for me 
projects; with that in mind I use the same full-size images for 
thumbnails. The downside of this, of course, is that it dramatically 
increases page loading time. If I decide later on to update this site 
with actual thumbnail versions for speed, this code can easily be 
updated to use some data-* element attribute for the full-size image 
link.

Anyways, here's the code to make a quick &amp; dirty modal preview 
window for images that have been constrained by their width or height 
attribute:

{% highlight javascript %}
// Creates 1:1 modal displays for constrained images, click-to-close
$("img[height], img[width]").css({
  "cursor": "pointer", 
}).prop('title', 'Click to enlarge').click(function(){
  var modal = $('<div />', {
    'css': {
      'backgroundColor': 'rgba(0, 0, 0, 0.95)',
      'backgroundImage': 'url(' + $(this).prop('src') + ')', 
      'backgroundPosition': 'center', 
      'backgroundRepeat': 'no-repeat', 
      'color': 'rgba(255, 255, 255, 0.45)', 
      'fontSize': '2.0em', 
      'fontWeight': 'bold', 
      'height': $(window).height(), 
      'left': '0px', 
      'position': 'fixed', 
      'textShadow': '2px 1px rgba(0,0,0, 0.95), -2px -1px rgba(0,0,0, 0.95)', 
      'top': '0px', 
      'width': $(window).width(), 
      'zIndex': 9999999, 
    }, 
    'click': function() { $(this).remove(); }, 
  }).prop('title', 'Click anywhere to close').html(
    'Click anywhere to close'
  );
  $('body').prepend(modal);
});
{% endhighlight %}

And here's the example:

<img src="{{ site.url }}{{ site.images }}abstract-flower_960px.png" width="480" alt="" />
