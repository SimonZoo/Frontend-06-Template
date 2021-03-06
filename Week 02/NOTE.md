学习笔记



[toc]

## 1. localStorage

一个可被用于访问当前源（ origin ）的本地存储空间的 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，Web API 接口。`localStorage` 中的键值对总是以字符串的形式存储。

`sessionStorage`和`localStorage`是基于**特定于页面的协议**存在的本地存储，也就
是说`http://example.com` 与 `https://example.com`的``localStorage``相互隔离。

### `Storage`对象方法和方法

- [`Storage.key()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/key)

  该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。

- [`Storage.getItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/getItem)

  该方法接受一个键名作为参数，返回键名对应的值。

- [`Storage.setItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem)

  该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。

- [`Storage.removeItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/removeItem)

  该方法接受一个键名作为参数，并把该键名从存储中删除。

- [`Storage.clear()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/clear)

  调用该方法会清空存储中的所有键名。

- [`Storage.length`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/length) 只读属性

  返回一个整数，表示存储在 `Storage` 对象中的数据项数量。



### localStorage/sessionStorage/cookie

| localStorage                                                 | sessionStorage                                               | cookie                                               |
| :----------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| 存储的数据没有过期时间设置，除非手动清除，不然关闭浏览器重新打开时仍存在 | 存储的数据在页面会话结束时会被清除，<br />关闭对应浏览器窗口（Window）/ tab，会清除对应的`sessionStorage`。 | 可设置失效时间，没有设置的话，默认是关闭浏览器后清除 |
| 保存信息5MB                                                  | 5MB                                                          | 4KB                                                  |
| 针对需要长期保存的本地数据，不参与后端通信                   | 针对当前页面暂时保存一下的本地数据，不参与后端通信           | 一般存放不敏感的用户信息，发起请求的时候带在请求里   |



💡有文章说浏览器无痕模式下使用localStorage会报错，但是我试了一下仍旧可以正常使用，存疑。



## 2. 寻路：广度优先搜索

### 广度优先

广度优先搜索（Breadth-First-Search）是一种“地毯式”层层推进的搜索策略，即先查找离起始顶点最近的，然后是次近的，依次往外搜索。

采用FIFO的队列实现，对当前的结点，其周围的所有结点都进入队列的末尾。清空队列时，从队列的首部清空，达到一层层向外寻找的效果，就是广度优先。

### 深度优先

深度优先搜索（Depth-First-Search），简称 DFS。

采用栈的数据结构，先进后出，对当前所有的结点，其周围的所有结点都入栈顶，清空栈的时候也是从栈顶开始一个个往外取，这样实现对某一条路走到底的效果，是深度优先。



这两种是比较简单直接的搜索算法。

## 3. 启发式寻路

Dijkstra算法：可以解决边权重非负的加权有向图的单起点最短路径问题。

A*算法：通过一个函数来计算每个结点的优先级，每次移动的时候都去走优先级最高的那个结点。