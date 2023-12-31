## 平台简介

* 本仓库为前端技术栈 [Vue3](https://v3.cn.vuejs.org) + [Element Plus](https://element-plus.org/zh-CN) + [Vite](https://cn.vitejs.dev) 版本。
* 配套后端代码仓库地址[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 或 [RuoYi-Vue-fast](https://github.com/yangzongzhuan/RuoYi-Vue-fast) 版本。
* 前端技术栈（[Vue2](https://cn.vuejs.org) + [Element](https://github.com/ElemeFE/element) + [Vue CLI](https://cli.vuejs.org/zh)），请移步[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue/tree/master/ruoyi-ui)。
* 阿里云折扣场：[点我进入](http://aly.ruoyi.vip)，腾讯云秒杀场：[点我进入](http://txy.ruoyi.vip)&nbsp;&nbsp;
* 阿里云优惠券：[点我领取](https://www.aliyun.com/minisite/goods?userCode=brki8iof&share_source=copy_link)，腾讯云优惠券：[点我领取](https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=198c8df2ed259157187173bc7f4f32fd&from=console)&nbsp;&nbsp;

## 前端运行

```bash
# 克隆项目
git clone https://github.com/yangzongzhuan/RuoYi-Vue3.git

# 进入项目目录
cd RuoYi-Vue3

# 安装依赖
yarn --registry=https://registry.npmmirror.com

# 启动服务
yarn dev

# 构建测试环境 yarn build:stage
# 构建生产环境 yarn build:prod
# 前端访问地址 http://localhost:80
```

## 内置功能

1.  用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2.  部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3.  岗位管理：配置系统用户所属担任职务。
4.  菜单管理：配置系统菜单，操作权限，按钮权限标识等。
5.  角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
6.  字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7.  参数管理：对系统动态配置常用参数。
8.  通知公告：系统通知公告信息发布维护。
9.  操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
10. 登录日志：系统登录日志记录查询包含登录异常。
11. 在线用户：当前系统中活跃用户状态监控。
12. 定时任务：在线（添加、修改、删除)任务调度包含执行结果日志。
13. 代码生成：前后端代码的生成（java、html、xml、sql）支持CRUD下载 。
14. 系统接口：根据业务代码自动生成相关的api接口文档。
15. 服务监控：监视当前系统CPU、内存、磁盘、堆栈等相关信息。
16. 缓存监控：对系统的缓存信息查询，命令统计等。
17. 在线构建器：拖动表单元素生成相应的HTML代码。
18. 连接池监视：监视当前系统数据库连接池状态，可进行分析SQL找出系统性能瓶颈。

## 配置菜单

1. 菜单管理页面中新增菜单，路由地址对应项目中文件名（如：bussiness）
2. 新增二级菜单，路由地址对应项目中文件名（如：checkItem），组件路径对应项目中index.vue（页面标识）路径（如：business/checkItem/index）

## 当前新增模块
```bash
# 全局搜索二级菜单名称可快速查看页面（如：检查项目）
```

1. bigScreen
```bash
# 一级菜单---Dashboard(bigScreen)

# 二级菜单---候诊区(waitingArea)---bigScreen/waitingArea/index
```
2. business
```bash
# 一级菜单---业务管理(business)

# 二级菜单---挂号(registration)     ---business/registration/index
# 二级菜单---指派(HOIS)             ---business/HOIS/index
# 二级菜单---预约(appointment)      ---business/appointment/index
# 二级菜单---提醒(reminder)         ---business/reminder/index
# 二级菜单---检查项目(checkItem)    ---business/checkItem/index

```
3. dataManagement/checkItem/index
```bash
# 一级菜单---数据中心(dataManagement)

# 二级菜单---黑名单管理(blacklist)       ---dataManagement/blacklist/index
# 二级菜单---推荐人设置(referrer)        ---dataManagement/referrer/index
# 二级菜单---患者信息管理(patientInfo)   ---dataManagement/patientInfo/index
# 二级菜单---数据导入(dataImport)        ---dataManagement/dataImport/index
# 二级菜单---统计查询(dataQuery)         ---dataManagement/dataQuery/index
# 二级菜单---阈值(warning)               ---dataManagement/warning/index

```
## 功能页面
- 挂号 √
- 叫号 √
- 表单 √
- 预约 √
- 提醒 √
- 黑名单管理 √
- 推荐人设置 √
- 患者信息管理 √
- 数据导入 √
- 数据查询 √

- 页面中各部分功能有待完善