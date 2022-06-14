// ==UserScript==
// @name         youtube ad remove
// @version      0.1
// @description  remove ads on main page (not in video :/)
// @author       Ender
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @namespace       https://github.com/Endxca/little-ad-removale-youtube
// @updateURL       https://github.com/Endxca/little-ad-removale-youtube/raw/main/YT_Ad_Remove.user.js
// @downloadURL     https://github.com/Endxca/little-ad-removale-youtube/raw/main/YT_Ad_Remove.user.js
// @supportURL      https://github.com/Endxca/little-ad-removale-youtube/issues
// @grant        none
// ==/UserScript==


setInterval(function (){document.querySelectorAll("ytd-display-ad-renderer").forEach(i=>i.parentElement.parentElement.remove())},1);
