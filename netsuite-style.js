// ==UserScript==
// @name         Netsuite 2014.2 Style fixer
// @namespace    https://netsuite.com
// @version      0.1.4
// @description  Userscript for fixing Netsuite 2014.2 style fixing.
// @author       Rick Goodrow
// @homepage     https://github.com/Zxurian/netsuite-style
// @match        https://*.netsuite.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// @downloadURL  https://raw.githubusercontent.com/Zxurian/netsuite-style/master/netsuite-style.js
// ==/UserScript==

GM_addStyle('
@media screen {
	.uir-list-header-td {
		padding: 1px 5px !important;
	}
	.uir-list-row-tr > td {
		font-size: 12px;
		padding: 1px 5px !important;
	}
}

.x-window-mc {
	padding: 10px;
}
.x-window-mc iframe {
	height: auto !important;
}

textarea:disabled {
	color: rgb(50, 50, 50) !important;
}

.uir-pagination-select ul {
	width: auto !important;
	overflow-x: auto !important;
}
');
