# Map3D->Figma

figma的简单三维地图插件
辅助三维软件设计

<br><br>

## 基础功能  

>1. 根据定位和浏览展示基础地图  
>2. 添加绘制图形

**TODO待定**

* 设计三维地图  
* 导出图片和gif

考虑视频和矢量svg
<br><br>

## <font color=#A52A2A >figma兼容性修改 </font>

| 兼容问题                      |                                  解决                                   |                                 依赖                                 |
| :---------------------------- | :---------------------------------------------------------------------: | :------------------------------------------------------------------: |
| figma仅支持单文件（外部依赖） | 开发使用npm辅助 <br>发布external内部库使用cdn<br>注意cesium等库特殊处理 | vite-plugin-external<br>svite-plugin-html-config<br>（更换资源路径） |
| figma仅支持单文件（内部依赖） |                     图片使用base64<br>内联样式和js                      |                        vite-plugin-singlefile                        |
| <!--                          |                                Template0                                |                              Template1                               | Template2 | --> |
