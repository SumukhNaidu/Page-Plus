function formatResponse(url, status, responseTime, pageData) {

    return {
        success: true,

        timestamp: new Date().toISOString(),

        report: {

            url,

            status,

            responseTime: {
                milliseconds: responseTime,
                seconds: Number(responseTime / 1000).toFixed(2)
            },

            seo: {
                title: pageData.title,
                metaDescription: pageData.metaDescription,
                h1Count: pageData.h1Count
            },

            images: pageData.images,

            wordCount: pageData.wordCount
        }
    };

}

module.exports = formatResponse;