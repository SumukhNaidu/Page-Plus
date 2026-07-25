    const cheerio = require("cheerio");

function parsePage(html) {
    const $ = cheerio.load(html);

  const title = $("title")
  .text()
  .replace(/\s*[-|]\s*.*/, "")
  .replace(/Close/gi, "")
  .trim() || "No title found";

    const metaDescription =
        $('meta[name="description"]').attr("content") ||
        "No meta description found";

    const h1Count = $("h1").length;

    const images = $("img");

    let missingAlt = 0;

    images.each((_, img) => {
        if (!$(img).attr("alt")) {
            missingAlt++;
        }
    });

    const text = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = text
        ? text.split(/\s+/).length
        : 0;

    return {
        title,
        metaDescription,
        h1Count,
        images: {
            total: images.length,
            missingAlt
        },
        wordCount
    };
}

module.exports = parsePage;