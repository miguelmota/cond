(function(root) {
  'use strict';

  function cond(clauses, context) {
    context = context || this;

    return function(/* args */) {
      for (var i = 0, l = clauses.length, s; i < l; i++) {
        if (Array.isArray(clauses[i])) {
          if (
            typeof clauses[i][0] === 'function' ?
            clauses[i][0].apply(context, arguments) :
            clauses[i][0]
          ) {
            if (typeof clauses[i][1] === 'function') {
              return clauses[i][1].apply(context, arguments);
            } else {
              return clauses[i][1];
            }
          }
        }
      }
    };
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = cond;
    }
    exports.cond = cond;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return cond;
    });
  } else {
    root.cond = cond;
  }

})(this);
