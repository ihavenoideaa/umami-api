### UMAMI-API Docker Version

vercel 部署 API, 访问起来实在是慢慢慢，所以打包成 docker 运行在服务器上。

docker run:

```
docker run -d --name="umami-api" \
-e UMAMI_APP_URL="your-umami-domain.com/" \
-e UMAMI_APP_USERNAME="umami-username" \
-e UMAMI_APP_PASSWORD="umami-password" \
-e UMAMI_WEBSITEUUID="Your-WebsiteUuid" \
-e TIME_PERIOD="1day"\
ihavenoideaa/umami-api
```

Environment variable: 
- `UMAMI_APP_URL`: umami domain
- `UMAMI_APP_USERNAME`: umami username
- `UMAMI_APP_PASSWORD`: umami password
- `UMAMI_WEBSITEUUID`: 监控网站的 WebsiteUuid
- `TIME_PERIOD`: period The time period of data to return
  - `"1day"`:  Return data for one day (default) / `"1hour"` / `"1week"` / `"1month"`


docker hub: https://hub.docker.com/r/ihavenoideaa/umami-api