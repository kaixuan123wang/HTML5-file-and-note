HTML5语义标记
一.头部标记
*1.doctype 用于向浏览器声明HTML版本，H5中以<!DOCTYPE HTML>声明
2.html
3.head
4.title
*5.meta
	1.定义针对搜索引擎的关键词：<meta name="keywords" content="交流,计算机" />
	2.定义对页面的描述：<meta name="description" content="这是HTML5笔记" />
	3.定义页面的最新版本：<meta name="revised" content="bu,2016/5/10" />
	4.每5秒刷新一次页面：<meta http-equiv="refresh" content="5" />
	5.网页作者:<meta name="author" content="name,email" />
	6.添加智能App广告条(iOS 6 +Safari):<meta name="apple-itunes-app" content="app-id=myAppStoreID,affiliate-data=myAffiliateData,app-argument=myURL">
	7.设置苹果工具栏颜色:<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	8.忽略页面中的数字识别为电话，忽略email识别:<meta name="format-detection" content="telphont=no,email=no" />
	9.是否启用WebApp全屏模式：<meta name="apple-mobile-web-app-capable" content="yes" />
	10.是否删除默认的苹果工具栏和菜单栏:<meta name="apple-mobile-web-app-capable" content="yes" />
	11.启用电话功能,请使用<a href="tel:17644248072">17644248072</a>来代替,邮件则为<a href="mailti:xxx@xxx.com">发送邮件</a>
	12.windows phone 点击无高光<meta name="msapplication-tap-highlight" content="no">
	13.不让百度转码:<meta http-equiv="Cache-Control" content="no-siteapp" />
	14.设置桌面图标的标题<span style="font-size:12px"><meta name="apple-mobile-web-app-title" content="标题"></span>(最好限制在6个中文长度内，超长会被隐藏)
	15.设置启动画面：需要在百度下
		移动端viewport设置：<meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1 minimum-scale=1,maximum-scale=1,target-densitydpi=device-dpi">
		说明：width: viewport的高度(数值/device-width)(范围从200到10000，默认为980像素)
				heigh：viewport 的高度(数值/device-width),(范围从223到10000)
				user-scalable[yes|no]:是否允许缩放
				initial-scale[数值]:初始化比例(范围从 >0到10)
				minimum-scale[数值]:允许缩放的最小比例
				maximum-scale[数值]:允许缩放的最大比例
	
	社交标签begin	参考微博API
	<meta progerty="og:type" content="类型" />
	<meta progerty="og:url" content="URL地址" />
	<meta progerty="og:title" content="标题" />
	<meta progerty="og:image" content="图片" />
	<meta progerty="og:description" content="描述" />
		
*6.base
	必须放在head第一位
	好处：
		1.统一域名，集中权重
		2.节约带宽
		3.缩减URL
		4.清除标记
		5.有助于用户脱机查看页面
		6.让迁移数据更加方便
*7.link
	1.将样式引入到网页中
		<link ref="stylesheet" href="css样式地址.css">
	2.给网页title前面加个图标
		<link rel="icon" href="图标地址.icon">
8.style
9.script
*10.noscript当浏览器不支持javascript时会显示noscript标签中的内容
二.分区标记
1.body
*2.article	用来定义一些来自外部的内容，比如网友的投稿|新闻记者的文章|摘取某博客论坛的信息等
			代表网站制作中的文档、页面或应用程序中独立的完整的可以独自被外部引用的内容
3.nav
4.aside
*5.section	用来定义文档中的节（section、区段），比如章节、页眉、页脚或文档中的其他部分
6.header
7.footer
8.h1-h6
*9.main 网页中只能用一次，指body中的主要内容且只能用于body下级（body>main）
三.分组标记
1.p
2.hr
*3.pre  预格式标记，预排版标签，不动如山的输出，在输出代码内容时与code标签一起使用
*4.blockquote  块标记，浏览器会在blockquote元素前后添加换行并增加外边距
5.ul/ol>li
*6.dl/dt/dd	表格标签，<dl><dt>title</dt>content<dd></dd></dl>
*7.figure  用来表示网页制作页面上一块独立的内容，将其从网页上移除不会对网页造成影响，图片、统计图、代码示例
*8.figcaption	通常用来做为figure内容的注释，一个figure中只能有一个figcaption
9.div
*四.表格标记
1.table  表格
2.caption  表格标题
3.thead  表头				表头表底表体
4.tfood  表底
5.tbody  表体
6.tr
7.th
8.td
9.col
10.colgroup