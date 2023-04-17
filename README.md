## UMAMI-API :bar_chart:

对于只有前端的网站，直接通过 npm 部署 Umami API 会暴露 Umami 的账号密码，通过 vercel 部署或许安全一点。

#### vercel 自建 API 方法

1. FORK

2. 在 [vercel](https://vercel.com/dashboard) 中添加新项目，并关联 FORK 的库

3. vercel 项目设置中添加环境变量：
  
  - `UMAMI_APP_URL` : umami 服务的 url，不需要 http/https
  - `UMAMI_APP_USERNAME` : umami 服务的登录用户名
  - `UMAMI_APP_PASSWORD` ：umami 服务的登录密码
  - `UMAMI_WEBSITEUUID` : 被监控网站的 `WebsiteUuid`
    - WebsiteUuid 获取: 打开你的 umami，进入监控网站的详情页
    
      ![image](https://user-images.githubusercontent.com/101545842/232351813-b18a4e56-2e98-4a37-b3ec-2c134da9a589.png)
      `/websites/` 后的就是 WebsiteUuid
    
  - `TIME_PERIOD`: 
    - `1day` 一天内的数据 / `1hour` / `1week` / `1month`

4. 重新部署 Redeploy vercel 项目

#### 使用

访问 vercel 网址会返回 "hello world"

![image](https://user-images.githubusercontent.com/101545842/232351962-ff3870f5-a8a5-4914-80de-3bc7cfd715ac.png)

访问 网址下 `api/getEvents` 返回 umami 事件统计数据，数据形式取决于收集数据的方式：

![image](https://user-images.githubusercontent.com/101545842/232352081-01da3008-e316-4e4f-ae93-c3dd077dfd9e.png)


[其他 api 接口](https://github.com/jakobbouchard/umami-api-client/blob/main/src/classes/website.ts#L289)可以参照 getEvents.js 自行添加

缺点：`TIME_PERIOD` 时间最长只能设置一个月

#### Docker 部署版本

查看 [docker 分支](https://github.com/ihavenoideaa/umami-api/tree/docker)

#### 参考
基于 npm 包： [Umami API Client](https://www.npmjs.com/package/umami-api)
