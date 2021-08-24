# h5

# c3

## 选择器

## 属性

## 布局

- 标准流
- 浮动
- 定位

------

- 流式布局
- flex 布局
- rem 布局
- 响应式布局

# JS

## 1. 变量 (variable)

- 相当于一个保存数据的容器.
- 变量初始化是指**声明变量同时给变量赋值**


### Boolean 与 0 的转换

- String  Number  Boolean NaN underfined  Null

+  
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
    switch (条件表达式[值]){
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
- 语法
  - if 里的条件表达式一般是表示范围的大于,小于或者等于, 
  - 而 switch 则是确定的值
- 执行顺序
  - if 是从上到下, 一个一个执行,碰到能执行的才跳出, 执行效率较低
  - switch 则是直接条件表达式的值和选项进行匹配, 不用从上到下挨个执行一遍条件判断.
- 总结:
  - 选项较少, 或者条件表达式是范围时用 if else, 否则用 switch 效率更高点

### 循环结构
循环的目的: 帮助我们解决**重复执行代码**的问题.
1. for
  - 经典练习

2. while
3. do while