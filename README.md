### UMAMI-API Docker 部署版本

运行命令:

```
docker run -d --name="umami-api" \
-e UMAMI_APP_URL="https://your-umami-domain.com/" \
-e UMAMI_APP_USERNAME="umami-username" \
-e UMAMI_APP_PASSWORD="umami-password" \
-e UMAMI_WEBSITEUUID="Your-WebsiteUuid" \
ihavenoideaa/umami-api
```

