HTML5中canvas图形绘制
一、绘制图形工作流程
1.获取画布 var cvx = document.getElementById("cvs");或var cvs = document.querySelector("#cvs");
2.指令画笔
var ctx = cvx.getContext("2d");
tip:3d使用的参数是webgl
3.指定画笔属性
(1)颜色
ctx.fillStyle = value
tip:value=#fff/rgb(r,g,b)/rgba(r,g,b,a)/"yellow";
ctx.strokeStyle = value
(2)透明度
ctx.globalAlpha(num);
tip：0~1;
(3)渐变
var lg1 = ctx.createLinearGradient(x1,y1,x2,y2);
lg1.addColorStop(offset,color);
lg1.addColorStop(offset,color);offset百分比规定在哪里开始填充这个颜色
ctx.fillStyle=lg1;
径向渐变：
var rg1 = ctx.createRadiusGradient(xs,ys,rs,xe,ye,re);
rg1.addColorStop(offset,color);
rg1.addColorStop(offset,color);
ctx.fillStyle=rg1;
(4)阴影
ctx.shadowColor = color;
ctx.shadowOffsetX = value;
ctx.shadowOffsetY = value;
ctx.shadowBlur = value;
tip:value只能写数值，不能加单位
(5)线宽
ctx.lineWidth=num;
(6)线端点属性
ctx.lineCap = "butt|round|square";
ctx.lineJoin = "bevel|round|miter";
(7)填充图像
var cp = ctx.createPattern(img,type);
tip:type="repeat|repeatX|repeatY|norepeat";

ctx.fillStyle=cp;

4.绘制图形
(1)绘制形状或线型
(2)描边或填充

二、绘制图形
ctx.rect(x,y,w,h);
ctx.fill();
ctx.stroke();
---------------------
ctx.fillRect(x,y,w,h);
ctx.strokeRect(x,y,w,h);
ctx.clearRect(x,y,w,h);

2.圆形
ctx.arc(x,y,r,anglestart,angleend,antiClockWise(true|false));
abtiClockWise=true(逆时针)|false(顺时针)
3.圆弧
ctx.arcTo(xc,yc,xe,ye,r);
tip:
xc,yc为控点坐标，不是起点左边。
xe、ye为终点坐标。
起点使用ctx.moveTo(xs,ys);

4.绘制图像


5.绘制文字


三、坐标变换






































