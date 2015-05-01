#MicroBlog

>项目

	Node.JS一书中作者byvoid在第5章写了一个microblog的实例
	[https://github.com/BYVoid/microblog](https://github.com/bower/bower)
	使用了express2.x
	本项目使用express4.x对项目进行了重写
	以此作为了学习nodejs的练习
	也便于刚刚接触nodejs的人学习

>目录说明
	
	bin //启动目录
	public //公共访问目录,存放img,css,js等
	routes //控制层controller
	views //视图层views
	models //数据层models
	settings //配置信息

>使用说明
	
	进入工程目录
	npm install  ::.gitignore忽略了node_modules,所以需要用户自己install
	点击启动项目.bat
	点击index.lnk可以直接进入项目首页

>其他说明

	本项目使用了
	express4.x
	bootstrap
	mocha
	mongodb/Mongoose

>学习本项目你能收获什么

	将原例的2.x升级到了4.x,学习起来不用特地使用旧版本
	延续原例使用bootstrap快速绘制界面
	使用mocha学习测试
	使用mongodb以及一些连接池技术来熟悉NoSql

>项目状态

	未完成
	mongodb&mocha&mongoose还存在一些问题