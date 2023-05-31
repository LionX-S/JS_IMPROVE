var calculator = document.getElementsByClassName("J_calculator")[0],
	result = document.getElementsByClassName("result")[0];
(fInput = document.getElementsByTagName("input")[0]),
	(sInput = document.getElementsByTagName("input")[1]),
	(buttonG = document.getElementsByClassName("button-group")[0]);
buttonG.addEventListener("click", onBtnClick, false);

function onBtnClick(event) {
	var e = event || window.event,
		tar = e.target || e.srcElement,
		tagName = tar.tagName.toLowerCase();
	if (tagName === "button") {
		var method = tar.getAttribute("data-method"),
			fVal = Number(fInput.value.replace(/\s+/g, "")) || 0,
			sVal = Number(sInput.value.replace(/\s+/g, "")) || 0;

		switch (method) {
			case "plus":
				result.innerText = fVal + sVal;
				break;
			case "minus":
				result.innerText = fVal - sVal;
				break;
			case "multiple":
				result.innerText = fVal * sVal;
				break;
			case "division":
				result.innerText = fVal / sVal;
				break;
			default:
				break;
		}
	}
}

;(function(doc){
  var calculator = doc.getElementsByClassName("J_calculator")[0],
	    OResult = calculator.getElementsByClassName("result")[0],
      OInputs = calculator.getElementsByTagName("input"),
	    buttonG = calculator.getElementsByClassName("button-group")[0];
  
  var init = function() {
    bindEvent();
  };
  function bindEvent() {
    buttonG.addEventListener('click', onBtnClick, false);
  }
  function onBtnClick(event) {
    var target = initModule.getTarget(event),
        targetName = target.tagName.toLowerCase();
    if(targetName === 'button') {
      var method = target.getAttribute('data-method'),
      fVal = initModule.getValue(OInputs[0].value),
      sVal = initModule.getValue(OInputs[1].value);
      renderResult(initCompute[method](fVal, sVal));
    }
  }
  
  function renderResult(result) {
    OResult.innerText = result;
  }
  init();
})(document)

(function test() {
  console.log('test');
})();