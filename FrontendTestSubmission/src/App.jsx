import React, { useState } from "react";
import "./App.css";
import { createLogger } from "../../loggingMiddleware/loggerMiddleware";


const logger = createLogger();

function App() {
  const [url, setUrl] = useState("");
  const [shortCode, setShortCode] = useState(null);
  const [viewAnalytics, setViewAnalytics] = useState(false);
  const [analyticsData, setAnalyticsData] = useState(null);

  // Generate random short code
  const generateShortCode = () => Math.random().toString(36).substring(2, 7);

  // Handle shorten button
  const handleShorten = () => {
    if (!url) {
      logger.warn("No URL entered", { url });
      return alert("Please enter a valid URL");
    }

    const code = generateShortCode();
    const data = {
      original: url,
      short: `${window.location.origin}/${code}`,
      createdAt: new Date().toISOString(),
      clicks: 0,
      clickHistory: [],
    };

    localStorage.setItem(code, JSON.stringify(data));
    setShortCode(code);
    setAnalyticsData(data);
    setUrl("");
    setViewAnalytics(false);

    logger.info("Short URL created", { code, original: url });
  };

  // View analytics
  const handleViewAnalytics = () => {
    if (!shortCode) {
      logger.warn("Tried to view analytics with no shortcode");
      return;
    }
    const stored = localStorage.getItem(shortCode);
    if (stored) {
      setAnalyticsData(JSON.parse(stored));
      setViewAnalytics(true);
      logger.info("Viewed analytics", { shortCode });
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🔗 URL Shortener</h1>
      </header>

      <main className="card">
        {!viewAnalytics ? (
          <>
            <div className="form">
              <input
                type="text"
                placeholder="Paste a long URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button className="btn" onClick={handleShorten}>
                Shorten
              </button>
            </div>

            {shortCode && (
              <div className="result">
                <p>
                  Shortened URL:{" "}
                  <a
                    href={analyticsData.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {analyticsData.short}
                  </a>
                </p>
                <button className="btn" onClick={handleViewAnalytics}>
                  View Analytics
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="analytics">
            <h2>📊 Analytics</h2>
            <p>
              <strong>Original URL:</strong> {analyticsData.original}
            </p>
            <p>
              <strong>Shortened URL:</strong> {analyticsData.short}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(analyticsData.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Total Clicks:</strong> {analyticsData.clicks}
            </p>

            <h3>Click History</h3>
            {analyticsData.clickHistory.length === 0 ? (
              <p>No clicks yet.</p>
            ) : (
              <ul>
                {analyticsData.clickHistory.map((c, i) => (
                  <li key={i}>
                    {c.timestamp} — {c.source}
                  </li>
                ))}
              </ul>
            )}

            <button className="btn" onClick={() => setViewAnalytics(false)}>
              ⬅ Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
