import cors from "cors";
import UmamiAPIClient from "umami-api";

const allowedOrigins = ['https://*.xzgl.site', 'https://*.xzgljiang.com'];


const corsHandler = cors({
  origin: (origin, callback) => {
    if(!origin || allowedOrigins.some((allowedOrigin) => origin.includes(allowedOrigin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
});

const umami = new UmamiAPIClient(
  process.env.UMAMI_APP_URL,
  process.env.UMAMI_APP_USERNAME,
  process.env.UMAMI_APP_PASSWORD
);
module.exports = async (req, res) => {
  try {
    await corsHandler(req, res); // 调用CORS中间件处理跨域请求

    const myWebsite = await umami.getWebsite("f366bda0-02fb-444e-87b5-a95e432acdcc");
    const eventsview = await myWebsite.getEvents(
      {
        unit: "year"       // 以年为间隔，相同的项在不同间隔触发会分开显示
      }
    );
  
    // 处理 eventsview 中的数据 
  const result = {}; 
  for(let item of eventsview) 
  { 
	  if(result[item.x]) 
	  { 
		  result[item.x] += item.y; 
	  } 
	  else 
	  { 
		  result[item.x] = item.y; 
	  } 
  } 
  const sortedData = Object.entries(result).sort((a, b) => b[1] - a[1]);
  return res.send(JSON.stringify(sortedData.map(item => ({x: item[0], y: item[1]}))));

    //return res.send(JSON.stringify(eventsview));
  } catch (error) {
    console.error(error);
    return res.status(500).send("Oops! check the vercel log.");
  }
};