// Logging Middleware/loggerMiddleware.js
// No console.* — logs are stored in localStorage for inspection.

export function createLogger({ app = "url-shortener" } = {}) {
  const write = (level, message, meta = {}) => {
    const entry = {
      ts: new Date().toISOString(),
      app,
      level,
      message,
      meta,
    };

    const key = "app:logs";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    current.push(entry);
    localStorage.setItem(key, JSON.stringify(current));
  };

  return {
    info: (msg, meta) => write("info", msg, meta),
    warn: (msg, meta) => write("warn", msg, meta),
    error: (msg, meta) => write("error", msg, meta),
    readAll: () => JSON.parse(localStorage.getItem("app:logs") || "[]"),
    clear: () => localStorage.removeItem("app:logs"),
  };
}
