### UMAMI-API Docker Version

docker run:

```
docker run -d --name="umami-api" \
-e UMAMI_APP_URL="your-umami-domain.com/" \
-e UMAMI_APP_USERNAME="umami-username" \
-e UMAMI_APP_PASSWORD="umami-password" \
-e UMAMI_WEBSITEUUID="Your-WebsiteUuid" \
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