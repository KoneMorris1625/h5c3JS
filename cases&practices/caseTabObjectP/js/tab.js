let that = null;
/**
 * tab object
 */
class Tab {
	/**
	 * 获取数据, 不变的, 框架性的元素
	 * @param {string} id "#tab"
	 */
	constructor(id) {
		that = this;
		this.main = document.querySelector(id); //缩小 document 范围
		// this.fsection = this.main.querySelector(".tabscon section")
		this.addButten = this.main.querySelector(".tabadd");
		// ul, father of li, the tabs.
		this.ul = this.main.querySelector(".fisrstnav ul:first-child");
		this.fsection = this.main.querySelector(".tabscon");

		this.init();
	}
	/**
	 * update 数量动态变化的元素们
	 */
	updateElm() {
		this.lis = this.main.querySelectorAll("li");
		this.sections = this.main.querySelectorAll("section");
		// 字体图标也能被选择器获取到.~
		this.delelteSymbols = this.main.querySelectorAll(".icon-guanbi");
		this.spans = this.main.querySelectorAll(
			".fisrstnav li span:first-child"
		);
		console.log(this.spans);
	}
	/**
	 * exclusive idea
	 */
	clearClass() {
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].className = "";
			this.sections[i].className = "";
		}
	}
	/**
	 * get dynamic elements & bind even listener
	 */
	init() {
		// 重新获取当前组件所有元素
		this.updateElm();

		this.addButten.onclick = this.addTab;
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i;
			// this.lis[i].onclick = () => console.log(this.lis[i].index);
			this.lis[i].addEventListener("click", this.tabToggle);
			// this.lis[i].onclick = this.tabToggle;
			this.delelteSymbols[i].addEventListener("click", this.removeTab);
			this.spans[i].addEventListener("dblclick", this.editTab);
			this.sections[i].addEventListener("dblclick", this.editTab);
		}
	}

	tabToggle() {
		// //! console.log(this); this 的指向问题, 这里为什么指向的 lis[i]?
		// //* 给 lis[i] 绑定的监听函数, 是它调用的 tabToggle 函数
		that.clearClass();
		this.className = "liactive";
		that.sections[this.index].className = "conactive";
	}
	/**
	 * 1. 创建 `<li>` `section`
	 * 2. 追加 `<li>` 到父元素的 beforeend
	 */
	addTab() {
		that.clearClass();
		let random = Math.floor(Math.random() * 10);
		let li =
				'<li class="liactive"><span>New Tab_' +
				random +
				'</span><span class="iconfont icon-guanbi"></span></li>',
			section = '<section class="conactive">测试' + random + "</section>";
		that.ul.insertAdjacentHTML("beforeend", li);
		that.fsection.insertAdjacentHTML("beforeend", section);
		// //! bug复现: 新添加的 tab 无点击功能, 原因: 新创建的 li 和 section 是后创建的, 所以并无点击切换功能
		that.init();
		// //todo 新增更多的选项卡, 样式无改变, 导致塌方.
	}
	/**
	 *	function that remove tabs.
	 * @param {object} e event object
	 * @returns void
	 */
	removeTab(e) {
		// 防止触发点击事件的冒泡, 父元素 li 有点击选中事件.
		e.stopPropagation();
		//** get index whose li & section should be removed */
		let index = this.parentNode.index;

		that.lis[index].remove();
		that.sections[index].remove();
		// 逻辑优化: 1. has selected: return
		if (that.main.querySelector(".liactive")) return;
		// 2. is selected: click previous tab
		that.lis[--index] && that.lis[--index].click();
	}
	editTab(e) {
		window.getSelection
			? window.getSelection().removeAllRanges()
			: document.selection.empty();
		let str = this.innerHTML;
		this.innerHTML = "<input type = 'text' />";
		// let inputText = this.querySelector("input")
		let inputText = this.children[0];
		inputText.value = str;
		inputText.select();

		inputText.onblur = function () {
			this.parentNode.innerHTML = inputText.value;
		};
		inputText.onkeyup = function (e) {
			// enter = 13
			if (e.keyCode === 13) {
				this.blur();
			}
		};
	}
}
new Tab("#tab");
