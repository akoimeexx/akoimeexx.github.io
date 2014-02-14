---
layout: post
title: Search and Github.io
---

During the initial design of this github.io page, I wanted to provide an 
integrated search form that utilized Google Custom Search Engine, or 
equivalent from the indexing giant. I don't want to have to worry about 
implementing something myself, and their CSE utility should have been 
just what I needed to accomplish my goals.

*Guess what doesn't work on github.io?*

There is light at the end of the tunnel though; the helpful people at 
[Github.com](https://github.com/) pointed me in the direction of their 
[Developer Portal](http://developer.github.com/), which is also 
generated using Jekyll. The current workaround is to do some javascript 
kerjiggery (technical term, I promise), build an index to scan through, 
and return the URL that most likely represents what is being searched 
for.

You can find the details in their repository for the site in [search-index.json](https://github.com/github/developer.github.com/blob/master/static/search-index.json) 
and [documentation.js](https://github.com/github/developer.github.com/blob/master/static/shared/js/documentation.js), 
in the meanwhile, I'll be looking to see if there isn't a good way to do 
this automagically.
