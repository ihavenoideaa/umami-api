import UmamiAPIClient from "umami-api";
const umami = new UmamiAPIClient(
  process.env.UMAMI_APP_URL,
  process.env.UMAMI_APP_USERNAME,
  process.env.UMAMI_APP_PASSWORD
);
module.exports = async (req, res) => {
  try {
    const myWebsite = await umami.getWebsite("f366bda0-02fb-444e-87b5-a95e432acdcc");
    const eventsview = await myWebsite.getEvents(
      {
        unit: "year"       // 以年为间隔，相同的项在不同间隔触发会分开显示
      }
    );
    return res.send(JSON.stringify(eventsview));
  } catch (error) {
    console.error(error);
    return res.status(500).send("Oops! check the vercel log.");
  }
};