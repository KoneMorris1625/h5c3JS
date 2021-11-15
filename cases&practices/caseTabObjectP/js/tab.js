let that = null;
/**
 * tab object
 */
class Tab {
	/**
	 *
	 * @param {string} id
	 */
	constructor(id) {
		that = this;
		// 获取不变的, 框架性的元素
		this.main = document.querySelector(id); //缩小 document 范围
		this.ul = this.main.querySelector(".firstnav ul");
		// this.fsection = this.main.querySelector(".tabscon section")
		this.fsection = this.main.querySelector(".tabscon");
		this.addButten = this.main.querySelector(".tabadd span");
		this.init();
	}
	/**
	 * update 数量动态变化的元素们
	 */
	updateElm() {
		this.lis = this.main.querySelectorAll("li");
		this.sections = this.main.querySelectorAll("section");
	}

	init() {
		this.updateElm();
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i;
			// this.lis[i].onclick = () => console.log(this.lis[i].index);
			this.lis[i].addEventListener("click", this.tabToggle);
			// this.lis[i].onclick = this.tabToggle;
		}
	}
	clearClass() {
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].className = "";
			this.sections[i].className = "";
		}
	}
	tabToggle() {
		// //! console.log(this); this 的指向问题, 这里为什么指向的 lis[i]?
		// //* 给 lis[i] 绑定的监听函数, 是它调用的 tabToggle 函数
		that.clearClass();
		this.className = "liactive";
		that.sections[this.index].className = "conactive";
	}
	addTab() {}
	deleteTab() {}
	editableTab() {}
}
new Tab("#tab");
