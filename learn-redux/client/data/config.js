import Raven from 'raven-js';

const sentry_key = '1716f30e860e4e3f939e0e28a9c98a60';
const sentry_app = '1312458';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
