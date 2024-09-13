function d2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var yn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function pe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rv = { exports: {} },
  La = {},
  Av = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ei = Symbol.for("react.element"),
  p2 = Symbol.for("react.portal"),
  h2 = Symbol.for("react.fragment"),
  m2 = Symbol.for("react.strict_mode"),
  v2 = Symbol.for("react.profiler"),
  g2 = Symbol.for("react.provider"),
  y2 = Symbol.for("react.context"),
  w2 = Symbol.for("react.forward_ref"),
  S2 = Symbol.for("react.suspense"),
  b2 = Symbol.for("react.memo"),
  E2 = Symbol.for("react.lazy"),
  up = Symbol.iterator;
function C2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (up && e[up]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lv = Object.assign,
  Bv = {};
function fo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bv),
    (this.updater = n || jv);
}
fo.prototype.isReactComponent = {};
fo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dv() {}
Dv.prototype = fo.prototype;
function bf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bv),
    (this.updater = n || jv);
}
var Ef = (bf.prototype = new Dv());
Ef.constructor = bf;
Lv(Ef, fo.prototype);
Ef.isPureReactComponent = !0;
var cp = Array.isArray,
  Mv = Object.prototype.hasOwnProperty,
  Cf = { current: null },
  Fv = { key: !0, ref: !0, __self: !0, __source: !0 };
