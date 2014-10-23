// ==UserScript==
// @name         Netsuite 2014.2 Style fixer
// @author       Rick Goodrow
// @homepage     https://github.com/Zxurian/netsuite-style
// @description  Userscript for fixing Netsuite 2014.2 style fixing.
// @version      0.2.2
// @namespace    https://netsuite.com
// @run-at       document-start
// @resource     netsuiteCSS https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.css?0.2.2
// @match        https://*.netsuite.com/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @updateURL    https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// @downloadURL  https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// ==/UserScript==

GM_addStyle(GM_getResourceText('netsuiteCSS'));

jQuery('#addressbookaddress_helper_popup').click(function() {
  console.log('foo');
});
