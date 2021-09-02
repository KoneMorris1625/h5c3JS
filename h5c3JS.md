# h5

# c3

## 选择器

## 属性

## 布局

* 标准流
* 浮动
* 定位
------
* 流式布局
  + 携程 H5
* flex 布局
  + 京东 H5
* rem 布局
  + 苏宁 H5
* 响应式布局
  + sumsing
  + apple
# JS

## 1. 变量 (variable)

* 相当于一个保存数据的容器.
* 变量初始化是指**声明变量同时给变量赋值**

### Boolean 与 0 的转换

* String  Number  Boolean NaN underfined  Null
*  
//! TODO

#### Boolean

#### 0

## 2. 运算符 (operator)

### 短路运算与逻辑运算

#### && 

1. t/ f 模式
   前假则假, 前真看后
2. num 模式, 即 "与运算"
    前假返回前 TODO, 前真返回后. 

#### ||

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
  + [forPractice](./forPractice.md).
2. while
3. do while

## 4. 函数 function

1. 函数不调用不执行, skip
2. ' function() ' 内置 " arguments " 用来存储不知数量和类型的**所有实参**.
  + arguments 是伪数组, 可遍历获取到所有实参.
    - 有 'length'属性; 
    - index 从 0 开始;
    - 'arguments[0]' 获取到第一个实参;
  
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
preparse: var  function
* var: 所有变量提升到当前作用域最前面, 只声明不赋值; 
* function: 提升到当前作用域最前面, 不调用.

```js
  function fun() {
    var a = b = c = 9;
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
**case**: 2021年9月1日 22:23:07  星期三 

> 1. 字符串拼接
> 2. 月: 0 - 11 月
> 3. 星期: 0 - 6 day

##### 毫秒

**case01**: timestamp    #TODO#
**case02**: countdown
[text](https://link)

```JavaScript
 // 倒计时效果 
 // 1.核心算法:输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减，比如 05分减去25分，结果会是负数的。
 // 2.用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。 

 // 3.把剩余时间总的毫秒数转换为天、时、分、秒(时间戳转换为时分秒)
 // 转换公式如下: // 秒数 = 毫秒数 * 1000;
 // d=parseInt(总秒数/60/60/24); // 计算天数 
 // h=parseInt(总秒数/60/60%24) // 计算小时 
 // m=parseInt(总秒数/60 %60); 计算分数 
 // s=parseInt(总秒数%60); // 计算当前秒数 
```

#### Array 对象

1. `arr instanceof Array`  &  `Array.isArray(arr)`

2. `push()` & `unshift()`

3. `pop()` & `shift()`

4. `reverse()` & `sort()`

```JavaScript
arr.sort(function(a, b) { //升序排序
  return a - b;
});
```

1. `indexOf()` &  & 

**case** 手写一个数组去重 `unique()`

6. `toString()` & `join()`

7. `splice()`

#### String 对象

1. `indexOf()`
  **case**: 字符串某个字符出现次数和位置
2. `charAt()`
