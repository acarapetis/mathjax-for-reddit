// ==UserScript==
// @name       MathJax for Reddit
// @namespace  
// @author     /u/amdpox
// @version    0.5
// @description Enables MathJax on reddit for the TeXtheWorld delimiters [; ... ;].
// @match      *://*.reddit.com/*
// @copyright
// ==/UserScript==
if (window.MathJax === undefined) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML";
    var config = 'MathJax.Hub.Config({ ' + 'extensions: ["tex2jax.js"], ' + 'tex2jax: { skipTags: ["script","noscript","style","textarea"],inlineMath: [ ["[;", ";]"] ], displayMath: [["[(;",";)]"]], processEscapes: true }, ' + 'jax: ["input/TeX", "output/HTML-CSS"] ' + ' }); ' + 'MathJax.Hub.Startup.onload(); ';
    if (window.opera) {
        script.innerHTML = config;
    } else {
        script.text = config;
    }
    document.getElementsByTagName("head")[0].appendChild(script);
    var doMathJax = function () {
        window.setTimeout(doMathJax, 1000);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        var maths = document.getElementsByClassName("MathJax");
        for (var i = 0; i < maths.length; i++) {
            var node = maths[i].parentElement;
            node.style.border = 'none';
            node.style.background = 'none';
        }
    };
    doMathJax();
} else {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
