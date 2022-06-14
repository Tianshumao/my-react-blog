# MD 语法

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

//形式一

- a
- b
- c
  //形式二

* d
* e
* f
  //形式三

- g
- h
- i

### 正常形式

1. abc
2. bcd
3. cde
   //错序效果
4. fgh
5. ghi
6. hij

### 无序列表嵌套

- 123
  - abc
  - bcd
  - cde
- 465
- 789

有序列表嵌套

1. abcd
   1. abcde
   2. abcde
   3. abcde
2. bcde
3. cdef

> 引用内容、说明内容。在语句前面加一个 > ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。
>
> > 二级引用
> >
> > > 三级引用
> > >
> > > > 四级引用
> > > >
> > > > > 五级引用
> > > > >
> > > > > > 六级引用

### 代码块

`shaoliangdaima,danhangshiyong`

```
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
```

### 链接

[简书](https://www.jianshu.com '创作你的创作'),
是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可互相交流。

[简书]: https://www.jianshu.com '创作你的创作'

[简书]是一个创作社区,任何人均可以在

//参数定义的其他写法
[简书]: https://www.jianshu.com '创作你的创作'
[简书]: https://www.jianshu.com (创作你的创作)
[简书]: <https://www.jianshu.com> "创作你的创作"

### 图片

![my-logo.png](https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo')

### 强调字体

_md_  
**md**
~~删除~~

### 转义字符

\\ \*
\+
\-
\`
\_

### 表格

//例子一
|123|234|345|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子二
|123|234|345|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子三
123|234|345
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde
