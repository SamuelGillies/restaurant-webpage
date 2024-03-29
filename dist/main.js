(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => h });
        var i = n(81),
          r = n.n(i),
          a = n(645),
          d = n.n(a),
          o = n(667),
          c = n.n(o),
          s = new URL(n(857), n.b),
          l = new URL(n(246), n.b),
          p = d()(r()),
          u = c()(s),
          m = c()(l);
        p.push([
          e.id,
          ":root {\n    --orange: rgb(255, 106, 0); \n    --white: rgb(255, 255, 255); \n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" +
            u +
            ");\n  }\n\nbody {\n    background-color: black; \n    color: var(--white); \n    font-family: 'Poppins', sans-serif;\n}\n\nh1, h3 {\n    color: var(--orange); \n    text-align: center;\n}\n\np, li {\n    color: var(--white); \n}\n\nli {\n    list-style-type: none;\n    text-align: center;\n}\n\n/*HEADER*/\n\n#header--main {\n    font-size: 4rem;\n    margin: 0;\n}\n\n#header--sub {\n    font-size: 1.5rem; \n    margin: 0;\n}\n\n#header--nav {\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    gap: 30px; \n    padding-bottom: 2rem;\n}\n\n/*ABOUT*/\n\n#about--main {\n    font-size: 1.5rem; \n}\n\n#about--infoblock {\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n#about--image {\n    height: 50vh;\n    width: 50vh; \n    object-fit: cover\n}\n\n#about--infoblock > p {\n    font-size: medium;\n    width: 50vh;\n}\n\n/*MENU*/\n\n#menu--container {\n    display: grid; \n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n\n.menu--item {\n    background-image: url(" +
            m +
            ");\n    border: 2px solid var(--white); \n    border-radius: 8px; \n    width: 30vw; \n    height: 40vh;\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2%; \n    text-align: center;\n    overflow: auto; \n}\n\n/*CONTACT*/\n\n#contact--details {\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#contact--details > p {\n    margin: 0;\n}\n",
          "",
        ]);
        const h = p;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  i = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  i &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  i && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, i, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var d = {};
              if (i)
                for (var o = 0; o < this.length; o++) {
                  var c = this[o][0];
                  null != c && (d[c] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (i && d[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, i = 0; i < t.length; i++)
            if (t[i].identifier === e) {
              n = i;
              break;
            }
          return n;
        }
        function i(e, i) {
          for (var a = {}, d = [], o = 0; o < e.length; o++) {
            var c = e[o],
              s = i.base ? c[0] + i.base : c[0],
              l = a[s] || 0,
              p = "".concat(s, " ").concat(l);
            a[s] = l + 1;
            var u = n(p),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(m);
            else {
              var h = r(m, i);
              (i.byIndex = o),
                t.splice(o, 0, { identifier: p, updater: h, references: 1 });
            }
            d.push(p);
          }
          return d;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = i((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var d = 0; d < a.length; d++) {
              var o = n(a[d]);
              t[o].references--;
            }
            for (var c = i(e, r), s = 0; s < a.length; s++) {
              var l = n(a[s]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var i = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var i = "";
                n.supports && (i += "@supports (".concat(n.supports, ") {")),
                  n.media && (i += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (i += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (i += n.css),
                  r && (i += "}"),
                  n.media && (i += "}"),
                  n.supports && (i += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(i, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      857: (e, t, n) => {
        e.exports = n.p + "35d26b781dc5fda684cc.ttf";
      },
      246: (e, t, n) => {
        e.exports = n.p + "fd4e654375f36fe069c5.png";
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var a = (t[i] = { id: i, exports: {} });
    return e[i](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var i = t.getElementsByTagName("script");
        i.length && (e = i[i.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var e = n(246);
      function t() {
        const t = document.getElementById("content"),
          n = document.createElement("section");
        t.appendChild(n), n.setAttribute("id", "about");
        const i = document.createElement("div");
        n.appendChild(i), i.setAttribute("id", "about--content");
        const r = document.createElement("h1");
        i.appendChild(r),
          r.setAttribute("id", "about--main"),
          (r.innerHTML = "About");
        const a = document.createElement("div");
        i.appendChild(a), a.setAttribute("id", "about--infoblock");
        const d = new Image();
        (d.src = e), a.appendChild(d), d.setAttribute("id", "about--image");
        const o = document.createElement("p");
        return (
          a.appendChild(o),
          o.setAttribute("id", "about--text"),
          (o.innerHTML =
            "Huddersfield's most beloved place to eat. Chef Khalil takes pride in creating beautiful, fresh and tasty food for the people of this town. They have earned TripAdvisor’s Certificate of Excellence for being an outstanding business 5 years in a row. <br> <br> They have a wonderful staff team whose aim is to make every visit a perfect one."),
          t
        );
      }
      function i() {
        const e = document.getElementById("content");
        return (e.innerHTML = ""), e;
      }
      var r = n(379),
        a = n.n(r),
        d = n(795),
        o = n.n(d),
        c = n(569),
        s = n.n(c),
        l = n(565),
        p = n.n(l),
        u = n(216),
        m = n.n(u),
        h = n(589),
        f = n.n(h),
        b = n(426),
        v = {};
      (v.styleTagTransform = f()),
        (v.setAttributes = p()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = m()),
        a()(b.Z, v),
        b.Z && b.Z.locals && b.Z.locals,
        document.body.appendChild(
          (function () {
            const e = document.getElementById("header--root"),
              t = document.createElement("section");
            t.setAttribute("id", "header"), e.appendChild(t);
            const n = document.createElement("div");
            t.appendChild(n), n.setAttribute("id", "header--titles");
            const i = document.createElement("h1");
            n.appendChild(i),
              i.setAttribute("id", "header--main"),
              (i.innerHTML = "MED-ONE");
            const r = document.createElement("h1");
            n.appendChild(r),
              r.setAttribute("id", "header--sub"),
              (r.innerHTML = "Mediterranean Cuisine in West Yorkshire");
            const a = document.createElement("div");
            t.appendChild(a), a.setAttribute("id", "header--links");
            const d = document.createElement("ul");
            a.appendChild(d), d.setAttribute("id", "header--nav");
            const o = document.createElement("li");
            d.appendChild(o),
              o.setAttribute("id", "header--nav1"),
              (o.innerHTML = "About");
            const c = document.createElement("li");
            d.appendChild(c),
              c.setAttribute("id", "header--nav2"),
              (c.innerHTML = "Menu");
            const s = document.createElement("li");
            return (
              d.appendChild(s),
              s.setAttribute("id", "header--nav3"),
              (s.innerHTML = "Contact"),
              e
            );
          })()
        ),
        document.body.appendChild(t()),
        document
          .getElementById("header--nav1")
          .addEventListener("click", function () {
            document.body.appendChild(i()), document.body.appendChild(t());
          }),
        document
          .getElementById("header--nav2")
          .addEventListener("click", function () {
            document.body.appendChild(i()),
              document.body.appendChild(
                (function () {
                  const e = document.getElementById("content"),
                    t = document.createElement("section");
                  e.appendChild(t), t.setAttribute("id", "menu");
                  const n = document.createElement("div");
                  t.appendChild(n), n.setAttribute("id", "menu--block");
                  const i = document.createElement("h1");
                  n.appendChild(i), (i.innerHTML = "Menu");
                  const r = document.createElement("div");
                  n.appendChild(r), r.setAttribute("id", "menu--container");
                  const a = document.createElement("div"),
                    d = document.createElement("h3"),
                    o = document.createElement("p"),
                    c = document.createElement("p");
                  r.appendChild(a),
                    a.appendChild(d),
                    a.appendChild(o),
                    a.appendChild(c),
                    a.setAttribute("id", "menu--item1"),
                    a.setAttribute("class", "menu--item"),
                    (d.innerHTML = "Lamb Maqluba"),
                    (o.innerHTML =
                      "Rice cooked with grilled lamb and a selection of vegetables topped with fresh parsley and toasted pine nuts. Served with tzatziki dip, side salad and pickles."),
                    (c.innerHTML = "£17.95");
                  const s = document.createElement("div"),
                    l = document.createElement("h3"),
                    p = document.createElement("p"),
                    u = document.createElement("p");
                  r.appendChild(s),
                    s.appendChild(l),
                    s.appendChild(p),
                    s.appendChild(u),
                    s.setAttribute("id", "menu--item2"),
                    s.setAttribute("class", "menu--item"),
                    (l.innerHTML = "Butter Bean Stew"),
                    (p.innerHTML =
                      "Butter beans with diced beef, peppers and onions in tomato sauce. Served with rice, side salad and pickles."),
                    (u.innerHTML = "£14.95");
                  const m = document.createElement("div"),
                    h = document.createElement("h3"),
                    f = document.createElement("p"),
                    b = document.createElement("p");
                  r.appendChild(m),
                    m.appendChild(h),
                    m.appendChild(f),
                    m.appendChild(b),
                    m.setAttribute("id", "menu--item3"),
                    m.setAttribute("class", "menu--item"),
                    (h.innerHTML = "Med-One Goulash"),
                    (f.innerHTML =
                      "Diced beef, peppers, aubergine and courgette in tomato sauce, topped with bread. Served with rice, pickles and side salad."),
                    (b.innerHTML = "£15.95");
                  const v = document.createElement("div"),
                    g = document.createElement("h3"),
                    C = document.createElement("p"),
                    E = document.createElement("p");
                  r.appendChild(v),
                    v.appendChild(g),
                    v.appendChild(C),
                    v.appendChild(E),
                    v.setAttribute("id", "menu--item4"),
                    v.setAttribute("class", "menu--item"),
                    (g.innerHTML = "Chicken Shawarma"),
                    (C.innerHTML =
                      "Grilled chicken slices with pepper, onion and parsley. Served with rice, garlic sauce, side salad and pickles."),
                    (E.innerHTML = "£14.95");
                  const y = document.createElement("div"),
                    M = document.createElement("h3"),
                    T = document.createElement("p"),
                    w = document.createElement("p");
                  r.appendChild(y),
                    y.appendChild(M),
                    y.appendChild(T),
                    y.appendChild(w),
                    y.setAttribute("id", "menu--item5"),
                    y.setAttribute("class", "menu--item"),
                    (M.innerHTML = "Med-One Kufta"),
                    (T.innerHTML =
                      "Minced lamb patties with onion, pepper, tomato and parsley, topped with vegetable tomato sauce. Served with rice, pickles and side salad."),
                    (w.innerHTML = "£15.95");
                  const A = document.createElement("div"),
                    L = document.createElement("h3"),
                    H = document.createElement("p"),
                    x = document.createElement("p");
                  return (
                    r.appendChild(A),
                    A.appendChild(L),
                    A.appendChild(H),
                    A.appendChild(x),
                    A.setAttribute("id", "menu--item6"),
                    A.setAttribute("class", "menu--item"),
                    (L.innerHTML = "Med-One Moussaka"),
                    (H.innerHTML =
                      "Baked aubergine stuffed with minced lamb, onion, pepper, parsley and tomato. Topped with cheese and garlic sauce. Served with rice, pickles, side salad and tzaziki dip."),
                    (x.innerHTML = "£14.95"),
                    e
                  );
                })()
              );
          }),
        document
          .getElementById("header--nav3")
          .addEventListener("click", function () {
            document.body.appendChild(i()),
              document.body.appendChild(
                (function () {
                  const e = document.getElementById("content"),
                    t = document.createElement("section");
                  e.appendChild(t), t.setAttribute("id", "contact");
                  const n = document.createElement("h1");
                  t.appendChild(n), (n.innerHTML = "Contact");
                  const i = document.createElement("div");
                  t.appendChild(i), i.setAttribute("id", "contact--details");
                  const r = document.createElement("p");
                  i.appendChild(r),
                    (r.innerHTML = "10-12 Westgate, Huddersfield HD1 1NN, UK");
                  const a = document.createElement("p");
                  i.appendChild(a), (a.innerHTML = "med-one@hotmail.co.uk");
                  const d = document.createElement("p");
                  return i.appendChild(d), (d.innerHTML = "01484 511100"), e;
                })()
              );
          });
    })();
})();
