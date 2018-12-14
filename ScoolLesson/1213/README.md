分栏式布局

分栏数：
column-count:3;
设置每个栏目的宽度
column-width:300px;
设置栏目之间间隔的宽度
column-gap:3em;
设置栏目之间的间隔线
column-rule:1px solid #000;

布局方法：
1.表格布局
2.浮动布局
3.弹性盒子
4.分栏布局

网页大小的基本单位：
	px：固定大小，无法自动调节
	%：利用百分比根据页面大小调节
	em：以当前对象内文本的字体大小为单位
	rem：以html根字体大小设置页面其他字体大小
	pt：点
	pc：派卡，相对于我国新四号铅字尺寸
	in：英寸
	mm：毫米
	cm：厘米
单位的转换
	px to em:Example: 12px / 16px = .75em
	px to %:Example: 12px / 16px * 100 = 75%
	px to pt:Example: 16px * 72 (72 points = 1 inch) / 96 (96 pixels per inch in Windows, 72 in Mac) = 12pt
	em to px:Example: .75em * 16px = 12px
	em to %:Example: .75em * 100 = 75%
	% to px:Example: 75 * 16px / 100 = 12px
	% to em:Example: 75 / 100 = .75em
	pt to px:Example: 12pt * 96ppi / 72ppi = 16px
css预处理：sass、less

后处理：postcss