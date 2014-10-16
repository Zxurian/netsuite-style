// ==UserScript==
// @name         Netsuite 2014.2 Style fixer
// @namespace    https://netsuite.com
// @version      0.1.9
// @resource     netsuiteCSS https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.css?0.1.9
// @description  Userscript for fixing Netsuite 2014.2 style fixing.
// @author       Rick Goodrow
// @homepage     https://github.com/Zxurian/netsuite-style
// @match        https://*.netsuite.com/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @updateURL    https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// @downloadURL  https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// ==/UserScript==

GM_addStyle(GM_getResourceText('netsuiteCSS'));
