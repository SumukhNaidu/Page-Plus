const axios = require("axios");

const parsePage = require("../utils/pageParser");
const formatResponse = require("../utils/responseFormatter");

const analyzeUrl = async (url) => {

    const start = Date.now();

    const response = await axios.get(url, {

        timeout: 10000,

        maxRedirects: 5,

        validateStatus: () => true,

        headers: {

            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0 Safari/537.36",

            "Accept":
                "text/html,application/xhtml+xml"

        }

    });

    if (response.status >= 400) {

        throw new Error(`Website returned HTTP ${response.status}`);

    }

    const contentType = response.headers["content-type"] || "";

    if (!contentType.includes("text/html")) {

        throw new Error("URL does not return HTML content.");

    }

    const responseTime = Date.now() - start;

    const pageData = parsePage(response.data);

    return formatResponse(

        url,

        response.status,

        responseTime,

        pageData

    );

};

module.exports = {
    analyzeUrl
};