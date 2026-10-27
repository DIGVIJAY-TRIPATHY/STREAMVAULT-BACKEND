import axios from "axios";
import cron from "node-cron";
import dotenv from "dotenv"

dotenv.config();

const startApiCron = () => {
    cron.schedule("*/10 * * * *", async () => {
        try {
            console.log("cron job started", new Date().toISOString());

            const response = await axios.get(
                `http://localhost:${process.env.PORT}/api/v1/healthcheck`
            );
            console.log("Api response:", response.data);
        } catch (error) {
            console.error(
                "cron api failed",
                error.response?.data || error.message
            );
        }
    });
    console.log("Api cron job scheduled");
};

export default startApiCron;
