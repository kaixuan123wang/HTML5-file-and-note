题目：弹性盒布局
一、弹性容器（flex container）
1.设置弹性盒方法
	display:flex|inline-flex;(盒子不自动换行)

2.设置主轴反向
	flex-flow分为flex-direction flex-wrap
	flex-flow:row|column|row-revers|column-revers nowrap(不换行)|wrap(自动换行)

下面叙述以水平为主轴。
3.设置主轴项目排列方式
	(1)justify-content:flex-start
	左对齐
	(2)justify-content:flex-end
	右对齐
	(3)justify-content:center
	居中对齐
	(4)justify-content:space-between
	两端对齐
	(5)justify-content:space-around
	均匀分布
4.设置交叉轴项目排列方式
	align-items：单行
	(1)align-items:flex-start
	顶端对齐
	(2)align-items:flex-end
	底端对齐
	(3)align-items:center
	居中对齐
	(4)align-items:baseline
	按首个项目底部（基线）为准对齐
	(5)align-items:stretch
	占满整个空间(顶天立地)

	align-content:多行
	(1)align-content:flex-start
	(2)align-content:flex-end
	(3)align-content:center
	(4)align-content:space-between
	(5)align-content:space-around
	(6)align-content:stretch

二、弹性容器中的项目
	1.项目顺序
		order:[0~n];
	2.项目缩放
		flex:flex-grow flex-shrink flex-basis
		(1)flex-grow:放大倍数;
		(2)flex-shrink:缩小倍数;
		(3)flex-basis:该项目占据主轴的空间
	3.项目排列方式(对齐方式)
	https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self#%E5%80%BC
		align-self:
		(1)align-self:auto;保持默认
		(2)align-self:flex-start;
		(3)align-self:flex-end;
		(4)align-self:flex-baseline;
		(5)align-self:stretch;伸缩
		(6)align-self:center;
	说明(tip):
		弹性盒中的项目不能使用：
		(1)浮动 float
		(2)清除浮动 clear
		(3)align-verticle
