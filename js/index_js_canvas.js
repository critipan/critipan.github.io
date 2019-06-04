//获取画布
var canvas=document.getElementById("myCanvas");
//创建context对象
var cxt=canvas.getContext("2d");
//绘制一个红色的矩形
//设置颜色
cxt.fillStyle="#ff0000";
cxt.fillRect(0,0,150,75);