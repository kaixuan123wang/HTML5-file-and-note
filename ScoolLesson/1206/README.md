题目：拖动实现方法
一、数据传递对象	dataTransfer
	1.e.dataTransfer.setData(type,value)
		设置或保存指定类型的数据
	2.e.dataTransfer.getData(type);
		获取指定类型的数据
二、拖放的工作过程
	1.使被拖动的元素具有拖动属性
		draggable
	2.开始被拖动的元素
		ondragstart
	3.拖动过程时间
		ondrag
	4.被拖动元素结束拖动
		ondragend
	---------------------------------------------------
	5.目标元素事件
		1.处于目标元素上方事件
		ondragover
		2.离开目标元素触发事件
		ondragleave
		3.放下拖动元素触发事件
		ondrop
三、放置行为关键操作
	取消目标位置的默认行为



通过css渐变
	