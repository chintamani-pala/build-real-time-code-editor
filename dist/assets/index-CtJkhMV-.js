function e2(e, t) {
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
var Yi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function me(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $v = { exports: {} },
  ja = {},
  kv = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wi = Symbol.for("react.element"),
  t2 = Symbol.for("react.portal"),
  n2 = Symbol.for("react.fragment"),
  r2 = Symbol.for("react.strict_mode"),
  o2 = Symbol.for("react.profiler"),
  i2 = Symbol.for("react.provider"),
  s2 = Symbol.for("react.context"),
  a2 = Symbol.for("react.forward_ref"),
  l2 = Symbol.for("react.suspense"),
  u2 = Symbol.for("react.memo"),
  c2 = Symbol.for("react.lazy"),
  sp = Symbol.iterator;
function f2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sp && e[sp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ov = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pv = Object.assign,
  Tv = {};
function uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tv),
    (this.updater = n || Ov);
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _v() {}
_v.prototype = uo.prototype;
function yf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tv),
    (this.updater = n || Ov);
}
var wf = (yf.prototype = new _v());
wf.constructor = yf;
Pv(wf, uo.prototype);
wf.isPureReactComponent = !0;
var ap = Array.isArray,
  Nv = Object.prototype.hasOwnProperty,
  Sf = { current: null },
  Iv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nv.call(t, r) && !Iv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: wi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Sf.current,
  };
}
function d2(e, t) {
  return {
    $$typeof: wi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wi;
}
function p2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lp = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? p2("" + e.key)
    : t.toString(36);
}
function Ps(e, t, n, r, o) {
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
          case wi:
          case t2:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Rl(s, 0) : r),
      ap(o)
        ? ((n = ""),
          e != null && (n = e.replace(lp, "$&/") + "/"),
          Ps(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (bf(o) &&
            (o = d2(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(lp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ap(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Rl(i, a);
      s += Ps(i, t, n, l, o);
    }
  else if (((l = f2(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Rl(i, a++)), (s += Ps(i, t, n, l, o));
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
function Gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ps(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function h2(e) {
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
  Ts = { transition: null },
  m2 = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Ts,
    ReactCurrentOwner: Sf,
  };
function Av() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Gi,
  forEach: function (e, t, n) {
    Gi(
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
      Gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = uo;
z.Fragment = n2;
z.Profiler = o2;
z.PureComponent = yf;
z.StrictMode = r2;
z.Suspense = l2;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m2;
z.act = Av;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Pv({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Sf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Nv.call(t, l) &&
        !Iv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: wi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: s2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: i2, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Rv;
z.createFactory = function (e) {
  var t = Rv.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: a2, render: e };
};
z.isValidElement = bf;
z.lazy = function (e) {
  return { $$typeof: c2, _payload: { _status: -1, _result: e }, _init: h2 };
};
z.memo = function (e, t) {
  return { $$typeof: u2, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
z.unstable_act = Av;
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
kv.exports = z;
var S = kv.exports;
const V = me(S),
  v2 = e2({ __proto__: null, default: V }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g2 = S,
  y2 = Symbol.for("react.element"),
  w2 = Symbol.for("react.fragment"),
  S2 = Object.prototype.hasOwnProperty,
  b2 = g2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  E2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function jv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) S2.call(t, r) && !E2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: y2,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: b2.current,
  };
}
ja.Fragment = w2;
ja.jsx = jv;
ja.jsxs = jv;
$v.exports = ja;
var I = $v.exports,
  Lv = { exports: {} },
  rt = {},
  Bv = { exports: {} },
  Dv = {};
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
    var M = P.length;
    P.push(L);
    e: for (; 0 < M; ) {
      var R = (M - 1) >>> 1,
        D = P[R];
      if (0 < o(D, L)) (P[R] = L), (P[M] = D), (M = R);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      M = P.pop();
    if (M !== L) {
      P[0] = M;
      e: for (var R = 0, D = P.length, ye = D >>> 1; R < ye; ) {
        var Ye = 2 * (R + 1) - 1,
          It = P[Ye],
          Kn = Ye + 1,
          Qi = P[Kn];
        if (0 > o(It, M))
          Kn < D && 0 > o(Qi, It)
            ? ((P[R] = Qi), (P[Kn] = M), (R = Kn))
            : ((P[R] = It), (P[Ye] = M), (R = Ye));
        else if (Kn < D && 0 > o(Qi, M)) (P[R] = Qi), (P[Kn] = M), (R = Kn);
        else break e;
      }
    }
    return L;
  }
  function o(P, L) {
    var M = P.sortIndex - L.sortIndex;
    return M !== 0 ? M : P.id - L.id;
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
    m = !1,
    g = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
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
      if (n(l) !== null) (g = !0), Q(x);
      else {
        var L = n(u);
        L !== null && ut(b, L.startTime - P);
      }
  }
  function x(P, L) {
    (g = !1), y && ((y = !1), h(N), (N = -1)), (m = !0);
    var M = d;
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
        var Ye = n(u);
        Ye !== null && ut(b, Ye.startTime - L), (ye = !1);
      }
      return ye;
    } finally {
      (f = null), (d = M), (m = !1);
    }
  }
  var k = !1,
    $ = null,
    N = -1,
    F = 5,
    _ = -1;
  function ge() {
    return !(e.unstable_now() - _ < F);
  }
  function _t() {
    if ($ !== null) {
      var P = e.unstable_now();
      _ = P;
      var L = !0;
      try {
        L = $(!0, P);
      } finally {
        L ? Nt() : ((k = !1), ($ = null));
      }
    } else k = !1;
  }
  var Nt;
  if (typeof p == "function")
    Nt = function () {
      p(_t);
    };
  else if (typeof MessageChannel < "u") {
    var un = new MessageChannel(),
      B = un.port2;
    (un.port1.onmessage = _t),
      (Nt = function () {
        B.postMessage(null);
      });
  } else
    Nt = function () {
      E(_t, 0);
    };
  function Q(P) {
    ($ = P), k || ((k = !0), Nt());
  }
  function ut(P, L) {
    N = E(function () {
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
      g || m || ((g = !0), Q(x));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < P ? Math.floor(1e3 / P) : 5);
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
      var M = d;
      d = L;
      try {
        return P();
      } finally {
        d = M;
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
      var M = d;
      d = P;
      try {
        return L();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, M) {
      var R = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? R + M : R))
          : (M = R),
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
        (D = M + D),
        (P = {
          id: c++,
          callback: L,
          priorityLevel: P,
          startTime: M,
          expirationTime: D,
          sortIndex: -1,
        }),
        M > R
          ? ((P.sortIndex = M),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (y ? (h(N), (N = -1)) : (y = !0), ut(b, M - R)))
          : ((P.sortIndex = D), t(l, P), g || m || ((g = !0), Q(x))),
        P
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (P) {
      var L = d;
      return function () {
        var M = d;
        d = L;
        try {
          return P.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(Dv);
Bv.exports = Dv;
var C2 = Bv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x2 = S,
  tt = C2;
function C(e) {
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
var Mv = new Set(),
  Jo = {};
function pr(e, t) {
  Yr(e, t), Yr(e + "Capture", t);
}
function Yr(e, t) {
  for (Jo[e] = t, e = 0; e < t.length; e++) Mv.add(t[e]);
}
var Xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qu = Object.prototype.hasOwnProperty,
  $2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  up = {},
  cp = {};
function k2(e) {
  return qu.call(cp, e)
    ? !0
    : qu.call(up, e)
    ? !1
    : $2.test(e)
    ? (cp[e] = !0)
    : ((up[e] = !0), !1);
}
function O2(e, t, n, r) {
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
function P2(e, t, n, r) {
  if (t === null || typeof t > "u" || O2(e, t, n, r)) return !0;
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
var Ef = /[\-:]([a-z])/g;
function Cf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ef, Cf);
    ke[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ef, Cf);
    ke[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ef, Cf);
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
function xf(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (P2(t, n, o, r) && (n = null),
    r || o === null
      ? k2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var on = x2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ji = Symbol.for("react.element"),
  kr = Symbol.for("react.portal"),
  Or = Symbol.for("react.fragment"),
  $f = Symbol.for("react.strict_mode"),
  Qu = Symbol.for("react.profiler"),
  Fv = Symbol.for("react.provider"),
  zv = Symbol.for("react.context"),
  kf = Symbol.for("react.forward_ref"),
  Yu = Symbol.for("react.suspense"),
  Gu = Symbol.for("react.suspense_list"),
  Of = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Uv = Symbol.for("react.offscreen"),
  fp = Symbol.iterator;
function So(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fp && e[fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Al;
function Ro(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var jl = !1;
function Ll(e, t) {
  if (!e || jl) return "";
  jl = !0;
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
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ro(e) : "";
}
function T2(e) {
  switch (e.tag) {
    case 5:
      return Ro(e.type);
    case 16:
      return Ro("Lazy");
    case 13:
      return Ro("Suspense");
    case 19:
      return Ro("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function Ju(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Or:
      return "Fragment";
    case kr:
      return "Portal";
    case Qu:
      return "Profiler";
    case $f:
      return "StrictMode";
    case Yu:
      return "Suspense";
    case Gu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zv:
        return (e.displayName || "Context") + ".Consumer";
      case Fv:
        return (e._context.displayName || "Context") + ".Provider";
      case kf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Of:
        return (
          (t = e.displayName || null), t !== null ? t : Ju(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return Ju(e(t));
        } catch {}
    }
  return null;
}
function _2(e) {
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
      return Ju(t);
    case 8:
      return t === $f ? "StrictMode" : "Mode";
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
function Rn(e) {
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
function Vv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function N2(e) {
  var t = Vv(e) ? "checked" : "value",
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
function Xi(e) {
  e._valueTracker || (e._valueTracker = N2(e));
}
function Hv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xu(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function dp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wv(e, t) {
  (t = t.checked), t != null && xf(e, "checked", t, !1);
}
function Zu(e, t) {
  Wv(e, t);
  var n = Rn(t.value),
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
    ? ec(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ec(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pp(e, t, n) {
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
function ec(e, t, n) {
  (t !== "number" || Qs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ao = Array.isArray;
function zr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Ao(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Kv(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zi,
  Qv = (function (e) {
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
        Zi = Zi || document.createElement("div"),
          Zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fo = {
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
  I2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fo).forEach(function (e) {
  I2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fo[t] = Fo[e]);
  });
});
function Yv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fo.hasOwnProperty(e) && Fo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Gv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var R2 = ne(
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
function rc(e, t) {
  if (t) {
    if (R2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function oc(e, t) {
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
var ic = null;
function Pf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sc = null,
  Ur = null,
  Vr = null;
function vp(e) {
  if ((e = Ei(e))) {
    if (typeof sc != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Fa(t)), sc(e.stateNode, e.type, t));
  }
}
function Jv(e) {
  Ur ? (Vr ? Vr.push(e) : (Vr = [e])) : (Ur = e);
}
function Xv() {
  if (Ur) {
    var e = Ur,
      t = Vr;
    if (((Vr = Ur = null), vp(e), t)) for (e = 0; e < t.length; e++) vp(t[e]);
  }
}
function Zv(e, t) {
  return e(t);
}
function eg() {}
var Bl = !1;
function tg(e, t, n) {
  if (Bl) return e(t, n);
  Bl = !0;
  try {
    return Zv(e, t, n);
  } finally {
    (Bl = !1), (Ur !== null || Vr !== null) && (eg(), Xv());
  }
}
function Zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fa(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var ac = !1;
if (Xt)
  try {
    var bo = {};
    Object.defineProperty(bo, "passive", {
      get: function () {
        ac = !0;
      },
    }),
      window.addEventListener("test", bo, bo),
      window.removeEventListener("test", bo, bo);
  } catch {
    ac = !1;
  }
function A2(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var zo = !1,
  Ys = null,
  Gs = !1,
  lc = null,
  j2 = {
    onError: function (e) {
      (zo = !0), (Ys = e);
    },
  };
function L2(e, t, n, r, o, i, s, a, l) {
  (zo = !1), (Ys = null), A2.apply(j2, arguments);
}
function B2(e, t, n, r, o, i, s, a, l) {
  if ((L2.apply(this, arguments), zo)) {
    if (zo) {
      var u = Ys;
      (zo = !1), (Ys = null);
    } else throw Error(C(198));
    Gs || ((Gs = !0), (lc = u));
  }
}
function hr(e) {
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
function ng(e) {
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
function gp(e) {
  if (hr(e) !== e) throw Error(C(188));
}
function D2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hr(e)), t === null)) throw Error(C(188));
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
        if (i === n) return gp(o), e;
        if (i === r) return gp(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
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
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function rg(e) {
  return (e = D2(e)), e !== null ? og(e) : null;
}
function og(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = og(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ig = tt.unstable_scheduleCallback,
  yp = tt.unstable_cancelCallback,
  M2 = tt.unstable_shouldYield,
  F2 = tt.unstable_requestPaint,
  ie = tt.unstable_now,
  z2 = tt.unstable_getCurrentPriorityLevel,
  Tf = tt.unstable_ImmediatePriority,
  sg = tt.unstable_UserBlockingPriority,
  Js = tt.unstable_NormalPriority,
  U2 = tt.unstable_LowPriority,
  ag = tt.unstable_IdlePriority,
  La = null,
  Dt = null;
function V2(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(La, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : K2,
  H2 = Math.log,
  W2 = Math.LN2;
function K2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((H2(e) / W2) | 0)) | 0;
}
var es = 64,
  ts = 4194304;
function jo(e) {
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
function Xs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = jo(a)) : ((i &= s), i !== 0 && (r = jo(i)));
  } else (s = n & ~o), s !== 0 ? (r = jo(s)) : i !== 0 && (r = jo(i));
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
      (n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function q2(e, t) {
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
function Q2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - $t(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = q2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function uc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lg() {
  var e = es;
  return (es <<= 1), !(es & 4194240) && (es = 64), e;
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Si(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function Y2(e, t) {
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
    var o = 31 - $t(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function _f(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function ug(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cg,
  Nf,
  fg,
  dg,
  pg,
  cc = !1,
  ns = [],
  Cn = null,
  xn = null,
  $n = null,
  ei = new Map(),
  ti = new Map(),
  hn = [],
  G2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      $n = null;
      break;
    case "pointerover":
    case "pointerout":
      ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ti.delete(t.pointerId);
  }
}
function Eo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ei(t)), t !== null && Nf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function J2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Cn = Eo(Cn, e, t, n, r, o)), !0;
    case "dragenter":
      return (xn = Eo(xn, e, t, n, r, o)), !0;
    case "mouseover":
      return ($n = Eo($n, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ei.set(i, Eo(ei.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ti.set(i, Eo(ti.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function hg(e) {
  var t = Jn(e.target);
  if (t !== null) {
    var n = hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ng(n)), t !== null)) {
          (e.blockedOn = t),
            pg(e.priority, function () {
              fg(n);
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
function _s(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ic = r), n.target.dispatchEvent(r), (ic = null);
    } else return (t = Ei(n)), t !== null && Nf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Sp(e, t, n) {
  _s(e) && n.delete(t);
}
function X2() {
  (cc = !1),
    Cn !== null && _s(Cn) && (Cn = null),
    xn !== null && _s(xn) && (xn = null),
    $n !== null && _s($n) && ($n = null),
    ei.forEach(Sp),
    ti.forEach(Sp);
}
function Co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cc ||
      ((cc = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, X2)));
}
function ni(e) {
  function t(o) {
    return Co(o, e);
  }
  if (0 < ns.length) {
    Co(ns[0], e);
    for (var n = 1; n < ns.length; n++) {
      var r = ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Cn !== null && Co(Cn, e),
      xn !== null && Co(xn, e),
      $n !== null && Co($n, e),
      ei.forEach(t),
      ti.forEach(t),
      n = 0;
    n < hn.length;
    n++
  )
    (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    hg(n), n.blockedOn === null && hn.shift();
}
var Hr = on.ReactCurrentBatchConfig,
  Zs = !0;
function Z2(e, t, n, r) {
  var o = K,
    i = Hr.transition;
  Hr.transition = null;
  try {
    (K = 1), If(e, t, n, r);
  } finally {
    (K = o), (Hr.transition = i);
  }
}
function eS(e, t, n, r) {
  var o = K,
    i = Hr.transition;
  Hr.transition = null;
  try {
    (K = 4), If(e, t, n, r);
  } finally {
    (K = o), (Hr.transition = i);
  }
}
function If(e, t, n, r) {
  if (Zs) {
    var o = fc(e, t, n, r);
    if (o === null) Ql(e, t, r, ea, n), wp(e, r);
    else if (J2(o, e, t, n, r)) r.stopPropagation();
    else if ((wp(e, r), t & 4 && -1 < G2.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ei(o);
        if (
          (i !== null && cg(i),
          (i = fc(e, t, n, r)),
          i === null && Ql(e, t, r, ea, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var ea = null;
function fc(e, t, n, r) {
  if (((ea = null), (e = Pf(r)), (e = Jn(e)), e !== null))
    if (((t = hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ng(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function mg(e) {
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
      switch (z2()) {
        case Tf:
          return 1;
        case sg:
          return 4;
        case Js:
        case U2:
          return 16;
        case ag:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  Rf = null,
  Ns = null;
function vg() {
  if (Ns) return Ns;
  var e,
    t = Rf,
    n = t.length,
    r,
    o = "value" in yn ? yn.value : yn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ns = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Is(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rs() {
  return !0;
}
function bp() {
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
        ? rs
        : bp),
      (this.isPropagationStopped = bp),
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
          (this.isDefaultPrevented = rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = rs));
      },
      persist: function () {},
      isPersistent: rs,
    }),
    t
  );
}
var co = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Af = ot(co),
  bi = ne({}, co, { view: 0, detail: 0 }),
  tS = ot(bi),
  Ml,
  Fl,
  xo,
  Ba = ne({}, bi, {
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
    getModifierState: jf,
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
        : (e !== xo &&
            (xo && e.type === "mousemove"
              ? ((Ml = e.screenX - xo.screenX), (Fl = e.screenY - xo.screenY))
              : (Fl = Ml = 0),
            (xo = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fl;
    },
  }),
  Ep = ot(Ba),
  nS = ne({}, Ba, { dataTransfer: 0 }),
  rS = ot(nS),
  oS = ne({}, bi, { relatedTarget: 0 }),
  zl = ot(oS),
  iS = ne({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sS = ot(iS),
  aS = ne({}, co, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lS = ot(aS),
  uS = ne({}, co, { data: 0 }),
  Cp = ot(uS),
  cS = {
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
  fS = {
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
  dS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dS[e]) ? !!t[e] : !1;
}
function jf() {
  return pS;
}
var hS = ne({}, bi, {
    key: function (e) {
      if (e.key) {
        var t = cS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fS[e.keyCode] || "Unidentified"
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
    getModifierState: jf,
    charCode: function (e) {
      return e.type === "keypress" ? Is(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Is(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mS = ot(hS),
  vS = ne({}, Ba, {
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
  xp = ot(vS),
  gS = ne({}, bi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jf,
  }),
  yS = ot(gS),
  wS = ne({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  SS = ot(wS),
  bS = ne({}, Ba, {
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
  ES = ot(bS),
  CS = [9, 13, 27, 32],
  Lf = Xt && "CompositionEvent" in window,
  Uo = null;
Xt && "documentMode" in document && (Uo = document.documentMode);
var xS = Xt && "TextEvent" in window && !Uo,
  gg = Xt && (!Lf || (Uo && 8 < Uo && 11 >= Uo)),
  $p = " ",
  kp = !1;
function yg(e, t) {
  switch (e) {
    case "keyup":
      return CS.indexOf(t.keyCode) !== -1;
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
function wg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function $S(e, t) {
  switch (e) {
    case "compositionend":
      return wg(t);
    case "keypress":
      return t.which !== 32 ? null : ((kp = !0), $p);
    case "textInput":
      return (e = t.data), e === $p && kp ? null : e;
    default:
      return null;
  }
}
function kS(e, t) {
  if (Pr)
    return e === "compositionend" || (!Lf && yg(e, t))
      ? ((e = vg()), (Ns = Rf = yn = null), (Pr = !1), e)
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
      return gg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var OS = {
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
function Op(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!OS[e.type] : t === "textarea";
}
function Sg(e, t, n, r) {
  Jv(r),
    (t = ta(t, "onChange")),
    0 < t.length &&
      ((n = new Af("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vo = null,
  ri = null;
function PS(e) {
  Ng(e, 0);
}
function Da(e) {
  var t = Nr(e);
  if (Hv(t)) return e;
}
function TS(e, t) {
  if (e === "change") return t;
}
var bg = !1;
if (Xt) {
  var Ul;
  if (Xt) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var Pp = document.createElement("div");
      Pp.setAttribute("oninput", "return;"),
        (Vl = typeof Pp.oninput == "function");
    }
    Ul = Vl;
  } else Ul = !1;
  bg = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Tp() {
  Vo && (Vo.detachEvent("onpropertychange", Eg), (ri = Vo = null));
}
function Eg(e) {
  if (e.propertyName === "value" && Da(ri)) {
    var t = [];
    Sg(t, ri, e, Pf(e)), tg(PS, t);
  }
}
function _S(e, t, n) {
  e === "focusin"
    ? (Tp(), (Vo = t), (ri = n), Vo.attachEvent("onpropertychange", Eg))
    : e === "focusout" && Tp();
}
function NS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Da(ri);
}
function IS(e, t) {
  if (e === "click") return Da(t);
}
function RS(e, t) {
  if (e === "input" || e === "change") return Da(t);
}
function AS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == "function" ? Object.is : AS;
function oi(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!qu.call(t, o) || !Ot(e[o], t[o])) return !1;
  }
  return !0;
}
function _p(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Np(e, t) {
  var n = _p(e);
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
    n = _p(n);
  }
}
function Cg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xg() {
  for (var e = window, t = Qs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qs(e.document);
  }
  return t;
}
function Bf(e) {
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
function jS(e) {
  var t = xg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bf(n)) {
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
          (o = Np(n, i));
        var s = Np(n, r);
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
var LS = Xt && "documentMode" in document && 11 >= document.documentMode,
  Tr = null,
  dc = null,
  Ho = null,
  pc = !1;
function Ip(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pc ||
    Tr == null ||
    Tr !== Qs(r) ||
    ((r = Tr),
    "selectionStart" in r && Bf(r)
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
    (Ho && oi(Ho, r)) ||
      ((Ho = r),
      (r = ta(dc, "onSelect")),
      0 < r.length &&
        ((t = new Af("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tr))));
}
function os(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _r = {
    animationend: os("Animation", "AnimationEnd"),
    animationiteration: os("Animation", "AnimationIteration"),
    animationstart: os("Animation", "AnimationStart"),
    transitionend: os("Transition", "TransitionEnd"),
  },
  Hl = {},
  $g = {};
Xt &&
  (($g = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _r.animationend.animation,
    delete _r.animationiteration.animation,
    delete _r.animationstart.animation),
  "TransitionEvent" in window || delete _r.transitionend.transition);
function Ma(e) {
  if (Hl[e]) return Hl[e];
  if (!_r[e]) return e;
  var t = _r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $g) return (Hl[e] = t[n]);
  return e;
}
var kg = Ma("animationend"),
  Og = Ma("animationiteration"),
  Pg = Ma("animationstart"),
  Tg = Ma("transitionend"),
  _g = new Map(),
  Rp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ln(e, t) {
  _g.set(e, t), pr(t, [e]);
}
for (var Wl = 0; Wl < Rp.length; Wl++) {
  var Kl = Rp[Wl],
    BS = Kl.toLowerCase(),
    DS = Kl[0].toUpperCase() + Kl.slice(1);
  Ln(BS, "on" + DS);
}
Ln(kg, "onAnimationEnd");
Ln(Og, "onAnimationIteration");
Ln(Pg, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Tg, "onTransitionEnd");
Yr("onMouseEnter", ["mouseout", "mouseover"]);
Yr("onMouseLeave", ["mouseout", "mouseover"]);
Yr("onPointerEnter", ["pointerout", "pointerover"]);
Yr("onPointerLeave", ["pointerout", "pointerover"]);
pr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Lo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  MS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));
function Ap(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), B2(r, t, void 0, e), (e.currentTarget = null);
}
function Ng(e, t) {
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
          Ap(o, a, u), (i = l);
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
          Ap(o, a, u), (i = l);
        }
    }
  }
  if (Gs) throw ((e = lc), (Gs = !1), (lc = null), e);
}
function J(e, t) {
  var n = t[yc];
  n === void 0 && (n = t[yc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ig(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), Ig(n, e, r, t);
}
var is = "_reactListening" + Math.random().toString(36).slice(2);
function ii(e) {
  if (!e[is]) {
    (e[is] = !0),
      Mv.forEach(function (n) {
        n !== "selectionchange" && (MS.has(n) || ql(n, !1, e), ql(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[is] || ((t[is] = !0), ql("selectionchange", !1, t));
  }
}
function Ig(e, t, n, r) {
  switch (mg(t)) {
    case 1:
      var o = Z2;
      break;
    case 4:
      o = eS;
      break;
    default:
      o = If;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ac ||
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
          if (((s = Jn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  tg(function () {
    var u = i,
      c = Pf(n),
      f = [];
    e: {
      var d = _g.get(e);
      if (d !== void 0) {
        var m = Af,
          g = e;
        switch (e) {
          case "keypress":
            if (Is(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = mS;
            break;
          case "focusin":
            (g = "focus"), (m = zl);
            break;
          case "focusout":
            (g = "blur"), (m = zl);
            break;
          case "beforeblur":
          case "afterblur":
            m = zl;
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
            m = Ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = rS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = yS;
            break;
          case kg:
          case Og:
          case Pg:
            m = sS;
            break;
          case Tg:
            m = SS;
            break;
          case "scroll":
            m = tS;
            break;
          case "wheel":
            m = ES;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = lS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = xp;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          h = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              h !== null && ((b = Zo(p, h)), b != null && y.push(si(p, b, v)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((d = new m(d, g, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== ic &&
            (g = n.relatedTarget || n.fromElement) &&
            (Jn(g) || g[Zt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((g = n.relatedTarget || n.toElement),
              (m = u),
              (g = g ? Jn(g) : null),
              g !== null &&
                ((E = hr(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((m = null), (g = u)),
          m !== g)
        ) {
          if (
            ((y = Ep),
            (b = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = xp),
              (b = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (E = m == null ? d : Nr(m)),
            (v = g == null ? d : Nr(g)),
            (d = new y(b, p + "leave", m, n, c)),
            (d.target = E),
            (d.relatedTarget = v),
            (b = null),
            Jn(c) === u &&
              ((y = new y(h, p + "enter", g, n, c)),
              (y.target = v),
              (y.relatedTarget = E),
              (b = y)),
            (E = b),
            m && g)
          )
            t: {
              for (y = m, h = g, p = 0, v = y; v; v = Sr(v)) p++;
              for (v = 0, b = h; b; b = Sr(b)) v++;
              for (; 0 < p - v; ) (y = Sr(y)), p--;
              for (; 0 < v - p; ) (h = Sr(h)), v--;
              for (; p--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = Sr(y)), (h = Sr(h));
              }
              y = null;
            }
          else y = null;
          m !== null && jp(f, d, m, y, !1),
            g !== null && E !== null && jp(f, E, g, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Nr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var x = TS;
        else if (Op(d))
          if (bg) x = RS;
          else {
            x = NS;
            var k = _S;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = IS);
        if (x && (x = x(e, u))) {
          Sg(f, x, n, c);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            ec(d, "number", d.value);
      }
      switch (((k = u ? Nr(u) : window), e)) {
        case "focusin":
          (Op(k) || k.contentEditable === "true") &&
            ((Tr = k), (dc = u), (Ho = null));
          break;
        case "focusout":
          Ho = dc = Tr = null;
          break;
        case "mousedown":
          pc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pc = !1), Ip(f, n, c);
          break;
        case "selectionchange":
          if (LS) break;
        case "keydown":
        case "keyup":
          Ip(f, n, c);
      }
      var $;
      if (Lf)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Pr
          ? yg(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (gg &&
          n.locale !== "ko" &&
          (Pr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Pr && ($ = vg())
            : ((yn = c),
              (Rf = "value" in yn ? yn.value : yn.textContent),
              (Pr = !0))),
        (k = ta(u, N)),
        0 < k.length &&
          ((N = new Cp(N, e, null, n, c)),
          f.push({ event: N, listeners: k }),
          $ ? (N.data = $) : (($ = wg(n)), $ !== null && (N.data = $)))),
        ($ = xS ? $S(e, n) : kS(e, n)) &&
          ((u = ta(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Cp("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = $)));
    }
    Ng(f, t);
  });
}
function si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ta(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zo(e, n)),
      i != null && r.unshift(si(e, i, o)),
      (i = Zo(e, t)),
      i != null && r.push(si(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Zo(n, i)), l != null && s.unshift(si(n, l, a)))
        : o || ((l = Zo(n, i)), l != null && s.push(si(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var FS = /\r\n?/g,
  zS = /\u0000|\uFFFD/g;
function Lp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      FS,
      `
`
    )
    .replace(zS, "");
}
function ss(e, t, n) {
  if (((t = Lp(t)), Lp(e) !== t && n)) throw Error(C(425));
}
function na() {}
var hc = null,
  mc = null;
function vc(e, t) {
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
var gc = typeof setTimeout == "function" ? setTimeout : void 0,
  US = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bp = typeof Promise == "function" ? Promise : void 0,
  VS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bp < "u"
      ? function (e) {
          return Bp.resolve(null).then(e).catch(HS);
        }
      : gc;
function HS(e) {
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
          e.removeChild(o), ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ni(t);
}
function kn(e) {
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
function Dp(e) {
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
var fo = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + fo,
  ai = "__reactProps$" + fo,
  Zt = "__reactContainer$" + fo,
  yc = "__reactEvents$" + fo,
  WS = "__reactListeners$" + fo,
  KS = "__reactHandles$" + fo;
function Jn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zt] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Dp(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = Dp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ei(e) {
  return (
    (e = e[Bt] || e[Zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Fa(e) {
  return e[ai] || null;
}
var wc = [],
  Ir = -1;
function Bn(e) {
  return { current: e };
}
function X(e) {
  0 > Ir || ((e.current = wc[Ir]), (wc[Ir] = null), Ir--);
}
function Y(e, t) {
  Ir++, (wc[Ir] = e.current), (e.current = t);
}
var An = {},
  _e = Bn(An),
  Ue = Bn(!1),
  sr = An;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
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
function ra() {
  X(Ue), X(_e);
}
function Mp(e, t, n) {
  if (_e.current !== An) throw Error(C(168));
  Y(_e, t), Y(Ue, n);
}
function Rg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, _2(e) || "Unknown", o));
  return ne({}, n, r);
}
function oa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (sr = _e.current),
    Y(_e, e),
    Y(Ue, Ue.current),
    !0
  );
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Rg(e, t, sr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ue),
      X(_e),
      Y(_e, e))
    : X(Ue),
    Y(Ue, n);
}
var qt = null,
  za = !1,
  Gl = !1;
function Ag(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function qS(e) {
  (za = !0), Ag(e);
}
function Dn() {
  if (!Gl && qt !== null) {
    Gl = !0;
    var e = 0,
      t = K;
    try {
      var n = qt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (za = !1);
    } catch (o) {
      throw (qt !== null && (qt = qt.slice(e + 1)), ig(Tf, Dn), o);
    } finally {
      (K = t), (Gl = !1);
    }
  }
  return null;
}
var Rr = [],
  Ar = 0,
  ia = null,
  sa = 0,
  ct = [],
  ft = 0,
  ar = null,
  Qt = 1,
  Yt = "";
function Yn(e, t) {
  (Rr[Ar++] = sa), (Rr[Ar++] = ia), (ia = e), (sa = t);
}
function jg(e, t, n) {
  (ct[ft++] = Qt), (ct[ft++] = Yt), (ct[ft++] = ar), (ar = e);
  var r = Qt;
  e = Yt;
  var o = 32 - $t(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Qt = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (Yt = i + e);
  } else (Qt = (1 << i) | (n << o) | r), (Yt = e);
}
function Df(e) {
  e.return !== null && (Yn(e, 1), jg(e, 1, 0));
}
function Mf(e) {
  for (; e === ia; )
    (ia = Rr[--Ar]), (Rr[Ar] = null), (sa = Rr[--Ar]), (Rr[Ar] = null);
  for (; e === ar; )
    (ar = ct[--ft]),
      (ct[ft] = null),
      (Yt = ct[--ft]),
      (ct[ft] = null),
      (Qt = ct[--ft]),
      (ct[ft] = null);
}
var et = null,
  Xe = null,
  Z = !1,
  Et = null;
function Lg(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Xe = kn(t.firstChild)), !0)
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
          ? ((n = ar !== null ? { id: Qt, overflow: Yt } : null),
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
function Sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bc(e) {
  if (Z) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!zp(e, t)) {
        if (Sc(e)) throw Error(C(418));
        t = kn(n.nextSibling);
        var r = et;
        t && zp(e, t)
          ? Lg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (et = e));
      }
    } else {
      if (Sc(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (et = e);
    }
  }
}
function Up(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function as(e) {
  if (e !== et) return !1;
  if (!Z) return Up(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vc(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (Sc(e)) throw (Bg(), Error(C(418)));
    for (; t; ) Lg(e, t), (t = kn(t.nextSibling));
  }
  if ((Up(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = et ? kn(e.stateNode.nextSibling) : null;
  return !0;
}
function Bg() {
  for (var e = Xe; e; ) e = kn(e.nextSibling);
}
function Jr() {
  (Xe = et = null), (Z = !1);
}
function Ff(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var QS = on.ReactCurrentBatchConfig;
function $o(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
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
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vp(e) {
  var t = e._init;
  return t(e._payload);
}
function Dg(e) {
  function t(h, p) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = _n(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, v, b) {
    return p === null || p.tag !== 6
      ? ((p = ru(v, h.mode, b)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function l(h, p, v, b) {
    var x = v.type;
    return x === Or
      ? c(h, p, v.props.children, b, v.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === dn &&
            Vp(x) === p.type))
      ? ((b = o(p, v.props)), (b.ref = $o(h, p, v)), (b.return = h), b)
      : ((b = Ms(v.type, v.key, v.props, null, h.mode, b)),
        (b.ref = $o(h, p, v)),
        (b.return = h),
        b);
  }
  function u(h, p, v, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = ou(v, h.mode, b)), (p.return = h), p)
      : ((p = o(p, v.children || [])), (p.return = h), p);
  }
  function c(h, p, v, b, x) {
    return p === null || p.tag !== 7
      ? ((p = tr(v, h.mode, b, x)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function f(h, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ru("" + p, h.mode, v)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ji:
          return (
            (v = Ms(p.type, p.key, p.props, null, h.mode, v)),
            (v.ref = $o(h, null, p)),
            (v.return = h),
            v
          );
        case kr:
          return (p = ou(p, h.mode, v)), (p.return = h), p;
        case dn:
          var b = p._init;
          return f(h, b(p._payload), v);
      }
      if (Ao(p) || So(p))
        return (p = tr(p, h.mode, v, null)), (p.return = h), p;
      ls(h, p);
    }
    return null;
  }
  function d(h, p, v, b) {
    var x = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return x !== null ? null : a(h, p, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ji:
          return v.key === x ? l(h, p, v, b) : null;
        case kr:
          return v.key === x ? u(h, p, v, b) : null;
        case dn:
          return (x = v._init), d(h, p, x(v._payload), b);
      }
      if (Ao(v) || So(v)) return x !== null ? null : c(h, p, v, b, null);
      ls(h, v);
    }
    return null;
  }
  function m(h, p, v, b, x) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (h = h.get(v) || null), a(p, h, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ji:
          return (h = h.get(b.key === null ? v : b.key) || null), l(p, h, b, x);
        case kr:
          return (h = h.get(b.key === null ? v : b.key) || null), u(p, h, b, x);
        case dn:
          var k = b._init;
          return m(h, p, v, k(b._payload), x);
      }
      if (Ao(b) || So(b)) return (h = h.get(v) || null), c(p, h, b, x, null);
      ls(p, b);
    }
    return null;
  }
  function g(h, p, v, b) {
    for (
      var x = null, k = null, $ = p, N = (p = 0), F = null;
      $ !== null && N < v.length;
      N++
    ) {
      $.index > N ? ((F = $), ($ = null)) : (F = $.sibling);
      var _ = d(h, $, v[N], b);
      if (_ === null) {
        $ === null && ($ = F);
        break;
      }
      e && $ && _.alternate === null && t(h, $),
        (p = i(_, p, N)),
        k === null ? (x = _) : (k.sibling = _),
        (k = _),
        ($ = F);
    }
    if (N === v.length) return n(h, $), Z && Yn(h, N), x;
    if ($ === null) {
      for (; N < v.length; N++)
        ($ = f(h, v[N], b)),
          $ !== null &&
            ((p = i($, p, N)), k === null ? (x = $) : (k.sibling = $), (k = $));
      return Z && Yn(h, N), x;
    }
    for ($ = r(h, $); N < v.length; N++)
      (F = m($, h, N, v[N], b)),
        F !== null &&
          (e && F.alternate !== null && $.delete(F.key === null ? N : F.key),
          (p = i(F, p, N)),
          k === null ? (x = F) : (k.sibling = F),
          (k = F));
    return (
      e &&
        $.forEach(function (ge) {
          return t(h, ge);
        }),
      Z && Yn(h, N),
      x
    );
  }
  function y(h, p, v, b) {
    var x = So(v);
    if (typeof x != "function") throw Error(C(150));
    if (((v = x.call(v)), v == null)) throw Error(C(151));
    for (
      var k = (x = null), $ = p, N = (p = 0), F = null, _ = v.next();
      $ !== null && !_.done;
      N++, _ = v.next()
    ) {
      $.index > N ? ((F = $), ($ = null)) : (F = $.sibling);
      var ge = d(h, $, _.value, b);
      if (ge === null) {
        $ === null && ($ = F);
        break;
      }
      e && $ && ge.alternate === null && t(h, $),
        (p = i(ge, p, N)),
        k === null ? (x = ge) : (k.sibling = ge),
        (k = ge),
        ($ = F);
    }
    if (_.done) return n(h, $), Z && Yn(h, N), x;
    if ($ === null) {
      for (; !_.done; N++, _ = v.next())
        (_ = f(h, _.value, b)),
          _ !== null &&
            ((p = i(_, p, N)), k === null ? (x = _) : (k.sibling = _), (k = _));
      return Z && Yn(h, N), x;
    }
    for ($ = r(h, $); !_.done; N++, _ = v.next())
      (_ = m($, h, N, _.value, b)),
        _ !== null &&
          (e && _.alternate !== null && $.delete(_.key === null ? N : _.key),
          (p = i(_, p, N)),
          k === null ? (x = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        $.forEach(function (_t) {
          return t(h, _t);
        }),
      Z && Yn(h, N),
      x
    );
  }
  function E(h, p, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Or &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ji:
          e: {
            for (var x = v.key, k = p; k !== null; ) {
              if (k.key === x) {
                if (((x = v.type), x === Or)) {
                  if (k.tag === 7) {
                    n(h, k.sibling),
                      (p = o(k, v.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  k.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === dn &&
                    Vp(x) === k.type)
                ) {
                  n(h, k.sibling),
                    (p = o(k, v.props)),
                    (p.ref = $o(h, k, v)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            v.type === Or
              ? ((p = tr(v.props.children, h.mode, b, v.key)),
                (p.return = h),
                (h = p))
              : ((b = Ms(v.type, v.key, v.props, null, h.mode, b)),
                (b.ref = $o(h, p, v)),
                (b.return = h),
                (h = b));
          }
          return s(h);
        case kr:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ou(v, h.mode, b)), (p.return = h), (h = p);
          }
          return s(h);
        case dn:
          return (k = v._init), E(h, p, k(v._payload), b);
      }
      if (Ao(v)) return g(h, p, v, b);
      if (So(v)) return y(h, p, v, b);
      ls(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = ru(v, h.mode, b)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return E;
}
var Xr = Dg(!0),
  Mg = Dg(!1),
  aa = Bn(null),
  la = null,
  jr = null,
  zf = null;
function Uf() {
  zf = jr = la = null;
}
function Vf(e) {
  var t = aa.current;
  X(aa), (e._currentValue = t);
}
function Ec(e, t, n) {
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
function Wr(e, t) {
  (la = e),
    (zf = jr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (zf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
      if (la === null) throw Error(C(308));
      (jr = e), (la.dependencies = { lanes: 0, firstContext: e });
    } else jr = jr.next = e;
  return t;
}
var Xn = null;
function Hf(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
function Fg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hf(t)) : ((n.next = o.next), (o.next = n)),
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
function Wf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zg(e, t) {
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
function Gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function On(e, t, n) {
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
    o === null ? ((t.next = t), Hf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function Rs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _f(e, n);
  }
}
function Hp(e, t) {
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
function ua(e, t, n, r) {
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
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            y = a;
          switch (((d = t), (m = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(m, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (d = typeof g == "function" ? g.call(m, f, d) : g),
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
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
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
    (ur |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Wp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var Ci = {},
  Mt = Bn(Ci),
  li = Bn(Ci),
  ui = Bn(Ci);
function Zn(e) {
  if (e === Ci) throw Error(C(174));
  return e;
}
function Kf(e, t) {
  switch ((Y(ui, t), Y(li, e), Y(Mt, Ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nc(t, e));
  }
  X(Mt), Y(Mt, t);
}
function Zr() {
  X(Mt), X(li), X(ui);
}
function Ug(e) {
  Zn(ui.current);
  var t = Zn(Mt.current),
    n = nc(t, e.type);
  t !== n && (Y(li, e), Y(Mt, n));
}
function qf(e) {
  li.current === e && (X(Mt), X(li));
}
var ee = Bn(0);
function ca(e) {
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
var Jl = [];
function Qf() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var As = on.ReactCurrentDispatcher,
  Xl = on.ReactCurrentBatchConfig,
  lr = 0,
  te = null,
  pe = null,
  we = null,
  fa = !1,
  Wo = !1,
  ci = 0,
  YS = 0;
function Oe() {
  throw Error(C(321));
}
function Yf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function Gf(e, t, n, r, o, i) {
  if (
    ((lr = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (As.current = e === null || e.memoizedState === null ? ZS : eb),
    (e = n(r, o)),
    Wo)
  ) {
    i = 0;
    do {
      if (((Wo = !1), (ci = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (we = pe = null),
        (t.updateQueue = null),
        (As.current = tb),
        (e = n(r, o));
    } while (Wo);
  }
  if (
    ((As.current = da),
    (t = pe !== null && pe.next !== null),
    (lr = 0),
    (we = pe = te = null),
    (fa = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Jf() {
  var e = ci !== 0;
  return (ci = 0), e;
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
  if (pe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = we === null ? te.memoizedState : we.next;
  if (t !== null) (we = t), (pe = e);
  else {
    if (e === null) throw Error(C(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      we === null ? (te.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function fi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = pe,
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
      if ((lr & c) === c)
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
          (ur |= c);
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
    do (i = o.lane), (te.lanes |= i), (ur |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eu(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
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
function Vg() {}
function Hg(e, t) {
  var n = te,
    r = vt(),
    o = t(),
    i = !Ot(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    Xf(qg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      di(9, Kg.bind(null, n, r, o, t), void 0, null),
      be === null)
    )
      throw Error(C(349));
    lr & 30 || Wg(n, t, o);
  }
  return o;
}
function Wg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qg(t) && Yg(e);
}
function qg(e, t, n) {
  return n(function () {
    Qg(t) && Yg(e);
  });
}
function Qg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function Yg(e) {
  var t = en(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Kp(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = XS.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function di(e, t, n, r) {
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
function Gg() {
  return vt().memoizedState;
}
function js(e, t, n, r) {
  var o = jt();
  (te.flags |= e),
    (o.memoizedState = di(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ua(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (((i = s.destroy), r !== null && Yf(r, s.deps))) {
      o.memoizedState = di(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = di(1 | t, n, i, r));
}
function qp(e, t) {
  return js(8390656, 8, e, t);
}
function Xf(e, t) {
  return Ua(2048, 8, e, t);
}
function Jg(e, t) {
  return Ua(4, 2, e, t);
}
function Xg(e, t) {
  return Ua(4, 4, e, t);
}
function Zg(e, t) {
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
function ey(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ua(4, 4, Zg.bind(null, t, e), n)
  );
}
function Zf() {}
function ty(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ny(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ry(e, t, n) {
  return lr & 21
    ? (Ot(n, t) || ((n = lg()), (te.lanes |= n), (ur |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function GS(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Xl.transition = r);
  }
}
function oy() {
  return vt().memoizedState;
}
function JS(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    iy(e))
  )
    sy(t, n);
  else if (((n = Fg(e, t, n, r)), n !== null)) {
    var o = Re();
    kt(n, e, r, o), ay(n, t, r);
  }
}
function XS(e, t, n) {
  var r = Tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (iy(e)) sy(t, o);
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
            ? ((o.next = o), Hf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fg(e, t, o, r)),
      n !== null && ((o = Re()), kt(n, e, r, o), ay(n, t, r));
  }
}
function iy(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function sy(e, t) {
  Wo = fa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ay(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _f(e, n);
  }
}
var da = {
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
  ZS = {
    readContext: mt,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: qp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        js(4194308, 4, Zg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return js(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return js(4, 2, e, t);
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
        (e = e.dispatch = JS.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kp,
    useDebugValue: Zf,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kp(!1),
        t = e[0];
      return (e = GS.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = jt();
      if (Z) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(C(349));
        lr & 30 || Wg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qp(qg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        di(9, Kg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = be.identifierPrefix;
      if (Z) {
        var n = Yt,
          r = Qt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ci++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = YS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eb = {
    readContext: mt,
    useCallback: ty,
    useContext: mt,
    useEffect: Xf,
    useImperativeHandle: ey,
    useInsertionEffect: Jg,
    useLayoutEffect: Xg,
    useMemo: ny,
    useReducer: Zl,
    useRef: Gg,
    useState: function () {
      return Zl(fi);
    },
    useDebugValue: Zf,
    useDeferredValue: function (e) {
      var t = vt();
      return ry(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(fi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Vg,
    useSyncExternalStore: Hg,
    useId: oy,
    unstable_isNewReconciler: !1,
  },
  tb = {
    readContext: mt,
    useCallback: ty,
    useContext: mt,
    useEffect: Xf,
    useImperativeHandle: ey,
    useInsertionEffect: Jg,
    useLayoutEffect: Xg,
    useMemo: ny,
    useReducer: eu,
    useRef: Gg,
    useState: function () {
      return eu(fi);
    },
    useDebugValue: Zf,
    useDeferredValue: function (e) {
      var t = vt();
      return pe === null ? (t.memoizedState = e) : ry(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = eu(fi)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Vg,
    useSyncExternalStore: Hg,
    useId: oy,
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
function Cc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Va = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Tn(e),
      i = Gt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (kt(t, e, o, r), Rs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Tn(e),
      i = Gt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (kt(t, e, o, r), Rs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Tn(e),
      o = Gt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = On(e, o, r)),
      t !== null && (kt(t, e, r, n), Rs(t, e, r));
  },
};
function Qp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oi(n, r) || !oi(o, i)
      : !0
  );
}
function ly(e, t, n) {
  var r = !1,
    o = An,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mt(i))
      : ((o = Ve(t) ? sr : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gr(e, o) : An)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Va),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Yp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Va.enqueueReplaceState(t, t.state, null);
}
function xc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Wf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mt(i))
    : ((i = Ve(t) ? sr : _e.current), (o.context = Gr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Cc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Va.enqueueReplaceState(o, o.state, null),
      ua(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function eo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += T2(r)), (r = r.return);
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
function tu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $c(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nb = typeof WeakMap == "function" ? WeakMap : Map;
function uy(e, t, n) {
  (n = Gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ha || ((ha = !0), (jc = r)), $c(e, t);
    }),
    n
  );
}
function cy(e, t, n) {
  (n = Gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        $c(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        $c(e, t),
          typeof r != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nb();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = vb.bind(null, e, t, n)), t.then(e, e));
}
function Jp(e) {
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
function Xp(e, t, n, r, o) {
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
              : ((t = Gt(-1, 1)), (t.tag = 2), On(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rb = on.ReactCurrentOwner,
  ze = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Mg(t, null, n, r) : Xr(t, e.child, n, r);
}
function Zp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Wr(t, o),
    (r = Gf(e, t, n, r, i, o)),
    (n = Jf()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (Z && n && Df(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function eh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ad(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fy(e, t, i, r, o))
      : ((e = Ms(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oi), n(s, r) && e.ref === t.ref)
    )
      return tn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _n(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (oi(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), tn(e, t, o);
  }
  return kc(e, t, n, r, o);
}
function dy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Br, Ge),
        (Ge |= n);
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
          Y(Br, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Br, Ge),
        (Ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Br, Ge),
      (Ge |= r);
  return Ie(e, t, o, n), t.child;
}
function py(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kc(e, t, n, r, o) {
  var i = Ve(n) ? sr : _e.current;
  return (
    (i = Gr(t, i)),
    Wr(t, o),
    (n = Gf(e, t, n, r, i, o)),
    (r = Jf()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (Z && r && Df(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function th(e, t, n, r, o) {
  if (Ve(n)) {
    var i = !0;
    oa(t);
  } else i = !1;
  if ((Wr(t, o), t.stateNode === null))
    Ls(e, t), ly(t, n, r), xc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ve(n) ? sr : _e.current), (u = Gr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Yp(t, s, r, u)),
      (pn = !1);
    var d = t.memoizedState;
    (s.state = d),
      ua(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Ue.current || pn
        ? (typeof c == "function" && (Cc(t, n, c, r), (l = t.memoizedState)),
          (a = pn || Qp(t, n, a, r, d, l, u))
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
      zg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mt(l))
        : ((l = Ve(n) ? sr : _e.current), (l = Gr(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Yp(t, s, r, l)),
      (pn = !1),
      (d = t.memoizedState),
      (s.state = d),
      ua(t, r, s, o);
    var g = t.memoizedState;
    a !== f || d !== g || Ue.current || pn
      ? (typeof m == "function" && (Cc(t, n, m, r), (g = t.memoizedState)),
        (u = pn || Qp(t, n, u, r, d, g, l) || !1)
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
  return Oc(e, t, n, r, i, o);
}
function Oc(e, t, n, r, o, i) {
  py(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Fp(t, n, !1), tn(e, t, i);
  (r = t.stateNode), (rb.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Xr(t, e.child, null, i)), (t.child = Xr(t, null, a, i)))
      : Ie(e, t, a, i),
    (t.memoizedState = r.state),
    o && Fp(t, n, !0),
    t.child
  );
}
function hy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Mp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mp(e, t.context, !1),
    Kf(e, t.containerInfo);
}
function nh(e, t, n, r, o) {
  return Jr(), Ff(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function my(e, t, n) {
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
    Y(ee, o & 1),
    e === null)
  )
    return (
      bc(t),
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
                : (i = Ka(s, r, 0, null)),
              (e = tr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Tc(n)),
              (t.memoizedState = Pc),
              e)
            : ed(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return ob(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = _n(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = _n(a, i)) : ((i = tr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Tc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _n(i, { mode: "visible", children: r.children })),
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
function ed(e, t) {
  return (
    (t = Ka({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function us(e, t, n, r) {
  return (
    r !== null && Ff(r),
    Xr(t, e.child, null, n),
    (e = ed(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ob(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tu(Error(C(422)))), us(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ka({ mode: "visible", children: r.children }, o, 0, null)),
        (i = tr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xr(t, e.child, null, s),
        (t.child.memoizedState = Tc(s)),
        (t.memoizedState = Pc),
        i);
  if (!(t.mode & 1)) return us(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(C(419))), (r = tu(i, r, void 0)), us(e, t, s, r);
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
    return sd(), (r = tu(Error(C(421)))), us(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Xe = kn(o.nextSibling)),
      (et = t),
      (Z = !0),
      (Et = null),
      e !== null &&
        ((ct[ft++] = Qt),
        (ct[ft++] = Yt),
        (ct[ft++] = ar),
        (Qt = e.id),
        (Yt = e.overflow),
        (ar = t)),
      (t = ed(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ec(e.return, t, n);
}
function nu(e, t, n, r, o) {
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
function vy(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rh(e, n, t);
        else if (e.tag === 19) rh(e, n, t);
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
  if ((Y(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ca(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          nu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ca(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        nu(t, !0, n, null, i);
        break;
      case "together":
        nu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ur |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ib(e, t, n) {
  switch (t.tag) {
    case 3:
      hy(t), Jr();
      break;
    case 5:
      Ug(t);
      break;
    case 1:
      Ve(t.type) && oa(t);
      break;
    case 4:
      Kf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Y(aa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? my(e, t, n)
          : (Y(ee, ee.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dy(e, t, n);
  }
  return tn(e, t, n);
}
var gy, _c, yy, wy;
gy = function (e, t) {
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
_c = function () {};
yy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Zn(Mt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Xu(e, o)), (r = Xu(e, r)), (i = []);
        break;
      case "select":
        (o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = tc(e, o)), (r = tc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = na);
    }
    rc(n, r);
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
            (Jo.hasOwnProperty(u)
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
              (Jo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && J("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ko(e, t) {
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
function sb(e, t, n) {
  var r = t.pendingProps;
  switch ((Mf(t), t.tag)) {
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
      return Ve(t.type) && ra(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zr(),
        X(Ue),
        X(_e),
        Qf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (as(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (Dc(Et), (Et = null)))),
        _c(e, t),
        Pe(t),
        null
      );
    case 5:
      qf(t);
      var o = Zn(ui.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yy(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Pe(t), null;
        }
        if (((e = Zn(Mt.current)), as(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Bt] = t), (r[ai] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Lo.length; o++) J(Lo[o], r);
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
              dp(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              hp(r, i), J("invalid", r);
          }
          rc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ss(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ss(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Jo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              Xi(r), pp(r, i, !0);
              break;
            case "textarea":
              Xi(r), mp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = na);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qv(n)),
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
            (e[ai] = r),
            gy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = oc(n, r)), n)) {
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
                for (o = 0; o < Lo.length; o++) J(Lo[o], e);
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
                dp(e, r), (o = Xu(e, r)), J("invalid", e);
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
                hp(e, r), (o = tc(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            rc(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Gv(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Qv(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Xo(e, l)
                    : typeof l == "number" && Xo(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Jo.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && J("scroll", e)
                      : l != null && xf(e, i, l, s));
              }
            switch (n) {
              case "input":
                Xi(e), pp(e, r, !1);
                break;
              case "textarea":
                Xi(e), mp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? zr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      zr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = na);
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
      if (e && t.stateNode != null) wy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Zn(ui.current)), Zn(Mt.current), as(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (i = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                ss(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ss(r.nodeValue, n, (e.mode & 1) !== 0);
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
          Bg(), Jr(), (t.flags |= 98560), (i = !1);
        else if (((i = as(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Bt] = t;
          } else
            Jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else Et !== null && (Dc(Et), (Et = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? he === 0 && (he = 3) : sd())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Zr(), _c(e, t), e === null && ii(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return Vf(t.type._context), Pe(t), null;
    case 17:
      return Ve(t.type) && ra(), Pe(t), null;
    case 19:
      if ((X(ee), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ko(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ca(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ko(i, !1),
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
                return Y(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ie() > to &&
            ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ca(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ko(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Z)
            )
              return Pe(t), null;
          } else
            2 * ie() - i.renderingStartTime > to &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
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
          Y(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        id(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ab(e, t) {
  switch ((Mf(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && ra(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zr(),
        X(Ue),
        X(_e),
        Qf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qf(t), null;
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(ee), null;
    case 4:
      return Zr(), null;
    case 10:
      return Vf(t.type._context), null;
    case 22:
    case 23:
      return id(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cs = !1,
  Te = !1,
  lb = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Lr(e, t) {
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
function Nc(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var oh = !1;
function ub(e, t) {
  if (((hc = Zs), (e = xg()), Bf(e))) {
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
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mc = { focusedElem: e, selectionRange: n }, Zs = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
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
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : wt(t.type, y),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(C(163));
            }
        } catch (b) {
          re(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (g = oh), (oh = !1), g;
}
function Ko(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Nc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ha(e, t) {
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
function Ic(e) {
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
function Sy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[ai], delete t[yc], delete t[WS], delete t[KS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function by(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ih(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || by(e.return)) return null;
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
function Rc(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = na));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rc(e, t, n), e = e.sibling; e !== null; ) Rc(e, t, n), (e = e.sibling);
}
function Ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null; ) Ac(e, t, n), (e = e.sibling);
}
var xe = null,
  St = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) Ey(e, t, n), (n = n.sibling);
}
function Ey(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(La, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Lr(n, t);
    case 6:
      var r = xe,
        o = St;
      (xe = null),
        cn(e, t, n),
        (xe = r),
        (St = o),
        xe !== null &&
          (St
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null &&
        (St
          ? ((e = xe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            ni(e))
          : Yl(xe, n.stateNode));
      break;
    case 4:
      (r = xe),
        (o = St),
        (xe = n.stateNode.containerInfo),
        (St = !0),
        cn(e, t, n),
        (xe = r),
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
            s !== void 0 && (i & 2 || i & 4) && Nc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Lr(n, t),
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
function sh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lb()),
      t.forEach(function (r) {
        var o = yb.bind(null, e, r);
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
              (xe = a.stateNode), (St = !1);
              break e;
            case 3:
              (xe = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (xe = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (xe === null) throw Error(C(160));
        Ey(i, s, o), (xe = null), (St = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cy(t, e), (t = t.sibling);
}
function Cy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Rt(e), r & 4)) {
        try {
          Ko(3, e, e.return), Ha(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          Ko(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      yt(t, e), Rt(e), r & 512 && n !== null && Lr(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Rt(e),
        r & 512 && n !== null && Lr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xo(o, "");
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
            a === "input" && i.type === "radio" && i.name != null && Wv(o, i),
              oc(a, s);
            var u = oc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Gv(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Qv(o, f)
                : c === "children"
                ? Xo(o, f)
                : xf(o, c, f, u);
            }
            switch (a) {
              case "input":
                Zu(o, i);
                break;
              case "textarea":
                Kv(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? zr(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? zr(o, !!i.multiple, i.defaultValue, !0)
                      : zr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ai] = i;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
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
          ni(t.containerInfo);
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
            (rd = ie())),
        r & 4 && sh(e);
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
          for (T = e, c = e.child; c !== null; ) {
            for (f = T = c; T !== null; ) {
              switch (((d = T), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ko(4, d, d.return);
                  break;
                case 1:
                  Lr(d, d.return);
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
                  Lr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    lh(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (T = m)) : lh(f);
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
                      (a.style.display = Yv("display", s)));
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
      yt(t, e), Rt(e), r & 4 && sh(e);
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
          if (by(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xo(o, ""), (r.flags &= -33));
          var i = ih(e);
          Ac(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ih(e);
          Rc(e, a, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cb(e, t, n) {
  (T = e), xy(e);
}
function xy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || cs;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Te;
        a = cs;
        var u = Te;
        if (((cs = s), (Te = l) && !u))
          for (T = o; T !== null; )
            (s = T),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? uh(o)
                : l !== null
                ? ((l.return = s), (T = l))
                : uh(o);
        for (; i !== null; ) (T = i), xy(i), (i = i.sibling);
        (T = o), (cs = a), (Te = u);
      }
      ah(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (T = i)) : ah(e);
  }
}
function ah(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Ha(5, t);
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
              i !== null && Wp(t, i, r);
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
                Wp(t, s, n);
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
                    f !== null && ni(f);
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
              throw Error(C(163));
          }
        Te || (t.flags & 512 && Ic(t));
      } catch (d) {
        re(t, t.return, d);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function lh(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function uh(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ha(4, t);
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
            Ic(t);
          } catch (l) {
            re(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ic(t);
          } catch (l) {
            re(t, s, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      T = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (T = a);
      break;
    }
    T = t.return;
  }
}
var fb = Math.ceil,
  pa = on.ReactCurrentDispatcher,
  td = on.ReactCurrentOwner,
  ht = on.ReactCurrentBatchConfig,
  H = 0,
  be = null,
  ue = null,
  $e = 0,
  Ge = 0,
  Br = Bn(0),
  he = 0,
  pi = null,
  ur = 0,
  Wa = 0,
  nd = 0,
  qo = null,
  Me = null,
  rd = 0,
  to = 1 / 0,
  Kt = null,
  ha = !1,
  jc = null,
  Pn = null,
  fs = !1,
  wn = null,
  ma = 0,
  Qo = 0,
  Lc = null,
  Bs = -1,
  Ds = 0;
function Re() {
  return H & 6 ? ie() : Bs !== -1 ? Bs : (Bs = ie());
}
function Tn(e) {
  return e.mode & 1
    ? H & 2 && $e !== 0
      ? $e & -$e
      : QS.transition !== null
      ? (Ds === 0 && (Ds = lg()), Ds)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mg(e.type))),
        e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < Qo) throw ((Qo = 0), (Lc = null), Error(C(185)));
  Si(e, n, r),
    (!(H & 2) || e !== be) &&
      (e === be && (!(H & 2) && (Wa |= n), he === 4 && mn(e, $e)),
      He(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((to = ie() + 500), za && Dn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Q2(e, t);
  var r = Xs(e, e === be ? $e : 0);
  if (r === 0)
    n !== null && yp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yp(n), t === 1))
      e.tag === 0 ? qS(ch.bind(null, e)) : Ag(ch.bind(null, e)),
        VS(function () {
          !(H & 6) && Dn();
        }),
        (n = null);
    else {
      switch (ug(r)) {
        case 1:
          n = Tf;
          break;
        case 4:
          n = sg;
          break;
        case 16:
          n = Js;
          break;
        case 536870912:
          n = ag;
          break;
        default:
          n = Js;
      }
      n = Iy(n, $y.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $y(e, t) {
  if (((Bs = -1), (Ds = 0), H & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Kr() && e.callbackNode !== n) return null;
  var r = Xs(e, e === be ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = va(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = Oy();
    (be !== e || $e !== t) && ((Kt = null), (to = ie() + 500), er(e, t));
    do
      try {
        hb();
        break;
      } catch (a) {
        ky(e, a);
      }
    while (!0);
    Uf(),
      (pa.current = i),
      (H = o),
      ue !== null ? (t = 0) : ((be = null), ($e = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = uc(e)), o !== 0 && ((r = o), (t = Bc(e, o)))), t === 1)
    )
      throw ((n = pi), er(e, 0), mn(e, r), He(e, ie()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !db(o) &&
          ((t = va(e, r)),
          t === 2 && ((i = uc(e)), i !== 0 && ((r = i), (t = Bc(e, i)))),
          t === 1))
      )
        throw ((n = pi), er(e, 0), mn(e, r), He(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gn(e, Me, Kt);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = rd + 500 - ie()), 10 < t))
          ) {
            if (Xs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = gc(Gn.bind(null, e, Me, Kt), t);
            break;
          }
          Gn(e, Me, Kt);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - $t(r);
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
                : 1960 * fb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gc(Gn.bind(null, e, Me, Kt), r);
            break;
          }
          Gn(e, Me, Kt);
          break;
        case 5:
          Gn(e, Me, Kt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return He(e, ie()), e.callbackNode === n ? $y.bind(null, e) : null;
}
function Bc(e, t) {
  var n = qo;
  return (
    e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    (e = va(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Dc(t)),
    e
  );
}
function Dc(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function db(e) {
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
    t &= ~nd,
      t &= ~Wa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ch(e) {
  if (H & 6) throw Error(C(327));
  Kr();
  var t = Xs(e, 0);
  if (!(t & 1)) return He(e, ie()), null;
  var n = va(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uc(e);
    r !== 0 && ((t = r), (n = Bc(e, r)));
  }
  if (n === 1) throw ((n = pi), er(e, 0), mn(e, t), He(e, ie()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gn(e, Me, Kt),
    He(e, ie()),
    null
  );
}
function od(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((to = ie() + 500), za && Dn());
  }
}
function cr(e) {
  wn !== null && wn.tag === 0 && !(H & 6) && Kr();
  var t = H;
  H |= 1;
  var n = ht.transition,
    r = K;
  try {
    if (((ht.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (ht.transition = n), (H = t), !(H & 6) && Dn();
  }
}
function id() {
  (Ge = Br.current), X(Br);
}
function er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), US(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Mf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ra();
          break;
        case 3:
          Zr(), X(Ue), X(_e), Qf();
          break;
        case 5:
          qf(r);
          break;
        case 4:
          Zr();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          Vf(r.type._context);
          break;
        case 22:
        case 23:
          id();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ue = e = _n(e.current, null)),
    ($e = Ge = t),
    (he = 0),
    (pi = null),
    (nd = Wa = ur = 0),
    (Me = qo = null),
    Xn !== null)
  ) {
    for (t = 0; t < Xn.length; t++)
      if (((n = Xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Xn = null;
  }
  return e;
}
function ky(e, t) {
  do {
    var n = ue;
    try {
      if ((Uf(), (As.current = da), fa)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        fa = !1;
      }
      if (
        ((lr = 0),
        (we = pe = te = null),
        (Wo = !1),
        (ci = 0),
        (td.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (pi = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = $e),
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
          var m = Jp(s);
          if (m !== null) {
            (m.flags &= -257),
              Xp(m, s, a, i, t),
              m.mode & 1 && Gp(i, u, t),
              (t = m),
              (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gp(i, u, t), sd();
              break e;
            }
            l = Error(C(426));
          }
        } else if (Z && a.mode & 1) {
          var E = Jp(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Xp(E, s, a, i, t),
              Ff(eo(l, a));
            break e;
          }
        }
        (i = l = eo(l, a)),
          he !== 4 && (he = 2),
          qo === null ? (qo = [i]) : qo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = uy(i, l, t);
              Hp(i, h);
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
                    (Pn === null || !Pn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = cy(i, a, t);
                Hp(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ty(n);
    } catch (x) {
      (t = x), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Oy() {
  var e = pa.current;
  return (pa.current = da), e === null ? da : e;
}
function sd() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    be === null || (!(ur & 268435455) && !(Wa & 268435455)) || mn(be, $e);
}
function va(e, t) {
  var n = H;
  H |= 2;
  var r = Oy();
  (be !== e || $e !== t) && ((Kt = null), er(e, t));
  do
    try {
      pb();
      break;
    } catch (o) {
      ky(e, o);
    }
  while (!0);
  if ((Uf(), (H = n), (pa.current = r), ue !== null)) throw Error(C(261));
  return (be = null), ($e = 0), he;
}
function pb() {
  for (; ue !== null; ) Py(ue);
}
function hb() {
  for (; ue !== null && !M2(); ) Py(ue);
}
function Py(e) {
  var t = Ny(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ty(e) : (ue = t),
    (td.current = null);
}
function Ty(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ab(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (ue = null);
        return;
      }
    } else if (((n = sb(n, t, Ge)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Gn(e, t, n) {
  var r = K,
    o = ht.transition;
  try {
    (ht.transition = null), (K = 1), mb(e, t, n, r);
  } finally {
    (ht.transition = o), (K = r);
  }
  return null;
}
function mb(e, t, n, r) {
  do Kr();
  while (wn !== null);
  if (H & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Y2(e, i),
    e === be && ((ue = be = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fs ||
      ((fs = !0),
      Iy(Js, function () {
        return Kr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ht.transition), (ht.transition = null);
    var s = K;
    K = 1;
    var a = H;
    (H |= 4),
      (td.current = null),
      ub(e, n),
      Cy(n, e),
      jS(mc),
      (Zs = !!hc),
      (mc = hc = null),
      (e.current = n),
      cb(n),
      F2(),
      (H = a),
      (K = s),
      (ht.transition = i);
  } else e.current = n;
  if (
    (fs && ((fs = !1), (wn = e), (ma = o)),
    (i = e.pendingLanes),
    i === 0 && (Pn = null),
    V2(n.stateNode),
    He(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ha) throw ((ha = !1), (e = jc), (jc = null), e);
  return (
    ma & 1 && e.tag !== 0 && Kr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Lc ? Qo++ : ((Qo = 0), (Lc = e))) : (Qo = 0),
    Dn(),
    null
  );
}
function Kr() {
  if (wn !== null) {
    var e = ug(ma),
      t = ht.transition,
      n = K;
    try {
      if (((ht.transition = null), (K = 16 > e ? 16 : e), wn === null))
        var r = !1;
      else {
        if (((e = wn), (wn = null), (ma = 0), H & 6)) throw Error(C(331));
        var o = H;
        for (H |= 4, T = e.current; T !== null; ) {
          var i = T,
            s = i.child;
          if (T.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (T = f);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var d = c.sibling,
                        m = c.return;
                      if ((Sy(c), c === u)) {
                        T = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (T = d);
                        break;
                      }
                      T = m;
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
              T = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (T = s);
          else
            e: for (; T !== null; ) {
              if (((i = T), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ko(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (T = h);
                break e;
              }
              T = i.return;
            }
        }
        var p = e.current;
        for (T = p; T !== null; ) {
          s = T;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (T = v);
          else
            e: for (s = p; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ha(9, a);
                  }
                } catch (x) {
                  re(a, a.return, x);
                }
              if (a === s) {
                T = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (T = b);
                break e;
              }
              T = a.return;
            }
        }
        if (
          ((H = o), Dn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(La, e);
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
function fh(e, t, n) {
  (t = eo(n, t)),
    (t = uy(e, t, 1)),
    (e = On(e, t, 1)),
    (t = Re()),
    e !== null && (Si(e, 1, t), He(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) fh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(r)))
        ) {
          (e = eo(n, e)),
            (e = cy(t, e, 1)),
            (t = On(t, e, 1)),
            (e = Re()),
            t !== null && (Si(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      ($e & n) === n &&
      (he === 4 || (he === 3 && ($e & 130023424) === $e && 500 > ie() - rd)
        ? er(e, 0)
        : (nd |= n)),
    He(e, t);
}
function _y(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ts), (ts <<= 1), !(ts & 130023424) && (ts = 4194304))
      : (t = 1));
  var n = Re();
  (e = en(e, t)), e !== null && (Si(e, t, n), He(e, n));
}
function gb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _y(e, n);
}
function yb(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), _y(e, n);
}
var Ny;
Ny = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), ib(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), Z && t.flags & 1048576 && jg(t, sa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ls(e, t), (e = t.pendingProps);
      var o = Gr(t, _e.current);
      Wr(t, n), (o = Gf(null, t, r, e, o, n));
      var i = Jf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((i = !0), oa(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Wf(t),
            (o.updater = Va),
            (t.stateNode = o),
            (o._reactInternals = t),
            xc(t, r, e, n),
            (t = Oc(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && Df(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ls(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Sb(r)),
          (e = wt(r, e)),
          o)
        ) {
          case 0:
            t = kc(null, t, r, e, n);
            break e;
          case 1:
            t = th(null, t, r, e, n);
            break e;
          case 11:
            t = Zp(null, t, r, e, n);
            break e;
          case 14:
            t = eh(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        kc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        th(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((hy(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          zg(e, t),
          ua(t, r, null, n);
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
            (o = eo(Error(C(423)), t)), (t = nh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = eo(Error(C(424)), t)), (t = nh(e, t, r, n, o));
            break e;
          } else
            for (
              Xe = kn(t.stateNode.containerInfo.firstChild),
                et = t,
                Z = !0,
                Et = null,
                n = Mg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jr(), r === o)) {
            t = tn(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ug(t),
        e === null && bc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        vc(r, o) ? (s = null) : i !== null && vc(r, i) && (t.flags |= 32),
        py(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && bc(t), null;
    case 13:
      return my(e, t, n);
    case 4:
      return (
        Kf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Zp(e, t, r, o, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Y(aa, r._currentValue),
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
                      (l = Gt(-1, n & -n)), (l.tag = 2);
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
                      Ec(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ec(s, n, t),
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
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Wr(t, n),
        (o = mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = wt(r, t.pendingProps)),
        (o = wt(r.type, o)),
        eh(e, t, r, o, n)
      );
    case 15:
      return fy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Ls(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), oa(t)) : (e = !1),
        Wr(t, n),
        ly(t, r, o),
        xc(t, r, o, n),
        Oc(null, t, r, !0, e, n)
      );
    case 19:
      return vy(e, t, n);
    case 22:
      return dy(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Iy(e, t) {
  return ig(e, t);
}
function wb(e, t, n, r) {
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
  return new wb(e, t, n, r);
}
function ad(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sb(e) {
  if (typeof e == "function") return ad(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kf)) return 11;
    if (e === Of) return 14;
  }
  return 2;
}
function _n(e, t) {
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
function Ms(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) ad(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Or:
        return tr(n.children, o, i, t);
      case $f:
        (s = 8), (o |= 8);
        break;
      case Qu:
        return (
          (e = pt(12, n, t, o | 2)), (e.elementType = Qu), (e.lanes = i), e
        );
      case Yu:
        return (e = pt(13, n, t, o)), (e.elementType = Yu), (e.lanes = i), e;
      case Gu:
        return (e = pt(19, n, t, o)), (e.elementType = Gu), (e.lanes = i), e;
      case Uv:
        return Ka(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fv:
              s = 10;
              break e;
            case zv:
              s = 9;
              break e;
            case kf:
              s = 11;
              break e;
            case Of:
              s = 14;
              break e;
            case dn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function tr(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function Ka(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Uv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ru(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function ou(e, t, n) {
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
function bb(e, t, n, r, o) {
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
    (this.eventTimes = Dl(0)),
    (this.expirationTimes = Dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ld(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new bb(e, t, n, a, l)),
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
    Wf(i),
    e
  );
}
function Eb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ry(e) {
  if (!e) return An;
  e = e._reactInternals;
  e: {
    if (hr(e) !== e || e.tag !== 1) throw Error(C(170));
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
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Rg(e, n, t);
  }
  return t;
}
function Ay(e, t, n, r, o, i, s, a, l) {
  return (
    (e = ld(n, r, !0, e, o, i, s, a, l)),
    (e.context = Ry(null)),
    (n = e.current),
    (r = Re()),
    (o = Tn(n)),
    (i = Gt(r, o)),
    (i.callback = t ?? null),
    On(n, i, o),
    (e.current.lanes = o),
    Si(e, o, r),
    He(e, r),
    e
  );
}
function qa(e, t, n, r) {
  var o = t.current,
    i = Re(),
    s = Tn(o);
  return (
    (n = Ry(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Gt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = On(o, t, s)),
    e !== null && (kt(e, o, s, i), Rs(e, o, s)),
    s
  );
}
function ga(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ud(e, t) {
  dh(e, t), (e = e.alternate) && dh(e, t);
}
function Cb() {
  return null;
}
var jy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cd(e) {
  this._internalRoot = e;
}
Qa.prototype.render = cd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  qa(e, t, null, null);
};
Qa.prototype.unmount = cd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cr(function () {
      qa(null, e, null, null);
    }),
      (t[Zt] = null);
  }
};
function Qa(e) {
  this._internalRoot = e;
}
Qa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    hn.splice(n, 0, e), n === 0 && hg(e);
  }
};
function fd(e) {
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
function ph() {}
function xb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ga(s);
        i.call(u);
      };
    }
    var s = Ay(t, r, e, 0, null, !1, !1, "", ph);
    return (
      (e._reactRootContainer = s),
      (e[Zt] = s.current),
      ii(e.nodeType === 8 ? e.parentNode : e),
      cr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ga(l);
      a.call(u);
    };
  }
  var l = ld(e, 0, !1, null, null, !1, !1, "", ph);
  return (
    (e._reactRootContainer = l),
    (e[Zt] = l.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    cr(function () {
      qa(t, l, n, r);
    }),
    l
  );
}
function Ga(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = ga(s);
        a.call(l);
      };
    }
    qa(t, s, e, o);
  } else s = xb(n, t, e, o, r);
  return ga(s);
}
cg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jo(t.pendingLanes);
        n !== 0 &&
          (_f(t, n | 1), He(t, ie()), !(H & 6) && ((to = ie() + 500), Dn()));
      }
      break;
    case 13:
      cr(function () {
        var r = en(e, 1);
        if (r !== null) {
          var o = Re();
          kt(r, e, 1, o);
        }
      }),
        ud(e, 1);
  }
};
Nf = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Re();
      kt(t, e, 134217728, n);
    }
    ud(e, 134217728);
  }
};
fg = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Re();
      kt(n, e, t, r);
    }
    ud(e, t);
  }
};
dg = function () {
  return K;
};
pg = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
sc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Fa(r);
            if (!o) throw Error(C(90));
            Hv(r), Zu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Kv(e, n);
      break;
    case "select":
      (t = n.value), t != null && zr(e, !!n.multiple, t, !1);
  }
};
Zv = od;
eg = cr;
var $b = { usingClientEntryPoint: !1, Events: [Ei, Nr, Fa, Jv, Xv, od] },
  Oo = {
    findFiberByHostInstance: Jn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kb = {
    bundleType: Oo.bundleType,
    version: Oo.version,
    rendererPackageName: Oo.rendererPackageName,
    rendererConfig: Oo.rendererConfig,
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
      return (e = rg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Oo.findFiberByHostInstance || Cb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ds.isDisabled && ds.supportsFiber)
    try {
      (La = ds.inject(kb)), (Dt = ds);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $b;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fd(t)) throw Error(C(200));
  return Eb(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!fd(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = jy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ld(e, 1, !1, null, null, n, !1, r, o)),
    (e[Zt] = t.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    new cd(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = rg(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return cr(e);
};
rt.hydrate = function (e, t, n) {
  if (!Ya(t)) throw Error(C(200));
  return Ga(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!fd(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = jy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ay(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Zt] = t.current),
    ii(e),
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
  if (!Ya(t)) throw Error(C(200));
  return Ga(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!Ya(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (cr(function () {
        Ga(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Zt] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = od;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ya(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ga(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function Ly() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly);
    } catch (e) {
      console.error(e);
    }
}
Ly(), (Lv.exports = rt);
var Ob = Lv.exports,
  By,
  hh = Ob;
(By = hh.createRoot), hh.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hi() {
  return (
    (hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hi.apply(this, arguments)
  );
}
var Sn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Sn || (Sn = {}));
const mh = "popstate";
function Pb(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Mc(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : My(o);
  }
  return _b(t, n, null, e);
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Dy(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tb() {
  return Math.random().toString(36).substr(2, 8);
}
function vh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    hi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? po(t) : t,
      { state: n, key: (t && t.key) || r || Tb() }
    )
  );
}
function My(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function po(e) {
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
function _b(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Sn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(hi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Sn.Pop;
    let E = c(),
      h = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: y.location, delta: h });
  }
  function d(E, h) {
    a = Sn.Push;
    let p = Mc(y.location, E, h);
    u = c() + 1;
    let v = vh(p, u),
      b = y.createHref(p);
    try {
      s.pushState(v, "", b);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      o.location.assign(b);
    }
    i && l && l({ action: a, location: y.location, delta: 1 });
  }
  function m(E, h) {
    a = Sn.Replace;
    let p = Mc(y.location, E, h);
    u = c();
    let v = vh(p, u),
      b = y.createHref(p);
    s.replaceState(v, "", b),
      i && l && l({ action: a, location: y.location, delta: 0 });
  }
  function g(E) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof E == "string" ? E : My(E);
    return (
      (p = p.replace(/ $/, "%20")),
      fe(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
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
        o.addEventListener(mh, f),
        (l = E),
        () => {
          o.removeEventListener(mh, f), (l = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: g,
    encodeLocation(E) {
      let h = g(E);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: m,
    go(E) {
      return s.go(E);
    },
  };
  return y;
}
var gh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(gh || (gh = {}));
function Nb(e, t, n) {
  return n === void 0 && (n = "/"), Ib(e, t, n, !1);
}
function Ib(e, t, n, r) {
  let o = typeof t == "string" ? po(t) : t,
    i = Uy(o.pathname || "/", n);
  if (i == null) return null;
  let s = Fy(e);
  Rb(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Hb(i);
    a = Ub(s[l], u, r);
  }
  return a;
}
function Fy(e, t, n, r) {
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
    let u = nr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (fe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Fy(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Fb(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of zy(i.path)) o(i, s, l);
    }),
    t
  );
}
function zy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = zy(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Rb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ab = /^:[\w-]+$/,
  jb = 3,
  Lb = 2,
  Bb = 1,
  Db = 10,
  Mb = -2,
  yh = (e) => e === "*";
function Fb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(yh) && (r += Mb),
    t && (r += Lb),
    n
      .filter((o) => !yh(o))
      .reduce((o, i) => o + (Ab.test(i) ? jb : i === "" ? Bb : Db), r)
  );
}
function zb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ub(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = wh(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = wh(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: nr([i, f.pathname]),
        pathnameBase: Qb(nr([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = nr([i, f.pathnameBase]));
  }
  return s;
}
function wh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vb(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: m } = c;
      if (d === "*") {
        let y = a[f] || "";
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[f];
      return (
        m && !g ? (u[d] = void 0) : (u[d] = (g || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Vb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Dy(
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
function Hb(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Dy(
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
function Uy(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? po(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Kb(n, t)) : t,
    search: Yb(r),
    hash: Gb(o),
  };
}
function Kb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function iu(e, t, n, r) {
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
function qb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vy(e, t) {
  let n = qb(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Hy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = po(e))
    : ((o = hi({}, e)),
      fe(
        !o.pathname || !o.pathname.includes("?"),
        iu("?", "pathname", "search", o)
      ),
      fe(
        !o.pathname || !o.pathname.includes("#"),
        iu("#", "pathname", "hash", o)
      ),
      fe(!o.search || !o.search.includes("#"), iu("#", "search", "hash", o)));
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
  let l = Wb(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const nr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Qb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Gb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Wy = ["post", "put", "patch", "delete"];
new Set(Wy);
const Xb = ["get", ...Wy];
new Set(Xb);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(this, arguments)
  );
}
const dd = S.createContext(null),
  Zb = S.createContext(null),
  xi = S.createContext(null),
  Ja = S.createContext(null),
  Mn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ky = S.createContext(null);
function $i() {
  return S.useContext(Ja) != null;
}
function Xa() {
  return $i() || fe(!1), S.useContext(Ja).location;
}
function qy(e) {
  S.useContext(xi).static || S.useLayoutEffect(e);
}
function pd() {
  let { isDataRoute: e } = S.useContext(Mn);
  return e ? pE() : eE();
}
function eE() {
  $i() || fe(!1);
  let e = S.useContext(dd),
    { basename: t, future: n, navigator: r } = S.useContext(xi),
    { matches: o } = S.useContext(Mn),
    { pathname: i } = Xa(),
    s = JSON.stringify(Vy(o, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    qy(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Hy(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : nr([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function tE() {
  let { matches: e } = S.useContext(Mn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function nE(e, t) {
  return rE(e, t);
}
function rE(e, t, n, r) {
  $i() || fe(!1);
  let { navigator: o } = S.useContext(xi),
    { matches: i } = S.useContext(Mn),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Xa(),
    c;
  if (t) {
    var f;
    let E = typeof t == "string" ? po(t) : t;
    l === "/" || ((f = E.pathname) != null && f.startsWith(l)) || fe(!1),
      (c = E);
  } else c = u;
  let d = c.pathname || "/",
    m = d;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    m = "/" + d.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let g = Nb(e, { pathname: m }),
    y = lE(
      g &&
        g.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: nr([
              l,
              o.encodeLocation
                ? o.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : nr([
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
    ? S.createElement(
        Ja.Provider,
        {
          value: {
            location: mi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Sn.Pop,
          },
        },
        y
      )
    : y;
}
function oE() {
  let e = dE(),
    t = Jb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    null
  );
}
const iE = S.createElement(oE, null);
class sE extends S.Component {
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
      ? S.createElement(
          Mn.Provider,
          { value: this.props.routeContext },
          S.createElement(Ky.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function aE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(dd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Mn.Provider, { value: t }, r)
  );
}
function lE(e, t, n, r) {
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
        let { loaderData: d, errors: m } = n,
          g =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || g) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let m,
      g = !1,
      y = null,
      E = null;
    n &&
      ((m = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || iE),
      l &&
        (u < 0 && d === 0
          ? ((g = !0), (E = null))
          : u === d &&
            ((g = !0), (E = f.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, d + 1)),
      p = () => {
        let v;
        return (
          m
            ? (v = y)
            : g
            ? (v = E)
            : f.route.Component
            ? (v = S.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = c),
          S.createElement(aE, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? S.createElement(sE, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: m,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Qy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qy || {}),
  ya = (function (e) {
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
  })(ya || {});
function uE(e) {
  let t = S.useContext(dd);
  return t || fe(!1), t;
}
function cE(e) {
  let t = S.useContext(Zb);
  return t || fe(!1), t;
}
function fE(e) {
  let t = S.useContext(Mn);
  return t || fe(!1), t;
}
function Yy(e) {
  let t = fE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || fe(!1), n.route.id;
}
function dE() {
  var e;
  let t = S.useContext(Ky),
    n = cE(ya.UseRouteError),
    r = Yy(ya.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function pE() {
  let { router: e } = uE(Qy.UseNavigateStable),
    t = Yy(ya.UseNavigateStable),
    n = S.useRef(!1);
  return (
    qy(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, mi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function hE(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  $i() || fe(!1);
  let { future: i, static: s } = S.useContext(xi),
    { matches: a } = S.useContext(Mn),
    { pathname: l } = Xa(),
    u = pd(),
    c = Hy(t, Vy(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(c);
  return (
    S.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r]
    ),
    null
  );
}
function Fc(e) {
  fe(!1);
}
function mE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Sn.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  $i() && fe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: mi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = po(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: m = null,
      key: g = "default",
    } = r,
    y = S.useMemo(() => {
      let E = Uy(c, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: d, state: m, key: g },
            navigationType: o,
          };
    }, [l, c, f, d, m, g, o]);
  return y == null
    ? null
    : S.createElement(
        xi.Provider,
        { value: u },
        S.createElement(Ja.Provider, { children: n, value: y })
      );
}
function vE(e) {
  let { children: t, location: n } = e;
  return nE(zc(t), n);
}
new Promise(() => {});
function zc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, zc(r.props.children, i));
        return;
      }
      r.type !== Fc && fe(!1), !r.props.index || !r.props.children || fe(!1);
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
      r.props.children && (s.children = zc(r.props.children, i)), n.push(s);
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
 */ const gE = "6";
try {
  window.__reactRouterVersion = gE;
} catch {}
const yE = "startTransition",
  Sh = v2[yE];
function wE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = Pb({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (f) => {
        u && Sh ? Sh(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.createElement(mE, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var bh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(bh || (bh = {}));
var Eh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Eh || (Eh = {}));
var Ce = [];
for (var su = 0; su < 256; ++su) Ce.push((su + 256).toString(16).slice(1));
function SE(e, t = 0) {
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
var ps,
  bE = new Uint8Array(16);
function EE() {
  if (
    !ps &&
    ((ps =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !ps)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return ps(bE);
}
var CE =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ch = { randomUUID: CE };
function xE(e, t, n) {
  if (Ch.randomUUID && !t && !e) return Ch.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || EE)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), SE(r);
}
let $E = { data: "" },
  kE = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || $E,
  OE = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  PE = /\/\*[^]*?\*\/|  +/g,
  xh = /\n+/g,
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
  Gy = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Gy(e[n]);
      return t;
    }
    return e;
  },
  TE = (e, t, n, r, o) => {
    let i = Gy(e),
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
              for (; (c = OE.exec(u.replace(PE, ""))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(xh, " ").trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(xh, " ").trim());
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
  _E = (e, t, n) =>
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
function Za(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return TE(
    n.unshift
      ? n.raw
        ? _E(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    kE(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Jy, Uc, Vc;
Za.bind({ g: 1 });
let nn = Za.bind({ k: 1 });
function NE(e, t, n, r) {
  (vn.p = t), (Jy = e), (Uc = n), (Vc = r);
}
function Fn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, s) {
      let a = Object.assign({}, i),
        l = a.className || o.className;
      (n.p = Object.assign({ theme: Uc && Uc() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = Za.apply(n, r) + (l ? " " + l : ""));
      let u = e;
      return (
        e[0] && ((u = a.as || e), delete a.as), Vc && u[0] && Vc(a), Jy(u, a)
      );
    }
    return o;
  };
}
var IE = (e) => typeof e == "function",
  wa = (e, t) => (IE(e) ? e(t) : e),
  RE = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Xy = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  AE = 20,
  Fs = new Map(),
  jE = 1e3,
  $h = (e) => {
    if (Fs.has(e)) return;
    let t = setTimeout(() => {
      Fs.delete(e), mr({ type: 4, toastId: e });
    }, jE);
    Fs.set(e, t);
  },
  LE = (e) => {
    let t = Fs.get(e);
    t && clearTimeout(t);
  },
  Hc = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, AE) };
      case 1:
        return (
          t.toast.id && LE(t.toast.id),
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
          ? Hc(e, { type: 1, toast: n })
          : Hc(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? $h(r)
            : e.toasts.forEach((i) => {
                $h(i.id);
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
  zs = [],
  Us = { toasts: [], pausedAt: void 0 },
  mr = (e) => {
    (Us = Hc(Us, e)),
      zs.forEach((t) => {
        t(Us);
      });
  },
  BE = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  DE = (e = {}) => {
    let [t, n] = S.useState(Us);
    S.useEffect(
      () => (
        zs.push(n),
        () => {
          let o = zs.indexOf(n);
          o > -1 && zs.splice(o, 1);
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
          BE[o.type],
        style: {
          ...e.style,
          ...((s = e[o.type]) == null ? void 0 : s.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  ME = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || RE(),
  }),
  ki = (e) => (t, n) => {
    let r = ME(t, e, n);
    return mr({ type: 2, toast: r }), r.id;
  },
  Ze = (e, t) => ki("blank")(e, t);
Ze.error = ki("error");
Ze.success = ki("success");
Ze.loading = ki("loading");
Ze.custom = ki("custom");
Ze.dismiss = (e) => {
  mr({ type: 3, toastId: e });
};
Ze.remove = (e) => mr({ type: 4, toastId: e });
Ze.promise = (e, t, n) => {
  let r = Ze.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (o) => (
          Ze.success(wa(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          o
        )
      )
      .catch((o) => {
        Ze.error(wa(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var FE = (e, t) => {
    mr({ type: 1, toast: { id: e, height: t } });
  },
  zE = () => {
    mr({ type: 5, time: Date.now() });
  },
  UE = (e) => {
    let { toasts: t, pausedAt: n } = DE(e);
    S.useEffect(() => {
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
    let r = S.useCallback(() => {
        n && mr({ type: 6, time: Date.now() });
      }, [n]),
      o = S.useCallback(
        (i, s) => {
          let {
              reverseOrder: a = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = s || {},
            c = t.filter(
              (m) => (m.position || u) === (i.position || u) && m.height
            ),
            f = c.findIndex((m) => m.id === i.id),
            d = c.filter((m, g) => g < f && m.visible).length;
          return c
            .filter((m) => m.visible)
            .slice(...(a ? [d + 1] : [0, d]))
            .reduce((m, g) => m + (g.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: FE,
        startPause: zE,
        endPause: r,
        calculateOffset: o,
      },
    };
  },
  VE = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  HE = nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  WE = nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  KE = Fn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${VE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${HE} 0.15s ease-out forwards;
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
    animation: ${WE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  qE = nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  QE = Fn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${qE} 1s linear infinite;
`,
  YE = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  GE = nn`
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
  JE = Fn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${YE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${GE} 0.2s ease-out forwards;
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
  XE = Fn("div")`
  position: absolute;
`,
  ZE = Fn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  eC = nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  tC = Fn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  nC = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? S.createElement(tC, null, t)
        : t
      : n === "blank"
      ? null
      : S.createElement(
          ZE,
          null,
          S.createElement(QE, { ...r }),
          n !== "loading" &&
            S.createElement(
              XE,
              null,
              n === "error"
                ? S.createElement(KE, { ...r })
                : S.createElement(JE, { ...r })
            )
        );
  },
  rC = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  oC = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  iC = "0%{opacity:0;} 100%{opacity:1;}",
  sC = "0%{opacity:1;} 100%{opacity:0;}",
  aC = Fn("div")`
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
  lC = Fn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  uC = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = Xy() ? [iC, sC] : [rC(n), oC(n)];
    return {
      animation: t
        ? `${nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${nn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  cC = S.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? uC(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = S.createElement(nC, { toast: e }),
      s = S.createElement(lC, { ...e.ariaProps }, wa(e.message, e));
    return S.createElement(
      aC,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: s })
        : S.createElement(S.Fragment, null, i, s)
    );
  });
NE(S.createElement);
var fC = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = S.useCallback(
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
    return S.createElement("div", { ref: i, className: t, style: n }, o);
  },
  dC = (e, t) => {
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
      transition: Xy() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  pC = Za`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  hs = 16,
  hC = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: s,
  }) => {
    let { toasts: a, handlers: l } = UE(n);
    return S.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: hs,
          left: hs,
          right: hs,
          bottom: hs,
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
          d = dC(c, f);
        return S.createElement(
          fC,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? pC : "",
            style: d,
          },
          u.type === "custom"
            ? wa(u.message, u)
            : o
            ? o(u)
            : S.createElement(cC, { toast: u, position: c })
        );
      })
    );
  },
  Dr = Ze;
const mC = () => {
  const [e, t] = S.useState(""),
    [n, r] = S.useState(""),
    o = pd(),
    i = (l) => {
      l.preventDefault();
      const u = xE();
      console.log(u), t(u), Dr.success("Created a new Room");
    },
    s = () => {
      if (!e || !n) {
        Dr.error("ROOM ID & UserName is required");
        return;
      }
      o(`/editor/${e}`, { state: { userName: n } });
    },
    a = (l) => {
      l.code === "Enter" && s();
    };
  return I.jsx("div", {
    children: I.jsxs("div", {
      className: "homepageWrapper",
      children: [
        I.jsxs("div", {
          className: "formWrapper",
          children: [
            I.jsx("img", { src: "/code-editor-logo.png", alt: "logo" }),
            I.jsx("h4", {
              className: "mainLabel",
              children: "Paste invitation ROOM ID",
            }),
            I.jsxs("div", {
              className: "inputGroup",
              children: [
                I.jsx("input", {
                  type: "text",
                  className: "inputBox",
                  placeholder: "ROOM ID",
                  value: e,
                  onChange: (l) => t(l.target.value),
                  onKeyUp: (l) => a(l),
                }),
                I.jsx("input", {
                  type: "text",
                  className: "inputBox",
                  placeholder: "User Name",
                  value: n,
                  onChange: (l) => r(l.target.value),
                  onKeyUp: (l) => a(l),
                }),
                I.jsx("button", {
                  className: "btn joinBtn",
                  onClick: s,
                  children: "JOIN",
                }),
                I.jsxs("span", {
                  className: "createInfo",
                  children: [
                    "Of you dont have an invite then create  ",
                    I.jsx("a", {
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
        I.jsx("footer", {
          children: I.jsxs("h4", {
            children: [
              "Build with 💜 by",
              " ",
              I.jsx("a", {
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
function no() {
  return (
    (no = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    no.apply(null, arguments)
  );
}
var Po = function (e) {
    return e && e.Math === Math && e;
  },
  Le =
    Po(typeof globalThis == "object" && globalThis) ||
    Po(typeof window == "object" && window) ||
    Po(typeof self == "object" && self) ||
    Po(typeof Yi == "object" && Yi) ||
    Po(typeof Yi == "object" && Yi) ||
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
  vC = se,
  Oi = !vC(function () {
    var e = function () {}.bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }),
  gC = Oi,
  Zy = Function.prototype,
  kh = Zy.apply,
  Oh = Zy.call,
  el =
    (typeof Reflect == "object" && Reflect.apply) ||
    (gC
      ? Oh.bind(kh)
      : function () {
          return Oh.apply(kh, arguments);
        }),
  ew = Oi,
  tw = Function.prototype,
  Wc = tw.call,
  yC = ew && tw.bind.bind(Wc, Wc),
  ae = ew
    ? yC
    : function (e) {
        return function () {
          return Wc.apply(e, arguments);
        };
      },
  nw = ae,
  wC = nw({}.toString),
  SC = nw("".slice),
  zn = function (e) {
    return SC(wC(e), 8, -1);
  },
  bC = zn,
  EC = ae,
  rw = function (e) {
    if (bC(e) === "Function") return EC(e);
  },
  au = typeof document == "object" && document.all,
  it =
    typeof au > "u" && au !== void 0
      ? function (e) {
          return typeof e == "function" || e === au;
        }
      : function (e) {
          return typeof e == "function";
        },
  Pi = {},
  CC = se,
  st = !CC(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] !== 7
    );
  }),
  xC = Oi,
  ms = Function.prototype.call,
  Un = xC
    ? ms.bind(ms)
    : function () {
        return ms.apply(ms, arguments);
      },
  tl = {},
  ow = {}.propertyIsEnumerable,
  iw = Object.getOwnPropertyDescriptor,
  $C = iw && !ow.call({ 1: 2 }, 1);
tl.f = $C
  ? function (t) {
      var n = iw(this, t);
      return !!n && n.enumerable;
    }
  : ow;
var nl = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t,
    };
  },
  kC = ae,
  OC = se,
  PC = zn,
  lu = Object,
  TC = kC("".split),
  rl = OC(function () {
    return !lu("z").propertyIsEnumerable(0);
  })
    ? function (e) {
        return PC(e) === "String" ? TC(e, "") : lu(e);
      }
    : lu,
  sw = function (e) {
    return e == null;
  },
  _C = sw,
  NC = TypeError,
  Ti = function (e) {
    if (_C(e)) throw new NC("Can't call method on " + e);
    return e;
  },
  IC = rl,
  RC = Ti,
  sn = function (e) {
    return IC(RC(e));
  },
  AC = it,
  Ht = function (e) {
    return typeof e == "object" ? e !== null : AC(e);
  },
  Ke = {},
  uu = Ke,
  cu = Le,
  jC = it,
  Ph = function (e) {
    return jC(e) ? e : void 0;
  },
  Vn = function (e, t) {
    return arguments.length < 2
      ? Ph(uu[e]) || Ph(cu[e])
      : (uu[e] && uu[e][t]) || (cu[e] && cu[e][t]);
  },
  LC = ae,
  vr = LC({}.isPrototypeOf),
  BC = Le,
  Th = BC.navigator,
  _h = Th && Th.userAgent,
  aw = _h ? String(_h) : "",
  lw = Le,
  fu = aw,
  Nh = lw.process,
  Ih = lw.Deno,
  Rh = (Nh && Nh.versions) || (Ih && Ih.version),
  Ah = Rh && Rh.v8,
  Ct,
  Sa;
Ah &&
  ((Ct = Ah.split(".")), (Sa = Ct[0] > 0 && Ct[0] < 4 ? 1 : +(Ct[0] + Ct[1])));
!Sa &&
  fu &&
  ((Ct = fu.match(/Edge\/(\d+)/)),
  (!Ct || Ct[1] >= 74) &&
    ((Ct = fu.match(/Chrome\/(\d+)/)), Ct && (Sa = +Ct[1])));
var ol = Sa,
  jh = ol,
  DC = se,
  MC = Le,
  FC = MC.String,
  ho =
    !!Object.getOwnPropertySymbols &&
    !DC(function () {
      var e = Symbol("symbol detection");
      return (
        !FC(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && jh && jh < 41)
      );
    }),
  zC = ho,
  uw = zC && !Symbol.sham && typeof Symbol.iterator == "symbol",
  UC = Vn,
  VC = it,
  HC = vr,
  WC = uw,
  KC = Object,
  il = WC
    ? function (e) {
        return typeof e == "symbol";
      }
    : function (e) {
        var t = UC("Symbol");
        return VC(t) && HC(t.prototype, KC(e));
      },
  qC = String,
  hd = function (e) {
    try {
      return qC(e);
    } catch {
      return "Object";
    }
  },
  QC = it,
  YC = hd,
  GC = TypeError,
  sl = function (e) {
    if (QC(e)) return e;
    throw new GC(YC(e) + " is not a function");
  },
  JC = sl,
  XC = sw,
  ZC = function (e, t) {
    var n = e[t];
    return XC(n) ? void 0 : JC(n);
  },
  du = Un,
  pu = it,
  hu = Ht,
  ex = TypeError,
  tx = function (e, t) {
    var n, r;
    if (
      (t === "string" && pu((n = e.toString)) && !hu((r = du(n, e)))) ||
      (pu((n = e.valueOf)) && !hu((r = du(n, e)))) ||
      (t !== "string" && pu((n = e.toString)) && !hu((r = du(n, e))))
    )
      return r;
    throw new ex("Can't convert object to primitive value");
  },
  cw = { exports: {} },
  Lh = Le,
  nx = Object.defineProperty,
  rx = function (e, t) {
    try {
      nx(Lh, e, { value: t, configurable: !0, writable: !0 });
    } catch {
      Lh[e] = t;
    }
    return t;
  },
  ox = Le,
  ix = rx,
  Bh = "__core-js_shared__",
  Dh = (cw.exports = ox[Bh] || ix(Bh, {}));
(Dh.versions || (Dh.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var md = cw.exports,
  Mh = md,
  _i = function (e, t) {
    return Mh[e] || (Mh[e] = t || {});
  },
  sx = Ti,
  ax = Object,
  Hn = function (e) {
    return ax(sx(e));
  },
  lx = ae,
  ux = Hn,
  cx = lx({}.hasOwnProperty),
  Pt =
    Object.hasOwn ||
    function (t, n) {
      return cx(ux(t), n);
    },
  fx = ae,
  dx = 0,
  px = Math.random(),
  hx = fx((1).toString),
  vd = function (e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + hx(++dx + px, 36);
  },
  mx = Le,
  vx = _i,
  Fh = Pt,
  gx = vd,
  yx = ho,
  wx = uw,
  Mr = mx.Symbol,
  mu = vx("wks"),
  Sx = wx ? Mr.for || Mr : (Mr && Mr.withoutSetter) || gx,
  Tt = function (e) {
    return (
      Fh(mu, e) || (mu[e] = yx && Fh(Mr, e) ? Mr[e] : Sx("Symbol." + e)), mu[e]
    );
  },
  bx = Un,
  zh = Ht,
  Uh = il,
  Ex = ZC,
  Cx = tx,
  xx = Tt,
  $x = TypeError,
  kx = xx("toPrimitive"),
  fw = function (e, t) {
    if (!zh(e) || Uh(e)) return e;
    var n = Ex(e, kx),
      r;
    if (n) {
      if ((t === void 0 && (t = "default"), (r = bx(n, e, t)), !zh(r) || Uh(r)))
        return r;
      throw new $x("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), Cx(e, t);
  },
  Ox = fw,
  Px = il,
  gd = function (e) {
    var t = Ox(e, "string");
    return Px(t) ? t : t + "";
  },
  Tx = Le,
  Vh = Ht,
  Kc = Tx.document,
  _x = Vh(Kc) && Vh(Kc.createElement),
  dw = function (e) {
    return _x ? Kc.createElement(e) : {};
  },
  Nx = st,
  Ix = se,
  Rx = dw,
  pw =
    !Nx &&
    !Ix(function () {
      return (
        Object.defineProperty(Rx("div"), "a", {
          get: function () {
            return 7;
          },
        }).a !== 7
      );
    }),
  Ax = st,
  jx = Un,
  Lx = tl,
  Bx = nl,
  Dx = sn,
  Mx = gd,
  Fx = Pt,
  zx = pw,
  Hh = Object.getOwnPropertyDescriptor;
Pi.f = Ax
  ? Hh
  : function (t, n) {
      if (((t = Dx(t)), (n = Mx(n)), zx))
        try {
          return Hh(t, n);
        } catch {}
      if (Fx(t, n)) return Bx(!jx(Lx.f, t, n), t[n]);
    };
var Ux = se,
  Vx = it,
  Hx = /#|\.prototype\./,
  Ni = function (e, t) {
    var n = Kx[Wx(e)];
    return n === Qx ? !0 : n === qx ? !1 : Vx(t) ? Ux(t) : !!t;
  },
  Wx = (Ni.normalize = function (e) {
    return String(e).replace(Hx, ".").toLowerCase();
  }),
  Kx = (Ni.data = {}),
  qx = (Ni.NATIVE = "N"),
  Qx = (Ni.POLYFILL = "P"),
  Yx = Ni,
  Wh = rw,
  Gx = sl,
  Jx = Oi,
  Xx = Wh(Wh.bind),
  hw = function (e, t) {
    return (
      Gx(e),
      t === void 0
        ? e
        : Jx
        ? Xx(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  an = {},
  Zx = st,
  e$ = se,
  mw =
    Zx &&
    e$(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype !== 42
      );
    }),
  t$ = Ht,
  n$ = String,
  r$ = TypeError,
  mo = function (e) {
    if (t$(e)) return e;
    throw new r$(n$(e) + " is not an object");
  },
  o$ = st,
  i$ = pw,
  s$ = mw,
  vs = mo,
  Kh = gd,
  a$ = TypeError,
  vu = Object.defineProperty,
  l$ = Object.getOwnPropertyDescriptor,
  gu = "enumerable",
  yu = "configurable",
  wu = "writable";
an.f = o$
  ? s$
    ? function (t, n, r) {
        if (
          (vs(t),
          (n = Kh(n)),
          vs(r),
          typeof t == "function" &&
            n === "prototype" &&
            "value" in r &&
            wu in r &&
            !r[wu])
        ) {
          var o = l$(t, n);
          o &&
            o[wu] &&
            ((t[n] = r.value),
            (r = {
              configurable: yu in r ? r[yu] : o[yu],
              enumerable: gu in r ? r[gu] : o[gu],
              writable: !1,
            }));
        }
        return vu(t, n, r);
      }
    : vu
  : function (t, n, r) {
      if ((vs(t), (n = Kh(n)), vs(r), i$))
        try {
          return vu(t, n, r);
        } catch {}
      if ("get" in r || "set" in r) throw new a$("Accessors not supported");
      return "value" in r && (t[n] = r.value), t;
    };
var u$ = st,
  c$ = an,
  f$ = nl,
  al = u$
    ? function (e, t, n) {
        return c$.f(e, t, f$(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  To = Le,
  d$ = el,
  p$ = rw,
  h$ = it,
  m$ = Pi.f,
  v$ = Yx,
  br = Ke,
  g$ = hw,
  Er = al,
  qh = Pt,
  y$ = function (e) {
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
      return d$(e, this, arguments);
    };
    return (t.prototype = e.prototype), t;
  },
  ve = function (e, t) {
    var n = e.target,
      r = e.global,
      o = e.stat,
      i = e.proto,
      s = r ? To : o ? To[n] : To[n] && To[n].prototype,
      a = r ? br : br[n] || Er(br, n, {})[n],
      l = a.prototype,
      u,
      c,
      f,
      d,
      m,
      g,
      y,
      E,
      h;
    for (d in t)
      (u = v$(r ? d : n + (o ? "." : "#") + d, e.forced)),
        (c = !u && s && qh(s, d)),
        (g = a[d]),
        c &&
          (e.dontCallGetSet
            ? ((h = m$(s, d)), (y = h && h.value))
            : (y = s[d])),
        (m = c && y ? y : t[d]),
        !(!u && !i && typeof g == typeof m) &&
          (e.bind && c
            ? (E = g$(m, To))
            : e.wrap && c
            ? (E = y$(m))
            : i && h$(m)
            ? (E = p$(m))
            : (E = m),
          (e.sham || (m && m.sham) || (g && g.sham)) && Er(E, "sham", !0),
          Er(a, d, E),
          i &&
            ((f = n + "Prototype"),
            qh(br, f) || Er(br, f, {}),
            Er(br[f], d, m),
            e.real && l && (u || !l[d]) && Er(l, d, m)));
  },
  w$ = Math.ceil,
  S$ = Math.floor,
  b$ =
    Math.trunc ||
    function (t) {
      var n = +t;
      return (n > 0 ? S$ : w$)(n);
    },
  E$ = b$,
  yd = function (e) {
    var t = +e;
    return t !== t || t === 0 ? 0 : E$(t);
  },
  C$ = yd,
  x$ = Math.max,
  $$ = Math.min,
  vw = function (e, t) {
    var n = C$(e);
    return n < 0 ? x$(n + t, 0) : $$(n, t);
  },
  k$ = yd,
  O$ = Math.min,
  gw = function (e) {
    var t = k$(e);
    return t > 0 ? O$(t, 9007199254740991) : 0;
  },
  P$ = gw,
  Ii = function (e) {
    return P$(e.length);
  },
  T$ = sn,
  _$ = vw,
  N$ = Ii,
  Qh = function (e) {
    return function (t, n, r) {
      var o = T$(t),
        i = N$(o);
      if (i === 0) return !e && -1;
      var s = _$(r, i),
        a;
      if (e && n !== n) {
        for (; i > s; ) if (((a = o[s++]), a !== a)) return !0;
      } else
        for (; i > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  I$ = { includes: Qh(!0), indexOf: Qh(!1) },
  ll = {},
  R$ = ae,
  Su = Pt,
  A$ = sn,
  j$ = I$.indexOf,
  L$ = ll,
  Yh = R$([].push),
  yw = function (e, t) {
    var n = A$(e),
      r = 0,
      o = [],
      i;
    for (i in n) !Su(L$, i) && Su(n, i) && Yh(o, i);
    for (; t.length > r; ) Su(n, (i = t[r++])) && (~j$(o, i) || Yh(o, i));
    return o;
  },
  wd = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  B$ = yw,
  D$ = wd,
  ul =
    Object.keys ||
    function (t) {
      return B$(t, D$);
    },
  Ri = {};
Ri.f = Object.getOwnPropertySymbols;
var Gh = st,
  M$ = ae,
  F$ = Un,
  z$ = se,
  bu = ul,
  U$ = Ri,
  V$ = tl,
  H$ = Hn,
  W$ = rl,
  Cr = Object.assign,
  Jh = Object.defineProperty,
  K$ = M$([].concat),
  q$ =
    !Cr ||
    z$(function () {
      if (
        Gh &&
        Cr(
          { b: 1 },
          Cr(
            Jh({}, "a", {
              enumerable: !0,
              get: function () {
                Jh(this, "b", { value: 3, enumerable: !1 });
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
        Cr({}, e)[n] !== 7 || bu(Cr({}, t)).join("") !== r
      );
    })
      ? function (t, n) {
          for (
            var r = H$(t), o = arguments.length, i = 1, s = U$.f, a = V$.f;
            o > i;

          )
            for (
              var l = W$(arguments[i++]),
                u = s ? K$(bu(l), s(l)) : bu(l),
                c = u.length,
                f = 0,
                d;
              c > f;

            )
              (d = u[f++]), (!Gh || F$(a, l, d)) && (r[d] = l[d]);
          return r;
        }
      : Cr,
  Q$ = ve,
  Xh = q$;
Q$(
  { target: "Object", stat: !0, arity: 2, forced: Object.assign !== Xh },
  { assign: Xh }
);
var Y$ = Ke,
  G$ = Y$.Object.assign,
  J$ = G$,
  X$ = J$;
const qc = me(X$);
function Be(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ro(e) {
  "@babel/helpers - typeof";
  return (
    (ro =
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
    ro(e)
  );
}
function Z$(e, t) {
  if (ro(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ro(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ww(e) {
  var t = Z$(e, "string");
  return ro(t) == "symbol" ? t : t + "";
}
function ek(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, ww(r.key), r);
  }
}
function De(e, t, n) {
  return (
    t && ek(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var tk = Tt,
  nk = tk("toStringTag"),
  Sw = {};
Sw[nk] = "z";
var Sd = String(Sw) === "[object z]",
  rk = Sd,
  ok = it,
  Vs = zn,
  ik = Tt,
  sk = ik("toStringTag"),
  ak = Object,
  lk =
    Vs(
      (function () {
        return arguments;
      })()
    ) === "Arguments",
  uk = function (e, t) {
    try {
      return e[t];
    } catch {}
  },
  bd = rk
    ? Vs
    : function (e) {
        var t, n, r;
        return e === void 0
          ? "Undefined"
          : e === null
          ? "Null"
          : typeof (n = uk((t = ak(e)), sk)) == "string"
          ? n
          : lk
          ? Vs(t)
          : (r = Vs(t)) === "Object" && ok(t.callee)
          ? "Arguments"
          : r;
      },
  ck = bd,
  fk = String,
  gr = function (e) {
    if (ck(e) === "Symbol")
      throw new TypeError("Cannot convert a Symbol value to a string");
    return fk(e);
  },
  dk = yd,
  pk = gr,
  hk = Ti,
  mk = RangeError,
  vk = function (t) {
    var n = pk(hk(this)),
      r = "",
      o = dk(t);
    if (o < 0 || o === 1 / 0) throw new mk("Wrong number of repetitions");
    for (; o > 0; (o >>>= 1) && (n += n)) o & 1 && (r += n);
    return r;
  },
  bw = ae,
  gk = gw,
  Zh = gr,
  yk = vk,
  wk = Ti,
  Sk = bw(yk),
  bk = bw("".slice),
  Ek = Math.ceil,
  em = function (e) {
    return function (t, n, r) {
      var o = Zh(wk(t)),
        i = gk(n),
        s = o.length,
        a = r === void 0 ? " " : Zh(r),
        l,
        u;
      return i <= s || a === ""
        ? o
        : ((l = i - s),
          (u = Sk(a, Ek(l / a.length))),
          u.length > l && (u = bk(u, 0, l)),
          e ? o + u : u + o);
    };
  },
  Ck = { start: em(!1), end: em(!0) },
  Wn = ae,
  tm = se,
  qn = Ck.start,
  xk = RangeError,
  $k = isFinite,
  kk = Math.abs,
  ln = Date.prototype,
  Eu = ln.toISOString,
  Ok = Wn(ln.getTime),
  Pk = Wn(ln.getUTCDate),
  Tk = Wn(ln.getUTCFullYear),
  _k = Wn(ln.getUTCHours),
  Nk = Wn(ln.getUTCMilliseconds),
  Ik = Wn(ln.getUTCMinutes),
  Rk = Wn(ln.getUTCMonth),
  Ak = Wn(ln.getUTCSeconds),
  jk =
    tm(function () {
      return Eu.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z";
    }) ||
    !tm(function () {
      Eu.call(new Date(NaN));
    })
      ? function () {
          if (!$k(Ok(this))) throw new xk("Invalid time value");
          var t = this,
            n = Tk(t),
            r = Nk(t),
            o = n < 0 ? "-" : n > 9999 ? "+" : "";
          return (
            o +
            qn(kk(n), o ? 6 : 4, 0) +
            "-" +
            qn(Rk(t) + 1, 2, 0) +
            "-" +
            qn(Pk(t), 2, 0) +
            "T" +
            qn(_k(t), 2, 0) +
            ":" +
            qn(Ik(t), 2, 0) +
            ":" +
            qn(Ak(t), 2, 0) +
            "." +
            qn(r, 3, 0) +
            "Z"
          );
        }
      : Eu,
  Lk = ve,
  Ew = Un,
  Bk = Hn,
  Dk = fw,
  Mk = jk,
  Fk = zn,
  zk = se,
  Uk = zk(function () {
    return (
      new Date(NaN).toJSON() !== null ||
      Ew(Date.prototype.toJSON, {
        toISOString: function () {
          return 1;
        },
      }) !== 1
    );
  });
Lk(
  { target: "Date", proto: !0, forced: Uk },
  {
    toJSON: function (t) {
      var n = Bk(this),
        r = Dk(n, "number");
      return typeof r == "number" && !isFinite(r)
        ? null
        : !("toISOString" in n) && Fk(n) === "Date"
        ? Ew(Mk, n)
        : n.toISOString();
    },
  }
);
var Vk = ae,
  cl = Vk([].slice),
  Hk = zn,
  fl =
    Array.isArray ||
    function (t) {
      return Hk(t) === "Array";
    },
  Wk = ae,
  nm = fl,
  Kk = it,
  rm = zn,
  qk = gr,
  om = Wk([].push),
  Qk = function (e) {
    if (Kk(e)) return e;
    if (nm(e)) {
      for (var t = e.length, n = [], r = 0; r < t; r++) {
        var o = e[r];
        typeof o == "string"
          ? om(n, o)
          : (typeof o == "number" ||
              rm(o) === "Number" ||
              rm(o) === "String") &&
            om(n, qk(o));
      }
      var i = n.length,
        s = !0;
      return function (a, l) {
        if (s) return (s = !1), l;
        if (nm(this)) return l;
        for (var u = 0; u < i; u++) if (n[u] === a) return l;
      };
    }
  },
  Yk = ve,
  Cw = Vn,
  xw = el,
  Gk = Un,
  Ai = ae,
  $w = se,
  im = it,
  sm = il,
  kw = cl,
  Jk = Qk,
  Xk = ho,
  Zk = String,
  Nn = Cw("JSON", "stringify"),
  gs = Ai(/./.exec),
  am = Ai("".charAt),
  eO = Ai("".charCodeAt),
  tO = Ai("".replace),
  nO = Ai((1).toString),
  rO = /[\uD800-\uDFFF]/g,
  lm = /^[\uD800-\uDBFF]$/,
  um = /^[\uDC00-\uDFFF]$/,
  cm =
    !Xk ||
    $w(function () {
      var e = Cw("Symbol")("stringify detection");
      return (
        Nn([e]) !== "[null]" || Nn({ a: e }) !== "{}" || Nn(Object(e)) !== "{}"
      );
    }),
  fm = $w(function () {
    return (
      Nn("\uDF06\uD834") !== '"\\udf06\\ud834"' || Nn("\uDEAD") !== '"\\udead"'
    );
  }),
  oO = function (e, t) {
    var n = kw(arguments),
      r = Jk(t);
    if (!(!im(r) && (e === void 0 || sm(e))))
      return (
        (n[1] = function (o, i) {
          if ((im(r) && (i = Gk(r, this, Zk(o), i)), !sm(i))) return i;
        }),
        xw(Nn, null, n)
      );
  },
  iO = function (e, t, n) {
    var r = am(n, t - 1),
      o = am(n, t + 1);
    return (gs(lm, e) && !gs(um, o)) || (gs(um, e) && !gs(lm, r))
      ? "\\u" + nO(eO(e, 0), 16)
      : e;
  };
Nn &&
  Yk(
    { target: "JSON", stat: !0, arity: 3, forced: cm || fm },
    {
      stringify: function (t, n, r) {
        var o = kw(arguments),
          i = xw(cm ? oO : Nn, null, o);
        return fm && typeof i == "string" ? tO(i, rO, iO) : i;
      },
    }
  );
var Qc = Ke,
  sO = el;
Qc.JSON || (Qc.JSON = { stringify: JSON.stringify });
var aO = function (t, n, r) {
    return sO(Qc.JSON.stringify, null, arguments);
  },
  lO = aO,
  uO = lO;
const cO = me(uO);
var fO = ae,
  dO = it,
  Yc = md,
  pO = fO(Function.toString);
dO(Yc.inspectSource) ||
  (Yc.inspectSource = function (e) {
    return pO(e);
  });
var hO = Yc.inspectSource,
  mO = ae,
  vO = se,
  Ow = it,
  gO = bd,
  yO = Vn,
  wO = hO,
  Pw = function () {},
  Tw = yO("Reflect", "construct"),
  Ed = /^\s*(?:class|function)\b/,
  SO = mO(Ed.exec),
  bO = !Ed.test(Pw),
  _o = function (t) {
    if (!Ow(t)) return !1;
    try {
      return Tw(Pw, [], t), !0;
    } catch {
      return !1;
    }
  },
  _w = function (t) {
    if (!Ow(t)) return !1;
    switch (gO(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return bO || !!SO(Ed, wO(t));
    } catch {
      return !0;
    }
  };
_w.sham = !0;
var Cd =
    !Tw ||
    vO(function () {
      var e;
      return (
        _o(_o.call) ||
        !_o(Object) ||
        !_o(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? _w
      : _o,
  dm = fl,
  EO = Cd,
  CO = Ht,
  xO = Tt,
  $O = xO("species"),
  pm = Array,
  kO = function (e) {
    var t;
    return (
      dm(e) &&
        ((t = e.constructor),
        EO(t) && (t === pm || dm(t.prototype))
          ? (t = void 0)
          : CO(t) && ((t = t[$O]), t === null && (t = void 0))),
      t === void 0 ? pm : t
    );
  },
  OO = kO,
  Nw = function (e, t) {
    return new (OO(e))(t === 0 ? 0 : t);
  },
  PO = hw,
  TO = ae,
  _O = rl,
  NO = Hn,
  IO = Ii,
  RO = Nw,
  hm = TO([].push),
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
        var d = NO(l),
          m = _O(d),
          g = IO(m),
          y = PO(u, c),
          E = 0,
          h = f || RO,
          p = t ? h(l, g) : n || s ? h(l, 0) : void 0,
          v,
          b;
        g > E;
        E++
      )
        if ((a || E in m) && ((v = m[E]), (b = y(v, E, d)), e))
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
                hm(p, v);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                hm(p, v);
            }
      return i ? -1 : r || o ? o : p;
    };
  },
  xd = {
    forEach: fn(0),
    map: fn(1),
    filter: fn(2),
    some: fn(3),
    every: fn(4),
    find: fn(5),
    findIndex: fn(6),
    filterReject: fn(7),
  },
  AO = se,
  jO = Tt,
  LO = ol,
  BO = jO("species"),
  dl = function (e) {
    return (
      LO >= 51 ||
      !AO(function () {
        var t = [],
          n = (t.constructor = {});
        return (
          (n[BO] = function () {
            return { foo: 1 };
          }),
          t[e](Boolean).foo !== 1
        );
      })
    );
  },
  DO = ve,
  MO = xd.filter,
  FO = dl,
  zO = FO("filter");
DO(
  { target: "Array", proto: !0, forced: !zO },
  {
    filter: function (t) {
      return MO(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var UO = Le,
  VO = Ke,
  ji = function (e, t) {
    var n = VO[e + "Prototype"],
      r = n && n[t];
    if (r) return r;
    var o = UO[e],
      i = o && o.prototype;
    return i && i[t];
  },
  HO = ji,
  WO = HO("Array", "filter"),
  KO = vr,
  qO = WO,
  Cu = Array.prototype,
  QO = function (e) {
    var t = e.filter;
    return e === Cu || (KO(Cu, e) && t === Cu.filter) ? qO : t;
  },
  YO = QO,
  GO = YO;
const pl = me(GO);
var JO = st,
  XO = an,
  ZO = nl,
  $d = function (e, t, n) {
    JO ? XO.f(e, t, ZO(0, n)) : (e[t] = n);
  },
  eP = ve,
  mm = fl,
  tP = Cd,
  nP = Ht,
  vm = vw,
  rP = Ii,
  oP = sn,
  iP = $d,
  sP = Tt,
  aP = dl,
  lP = cl,
  uP = aP("slice"),
  cP = sP("species"),
  xu = Array,
  fP = Math.max;
eP(
  { target: "Array", proto: !0, forced: !uP },
  {
    slice: function (t, n) {
      var r = oP(this),
        o = rP(r),
        i = vm(t, o),
        s = vm(n === void 0 ? o : n, o),
        a,
        l,
        u;
      if (
        mm(r) &&
        ((a = r.constructor),
        tP(a) && (a === xu || mm(a.prototype))
          ? (a = void 0)
          : nP(a) && ((a = a[cP]), a === null && (a = void 0)),
        a === xu || a === void 0)
      )
        return lP(r, i, s);
      for (
        l = new (a === void 0 ? xu : a)(fP(s - i, 0)), u = 0;
        i < s;
        i++, u++
      )
        i in r && iP(l, u, r[i]);
      return (l.length = u), l;
    },
  }
);
var dP = ji,
  pP = dP("Array", "slice"),
  hP = vr,
  mP = pP,
  $u = Array.prototype,
  vP = function (e) {
    var t = e.slice;
    return e === $u || (hP($u, e) && t === $u.slice) ? mP : t;
  },
  gP = vP,
  yP = gP;
const Iw = me(yP);
var wP = "react-avatar/",
  ku = "failing",
  gm = (function () {
    try {
      return "localStorage" in window && window.localStorage;
    } catch {
      return !1;
    }
  })(),
  ba = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Be(this, e);
      var n = t.cachePrefix,
        r = n === void 0 ? wP : n,
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
            if (gm) {
              r = cO(r);
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
            if (!gm) return null;
            var r = localStorage.getItem(this.cachePrefix + n);
            return r ? JSON.parse(r) : null;
          },
        },
        {
          key: "sourceFailed",
          value: function (n) {
            var r = this.get(ku) || [];
            return (
              (r = pl(r).call(r, function (o) {
                var i = o.expires > 0 && o.expires < Date.now(),
                  s = o === n || o.url == n;
                return !i && !s;
              })),
              r.unshift({ url: n, expires: Date.now() + this.sourceTTL }),
              (r = Iw(r).call(r, 0, this.sourceSize - 1)),
              this.set(ku, r)
            );
          },
        },
        {
          key: "hasSourceFailedBefore",
          value: function (n) {
            var r = this.get(ku) || [];
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
const SP = new ba();
var Rw = ae,
  bP = sl,
  EP = Ht,
  CP = Pt,
  ym = cl,
  xP = Oi,
  Aw = Function,
  $P = Rw([].concat),
  kP = Rw([].join),
  Ou = {},
  OP = function (e, t, n) {
    if (!CP(Ou, t)) {
      for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
      Ou[t] = Aw("C,a", "return new C(" + kP(r, ",") + ")");
    }
    return Ou[t](e, n);
  },
  PP = xP
    ? Aw.bind
    : function (t) {
        var n = bP(this),
          r = n.prototype,
          o = ym(arguments, 1),
          i = function () {
            var a = $P(o, ym(arguments));
            return this instanceof i ? OP(n, a.length, a) : n.apply(t, a);
          };
        return EP(r) && (i.prototype = r), i;
      },
  TP = Cd,
  _P = hd,
  NP = TypeError,
  IP = function (e) {
    if (TP(e)) return e;
    throw new NP(_P(e) + " is not a constructor");
  },
  hl = {},
  RP = st,
  AP = mw,
  jP = an,
  LP = mo,
  BP = sn,
  DP = ul;
hl.f =
  RP && !AP
    ? Object.defineProperties
    : function (t, n) {
        LP(t);
        for (var r = BP(n), o = DP(n), i = o.length, s = 0, a; i > s; )
          jP.f(t, (a = o[s++]), r[a]);
        return t;
      };
var MP = Vn,
  FP = MP("document", "documentElement"),
  zP = _i,
  UP = vd,
  wm = zP("keys"),
  kd = function (e) {
    return wm[e] || (wm[e] = UP(e));
  },
  VP = mo,
  HP = hl,
  Sm = wd,
  WP = ll,
  KP = FP,
  qP = dw,
  QP = kd,
  bm = ">",
  Em = "<",
  Gc = "prototype",
  Jc = "script",
  jw = QP("IE_PROTO"),
  Pu = function () {},
  Lw = function (e) {
    return Em + Jc + bm + e + Em + "/" + Jc + bm;
  },
  Cm = function (e) {
    e.write(Lw("")), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  YP = function () {
    var e = qP("iframe"),
      t = "java" + Jc + ":",
      n;
    return (
      (e.style.display = "none"),
      KP.appendChild(e),
      (e.src = String(t)),
      (n = e.contentWindow.document),
      n.open(),
      n.write(Lw("document.F=Object")),
      n.close(),
      n.F
    );
  },
  ys,
  Hs = function () {
    try {
      ys = new ActiveXObject("htmlfile");
    } catch {}
    Hs =
      typeof document < "u" ? (document.domain && ys ? Cm(ys) : YP()) : Cm(ys);
    for (var e = Sm.length; e--; ) delete Hs[Gc][Sm[e]];
    return Hs();
  };
WP[jw] = !0;
var Bw =
    Object.create ||
    function (t, n) {
      var r;
      return (
        t !== null
          ? ((Pu[Gc] = VP(t)), (r = new Pu()), (Pu[Gc] = null), (r[jw] = t))
          : (r = Hs()),
        n === void 0 ? r : HP.f(r, n)
      );
    },
  GP = ve,
  JP = Vn,
  Tu = el,
  XP = PP,
  xm = IP,
  ZP = mo,
  $m = Ht,
  eT = Bw,
  Dw = se,
  Od = JP("Reflect", "construct"),
  tT = Object.prototype,
  nT = [].push,
  Mw = Dw(function () {
    function e() {}
    return !(Od(function () {}, [], e) instanceof e);
  }),
  Fw = !Dw(function () {
    Od(function () {});
  }),
  km = Mw || Fw;
GP(
  { target: "Reflect", stat: !0, forced: km, sham: km },
  {
    construct: function (t, n) {
      xm(t), ZP(n);
      var r = arguments.length < 3 ? t : xm(arguments[2]);
      if (Fw && !Mw) return Od(t, n, r);
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
        return Tu(nT, o, n), new (Tu(XP, t, o))();
      }
      var i = r.prototype,
        s = eT($m(i) ? i : tT),
        a = Tu(t, s, n);
      return $m(a) ? a : s;
    },
  }
);
var rT = Ke,
  oT = rT.Reflect.construct,
  iT = oT,
  sT = iT;
const de = me(sT);
function Xc(e, t) {
  return (
    (Xc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Xc(e, t)
  );
}
function Li(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Xc(e, t);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Bi(e, t) {
  if (t && (ro(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ea(e);
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
    (t = ww(t)) in e
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
var aT = ve,
  lT = Hn,
  zw = ul,
  uT = se,
  cT = uT(function () {
    zw(1);
  });
aT(
  { target: "Object", stat: !0, forced: cT },
  {
    keys: function (t) {
      return zw(lT(t));
    },
  }
);
var fT = Ke,
  dT = fT.Object.keys,
  pT = dT,
  hT = pT;
const Pd = me(hT);
var Uw = { exports: {} },
  mT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  vT = mT,
  gT = vT;
function Vw() {}
function Hw() {}
Hw.resetWarningCache = Vw;
var yT = function () {
  function e(r, o, i, s, a, l) {
    if (l !== gT) {
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
    checkPropTypes: Hw,
    resetWarningCache: Vw,
  };
  return (n.PropTypes = n), n;
};
Uw.exports = yT();
var wT = Uw.exports;
const O = me(wT);
function ST(e) {
  if (Array.isArray(e)) return e;
}
function bT(e, t) {
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
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ww(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Zc(e, t)
        : void 0
    );
  }
}
function ET() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CT(e, t) {
  return ST(e) || bT(e, t) || Ww(e, t) || ET();
}
function xT(e) {
  if (Array.isArray(e)) return Zc(e);
}
function $T(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function kT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OT(e) {
  return xT(e) || $T(e) || Ww(e) || kT();
}
var PT = se,
  TT = function (e, t) {
    var n = [][e];
    return (
      !!n &&
      PT(function () {
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
  _T = ve,
  NT = xd.map,
  IT = dl,
  RT = IT("map");
_T(
  { target: "Array", proto: !0, forced: !RT },
  {
    map: function (t) {
      return NT(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var AT = ji,
  jT = AT("Array", "map"),
  LT = vr,
  BT = jT,
  _u = Array.prototype,
  DT = function (e) {
    var t = e.map;
    return e === _u || (LT(_u, e) && t === _u.map) ? BT : t;
  },
  MT = DT,
  FT = MT;
const Kw = me(FT);
var zT = sl,
  UT = Hn,
  VT = rl,
  HT = Ii,
  Om = TypeError,
  Pm = "Reduce of empty array with no initial value",
  Tm = function (e) {
    return function (t, n, r, o) {
      var i = UT(t),
        s = VT(i),
        a = HT(i);
      if ((zT(n), a === 0 && r < 2)) throw new Om(Pm);
      var l = e ? a - 1 : 0,
        u = e ? -1 : 1;
      if (r < 2)
        for (;;) {
          if (l in s) {
            (o = s[l]), (l += u);
            break;
          }
          if (((l += u), e ? l < 0 : a <= l)) throw new Om(Pm);
        }
      for (; e ? l >= 0 : a > l; l += u) l in s && (o = n(o, s[l], l, i));
      return o;
    };
  },
  WT = { left: Tm(!1), right: Tm(!0) },
  No = Le,
  KT = aw,
  qT = zn,
  ws = function (e) {
    return KT.slice(0, e.length) === e;
  },
  QT = (function () {
    return ws("Bun/")
      ? "BUN"
      : ws("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : ws("Deno/")
      ? "DENO"
      : ws("Node.js/")
      ? "NODE"
      : No.Bun && typeof Bun.version == "string"
      ? "BUN"
      : No.Deno && typeof Deno.version == "object"
      ? "DENO"
      : qT(No.process) === "process"
      ? "NODE"
      : No.window && No.document
      ? "BROWSER"
      : "REST";
  })(),
  YT = QT,
  GT = YT === "NODE",
  JT = ve,
  XT = WT.left,
  ZT = TT,
  _m = ol,
  e_ = GT,
  t_ = !e_ && _m > 79 && _m < 83,
  n_ = t_ || !ZT("reduce");
JT(
  { target: "Array", proto: !0, forced: n_ },
  {
    reduce: function (t) {
      var n = arguments.length;
      return XT(this, t, n, n > 1 ? arguments[1] : void 0);
    },
  }
);
var r_ = ji,
  o_ = r_("Array", "reduce"),
  i_ = vr,
  s_ = o_,
  Nu = Array.prototype,
  a_ = function (e) {
    var t = e.reduce;
    return e === Nu || (i_(Nu, e) && t === Nu.reduce) ? s_ : t;
  },
  l_ = a_,
  u_ = l_;
const qw = me(u_);
var Qw = `	
\v\f\r                　\u2028\u2029\uFEFF`,
  c_ = ae,
  f_ = Ti,
  d_ = gr,
  ef = Qw,
  Nm = c_("".replace),
  p_ = RegExp("^[" + ef + "]+"),
  h_ = RegExp("(^|[^" + ef + "])[" + ef + "]+$"),
  Iu = function (e) {
    return function (t) {
      var n = d_(f_(t));
      return e & 1 && (n = Nm(n, p_, "")), e & 2 && (n = Nm(n, h_, "$1")), n;
    };
  },
  m_ = { start: Iu(1), end: Iu(2), trim: Iu(3) },
  Yw = Le,
  v_ = se,
  g_ = ae,
  y_ = gr,
  w_ = m_.trim,
  S_ = Qw,
  b_ = g_("".charAt),
  Ca = Yw.parseFloat,
  Im = Yw.Symbol,
  Rm = Im && Im.iterator,
  E_ =
    1 / Ca(S_ + "-0") !== -1 / 0 ||
    (Rm &&
      !v_(function () {
        Ca(Object(Rm));
      })),
  C_ = E_
    ? function (t) {
        var n = w_(y_(t)),
          r = Ca(n);
        return r === 0 && b_(n, 0) === "-" ? -0 : r;
      }
    : Ca,
  x_ = ve,
  Am = C_;
x_({ global: !0, forced: parseFloat !== Am }, { parseFloat: Am });
var $_ = Ke,
  k_ = $_.parseFloat,
  O_ = k_,
  P_ = O_;
const T_ = me(P_);
var __ = function () {
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
const N_ = me(__);
var I_ = N_(),
  Gw = ["#A62A21", "#7e3794", "#0B51C1", "#3A6024", "#A81563", "#B3003C"],
  R_ = /^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/;
function A_(e, t) {
  for (
    var n,
      r = Kw((n = OT(e))).call(n, function (u) {
        return u.charCodeAt(0);
      }),
      o = r.length,
      i = (o % (t - 1)) + 1,
      s =
        qw(r).call(r, function (u, c) {
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
function Td(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gw;
  if (!e) return "transparent";
  var n = A_(e, t.length);
  return t[n];
}
function ml(e) {
  e = "" + e;
  var t = R_.exec(e) || [],
    n = CT(t, 3),
    r = n[1],
    o = r === void 0 ? 0 : r,
    i = n[2],
    s = i === void 0 ? "px" : i;
  return { value: T_(o), str: o + s, unit: s };
}
function vl(e) {
  return (
    (e = ml(e)),
    isNaN(e.value)
      ? (e = 512)
      : e.unit === "px"
      ? (e = e.value)
      : e.value === 0
      ? (e = 0)
      : (e = 512),
    I_ && (e = e * 2),
    e
  );
}
function Jw(e, t) {
  var n,
    r,
    o,
    i = t.maxInitials;
  return Iw(
    (n = pl(
      (r = Kw((o = e.split(/\s/))).call(o, function (s) {
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
var Ss = {};
function j_(e, t) {
  if (Ss[t]) {
    Ss[t].push(e);
    return;
  }
  var n = (Ss[t] = [e]);
  setTimeout(function () {
    delete Ss[t],
      n.forEach(function (r) {
        return r();
      });
  }, t);
}
function tf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  for (var r = 0, o = t; r < o.length; r++) {
    var i = o[r];
    if (i || i === "") return i;
    if (i === !1 || i === null) return null;
  }
}
function _d(e) {
  if (e === !0) return "100%";
  if (e !== !1) return e;
}
function L_(e) {
  var t = B_();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Bi(this, o);
  };
}
function B_() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var nf = { cache: SP, colors: Gw, initials: Jw, avatarRedirectUrl: null },
  D_ = Pd(nf),
  Nd = V.createContext && V.createContext(),
  gl = !Nd,
  M_ = gl ? null : Nd.Consumer,
  F_ =
    V.forwardRef ||
    function (e) {
      return e;
    },
  jn = (function (e) {
    Li(n, e);
    var t = L_(n);
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
              D_.forEach(function (s) {
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
            return gl
              ? V.Children.only(o)
              : V.createElement(
                  Nd.Provider,
                  { value: this._getContext() },
                  V.Children.only(o)
                );
          },
        },
      ]),
      n
    );
  })(V.Component);
A(jn, "displayName", "ConfigProvider");
A(jn, "propTypes", {
  cache: O.object,
  colors: O.arrayOf(O.string),
  initials: O.func,
  avatarRedirectUrl: O.string,
  children: O.node,
});
var Xw = function (t) {
  function n(r, o) {
    if (gl) {
      var i = o && o.reactAvatar;
      return V.createElement(t, no({}, nf, i, r));
    }
    return V.createElement(M_, null, function (s) {
      return V.createElement(t, no({ ref: o }, nf, s, r));
    });
  }
  return (n.contextTypes = jn.childContextTypes), F_(n);
};
gl &&
  ((jn.childContextTypes = { reactAvatar: O.object }),
  (jn.prototype.getChildContext = function () {
    return { reactAvatar: this._getContext() };
  }));
var yl = {},
  z_ = yw,
  U_ = wd,
  V_ = U_.concat("length", "prototype");
yl.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return z_(t, V_);
  };
var Zw = {},
  H_ = zn,
  W_ = sn,
  e0 = yl.f,
  K_ = cl,
  t0 =
    typeof window == "object" && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  q_ = function (e) {
    try {
      return e0(e);
    } catch {
      return K_(t0);
    }
  };
Zw.f = function (t) {
  return t0 && H_(t) === "Window" ? q_(t) : e0(W_(t));
};
var Q_ = al,
  n0 = function (e, t, n, r) {
    return r && r.enumerable ? (e[t] = n) : Q_(e, t, n), e;
  },
  Y_ = an,
  G_ = function (e, t, n) {
    return Y_.f(e, t, n);
  },
  Id = {},
  J_ = Tt;
Id.f = J_;
var jm = Ke,
  X_ = Pt,
  Z_ = Id,
  e3 = an.f,
  t3 = function (e) {
    var t = jm.Symbol || (jm.Symbol = {});
    X_(t, e) || e3(t, e, { value: Z_.f(e) });
  },
  n3 = Un,
  r3 = Vn,
  o3 = Tt,
  i3 = n0,
  s3 = function () {
    var e = r3("Symbol"),
      t = e && e.prototype,
      n = t && t.valueOf,
      r = o3("toPrimitive");
    t &&
      !t[r] &&
      i3(
        t,
        r,
        function (o) {
          return n3(n, this);
        },
        { arity: 1 }
      );
  },
  a3 = Sd,
  l3 = bd,
  u3 = a3
    ? {}.toString
    : function () {
        return "[object " + l3(this) + "]";
      },
  c3 = Sd,
  f3 = an.f,
  d3 = al,
  p3 = Pt,
  h3 = u3,
  m3 = Tt,
  Lm = m3("toStringTag"),
  v3 = function (e, t, n, r) {
    var o = n ? e : e && e.prototype;
    o &&
      (p3(o, Lm) || f3(o, Lm, { configurable: !0, value: t }),
      r && !c3 && d3(o, "toString", h3));
  },
  g3 = Le,
  y3 = it,
  Bm = g3.WeakMap,
  w3 = y3(Bm) && /native code/.test(String(Bm)),
  S3 = w3,
  r0 = Le,
  b3 = Ht,
  E3 = al,
  Ru = Pt,
  Au = md,
  C3 = kd,
  x3 = ll,
  Dm = "Object already initialized",
  rf = r0.TypeError,
  $3 = r0.WeakMap,
  xa,
  vi,
  $a,
  k3 = function (e) {
    return $a(e) ? vi(e) : xa(e, {});
  },
  O3 = function (e) {
    return function (t) {
      var n;
      if (!b3(t) || (n = vi(t)).type !== e)
        throw new rf("Incompatible receiver, " + e + " required");
      return n;
    };
  };
if (S3 || Au.state) {
  var At = Au.state || (Au.state = new $3());
  (At.get = At.get),
    (At.has = At.has),
    (At.set = At.set),
    (xa = function (e, t) {
      if (At.has(e)) throw new rf(Dm);
      return (t.facade = e), At.set(e, t), t;
    }),
    (vi = function (e) {
      return At.get(e) || {};
    }),
    ($a = function (e) {
      return At.has(e);
    });
} else {
  var xr = C3("state");
  (x3[xr] = !0),
    (xa = function (e, t) {
      if (Ru(e, xr)) throw new rf(Dm);
      return (t.facade = e), E3(e, xr, t), t;
    }),
    (vi = function (e) {
      return Ru(e, xr) ? e[xr] : {};
    }),
    ($a = function (e) {
      return Ru(e, xr);
    });
}
var P3 = { set: xa, get: vi, has: $a, enforce: k3, getterFor: O3 },
  wl = ve,
  Di = Le,
  Rd = Un,
  T3 = ae,
  oo = st,
  io = ho,
  _3 = se,
  Se = Pt,
  N3 = vr,
  of = mo,
  Sl = sn,
  Ad = gd,
  I3 = gr,
  sf = nl,
  so = Bw,
  o0 = ul,
  R3 = yl,
  i0 = Zw,
  A3 = Ri,
  s0 = Pi,
  a0 = an,
  j3 = hl,
  l0 = tl,
  Mm = n0,
  L3 = G_,
  jd = _i,
  B3 = kd,
  u0 = ll,
  Fm = vd,
  D3 = Tt,
  M3 = Id,
  F3 = t3,
  z3 = s3,
  U3 = v3,
  c0 = P3,
  bl = xd.forEach,
  Fe = B3("hidden"),
  El = "Symbol",
  gi = "prototype",
  V3 = c0.set,
  zm = c0.getterFor(El),
  xt = Object[gi],
  rr = Di.Symbol,
  Bo = rr && rr[gi],
  H3 = Di.RangeError,
  W3 = Di.TypeError,
  ju = Di.QObject,
  f0 = s0.f,
  or = a0.f,
  d0 = i0.f,
  K3 = l0.f,
  p0 = T3([].push),
  rn = jd("symbols"),
  Mi = jd("op-symbols"),
  q3 = jd("wks"),
  af = !ju || !ju[gi] || !ju[gi].findChild,
  h0 = function (e, t, n) {
    var r = f0(xt, t);
    r && delete xt[t], or(e, t, n), r && e !== xt && or(xt, t, r);
  },
  lf =
    oo &&
    _3(function () {
      return (
        so(
          or({}, "a", {
            get: function () {
              return or(this, "a", { value: 7 }).a;
            },
          })
        ).a !== 7
      );
    })
      ? h0
      : or,
  Lu = function (e, t) {
    var n = (rn[e] = so(Bo));
    return (
      V3(n, { type: El, tag: e, description: t }), oo || (n.description = t), n
    );
  },
  Cl = function (t, n, r) {
    t === xt && Cl(Mi, n, r), of(t);
    var o = Ad(n);
    return (
      of(r),
      Se(rn, o)
        ? (r.enumerable
            ? (Se(t, Fe) && t[Fe][o] && (t[Fe][o] = !1),
              (r = so(r, { enumerable: sf(0, !1) })))
            : (Se(t, Fe) || or(t, Fe, sf(1, so(null))), (t[Fe][o] = !0)),
          lf(t, o, r))
        : or(t, o, r)
    );
  },
  Ld = function (t, n) {
    of(t);
    var r = Sl(n),
      o = o0(r).concat(y0(r));
    return (
      bl(o, function (i) {
        (!oo || Rd(m0, r, i)) && Cl(t, i, r[i]);
      }),
      t
    );
  },
  Q3 = function (t, n) {
    return n === void 0 ? so(t) : Ld(so(t), n);
  },
  m0 = function (t) {
    var n = Ad(t),
      r = Rd(K3, this, n);
    return this === xt && Se(rn, n) && !Se(Mi, n)
      ? !1
      : r || !Se(this, n) || !Se(rn, n) || (Se(this, Fe) && this[Fe][n])
      ? r
      : !0;
  },
  v0 = function (t, n) {
    var r = Sl(t),
      o = Ad(n);
    if (!(r === xt && Se(rn, o) && !Se(Mi, o))) {
      var i = f0(r, o);
      return (
        i && Se(rn, o) && !(Se(r, Fe) && r[Fe][o]) && (i.enumerable = !0), i
      );
    }
  },
  g0 = function (t) {
    var n = d0(Sl(t)),
      r = [];
    return (
      bl(n, function (o) {
        !Se(rn, o) && !Se(u0, o) && p0(r, o);
      }),
      r
    );
  },
  y0 = function (e) {
    var t = e === xt,
      n = d0(t ? Mi : Sl(e)),
      r = [];
    return (
      bl(n, function (o) {
        Se(rn, o) && (!t || Se(xt, o)) && p0(r, rn[o]);
      }),
      r
    );
  };
io ||
  ((rr = function () {
    if (N3(Bo, this)) throw new W3("Symbol is not a constructor");
    var t =
        !arguments.length || arguments[0] === void 0
          ? void 0
          : I3(arguments[0]),
      n = Fm(t),
      r = function (o) {
        var i = this === void 0 ? Di : this;
        i === xt && Rd(r, Mi, o), Se(i, Fe) && Se(i[Fe], n) && (i[Fe][n] = !1);
        var s = sf(1, o);
        try {
          lf(i, n, s);
        } catch (a) {
          if (!(a instanceof H3)) throw a;
          h0(i, n, s);
        }
      };
    return oo && af && lf(xt, n, { configurable: !0, set: r }), Lu(n, t);
  }),
  (Bo = rr[gi]),
  Mm(Bo, "toString", function () {
    return zm(this).tag;
  }),
  Mm(rr, "withoutSetter", function (e) {
    return Lu(Fm(e), e);
  }),
  (l0.f = m0),
  (a0.f = Cl),
  (j3.f = Ld),
  (s0.f = v0),
  (R3.f = i0.f = g0),
  (A3.f = y0),
  (M3.f = function (e) {
    return Lu(D3(e), e);
  }),
  oo &&
    L3(Bo, "description", {
      configurable: !0,
      get: function () {
        return zm(this).description;
      },
    }));
wl(
  { global: !0, constructor: !0, wrap: !0, forced: !io, sham: !io },
  { Symbol: rr }
);
bl(o0(q3), function (e) {
  F3(e);
});
wl(
  { target: El, stat: !0, forced: !io },
  {
    useSetter: function () {
      af = !0;
    },
    useSimple: function () {
      af = !1;
    },
  }
);
wl(
  { target: "Object", stat: !0, forced: !io, sham: !oo },
  {
    create: Q3,
    defineProperty: Cl,
    defineProperties: Ld,
    getOwnPropertyDescriptor: v0,
  }
);
wl({ target: "Object", stat: !0, forced: !io }, { getOwnPropertyNames: g0 });
z3();
U3(rr, El);
u0[Fe] = !0;
var Y3 = ho,
  w0 = Y3 && !!Symbol.for && !!Symbol.keyFor,
  G3 = ve,
  J3 = Vn,
  X3 = Pt,
  Z3 = gr,
  S0 = _i,
  eN = w0,
  Bu = S0("string-to-symbol-registry"),
  tN = S0("symbol-to-string-registry");
G3(
  { target: "Symbol", stat: !0, forced: !eN },
  {
    for: function (e) {
      var t = Z3(e);
      if (X3(Bu, t)) return Bu[t];
      var n = J3("Symbol")(t);
      return (Bu[t] = n), (tN[n] = t), n;
    },
  }
);
var nN = ve,
  rN = Pt,
  oN = il,
  iN = hd,
  sN = _i,
  aN = w0,
  Um = sN("symbol-to-string-registry");
nN(
  { target: "Symbol", stat: !0, forced: !aN },
  {
    keyFor: function (t) {
      if (!oN(t)) throw new TypeError(iN(t) + " is not a symbol");
      if (rN(Um, t)) return Um[t];
    },
  }
);
var lN = ve,
  uN = ho,
  cN = se,
  b0 = Ri,
  fN = Hn,
  dN =
    !uN ||
    cN(function () {
      b0.f(1);
    });
lN(
  { target: "Object", stat: !0, forced: dN },
  {
    getOwnPropertySymbols: function (t) {
      var n = b0.f;
      return n ? n(fN(t)) : [];
    },
  }
);
var pN = Ke,
  hN = pN.Object.getOwnPropertySymbols,
  mN = hN,
  vN = mN;
const ka = me(vN);
var E0 = { exports: {} },
  gN = ve,
  yN = se,
  wN = sn,
  C0 = Pi.f,
  x0 = st,
  SN =
    !x0 ||
    yN(function () {
      C0(1);
    });
gN(
  { target: "Object", stat: !0, forced: SN, sham: !x0 },
  {
    getOwnPropertyDescriptor: function (t, n) {
      return C0(wN(t), n);
    },
  }
);
var bN = Ke,
  $0 = bN.Object,
  EN = (E0.exports = function (t, n) {
    return $0.getOwnPropertyDescriptor(t, n);
  });
$0.getOwnPropertyDescriptor.sham && (EN.sham = !0);
var CN = E0.exports,
  xN = CN,
  $N = xN;
const xl = me($N);
var kN = Vn,
  ON = ae,
  PN = yl,
  TN = Ri,
  _N = mo,
  NN = ON([].concat),
  IN =
    kN("Reflect", "ownKeys") ||
    function (t) {
      var n = PN.f(_N(t)),
        r = TN.f;
      return r ? NN(n, r(t)) : n;
    },
  RN = ve,
  AN = st,
  jN = IN,
  LN = sn,
  BN = Pi,
  DN = $d;
RN(
  { target: "Object", stat: !0, sham: !AN },
  {
    getOwnPropertyDescriptors: function (t) {
      for (
        var n = LN(t), r = BN.f, o = jN(n), i = {}, s = 0, a, l;
        o.length > s;

      )
        (l = r(n, (a = o[s++]))), l !== void 0 && DN(i, a, l);
      return i;
    },
  }
);
var MN = Ke,
  FN = MN.Object.getOwnPropertyDescriptors,
  zN = FN,
  UN = zN;
const Oa = me(UN);
var k0 = { exports: {} },
  VN = ve,
  HN = st,
  Vm = hl.f;
VN(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperties !== Vm,
    sham: !HN,
  },
  { defineProperties: Vm }
);
var WN = Ke,
  O0 = WN.Object,
  KN = (k0.exports = function (t, n) {
    return O0.defineProperties(t, n);
  });
O0.defineProperties.sham && (KN.sham = !0);
var qN = k0.exports,
  QN = qN,
  YN = QN;
const P0 = me(YN);
var T0 = { exports: {} },
  GN = ve,
  JN = st,
  Hm = an.f;
GN(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperty !== Hm,
    sham: !JN,
  },
  { defineProperty: Hm }
);
var XN = Ke,
  _0 = XN.Object,
  ZN = (T0.exports = function (t, n, r) {
    return _0.defineProperty(t, n, r);
  });
_0.defineProperty.sham && (ZN.sham = !0);
var eI = T0.exports,
  tI = eI,
  nI = tI;
const N0 = me(nI);
var rI = (function () {
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
function Wm(e, t) {
  var n = Pd(e);
  if (ka) {
    var r = ka(e);
    t &&
      (r = pl(r).call(r, function (o) {
        return xl(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wm(Object(n), !0).forEach(function (r) {
          A(e, r, n[r]);
        })
      : Oa
      ? P0(e, Oa(n))
      : Wm(Object(n)).forEach(function (r) {
          N0(e, r, xl(n, r));
        });
  }
  return e;
}
function oI(e) {
  var t = iI();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Bi(this, o);
  };
}
function iI() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function sI(e, t, n) {
  var r = t.cache,
    o = new e(t);
  if (!o.isCompatible(t)) return n();
  o.get(function (i) {
    var s = i && i.src && r.hasSourceFailedBefore(i.src);
    !s && i ? n(i) : n();
  });
}
function aI(e) {
  var t = e.sources,
    n = t === void 0 ? [] : t,
    r = qw(n).call(
      n,
      function (i, s) {
        return qc(i, s.propTypes);
      },
      {}
    ),
    o = (function (i) {
      Li(a, i);
      var s = oI(a);
      function a(l) {
        var u;
        return (
          Be(this, a),
          (u = s.call(this, l)),
          A(Ea(u), "_createFetcher", function (c) {
            return function (f) {
              var d = u.props.cache;
              if (c.isActive(u.state)) {
                f && f.type === "error" && d.sourceFailed(f.target.src);
                var m = c.sourcePointer;
                if (n.length !== m) {
                  var g = n[m];
                  c.sourcePointer++,
                    sI(g, u.props, function (y) {
                      if (!y) return setTimeout(c.fetch, 0);
                      c.isActive(u.state) &&
                        ((y = Du({ src: null, value: null, color: null }, y)),
                        u.setState(function (E) {
                          return c.isActive(E) ? y : {};
                        }));
                    });
                }
              }
            };
          }),
          A(Ea(u), "fetch", function () {
            var c = new rI();
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
                m = d.src,
                g = d.value,
                y = d.color,
                E = d.sourceName,
                h = d.internal,
                p = {
                  src: m,
                  value: g,
                  color: y,
                  sourceName: E,
                  onRenderFailed: function () {
                    return h && h.fetch();
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
    })(S.PureComponent);
  return (
    A(o, "displayName", "AvatarDataProvider"),
    A(
      o,
      "propTypes",
      Du(Du({}, r), {}, { cache: O.object, propertyName: O.string })
    ),
    A(o, "defaultProps", { propertyName: "avatar" }),
    A(o, "Cache", ba),
    A(o, "ConfigProvider", jn),
    qc(Xw(o), { ConfigProvider: jn, Cache: ba })
  );
}
function Km(e, t) {
  var n = Pd(e);
  if (ka) {
    var r = ka(e);
    t &&
      (r = pl(r).call(r, function (o) {
        return xl(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Km(Object(n), !0).forEach(function (r) {
          A(e, r, n[r]);
        })
      : Oa
      ? P0(e, Oa(n))
      : Km(Object(n)).forEach(function (r) {
          N0(e, r, xl(n, r));
        });
  }
  return e;
}
function uI(e) {
  var t = cI();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Bi(this, o);
  };
}
function cI() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Bd = (function (e) {
  Li(n, e);
  var t = uI(n);
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
            m = ml(this.props.size),
            g = s
              ? null
              : lI(
                  {
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: m.str,
                    height: m.str,
                    borderRadius: _d(a),
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
A(Bd, "propTypes", {
  className: O.string,
  round: O.oneOfType([O.bool, O.string]),
  style: O.object,
  size: O.oneOfType([O.number, O.string]),
  unstyled: O.bool,
  avatar: O.object,
  onClick: O.func,
  children: O.node,
});
function fI(e) {
  var t = dI();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Bi(this, o);
  };
}
function dI() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Dd = (function (e) {
  Li(n, e);
  var t = fI(n);
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
            m = ml(this.props.size),
            g = a
              ? null
              : {
                  maxWidth: "100%",
                  width: m.str,
                  height: m.str,
                  borderRadius: _d(s),
                };
          return V.createElement(
            Bd,
            this.props,
            V.createElement("img", {
              className: i + " sb-avatar__image",
              width: m.str,
              height: m.str,
              style: g,
              src: d.src,
              alt: tf(l, c || f),
              title: tf(u, c || f),
              onError: d.onRenderFailed,
            })
          );
        },
      },
    ]),
    n
  );
})(V.PureComponent);
A(Dd, "propTypes", {
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
A(Dd, "defaultProps", { className: "", round: !1, size: 100, unstyled: !1 });
var pI = TypeError,
  hI = 9007199254740991,
  mI = function (e) {
    if (e > hI) throw pI("Maximum allowed index exceeded");
    return e;
  },
  vI = ve,
  gI = se,
  yI = fl,
  wI = Ht,
  SI = Hn,
  bI = Ii,
  qm = mI,
  Qm = $d,
  EI = Nw,
  CI = dl,
  xI = Tt,
  $I = ol,
  I0 = xI("isConcatSpreadable"),
  kI =
    $I >= 51 ||
    !gI(function () {
      var e = [];
      return (e[I0] = !1), e.concat()[0] !== e;
    }),
  OI = function (e) {
    if (!wI(e)) return !1;
    var t = e[I0];
    return t !== void 0 ? !!t : yI(e);
  },
  PI = !kI || !CI("concat");
vI(
  { target: "Array", proto: !0, arity: 1, forced: PI },
  {
    concat: function (t) {
      var n = SI(this),
        r = EI(n, 0),
        o = 0,
        i,
        s,
        a,
        l,
        u;
      for (i = -1, a = arguments.length; i < a; i++)
        if (((u = i === -1 ? n : arguments[i]), OI(u)))
          for (l = bI(u), qm(o + l), s = 0; s < l; s++, o++)
            s in u && Qm(r, o, u[s]);
        else qm(o + 1), Qm(r, o++, u);
      return (r.length = o), r;
    },
  }
);
var TI = ji,
  _I = TI("Array", "concat"),
  NI = vr,
  II = _I,
  Mu = Array.prototype,
  RI = function (e) {
    var t = e.concat;
    return e === Mu || (NI(Mu, e) && t === Mu.concat) ? II : t;
  },
  AI = RI,
  jI = AI;
const Yo = me(jI);
function LI(e) {
  var t = BI();
  return function () {
    var r = gt(e),
      o;
    if (t) {
      var i = gt(this).constructor;
      o = de(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Bi(this, o);
  };
}
function BI() {
  if (typeof Reflect > "u" || !de || de.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(de(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Md = (function (e) {
  Li(n, e);
  var t = LI(n);
  function n() {
    var r, o;
    Be(this, n);
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    return (
      (o = t.call.apply(t, Yo((r = [this])).call(r, s))),
      A(Ea(o), "_scaleTextNode", function (l) {
        var u =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
          c = o.props,
          f = c.unstyled,
          d = c.textSizeRatio,
          m = c.textMarginRatio,
          g = c.avatar;
        if (
          ((o._node = l), !(!l || !l.parentNode || f || g.src || !o._mounted))
        ) {
          var y = l.parentNode,
            E = y.parentNode,
            h = y.getBoundingClientRect(),
            p = h.width,
            v = h.height;
          if (p == 0 && v == 0) {
            var b = Math.min(u * 1.5, 500);
            j_(function () {
              return o._scaleTextNode(l, b);
            }, b);
            return;
          }
          if (!E.style.fontSize) {
            var x = v / d;
            E.style.fontSize = "".concat(x, "px");
          }
          y.style.fontSize = null;
          var k = l.getBoundingClientRect(),
            $ = k.width;
          if (!($ < 0)) {
            var N = p * (1 - 2 * m);
            $ > N && (y.style.fontSize = "calc(1em * ".concat(N / $, ")"));
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
            d = ml(this.props.size),
            m = a
              ? null
              : {
                  width: d.str,
                  height: d.str,
                  lineHeight: "initial",
                  textAlign: "center",
                  color: this.props.fgColor,
                  background: f.color,
                  borderRadius: _d(s),
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
            Bd,
            this.props,
            V.createElement(
              "div",
              {
                className: i + " sb-avatar__text",
                style: m,
                title: tf(l, u || c),
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
A(Md, "propTypes", {
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
A(Md, "defaultProps", {
  className: "",
  fgColor: "#FFF",
  round: !1,
  size: 100,
  textSizeRatio: 3,
  textMarginRatio: 0.15,
  unstyled: !1,
});
function DI(e) {
  var t = aI(e),
    n = Xw(
      V.forwardRef(function (r, o) {
        return V.createElement(
          t,
          no({}, r, { propertyName: "avatar" }),
          function (i) {
            var s = i.src ? Dd : Md;
            return V.createElement(s, no({}, r, { avatar: i, ref: o }));
          }
        );
      })
    );
  return qc(n, { getRandomColor: Td, ConfigProvider: jn, Cache: ba });
}
var R0 = { exports: {} },
  A0 = { exports: {} };
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
  A0.exports = t;
})();
var MI = A0.exports,
  uf = {
    utf8: {
      stringToBytes: function (e) {
        return uf.bin.stringToBytes(unescape(encodeURIComponent(e)));
      },
      bytesToString: function (e) {
        return decodeURIComponent(escape(uf.bin.bytesToString(e)));
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
  Ym = uf;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var FI = function (e) {
  return e != null && (j0(e) || zI(e) || !!e._isBuffer);
};
function j0(e) {
  return (
    !!e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function zI(e) {
  return (
    typeof e.readFloatLE == "function" &&
    typeof e.slice == "function" &&
    j0(e.slice(0, 0))
  );
}
(function () {
  var e = MI,
    t = Ym.utf8,
    n = FI,
    r = Ym.bin,
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
          m = 0;
        m < a.length;
        m++
      )
        a[m] =
          (((a[m] << 8) | (a[m] >>> 24)) & 16711935) |
          (((a[m] << 24) | (a[m] >>> 8)) & 4278255360);
      (a[l >>> 5] |= 128 << l % 32), (a[(((l + 64) >>> 9) << 4) + 14] = l);
      for (
        var g = o._ff, y = o._gg, E = o._hh, h = o._ii, m = 0;
        m < a.length;
        m += 16
      ) {
        var p = u,
          v = c,
          b = f,
          x = d;
        (u = g(u, c, f, d, a[m + 0], 7, -680876936)),
          (d = g(d, u, c, f, a[m + 1], 12, -389564586)),
          (f = g(f, d, u, c, a[m + 2], 17, 606105819)),
          (c = g(c, f, d, u, a[m + 3], 22, -1044525330)),
          (u = g(u, c, f, d, a[m + 4], 7, -176418897)),
          (d = g(d, u, c, f, a[m + 5], 12, 1200080426)),
          (f = g(f, d, u, c, a[m + 6], 17, -1473231341)),
          (c = g(c, f, d, u, a[m + 7], 22, -45705983)),
          (u = g(u, c, f, d, a[m + 8], 7, 1770035416)),
          (d = g(d, u, c, f, a[m + 9], 12, -1958414417)),
          (f = g(f, d, u, c, a[m + 10], 17, -42063)),
          (c = g(c, f, d, u, a[m + 11], 22, -1990404162)),
          (u = g(u, c, f, d, a[m + 12], 7, 1804603682)),
          (d = g(d, u, c, f, a[m + 13], 12, -40341101)),
          (f = g(f, d, u, c, a[m + 14], 17, -1502002290)),
          (c = g(c, f, d, u, a[m + 15], 22, 1236535329)),
          (u = y(u, c, f, d, a[m + 1], 5, -165796510)),
          (d = y(d, u, c, f, a[m + 6], 9, -1069501632)),
          (f = y(f, d, u, c, a[m + 11], 14, 643717713)),
          (c = y(c, f, d, u, a[m + 0], 20, -373897302)),
          (u = y(u, c, f, d, a[m + 5], 5, -701558691)),
          (d = y(d, u, c, f, a[m + 10], 9, 38016083)),
          (f = y(f, d, u, c, a[m + 15], 14, -660478335)),
          (c = y(c, f, d, u, a[m + 4], 20, -405537848)),
          (u = y(u, c, f, d, a[m + 9], 5, 568446438)),
          (d = y(d, u, c, f, a[m + 14], 9, -1019803690)),
          (f = y(f, d, u, c, a[m + 3], 14, -187363961)),
          (c = y(c, f, d, u, a[m + 8], 20, 1163531501)),
          (u = y(u, c, f, d, a[m + 13], 5, -1444681467)),
          (d = y(d, u, c, f, a[m + 2], 9, -51403784)),
          (f = y(f, d, u, c, a[m + 7], 14, 1735328473)),
          (c = y(c, f, d, u, a[m + 12], 20, -1926607734)),
          (u = E(u, c, f, d, a[m + 5], 4, -378558)),
          (d = E(d, u, c, f, a[m + 8], 11, -2022574463)),
          (f = E(f, d, u, c, a[m + 11], 16, 1839030562)),
          (c = E(c, f, d, u, a[m + 14], 23, -35309556)),
          (u = E(u, c, f, d, a[m + 1], 4, -1530992060)),
          (d = E(d, u, c, f, a[m + 4], 11, 1272893353)),
          (f = E(f, d, u, c, a[m + 7], 16, -155497632)),
          (c = E(c, f, d, u, a[m + 10], 23, -1094730640)),
          (u = E(u, c, f, d, a[m + 13], 4, 681279174)),
          (d = E(d, u, c, f, a[m + 0], 11, -358537222)),
          (f = E(f, d, u, c, a[m + 3], 16, -722521979)),
          (c = E(c, f, d, u, a[m + 6], 23, 76029189)),
          (u = E(u, c, f, d, a[m + 9], 4, -640364487)),
          (d = E(d, u, c, f, a[m + 12], 11, -421815835)),
          (f = E(f, d, u, c, a[m + 15], 16, 530742520)),
          (c = E(c, f, d, u, a[m + 2], 23, -995338651)),
          (u = h(u, c, f, d, a[m + 0], 6, -198630844)),
          (d = h(d, u, c, f, a[m + 7], 10, 1126891415)),
          (f = h(f, d, u, c, a[m + 14], 15, -1416354905)),
          (c = h(c, f, d, u, a[m + 5], 21, -57434055)),
          (u = h(u, c, f, d, a[m + 12], 6, 1700485571)),
          (d = h(d, u, c, f, a[m + 3], 10, -1894986606)),
          (f = h(f, d, u, c, a[m + 10], 15, -1051523)),
          (c = h(c, f, d, u, a[m + 1], 21, -2054922799)),
          (u = h(u, c, f, d, a[m + 8], 6, 1873313359)),
          (d = h(d, u, c, f, a[m + 15], 10, -30611744)),
          (f = h(f, d, u, c, a[m + 6], 15, -1560198380)),
          (c = h(c, f, d, u, a[m + 13], 21, 1309151649)),
          (u = h(u, c, f, d, a[m + 4], 6, -145523070)),
          (d = h(d, u, c, f, a[m + 11], 10, -1120210379)),
          (f = h(f, d, u, c, a[m + 2], 15, 718787259)),
          (c = h(c, f, d, u, a[m + 9], 21, -343485551)),
          (u = (u + p) >>> 0),
          (c = (c + v) >>> 0),
          (f = (f + b) >>> 0),
          (d = (d + x) >>> 0);
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
    (R0.exports = function (i, s) {
      if (i == null) throw new Error("Illegal argument " + i);
      var a = e.wordsToBytes(o(i, s));
      return s && s.asBytes
        ? a
        : s && s.asString
        ? r.bytesToString(a)
        : e.bytesToHex(a);
    });
})();
var UI = R0.exports;
const VI = me(UI);
var L0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.email || !!n.props.md5Email;
    }),
    A(this, "get", function (r) {
      var o = n.props,
        i = o.md5Email || VI(o.email),
        s = vl(o.size),
        a = "https://secure.gravatar.com/avatar/".concat(i, "?d=404");
      s && (a += "&s=".concat(s)), r({ sourceName: "gravatar", src: a });
    }),
    (this.props = t);
});
A(L0, "propTypes", { email: O.string, md5Email: O.string });
var B0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.facebookId;
    }),
    A(this, "get", function (r) {
      var o,
        i = n.props.facebookId,
        s = vl(n.props.size),
        a = "https://graph.facebook.com/".concat(i, "/picture");
      s && (a += Yo((o = "?width=".concat(s, "&height="))).call(o, s)),
        r({ sourceName: "facebook", src: a });
    }),
    (this.props = t);
});
A(B0, "propTypes", { facebookId: O.string });
var D0 = De(function e(t) {
  var n = this;
  Be(this, e),
    A(this, "props", null),
    A(this, "isCompatible", function () {
      return !!n.props.githubHandle;
    }),
    A(this, "get", function (r) {
      var o = n.props.githubHandle,
        i = vl(n.props.size),
        s = "https://avatars.githubusercontent.com/".concat(o, "?v=4");
      i && (s += "&s=".concat(i)), r({ sourceName: "github", src: s });
    }),
    (this.props = t);
});
A(D0, "propTypes", { githubHandle: O.string });
var M0 = De(function e(t) {
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
A(M0, "propTypes", { skypeId: O.string });
var F0 = (function () {
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
            : Jw(r, this.props);
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
          return r || Td(l, o);
        },
      },
    ]),
    e
  );
})();
A(F0, "propTypes", {
  color: O.string,
  name: O.string,
  value: O.string,
  email: O.string,
  maxInitials: O.number,
  initials: O.oneOfType([O.string, O.func]),
});
var z0 = De(function e(t) {
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
A(z0, "propTypes", { src: O.string });
var U0 = De(function e(t) {
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
      r({ sourceName: "icon", value: n.icon, color: i || Td(n.icon, s) });
    }),
    (this.props = t);
});
A(U0, "propTypes", { color: O.string });
function $l(e, t) {
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
            f = vl(i.props.size),
            d = c.replace(/\/*$/, "/"),
            m = i.props[t],
            g = f ? "size=".concat(f) : "",
            y = Yo(
              (a = Yo((l = Yo((u = "".concat(d))).call(u, e, "/"))).call(
                l,
                m,
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
const HI = $l("twitter", "twitterHandle"),
  WI = $l("vkontakte", "vkontakteId"),
  KI = $l("instagram", "instagramId"),
  qI = $l("google", "googleId");
var QI = [B0, qI, D0, HI, KI, WI, M0, L0, z0, F0, U0];
const YI = DI({ sources: QI }),
  GI = ({ userName: e }) =>
    I.jsxs("div", {
      className: "client",
      children: [
        I.jsx(YI, { name: e, size: 50, round: "14px" }),
        I.jsx("span", { className: "userName", children: e }),
      ],
    });
function JI(e, t, n) {
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
function Gm(e, t) {
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
function Jm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gm(Object(n), !0).forEach(function (r) {
          JI(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function XI(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ZI(e, t) {
  if (e == null) return {};
  var n = XI(e, t),
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
function eR(e, t) {
  return tR(e) || nR(e, t) || rR(e, t) || oR();
}
function tR(e) {
  if (Array.isArray(e)) return e;
}
function nR(e, t) {
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
function rR(e, t) {
  if (e) {
    if (typeof e == "string") return Xm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xm(e, t);
  }
}
function Xm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function oR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iR(e, t, n) {
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
          iR(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (o, i) {
      return i(o);
    }, r);
  };
}
function Do(e) {
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
function Pa(e) {
  return {}.toString.call(e).includes("Object");
}
function aR(e) {
  return !Object.keys(e).length;
}
function yi(e) {
  return typeof e == "function";
}
function lR(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function uR(e, t) {
  return (
    Pa(t) || In("changeType"),
    Object.keys(t).some(function (n) {
      return !lR(e, n);
    }) && In("changeField"),
    t
  );
}
function cR(e) {
  yi(e) || In("selectorType");
}
function fR(e) {
  yi(e) || Pa(e) || In("handlerType"),
    Pa(e) &&
      Object.values(e).some(function (t) {
        return !yi(t);
      }) &&
      In("handlersType");
}
function dR(e) {
  e || In("initialIsRequired"),
    Pa(e) || In("initialType"),
    aR(e) && In("initialContent");
}
function pR(e, t) {
  throw new Error(e[t] || e.default);
}
var hR = {
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
  In = Do(pR)(hR),
  bs = { changes: uR, selector: cR, handler: fR, initial: dR };
function mR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  bs.initial(e), bs.handler(t);
  var n = { current: e },
    r = Do(yR)(n, t),
    o = Do(gR)(n),
    i = Do(bs.changes)(e),
    s = Do(vR)(n);
  function a() {
    var u =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (c) {
            return c;
          };
    return bs.selector(u), u(n.current);
  }
  function l(u) {
    sR(r, o, i, s)(u);
  }
  return [a, l];
}
function vR(e, t) {
  return yi(t) ? t(e.current) : t;
}
function gR(e, t) {
  return (e.current = ev(ev({}, e.current), t)), t;
}
function yR(e, t, n) {
  return (
    yi(t)
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
var wR = { create: mR },
  SR = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function bR(e) {
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
function ER(e) {
  return {}.toString.call(e).includes("Object");
}
function CR(e) {
  return (
    e || tv("configIsRequired"),
    ER(e) || tv("configType"),
    e.urls ? (xR(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function xR() {
  console.warn(V0.deprecation);
}
function $R(e, t) {
  throw new Error(e[t] || e.default);
}
var V0 = {
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
  tv = bR($R)(V0),
  kR = { config: CR },
  OR = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (o) {
      return n.reduceRight(function (i, s) {
        return s(i);
      }, o);
    };
  };
function H0(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], H0(e[n], t[n]));
    }),
    Jm(Jm({}, e), t)
  );
}
var PR = { type: "cancelation", msg: "operation is manually canceled" };
function Fu(e) {
  var t = !1,
    n = new Promise(function (r, o) {
      e.then(function (i) {
        return t ? o(PR) : r(i);
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
var TR = wR.create({
    config: SR,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  W0 = eR(TR, 2),
  Fi = W0[0],
  kl = W0[1];
function _R(e) {
  var t = kR.config(e),
    n = t.monaco,
    r = ZI(t, ["monaco"]);
  kl(function (o) {
    return { config: H0(o.config, r), monaco: n };
  });
}
function NR() {
  var e = Fi(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      o = t.resolve;
    return { monaco: n, isInitialized: r, resolve: o };
  });
  if (!e.isInitialized) {
    if ((kl({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), Fu(zu);
    if (window.monaco && window.monaco.editor)
      return K0(window.monaco), e.resolve(window.monaco), Fu(zu);
    OR(IR, AR)(jR);
  }
  return Fu(zu);
}
function IR(e) {
  return document.body.appendChild(e);
}
function RR(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function AR(e) {
  var t = Fi(function (r) {
      var o = r.config,
        i = r.reject;
      return { config: o, reject: i };
    }),
    n = RR("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function jR() {
  var e = Fi(function (n) {
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
        K0(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      }
    );
}
function K0(e) {
  Fi().monaco || kl({ monaco: e });
}
function LR() {
  return Fi(function (e) {
    var t = e.monaco;
    return t;
  });
}
var zu = new Promise(function (e, t) {
    return kl({ resolve: e, reject: t });
  }),
  q0 = { config: _R, init: NR, __getMonacoInstance: LR },
  BR = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  Uu = BR,
  DR = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  MR = DR;
function FR({ children: e }) {
  return V.createElement("div", { style: MR.container }, e);
}
var zR = FR,
  UR = zR;
function VR({
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
    { style: { ...Uu.wrapper, width: e, height: t }, ...s },
    !n && V.createElement(UR, null, r),
    V.createElement("div", {
      ref: o,
      style: { ...Uu.fullWidth, ...(!n && Uu.hide) },
      className: i,
    })
  );
}
var HR = VR,
  Q0 = S.memo(HR);
function WR(e) {
  S.useEffect(e, []);
}
var Y0 = WR;
function KR(e, t, n = !0) {
  let r = S.useRef(!0);
  S.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t
  );
}
var Je = KR;
function Go() {}
function Fr(e, t, n, r) {
  return qR(e, r) || QR(e, t, n, r);
}
function qR(e, t) {
  return e.editor.getModel(G0(e, t));
}
function QR(e, t, n, r) {
  return e.editor.createModel(t, n, r ? G0(e, r) : void 0);
}
function G0(e, t) {
  return e.Uri.parse(t);
}
function YR({
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
  width: m = "100%",
  className: g,
  wrapperProps: y = {},
  beforeMount: E = Go,
  onMount: h = Go,
}) {
  let [p, v] = S.useState(!1),
    [b, x] = S.useState(!0),
    k = S.useRef(null),
    $ = S.useRef(null),
    N = S.useRef(null),
    F = S.useRef(h),
    _ = S.useRef(E),
    ge = S.useRef(!1);
  Y0(() => {
    let B = q0.init();
    return (
      B.then((Q) => ($.current = Q) && x(!1)).catch(
        (Q) =>
          (Q == null ? void 0 : Q.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", Q)
      ),
      () => (k.current ? un() : B.cancel())
    );
  }),
    Je(
      () => {
        if (k.current && $.current) {
          let B = k.current.getOriginalEditor(),
            Q = Fr($.current, e || "", r || n || "text", i || "");
          Q !== B.getModel() && B.setModel(Q);
        }
      },
      [i],
      p
    ),
    Je(
      () => {
        if (k.current && $.current) {
          let B = k.current.getModifiedEditor(),
            Q = Fr($.current, t || "", o || n || "text", s || "");
          Q !== B.getModel() && B.setModel(Q);
        }
      },
      [s],
      p
    ),
    Je(
      () => {
        let B = k.current.getModifiedEditor();
        B.getOption($.current.editor.EditorOption.readOnly)
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
        var B, Q;
        (Q = (B = k.current) == null ? void 0 : B.getModel()) == null ||
          Q.original.setValue(e || "");
      },
      [e],
      p
    ),
    Je(
      () => {
        let { original: B, modified: Q } = k.current.getModel();
        $.current.editor.setModelLanguage(B, r || n || "text"),
          $.current.editor.setModelLanguage(Q, o || n || "text");
      },
      [n, r, o],
      p
    ),
    Je(
      () => {
        var B;
        (B = $.current) == null || B.editor.setTheme(u);
      },
      [u],
      p
    ),
    Je(
      () => {
        var B;
        (B = k.current) == null || B.updateOptions(f);
      },
      [f],
      p
    );
  let _t = S.useCallback(() => {
      var ut;
      if (!$.current) return;
      _.current($.current);
      let B = Fr($.current, e || "", r || n || "text", i || ""),
        Q = Fr($.current, t || "", o || n || "text", s || "");
      (ut = k.current) == null || ut.setModel({ original: B, modified: Q });
    }, [n, t, o, e, r, i, s]),
    Nt = S.useCallback(() => {
      var B;
      !ge.current &&
        N.current &&
        ((k.current = $.current.editor.createDiffEditor(N.current, {
          automaticLayout: !0,
          ...f,
        })),
        _t(),
        (B = $.current) == null || B.editor.setTheme(u),
        v(!0),
        (ge.current = !0));
    }, [f, u, _t]);
  S.useEffect(() => {
    p && F.current(k.current, $.current);
  }, [p]),
    S.useEffect(() => {
      !b && !p && Nt();
    }, [b, p, Nt]);
  function un() {
    var Q, ut, P, L;
    let B = (Q = k.current) == null ? void 0 : Q.getModel();
    a || (ut = B == null ? void 0 : B.original) == null || ut.dispose(),
      l || (P = B == null ? void 0 : B.modified) == null || P.dispose(),
      (L = k.current) == null || L.dispose();
  }
  return V.createElement(Q0, {
    width: m,
    height: d,
    isEditorReady: p,
    loading: c,
    _ref: N,
    className: g,
    wrapperProps: y,
  });
}
var GR = YR;
S.memo(GR);
function JR(e) {
  let t = S.useRef();
  return (
    S.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var XR = JR,
  Es = new Map();
function ZR({
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
  width: m = "100%",
  height: g = "100%",
  className: y,
  wrapperProps: E = {},
  beforeMount: h = Go,
  onMount: p = Go,
  onChange: v,
  onValidate: b = Go,
}) {
  let [x, k] = S.useState(!1),
    [$, N] = S.useState(!0),
    F = S.useRef(null),
    _ = S.useRef(null),
    ge = S.useRef(null),
    _t = S.useRef(p),
    Nt = S.useRef(h),
    un = S.useRef(),
    B = S.useRef(r),
    Q = XR(i),
    ut = S.useRef(!1),
    P = S.useRef(!1);
  Y0(() => {
    let R = q0.init();
    return (
      R.then((D) => (F.current = D) && N(!1)).catch(
        (D) =>
          (D == null ? void 0 : D.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", D)
      ),
      () => (_.current ? M() : R.cancel())
    );
  }),
    Je(
      () => {
        var D, ye, Ye, It;
        let R = Fr(F.current, e || r || "", t || o || "", i || n || "");
        R !== ((D = _.current) == null ? void 0 : D.getModel()) &&
          (f &&
            Es.set(Q, (ye = _.current) == null ? void 0 : ye.saveViewState()),
          (Ye = _.current) == null || Ye.setModel(R),
          f && ((It = _.current) == null || It.restoreViewState(Es.get(i))));
      },
      [i],
      x
    ),
    Je(
      () => {
        var R;
        (R = _.current) == null || R.updateOptions(u);
      },
      [u],
      x
    ),
    Je(
      () => {
        !_.current ||
          r === void 0 ||
          (_.current.getOption(F.current.editor.EditorOption.readOnly)
            ? _.current.setValue(r)
            : r !== _.current.getValue() &&
              ((P.current = !0),
              _.current.executeEdits("", [
                {
                  range: _.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              _.current.pushUndoStop(),
              (P.current = !1)));
      },
      [r],
      x
    ),
    Je(
      () => {
        var D, ye;
        let R = (D = _.current) == null ? void 0 : D.getModel();
        R &&
          o &&
          ((ye = F.current) == null || ye.editor.setModelLanguage(R, o));
      },
      [o],
      x
    ),
    Je(
      () => {
        var R;
        a !== void 0 && ((R = _.current) == null || R.revealLine(a));
      },
      [a],
      x
    ),
    Je(
      () => {
        var R;
        (R = F.current) == null || R.editor.setTheme(s);
      },
      [s],
      x
    );
  let L = S.useCallback(() => {
    var R;
    if (!(!ge.current || !F.current) && !ut.current) {
      Nt.current(F.current);
      let D = i || n,
        ye = Fr(F.current, r || e || "", t || o || "", D || "");
      (_.current =
        (R = F.current) == null
          ? void 0
          : R.editor.create(
              ge.current,
              { model: ye, automaticLayout: !0, ...u },
              c
            )),
        f && _.current.restoreViewState(Es.get(D)),
        F.current.editor.setTheme(s),
        a !== void 0 && _.current.revealLine(a),
        k(!0),
        (ut.current = !0);
    }
  }, [e, t, n, r, o, i, u, c, f, s, a]);
  S.useEffect(() => {
    x && _t.current(_.current, F.current);
  }, [x]),
    S.useEffect(() => {
      !$ && !x && L();
    }, [$, x, L]),
    (B.current = r),
    S.useEffect(() => {
      var R, D;
      x &&
        v &&
        ((R = un.current) == null || R.dispose(),
        (un.current =
          (D = _.current) == null
            ? void 0
            : D.onDidChangeModelContent((ye) => {
                P.current || v(_.current.getValue(), ye);
              })));
    }, [x, v]),
    S.useEffect(() => {
      if (x) {
        let R = F.current.editor.onDidChangeMarkers((D) => {
          var Ye;
          let ye = (Ye = _.current.getModel()) == null ? void 0 : Ye.uri;
          if (ye && D.find((It) => It.path === ye.path)) {
            let It = F.current.editor.getModelMarkers({ resource: ye });
            b == null || b(It);
          }
        });
        return () => {
          R == null || R.dispose();
        };
      }
      return () => {};
    }, [x, b]);
  function M() {
    var R, D;
    (R = un.current) == null || R.dispose(),
      d
        ? f && Es.set(i, _.current.saveViewState())
        : (D = _.current.getModel()) == null || D.dispose(),
      _.current.dispose();
  }
  return V.createElement(Q0, {
    width: m,
    height: g,
    isEditorReady: x,
    loading: l,
    _ref: ge,
    className: y,
    wrapperProps: E,
  });
}
var e5 = ZR,
  t5 = S.memo(e5),
  n5 = t5;
const r5 = [
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
  o5 = [
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
  i5 = {
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
  nv = (e) => {
    const t = o5.find((n) => n.name === e.toLowerCase());
    return t ? t.value : "";
  };
/*!
 * sweetalert2 v11.14.0
 * Released under the MIT License.
 */ function J0(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function s5(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function rv(e, t) {
  return e.get(J0(e, t));
}
function a5(e, t, n) {
  s5(e, t), t.set(e, n);
}
function l5(e, t, n) {
  return e.set(J0(e, t), n), n;
}
const u5 = 100,
  j = {},
  c5 = () => {
    j.previousActiveElement instanceof HTMLElement
      ? (j.previousActiveElement.focus(), (j.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  f5 = (e) =>
    new Promise((t) => {
      if (!e) return t();
      const n = window.scrollX,
        r = window.scrollY;
      (j.restoreFocusTimeout = setTimeout(() => {
        c5(), t();
      }, u5)),
        window.scrollTo(n, r);
    }),
  X0 = "swal2-",
  d5 = [
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
  w = d5.reduce((e, t) => ((e[t] = X0 + t), e), {}),
  p5 = ["success", "warning", "info", "question", "error"],
  Ta = p5.reduce((e, t) => ((e[t] = X0 + t), e), {}),
  Z0 = "SweetAlert2:",
  Fd = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  qe = (e) => {
    console.warn(`${Z0} ${typeof e == "object" ? e.join(" ") : e}`);
  },
  yr = (e) => {
    console.error(`${Z0} ${e}`);
  },
  ov = [],
  h5 = (e) => {
    ov.includes(e) || (ov.push(e), qe(e));
  },
  e1 = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    h5(
      `"${e}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`
    );
  },
  Ol = (e) => (typeof e == "function" ? e() : e),
  zd = (e) => e && typeof e.toPromise == "function",
  zi = (e) => (zd(e) ? e.toPromise() : Promise.resolve(e)),
  Ud = (e) => e && Promise.resolve(e) === e,
  Qe = () => document.body.querySelector(`.${w.container}`),
  Ui = (e) => {
    const t = Qe();
    return t ? t.querySelector(e) : null;
  },
  at = (e) => Ui(`.${e}`),
  q = () => at(w.popup),
  Vi = () => at(w.icon),
  m5 = () => at(w["icon-content"]),
  t1 = () => at(w.title),
  Vd = () => at(w["html-container"]),
  n1 = () => at(w.image),
  Hd = () => at(w["progress-steps"]),
  Pl = () => at(w["validation-message"]),
  zt = () => Ui(`.${w.actions} .${w.confirm}`),
  vo = () => Ui(`.${w.actions} .${w.cancel}`),
  wr = () => Ui(`.${w.actions} .${w.deny}`),
  v5 = () => at(w["input-label"]),
  go = () => Ui(`.${w.loader}`),
  Hi = () => at(w.actions),
  r1 = () => at(w.footer),
  Tl = () => at(w["timer-progress-bar"]),
  Wd = () => at(w.close),
  g5 = `
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
  Kd = () => {
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
      r = e.querySelectorAll(g5),
      o = Array.from(r).filter((i) => i.getAttribute("tabindex") !== "-1");
    return [...new Set(n.concat(o))].filter((i) => We(i));
  },
  qd = () =>
    Jt(document.body, w.shown) &&
    !Jt(document.body, w["toast-shown"]) &&
    !Jt(document.body, w["no-backdrop"]),
  _l = () => {
    const e = q();
    return e ? Jt(e, w.toast) : !1;
  },
  y5 = () => {
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
  w5 = (e, t) => {
    Array.from(e.classList).forEach((n) => {
      !Object.values(w).includes(n) &&
        !Object.values(Ta).includes(n) &&
        !Object.values(t.showClass || {}).includes(n) &&
        e.classList.remove(n);
    });
  },
  nt = (e, t, n) => {
    if ((w5(e, t), !t.customClass)) return;
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
        return e.querySelector(`.${w.popup} > .${w[t]}`);
      case "checkbox":
        return e.querySelector(`.${w.popup} > .${w.checkbox} input`);
      case "radio":
        return (
          e.querySelector(`.${w.popup} > .${w.radio} input:checked`) ||
          e.querySelector(`.${w.popup} > .${w.radio} input:first-child`)
        );
      case "range":
        return e.querySelector(`.${w.popup} > .${w.range} input`);
      default:
        return e.querySelector(`.${w.popup} > .${w.input}`);
    }
  },
  o1 = (e) => {
    if ((e.focus(), e.type !== "file")) {
      const t = e.value;
      (e.value = ""), (e.value = t);
    }
  },
  i1 = (e, t, n) => {
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
    i1(e, t, !0);
  },
  Ut = (e, t) => {
    i1(e, t, !1);
  },
  bn = (e, t) => {
    const n = Array.from(e.children);
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o instanceof HTMLElement && Jt(o, t)) return o;
    }
  },
  ir = (e, t, n) => {
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
  Ne = (e) => {
    e && (e.style.display = "none");
  },
  Qd = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
    e &&
      new MutationObserver(() => {
        Wi(e, e.innerHTML, t);
      }).observe(e, { childList: !0, subtree: !0 });
  },
  iv = (e, t, n, r) => {
    const o = e.querySelector(t);
    o && o.style.setProperty(n, r);
  },
  Wi = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
    t ? Ee(e, n) : Ne(e);
  },
  We = (e) =>
    !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
  S5 = () => !We(zt()) && !We(wr()) && !We(vo()),
  sv = (e) => e.scrollHeight > e.clientHeight,
  s1 = (e) => {
    const t = window.getComputedStyle(e),
      n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      r = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return n > 0 || r > 0;
  },
  Yd = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = Tl();
    n &&
      We(n) &&
      (t && ((n.style.transition = "none"), (n.style.width = "100%")),
      setTimeout(() => {
        (n.style.transition = `width ${e / 1e3}s linear`),
          (n.style.width = "0%");
      }, 10));
  },
  b5 = () => {
    const e = Tl();
    if (!e) return;
    const t = parseInt(window.getComputedStyle(e).width);
    e.style.removeProperty("transition"), (e.style.width = "100%");
    const n = parseInt(window.getComputedStyle(e).width),
      r = (t / n) * 100;
    e.style.width = `${r}%`;
  },
  a1 = () => typeof window > "u" || typeof document > "u",
  E5 = `
 <div aria-labelledby="${w.title}" aria-describedby="${w["html-container"]}" class="${w.popup}" tabindex="-1">
   <button type="button" class="${w.close}"></button>
   <ul class="${w["progress-steps"]}"></ul>
   <div class="${w.icon}"></div>
   <img class="${w.image}" />
   <h2 class="${w.title}" id="${w.title}"></h2>
   <div class="${w["html-container"]}" id="${w["html-container"]}"></div>
   <input class="${w.input}" id="${w.input}" />
   <input type="file" class="${w.file}" />
   <div class="${w.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${w.select}" id="${w.select}"></select>
   <div class="${w.radio}"></div>
   <label class="${w.checkbox}">
     <input type="checkbox" id="${w.checkbox}" />
     <span class="${w.label}"></span>
   </label>
   <textarea class="${w.textarea}" id="${w.textarea}"></textarea>
   <div class="${w["validation-message"]}" id="${w["validation-message"]}"></div>
   <div class="${w.actions}">
     <div class="${w.loader}"></div>
     <button type="button" class="${w.confirm}"></button>
     <button type="button" class="${w.deny}"></button>
     <button type="button" class="${w.cancel}"></button>
   </div>
   <div class="${w.footer}"></div>
   <div class="${w["timer-progress-bar-container"]}">
     <div class="${w["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  C5 = () => {
    const e = Qe();
    return e
      ? (e.remove(),
        Ut(
          [document.documentElement, document.body],
          [w["no-backdrop"], w["toast-shown"], w["has-column"]]
        ),
        !0)
      : !1;
  },
  Qn = () => {
    j.currentInstance.resetValidationMessage();
  },
  x5 = () => {
    const e = q(),
      t = bn(e, w.input),
      n = bn(e, w.file),
      r = e.querySelector(`.${w.range} input`),
      o = e.querySelector(`.${w.range} output`),
      i = bn(e, w.select),
      s = e.querySelector(`.${w.checkbox} input`),
      a = bn(e, w.textarea);
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
  $5 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  k5 = (e) => {
    const t = q();
    t.setAttribute("role", e.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
      e.toast || t.setAttribute("aria-modal", "true");
  },
  O5 = (e) => {
    window.getComputedStyle(e).direction === "rtl" && W(Qe(), w.rtl);
  },
  P5 = (e) => {
    const t = C5();
    if (a1()) {
      yr("SweetAlert2 requires document to initialize");
      return;
    }
    const n = document.createElement("div");
    (n.className = w.container), t && W(n, w["no-transition"]), lt(n, E5);
    const r = $5(e.target);
    r.appendChild(n), k5(e), O5(r), x5();
  },
  Gd = (e, t) => {
    e instanceof HTMLElement
      ? t.appendChild(e)
      : typeof e == "object"
      ? T5(e, t)
      : e && lt(t, e);
  },
  T5 = (e, t) => {
    e.jquery ? _5(t, e) : lt(t, e.toString());
  },
  _5 = (e, t) => {
    if (((e.textContent = ""), 0 in t))
      for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
    else e.appendChild(t.cloneNode(!0));
  },
  fr = (() => {
    if (a1()) return !1;
    const e = document.createElement("div");
    return typeof e.style.webkitAnimation < "u"
      ? "webkitAnimationEnd"
      : typeof e.style.animation < "u"
      ? "animationend"
      : !1;
  })(),
  N5 = (e, t) => {
    const n = Hi(),
      r = go();
    !n ||
      !r ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Ne(n)
        : Ee(n),
      nt(n, t, "actions"),
      I5(n, r, t),
      lt(r, t.loaderHtml || ""),
      nt(r, t, "loader"));
  };
function I5(e, t, n) {
  const r = zt(),
    o = wr(),
    i = vo();
  !r ||
    !o ||
    !i ||
    (Vu(r, "confirm", n),
    Vu(o, "deny", n),
    Vu(i, "cancel", n),
    R5(r, o, i, n),
    n.reverseButtons &&
      (n.toast
        ? (e.insertBefore(i, r), e.insertBefore(o, r))
        : (e.insertBefore(i, t), e.insertBefore(o, t), e.insertBefore(r, t))));
}
function R5(e, t, n, r) {
  if (!r.buttonsStyling) {
    Ut([e, t, n], w.styled);
    return;
  }
  W([e, t, n], w.styled),
    r.confirmButtonColor &&
      ((e.style.backgroundColor = r.confirmButtonColor),
      W(e, w["default-outline"])),
    r.denyButtonColor &&
      ((t.style.backgroundColor = r.denyButtonColor),
      W(t, w["default-outline"])),
    r.cancelButtonColor &&
      ((n.style.backgroundColor = r.cancelButtonColor),
      W(n, w["default-outline"]));
}
function Vu(e, t, n) {
  const r = Fd(t);
  Wi(e, n[`show${r}Button`], "inline-block"),
    lt(e, n[`${t}ButtonText`] || ""),
    e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
    (e.className = w[t]),
    nt(e, n, `${t}Button`);
}
const A5 = (e, t) => {
    const n = Wd();
    n &&
      (lt(n, t.closeButtonHtml || ""),
      nt(n, t, "closeButton"),
      Wi(n, t.showCloseButton),
      n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  j5 = (e, t) => {
    const n = Qe();
    n &&
      (L5(n, t.backdrop),
      B5(n, t.position),
      D5(n, t.grow),
      nt(n, t, "container"));
  };
function L5(e, t) {
  typeof t == "string"
    ? (e.style.background = t)
    : t || W([document.documentElement, document.body], w["no-backdrop"]);
}
function B5(e, t) {
  t &&
    (t in w
      ? W(e, w[t])
      : (qe('The "position" parameter is not valid, defaulting to "center"'),
        W(e, w.center)));
}
function D5(e, t) {
  t && W(e, w[`grow-${t}`]);
}
var G = { innerParams: new WeakMap(), domCache: new WeakMap() };
const M5 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  F5 = (e, t) => {
    const n = q();
    if (!n) return;
    const r = G.innerParams.get(e),
      o = !r || t.input !== r.input;
    M5.forEach((i) => {
      const s = bn(n, w[i]);
      s && (V5(i, t.inputAttributes), (s.className = w[i]), o && Ne(s));
    }),
      t.input && (o && z5(t), H5(t));
  },
  z5 = (e) => {
    if (!e.input) return;
    if (!oe[e.input]) {
      yr(
        `Unexpected type of input! Expected ${Object.keys(oe).join(
          " | "
        )}, got "${e.input}"`
      );
      return;
    }
    const t = l1(e.input);
    if (!t) return;
    const n = oe[e.input](t, e);
    Ee(t),
      e.inputAutoFocus &&
        setTimeout(() => {
          o1(n);
        });
  },
  U5 = (e) => {
    for (let t = 0; t < e.attributes.length; t++) {
      const n = e.attributes[t].name;
      ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n);
    }
  },
  V5 = (e, t) => {
    const n = q();
    if (!n) return;
    const r = Nl(n, e);
    if (r) {
      U5(r);
      for (const o in t) r.setAttribute(o, t[o]);
    }
  },
  H5 = (e) => {
    if (!e.input) return;
    const t = l1(e.input);
    t && nt(t, e, "input");
  },
  Jd = (e, t) => {
    !e.placeholder &&
      t.inputPlaceholder &&
      (e.placeholder = t.inputPlaceholder);
  },
  Ki = (e, t, n) => {
    if (n.inputLabel) {
      const r = document.createElement("label"),
        o = w["input-label"];
      r.setAttribute("for", e.id),
        (r.className = o),
        typeof n.customClass == "object" && W(r, n.customClass.inputLabel),
        (r.innerText = n.inputLabel),
        t.insertAdjacentElement("beforebegin", r);
    }
  },
  l1 = (e) => {
    const t = q();
    if (t) return bn(t, w[e] || w.input);
  },
  _a = (e, t) => {
    ["string", "number"].includes(typeof t)
      ? (e.value = `${t}`)
      : Ud(t) ||
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
      _a(e, t.inputValue), Ki(e, e, t), Jd(e, t), (e.type = t.input), e
    );
oe.file = (e, t) => (Ki(e, e, t), Jd(e, t), e);
oe.range = (e, t) => {
  const n = e.querySelector("input"),
    r = e.querySelector("output");
  return (
    _a(n, t.inputValue), (n.type = t.input), _a(r, t.inputValue), Ki(n, e, t), e
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
  return Ki(e, e, t), e;
};
oe.radio = (e) => ((e.textContent = ""), e);
oe.checkbox = (e, t) => {
  const n = Nl(q(), "checkbox");
  (n.value = "1"), (n.checked = !!t.inputValue);
  const r = e.querySelector("span");
  return lt(r, t.inputPlaceholder || t.inputLabel), n;
};
oe.textarea = (e, t) => {
  _a(e, t.inputValue), Jd(e, t), Ki(e, e, t);
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
            i > r ? (q().style.width = `${i}px`) : ir(q(), "width", t.width);
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
const W5 = (e, t) => {
    const n = Vd();
    n &&
      (Qd(n),
      nt(n, t, "htmlContainer"),
      t.html
        ? (Gd(t.html, n), Ee(n, "block"))
        : t.text
        ? ((n.textContent = t.text), Ee(n, "block"))
        : Ne(n),
      F5(e, t));
  },
  K5 = (e, t) => {
    const n = r1();
    n &&
      (Qd(n),
      Wi(n, t.footer, "block"),
      t.footer && Gd(t.footer, n),
      nt(n, t, "footer"));
  },
  q5 = (e, t) => {
    const n = G.innerParams.get(e),
      r = Vi();
    if (r) {
      if (n && t.icon === n.icon) {
        lv(r, t), av(r, t);
        return;
      }
      if (!t.icon && !t.iconHtml) {
        Ne(r);
        return;
      }
      if (t.icon && Object.keys(Ta).indexOf(t.icon) === -1) {
        yr(
          `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
        ),
          Ne(r);
        return;
      }
      Ee(r), lv(r, t), av(r, t), W(r, t.showClass && t.showClass.icon);
    }
  },
  av = (e, t) => {
    for (const [n, r] of Object.entries(Ta)) t.icon !== n && Ut(e, r);
    W(e, t.icon && Ta[t.icon]), J5(e, t), Q5(), nt(e, t, "icon");
  },
  Q5 = () => {
    const e = q();
    if (!e) return;
    const t = window.getComputedStyle(e).getPropertyValue("background-color"),
      n = e.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = t;
  },
  Y5 = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
  G5 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  lv = (e, t) => {
    if (!t.icon && !t.iconHtml) return;
    let n = e.innerHTML,
      r = "";
    t.iconHtml
      ? (r = uv(t.iconHtml))
      : t.icon === "success"
      ? ((r = Y5), (n = n.replace(/ style=".*?"/g, "")))
      : t.icon === "error"
      ? (r = G5)
      : t.icon && (r = uv({ question: "?", warning: "!", info: "i" }[t.icon])),
      n.trim() !== r.trim() && lt(e, r);
  },
  J5 = (e, t) => {
    if (t.iconColor) {
      (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
      for (const n of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        iv(e, n, "background-color", t.iconColor);
      iv(e, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  uv = (e) => `<div class="${w["icon-content"]}">${e}</div>`,
  X5 = (e, t) => {
    const n = n1();
    if (n) {
      if (!t.imageUrl) {
        Ne(n);
        return;
      }
      Ee(n, ""),
        n.setAttribute("src", t.imageUrl),
        n.setAttribute("alt", t.imageAlt || ""),
        ir(n, "width", t.imageWidth),
        ir(n, "height", t.imageHeight),
        (n.className = w.image),
        nt(n, t, "image");
    }
  },
  Z5 = (e, t) => {
    const n = Qe(),
      r = q();
    if (!(!n || !r)) {
      if (t.toast) {
        ir(n, "width", t.width), (r.style.width = "100%");
        const o = go();
        o && r.insertBefore(o, Vi());
      } else ir(r, "width", t.width);
      ir(r, "padding", t.padding),
        t.color && (r.style.color = t.color),
        t.background && (r.style.background = t.background),
        Ne(Pl()),
        eA(r, t);
    }
  },
  eA = (e, t) => {
    const n = t.showClass || {};
    (e.className = `${w.popup} ${We(e) ? n.popup : ""}`),
      t.toast
        ? (W([document.documentElement, document.body], w["toast-shown"]),
          W(e, w.toast))
        : W(e, w.modal),
      nt(e, t, "popup"),
      typeof t.customClass == "string" && W(e, t.customClass),
      t.icon && W(e, w[`icon-${t.icon}`]);
  },
  tA = (e, t) => {
    const n = Hd();
    if (!n) return;
    const { progressSteps: r, currentProgressStep: o } = t;
    if (!r || r.length === 0 || o === void 0) {
      Ne(n);
      return;
    }
    Ee(n),
      (n.textContent = ""),
      o >= r.length &&
        qe(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      r.forEach((i, s) => {
        const a = nA(i);
        if (
          (n.appendChild(a),
          s === o && W(a, w["active-progress-step"]),
          s !== r.length - 1)
        ) {
          const l = rA(t);
          n.appendChild(l);
        }
      });
  },
  nA = (e) => {
    const t = document.createElement("li");
    return W(t, w["progress-step"]), lt(t, e), t;
  },
  rA = (e) => {
    const t = document.createElement("li");
    return (
      W(t, w["progress-step-line"]),
      e.progressStepsDistance && ir(t, "width", e.progressStepsDistance),
      t
    );
  },
  oA = (e, t) => {
    const n = t1();
    n &&
      (Qd(n),
      Wi(n, t.title || t.titleText, "block"),
      t.title && Gd(t.title, n),
      t.titleText && (n.innerText = t.titleText),
      nt(n, t, "title"));
  },
  u1 = (e, t) => {
    Z5(e, t),
      j5(e, t),
      tA(e, t),
      q5(e, t),
      X5(e, t),
      oA(e, t),
      A5(e, t),
      W5(e, t),
      N5(e, t),
      K5(e, t);
    const n = q();
    typeof t.didRender == "function" && n && t.didRender(n),
      j.eventEmitter.emit("didRender", n);
  },
  iA = () => We(q()),
  c1 = () => {
    var e;
    return (e = zt()) === null || e === void 0 ? void 0 : e.click();
  },
  sA = () => {
    var e;
    return (e = wr()) === null || e === void 0 ? void 0 : e.click();
  },
  aA = () => {
    var e;
    return (e = vo()) === null || e === void 0 ? void 0 : e.click();
  },
  yo = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  f1 = (e) => {
    e.keydownTarget &&
      e.keydownHandlerAdded &&
      (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture,
      }),
      (e.keydownHandlerAdded = !1));
  },
  lA = (e, t, n) => {
    f1(e),
      t.toast ||
        ((e.keydownHandler = (r) => cA(t, r, n)),
        (e.keydownTarget = t.keydownListenerCapture ? window : q()),
        (e.keydownListenerCapture = t.keydownListenerCapture),
        e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !0));
  },
  cf = (e, t) => {
    var n;
    const r = Kd();
    if (r.length) {
      (e = e + t),
        e === r.length ? (e = 0) : e === -1 && (e = r.length - 1),
        r[e].focus();
      return;
    }
    (n = q()) === null || n === void 0 || n.focus();
  },
  d1 = ["ArrowRight", "ArrowDown"],
  uA = ["ArrowLeft", "ArrowUp"],
  cA = (e, t, n) => {
    e &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (e.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? fA(t, e)
          : t.key === "Tab"
          ? dA(t)
          : [...d1, ...uA].includes(t.key)
          ? pA(t.key)
          : t.key === "Escape" && hA(t, e, n)));
  },
  fA = (e, t) => {
    if (!Ol(t.allowEnterKey)) return;
    const n = Nl(q(), t.input);
    if (
      e.target &&
      n &&
      e.target instanceof HTMLElement &&
      e.target.outerHTML === n.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      c1(), e.preventDefault();
    }
  },
  dA = (e) => {
    const t = e.target,
      n = Kd();
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (t === n[o]) {
        r = o;
        break;
      }
    e.shiftKey ? cf(r, -1) : cf(r, 1), e.stopPropagation(), e.preventDefault();
  },
  pA = (e) => {
    const t = Hi(),
      n = zt(),
      r = wr(),
      o = vo();
    if (!t || !n || !r || !o) return;
    const i = [n, r, o];
    if (
      document.activeElement instanceof HTMLElement &&
      !i.includes(document.activeElement)
    )
      return;
    const s = d1.includes(e) ? "nextElementSibling" : "previousElementSibling";
    let a = document.activeElement;
    if (a) {
      for (let l = 0; l < t.children.length; l++) {
        if (((a = a[s]), !a)) return;
        if (a instanceof HTMLButtonElement && We(a)) break;
      }
      a instanceof HTMLButtonElement && a.focus();
    }
  },
  hA = (e, t, n) => {
    Ol(t.allowEscapeKey) && (e.preventDefault(), n(yo.esc));
  };
var ao = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const mA = () => {
    const e = Qe();
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
  p1 = () => {
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
  h1 = typeof window < "u" && !!window.GestureEvent,
  vA = () => {
    if (h1 && !Jt(document.body, w.iosfix)) {
      const e = document.body.scrollTop;
      (document.body.style.top = `${e * -1}px`),
        W(document.body, w.iosfix),
        gA();
    }
  },
  gA = () => {
    const e = Qe();
    if (!e) return;
    let t;
    (e.ontouchstart = (n) => {
      t = yA(n);
    }),
      (e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      });
  },
  yA = (e) => {
    const t = e.target,
      n = Qe(),
      r = Vd();
    return !n || !r || wA(e) || SA(e)
      ? !1
      : t === n ||
          (!sv(n) &&
            t instanceof HTMLElement &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(sv(r) && r.contains(t)));
  },
  wA = (e) =>
    e.touches && e.touches.length && e.touches[0].touchType === "stylus",
  SA = (e) => e.touches && e.touches.length > 1,
  bA = () => {
    if (Jt(document.body, w.iosfix)) {
      const e = parseInt(document.body.style.top, 10);
      Ut(document.body, w.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = e * -1);
    }
  },
  EA = () => {
    const e = document.createElement("div");
    (e.className = w["scrollbar-measure"]), document.body.appendChild(e);
    const t = e.getBoundingClientRect().width - e.clientWidth;
    return document.body.removeChild(e), t;
  };
let qr = null;
const CA = (e) => {
    qr === null &&
      (document.body.scrollHeight > window.innerHeight || e === "scroll") &&
      ((qr = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${qr + EA()}px`));
  },
  xA = () => {
    qr !== null &&
      ((document.body.style.paddingRight = `${qr}px`), (qr = null));
  };
function m1(e, t, n, r) {
  _l() ? cv(e, r) : (f5(n).then(() => cv(e, r)), f1(j)),
    h1
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    qd() && (xA(), bA(), p1()),
    $A();
}
function $A() {
  Ut(
    [document.documentElement, document.body],
    [w.shown, w["height-auto"], w["no-backdrop"], w["toast-shown"]]
  );
}
function En(e) {
  e = OA(e);
  const t = ao.swalPromiseResolve.get(this),
    n = kA(this);
  this.isAwaitingPromise ? e.isDismissed || (qi(this), t(e)) : n && t(e);
}
const kA = (e) => {
  const t = q();
  if (!t) return !1;
  const n = G.innerParams.get(e);
  if (!n || Jt(t, n.hideClass.popup)) return !1;
  Ut(t, n.showClass.popup), W(t, n.hideClass.popup);
  const r = Qe();
  return (
    Ut(r, n.showClass.backdrop), W(r, n.hideClass.backdrop), PA(e, t, n), !0
  );
};
function v1(e) {
  const t = ao.swalPromiseReject.get(this);
  qi(this), t && t(e);
}
const qi = (e) => {
    e.isAwaitingPromise &&
      (delete e.isAwaitingPromise, G.innerParams.get(e) || e._destroy());
  },
  OA = (e) =>
    typeof e > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
  PA = (e, t, n) => {
    const r = Qe(),
      o = fr && s1(t);
    typeof n.willClose == "function" && n.willClose(t),
      j.eventEmitter.emit("willClose", t),
      o
        ? TA(e, t, r, n.returnFocus, n.didClose)
        : m1(e, r, n.returnFocus, n.didClose);
  },
  TA = (e, t, n, r, o) => {
    fr &&
      ((j.swalCloseEventFinishedCallback = m1.bind(null, e, n, r, o)),
      t.addEventListener(fr, function (i) {
        i.target === t &&
          (j.swalCloseEventFinishedCallback(),
          delete j.swalCloseEventFinishedCallback);
      }));
  },
  cv = (e, t) => {
    setTimeout(() => {
      typeof t == "function" && t.bind(e.params)(),
        j.eventEmitter.emit("didClose"),
        e._destroy && e._destroy();
    });
  },
  lo = (e) => {
    let t = q();
    if ((t || new Aa(), (t = q()), !t)) return;
    const n = go();
    _l() ? Ne(Vi()) : _A(t, e),
      Ee(n),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus();
  },
  _A = (e, t) => {
    const n = Hi(),
      r = go();
    !n ||
      !r ||
      (!t && We(zt()) && (t = zt()),
      Ee(n),
      t &&
        (Ne(t),
        r.setAttribute("data-button-to-replace", t.className),
        n.insertBefore(r, t)),
      W([e, n], w.loading));
  },
  NA = (e, t) => {
    t.input === "select" || t.input === "radio"
      ? LA(e, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (n) => n === t.input
        ) &&
        (zd(t.inputValue) || Ud(t.inputValue)) &&
        (lo(zt()), BA(e, t));
  },
  IA = (e, t) => {
    const n = e.getInput();
    if (!n) return null;
    switch (t.input) {
      case "checkbox":
        return RA(n);
      case "radio":
        return AA(n);
      case "file":
        return jA(n);
      default:
        return t.inputAutoTrim ? n.value.trim() : n.value;
    }
  },
  RA = (e) => (e.checked ? 1 : 0),
  AA = (e) => (e.checked ? e.value : null),
  jA = (e) =>
    e.files && e.files.length
      ? e.getAttribute("multiple") !== null
        ? e.files
        : e.files[0]
      : null,
  LA = (e, t) => {
    const n = q();
    if (!n) return;
    const r = (o) => {
      t.input === "select"
        ? DA(n, Na(o), t)
        : t.input === "radio" && MA(n, Na(o), t);
    };
    zd(t.inputOptions) || Ud(t.inputOptions)
      ? (lo(zt()),
        zi(t.inputOptions).then((o) => {
          e.hideLoading(), r(o);
        }))
      : typeof t.inputOptions == "object"
      ? r(t.inputOptions)
      : yr(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`
        );
  },
  BA = (e, t) => {
    const n = e.getInput();
    n &&
      (Ne(n),
      zi(t.inputValue)
        .then((r) => {
          (n.value = t.input === "number" ? `${parseFloat(r) || 0}` : `${r}`),
            Ee(n),
            n.focus(),
            e.hideLoading();
        })
        .catch((r) => {
          yr(`Error in inputValue promise: ${r}`),
            (n.value = ""),
            Ee(n),
            n.focus(),
            e.hideLoading();
        }));
  };
function DA(e, t, n) {
  const r = bn(e, w.select);
  if (!r) return;
  const o = (i, s, a) => {
    const l = document.createElement("option");
    (l.value = a),
      lt(l, s),
      (l.selected = g1(a, n.inputValue)),
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
function MA(e, t, n) {
  const r = bn(e, w.radio);
  if (!r) return;
  t.forEach((i) => {
    const s = i[0],
      a = i[1],
      l = document.createElement("input"),
      u = document.createElement("label");
    (l.type = "radio"),
      (l.name = w.radio),
      (l.value = s),
      g1(s, n.inputValue) && (l.checked = !0);
    const c = document.createElement("span");
    lt(c, a),
      (c.className = w.label),
      u.appendChild(l),
      u.appendChild(c),
      r.appendChild(u);
  });
  const o = r.querySelectorAll("input");
  o.length && o[0].focus();
}
const Na = (e) => {
    const t = [];
    return (
      e instanceof Map
        ? e.forEach((n, r) => {
            let o = n;
            typeof o == "object" && (o = Na(o)), t.push([r, o]);
          })
        : Object.keys(e).forEach((n) => {
            let r = e[n];
            typeof r == "object" && (r = Na(r)), t.push([n, r]);
          }),
      t
    );
  },
  g1 = (e, t) => !!t && t.toString() === e.toString(),
  FA = (e) => {
    const t = G.innerParams.get(e);
    e.disableButtons(), t.input ? y1(e, "confirm") : Zd(e, !0);
  },
  zA = (e) => {
    const t = G.innerParams.get(e);
    e.disableButtons(), t.returnInputValueOnDeny ? y1(e, "deny") : Xd(e, !1);
  },
  UA = (e, t) => {
    e.disableButtons(), t(yo.cancel);
  },
  y1 = (e, t) => {
    const n = G.innerParams.get(e);
    if (!n.input) {
      yr(
        `The "input" parameter is needed to be set when using returnInputValueOn${Fd(
          t
        )}`
      );
      return;
    }
    const r = e.getInput(),
      o = IA(e, n);
    n.inputValidator
      ? VA(e, o, t)
      : r && !r.checkValidity()
      ? (e.enableButtons(),
        e.showValidationMessage(n.validationMessage || r.validationMessage))
      : t === "deny"
      ? Xd(e, o)
      : Zd(e, o);
  },
  VA = (e, t, n) => {
    const r = G.innerParams.get(e);
    e.disableInput(),
      Promise.resolve()
        .then(() => zi(r.inputValidator(t, r.validationMessage)))
        .then((i) => {
          e.enableButtons(),
            e.enableInput(),
            i ? e.showValidationMessage(i) : n === "deny" ? Xd(e, t) : Zd(e, t);
        });
  },
  Xd = (e, t) => {
    const n = G.innerParams.get(e || void 0);
    n.showLoaderOnDeny && lo(wr()),
      n.preDeny
        ? ((e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => zi(n.preDeny(t, n.validationMessage)))
            .then((o) => {
              o === !1
                ? (e.hideLoading(), qi(e))
                : e.close({ isDenied: !0, value: typeof o > "u" ? t : o });
            })
            .catch((o) => w1(e || void 0, o)))
        : e.close({ isDenied: !0, value: t });
  },
  fv = (e, t) => {
    e.close({ isConfirmed: !0, value: t });
  },
  w1 = (e, t) => {
    e.rejectPromise(t);
  },
  Zd = (e, t) => {
    const n = G.innerParams.get(e || void 0);
    n.showLoaderOnConfirm && lo(),
      n.preConfirm
        ? (e.resetValidationMessage(),
          (e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => zi(n.preConfirm(t, n.validationMessage)))
            .then((o) => {
              We(Pl()) || o === !1
                ? (e.hideLoading(), qi(e))
                : fv(e, typeof o > "u" ? t : o);
            })
            .catch((o) => w1(e || void 0, o)))
        : fv(e, t);
  };
function Ia() {
  const e = G.innerParams.get(this);
  if (!e) return;
  const t = G.domCache.get(this);
  Ne(t.loader),
    _l() ? e.icon && Ee(Vi()) : HA(t),
    Ut([t.popup, t.actions], w.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    (t.confirmButton.disabled = !1),
    (t.denyButton.disabled = !1),
    (t.cancelButton.disabled = !1);
}
const HA = (e) => {
  const t = e.popup.getElementsByClassName(
    e.loader.getAttribute("data-button-to-replace")
  );
  t.length ? Ee(t[0], "inline-block") : S5() && Ne(e.actions);
};
function S1() {
  const e = G.innerParams.get(this),
    t = G.domCache.get(this);
  return t ? Nl(t.popup, e.input) : null;
}
function b1(e, t, n) {
  const r = G.domCache.get(e);
  t.forEach((o) => {
    r[o].disabled = n;
  });
}
function E1(e, t) {
  const n = q();
  if (!(!n || !e))
    if (e.type === "radio") {
      const r = n.querySelectorAll(`[name="${w.radio}"]`);
      for (let o = 0; o < r.length; o++) r[o].disabled = t;
    } else e.disabled = t;
}
function C1() {
  b1(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function x1() {
  b1(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function $1() {
  E1(this.getInput(), !1);
}
function k1() {
  E1(this.getInput(), !0);
}
function O1(e) {
  const t = G.domCache.get(this),
    n = G.innerParams.get(this);
  lt(t.validationMessage, e),
    (t.validationMessage.className = w["validation-message"]),
    n.customClass &&
      n.customClass.validationMessage &&
      W(t.validationMessage, n.customClass.validationMessage),
    Ee(t.validationMessage);
  const r = this.getInput();
  r &&
    (r.setAttribute("aria-invalid", "true"),
    r.setAttribute("aria-describedby", w["validation-message"]),
    o1(r),
    W(r, w.inputerror));
}
function P1() {
  const e = G.domCache.get(this);
  e.validationMessage && Ne(e.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    Ut(t, w.inputerror));
}
const Qr = {
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
  WA = [
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
  KA = { allowEnterKey: void 0 },
  qA = [
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
  T1 = (e) => Object.prototype.hasOwnProperty.call(Qr, e),
  _1 = (e) => WA.indexOf(e) !== -1,
  N1 = (e) => KA[e],
  QA = (e) => {
    T1(e) || qe(`Unknown parameter "${e}"`);
  },
  YA = (e) => {
    qA.includes(e) && qe(`The parameter "${e}" is incompatible with toasts`);
  },
  GA = (e) => {
    const t = N1(e);
    t && e1(e, t);
  },
  JA = (e) => {
    e.backdrop === !1 &&
      e.allowOutsideClick &&
      qe(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      );
    for (const t in e) QA(t), e.toast && YA(t), GA(t);
  };
function I1(e) {
  const t = q(),
    n = G.innerParams.get(this);
  if (!t || Jt(t, n.hideClass.popup)) {
    qe(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const r = XA(e),
    o = Object.assign({}, n, r);
  u1(this, o),
    G.innerParams.set(this, o),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, e),
        writable: !1,
        enumerable: !0,
      },
    });
}
const XA = (e) => {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      _1(n) ? (t[n] = e[n]) : qe(`Invalid parameter to update: ${n}`);
    }),
    t
  );
};
function R1() {
  const e = G.domCache.get(this),
    t = G.innerParams.get(this);
  if (!t) {
    A1(this);
    return;
  }
  e.popup &&
    j.swalCloseEventFinishedCallback &&
    (j.swalCloseEventFinishedCallback(),
    delete j.swalCloseEventFinishedCallback),
    typeof t.didDestroy == "function" && t.didDestroy(),
    j.eventEmitter.emit("didDestroy"),
    ZA(this);
}
const ZA = (e) => {
    A1(e),
      delete e.params,
      delete j.keydownHandler,
      delete j.keydownTarget,
      delete j.currentInstance;
  },
  A1 = (e) => {
    e.isAwaitingPromise
      ? (Hu(G, e), (e.isAwaitingPromise = !0))
      : (Hu(ao, e),
        Hu(G, e),
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
  Hu = (e, t) => {
    for (const n in e) e[n].delete(t);
  };
var e4 = Object.freeze({
  __proto__: null,
  _destroy: R1,
  close: En,
  closeModal: En,
  closePopup: En,
  closeToast: En,
  disableButtons: x1,
  disableInput: k1,
  disableLoading: Ia,
  enableButtons: C1,
  enableInput: $1,
  getInput: S1,
  handleAwaitingPromise: qi,
  hideLoading: Ia,
  rejectPromise: v1,
  resetValidationMessage: P1,
  showValidationMessage: O1,
  update: I1,
});
const t4 = (e, t, n) => {
    e.toast ? n4(e, t, n) : (o4(t), i4(t), s4(e, t, n));
  },
  n4 = (e, t, n) => {
    t.popup.onclick = () => {
      (e && (r4(e) || e.timer || e.input)) || n(yo.close);
    };
  },
  r4 = (e) =>
    !!(
      e.showConfirmButton ||
      e.showDenyButton ||
      e.showCancelButton ||
      e.showCloseButton
    );
let Ra = !1;
const o4 = (e) => {
    e.popup.onmousedown = () => {
      e.container.onmouseup = function (t) {
        (e.container.onmouseup = () => {}),
          t.target === e.container && (Ra = !0);
      };
    };
  },
  i4 = (e) => {
    e.container.onmousedown = (t) => {
      t.target === e.container && t.preventDefault(),
        (e.popup.onmouseup = function (n) {
          (e.popup.onmouseup = () => {}),
            (n.target === e.popup ||
              (n.target instanceof HTMLElement &&
                e.popup.contains(n.target))) &&
              (Ra = !0);
        });
    };
  },
  s4 = (e, t, n) => {
    t.container.onclick = (r) => {
      if (Ra) {
        Ra = !1;
        return;
      }
      r.target === t.container && Ol(e.allowOutsideClick) && n(yo.backdrop);
    };
  },
  a4 = (e) => typeof e == "object" && e.jquery,
  dv = (e) => e instanceof Element || a4(e),
  l4 = (e) => {
    const t = {};
    return (
      typeof e[0] == "object" && !dv(e[0])
        ? Object.assign(t, e[0])
        : ["title", "html", "icon"].forEach((n, r) => {
            const o = e[r];
            typeof o == "string" || dv(o)
              ? (t[n] = o)
              : o !== void 0 &&
                yr(
                  `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`
                );
          }),
      t
    );
  };
function u4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return new this(...t);
}
function c4(e) {
  class t extends this {
    _main(r, o) {
      return super._main(r, Object.assign({}, e, o));
    }
  }
  return t;
}
const f4 = () => j.timeout && j.timeout.getTimerLeft(),
  j1 = () => {
    if (j.timeout) return b5(), j.timeout.stop();
  },
  L1 = () => {
    if (j.timeout) {
      const e = j.timeout.start();
      return Yd(e), e;
    }
  },
  d4 = () => {
    const e = j.timeout;
    return e && (e.running ? j1() : L1());
  },
  p4 = (e) => {
    if (j.timeout) {
      const t = j.timeout.increase(e);
      return Yd(t, !0), t;
    }
  },
  h4 = () => !!(j.timeout && j.timeout.isRunning());
let pv = !1;
const ff = {};
function m4() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "data-swal-template";
  (ff[e] = this),
    pv || (document.body.addEventListener("click", v4), (pv = !0));
}
const v4 = (e) => {
  for (let t = e.target; t && t !== document; t = t.parentNode)
    for (const n in ff) {
      const r = t.getAttribute(n);
      if (r) {
        ff[n].fire({ template: r });
        return;
      }
    }
};
class g4 {
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
j.eventEmitter = new g4();
const y4 = (e, t) => {
    j.eventEmitter.on(e, t);
  },
  w4 = (e, t) => {
    j.eventEmitter.once(e, t);
  },
  S4 = (e, t) => {
    if (!e) {
      j.eventEmitter.reset();
      return;
    }
    t
      ? j.eventEmitter.removeListener(e, t)
      : j.eventEmitter.removeAllListeners(e);
  };
var b4 = Object.freeze({
  __proto__: null,
  argsToParams: l4,
  bindClickHandler: m4,
  clickCancel: aA,
  clickConfirm: c1,
  clickDeny: sA,
  enableLoading: lo,
  fire: u4,
  getActions: Hi,
  getCancelButton: vo,
  getCloseButton: Wd,
  getConfirmButton: zt,
  getContainer: Qe,
  getDenyButton: wr,
  getFocusableElements: Kd,
  getFooter: r1,
  getHtmlContainer: Vd,
  getIcon: Vi,
  getIconContent: m5,
  getImage: n1,
  getInputLabel: v5,
  getLoader: go,
  getPopup: q,
  getProgressSteps: Hd,
  getTimerLeft: f4,
  getTimerProgressBar: Tl,
  getTitle: t1,
  getValidationMessage: Pl,
  increaseTimer: p4,
  isDeprecatedParameter: N1,
  isLoading: y5,
  isTimerRunning: h4,
  isUpdatableParameter: _1,
  isValidParameter: T1,
  isVisible: iA,
  mixin: c4,
  off: S4,
  on: y4,
  once: w4,
  resumeTimer: L1,
  showLoading: lo,
  stopTimer: j1,
  toggleTimer: d4,
});
class E4 {
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
const B1 = ["swal-title", "swal-html", "swal-footer"],
  C4 = (e) => {
    const t =
      typeof e.template == "string"
        ? document.querySelector(e.template)
        : e.template;
    if (!t) return {};
    const n = t.content;
    return (
      N4(n), Object.assign(x4(n), $4(n), k4(n), O4(n), P4(n), T4(n), _4(n, B1))
    );
  },
  x4 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-param")).forEach((r) => {
        dr(r, ["name", "value"]);
        const o = r.getAttribute("name"),
          i = r.getAttribute("value");
        !o ||
          !i ||
          (typeof Qr[o] == "boolean"
            ? (t[o] = i !== "false")
            : typeof Qr[o] == "object"
            ? (t[o] = JSON.parse(i))
            : (t[o] = i));
      }),
      t
    );
  },
  $4 = (e) => {
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
  k4 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-button")).forEach((r) => {
        dr(r, ["type", "color", "aria-label"]);
        const o = r.getAttribute("type");
        !o ||
          !["confirm", "cancel", "deny"].includes(o) ||
          ((t[`${o}ButtonText`] = r.innerHTML),
          (t[`show${Fd(o)}Button`] = !0),
          r.hasAttribute("color") &&
            (t[`${o}ButtonColor`] = r.getAttribute("color")),
          r.hasAttribute("aria-label") &&
            (t[`${o}ButtonAriaLabel`] = r.getAttribute("aria-label")));
      }),
      t
    );
  },
  O4 = (e) => {
    const t = {},
      n = e.querySelector("swal-image");
    return (
      n &&
        (dr(n, ["src", "width", "height", "alt"]),
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
  P4 = (e) => {
    const t = {},
      n = e.querySelector("swal-icon");
    return (
      n &&
        (dr(n, ["type", "color"]),
        n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
        (t.iconHtml = n.innerHTML)),
      t
    );
  },
  T4 = (e) => {
    const t = {},
      n = e.querySelector("swal-input");
    n &&
      (dr(n, ["type", "label", "placeholder", "value"]),
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
          dr(o, ["value"]);
          const i = o.getAttribute("value");
          if (!i) return;
          const s = o.innerHTML;
          t.inputOptions[i] = s;
        })),
      t
    );
  },
  _4 = (e, t) => {
    const n = {};
    for (const r in t) {
      const o = t[r],
        i = e.querySelector(o);
      i && (dr(i, []), (n[o.replace(/^swal-/, "")] = i.innerHTML.trim()));
    }
    return n;
  },
  N4 = (e) => {
    const t = B1.concat([
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
  dr = (e, t) => {
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
  D1 = 10,
  I4 = (e) => {
    const t = Qe(),
      n = q();
    typeof e.willOpen == "function" && e.willOpen(n),
      j.eventEmitter.emit("willOpen", n);
    const o = window.getComputedStyle(document.body).overflowY;
    j4(t, n, e),
      setTimeout(() => {
        R4(t, n);
      }, D1),
      qd() && (A4(t, e.scrollbarPadding, o), mA()),
      !_l() &&
        !j.previousActiveElement &&
        (j.previousActiveElement = document.activeElement),
      typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)),
      j.eventEmitter.emit("didOpen", n),
      Ut(t, w["no-transition"]);
  },
  M1 = (e) => {
    const t = q();
    if (e.target !== t || !fr) return;
    const n = Qe();
    t.removeEventListener(fr, M1), (n.style.overflowY = "auto");
  },
  R4 = (e, t) => {
    fr && s1(t)
      ? ((e.style.overflowY = "hidden"), t.addEventListener(fr, M1))
      : (e.style.overflowY = "auto");
  },
  A4 = (e, t, n) => {
    vA(),
      t && n !== "hidden" && CA(n),
      setTimeout(() => {
        e.scrollTop = 0;
      });
  },
  j4 = (e, t, n) => {
    W(e, n.showClass.backdrop),
      n.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          Ee(t, "grid"),
          setTimeout(() => {
            W(t, n.showClass.popup), t.style.removeProperty("opacity");
          }, D1))
        : Ee(t, "grid"),
      W([document.documentElement, document.body], w.shown),
      n.heightAuto &&
        n.backdrop &&
        !n.toast &&
        W([document.documentElement, document.body], w["height-auto"]);
  };
var hv = {
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
function L4(e) {
  e.inputValidator ||
    (e.input === "email" && (e.inputValidator = hv.email),
    e.input === "url" && (e.inputValidator = hv.url));
}
function B4(e) {
  (!e.target ||
    (typeof e.target == "string" && !document.querySelector(e.target)) ||
    (typeof e.target != "string" && !e.target.appendChild)) &&
    (qe('Target parameter is not valid, defaulting to "body"'),
    (e.target = "body"));
}
function D4(e) {
  L4(e),
    e.showLoaderOnConfirm &&
      !e.preConfirm &&
      qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    B4(e),
    typeof e.title == "string" &&
      (e.title = e.title
        .split(
          `
`
        )
        .join("<br />")),
    P5(e);
}
let Lt;
var Cs = new WeakMap();
class le {
  constructor() {
    if ((a5(this, Cs, void 0), typeof window > "u")) return;
    Lt = this;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = Object.freeze(this.constructor.argsToParams(n));
    (this.params = o),
      (this.isAwaitingPromise = !1),
      l5(Cs, this, this._main(Lt.params));
  }
  _main(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((JA(Object.assign({}, n, t)), j.currentInstance)) {
      const i = ao.swalPromiseResolve.get(j.currentInstance),
        { isAwaitingPromise: s } = j.currentInstance;
      j.currentInstance._destroy(), s || i({ isDismissed: !0 }), qd() && p1();
    }
    j.currentInstance = Lt;
    const r = F4(t, n);
    D4(r),
      Object.freeze(r),
      j.timeout && (j.timeout.stop(), delete j.timeout),
      clearTimeout(j.restoreFocusTimeout);
    const o = z4(Lt);
    return u1(Lt, r), G.innerParams.set(Lt, r), M4(Lt, o, r);
  }
  then(t) {
    return rv(Cs, this).then(t);
  }
  finally(t) {
    return rv(Cs, this).finally(t);
  }
}
const M4 = (e, t, n) =>
    new Promise((r, o) => {
      const i = (s) => {
        e.close({ isDismissed: !0, dismiss: s });
      };
      ao.swalPromiseResolve.set(e, r),
        ao.swalPromiseReject.set(e, o),
        (t.confirmButton.onclick = () => {
          FA(e);
        }),
        (t.denyButton.onclick = () => {
          zA(e);
        }),
        (t.cancelButton.onclick = () => {
          UA(e, i);
        }),
        (t.closeButton.onclick = () => {
          i(yo.close);
        }),
        t4(n, t, i),
        lA(j, n, i),
        NA(e, n),
        I4(n),
        U4(j, n, i),
        V4(t, n),
        setTimeout(() => {
          t.container.scrollTop = 0;
        });
    }),
  F4 = (e, t) => {
    const n = C4(e),
      r = Object.assign({}, Qr, t, n, e);
    return (
      (r.showClass = Object.assign({}, Qr.showClass, r.showClass)),
      (r.hideClass = Object.assign({}, Qr.hideClass, r.hideClass)),
      r.animation === !1 &&
        ((r.showClass = { backdrop: "swal2-noanimation" }), (r.hideClass = {})),
      r
    );
  },
  z4 = (e) => {
    const t = {
      popup: q(),
      container: Qe(),
      actions: Hi(),
      confirmButton: zt(),
      denyButton: wr(),
      cancelButton: vo(),
      loader: go(),
      closeButton: Wd(),
      validationMessage: Pl(),
      progressSteps: Hd(),
    };
    return G.domCache.set(e, t), t;
  },
  U4 = (e, t, n) => {
    const r = Tl();
    Ne(r),
      t.timer &&
        ((e.timeout = new E4(() => {
          n("timer"), delete e.timeout;
        }, t.timer)),
        t.timerProgressBar &&
          (Ee(r),
          nt(r, t, "timerProgressBar"),
          setTimeout(() => {
            e.timeout && e.timeout.running && Yd(t.timer);
          })));
  },
  V4 = (e, t) => {
    if (!t.toast) {
      if (!Ol(t.allowEnterKey)) {
        e1("allowEnterKey"), K4();
        return;
      }
      H4(e) || W4(e, t) || cf(-1, 1);
    }
  },
  H4 = (e) => {
    const t = e.popup.querySelectorAll("[autofocus]");
    for (const n of t)
      if (n instanceof HTMLElement && We(n)) return n.focus(), !0;
    return !1;
  },
  W4 = (e, t) =>
    t.focusDeny && We(e.denyButton)
      ? (e.denyButton.focus(), !0)
      : t.focusCancel && We(e.cancelButton)
      ? (e.cancelButton.focus(), !0)
      : t.focusConfirm && We(e.confirmButton)
      ? (e.confirmButton.focus(), !0)
      : !1,
  K4 = () => {
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
le.prototype.disableButtons = x1;
le.prototype.enableButtons = C1;
le.prototype.getInput = S1;
le.prototype.disableInput = k1;
le.prototype.enableInput = $1;
le.prototype.hideLoading = Ia;
le.prototype.disableLoading = Ia;
le.prototype.showValidationMessage = O1;
le.prototype.resetValidationMessage = P1;
le.prototype.close = En;
le.prototype.closePopup = En;
le.prototype.closeModal = En;
le.prototype.closeToast = En;
le.prototype.rejectPromise = v1;
le.prototype.update = I1;
le.prototype._destroy = R1;
Object.assign(le, b4);
Object.keys(e4).forEach((e) => {
  le[e] = function () {
    return Lt && Lt[e] ? Lt[e](...arguments) : null;
  };
});
le.DismissReason = yo;
le.version = "11.14.0";
const Aa = le;
Aa.default = Aa;
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
const q4 = (e, t) => {
    const n = new Blob([t], { type: "text/plain" }),
      r = URL.createObjectURL(n),
      o = document.createElement("a");
    (o.href = r), (o.download = e), o.click(), URL.revokeObjectURL(r);
  },
  Q4 = async (e, t) => {
    const n = i5[e],
      { value: r } = await Aa.fire({
        title: "Enter Your file Name",
        input: "text",
        inputLabel: "Enter your file name without extension",
        showCancelButton: !0,
        inputValidator: (i) => {
          if (!i) return "You need to write something!";
        },
      }),
      o = r + n;
    q4(o, t);
  },
  Y4 = ({ socketRef: e, roomId: t }) => {
    const n = S.useRef(null),
      [r, o] = S.useState("TypeScript"),
      [i, s] = S.useState(nv(r));
    S.useEffect(() => {
      console.log(r),
        e.current.emit(gn.CODE_CHANGED, { roomId: t, code: i, lang: r });
    }, [i]),
      S.useEffect(() => {
        s(nv(r));
      }, [r]);
    const a = (u) => {
        (n.current = u), u.focus();
      },
      l = (u) => {
        s(u), e.current.emit(gn.CODE_CHANGED, { roomId: t, code: u, lang: r });
      };
    return (
      S.useEffect(() => {
        const u = () => {
          n.current && n.current.layout();
        };
        return (
          window.addEventListener("resize", u),
          e.current.on(gn.CODE_CHANGED, ({ code: c, lang: f }) => {
            f !== void 0 && o(f), c !== null && s(c);
          }),
          () => {
            window.removeEventListener("resize", u);
          }
        );
      }, []),
      I.jsxs(I.Fragment, {
        children: [
          I.jsxs("div", {
            className: "buttonContainer",
            children: [
              I.jsx("button", { className: "btn runBtn", children: "Run" }),
              I.jsx("button", {
                className: "btn saveBtn",
                onClick: () => Q4(r, i),
                children: "Save",
              }),
              I.jsx("select", {
                name: "language",
                id: "language",
                onChange: (u) => o(u.target.value),
                value: r,
                children: r5.map((u) =>
                  I.jsx("option", { value: u, children: u }, u)
                ),
              }),
            ],
          }),
          I.jsx("br", {}),
          I.jsx(n5, {
            width: "100%",
            height: "90vh",
            theme: "vs-dark",
            language: r.toLowerCase(),
            value: i,
            onMount: a,
            onChange: l,
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
const Ws = Object.create(null);
Object.keys(Vt).forEach((e) => {
  Ws[Vt[e]] = e;
});
const df = { type: "error", data: "parser error" },
  F1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  z1 = typeof ArrayBuffer == "function",
  U1 = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  ep = ({ type: e, data: t }, n, r) =>
    F1 && t instanceof Blob
      ? n
        ? r(t)
        : mv(t, r)
      : z1 && (t instanceof ArrayBuffer || U1(t))
      ? n
        ? r(t)
        : mv(new Blob([t]), r)
      : r(Vt[e] + (t || "")),
  mv = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function vv(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Wu;
function G4(e, t) {
  if (F1 && e.data instanceof Blob)
    return e.data.arrayBuffer().then(vv).then(t);
  if (z1 && (e.data instanceof ArrayBuffer || U1(e.data))) return t(vv(e.data));
  ep(e, !1, (n) => {
    Wu || (Wu = new TextEncoder()), t(Wu.encode(n));
  });
}
const gv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Mo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < gv.length; e++) Mo[gv.charCodeAt(e)] = e;
const J4 = (e) => {
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
      (i = Mo[e.charCodeAt(r)]),
        (s = Mo[e.charCodeAt(r + 1)]),
        (a = Mo[e.charCodeAt(r + 2)]),
        (l = Mo[e.charCodeAt(r + 3)]),
        (c[o++] = (i << 2) | (s >> 4)),
        (c[o++] = ((s & 15) << 4) | (a >> 2)),
        (c[o++] = ((a & 3) << 6) | (l & 63));
    return u;
  },
  X4 = typeof ArrayBuffer == "function",
  tp = (e, t) => {
    if (typeof e != "string") return { type: "message", data: V1(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: Z4(e.substring(1), t) }
      : Ws[n]
      ? e.length > 1
        ? { type: Ws[n], data: e.substring(1) }
        : { type: Ws[n] }
      : df;
  },
  Z4 = (e, t) => {
    if (X4) {
      const n = J4(e);
      return V1(n, t);
    } else return { base64: !0, data: e };
  },
  V1 = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  H1 = "",
  ej = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let o = 0;
    e.forEach((i, s) => {
      ep(i, !1, (a) => {
        (r[s] = a), ++o === n && t(r.join(H1));
      });
    });
  },
  tj = (e, t) => {
    const n = e.split(H1),
      r = [];
    for (let o = 0; o < n.length; o++) {
      const i = tp(n[o], t);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  };
function nj() {
  return new TransformStream({
    transform(e, t) {
      G4(e, (n) => {
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
let Ku;
function xs(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function $s(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function rj(e, t) {
  Ku || (Ku = new TextDecoder());
  const n = [];
  let r = 0,
    o = -1,
    i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (xs(n) < 1) break;
          const l = $s(n, 1);
          (i = (l[0] & 128) === 128),
            (o = l[0] & 127),
            o < 126 ? (r = 3) : o === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (xs(n) < 2) break;
          const l = $s(n, 2);
          (o = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (xs(n) < 8) break;
          const l = $s(n, 8),
            u = new DataView(l.buffer, l.byteOffset, l.length),
            c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(df);
            break;
          }
          (o = c * Math.pow(2, 32) + u.getUint32(4)), (r = 3);
        } else {
          if (xs(n) < o) break;
          const l = $s(n, o);
          a.enqueue(tp(i ? l : Ku.decode(l), t)), (r = 0);
        }
        if (o === 0 || o > e) {
          a.enqueue(df);
          break;
        }
      }
    },
  });
}
const W1 = 4;
function ce(e) {
  if (e) return oj(e);
}
function oj(e) {
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
function K1(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const ij = dt.setTimeout,
  sj = dt.clearTimeout;
function Il(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = ij.bind(dt)), (e.clearTimeoutFn = sj.bind(dt)))
    : ((e.setTimeoutFn = dt.setTimeout.bind(dt)),
      (e.clearTimeoutFn = dt.clearTimeout.bind(dt)));
}
const aj = 1.33;
function lj(e) {
  return typeof e == "string"
    ? uj(e)
    : Math.ceil((e.byteLength || e.size) * aj);
}
function uj(e) {
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
function cj(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function fj(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class dj extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class np extends ce {
  constructor(t) {
    super(),
      (this.writable = !1),
      Il(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new dj(t, n, r)), this;
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
    const n = tp(t, this.socket.binaryType);
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
    const n = cj(t);
    return n.length ? "?" + n : "";
  }
}
const q1 =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  pf = 64,
  pj = {};
let yv = 0,
  ks = 0,
  wv;
function Sv(e) {
  let t = "";
  do (t = q1[e % pf] + t), (e = Math.floor(e / pf));
  while (e > 0);
  return t;
}
function Q1() {
  const e = Sv(+new Date());
  return e !== wv ? ((yv = 0), (wv = e)) : e + "." + Sv(yv++);
}
for (; ks < pf; ks++) pj[q1[ks]] = ks;
let Y1 = !1;
try {
  Y1 = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const hj = Y1;
function G1(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || hj)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function mj() {}
const vj = (function () {
  return new G1({ xdomain: !1 }).responseType != null;
})();
class gj extends np {
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
    (this.supportsBinary = vj && !n),
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
    tj(t, this.socket.binaryType).forEach(n),
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
      ej(t, (n) => {
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
        (n[this.opts.timestampParam] = Q1()),
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
      Il(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = K1(
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
    const r = (this.xhr = new G1(n));
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
      if (((this.xhr.onreadystatechange = mj), t))
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
  if (typeof attachEvent == "function") attachEvent("onunload", bv);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in dt ? "pagehide" : "unload";
    addEventListener(e, bv, !1);
  }
}
function bv() {
  for (let e in Ft.requests)
    Ft.requests.hasOwnProperty(e) && Ft.requests[e].abort();
}
const rp =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Os = dt.WebSocket || dt.MozWebSocket,
  Ev = !0,
  yj = "arraybuffer",
  Cv =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class wj extends np {
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
      r = Cv
        ? {}
        : K1(
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
      this.ws = Ev && !Cv ? (n ? new Os(t, n) : new Os(t)) : new Os(t, n, r);
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
      ep(r, this.supportsBinary, (i) => {
        const s = {};
        try {
          Ev && this.ws.send(i);
        } catch {}
        o &&
          rp(() => {
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
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Q1()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Os;
  }
}
class Sj extends np {
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
          const n = rj(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            o = nj();
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
          rp(() => {
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
const bj = { websocket: wj, webtransport: Sj, polling: gj },
  Ej =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Cj = [
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
function hf(e) {
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
  let o = Ej.exec(e || ""),
    i = {},
    s = 14;
  for (; s--; ) i[Cj[s]] = o[s] || "";
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
    (i.pathNames = xj(i, i.path)),
    (i.queryKey = $j(i, i.query)),
    i
  );
}
function xj(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function $j(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
      o && (n[o] = i);
    }),
    n
  );
}
let J1 = class $r extends ce {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = yj),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = hf(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = hf(n.host).host),
      Il(this, n),
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
        (this.opts.query = fj(this.opts.query)),
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
    (n.EIO = W1), (n.transport = t), this.id && (n.sid = this.id);
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
    return new bj[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      $r.priorWebsocketSuccess &&
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
    $r.priorWebsocketSuccess = !1;
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
              ($r.priorWebsocketSuccess = n.name === "websocket"),
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
      ($r.priorWebsocketSuccess = this.transport.name === "websocket"),
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
      if ((o && (n += lj(o)), r > 0 && n > this.maxPayload))
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
    ($r.priorWebsocketSuccess = !1),
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
J1.protocol = W1;
function kj(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = hf(e))),
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
const Oj = typeof ArrayBuffer == "function",
  Pj = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  X1 = Object.prototype.toString,
  Tj =
    typeof Blob == "function" ||
    (typeof Blob < "u" && X1.call(Blob) === "[object BlobConstructor]"),
  _j =
    typeof File == "function" ||
    (typeof File < "u" && X1.call(File) === "[object FileConstructor]");
function op(e) {
  return (
    (Oj && (e instanceof ArrayBuffer || Pj(e))) ||
    (Tj && e instanceof Blob) ||
    (_j && e instanceof File)
  );
}
function Ks(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Ks(e[n])) return !0;
    return !1;
  }
  if (op(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ks(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Ks(e[n])) return !0;
  return !1;
}
function Nj(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = mf(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function mf(e, t) {
  if (!e) return e;
  if (op(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = mf(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = mf(e[r], t));
    return n;
  }
  return e;
}
function Ij(e, t) {
  return (e.data = vf(e.data, t)), delete e.attachments, e;
}
function vf(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = vf(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = vf(e[n], t));
  return e;
}
const Rj = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Aj = 5;
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
class jj {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === U.EVENT || t.type === U.ACK) && Ks(t)
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
    const n = Nj(t),
      r = this.encodeAsString(n.packet),
      o = n.buffers;
    return o.unshift(r), o;
  }
}
function xv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ip extends ce {
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
          (this.reconstructor = new Lj(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (op(t) || t.base64)
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
      if (ip.isPayloadValid(r.type, i)) r.data = i;
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
        return xv(n);
      case U.DISCONNECT:
        return n === void 0;
      case U.CONNECT_ERROR:
        return typeof n == "string" || xv(n);
      case U.EVENT:
      case U.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && Rj.indexOf(n[0]) === -1))
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
class Lj {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = Ij(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Bj = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: ip,
      Encoder: jj,
      get PacketType() {
        return U;
      },
      protocol: Aj,
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
const Dj = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Z1 extends ce {
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
    if (Dj.hasOwnProperty(t))
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
function wo(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
wo.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
wo.prototype.reset = function () {
  this.attempts = 0;
};
wo.prototype.setMin = function (e) {
  this.ms = e;
};
wo.prototype.setMax = function (e) {
  this.max = e;
};
wo.prototype.setJitter = function (e) {
  this.jitter = e;
};
class gf extends ce {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Il(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new wo({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const o = n.parser || Bj;
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
    this.engine = new J1(this.uri, this.opts);
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
    rp(() => {
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
        : ((r = new Z1(this, t, n)), (this.nsps[t] = r)),
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
const Io = {};
function qs(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = kj(e, t.path || "/socket.io"),
    r = n.source,
    o = n.id,
    i = n.path,
    s = Io[o] && i in Io[o].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let l;
  return (
    a ? (l = new gf(r, t)) : (Io[o] || (Io[o] = new gf(r, t)), (l = Io[o])),
    n.query && !t.query && (t.query = n.queryKey),
    l.socket(n.path, t)
  );
}
Object.assign(qs, { Manager: gf, Socket: Z1, io: qs, connect: qs });
const Mj = async () =>
    qs("https://build-real-time-code-editor.onrender.com", {
      "force new connection": !0,
      reconnetionAttempt: "Infinity",
      timeout: 1e4,
      transports: ["websocket"],
    }),
  Fj = () => {
    var m;
    const e = S.useRef(null),
      t = Xa(),
      { roomId: n } = tE(),
      [r, o] = S.useState(!1),
      i = pd(),
      [s, a] = S.useState(!1),
      [l, u] = S.useState([]);
    if (
      (S.useEffect(
        () => (
          (async () => {
            var E;
            (e.current = await Mj()), a(!0);
            const y = (h) => {
              console.log("Socket error", h),
                Dr.error("Socket connection failed, try again later"),
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
                ({ clients: h, userName: p, socketId: v }) => {
                  var b;
                  p !== ((b = t.state) == null ? void 0 : b.userName) &&
                    (console.log(`${p} joined`),
                    Dr.success(`${p} joined the room.`)),
                    u(h);
                }
              ),
              e.current.on(gn.DISCONNECTED, ({ socketId: h, userName: p }) => {
                Dr.success(`${p} left the room.`),
                  u((v) => v.filter((b) => b.socketId !== h));
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
      !((m = t.state) != null && m.userName) || n == null)
    )
      return I.jsx(hE, { to: "/" });
    const c = () => {
        o((g) => !g);
      },
      f = () => {
        navigator.clipboard.writeText(n),
          Dr.success("Room ID copied to clipboard");
      },
      d = () => {
        e.current && e.current.disconnect(), i("/");
      };
    return I.jsxs(I.Fragment, {
      children: [
        I.jsxs("div", {
          className: `hamburger ${r ? "open" : ""}`,
          onClick: c,
          children: [I.jsx("div", {}), I.jsx("div", {}), I.jsx("div", {})],
        }),
        I.jsxs("div", {
          className: `mainWrap ${r ? "sidebarOpen" : ""}`,
          children: [
            I.jsxs("div", {
              className: `aside ${r ? "open" : ""}`,
              children: [
                I.jsxs("div", {
                  className: "asideInner",
                  children: [
                    I.jsx("div", {
                      className: "logo",
                      children: I.jsx("img", {
                        className: "logoImg",
                        src: "/code-editor-logo.png",
                        alt: "logo",
                      }),
                    }),
                    I.jsx("h3", { children: "Connected" }),
                    I.jsx("div", {
                      className: "clientsList",
                      children: l.map((g) =>
                        I.jsx(GI, { userName: g.userName }, g.socketId)
                      ),
                    }),
                  ],
                }),
                I.jsxs("div", {
                  className: "buttons",
                  children: [
                    I.jsx("button", {
                      className: "btn copyBtn",
                      onClick: f,
                      children: "Copy Room ID",
                    }),
                    I.jsx("button", {
                      className: "btn leaveBtn",
                      onClick: d,
                      children: "Leave Room",
                    }),
                  ],
                }),
              ],
            }),
            I.jsx("div", {
              className: "editorWrap",
              children: s && I.jsx(Y4, { socketRef: e, roomId: n }),
            }),
          ],
        }),
      ],
    });
  };
function zj() {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsx("div", {
        children: I.jsx(hC, {
          position: "top-center",
          reverseOrder: !1,
          toastOptions: {
            duration: 2e3,
            success: { theme: { primary: "#4aed88" } },
          },
        }),
      }),
      I.jsx(wE, {
        children: I.jsxs(vE, {
          children: [
            I.jsx(Fc, { path: "/", element: I.jsx(mC, {}) }),
            I.jsx(Fc, { path: "/editor/:roomId", element: I.jsx(Fj, {}) }),
          ],
        }),
      }),
    ],
  });
}
By(document.getElementById("root")).render(I.jsx(zj, {}));
