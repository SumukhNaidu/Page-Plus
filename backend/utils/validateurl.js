const validator = require("validator");

function validateUrl(url) {
    return validator.isURL(url, {
        protocols: ["http", "https"],
        require_protocol: true,
        require_valid_protocol: true
    });
}

module.exports = validateUrl;