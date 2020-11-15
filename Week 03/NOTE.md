[toc]

### 正则表达式

#### 创建正则表达式

有两种方法可以创建一个 `RegExp` 对象：一种是字面量，另一种是构造函数。

- 字面量

  由**斜杠**包围而不是引号包围。

- 构造函数的字符串参数

  由**引号**而不是斜杠包围。

```javascript
/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');
```

#### 静态属性

[`RegExp.lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)

该索引表示从哪里开始下一个匹配



#### 实例属性

[`RegExp.prototype.ignoreCase`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)

匹配文本的时候是否忽略大小写。



[`RegExp.prototype.multiline`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)

是否进行多行搜索。



[`RegExp.prototype.source`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)

正则表达式的文本。



[`RegExp.prototype.global`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)

针对字符串中所有可能的匹配项测试正则表达式，还是仅针对第一个匹配项。



#### 实例方法

[`RegExp.prototype.exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

在该字符串中执行匹配项的搜索。



[`RegExp.prototype.test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

该正则在字符串里是否有匹配。



[`RegExp.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)

返回表示指定对象的字符串。重写[`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法。



### yield *

`function*` 这种声明方式(`function`关键字后跟一个星号）会定义一个***生成器函数\*(***generator function***)**，它返回一个  [`Generator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator) 对象。

**生成器函数**在执行时能暂停，后面又能从暂停处继续执行。



调用一个**生成器函数**并不会马上执行它里面的语句，而是返回一个这个生成器的 **迭代器** **（ [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) ）对象**。当这个迭代器的 `next() `方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现[`yield`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)的位置为止，[`yield`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 后紧跟迭代器要返回的值。或者如果用的是 [`yield*`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*)（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。



`next()`方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 `yield `表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有` yield `语句，即生成器函数是否已经执行完毕并返回。



### AST

抽象语法树AST是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

在语言编译过程中会产生AST，个人理解是，将程序员使用的高级语言，通过词法分析、语法分析生成抽象语法数，再对抽象语法树进行解释，执行。

#### 词法分析

词法分析是将字符转换为token的过程，token是代码中可以处理的最小单位，例如，`3 + 2`被词法分析之后，可以获得`3` `+` `2` 三个token。

词法分析后获得的一个token列表。



#### 语法分析

对token列表进行语法分析之后可以获得抽象语法树。由于token中还包含了语法，例如上面例子中的`+`操作，所以在生成抽象语法树的过程后还回去验证语法是否正确，对无法识别的抛出错误。

