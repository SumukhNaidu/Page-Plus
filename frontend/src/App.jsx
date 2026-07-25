import { useState } from "react";
import "./App.css";

import UrlForm from "./components/UrlForm";
import Loader from "./components/Loader";
import ReportCard from "./components/ReportCard";

import api from "./services/api";

function App() {

  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  const analyzeWebsite = async (url) => {

    try {

      setLoading(true);
      setError("");
      setReport(null);

      const response = await api.post("/analyze", {
        url
      });

      setReport(response.data);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container">

      <h1>🚀 Page Pulse</h1>

      <p className="subtitle">
        Website SEO & Performance Analyzer
      </p>

      <UrlForm
        onAnalyze={analyzeWebsite}
        loading={loading}
      />

      {loading && <Loader />}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {report && (
        <ReportCard report={report} />
      )}

<footer>
  <br />
  Developed for the Digital Heroes
</footer>
    </div>

  );

}

export default App;