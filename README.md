# fdu2020ss-webfundev-project

## 作者

刘乔升

学号：19300200019

## 地址

[Github](https://github.com/alct2017/fdu2020ss-webfundev-project)

[Github Page](https://alct2017.github.io/fdu2020ss-webfundev-project/index.html)

## 项目完成情况

完成了所有基本功能

## Bonus

### 1.图片剪裁

```
<div class="photo-container">
    <img class="photo">
</div>
```
```
.photo-container {
    position: relative;
    width: /* fixed width */;
    padding-bottom: /*fixed height */;
}
.photo {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

简单的代码如上，大致思路是：用`width`和`padding-bottom`设置所需图片宽高（或设置成百分比从而响应父元素变化），形成一个固定大小的图片盒。然后把图片等比放大，`object-fit: cover`属性会裁去大于图片盒的部分，并且不改变图片的长宽比。

### 2.响应式布局

一是把第一级容纳盒设置了如下属性
```
.responsive {
    width: /*fixed width*/;
    min-width: 60%;
    max-width: 100%;
    margin: auto;
}
```
从而主题内容总是占据页面中心大部分，且不会横向超出页面。

二是大部分容纳盒都采用了`flex`或`grid`布局，在大多数情况下都能保证页面不错乱。

## 已知缺陷

由于Github Page使用POST方法会导致`405 Not Allowed`的错误出现，所有本该使用`POST`方法的表单在上传到Github的版本中均缺省使用`GET`方法。