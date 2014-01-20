---
layout: post
title: First personal Jekyll Discovery
excerpt: "<p>So, I've slowly been working on the github.io template here. Today, I've broken down and installed ruby and jekyll onto my local development machines. As an aside, if you want to do the same in a Debian-based GNU/Linux distro, simply enter the following</p>"
---

So, I've slowly been working on the github.io template here. Today, I've broken 
down and installed ruby and jekyll onto my local development machines. As an 
aside, if you want to do the same in a Debian-based GNU/Linux distro, simply 
enter the following:
{% highlight bash %}
sudo apt-get install ruby ruby-dev
sudo gem install jekyll
{% endhighlight %}

Well, while working on the layouts and templates for my jekyll installation, 
I discovered (after much frustration with my stylesheet "not working") that I 
hadn't updated site.url in my \_config.yml file; it was still loading the old 
stylesheets located at <a href="http://akoimeexx.github.io/media/css/stylesheet.css" rel="external">http://akoimeexx.github.io/media/css/stylesheet.css</a>.
Obviously I needed to change over the site.url setting in my config, but I hate 
just replacing a value temporarily for development purposes.

Guess what? You can overload the settings:
{% highlight yaml %}
encoding: utf-8
paginate: 10
paginate_path: "/journal/page-:num"
permalink: /journal/:title
kramdown:
  input: GFM
safe: true
timezone: America/Detroit
url: http://akoimeexx.github.io
url: http://localhost:4000
{% endhighlight %}

I feel so smart.

<aside>(When writing markdown to be jekyll'ed, you will need to escape "_config.yml" 
when written in content with a backslash, or it borks the generating process 
with Jekyll since it thinks it's trying to _italicize_ something via markdown. 
Encapsulating it in quotes seems to prevent this.)</aside>
