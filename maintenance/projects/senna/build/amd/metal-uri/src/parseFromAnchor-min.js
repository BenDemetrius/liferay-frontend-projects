define(["exports"],function(e){"use strict";function t(e){var t=document.createElement("a");if(t.href=e,":"===t.protocol||!/:/.test(t.href))throw new TypeError(e+" is not a valid URL");return{hash:t.hash,hostname:t.hostname,password:t.password,pathname:"/"===t.pathname[0]?t.pathname:"/"+t.pathname,port:t.port,protocol:t.protocol,search:t.search,username:t.username}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=t});