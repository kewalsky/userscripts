// ==UserScript==
// @name Search Redirect B2G
// @namespace github.com/kewalsky/userscripts
// @version 2020-08-07-005
// @author Various
// @description Redirects Bing searches to Google
// @include http://*.bing.com/search?*
// @include https://*.bing.com/search?*
// @updateURL https://raw.githubusercontent.com/kewalsky/userscripts/master/SearchRedirect_B2G.user.js
// @downloadURL https://raw.githubusercontent.com/kewalsky/userscripts/master/SearchRedirect_B2G.user.js
// @run-at document-start
// @grant none
// ==/UserScript==

// Orginal code from greasyfork.org/en/scripts/11308-bing-to-google

var SearchURL = "https://google.com/search?"+document.URL.match(/q\=[^&]*/);
if (SearchURL != document.URL) location.replace(SearchURL);
