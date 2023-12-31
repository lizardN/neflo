/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-input-inputtypes-localstorage-postmessage-sessionstorage-touch-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-cors-css_overflow_scrolling-css_remunit-css_scrollbars-es5_strictmode-event_deviceorientation_motion-file_api-forms_fileinput-forms_formattribute-file_filesystem-forms_placeholder-forms_speechinput-forms_validation-fullscreen_api-ie8compat-json
 */
;
window.Modernizr = function(a, b, c) {
        function A(a) {
            i.cssText = a
        }

        function B(a, b) {
            return A(m.join(a + ";") + (b || ""))
        }

        function C(a, b) {
            return typeof a === b
        }

        function D(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function E(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!D(e, "-") && i[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function F(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function G(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
        }

        function H() {
            e.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) s[c[d]] = c[d] in j;
                return s.list && (s.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), s
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
                for (var d = 0, e, g, h, i = a.length; d < i; d++) j.setAttribute("type", g = a[d]), e = j.type !== "text", e && (j.value = k, j.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(g) && j.style.WebkitAppearance !== c ? (f.appendChild(j), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(j, null).WebkitAppearance !== "textfield" && j.offsetHeight !== 0, f.removeChild(j)) : /^(search|tel)$/.test(g) || (/^(url|email)$/.test(g) ? e = j.checkValidity && j.checkValidity() === !1 : e = j.value != k)), r[a[d]] = !!e;
                return r
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d = "2.8.3",
            e = {},
            f = b.documentElement,
            g = "modernizr",
            h = b.createElement(g),
            i = h.style,
            j = b.createElement("input"),
            k = ":)",
            l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var h, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : g + (d + 1), l.appendChild(j);
                return h = ["&#173;", '<style id="s', g, '">', a, "</style>"].join(""), l.id = g, (m ? l : n).innerHTML += h, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = f.style.overflow, f.style.overflow = "hidden", f.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), f.style.overflow = k), !!i
            },
            x = function() {
                function d(d, e) {
                    e = e || b.createElement(a[d] || "div"), d = "on" + d;
                    var f = d in e;
                    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = C(e[d], "function"), C(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                }
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return d
            }(),
            y = {}.hasOwnProperty,
            z;
        !C(y, "undefined") && !C(y.call, "undefined") ? z = function(a, b) {
            return y.call(a, b)
        } : z = function(a, b) {
            return b in a && C(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.flexbox = function() {
            return G("flexWrap")
        }, q.flexboxlegacy = function() {
            return G("boxDirection")
        }, q.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, q.postmessage = function() {
            return !!a.postMessage
        }, q.hashchange = function() {
            return x("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, q.history = function() {
            return !!a.history && !!history.pushState
        }, q.rgba = function() {
            return A("background-color:rgba(150,255,150,.5)"), D(i.backgroundColor, "rgba")
        }, q.hsla = function() {
            return A("background-color:hsla(120,40%,100%,.5)"), D(i.backgroundColor, "rgba") || D(i.backgroundColor, "hsla")
        }, q.multiplebgs = function() {
            return A("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(i.background)
        }, q.backgroundsize = function() {
            return G("backgroundSize")
        }, q.borderimage = function() {
            return G("borderImage")
        }, q.borderradius = function() {
            return G("borderRadius")
        }, q.boxshadow = function() {
            return G("boxShadow")
        }, q.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, q.opacity = function() {
            return B("opacity:.55"), /^0.55$/.test(i.opacity)
        }, q.cssanimations = function() {
            return G("animationName")
        }, q.csscolumns = function() {
            return G("columnCount")
        }, q.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return A((a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(0, -a.length)), D(i.backgroundImage, "gradient")
        }, q.cssreflections = function() {
            return G("boxReflect")
        }, q.csstransforms = function() {
            return !!G("transform")
        }, q.csstransforms3d = function() {
            var a = !!G("perspective");
            return a && "webkitPerspective" in f.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, q.csstransitions = function() {
            return G("transition")
        }, q.fontface = function() {
            var a;
            return w('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, q.generatedcontent = function() {
            var a;
            return w(["#", g, "{font:0/0 a}#", g, ':after{content:"', k, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, q.localstorage = function() {
            try {
                return localStorage.setItem(g, g), localStorage.removeItem(g), !0
            } catch (a) {
                return !1
            }
        }, q.sessionstorage = function() {
            try {
                return sessionStorage.setItem(g, g), sessionStorage.removeItem(g), !0
            } catch (a) {
                return !1
            }
        }, q.applicationcache = function() {
            return !!a.applicationCache
        };
        for (var I in q) z(q, I) && (v = I.toLowerCase(), e[v] = q[I](), t.push((e[v] ? "" : "no-") + v));
        return e.input || H(), e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) z(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, A(""), h = j = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.hasEvent = x, e.testProp = function(a) {
            return E([a])
        }, e.testAllProps = G, e.testStyles = w, e.prefixed = function(a, b, c) {
            return b ? G(a, b, c) : G(a, "pfx")
        }, e
    }(this, this.document), Modernizr.addTest("cors", !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest)), Modernizr.addTest("overflowscrolling", function() {
        return Modernizr.testAllProps("overflowScrolling")
    }), Modernizr.addTest("cssremunit", function() {
        var a = document.createElement("div");
        try {
            a.style.fontSize = "3rem"
        } catch (b) {}
        return /rem/.test(a.style.fontSize)
    }), Modernizr.addTest("cssscrollbar", function() {
        var a, b = "#modernizr{overflow: scroll; width: 40px }#" + Modernizr._prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}";
        return Modernizr.testStyles(b, function(b) {
            a = "scrollWidth" in b && b.scrollWidth == 40
        }), a
    }), Modernizr.addTest("strictmode", function() {
        return function() {
            return "use strict", !this
        }()
    }), Modernizr.addTest("devicemotion", "DeviceMotionEvent" in window), Modernizr.addTest("deviceorientation", "DeviceOrientationEvent" in window), Modernizr.addTest("filereader", function() {
        return !!(window.File && window.FileList && window.FileReader)
    }), Modernizr.addTest("fileinput", function() {
        var a = document.createElement("input");
        return a.type = "file", !a.disabled
    }), Modernizr.addTest("formattribute", function() {
        var a = document.createElement("form"),
            b = document.createElement("input"),
            c = document.createElement("div"),
            d = "formtest" + (new Date).getTime(),
            e, f = !1;
        return a.id = d, document.createAttribute && (e = document.createAttribute("form"), e.nodeValue = d, b.setAttributeNode(e), c.appendChild(a), c.appendChild(b), document.documentElement.appendChild(c), f = a.elements.length === 1 && b.form == a, c.parentNode.removeChild(c)), f
    }), Modernizr.addTest("filesystem", !!Modernizr.prefixed("requestFileSystem", window)), Modernizr.addTest("placeholder", function() {
        return "placeholder" in (Modernizr.input || document.createElement("input")) && "placeholder" in (Modernizr.textarea || document.createElement("textarea"))
    }), Modernizr.addTest("speechinput", function() {
        var a = document.createElement("input");
        return "speech" in a || "onwebkitspeechchange" in a
    }),
    function(a, b) {
        b.formvalidationapi = !1, b.formvalidationmessage = !1, b.addTest("formvalidation", function() {
            var c = a.createElement("form");
            if ("checkValidity" in c && "addEventListener" in c) {
                if ("reportValidity" in c) return !0;
                var d = !1,
                    e;
                return b.formvalidationapi = !0, c.addEventListener("submit", function(a) {
                    window.opera || a.preventDefault(), a.stopPropagation()
                }, !1), c.innerHTML = '<input name="modTest" required><button></button>', b.testStyles("#modernizr form{position:absolute;top:-99999em}", function(a) {
                    a.appendChild(c), e = c.getElementsByTagName("input")[0], e.addEventListener("invalid", function(a) {
                        d = !0, a.preventDefault(), a.stopPropagation()
                    }, !1), b.formvalidationmessage = !!e.validationMessage, c.getElementsByTagName("button")[0].click()
                }), d
            }
            return !1
        })
    }(document, window.Modernizr), Modernizr.addTest("fullscreen", function() {
        for (var a = 0; a < Modernizr._domPrefixes.length; a++)
            if (document[Modernizr._domPrefixes[a].toLowerCase() + "CancelFullScreen"]) return !0;
        return !!document.cancelFullScreen || !1
    }), Modernizr.addTest("ie8compat", function() {
        return !window.addEventListener && document.documentMode && document.documentMode === 7
    }), Modernizr.addTest("json", !!window.JSON && !!JSON.parse);