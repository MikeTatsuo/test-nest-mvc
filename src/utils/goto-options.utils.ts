import { waitUntil } from './puppeteer.utils';

export const gotoOptions = {
  timeout: 15000,
  // Maximum wait time in milliseconds. Pass 0 to disable the timeout.
  // The default value can be changed by using the Page.setDefaultTimeout() or Page.setDefaultNavigationTimeout() methods.

  waitUntil,
};
