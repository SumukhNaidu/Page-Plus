function ReportCard({ report }) {
  const data = report.report;

  const seoScore = Math.max(
    0,
    100 -
      (data.images.missingAlt * 10 +
        (data.seo.metaDescription === "No meta description found" ? 20 : 0) +
        (data.seo.h1Count === 0 ? 20 : 0))
  );

  return (
    <div className="report-card">
      <div className="report-header">
        <div>
          <h2>Analysis Report</h2>
          <p className="report-url">{data.url}</p>
        </div>

        <div className="score-circle">
          <span>{seoScore}</span>
          <small>SEO</small>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Status</h3>
          <p className="green">{data.status} ✓</p>
        </div>

        <div className="card">
          <h3>Response Time</h3>
          <p>{data.responseTime.milliseconds} ms</p>
        </div>

        <div className="card">
          <h3>Word Count</h3>
          <p>{data.wordCount}</p>
        </div>

        <div className="card">
          <h3>H1 Tags</h3>
          <p>{data.seo.h1Count}</p>
        </div>

        <div className="card">
          <h3>Total Images</h3>
          <p>{data.images.total}</p>
        </div>

        <div className="card">
          <h3>Missing Alt</h3>
          <p>{data.images.missingAlt}</p>
        </div>
      </div>

      <div className="seo">
        <h3>Page Title</h3>
        <p>{data.seo.title}</p>

        <h3>Meta Description</h3>
        <p>{data.seo.metaDescription}</p>
      </div>
    </div>
  );
}

export default ReportCard;