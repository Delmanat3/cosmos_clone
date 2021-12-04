!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 2));
})([
  function (e, t, r) {},
  function (e, t, r) {},
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = function (e) {
        0 == e
          ? ((i.inputSearch.value = ""),
            (i.errorPrint.style.display = "block"),
            (i.errorPrint.textContent = "Select a search category"),
            (i.drinkList.textContent = ""),
            i.inputSearch.blur())
          : 1 == e
          ? ((i.errorPrint.style.display = "none"),
            (i.drinkList.textContent = ""),
            c(i.inputSearch.value),
            i.inputSearch.blur(),
            (i.inputSearch.value = ""))
          : 2 == e &&
            ((i.errorPrint.style.display = "none"),
            (i.drinkList.textContent = ""),
            u(i.inputSearch.value),
            i.inputSearch.blur(),
            (i.inputSearch.value = ""));
      },
      i = {
        counterElements: 0,
        inputSearch: document.querySelector(".search-drink"),
        buttonSearch: document.querySelector(".search-button"),
        drinkList: document.querySelector(".list-of-drinks"),
        errorPrint: document.querySelector(".error-handler"),
        searchEngine: document.querySelector(".select-search-engine"),
      };
    function s(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++)
              r[t] = e[t];
            return r;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function a(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    i.inputSearch.addEventListener("keypress", function (e) {
      (i.counterElements = 0),
        13 == e.keyCode &&
          (i.inputSearch.value.replace(/\s/g, "").length
            ? n(i.searchEngine.options.selectedIndex)
            : ((i.errorPrint.style.display = "block"),
              (i.errorPrint.textContent =
                "String only contains whitespace (ie. spaces, tabs or line breaks)"),
              (i.inputSearch.value = "")));
    }),
      i.buttonSearch.addEventListener("click", function () {
        (i.counterElements = 0),
          i.inputSearch.value.replace(/\s/g, "").length
            ? n(i.searchEngine.options.selectedIndex)
            : ((i.errorPrint.style.display = "block"),
              (i.errorPrint.textContent =
                "String only contains whitespace (ie. spaces, tabs or line breaks)"),
              (i.inputSearch.value = ""));
      }),
      i.inputSearch.addEventListener("click", function () {
        this.placeholder = "";
      }),
      i.inputSearch.addEventListener("blur", function () {
        this.placeholder = "Example: gin";
      });
    var o = (function () {
      function e(t, r, n, i, a, o) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.name = t),
          (this.type = r),
          (this.ingredients = s(a)),
          (this.measures = s(o)),
          (this.instructions = n),
          (this.image = i);
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "cleanArrFromSpace",
            value: function (e) {
              var t = e.filter(function (e) {
                return e;
              });
              return (t = t.filter(function (e) {
                return /\S/.test(e);
              }));
            },
          },
          {
            key: "printDrink",
            value: function () {
              var e = this,
                t = document.createElement("div");
              t.classList.add("drink");
              var r = document.createElement("h1");
              r.classList.add("drink-title");
              var n = document.createElement("span");
              n.classList.add("span-title"),
                (n.textContent = "".concat(++i.counterElements, ". ")),
                (r.textContent = this.name);
              var s = document.createElement("div");
              s.classList.add("drink-wrapper");
              var a = document.createElement("div");
              a.classList.add("col-left");
              var o = document.createElement("img");
              o.classList.add("drink-image"), (o.src = this.image);
              var c = document.createElement("div");
              c.classList.add("col-right");
              var d = document.createElement("div");
              d.classList.add("drink-instruction");
              var u = document.createElement("p");
              u.classList.add("drink-type"), (u.textContent = "Type: ");
              var l = document.createElement("span");
              l.classList.add("drink-span-type"),
                (l.textContent = this.type),
                "Non alcoholic" == l.textContent
                  ? (l.style.color = "green")
                  : (l.style.color = "#cc0000");
              var p = document.createElement("p");
              p.classList.add("drink-desc"),
                (p.textContent = this.instructions);
              var h = document.createElement("div");
              h.classList.add("drink-details");
              var f = document.createElement("ul");
              f.classList.add("ingredients");
              var m = this.cleanArrFromSpace(this.ingredients);
              m = m.filter(function (e, t) {
                return m.indexOf(e) == t;
              });
              var g = this.cleanArrFromSpace(this.measures);
              m.forEach(function (t, r) {
                var n = document.createElement("li"),
                  i = document.createElement("p");
                n.classList.add("ingredient"),
                  (n.textContent = t),
                  f.appendChild(n),
                  i.classList.add("measure"),
                  (i.innerHTML = "".concat(null != g[r] ? g[r] : "&nbsp;")),
                  n.appendChild(i),
                  e.makeIngredientIcon(t, n);
              }),
                i.drinkList.appendChild(t),
                r.prepend(n),
                t.appendChild(r),
                t.appendChild(s),
                s.appendChild(a),
                a.appendChild(o),
                s.appendChild(c),
                c.appendChild(d),
                d.appendChild(u),
                u.appendChild(l),
                d.appendChild(p),
                c.appendChild(h),
                h.appendChild(f);
            },
          },
          {
            key: "makeIngredientIcon",
            value: function (e, t) {
              var r = document.createElement("img"),
                n = e.split(/[ ]+/).join("%20");
              r.setAttribute(
                "src",
                "https://www.thecocktaildb.com/images/ingredients/".concat(
                  n,
                  "-Medium.png"
                )
              ),
                r.setAttribute("width", "150px"),
                t.appendChild(r);
            },
          },
        ]) && a(t.prototype, r),
        n && a(t, n),
        e
      );
    })();
    r(0), r(1);
    r.d(t, "getDrinksByIngredients", function () {
      return c;
    }),
      r.d(t, "getDrinksByIngredientsFromArray", function () {
        return d;
      }),
      r.d(t, "getDrinkByName", function () {
        return u;
      }),
      (function () {
        function e() {
          document.documentElement.scrollTop > 0 &&
            (window.scrollBy(0, -500), setTimeout(e, 1));
        }
        var t = (function () {
          var e = document.createElement("button");
          return (
            e.classList.add("back", "hidden"), document.body.appendChild(e), e
          );
        })();
        t.addEventListener(
          "click",
          function (t) {
            t.stopPropagation(), e();
          },
          !1
        ),
          document.addEventListener(
            "scroll",
            function () {
              document.documentElement.scrollTop > 900
                ? t.classList.remove("hidden")
                : t.classList.add("hidden");
            },
            !1
          );
      })();
    var c = function (e) {
        return fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(e)
        )
          .then(function (e) {
            if (e.ok) return e.json();
            throw new Error("Something wrong with server");
          })
          .then(function (e) {
            var t = [];
            (i.counter = 0),
              e.drinks.forEach(function (e) {
                t.push(e.strDrink);
              }),
              d(t),
              (i.inputSearch.value = "");
          })
          .catch(function (e) {
            "SyntaxError: Unexpected end of JSON input" == e
              ? ((i.errorPrint.style.display = "block"),
                (i.errorPrint.textContent =
                  "Enter the correct ingredient/drink name"))
              : ((i.errorPrint.style.display = "block"),
                (i.errorPrint.textContent = e));
          });
      },
      d = function (e) {
        e.forEach(function (e) {
          return fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(
              e
            )
          )
            .then(function (e) {
              if (e.ok) return e.json();
              throw new Error("Something went wrong");
            })
            .then(function (e) {
              e.drinks.forEach(function (e) {
                var t = e.strDrink,
                  r = e.strAlcoholic,
                  n = e.strInstructions,
                  i = e.strDrinkThumb,
                  s = new Array(
                    e.strIngredient1,
                    e.strIngredient2,
                    e.strIngredient3,
                    e.strIngredient4,
                    e.strIngredient5,
                    e.strIngredient6,
                    e.strIngredient7,
                    e.strIngredient7,
                    e.strIngredient8,
                    e.strIngredient9,
                    e.strIngredient10,
                    e.strIngredient11,
                    e.strIngredient12,
                    e.strIngredient13,
                    e.strIngredient14,
                    e.strIngredient15
                  ),
                  a = new Array(
                    e.strMeasure1,
                    e.strMeasure2,
                    e.strMeasure3,
                    e.strMeasure4,
                    e.strMeasure5,
                    e.strMeasure6,
                    e.strMeasure7,
                    e.strMeasure7,
                    e.strMeasure8,
                    e.strMeasure9,
                    e.strMeasure10,
                    e.strMeasure11,
                    e.strMeasure12,
                    e.strMeasure13,
                    e.strMeasure14,
                    e.strMeasure15
                  );
                new o(t, r, n, i, s, a).printDrink();
              });
            });
        });
      },
      u = function (e) {
        var t = e.split(" ").join("%");
        return fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t)
        )
          .then(function (e) {
            if (e.ok) return e.json();
            throw new Error("Something went wrong");
          })
          .then(function (e) {
            e.drinks.forEach(function (e) {
              var t = e.strDrink,
                r = e.strAlcoholic,
                n = e.strInstructions,
                i = e.strDrinkThumb,
                s = new Array(
                  e.strIngredient1,
                  e.strIngredient2,
                  e.strIngredient3,
                  e.strIngredient4,
                  e.strIngredient5,
                  e.strIngredient6,
                  e.strIngredient7,
                  e.strIngredient7,
                  e.strIngredient8,
                  e.strIngredient9,
                  e.strIngredient10,
                  e.strIngredient11,
                  e.strIngredient12,
                  e.strIngredient13,
                  e.strIngredient14,
                  e.strIngredient15
                ),
                a = new Array(
                  e.strMeasure1,
                  e.strMeasure2,
                  e.strMeasure3,
                  e.strMeasure4,
                  e.strMeasure5,
                  e.strMeasure6,
                  e.strMeasure7,
                  e.strMeasure7,
                  e.strMeasure8,
                  e.strMeasure9,
                  e.strMeasure10,
                  e.strMeasure11,
                  e.strMeasure12,
                  e.strMeasure13,
                  e.strMeasure14,
                  e.strMeasure15
                );
              new o(t, r, n, i, s, a).printDrink();
            });
          })
          .catch(function (e) {
            "SyntaxError: Unexpected end of JSON input" == e ||
            "TypeError: Cannot read property 'forEach' of null" == e
              ? ((i.errorPrint.style.display = "block"),
                (i.errorPrint.textContent =
                  "Enter the correct ingredient/drink name"))
              : ((i.errorPrint.style.display = "block"),
                (i.errorPrint.textContent = e));
          });
      };
  },
]);
