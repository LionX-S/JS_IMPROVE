import Compute from '../lib/Compute';

export default class Calculator extends Compute {
	constructor(el) {
    super();
		this.name = "Calculator";
		this.oResult = el.getElementsByClassName("result")[0];
		this.oBtnGroup = el.getElementsByClassName("button-group")[0];
		this.oInputs = el.getElementsByClassName("num-input");
	}
	init() {
		this.bindEvent();
	}

	bindEvent() {
		this.oBtnGroup.addEventListener("click", this.onBtnClick.bind(this), false);
	}

	onBtnClick(ev) {
		const e = ev || window.event,
			tar = e.target || e.srcElement,
			tagName = tar.tagName.toLowerCase();
		if (tagName === "button") {
			const method = tar.getAttribute("data-method"),
				fVal = Number(this.oInputs[0].value.replace(/\s+/g, "")) || 0,
				sVal = Number(this.oInputs[1].value.replace(/\s+/g, "")) || 0;
      
      
      this.setResult(method, fVal, sVal);
			// switch (method) {
			// 	case "plus":
			// 		this.oResult.innerText = fVal + sVal;
			// 		break;
			// 	case "minus":
			// 		this.oResult.innerText = fVal - sVal;
			// 		break;
			// 	case "multiple":
			// 		this.oResult.innerText = fVal * sVal;
			// 		break;
			// 	case "division":
			// 		this.oResult.innerText = fVal / sVal;
			// 		break;
			// 	default:
			// 		break;
			// }
		}
	}

  setResult(method, fVal, sVal) {
    this.oResult.innerText = this[method](fVal, sVal);
  }
}
