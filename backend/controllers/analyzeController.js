const { analyzeUrl } = require("../services/analyzeService");
const validateUrl = require("../utils/validateUrl");

const analyzeWebsite = async (req, res) => {

    try {

        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                success: false,
                message: "URL is required."
            });
        }

        if (!validateUrl(url)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid URL."
            });
        }

        const report = await analyzeUrl(url);

        return res.status(200).json(report);

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            return res.status(408).json({
                success: false,
                message: "The request timed out."
            });
        }

        if (error.message.includes("HTTP")) {
            return res.status(502).json({
                success: false,
                message: error.message
            });
        }

        if (error.message.includes("HTML")) {
            return res.status(415).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });

    }

};

module.exports = {
    analyzeWebsite
};