import UmamiAPIClient from "umami-api";

const umami = new UmamiAPIClient(
  process.env.UMAMI_APP_URL,
  process.env.UMAMI_APP_USERNAME,
  process.env.UMAMI_APP_PASSWORD
);

module.exports = async (req, res) => {
  try {
    const myWebsite = await umami.getWebsite(process.env.UMAMI_WEBSITEUUID);
    const pageviews = await myWebsite.getPageviews({
      period: process.env.TIME_PERIOD
    });

    return res.send(JSON.stringify(pageviews));

  } catch (error) {
    console.error(error);
    return res.status(500).send('Oops! Oops! API 出错了');
  }
};