---
layout: post
title: Installing Mate Desktop in CrunchBang
---

You want Gnome2 back, don't you? Well, good luck finding it in any updated 
repositories; gnome2 has been deprecated for some time now. But what if you're 
a curmudgeonly old geek that just wants his easy-to-use desktop environment 
back?

***Enter <a href="http://mate-desktop.org/" rel="external">Mate Desktop</a>, a fork of Gnome2.***

I dropped Ubuntu years ago when it became apparent the distribution was becoming 
more and more bloated. I have since been running various flavors of Debian; 
my standard workhorse distro is <a href="http://crunchbang.org/" rel="external" title="#! for short">CrunchBang</a>.
This documents the process of installing Mate Desktop in CrunchBang Waldorf.

<ol>
<li><h4>Open /etc/apt/sources.list in an editor&hellip;</h4>
<p>
{% highlight bash %}
sudo geany /etc/apt/sources.list
{% endhighlight %}
&hellip;and append the following to the bottom of the file:
{% highlight bash %}
# Debian Wheezy/CrunchBang Waldorf Mate Desktop repository
deb http://repo.mate-desktop.org/debian wheezy main
{% endhighlight %}
Save and close Geany.
</p>
</li>

<li><h4>Update your software repositories and install the mate-archive-keyring&hellip;</h4>
<p>
{% highlight bash %}
sudo apt-get update
sudo apt-get --yes --quiet --allow-unauthenticated install mate-archive-keyring 
{% endhighlight %}
&hellip;then update again and install the Mate Desktop, with extra packages.
{% highlight bash %}
sudo apt-get update
sudo apt-get install mate-desktop-environment-extra
{% endhighlight %}
Mate Desktop is now installed.
</p>
</li>

<li><h4>Open /etc/slim.conf in an editor&hellip;</h4>
<p>
{% highlight bash %}
sudo geany /etc/slim.conf
{% endhighlight %}
&hellip;and add Mate Desktop to the SLiM Desktop Environment rotation:
{% highlight bash %}
# sessions            openbox-session
sessions            openbox-session,mate-session
{% endhighlight %}
Save and close Geany.
</p>
</li>
<li><h4>Select your default session manager:</h4>
<p>
{% highlight bash %}
sudo update-alternatives --config x-session-manager
{% endhighlight %}
Rejoice, you're done! Restart and login for your new (old) desktop experience.
</p>
</li>
</ol>

<aside>Anyone that knows me understands my sentiments towards Gnome3, Unity, and the 
other "desktop improvements" that have rolled with Ubuntu. These "user-friendly" 
environments have proliferated throughout the distributions, though I have yet 
to hear one user say a good thing about them.</aside>
