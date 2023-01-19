import { args, product, channel, defaultViewport } from './puppeteer.utils';

export const puppeteerOptions = {
  // extraPrefsFirefox: {},

  product,

  channel,
  // Chrome Release Channel

  // dumpio: true,
  // If true, pipes the browser process stdout and stderr to process.stdout and process.stderr.

  // env: Record<string, string | undefined>,
  // Specify environment variables that will be visible to the browser.	The contents of process.env.

  // executablePath:	'',
  // Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk.

  // extraPrefsFirefox: Record<string, unknown>,
  // Additional preferences that can be passed when launching with Firefox.

  // handleSIGHUP: false,
  // Close the browser process on SIGHUP.

  // handleSIGINT: false,
  // Close the browser process on Ctrl+C.

  // handleSIGTERM: false,
  // Close the browser process on SIGTERM.

  // ignoreDefaultArgs: boolean | string[],
  // If true, do not use puppeteer.defaultArgs() when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses.

  // pipe: true,
  // Connect to a browser over a pipe instead of a WebSocket.

  timeout: 10000,
  // Maximum time in milliseconds to wait for the browser to start. Pass 0 to disable the timeout.

  waitForInitialPage: false,
  // Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. --no-startup-window for Chrome).

  args,
  // Additional command line arguments to pass to the browser instance.

  // debuggingPort: 1234,

  // devtools: true,
  // Whether to auto-open a DevTools panel for each tab. If this is set to true, then headless will be forced to false.

  // headless: boolean | 'new',
  // Whether to run the browser in headless mode.

  // userDataDir: '',
  // Path to a user data directory. see the Chromium docs for more info.

  defaultViewport,
  // Sets the viewport for each page.

  // ignoreHTTPSErrors: true,
  // Whether to ignore HTTPS errors during navigation.

  // slowMo: 0,
  // Slows down Puppeteer operations by the specified amount of milliseconds to aid debugging.

  // targetFilter: (target: Protocol.Target.TargetInfo) => boolean,
  // Callback to decide if Puppeteer should connect to a given target or not.
};
