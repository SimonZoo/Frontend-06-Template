学习笔记



[toc]

### 语言按语法分类

#### 非形式语言
- 中文
- 英文

#### 形式语言（乔姆斯基谱系）
- 0型文法（无限制文法或短语结构文法）包括所有的文法：定义清楚就可以
- 1型文法（上下文相关文法）生成上下文相关语言：会因为上下文的不同而有不同意义
- 2型文法（上下文无关文法）生成上下文无关语言：不管在什么上下文中都有相同的意思
- 3型文法（正规文法）生成正则语言：可以被正则描述



### 产生式

- 尖括号扩起来的名称：语法结构名
- 语法结构
    - 基础结构（终结符，不是终止的意思，该概念类似叶子节点）
    - 复合结构（非终结符）
- 引号和中间的字符表示终结符
- 可以有括号
- \* 表示重复多次
- | 表示或
- \+表示至少一次



### 语言的分类

#### 形式语言按照用途来分类

- 数据描述语言，JSON、SQL之类
- 编程语言



#### 形式语言按照表达方式分类

- 声明式语言
- 命令型语言



### 图灵完备性

- 命令式：图灵式
  - goto
  - if 和 while
- 声明式 lambda：递归



### 动态与静态

动态：在用户设备上、产品实际运行时，runtime

静态：在程序员的设备上，产品开发时运行，编译 compiletime



### 类型系统

- 强类型和弱类型的区别，主要看类型是否能转换
- 复合类型
  - 结构体
  - 函数签名
- 子类型/泛型
  - 逆变：子类可以转换为父类
  - 协变：父类可以转换为子类
  - [参考链接](https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html)



### 一般命令式编程语言

- atom：变量名，字符串/数字直接量
- express：包含atom和operator
- statement：语句，关键词，表达式
- structure：结构化，function、class之类
- program：组织代码，module、package、library



### JavaScript类型

#### Number

IEEE754 Double Float：1个符号位，11个指数位，52个精度位

浮点数，小数点可以来回浮动。

将数字拆成指数和有效位数，指数决定了浮点数表示的范围；有效位数决定了浮点数的精度。





#### String

**`String`** 全局对象是一个用于字符串或一个字符序列的构造函数。

基本字符串和字符串对象的区别：

请注意区分 JavaScript 字符串对象和基本字符串值 . ( 对于 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 和[`Numbers`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 也同样如此.)

字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串。JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

部分方法：

[`String.prototype.charAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)：返回特定位置的字符。

[`String.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)：连接两个字符串文本，并返回一个新的字符串。

[`String.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)：判断一个字符串里是否包含其他字符串。

[`String.prototype.endsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)：判断一个字符串的是否以给定字符串结尾，结果返回布尔值。

[`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)：对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。

[`String.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)：摘取一个字符串区域，返回一个新的字符串。

[`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)：通过分离字符串成字串，将字符串对象分割成字符串数组。



更多方法参考MDN文档。



#### Object

`Object` 构造函数创建一个对象包装器。

在JavaScript中，几乎所有的对象都是`Object`类型的实例，它们都会从`Object.prototype`继承属性和方法。`Object` 构造函数为给定值创建一个对象包装器。`Object`构造函数，会根据给定的参数创建对象，具体有以下情况：

- 如果给定值是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，将会创建并返回一个空对象
- 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
- 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址

当以非构造函数形式被调用时，`Object` 的行为等同于 `new Object()`。

##### `Object` 构造函数的属性

- `Object.length`

  值为 1。

- [`Object.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

  可以为所有 Object 类型的对象添加属性。

##### `Object` 实例和 `Object` 原型对象

JavaScript中的所有对象都来自 `Object`；所有对象从[`Object.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)继承方法和属性，尽管它们可能被覆盖。例如，其他构造函数的原型将覆盖 `constructor` 属性并提供自己的 `toString()` 方法。`Object` 原型对象的更改将传播到所有对象，除非受到这些更改的属性和方法将沿原型链进一步覆盖。