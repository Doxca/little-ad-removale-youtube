// ==UserScript==
// @name         youtube ad remove
// @version      0.1
// @description  remove ads on main page (not in video :/)
// @author       Doxca
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==


setInterval(function (){document.querySelectorAll("ytd-display-ad-renderer").forEach(i=>i.parentElement.parentElement.remove())},1);
