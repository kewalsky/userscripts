// ==UserScript==
// @name SearchRedirect
// @namespace github.com/kewalsky/userscripts
// @version 2020-08-07a
// @include http://*.bing.com/search?*
// @include https://*.bing.com/search?*
// @updateURL https://raw.githubusercontent.com/kewalsky/userscripts/master/SearchRedirect.user.js
// @downloadURL https://raw.githubusercontent.com/kewalsky/userscripts/master/SearchRedirect.user.js
// @run-at document-start
// @grant none
// ==/UserScript==
var SearchURL = "https://google.com/search?"+document.URL.match(/q\=[^&]*/);
if (SearchURL != document.URL) location.replace(SearchURL);
