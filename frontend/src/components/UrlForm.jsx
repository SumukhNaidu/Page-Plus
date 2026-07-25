import { useState } from "react";

function UrlForm({ onAnalyze, loading }) {

    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url.trim()) return;

        onAnalyze(url);
    };

    return (

        <form className="url-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
            />

            <button
                type="submit"
                disabled={loading}
            >
                {loading ? "Analyzing..." : "Analyze"}
            </button>

        </form>

    );

}

export default UrlForm;