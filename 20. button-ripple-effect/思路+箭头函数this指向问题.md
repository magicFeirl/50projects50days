这篇实现的效果是点击元素有波纹特效。思路是点击元素时计算出点击元素内的x、y坐标，并添加一个带动画的span元素。主要思路看代码：
```javascript
button.addEventListener('click', function(e) {
    // 获取鼠标点击在页面中的坐标
    const { clientY: y, clientX: x } = e;
    // offsetTop 它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离，offsetLeft 同理
    // offsetParent 返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table,td,th,body元素
    // 也就是说，如果 button 的父元素开启了定位，这段代码会有 bug
    const ox = e.target.offsetTop, oy = e.target.offsetLeft;

    // 点击位置 - 元素距离 body 的长度 = 点击元素内部的偏移
    const xInside = x - ox, yInside = y - oy;
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.top = yInside;
    circle.left = xInside;

    setTimeout(() => {circle.remove()}, 300)
})
```

**箭头函数this指向的问题**
> 参考: https://zhuanlan.zhihu.com/p/57204184


结论：
箭头函数的 this 为调用其的函数的 this，如果没有调用函数，则箭头函数的 this 为 window。此外，箭头函数一旦定义，this 的指向就不会发生变化。

```javascript
// 正常情况：函数的 this 指向其调用者
function f() {
    console.log(this);
}

f() // window

const o = {}
o.fa = f;
o.fa() // o

// **箭头函数的 this -> 指向调用该箭头函数的函数的 this，如果没有则是 window；如果调用该箭头函数的是个箭头函数，则继续向上查找**

// **箭头函数的 this 在声明箭头函数时就确定了，不会随着作用域的改变而改变**
const arrow_f = () => { console.log(this) }
function f1() {
    arrow_f();
}

f1() // arrow_f 定义时 this = window，所以打印 window

const o = {
    f: f
}

o.f() // 这里 f 的 this 是 o，但 arrow_f 的 this 还是 window
```
