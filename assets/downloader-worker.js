/*! wordcloud-app  2017-01-25 */
"use strict";self.callback=function(){var a=Array.prototype.slice.call(arguments);self.postMessage(a)},self.onmessage=function(a){var b=a.data;b+=b.indexOf("?")===-1?"?":"&",b+="callback=callback",self.importScripts(b)};