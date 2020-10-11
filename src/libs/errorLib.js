import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({
    dsn: "https://f926d8862c1e4952874db0879931abd9@o460070.ingest.sentry.io/5459820",
    integrations: [
      new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  alert(message);
}