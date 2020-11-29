学习笔记

### proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

一般以这种形式使用：
```javascript
const p = new Proxy(target, handler)
// target
// 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

// handler
// 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

```



handler对象的方法：

- [`handler.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf)

  [`Object.getPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) 方法的捕捉器。

- [`handler.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf)

  [`Object.setPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 方法的捕捉器。

- [`handler.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty)

  [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 方法的捕捉器。

- [`handler.has()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has)

  [`in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符的捕捉器。

- [`handler.get()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get)

  属性读取操作的捕捉器。

- [`handler.set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set)

  属性设置操作的捕捉器。

  

关于基本操作的拦截，[`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 也可以通过访问器属性中的get和set对赋值和曲值做一些操作，但是[`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的功能感觉没有 Proxy 强大。Proxy 提供的具体拦截方法可以直接看MDN。

一般在底层或者封装某块内容代码的时候可以用到 Proxy，因为 Proxy 过于强大和带来的不可控性，可以思考一下是否应该在业务中使用 Proxy 或者允许大量使用 Proxy 🤔。



### 双向绑定/观察者模式

和[`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 一样，可以利用 Proxy 中拦截 get/set 方法实现一些绑定的操作。

从数据更新反应到视图，可以在 set 方法赋值的时候更新DOM元素中的值；从DOM元素中输入的改变，可以通过DOM本身提供的监听方法，对数据进行修改。



和双向绑定经常放在一起学习的设计模式是**观察者模式**。

观察者模式是一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新。

 了解观察者模式主要是了解两个概念，由于各种版本书籍翻译不同，会有不同的名称。

- Subject，目标，即被观察者，也有翻译为“发布者”。
  - 目标知道它的观察者，并允许任意多的观察者观察者观察同一目标。
  - 提供**注册**和删除观察者的借口。
- Observer，观察者，也有翻译为“订阅者”。
  - 为那些在目标发生改变时需要获得同志的对象定义一个更新接口。

也有人说观察者模式和发布-订阅模式存在区别，但是在《设计模式 可服用面向对象软件的基础》一书中，发布-订阅模式是作为观察者模式的别名出现的（观察者的另一别名是依赖）。

一般注册观察者，是将观察者放入一个为维护的队列中去，当目标改变时，遍历观察者队列，触发各个观察者的更新。





### CSSOM

**CSS Object Model** 是一组允许用JavaScript操纵CSS的API。 它是继DOM和HTML API之后，又一个操纵CSS的接口，从而能够动态地读取和修改CSS样式。



#### Range

**`Range`** 接口表示一个包含节点与文本节点的一部分的文档片段。

可以用 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 对象的 [`Document.createRange`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createRange) 方法创建 Range，也可以用 [`Selection`](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection) 对象的 [`getRangeAt`](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/getRangeAt) 方法获取 Range。另外，还可以通过 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 对象的构造函数 [`Range()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/Range) 来得到 Range。



#### CSSOM树构建

说到CSSOM，再复习一下浏览器请求并解析文档，构建CSSOM树的过程。

1. 以用户在地址栏输入一个URL并回车为例
2. 域名解析，通过DNS查找获得` https://example.com `的IP地址
3. 获得IP之后，通过TCP三次握手和服务器建立连接
4. 如果是https连接的话，除了TCP之外还有个TLS协商，它决定了什么密码将会被用来加密通信，验证服务器，确保在进行真实的数据传输之前建立安全连接。
5. 连接完成之后，服务器开始发送传输数据，传输数据中涉及到TCP的慢开始/快启动/用塞控制等保证传输可靠机制
6. 一旦浏览器收到数据的**第一块**，它就可以开始解析收到的信息。“推测性解析”，“解析”是浏览器将通过网络接收的数据转换为**DOM和CSSOM**的步骤，通过渲染器把DOM和CSSOM在屏幕上绘制成页面。即使请求页面的HTML大于初始的14KB数据包，浏览器也将开始解析并尝试根据其拥有的数据进行渲染。
7. 渲染第一步：处理HTML标记并构造DOM树。当解析器发现非阻塞资源，例如一张图片，浏览器会请求这些资源并且**继续解析**。
   当遇到一个CSS文件时，解析也可以继续进行，但是对于<script>标签（特别是没有 `async` 或者 `defer` 属性）会**阻塞渲染并停止HTML的解析**。
   尽管浏览器的**预加载扫描器**加速了这个过程，但过多的脚本仍然是一个重要的瓶颈。

8. 第二步，处理CSS并构建CSSOM树。CSS对象模型和DOM是相似的。DOM和CSSOM是两棵树. 它们是独立的数据结构。浏览器将CSS规则转换为可以理解和使用的样式映射。浏览器遍历CSS中的每个规则集，根据CSS选择器创建具有父、子和兄弟关系的节点树。
9. 其他过程：
   1. 当CSS被解析并创建CSSOM时，其他资源，包括JavaScript文件正在下载（多亏了preload scanner）。JavaScript被解释、编译、解析和执行。脚本被解析为抽象语法树。
   2. 浏览器还构建辅助设备用于分析和解释内容的辅助功能（[accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility) ）树。可访问性对象模型（AOM）类似于DOM的语义版本。
10. 第三步是将DOM和CSSOM组合成一个Render树，计算样式树或渲染树从DOM树的根开始构建，遍历每个可见节点。
11. 第四步是在渲染树上运行布局以计算每个节点的几何体。布局是确定呈现树中所有节点的宽度、高度和位置，以及确定页面上每个对象的大小和位置的过程。回流是对页面的任何部分或整个文档的任何后续大小和位置的确定。
    第一次确定节点的大小和位置称为布局。随后对节点大小和位置的重新计算称为回流。
12. 最后一步是将各个节点绘制到屏幕上，第一次出现的节点称为[first meaningful paint](https://developer.mozilla.org/en-US/docs/Glossary/first_meaningful_paint)。在绘制或光栅化阶段，浏览器将在布局阶段计算的每个框转换为屏幕上的实际像素。





#### 预加载扫描器

浏览器构建DOM树时，这个过程占用了主线程。当这种情况发生时，预加载扫描仪将解析可用的内容并请求高优先级资源，如CSS、JavaScript和web字体。多亏了预加载扫描器，我们不必等到解析器找到对外部资源的引用来请求它。它将在后台检索资源，以便在主HTML解析器到达请求的资源时，它们可能已经在运行，或者已经被下载。预加载扫描仪提供的优化减少了阻塞。

```html
<link rel="stylesheet" src="styles.css"/>
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description"/>
<script src="anotherscript.js" async></script>
```

在这个例子中，当主线程在解析HTML和CSS时，预加载扫描器将找到脚本和图像，并开始下载它们。为了确保脚本不会阻塞进程，当JavaScript解析和执行顺序不重要时，可以添加async属性或defer属性。

等待获取CSS不会阻塞HTML的解析或者下载，但是它的确阻塞JavaScript，因为JavaScript经常用于查询元素的CSS属性。