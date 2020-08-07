// ==UserScript==
// @name  SearchRedirect
// @namespace github.com/kewalsky/userscript
// @version 2020-08-07
// @author  Various
// @description greasyfork.org/en/scripts/11308-bing-to-google
// @include http://*.bing.com/search?*
// @include https://*.bing.com/search?*
// @updateURL https://example.com
// @downloadURL https://example.com
// @run-at  document-start
// @grant none
// ==/UserScript==

var SearchURL = "https://google.com/search?"+document.URL.match(/q\=[^&]*/);
if (SearchURL != document.URL) location.replace(SearchURL);
