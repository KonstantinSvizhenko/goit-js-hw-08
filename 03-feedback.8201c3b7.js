function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function x(e){return l=e,f=setTimeout(S,t),c?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function S(){var e=v();if(j(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function h(e){return f=void 0,p&&i?b(e):(i=r=void 0,a)}function w(){var e=v(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(S,t),b(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input[type=email]")},x=b.form.elements,j=localStorage.getItem("feedback-form-state"),S={};if(b.form.addEventListener("submit",(function(e){e.preventDefault(),S.email=x.email.value,S.message=x.message.value,""===x.email.value||""===x.message.value?alert("Please fill up empty fields"):(console.log(S),b.form.reset(),localStorage.removeItem("feedback-form-state"))})),b.email.addEventListener("input",e(t)(h,500)),b.textarea.addEventListener("input",e(t)(h,500)),j){const e=JSON.parse(j);b.email.value=e.email,b.textarea.value=e.message}function h(e){S.email=x.email.value,S.message=x.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}
//# sourceMappingURL=03-feedback.8201c3b7.js.map
