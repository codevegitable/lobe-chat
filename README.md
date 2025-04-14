目前更改文件：

+ app: 
  + manifset: 注释掉了之前的截屏照片，并候选logo和icon
  + [variants]/auth/next-auth/signin/AuthSignInBox: 改了应用名
  + (backend)/api/auth/[...nextauth]/route: 增加了登录方式
+ const：(基本信息，可以最后再改)
  + branding: 更改了一些组织、项目名等属性
+ server:
  + utils/url: 需要修改域名
+ config:
  + featureFlags/schema: 隐藏了原来的github和文档标志
+ libs: 
  + traces/event: 增加了注释掉的tag属性
+ locales:
  + locale: 修改了默认语言和本地cookie设置
+ utils
  + locales.test.ts: 更改了测试规则
+ 