function zv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mv.call(t, r) && !Fv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ei,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Cf.current,
  };
}
function $2(e, t) {
  return {
    $$typeof: Ei,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $f(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ei;
}
function x2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fp = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? x2("" + e.key)
    : t.toString(36);
}
function _s(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ei:
          case p2:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Al(s, 0) : r),
      cp(o)
        ? ((n = ""),
          e != null && (n = e.replace(fp, "$&/") + "/"),
          _s(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          ($f(o) &&
            (o = $2(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), cp(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Al(i, a);
      s += _s(i, t, n, l, o);
    }
  else if (((l = C2(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Al(i, a++)), (s += _s(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Xi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    _s(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function k2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Is = { transition: null },
  O2 = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Is,
    ReactCurrentOwner: Cf,
  };
function Uv() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Xi,
  forEach: function (e, t, n) {
    Xi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$f(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = fo;
z.Fragment = h2;
z.Profiler = v2;
z.PureComponent = bf;
z.StrictMode = m2;
z.Suspense = S2;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O2;
z.act = Uv;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Lv({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Cf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mv.call(t, l) &&
        !Fv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ei, type: e.type, key: o, ref: i, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: y2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: g2, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = zv;
z.createFactory = function (e) {
  var t = zv.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: w2, render: e };
};
z.isValidElement = $f;
z.lazy = function (e) {
  return { $$typeof: E2, _payload: { _status: -1, _result: e }, _init: k2 };
};
z.memo = function (e, t) {
  return { $$typeof: b2, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Is.transition;
  Is.transition = {};
  try {
    e();
  } finally {
    Is.transition = t;
  }
};
z.unstable_act = Uv;
z.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
z.useId = function () {
  return Ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Ae.current.useRef(e);
};
z.useState = function (e) {
  return Ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Ae.current.useTransition();
};
z.version = "18.3.1";
Av.exports = z;
var w = Av.exports;
const V = pe(w),
  P2 = d2({ __proto__: null, default: V }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var T2 = w,
  _2 = Symbol.for("react.element"),
  I2 = Symbol.for("react.fragment"),
  N2 = Object.prototype.hasOwnProperty,
  R2 = T2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  A2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) N2.call(t, r) && !A2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: _2,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: R2.current,
  };
}
La.Fragment = I2;
La.jsx = Vv;
La.jsxs = Vv;
Rv.exports = La;
var N = Rv.exports,
  Hv = { exports: {} },
  rt = {},
  Wv = { exports: {} },
  Kv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var F = P.length;
    P.push(L);
    e: for (; 0 < F; ) {
      var R = (F - 1) >>> 1,
        D = P[R];
      if (0 < o(D, L)) (P[R] = L), (P[F] = D), (F = R);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      F = P.pop();
    if (F !== L) {
      P[0] = F;
      e: for (var R = 0, D = P.length, ye = D >>> 1; R < ye; ) {
        var Qe = 2 * (R + 1) - 1,
          Nt = P[Qe],
          qn = Qe + 1,
          Ji = P[qn];
        if (0 > o(Nt, F))
          qn < D && 0 > o(Ji, Nt)
            ? ((P[R] = Ji), (P[qn] = F), (R = qn))
            : ((P[R] = Nt), (P[Qe] = F), (R = Qe));
        else if (qn < D && 0 > o(Ji, F)) (P[R] = Ji), (P[qn] = F), (R = qn);
        else break e;
      }
    }
    return L;
  }
  function o(P, L) {
    var F = P.sortIndex - L.sortIndex;
    return F !== 0 ? F : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    g = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= P)
        r(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function b(P) {
    if (((y = !1), v(P), !g))
      if (n(l) !== null) (g = !0), G($);
      else {
        var L = n(u);
        L !== null && ut(b, L.startTime - P);
      }
  }
  function $(P, L) {
    (g = !1), y && ((y = !1), m(T), (T = -1)), (h = !0);
    var F = d;
    try {
      for (
        v(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (P && !ge()));

      ) {
        var R = f.callback;
        if (typeof R == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var D = R(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof D == "function" ? (f.callback = D) : f === n(l) && r(l),
            v(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ye = !0;
      else {
        var Qe = n(u);
        Qe !== null && ut(b, Qe.startTime - L), (ye = !1);
      }
      return ye;
    } finally {
      (f = null), (d = F), (h = !1);
    }
  }
  var C = !1,
    k = null,
    T = -1,
    M = 5,
    I = -1;
  function ge() {
    return !(e.unstable_now() - I < M);
  }
  function _t() {
    if (k !== null) {
      var P = e.unstable_now();
      I = P;
      var L = !0;
      try {
        L = k(!0, P);
      } finally {
        L ? It() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var It;
  if (typeof p == "function")
    It = function () {
      p(_t);
    };
  else if (typeof MessageChannel < "u") {
    var un = new MessageChannel(),
      B = un.port2;
    (un.port1.onmessage = _t),
      (It = function () {
        B.postMessage(null);
      });
  } else
    It = function () {
      E(_t, 0);
    };
  function G(P) {
    (k = P), C || ((C = !0), It());
  }
  function ut(P, L) {
    T = E(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || h || ((g = !0), G($));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var F = d;
      d = L;
      try {
        return P();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var F = d;
      d = P;
      try {
        return L();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, F) {
      var R = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? R + F : R))
          : (F = R),
        P)
      ) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return (
        (D = F + D),
        (P = {
          id: c++,
          callback: L,
          priorityLevel: P,
          startTime: F,
          expirationTime: D,
          sortIndex: -1,
        }),
        F > R
          ? ((P.sortIndex = F),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (y ? (m(T), (T = -1)) : (y = !0), ut(b, F - R)))
          : ((P.sortIndex = D), t(l, P), g || h || ((g = !0), G($))),
        P
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (P) {
      var L = d;
      return function () {
        var F = d;
        d = L;
        try {
          return P.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(Kv);
Wv.exports = Kv;
var j2 = Wv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L2 = w,
  tt = j2;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qv = new Set(),
  ei = {};
function mr(e, t) {
  Jr(e, t), Jr(e + "Capture", t);
}
function Jr(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) qv.add(t[e]);
}
var Xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yu = Object.prototype.hasOwnProperty,
  B2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dp = {},
  pp = {};
function D2(e) {
  return Yu.call(pp, e)
    ? !0
    : Yu.call(dp, e)
    ? !1
    : B2.test(e)
    ? (pp[e] = !0)
    : ((dp[e] = !0), !1);
}
function M2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function F2(e, t, n, r) {
  if (t === null || typeof t > "u" || M2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xf = /[\-:]([a-z])/g;
function kf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xf, kf);
    ke[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xf, kf);
    ke[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xf, kf);
  ke[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Of(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (F2(t, n, o, r) && (n = null),
    r || o === null
      ? D2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = L2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zi = Symbol.for("react.element"),
  Pr = Symbol.for("react.portal"),
  Tr = Symbol.for("react.fragment"),
  Pf = Symbol.for("react.strict_mode"),
  Ju = Symbol.for("react.profiler"),
  Gv = Symbol.for("react.provider"),
  Qv = Symbol.for("react.context"),
  Tf = Symbol.for("react.forward_ref"),
  Xu = Symbol.for("react.suspense"),
  Zu = Symbol.for("react.suspense_list"),
  _f = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Yv = Symbol.for("react.offscreen"),
  hp = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hp && e[hp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  jl;
function Lo(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var Ll = !1;
function Bl(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lo(e) : "";
}
function z2(e) {
  switch (e.tag) {
    case 5:
      return Lo(e.type);
    case 16:
      return Lo("Lazy");
    case 13:
      return Lo("Suspense");
    case 19:
      return Lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return "";
  }
}
function ec(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tr:
      return "Fragment";
    case Pr:
      return "Portal";
    case Ju:
      return "Profiler";
    case Pf:
      return "StrictMode";
    case Xu:
      return "Suspense";
    case Zu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qv:
        return (e.displayName || "Context") + ".Consumer";
      case Gv:
        return (e._context.displayName || "Context") + ".Provider";
      case Tf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _f:
        return (
          (t = e.displayName || null), t !== null ? t : ec(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return ec(e(t));
        } catch {}
    }
  return null;
}
function U2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ec(t);
    case 8:
      return t === Pf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function An(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Jv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function V2(e) {
  var t = Jv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function es(e) {
  e._valueTracker || (e._valueTracker = V2(e));
}
function Xv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ys(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tc(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = An(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zv(e, t) {
  (t = t.checked), t != null && Of(e, "checked", t, !1);
}
function nc(e, t) {
  Zv(e, t);
  var n = An(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rc(e, t.type, An(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rc(e, t, n) {
  (t !== "number" || Ys(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bo = Array.isArray;
function Vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + An(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function oc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Bo(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: An(n) };
}
function eg(e, t) {
  var n = An(t.value),
    r = An(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ic(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ts,
  ng = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ts = ts || document.createElement("div"),
          ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ts.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  H2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  H2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]);
  });
});
function rg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
    ? ("" + t).trim()
    : t + "px";
}
function og(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = rg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var W2 = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function sc(e, t) {
  if (t) {
    if (W2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function ac(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var lc = null;
function If(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uc = null,
  Hr = null,
  Wr = null;
function wp(e) {
  if ((e = xi(e))) {
    if (typeof uc != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = za(t)), uc(e.stateNode, e.type, t));
  }
}
function ig(e) {
  Hr ? (Wr ? Wr.push(e) : (Wr = [e])) : (Hr = e);
}
function sg() {
  if (Hr) {
    var e = Hr,
      t = Wr;
    if (((Wr = Hr = null), wp(e), t)) for (e = 0; e < t.length; e++) wp(t[e]);
  }
}
function ag(e, t) {
  return e(t);
}
function lg() {}
var Dl = !1;
function ug(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return ag(e, t, n);
  } finally {
    (Dl = !1), (Hr !== null || Wr !== null) && (lg(), sg());
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = za(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var cc = !1;
if (Xt)
  try {
    var Co = {};
    Object.defineProperty(Co, "passive", {
      get: function () {
        cc = !0;
      },
    }),
      window.addEventListener("test", Co, Co),
      window.removeEventListener("test", Co, Co);
  } catch {
    cc = !1;
  }
function K2(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ho = !1,
  Js = null,
  Xs = !1,
  fc = null,
  q2 = {
    onError: function (e) {
      (Ho = !0), (Js = e);
    },
  };
function G2(e, t, n, r, o, i, s, a, l) {
  (Ho = !1), (Js = null), K2.apply(q2, arguments);
}
function Q2(e, t, n, r, o, i, s, a, l) {
  if ((G2.apply(this, arguments), Ho)) {
    if (Ho) {
      var u = Js;
      (Ho = !1), (Js = null);
    } else throw Error(x(198));
    Xs || ((Xs = !0), (fc = u));
  }
}
function vr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Sp(e) {
  if (vr(e) !== e) throw Error(x(188));
}
function Y2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vr(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Sp(o), e;
        if (i === r) return Sp(o), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function fg(e) {
  return (e = Y2(e)), e !== null ? dg(e) : null;
}
function dg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pg = tt.unstable_scheduleCallback,
  bp = tt.unstable_cancelCallback,
  J2 = tt.unstable_shouldYield,
  X2 = tt.unstable_requestPaint,
  ie = tt.unstable_now,
  Z2 = tt.unstable_getCurrentPriorityLevel,
  Nf = tt.unstable_ImmediatePriority,
  hg = tt.unstable_UserBlockingPriority,
  Zs = tt.unstable_NormalPriority,
  eS = tt.unstable_LowPriority,
  mg = tt.unstable_IdlePriority,
  Ba = null,
  Dt = null;
function tS(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : oS,
  nS = Math.log,
  rS = Math.LN2;
function oS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nS(e) / rS) | 0)) | 0;
}
var ns = 64,
  rs = 4194304;
function Do(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ea(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Do(a)) : ((i &= s), i !== 0 && (r = Do(i)));
  } else (s = n & ~o), s !== 0 ? (r = Do(s)) : i !== 0 && (r = Do(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function iS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - xt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = iS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function dc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vg() {
  var e = ns;
  return (ns <<= 1), !(ns & 4194240) && (ns = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ci(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function aS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Rf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function gg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yg,
  Af,
  wg,
  Sg,
  bg,
  pc = !1,
  os = [],
  $n = null,
  xn = null,
  kn = null,
  ri = new Map(),
  oi = new Map(),
  hn = [],
  lS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ep(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $n = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oi.delete(t.pointerId);
  }
}
function $o(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = xi(t)), t !== null && Af(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function uS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ($n = $o($n, e, t, n, r, o)), !0;
    case "dragenter":
      return (xn = $o(xn, e, t, n, r, o)), !0;
    case "mouseover":
      return (kn = $o(kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ri.set(i, $o(ri.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), oi.set(i, $o(oi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Eg(e) {
  var t = Xn(e.target);
  if (t !== null) {
    var n = vr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cg(n)), t !== null)) {
          (e.blockedOn = t),
            bg(e.priority, function () {
              wg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ns(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lc = r), n.target.dispatchEvent(r), (lc = null);
    } else return (t = xi(n)), t !== null && Af(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cp(e, t, n) {
  Ns(e) && n.delete(t);
}
function cS() {
  (pc = !1),
    $n !== null && Ns($n) && ($n = null),
    xn !== null && Ns(xn) && (xn = null),
    kn !== null && Ns(kn) && (kn = null),
    ri.forEach(Cp),
    oi.forEach(Cp);
}
function xo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pc ||
      ((pc = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, cS)));
}
function ii(e) {
  function t(o) {
    return xo(o, e);
  }
  if (0 < os.length) {
    xo(os[0], e);
    for (var n = 1; n < os.length; n++) {
      var r = os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $n !== null && xo($n, e),
      xn !== null && xo(xn, e),
      kn !== null && xo(kn, e),
      ri.forEach(t),
      oi.forEach(t),
      n = 0;
    n < hn.length;
    n++
  )
    (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    Eg(n), n.blockedOn === null && hn.shift();
}
var Kr = on.ReactCurrentBatchConfig,
  ta = !0;
function fS(e, t, n, r) {
  var o = K,
    i = Kr.transition;
  Kr.transition = null;
  try {
    (K = 1), jf(e, t, n, r);
  } finally {
    (K = o), (Kr.transition = i);
  }
}
function dS(e, t, n, r) {
  var o = K,
    i = Kr.transition;
  Kr.transition = null;
  try {
    (K = 4), jf(e, t, n, r);
  } finally {
    (K = o), (Kr.transition = i);
  }
}
function jf(e, t, n, r) {
  if (ta) {
    var o = hc(e, t, n, r);
    if (o === null) Ql(e, t, r, na, n), Ep(e, r);
    else if (uS(o, e, t, n, r)) r.stopPropagation();
    else if ((Ep(e, r), t & 4 && -1 < lS.indexOf(e))) {
      for (; o !== null; ) {
        var i = xi(o);
        if (
          (i !== null && yg(i),
          (i = hc(e, t, n, r)),
          i === null && Ql(e, t, r, na, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var na = null;
function hc(e, t, n, r) {
  if (((na = null), (e = If(r)), (e = Xn(e)), e !== null))
    if (((t = vr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (na = e), null;
}
function Cg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Z2()) {
        case Nf:
          return 1;
        case hg:
          return 4;
        case Zs:
        case eS:
          return 16;
        case mg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  Lf = null,
  Rs = null;
function $g() {
  if (Rs) return Rs;
  var e,
    t = Lf,
    n = t.length,
    r,
    o = "value" in wn ? wn.value : wn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Rs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function As(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function is() {
  return !0;
}
function $p() {
  return !1;
}
function ot(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? is
        : $p),
      (this.isPropagationStopped = $p),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = is));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = is));
      },
      persist: function () {},
      isPersistent: is,
    }),
    t
  );
}
var po = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bf = ot(po),
  $i = ne({}, po, { view: 0, detail: 0 }),
  pS = ot($i),
  Fl,
  zl,
  ko,
  Da = ne({}, $i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Df,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ko &&
            (ko && e.type === "mousemove"
              ? ((Fl = e.screenX - ko.screenX), (zl = e.screenY - ko.screenY))
              : (zl = Fl = 0),
            (ko = e)),
          Fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  xp = ot(Da),
  hS = ne({}, Da, { dataTransfer: 0 }),
  mS = ot(hS),
  vS = ne({}, $i, { relatedTarget: 0 }),
  Ul = ot(vS),
  gS = ne({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yS = ot(gS),
  wS = ne({}, po, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  SS = ot(wS),
  bS = ne({}, po, { data: 0 }),
  kp = ot(bS),
  ES = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  CS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $S = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $S[e]) ? !!t[e] : !1;
}
function Df() {
  return xS;
}
var kS = ne({}, $i, {
    key: function (e) {
      if (e.key) {
        var t = ES[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = As(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? CS[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Df,
    charCode: function (e) {
      return e.type === "keypress" ? As(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? As(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  OS = ot(kS),
  PS = ne({}, Da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Op = ot(PS),
  TS = ne({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Df,
  }),
  _S = ot(TS),
  IS = ne({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  NS = ot(IS),
  RS = ne({}, Da, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  AS = ot(RS),
  jS = [9, 13, 27, 32],
  Mf = Xt && "CompositionEvent" in window,
  Wo = null;
Xt && "documentMode" in document && (Wo = document.documentMode);
var LS = Xt && "TextEvent" in window && !Wo,
  xg = Xt && (!Mf || (Wo && 8 < Wo && 11 >= Wo)),
  Pp = " ",
  Tp = !1;
function kg(e, t) {
  switch (e) {
    case "keyup":
      return jS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Og(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _r = !1;
function BS(e, t) {
  switch (e) {
    case "compositionend":
      return Og(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tp = !0), Pp);
    case "textInput":
      return (e = t.data), e === Pp && Tp ? null : e;
    default:
      return null;
  }
}
function DS(e, t) {
  if (_r)
    return e === "compositionend" || (!Mf && kg(e, t))
      ? ((e = $g()), (Rs = Lf = wn = null), (_r = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var MS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _p(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!MS[e.type] : t === "textarea";
}
function Pg(e, t, n, r) {
  ig(r),
    (t = ra(t, "onChange")),
    0 < t.length &&
      ((n = new Bf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ko = null,
  si = null;
function FS(e) {
  Mg(e, 0);
}
function Ma(e) {
  var t = Rr(e);
  if (Xv(t)) return e;
}
function zS(e, t) {
  if (e === "change") return t;
}
var Tg = !1;
if (Xt) {
  var Vl;
  if (Xt) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Ip = document.createElement("div");
      Ip.setAttribute("oninput", "return;"),
        (Hl = typeof Ip.oninput == "function");
    }
    Vl = Hl;
  } else Vl = !1;
  Tg = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Np() {
  Ko && (Ko.detachEvent("onpropertychange", _g), (si = Ko = null));
}
function _g(e) {
  if (e.propertyName === "value" && Ma(si)) {
    var t = [];
    Pg(t, si, e, If(e)), ug(FS, t);
  }
}
function US(e, t, n) {
  e === "focusin"
    ? (Np(), (Ko = t), (si = n), Ko.attachEvent("onpropertychange", _g))
    : e === "focusout" && Np();
}
function VS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ma(si);
}
function HS(e, t) {
  if (e === "click") return Ma(t);
}
function WS(e, t) {
  if (e === "input" || e === "change") return Ma(t);
}
function KS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == "function" ? Object.is : KS;
function ai(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yu.call(t, o) || !Ot(e[o], t[o])) return !1;
  }
  return !0;
}
function Rp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ap(e, t) {
  var n = Rp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rp(n);
  }
}
function Ig(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ig(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ng() {
  for (var e = window, t = Ys(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ys(e.document);
  }
  return t;
}
function Ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qS(e) {
  var t = Ng(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ig(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ff(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ap(n, i));
        var s = Ap(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var GS = Xt && "documentMode" in document && 11 >= document.documentMode,
  Ir = null,
  mc = null,
  qo = null,
  vc = !1;
function jp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vc ||
    Ir == null ||
    Ir !== Ys(r) ||
    ((r = Ir),
    "selectionStart" in r && Ff(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qo && ai(qo, r)) ||
      ((qo = r),
      (r = ra(mc, "onSelect")),
      0 < r.length &&
        ((t = new Bf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ir))));
}
function ss(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nr = {
    animationend: ss("Animation", "AnimationEnd"),
    animationiteration: ss("Animation", "AnimationIteration"),
    animationstart: ss("Animation", "AnimationStart"),
    transitionend: ss("Transition", "TransitionEnd"),
  },
  Wl = {},
  Rg = {};
Xt &&
  ((Rg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nr.animationend.animation,
    delete Nr.animationiteration.animation,
    delete Nr.animationstart.animation),
  "TransitionEvent" in window || delete Nr.transitionend.transition);
function Fa(e) {
  if (Wl[e]) return Wl[e];
  if (!Nr[e]) return e;
  var t = Nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rg) return (Wl[e] = t[n]);
  return e;
}
var Ag = Fa("animationend"),
  jg = Fa("animationiteration"),
  Lg = Fa("animationstart"),
  Bg = Fa("transitionend"),
  Dg = new Map(),
  Lp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bn(e, t) {
  Dg.set(e, t), mr(t, [e]);
}
for (var Kl = 0; Kl < Lp.length; Kl++) {
  var ql = Lp[Kl],
    QS = ql.toLowerCase(),
    YS = ql[0].toUpperCase() + ql.slice(1);
  Bn(QS, "on" + YS);
}
Bn(Ag, "onAnimationEnd");
Bn(jg, "onAnimationIteration");
Bn(Lg, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Bg, "onTransitionEnd");
Jr("onMouseEnter", ["mouseout", "mouseover"]);
Jr("onMouseLeave", ["mouseout", "mouseover"]);
Jr("onPointerEnter", ["pointerout", "pointerover"]);
Jr("onPointerLeave", ["pointerout", "pointerover"]);
mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  JS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Bp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Q2(r, t, void 0, e), (e.currentTarget = null);
}
function Mg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Bp(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Bp(o, a, u), (i = l);
        }
    }
  }
  if (Xs) throw ((e = fc), (Xs = !1), (fc = null), e);
}
function J(e, t) {
  var n = t[bc];
  n === void 0 && (n = t[bc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fg(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), Fg(n, e, r, t);
}
var as = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
  if (!e[as]) {
    (e[as] = !0),
      qv.forEach(function (n) {
        n !== "selectionchange" && (JS.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[as] || ((t[as] = !0), Gl("selectionchange", !1, t));
  }
}
function Fg(e, t, n, r) {
  switch (Cg(t)) {
    case 1:
      var o = fS;
      break;
    case 4:
      o = dS;
      break;
    default:
      o = jf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !cc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Xn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ug(function () {
    var u = i,
      c = If(n),
      f = [];
    e: {
      var d = Dg.get(e);
      if (d !== void 0) {
        var h = Bf,
          g = e;
        switch (e) {
          case "keypress":
            if (As(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = OS;
            break;
          case "focusin":
            (g = "focus"), (h = Ul);
            break;
          case "focusout":
            (g = "blur"), (h = Ul);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = xp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = mS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = _S;
            break;
          case Ag:
          case jg:
          case Lg:
            h = yS;
            break;
          case Bg:
            h = NS;
            break;
          case "scroll":
            h = pS;
            break;
          case "wheel":
            h = AS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = SS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Op;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              m !== null && ((b = ni(p, m)), b != null && y.push(ui(p, b, v)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((d = new h(d, g, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== lc &&
            (g = n.relatedTarget || n.fromElement) &&
            (Xn(g) || g[Zt]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((g = n.relatedTarget || n.toElement),
              (h = u),
              (g = g ? Xn(g) : null),
              g !== null &&
                ((E = vr(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((h = null), (g = u)),
          h !== g)
        ) {
          if (
            ((y = xp),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Op),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (E = h == null ? d : Rr(h)),
            (v = g == null ? d : Rr(g)),
            (d = new y(b, p + "leave", h, n, c)),
            (d.target = E),
            (d.relatedTarget = v),
            (b = null),
            Xn(c) === u &&
              ((y = new y(m, p + "enter", g, n, c)),
              (y.target = v),
              (y.relatedTarget = E),
              (b = y)),
            (E = b),
            h && g)
          )
            t: {
              for (y = h, m = g, p = 0, v = y; v; v = Er(v)) p++;
              for (v = 0, b = m; b; b = Er(b)) v++;
              for (; 0 < p - v; ) (y = Er(y)), p--;
              for (; 0 < v - p; ) (m = Er(m)), v--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Er(y)), (m = Er(m));
              }
              y = null;
            }
          else y = null;
          h !== null && Dp(f, d, h, y, !1),
            g !== null && E !== null && Dp(f, E, g, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Rr(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var $ = zS;
        else if (_p(d))
          if (Tg) $ = WS;
          else {
            $ = VS;
            var C = US;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            ($ = HS);
        if ($ && ($ = $(e, u))) {
          Pg(f, $, n, c);
          break e;
        }
        C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            rc(d, "number", d.value);
      }
      switch (((C = u ? Rr(u) : window), e)) {
        case "focusin":
          (_p(C) || C.contentEditable === "true") &&
            ((Ir = C), (mc = u), (qo = null));
          break;
        case "focusout":
          qo = mc = Ir = null;
          break;
        case "mousedown":
          vc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vc = !1), jp(f, n, c);
          break;
        case "selectionchange":
          if (GS) break;
        case "keydown":
        case "keyup":
          jp(f, n, c);
      }
      var k;
      if (Mf)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        _r
          ? kg(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (xg &&
          n.locale !== "ko" &&
          (_r || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && _r && (k = $g())
            : ((wn = c),
              (Lf = "value" in wn ? wn.value : wn.textContent),
              (_r = !0))),
        (C = ra(u, T)),
        0 < C.length &&
          ((T = new kp(T, e, null, n, c)),
          f.push({ event: T, listeners: C }),
          k ? (T.data = k) : ((k = Og(n)), k !== null && (T.data = k)))),
        (k = LS ? BS(e, n) : DS(e, n)) &&
          ((u = ra(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new kp("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Mg(f, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ra(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ni(e, n)),
      i != null && r.unshift(ui(e, i, o)),
      (i = ni(e, t)),
      i != null && r.push(ui(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ni(n, i)), l != null && s.unshift(ui(n, l, a)))
        : o || ((l = ni(n, i)), l != null && s.push(ui(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var XS = /\r\n?/g,
  ZS = /\u0000|\uFFFD/g;
function Mp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      XS,
      `
`
    )
    .replace(ZS, "");
}
function ls(e, t, n) {
  if (((t = Mp(t)), Mp(e) !== t && n)) throw Error(x(425));
}
function oa() {}
var gc = null,
  yc = null;
function wc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Sc = typeof setTimeout == "function" ? setTimeout : void 0,
  eb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fp = typeof Promise == "function" ? Promise : void 0,
  tb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fp < "u"
      ? function (e) {
          return Fp.resolve(null).then(e).catch(nb);
        }
      : Sc;
function nb(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ii(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ii(t);
}
function On(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ho = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + ho,
  ci = "__reactProps$" + ho,
  Zt = "__reactContainer$" + ho,
  bc = "__reactEvents$" + ho,
  rb = "__reactListeners$" + ho,
  ob = "__reactHandles$" + ho;
function Xn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zt] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zp(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = zp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xi(e) {
  return (
    (e = e[Bt] || e[Zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function za(e) {
  return e[ci] || null;
}
var Ec = [],
  Ar = -1;
function Dn(e) {
  return { current: e };
}
function X(e) {
  0 > Ar || ((e.current = Ec[Ar]), (Ec[Ar] = null), Ar--);
}
function Q(e, t) {
  Ar++, (Ec[Ar] = e.current), (e.current = t);
}
var jn = {},
  _e = Dn(jn),
  Ue = Dn(!1),
  lr = jn;
function Xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function ia() {
  X(Ue), X(_e);
}
function Up(e, t, n) {
  if (_e.current !== jn) throw Error(x(168));
  Q(_e, t), Q(Ue, n);
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(x(108, U2(e) || "Unknown", o));
  return ne({}, n, r);
}
function sa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (lr = _e.current),
    Q(_e, e),
    Q(Ue, Ue.current),
    !0
  );
}
function Vp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = zg(e, t, lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ue),
      X(_e),
      Q(_e, e))
    : X(Ue),
    Q(Ue, n);
}
var qt = null,
  Ua = !1,
  Jl = !1;
function Ug(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function ib(e) {
  (Ua = !0), Ug(e);
}
function Mn() {
  if (!Jl && qt !== null) {
    Jl = !0;
    var e = 0,
      t = K;
    try {
      var n = qt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (Ua = !1);
    } catch (o) {
      throw (qt !== null && (qt = qt.slice(e + 1)), pg(Nf, Mn), o);
    } finally {
      (K = t), (Jl = !1);
    }
  }
  return null;
}
var jr = [],
  Lr = 0,
  aa = null,
  la = 0,
  ct = [],
  ft = 0,
  ur = null,
  Gt = 1,
  Qt = "";
function Yn(e, t) {
  (jr[Lr++] = la), (jr[Lr++] = aa), (aa = e), (la = t);
}
function Vg(e, t, n) {
  (ct[ft++] = Gt), (ct[ft++] = Qt), (ct[ft++] = ur), (ur = e);
  var r = Gt;
  e = Qt;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Gt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Qt = i + e);
  } else (Gt = (1 << i) | (n << o) | r), (Qt = e);
}
function zf(e) {
  e.return !== null && (Yn(e, 1), Vg(e, 1, 0));
}
function Uf(e) {
  for (; e === aa; )
    (aa = jr[--Lr]), (jr[Lr] = null), (la = jr[--Lr]), (jr[Lr] = null);
  for (; e === ur; )
    (ur = ct[--ft]),
      (ct[ft] = null),
      (Qt = ct[--ft]),
      (ct[ft] = null),
      (Gt = ct[--ft]),
      (ct[ft] = null);
}
var et = null,
  Xe = null,
  Z = !1,
  Et = null;
function Hg(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Xe = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ur !== null ? { id: Gt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $c(e) {
  if (Z) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Hp(e, t)) {
        if (Cc(e)) throw Error(x(418));
        t = On(n.nextSibling);
        var r = et;
        t && Hp(e, t)
          ? Hg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (et = e));
      }
    } else {
      if (Cc(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (et = e);
    }
  }
}
function Wp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function us(e) {
  if (e !== et) return !1;
  if (!Z) return Wp(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (Cc(e)) throw (Wg(), Error(x(418)));
    for (; t; ) Hg(e, t), (t = On(t.nextSibling));
  }
  if ((Wp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = et ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function Wg() {
  for (var e = Xe; e; ) e = On(e.nextSibling);
}
function Zr() {
  (Xe = et = null), (Z = !1);
}
function Vf(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var sb = on.ReactCurrentBatchConfig;
function Oo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function cs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Kp(e) {
  var t = e._init;
  return t(e._payload);
}
function Kg(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = In(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, b) {
    return p === null || p.tag !== 6
      ? ((p = ou(v, m.mode, b)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function l(m, p, v, b) {
    var $ = v.type;
    return $ === Tr
      ? c(m, p, v.props.children, b, v.key)
      : p !== null &&
        (p.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === dn &&
            Kp($) === p.type))
      ? ((b = o(p, v.props)), (b.ref = Oo(m, p, v)), (b.return = m), b)
      : ((b = zs(v.type, v.key, v.props, null, m.mode, b)),
        (b.ref = Oo(m, p, v)),
        (b.return = m),
        b);
  }
  function u(m, p, v, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = iu(v, m.mode, b)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function c(m, p, v, b, $) {
    return p === null || p.tag !== 7
      ? ((p = nr(v, m.mode, b, $)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ou("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zi:
          return (
            (v = zs(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Oo(m, null, p)),
            (v.return = m),
            v
          );
        case Pr:
          return (p = iu(p, m.mode, v)), (p.return = m), p;
        case dn:
          var b = p._init;
          return f(m, b(p._payload), v);
      }
      if (Bo(p) || Eo(p))
        return (p = nr(p, m.mode, v, null)), (p.return = m), p;
      cs(m, p);
    }
    return null;
  }
  function d(m, p, v, b) {
    var $ = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return $ !== null ? null : a(m, p, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Zi:
          return v.key === $ ? l(m, p, v, b) : null;
        case Pr:
          return v.key === $ ? u(m, p, v, b) : null;
        case dn:
          return ($ = v._init), d(m, p, $(v._payload), b);
      }
      if (Bo(v) || Eo(v)) return $ !== null ? null : c(m, p, v, b, null);
      cs(m, v);
    }
    return null;
  }
  function h(m, p, v, b, $) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(v) || null), a(p, m, "" + b, $);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Zi:
          return (m = m.get(b.key === null ? v : b.key) || null), l(p, m, b, $);
        case Pr:
          return (m = m.get(b.key === null ? v : b.key) || null), u(p, m, b, $);
        case dn:
          var C = b._init;
          return h(m, p, v, C(b._payload), $);
      }
      if (Bo(b) || Eo(b)) return (m = m.get(v) || null), c(p, m, b, $, null);
      cs(p, b);
    }
    return null;
  }
  function g(m, p, v, b) {
    for (
      var $ = null, C = null, k = p, T = (p = 0), M = null;
      k !== null && T < v.length;
      T++
    ) {
      k.index > T ? ((M = k), (k = null)) : (M = k.sibling);
      var I = d(m, k, v[T], b);
      if (I === null) {
        k === null && (k = M);
        break;
      }
      e && k && I.alternate === null && t(m, k),
        (p = i(I, p, T)),
        C === null ? ($ = I) : (C.sibling = I),
        (C = I),
        (k = M);
    }
    if (T === v.length) return n(m, k), Z && Yn(m, T), $;
    if (k === null) {
      for (; T < v.length; T++)
        (k = f(m, v[T], b)),
          k !== null &&
            ((p = i(k, p, T)), C === null ? ($ = k) : (C.sibling = k), (C = k));
      return Z && Yn(m, T), $;
    }
    for (k = r(m, k); T < v.length; T++)
      (M = h(k, m, T, v[T], b)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? T : M.key),
          (p = i(M, p, T)),
          C === null ? ($ = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        k.forEach(function (ge) {
          return t(m, ge);
        }),
      Z && Yn(m, T),
      $
    );
  }
  function y(m, p, v, b) {
    var $ = Eo(v);
    if (typeof $ != "function") throw Error(x(150));
    if (((v = $.call(v)), v == null)) throw Error(x(151));
    for (
      var C = ($ = null), k = p, T = (p = 0), M = null, I = v.next();
      k !== null && !I.done;
      T++, I = v.next()
    ) {
      k.index > T ? ((M = k), (k = null)) : (M = k.sibling);
      var ge = d(m, k, I.value, b);
      if (ge === null) {
        k === null && (k = M);
        break;
      }
      e && k && ge.alternate === null && t(m, k),
        (p = i(ge, p, T)),
        C === null ? ($ = ge) : (C.sibling = ge),
        (C = ge),
        (k = M);
    }
    if (I.done) return n(m, k), Z && Yn(m, T), $;
    if (k === null) {
      for (; !I.done; T++, I = v.next())
        (I = f(m, I.value, b)),
          I !== null &&
            ((p = i(I, p, T)), C === null ? ($ = I) : (C.sibling = I), (C = I));
      return Z && Yn(m, T), $;
    }
    for (k = r(m, k); !I.done; T++, I = v.next())
      (I = h(k, m, T, I.value, b)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? T : I.key),
          (p = i(I, p, T)),
          C === null ? ($ = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        k.forEach(function (_t) {
          return t(m, _t);
        }),
      Z && Yn(m, T),
      $
    );
  }
  function E(m, p, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Tr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Zi:
          e: {
            for (var $ = v.key, C = p; C !== null; ) {
              if (C.key === $) {
                if ((($ = v.type), $ === Tr)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = o(C, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === dn &&
                    Kp($) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = o(C, v.props)),
                    (p.ref = Oo(m, C, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === Tr
              ? ((p = nr(v.props.children, m.mode, b, v.key)),
                (p.return = m),
                (m = p))
              : ((b = zs(v.type, v.key, v.props, null, m.mode, b)),
                (b.ref = Oo(m, p, v)),
                (b.return = m),
                (m = b));
          }
          return s(m);
        case Pr:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = iu(v, m.mode, b)), (p.return = m), (m = p);
          }
          return s(m);
        case dn:
          return (C = v._init), E(m, p, C(v._payload), b);
      }
      if (Bo(v)) return g(m, p, v, b);
      if (Eo(v)) return y(m, p, v, b);
      cs(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = ou(v, m.mode, b)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return E;
}
var eo = Kg(!0),
  qg = Kg(!1),
  ua = Dn(null),
  ca = null,
  Br = null,
  Hf = null;
function Wf() {
  Hf = Br = ca = null;
}
function Kf(e) {
  var t = ua.current;
  X(ua), (e._currentValue = t);
}
function xc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qr(e, t) {
  (ca = e),
    (Hf = Br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Hf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
      if (ca === null) throw Error(x(308));
      (Br = e), (ca.dependencies = { lanes: 0, firstContext: e });
    } else Br = Br.next = e;
  return t;
}
var Zn = null;
function qf(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function Gg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), qf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function Gf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), qf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function js(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rf(e, n);
  }
}
function qp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fa(e, t, n, r) {
  var o = e.updateQueue;
  pn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            y = a;
          switch (((d = t), (h = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(h, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (d = typeof g == "function" ? g.call(h, f, d) : g),
                d == null)
              )
                break e;
              f = ne({}, f, d);
              break e;
            case 2:
              pn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (fr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Gp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(x(191, o));
        o.call(r);
      }
    }
}
var ki = {},
  Mt = Dn(ki),
  fi = Dn(ki),
  di = Dn(ki);
function er(e) {
  if (e === ki) throw Error(x(174));
  return e;
}
function Qf(e, t) {
  switch ((Q(di, t), Q(fi, e), Q(Mt, ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ic(t, e));
  }
  X(Mt), Q(Mt, t);
}
function to() {
  X(Mt), X(fi), X(di);
}
function Yg(e) {
  er(di.current);
  var t = er(Mt.current),
    n = ic(t, e.type);
  t !== n && (Q(fi, e), Q(Mt, n));
}
function Yf(e) {
  fi.current === e && (X(Mt), X(fi));
}
var ee = Dn(0);
function da(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xl = [];
function Jf() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Ls = on.ReactCurrentDispatcher,
  Zl = on.ReactCurrentBatchConfig,
  cr = 0,
  te = null,
  he = null,
  we = null,
  pa = !1,
  Go = !1,
  pi = 0,
  ab = 0;
function Oe() {
  throw Error(x(321));
}
function Xf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function Zf(e, t, n, r, o, i) {
  if (
    ((cr = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ls.current = e === null || e.memoizedState === null ? fb : db),
    (e = n(r, o)),
    Go)
  ) {
    i = 0;
    do {
      if (((Go = !1), (pi = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (we = he = null),
        (t.updateQueue = null),
        (Ls.current = pb),
        (e = n(r, o));
    } while (Go);
  }
  if (
    ((Ls.current = ha),
    (t = he !== null && he.next !== null),
    (cr = 0),
    (we = he = te = null),
    (pa = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function ed() {
  var e = pi !== 0;
  return (pi = 0), e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (te.memoizedState = we = e) : (we = we.next = e), we;
}
function vt() {
  if (he === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = we === null ? te.memoizedState : we.next;
  if (t !== null) (we = t), (he = e);
  else {
    if (e === null) throw Error(x(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      we === null ? (te.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function hi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eu(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = he,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((cr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (te.lanes |= c),
          (fr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Ot(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (fr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tu(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Ot(i, t.memoizedState) || (ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Jg() {}
function Xg(e, t) {
  var n = te,
    r = vt(),
    o = t(),
    i = !Ot(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    td(ty.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mi(9, ey.bind(null, n, r, o, t), void 0, null),
      be === null)
    )
      throw Error(x(349));
    cr & 30 || Zg(n, t, o);
  }
  return o;
}
function Zg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ey(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ny(t) && ry(e);
}
function ty(e, t, n) {
  return n(function () {
    ny(t) && ry(e);
  });
}
function ny(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function ry(e) {
  var t = en(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Qp(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cb.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oy() {
  return vt().memoizedState;
}
function Bs(e, t, n, r) {
  var o = jt();
  (te.flags |= e),
    (o.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Va(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (((i = s.destroy), r !== null && Xf(r, s.deps))) {
      o.memoizedState = mi(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = mi(1 | t, n, i, r));
}
function Yp(e, t) {
  return Bs(8390656, 8, e, t);
}
function td(e, t) {
  return Va(2048, 8, e, t);
}
function iy(e, t) {
  return Va(4, 2, e, t);
}
function sy(e, t) {
  return Va(4, 4, e, t);
}
function ay(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ly(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Va(4, 4, ay.bind(null, t, e), n)
  );
}
function nd() {}
function uy(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cy(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fy(e, t, n) {
  return cr & 21
    ? (Ot(n, t) || ((n = vg()), (te.lanes |= n), (fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function lb(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Zl.transition = r);
  }
}
function dy() {
  return vt().memoizedState;
}
function ub(e, t, n) {
  var r = _n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    py(e))
  )
    hy(t, n);
  else if (((n = Gg(e, t, n, r)), n !== null)) {
    var o = Re();
    kt(n, e, r, o), my(n, t, r);
  }
}
function cb(e, t, n) {
  var r = _n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (py(e)) hy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ot(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), qf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gg(e, t, o, r)),
      n !== null && ((o = Re()), kt(n, e, r, o), my(n, t, r));
  }
}
function py(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function hy(e, t) {
  Go = pa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function my(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rf(e, n);
  }
}
var ha = {
    readContext: mt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  fb = {
    readContext: mt,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Yp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bs(4194308, 4, ay.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ub.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qp,
    useDebugValue: nd,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qp(!1),
        t = e[0];
      return (e = lb.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = jt();
      if (Z) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(x(349));
        cr & 30 || Zg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Yp(ty.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mi(9, ey.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = be.identifierPrefix;
      if (Z) {
        var n = Qt,
          r = Gt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ab++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  db = {
    readContext: mt,
    useCallback: uy,
    useContext: mt,
    useEffect: td,
    useImperativeHandle: ly,
    useInsertionEffect: iy,
    useLayoutEffect: sy,
    useMemo: cy,
    useReducer: eu,
    useRef: oy,
    useState: function () {
      return eu(hi);
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = vt();
      return fy(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = eu(hi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jg,
    useSyncExternalStore: Xg,
    useId: dy,
    unstable_isNewReconciler: !1,
  },
  pb = {
    readContext: mt,
    useCallback: uy,
    useContext: mt,
    useEffect: td,
    useImperativeHandle: ly,
    useInsertionEffect: iy,
    useLayoutEffect: sy,
    useMemo: cy,
    useReducer: tu,
    useRef: oy,
    useState: function () {
      return tu(hi);
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = vt();
      return he === null ? (t.memoizedState = e) : fy(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = tu(hi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jg,
    useSyncExternalStore: Xg,
    useId: dy,
    unstable_isNewReconciler: !1,
  };
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function kc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ha = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = _n(e),
      i = Yt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && (kt(t, e, o, r), js(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = _n(e),
      i = Yt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && (kt(t, e, o, r), js(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = _n(e),
      o = Yt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Pn(e, o, r)),
      t !== null && (kt(t, e, r, n), js(t, e, r));
  },
};
function Jp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ai(n, r) || !ai(o, i)
      : !0
  );
}
function vy(e, t, n) {
  var r = !1,
    o = jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mt(i))
      : ((o = Ve(t) ? lr : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xr(e, o) : jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ha),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ha.enqueueReplaceState(t, t.state, null);
}
function Oc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Gf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mt(i))
    : ((i = Ve(t) ? lr : _e.current), (o.context = Xr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (kc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ha.enqueueReplaceState(o, o.state, null),
      fa(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function no(e, t) {
  try {
    var n = "",
      r = t;
    do (n += z2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hb = typeof WeakMap == "function" ? WeakMap : Map;
function gy(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      va || ((va = !0), (Dc = r)), Pc(e, t);
    }),
    n
  );
}
function yy(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Pc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Pc(e, t),
          typeof r != "function" &&
            (Tn === null ? (Tn = new Set([this])) : Tn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hb();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Pb.bind(null, e, t, n)), t.then(e, e));
}
function eh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function th(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), Pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var mb = on.ReactCurrentOwner,
  ze = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? qg(t, null, n, r) : eo(t, e.child, n, r);
}
function nh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    qr(t, o),
    (r = Zf(e, t, n, r, i, o)),
    (n = ed()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (Z && n && zf(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  );
}
function rh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !cd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), wy(e, t, i, r, o))
      : ((e = zs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ai), n(s, r) && e.ref === t.ref)
    )
      return tn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ai(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), tn(e, t, o);
  }
  return Tc(e, t, n, r, o);
}
function Sy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Mr, Ye),
        (Ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(Mr, Ye),
          (Ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(Mr, Ye),
        (Ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(Mr, Ye),
      (Ye |= r);
  return Ne(e, t, o, n), t.child;
}
function by(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Tc(e, t, n, r, o) {
  var i = Ve(n) ? lr : _e.current;
  return (
    (i = Xr(t, i)),
    qr(t, o),
    (n = Zf(e, t, n, r, i, o)),
    (r = ed()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (Z && r && zf(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  );
}
function oh(e, t, n, r, o) {
  if (Ve(n)) {
    var i = !0;
    sa(t);
  } else i = !1;
  if ((qr(t, o), t.stateNode === null))
    Ds(e, t), vy(t, n, r), Oc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ve(n) ? lr : _e.current), (u = Xr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Xp(t, s, r, u)),
      (pn = !1);
    var d = t.memoizedState;
    (s.state = d),
      fa(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Ue.current || pn
        ? (typeof c == "function" && (kc(t, n, c, r), (l = t.memoizedState)),
          (a = pn || Jp(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Qg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mt(l))
        : ((l = Ve(n) ? lr : _e.current), (l = Xr(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Xp(t, s, r, l)),
      (pn = !1),
      (d = t.memoizedState),
      (s.state = d),
      fa(t, r, s, o);
    var g = t.memoizedState;
    a !== f || d !== g || Ue.current || pn
      ? (typeof h == "function" && (kc(t, n, h, r), (g = t.memoizedState)),
        (u = pn || Jp(t, n, u, r, d, g, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _c(e, t, n, r, i, o);
}
function _c(e, t, n, r, o, i) {
  by(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Vp(t, n, !1), tn(e, t, i);
  (r = t.stateNode), (mb.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = eo(t, e.child, null, i)), (t.child = eo(t, null, a, i)))
      : Ne(e, t, a, i),
    (t.memoizedState = r.state),
    o && Vp(t, n, !0),
    t.child
  );
}
function Ey(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Up(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Up(e, t.context, !1),
    Qf(e, t.containerInfo);
}
function ih(e, t, n, r, o) {
  return Zr(), Vf(o), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cy(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(ee, o & 1),
    e === null)
  )
    return (
      $c(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = qa(s, r, 0, null)),
              (e = nr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Nc(n)),
              (t.memoizedState = Ic),
              e)
            : rd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return vb(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = In(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = In(a, i)) : ((i = nr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ic),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = In(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rd(e, t) {
  return (
    (t = qa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fs(e, t, n, r) {
  return (
    r !== null && Vf(r),
    eo(t, e.child, null, n),
    (e = rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nu(Error(x(422)))), fs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = qa({ mode: "visible", children: r.children }, o, 0, null)),
        (i = nr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && eo(t, e.child, null, s),
        (t.child.memoizedState = Nc(s)),
        (t.memoizedState = Ic),
        i);
  if (!(t.mode & 1)) return fs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(x(419))), (r = nu(i, r, void 0)), fs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ze || a)) {
    if (((r = be), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), en(e, o), kt(r, e, o, -1));
    }
    return ud(), (r = nu(Error(x(421)))), fs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Xe = On(o.nextSibling)),
      (et = t),
      (Z = !0),
      (Et = null),
      e !== null &&
        ((ct[ft++] = Gt),
        (ct[ft++] = Qt),
        (ct[ft++] = ur),
        (Gt = e.id),
        (Qt = e.overflow),
        (ur = t)),
      (t = rd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xc(e.return, t, n);
}
function ru(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function $y(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ne(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sh(e, n, t);
        else if (e.tag === 19) sh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && da(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ru(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && da(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ru(t, !0, n, null, i);
        break;
      case "together":
        ru(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ds(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gb(e, t, n) {
  switch (t.tag) {
    case 3:
      Ey(t), Zr();
      break;
    case 5:
      Yg(t);
      break;
    case 1:
      Ve(t.type) && sa(t);
      break;
    case 4:
      Qf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Q(ua, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cy(e, t, n)
          : (Q(ee, ee.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $y(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sy(e, t, n);
  }
  return tn(e, t, n);
}
var xy, Rc, ky, Oy;
xy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rc = function () {};
ky = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), er(Mt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = tc(e, o)), (r = tc(e, r)), (i = []);
        break;
      case "select":
        (o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = oc(e, o)), (r = oc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oa);
    }
    sc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ei.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ei.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && J("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Oy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Po(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yb(e, t, n) {
  var r = t.pendingProps;
  switch ((Uf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Ve(t.type) && ia(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        to(),
        X(Ue),
        X(_e),
        Jf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (us(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (zc(Et), (Et = null)))),
        Rc(e, t),
        Pe(t),
        null
      );
    case 5:
      Yf(t);
      var o = er(di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ky(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return Pe(t), null;
        }
        if (((e = er(Mt.current)), us(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Bt] = t), (r[ci] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mo.length; o++) J(Mo[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              mp(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              gp(r, i), J("invalid", r);
          }
          sc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ei.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              es(r), vp(r, i, !0);
              break;
            case "textarea":
              es(r), yp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = oa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Bt] = t),
            (e[ci] = r),
            xy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ac(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mo.length; o++) J(Mo[o], e);
                o = r;
                break;
              case "source":
                J("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (o = r);
                break;
              case "details":
                J("toggle", e), (o = r);
                break;
              case "input":
                mp(e, r), (o = tc(e, r)), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                gp(e, r), (o = oc(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            sc(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? og(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ng(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ti(e, l)
                    : typeof l == "number" && ti(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ei.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && J("scroll", e)
                      : l != null && Of(e, i, l, s));
              }
            switch (n) {
              case "input":
                es(e), vp(e, r, !1);
                break;
              case "textarea":
                es(e), yp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + An(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = oa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Oy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = er(di.current)), er(Mt.current), us(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (i = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                ls(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ls(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (X(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Xe !== null && t.mode & 1 && !(t.flags & 128))
          Wg(), Zr(), (t.flags |= 98560), (i = !1);
        else if (((i = us(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[Bt] = t;
          } else
            Zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else Et !== null && (zc(Et), (Et = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? me === 0 && (me = 3) : ud())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        to(), Rc(e, t), e === null && li(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return Kf(t.type._context), Pe(t), null;
    case 17:
      return Ve(t.type) && ia(), Pe(t), null;
    case 19:
      if ((X(ee), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Po(i, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = da(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Po(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ie() > ro &&
            ((t.flags |= 128), (r = !0), Po(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = da(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Po(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z)
            )
              return Pe(t), null;
          } else
            2 * ie() - i.renderingStartTime > ro &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Po(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ee.current),
          Q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        ld(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ye & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function wb(e, t) {
  switch ((Uf(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && ia(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        to(),
        X(Ue),
        X(_e),
        Jf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yf(t), null;
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Zr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(ee), null;
    case 4:
      return to(), null;
    case 10:
      return Kf(t.type._context), null;
    case 22:
    case 23:
      return ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ds = !1,
  Te = !1,
  Sb = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Ac(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var ah = !1;
function bb(e, t) {
  if (((gc = ta), (e = Ng()), Ff(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yc = { focusedElem: e, selectionRange: n }, ta = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    E = g.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : wt(t.type, y),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (b) {
          re(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (g = ah), (ah = !1), g;
}
function Qo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ac(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Py(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Py(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[ci], delete t[bc], delete t[rb], delete t[ob])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ty(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ty(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lc(e, t, n), e = e.sibling; e !== null; ) Lc(e, t, n), (e = e.sibling);
}
function Bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bc(e, t, n), e = e.sibling; e !== null; ) Bc(e, t, n), (e = e.sibling);
}
var $e = null,
  St = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) _y(e, t, n), (n = n.sibling);
}
function _y(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(Ba, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Dr(n, t);
    case 6:
      var r = $e,
        o = St;
      ($e = null),
        cn(e, t, n),
        ($e = r),
        (St = o),
        $e !== null &&
          (St
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode));
      break;
    case 18:
      $e !== null &&
        (St
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            ii(e))
          : Yl($e, n.stateNode));
      break;
    case 4:
      (r = $e),
        (o = St),
        ($e = n.stateNode.containerInfo),
        (St = !0),
        cn(e, t, n),
        ($e = r),
        (St = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Ac(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          re(n, t, a);
        }
      cn(e, t, n);
      break;
    case 21:
      cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), cn(e, t, n), (Te = r))
        : cn(e, t, n);
      break;
    default:
      cn(e, t, n);
  }
}
function uh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sb()),
      t.forEach(function (r) {
        var o = _b.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ($e = a.stateNode), (St = !1);
              break e;
            case 3:
              ($e = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              ($e = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if ($e === null) throw Error(x(160));
        _y(i, s, o), ($e = null), (St = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Iy(t, e), (t = t.sibling);
}
function Iy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Rt(e), r & 4)) {
        try {
          Qo(3, e, e.return), Wa(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          Qo(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      yt(t, e), Rt(e), r & 512 && n !== null && Dr(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Rt(e),
        r & 512 && n !== null && Dr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ti(o, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Zv(o, i),
              ac(a, s);
            var u = ac(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? og(o, f)
                : c === "dangerouslySetInnerHTML"
                ? ng(o, f)
                : c === "children"
                ? ti(o, f)
                : Of(o, c, f, u);
            }
            switch (a) {
              case "input":
                nc(o, i);
                break;
              case "textarea":
                eg(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Vr(o, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vr(o, !!i.multiple, i.defaultValue, !0)
                      : Vr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ci] = i;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ii(t.containerInfo);
        } catch (y) {
          re(e, e.return, y);
        }
      break;
    case 4:
      yt(t, e), Rt(e);
      break;
    case 13:
      yt(t, e),
        Rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sd = ie())),
        r & 4 && uh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (u = Te) || c), yt(t, e), (Te = u)) : yt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (f = _ = c; _ !== null; ) {
              switch (((d = _), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qo(4, d, d.return);
                  break;
                case 1:
                  Dr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      re(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Dr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    fh(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (_ = h)) : fh(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = rg("display", s)));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                re(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Rt(e), r & 4 && uh(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ty(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ti(o, ""), (r.flags &= -33));
          var i = lh(e);
          Bc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = lh(e);
          Lc(e, a, s);
          break;
        default:
          throw Error(x(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Eb(e, t, n) {
  (_ = e), Ny(e);
}
function Ny(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ds;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Te;
        a = ds;
        var u = Te;
        if (((ds = s), (Te = l) && !u))
          for (_ = o; _ !== null; )
            (s = _),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? dh(o)
                : l !== null
                ? ((l.return = s), (_ = l))
                : dh(o);
        for (; i !== null; ) (_ = i), Ny(i), (i = i.sibling);
        (_ = o), (ds = a), (Te = u);
      }
      ch(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : ch(e);
  }
}
function ch(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Wa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Gp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ii(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        Te || (t.flags & 512 && jc(t));
      } catch (d) {
        re(t, t.return, d);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function fh(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function dh(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wa(4, t);
          } catch (l) {
            re(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              re(t, o, l);
            }
          }
          var i = t.return;
          try {
            jc(t);
          } catch (l) {
            re(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            jc(t);
          } catch (l) {
            re(t, s, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var Cb = Math.ceil,
  ma = on.ReactCurrentDispatcher,
  od = on.ReactCurrentOwner,
  ht = on.ReactCurrentBatchConfig,
  H = 0,
  be = null,
  ue = null,
  xe = 0,
  Ye = 0,
  Mr = Dn(0),
  me = 0,
  vi = null,
  fr = 0,
  Ka = 0,
  id = 0,
  Yo = null,
  Me = null,
  sd = 0,
  ro = 1 / 0,
  Kt = null,
  va = !1,
  Dc = null,
  Tn = null,
  ps = !1,
  Sn = null,
  ga = 0,
  Jo = 0,
  Mc = null,
  Ms = -1,
  Fs = 0;
function Re() {
  return H & 6 ? ie() : Ms !== -1 ? Ms : (Ms = ie());
}
function _n(e) {
  return e.mode & 1
    ? H & 2 && xe !== 0
      ? xe & -xe
      : sb.transition !== null
      ? (Fs === 0 && (Fs = vg()), Fs)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cg(e.type))),
        e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < Jo) throw ((Jo = 0), (Mc = null), Error(x(185)));
  Ci(e, n, r),
    (!(H & 2) || e !== be) &&
      (e === be && (!(H & 2) && (Ka |= n), me === 4 && mn(e, xe)),
      He(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((ro = ie() + 500), Ua && Mn()));
}
function He(e, t) {
  var n = e.callbackNode;
  sS(e, t);
  var r = ea(e, e === be ? xe : 0);
  if (r === 0)
    n !== null && bp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bp(n), t === 1))
      e.tag === 0 ? ib(ph.bind(null, e)) : Ug(ph.bind(null, e)),
        tb(function () {
          !(H & 6) && Mn();
        }),
        (n = null);
    else {
      switch (gg(r)) {
        case 1:
          n = Nf;
          break;
        case 4:
          n = hg;
          break;
        case 16:
          n = Zs;
          break;
        case 536870912:
          n = mg;
          break;
        default:
          n = Zs;
      }
      n = Fy(n, Ry.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ry(e, t) {
  if (((Ms = -1), (Fs = 0), H & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Gr() && e.callbackNode !== n) return null;
  var r = ea(e, e === be ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ya(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = jy();
    (be !== e || xe !== t) && ((Kt = null), (ro = ie() + 500), tr(e, t));
    do
      try {
        kb();
        break;
      } catch (a) {
        Ay(e, a);
      }
    while (!0);
    Wf(),
      (ma.current = i),
      (H = o),
      ue !== null ? (t = 0) : ((be = null), (xe = 0), (t = me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = dc(e)), o !== 0 && ((r = o), (t = Fc(e, o)))), t === 1)
    )
      throw ((n = vi), tr(e, 0), mn(e, r), He(e, ie()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$b(o) &&
          ((t = ya(e, r)),
          t === 2 && ((i = dc(e)), i !== 0 && ((r = i), (t = Fc(e, i)))),
          t === 1))
      )
        throw ((n = vi), tr(e, 0), mn(e, r), He(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Jn(e, Me, Kt);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = sd + 500 - ie()), 10 < t))
          ) {
            if (ea(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Sc(Jn.bind(null, e, Me, Kt), t);
            break;
          }
          Jn(e, Me, Kt);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - xt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sc(Jn.bind(null, e, Me, Kt), r);
            break;
          }
          Jn(e, Me, Kt);
          break;
        case 5:
          Jn(e, Me, Kt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return He(e, ie()), e.callbackNode === n ? Ry.bind(null, e) : null;
}
function Fc(e, t) {
  var n = Yo;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = ya(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && zc(t)),
    e
  );
}
function zc(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function $b(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ot(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~id,
      t &= ~Ka,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ph(e) {
  if (H & 6) throw Error(x(327));
  Gr();
  var t = ea(e, 0);
  if (!(t & 1)) return He(e, ie()), null;
  var n = ya(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dc(e);
    r !== 0 && ((t = r), (n = Fc(e, r)));
  }
  if (n === 1) throw ((n = vi), tr(e, 0), mn(e, t), He(e, ie()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jn(e, Me, Kt),
    He(e, ie()),
    null
  );
}
function ad(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((ro = ie() + 500), Ua && Mn());
  }
}
function dr(e) {
  Sn !== null && Sn.tag === 0 && !(H & 6) && Gr();
  var t = H;
  H |= 1;
  var n = ht.transition,
    r = K;
  try {
    if (((ht.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (ht.transition = n), (H = t), !(H & 6) && Mn();
  }
}
function ld() {
  (Ye = Mr.current), X(Mr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), eb(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Uf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ia();
          break;
        case 3:
          to(), X(Ue), X(_e), Jf();
          break;
        case 5:
          Yf(r);
          break;
        case 4:
          to();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          Kf(r.type._context);
          break;
        case 22:
        case 23:
          ld();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ue = e = In(e.current, null)),
    (xe = Ye = t),
    (me = 0),
    (vi = null),
    (id = Ka = fr = 0),
    (Me = Yo = null),
    Zn !== null)
  ) {
    for (t = 0; t < Zn.length; t++)
      if (((n = Zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Zn = null;
  }
  return e;
}
function Ay(e, t) {
  do {
    var n = ue;
    try {
      if ((Wf(), (Ls.current = ha), pa)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        pa = !1;
      }
      if (
        ((cr = 0),
        (we = he = te = null),
        (Go = !1),
        (pi = 0),
        (od.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (vi = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = xe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = eh(s);
          if (h !== null) {
            (h.flags &= -257),
              th(h, s, a, i, t),
              h.mode & 1 && Zp(i, u, t),
              (t = h),
              (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zp(i, u, t), ud();
              break e;
            }
            l = Error(x(426));
          }
        } else if (Z && a.mode & 1) {
          var E = eh(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              th(E, s, a, i, t),
              Vf(no(l, a));
            break e;
          }
        }
        (i = l = no(l, a)),
          me !== 4 && (me = 2),
          Yo === null ? (Yo = [i]) : Yo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = gy(i, l, t);
              qp(i, m);
              break e;
            case 1:
              a = l;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Tn === null || !Tn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = yy(i, a, t);
                qp(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      By(n);
    } catch ($) {
      (t = $), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jy() {
  var e = ma.current;
  return (ma.current = ha), e === null ? ha : e;
}
function ud() {
  (me === 0 || me === 3 || me === 2) && (me = 4),
    be === null || (!(fr & 268435455) && !(Ka & 268435455)) || mn(be, xe);
}
function ya(e, t) {
  var n = H;
  H |= 2;
  var r = jy();
  (be !== e || xe !== t) && ((Kt = null), tr(e, t));
  do
    try {
      xb();
      break;
    } catch (o) {
      Ay(e, o);
    }
  while (!0);
  if ((Wf(), (H = n), (ma.current = r), ue !== null)) throw Error(x(261));
  return (be = null), (xe = 0), me;
}
function xb() {
  for (; ue !== null; ) Ly(ue);
}
function kb() {
  for (; ue !== null && !J2(); ) Ly(ue);
}
function Ly(e) {
  var t = My(e.alternate, e, Ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? By(e) : (ue = t),
    (od.current = null);
}
function By(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wb(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (ue = null);
        return;
      }
    } else if (((n = yb(n, t, Ye)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Jn(e, t, n) {
  var r = K,
    o = ht.transition;
  try {
    (ht.transition = null), (K = 1), Ob(e, t, n, r);
  } finally {
    (ht.transition = o), (K = r);
  }
  return null;
}
function Ob(e, t, n, r) {
  do Gr();
  while (Sn !== null);
  if (H & 6) throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (aS(e, i),
    e === be && ((ue = be = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ps ||
      ((ps = !0),
      Fy(Zs, function () {
        return Gr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ht.transition), (ht.transition = null);
    var s = K;
    K = 1;
    var a = H;
    (H |= 4),
      (od.current = null),
      bb(e, n),
      Iy(n, e),
      qS(yc),
      (ta = !!gc),
      (yc = gc = null),
      (e.current = n),
      Eb(n),
      X2(),
      (H = a),
      (K = s),
      (ht.transition = i);
  } else e.current = n;
  if (
    (ps && ((ps = !1), (Sn = e), (ga = o)),
    (i = e.pendingLanes),
    i === 0 && (Tn = null),
    tS(n.stateNode),
    He(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (va) throw ((va = !1), (e = Dc), (Dc = null), e);
  return (
    ga & 1 && e.tag !== 0 && Gr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Mc ? Jo++ : ((Jo = 0), (Mc = e))) : (Jo = 0),
    Mn(),
    null
  );
}
function Gr() {
  if (Sn !== null) {
    var e = gg(ga),
      t = ht.transition,
      n = K;
    try {
      if (((ht.transition = null), (K = 16 > e ? 16 : e), Sn === null))
        var r = !1;
      else {
        if (((e = Sn), (Sn = null), (ga = 0), H & 6)) throw Error(x(331));
        var o = H;
        for (H |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (_ = u; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (_ = f);
                  else
                    for (; _ !== null; ) {
                      c = _;
                      var d = c.sibling,
                        h = c.return;
                      if ((Py(c), c === u)) {
                        _ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (_ = d);
                        break;
                      }
                      _ = h;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (_ = s);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qo(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (_ = m);
                break e;
              }
              _ = i.return;
            }
        }
        var p = e.current;
        for (_ = p; _ !== null; ) {
          s = _;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (_ = v);
          else
            e: for (s = p; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wa(9, a);
                  }
                } catch ($) {
                  re(a, a.return, $);
                }
              if (a === s) {
                _ = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (_ = b);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((H = o), Mn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(Ba, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (ht.transition = t);
    }
  }
  return !1;
}
function hh(e, t, n) {
  (t = no(n, t)),
    (t = gy(e, t, 1)),
    (e = Pn(e, t, 1)),
    (t = Re()),
    e !== null && (Ci(e, 1, t), He(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) hh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tn === null || !Tn.has(r)))
        ) {
          (e = no(n, e)),
            (e = yy(t, e, 1)),
            (t = Pn(t, e, 1)),
            (e = Re()),
            t !== null && (Ci(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (xe & n) === n &&
      (me === 4 || (me === 3 && (xe & 130023424) === xe && 500 > ie() - sd)
        ? tr(e, 0)
        : (id |= n)),
    He(e, t);
}
function Dy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = rs), (rs <<= 1), !(rs & 130023424) && (rs = 4194304))
      : (t = 1));
  var n = Re();
  (e = en(e, t)), e !== null && (Ci(e, t, n), He(e, n));
}
function Tb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dy(e, n);
}
function _b(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Dy(e, n);
}
var My;
My = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), gb(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), Z && t.flags & 1048576 && Vg(t, la, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ds(e, t), (e = t.pendingProps);
      var o = Xr(t, _e.current);
      qr(t, n), (o = Zf(null, t, r, e, o, n));
      var i = ed();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((i = !0), sa(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gf(t),
            (o.updater = Ha),
            (t.stateNode = o),
            (o._reactInternals = t),
            Oc(t, r, e, n),
            (t = _c(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && zf(t), Ne(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ds(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Nb(r)),
          (e = wt(r, e)),
          o)
        ) {
          case 0:
            t = Tc(null, t, r, e, n);
            break e;
          case 1:
            t = oh(null, t, r, e, n);
            break e;
          case 11:
            t = nh(null, t, r, e, n);
            break e;
          case 14:
            t = rh(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Tc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        oh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ey(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Qg(e, t),
          fa(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = no(Error(x(423)), t)), (t = ih(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = no(Error(x(424)), t)), (t = ih(e, t, r, n, o));
            break e;
          } else
            for (
              Xe = On(t.stateNode.containerInfo.firstChild),
                et = t,
                Z = !0,
                Et = null,
                n = qg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zr(), r === o)) {
            t = tn(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yg(t),
        e === null && $c(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        wc(r, o) ? (s = null) : i !== null && wc(r, i) && (t.flags |= 32),
        by(e, t),
        Ne(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && $c(t), null;
    case 13:
      return Cy(e, t, n);
    case 4:
      return (
        Qf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = eo(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        nh(e, t, r, o, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Q(ua, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Ot(i.value, s)) {
            if (i.children === o.children && !Ue.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Yt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      xc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(x(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  xc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ne(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        qr(t, n),
        (o = mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = wt(r, t.pendingProps)),
        (o = wt(r.type, o)),
        rh(e, t, r, o, n)
      );
    case 15:
      return wy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Ds(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), sa(t)) : (e = !1),
        qr(t, n),
        vy(t, r, o),
        Oc(t, r, o, n),
        _c(null, t, r, !0, e, n)
      );
    case 19:
      return $y(e, t, n);
    case 22:
      return Sy(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Fy(e, t) {
  return pg(e, t);
}
function Ib(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pt(e, t, n, r) {
  return new Ib(e, t, n, r);
}
function cd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nb(e) {
  if (typeof e == "function") return cd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tf)) return 11;
    if (e === _f) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) cd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tr:
        return nr(n.children, o, i, t);
      case Pf:
        (s = 8), (o |= 8);
        break;
      case Ju:
        return (
          (e = pt(12, n, t, o | 2)), (e.elementType = Ju), (e.lanes = i), e
        );
      case Xu:
        return (e = pt(13, n, t, o)), (e.elementType = Xu), (e.lanes = i), e;
      case Zu:
        return (e = pt(19, n, t, o)), (e.elementType = Zu), (e.lanes = i), e;
      case Yv:
        return qa(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gv:
              s = 10;
              break e;
            case Qv:
              s = 9;
              break e;
            case Tf:
              s = 11;
              break e;
            case _f:
              s = 14;
              break e;
            case dn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function nr(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function qa(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Yv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ou(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function iu(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rb(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function fd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new Rb(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gf(i),
    e
  );
}
function Ab(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zy(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (vr(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return zg(e, n, t);
  }
  return t;
}
function Uy(e, t, n, r, o, i, s, a, l) {
  return (
    (e = fd(n, r, !0, e, o, i, s, a, l)),
    (e.context = zy(null)),
    (n = e.current),
    (r = Re()),
    (o = _n(n)),
    (i = Yt(r, o)),
    (i.callback = t ?? null),
    Pn(n, i, o),
    (e.current.lanes = o),
    Ci(e, o, r),
    He(e, r),
    e
  );
}
function Ga(e, t, n, r) {
  var o = t.current,
    i = Re(),
    s = _n(o);
  return (
    (n = zy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pn(o, t, s)),
    e !== null && (kt(e, o, s, i), js(e, o, s)),
    s
  );
}
function wa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dd(e, t) {
  mh(e, t), (e = e.alternate) && mh(e, t);
}
function jb() {
  return null;
}
var Vy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function pd(e) {
  this._internalRoot = e;
}
Qa.prototype.render = pd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Ga(e, t, null, null);
};
Qa.prototype.unmount = pd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dr(function () {
      Ga(null, e, null, null);
    }),
      (t[Zt] = null);
  }
};
function Qa(e) {
  this._internalRoot = e;
}
Qa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    hn.splice(n, 0, e), n === 0 && Eg(e);
  }
};
function hd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ya(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vh() {}
function Lb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = wa(s);
        i.call(u);
      };
    }
    var s = Uy(t, r, e, 0, null, !1, !1, "", vh);
    return (
      (e._reactRootContainer = s),
      (e[Zt] = s.current),
      li(e.nodeType === 8 ? e.parentNode : e),
      dr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = wa(l);
      a.call(u);
    };
  }
  var l = fd(e, 0, !1, null, null, !1, !1, "", vh);
  return (
    (e._reactRootContainer = l),
    (e[Zt] = l.current),
    li(e.nodeType === 8 ? e.parentNode : e),
    dr(function () {
      Ga(t, l, n, r);
    }),
    l
  );
}
function Ja(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = wa(s);
        a.call(l);
      };
    }
    Ga(t, s, e, o);
  } else s = Lb(n, t, e, o, r);
  return wa(s);
}
yg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 &&
          (Rf(t, n | 1), He(t, ie()), !(H & 6) && ((ro = ie() + 500), Mn()));
      }
      break;
    case 13:
      dr(function () {
        var r = en(e, 1);
        if (r !== null) {
          var o = Re();
          kt(r, e, 1, o);
        }
      }),
        dd(e, 1);
  }
};
Af = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Re();
      kt(t, e, 134217728, n);
    }
    dd(e, 134217728);
  }
};
wg = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = en(e, t);
    if (n !== null) {
      var r = Re();
      kt(n, e, t, r);
    }
    dd(e, t);
  }
};
Sg = function () {
  return K;
};
bg = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
uc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = za(r);
            if (!o) throw Error(x(90));
            Xv(r), nc(r, o);
          }
        }
      }
      break;
    case "textarea":
      eg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vr(e, !!n.multiple, t, !1);
  }
};
ag = ad;
lg = dr;
var Bb = { usingClientEntryPoint: !1, Events: [xi, Rr, za, ig, sg, ad] },
  To = {
    findFiberByHostInstance: Xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Db = {
    bundleType: To.bundleType,
    version: To.version,
    rendererPackageName: To.rendererPackageName,
    rendererConfig: To.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: To.findFiberByHostInstance || jb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hs.isDisabled && hs.supportsFiber)
    try {
      (Ba = hs.inject(Db)), (Dt = hs);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bb;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hd(t)) throw Error(x(200));
  return Ab(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!hd(e)) throw Error(x(299));
  var n = !1,
    r = "",
    o = Vy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = fd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Zt] = t.current),
    li(e.nodeType === 8 ? e.parentNode : e),
    new pd(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = fg(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return dr(e);
};
rt.hydrate = function (e, t, n) {
  if (!Ya(t)) throw Error(x(200));
  return Ja(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!hd(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Vy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Uy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Zt] = t.current),
    li(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qa(t);
};
rt.render = function (e, t, n) {
  if (!Ya(t)) throw Error(x(200));
  return Ja(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!Ya(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (dr(function () {
        Ja(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Zt] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = ad;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ya(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Ja(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function Hy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy);
    } catch (e) {
      console.error(e);
    }
}
Hy(), (Hv.exports = rt);
var Mb = Hv.exports,
  Wy,
  gh = Mb;
(Wy = gh.createRoot), gh.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gi() {
  return (
    (gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gi.apply(this, arguments)
  );
}
var bn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(bn || (bn = {}));
const yh = "popstate";
function Fb(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Uc(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : qy(o);
  }
  return Ub(t, n, null, e);
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ky(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zb() {
  return Math.random().toString(36).substr(2, 8);
}
function wh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Uc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    gi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? mo(t) : t,
      { state: n, key: (t && t.key) || r || zb() }
    )
  );
}
function qy(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function mo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ub(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = bn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(gi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = bn.Pop;
    let E = c(),
      m = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: y.location, delta: m });
  }
  function d(E, m) {
    a = bn.Push;
    let p = Uc(y.location, E, m);
    u = c() + 1;
    let v = wh(p, u),
      b = y.createHref(p);
    try {
      s.pushState(v, "", b);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      o.location.assign(b);
    }
    i && l && l({ action: a, location: y.location, delta: 1 });
  }
  function h(E, m) {
    a = bn.Replace;
    let p = Uc(y.location, E, m);
    u = c();
    let v = wh(p, u),
      b = y.createHref(p);
    s.replaceState(v, "", b),
      i && l && l({ action: a, location: y.location, delta: 0 });
  }
  function g(E) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof E == "string" ? E : qy(E);
    return (
      (p = p.replace(/ $/, "%20")),
      fe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(E) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(yh, f),
        (l = E),
        () => {
          o.removeEventListener(yh, f), (l = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: g,
    encodeLocation(E) {
      let m = g(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: h,
    go(E) {
      return s.go(E);
    },
  };
  return y;
}
var Sh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sh || (Sh = {}));
function Vb(e, t, n) {
  return n === void 0 && (n = "/"), Hb(e, t, n, !1);
}
function Hb(e, t, n, r) {
  let o = typeof t == "string" ? mo(t) : t,
    i = Yy(o.pathname || "/", n);
  if (i == null) return null;
  let s = Gy(e);
  Wb(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = nE(i);
    a = eE(s[l], u, r);
  }
  return a;
}
function Gy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (fe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = rr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (fe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Gy(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Xb(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of Qy(i.path)) o(i, s, l);
    }),
    t
  );
}
function Qy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Qy(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Wb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Zb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Kb = /^:[\w-]+$/,
  qb = 3,
  Gb = 2,
  Qb = 1,
  Yb = 10,
  Jb = -2,
  bh = (e) => e === "*";
function Xb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bh) && (r += Jb),
    t && (r += Gb),
    n
      .filter((o) => !bh(o))
      .reduce((o, i) => o + (Kb.test(i) ? qb : i === "" ? Qb : Yb), r)
  );
}
function Zb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function eE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = Eh(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Eh(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: rr([i, f.pathname]),
        pathnameBase: sE(rr([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = rr([i, f.pathnameBase]));
  }
  return s;
}
function Eh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = tE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: h } = c;
      if (d === "*") {
        let y = a[f] || "";
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[f];
      return (
        h && !g ? (u[d] = void 0) : (u[d] = (g || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function tE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ky(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function nE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ky(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Yy(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function rE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? mo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : oE(n, t)) : t,
    search: aE(r),
    hash: lE(o),
  };
}
function oE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function su(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Jy(e, t) {
  let n = iE(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Xy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = mo(e))
    : ((o = gi({}, e)),
      fe(
        !o.pathname || !o.pathname.includes("?"),
        su("?", "pathname", "search", o)
      ),
      fe(
        !o.pathname || !o.pathname.includes("#"),
        su("#", "pathname", "hash", o)
      ),
      fe(!o.search || !o.search.includes("#"), su("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = rE(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const rr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  sE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  aE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  lE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function uE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Zy = ["post", "put", "patch", "delete"];
new Set(Zy);
const cE = ["get", ...Zy];
new Set(cE);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yi() {
  return (
    (yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yi.apply(this, arguments)
  );
}
const md = w.createContext(null),
  fE = w.createContext(null),
  Oi = w.createContext(null),
  Xa = w.createContext(null),
  Fn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ew = w.createContext(null);
function Pi() {
  return w.useContext(Xa) != null;
}
function Za() {
  return Pi() || fe(!1), w.useContext(Xa).location;
}
function tw(e) {
  w.useContext(Oi).static || w.useLayoutEffect(e);
}
function vd() {
  let { isDataRoute: e } = w.useContext(Fn);
  return e ? xE() : dE();
}
function dE() {
  Pi() || fe(!1);
  let e = w.useContext(md),
    { basename: t, future: n, navigator: r } = w.useContext(Oi),
    { matches: o } = w.useContext(Fn),
    { pathname: i } = Za(),
    s = JSON.stringify(Jy(o, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    tw(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Xy(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : rr([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function pE() {
  let { matches: e } = w.useContext(Fn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function hE(e, t) {
  return mE(e, t);
}
function mE(e, t, n, r) {
  Pi() || fe(!1);
  let { navigator: o } = w.useContext(Oi),
    { matches: i } = w.useContext(Fn),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Za(),
    c;
  if (t) {
    var f;
    let E = typeof t == "string" ? mo(t) : t;
    l === "/" || ((f = E.pathname) != null && f.startsWith(l)) || fe(!1),
      (c = E);
  } else c = u;
  let d = c.pathname || "/",
    h = d;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let g = Vb(e, { pathname: h }),
    y = SE(
      g &&
        g.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: rr([
              l,
              o.encodeLocation
                ? o.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : rr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && y
    ? w.createElement(
        Xa.Provider,
        {
          value: {
            location: yi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: bn.Pop,
          },
        },
        y
      )
    : y;
}
function vE() {
  let e = $E(),
    t = uE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const gE = w.createElement(vE, null);
class yE extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Fn.Provider,
          { value: this.props.routeContext },
          w.createElement(ew.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function wE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(md);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Fn.Provider, { value: t }, r)
  );
}
function SE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || fe(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: h } = n,
          g =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!h || h[f.route.id] === void 0);
        if (f.route.lazy || g) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let h,
      g = !1,
      y = null,
      E = null;
    n &&
      ((h = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || gE),
      l &&
        (u < 0 && d === 0
          ? ((g = !0), (E = null))
          : u === d &&
            ((g = !0), (E = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, d + 1)),
      p = () => {
        let v;
        return (
          h
            ? (v = y)
            : g
            ? (v = E)
            : f.route.Component
            ? (v = w.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = c),
          w.createElement(wE, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? w.createElement(yE, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var nw = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(nw || {}),
  Sa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Sa || {});
function bE(e) {
  let t = w.useContext(md);
  return t || fe(!1), t;
}
function EE(e) {
  let t = w.useContext(fE);
  return t || fe(!1), t;
}
function CE(e) {
  let t = w.useContext(Fn);
  return t || fe(!1), t;
}
function rw(e) {
  let t = CE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || fe(!1), n.route.id;
}
function $E() {
  var e;
  let t = w.useContext(ew),
    n = EE(Sa.UseRouteError),
    r = rw(Sa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function xE() {
  let { router: e } = bE(nw.UseNavigateStable),
    t = rw(Sa.UseNavigateStable),
    n = w.useRef(!1);
  return (
    tw(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, yi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function kE(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Pi() || fe(!1);
  let { future: i, static: s } = w.useContext(Oi),
    { matches: a } = w.useContext(Fn),
    { pathname: l } = Za(),
    u = vd(),
    c = Xy(t, Jy(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(c);
  return (
    w.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r]
    ),
    null
  );
}
function Vc(e) {
  fe(!1);
}
function OE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = bn.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Pi() && fe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: yi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = mo(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: h = null,
      key: g = "default",
    } = r,
    y = w.useMemo(() => {
      let E = Yy(c, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: d, state: h, key: g },
            navigationType: o,
          };
    }, [l, c, f, d, h, g, o]);
  return y == null
    ? null
    : w.createElement(
        Oi.Provider,
        { value: u },
        w.createElement(Xa.Provider, { children: n, value: y })
      );
}
function PE(e) {
  let { children: t, location: n } = e;
  return hE(Hc(t), n);
}
new Promise(() => {});
function Hc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Hc(r.props.children, i));
        return;
      }
      r.type !== Vc && fe(!1), !r.props.index || !r.props.children || fe(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Hc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const TE = "6";
try {
  window.__reactRouterVersion = TE;
} catch {}
const _E = "startTransition",
  Ch = P2[_E];
function IE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = Fb({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (f) => {
        u && Ch ? Ch(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    w.useLayoutEffect(() => s.listen(c), [s, c]),
    w.createElement(OE, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var $h;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})($h || ($h = {}));
var xh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(xh || (xh = {}));
var Ce = [];
for (var au = 0; au < 256; ++au) Ce.push((au + 256).toString(16).slice(1));
function NE(e, t = 0) {
  return (
    Ce[e[t + 0]] +
    Ce[e[t + 1]] +
    Ce[e[t + 2]] +
    Ce[e[t + 3]] +
    "-" +
    Ce[e[t + 4]] +
    Ce[e[t + 5]] +
    "-" +
    Ce[e[t + 6]] +
    Ce[e[t + 7]] +
    "-" +
    Ce[e[t + 8]] +
    Ce[e[t + 9]] +
    "-" +
    Ce[e[t + 10]] +
    Ce[e[t + 11]] +
    Ce[e[t + 12]] +
    Ce[e[t + 13]] +
    Ce[e[t + 14]] +
    Ce[e[t + 15]]
  ).toLowerCase();
}
var ms,
  RE = new Uint8Array(16);
function AE() {
  if (
    !ms &&
    ((ms =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !ms)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return ms(RE);
}
var jE =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const kh = { randomUUID: jE };
function LE(e, t, n) {
  if (kh.randomUUID && !t && !e) return kh.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || AE)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), NE(r);
}
let BE = { data: "" },
  DE = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || BE,
  ME = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  FE = /\/\*[^]*?\*\/|  +/g,
  Oh = /\n+/g,
  vn = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let s = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + s + ";")
          : (r +=
              i[1] == "f"
                ? vn(s, i)
                : i + "{" + vn(s, i[1] == "k" ? "" : t) + "}")
        : typeof s == "object"
        ? (r += vn(
            s,
            t
              ? t.replace(/([^,])+/g, (a) =>
                  i.replace(/(^:.*)|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
                  )
                )
              : i
          ))
        : s != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += vn.p ? vn.p(i, s) : i + ":" + s + ";"));
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  Wt = {},
  ow = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + ow(e[n]);
      return t;
    }
    return e;
  },
  zE = (e, t, n, r, o) => {
    let i = ow(e),
      s =
        Wt[i] ||
        (Wt[i] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(i));
    if (!Wt[s]) {
      let l =
        i !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}];
              for (; (c = ME.exec(u.replace(FE, ""))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(Oh, " ").trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(Oh, " ").trim());
              return d[0];
            })(e);
      Wt[s] = vn(o ? { ["@keyframes " + s]: l } : l, n ? "" : "." + s);
    }
    let a = n && Wt.g ? Wt.g : null;
    return (
      n && (Wt.g = Wt[s]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(Wt[s], t, r, a),
      s
    );
  },
  UE = (e, t, n) =>
    e.reduce((r, o, i) => {
      let s = t[i];
      if (s && s.call) {
        let a = s(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        s = l
          ? "." + l
          : a && typeof a == "object"
          ? a.props
            ? ""
            : vn(a, "")
          : a === !1
          ? ""
          : a;
      }
      return r + o + (s ?? "");
    }, "");
function el(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return zE(
    n.unshift
      ? n.raw
        ? UE(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    DE(t.target),
    t.g,
    t.o,
    t.k
  );
}
let iw, Wc, Kc;
el.bind({ g: 1 });
let nn = el.bind({ k: 1 });
function VE(e, t, n, r) {
  (vn.p = t), (iw = e), (Wc = n), (Kc = r);
}
function zn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, s) {
      let a = Object.assign({}, i),
        l = a.className || o.className;
      (n.p = Object.assign({ theme: Wc && Wc() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = el.apply(n, r) + (l ? " " + l : ""));
      let u = e;
      return (
        e[0] && ((u = a.as || e), delete a.as), Kc && u[0] && Kc(a), iw(u, a)
      );
    }
    return o;
  };
}
var HE = (e) => typeof e == "function",
  ba = (e, t) => (HE(e) ? e(t) : e),
  WE = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  sw = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  KE = 20,
  Us = new Map(),
  qE = 1e3,
  Ph = (e) => {
    if (Us.has(e)) return;
    let t = setTimeout(() => {
      Us.delete(e), gr({ type: 4, toastId: e });
    }, qE);
    Us.set(e, t);
  },
  GE = (e) => {
    let t = Us.get(e);
    t && clearTimeout(t);
  },
  qc = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, KE) };
      case 1:
        return (
          t.toast.id && GE(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((i) => i.id === n.id)
          ? qc(e, { type: 1, toast: n })
          : qc(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? Ph(r)
            : e.toasts.forEach((i) => {
                Ph(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  Vs = [],
  Hs = { toasts: [], pausedAt: void 0 },
  gr = (e) => {
    (Hs = qc(Hs, e)),
      Vs.forEach((t) => {
        t(Hs);
      });
  },
  QE = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  YE = (e = {}) => {
    let [t, n] = w.useState(Hs);
    w.useEffect(
      () => (
        Vs.push(n),
        () => {
          let o = Vs.indexOf(n);
          o > -1 && Vs.splice(o, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((o) => {
      var i, s;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          QE[o.type],
        style: {
          ...e.style,
          ...((s = e[o.type]) == null ? void 0 : s.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  JE = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || WE(),
  }),
  Ti = (e) => (t, n) => {
    let r = JE(t, e, n);
    return gr({ type: 2, toast: r }), r.id;
  },
  Ze = (e, t) => Ti("blank")(e, t);
Ze.error = Ti("error");
Ze.success = Ti("success");
Ze.loading = Ti("loading");
Ze.custom = Ti("custom");
Ze.dismiss = (e) => {
  gr({ type: 3, toastId: e });
};
Ze.remove = (e) => gr({ type: 4, toastId: e });
Ze.promise = (e, t, n) => {
  let r = Ze.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (o) => (
          Ze.success(ba(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          o
        )
      )
      .catch((o) => {
        Ze.error(ba(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var XE = (e, t) => {
    gr({ type: 1, toast: { id: e, height: t } });
  },
  ZE = () => {
    gr({ type: 5, time: Date.now() });
  },
  eC = (e) => {
    let { toasts: t, pausedAt: n } = YE(e);
    w.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        s = t.map((a) => {
          if (a.duration === 1 / 0) return;
          let l = (a.duration || 0) + a.pauseDuration - (i - a.createdAt);
          if (l < 0) {
            a.visible && Ze.dismiss(a.id);
            return;
          }
          return setTimeout(() => Ze.dismiss(a.id), l);
        });
      return () => {
        s.forEach((a) => a && clearTimeout(a));
      };
    }, [t, n]);
    let r = w.useCallback(() => {
        n && gr({ type: 6, time: Date.now() });
      }, [n]),
      o = w.useCallback(
        (i, s) => {
          let {
              reverseOrder: a = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = s || {},
            c = t.filter(
              (h) => (h.position || u) === (i.position || u) && h.height
            ),
            f = c.findIndex((h) => h.id === i.id),
            d = c.filter((h, g) => g < f && h.visible).length;
          return c
            .filter((h) => h.visible)
            .slice(...(a ? [d + 1] : [0, d]))
            .reduce((h, g) => h + (g.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: XE,
        startPause: ZE,
        endPause: r,
        calculateOffset: o,
      },
    };
  },
  tC = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  nC = nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  rC = nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  oC = zn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${nC} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${rC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  iC = nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  sC = zn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${iC} 1s linear infinite;
`,
  aC = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  lC = nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  uC = zn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${aC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lC} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  cC = zn("div")`
  position: absolute;
`,
  fC = zn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  dC = nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  pC = zn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${dC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  hC = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? w.createElement(pC, null, t)
        : t
      : n === "blank"
      ? null
      : w.createElement(
          fC,
          null,
          w.createElement(sC, { ...r }),
          n !== "loading" &&
            w.createElement(
              cC,
              null,
              n === "error"
                ? w.createElement(oC, { ...r })
                : w.createElement(uC, { ...r })
            )
        );
  },
  mC = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  vC = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  gC = "0%{opacity:0;} 100%{opacity:1;}",
  yC = "0%{opacity:1;} 100%{opacity:0;}",
  wC = zn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  SC = zn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  bC = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = sw() ? [gC, yC] : [mC(n), vC(n)];
    return {
      animation: t
        ? `${nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${nn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  EC = w.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? bC(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = w.createElement(hC, { toast: e }),
      s = w.createElement(SC, { ...e.ariaProps }, ba(e.message, e));
    return w.createElement(
      wC,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: s })
        : w.createElement(w.Fragment, null, i, s)
    );
  });
VE(w.createElement);
var CC = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = w.useCallback(
      (s) => {
        if (s) {
          let a = () => {
            let l = s.getBoundingClientRect().height;
            r(e, l);
          };
          a(),
            new MutationObserver(a).observe(s, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return w.createElement("div", { ref: i, className: t, style: n }, o);
  },
  $C = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: sw() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  xC = el`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  vs = 16,
  kC = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: s,
  }) => {
    let { toasts: a, handlers: l } = eC(n);
    return w.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: vs,
          left: vs,
          right: vs,
          bottom: vs,
          pointerEvents: "none",
          ...i,
        },
        className: s,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      a.map((u) => {
        let c = u.position || t,
          f = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          d = $C(c, f);
        return w.createElement(
          CC,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? xC : "",
            style: d,
          },
          u.type === "custom"
            ? ba(u.message, u)
            : o
            ? o(u)
            : w.createElement(EC, { toast: u, position: c })
        );
      })
    );
  },
  Fr = Ze;
const OC = () => {
  const [e, t] = w.useState(""),
    [n, r] = w.useState(""),
    o = vd(),
    i = (l) => {
      l.preventDefault();
      const u = LE();
      console.log(u), t(u), Fr.success("Created a new Room");
    },
    s = () => {
      if (!e || !n) {
        Fr.error("ROOM ID & UserName is required");
        return;
      }
      o(`/editor/${e}`, { state: { userName: n } });
    },
    a = (l) => {
      l.code === "Enter" && s();
    };
  return N.jsx("div", {
    children: N.jsxs("div", {
      className: "homepageWrapper",
      children: [
        N.jsxs("div", {
          className: "formWrapper",
          children: [
            N.jsx("img", { src: "/code-editor-logo.png", alt: "logo" }),
            N.jsx("h4", {
              className: "mainLabel",
              children: "Paste invitation ROOM ID",
            }),
            N.jsxs("div", {
              className: "inputGroup",
              children: [
                N.jsx("input", {
                  type: "text",
                  className: "inputBox",
                  placeholder: "ROOM ID",
                  value: e,
                  onChange: (l) => t(l.target.value),
                  onKeyUp: (l) => a(l),
                }),
                N.jsx("input", {
                  type: "text",
                  className: "inputBox",
                  placeholder: "User Name",
                  value: n,
                  onChange: (l) => r(l.target.value),
                  onKeyUp: (l) => a(l),
                }),
                N.jsx("button", {
                  className: "btn joinBtn",
                  onClick: s,
                  children: "JOIN",
                }),
                N.jsxs("span", {
                  className: "createInfo",
                  children: [
                    "Of you dont have an invite then create  ",
                    N.jsx("a", {
                      href: "",
                      className: "createNewBtn",
                      onClick: (l) => i(l),
                      children: "new Room",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        N.jsx("footer", {
          children: N.jsxs("h4", {
            children: [
              "Build with 💜 by",
              " ",
              N.jsx("a", {
                href: "https://chintamanipala.in",
                children: "Chintamani pala",
              }),
            ],
          }),
        }),
      ],
    }),
  });
};
function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(null, arguments)
  );
}
var _o = function (e) {
    return e && e.Math === Math && e;
  },
  Le =
    _o(typeof globalThis == "object" && globalThis) ||
    _o(typeof window == "object" && window) ||
    _o(typeof self == "object" && self) ||
    _o(typeof yn == "object" && yn) ||
    _o(typeof yn == "object" && yn) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  se = function (e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  },
  PC = se,
  _i = !PC(function () {
    var e = function () {}.bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }),
  TC = _i,
  aw = Function.prototype,
  Th = aw.apply,
  _h = aw.call,
  tl =
    (typeof Reflect == "object" && Reflect.apply) ||
    (TC
      ? _h.bind(Th)
      : function () {
          return _h.apply(Th, arguments);
        }),
  lw = _i,
  uw = Function.prototype,
  Gc = uw.call,
  _C = lw && uw.bind.bind(Gc, Gc),
  ae = lw
    ? _C
    : function (e) {
        return function () {
          return Gc.apply(e, arguments);
        };
      },
  cw = ae,
  IC = cw({}.toString),
  NC = cw("".slice),
  Un = function (e) {
    return NC(IC(e), 8, -1);
  },
  RC = Un,
  AC = ae,
  fw = function (e) {
    if (RC(e) === "Function") return AC(e);
  },
  lu = typeof document == "object" && document.all,
  it =
    typeof lu > "u" && lu !== void 0
      ? function (e) {
          return typeof e == "function" || e === lu;
        }
      : function (e) {
          return typeof e == "function";
        },
  Ii = {},
  jC = se,
  st = !jC(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] !== 7
    );
  }),
  LC = _i,
  gs = Function.prototype.call,
  Vn = LC
    ? gs.bind(gs)
    : function () {
        return gs.apply(gs, arguments);
      },
  nl = {},
  dw = {}.propertyIsEnumerable,
  pw = Object.getOwnPropertyDescriptor,
  BC = pw && !dw.call({ 1: 2 }, 1);
nl.f = BC
  ? function (t) {
      var n = pw(this, t);
      return !!n && n.enumerable;
    }
  : dw;
var rl = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t,
    };
  },
  DC = ae,
  MC = se,
  FC = Un,
  uu = Object,
  zC = DC("".split),
  ol = MC(function () {
    return !uu("z").propertyIsEnumerable(0);
  })
    ? function (e) {
        return FC(e) === "String" ? zC(e, "") : uu(e);
      }
    : uu,
  hw = function (e) {
    return e == null;
  },
  UC = hw,
  VC = TypeError,
  Ni = function (e) {
    if (UC(e)) throw new VC("Can't call method on " + e);
    return e;
  },
  HC = ol,
  WC = Ni,
  sn = function (e) {
    return HC(WC(e));
  },
  KC = it,
  Ht = function (e) {
    return typeof e == "object" ? e !== null : KC(e);
  },
  Ke = {},
  cu = Ke,
  fu = Le,
  qC = it,
  Ih = function (e) {
    return qC(e) ? e : void 0;
  },
  Hn = function (e, t) {
    return arguments.length < 2
      ? Ih(cu[e]) || Ih(fu[e])
      : (cu[e] && cu[e][t]) || (fu[e] && fu[e][t]);
  },
  GC = ae,
  yr = GC({}.isPrototypeOf),
  QC = Le,
  Nh = QC.navigator,
  Rh = Nh && Nh.userAgent,
  mw = Rh ? String(Rh) : "",
  vw = Le,
  du = mw,
  Ah = vw.process,
  jh = vw.Deno,
  Lh = (Ah && Ah.versions) || (jh && jh.version),
  Bh = Lh && Lh.v8,
  Ct,
  Ea;
Bh &&
  ((Ct = Bh.split(".")), (Ea = Ct[0] > 0 && Ct[0] < 4 ? 1 : +(Ct[0] + Ct[1])));
!Ea &&
  du &&
  ((Ct = du.match(/Edge\/(\d+)/)),
  (!Ct || Ct[1] >= 74) &&
    ((Ct = du.match(/Chrome\/(\d+)/)), Ct && (Ea = +Ct[1])));
var il = Ea,
  Dh = il,
  YC = se,
  JC = Le,
  XC = JC.String,
  vo =
    !!Object.getOwnPropertySymbols &&
    !YC(function () {
      var e = Symbol("symbol detection");
      return (
        !XC(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && Dh && Dh < 41)
      );
    }),
  ZC = vo,
  gw = ZC && !Symbol.sham && typeof Symbol.iterator == "symbol",
  e$ = Hn,
  t$ = it,
  n$ = yr,
  r$ = gw,
  o$ = Object,
  sl = r$
    ? function (e) {
        return typeof e == "symbol";
      }
    : function (e) {
        var t = e$("Symbol");
        return t$(t) && n$(t.prototype, o$(e));
      },
  i$ = String,
  gd = function (e) {
    try {
      return i$(e);
    } catch {
      return "Object";
    }
  },
  s$ = it,
  a$ = gd,
  l$ = TypeError,
  al = function (e) {
    if (s$(e)) return e;
    throw new l$(a$(e) + " is not a function");
  },
  u$ = al,
  c$ = hw,
  f$ = function (e, t) {
    var n = e[t];
    return c$(n) ? void 0 : u$(n);
  },
  pu = Vn,
  hu = it,
  mu = Ht,
  d$ = TypeError,
  p$ = function (e, t) {
    var n, r;
    if (
      (t === "string" && hu((n = e.toString)) && !mu((r = pu(n, e)))) ||
      (hu((n = e.valueOf)) && !mu((r = pu(n, e)))) ||
      (t !== "string" && hu((n = e.toString)) && !mu((r = pu(n, e))))
    )
      return r;
    throw new d$("Can't convert object to primitive value");
  },
  yw = { exports: {} },
  Mh = Le,
  h$ = Object.defineProperty,
  m$ = function (e, t) {
    try {
      h$(Mh, e, { value: t, configurable: !0, writable: !0 });
    } catch {
      Mh[e] = t;
    }
    return t;
  },
  v$ = Le,
  g$ = m$,
  Fh = "__core-js_shared__",
  zh = (yw.exports = v$[Fh] || g$(Fh, {}));
(zh.versions || (zh.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var yd = yw.exports,
  Uh = yd,
  Ri = function (e, t) {
    return Uh[e] || (Uh[e] = t || {});
  },
  y$ = Ni,
  w$ = Object,
  Wn = function (e) {
    return w$(y$(e));
  },
  S$ = ae,
  b$ = Wn,
  E$ = S$({}.hasOwnProperty),
  Pt =
    Object.hasOwn ||
    function (t, n) {
      return E$(b$(t), n);
    },
  C$ = ae,
  $$ = 0,
  x$ = Math.random(),
  k$ = C$((1).toString),
  wd = function (e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + k$(++$$ + x$, 36);
  },
  O$ = Le,
  P$ = Ri,
  Vh = Pt,
  T$ = wd,
  _$ = vo,
  I$ = gw,
  zr = O$.Symbol,
  vu = P$("wks"),
  N$ = I$ ? zr.for || zr : (zr && zr.withoutSetter) || T$,
  Tt = function (e) {
    return (
      Vh(vu, e) || (vu[e] = _$ && Vh(zr, e) ? zr[e] : N$("Symbol." + e)), vu[e]
    );
  },
  R$ = Vn,
  Hh = Ht,
  Wh = sl,
  A$ = f$,
  j$ = p$,
  L$ = Tt,
  B$ = TypeError,
  D$ = L$("toPrimitive"),
  ww = function (e, t) {
    if (!Hh(e) || Wh(e)) return e;
    var n = A$(e, D$),
      r;
    if (n) {
      if ((t === void 0 && (t = "default"), (r = R$(n, e, t)), !Hh(r) || Wh(r)))
        return r;
      throw new B$("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), j$(e, t);
  },
  M$ = ww,
  F$ = sl,
  Sd = function (e) {
    var t = M$(e, "string");
    return F$(t) ? t : t + "";
  },
  z$ = Le,
  Kh = Ht,
  Qc = z$.document,
  U$ = Kh(Qc) && Kh(Qc.createElement),
  Sw = function (e) {
    return U$ ? Qc.createElement(e) : {};
  },
  V$ = st,
  H$ = se,
  W$ = Sw,
  bw =
    !V$ &&
    !H$(function () {
      return (
        Object.defineProperty(W$("div"), "a", {
          get: function () {
            return 7;
          },
        }).a !== 7
      );
    }),
  K$ = st,
  q$ = Vn,
  G$ = nl,
  Q$ = rl,
  Y$ = sn,
  J$ = Sd,
  X$ = Pt,
  Z$ = bw,
  qh = Object.getOwnPropertyDescriptor;
Ii.f = K$
  ? qh
  : function (t, n) {
      if (((t = Y$(t)), (n = J$(n)), Z$))
        try {
          return qh(t, n);
        } catch {}
      if (X$(t, n)) return Q$(!q$(G$.f, t, n), t[n]);
    };
var ex = se,
  tx = it,
  nx = /#|\.prototype\./,
  Ai = function (e, t) {
    var n = ox[rx(e)];
    return n === sx ? !0 : n === ix ? !1 : tx(t) ? ex(t) : !!t;
  },
  rx = (Ai.normalize = function (e) {
    return String(e).replace(nx, ".").toLowerCase();
  }),
  ox = (Ai.data = {}),
  ix = (Ai.NATIVE = "N"),
  sx = (Ai.POLYFILL = "P"),
  ax = Ai,
  Gh = fw,
  lx = al,
  ux = _i,
  cx = Gh(Gh.bind),
  Ew = function (e, t) {
    return (
      lx(e),
      t === void 0
        ? e
        : ux
        ? cx(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  an = {},
  fx = st,
  dx = se,
  Cw =
    fx &&
    dx(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype !== 42
      );
    }),
  px = Ht,
  hx = String,
  mx = TypeError,
  go = function (e) {
    if (px(e)) return e;
    throw new mx(hx(e) + " is not an object");
  },
  vx = st,
  gx = bw,
  yx = Cw,
  ys = go,
  Qh = Sd,
  wx = TypeError,
  gu = Object.defineProperty,
  Sx = Object.getOwnPropertyDescriptor,
  yu = "enumerable",
  wu = "configurable",
  Su = "writable";
an.f = vx
  ? yx
    ? function (t, n, r) {
        if (
          (ys(t),
          (n = Qh(n)),
          ys(r),
          typeof t == "function" &&
            n === "prototype" &&
            "value" in r &&
            Su in r &&
            !r[Su])
        ) {
          var o = Sx(t, n);
          o &&
            o[Su] &&
            ((t[n] = r.value),
            (r = {
              configurable: wu in r ? r[wu] : o[wu],
              enumerable: yu in r ? r[yu] : o[yu],
              writable: !1,
            }));
        }
        return gu(t, n, r);
      }
    : gu
  : function (t, n, r) {
      if ((ys(t), (n = Qh(n)), ys(r), gx))
        try {
          return gu(t, n, r);
        } catch {}
      if ("get" in r || "set" in r) throw new wx("Accessors not supported");
      return "value" in r && (t[n] = r.value), t;
    };
var bx = st,
  Ex = an,
  Cx = rl,
  ll = bx
    ? function (e, t, n) {
        return Ex.f(e, t, Cx(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  Io = Le,
  $x = tl,
  xx = fw,
  kx = it,
  Ox = Ii.f,
  Px = ax,
  Cr = Ke,
  Tx = Ew,
  $r = ll,
  Yh = Pt,
  _x = function (e) {
    var t = function (n, r, o) {
      if (this instanceof t) {
        switch (arguments.length) {
          case 0:
            return new e();
          case 1:
            return new e(n);
          case 2:
            return new e(n, r);
        }
        return new e(n, r, o);
      }
      return $x(e, this, arguments);
    };
    return (t.prototype = e.prototype), t;
  },
  ve = function (e, t) {
    var n = e.target,
      r = e.global,
      o = e.stat,
      i = e.proto,
      s = r ? Io : o ? Io[n] : Io[n] && Io[n].prototype,
      a = r ? Cr : Cr[n] || $r(Cr, n, {})[n],
      l = a.prototype,
      u,
      c,
      f,
      d,
      h,
      g,
      y,
      E,
      m;
    for (d in t)
      (u = Px(r ? d : n + (o ? "." : "#") + d, e.forced)),
        (c = !u && s && Yh(s, d)),
        (g = a[d]),
        c &&
          (e.dontCallGetSet
            ? ((m = Ox(s, d)), (y = m && m.value))
            : (y = s[d])),
        (h = c && y ? y : t[d]),
        !(!u && !i && typeof g == typeof h) &&
          (e.bind && c
            ? (E = Tx(h, Io))
            : e.wrap && c
            ? (E = _x(h))
            : i && kx(h)
            ? (E = xx(h))
            : (E = h),
          (e.sham || (h && h.sham) || (g && g.sham)) && $r(E, "sham", !0),
          $r(a, d, E),
          i &&
            ((f = n + "Prototype"),
            Yh(Cr, f) || $r(Cr, f, {}),
            $r(Cr[f], d, h),
            e.real && l && (u || !l[d]) && $r(l, d, h)));
  },
  Ix = Math.ceil,
  Nx = Math.floor,
  Rx =
    Math.trunc ||
    function (t) {
      var n = +t;
      return (n > 0 ? Nx : Ix)(n);
    },
  Ax = Rx,
  bd = function (e) {
    var t = +e;
    return t !== t || t === 0 ? 0 : Ax(t);
  },
  jx = bd,
  Lx = Math.max,
  Bx = Math.min,
  $w = function (e, t) {
    var n = jx(e);
    return n < 0 ? Lx(n + t, 0) : Bx(n, t);
  },
  Dx = bd,
  Mx = Math.min,
  xw = function (e) {
    var t = Dx(e);
    return t > 0 ? Mx(t, 9007199254740991) : 0;
  },
  Fx = xw,
  ji = function (e) {
    return Fx(e.length);
  },
  zx = sn,
  Ux = $w,
  Vx = ji,
  Jh = function (e) {
    return function (t, n, r) {
      var o = zx(t),
        i = Vx(o);
      if (i === 0) return !e && -1;
      var s = Ux(r, i),
        a;
      if (e && n !== n) {
        for (; i > s; ) if (((a = o[s++]), a !== a)) return !0;
      } else
        for (; i > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  Hx = { includes: Jh(!0), indexOf: Jh(!1) },
  ul = {},
  Wx = ae,
  bu = Pt,
  Kx = sn,
  qx = Hx.indexOf,
  Gx = ul,
  Xh = Wx([].push),
  kw = function (e, t) {
    var n = Kx(e),
      r = 0,
      o = [],
      i;
    for (i in n) !bu(Gx, i) && bu(n, i) && Xh(o, i);
    for (; t.length > r; ) bu(n, (i = t[r++])) && (~qx(o, i) || Xh(o, i));
    return o;
  },
  Ed = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Qx = kw,
  Yx = Ed,
  cl =
    Object.keys ||
    function (t) {
      return Qx(t, Yx);
    },
  Li = {};
Li.f = Object.getOwnPropertySymbols;
var Zh = st,
  Jx = ae,
  Xx = Vn,
  Zx = se,
  Eu = cl,
  ek = Li,
  tk = nl,
  nk = Wn,
  rk = ol,
  xr = Object.assign,
  em = Object.defineProperty,
  ok = Jx([].concat),
  ik =
    !xr ||
    Zx(function () {
      if (
        Zh &&
        xr(
          { b: 1 },
          xr(
            em({}, "a", {
              enumerable: !0,
              get: function () {
                em(this, "b", { value: 3, enumerable: !1 });
              },
            }),
            { b: 2 }
          )
        ).b !== 1
      )
        return !0;
      var e = {},
        t = {},
        n = Symbol("assign detection"),
        r = "abcdefghijklmnopqrst";
      return (
        (e[n] = 7),
        r.split("").forEach(function (o) {
          t[o] = o;
        }),
        xr({}, e)[n] !== 7 || Eu(xr({}, t)).join("") !== r
      );
    })
      ? function (t, n) {
          for (
            var r = nk(t), o = arguments.length, i = 1, s = ek.f, a = tk.f;
            o > i;

          )
            for (
              var l = rk(arguments[i++]),
                u = s ? ok(Eu(l), s(l)) : Eu(l),
                c = u.length,
                f = 0,
                d;
              c > f;

            )
              (d = u[f++]), (!Zh || Xx(a, l, d)) && (r[d] = l[d]);
          return r;
        }
      : xr,
  sk = ve,
  tm = ik;
sk(
  { target: "Object", stat: !0, arity: 2, forced: Object.assign !== tm },
  { assign: tm }
);
var ak = Ke,
  lk = ak.Object.assign,
  uk = lk,
  ck = uk;
const Yc = pe(ck);
function Be(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function io(e) {
  "@babel/helpers - typeof";
  return (
    (io =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    io(e)
  );
}
function fk(e, t) {
  if (io(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (io(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ow(e) {
  var t = fk(e, "string");
  return io(t) == "symbol" ? t : t + "";
}
function dk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Ow(r.key), r);
  }
}
function De(e, t, n) {
  return (
    t && dk(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var pk = Tt,
  hk = pk("toStringTag"),
  Pw = {};
Pw[hk] = "z";
var Cd = String(Pw) === "[object z]",
  mk = Cd,
  vk = it,
  Ws = Un,
  gk = Tt,
  yk = gk("toStringTag"),
  wk = Object,
  Sk =
    Ws(
      (function () {
        return arguments;
      })()
    ) === "Arguments",
  bk = function (e, t) {
    try {
      return e[t];
    } catch {}
  },
  $d = mk
    ? Ws
    : function (e) {
        var t, n, r;
        return e === void 0
          ? "Undefined"
          : e === null
          ? "Null"
          : typeof (n = bk((t = wk(e)), yk)) == "string"
          ? n
          : Sk
          ? Ws(t)
          : (r = Ws(t)) === "Object" && vk(t.callee)
          ? "Arguments"
          : r;
      },
  Ek = $d,
  Ck = String,
  wr = function (e) {
    if (Ek(e) === "Symbol")
      throw new TypeError("Cannot convert a Symbol value to a string");
    return Ck(e);
  },
  $k = bd,
  xk = wr,
  kk = Ni,
  Ok = RangeError,
  Pk = function (t) {
    var n = xk(kk(this)),
      r = "",
      o = $k(t);
    if (o < 0 || o === 1 / 0) throw new Ok("Wrong number of repetitions");
    for (; o > 0; (o >>>= 1) && (n += n)) o & 1 && (r += n);
    return r;
  },
  Tw = ae,
  Tk = xw,
  nm = wr,
  _k = Pk,
  Ik = Ni,
  Nk = Tw(_k),
  Rk = Tw("".slice),
  Ak = Math.ceil,
  rm = function (e) {
    return function (t, n, r) {
      var o = nm(Ik(t)),
        i = Tk(n),
        s = o.length,
        a = r === void 0 ? " " : nm(r),
        l,
        u;
      return i <= s || a === ""
        ? o
        : ((l = i - s),
          (u = Nk(a, Ak(l / a.length))),
          u.length > l && (u = Rk(u, 0, l)),
          e ? o + u : u + o);
    };
  },
  jk = { start: rm(!1), end: rm(!0) },
  Kn = ae,
  om = se,
  Gn = jk.start,
  Lk = RangeError,
  Bk = isFinite,
  Dk = Math.abs,
  ln = Date.prototype,
  Cu = ln.toISOString,
  Mk = Kn(ln.getTime),
  Fk = Kn(ln.getUTCDate),
  zk = Kn(ln.getUTCFullYear),
  Uk = Kn(ln.getUTCHours),
  Vk = Kn(ln.getUTCMilliseconds),
  Hk = Kn(ln.getUTCMinutes),
  Wk = Kn(ln.getUTCMonth),
  Kk = Kn(ln.getUTCSeconds),
  qk =
    om(function () {
      return Cu.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z";
    }) ||
    !om(function () {
      Cu.call(new Date(NaN));
    })
      ? function () {
          if (!Bk(Mk(this))) throw new Lk("Invalid time value");
          var t = this,
            n = zk(t),
            r = Vk(t),
            o = n < 0 ? "-" : n > 9999 ? "+" : "";
          return (
            o +
            Gn(Dk(n), o ? 6 : 4, 0) +
            "-" +
            Gn(Wk(t) + 1, 2, 0) +
            "-" +
            Gn(Fk(t), 2, 0) +
            "T" +
            Gn(Uk(t), 2, 0) +
            ":" +
            Gn(Hk(t), 2, 0) +
            ":" +
            Gn(Kk(t), 2, 0) +
            "." +
            Gn(r, 3, 0) +
            "Z"
          );
        }
      : Cu,
  Gk = ve,
  _w = Vn,
  Qk = Wn,
  Yk = ww,
  Jk = qk,
  Xk = Un,
  Zk = se,
  eO = Zk(function () {
    return (
      new Date(NaN).toJSON() !== null ||
      _w(Date.prototype.toJSON, {
        toISOString: function () {
          return 1;
        },
      }) !== 1
    );
  });
Gk(
  { target: "Date", proto: !0, forced: eO },
  {
    toJSON: function (t) {
      var n = Qk(this),
        r = Yk(n, "number");
      return typeof r == "number" && !isFinite(r)
        ? null
        : !("toISOString" in n) && Xk(n) === "Date"
        ? _w(Jk, n)
        : n.toISOString();
    },
  }
);
var tO = ae,
  fl = tO([].slice),
  nO = Un,
  dl =
    Array.isArray ||
    function (t) {
      return nO(t) === "Array";
    },
  rO = ae,
  im = dl,
  oO = it,
  sm = Un,
  iO = wr,
  am = rO([].push),
  sO = function (e) {
    if (oO(e)) return e;
    if (im(e)) {
      for (var t = e.length, n = [], r = 0; r < t; r++) {
        var o = e[r];
        typeof o == "string"
          ? am(n, o)
          : (typeof o == "number" ||
              sm(o) === "Number" ||
              sm(o) === "String") &&
            am(n, iO(o));
      }
      var i = n.length,
        s = !0;
      return function (a, l) {
        if (s) return (s = !1), l;
        if (im(this)) return l;
        for (var u = 0; u < i; u++) if (n[u] === a) return l;
      };
    }
  },
  aO = ve,
  Iw = Hn,
  Nw = tl,
  lO = Vn,
  Bi = ae,
  Rw = se,
  lm = it,
  um = sl,
  Aw = fl,
  uO = sO,
  cO = vo,
  fO = String,
  Nn = Iw("JSON", "stringify"),
  ws = Bi(/./.exec),
  cm = Bi("".charAt),
  dO = Bi("".charCodeAt),
  pO = Bi("".replace),
  hO = Bi((1).toString),
  mO = /[\uD800-\uDFFF]/g,
  fm = /^[\uD800-\uDBFF]$/,
  dm = /^[\uDC00-\uDFFF]$/,
  pm =
    !cO ||
    Rw(function () {
      var e = Iw("Symbol")("stringify detection");
      return (
        Nn([e]) !== "[null]" || Nn({ a: e }) !== "{}" || Nn(Object(e)) !== "{}"
      );
    }),
  hm = Rw(function () {
    return (
      Nn("\uDF06\uD834") !== '"\\udf06\\ud834"' || Nn("\uDEAD") !== '"\\udead"'
    );
  }),
  vO = function (e, t) {
    var n = Aw(arguments),
      r = uO(t);
    if (!(!lm(r) && (e === void 0 || um(e))))
      return (
        (n[1] = function (o, i) {
          if ((lm(r) && (i = lO(r, this, fO(o), i)), !um(i))) return i;
        }),
        Nw(Nn, null, n)
      );
  },
  gO = function (e, t, n) {
    var r = cm(n, t - 1),
      o = cm(n, t + 1);
    return (ws(fm, e) && !ws(dm, o)) || (ws(dm, e) && !ws(fm, r))
      ? "\\u" + hO(dO(e, 0), 16)
      : e;
  };
Nn &&
  aO(
    { target: "JSON", stat: !0, arity: 3, forced: pm || hm },
    {
      stringify: function (t, n, r) {
        var o = Aw(arguments),
          i = Nw(pm ? vO : Nn, null, o);
        return hm && typeof i == "string" ? pO(i, mO, gO) : i;
      },
    }
  );
var Jc = Ke,
  yO = tl;
Jc.JSON || (Jc.JSON = { stringify: JSON.stringify });
var wO = function (t, n, r) {
    return yO(Jc.JSON.stringify, null, arguments);
  },
  SO = wO,
  bO = SO;
const EO = pe(bO);
var CO = ae,
  $O = it,
  Xc = yd,
  xO = CO(Function.toString);
$O(Xc.inspectSource) ||
  (Xc.inspectSource = function (e) {
    return xO(e);
  });
var kO = Xc.inspectSource,
  OO = ae,
  PO = se,
  jw = it,
  TO = $d,
  _O = Hn,
  IO = kO,
  Lw = function () {},
  Bw = _O("Reflect", "construct"),
  xd = /^\s*(?:class|function)\b/,
  NO = OO(xd.exec),
  RO = !xd.test(Lw),
  No = function (t) {
    if (!jw(t)) return !1;
    try {
      return Bw(Lw, [], t), !0;
    } catch {
      return !1;
    }
  },
  Dw = function (t) {
    if (!jw(t)) return !1;
    switch (TO(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return RO || !!NO(xd, IO(t));
    } catch {
      return !0;
    }
  };
Dw.sham = !0;
var kd =
    !Bw ||
    PO(function () {
      var e;
      return (
        No(No.call) ||
        !No(Object) ||
        !No(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? Dw
      : No,
  mm = dl,
  AO = kd,
  jO = Ht,
  LO = Tt,
  BO = LO("species"),
  vm = Array,
  DO = function (e) {
    var t;
    return (
      mm(e) &&
        ((t = e.constructor),
        AO(t) && (t === vm || mm(t.prototype))
          ? (t = void 0)
          : jO(t) && ((t = t[BO]), t === null && (t = void 0))),
      t === void 0 ? vm : t
    );
  },
  MO = DO,
  Mw = function (e, t) {
    return new (MO(e))(t === 0 ? 0 : t);
  },
  FO = Ew,
  zO = ae,
  UO = ol,
  VO = Wn,
  HO = ji,
  WO = Mw,
  gm = zO([].push),
  fn = function (e) {
    var t = e === 1,
      n = e === 2,
      r = e === 3,
      o = e === 4,
      i = e === 6,
      s = e === 7,
      a = e === 5 || i;
    return function (l, u, c, f) {
      for (
        var d = VO(l),
          h = UO(d),
          g = HO(h),
          y = FO(u, c),
          E = 0,
          m = f || WO,
          p = t ? m(l, g) : n || s ? m(l, 0) : void 0,
          v,
          b;
        g > E;
        E++
      )
        if ((a || E in h) && ((v = h[E]), (b = y(v, E, d)), e))
          if (t) p[E] = b;
          else if (b)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return v;
              case 6:
                return E;
              case 2:
                gm(p, v);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                gm(p, v);
            }
      return i ? -1 : r || o ? o : p;
    };
  },
  Od = {
    forEach: fn(0),
    map: fn(1),
    filter: fn(2),
    some: fn(3),
    every: fn(4),
    find: fn(5),
    findIndex: fn(6),
    filterReject: fn(7),
  },
  KO = se,
  qO = Tt,
  GO = il,
  QO = qO("species"),
  pl = function (e) {
    return (
      GO >= 51 ||
      !KO(function () {
        var t = [],
          n = (t.constructor = {});
        return (
          (n[QO] = function () {
            return { foo: 1 };
          }),
          t[e](Boolean).foo !== 1
        );
      })
    );
  },
  YO = ve,
  JO = Od.filter,
  XO = pl,
  ZO = XO("filter");
YO(
  { target: "Array", proto: !0, forced: !ZO },
  {
    filter: function (t) {
      return JO(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var eP = Le,
  tP = Ke,
  Di = function (e, t) {
    var n = tP[e + "Prototype"],
      r = n && n[t];
    if (r) return r;
    var o = eP[e],
      i = o && o.prototype;
    return i && i[t];
  },
  nP = Di,
  rP = nP("Array", "filter"),
  oP = yr,
  iP = rP,
  $u = Array.prototype,
  sP = function (e) {
    var t = e.filter;
    return e === $u || (oP($u, e) && t === $u.filter) ? iP : t;
  },
  aP = sP,
  lP = aP;
const hl = pe(lP);
var uP = st,
  cP = an,
  fP = rl,
  Pd = function (e, t, n) {
    uP ? cP.f(e, t, fP(0, n)) : (e[t] = n);
  },
  dP = ve,
  ym = dl,
  pP = kd,
  hP = Ht,
  wm = $w,
  mP = ji,
  vP = sn,
  gP = Pd,
  yP = Tt,
  wP = pl,
  SP = fl,
  bP = wP("slice"),
  EP = yP("species"),
  xu = Array,
  CP = Math.max;
dP(
  { target: "Array", proto: !0, forced: !bP },
  {
    slice: function (t, n) {
      var r = vP(this),
        o = mP(r),
        i = wm(t, o),
        s = wm(n === void 0 ? o : n, o),
        a,
        l,
        u;
      if (
        ym(r) &&
        ((a = r.constructor),
        pP(a) && (a === xu || ym(a.prototype))
          ? (a = void 0)
          : hP(a) && ((a = a[EP]), a === null && (a = void 0)),
        a === xu || a === void 0)
      )
        return SP(r, i, s);
      for (
        l = new (a === void 0 ? xu : a)(CP(s - i, 0)), u = 0;
        i < s;
        i++, u++
      )
        i in r && gP(l, u, r[i]);
      return (l.length = u), l;
    },
  }
);
var $P = Di,
  xP = $P("Array", "slice"),
  kP = yr,
  OP = xP,
  ku = Array.prototype,
  PP = function (e) {
    var t = e.slice;
    return e === ku || (kP(ku, e) && t === ku.slice) ? OP : t;
  },
  TP = PP,
  _P = TP;
const Fw = pe(_P);
var IP = "react-avatar/",
  Ou = "failing",
  Sm = (function () {
    try {
      return "localStorage" in window && window.localStorage;
    } catch {
      return !1;
    }
  })(),
  Ca = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Be(this, e);
      var n = t.cachePrefix,
        r = n === void 0 ? IP : n,
        o = t.sourceTTL,
        i = o === void 0 ? 7 * 24 * 3600 * 1e3 : o,
        s = t.sourceSize,
        a = s === void 0 ? 20 : s;
      (this.cachePrefix = r), (this.sourceTTL = i), (this.sourceSize = a);
    }
    return (
      De(e, [
        {
          key: "set",
          value: function (n, r) {
            if (Sm) {
              r = EO(r);
              try {
                localStorage.setItem(this.cachePrefix + n, r);
              } catch (o) {
                console.error(o);
              }
            }
          },
        },
        {
          key: "get",
          value: function (n) {
            if (!Sm) return null;
            var r = localStorage.getItem(this.cachePrefix + n);
            return r ? JSON.parse(r) : null;
          },
        },
        {
          key: "sourceFailed",
          value: function (n) {
            var r = this.get(Ou) || [];
            return (
              (r = hl(r).call(r, function (o) {
                var i = o.expires > 0 && o.expires < Date.now(),
                  s = o === n || o.url == n;
                return !i && !s;
              })),
              r.unshift({ url: n, expires: Date.now() + this.sourceTTL }),
              (r = Fw(r).call(r, 0, this.sourceSize - 1)),
              this.set(Ou, r)
            );
          },
        },
        {
          key: "hasSourceFailedBefore",
          value: function (n) {
            var r = this.get(Ou) || [];
            return r.some(function (o) {
              var i = o.expires > 0 && o.expires < Date.now(),
                s = o === n || o.url == n;
              return s && !i;
            });
          },
        },
      ]),
      e
    );
  })();
const NP = new Ca();
var zw = ae,
  RP = al,
  AP = Ht,
  jP = Pt,
  bm = fl,
  LP = _i,
  Uw = Function,
  BP = zw([].concat),
  DP = zw([].join),
  Pu = {},
  MP = function (e, t, n) {
    if (!jP(Pu, t)) {
      for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
      Pu[t] = Uw("C,a", "return new C(" + DP(r, ",") + ")");
    }
    return Pu[t](e, n);
  },
  FP = LP
    ? Uw.bind
    : function (t) {
        var n = RP(this),
          r = n.prototype,
          o = bm(arguments, 1),
          i = function () {
            var a = BP(o, bm(arguments));
            return this instanceof i ? MP(n, a.length, a) : n.apply(t, a);
          };
        return AP(r) && (i.prototype = r), i;
      },
  zP = kd,
  UP = gd,
  VP = TypeError,
  HP = function (e) {
    if (zP(e)) return e;
    throw new VP(UP(e) + " is not a constructor");
  },
  ml = {},
  WP = st,
  KP = Cw,
  qP = an,
  GP = go,
  QP = sn,
  YP = cl;
ml.f =
  WP && !KP
    ? Object.defineProperties
    : function (t, n) {
        GP(t);
        for (var r = QP(n), o = YP(n), i = o.length, s = 0, a; i > s; )
          qP.f(t, (a = o[s++]), r[a]);
        return t;
      };
var JP = Hn,
  XP = JP("document", "documentElement"),
  ZP = Ri,
  eT = wd,
  Em = ZP("keys"),
  Td = function (e) {
    return Em[e] || (Em[e] = eT(e));
  },
  tT = go,
  nT = ml,
  Cm = Ed,
  rT = ul,
  oT = XP,
  iT = Sw,
  sT = Td,
  $m = ">",
  xm = "<",
  Zc = "prototype",
  ef = "script",
  Vw = sT("IE_PROTO"),
  Tu = function () {},
  Hw = function (e) {
    return xm + ef + $m + e + xm + "/" + ef + $m;
  },
  km = function (e) {
    e.write(Hw("")), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  aT = function () {
    var e = iT("iframe"),
      t = "java" + ef + ":",
      n;
    return (
      (e.style.display = "none"),
      oT.appendChild(e),
      (e.src = String(t)),
      (n = e.contentWindow.document),
      n.open(),
      n.write(Hw("document.F=Object")),
      n.close(),
      n.F
    );
  },
  Ss,
  Ks = function () {
    try {
      Ss = new ActiveXObject("htmlfile");
    } catch {}
    Ks =
      typeof document < "u" ? (document.domain && Ss ? km(Ss) : aT()) : km(Ss);
    for (var e = Cm.length; e--; ) delete Ks[Zc][Cm[e]];
    return Ks();
  };
rT[Vw] = !0;
var Ww =
    Object.create ||
    function (t, n) {
      var r;
      return (
        t !== null
          ? ((Tu[Zc] = tT(t)), (r = new Tu()), (Tu[Zc] = null), (r[Vw] = t))
          : (r = Ks()),
        n === void 0 ? r : nT.f(r, n)
      );
    },
  lT = ve,
  uT = Hn,
  _u = tl,
  cT = FP,
  Om = HP,
  fT = go,
  Pm = Ht,
  dT = Ww,
  Kw = se,
  _d = uT("Reflect", "construct"),
  pT = Object.prototype,
  hT = [].push,
  qw = Kw(function () {
    function e() {}
    return !(_d(function () {}, [], e) instanceof e);
  }),
  Gw = !Kw(function () {
    _d(function () {});
  }),
  Tm = qw || Gw;
lT(
  { target: "Reflect", stat: !0, forced: Tm, sham: Tm },
  {
    construct: function (t, n) {
      Om(t), fT(n);
      var r = arguments.length < 3 ? t : Om(arguments[2]);
      if (Gw && !qw) return _d(t, n, r);
      if (t === r) {
        switch (n.length) {
          case 0:
            return new t();
          case 1:
            return new t(n[0]);
          case 2:
            return new t(n[0], n[1]);
          case 3:
            return new t(n[0], n[1], n[2]);
          case 4:
            return new t(n[0], n[1], n[2], n[3]);
        }
        var o = [null];
        return _u(hT, o, n), new (_u(cT, t, o))();
      }
      var i = r.prototype,
        s = dT(Pm(i) ? i : pT),
        a = _u(t, s, n);
      return Pm(a) ? a : s;
    },
  }
);
var mT = Ke,
  vT = mT.Reflect.construct,
  gT = vT,
  yT = gT;
const de = pe(yT);
function tf(e, t) {
  return (
    (tf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    tf(e, t)
  );
}
function Mi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && tf(e, t);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Fi(e, t) {
  if (t && (io(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return $a(e);
}
function gt(e) {
  return (
    (gt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    gt(e)
  );
}
function A(e, t, n) {
  return (
    (t = Ow(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var wT = ve,
  ST = Wn,
  Qw = cl,
  bT = se,
  ET = bT(function () {
    Qw(1);
  });
wT(
  { target: "Object", stat: !0, forced: ET },
  {
    keys: function (t) {
      return Qw(ST(t));
    },
  }
);
var CT = Ke,
  $T = CT.Object.keys,
  xT = $T,
  kT = xT;
const Id = pe(kT);
var Yw = { exports: {} },
  OT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  PT = OT,
  TT = PT;
function Jw() {}
function Xw() {}
Xw.resetWarningCache = Jw;
var _T = function () {
  function e(r, o, i, s, a, l) {
    if (l !== TT) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Xw,
    resetWarningCache: Jw,
  };
  return (n.PropTypes = n), n;
};
Yw.exports = _T();
var IT = Yw.exports;
const O = pe(IT);
function NT(e) {
  if (Array.isArray(e)) return e;
}
function RT(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      s,
      a = [],
      l = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!l && n.return != null && ((s = n.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zw(e, t) {
  if (e) {
    if (typeof e == "string") return nf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? nf(e, t)
        : void 0
    );
  }
}
function AT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jT(e, t) {
  return NT(e) || RT(e, t) || Zw(e, t) || AT();
}
function LT(e) {
  if (Array.isArray(e)) return nf(e);
}
function BT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function DT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MT(e) {
  return LT(e) || BT(e) || Zw(e) || DT();
}
var FT = se,
  zT = function (e, t) {
    var n = [][e];
    return (
      !!n &&
      FT(function () {
        n.call(
          null,
          t ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  },
  UT = ve,
  VT = Od.map,
  HT = pl,
  WT = HT("map");
UT(
  { target: "Array", proto: !0, forced: !WT },
  {
    map: function (t) {
      return VT(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var KT = Di,
  qT = KT("Array", "map"),
  GT = yr,
  QT = qT,
  Iu = Array.prototype,
  YT = function (e) {
    var t = e.map;
    return e === Iu || (GT(Iu, e) && t === Iu.map) ? QT : t;
  },
  JT = YT,
  XT = JT;
const e0 = pe(XT);
var ZT = al,
  e_ = Wn,
  t_ = ol,
  n_ = ji,
  _m = TypeError,
  Im = "Reduce of empty array with no initial value",
  Nm = function (e) {
    return function (t, n, r, o) {
      var i = e_(t),
        s = t_(i),
        a = n_(i);
      if ((ZT(n), a === 0 && r < 2)) throw new _m(Im);
      var l = e ? a - 1 : 0,
        u = e ? -1 : 1;
      if (r < 2)
        for (;;) {
          if (l in s) {
            (o = s[l]), (l += u);
            break;
          }
          if (((l += u), e ? l < 0 : a <= l)) throw new _m(Im);
        }
      for (; e ? l >= 0 : a > l; l += u) l in s && (o = n(o, s[l], l, i));
      return o;
    };
  },
  r_ = { left: Nm(!1), right: Nm(!0) },
  Ro = Le,
  o_ = mw,
  i_ = Un,
  bs = function (e) {
    return o_.slice(0, e.length) === e;
  },
  s_ = (function () {
    return bs("Bun/")
      ? "BUN"
      : bs("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : bs("Deno/")
      ? "DENO"
      : bs("Node.js/")
      ? "NODE"
      : Ro.Bun && typeof Bun.version == "string"
      ? "BUN"
      : Ro.Deno && typeof Deno.version == "object"
      ? "DENO"
      : i_(Ro.process) === "process"
      ? "NODE"
      : Ro.window && Ro.document
      ? "BROWSER"
      : "REST";
  })(),
  a_ = s_,
  l_ = a_ === "NODE",
  u_ = ve,
  c_ = r_.left,
  f_ = zT,
  Rm = il,
  d_ = l_,
  p_ = !d_ && Rm > 79 && Rm < 83,
  h_ = p_ || !f_("reduce");
u_(
  { target: "Array", proto: !0, forced: h_ },
  {
    reduce: function (t) {
      var n = arguments.length;
      return c_(this, t, n, n > 1 ? arguments[1] : void 0);
    },
  }
);
var m_ = Di,
  v_ = m_("Array", "reduce"),
  g_ = yr,
  y_ = v_,
  Nu = Array.prototype,
  w_ = function (e) {
    var t = e.reduce;
    return e === Nu || (g_(Nu, e) && t === Nu.reduce) ? y_ : t;
  },
  S_ = w_,
  b_ = S_;
const t0 = pe(b_);
var n0 = `	
\v\f\r                　\u2028\u2029\uFEFF`,
  E_ = ae,
  C_ = Ni,
  $_ = wr,
  rf = n0,
  Am = E_("".replace),
  x_ = RegExp("^[" + rf + "]+"),
  k_ = RegExp("(^|[^" + rf + "])[" + rf + "]+$"),
  Ru = function (e) {
    return function (t) {
      var n = $_(C_(t));
      return e & 1 && (n = Am(n, x_, "")), e & 2 && (n = Am(n, k_, "$1")), n;
    };
  },
  O_ = { start: Ru(1), end: Ru(2), trim: Ru(3) },
  r0 = Le,
  P_ = se,
  T_ = ae,
  __ = wr,
  I_ = O_.trim,
  N_ = n0,
  R_ = T_("".charAt),
  xa = r0.parseFloat,
  jm = r0.Symbol,
  Lm = jm && jm.iterator,
  A_ =
    1 / xa(N_ + "-0") !== -1 / 0 ||
    (Lm &&
      !P_(function () {
        xa(Object(Lm));
      })),
  j_ = A_
    ? function (t) {
        var n = I_(__(t)),
          r = xa(n);
        return r === 0 && R_(n, 0) === "-" ? -0 : r;
      }
    : xa,
  L_ = ve,
  Bm = j_;
L_({ global: !0, forced: parseFloat !== Bm }, { parseFloat: Bm });
var B_ = Ke,
  D_ = B_.parseFloat,
  M_ = D_,
  F_ = M_;
const z_ = pe(F_);
var U_ = function () {
  var e;
  return !!(
    typeof window < "u" &&
    window !== null &&
    ((e =
      "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)"),
    window.devicePixelRatio > 1.25 ||
      (window.matchMedia && window.matchMedia(e).matches))
  );
};
const V_ = pe(U_);
var H_ = V_(),
  o0 = ["#A62A21", "#7e3794", "#0B51C1", "#3A6024", "#A81563", "#B3003C"],
  W_ = /^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/;
function K_(e, t) {
  for (
    var n,
      r = e0((n = MT(e))).call(n, function (u) {
        return u.charCodeAt(0);
      }),
      o = r.length,
      i = (o % (t - 1)) + 1,
      s =
        t0(r).call(r, function (u, c) {
          return u + c;
        }) % t,
      a = r[0] % t,
      l = 0;
    l < o;
    l++
  )
    a = (i * a + s) % t;
  return a;
}
function Nd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o0;
  if (!e) return "transparent";
  var n = K_(e, t.length);
  return t[n];
}
function vl(e) {
  e = "" + e;
  var t = W_.exec(e) || [],
    n = jT(t, 3),
    r = n[1],
    o = r === void 0 ? 0 : r,
    i = n[2],
    s = i === void 0 ? "px" : i;
  return { value: z_(o), str: o + s, unit: s };
}
function gl(e) {
  return (
    (e = vl(e)),
    isNaN(e.value)
      ? (e = 512)
      : e.unit === "px"
      ? (e = e.value)
      : e.value === 0
      ? (e = 0)
      : (e = 512),
    H_ && (e = e * 2),
    e
  );
}
function i0(e, t) {
  var n,
    r,
    o,
    i = t.maxInitials;
  return Fw(
    (n = hl(
      (r = e0((o = e.split(/\s/))).call(o, function (s) {
        return s.substring(0, 1).toUpperCase();
      }))
    ).call(r, function (s) {
      return !!s;
    }))
  )
    .call(n, 0, i)
    .join("")
    .toUpperCase();
}
var Es = {};
function q_(e, t) {
  if (Es[t]) {
    Es[t].push(e);
    return;
  }
  var n = (Es[t] = [e]);
  setTimeout(function () {
    delete Es[t],
      n.forEach(function (r) {
        return r();
      });
  }, t);
}
function of() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  for (var r = 0, o = t; r < o.length; r++) {
    var i = o[r];
    if (i || i === "") return i;
    if (i === !1 || i === null) return null;
  }
}
function Rd(e) {
  if (e === !0) return "100%";
  if (e !== !1) return e;
}
function G_(e) {
  var t = Q_();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Fi(this, o);
  };
}
function Q_() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var sf = { cache: NP, colors: o0, initials: i0, avatarRedirectUrl: null },
  Y_ = Id(sf),
  Ad = V.createContext && V.createContext(),
  yl = !Ad,
  J_ = yl ? null : Ad.Consumer,
  X_ =
    V.forwardRef ||
    function (e) {
      return e;
    },
  Ln = (function (e) {
    Mi(n, e);
    var t = G_(n);
    function n() {
      return Be(this, n), t.apply(this, arguments);
    }
    return (
      De(n, [
        {
          key: "_getContext",
          value: function () {
            var o = this,
              i = {};
            return (
              Y_.forEach(function (s) {
                typeof o.props[s] < "u" && (i[s] = o.props[s]);
              }),
              i
            );
          },
        },
        {
          key: "render",
          value: function () {
            var o = this.props.children;
            return yl
              ? V.Children.only(o)
              : V.createElement(
                  Ad.Provider,
                  { value: this._getContext() },
                  V.Children.only(o)
                );
          },
        },
      ]),
      n
    );
  })(V.Component);
A(Ln, "displayName", "ConfigProvider");
A(Ln, "propTypes", {
  cache: O.object,
  colors: O.arrayOf(O.string),
  initials: O.func,
  avatarRedirectUrl: O.string,
  children: O.node,
});
var s0 = function (t) {
  function n(r, o) {
    if (yl) {
      var i = o && o.reactAvatar;
      return V.createElement(t, oo({}, sf, i, r));
    }
    return V.createElement(J_, null, function (s) {
      return V.createElement(t, oo({ ref: o }, sf, s, r));
    });
  }
  return (n.contextTypes = Ln.childContextTypes), X_(n);
};
yl &&
  ((Ln.childContextTypes = { reactAvatar: O.object }),
  (Ln.prototype.getChildContext = function () {
    return { reactAvatar: this._getContext() };
  }));
var wl = {},
  Z_ = kw,
  e3 = Ed,
  t3 = e3.concat("length", "prototype");
wl.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return Z_(t, t3);
  };
var a0 = {},
  n3 = Un,
  r3 = sn,
  l0 = wl.f,
  o3 = fl,
  u0 =
    typeof window == "object" && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  i3 = function (e) {
    try {
      return l0(e);
    } catch {
      return o3(u0);
    }
  };
a0.f = function (t) {
  return u0 && n3(t) === "Window" ? i3(t) : l0(r3(t));
};
var s3 = ll,
  c0 = function (e, t, n, r) {
    return r && r.enumerable ? (e[t] = n) : s3(e, t, n), e;
  },
  a3 = an,
  l3 = function (e, t, n) {
    return a3.f(e, t, n);
  },
  jd = {},
  u3 = Tt;
jd.f = u3;
var Dm = Ke,
  c3 = Pt,
  f3 = jd,
  d3 = an.f,
  p3 = function (e) {
    var t = Dm.Symbol || (Dm.Symbol = {});
    c3(t, e) || d3(t, e, { value: f3.f(e) });
  },
  h3 = Vn,
  m3 = Hn,
  v3 = Tt,
  g3 = c0,
  y3 = function () {
    var e = m3("Symbol"),
      t = e && e.prototype,
      n = t && t.valueOf,
      r = v3("toPrimitive");
    t &&
      !t[r] &&
      g3(
        t,
        r,
        function (o) {
          return h3(n, this);
        },
        { arity: 1 }
      );
  },
  w3 = Cd,
  S3 = $d,
  b3 = w3
    ? {}.toString
    : function () {
        return "[object " + S3(this) + "]";
      },
  E3 = Cd,
  C3 = an.f,
  $3 = ll,
  x3 = Pt,
  k3 = b3,
  O3 = Tt,
  Mm = O3("toStringTag"),
  P3 = function (e, t, n, r) {
    var o = n ? e : e && e.prototype;
    o &&
      (x3(o, Mm) || C3(o, Mm, { configurable: !0, value: t }),
      r && !E3 && $3(o, "toString", k3));
  },
  T3 = Le,
  _3 = it,
  Fm = T3.WeakMap,
  I3 = _3(Fm) && /native code/.test(String(Fm)),
  N3 = I3,
  f0 = Le,
  R3 = Ht,
  A3 = ll,
  Au = Pt,
  ju = yd,
  j3 = Td,
  L3 = ul,
  zm = "Object already initialized",
  af = f0.TypeError,
  B3 = f0.WeakMap,
  ka,
  wi,
  Oa,
  D3 = function (e) {
    return Oa(e) ? wi(e) : ka(e, {});
  },
  M3 = function (e) {
    return function (t) {
      var n;
      if (!R3(t) || (n = wi(t)).type !== e)
        throw new af("Incompatible receiver, " + e + " required");
      return n;
    };
  };
if (N3 || ju.state) {
  var At = ju.state || (ju.state = new B3());
  (At.get = At.get),
    (At.has = At.has),
    (At.set = At.set),
    (ka = function (e, t) {
      if (At.has(e)) throw new af(zm);
      return (t.facade = e), At.set(e, t), t;
    }),
    (wi = function (e) {
      return At.get(e) || {};
    }),
    (Oa = function (e) {
      return At.has(e);
    });
} else {
  var kr = j3("state");
  (L3[kr] = !0),
    (ka = function (e, t) {
      if (Au(e, kr)) throw new af(zm);
      return (t.facade = e), A3(e, kr, t), t;
    }),
    (wi = function (e) {
      return Au(e, kr) ? e[kr] : {};
    }),
    (Oa = function (e) {
      return Au(e, kr);
    });
}
var F3 = { set: ka, get: wi, has: Oa, enforce: D3, getterFor: M3 },
  Sl = ve,
  zi = Le,
  Ld = Vn,
  z3 = ae,
  so = st,
  ao = vo,
  U3 = se,
  Se = Pt,
  V3 = yr,
  lf = go,
  bl = sn,
  Bd = Sd,
  H3 = wr,
  uf = rl,
  lo = Ww,
  d0 = cl,
  W3 = wl,
  p0 = a0,
  K3 = Li,
  h0 = Ii,
  m0 = an,
  q3 = ml,
  v0 = nl,
  Um = c0,
  G3 = l3,
  Dd = Ri,
  Q3 = Td,
  g0 = ul,
  Vm = wd,
  Y3 = Tt,
  J3 = jd,
  X3 = p3,
  Z3 = y3,
  eI = P3,
  y0 = F3,
  El = Od.forEach,
  Fe = Q3("hidden"),
  Cl = "Symbol",
  Si = "prototype",
  tI = y0.set,
  Hm = y0.getterFor(Cl),
  $t = Object[Si],
  or = zi.Symbol,
  Fo = or && or[Si],
  nI = zi.RangeError,
  rI = zi.TypeError,
  Lu = zi.QObject,
  w0 = h0.f,
  ir = m0.f,
  S0 = p0.f,
  oI = v0.f,
  b0 = z3([].push),
  rn = Dd("symbols"),
  Ui = Dd("op-symbols"),
  iI = Dd("wks"),
  cf = !Lu || !Lu[Si] || !Lu[Si].findChild,
  E0 = function (e, t, n) {
    var r = w0($t, t);
    r && delete $t[t], ir(e, t, n), r && e !== $t && ir($t, t, r);
  },
  ff =
    so &&
    U3(function () {
      return (
        lo(
          ir({}, "a", {
            get: function () {
              return ir(this, "a", { value: 7 }).a;
            },
          })
        ).a !== 7
      );
    })
      ? E0
      : ir,
  Bu = function (e, t) {
    var n = (rn[e] = lo(Fo));
    return (
      tI(n, { type: Cl, tag: e, description: t }), so || (n.description = t), n
    );
  },
  $l = function (t, n, r) {
    t === $t && $l(Ui, n, r), lf(t);
    var o = Bd(n);
    return (
      lf(r),
      Se(rn, o)
        ? (r.enumerable
            ? (Se(t, Fe) && t[Fe][o] && (t[Fe][o] = !1),
              (r = lo(r, { enumerable: uf(0, !1) })))
            : (Se(t, Fe) || ir(t, Fe, uf(1, lo(null))), (t[Fe][o] = !0)),
          ff(t, o, r))
        : ir(t, o, r)
    );
  },
  Md = function (t, n) {
    lf(t);
    var r = bl(n),
      o = d0(r).concat(k0(r));
    return (
      El(o, function (i) {
        (!so || Ld(C0, r, i)) && $l(t, i, r[i]);
      }),
      t
    );
  },
  sI = function (t, n) {
    return n === void 0 ? lo(t) : Md(lo(t), n);
  },
  C0 = function (t) {
    var n = Bd(t),
      r = Ld(oI, this, n);
    return this === $t && Se(rn, n) && !Se(Ui, n)
      ? !1
      : r || !Se(this, n) || !Se(rn, n) || (Se(this, Fe) && this[Fe][n])
      ? r
      : !0;
  },
  $0 = function (t, n) {
    var r = bl(t),
      o = Bd(n);
    if (!(r === $t && Se(rn, o) && !Se(Ui, o))) {
      var i = w0(r, o);
      return (
        i && Se(rn, o) && !(Se(r, Fe) && r[Fe][o]) && (i.enumerable = !0), i
      );
    }
  },
  x0 = function (t) {
    var n = S0(bl(t)),
      r = [];
    return (
      El(n, function (o) {
        !Se(rn, o) && !Se(g0, o) && b0(r, o);
      }),
      r
    );
  },
  k0 = function (e) {
    var t = e === $t,
      n = S0(t ? Ui : bl(e)),
      r = [];
    return (
      El(n, function (o) {
        Se(rn, o) && (!t || Se($t, o)) && b0(r, rn[o]);
      }),
      r
    );
  };
ao ||
  ((or = function () {
    if (V3(Fo, this)) throw new rI("Symbol is not a constructor");
    var t =
        !arguments.length || arguments[0] === void 0
          ? void 0
          : H3(arguments[0]),
      n = Vm(t),
      r = function (o) {
        var i = this === void 0 ? zi : this;
        i === $t && Ld(r, Ui, o), Se(i, Fe) && Se(i[Fe], n) && (i[Fe][n] = !1);
        var s = uf(1, o);
        try {
          ff(i, n, s);
        } catch (a) {
          if (!(a instanceof nI)) throw a;
          E0(i, n, s);
        }
      };
    return so && cf && ff($t, n, { configurable: !0, set: r }), Bu(n, t);
  }),
  (Fo = or[Si]),
  Um(Fo, "toString", function () {
    return Hm(this).tag;
  }),
  Um(or, "withoutSetter", function (e) {
    return Bu(Vm(e), e);
  }),
  (v0.f = C0),
  (m0.f = $l),
  (q3.f = Md),
  (h0.f = $0),
  (W3.f = p0.f = x0),
  (K3.f = k0),
  (J3.f = function (e) {
    return Bu(Y3(e), e);
  }),
  so &&
    G3(Fo, "description", {
      configurable: !0,
      get: function () {
        return Hm(this).description;
      },
    }));
Sl(
  { global: !0, constructor: !0, wrap: !0, forced: !ao, sham: !ao },
  { Symbol: or }
);
El(d0(iI), function (e) {
  X3(e);
});
Sl(
  { target: Cl, stat: !0, forced: !ao },
  {
    useSetter: function () {
      cf = !0;
    },
    useSimple: function () {
      cf = !1;
    },
  }
);
Sl(
  { target: "Object", stat: !0, forced: !ao, sham: !so },
  {
    create: sI,
    defineProperty: $l,
    defineProperties: Md,
    getOwnPropertyDescriptor: $0,
  }
);
Sl({ target: "Object", stat: !0, forced: !ao }, { getOwnPropertyNames: x0 });
Z3();
eI(or, Cl);
g0[Fe] = !0;
var aI = vo,
  O0 = aI && !!Symbol.for && !!Symbol.keyFor,
  lI = ve,
  uI = Hn,
  cI = Pt,
  fI = wr,
  P0 = Ri,
  dI = O0,
  Du = P0("string-to-symbol-registry"),
  pI = P0("symbol-to-string-registry");
lI(
  { target: "Symbol", stat: !0, forced: !dI },
  {
    for: function (e) {
      var t = fI(e);
      if (cI(Du, t)) return Du[t];
      var n = uI("Symbol")(t);
      return (Du[t] = n), (pI[n] = t), n;
    },
  }
);
var hI = ve,
  mI = Pt,
  vI = sl,
  gI = gd,
  yI = Ri,
  wI = O0,
  Wm = yI("symbol-to-string-registry");
hI(
  { target: "Symbol", stat: !0, forced: !wI },
  {
    keyFor: function (t) {
      if (!vI(t)) throw new TypeError(gI(t) + " is not a symbol");
      if (mI(Wm, t)) return Wm[t];
    },
  }
);
var SI = ve,
  bI = vo,
  EI = se,
  T0 = Li,
  CI = Wn,
  $I =
    !bI ||
    EI(function () {
      T0.f(1);
    });
SI(
  { target: "Object", stat: !0, forced: $I },
  {
    getOwnPropertySymbols: function (t) {
      var n = T0.f;
      return n ? n(CI(t)) : [];
    },
  }
);
var xI = Ke,
  kI = xI.Object.getOwnPropertySymbols,
  OI = kI,
  PI = OI;
const Pa = pe(PI);
var _0 = { exports: {} },
  TI = ve,
  _I = se,
  II = sn,
  I0 = Ii.f,
  N0 = st,
  NI =
    !N0 ||
    _I(function () {
      I0(1);
    });
TI(
  { target: "Object", stat: !0, forced: NI, sham: !N0 },
  {
    getOwnPropertyDescriptor: function (t, n) {
      return I0(II(t), n);
    },
  }
);
var RI = Ke,
  R0 = RI.Object,
  AI = (_0.exports = function (t, n) {
    return R0.getOwnPropertyDescriptor(t, n);
  });
R0.getOwnPropertyDescriptor.sham && (AI.sham = !0);
var jI = _0.exports,
  LI = jI,
  BI = LI;
const xl = pe(BI);
var DI = Hn,
  MI = ae,
  FI = wl,
  zI = Li,
  UI = go,
  VI = MI([].concat),
  HI =
    DI("Reflect", "ownKeys") ||
    function (t) {
      var n = FI.f(UI(t)),
        r = zI.f;
      return r ? VI(n, r(t)) : n;
    },
  WI = ve,
  KI = st,
  qI = HI,
  GI = sn,
  QI = Ii,
  YI = Pd;
WI(
  { target: "Object", stat: !0, sham: !KI },
  {
    getOwnPropertyDescriptors: function (t) {
      for (
        var n = GI(t), r = QI.f, o = qI(n), i = {}, s = 0, a, l;
        o.length > s;

      )
        (l = r(n, (a = o[s++]))), l !== void 0 && YI(i, a, l);
      return i;
    },
  }
);
var JI = Ke,
  XI = JI.Object.getOwnPropertyDescriptors,
  ZI = XI,
  eN = ZI;
const Ta = pe(eN);
var A0 = { exports: {} },
  tN = ve,
  nN = st,
  Km = ml.f;
tN(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperties !== Km,
    sham: !nN,
  },
  { defineProperties: Km }
);
var rN = Ke,
  j0 = rN.Object,
  oN = (A0.exports = function (t, n) {
    return j0.defineProperties(t, n);
  });
j0.defineProperties.sham && (oN.sham = !0);
var iN = A0.exports,
  sN = iN,
  aN = sN;
const L0 = pe(aN);
var B0 = { exports: {} },
  lN = ve,
  uN = st,
  qm = an.f;
lN(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperty !== qm,
    sham: !uN,
  },
  { defineProperty: qm }
);
var cN = Ke,
  D0 = cN.Object,
  fN = (B0.exports = function (t, n, r) {
    return D0.defineProperty(t, n, r);
  });
D0.defineProperty.sham && (fN.sham = !0);
var dN = B0.exports,
  pN = dN,
  hN = pN;
const M0 = pe(hN);
var mN = (function () {
  function e() {
    Be(this, e),
      (this.sourcePointer = 0),
      (this.active = !0),
      (this.fetch = null);
  }
  return (
    De(e, [
      {
        key: "isActive",
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return !(n.internal !== this || !this.fetch || this.active !== !0);
        },
      },
    ]),
    e
  );
})();
function Gm(e, t) {
  var n = Id(e);
  if (Pa) {
    var r = Pa(e);
    t &&
      (r = hl(r).call(r, function (o) {
        return xl(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Mu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gm(Object(n), !0).forEach(function (r) {
          A(e, r, n[r]);
        })
      : Ta
      ? L0(e, Ta(n))
      : Gm(Object(n)).forEach(function (r) {
          M0(e, r, xl(n, r));
        });
  }
  return e;
}
function vN(e) {
  var t = gN();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Fi(this, o);
  };
}
function gN() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function yN(e, t, n) {
  var r = t.cache,
    o = new e(t);
  if (!o.isCompatible(t)) return n();
  o.get(function (i) {
    var s = i && i.src && r.hasSourceFailedBefore(i.src);
    !s && i ? n(i) : n();
  });
}
function wN(e) {
  var t = e.sources,
    n = t === void 0 ? [] : t,
    r = t0(n).call(
      n,
      function (i, s) {
        return Yc(i, s.propTypes);
      },
      {}
    ),
    o = (function (i) {
      Mi(a, i);
      var s = vN(a);
      function a(l) {
        var u;
        return (
          Be(this, a),
          (u = s.call(this, l)),
          A($a(u), "_createFetcher", function (c) {
            return function (f) {
              var d = u.props.cache;
              if (c.isActive(u.state)) {
                f && f.type === "error" && d.sourceFailed(f.target.src);
                var h = c.sourcePointer;
                if (n.length !== h) {
                  var g = n[h];
                  c.sourcePointer++,
                    yN(g, u.props, function (y) {
                      if (!y) return setTimeout(c.fetch, 0);
                      c.isActive(u.state) &&
                        ((y = Mu({ src: null, value: null, color: null }, y)),
                        u.setState(function (E) {
                          return c.isActive(E) ? y : {};
                        }));
                    });
                }
              }
            };
          }),
          A($a(u), "fetch", function () {
            var c = new mN();
            (c.fetch = u._createFetcher(c)),
              u.setState({ internal: c }, c.fetch);
          }),
          (u.state = {
            internal: null,
            src: null,
            value: null,
            color: l.color,
          }),
          u
        );
      }
      return (
        De(a, [
          {
            key: "componentDidMount",
            value: function () {
              this.fetch();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (u) {
              var c = !1;
              for (var f in r) c = c || u[f] !== this.props[f];
              c && setTimeout(this.fetch, 0);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.state.internal && (this.state.internal.active = !1);
            },
          },
          {
            key: "render",
            value: function () {
              var u = this.props,
                c = u.children,
                f = u.propertyName,
                d = this.state,
                h = d.src,
                g = d.value,
                y = d.color,
                E = d.sourceName,
                m = d.internal,
                p = {
                  src: h,
                  value: g,
                  color: y,
                  sourceName: E,
                  onRenderFailed: function () {
                    return m && m.fetch();
                  },
                };
              if (typeof c == "function") return c(p);
              var v = V.Children.only(c);
              return V.cloneElement(v, A({}, f, p));
            },
          },
        ]),
        a
      );
    })(w.PureComponent);
  return (
    A(o, "displayName", "AvatarDataProvider"),
    A(
      o,
      "propTypes",
      Mu(Mu({}, r), {}, { cache: O.object, propertyName: O.string })
    ),
    A(o, "defaultProps", { propertyName: "avatar" }),
    A(o, "Cache", Ca),
    A(o, "ConfigProvider", Ln),
    Yc(s0(o), { ConfigProvider: Ln, Cache: Ca })
  );
}
function Qm(e, t) {
  var n = Id(e);
  if (Pa) {
    var r = Pa(e);
    t &&
      (r = hl(r).call(r, function (o) {
        return xl(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function SN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qm(Object(n), !0).forEach(function (r) {
          A(e, r, n[r]);
        })
      : Ta
      ? L0(e, Ta(n))
      : Qm(Object(n)).forEach(function (r) {
          M0(e, r, xl(n, r));
        });
  }
  return e;
}
function bN(e) {
  var t = EN();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Fi(this, o);
  };
}
function EN() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Fd = (function (e) {
  Mi(n, e);
  var t = bN(n);
  function n() {
    return Be(this, n), t.apply(this, arguments);
  }
  return (
    De(n, [
      {
        key: "render",
        value: function () {
          var o = this.props,
            i = o.className,
            s = o.unstyled,
            a = o.round,
            l = o.style,
            u = o.avatar,
            c = o.onClick,
            f = o.children,
            d = u.sourceName,
            h = vl(this.props.size),
            g = s
              ? null
              : SN(
                  {
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: h.str,
                    height: h.str,
                    borderRadius: Rd(a),
                    fontFamily: "Helvetica, Arial, sans-serif",
                  },
                  l
                ),
            y = [i, "sb-avatar"];
          if (d) {
            var E = d
              .toLowerCase()
              .replace(/[^a-z0-9-]+/g, "-")
              .replace(/^-+|-+$/g, "");
            y.push("sb-avatar--" + E);
          }
          return V.createElement(
            "div",
            { className: y.join(" "), onClick: c, style: g },
            f
          );
        },
      },
    ]),
    n
  );
})(V.PureComponent);
A(Fd, "propTypes", {
  className: O.string,
  round: O.oneOfType([O.bool, O.string]),
  style: O.object,
  size: O.oneOfType([O.number, O.string]),
  unstyled: O.bool,
  avatar: O.object,
  onClick: O.func,
  children: O.node,
});
function CN(e) {
  var t = $N();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Fi(this, o);
  };
}
function $N() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var zd = (function (e) {
  Mi(n, e);
  var t = CN(n);
  function n() {
    return Be(this, n), t.apply(this, arguments);
  }
  return (
    De(n, [
      {
        key: "render",
        value: function () {
          var o = this.props,
            i = o.className,
            s = o.round,
            a = o.unstyled,
            l = o.alt,
            u = o.title,
            c = o.name,
            f = o.value,
            d = o.avatar,
            h = vl(this.props.size),
            g = a
              ? null
              : {
                  maxWidth: "100%",
                  width: h.str,
                  height: h.str,
                  borderRadius: Rd(s),
                };
          return V.createElement(
            Fd,
            this.props,
            V.createElement("img", {
              className: i + " sb-avatar__image",
              width: h.str,
              height: h.str,
              style: g,
              src: d.src,
              alt: of(l, c || f),
              title: of(u, c || f),
              onError: d.onRenderFailed,
            })
          );
        },
      },
    ]),
    n
  );
})(V.PureComponent);
A(zd, "propTypes", {
  alt: O.oneOfType([O.string, O.bool]),
  title: O.oneOfType([O.string, O.bool]),
  name: O.string,
  value: O.string,
  avatar: O.object,
  className: O.string,
  unstyled: O.bool,
  round: O.oneOfType([O.bool, O.string, O.number]),
  size: O.oneOfType([O.number, O.string]),
});
A(zd, "defaultProps", { className: "", round: !1, size: 100, unstyled: !1 });
var xN = TypeError,
  kN = 9007199254740991,
  ON = function (e) {
    if (e > kN) throw xN("Maximum allowed index exceeded");
    return e;
  },
  PN = ve,
  TN = se,
  _N = dl,
  IN = Ht,
  NN = Wn,
  RN = ji,
  Ym = ON,
  Jm = Pd,
  AN = Mw,
  jN = pl,
  LN = Tt,
  BN = il,
  F0 = LN("isConcatSpreadable"),
  DN =
    BN >= 51 ||
    !TN(function () {
      var e = [];
      return (e[F0] = !1), e.concat()[0] !== e;
    }),
  MN = function (e) {
    if (!IN(e)) return !1;
    var t = e[F0];
    return t !== void 0 ? !!t : _N(e);
  },
  FN = !DN || !jN("concat");
PN(
  { target: "Array", proto: !0, arity: 1, forced: FN },
  {
    concat: function (t) {
      var n = NN(this),
        r = AN(n, 0),
        o = 0,
        i,
        s,
        a,
        l,
        u;
      for (i = -1, a = arguments.length; i < a; i++)
        if (((u = i === -1 ? n : arguments[i]), MN(u)))
          for (l = RN(u), Ym(o + l), s = 0; s < l; s++, o++)
            s in u && Jm(r, o, u[s]);
        else Ym(o + 1), Jm(r, o++, u);
      return (r.length = o), r;
    },
  }
);
var zN = Di,
  UN = zN("Array", "concat"),
  VN = yr,
  HN = UN,
  Fu = Array.prototype,
  WN = function (e) {
    var t = e.concat;
    return e === Fu || (VN(Fu, e) && t === Fu.concat) ? HN : t;
  },
  KN = WN,
  qN = KN;
const Xo = pe(qN);
function GN(e) {
  var t = QN();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Fi(this, o);
  };
}
function QN() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Ud = (function (e) {
  Mi(n, e);
  var t = GN(n);
  function n() {
    var r, o;
    Be(this, n);
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    return (
      (o = t.call.apply(t, Xo((r = [this])).call(r, s))),
      A($a(o), "_scaleTextNode", function (l) {
        var u =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
          c = o.props,
          f = c.unstyled,
          d = c.textSizeRatio,
          h = c.textMarginRatio,
          g = c.avatar;
        if (
          ((o._node = l), !(!l || !l.parentNode || f || g.src || !o._mounted))
        ) {
          var y = l.parentNode,
            E = y.parentNode,
            m = y.getBoundingClientRect(),
            p = m.width,
            v = m.height;
          if (p == 0 && v == 0) {
            var b = Math.min(u * 1.5, 500);
            q_(function () {
              return o._scaleTextNode(l, b);
            }, b);
            return;
          }
          if (!E.style.fontSize) {
            var $ = v / d;
            E.style.fontSize = "".concat($, "px");
          }
          y.style.fontSize = null;
          var C = l.getBoundingClientRect(),
            k = C.width;
          if (!(k < 0)) {
            var T = p * (1 - 2 * h);
            k > T && (y.style.fontSize = "calc(1em * ".concat(T / k, ")"));
          }
        }
      }),
      o
    );
  }
  return (
    De(n, [
      {
        key: "componentDidMount",
        value: function () {
          (this._mounted = !0), this._scaleTextNode(this._node);
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._mounted = !1;
        },
      },
      {
        key: "render",
        value: function () {
          var o = this.props,
            i = o.className,
            s = o.round,
            a = o.unstyled,
            l = o.title,
            u = o.name,
            c = o.value,
            f = o.avatar,
            d = vl(this.props.size),
            h = a
              ? null
              : {
                  width: d.str,
                  height: d.str,
                  lineHeight: "initial",
                  textAlign: "center",
                  color: this.props.fgColor,
                  background: f.color,
                  borderRadius: Rd(s),
                },
            g = a
              ? null
              : {
                  display: "table",
                  tableLayout: "fixed",
                  width: "100%",
                  height: "100%",
                },
            y = a
              ? null
              : {
                  display: "table-cell",
                  verticalAlign: "middle",
                  fontSize: "100%",
                  whiteSpace: "nowrap",
                },
            E = [f.value, this.props.size].join("");
          return V.createElement(
            Fd,
            this.props,
            V.createElement(
              "div",
              {
                className: i + " sb-avatar__text",
                style: h,
                title: of(l, u || c),
              },
              V.createElement(
                "div",
                { style: g },
                V.createElement(
                  "span",
                  { style: y },
                  V.createElement(
                    "span",
                    { ref: this._scaleTextNode, key: E },
                    f.value
                  )
                )
              )
            )
          );
        },
      },
    ]),
    n
  );
})(V.PureComponent);
A(Ud, "propTypes", {
  name: O.string,
  value: O.string,
  avatar: O.object,
  title: O.oneOfType([O.string, O.bool]),
  className: O.string,
  unstyled: O.bool,
  fgColor: O.string,
  textSizeRatio: O.number,
  textMarginRatio: O.number,
  round: O.oneOfType([O.bool, O.string, O.number]),
  size: O.oneOfType([O.number, O.string]),
});
A(Ud, "defaultProps", {
  className: "",
  fgColor: "#FFF",
  round: !1,
  size: 100,
  textSizeRatio: 3,
  textMarginRatio: 0.15,
  unstyled: !1,
});
function YN(e) {
  var t = wN(e),
    n = s0(
      V.forwardRef(function (r, o) {
        return V.createElement(
          t,
          oo({}, r, { propertyName: "avatar" }),
          function (i) {
            var s = i.src ? zd : Ud;
            return V.createElement(s, oo({}, r, { avatar: i, ref: o }));
          }
        );
      })
    );
  return Yc(n, { getRandomColor: Nd, ConfigProvider: Ln, Cache: Ca });
}
var z0 = { exports: {} },
  U0 = { exports: {} };
(function () {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    t = {
      rotl: function (n, r) {
        return (n << r) | (n >>> (32 - r));
      },
      rotr: function (n, r) {
        return (n << (32 - r)) | (n >>> r);
      },
      endian: function (n) {
        if (n.constructor == Number)
          return (t.rotl(n, 8) & 16711935) | (t.rotl(n, 24) & 4278255360);
        for (var r = 0; r < n.length; r++) n[r] = t.endian(n[r]);
        return n;
      },
      randomBytes: function (n) {
        for (var r = []; n > 0; n--) r.push(Math.floor(Math.random() * 256));
        return r;
      },
      bytesToWords: function (n) {
        for (var r = [], o = 0, i = 0; o < n.length; o++, i += 8)
          r[i >>> 5] |= n[o] << (24 - (i % 32));
        return r;
      },
      wordsToBytes: function (n) {
        for (var r = [], o = 0; o < n.length * 32; o += 8)
          r.push((n[o >>> 5] >>> (24 - (o % 32))) & 255);
        return r;
      },
      bytesToHex: function (n) {
        for (var r = [], o = 0; o < n.length; o++)
          r.push((n[o] >>> 4).toString(16)), r.push((n[o] & 15).toString(16));
        return r.join("");
      },
      hexToBytes: function (n) {
        for (var r = [], o = 0; o < n.length; o += 2)
          r.push(parseInt(n.substr(o, 2), 16));
        return r;
      },
      bytesToBase64: function (n) {
        for (var r = [], o = 0; o < n.length; o += 3)
          for (
            var i = (n[o] << 16) | (n[o + 1] << 8) | n[o + 2], s = 0;
            s < 4;
            s++
          )
            o * 8 + s * 6 <= n.length * 8
              ? r.push(e.charAt((i >>> (6 * (3 - s))) & 63))
              : r.push("=");
        return r.join("");
      },
      base64ToBytes: function (n) {
        n = n.replace(/[^A-Z0-9+\/]/gi, "");
        for (var r = [], o = 0, i = 0; o < n.length; i = ++o % 4)
          i != 0 &&
            r.push(
              ((e.indexOf(n.charAt(o - 1)) & (Math.pow(2, -2 * i + 8) - 1)) <<
                (i * 2)) |
                (e.indexOf(n.charAt(o)) >>> (6 - i * 2))
            );
        return r;
      },
    };
  U0.exports = t;
})();
var JN = U0.exports,
  df = {
    utf8: {
      stringToBytes: function (e) {
        return df.bin.stringToBytes(unescape(encodeURIComponent(e)));
      },
      bytesToString: function (e) {
        return decodeURIComponent(escape(df.bin.bytesToString(e)));
      },
    },
    bin: {
      stringToBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          t.push(e.charCodeAt(n) & 255);
        return t;
      },
      bytesToString: function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          t.push(String.fromCharCode(e[n]));
        return t.join("");
      },
    },
  },
  Xm = df;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var XN = function (e) {
  return e != null && (V0(e) || ZN(e) || !!e._isBuffer);
};
function V0(e) {
  return (
    !!e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function ZN(e) {
  return (
    typeof e.readFloatLE == "function" &&
    typeof e.slice == "function" &&
    V0(e.slice(0, 0))
  );
}
(function () {
  var e = JN,
    t = Xm.utf8,
    n = XN,
    r = Xm.bin,
    o = function (i, s) {
      i.constructor == String
        ? s && s.encoding === "binary"
          ? (i = r.stringToBytes(i))
          : (i = t.stringToBytes(i))
        : n(i)
        ? (i = Array.prototype.slice.call(i, 0))
        : !Array.isArray(i) &&
          i.constructor !== Uint8Array &&
          (i = i.toString());
      for (
        var a = e.bytesToWords(i),
          l = i.length * 8,
          u = 1732584193,
          c = -271733879,
          f = -1732584194,
          d = 271733878,
          h = 0;
        h < a.length;
        h++
      )
        a[h] =
          (((a[h] << 8) | (a[h] >>> 24)) & 16711935) |
          (((a[h] << 24) | (a[h] >>> 8)) & 4278255360);
      (a[l >>> 5] |= 128 << l % 32), (a[(((l + 64) >>> 9) << 4) + 14] = l);
      for (
        var g = o._ff, y = o._gg, E = o._hh, m = o._ii, h = 0;
        h < a.length;
        h += 16
      ) {
        var p = u,
          v = c,
          b = f,
          $ = d;
        (u = g(u, c, f, d, a[h + 0], 7, -680876936)),
          (d = g(d, u, c, f, a[h + 1], 12, -389564586)),
          (f = g(f, d, u, c, a[h + 2], 17, 606105819)),
          (c = g(c, f, d, u, a[h + 3], 22, -1044525330)),
          (u = g(u, c, f, d, a[h + 4], 7, -176418897)),
          (d = g(d, u, c, f, a[h + 5], 12, 1200080426)),
          (f = g(f, d, u, c, a[h + 6], 17, -1473231341)),
          (c = g(c, f, d, u, a[h + 7], 22, -45705983)),
          (u = g(u, c, f, d, a[h + 8], 7, 1770035416)),
          (d = g(d, u, c, f, a[h + 9], 12, -1958414417)),
          (f = g(f, d, u, c, a[h + 10], 17, -42063)),
          (c = g(c, f, d, u, a[h + 11], 22, -1990404162)),
          (u = g(u, c, f, d, a[h + 12], 7, 1804603682)),
          (d = g(d, u, c, f, a[h + 13], 12, -40341101)),
          (f = g(f, d, u, c, a[h + 14], 17, -1502002290)),
          (c = g(c, f, d, u, a[h + 15], 22, 1236535329)),
          (u = y(u, c, f, d, a[h + 1], 5, -165796510)),
          (d = y(d, u, c, f, a[h + 6], 9, -1069501632)),
          (f = y(f, d, u, c, a[h + 11], 14, 643717713)),
          (c = y(c, f, d, u, a[h + 0], 20, -373897302)),
          (u = y(u, c, f, d, a[h + 5], 5, -701558691)),
          (d = y(d, u, c, f, a[h + 10], 9, 38016083)),
          (f = y(f, d, u, c, a[h + 15], 14, -660478335)),
          (c = y(c, f, d, u, a[h + 4], 20, -405537848)),
          (u = y(u, c, f, d, a[h + 9], 5, 568446438)),
          (d = y(d, u, c, f, a[h + 14], 9, -1019803690)),
          (f = y(f, d, u, c, a[h + 3], 14, -187363961)),
          (c = y(c, f, d, u, a[h + 8], 20, 1163531501)),
          (u = y(u, c, f, d, a[h + 13], 5, -1444681467)),
          (d = y(d, u, c, f, a[h + 2], 9, -51403784)),
          (f = y(f, d, u, c, a[h + 7], 14, 1735328473)),
          (c = y(c, f, d, u, a[h + 12], 20, -1926607734)),
          (u = E(u, c, f, d, a[h + 5], 4, -378558)),
          (d = E(d, u, c, f, a[h + 8], 11, -2022574463)),
          (f = E(f, d, u, c, a[h + 11], 16, 1839030562)),
          (c = E(c, f, d, u, a[h + 14], 23, -35309556)),
          (u = E(u, c, f, d, a[h + 1], 4, -1530992060)),
          (d = E(d, u, c, f, a[h + 4], 11, 1272893353)),
          (f = E(f, d, u, c, a[h + 7], 16, -155497632)),
          (c = E(c, f, d, u, a[h + 10], 23, -1094730640)),
          (u = E(u, c, f, d, a[h + 13], 4, 681279174)),
          (d = E(d, u, c, f, a[h + 0], 11, -358537222)),
          (f = E(f, d, u, c, a[h + 3], 16, -722521979)),
          (c = E(c, f, d, u, a[h + 6], 23, 76029189)),
          (u = E(u, c, f, d, a[h + 9], 4, -640364487)),
          (d = E(d, u, c, f, a[h + 12], 11, -421815835)),
          (f = E(f, d, u, c, a[h + 15], 16, 530742520)),
          (c = E(c, f, d, u, a[h + 2], 23, -995338651)),
          (u = m(u, c, f, d, a[h + 0], 6, -198630844)),
          (d = m(d, u, c, f, a[h + 7], 10, 1126891415)),
          (f = m(f, d, u, c, a[h + 14], 15, -1416354905)),
          (c = m(c, f, d, u, a[h + 5], 21, -57434055)),
          (u = m(u, c, f, d, a[h + 12], 6, 1700485571)),
          (d = m(d, u, c, f, a[h + 3], 10, -1894986606)),
          (f = m(f, d, u, c, a[h + 10], 15, -1051523)),
          (c = m(c, f, d, u, a[h + 1], 21, -2054922799)),
          (u = m(u, c, f, d, a[h + 8], 6, 1873313359)),
          (d = m(d, u, c, f, a[h + 15], 10, -30611744)),
          (f = m(f, d, u, c, a[h + 6], 15, -1560198380)),
          (c = m(c, f, d, u, a[h + 13], 21, 1309151649)),
          (u = m(u, c, f, d, a[h + 4], 6, -145523070)),
          (d = m(d, u, c, f, a[h + 11], 10, -1120210379)),
          (f = m(f, d, u, c, a[h + 2], 15, 718787259)),
          (c = m(c, f, d, u, a[h + 9], 21, -343485551)),
          (u = (u + p) >>> 0),
          (c = (c + v) >>> 0),
          (f = (f + b) >>> 0),
          (d = (d + $) >>> 0);
      }
      return e.endian([u, c, f, d]);
    };
  (o._ff = function (i, s, a, l, u, c, f) {
    var d = i + ((s & a) | (~s & l)) + (u >>> 0) + f;
    return ((d << c) | (d >>> (32 - c))) + s;
  }),
    (o._gg = function (i, s, a, l, u, c, f) {
      var d = i + ((s & l) | (a & ~l)) + (u >>> 0) + f;
      return ((d << c) | (d >>> (32 - c))) + s;
    }),
    (o._hh = function (i, s, a, l, u, c, f) {
      var d = i + (s ^ a ^ l) + (u >>> 0) + f;
      return ((d << c) | (d >>> (32 - c))) + s;
    }),
    (o._ii = function (i, s, a, l, u, c, f) {
      var d = i + (a ^ (s | ~l)) + (u >>> 0) + f;
      return ((d << c) | (d >>> (32 - c))) + s;
    }),
    (o._blocksize = 16),
    (o._digestsize = 16),
    (z0.exports = function (i, s) {
      if (i == null) throw new Error("Illegal argument " + i);
      var a = e.wordsToBytes(o(i, s));
      return s && s.asBytes
        ? a
        : s && s.asString
        ? r.bytesToString(a)
        : e.bytesToHex(a);
    });
})();
var eR = z0.exports;
const tR = pe(eR);
var H0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.email || !!n.props.md5Email;
    }),
    A(this, "get", function (r) {
      var o = n.props,
        i = o.md5Email || tR(o.email),
        s = gl(o.size),
        a = "https://secure.gravatar.com/avatar/".concat(i, "?d=404");
      s && (a += "&s=".concat(s)), r({ sourceName: "gravatar", src: a });
    }),
    (this.props = t);
});
A(H0, "propTypes", { email: O.string, md5Email: O.string });
var W0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.facebookId;
    }),
    A(this, "get", function (r) {
      var o,
        i = n.props.facebookId,
        s = gl(n.props.size),
        a = "https://graph.facebook.com/".concat(i, "/picture");
      s && (a += Xo((o = "?width=".concat(s, "&height="))).call(o, s)),
        r({ sourceName: "facebook", src: a });
    }),
    (this.props = t);
});
A(W0, "propTypes", { facebookId: O.string });
var K0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.githubHandle;
    }),
    A(this, "get", function (r) {
      var o = n.props.githubHandle,
        i = gl(n.props.size),
        s = "https://avatars.githubusercontent.com/".concat(o, "?v=4");
      i && (s += "&s=".concat(i)), r({ sourceName: "github", src: s });
    }),
    (this.props = t);
});
A(K0, "propTypes", { githubHandle: O.string });
var q0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.skypeId;
    }),
    A(this, "get", function (r) {
      var o = n.props.skypeId,
        i = "https://api.skype.com/users/".concat(o, "/profile/avatar");
      r({ sourceName: "skype", src: i });
    }),
    (this.props = t);
});
A(q0, "propTypes", { skypeId: O.string });
var G0 = (function () {
  function e(t) {
    var n = this;
    Be(this, e),
      A(this, "props", null),
      A(this, "isCompatible", function () {
        return !!(n.props.name || n.props.value || n.props.email);
      }),
      A(this, "get", function (r) {
        var o = n.getValue();
        if (!o) return r(null);
        r({ sourceName: "text", value: o, color: n.getColor() });
      }),
      (this.props = t);
  }
  return (
    De(e, [
      {
        key: "getInitials",
        value: function () {
          var n = this.props,
            r = n.name,
            o = n.initials;
          return typeof o == "string"
            ? o
            : typeof o == "function"
            ? o(r, this.props)
            : i0(r, this.props);
        },
      },
      {
        key: "getValue",
        value: function () {
          return this.props.name
            ? this.getInitials()
            : this.props.value
            ? this.props.value
            : null;
        },
      },
      {
        key: "getColor",
        value: function () {
          var n = this.props,
            r = n.color,
            o = n.colors,
            i = n.name,
            s = n.email,
            a = n.value,
            l = i || s || a;
          return r || Nd(l, o);
        },
      },
    ]),
    e
  );
})();
A(G0, "propTypes", {
  color: O.string,
  name: O.string,
  value: O.string,
  email: O.string,
  maxInitials: O.number,
  initials: O.oneOfType([O.string, O.func]),
});
var Q0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.src;
    }),
    A(this, "get", function (r) {
      r({ sourceName: "src", src: n.props.src });
    }),
    (this.props = t);
});
A(Q0, "propTypes", { src: O.string });
var Y0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "icon", "✷"),
    A(this, "isCompatible", function () {
      return !0;
    }),
    A(this, "get", function (r) {
      var o = n.props,
        i = o.color,
        s = o.colors;
      r({ sourceName: "icon", value: n.icon, color: i || Nd(n.icon, s) });
    }),
    (this.props = t);
});
A(Y0, "propTypes", { color: O.string });
function kl(e, t) {
  var n;
  return (
    (n = De(function r(o) {
      var i = this;
      Be(this, r),
        A(this, "props", null),
        A(this, "isCompatible", function () {
          return !!i.props.avatarRedirectUrl && !!i.props[t];
        }),
        A(this, "get", function (s) {
          var a,
            l,
            u,
            c = i.props.avatarRedirectUrl,
            f = gl(i.props.size),
            d = c.replace(/\/*$/, "/"),
            h = i.props[t],
            g = f ? "size=".concat(f) : "",
            y = Xo(
              (a = Xo((l = Xo((u = "".concat(d))).call(u, e, "/"))).call(
                l,
                h,
                "?"
              ))
            ).call(a, g);
          s({ sourceName: e, src: y });
        }),
        (this.props = o);
    })),
    A(n, "propTypes", A({}, t, O.oneOfType([O.string, O.number]))),
    n
  );
}
const nR = kl("twitter", "twitterHandle"),
  rR = kl("vkontakte", "vkontakteId"),
  oR = kl("instagram", "instagramId"),
  iR = kl("google", "googleId");
var sR = [W0, iR, K0, nR, oR, rR, q0, H0, Q0, G0, Y0];
const aR = YN({ sources: sR }),
  lR = ({ userName: e }) =>
    N.jsxs("div", {
      className: "client",
      children: [
        N.jsx(aR, { name: e, size: 50, round: "14px" }),
        N.jsx("span", { className: "userName", children: e }),
      ],
    });
function uR(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Zm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zm(Object(n), !0).forEach(function (r) {
          uR(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function fR(e, t) {
  if (e == null) return {};
  var n = cR(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function dR(e, t) {
  return pR(e) || hR(e, t) || mR(e, t) || vR();
}
function pR(e) {
  if (Array.isArray(e)) return e;
}
function hR(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      o = !1,
      i = void 0;
    try {
      for (
        var s = e[Symbol.iterator](), a;
        !(r = (a = s.next()).done) && (n.push(a.value), !(t && n.length === t));
        r = !0
      );
    } catch (l) {
      (o = !0), (i = l);
    } finally {
      try {
        !r && s.return != null && s.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function mR(e, t) {
  if (e) {
    if (typeof e == "string") return tv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return tv(e, t);
  }
}
function tv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gR(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nv(Object(n), !0).forEach(function (r) {
          gR(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : nv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (o, i) {
      return i(o);
    }, r);
  };
}
function zo(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, o = new Array(r), i = 0;
      i < r;
      i++
    )
      o[i] = arguments[i];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
            a[l] = arguments[l];
          return t.apply(n, [].concat(o, a));
        };
  };
}
function _a(e) {
  return {}.toString.call(e).includes("Object");
}
function wR(e) {
  return !Object.keys(e).length;
}
function bi(e) {
  return typeof e == "function";
}
function SR(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function bR(e, t) {
  return (
    _a(t) || Rn("changeType"),
    Object.keys(t).some(function (n) {
      return !SR(e, n);
    }) && Rn("changeField"),
    t
  );
}
function ER(e) {
  bi(e) || Rn("selectorType");
}
function CR(e) {
  bi(e) || _a(e) || Rn("handlerType"),
    _a(e) &&
      Object.values(e).some(function (t) {
        return !bi(t);
      }) &&
      Rn("handlersType");
}
function $R(e) {
  e || Rn("initialIsRequired"),
    _a(e) || Rn("initialType"),
    wR(e) && Rn("initialContent");
}
function xR(e, t) {
  throw new Error(e[t] || e.default);
}
var kR = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package",
  },
  Rn = zo(xR)(kR),
  Cs = { changes: bR, selector: ER, handler: CR, initial: $R };
function OR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Cs.initial(e), Cs.handler(t);
  var n = { current: e },
    r = zo(_R)(n, t),
    o = zo(TR)(n),
    i = zo(Cs.changes)(e),
    s = zo(PR)(n);
  function a() {
    var u =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (c) {
            return c;
          };
    return Cs.selector(u), u(n.current);
  }
  function l(u) {
    yR(r, o, i, s)(u);
  }
  return [a, l];
}
function PR(e, t) {
  return bi(t) ? t(e.current) : t;
}
function TR(e, t) {
  return (e.current = rv(rv({}, e.current), t)), t;
}
function _R(e, t, n) {
  return (
    bi(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (r) {
          var o;
          return (o = t[r]) === null || o === void 0
            ? void 0
            : o.call(t, e.current[r]);
        }),
    n
  );
}
var IR = { create: OR },
  NR = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function RR(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, o = new Array(r), i = 0;
      i < r;
      i++
    )
      o[i] = arguments[i];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
            a[l] = arguments[l];
          return t.apply(n, [].concat(o, a));
        };
  };
}
function AR(e) {
  return {}.toString.call(e).includes("Object");
}
function jR(e) {
  return (
    e || ov("configIsRequired"),
    AR(e) || ov("configType"),
    e.urls ? (LR(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function LR() {
  console.warn(J0.deprecation);
}
function BR(e, t) {
  throw new Error(e[t] || e.default);
}
var J0 = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  ov = RR(BR)(J0),
  DR = { config: jR },
  MR = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (o) {
      return n.reduceRight(function (i, s) {
        return s(i);
      }, o);
    };
  };
function X0(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], X0(e[n], t[n]));
    }),
    ev(ev({}, e), t)
  );
}
var FR = { type: "cancelation", msg: "operation is manually canceled" };
function zu(e) {
  var t = !1,
    n = new Promise(function (r, o) {
      e.then(function (i) {
        return t ? o(FR) : r(i);
      }),
        e.catch(o);
    });
  return (
    (n.cancel = function () {
      return (t = !0);
    }),
    n
  );
}
var zR = IR.create({
    config: NR,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  Z0 = dR(zR, 2),
  Vi = Z0[0],
  Ol = Z0[1];
function UR(e) {
  var t = DR.config(e),
    n = t.monaco,
    r = fR(t, ["monaco"]);
  Ol(function (o) {
    return { config: X0(o.config, r), monaco: n };
  });
}
function VR() {
  var e = Vi(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      o = t.resolve;
    return { monaco: n, isInitialized: r, resolve: o };
  });
  if (!e.isInitialized) {
    if ((Ol({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), zu(Uu);
    if (window.monaco && window.monaco.editor)
      return e1(window.monaco), e.resolve(window.monaco), zu(Uu);
    MR(HR, KR)(qR);
  }
  return zu(Uu);
}
function HR(e) {
  return document.body.appendChild(e);
}
function WR(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function KR(e) {
  var t = Vi(function (r) {
      var o = r.config,
        i = r.reject;
      return { config: o, reject: i };
    }),
    n = WR("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function qR() {
  var e = Vi(function (n) {
      var r = n.config,
        o = n.resolve,
        i = n.reject;
      return { config: r, resolve: o, reject: i };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ["vs/editor/editor.main"],
      function (n) {
        e1(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      }
    );
}
function e1(e) {
  Vi().monaco || Ol({ monaco: e });
}
function GR() {
  return Vi(function (e) {
    var t = e.monaco;
    return t;
  });
}
var Uu = new Promise(function (e, t) {
    return Ol({ resolve: e, reject: t });
  }),
  t1 = { config: UR, init: VR, __getMonacoInstance: GR },
  QR = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  Vu = QR,
  YR = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  JR = YR;
function XR({ children: e }) {
  return V.createElement("div", { style: JR.container }, e);
}
var ZR = XR,
  e5 = ZR;
function t5({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: o,
  className: i,
  wrapperProps: s,
}) {
  return V.createElement(
    "section",
    { style: { ...Vu.wrapper, width: e, height: t }, ...s },
    !n && V.createElement(e5, null, r),
    V.createElement("div", {
      ref: o,
      style: { ...Vu.fullWidth, ...(!n && Vu.hide) },
      className: i,
    })
  );
}
var n5 = t5,
  n1 = w.memo(n5);
function r5(e) {
  w.useEffect(e, []);
}
var r1 = r5;
function o5(e, t, n = !0) {
  let r = w.useRef(!0);
  w.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t
  );
}
var Je = o5;
function Zo() {}
function Ur(e, t, n, r) {
  return i5(e, r) || s5(e, t, n, r);
}
function i5(e, t) {
  return e.editor.getModel(o1(e, t));
}
function s5(e, t, n, r) {
  return e.editor.createModel(t, n, r ? o1(e, r) : void 0);
}
function o1(e, t) {
  return e.Uri.parse(t);
}
function a5({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: o,
  originalModelPath: i,
  modifiedModelPath: s,
  keepCurrentOriginalModel: a = !1,
  keepCurrentModifiedModel: l = !1,
  theme: u = "light",
  loading: c = "Loading...",
  options: f = {},
  height: d = "100%",
  width: h = "100%",
  className: g,
  wrapperProps: y = {},
  beforeMount: E = Zo,
  onMount: m = Zo,
}) {
  let [p, v] = w.useState(!1),
    [b, $] = w.useState(!0),
    C = w.useRef(null),
    k = w.useRef(null),
    T = w.useRef(null),
    M = w.useRef(m),
    I = w.useRef(E),
    ge = w.useRef(!1);
  r1(() => {
    let B = t1.init();
    return (
      B.then((G) => (k.current = G) && $(!1)).catch(
        (G) =>
          (G == null ? void 0 : G.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", G)
      ),
      () => (C.current ? un() : B.cancel())
    );
  }),
    Je(
      () => {
        if (C.current && k.current) {
          let B = C.current.getOriginalEditor(),
            G = Ur(k.current, e || "", r || n || "text", i || "");
          G !== B.getModel() && B.setModel(G);
        }
      },
      [i],
      p
    ),
    Je(
      () => {
        if (C.current && k.current) {
          let B = C.current.getModifiedEditor(),
            G = Ur(k.current, t || "", o || n || "text", s || "");
          G !== B.getModel() && B.setModel(G);
        }
      },
      [s],
      p
    ),
    Je(
      () => {
        let B = C.current.getModifiedEditor();
        B.getOption(k.current.editor.EditorOption.readOnly)
          ? B.setValue(t || "")
          : t !== B.getValue() &&
            (B.executeEdits("", [
              {
                range: B.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0,
              },
            ]),
            B.pushUndoStop());
      },
      [t],
      p
    ),
    Je(
      () => {
        var B, G;
        (G = (B = C.current) == null ? void 0 : B.getModel()) == null ||
          G.original.setValue(e || "");
      },
      [e],
      p
    ),
    Je(
      () => {
        let { original: B, modified: G } = C.current.getModel();
        k.current.editor.setModelLanguage(B, r || n || "text"),
          k.current.editor.setModelLanguage(G, o || n || "text");
      },
      [n, r, o],
      p
    ),
    Je(
      () => {
        var B;
        (B = k.current) == null || B.editor.setTheme(u);
      },
      [u],
      p
    ),
    Je(
      () => {
        var B;
        (B = C.current) == null || B.updateOptions(f);
      },
      [f],
      p
    );
  let _t = w.useCallback(() => {
      var ut;
      if (!k.current) return;
      I.current(k.current);
      let B = Ur(k.current, e || "", r || n || "text", i || ""),
        G = Ur(k.current, t || "", o || n || "text", s || "");
      (ut = C.current) == null || ut.setModel({ original: B, modified: G });
    }, [n, t, o, e, r, i, s]),
    It = w.useCallback(() => {
      var B;
      !ge.current &&
        T.current &&
        ((C.current = k.current.editor.createDiffEditor(T.current, {
          automaticLayout: !0,
          ...f,
        })),
        _t(),
        (B = k.current) == null || B.editor.setTheme(u),
        v(!0),
        (ge.current = !0));
    }, [f, u, _t]);
  w.useEffect(() => {
    p && M.current(C.current, k.current);
  }, [p]),
    w.useEffect(() => {
      !b && !p && It();
    }, [b, p, It]);
  function un() {
    var G, ut, P, L;
    let B = (G = C.current) == null ? void 0 : G.getModel();
    a || (ut = B == null ? void 0 : B.original) == null || ut.dispose(),
      l || (P = B == null ? void 0 : B.modified) == null || P.dispose(),
      (L = C.current) == null || L.dispose();
  }
  return V.createElement(n1, {
    width: h,
    height: d,
    isEditorReady: p,
    loading: c,
    _ref: T,
    className: g,
    wrapperProps: y,
  });
}
var l5 = a5;
w.memo(l5);
function u5(e) {
  let t = w.useRef();
  return (
    w.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var c5 = u5,
  $s = new Map();
function f5({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: o,
  path: i,
  theme: s = "light",
  line: a,
  loading: l = "Loading...",
  options: u = {},
  overrideServices: c = {},
  saveViewState: f = !0,
  keepCurrentModel: d = !1,
  width: h = "100%",
  height: g = "100%",
  className: y,
  wrapperProps: E = {},
  beforeMount: m = Zo,
  onMount: p = Zo,
  onChange: v,
  onValidate: b = Zo,
}) {
  let [$, C] = w.useState(!1),
    [k, T] = w.useState(!0),
    M = w.useRef(null),
    I = w.useRef(null),
    ge = w.useRef(null),
    _t = w.useRef(p),
    It = w.useRef(m),
    un = w.useRef(),
    B = w.useRef(r),
    G = c5(i),
    ut = w.useRef(!1),
    P = w.useRef(!1);
  r1(() => {
    let R = t1.init();
    return (
      R.then((D) => (M.current = D) && T(!1)).catch(
        (D) =>
          (D == null ? void 0 : D.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", D)
      ),
      () => (I.current ? F() : R.cancel())
    );
  }),
    Je(
      () => {
        var D, ye, Qe, Nt;
        let R = Ur(M.current, e || r || "", t || o || "", i || n || "");
        R !== ((D = I.current) == null ? void 0 : D.getModel()) &&
          (f &&
            $s.set(G, (ye = I.current) == null ? void 0 : ye.saveViewState()),
          (Qe = I.current) == null || Qe.setModel(R),
          f && ((Nt = I.current) == null || Nt.restoreViewState($s.get(i))));
      },
      [i],
      $
    ),
    Je(
      () => {
        var R;
        (R = I.current) == null || R.updateOptions(u);
      },
      [u],
      $
    ),
    Je(
      () => {
        !I.current ||
          r === void 0 ||
          (I.current.getOption(M.current.editor.EditorOption.readOnly)
            ? I.current.setValue(r)
            : r !== I.current.getValue() &&
              ((P.current = !0),
              I.current.executeEdits("", [
                {
                  range: I.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              I.current.pushUndoStop(),
              (P.current = !1)));
      },
      [r],
      $
    ),
    Je(
      () => {
        var D, ye;
        let R = (D = I.current) == null ? void 0 : D.getModel();
        R &&
          o &&
          ((ye = M.current) == null || ye.editor.setModelLanguage(R, o));
      },
      [o],
      $
    ),
    Je(
      () => {
        var R;
        a !== void 0 && ((R = I.current) == null || R.revealLine(a));
      },
      [a],
      $
    ),
    Je(
      () => {
        var R;
        (R = M.current) == null || R.editor.setTheme(s);
      },
      [s],
      $
    );
  let L = w.useCallback(() => {
    var R;
    if (!(!ge.current || !M.current) && !ut.current) {
      It.current(M.current);
      let D = i || n,
        ye = Ur(M.current, r || e || "", t || o || "", D || "");
      (I.current =
        (R = M.current) == null
          ? void 0
          : R.editor.create(
              ge.current,
              { model: ye, automaticLayout: !0, ...u },
              c
            )),
        f && I.current.restoreViewState($s.get(D)),
        M.current.editor.setTheme(s),
        a !== void 0 && I.current.revealLine(a),
        C(!0),
        (ut.current = !0);
    }
  }, [e, t, n, r, o, i, u, c, f, s, a]);
  w.useEffect(() => {
    $ && _t.current(I.current, M.current);
  }, [$]),
    w.useEffect(() => {
      !k && !$ && L();
    }, [k, $, L]),
    (B.current = r),
    w.useEffect(() => {
      var R, D;
      $ &&
        v &&
        ((R = un.current) == null || R.dispose(),
        (un.current =
          (D = I.current) == null
            ? void 0
            : D.onDidChangeModelContent((ye) => {
                P.current || v(I.current.getValue(), ye);
              })));
    }, [$, v]),
    w.useEffect(() => {
      if ($) {
        let R = M.current.editor.onDidChangeMarkers((D) => {
          var Qe;
          let ye = (Qe = I.current.getModel()) == null ? void 0 : Qe.uri;
          if (ye && D.find((Nt) => Nt.path === ye.path)) {
            let Nt = M.current.editor.getModelMarkers({ resource: ye });
            b == null || b(Nt);
          }
        });
        return () => {
          R == null || R.dispose();
        };
      }
      return () => {};
    }, [$, b]);
  function F() {
    var R, D;
    (R = un.current) == null || R.dispose(),
      d
        ? f && $s.set(i, I.current.saveViewState())
        : (D = I.current.getModel()) == null || D.dispose(),
      I.current.dispose();
  }
  return V.createElement(n1, {
    width: h,
    height: g,
    isEditorReady: $,
    loading: l,
    _ref: ge,
    className: y,
    wrapperProps: E,
  });
}
var d5 = f5,
  p5 = w.memo(d5),
  h5 = p5;
const m5 = [
    "TypeScript",
    "JavaScript",
    "CSS",
    "LESS",
    "SCSS",
    "JSON",
    "HTML",
    "XML",
    "PHP",
    "C#",
    "C++",
    "Razor",
    "Markdown",
    "Diff",
    "Java",
    "VB",
    "CoffeeScript",
    "Handlebars",
    "Batch",
    "Pug",
    "F#",
    "Lua",
    "PowerShell",
    "Python",
    "Ruby",
    "SASS",
    "R",
    "Objective-C",
  ],
  v5 = [
    {
      name: "javascript",
      value: `console.log("Hello, JavaScript");
`,
    },
    {
      name: "typescript",
      value: 'let message: string = "Hello, TypeScript"; console.log(message);',
    },
    {
      name: "css",
      value: `body { background-color: #f0f0f0; }
`,
    },
    {
      name: "less",
      value: `@primary-color: #4d90fe; body { background: @primary-color; }
`,
    },
    {
      name: "scss",
      value: `$primary-color: #333; body { color: $primary-color; }
`,
    },
    {
      name: "json",
      value: `{ "name": "example", "version": "1.0.0" }
`,
    },
    {
      name: "html",
      value: `<!DOCTYPE html>
<html>
	<head>
		<title>Hello, HTML</title>
	</head>
	<body>
		<h1>Hello, World!</h1>
	</body>
</html>`,
    },
    {
      name: "xml",
      value:
        "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>",
    },
    { name: "php", value: '<?php echo "Hello, PHP!"; ?>' },
    { name: "c#", value: 'Console.WriteLine("Hello, C#");' },
    {
      name: "c++",
      value: `#include <iostream>
int main() { std::cout << "Hello, C++"; return 0; }`,
    },
    {
      name: "razor",
      value: '@{ var message = "Hello, Razor!"; }<h1>@message</h1>',
    },
    {
      name: "markdown",
      value: `# Hello, Markdown
This is an example of a markdown file.`,
    },
    {
      name: "diff",
      value: `diff --git a/file.txt b/file.txt
index 83db48f..bf26927 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1 @@
-Hello
+Hello World`,
    },
    {
      name: "java",
      value:
        'public class Main { public static void main(String[] args) { System.out.println("Hello, Java!"); } }',
    },
    { name: "vb", value: 'Console.WriteLine("Hello, VB")' },
    { name: "coffeescript", value: 'console.log "Hello, CoffeeScript"' },
    {
      name: "handlebars",
      value: "{{#each items}}<div>{{this}}</div>{{/each}}",
    },
    {
      name: "batch",
      value: `@echo off
echo Hello, Batch`,
    },
    {
      name: "pug",
      value: `doctype html
html
  head
    title Hello, Pug
  body
    h1 Hello, World!`,
    },
    { name: "f#", value: 'printfn "Hello, F#"' },
    { name: "lua", value: 'print("Hello, Lua!")' },
    { name: "powershell", value: 'Write-Host "Hello, PowerShell"' },
    { name: "python", value: 'print("Hello, Python!")' },
    { name: "ruby", value: 'puts "Hello, Ruby!"' },
    {
      name: "sass",
      value: "$primary-color: #333; body { color: $primary-color; }",
    },
    { name: "r", value: 'print("Hello, R!")' },
    {
      name: "objective-c",
      value: `#import <Foundation/Foundation.h>
int main() { @autoreleasepool { NSLog(@"Hello, Objective-C!"); } return 0; }`,
    },
  ],
  g5 = {
    TypeScript: ".ts",
    JavaScript: ".js",
    CSS: ".css",
    LESS: ".less",
    SCSS: ".scss",
    JSON: ".json",
    HTML: ".html",
    XML: ".xml",
    PHP: ".php",
    "C#": ".cs",
    "C++": ".cpp",
    Razor: ".cshtml",
    Markdown: ".md",
    Diff: ".diff",
    Java: ".java",
    VB: ".vb",
    CoffeeScript: ".coffee",
    Handlebars: ".hbs",
    Batch: ".bat",
    Pug: ".pug",
    "F#": ".fs",
    Lua: ".lua",
    PowerShell: ".ps1",
    Python: ".py",
    Ruby: ".rb",
    SASS: ".sass",
    R: ".r",
    "Objective-C": ".m",
  },
  gn = {
    JOIN: "join",
    JOINED: "joined",
    DISCONNECTED: "disconnected",
    CODE_CHANGED: "code-change",
    SYNC_CODE: "sync-code",
    LEAVE: "leave",
  },
  Hu = (e) => {
    const t = v5.find((n) => n.name === e.toLowerCase());
    return t ? t.value : "";
  };
/*!
 * sweetalert2 v11.14.0
 * Released under the MIT License.
 */ function i1(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function y5(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function iv(e, t) {
  return e.get(i1(e, t));
}
function w5(e, t, n) {
  y5(e, t), t.set(e, n);
}
function S5(e, t, n) {
  return e.set(i1(e, t), n), n;
}
const b5 = 100,
  j = {},
  E5 = () => {
    j.previousActiveElement instanceof HTMLElement
      ? (j.previousActiveElement.focus(), (j.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  C5 = (e) =>
    new Promise((t) => {
      if (!e) return t();
      const n = window.scrollX,
        r = window.scrollY;
      (j.restoreFocusTimeout = setTimeout(() => {
        E5(), t();
      }, b5)),
        window.scrollTo(n, r);
    }),
  s1 = "swal2-",
  $5 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "default-outline",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
  ],
  S = $5.reduce((e, t) => ((e[t] = s1 + t), e), {}),
  x5 = ["success", "warning", "info", "question", "error"],
  Ia = x5.reduce((e, t) => ((e[t] = s1 + t), e), {}),
  a1 = "SweetAlert2:",
  Vd = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  qe = (e) => {
    console.warn(`${a1} ${typeof e == "object" ? e.join(" ") : e}`);
  },
  Sr = (e) => {
    console.error(`${a1} ${e}`);
  },
  sv = [],
  k5 = (e) => {
    sv.includes(e) || (sv.push(e), qe(e));
  },
  l1 = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    k5(
      `"${e}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`
    );
  },
  Pl = (e) => (typeof e == "function" ? e() : e),
  Hd = (e) => e && typeof e.toPromise == "function",
  Hi = (e) => (Hd(e) ? e.toPromise() : Promise.resolve(e)),
  Wd = (e) => e && Promise.resolve(e) === e,
  Ge = () => document.body.querySelector(`.${S.container}`),
  Wi = (e) => {
    const t = Ge();
    return t ? t.querySelector(e) : null;
  },
  at = (e) => Wi(`.${e}`),
  q = () => at(S.popup),
  Ki = () => at(S.icon),
  O5 = () => at(S["icon-content"]),
  u1 = () => at(S.title),
  Kd = () => at(S["html-container"]),
  c1 = () => at(S.image),
  qd = () => at(S["progress-steps"]),
  Tl = () => at(S["validation-message"]),
  zt = () => Wi(`.${S.actions} .${S.confirm}`),
  yo = () => Wi(`.${S.actions} .${S.cancel}`),
  br = () => Wi(`.${S.actions} .${S.deny}`),
  P5 = () => at(S["input-label"]),
  wo = () => Wi(`.${S.loader}`),
  qi = () => at(S.actions),
  f1 = () => at(S.footer),
  _l = () => at(S["timer-progress-bar"]),
  Gd = () => at(S.close),
  T5 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  Qd = () => {
    const e = q();
    if (!e) return [];
    const t = e.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      n = Array.from(t).sort((i, s) => {
        const a = parseInt(i.getAttribute("tabindex") || "0"),
          l = parseInt(s.getAttribute("tabindex") || "0");
        return a > l ? 1 : a < l ? -1 : 0;
      }),
      r = e.querySelectorAll(T5),
      o = Array.from(r).filter((i) => i.getAttribute("tabindex") !== "-1");
    return [...new Set(n.concat(o))].filter((i) => We(i));
  },
  Yd = () =>
    Jt(document.body, S.shown) &&
    !Jt(document.body, S["toast-shown"]) &&
    !Jt(document.body, S["no-backdrop"]),
  Il = () => {
    const e = q();
    return e ? Jt(e, S.toast) : !1;
  },
  _5 = () => {
    const e = q();
    return e ? e.hasAttribute("data-loading") : !1;
  },
  lt = (e, t) => {
    if (((e.textContent = ""), t)) {
      const r = new DOMParser().parseFromString(t, "text/html"),
        o = r.querySelector("head");
      o &&
        Array.from(o.childNodes).forEach((s) => {
          e.appendChild(s);
        });
      const i = r.querySelector("body");
      i &&
        Array.from(i.childNodes).forEach((s) => {
          s instanceof HTMLVideoElement || s instanceof HTMLAudioElement
            ? e.appendChild(s.cloneNode(!0))
            : e.appendChild(s);
        });
    }
  },
  Jt = (e, t) => {
    if (!t) return !1;
    const n = t.split(/\s+/);
    for (let r = 0; r < n.length; r++)
      if (!e.classList.contains(n[r])) return !1;
    return !0;
  },
  I5 = (e, t) => {
    Array.from(e.classList).forEach((n) => {
      !Object.values(S).includes(n) &&
        !Object.values(Ia).includes(n) &&
        !Object.values(t.showClass || {}).includes(n) &&
        e.classList.remove(n);
    });
  },
  nt = (e, t, n) => {
    if ((I5(e, t), !t.customClass)) return;
    const r = t.customClass[n];
    if (r) {
      if (typeof r != "string" && !r.forEach) {
        qe(
          `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`
        );
        return;
      }
      W(e, r);
    }
  },
  Nl = (e, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return e.querySelector(`.${S.popup} > .${S[t]}`);
      case "checkbox":
        return e.querySelector(`.${S.popup} > .${S.checkbox} input`);
      case "radio":
        return (
          e.querySelector(`.${S.popup} > .${S.radio} input:checked`) ||
          e.querySelector(`.${S.popup} > .${S.radio} input:first-child`)
        );
      case "range":
        return e.querySelector(`.${S.popup} > .${S.range} input`);
      default:
        return e.querySelector(`.${S.popup} > .${S.input}`);
    }
  },
  d1 = (e) => {
    if ((e.focus(), e.type !== "file")) {
      const t = e.value;
      (e.value = ""), (e.value = t);
    }
  },
  p1 = (e, t, n) => {
    !e ||
      !t ||
      (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)),
      t.forEach((r) => {
        Array.isArray(e)
          ? e.forEach((o) => {
              n ? o.classList.add(r) : o.classList.remove(r);
            })
          : n
          ? e.classList.add(r)
          : e.classList.remove(r);
      }));
  },
  W = (e, t) => {
    p1(e, t, !0);
  },
  Ut = (e, t) => {
    p1(e, t, !1);
  },
  En = (e, t) => {
    const n = Array.from(e.children);
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o instanceof HTMLElement && Jt(o, t)) return o;
    }
  },
  sr = (e, t, n) => {
    n === `${parseInt(n)}` && (n = parseInt(n)),
      n || parseInt(n) === 0
        ? e.style.setProperty(t, typeof n == "number" ? `${n}px` : n)
        : e.style.removeProperty(t);
  },
  Ee = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
    e && (e.style.display = t);
  },
  Ie = (e) => {
    e && (e.style.display = "none");
  },
  Jd = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
    e &&
      new MutationObserver(() => {
        Gi(e, e.innerHTML, t);
      }).observe(e, { childList: !0, subtree: !0 });
  },
  av = (e, t, n, r) => {
    const o = e.querySelector(t);
    o && o.style.setProperty(n, r);
  },
  Gi = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
    t ? Ee(e, n) : Ie(e);
  },
  We = (e) =>
    !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
  N5 = () => !We(zt()) && !We(br()) && !We(yo()),
  lv = (e) => e.scrollHeight > e.clientHeight,
  h1 = (e) => {
    const t = window.getComputedStyle(e),
      n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      r = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return n > 0 || r > 0;
  },
  Xd = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = _l();
    n &&
      We(n) &&
      (t && ((n.style.transition = "none"), (n.style.width = "100%")),
      setTimeout(() => {
        (n.style.transition = `width ${e / 1e3}s linear`),
          (n.style.width = "0%");
      }, 10));
  },
  R5 = () => {
    const e = _l();
    if (!e) return;
    const t = parseInt(window.getComputedStyle(e).width);
    e.style.removeProperty("transition"), (e.style.width = "100%");
    const n = parseInt(window.getComputedStyle(e).width),
      r = (t / n) * 100;
    e.style.width = `${r}%`;
  },
  m1 = () => typeof window > "u" || typeof document > "u",
  A5 = `
 <div aria-labelledby="${S.title}" aria-describedby="${S["html-container"]}" class="${S.popup}" tabindex="-1">
   <button type="button" class="${S.close}"></button>
   <ul class="${S["progress-steps"]}"></ul>
   <div class="${S.icon}"></div>
   <img class="${S.image}" />
   <h2 class="${S.title}" id="${S.title}"></h2>
   <div class="${S["html-container"]}" id="${S["html-container"]}"></div>
   <input class="${S.input}" id="${S.input}" />
   <input type="file" class="${S.file}" />
   <div class="${S.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${S.select}" id="${S.select}"></select>
   <div class="${S.radio}"></div>
   <label class="${S.checkbox}">
     <input type="checkbox" id="${S.checkbox}" />
     <span class="${S.label}"></span>
   </label>
   <textarea class="${S.textarea}" id="${S.textarea}"></textarea>
   <div class="${S["validation-message"]}" id="${S["validation-message"]}"></div>
   <div class="${S.actions}">
     <div class="${S.loader}"></div>
     <button type="button" class="${S.confirm}"></button>
     <button type="button" class="${S.deny}"></button>
     <button type="button" class="${S.cancel}"></button>
   </div>
   <div class="${S.footer}"></div>
   <div class="${S["timer-progress-bar-container"]}">
     <div class="${S["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  j5 = () => {
    const e = Ge();
    return e
      ? (e.remove(),
        Ut(
          [document.documentElement, document.body],
          [S["no-backdrop"], S["toast-shown"], S["has-column"]]
        ),
        !0)
      : !1;
  },
  Qn = () => {
    j.currentInstance.resetValidationMessage();
  },
  L5 = () => {
    const e = q(),
      t = En(e, S.input),
      n = En(e, S.file),
      r = e.querySelector(`.${S.range} input`),
      o = e.querySelector(`.${S.range} output`),
      i = En(e, S.select),
      s = e.querySelector(`.${S.checkbox} input`),
      a = En(e, S.textarea);
    (t.oninput = Qn),
      (n.onchange = Qn),
      (i.onchange = Qn),
      (s.onchange = Qn),
      (a.oninput = Qn),
      (r.oninput = () => {
        Qn(), (o.value = r.value);
      }),
      (r.onchange = () => {
        Qn(), (o.value = r.value);
      });
  },
  B5 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  D5 = (e) => {
    const t = q();
    t.setAttribute("role", e.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
      e.toast || t.setAttribute("aria-modal", "true");
  },
  M5 = (e) => {
    window.getComputedStyle(e).direction === "rtl" && W(Ge(), S.rtl);
  },
  F5 = (e) => {
    const t = j5();
    if (m1()) {
      Sr("SweetAlert2 requires document to initialize");
      return;
    }
    const n = document.createElement("div");
    (n.className = S.container), t && W(n, S["no-transition"]), lt(n, A5);
    const r = B5(e.target);
    r.appendChild(n), D5(e), M5(r), L5();
  },
  Zd = (e, t) => {
    e instanceof HTMLElement
      ? t.appendChild(e)
      : typeof e == "object"
      ? z5(e, t)
      : e && lt(t, e);
  },
  z5 = (e, t) => {
    e.jquery ? U5(t, e) : lt(t, e.toString());
  },
  U5 = (e, t) => {
    if (((e.textContent = ""), 0 in t))
      for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
    else e.appendChild(t.cloneNode(!0));
  },
  pr = (() => {
    if (m1()) return !1;
    const e = document.createElement("div");
    return typeof e.style.webkitAnimation < "u"
      ? "webkitAnimationEnd"
      : typeof e.style.animation < "u"
      ? "animationend"
      : !1;
  })(),
  V5 = (e, t) => {
    const n = qi(),
      r = wo();
    !n ||
      !r ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Ie(n)
        : Ee(n),
      nt(n, t, "actions"),
      H5(n, r, t),
      lt(r, t.loaderHtml || ""),
      nt(r, t, "loader"));
  };
function H5(e, t, n) {
  const r = zt(),
    o = br(),
    i = yo();
  !r ||
    !o ||
    !i ||
    (Wu(r, "confirm", n),
    Wu(o, "deny", n),
    Wu(i, "cancel", n),
    W5(r, o, i, n),
    n.reverseButtons &&
      (n.toast
        ? (e.insertBefore(i, r), e.insertBefore(o, r))
        : (e.insertBefore(i, t), e.insertBefore(o, t), e.insertBefore(r, t))));
}
function W5(e, t, n, r) {
  if (!r.buttonsStyling) {
    Ut([e, t, n], S.styled);
    return;
  }
  W([e, t, n], S.styled),
    r.confirmButtonColor &&
      ((e.style.backgroundColor = r.confirmButtonColor),
      W(e, S["default-outline"])),
    r.denyButtonColor &&
      ((t.style.backgroundColor = r.denyButtonColor),
      W(t, S["default-outline"])),
    r.cancelButtonColor &&
      ((n.style.backgroundColor = r.cancelButtonColor),
      W(n, S["default-outline"]));
}
function Wu(e, t, n) {
  const r = Vd(t);
  Gi(e, n[`show${r}Button`], "inline-block"),
    lt(e, n[`${t}ButtonText`] || ""),
    e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
    (e.className = S[t]),
    nt(e, n, `${t}Button`);
}
const K5 = (e, t) => {
    const n = Gd();
    n &&
      (lt(n, t.closeButtonHtml || ""),
      nt(n, t, "closeButton"),
      Gi(n, t.showCloseButton),
      n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  q5 = (e, t) => {
    const n = Ge();
    n &&
      (G5(n, t.backdrop),
      Q5(n, t.position),
      Y5(n, t.grow),
      nt(n, t, "container"));
  };
function G5(e, t) {
  typeof t == "string"
    ? (e.style.background = t)
    : t || W([document.documentElement, document.body], S["no-backdrop"]);
}
function Q5(e, t) {
  t &&
    (t in S
      ? W(e, S[t])
      : (qe('The "position" parameter is not valid, defaulting to "center"'),
        W(e, S.center)));
}
function Y5(e, t) {
  t && W(e, S[`grow-${t}`]);
}
var Y = { innerParams: new WeakMap(), domCache: new WeakMap() };
const J5 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  X5 = (e, t) => {
    const n = q();
    if (!n) return;
    const r = Y.innerParams.get(e),
      o = !r || t.input !== r.input;
    J5.forEach((i) => {
      const s = En(n, S[i]);
      s && (tA(i, t.inputAttributes), (s.className = S[i]), o && Ie(s));
    }),
      t.input && (o && Z5(t), nA(t));
  },
  Z5 = (e) => {
    if (!e.input) return;
    if (!oe[e.input]) {
      Sr(
        `Unexpected type of input! Expected ${Object.keys(oe).join(
          " | "
        )}, got "${e.input}"`
      );
      return;
    }
    const t = v1(e.input);
    if (!t) return;
    const n = oe[e.input](t, e);
    Ee(t),
      e.inputAutoFocus &&
        setTimeout(() => {
          d1(n);
        });
  },
  eA = (e) => {
    for (let t = 0; t < e.attributes.length; t++) {
      const n = e.attributes[t].name;
      ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n);
    }
  },
  tA = (e, t) => {
    const n = q();
    if (!n) return;
    const r = Nl(n, e);
    if (r) {
      eA(r);
      for (const o in t) r.setAttribute(o, t[o]);
    }
  },
  nA = (e) => {
    if (!e.input) return;
    const t = v1(e.input);
    t && nt(t, e, "input");
  },
  ep = (e, t) => {
    !e.placeholder &&
      t.inputPlaceholder &&
      (e.placeholder = t.inputPlaceholder);
  },
  Qi = (e, t, n) => {
    if (n.inputLabel) {
      const r = document.createElement("label"),
        o = S["input-label"];
      r.setAttribute("for", e.id),
        (r.className = o),
        typeof n.customClass == "object" && W(r, n.customClass.inputLabel),
        (r.innerText = n.inputLabel),
        t.insertAdjacentElement("beforebegin", r);
    }
  },
  v1 = (e) => {
    const t = q();
    if (t) return En(t, S[e] || S.input);
  },
  Na = (e, t) => {
    ["string", "number"].includes(typeof t)
      ? (e.value = `${t}`)
      : Wd(t) ||
        qe(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
        );
  },
  oe = {};
oe.text =
  oe.email =
  oe.password =
  oe.number =
  oe.tel =
  oe.url =
  oe.search =
  oe.date =
  oe["datetime-local"] =
  oe.time =
  oe.week =
  oe.month =
    (e, t) => (
      Na(e, t.inputValue), Qi(e, e, t), ep(e, t), (e.type = t.input), e
    );
oe.file = (e, t) => (Qi(e, e, t), ep(e, t), e);
oe.range = (e, t) => {
  const n = e.querySelector("input"),
    r = e.querySelector("output");
  return (
    Na(n, t.inputValue), (n.type = t.input), Na(r, t.inputValue), Qi(n, e, t), e
  );
};
oe.select = (e, t) => {
  if (((e.textContent = ""), t.inputPlaceholder)) {
    const n = document.createElement("option");
    lt(n, t.inputPlaceholder),
      (n.value = ""),
      (n.disabled = !0),
      (n.selected = !0),
      e.appendChild(n);
  }
  return Qi(e, e, t), e;
};
oe.radio = (e) => ((e.textContent = ""), e);
oe.checkbox = (e, t) => {
  const n = Nl(q(), "checkbox");
  (n.value = "1"), (n.checked = !!t.inputValue);
  const r = e.querySelector("span");
  return lt(r, t.inputPlaceholder || t.inputLabel), n;
};
oe.textarea = (e, t) => {
  Na(e, t.inputValue), ep(e, t), Qi(e, e, t);
  const n = (r) =>
    parseInt(window.getComputedStyle(r).marginLeft) +
    parseInt(window.getComputedStyle(r).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const r = parseInt(window.getComputedStyle(q()).width),
          o = () => {
            if (!document.body.contains(e)) return;
            const i = e.offsetWidth + n(e);
            i > r ? (q().style.width = `${i}px`) : sr(q(), "width", t.width);
          };
        new MutationObserver(o).observe(e, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    e
  );
};
const rA = (e, t) => {
    const n = Kd();
    n &&
      (Jd(n),
      nt(n, t, "htmlContainer"),
      t.html
        ? (Zd(t.html, n), Ee(n, "block"))
        : t.text
        ? ((n.textContent = t.text), Ee(n, "block"))
        : Ie(n),
      X5(e, t));
  },
  oA = (e, t) => {
    const n = f1();
    n &&
      (Jd(n),
      Gi(n, t.footer, "block"),
      t.footer && Zd(t.footer, n),
      nt(n, t, "footer"));
  },
  iA = (e, t) => {
    const n = Y.innerParams.get(e),
      r = Ki();
    if (r) {
      if (n && t.icon === n.icon) {
        cv(r, t), uv(r, t);
        return;
      }
      if (!t.icon && !t.iconHtml) {
        Ie(r);
        return;
      }
      if (t.icon && Object.keys(Ia).indexOf(t.icon) === -1) {
        Sr(
          `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
        ),
          Ie(r);
        return;
      }
      Ee(r), cv(r, t), uv(r, t), W(r, t.showClass && t.showClass.icon);
    }
  },
  uv = (e, t) => {
    for (const [n, r] of Object.entries(Ia)) t.icon !== n && Ut(e, r);
    W(e, t.icon && Ia[t.icon]), uA(e, t), sA(), nt(e, t, "icon");
  },
  sA = () => {
    const e = q();
    if (!e) return;
    const t = window.getComputedStyle(e).getPropertyValue("background-color"),
      n = e.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = t;
  },
  aA = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
  lA = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  cv = (e, t) => {
    if (!t.icon && !t.iconHtml) return;
    let n = e.innerHTML,
      r = "";
    t.iconHtml
      ? (r = fv(t.iconHtml))
      : t.icon === "success"
      ? ((r = aA), (n = n.replace(/ style=".*?"/g, "")))
      : t.icon === "error"
      ? (r = lA)
      : t.icon && (r = fv({ question: "?", warning: "!", info: "i" }[t.icon])),
      n.trim() !== r.trim() && lt(e, r);
  },
  uA = (e, t) => {
    if (t.iconColor) {
      (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
      for (const n of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        av(e, n, "background-color", t.iconColor);
      av(e, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  fv = (e) => `<div class="${S["icon-content"]}">${e}</div>`,
  cA = (e, t) => {
    const n = c1();
    if (n) {
      if (!t.imageUrl) {
        Ie(n);
        return;
      }
      Ee(n, ""),
        n.setAttribute("src", t.imageUrl),
        n.setAttribute("alt", t.imageAlt || ""),
        sr(n, "width", t.imageWidth),
        sr(n, "height", t.imageHeight),
        (n.className = S.image),
        nt(n, t, "image");
    }
  },
  fA = (e, t) => {
    const n = Ge(),
      r = q();
    if (!(!n || !r)) {
      if (t.toast) {
        sr(n, "width", t.width), (r.style.width = "100%");
        const o = wo();
        o && r.insertBefore(o, Ki());
      } else sr(r, "width", t.width);
      sr(r, "padding", t.padding),
        t.color && (r.style.color = t.color),
        t.background && (r.style.background = t.background),
        Ie(Tl()),
        dA(r, t);
    }
  },
  dA = (e, t) => {
    const n = t.showClass || {};
    (e.className = `${S.popup} ${We(e) ? n.popup : ""}`),
      t.toast
        ? (W([document.documentElement, document.body], S["toast-shown"]),
          W(e, S.toast))
        : W(e, S.modal),
      nt(e, t, "popup"),
      typeof t.customClass == "string" && W(e, t.customClass),
      t.icon && W(e, S[`icon-${t.icon}`]);
  },
  pA = (e, t) => {
    const n = qd();
    if (!n) return;
    const { progressSteps: r, currentProgressStep: o } = t;
    if (!r || r.length === 0 || o === void 0) {
      Ie(n);
      return;
    }
    Ee(n),
      (n.textContent = ""),
      o >= r.length &&
        qe(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      r.forEach((i, s) => {
        const a = hA(i);
        if (
          (n.appendChild(a),
          s === o && W(a, S["active-progress-step"]),
          s !== r.length - 1)
        ) {
          const l = mA(t);
          n.appendChild(l);
        }
      });
  },
  hA = (e) => {
    const t = document.createElement("li");
    return W(t, S["progress-step"]), lt(t, e), t;
  },
  mA = (e) => {
    const t = document.createElement("li");
    return (
      W(t, S["progress-step-line"]),
      e.progressStepsDistance && sr(t, "width", e.progressStepsDistance),
      t
    );
  },
  vA = (e, t) => {
    const n = u1();
    n &&
      (Jd(n),
      Gi(n, t.title || t.titleText, "block"),
      t.title && Zd(t.title, n),
      t.titleText && (n.innerText = t.titleText),
      nt(n, t, "title"));
  },
  g1 = (e, t) => {
    fA(e, t),
      q5(e, t),
      pA(e, t),
      iA(e, t),
      cA(e, t),
      vA(e, t),
      K5(e, t),
      rA(e, t),
      V5(e, t),
      oA(e, t);
    const n = q();
    typeof t.didRender == "function" && n && t.didRender(n),
      j.eventEmitter.emit("didRender", n);
  },
  gA = () => We(q()),
  y1 = () => {
    var e;
    return (e = zt()) === null || e === void 0 ? void 0 : e.click();
  },
  yA = () => {
    var e;
    return (e = br()) === null || e === void 0 ? void 0 : e.click();
  },
  wA = () => {
    var e;
    return (e = yo()) === null || e === void 0 ? void 0 : e.click();
  },
  So = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  w1 = (e) => {
    e.keydownTarget &&
      e.keydownHandlerAdded &&
      (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture,
      }),
      (e.keydownHandlerAdded = !1));
  },
  SA = (e, t, n) => {
    w1(e),
      t.toast ||
        ((e.keydownHandler = (r) => EA(t, r, n)),
        (e.keydownTarget = t.keydownListenerCapture ? window : q()),
        (e.keydownListenerCapture = t.keydownListenerCapture),
        e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !0));
  },
  pf = (e, t) => {
    var n;
    const r = Qd();
    if (r.length) {
      (e = e + t),
        e === r.length ? (e = 0) : e === -1 && (e = r.length - 1),
        r[e].focus();
      return;
    }
    (n = q()) === null || n === void 0 || n.focus();
  },
  S1 = ["ArrowRight", "ArrowDown"],
  bA = ["ArrowLeft", "ArrowUp"],
  EA = (e, t, n) => {
    e &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (e.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? CA(t, e)
          : t.key === "Tab"
          ? $A(t)
          : [...S1, ...bA].includes(t.key)
          ? xA(t.key)
          : t.key === "Escape" && kA(t, e, n)));
  },
  CA = (e, t) => {
    if (!Pl(t.allowEnterKey)) return;
    const n = Nl(q(), t.input);
    if (
      e.target &&
      n &&
      e.target instanceof HTMLElement &&
      e.target.outerHTML === n.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      y1(), e.preventDefault();
    }
  },
  $A = (e) => {
    const t = e.target,
      n = Qd();
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (t === n[o]) {
        r = o;
        break;
      }
    e.shiftKey ? pf(r, -1) : pf(r, 1), e.stopPropagation(), e.preventDefault();
  },
  xA = (e) => {
    const t = qi(),
      n = zt(),
      r = br(),
      o = yo();
    if (!t || !n || !r || !o) return;
    const i = [n, r, o];
    if (
      document.activeElement instanceof HTMLElement &&
      !i.includes(document.activeElement)
    )
      return;
    const s = S1.includes(e) ? "nextElementSibling" : "previousElementSibling";
    let a = document.activeElement;
    if (a) {
      for (let l = 0; l < t.children.length; l++) {
        if (((a = a[s]), !a)) return;
        if (a instanceof HTMLButtonElement && We(a)) break;
      }
      a instanceof HTMLButtonElement && a.focus();
    }
  },
  kA = (e, t, n) => {
    Pl(t.allowEscapeKey) && (e.preventDefault(), n(So.esc));
  };
var uo = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const OA = () => {
    const e = Ge();
    Array.from(document.body.children).forEach((n) => {
      n.contains(e) ||
        (n.hasAttribute("aria-hidden") &&
          n.setAttribute(
            "data-previous-aria-hidden",
            n.getAttribute("aria-hidden") || ""
          ),
        n.setAttribute("aria-hidden", "true"));
    });
  },
  b1 = () => {
    Array.from(document.body.children).forEach((t) => {
      t.hasAttribute("data-previous-aria-hidden")
        ? (t.setAttribute(
            "aria-hidden",
            t.getAttribute("data-previous-aria-hidden") || ""
          ),
          t.removeAttribute("data-previous-aria-hidden"))
        : t.removeAttribute("aria-hidden");
    });
  },
  E1 = typeof window < "u" && !!window.GestureEvent,
  PA = () => {
    if (E1 && !Jt(document.body, S.iosfix)) {
      const e = document.body.scrollTop;
      (document.body.style.top = `${e * -1}px`),
        W(document.body, S.iosfix),
        TA();
    }
  },
  TA = () => {
    const e = Ge();
    if (!e) return;
    let t;
    (e.ontouchstart = (n) => {
      t = _A(n);
    }),
      (e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      });
  },
  _A = (e) => {
    const t = e.target,
      n = Ge(),
      r = Kd();
    return !n || !r || IA(e) || NA(e)
      ? !1
      : t === n ||
          (!lv(n) &&
            t instanceof HTMLElement &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(lv(r) && r.contains(t)));
  },
  IA = (e) =>
    e.touches && e.touches.length && e.touches[0].touchType === "stylus",
  NA = (e) => e.touches && e.touches.length > 1,
  RA = () => {
    if (Jt(document.body, S.iosfix)) {
      const e = parseInt(document.body.style.top, 10);
      Ut(document.body, S.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = e * -1);
    }
  },
  AA = () => {
    const e = document.createElement("div");
    (e.className = S["scrollbar-measure"]), document.body.appendChild(e);
    const t = e.getBoundingClientRect().width - e.clientWidth;
    return document.body.removeChild(e), t;
  };
let Qr = null;
const jA = (e) => {
    Qr === null &&
      (document.body.scrollHeight > window.innerHeight || e === "scroll") &&
      ((Qr = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${Qr + AA()}px`));
  },
  LA = () => {
    Qr !== null &&
      ((document.body.style.paddingRight = `${Qr}px`), (Qr = null));
  };
function C1(e, t, n, r) {
  Il() ? dv(e, r) : (C5(n).then(() => dv(e, r)), w1(j)),
    E1
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    Yd() && (LA(), RA(), b1()),
    BA();
}
function BA() {
  Ut(
    [document.documentElement, document.body],
    [S.shown, S["height-auto"], S["no-backdrop"], S["toast-shown"]]
  );
}
function Cn(e) {
  e = MA(e);
  const t = uo.swalPromiseResolve.get(this),
    n = DA(this);
  this.isAwaitingPromise ? e.isDismissed || (Yi(this), t(e)) : n && t(e);
}
const DA = (e) => {
  const t = q();
  if (!t) return !1;
  const n = Y.innerParams.get(e);
  if (!n || Jt(t, n.hideClass.popup)) return !1;
  Ut(t, n.showClass.popup), W(t, n.hideClass.popup);
  const r = Ge();
  return (
    Ut(r, n.showClass.backdrop), W(r, n.hideClass.backdrop), FA(e, t, n), !0
  );
};
function $1(e) {
  const t = uo.swalPromiseReject.get(this);
  Yi(this), t && t(e);
}
const Yi = (e) => {
    e.isAwaitingPromise &&
      (delete e.isAwaitingPromise, Y.innerParams.get(e) || e._destroy());
  },
  MA = (e) =>
    typeof e > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
  FA = (e, t, n) => {
    const r = Ge(),
      o = pr && h1(t);
    typeof n.willClose == "function" && n.willClose(t),
      j.eventEmitter.emit("willClose", t),
      o
        ? zA(e, t, r, n.returnFocus, n.didClose)
        : C1(e, r, n.returnFocus, n.didClose);
  },
  zA = (e, t, n, r, o) => {
    pr &&
      ((j.swalCloseEventFinishedCallback = C1.bind(null, e, n, r, o)),
      t.addEventListener(pr, function (i) {
        i.target === t &&
          (j.swalCloseEventFinishedCallback(),
          delete j.swalCloseEventFinishedCallback);
      }));
  },
  dv = (e, t) => {
    setTimeout(() => {
      typeof t == "function" && t.bind(e.params)(),
        j.eventEmitter.emit("didClose"),
        e._destroy && e._destroy();
    });
  },
  co = (e) => {
    let t = q();
    if ((t || new ar(), (t = q()), !t)) return;
    const n = wo();
    Il() ? Ie(Ki()) : UA(t, e),
      Ee(n),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus();
  },
  UA = (e, t) => {
    const n = qi(),
      r = wo();
    !n ||
      !r ||
      (!t && We(zt()) && (t = zt()),
      Ee(n),
      t &&
        (Ie(t),
        r.setAttribute("data-button-to-replace", t.className),
        n.insertBefore(r, t)),
      W([e, n], S.loading));
  },
  VA = (e, t) => {
    t.input === "select" || t.input === "radio"
      ? GA(e, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (n) => n === t.input
        ) &&
        (Hd(t.inputValue) || Wd(t.inputValue)) &&
        (co(zt()), QA(e, t));
  },
  HA = (e, t) => {
    const n = e.getInput();
    if (!n) return null;
    switch (t.input) {
      case "checkbox":
        return WA(n);
      case "radio":
        return KA(n);
      case "file":
        return qA(n);
      default:
        return t.inputAutoTrim ? n.value.trim() : n.value;
    }
  },
  WA = (e) => (e.checked ? 1 : 0),
  KA = (e) => (e.checked ? e.value : null),
  qA = (e) =>
    e.files && e.files.length
      ? e.getAttribute("multiple") !== null
        ? e.files
        : e.files[0]
      : null,
  GA = (e, t) => {
    const n = q();
    if (!n) return;
    const r = (o) => {
      t.input === "select"
        ? YA(n, Ra(o), t)
        : t.input === "radio" && JA(n, Ra(o), t);
    };
    Hd(t.inputOptions) || Wd(t.inputOptions)
      ? (co(zt()),
        Hi(t.inputOptions).then((o) => {
          e.hideLoading(), r(o);
        }))
      : typeof t.inputOptions == "object"
      ? r(t.inputOptions)
      : Sr(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`
        );
  },
  QA = (e, t) => {
    const n = e.getInput();
    n &&
      (Ie(n),
      Hi(t.inputValue)
        .then((r) => {
          (n.value = t.input === "number" ? `${parseFloat(r) || 0}` : `${r}`),
            Ee(n),
            n.focus(),
            e.hideLoading();
        })
        .catch((r) => {
          Sr(`Error in inputValue promise: ${r}`),
            (n.value = ""),
            Ee(n),
            n.focus(),
            e.hideLoading();
        }));
  };
function YA(e, t, n) {
  const r = En(e, S.select);
  if (!r) return;
  const o = (i, s, a) => {
    const l = document.createElement("option");
    (l.value = a),
      lt(l, s),
      (l.selected = x1(a, n.inputValue)),
      i.appendChild(l);
  };
  t.forEach((i) => {
    const s = i[0],
      a = i[1];
    if (Array.isArray(a)) {
      const l = document.createElement("optgroup");
      (l.label = s),
        (l.disabled = !1),
        r.appendChild(l),
        a.forEach((u) => o(l, u[1], u[0]));
    } else o(r, a, s);
  }),
    r.focus();
}
function JA(e, t, n) {
  const r = En(e, S.radio);
  if (!r) return;
  t.forEach((i) => {
    const s = i[0],
      a = i[1],
      l = document.createElement("input"),
      u = document.createElement("label");
    (l.type = "radio"),
      (l.name = S.radio),
      (l.value = s),
      x1(s, n.inputValue) && (l.checked = !0);
    const c = document.createElement("span");
    lt(c, a),
      (c.className = S.label),
      u.appendChild(l),
      u.appendChild(c),
      r.appendChild(u);
  });
  const o = r.querySelectorAll("input");
  o.length && o[0].focus();
}
const Ra = (e) => {
    const t = [];
    return (
      e instanceof Map
        ? e.forEach((n, r) => {
            let o = n;
            typeof o == "object" && (o = Ra(o)), t.push([r, o]);
          })
        : Object.keys(e).forEach((n) => {
            let r = e[n];
            typeof r == "object" && (r = Ra(r)), t.push([n, r]);
          }),
      t
    );
  },
  x1 = (e, t) => !!t && t.toString() === e.toString(),
  XA = (e) => {
    const t = Y.innerParams.get(e);
    e.disableButtons(), t.input ? k1(e, "confirm") : np(e, !0);
  },
  ZA = (e) => {
    const t = Y.innerParams.get(e);
    e.disableButtons(), t.returnInputValueOnDeny ? k1(e, "deny") : tp(e, !1);
  },
  e4 = (e, t) => {
    e.disableButtons(), t(So.cancel);
  },
  k1 = (e, t) => {
    const n = Y.innerParams.get(e);
    if (!n.input) {
      Sr(
        `The "input" parameter is needed to be set when using returnInputValueOn${Vd(
          t
        )}`
      );
      return;
    }
    const r = e.getInput(),
      o = HA(e, n);
    n.inputValidator
      ? t4(e, o, t)
      : r && !r.checkValidity()
      ? (e.enableButtons(),
        e.showValidationMessage(n.validationMessage || r.validationMessage))
      : t === "deny"
      ? tp(e, o)
      : np(e, o);
  },
  t4 = (e, t, n) => {
    const r = Y.innerParams.get(e);
    e.disableInput(),
      Promise.resolve()
        .then(() => Hi(r.inputValidator(t, r.validationMessage)))
        .then((i) => {
          e.enableButtons(),
            e.enableInput(),
            i ? e.showValidationMessage(i) : n === "deny" ? tp(e, t) : np(e, t);
        });
  },
  tp = (e, t) => {
    const n = Y.innerParams.get(e || void 0);
    n.showLoaderOnDeny && co(br()),
      n.preDeny
        ? ((e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Hi(n.preDeny(t, n.validationMessage)))
            .then((o) => {
              o === !1
                ? (e.hideLoading(), Yi(e))
                : e.close({ isDenied: !0, value: typeof o > "u" ? t : o });
            })
            .catch((o) => O1(e || void 0, o)))
        : e.close({ isDenied: !0, value: t });
  },
  pv = (e, t) => {
    e.close({ isConfirmed: !0, value: t });
  },
  O1 = (e, t) => {
    e.rejectPromise(t);
  },
  np = (e, t) => {
    const n = Y.innerParams.get(e || void 0);
    n.showLoaderOnConfirm && co(),
      n.preConfirm
        ? (e.resetValidationMessage(),
          (e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Hi(n.preConfirm(t, n.validationMessage)))
            .then((o) => {
              We(Tl()) || o === !1
                ? (e.hideLoading(), Yi(e))
                : pv(e, typeof o > "u" ? t : o);
            })
            .catch((o) => O1(e || void 0, o)))
        : pv(e, t);
  };
function Aa() {
  const e = Y.innerParams.get(this);
  if (!e) return;
  const t = Y.domCache.get(this);
  Ie(t.loader),
    Il() ? e.icon && Ee(Ki()) : n4(t),
    Ut([t.popup, t.actions], S.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    (t.confirmButton.disabled = !1),
    (t.denyButton.disabled = !1),
    (t.cancelButton.disabled = !1);
}
const n4 = (e) => {
  const t = e.popup.getElementsByClassName(
    e.loader.getAttribute("data-button-to-replace")
  );
  t.length ? Ee(t[0], "inline-block") : N5() && Ie(e.actions);
};
function P1() {
  const e = Y.innerParams.get(this),
    t = Y.domCache.get(this);
  return t ? Nl(t.popup, e.input) : null;
}
function T1(e, t, n) {
  const r = Y.domCache.get(e);
  t.forEach((o) => {
    r[o].disabled = n;
  });
}
function _1(e, t) {
  const n = q();
  if (!(!n || !e))
    if (e.type === "radio") {
      const r = n.querySelectorAll(`[name="${S.radio}"]`);
      for (let o = 0; o < r.length; o++) r[o].disabled = t;
    } else e.disabled = t;
}
function I1() {
  T1(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function N1() {
  T1(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function R1() {
  _1(this.getInput(), !1);
}
function A1() {
  _1(this.getInput(), !0);
}
function j1(e) {
  const t = Y.domCache.get(this),
    n = Y.innerParams.get(this);
  lt(t.validationMessage, e),
    (t.validationMessage.className = S["validation-message"]),
    n.customClass &&
      n.customClass.validationMessage &&
      W(t.validationMessage, n.customClass.validationMessage),
    Ee(t.validationMessage);
  const r = this.getInput();
  r &&
    (r.setAttribute("aria-invalid", "true"),
    r.setAttribute("aria-describedby", S["validation-message"]),
    d1(r),
    W(r, S.inputerror));
}
function L1() {
  const e = Y.domCache.get(this);
  e.validationMessage && Ie(e.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    Ut(t, S.inputerror));
}
const Yr = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    animation: !0,
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
  },
  r4 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "willClose",
  ],
  o4 = { allowEnterKey: void 0 },
  i4 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  B1 = (e) => Object.prototype.hasOwnProperty.call(Yr, e),
  D1 = (e) => r4.indexOf(e) !== -1,
  M1 = (e) => o4[e],
  s4 = (e) => {
    B1(e) || qe(`Unknown parameter "${e}"`);
  },
  a4 = (e) => {
    i4.includes(e) && qe(`The parameter "${e}" is incompatible with toasts`);
  },
  l4 = (e) => {
    const t = M1(e);
    t && l1(e, t);
  },
  u4 = (e) => {
    e.backdrop === !1 &&
      e.allowOutsideClick &&
      qe(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      );
    for (const t in e) s4(t), e.toast && a4(t), l4(t);
  };
function F1(e) {
  const t = q(),
    n = Y.innerParams.get(this);
  if (!t || Jt(t, n.hideClass.popup)) {
    qe(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const r = c4(e),
    o = Object.assign({}, n, r);
  g1(this, o),
    Y.innerParams.set(this, o),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, e),
        writable: !1,
        enumerable: !0,
      },
    });
}
const c4 = (e) => {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      D1(n) ? (t[n] = e[n]) : qe(`Invalid parameter to update: ${n}`);
    }),
    t
  );
};
function z1() {
  const e = Y.domCache.get(this),
    t = Y.innerParams.get(this);
  if (!t) {
    U1(this);
    return;
  }
  e.popup &&
    j.swalCloseEventFinishedCallback &&
    (j.swalCloseEventFinishedCallback(),
    delete j.swalCloseEventFinishedCallback),
    typeof t.didDestroy == "function" && t.didDestroy(),
    j.eventEmitter.emit("didDestroy"),
    f4(this);
}
const f4 = (e) => {
    U1(e),
      delete e.params,
      delete j.keydownHandler,
      delete j.keydownTarget,
      delete j.currentInstance;
  },
  U1 = (e) => {
    e.isAwaitingPromise
      ? (Ku(Y, e), (e.isAwaitingPromise = !0))
      : (Ku(uo, e),
        Ku(Y, e),
        delete e.isAwaitingPromise,
        delete e.disableButtons,
        delete e.enableButtons,
        delete e.getInput,
        delete e.disableInput,
        delete e.enableInput,
        delete e.hideLoading,
        delete e.disableLoading,
        delete e.showValidationMessage,
        delete e.resetValidationMessage,
        delete e.close,
        delete e.closePopup,
        delete e.closeModal,
        delete e.closeToast,
        delete e.rejectPromise,
        delete e.update,
        delete e._destroy);
  },
  Ku = (e, t) => {
    for (const n in e) e[n].delete(t);
  };
var d4 = Object.freeze({
  __proto__: null,
  _destroy: z1,
  close: Cn,
  closeModal: Cn,
  closePopup: Cn,
  closeToast: Cn,
  disableButtons: N1,
  disableInput: A1,
  disableLoading: Aa,
  enableButtons: I1,
  enableInput: R1,
  getInput: P1,
  handleAwaitingPromise: Yi,
  hideLoading: Aa,
  rejectPromise: $1,
  resetValidationMessage: L1,
  showValidationMessage: j1,
  update: F1,
});
const p4 = (e, t, n) => {
    e.toast ? h4(e, t, n) : (v4(t), g4(t), y4(e, t, n));
  },
  h4 = (e, t, n) => {
    t.popup.onclick = () => {
      (e && (m4(e) || e.timer || e.input)) || n(So.close);
    };
  },
  m4 = (e) =>
    !!(
      e.showConfirmButton ||
      e.showDenyButton ||
      e.showCancelButton ||
      e.showCloseButton
    );
let ja = !1;
const v4 = (e) => {
    e.popup.onmousedown = () => {
      e.container.onmouseup = function (t) {
        (e.container.onmouseup = () => {}),
          t.target === e.container && (ja = !0);
      };
    };
  },
  g4 = (e) => {
    e.container.onmousedown = (t) => {
      t.target === e.container && t.preventDefault(),
        (e.popup.onmouseup = function (n) {
          (e.popup.onmouseup = () => {}),
            (n.target === e.popup ||
              (n.target instanceof HTMLElement &&
                e.popup.contains(n.target))) &&
              (ja = !0);
        });
    };
  },
  y4 = (e, t, n) => {
    t.container.onclick = (r) => {
      if (ja) {
        ja = !1;
        return;
      }
      r.target === t.container && Pl(e.allowOutsideClick) && n(So.backdrop);
    };
  },
  w4 = (e) => typeof e == "object" && e.jquery,
  hv = (e) => e instanceof Element || w4(e),
  S4 = (e) => {
    const t = {};
    return (
      typeof e[0] == "object" && !hv(e[0])
        ? Object.assign(t, e[0])
        : ["title", "html", "icon"].forEach((n, r) => {
            const o = e[r];
            typeof o == "string" || hv(o)
              ? (t[n] = o)
              : o !== void 0 &&
                Sr(
                  `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`
                );
          }),
      t
    );
  };
function b4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return new this(...t);
}
function E4(e) {
  class t extends this {
    _main(r, o) {
      return super._main(r, Object.assign({}, e, o));
    }
  }
  return t;
}
const C4 = () => j.timeout && j.timeout.getTimerLeft(),
  V1 = () => {
    if (j.timeout) return R5(), j.timeout.stop();
  },
  H1 = () => {
    if (j.timeout) {
      const e = j.timeout.start();
      return Xd(e), e;
    }
  },
  $4 = () => {
    const e = j.timeout;
    return e && (e.running ? V1() : H1());
  },
  x4 = (e) => {
    if (j.timeout) {
      const t = j.timeout.increase(e);
      return Xd(t, !0), t;
    }
  },
  k4 = () => !!(j.timeout && j.timeout.isRunning());
let mv = !1;
const hf = {};
function O4() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "data-swal-template";
  (hf[e] = this),
    mv || (document.body.addEventListener("click", P4), (mv = !0));
}
const P4 = (e) => {
  for (let t = e.target; t && t !== document; t = t.parentNode)
    for (const n in hf) {
      const r = t.getAttribute(n);
      if (r) {
        hf[n].fire({ template: r });
        return;
      }
    }
};
class T4 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return typeof this.events[t] > "u" && (this.events[t] = []), this.events[t];
  }
  on(t, n) {
    const r = this._getHandlersByEventName(t);
    r.includes(n) || r.push(n);
  }
  once(t, n) {
    var r = this;
    const o = function () {
      r.removeListener(t, o);
      for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
        s[a] = arguments[a];
      n.apply(r, s);
    };
    this.on(t, o);
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    this._getHandlersByEventName(t).forEach((i) => {
      try {
        i.apply(this, r);
      } catch (s) {
        console.error(s);
      }
    });
  }
  removeListener(t, n) {
    const r = this._getHandlersByEventName(t),
      o = r.indexOf(n);
    o > -1 && r.splice(o, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
j.eventEmitter = new T4();
const _4 = (e, t) => {
    j.eventEmitter.on(e, t);
  },
  I4 = (e, t) => {
    j.eventEmitter.once(e, t);
  },
  N4 = (e, t) => {
    if (!e) {
      j.eventEmitter.reset();
      return;
    }
    t
      ? j.eventEmitter.removeListener(e, t)
      : j.eventEmitter.removeAllListeners(e);
  };
var R4 = Object.freeze({
  __proto__: null,
  argsToParams: S4,
  bindClickHandler: O4,
  clickCancel: wA,
  clickConfirm: y1,
  clickDeny: yA,
  enableLoading: co,
  fire: b4,
  getActions: qi,
  getCancelButton: yo,
  getCloseButton: Gd,
  getConfirmButton: zt,
  getContainer: Ge,
  getDenyButton: br,
  getFocusableElements: Qd,
  getFooter: f1,
  getHtmlContainer: Kd,
  getIcon: Ki,
  getIconContent: O5,
  getImage: c1,
  getInputLabel: P5,
  getLoader: wo,
  getPopup: q,
  getProgressSteps: qd,
  getTimerLeft: C4,
  getTimerProgressBar: _l,
  getTitle: u1,
  getValidationMessage: Tl,
  increaseTimer: x4,
  isDeprecatedParameter: M1,
  isLoading: _5,
  isTimerRunning: k4,
  isUpdatableParameter: D1,
  isValidParameter: B1,
  isVisible: gA,
  mixin: E4,
  off: N4,
  on: _4,
  once: I4,
  resumeTimer: H1,
  showLoading: co,
  stopTimer: V1,
  toggleTimer: $4,
});
class A4 {
  constructor(t, n) {
    (this.callback = t),
      (this.remaining = n),
      (this.running = !1),
      this.start();
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(t) {
    const n = this.running;
    return (
      n && this.stop(), (this.remaining += t), n && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const W1 = ["swal-title", "swal-html", "swal-footer"],
  j4 = (e) => {
    const t =
      typeof e.template == "string"
        ? document.querySelector(e.template)
        : e.template;
    if (!t) return {};
    const n = t.content;
    return (
      V4(n), Object.assign(L4(n), B4(n), D4(n), M4(n), F4(n), z4(n), U4(n, W1))
    );
  },
  L4 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-param")).forEach((r) => {
        hr(r, ["name", "value"]);
        const o = r.getAttribute("name"),
          i = r.getAttribute("value");
        !o ||
          !i ||
          (typeof Yr[o] == "boolean"
            ? (t[o] = i !== "false")
            : typeof Yr[o] == "object"
            ? (t[o] = JSON.parse(i))
            : (t[o] = i));
      }),
      t
    );
  },
  B4 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-function-param")).forEach((r) => {
        const o = r.getAttribute("name"),
          i = r.getAttribute("value");
        !o || !i || (t[o] = new Function(`return ${i}`)());
      }),
      t
    );
  },
  D4 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-button")).forEach((r) => {
        hr(r, ["type", "color", "aria-label"]);
        const o = r.getAttribute("type");
        !o ||
          !["confirm", "cancel", "deny"].includes(o) ||
          ((t[`${o}ButtonText`] = r.innerHTML),
          (t[`show${Vd(o)}Button`] = !0),
          r.hasAttribute("color") &&
            (t[`${o}ButtonColor`] = r.getAttribute("color")),
          r.hasAttribute("aria-label") &&
            (t[`${o}ButtonAriaLabel`] = r.getAttribute("aria-label")));
      }),
      t
    );
  },
  M4 = (e) => {
    const t = {},
      n = e.querySelector("swal-image");
    return (
      n &&
        (hr(n, ["src", "width", "height", "alt"]),
        n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src") || void 0),
        n.hasAttribute("width") &&
          (t.imageWidth = n.getAttribute("width") || void 0),
        n.hasAttribute("height") &&
          (t.imageHeight = n.getAttribute("height") || void 0),
        n.hasAttribute("alt") &&
          (t.imageAlt = n.getAttribute("alt") || void 0)),
      t
    );
  },
  F4 = (e) => {
    const t = {},
      n = e.querySelector("swal-icon");
    return (
      n &&
        (hr(n, ["type", "color"]),
        n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
        (t.iconHtml = n.innerHTML)),
      t
    );
  },
  z4 = (e) => {
    const t = {},
      n = e.querySelector("swal-input");
    n &&
      (hr(n, ["type", "label", "placeholder", "value"]),
      (t.input = n.getAttribute("type") || "text"),
      n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
      n.hasAttribute("placeholder") &&
        (t.inputPlaceholder = n.getAttribute("placeholder")),
      n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
    const r = Array.from(e.querySelectorAll("swal-input-option"));
    return (
      r.length &&
        ((t.inputOptions = {}),
        r.forEach((o) => {
          hr(o, ["value"]);
          const i = o.getAttribute("value");
          if (!i) return;
          const s = o.innerHTML;
          t.inputOptions[i] = s;
        })),
      t
    );
  },
  U4 = (e, t) => {
    const n = {};
    for (const r in t) {
      const o = t[r],
        i = e.querySelector(o);
      i && (hr(i, []), (n[o.replace(/^swal-/, "")] = i.innerHTML.trim()));
    }
    return n;
  },
  V4 = (e) => {
    const t = W1.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(e.children).forEach((n) => {
      const r = n.tagName.toLowerCase();
      t.includes(r) || qe(`Unrecognized element <${r}>`);
    });
  },
  hr = (e, t) => {
    Array.from(e.attributes).forEach((n) => {
      t.indexOf(n.name) === -1 &&
        qe([
          `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
          `${
            t.length
              ? `Allowed attributes are: ${t.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  K1 = 10,
  H4 = (e) => {
    const t = Ge(),
      n = q();
    typeof e.willOpen == "function" && e.willOpen(n),
      j.eventEmitter.emit("willOpen", n);
    const o = window.getComputedStyle(document.body).overflowY;
    q4(t, n, e),
      setTimeout(() => {
        W4(t, n);
      }, K1),
      Yd() && (K4(t, e.scrollbarPadding, o), OA()),
      !Il() &&
        !j.previousActiveElement &&
        (j.previousActiveElement = document.activeElement),
      typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)),
      j.eventEmitter.emit("didOpen", n),
      Ut(t, S["no-transition"]);
  },
  q1 = (e) => {
    const t = q();
    if (e.target !== t || !pr) return;
    const n = Ge();
    t.removeEventListener(pr, q1), (n.style.overflowY = "auto");
  },
  W4 = (e, t) => {
    pr && h1(t)
      ? ((e.style.overflowY = "hidden"), t.addEventListener(pr, q1))
      : (e.style.overflowY = "auto");
  },
  K4 = (e, t, n) => {
    PA(),
      t && n !== "hidden" && jA(n),
      setTimeout(() => {
        e.scrollTop = 0;
      });
  },
  q4 = (e, t, n) => {
    W(e, n.showClass.backdrop),
      n.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          Ee(t, "grid"),
          setTimeout(() => {
            W(t, n.showClass.popup), t.style.removeProperty("opacity");
          }, K1))
        : Ee(t, "grid"),
      W([document.documentElement, document.body], S.shown),
      n.heightAuto &&
        n.backdrop &&
        !n.toast &&
        W([document.documentElement, document.body], S["height-auto"]);
  };
var vv = {
  email: (e, t) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid email address"),
  url: (e, t) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      e
    )
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid URL"),
};
function G4(e) {
  e.inputValidator ||
    (e.input === "email" && (e.inputValidator = vv.email),
    e.input === "url" && (e.inputValidator = vv.url));
}
function Q4(e) {
  (!e.target ||
    (typeof e.target == "string" && !document.querySelector(e.target)) ||
    (typeof e.target != "string" && !e.target.appendChild)) &&
    (qe('Target parameter is not valid, defaulting to "body"'),
    (e.target = "body"));
}
function Y4(e) {
  G4(e),
    e.showLoaderOnConfirm &&
      !e.preConfirm &&
      qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    Q4(e),
    typeof e.title == "string" &&
      (e.title = e.title
        .split(
          `
`
        )
        .join("<br />")),
    F5(e);
}
let Lt;
var xs = new WeakMap();
class le {
  constructor() {
    if ((w5(this, xs, void 0), typeof window > "u")) return;
    Lt = this;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = Object.freeze(this.constructor.argsToParams(n));
    (this.params = o),
      (this.isAwaitingPromise = !1),
      S5(xs, this, this._main(Lt.params));
  }
  _main(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((u4(Object.assign({}, n, t)), j.currentInstance)) {
      const i = uo.swalPromiseResolve.get(j.currentInstance),
        { isAwaitingPromise: s } = j.currentInstance;
      j.currentInstance._destroy(), s || i({ isDismissed: !0 }), Yd() && b1();
    }
    j.currentInstance = Lt;
    const r = X4(t, n);
    Y4(r),
      Object.freeze(r),
      j.timeout && (j.timeout.stop(), delete j.timeout),
      clearTimeout(j.restoreFocusTimeout);
    const o = Z4(Lt);
    return g1(Lt, r), Y.innerParams.set(Lt, r), J4(Lt, o, r);
  }
  then(t) {
    return iv(xs, this).then(t);
  }
  finally(t) {
    return iv(xs, this).finally(t);
  }
}
const J4 = (e, t, n) =>
    new Promise((r, o) => {
      const i = (s) => {
        e.close({ isDismissed: !0, dismiss: s });
      };
      uo.swalPromiseResolve.set(e, r),
        uo.swalPromiseReject.set(e, o),
        (t.confirmButton.onclick = () => {
          XA(e);
        }),
        (t.denyButton.onclick = () => {
          ZA(e);
        }),
        (t.cancelButton.onclick = () => {
          e4(e, i);
        }),
        (t.closeButton.onclick = () => {
          i(So.close);
        }),
        p4(n, t, i),
        SA(j, n, i),
        VA(e, n),
        H4(n),
        ej(j, n, i),
        tj(t, n),
        setTimeout(() => {
          t.container.scrollTop = 0;
        });
    }),
  X4 = (e, t) => {
    const n = j4(e),
      r = Object.assign({}, Yr, t, n, e);
    return (
      (r.showClass = Object.assign({}, Yr.showClass, r.showClass)),
      (r.hideClass = Object.assign({}, Yr.hideClass, r.hideClass)),
      r.animation === !1 &&
        ((r.showClass = { backdrop: "swal2-noanimation" }), (r.hideClass = {})),
      r
    );
  },
  Z4 = (e) => {
    const t = {
      popup: q(),
      container: Ge(),
      actions: qi(),
      confirmButton: zt(),
      denyButton: br(),
      cancelButton: yo(),
      loader: wo(),
      closeButton: Gd(),
      validationMessage: Tl(),
      progressSteps: qd(),
    };
    return Y.domCache.set(e, t), t;
  },
  ej = (e, t, n) => {
    const r = _l();
    Ie(r),
      t.timer &&
        ((e.timeout = new A4(() => {
          n("timer"), delete e.timeout;
        }, t.timer)),
        t.timerProgressBar &&
          (Ee(r),
          nt(r, t, "timerProgressBar"),
          setTimeout(() => {
            e.timeout && e.timeout.running && Xd(t.timer);
          })));
  },
  tj = (e, t) => {
    if (!t.toast) {
      if (!Pl(t.allowEnterKey)) {
        l1("allowEnterKey"), oj();
        return;
      }
      nj(e) || rj(e, t) || pf(-1, 1);
    }
  },
  nj = (e) => {
    const t = e.popup.querySelectorAll("[autofocus]");
    for (const n of t)
      if (n instanceof HTMLElement && We(n)) return n.focus(), !0;
    return !1;
  },
  rj = (e, t) =>
    t.focusDeny && We(e.denyButton)
      ? (e.denyButton.focus(), !0)
      : t.focusCancel && We(e.cancelButton)
      ? (e.cancelButton.focus(), !0)
      : t.focusConfirm && We(e.confirmButton)
      ? (e.confirmButton.focus(), !0)
      : !1,
  oj = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
if (
  typeof window < "u" &&
  /^ru\b/.test(navigator.language) &&
  location.host.match(/\.(ru|su|by|xn--p1ai)$/)
) {
  const e = new Date(),
    t = localStorage.getItem("swal-initiation");
  t
    ? (e.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 &&
      setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const n = document.createElement("audio");
        (n.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
          (n.loop = !0),
          document.body.appendChild(n),
          setTimeout(() => {
            n.play().catch(() => {});
          }, 2500);
      }, 500)
    : localStorage.setItem("swal-initiation", `${e}`);
}
le.prototype.disableButtons = N1;
le.prototype.enableButtons = I1;
le.prototype.getInput = P1;
le.prototype.disableInput = A1;
le.prototype.enableInput = R1;
le.prototype.hideLoading = Aa;
le.prototype.disableLoading = Aa;
le.prototype.showValidationMessage = j1;
le.prototype.resetValidationMessage = L1;
le.prototype.close = Cn;
le.prototype.closePopup = Cn;
le.prototype.closeModal = Cn;
le.prototype.closeToast = Cn;
le.prototype.rejectPromise = $1;
le.prototype.update = F1;
le.prototype._destroy = z1;
Object.assign(le, R4);
Object.keys(d4).forEach((e) => {
  le[e] = function () {
    return Lt && Lt[e] ? Lt[e](...arguments) : null;
  };
});
le.DismissReason = So;
le.version = "11.14.0";
const ar = le;
ar.default = ar;
typeof document < "u" &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
  );
const ij = (e, t) => {
    const n = new Blob([t], { type: "text/plain" }),
      r = URL.createObjectURL(n),
      o = document.createElement("a");
    (o.href = r), (o.download = e), o.click(), URL.revokeObjectURL(r);
  },
  sj = async (e, t) => {
    const n = g5[e],
      { value: r } = await ar.fire({
        title: "Enter Your file Name",
        input: "text",
        inputLabel: "Enter your file name without extension",
        showCancelButton: !0,
        inputValidator: (i) => {
          if (!i) return "You need to write something!";
        },
      }),
      o = r + n;
    ij(o, t);
  },
  aj = (e, t) => {
    ar.mixin({
      toast: !0,
      position: "top-end",
      showConfirmButton: !1,
      timer: 3e3,
      timerProgressBar: !0,
      didOpen: (r) => {
        (r.onmouseenter = ar.stopTimer), (r.onmouseleave = ar.resumeTimer);
      },
    }).fire({ icon: e, title: t });
  };
function lj(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var G1 = lj,
  uj = typeof yn == "object" && yn && yn.Object === Object && yn,
  cj = uj,
  fj = cj,
  dj = typeof self == "object" && self && self.Object === Object && self,
  pj = fj || dj || Function("return this")(),
  Q1 = pj,
  hj = Q1,
  mj = function () {
    return hj.Date.now();
  },
  vj = mj,
  gj = /\s/;
function yj(e) {
  for (var t = e.length; t-- && gj.test(e.charAt(t)); );
  return t;
}
var wj = yj,
  Sj = wj,
  bj = /^\s+/;
function Ej(e) {
  return e && e.slice(0, Sj(e) + 1).replace(bj, "");
}
var Cj = Ej,
  $j = Q1,
  xj = $j.Symbol,
  Y1 = xj,
  gv = Y1,
  J1 = Object.prototype,
  kj = J1.hasOwnProperty,
  Oj = J1.toString,
  Ao = gv ? gv.toStringTag : void 0;
function Pj(e) {
  var t = kj.call(e, Ao),
    n = e[Ao];
  try {
    e[Ao] = void 0;
    var r = !0;
  } catch {}
  var o = Oj.call(e);
  return r && (t ? (e[Ao] = n) : delete e[Ao]), o;
}
var Tj = Pj,
  _j = Object.prototype,
  Ij = _j.toString;
function Nj(e) {
  return Ij.call(e);
}
var Rj = Nj,
  yv = Y1,
  Aj = Tj,
  jj = Rj,
  Lj = "[object Null]",
  Bj = "[object Undefined]",
  wv = yv ? yv.toStringTag : void 0;
function Dj(e) {
  return e == null
    ? e === void 0
      ? Bj
      : Lj
    : wv && wv in Object(e)
    ? Aj(e)
    : jj(e);
}
var Mj = Dj;
function Fj(e) {
  return e != null && typeof e == "object";
}
var zj = Fj,
  Uj = Mj,
  Vj = zj,
  Hj = "[object Symbol]";
function Wj(e) {
  return typeof e == "symbol" || (Vj(e) && Uj(e) == Hj);
}
var Kj = Wj,
  qj = Cj,
  Sv = G1,
  Gj = Kj,
  bv = NaN,
  Qj = /^[-+]0x[0-9a-f]+$/i,
  Yj = /^0b[01]+$/i,
  Jj = /^0o[0-7]+$/i,
  Xj = parseInt;
function Zj(e) {
  if (typeof e == "number") return e;
  if (Gj(e)) return bv;
  if (Sv(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sv(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = qj(e);
  var n = Yj.test(e);
  return n || Jj.test(e) ? Xj(e.slice(2), n ? 2 : 8) : Qj.test(e) ? bv : +e;
}
var eL = Zj,
  tL = G1,
  qu = vj,
  Ev = eL,
  nL = "Expected a function",
  rL = Math.max,
  oL = Math.min;
function iL(e, t, n) {
  var r,
    o,
    i,
    s,
    a,
    l,
    u = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(nL);
  (t = Ev(t) || 0),
    tL(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (i = f ? rL(Ev(n.maxWait) || 0, t) : i),
      (d = "trailing" in n ? !!n.trailing : d));
  function h(C) {
    var k = r,
      T = o;
    return (r = o = void 0), (u = C), (s = e.apply(T, k)), s;
  }
  function g(C) {
    return (u = C), (a = setTimeout(m, t)), c ? h(C) : s;
  }
  function y(C) {
    var k = C - l,
      T = C - u,
      M = t - k;
    return f ? oL(M, i - T) : M;
  }
  function E(C) {
    var k = C - l,
      T = C - u;
    return l === void 0 || k >= t || k < 0 || (f && T >= i);
  }
  function m() {
    var C = qu();
    if (E(C)) return p(C);
    a = setTimeout(m, y(C));
  }
  function p(C) {
    return (a = void 0), d && r ? h(C) : ((r = o = void 0), s);
  }
  function v() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = o = a = void 0);
  }
  function b() {
    return a === void 0 ? s : p(qu());
  }
  function $() {
    var C = qu(),
      k = E(C);
    if (((r = arguments), (o = this), (l = C), k)) {
      if (a === void 0) return g(l);
      if (f) return clearTimeout(a), (a = setTimeout(m, t)), h(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return ($.cancel = v), ($.flush = b), $;
}
var sL = iL;
const aL = pe(sL),
  lL = ({ socketRef: e, roomId: t }) => {
    const n = w.useRef(null),
      [r, o] = w.useState("TypeScript"),
      [i, s] = w.useState(Hu(r)),
      [a, l] = w.useState(i);
    w.useEffect(() => {
      s(Hu(r)), l(Hu(r));
    }, [r]);
    const u = (h) => {
        (n.current = h), h.focus();
      },
      c = w.useCallback(
        aL((h, g) => {
          e.current.emit(gn.CODE_CHANGED, { roomId: t, code: h, lang: g });
        }, 300),
        [e, t]
      );
    w.useEffect(() => {
      c(i, r);
    }, [r, i, c]);
    const f = (h) => {
        l(h), c(h, r);
      },
      d = () => {
        s(a), sj(r, a);
      };
    return (
      w.useEffect(() => {
        const h = () => {
          n.current && n.current.layout();
        };
        return (
          window.addEventListener("resize", h),
          e.current.on(gn.CODE_CHANGED, ({ code: g, lang: y }) => {
            y !== void 0 && o(y), g !== null && l(g);
          }),
          () => {
            window.removeEventListener("resize", h),
              e.current.off(gn.CODE_CHANGED);
          }
        );
      }, [e]),
      N.jsxs(N.Fragment, {
        children: [
          N.jsxs("div", {
            className: "buttonContainer",
            children: [
              N.jsx("button", {
                className: "btn runBtn",
                onClick: () => aj("error", "This Feature is not Enabled"),
                children: "Run",
              }),
              N.jsx("button", {
                className: "btn saveBtn",
                onClick: d,
                children: "Save",
              }),
              N.jsx("select", {
                name: "language",
                id: "language",
                onChange: (h) => o(h.target.value),
                value: r,
                children: m5.map((h) =>
                  N.jsx("option", { value: h, children: h }, h)
                ),
              }),
            ],
          }),
          N.jsx("br", {}),
          N.jsx(h5, {
            width: "100%",
            height: "90vh",
            theme: "vs-dark",
            language: r.toLowerCase(),
            value: a,
            onMount: u,
            onChange: f,
            options: {
              lineNumbers: "on",
              autoIndent: !0,
              copyWithSyntaxHighlighting: !0,
              automaticLayout: !0,
              detectIndentation: !0,
              minimap: { enabled: !0 },
              acceptSuggestionOnEnter: "on",
              autoClosingBrackets: "always",
              cursorBlinking: "smooth",
              cursorStyle: "line",
              folding: !0,
              fontSize: 18,
              hideCursorInOverviewRuler: !0,
              guides: { indentation: !0, highlightActiveIndentGuide: !0 },
              scrollBeyondLastLine: !1,
              tabSize: 4,
              wordWrap: "on",
              formatOnType: !0,
              formatOnPaste: !0,
              bracketPairColorization: {
                enabled: !0,
                independentColorPoolPerBracketType: !0,
              },
              wrappingIndent: "deepIndent",
              hover: { delay: 200, hidingDelay: 2e3 },
              suggest: {
                showWords: !0,
                showItems: !0,
                showMethods: !0,
                showFunctions: !0,
                showSnippets: !0,
                showColors: !0,
                showFiles: !0,
                showReferences: !0,
                showFolders: !0,
                showTypes: !0,
                showEvents: !0,
                showOperators: !0,
                showProperties: !0,
                showEnum: !0,
                showConstant: !0,
                showStructs: !0,
                showInterfaces: !0,
                showVariables: !0,
                showText: !0,
                showValues: !0,
                showUnits: !0,
                showClasses: !0,
              },
            },
          }),
        ],
      })
    );
  },
  Vt = Object.create(null);
Vt.open = "0";
Vt.close = "1";
Vt.ping = "2";
Vt.pong = "3";
Vt.message = "4";
Vt.upgrade = "5";
Vt.noop = "6";
const qs = Object.create(null);
Object.keys(Vt).forEach((e) => {
  qs[Vt[e]] = e;
});
const mf = { type: "error", data: "parser error" },
  X1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Z1 = typeof ArrayBuffer == "function",
  e2 = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  rp = ({ type: e, data: t }, n, r) =>
    X1 && t instanceof Blob
      ? n
        ? r(t)
        : Cv(t, r)
      : Z1 && (t instanceof ArrayBuffer || e2(t))
      ? n
        ? r(t)
        : Cv(new Blob([t]), r)
      : r(Vt[e] + (t || "")),
  Cv = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function $v(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Gu;
function uL(e, t) {
  if (X1 && e.data instanceof Blob)
    return e.data.arrayBuffer().then($v).then(t);
  if (Z1 && (e.data instanceof ArrayBuffer || e2(e.data))) return t($v(e.data));
  rp(e, !1, (n) => {
    Gu || (Gu = new TextEncoder()), t(Gu.encode(n));
  });
}
const xv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Uo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < xv.length; e++) Uo[xv.charCodeAt(e)] = e;
const cL = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      o = 0,
      i,
      s,
      a,
      l;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      c = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      (i = Uo[e.charCodeAt(r)]),
        (s = Uo[e.charCodeAt(r + 1)]),
        (a = Uo[e.charCodeAt(r + 2)]),
        (l = Uo[e.charCodeAt(r + 3)]),
        (c[o++] = (i << 2) | (s >> 4)),
        (c[o++] = ((s & 15) << 4) | (a >> 2)),
        (c[o++] = ((a & 3) << 6) | (l & 63));
    return u;
  },
  fL = typeof ArrayBuffer == "function",
  op = (e, t) => {
    if (typeof e != "string") return { type: "message", data: t2(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: dL(e.substring(1), t) }
      : qs[n]
      ? e.length > 1
        ? { type: qs[n], data: e.substring(1) }
        : { type: qs[n] }
      : mf;
  },
  dL = (e, t) => {
    if (fL) {
      const n = cL(e);
      return t2(n, t);
    } else return { base64: !0, data: e };
  },
  t2 = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  n2 = "",
  pL = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let o = 0;
    e.forEach((i, s) => {
      rp(i, !1, (a) => {
        (r[s] = a), ++o === n && t(r.join(n2));
      });
    });
  },
  hL = (e, t) => {
    const n = e.split(n2),
      r = [];
    for (let o = 0; o < n.length; o++) {
      const i = op(n[o], t);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  };
function mL() {
  return new TransformStream({
    transform(e, t) {
      uL(e, (n) => {
        const r = n.length;
        let o;
        if (r < 126)
          (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128),
          t.enqueue(o),
          t.enqueue(n);
      });
    },
  });
}
let Qu;
function ks(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Os(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function vL(e, t) {
  Qu || (Qu = new TextDecoder());
  const n = [];
  let r = 0,
    o = -1,
    i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (ks(n) < 1) break;
          const l = Os(n, 1);
          (i = (l[0] & 128) === 128),
            (o = l[0] & 127),
            o < 126 ? (r = 3) : o === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (ks(n) < 2) break;
          const l = Os(n, 2);
          (o = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (ks(n) < 8) break;
          const l = Os(n, 8),
            u = new DataView(l.buffer, l.byteOffset, l.length),
            c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(mf);
            break;
          }
          (o = c * Math.pow(2, 32) + u.getUint32(4)), (r = 3);
        } else {
          if (ks(n) < o) break;
          const l = Os(n, o);
          a.enqueue(op(i ? l : Qu.decode(l), t)), (r = 0);
        }
        if (o === 0 || o > e) {
          a.enqueue(mf);
          break;
        }
      }
    },
  });
}
const r2 = 4;
function ce(e) {
  if (e) return gL(e);
}
function gL(e) {
  for (var t in ce.prototype) e[t] = ce.prototype[t];
  return e;
}
ce.prototype.on = ce.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
ce.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
ce.prototype.off =
  ce.prototype.removeListener =
  ce.prototype.removeAllListeners =
  ce.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, o = 0; o < n.length; o++)
        if (((r = n[o]), r === t || r.fn === t)) {
          n.splice(o, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
ce.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t);
  }
  return this;
};
ce.prototype.emitReserved = ce.prototype.emit;
ce.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
ce.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const dt =
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")();
function o2(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const yL = dt.setTimeout,
  wL = dt.clearTimeout;
function Rl(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = yL.bind(dt)), (e.clearTimeoutFn = wL.bind(dt)))
    : ((e.setTimeoutFn = dt.setTimeout.bind(dt)),
      (e.clearTimeoutFn = dt.clearTimeout.bind(dt)));
}
const SL = 1.33;
function bL(e) {
  return typeof e == "string"
    ? EL(e)
    : Math.ceil((e.byteLength || e.size) * SL);
}
function EL(e) {
  let t = 0,
    n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function CL(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function $L(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class xL extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class ip extends ce {
  constructor(t) {
    super(),
      (this.writable = !1),
      Rl(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new xL(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = op(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = CL(t);
    return n.length ? "?" + n : "";
  }
}
const i2 =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  vf = 64,
  kL = {};
let kv = 0,
  Ps = 0,
  Ov;
function Pv(e) {
  let t = "";
  do (t = i2[e % vf] + t), (e = Math.floor(e / vf));
  while (e > 0);
  return t;
}
function s2() {
  const e = Pv(+new Date());
  return e !== Ov ? ((kv = 0), (Ov = e)) : e + "." + Pv(kv++);
}
for (; Ps < vf; Ps++) kL[i2[Ps]] = Ps;
let a2 = !1;
try {
  a2 = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const OL = a2;
function l2(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || OL)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function PL() {}
const TL = (function () {
  return new l2({ xdomain: !1 }).responseType != null;
})();
class _L extends ip {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let o = location.port;
      o || (o = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          o !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = TL && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    hL(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      pL(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = s2()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new Ft(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (o, i) => {
        this.onError("xhr post error", o, i);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class Ft extends ce {
  constructor(t, n) {
    super(),
      Rl(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = o2(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new l2(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(o) &&
              r.setRequestHeader(o, this.opts.extraHeaders[o]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var o;
          r.readyState === 3 &&
            ((o = this.opts.cookieJar) === null ||
              o === void 0 ||
              o.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this.onError(o);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = Ft.requestsCount++), (Ft.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = PL), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete Ft.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
Ft.requestsCount = 0;
Ft.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Tv);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in dt ? "pagehide" : "unload";
    addEventListener(e, Tv, !1);
  }
}
function Tv() {
  for (let e in Ft.requests)
    Ft.requests.hasOwnProperty(e) && Ft.requests[e].abort();
}
const sp =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Ts = dt.WebSocket || dt.MozWebSocket,
  _v = !0,
  IL = "arraybuffer",
  Iv =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class NL extends ip {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Iv
        ? {}
        : o2(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = _v && !Iv ? (n ? new Ts(t, n) : new Ts(t)) : new Ts(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1;
      rp(r, this.supportsBinary, (i) => {
        const s = {};
        try {
          _v && this.ws.send(i);
        } catch {}
        o &&
          sp(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = s2()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Ts;
  }
}
class RL extends ip {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = vL(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            o = mL();
          o.readable.pipeTo(t.writable), (this.writer = o.writable.getWriter());
          const i = () => {
            r.read()
              .then(({ done: a, value: l }) => {
                a || (this.onPacket(l), i());
              })
              .catch((a) => {});
          };
          i();
          const s = { type: "open" };
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1;
      this.writer.write(r).then(() => {
        o &&
          sp(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const AL = { websocket: NL, webtransport: RL, polling: _L },
  jL =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  LL = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function gf(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let o = jL.exec(e || ""),
    i = {},
    s = 14;
  for (; s--; ) i[LL[s]] = o[s] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = t),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":")),
      (i.authority = i.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (i.ipv6uri = !0)),
    (i.pathNames = BL(i, i.path)),
    (i.queryKey = DL(i, i.query)),
    i
  );
}
function BL(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function DL(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
      o && (n[o] = i);
    }),
    n
  );
}
let u2 = class Or extends ce {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = IL),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = gf(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = gf(n.host).host),
      Rl(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = $L(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = r2), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new AL[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Or.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Or.priorWebsocketSuccess = !1;
    const o = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (f) => {
          if (!r)
            if (f.type === "pong" && f.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (Or.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const d = new Error("probe error");
              (d.transport = n.name), this.emitReserved("upgradeError", d);
            }
        }));
    };
    function i() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const s = (f) => {
      const d = new Error("probe error: " + f);
      (d.transport = n.name), i(), this.emitReserved("upgradeError", d);
    };
    function a() {
      s("transport closed");
    }
    function l() {
      s("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && i();
    }
    const c = () => {
      n.removeListener("open", o),
        n.removeListener("error", s),
        n.removeListener("close", a),
        this.off("close", l),
        this.off("upgrading", u);
    };
    n.once("open", o),
      n.once("error", s),
      n.once("close", a),
      this.once("close", l),
      this.once("upgrading", u),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (Or.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if ((o && (n += bL(o)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, o) {
    if (
      (typeof n == "function" && ((o = n), (n = void 0)),
      typeof r == "function" && ((o = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const i = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", i),
      this.writeBuffer.push(i),
      o && this.once("flush", o),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (Or.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const o = t.length;
    for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
u2.protocol = r2;
function ML(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = gf(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + i + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const FL = typeof ArrayBuffer == "function",
  zL = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  c2 = Object.prototype.toString,
  UL =
    typeof Blob == "function" ||
    (typeof Blob < "u" && c2.call(Blob) === "[object BlobConstructor]"),
  VL =
    typeof File == "function" ||
    (typeof File < "u" && c2.call(File) === "[object FileConstructor]");
function ap(e) {
  return (
    (FL && (e instanceof ArrayBuffer || zL(e))) ||
    (UL && e instanceof Blob) ||
    (VL && e instanceof File)
  );
}
function Gs(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Gs(e[n])) return !0;
    return !1;
  }
  if (ap(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Gs(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Gs(e[n])) return !0;
  return !1;
}
function HL(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = yf(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function yf(e, t) {
  if (!e) return e;
  if (ap(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = yf(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = yf(e[r], t));
    return n;
  }
  return e;
}
function WL(e, t) {
  return (e.data = wf(e.data, t)), delete e.attachments, e;
}
function wf(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = wf(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = wf(e[n], t));
  return e;
}
const KL = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  qL = 5;
var U;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(U || (U = {}));
class GL {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === U.EVENT || t.type === U.ACK) && Gs(t)
      ? this.encodeAsBinary({
          type: t.type === U.EVENT ? U.BINARY_EVENT : U.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === U.BINARY_EVENT || t.type === U.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = HL(t),
      r = this.encodeAsString(n.packet),
      o = n.buffers;
    return o.unshift(r), o;
  }
}
function Nv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class lp extends ce {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === U.BINARY_EVENT;
      r || n.type === U.BINARY_ACK
        ? ((n.type = r ? U.EVENT : U.ACK),
          (this.reconstructor = new QL(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (ap(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (U[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === U.BINARY_EVENT || r.type === U.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const s = t.substring(i, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(i, n);
    } else r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (lp.isPayloadValid(r.type, i)) r.data = i;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case U.CONNECT:
        return Nv(n);
      case U.DISCONNECT:
        return n === void 0;
      case U.CONNECT_ERROR:
        return typeof n == "string" || Nv(n);
      case U.EVENT:
      case U.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && KL.indexOf(n[0]) === -1))
        );
      case U.ACK:
      case U.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class QL {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = WL(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const YL = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: lp,
      Encoder: GL,
      get PacketType() {
        return U;
      },
      protocol: qL,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function bt(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const JL = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class f2 extends ce {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      bt(t, "open", this.onopen.bind(this)),
      bt(t, "packet", this.onpacket.bind(this)),
      bt(t, "error", this.onerror.bind(this)),
      bt(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (JL.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: U.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const s = this.ids++,
        a = n.pop();
      this._registerAckCallback(s, a), (r.id = s);
    }
    const o =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!o || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const o =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let a = 0; a < this.sendBuffer.length; a++)
          this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
        n.call(this, new Error("operation has timed out"));
      }, o),
      s = (...a) => {
        this.io.clearTimeoutFn(i), n.apply(this, a);
      };
    (s.withError = !0), (this.acks[t] = s);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const i = (s, a) => (s ? o(s) : r(a));
      (i.withError = !0), n.push(i), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((o, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (o !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(o))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: U.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case U.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case U.EVENT:
        case U.BINARY_EVENT:
          this.onevent(t);
          break;
        case U.ACK:
        case U.BINARY_ACK:
          this.onack(t);
          break;
        case U.DISCONNECT:
          this.ondisconnect();
          break;
        case U.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...o) {
      r || ((r = !0), n.packet({ type: U.ACK, id: t, data: o }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: U.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function bo(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
bo.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
bo.prototype.reset = function () {
  this.attempts = 0;
};
bo.prototype.setMin = function (e) {
  this.ms = e;
};
bo.prototype.setMax = function (e) {
  this.max = e;
};
bo.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Sf extends ce {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Rl(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new bo({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const o = n.parser || YL;
    (this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new u2(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const o = bt(n, "open", function () {
        r.onopen(), t && t();
      }),
      i = (a) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", a),
          t ? t(a) : this.maybeReconnectOnOpen();
      },
      s = bt(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout,
        l = this.setTimeoutFn(() => {
          o(), i(new Error("timeout")), n.close();
        }, a);
      this.opts.autoUnref && l.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(l);
        });
    }
    return this.subs.push(o), this.subs.push(s), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      bt(t, "ping", this.onping.bind(this)),
      bt(t, "data", this.ondata.bind(this)),
      bt(t, "error", this.onerror.bind(this)),
      bt(t, "close", this.onclose.bind(this)),
      bt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    sp(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new f2(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((o) => {
              o
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", o))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const jo = {};
function Qs(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = ML(e, t.path || "/socket.io"),
    r = n.source,
    o = n.id,
    i = n.path,
    s = jo[o] && i in jo[o].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let l;
  return (
    a ? (l = new Sf(r, t)) : (jo[o] || (jo[o] = new Sf(r, t)), (l = jo[o])),
    n.query && !t.query && (t.query = n.queryKey),
    l.socket(n.path, t)
  );
}
Object.assign(Qs, { Manager: Sf, Socket: f2, io: Qs, connect: Qs });
const XL = async () =>
    Qs("https://build-real-time-code-editor.onrender.com/", {
      "force new connection": !0,
      reconnetionAttempt: "Infinity",
      timeout: 1e4,
      transports: ["websocket"],
    }),
  ZL = () => {
    var h;
    const e = w.useRef(null),
      t = Za(),
      { roomId: n } = pE(),
      [r, o] = w.useState(!1),
      i = vd(),
      [s, a] = w.useState(!1),
      [l, u] = w.useState([]);
    if (
      (w.useEffect(
        () => (
          (async () => {
            var E;
            (e.current = await XL()), a(!0);
            const y = (m) => {
              console.log("Socket error", m),
                Fr.error("Socket connection failed, try again later"),
                i("/");
            };
            e.current.on("connect_error", y),
              e.current.on("connect_failed", y),
              e.current.emit(gn.JOIN, {
                roomId: n,
                userName: (E = t.state) == null ? void 0 : E.userName,
              }),
              e.current.on(
                gn.JOINED,
                ({ clients: m, userName: p, socketId: v }) => {
                  var b;
                  p !== ((b = t.state) == null ? void 0 : b.userName) &&
                    (console.log(`${p} joined`),
                    Fr.success(`${p} joined the room.`)),
                    u(m);
                }
              ),
              e.current.on(gn.DISCONNECTED, ({ socketId: m, userName: p }) => {
                Fr.success(`${p} left the room.`),
                  u((v) => v.filter((b) => b.socketId !== m));
              });
          })(),
          () => {
            e.current &&
              (e.current.disconnect(),
              e.current.off(gn.JOINED),
              e.current.off(gn.DISCONNECTED));
          }
        ),
        []
      ),
      !((h = t.state) != null && h.userName) || n == null)
    )
      return N.jsx(kE, { to: "/" });
    const c = () => {
        o((g) => !g);
      },
      f = () => {
        navigator.clipboard.writeText(n),
          Fr.success("Room ID copied to clipboard");
      },
      d = () => {
        e.current && e.current.disconnect(), i("/");
      };
    return N.jsxs(N.Fragment, {
      children: [
        N.jsxs("div", {
          className: `hamburger ${r ? "open" : ""}`,
          onClick: c,
          children: [N.jsx("div", {}), N.jsx("div", {}), N.jsx("div", {})],
        }),
        N.jsxs("div", {
          className: `mainWrap ${r ? "sidebarOpen" : ""}`,
          children: [
            N.jsxs("div", {
              className: `aside ${r ? "open" : ""}`,
              children: [
                N.jsxs("div", {
                  className: "asideInner",
                  children: [
                    N.jsx("div", {
                      className: "logo",
                      children: N.jsx("img", {
                        className: "logoImg",
                        src: "/code-editor-logo.png",
                        alt: "logo",
                      }),
                    }),
                    N.jsx("h3", { children: "Connected" }),
                    N.jsx("div", {
                      className: "clientsList",
                      children: l.map((g) =>
                        N.jsx(lR, { userName: g.userName }, g.socketId)
                      ),
                    }),
                  ],
                }),
                N.jsxs("div", {
                  className: "buttons",
                  children: [
                    N.jsx("button", {
                      className: "btn copyBtn",
                      onClick: f,
                      children: "Copy Room ID",
                    }),
                    N.jsx("button", {
                      className: "btn leaveBtn",
                      onClick: d,
                      children: "Leave Room",
                    }),
                  ],
                }),
              ],
            }),
            N.jsx("div", {
              className: "editorWrap",
              children: s && N.jsx(lL, { socketRef: e, roomId: n }),
            }),
          ],
        }),
      ],
    });
  };
function eB() {
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("div", {
        children: N.jsx(kC, {
          position: "top-center",
          reverseOrder: !1,
          toastOptions: {
            duration: 2e3,
            success: { theme: { primary: "#4aed88" } },
          },
        }),
      }),
      N.jsx(IE, {
        children: N.jsxs(PE, {
          children: [
            N.jsx(Vc, { path: "/", element: N.jsx(OC, {}) }),
            N.jsx(Vc, { path: "/editor/:roomId", element: N.jsx(ZL, {}) }),
          ],
        }),
      }),
    ],
  });
}
Wy(document.getElementById("root")).render(N.jsx(eB, {}));
