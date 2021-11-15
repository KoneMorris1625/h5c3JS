# JS
- [JS](#js)
  - [1. 变量 (variable)](#1-变量-variable)
    - [变量声明](#变量声明)
    - [Boolean 与 0 的转换](#boolean-与-0-的转换)
      - [Boolean](#boolean)
      - [0](#0)
  - [2. 运算符 (operator)](#2-运算符-operator)
    - [短路运算与逻辑运算](#短路运算与逻辑运算)
      - [`&&`](#)
      - [`||`](#-1)
    - [优先级](#优先级)
  - [3. 流程控制 (loop)](#3-流程控制-loop)
    - [分支结构](#分支结构)
    - [循环结构 Loop](#循环结构-loop)
  - [4. 函数 function](#4-函数-function)
  - [5. 作用域](#5-作用域)
  - [6. 预解析](#6-预解析)
  - [7. 对象](#7-对象)
    - [7.1 内置对象](#71-内置对象)
      - [Math 对象](#math-对象)
      - [Date 对象](#date-对象)
        - [毫秒](#毫秒)
      - [Array 对象](#array-对象)
      - [String 对象](#string-对象)
  - [8. DOM](#8-dom)
    - [8.1 ES 与 DOM 和 BOM 关系](#81-es-与-dom-和-bom-关系)
    - [8.2 操作元素(Element)](#82-操作元素element)
      - [事件](#事件)
    - [操作节点(Node)](#操作节点node)
  - [9. 对象](#9-对象)
    - [9.1 类与对象](#91-类与对象)
      - [[case] tab栏切换](#case-tab栏切换)

## 1. 变量 (variable)

* 相当于一个保存数据的容器.
* 变量初始化是指**声明变量同时给变量赋值**

### 变量声明

### Boolean 与 0 的转换

* String Number Boolean NaN underfined Null
* //! TODO

#### Boolean

#### 0

## 2. 运算符 (operator)

### 短路运算与逻辑运算

#### `&&`

1. t/ f 模式
   前假则假, 前真看后
2. num 模式, 即 "与运算"
   前假返回前 TODO, 前真返回后.

#### `||`

### 优先级

## 3. 流程控制 (loop)

### 分支结构

1. if else
2. switch

```js
    switch (条件表达式[值]) {
        case 值1:
            xxxxxxx;
            break;
        case 值2:
            xxxxxxx;
            break;
            ...
        default
        // * TODO
    }
```

区别:

* 语法
  + if 里的条件表达式一般是表示范围的大于, 小于或者等于, 
  + 而 switch 则是确定的值
* 执行顺序
  + if 是从上到下, 一个一个执行, 碰到能执行的才跳出, 执行效率较低
  + switch 则是直接条件表达式的值和选项进行匹配, 不用从上到下挨个执行一遍条件判断.
* 总结:
  + 选项较少, 或者条件表达式是范围时用 if else, 否则用 switch 效率更高点

### 循环结构 Loop

循环的目的: 帮助我们解决**重复执行代码**的问题.

1. for

* [forPractice](./forPractice.md).

2. while
3. do while

## 4. 函数 function

1. 函数不调用不执行, skip
2. ' function() ' 内置 " arguments " 用来存储不知数量和类型的**所有实参**.

* arguments 是伪数组, 可遍历获取到所有实参.
  + 有 'length'属性; 
  + index 从 0 开始; 
  + 'arguments[0]' 获取到第一个实参; 

3. 函数表达式

```JS
  // fun 是变量名, 用变量存储一个函数表达式.
  var fun = function(args) {}
  // 调用:
  fun();
```

## 5. 作用域

* 局部
* 全局
  + 函数内未声明的直接赋值的变量也是全局变量
* 作用域链
  + -> 就近原则

## 6. 预解析

JS 引擎进行预解析 + 执行 js 代码
preparse: var function

* var: 所有变量提升到当前作用域最前面, 只声明不赋值; 
* function: 提升到当前作用域最前面, 不调用.

```js
function fun() {
    var a = (b = c = 9);
    // 预解析为:
    // var a;
    // a = 9; b = 9; c = 9;
    // b 和 c 即是 全局变量.
}
```

## 7. 对象

三种对象声明

1. 字面量声明
2. `new Object()`
3. 构造函数

### 7.1 内置对象

#### Math 对象

 `Math. Random()`

**case**: 获取指定范围的随机整数:

```JavaScript
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
```

#### Date 对象

必须通过构造函数获取 `Date()` 对象; 
**case**: 2021 年 9 月 1 日 22:23:07 星期三

> 1. 字符串拼接
> 2. 月: 0 - 11 月
> 3. 星期: 0 - 6 day

##### 毫秒

**case01**: timestamp
**case02**: [倒计时 `countdown()` ](./html/dateArrayString.html/#countdown)

> 倒计时效果 1. 核心算法: 输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减，比如 05 分减去 25 分，结果会是负数的。 2. 用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。 3. 把剩余时间总的毫秒数转换为天、时、分、秒(时间戳转换为时分秒)
> 转换公式如下: // 秒数 = 毫秒数 \* 1000; 
> d=parseInt(总秒数/60/60/24); // 计算天数
> h=parseInt(总秒数/60/60%24) // 计算小时
> m=parseInt(总秒数/60 %60); 计算分数
> s=parseInt(总秒数%60); // 计算当前秒数

#### Array 对象

1. `arr instanceof Array` & `Array.isArray(arr)`

2. `push()` & `unshift()`

3. `pop()` & `shift()`

4. `reverse()` & `sort()`

```JavaScript
arr.sort(function(a, b) { //升序排序
    return a - b;
});
```

5. `indexOf()` & &
   **case**: [手写一个数组去重 unique()](./html/dateArrayString.html/#unique)

6. `toString()` & `join()`

* 数组转字符串.

7. `splice()`

#### String 对象

1. `indexOf()`
   **case**: [字符串某个字符出现次数和位置 `indexTwoArgs()` ](./html/dateArrayString.html)

2. `charAt()`
   **case**: [统计出现次数最多的字符 `indexTwoArgs()` ](./html/dateArrayString.html)
   todo

## 8. DOM

### 8.1 ES 与 DOM 和 BOM 关系

ES：语法；词法； 基础
DOM/BOM：实现网页交互, 是对 ES 的应用.

1. web api, 浏览器给 coder 留的接口, 用以操作整个页面.
2. DOM Tree
   > Document - Element - 76
   > Element: 所有元素, 即标签
   > Node: 所有页面内内容. 包括 Element, attribute, text, 空格和换行.

### 8.2 操作元素(Element)

#### 事件

事件三要素: 事件源, 事件类型, 执行程序

> what -- which -- how
> 事件源 -- 事件类型 -- 执行函数
> 该事件类型让哪几个元素发生了什么变化?

### 操作节点(Node)

父节点
子节点
**case**: 新浪下拉菜单
方式: 利用节点层级关系获取各元素

> 事件源和类型: 看不见的每个选项盒子 `li` ; `onmouseover` 和 `onmouseout` > `children[1]` 的妙用: 第二个元素**节点**

**case**: 简易留言板
需求:
留言后, 向 `ul` 中添加子节点, 增加删除链接, 

> 思路:
> 事件源和类型: "发布" 按钮; 
> 函数:
>
> 1. 点击后向 `ul` 中追加 `li` ; 
> 2. `li.innerHtml = textarea.value` ; 

**[case]**: 动态列表, 节点的展示与删除

## 9. 对象

### 9.1 类与对象

类是对对象共有属性, 方法的抽象.
类实例化后, 就是具体的对象. 

`super(args)` 解决子类继承父类调用父类方法, 但父类属性获取不到数据的问题. `super.functionName(args)` 调用常规函数.
  子类继承父类属性方法, 同时自己有独有的属性方法. 做法: 子类构造函数中第一行写 `super(args)` ; 对父类初始化传递参数. 
`const benc = new Car()` ; 

#### [case] tab栏切换

新增选项卡有两个bug: 
* 之前的选项卡仍有 active 属性, 即仍有被选中时的样式: 业务上来说, 新增的选项卡是当前展示的, 代码上来说, 新增的选项卡才具有 active 类型的属性, 之前的选项卡应该清除样式. 
* 新增的选项卡并没有绑定点击事件, 不具备 toggle 切换功能.

删除选项卡
- 选中状态下点击删除和未选中当前 tab 的删除
    - ~~删除最后一个选项卡, 前一个被选中;~~
- 待完善: 
  - 类似于浏览器那种: 删除选中中间位置的选项卡, index 虽然减少了, 但删除后选中的是: 原后一个, 现当前这个位置的 tab. 而不是案例中直接 `index--`选中前一个.

> // TODO: 嗯, 加油. 我下午看的时候还发现一件事, 就是我喜欢看完视频后瞎总结, 但后来瞄了眼时间, 突然发现费的时间太多了. 不如, 看完理解思路了就去敲代码, 一次没记住, 那就再敲一次. 敲完再总结
> 理解思路, 注意要点, 坑点, 细节; 看完可以做个草稿标识, 别费太多时间
> 顺着思路自己敲一遍, 找那些是容易忽略的, 容易出错的, 那些是奇技淫巧
> 再捋一遍思路.