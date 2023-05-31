var initModule = (function () {
  function getTarget(event) {
    var e = event || window.event
    return e.target || e.srcElement;
  }

  function getValue(val) {
    return Number(val.replace(/\s+/g, "")) || 0;
  }

  return {
    getTarget: getTarget,
    getValue: getValue
  }
})();

var initCompute = (function () {
  function plus(val1, val2) {
    return val1 + val2;
  }

  function minus(val1, val2) {
    return val1 - val2;
  }

  function multiple(val1, val2) {
    return val1 * val2;
  }

  function division(val1, val2) {
    return val1 / val2;
  }

  return {
    plus: plus,
    minus: minus,
    multiple: multiple,
    division: division
  }
})();
