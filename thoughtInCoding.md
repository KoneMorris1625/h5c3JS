# Thougt In Coding
- [Thougt In Coding](#thougt-in-coding)
  - [learning Method](#learning-method)
    - [API 学习和运用](#api-学习和运用)
    - [原型图的落地, 需求转换成代码](#原型图的落地-需求转换成代码)
  - [art of programming](#art-of-programming)
    - [Constructor Initialization](#constructor-initialization)
    - [counter](#counter)
    - [container](#container)
    - [index](#index)
    - [flag](#flag)
      - [开关灯](#开关灯)
    - [exclusive thought 排他](#exclusive-thought-排他)
    - [compatibility encapsulation function](#compatibility-encapsulation-function)
    - [循环不变量](#循环不变量)

## learning Method

### API 学习和运用

1. function 的 功能
2. args 的类型和数量
3. return 的类型, 数量, **能有哪些妙用, 即 case**

### 原型图的落地, 需求转换成代码

* **布局分析**
* **功能分析**
  + 事件三要素: 源, 类型, 函数
  + 业务?: CRUD
* 对象抽取
  + 对象内属性及`方法-->对应的功能实现`

## art of programming

### Constructor Initialization

### counter

### container

### index

### flag

#### 开关灯

```js
// 伪代码
if (flag === 0) {
    // 执行函数体
    // 最后声明当前灯的开关状态: 已经开过了
    flag = 1;
} else {
    // 执行函数体
    // 最后声明当前灯的开关状态: 关了
    flag = 0;
}
```

### exclusive thought 排他

1. clean all. --> for loop
2. set current.

### compatibility encapsulation function

兼容性封装函数

### 循环不变量

* 循环中维护了一个循环不变量, 维护了一种声明, target 始终保持在 [l, r] 区间中
* 快排, 堆, 图
* 关注**如何控制边界来保证循环不变量**