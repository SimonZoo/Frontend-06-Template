学习笔记

#### 语法树和优先级
用产生式来定义优先级

##### Member 

例如`object.item`，`object[item]`，选取成员，优先级高。



##### Reference 类型

 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。

按规范的描述，Reference 是一个 name binding，由三部分组成：

- base
- reference name
- strict mode flag

规范本身的细节这里很难深入，但举简单粗暴的例子来说: a.b 作为 left hand expression 返回的 Reference，base 是 a，reference name 是 "b"。如果 a.b 是个函数，那么调用 a.b() 时会用 a.b 的 base，也就是 a，作为这次调用的 this。



作者：尤雨溪
链接：https://www.zhihu.com/question/31911373/answer/53870311
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



##### Expressions
主要分为`left handside`和`right handside`。

参考MDN：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators





#### 类型转换

类型转换的相关文章：https://chinese.freecodecamp.org/news/javascript-implicit-type-conversion/

1. 减、乘、除

在对各种非`Number`类型运用数学运算符(`- \* /`)时，会先将非`Number`类型转换为`Number`类型。

2. 加法的特殊

   为什么加法要区别对待？因为JS里 `+`还可以用来拼接字符串。谨记以下3条：

- 当一侧为`String`类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
- 当一侧为`Number`类型，另一侧为原始类型，则将原始类型转换为`Number`类型。
- 当一侧为`Number`类型，另一侧为引用类型，将引用类型和`Number`类型转换成字符串后拼接。



##### 逻辑语句中的类型转换

1.单个变量

如果只有单个变量，会先将变量转换为Boolean值。

我们可以参考**附录**的转换表来判断各种类型转变为`Boolean`后的值。

不过这里有个小技巧：

只有 `null` `undefined` `''` `NaN` `0` `false` 这几个是 `false`，其他的情况都是 `true`，比如 `{}` , `[]`。



2.使用 == 比较中的5条规则

- 规则 1：`NaN`和其他任何类型比较永远返回`false`（包括和他自己）。

- 规则 2：Boolean 和其他任何类型比较，Boolean 首先被转换为 Number 类型。
- 规则 3：`String`和`Number`比较，先将`String`转换为`Number`类型。
- `原始类型`和`引用类型`做比较时，引用类型会依照`ToPrimitive`规则转换为原始类型。即拆箱转换，Object 转为普通类型。`ToPrimitive`规则，是引用类型向原始类型转变的规则，它遵循先`valueOf`后`toString`的模式期望得到一个原始类型。



### 宏任务和微任务

可以参考的文章：

https://cloud.tencent.com/developer/article/1332957

宏任务：传给JS引擎的任务

微任务：JS引擎的任务



事件循环，一开始是node中的概念，浏览器中存在类似的「事件循环」。事件循环一般分为三步，第一步获取代码，第二部执行代码，第三部等待，再次获取代码。

