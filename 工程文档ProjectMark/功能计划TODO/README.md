## 功能列表

分为设计、地图算法、软件框架支持等功能文档




兼容性处理
> Figma plugin written with Vue and Vite

Figma seems to ignore `<script>.src` and `<link>.href`. This project inlines all `.js`/`.css` in the `index.html` file to make the plugin work with Figma.

https://stackoverflow.com/q/69585063/6277151
