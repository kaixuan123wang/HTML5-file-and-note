题目：制作视频播放器
一、video元素
1.用于建立视频播放器
2.标记（语法格式）
	<video src="源文件" controls autoplay>
		您的浏览器不支持video，请升级
	</video>
	<video width="" height="">
		<source src="源文件.ogg" type="类型(video/ogg)">
		<source src="xx.mp4" type="video/mp4">
		<source src="xx.?" type="video/webM">
	</video>
	controls：控制面板
	autoplay：自动播放
3.video标记属性
（1）width
（2）height
（3）controls 	控制面板
（4）autoplay 	自动播放
（5）loop 		循环播放
（6）src 		源文件
（7）preload="auto|none|metadata" 	预加载

二、video对象的属性、方法、事件
1.属性
	（1）currentTime	播放时间
	（2）duration 		总长度
	（3）paused 		暂停
	（4）ended 			判断是否结束
	（5）muted 			静音
	（6）volume 		音量
	（7）error 			出错
2.方法
	（1）load() 		载入
	（2）play() 		播放
	（3）pause() 		
3.事件
	（1）play
	（2）pause
	（3）ended
	（4）volumechange

三、制作方法
1.写结构

2.添加属性

3.写脚本

四、嵌入式标记
1.img
2.iframe
3.embed
4.object
5.param
6.video
7.audio
8.source
9.track
10.canvas
11.map
12.area
















