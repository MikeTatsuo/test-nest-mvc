import { ChromeReleaseChannel, Product } from 'puppeteer';

export const waitUntil = [
  // 'load',
  'domcontentloaded',
  'networkidle0',
  // 'networkidle2',
];

enum ProductEnum {
  CHROME = 'chrome',
  FIREFOX = 'firefox',
}

export const product: Product = ProductEnum.CHROME;

enum ChromeReleaseChannelEnum {
  CHROME = 'chrome',
  CHROME_BETA = 'chrome-beta',
  CHROME_CANARY = 'chrome-canary',
  CHROME_DEV = 'chrome-dev',
}

export const channel: ChromeReleaseChannel = ChromeReleaseChannelEnum.CHROME;

export const defaultViewport = {
  deviceScaleFactor: 1,
  // Specify device scale factor. See devicePixelRatio for more info.

  // hasTouch: true,
  // Specify if the viewport supports touch events.

  height: 1920,
  // The page height in pixels.

  isLandscape: true,
  // Specifies if the viewport is in landscape mode.

  // isMobile: true,
  // Whether the meta viewport tag is taken into account.	false

  width: 1357,
  // The page width in pixels.
};

export const args = [
  // '--'
  //	No description

  // '--/prefetch:1',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	/prefetch:# arguments to use when launching various process types. It has been observed that when file reads are consistent for 3 process launches with the same /prefetch:# argument, the Windows prefetcher starts issuing reads in batch at process launch. Because reads depend on the process type, the prefetcher wouldn't be able to observe consistent reads if no /prefetch:# arguments were used. Note that the browser process has no /prefetch:# argument; as such all other processes must have one in order to avoid polluting its profile. Note: # must always be in [1, 8]; otherwise it is ignored by the Windows prefetcher.

  // '--/prefetch:2',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--/prefetch:3',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--/prefetch:4',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--/prefetch:5',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	/prefetch:# arguments for the browser process launched in background mode and for the watcher process. Use profiles 5, 6 and 7 as documented on kPrefetchArgument* in content_switches.cc.

  // '--/prefetch:8',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	/prefetch:# argument shared by all process types that don't have their own. It is likely that the prefetcher won't work for these process types as it won't be able to observe consistent file reads across launches. However, having a valid prefetch argument for these process types is required to prevent them from interfering with the prefetch profile of the browser process.

  // '--0',
  //	No description

  // '--1',
  //	No description

  // '--10000',
  //	No description

  // '--100000',
  //	No description

  // '--1000000',
  //	No description

  // '--2',
  //	No description

  // '--3d-display-mode',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--4',
  //	No description

  // '--50000',
  //	No description

  // '--500000',
  //	No description

  // '--5000000',
  //	No description

  // '--7',
  //	No description

  // '--?',
  //	No description

  // '--accept-lang',
  //	----------------------------------------------------------------------------- Can't find the switch you are looking for? Try looking in: ash/constants/ash_switches.cc base/base_switches.cc etc. When commenting your switch, please use the same voice as surrounding comments. Imagine "This switch..." at the beginning of the phrase, and it'll all work out. ----------------------------------------------------------------------------- Specifies Accept-Language to send to servers and expose to JavaScript via the navigator.language DOM property. language[-country] where language is the 2 letter code from ISO-639.

  // '--accept-resource-provider',
  //	Flag indicating that a resource provider must be set up to provide cast receiver with resources. Apps cannot start until provided resources. This flag implies --alsa-check-close-timeout=0.

  // '--adaboost',
  //	No description

  // '--add-gpu-appcontainer-caps',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Add additional capabilities to the AppContainer sandbox on the GPU process.

  // '--add-xr-appcontainer-caps',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Add additional capabilities to the AppContainer sandbox used for XR compositing.

  // '--additional-trust-token-key-commitments',
  //	Manually sets additional Trust Tokens key commitments in the network service to the given value, which should be a JSON dictionary satisfying the requirements of TrustTokenKeyCommitmentParser::ParseMultipleIssuers. These keys are available in addition to keys provided by the most recent call to TrustTokenKeyCommitments::Set. For issuers with keys provided through both the command line and TrustTokenKeyCommitments::Set, the keys provided through the command line take precedence. This is because someone testing manually might want to pass additional keys via the command line to a real Chrome release with the component updater enabled, and it would be surprising if the manually-passed keys were overwritten some time after startup when the component updater runs.

  // '--aggressive-cache-discard',
  //	No description

  // '--all',
  //	No description

  // '--all-renderers',
  //	No description

  // '--allarticles',
  //	No description

  // '--allow-cross-origin-auth-prompt',
  //	Allows third-party content included on a page to prompt for a HTTP basic auth username/password pair.

  // '--allow-external-pages',
  //	Allow access to external pages during web tests.

  // '--allow-failed-policy-fetch-for-test',
  //	If this flag is passed, failed policy fetches will not cause profile initialization to fail. This is useful for tests because it means that tests don't have to mock out the policy infrastructure.

  // '--allow-file-access-from-files',
  //	By default, fil:// URIs cannot read other fil:// URIs. This is an override for developers who need the old behavior for testing.

  // '--allow-future-manifest-version',
  //	Mute extension errors while working with new manifest version.

  // '--allow-http-background-page',
  //	Allows non-https URL for background_page for hosted apps.

  // '--allow-http-screen-capture',
  //	Allow non-secure origins to use the screen capture API and the desktopCapture extension API.

  // '--allow-insecure-localhost',
  //	Enables TLS/SSL errors on localhost to be ignored (no interstitial, no blocking of requests).

  // '--allow-legacy-extension-manifests',
  //	Allows the browser to load extensions that lack a modern manifest when that would otherwise be forbidden.

  // '--allow-loopback-in-peer-connection',
  //	Allows loopback interface to be added in network list for peer connection.

  // '--allow-nacl-crxfs-api',
  // (The constant BUILDFLAG(ENABLE_PLUGINS) must be defined.)
  //	Specifies comma-separated list of extension ids or hosts to grant access to CRX file system APIs.

  // '--allow-nacl-file-handle-api',
  // (The constant BUILDFLAG(ENABLE_PLUGINS) must be defined.)
  //	Specifies comma-separated list of extension ids or hosts to grant access to file handle APIs.

  // '--allow-nacl-socket-api',
  // (The constant BUILDFLAG(ENABLE_PLUGINS) must be defined.)
  //	Specifies comma-separated list of extension ids or hosts to grant access to TCP/UDP socket APIs.

  // '--allow-no-sandbox-job',
  //	Enables the sandboxed processes to run without a job object assigned to them. This flag is required to allow Chrome to run in RemoteApps or Citrix. This flag can reduce the security of the sandboxed processes and allow them to do certain API calls like shut down Windows or access the clipboard. Also we lose the chance to kill some processes until the outer job that owns them finishes.

  // '--allow-os-install',
  //	When this flag is set, the OS installation UI can be accessed. This allows the user to install from USB to disk.

  // '--allow-pre-commit-input',
  //	Allows processing of input before a frame has been committed. TODO(schenney): crbug.com/987626. Used by headless. Look for a way not involving a command line switch.

  // '--allow-profiles-outside-user-dir',
  //	Allows profiles to be created outside of the user data dir. TODO(http://crbug.com/1060366): Various places in Chrome assume that all profiles are within the user data dir. Some tests need to violate that assumption. The switch should be removed after this workaround is no longer needed.

  // '--allow-ra-in-dev-mode',
  //	Allows remote attestation (RA) in dev mode for testing purpose. Usually RA is disabled in dev mode because it will always fail. However, there are cases in testing where we do want to go through the permission flow even in dev mode. This can be enabled by this flag.

  // '--allow-running-insecure-content',
  // (The constant BUILDFLAG(ENABLE_CAST_RECEIVER) must be defined.)
  //	No description

  // '--allow-sandbox-debugging',
  //	Allows debugging of sandboxed processes (see zygote_main_linux.cc).

  // '--allow-silent-push',
  //	Allows Web Push notifications that do not show a notification.

  // '--allow-third-party-modules',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Allows third party modules to inject by disabling the BINARY_SIGNATURE mitigation policy on Win10+. Also has other effects in ELF.

  // '--allow-unsecure-dlls',
  // (The constant !BUILDFLAG(IS_OFFICIAL_CHROME_CLEANER_BUILD) must not be defined.)
  //	Don't allow EnableSecureDllLoading to run when this is set. This is only to be used in tests.

  // '--allowlisted-extension-id',
  //	Adds the given extension ID to all the permission allowlists.

  // '--almanac-api-url',
  //	Override for the URL used for the ChromeOS Almanac API. Used for local testing with a non-production server (e.g. "--almanac-api-url=http://localhost:8000").

  // '--alsa-amp-device-name',
  //	Name of the device the amp mixer should be opened on. If this flag is not specified it will default to the same device as kAlsaVolumeDeviceName.

  // '--alsa-amp-element-name',
  //	Name of the simple mixer control element that the ALSA-based media library should use to toggle powersave mode on the system.

  // '--alsa-check-close-timeout',
  //	Time in ms to wait before closing the PCM handle when no more mixer inputs remain. Assumed to be 0 if --accept-resource-provider is present.

  // '--alsa-enable-upsampling',
  //	Flag that enables resampling audio with sample rate below 32kHz up to 48kHz. Should be set to true for internal audio products.

  // '--alsa-fixed-output-sample-rate',
  //	Optional flag to set a fixed sample rate for the alsa device. Deprecated: Use --audio-output-sample-rate instead.

  // '--alsa-input-device',
  // (The constants BUILDFLAG(IS_CHROMEOS), BUILDFLAG(IS_FREEBSD), BUILDFLAG(IS_LINUX) and \ must be defined.)
  //	The Alsa device to use when opening an audio input stream.

  // '--alsa-mute-device-name',
  //	Name of the device the mute mixer should be opened on. If this flag is not specified it will default to the same device as kAlsaVolumeDeviceName.

  // '--alsa-mute-element-name',
  //	Name of the simple mixer control element that the ALSA-based media library should use to mute the system.

  // '--alsa-output-avail-min',
  //	Minimum number of available frames for scheduling a transfer.

  // '--alsa-output-buffer-size',
  //	Size of the ALSA output buffer in frames. This directly sets the latency of the output device. Latency can be calculated by multiplying the sample rate by the output buffer size.

  // '--alsa-output-device',
  // (The constants BUILDFLAG(IS_CHROMEOS), BUILDFLAG(IS_FREEBSD), BUILDFLAG(IS_LINUX) and \ must be defined.)
  //	The Alsa device to use when opening an audio stream.

  // '--alsa-output-period-size',
  //	Size of the ALSA output period in frames. The period of an ALSA output device determines how many frames elapse between hardware interrupts.

  // '--alsa-output-start-threshold',
  //	How many frames need to be in the output buffer before output starts.

  // '--alsa-volume-device-name',
  //	Name of the device the volume control mixer should be opened on. Will use the same device as kAlsaOutputDevice and fall back to "default" if kAlsaOutputDevice is not supplied.

  // '--alsa-volume-element-name',
  //	Name of the simple mixer control element that the ALSA-based media library should use to control the volume.

  // '--also-emit-success-logs',
  //	Also emit full event trace logs for successful tests.

  // '--always-enable-hdcp',
  //	Causes HDCP of the specified type to always be enabled when an external display is connected. Used for HDCP compliance testing on ChromeOS.

  // '--always-use-complex-text',
  //	Always use the complex text path for web tests.

  // '--alwaystrue',
  //	No description

  // '--android-fonts-path',
  //	Uses the android SkFontManager on linux. The specified directory should include the configuration xml file with the name "fonts.xml". This is used in blimp to emulate android fonts on linux.

  // '--angle',
  //	No description

  // '--animated-image-resume',
  //	Enables the resume method on animated images.

  // '--animation-duration-scale',
  //	Scale factor to apply to every animation duration. Must be >= 0.0. This will only apply to LinearAnimation and its subclasses.

  // '--app',
  //	Specifies that the associated value should be launched in "application" mode.

  // '--app-auto-launched',
  //	Specifies whether an app launched in kiosk mode was auto launched with zero delay. Used in order to properly restore auto-launched state during session restore flow.

  // '--app-id',
  //	Specifies that the extension-app with the specified id should be launched according to its configuration.

  // '--app-launch-url-for-shortcuts-menu-item',
  //	Overrides the launch url of an app with the specified url. This is used along with kAppId to launch a given app with the url corresponding to an item in the app's shortcuts menu.

  // '--app-mode-auth-code',
  //	Value of GAIA auth code for --force-app-mode.

  // '--app-mode-oauth-token',
  //	Value of OAuth2 refresh token for --force-app-mode.

  // '--app-mode-oem-manifest',
  //	Path for app's OEM manifest file.

  // '--app-run-on-os-login-mode',
  //	This is used along with kAppId to indicate an app was launched during OS login, and which mode the app was launched in.

  // '--app-shell-allow-roaming',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Allow roaming in the cellular network.

  // '--app-shell-host-window-size',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Size for the host window to create (i.e. "800x600").

  // '--app-shell-preferred-network',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	SSID of the preferred WiFi network.

  // '--apple',
  //	No description

  // '--apps-gallery-download-url',
  //	The URL that the webstore APIs download extensions from. Note: the URL must contain one '%s' for the extension ID.

  // '--apps-gallery-update-url',
  //	The update url used by gallery/webstore extensions.

  // '--apps-gallery-url',
  //	The URL to use for the gallery link in the app launcher.

  // '--apps-keep-chrome-alive-in-tests',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Prevents Chrome from quitting when Chrome Apps are open.

  // '--arc-availability',
  //	Signals ARC support status on this device. This can take one of the following three values. - none: ARC is not installed on this device. (default) - installed: ARC is installed on this device, but not officially supported. Users can enable ARC only when Finch experiment is turned on. - officially-supported: ARC is installed and supported on this device. So users can enable ARC via settings etc.

  // '--arc-available',
  //	DEPRECATED: Please use --arc-availability=installed. Signals the availability of the ARC instance on this device.

  // '--arc-data-cleanup-on-start',
  //	Flag that forces ARC data be cleaned on each start.

  // '--arc-disable-app-sync',
  //	Flag that disables ARC app sync flow that installs some apps silently. Used in autotests to resolve racy conditions.

  // '--arc-disable-download-provider',
  //	Flag that disables ARC download provider that prevents extra content to be downloaded and installed in context of Play Store and GMS Core.

  // '--arc-disable-gms-core-cache',
  //	Used in autotest to disable GMS-core caches which is on by default.

  // '--arc-disable-locale-sync',
  //	Flag that disables ARC locale sync with Android container. Used in autotest to prevent conditions when certain apps, including Play Store may get restarted. Restarting Play Store may cause random test failures. Enabling this flag would also forces ARC container to use 'en-US' as a locale and 'en-US,en' as preferred languages.

  // '--arc-disable-media-store-maintenance',
  //	Used to disable GMS scheduling of media store periodic indexing and corpora maintenance tasks. Used in performance tests to prevent running during testing which can cause unstable results or CPU not idle pre-test failures.

  // '--arc-disable-play-auto-install',
  //	Flag that disables ARC Play Auto Install flow that installs set of predefined apps silently. Used in autotests to resolve racy conditions.

  // '--arc-disable-tts-cache',
  //	Used in autotest to disable TTS cache which is on by default.

  // '--arc-disable-ureadahead',
  //	Flag that disables ureadahead completely, including host and guest parts. To enable only guest ureadahead, please use --arcvm-ureadahead-mode=readahead in combination with this switch (see |kArcVmUreadaheadMode|). TODO(b/264585671): Refactore this and |kArcHostUreadaheadGeneration| to mode enum.

  // '--arc-force-show-optin-ui',
  //	Flag that forces the OptIn ui to be shown. Used in tests.

  // '--arc-generate-play-auto-install',
  //	Flag that enables developer options needed to generate an ARC Play Auto Install roster. Used manually by developers.

  // '--arc-host-ureadahead-generation',
  //	Flag that indicates host ureadahead generation session. Note, it is still valid even in case of kArcDisableUreadahead is set. TODO(b/264585671): Refactore this and |kArcDisableUreadahead| to mode enum.

  // '--arc-install-event-chrome-log-for-tests',
  //	Write ARC++ install events to chrome log for integration test.

  // '--arc-packages-cache-mode',
  //	Used in autotest to specifies how to handle packages cache. Can be copy - copy resulting packages.xml to the temporary directory. skip-copy - skip initial packages cache setup and copy resulting packages.xml to the temporary directory.

  // '--arc-play-store-auto-update',
  //	Used in autotest to forces Play Store auto-update state. Can be on - auto-update is forced on. off - auto-update is forced off.

  // '--arc-scale',
  //	Set the scale for ARC apps. This is in DPI. e.g. 280 DPI is ~ 1.75 device scale factor. See https://source.android.com/compatibility/android-cdd#3_7_runtime_compatibility for list of supported DPI values.

  // '--arc-start-mode',
  //	Defines how to start ARC. This can take one of the following values: - always-start automatically start with Play Store UI support. - always-start-with-no-play-store automatically start without Play Store UI. If it is not set, then ARC is started in default mode.

  // '--arc-tos-host-for-tests',
  //	Sets ARC Terms Of Service hostname url for testing.

  // '--arcvm-ureadahead-mode',
  //	Sets the mode of operation for ureadahead during ARCVM boot. If this switch is not set, ARCVM ureadahead will check for the presence and age of pack file and reads ahead files to page cache for improved boot performance. readahead (default) - used during production and is equivalent to no switch being set. This is used in tast test to explicitly turn on guest ureadahead (see |kArcDisableUreadahead|). generate - used during Android PFQ data collector to pre-generate pack file and upload to Google Cloud as build artifact for CrOS build image. disabled - used for test purpose to disable ureadahead during ARCVM boot. note, |kArcDisableUreadahead| also disables both, guest and host parts of ureadahead.

  // '--arcvm-use-hugepages',
  //	Madvises the kernel to use Huge Pages for guest memory.

  // '--as-browser',
  //	Flag to launch tests in the browser process.

  // '--ash-clear-fast-ink-buffer',
  //	Clear the fast ink buffer upon creation. This is needed on some devices that do not zero out new buffers.

  // '--ash-constrain-pointer-to-root',
  //	Force the pointer (cursor) position to be kept inside root windows.

  // '--ash-contextual-nudges-interval',
  //	Overrides the minimum time that must pass between showing user contextual nudges. Unit of time is in seconds.

  // '--ash-contextual-nudges-reset-shown-count',
  //	Reset contextual nudge shown count on login.

  // '--ash-debug-shortcuts',
  //	Enable keyboard shortcuts useful for debugging.

  // '--ash-dev-shortcuts',
  //	Enable keyboard shortcuts used by developers only.

  // '--ash-disable-touch-exploration-mode',
  //	Disable the Touch Exploration Mode. Touch Exploration Mode will no longer be turned on automatically when spoken feedback is enabled when this flag is set.

  // '--ash-enable-cursor-motion-blur',
  //	Enable cursor motion blur.

  // '--ash-enable-magnifier-key-scroller',
  //	Enables key bindings to scroll magnified screen.

  // '--ash-enable-palette-on-all-displays',
  //	Enables the palette on every display, instead of only the internal one.

  // '--ash-enable-software-mirroring',
  //	Enables software based mirroring.

  // '--ash-enable-unified-desktop',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Enables unified desktop mode.

  // '--ash-hide-notifications-for-factory',
  //	Hides notifications that are irrelevant to Chrome OS device factory testing, such as battery level updates.

  // '--ash-host-window-bounds',
  //	Sets a window size, optional position, and optional scale factor. "1024x768" creates a window of size 1024x768. "100+200-1024x768" positions the window at 100,200. "1024x768*2" sets the scale factor to 2 for a high DPI display. "800,0+800-800x800" for two displays at 800x800 resolution. "800,0+800-800x800,0+1600-800x800" for three displays at 800x800 resolution.

  // '--ash-no-nudges',
  //	Hides educational nudges that can interfere with tast integration tests. Somewhat similar to --no-first-run but affects system UI behavior, not browser behavior.

  // '--ash-power-button-position',
  //	Power button position includes the power button's physical display side and the percentage for power button center position to the display's width/height in landscape_primary screen orientation. The value is a JSON object containing a "position" property with the value "left", "right", "top", or "bottom". For "left" and "right", a "y" property specifies the button's center position as a fraction of the display's height (in [0.0, 1.0]) relative to the top of the display. For "top" and "bottom", an "x" property gives the position as a fraction of the display's width relative to the left side of the display.

  // '--ash-side-volume-button-position',
  //	The physical position info of the side volume button while in landscape primary screen orientation. The value is a JSON object containing a "region" property with the value "keyboard", "screen" and a "side" property with the value "left", "right", "top", "bottom".

  // '--ash-touch-hud',
  //	Enables the heads-up display for tracking touch points.

  // '--ash-web-browser-disabled',
  //	Indicates that the ash web browser is disabled (i.e. lacros the only browser).

  // '--attestation-server',
  //	Used in AttestationClient to determine which Google Privacy CA to use for attestation.

  // '--attribution-reporting-debug-mode',
  //	Causes the Attribution Report API to run without delays or noise.

  // '--audio',
  //	No description

  // '--audio-buffer-size',
  //	Allow users to specify a custom buffer size for debugging purpose.

  // '--audio-capturer-with-echo-cancellation',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	Forces AudioManagerFuchsia to assume that the AudioCapturer implements echo cancellation. TODO(crbug.com/852834): Remove this once AudioManagerFuchsia is updated to get this information from AudioCapturerFactory.

  // '--audio-codecs-from-edid',
  // (The constant BUILDFLAG(ENABLE_PASSTHROUGH_AUDIO_CODECS) must be defined.)
  //	Audio codecs supported by the HDMI sink is retrieved from the audio service process. EDID contains the Short Audio Descriptors, which list the audio decoders supported, and the information is presented as a bitmask of supported audio codecs.

  // '--audio-output-channels',
  //	Number of audio output channels. This will be used to send audio buffer with specific number of channels to ALSA and generate loopback audio. Default value is 2.

  // '--audio-output-sample-rate',
  //	Specify fixed sample rate for audio output stream. If this flag is not specified the StreamMixer will choose sample rate based on the sample rate of the media stream.

  // '--audio-process-high-priority',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Use high priority for the audio process.

  // '--audio-service-quit-timeout-ms',
  //	Set a timeout (in milliseconds) for the audio service to quit if there are no client connections to it. If the value is negative the service never quits.

  // '--aue-reached-for-update-required-test',
  //	If this switch is passed, the device policy DeviceMinimumVersion assumes that the device has reached Auto Update Expiration. This is useful for testing the policy behaviour on the DUT.

  // '--aura-legacy-power-button',
  //	(Most) Chrome OS hardware reports ACPI power button releases correctly. Standard hardware reports releases immediately after presses. If set, we lock the screen or shutdown the system immediately in response to a press instead of displaying an interactive animation.

  // '--auth-server-allowlist',
  //	Allowlist for Negotiate Auth servers.

  // '--auth-spnego-account-type',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Android authentication account type for SPNEGO authentication

  // '--auto',
  //	No description

  // '--auto-accept-this-tab-capture',
  //	This flag makes Chrome auto-accept/reject requests to capture the current tab. It should only be used for tests.

  // '--auto-open-devtools-for-tabs',
  //	This flag makes Chrome auto-open DevTools window for each tab. It is intended to be used by developers and automation to not require user interaction for opening DevTools.

  // '--auto-reject-this-tab-capture',
  //	No description

  // '--auto-select-desktop-capture-source',
  //	This flag makes Chrome auto-select the provided choice when an extension asks permission to start desktop capture. Should only be used for tests. For instance, --auto-select-desktop-capture-source="Entire screen" will automatically select sharing the entire screen in English locales. The switch value only needs to be substring of the capture source name, i.e. "display" would match "Built-in display" and "External display", whichever comes first.

  // '--auto-select-tab-capture-source-by-title',
  //	This flag makes Chrome auto-select a tab with the provided title when the media-picker should otherwise be displayed to the user. This switch is very similar to kAutoSelectDesktopCaptureSource, but limits selection to tabs. This solves the issue of kAutoSelectDesktopCaptureSource being liable to accidentally capturing the Chromium window instead of the tab, as both have the same title if the tab is focused.

  // '--autofill-api-key',
  //	Sets the API key that will be used when calling Autofill API instead of using Chrome's baked key by default. You can use this to test new versions of the API that are not linked to the Chrome baked key yet.

  // '--autofill-ios-delay-between-fields',
  //	The delay between filling two fields.

  // '--autofill-server-url',
  //	Override the default autofill server URL with "scheme://host[:port]/prefix/".

  // '--autofill-upload-throttling-period-in-days',
  //	The number of days after which to reset the registry of autofill events for which an upload has been sent.

  // '--autoplay-policy',
  //	Command line flag name to set the autoplay policy.

  // '--back-gesture-horizontal-threshold',
  //	The number of pixels from the start of a left swipe gesture to consider as a 'back' gesture.

  // '--background-tracing-output-file',
  //	Sets a local file destination for tracing data. This is only used if kEnableBackgroundTracing is also specified.

  // '--bgra',
  //	No description

  // '--biod-fake',
  //	Enables BIOD fake behavior. If the switch is set, fake biod D-Bus client is initialized and BIOD events do not reach chrome.

  // '--blink-settings',
  //	Set blink settings. Format is <name>[=<value],<name>[=<value>],... The names are declared in Settings.json5. For boolean type, use "true", "false", or omit '=<value>' part to set to true. For enum type, use the int value of the enum value. Applied after other command line flags and prefs.

  // '--block-new-web-contents',
  //	If true, then all pop-ups and calls to window.open will fail.

  // '--bootstrap',
  //	Values for the kExtensionContentVerification flag. See ContentVerifierDelegate::Mode for more explanation.

  // '--borealis-launch-options',
  //	Allows passing a BorealisLaunchOptions string to the chrome process, which will be stored in the kExtraLaunchOptions. For the format, see the documentation in chrome/browser/ash/borealis/borealis_launch_options.h.

  // '--bottom-gesture-start-height',
  //	The number of pixels up from the bottom of the screen to consider as a valid origin for a bottom swipe gesture. If set, overrides the value of both the above system-gesture-start-height flag and the default value in cast_system_gesture_handler.cc.

  // '--browser',
  //	No description

  // '--browser-data-backward-migration-for-user',
  //	Specifies the user that the browser data backward migration should happen for.

  // '--browser-data-backward-migration-mode',
  //	Backward migration mode. Passed with `kBrowserDataBackwardMigrationForUser`.

  // '--browser-data-migration-for-user',
  //	Specifies the user that the browser data migration should happen for.

  // '--browser-data-migration-mode',
  //	Run move migration instead of copy. Passed with `kBrowserDataMigrationForUser`.

  // '--browser-startup-dialog',
  //	Causes the browser process to display a dialog on launch.

  // '--browser-subprocess-path',
  //	Path to the exe to run for the renderer and plugin subprocesses.

  // '--browser-test',
  //	Tells whether the code is running browser tests (this changes the startup URL used by the content shell and also disables features that can make tests flaky [like monitoring of memory pressure]).

  // '--bwsi',
  //	Indicates that the browser is in "browse without sign-in" (Guest session) mode. Should completely disable extensions, sync and bookmarks.

  // '--bypass-app-banner-engagement-checks',
  //	This flag causes the user engagement checks for showing app banners to be bypassed. It is intended to be used by developers who wish to test that their sites otherwise meet the criteria needed to show app banners.

  // '--canvas-2d-layers',
  //	Enable in-progress canvas 2d API methods BeginLayer and EndLayer.

  // '--cast-app-background-color',
  //	Background color used when Chromium hasn't rendered anything yet.

  // '--cast-developer-certificate-path',
  //	When enabled by build flags, passing this argument allows the Cast authentication utils to use a custom root developer certificate in the trust store instead of the root Google-signed cert.

  // '--cast-initial-screen-height',
  //	No description

  // '--cast-initial-screen-width',
  //	Used to pass initial screen resolution to GPU process. This allows us to set screen size correctly (so no need to resize when first window is created).

  // '--cast-mojo-broker-path',
  //	Command-line arg to change the Unix domain socket path to connect to the Cast Mojo broker.

  // '--cast-streaming-force-disable-hardware-h264',
  //	No description

  // '--cast-streaming-force-disable-hardware-vp8',
  //	No description

  // '--cast-streaming-force-enable-hardware-h264',
  //	No description

  // '--cast-streaming-force-enable-hardware-vp8',
  //	No description

  // '--cc-layer-tree-test-long-timeout',
  //	Increases timeout for memory checkers.

  // '--cc-layer-tree-test-no-timeout',
  //	Prevents the layer tree unit tests from timing out.

  // '--cc-scroll-animation-duration-in-seconds',
  //	Controls the duration of the scroll animation curve.

  // '--cdm',
  //	No description

  // '--cdm-data-directory',
  //	No description

  // '--cdm-data-quota-bytes',
  //	No description

  // '--cellular-first',
  //	If this flag is set, it indicates that this device is a "Cellular First" device. Cellular First devices use cellular telephone data networks as their primary means of connecting to the internet. Setting this flag has two consequences: 1. Cellular data roaming will be enabled by default. 2. UpdateEngine will be instructed to allow auto-updating over cellular data connections.

  // '--change-stack-guard-on-fork',
  //	After a zygote forks a new process, change the stack canary. This switch is useful so not all forked processes use the same canary (a secret value), which can be vulnerable to information leaks and brute force attacks. See https://crbug.com/1206626. This requires that all functions on the stack at the time content::RunZygote() is called be compiled without stack canaries. Valid values are "enable" or "disable".

  // '--character',
  //	No description

  // '--check-accessibility-permission',
  // (The constant BUILDFLAG(IS_APPLE) must be defined.)
  //	No description

  // '--check-damage-early',
  //	Checks damage early and aborts the frame if no damage, so that clients like Android WebView don't invalidate unnecessarily.

  // '--check-for-update-interval',
  //	How often (in seconds) to check for updates. Should only be used for testing purposes.

  // '--check-permission',
  // (The constant BUILDFLAG(IS_APPLE) must be defined.)
  //	No description

  // '--check-screen-recording-permission',
  // (The constant BUILDFLAG(IS_APPLE) must be defined.)
  //	No description

  // '--child-wallpaper-large',
  //	Default large wallpaper to use for kids accounts (as path to trusted, non-user-writable JPEG file).

  // '--child-wallpaper-small',
  //	Default small wallpaper to use for kids accounts (as path to trusted, non-user-writable JPEG file).

  // '--chrome-mojo-pipe-token',
  //	The Mojo pipe token for IPC communication between the Software Reporter and Chrome. Dropped in M80.

  // '--cipher-suite-blacklist',
  //	Comma-separated list of SSL cipher suites to disable.

  // '--clamshell',
  //	Values for the kAshUiMode flag.

  // '--class',
  // (The constants !BUILDFLAG(IS_CHROMEOS_ASH) and !BUILDFLAG(IS_MAC) must not be defined, and the constant BUILDFLAG(IS_POSIX) must be defined.)
  //	The same as the --class argument in X applications. Overrides the WM_CLASS window property with the given value.

  // '--cleaning-timeout',
  //	Set the timeout for the cleaning phase, in minutes. 0 disables the timeout entirely. WARNING: this switch is used by internal test systems. Be careful when making changes.

  // '--cleanup-id',
  //	Identifier used to group all reports generated during the same run of the cleaner, including runs before and after a reboot. The id is generated by the first cleaner process for a run, and propagated to spawned or scheduled cleaner processes. A new id will be generated in the first process for a subsequent cleanup, so cleanups from the same user cannot be tracked over time.

  // '--clear-key-cdm-path-for-testing',
  //	Specifies the path to the Clear Key CDM for testing, which is necessary to support External Clear Key key system when library CDM is enabled. Note that External Clear Key key system support is also controlled by feature kExternalClearKeyForTesting.

  // '--clear-token-service',
  //	Clears the token service before using it. This allows simulating the expiration of credentials during testing.

  // '--compensate-for-unstable-pinch-zoom',
  //	Enable compensation for unstable pinch zoom. Some touch screens display significant amount of wobble when moving a finger in a straight line. This makes two finger scroll trigger an oscillating pinch zoom. See crbug.com/394380 for details.

  // '--compile-shader-always-succeeds',
  //	Always return success when compiling a shader. Linking will still fail.

  // '--component-updater',
  //	Comma-separated options to troubleshoot the component updater. Only valid for the browser process.

  // '--component-updater-trust-tokens-component-path',
  //	Optional testing override of the Trust Tokens key commitment component's path.

  // '--conditional-focus-window-ms',
  //	Allows overriding the conditional focus window's length.

  // '--connectivity-check-url',
  //	Url for network connectivity checking. Default is "https://clients3.google.com/generate_204".

  // '--conservative',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	No description

  // '--content-shell-devtools-tab-target',
  //	Let DevTools front-end talk to the target of type "tab" rather than "frame" when inspecting a WebContents.

  // '--content-shell-hide-toolbar',
  //	Hides toolbar from content_shell's host window.

  // '--content-shell-host-window-size',
  //	Size for the content_shell's host window (i.e. "800x600").

  // '--context-provider',
  //	No description

  // '--controller',
  //	No description

  // '--copy-to-download-dir',
  //	Copy user action data to download directory.

  // '--cors-exempt-headers',
  //	No description

  // '--crash',
  //	Crash flag to force a crash right away. Mainly intended for ensuring crashes are properly recorded by crashpad.

  // '--crash-dumps-dir',
  //	The directory breakpad should store minidumps in.

  // '--crash-handler',
  //	Runs as the Crashpad handler.

  // '--crash-loop-before',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	A time_t. Passed by session_manager into the Chrome user session, indicating that if Chrome crashes before the indicated time, session_manager will consider this to be a crash-loop situation and log the user out. Chrome mostly just passes this to crash_reporter if it crashes.

  // '--crash-on-failure',
  //	When specified to "enable-leak-detection" command-line option, causes the leak detector to cause immediate crash when found leak.

  // '--crash-on-hang-threads',
  //	Comma-separated list of BrowserThreads that cause browser process to crash if the given browser thread is not responsive. UI/IO are the BrowserThreads that are supported. For example: --crash-on-hang-threads=UI:18,IO:18 --> Crash the browser if UI or IO is not responsive for 18 seconds while the other browser thread is responsive.

  // '--crash-server-url',
  //	Server url to upload crash data to. Default is "https://clients2.google.com/cr/report" for prod devices. Default is "https://clients2.google.com/cr/staging_report" for non prod.

  // '--crash-test',
  //	Causes the browser process to crash on startup.

  // '--crashpad-handler',
  //	A process type (switches::kProcessType) that indicates chrome.exe or setup.exe is being launched as crashpad_handler. This is only used on Windows. We bundle the handler into chrome.exe on Windows because there is high probability of a "new" .exe being blocked or interfered with by application firewalls, AV software, etc. On other platforms, crashpad_handler is a standalone executable.

  // '--crashpad-handler-pid',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	The process ID of the Crashpad handler.

  // '--create-browser-on-startup-for-tests',
  //	Some platforms like ChromeOS default to empty desktop. Browser tests may need to add this switch so that at least one browser instance is created on startup. TODO(nkostylev): Investigate if this switch could be removed. (http://crbug.com/148675)

  // '--credits',
  //	Prints licensing information (same content as found in about:credits) and quits.

  // '--cros-disks-fake',
  //	Enables cros disks fake behavior. If the switch is set, fake cros disk D-Bus client is initialized and USB events do not reach chrome.

  // '--cros-postlogin-data-fd',
  //	FD pointing to an anonymous pipe containing the post-login data.

  // '--cros-postlogin-log-file',
  //	The path of the log file that Lacros should use post-login.

  // '--cros-region',
  //	Forces CrOS region value.

  // '--cros-startup-data-fd',
  //	FD pointing a (memory backed) file containing the startup data.

  // '--crosh-command',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Custom crosh command.

  // '--cryptauth-http-host',
  //	Overrides the default URL for Google APIs (https://www.googleapis.com) used by CryptAuth.

  // '--cryptauth-v2-devicesync-http-host',
  //	Overrides the default URL for CryptAuth v2 DeviceSync: https://cryptauthdevicesync.googleapis.com.

  // '--cryptauth-v2-enrollment-http-host',
  //	Overrides the default URL for CryptAuth v2 Enrollment: https://cryptauthenrollment.googleapis.com.

  // '--cryptohome-recovery-reauth-url',
  //	Overrides the url for fetching a reauth request token for Cryptohome recovery flow.

  // '--cryptohome-use-authsession',
  //	Controls if AuthSession API should be used when interacting with cryptohomed.

  // '--cryptohome-use-old-encryption-for-testing',
  //	Forces cryptohome to create new users using old (ecryptfs) encryption. This switch can be used to set up configurations that can be used to test encryption migration scenarios.

  // '--custom-android-messages-domain',
  //	No description

  // '--custom-devtools-frontend',
  //	Specifies the http:// endpoint which will be used to serve devtools://devtools/custom/<path> Or a file:// URL to specify a custom file path to load from for devtools://devtools/bundled/<path>

  // '--custom_summary',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces a custom summary to be displayed below the update menu item.

  // '--d3d-support',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--d3d11',
  //	No description

  // '--d3d11-null',
  //	Special switches for "NULL"/stub driver implementations.

  // '--d3d11on12',
  //	No description

  // '--d3d9',
  //	No description

  // '--daemon',
  //	No description

  // '--dark-mode-settings',
  //	Sets dark mode settings. Format is [<param>=<value>],[<param>=<value>],... The params take either int or float values. If params are not specified, the default dark mode settings is used. Valid params are given below. "InversionAlgorithm" takes int value of DarkModeInversionAlgorithm enum. "ImagePolicy" takes int value of DarkModeImagePolicy enum. "ForegroundBrightnessThreshold" takes 0 to 255 int value. "BackgroundBrightnessThreshold" takes 0 to 255 int value. "ContrastPercent" takes -1.0 to 1.0 float value. Higher the value, more the contrast.

  // '--data-path',
  //	Makes Content Shell use the given path for its data directory. NOTE: If changing this value, change the corresponding Java-side value in ContentShellBrowserTestActivity.java#getUserDataDirectoryCommandLineSwitch() to match.

  // '--data-quota-bytes',
  //	No description

  // '--dbus-stub',
  //	Forces the stub implementation of D-Bus clients. Using stub D-Bus clients is the default for non-Chrome OS environment, to use real D-Bus clients in non-Chrome OS environment, set this flag to "never".

  // '--deadline-to-synchronize-surfaces',
  //	The default number of the BeginFrames to wait to activate a surface with dependencies.

  // '--debug-devtools',
  //	Run devtools tests in debug mode (not bundled and minified)

  // '--debug-enable-frame-toggle',
  //	Enables a frame context menu item that toggles the frame in and out of glass mode (Windows Vista and up only).

  // '--debug-packed-apps',
  //	Adds debugging entries such as Inspect Element to context menus of packed apps.

  // '--debug-print',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Enables support to debug printing subsystem.

  // '--default',
  //	No description

  // '--default-background-color',
  //	The background color to be used if the page doesn't specify one. Provided as RGB or RGBA integer value in hex, e.g. 'ff0000ff' for red or '00000000' for transparent.

  // '--default-country-code',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Default country code to be used for search engine localization.

  // '--default-tile-height',
  //	No description

  // '--default-tile-width',
  //	Sets the tile size used by composited layers.

  // '--default-trace-buffer-size-limit-in-kb',
  //	This is only used when we did not set buffer size in trace config and will be used for all trace sessions. If not provided, we will use the default value provided in perfetto_config.cc

  // '--default-wallpaper-is-oem',
  //	Indicates that the wallpaper images specified by kAshDefaultWallpaper{Large,Small} are OEM-specific (i.e. they are not downloadable from Google).

  // '--default-wallpaper-large',
  //	Default large wallpaper to use (as path to trusted, non-user-writable JPEG file).

  // '--default-wallpaper-small',
  //	Default small wallpaper to use (as path to trusted, non-user-writable JPEG file).

  // '--defer-feature-list',
  //	Defer initialization of the base::FeatureList in an external service process, allowing the process to include its own non-default features.

  // '--demo-mode-enrolling-username',
  //	Test Organization Unit (OU) user to use for demo mode. Only pass the part before "@cros-demo-mode.com".

  // '--demo-mode-force-arc-offline-provision',
  //	Force ARC provision to take code path for offline demo mode.

  // '--demo-mode-highlights-extension',
  //	App ID to use for highlights app in demo mode.

  // '--demo-mode-screensaver-extension',
  //	App ID to use for screensaver app in demo mode.

  // '--demo-mode-swa-content-directory',
  //	Directory from which to fetch the demo mode SWA content (instead of downloading from Omaha).

  // '--deny-elevation-for-testing',
  //	Instead of showing an elevation prompt, proceed as if the user denied the elevation. (Do this even if the cleaner is already running elevated, so that it behaves the same in unit tests run from elevated command shells.)

  // '--deny-permission-prompts',
  //	Prevents permission prompts from appearing by denying instead of showing prompts.

  // '--derelict-detection-timeout',
  //	Time in seconds before a machine at OOBE is considered derelict.

  // '--derelict-idle-timeout',
  //	Time in seconds before a derelict machines starts demo mode.

  // '--desktop',
  //	No description

  // '--desktop-window-1080p',
  //	When present, desktop cast_shell will create 1080p window (provided display resolution is high enough). Otherwise, cast_shell defaults to 720p.

  // '--deterministic-mode',
  //	A meta flag. This sets a number of flags which put the browser into deterministic mode where begin frames should be issued over DevToolsProtocol (experimental).

  // '--device-management-url',
  //	Specifies the URL at which to communicate with the device management backend to fetch configuration policies and perform other device tasks.

  // '--device-scale-factor',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Device scale factor passed to certain processes like renderers, etc.

  // '--devtools-code-coverage',
  //	Directory to output JavaScript code coverage. When supplied enables coverage in selected browser tests.

  // '--devtools-flags',
  //	Passes command line parameters to the DevTools front-end.

  // '--diagnostics',
  //	Triggers a plethora of diagnostic modes.

  // '--diagnostics-format',
  //	Sets the output format for diagnostic modes enabled by diagnostics flag.

  // '--diagnostics-recovery',
  //	Tells the diagnostics mode to do the requested recovery step(s).

  // '--direct-composition-video-swap-chain-format',
  //	Used for overriding the swap chain format for direct composition SDR video overlays.

  // '--direction',
  //	No description

  // '--disable',
  //	No description

  // '--disable-2d-canvas-clip-aa',
  //	Disable antialiasing on 2d canvas clips

  // '--disable-2d-canvas-image-chromium',
  //	Disables Canvas2D rendering into a scanout buffer for overlay support.

  // '--disable-3d-apis',
  //	Disables client-visible 3D APIs, in particular WebGL and Pepper 3D. This is controlled by policy and is kept separate from the other enable/disable switches to avoid accidentally regressing the policy support for controlling access to these APIs.

  // '--disable-accelerated-2d-canvas',
  //	Disable gpu-accelerated 2d canvas.

  // '--disable-accelerated-mjpeg-decode',
  //	Disable hardware acceleration of mjpeg decode for captured frame, where available.

  // '--disable-accelerated-video-decode',
  //	Disables hardware acceleration of video decode, where available.

  // '--disable-accelerated-video-encode',
  //	Disables hardware acceleration of video encode, where available.

  // '--disable-and-delete-previous-log',
  //	Disable cros action logging.

  // '--disable-angle-features',
  //	Disables specified comma separated ANGLE features if found.

  // '--disable-app-content-verification',
  //	Whether to disable app content verification when testing changes locally on Chromebox for Meetings hardware.

  // '--disable-arc-cpu-restriction',
  //	Prevents any CPU restrictions being set on ARC[VM]. Only meant to be used by tests as some tests may time out if the ARC container is throttled.

  // '--disable-arc-data-wipe',
  //	Disables android user data wipe on opt out.

  // '--disable-arc-opt-in-verification',
  //	Disables ARC Opt-in verification process and ARC is enabled by default.

  // '--disable-audio-input',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	No description

  // '--disable-audio-output',
  //	No description

  // '--disable-auto-maximize-for-tests',
  // (The constant BUILDFLAG(IS_CHROMEOS) must be defined.)
  //	Disables the auto maximize feature on ChromeOS so that a browser window always starts in normal state. This is used by tests that do not want this auto maximizing behavior.

  // '--disable-auto-reload',
  //	Disable auto-reload of error pages.

  // '--disable-auto-wpt-origin-isolation',
  //	Disables the automatic origin isolation of web platform test domains. We normally origin-isolate them for better test coverage, but tests of opt-in origin isolation need to disable this.

  // '--disable-ax-menu-list',
  //	Optionally disable AXMenuList, which makes the internal pop-up menu UI for a select element directly accessible.

  // '--disable-back-forward-cache',
  //	Disables the BackForwardCache feature.

  // '--disable-background-media-suspend',
  //	Do not immediately suspend media in background tabs.

  // '--disable-background-networking',
  //	Disable several subsystems which run network requests in the background. This is for use when doing network performance testing to avoid noise in the measurements.

  // '--disable-background-timer-throttling',
  //	Disable task throttling of timer tasks from background pages.

  // '--disable-backgrounding-occluded-windows',
  //	Disable backgrounding renders for occluded windows. Done for tests to avoid nondeterministic behavior.

  // '--disable-backing-store-limit',
  //	Disable limits on the number of backing stores. Can prevent blinking for users with many windows/tabs and lots of memory.

  // '--disable-best-effort-tasks',
  //	Delays execution of TaskPriority::BEST_EFFORT tasks until shutdown.

  // '--disable-blink-features',
  //	Disable one or more Blink runtime-enabled features. Use names from runtime_enabled_features.json5, separated by commas. Applied after kEnableBlinkFeatures, and after other flags that change these features.

  // '--disable-breakpad',
  //	Disables the crash reporting.

  // '--disable-buffer-bw-compression',
  //	Disable buffer bandwidth compression

  // '--disable-cancel-all-touches',
  // (The constant BUILDFLAG(IS_OZONE) must be defined.)
  //	Disable CancelAllTouches() function for the implementation on cancel single touches.

  // '--disable-canvas-aa',
  //	Disable antialiasing on 2d canvas.

  // '--disable-checker-imaging',
  //	Disabled defering all image decodes to the image decode service, ignoring DecodingMode preferences specified on PaintImage.

  // '--disable-checking-optimization-guide-user-permissions',
  //	No description

  // '--disable-chrome-tracing-computation',
  //	Disable the tracing service graph compuation while writing the trace.

  // '--disable-component-extensions-with-background-pages',
  //	Disable default component extensions with background pages - useful for performance tests where these pages may interfere with perf results.

  // '--disable-component-update',
  // (The constant BUILDFLAG(ENABLE_COMPONENT_UPDATER) must be defined.)
  //	No description

  // '--disable-composited-antialiasing',
  //	Disables layer-edge anti-aliasing in the compositor.

  // '--disable-cookie-encryption',
  //	Whether cookies stored as part of user profile are encrypted.

  // '--disable-crash-reporter',
  //	Disable crash reporter for headless. It is enabled by default in official builds.

  // '--disable-d3d11',
  //	Disables use of D3D11.

  // '--disable-databases',
  //	Disables HTML5 DB support.

  // '--disable-dawn-features',
  //	Set the Dawn features(toggles) disabled on the creation of Dawn devices.

  // '--disable-default-apps',
  //	Disables installation of default apps on first run. This is used during automated testing.

  // '--disable-demo-mode',
  //	Disables the Chrome OS demo.

  // '--disable-dev-shm-usage',
  // (The constant !BUILDFLAG(IS_CHROMEOS_ASH) must not be defined, and the constants BUILDFLAG(IS_LINUX) and \ must be defined.)
  //	The /dev/shm partition is too small in certain VM environments, causing Chrome to fail or crash (see http://crbug.com/715363). Use this flag to work-around this issue (a temporary directory will always be used to create anonymous shared memory files).

  // '--disable-device-disabling',
  //	If this switch is set, the device cannot be remotely disabled by its owner.

  // '--disable-dinosaur-easter-egg',
  //	Disables the dinosaur easter egg on the offline interstitial.

  // '--disable-direct-composition',
  //	Disables DirectComposition surface.

  // '--disable-direct-composition-video-overlays',
  //	Disables using DirectComposition video overlays, even if hardware overlays are supported.

  // '--disable-domain-blocking-for-3d-apis',
  //	Disable the per-domain blocking for 3D APIs after GPU reset. This switch is intended only for tests.

  // '--disable-domain-reliability',
  //	Disables Domain Reliability Monitoring.

  // '--disable-dwm-composition',
  //	Disables use of DWM composition for top level windows.

  // '--disable-es3-gl-context',
  //	Disables use of ES3 backend (use ES2 backend instead).

  // '--disable-es3-gl-context-for-testing',
  //	Disables use of ES3 backend at a lower level, for testing purposes. This isn't guaranteed to work everywhere, so it's test-only.

  // '--disable-explicit-dma-fences',
  //	Disable explicit DMA-fences

  // '--disable-extensions',
  //	Disable extensions.

  // '--disable-extensions-except',
  //	Disable extensions except those specified in a comma-separated list.

  // '--disable-extensions-file-access-check',
  //	Disable checking for user opt-in for extensions that want to inject script into file URLs (ie, always allow it). This is used during automated testing.

  // '--disable-extensions-http-throttling',
  //	Disable the net::URLRequestThrottlerManager functionality for requests originating from extensions.

  // '--disable-features',
  //	Comma-separated list of feature names to disable. See also kEnableFeatures.

  // '--disable-fetching-hints-at-navigation-start',
  //	No description

  // '--disable-field-trial-config',
  //	Disable field trial tests configured in fieldtrial_testing_config.json.

  // '--disable-file-system',
  //	Disable FileSystem API.

  // '--disable-fine-grained-time-zone-detection',
  //	Disables fine grained time zone detection.

  // '--disable-font-subpixel-positioning',
  //	Force disables font subpixel positioning. This affects the character glyph sharpness, kerning, hinting and layout.

  // '--disable-frame-rate-limit',
  //	Disables begin frame limiting in both cc scheduler and display scheduler. Also implies --disable-gpu-vsync (see
  //ui/gl/gl_switches.h).

  // '--disable-gaia-services',
  //	Disables GAIA services such as enrollment and OAuth session restore. Used by 'fake' telemetry login.

  // '--disable-gesture-requirement-for-presentation',
  //	Disable user gesture requirement for presentation.

  // '--disable-gl-drawing-for-tests',
  //	Disables GL drawing operations which produce pixel output. With this the GL output will not be correct but tests will run faster.

  // '--disable-gl-error-limit',
  //	Disable the GL error log limit.

  // '--disable-gl-extensions',
  //	Disables specified comma separated GL Extensions if found.

  // '--disable-glsl-translator',
  //	Disable the GLSL translator.

  '--disable-gpu',
  //	Disables GPU hardware acceleration. If software renderer is not in place, then the GPU process won't launch.

  // '--disable-gpu-compositing',
  //	Prevent the compositor from using its GPU implementation.

  // '--disable-gpu-driver-bug-workarounds',
  //	Disable workarounds for various GPU driver bugs.

  // '--disable-gpu-early-init',
  //	Disable proactive early init of GPU process.

  // '--disable-gpu-memory-buffer-compositor-resources',
  //	Do not force that all compositor resources be backed by GPU memory buffers.

  // '--disable-gpu-memory-buffer-video-frames',
  //	Disable GpuMemoryBuffer backed VideoFrames.

  // '--disable-gpu-process-crash-limit',
  //	For tests, to disable the limit on the number of times the GPU process may be restarted.

  // '--disable-gpu-process-for-dx12-info-collection',
  //	Disables the non-sandboxed GPU process for DX12 info collection

  // '--disable-gpu-program-cache',
  //	Turn off gpu program caching

  // '--disable-gpu-rasterization',
  //	Disable GPU rasterization, i.e. rasterize on the CPU only. Overrides the kEnableGpuRasterization flag.

  // '--disable-gpu-sandbox',
  //	Disables the GPU process sandbox.

  // '--disable-gpu-shader-disk-cache',
  //	Disables the GPU shader on disk cache.

  // '--disable-gpu-vsync',
  //	Stop the GPU from synchronizing presentation with vblank.

  // '--disable-gpu-watchdog',
  //	Disable the thread that crashes the GPU process if it stops responding to messages.

  // '--disable-hang-monitor',
  //	Suppresses hang monitor dialogs in renderer processes. This may allow slow unload handlers on a page to prevent the tab from closing, but the Task Manager can be used to terminate the offending process in this case.

  // '--disable-headless-mode',
  //	Disables the shell from beginning in headless mode. Tests will then attempt to use the hardware GPU for rendering. This is only followed when kRunWebTests is set.

  // '--disable-hid-blocklist',
  //	Disable the HID blocklist.

  // '--disable-hid-detection-on-oobe',
  //	Disables HID-detection OOBE screen.

  // '--disable-highres-timer',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Disable high-resolution timer on Windows.

  // '--disable-histogram-customizer',
  //	Disable the RenderThread's HistogramCustomizer.

  // '--disable-image-animation-resync',
  //	Disallow image animations to be reset to the beginning to avoid skipping many frames. Only effective if compositor image animations are enabled.

  // '--disable-in-process-stack-traces',
  //	Disables the in-process stack traces.

  // '--disable-ios-password-suggestions',
  //	Disable showing available password credentials in the keyboard accessory view when focused on form fields.

  // '--disable-ipc-flooding-protection',
  //	Disables the IPC flooding protection. It is activated by default. Some javascript functions can be used to flood the browser process with IPC. This protection limits the rate at which they can be used.

  // '--disable-javascript-harmony-shipping',
  //	Disable latest shipping ECMAScript 6 features.

  // '--disable-kill-after-bad-ipc',
  //	Don't kill a child process when it sends a bad IPC message. Apart from testing, it is a bad idea from a security perspective to enable this switch.

  // '--disable-lacros-keep-alive',
  //	Disables the Lacros keep alive for testing.

  // '--disable-layer-tree-host-memory-pressure',
  //	Disables LayerTreeHost::OnMemoryPressure

  // '--disable-lcd-text',
  //	Disables LCD text.

  // '--disable-legacy-window',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Disable the Legacy Window which corresponds to the size of the WebContents.

  // '--disable-libassistant-logfile',
  //	No description

  // '--disable-local-storage',
  //	Disable LocalStorage.

  // '--disable-logging',
  //	Force logging to be disabled. Logging is enabled by default in debug builds.

  // '--disable-logging-redirect',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Disables logging redirect for testing.

  // '--disable-login-animations',
  //	Avoid doing expensive animations upon login.

  // '--disable-login-lacros-opening',
  //	If Lacros is set to the primary web browser, on session login, it is automatically launched. This disables the feature, i.e., if this flag is set, even if lacros is the primary web browser, it won't automatically launch on session login. This is for testing purpose, specifically for Tast.

  // '--disable-login-screen-apps',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Disables apps on the login screen. By default, they are allowed and can be installed through policy.

  // '--disable-low-end-device-mode',
  //	Force disabling of low-end device mode when set.

  // '--disable-low-latency-dxva',
  //	Disables using CODECAPI_AVLowLatencyMode when creating DXVA decoders.

  // '--disable-low-res-tiling',
  //	When using CPU rasterizing disable low resolution tiling. This uses less power, particularly during animations, but more white may be seen during fast scrolling especially on slower devices.

  // '--disable-machine-cert-request',
  //	Disables requests for an enterprise machine certificate during attestation.

  // '--disable-main-frame-before-activation',
  //	Disables sending the next BeginMainFrame before the previous commit activates. Overrides the kEnableMainFrameBeforeActivation flag.

  // '--disable-media-session-api',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disable Media Session API

  // '--disable-metal-shader-cache',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Disables Metal's shader cache, using the GPU sandbox to prevent access to it.

  // '--disable-mipmap-generation',
  //	Disables mipmap generation in Skia. Used a workaround for select low memory devices, see https://crbug.com/1138979 for details.

  // '--disable-modal-animations',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Disable animations for showing and hiding modal dialogs.

  // '--disable-model-download-verification',
  //	No description

  // '--disable-mojo-broker',
  //	Disables Mojo broker capabilities in the browser during Mojo initialization.

  // '--disable-mojo-renderer',
  //	Rather than use the renderer hosted remotely in the media service, fall back to the default renderer within content_renderer. Does not change the behavior of the media service.

  // '--disable-namespace-sandbox',
  //	Disables usage of the namespace sandbox.

  // '--disable-new-base-url-inheritance-behavior',
  //	Disallow use of the feature NewBaseUrlInheritanceBehavior.

  // '--disable-new-content-rendering-timeout',
  //	Disables clearing the rendering output of a renderer when it didn't commit new output for a while after a top-frame navigation.

  // '--disable-notifications',
  //	Disables the Web Notification and the Push APIs.

  // '--disable-nv12-dxgi-video',
  //	Disables the video decoder from drawing to an NV12 textures instead of ARGB.

  // '--disable-oobe-chromevox-hint-timer-for-testing',
  //	Disables the ChromeVox hint idle detection in OOBE, which can lead to unexpected behavior during tests.

  // '--disable-oobe-network-screen-skipping-for-testing',
  //	Disables network screen skip check which is based on ethernet connection.

  // '--disable-oopr-debug-crash-dump',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disables debug crash dumps for OOPR.

  // '--disable-origin-trial-controlled-blink-features',
  //	Disables all RuntimeEnabledFeatures that can be enabled via OriginTrials.

  // '--disable-overscroll-edge-effect',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disable overscroll edge effects like those found in Android views.

  // '--disable-partial-raster',
  //	Disable partial raster in the renderer. Disabling this switch also disables the use of persistent gpu memory buffers.

  // '--disable-pdf-tagging',
  //	Do not emit tags when printing PDFs.

  // '--disable-pepper-3d',
  //	Disable Pepper3D.

  // '--disable-pepper-3d-image-chromium',
  //	Disable Image Chromium for Pepper 3d.

  // '--disable-per-user-timezone',
  //	Disables per-user timezone.

  // '--disable-permissions-api',
  //	Disables the Permissions API.

  // '--disable-pinch',
  //	Disables compositor-accelerated touch-screen pinch gestures.

  // '--disable-pnacl-crash-throttling',
  //	Disables crash throttling for Portable Native Client.

  // '--disable-policy-key-verification',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Disables the verification of policy signing keys. It just works on Chrome OS test images and crashes otherwise. TODO(crbug.com/1225054): This flag might introduce security risks. Find a better solution to enable policy tast test for Family Link account.

  // '--disable-popup-blocking',
  //	Disables pop-up blocking.

  // '--disable-ppapi-shared-images-swapchain',
  //	Disables new code to run SharedImages for NaCL swapchain. This overrides value of kPPAPISharedImagesSwapChain feature flag.

  // '--disable-prefer-compositing-to-lcd-text',
  //	Disable the creation of compositing layers when it would prevent LCD text.

  // '--disable-presentation-api',
  //	Disables the Presentation API.

  // '--disable-print-preview',
  //	Disables print preview (For testing, and for users who don't like us. :[ )

  // '--disable-prompt-on-repost',
  //	Normally when the user attempts to navigate to a page that was the result of a post we prompt to make sure they want to. This switch may be used to disable that check. This switch is used during automated testing.

  // '--disable-pull-to-refresh-effect',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disable the pull-to-refresh effect when vertically overscrolling content.

  // '--disable-pushstate-throttle',
  //	Disables throttling of history.pushState/replaceState calls.

  // '--disable-reading-from-canvas',
  //	Taints all <canvas> elements, regardless of origin.

  // '--disable-remote-fonts',
  //	Disables remote web font support. SVG font should always work whether this option is specified or not.

  // '--disable-remote-playback-api',
  //	Disables the RemotePlayback API.

  // '--disable-renderer-accessibility',
  //	Turns off the accessibility in the renderer.

  // '--disable-renderer-backgrounding',
  //	Prevent renderer process backgrounding when set.

  // '--disable-resource-scheduler',
  //	Whether the ResourceScheduler is disabled. Note this is only useful for C++ Headless embedders who need to implement their own resource scheduling.

  // '--disable-rgba-4444-textures',
  //	Disables RGBA_4444 textures.

  // '--disable-rollback-option',
  //	Disables rollback option on reset screen.

  // '--disable-rtc-smoothness-algorithm',
  //	Disables the new rendering algorithm for webrtc, which is designed to improve the rendering smoothness.

  // '--disable-running-as-system-compositor',
  //	Disable running as system compositor.

  // '--disable-screen-orientation-lock',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disable the locking feature of the screen orientation API.

  // '--disable-scroll-to-text-fragment',
  //	This switch disables the ScrollToTextFragment feature.

  // '--disable-seccomp-filter-sandbox',
  //	Disable the seccomp filter sandbox (seccomp-bpf) (Linux only).

  // '--disable-setuid-sandbox',
  //	Disable the setuid sandbox (Linux only).

  // '--disable-shader-name-hashing',
  //	Turn off user-defined name hashing in shaders.

  // '--disable-shared-workers',
  //	Disable shared workers.

  // '--disable-signin-frame-client-certs',
  //	Disables client certificate authentication on the sign-in frame on the Chrome OS sign-in profile. TODO(https://crbug.com/844022): Remove this flag when reaching endpoints that request client certs does not hang anymore when there is no system token yet.

  // '--disable-signin-scoped-device-id',
  //	Disables sending signin scoped device id to LSO with refresh token request.

  // '--disable-site-isolation-for-policy',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Just like kDisableSiteIsolation, but doesn't show the "stability and security will suffer" butter bar warning.

  // '--disable-site-isolation-trials',
  //	Disables site isolation. Note that the opt-in (to site-per-process, isolate-origins, etc.) via enterprise policy and/or cmdline takes precedence over the kDisableSiteIsolation switch (i.e. the opt-in takes effect despite potential presence of kDisableSiteIsolation switch). Note that for historic reasons the name of the switch misleadingly mentions "trials", but the switch also disables the default site isolation that ships on desktop since M67. The name of the switch is preserved for backcompatibility of chrome://flags.

  // '--disable-skia-runtime-opts',
  //	Do not use runtime-detected high-end CPU optimizations in Skia. This is useful for forcing a baseline code path for e.g. web tests.

  // '--disable-smooth-scrolling',
  //	Disable smooth scrolling for testing.

  // '--disable-software-compositing-fallback',
  //	For tests, to disable falling back to software compositing if the GPU Process has crashed, and reached the GPU Process crash limit.

  // '--disable-software-rasterizer',
  //	Disables the use of a 3D software rasterizer.

  // '--disable-speech-api',
  //	Disables the Web Speech API (both speech recognition and synthesis).

  // '--disable-speech-synthesis-api',
  //	Disables the speech synthesis part of Web Speech API.

  // '--disable-stack-profiler',
  //	Disable stack profiling. Stack profiling may change performance. Disabling stack profiling is beneficial when comparing performance metrics with a build that has it disabled by default.

  // '--disable-system-font-check',
  //	Disables the check for the system font when specified.

  // '--disable-test-root-certs',
  //	Disables adding the test certs in the network process.

  // '--disable-third-party-keyboard-workaround',
  //	Disables the 3rd party keyboard omnibox workaround.

  // '--disable-threaded-animation',
  //	No description

  // '--disable-threaded-compositing',
  //	Disable multithreaded GPU compositing of web content.

  // '--disable-threaded-scrolling',
  //	Disable multithreaded, compositor scrolling of web content.

  // '--disable-throttle-non-visible-cross-origin-iframes',
  //	Used to override the ThrottleDisplayNoneAndVisibilityHiddenCrossOrigin feature from an enterprise policy.

  // '--disable-timeouts-for-profiling',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Disable timeouts that may cause the browser to die when running slowly. This is useful if running with profiling (such as debug malloc).

  // '--disable-touch-drag-drop',
  //	Disables touch event based drag and drop.

  // '--disable-usb-keyboard-detect',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Disables the USB keyboard detection for blocking the OSK on Win8+.

  // '--disable-use-mojo-video-decoder-for-pepper',
  //	Disables the code path that makes Pepper use the MojoVideoDecoder for hardware accelerated video decoding. It overrides the value of the kUseMojoVideoDecoderForPepper feature flag.

  // '--disable-v8-idle-tasks',
  //	Disable V8 idle tasks.

  // '--disable-variations-safe-mode',
  //	Disable variations safe mode.

  // '--disable-variations-seed-fetch-throttling',
  //	Disables throttling for fetching the variations seed on mobile platforms. The seed will be fetched on startup and every time the app enters the foreground, regardless of the time passed in between the fetches. On Desktop, this switch has no effect (the seed is fetched periodically instead).

  // '--disable-video-capture-use-gpu-memory-buffer',
  //	This is for the same feature controlled by kVideoCaptureUseGpuMemoryBuffer. kVideoCaptureUseGpuMemoryBuffer is settled by chromeos overlays. This flag is necessary to overwrite the settings via chrome:// flag. The behavior of chrome://flag#zero-copy-video-capture is as follows; Default : Respect chromeos overlays settings. Enabled : Force to enable kVideoCaptureUseGpuMemoryBuffer. Disabled : Force to disable kVideoCaptureUseGpuMemoryBuffer.

  // '--disable-virtual-keyboard',
  //	No description

  // '--disable-volume-adjust-sound',
  //	Disables volume adjust sound.

  // '--disable-vsync-for-tests',
  //	No description

  // '--disable-vulkan-fallback-to-gl-for-testing',
  //	Disables falling back to GL based hardware rendering if initializing Vulkan fails. This is to allow tests to catch regressions in Vulkan.

  // '--disable-vulkan-for-tests',
  //	No description

  // '--disable-vulkan-surface',
  //	Disables VK_KHR_surface extension. Instead of using swapchain, bitblt will be used for present render result on screen.

  // '--disable-wayland-ime',
  //	Disable wayland input method editor.

  // '--disable-web-security',
  //	Don't enforce the same-origin policy; meant for website testing only. This switch has no effect unless --user-data-dir (as defined by the content embedder) is also present.

  // '--disable-webgl',
  //	Disable all versions of WebGL.

  // '--disable-webgl-image-chromium',
  //	Disables WebGL rendering into a scanout buffer for overlay support.

  // '--disable-webgl2',
  //	Disable WebGL2.

  // '--disable-webrtc-encryption',
  //	Disables encryption of RTP Media for WebRTC. When Chrome embeds Content, it ignores this switch on its stable and beta channels.

  // '--disable-webrtc-hw-decoding',
  //	Disables HW decode acceleration for WebRTC.

  // '--disable-webrtc-hw-encoding',
  //	Disables HW encode acceleration for WebRTC.

  // '--disable-windows10-custom-titlebar',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Disables custom-drawing the window titlebar on Windows 10.

  // '--disable-yuv-image-decoding',
  //	Disable YUV image decoding for those formats and cases where it's supported. Has no effect unless GPU rasterization is enabled.

  // '--disable-zero-browsers-open-for-tests',
  //	Some tests seem to require the application to close when the last browser window is closed. Thus, we need a switch to force this behavior for ChromeOS Aura, disable "zero window mode". TODO(pkotwicz): Investigate if this bug can be removed. (http://crbug.com/119175)

  // '--disable-zero-copy',
  //	Disable rasterizer that writes directly to GPU memory associated with tiles.

  // '--disable-zero-copy-dxgi-video',
  //	Disable the video decoder from drawing directly to a texture.

  // '--disabled',
  //	No description

  // '--disallow-non-exact-resource-reuse',
  //	Disable re-use of non-exact resources to fulfill ResourcePool requests. Intended only for use in layout or pixel tests to reduce noise.

  // '--disallow-policy-block-dev-mode',
  //	Disallow blocking developer mode through enterprise device policy: - Fail enterprise enrollment if enrolling would block dev mode. - Don't apply new device policy if it would block dev mode. This is only usable on test builds.

  // '--discoverability',
  //	No description

  // '--disk-cache-dir',
  //	Use a specific disk cache location, rather than one derived from the UserDatadir.

  // '--disk-cache-size',
  //	Forces the maximum disk space to be used by the disk cache, in bytes.

  // '--display',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Which X11 display to connect to. Emulates the GTK+ "--display=" command line argument. In use only with Ozone/X11.

  // '--dmg-device',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	When switches::kProcessType is switches::kRelauncherProcess, if this switch is also present, the relauncher process will unmount and eject a mounted disk image and move its disk image file to the trash. The argument's value must be a BSD device name of the form "diskN" or "diskNsM".

  // '--document-user-activation-required',
  //	Autoplay policy that requires a document user activation.

  // '--dom-automation',
  //	Specifies if the |DOMAutomationController| needs to be bound in the renderer. This binding happens on per-frame basis and hence can potentially be a performance bottleneck. One should only enable it when automating dom based tests.

  // '--double-buffer-compositing',
  //	Sets the number of max pending frames in the GL buffer queue to 1.

  // '--draw-view-bounds-rects',
  //	Draws a semitransparent rect to indicate the bounds of each view.

  // '--dump-blink-runtime-call-stats',
  //	Logs Runtime Call Stats. --single-process also needs to be used along with this for the stats to be logged.

  // '--dump-browser-histograms',
  //	Requests that a running browser process dump its collected histograms to a given file. The file is overwritten if it exists.

  // '--dump-dom',
  //	Instructs headless_shell to print document.body.innerHTML to stdout.

  // '--dump-raw-logs',
  //	Dump the raw logs to a file with the same base name as the executable. The dumped file is a raw protobuf and has a "pb" extension. WARNING: this switch is used by internal test systems. Be careful when making changes.

  // '--dumpstate-path',
  //	Switch to dumpstate binary path.

  // '--durable-client-hints-cache',
  //	Enables the Accept-CH cache for client hints to be durable past browser restarts.

  // '--edge-touch-filtering',
  // (The constant BUILDFLAG(IS_OZONE) must be defined.)
  //	Tells Chrome to do edge touch filtering. Useful for convertible tablet.

  // '--egl',
  //	No description

  // '--elevate',
  //	No description

  // '--elevated',
  //	Identify that the process is already supposed to be elevated, so that we don't try again.

  // '--embedded-extension-options',
  //	Enables extension options to be embedded in chrome://extensions rather than a new tab.

  // '--enable',
  //	No description

  // '--enable-accelerated-2d-canvas',
  //	Enable accelerated 2D canvas.

  // '--enable-accessibility-tab-switcher',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Enable the accessibility tab switcher.

  // '--enable-adaptive-selection-handle-orientation',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Enable inverting of selection handles so that they are not clipped by the viewport boundaries.

  // '--enable-aggressive-domstorage-flushing',
  //	Enable the aggressive flushing of DOM Storage to minimize data loss.

  // '--enable-angle-features',
  //	ANGLE features are defined per-backend in third_party/angle/include/platform Enables specified comma separated ANGLE features if found.

  // '--enable-arc',
  //	DEPRECATED. Please use --arc-availability=officially-supported. Enables starting the ARC instance upon session start.

  // '--enable-arcvm',
  //	Enables ARCVM.

  // '--enable-arcvm-rt-vcpu',
  //	Enables ARCVM realtime VCPU feature.

  // '--enable-audio-debug-recordings-from-extension',
  //	If the WebRTC logging private API is active, enables audio debug recordings.

  // '--enable-auto-reload',
  //	Enable auto-reload of error pages.

  // '--enable-automation',
  //	Enable indication that browser is controlled by automation.

  // '--enable-background-thread-pool',
  //	Enable the use of background thread priorities for background tasks in the ThreadPool even on systems where it is disabled by default, e.g. due to concerns about priority inversions.

  // '--enable-background-tracing',
  //	Enables background and upload trace to trace-upload-url. Trigger rules are pass as an argument.

  // '--enable-begin-frame-control',
  //	Whether or not begin frames should be issued over DevToolsProtocol (experimental).

  // '--enable-benchmarking',
  //	TODO(asvitkine): Consider removing or renaming this functionality. Enables the benchmarking extensions.

  // '--enable-ble-advertising-in-apps',
  //	Enable BLE Advertisiing in apps.

  // '--enable-blink-features',
  //	Enable one or more Blink runtime-enabled features. Use names from runtime_enabled_features.json5, separated by commas. Applied before kDisableBlinkFeatures, and after other flags that change these features.

  // '--enable-blink-test-features',
  //	Enables blink runtime enabled features with status:"test" or status:"experimental", which are enabled when running web tests.

  // '--enable-bluetooth-spp-in-serial-api',
  //	Enable serial communication for SPP devices.

  // '--enable-bookmark-undo',
  //	Enables the multi-level undo system for bookmarks.

  // '--enable-caret-browsing',
  //	Enable native caret browsing, in which a moveable cursor is placed on a web page, allowing a user to select and navigate through non-editable text using just a keyboard. See https://crbug.com/977390 for links to i2i.

  // '--enable-cast-receiver',
  //	Enables the Cast Receiver.

  // '--enable-cast-streaming-receiver',
  //	No description

  // '--enable-cfv2',
  //	No description

  // '--enable-chrome-browser-cloud-management',
  // (The constant !BUILDFLAG(IS_CHROMEOS_ASH) must not be defined.)
  //	Enables the Chrome Browser Cloud Management integration on Chromium builds. CBCM is always enabled in branded builds.

  // '--enable-cloud-print-proxy',
  //	This applies only when the process type is "service". Enables the Cloud Print Proxy component within the service process.

  // '--enable-consumer-kiosk',
  //	Enables consumer kiosk mode for Chrome OS.

  // '--enable-content-directories',
  //	No description

  // '--enable-crash-reporter',
  //	Enable crash reporter for headless.

  // '--enable-crash-reporter-for-testing',
  // (The constant BUILDFLAG(IS_POSIX) must be defined.)
  //	Used for turning on Breakpad crash reporting in a debug environment where crash reporting is typically compiled but disabled.

  // '--enable-critical-persisted-tab-data',
  //	Enables CriticalPersistedTabData - redesign/replacement for TabState

  // '--enable-cros-action-recorder',
  //	If set, the CrOSActionRecorder will be enabled which will record some user actions on device.

  // '--enable-crx-hash-check',
  //	Enable package hash check: the .crx file sha256 hash sum should be equal to the one received from update manifest.

  // '--enable-dawn-backend-validation',
  //	Enable validation layers in Dawn backends.

  // '--enable-dawn-features',
  //	Set the Dawn features(toggles) enabled on the creation of Dawn devices.

  // '--enable-dim-shelf',
  //	Enables Shelf Dimming for ChromeOS.

  // '--enable-direct-composition-video-overlays',
  //	Enables using DirectComposition video overlays, even if hardware overlays aren't supported.

  // '--enable-discover-feed',
  //	Enabled the NTP Discover feed.

  // '--enable-distillability-service',
  //	No description

  // '--enable-dom-distiller',
  //	No description

  // '--enable-domain-reliability',
  //	Enables Domain Reliability Monitoring.

  // '--enable-early-process-singleton',
  //	Enables the early process singleton feature. The process singleton will be held for the whole lifetime of BrowserImpl (see https://crbug.com/1340599).

  // '--enable-encryption-selection',
  // (The constants !BUILDFLAG(IS_CHROMEOS_ASH) and !BUILDFLAG(IS_MAC) must not be defined, and the constant BUILDFLAG(IS_POSIX) must be defined.)
  //	Enables the feature of allowing the user to disable the backend via a setting.

  // '--enable-exclusive-audio',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Use exclusive mode audio streaming for Windows Vista and higher. Leads to lower latencies for audio streams which uses the AudioParameters::AUDIO_PCM_LOW_LATENCY audio path. See http://msdn.microsoft.com/en-us/library/windows/desktop/dd370844.aspx for details.

  // '--enable-experimental-accessibility-autoclick',
  //	Shows additional automatic click features that haven't launched yet.

  // '--enable-experimental-accessibility-labels-debugging',
  //	Enables support for visually debugging the accessibility labels feature, which provides images descriptions for screen reader users.

  // '--enable-experimental-accessibility-language-detection',
  //	Enables language detection on in-page text content which is then exposed to assistive technology such as screen readers.

  // '--enable-experimental-accessibility-language-detection-dynamic',
  //	Enables language detection for dynamic content which is then exposed to assistive technology such as screen readers.

  // '--enable-experimental-accessibility-switch-access-text',
  //	Enables in progress Switch Access features for text input.

  // '--enable-experimental-cookie-features',
  //	Flag that turns on a group of experimental/newly added cookie-related features together, as a convenience for e.g. testing, to avoid having to set multiple switches individually which may be error-prone (not to mention tedious). There is not a corresponding switch to disable all these features, because that is discouraged, and for testing purposes you'd need to switch them off individually to identify the problematic feature anyway. At present this turns on: net::features::kSameSiteDefaultChecksMethodRigorously net::features::kSchemefulSameSite net::features::kCookieSameSiteConsidersRedirectChain net::features::kPartitionedCookies

  // '--enable-experimental-extension-apis',
  //	Enables extension APIs that are in development.

  // '--enable-experimental-ui-automation',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Enables UI Automation platform API in addition to the IAccessible API.

  // '--enable-experimental-web-platform-features',
  //	Enables Web Platform features that are in development.

  // '--enable-experimental-webassembly-features',
  //	Enables experimental WebAssembly features.

  // '--enable-extension-activity-log-testing',
  //	No description

  // '--enable-extension-activity-logging',
  //	Enables logging for extension activity.

  // '--enable-extension-assets-sharing',
  //	Enables sharing assets for installed default apps.

  // '--enable-fake-no-alloc-direct-call-for-testing',
  //	Forces the V8/blink bindings to call all API entry points that use the [NoAllocDirectCall] extended IDL attribute as if V8 were using the fast call code path. Using this flag will not make API calls use the true fast path, it will probably even make things a bit slower. Its purpose is to guarantee test coverage for the blink side of V8 Fast API calls, independently of whether or not V8 actually activates the fast path, which depends on heuristics. This flag is effective only when DCHECKs are enabled.

  // '--enable-features',
  //	Comma-separated list of feature names to enable. See also kDisableFeatures.

  // '--enable-field-trial-config',
  //	Enable field trial tests configured in fieldtrial_testing_config.json. If the "disable_fieldtrial_testing_config" GN flag is set to true, then this switch is a no-op. Otherwise, for non-Chrome branded builds, the testing config is already applied by default, unless the "--disable-field-trial-config", "--force-fieldtrials", and/or "--variations-server-url" switches are passed. It is however possible to apply the testing config as well as specify additional field trials (using "--force-fieldtrials") by using this switch. For Chrome-branded builds, the testing config is not enabled by default, so this switch is required to enable it.

  // '--enable-finch-seed-delta-compression',
  //	Enables delta-compression when fetching a new seed via the "first run" code path on Android.

  // '--enable-font-antialiasing',
  //	Enable font antialiasing for pixel tests.

  // '--enable-gamepad-button-axis-events',
  //	Enables gamepadbuttondown, gamepadbuttonup, gamepadbuttonchange, gamepadaxismove non-standard gamepad events.

  // '--enable-gpu-benchmarking',
  //	Enables the GPU benchmarking extension

  // '--enable-gpu-blocked-time',
  //	Enables measures of how long GPU Main Thread was blocked between SwapBuffers

  // '--enable-gpu-client-logging',
  //	Enable GPU client logging.

  // '--enable-gpu-client-tracing',
  //	Enables TRACE for GL calls in the renderer.

  // '--enable-gpu-command-logging',
  //	Turn on Logging GPU commands.

  // '--enable-gpu-debugging',
  //	Turn on Calling GL Error after every command.

  // '--enable-gpu-driver-debug-logging',
  //	Enable logging of GPU driver debug messages.

  // '--enable-gpu-memory-buffer-compositor-resources',
  //	Specify that all compositor resources should be backed by GPU memory buffers.

  // '--enable-gpu-memory-buffer-video-frames',
  //	Enable GpuMemoryBuffer backed VideoFrames.

  // '--enable-gpu-rasterization',
  //	Allow heuristics to determine when a layer tile should be drawn with the Skia GPU backend. Only valid with GPU accelerated compositing.

  // '--enable-gpu-service-logging',
  //	Turns on GPU logging (debug build only).

  // '--enable-gpu-service-tracing',
  //	Turns on calling TRACE for every GL call.

  // '--enable-hangout-services-extension-for-testing',
  //	Force enabling HangoutServicesExtension.

  // '--enable-hardware-overlays',
  //	Enable compositing individual elements via hardware overlays when permitted by device. Setting the flag to "single-fullscreen" will try to promote a single fullscreen overlay and use it as main framebuffer where possible.

  // '--enable-houdini',
  //	Enables the use of 32-bit Houdini library for ARM binary translation.

  // '--enable-houdini-dlc',
  //	Enables the use of Houdini DLC library for ARM binary translation. This is independent of choosing between the 32-bit vs 64-bit Houdini library. Houdini DLC library will be downloaded and installed at run-time instead of at build time.

  // '--enable-houdini64',
  //	Enables the use of 64-bit Houdini library for ARM binary translation.

  // '--enable-idle-tracing',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Adds additional thread idle time information into the trace event output.

  // '--enable-input',
  //	Enables input event handling by the window manager.

  // '--enable-ios-handoff-to-other-devices',
  //	Enables support for Handoff from Chrome on iOS to the default browser of other Apple devices.

  // '--enable-lcd-text',
  //	Enables LCD text.

  // '--enable-leak-detection',
  //	Enables the leak detection of loading webpages. This allows us to check whether or not reloading a webpage releases web-related objects correctly.

  // '--enable-live-caption-pref-for-testing',
  //	Sets the default value for the kLiveCaptionEnabled preference to true.

  // '--enable-local-file-accesses',
  //	Enable file accesses. It should not be enabled for most Cast devices.

  // '--enable-logging',
  //	Force logging to be enabled. Logging is disabled by default in release builds.

  // '--enable-longpress-drag-selection',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Enable drag manipulation of longpress-triggered text selections.

  // '--enable-low-end-device-mode',
  //	Force low-end device mode when set.

  // '--enable-low-res-tiling',
  //	When using CPU rasterizing generate low resolution tiling. Low res tiles may be displayed during fast scrolls especially on slower devices.

  // '--enable-magnifier-debug-draw-rect',
  //	Enables debug feature for drawing rectangle around magnified region, without zooming in.

  // '--enable-main-frame-before-activation',
  //	Enables sending the next BeginMainFrame before the previous commit activates.

  // '--enable-nacl',
  //	Runs the Native Client inside the renderer process and enables GPU plugin (internally adds lEnableGpuPlugin to the command line).

  // '--enable-nacl-debug',
  //	Enables debugging via RSP over a socket.

  // '--enable-native-gpu-memory-buffers',
  //	Enable native CPU-mappable GPU memory buffer support on Linux.

  // '--enable-natural-scroll-default',
  //	Enables natural scroll by default.

  // '--enable-ndk-translation',
  //	Enables the use of 32-bit NDK translation library for ARM binary translation.

  // '--enable-ndk-translation64',
  //	Enables the use of 64-bit NDK translation library for ARM binary translation.

  // '--enable-net-benchmarking',
  //	Enables the network-related benchmarking extensions.

  // '--enable-network-information-downlink-max',
  //	Enables the type, downlinkMax attributes of the NetInfo API. Also, enables triggering of change attribute of the NetInfo API when there is a change in the connection type.

  // '--enable-new-app-menu-icon',
  // (The constants BUILDFLAG(IS_CHROMEOS), BUILDFLAG(IS_LINUX), BUILDFLAG(IS_MAC) and \ must be defined.)
  //	No description

  // '--enable-ntp-search-engine-country-detection',
  //	Enables using the default search engine country to show country specific popular sites on the NTP.

  // '--enable-oobe-chromevox-hint-timer-for-dev-mode',
  //	Enables the ChromeVox hint in OOBE for dev mode. This flag is used to override the default dev mode behavior of disabling the feature. If both kEnableOOBEChromeVoxHintForDevMode and kDisableOOBEChromeVoxHintTimerForTesting are present, the ChromeVox hint will be disabled, since the latter flag takes precedence over the former.

  // '--enable-oobe-test-api',
  //	Enables OOBE testing API for tast tests.

  // '--enable-optimization-guide-debug-logs',
  //	No description

  // '--enable-page-content-annotations-logging',
  //	No description

  // '--enable-pepper-testing',
  //	Enables the testing interface for PPAPI.

  // '--enable-pixel-output-in-tests',
  //	Forces tests to produce pixel output when they normally wouldn't.

  // '--enable-plugin-placeholder-testing',
  //	Enables testing features of the Plugin Placeholder. For internal use only.

  // '--enable-potentially-annoying-security-features',
  //	Enables a number of potentially annoying security features (strict mixed content mode, powerful feature restrictions, etc.)

  // '--enable-precise-memory-info',
  //	Make the values returned to window.performance.memory more granular and more up to date in shared worker. Without this flag, the memory information is still available, but it is bucketized and updated less frequently. This flag also applys to workers.

  // '--enable-prefer-compositing-to-lcd-text',
  //	Enable the creation of compositing layers when it would prevent LCD text.

  // '--enable-privacy-sandbox-ads-apis',
  //	Enables Privacy Sandbox APIs: Attribution Reporting, Fledge, Topics, Fenced Frames, Shared Storage, Private Aggregation, and their associated features.

  // '--enable-profile-shortcut-manager',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Force-enables the profile shortcut manager. This is needed for tests since they use a custom-user-data-dir which disables this.

  // '--enable-protected-video-buffers',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	Enables protected buffers for encrypted video streams.

  // '--enable-raster-side-dark-mode-for-images',
  //	Enables raster side dark mode for images.

  // '--enable-reached-code-profiler',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Enables the reached code profiler that samples all threads in all processes to determine which functions are almost never executed.

  // '--enable-requisition-edits',
  //	Enables configuring the OEM Device Requisition in the OOBE.

  // '--enable-resources-file-sharing',
  // (The constant BUILDFLAG(IS_CHROMEOS) must be defined.)
  //	Enable resources file sharing with ash-chrome. This flag is enabled when feature::kLacrosResourcesFileSharing is set and ash-side operation is successfully done.

  // '--enable-rgba-4444-textures',
  //	Enables RGBA_4444 textures.

  // '--enable-running-as-system-compositor',
  //	Enable running as system compositor when set. TODO(https://crbug.com/1403348): Consider removing the flag.

  // '--enable-sandbox-logging',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Cause the OS X sandbox write to syslog every time an access to a resource is denied by the sandbox.

  // '--enable-scaling-clipped-images',
  //	Allows scaling clipped images in GpuImageDecodeCache. Note that this may cause color-bleeding. TODO(crbug.com/1157548): Remove this workaround flag once the underlying cache problems are solved.

  // '--enable-service-binary-launcher',
  //	If true the ServiceProcessLauncher is used to launch services. This allows for service binaries to be loaded rather than using the utility process. This is only useful for tests.

  // '--enable-service-manager-tracing',
  //	Enable the tracing service.

  // '--enable-sgi-video-sync',
  //	Enable use of the SGI_video_sync extension, which can have driver/sandbox/window manager compatibility issues.

  // '--enable-skia-benchmarking',
  //	Enables the Skia benchmarking extension.

  // '--enable-smooth-scrolling',
  //	On platforms that support it, enables smooth scroll animation.

  // '--enable-spatial-navigation',
  //	Enable spatial navigation

  // '--enable-speech-dispatcher',
  // (The constants BUILDFLAG(IS_CHROMEOS_LACROS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	TODO(crbug.com/1052397): Revisit the macro expression once build flag switch of lacros-chrome is complete. Allows sending text-to-speech requests to speech-dispatcher, a common Linux speech service. Because it's buggy, the user must explicitly enable it so that visiting a random webpage can't cause instability.

  // '--enable-spotlight-actions',
  //	Enables the Spotlight actions.

  // '--enable-stats-collection-bindings',
  //	Specifies if the |StatsCollectionController| needs to be bound in the renderer. This binding happens on per-frame basis and hence can potentially be a performance bottleneck. One should only enable it when running a test that needs to access the provided statistics.

  // '--enable-strict-mixed-content-checking',
  //	Blocks all insecure requests from secure contexts, and prevents the user from overriding that decision.

  // '--enable-strict-powerful-feature-restrictions',
  //	Blocks insecure usage of a number of powerful features (device orientation, for example) that we haven't yet deprecated for the web at large.

  // '--enable-swap-buffers-with-bounds',
  //	Enables SwapBuffersWithBounds if it is supported.

  // '--enable-tablet-form-factor',
  //	Enables tablet form factor.

  // '--enable-third-party-keyboard-workaround',
  //	Enables the 3rd party keyboard omnibox workaround.

  // '--enable-threaded-compositing',
  //	Enabled threaded compositing for web tests.

  // '--enable-threaded-texture-mailboxes',
  //	Simulates shared textures when share groups are not available. Not available everywhere.

  // '--enable-top-drag-gesture',
  //	Whether to enable detection and dispatch of a 'drag from the top' gesture.

  // '--enable-touch-calibration-setting',
  //	Enables the touch calibration option in MD settings UI for valid touch displays.

  // '--enable-touch-drag-drop',
  //	Enables touch event based drag and drop.

  // '--enable-touchpad-three-finger-click',
  //	Enables touchpad three-finger-click as middle button.

  // '--enable-touchview',
  //	If the flag is present, it indicates 1) the device has accelerometer and 2) the device is a convertible device or a tablet device (thus is capable of entering tablet mode). If this flag is not set, then the device is not capable of entering tablet mode. For example, Samus has accelerometer, but is not a covertible or tablet, thus doesn't have this flag set, thus can't enter tablet mode.

  // '--enable-trace-app-source',
  //	Pass launch source to platform apps.

  // '--enable-tracing',
  //	No description

  // '--enable-tracing-format',
  //	No description

  // '--enable-tracing-fraction',
  //	When specified along with a value in the range (0,1] will --enable-tracing for (roughly) that percentage of tests being run. This is done in a stable manner such that the same tests are chosen each run, and under the assumption that tests hash equally across the range of possible values. The flag will enable all tracing categories for those tests, and none for the rest. This flag could be used with other tracing switches like --enable-tracing-format, but any other switches that will enable tracing will turn tracing on for all tests.

  // '--enable-tracing-output',
  //	Similar to the flag above, with the following differences: - A more detailed basename will be generated. - If the value is empty or ends with path separator, the provided directory will be used (with empty standing for current directory) and a detailed basename file will be generated. It is ignored if --trace-startup-file is specified.

  // '--enable-ui-devtools',
  //	Enables DevTools server for UI (mus, ash, etc). Value should be the port the server is started on. Default port is 9223.

  // '--enable-unsafe-webgpu',
  //	No description

  // '--enable-upgrade-signin-promo',
  //	Enables the upgrade sign-in promo.

  // '--enable-user-metrics',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Enable user metrics from within the installer.

  // '--enable-usermedia-screen-capturing',
  //	Enable screen capturing support for MediaStream API.

  // '--enable-utempter',
  // (The constant BUILDFLAG(IS_LINUX) must be defined.)
  //	No description

  // '--enable-viewport',
  //	Enables the use of the @viewport CSS rule, which allows pages to control aspects of their own layout. This also turns on touch-screen pinch gestures.

  // '--enable-virtual-keyboard',
  //	No description

  // '--enable-vtune-support',
  //	Enable the Vtune profiler support.

  // '--enable-vulkan-protected-memory',
  //	Enables using protected memory for vulkan resources.

  // '--enable-wayland-ime',
  //	Try to enable wayland input method editor.

  // '--enable-wayland-server',
  //	Enable the wayland server.

  // '--enable-web-auth-deprecated-mojo-testing-api',
  //	Enable the WebAuthn Mojo Testing API. This is a way to interact with the virtual authenticator environment through a mojo interface and is supported only to run web-platform-tests on content shell. Removal of this deprecated API is blocked on crbug.com/937369.

  // '--enable-webgl-developer-extensions',
  //	Enables WebGL developer extensions which are not generally exposed to the web platform.

  // '--enable-webgl-draft-extensions',
  //	Enables WebGL extensions not yet approved by the community.

  // '--enable-webgl-image-chromium',
  //	Enables WebGL rendering into a scanout buffer for overlay support.

  // '--enable-webgpu-developer-features',
  //	Enables WebGPU developer features which are not generally exposed to the web platform.

  // '--enable-webrtc-srtp-aes-gcm',
  //	Enables negotiation of GCM cipher suites from RFC 7714 for SRTP in WebRTC. See http://tools.ietf.org/html/rfc7714 for further information.

  // '--enable-webrtc-srtp-encrypted-headers',
  //	Enables negotiation of encrypted header extensions from RFC 6904 for SRTP in WebRTC. See http://tools.ietf.org/html/rfc6904 for further information. TODO(http://crbug.com/954201): Remove this.

  // '--enable-widevine',
  //	No description

  // '--enable-win7-webrtc-hw-h264-decoding',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Enables H264 HW decode acceleration for WebRtc on Win 7.

  // '--enable-zero-copy',
  //	Enable rasterizer that writes directly to GPU memory associated with tiles.

  // '--enabled',
  //	No description

  // '--encode-binary',
  //	Encode binary web test results (images, audio) using base64.

  // '--encrypted-reporting-url',
  //	Specifies the URL at which to upload encrypted reports.

  // '--enforce',
  //	No description

  // '--enforce-gl-minimums',
  //	Enforce GL minimums.

  // '--enforce-webrtc-ip-permission-check',
  //	Enforce IP Permission check. TODO(guoweis): Remove this once the feature is not under finch and becomes the default.

  // '--enforce_strict',
  //	No description

  // '--ensure-forced-color-profile',
  //	Crash the browser at startup if the display's color profile does not match the forced color profile. This is necessary on Mac because Chrome's pixel output is always subject to the color conversion performed by the operating system. On all other platforms, this is a no-op.

  // '--enterprise-disable-arc',
  //	Disables ARC for managed accounts.

  // '--enterprise-enable-forced-re-enrollment',
  //	Whether to enable forced enterprise re-enrollment.

  // '--enterprise-enable-initial-enrollment',
  //	Whether to enable initial enterprise enrollment.

  // '--enterprise-enable-zero-touch-enrollment',
  //	Enables the zero-touch enterprise enrollment flow.

  // '--enterprise-enrollment-initial-modulus',
  //	Power of the power-of-2 initial modulus that will be used by the auto-enrollment client. E.g. "4" means the modulus will be 2^4 = 16.

  // '--enterprise-enrollment-modulus-limit',
  //	Power of the power-of-2 maximum modulus that will be used by the auto-enrollment client.

  // '--evaluate-type',
  //	No description

  // '--evaluate_capability',
  //	No description

  // '--explicitly-allowed-ports',
  //	Allows overriding the list of restricted ports by passing a comma-separated list of port numbers.

  // '--export-uma-logs-to-file',
  //	Enables the observing of all UMA logs created during the session and automatically exports them to the passed file path on shutdown (the file is created if it does not already exist). This also enables viewing all UMA logs in the chrome://metrics-internals debug page. The format of the exported file is outlined in MetricsServiceObserver::ExportLogsAsJson(). Example usage: --export-uma-logs-to-file=/tmp/logs.json

  // '--expose-internals-for-testing',
  //	Exposes the window.internals object to JavaScript for interactive development and debugging of web tests that rely on it.

  // '--extension-content-verification',
  //	Name of the command line flag to force content verification to be on in one of various modes.

  // '--extension-install-event-chrome-log-for-tests',
  //	Write extension install events to chrome log for integration test.

  // '--extension-process',
  //	Marks a renderer as extension process.

  // '--extension-updater-test-request',
  //	No description

  // '--extensions-install-verification',
  //	Turns on extension install verification if it would not otherwise have been turned on.

  // '--extensions-not-webstore',
  //	Specifies a comma-separated list of extension ids that should be forced to be treated as not from the webstore when doing install verification.

  // '--extensions-on-chrome-urls',
  //	Enables extensions running scripts on chrome:// URLs. Extensions still need to explicitly request access to chrome:// URLs in the manifest.

  // '--external-metrics-collection-interval',
  //	Interval in seconds between Chrome reading external metrics from /var/lib/metrics/uma-events.

  // '--extra-search-query-params',
  //	Additional query params to insert in the search and instant URLs. Useful for testing.

  // '--extra-web-apps-dir',
  //	Name of a subdirectory of the main external web apps directory which additional web apps configs should be loaded from. Used to load device-specific web apps.

  // '--fail-audio-stream-creation',
  //	Causes the AudioManager to fail creating audio streams. Used when testing various failure cases.

  // '--fake-arc-recommended-apps-for-testing',
  //	Specifies number of recommended (fake) ARC apps during user onboarding. App descriptions are generated locally instead of being fetched from server. Limited to ChromeOS-on-linux and test images only.

  // '--fake-drivefs-launcher-chroot-path',
  //	An absolute path to the chroot hosting the DriveFS to use. This is only used when running on Linux, i.e. when IsRunningOnChromeOS() returns false.

  // '--fake-drivefs-launcher-socket-path',
  //	A relative path to socket to communicat with the fake DriveFS launcher within the chroot specified by kFakeDriveFsLauncherChrootPath. This is only used when running on Linux, i.e. when IsRunningOnChromeOS() returns false.

  // '--fake-oobe-configuration-file',
  //	Path to a OOBE configuration JSON file (used by FakeOobeConfigurationClient).

  // '--fake-variations-channel',
  //	Fakes the channel of the browser for purposes of Variations filtering. This is to be used for testing only. Possible values are "stable", "beta", "dev" and "canary". This works for official builds as well.

  // '--false',
  //	Value indicating whether flag from command line switch is false.

  // '--feedback-server',
  //	Alternative feedback server to use when submitting user feedback

  // '--field-trial-handle',
  //	Handle to the shared memory segment containing field trial state that is to be shared between processes. The argument to this switch is made of 4 segments, separated by commas: 1. The platform-specific handle id for the shared memory as a string. 2. The high 64 bits of the shared memory block GUID. 3. The low 64 bits of the shared memory block GUID. 4. The size of the shared memory segment as a string.

  // '--file-system-sync-access-handle-async-interface-enabled',
  //	Controls whether async interface for FileSystemSyncAccessHandle is force-enabled.

  // '--file-url-path-alias',
  //	Define an alias root directory which is replaced with the replacement string in file URLs. The format is "/alias=/replacement", which would turn file:///alias/some/path.html into file:///replacement/some/path.html.

  // '--file_chooser',
  //	No description

  // '--finch-seed-expiration-age',
  //	The length of time in seconds that an app's copy of the variations seed should be considered fresh. If an app's seed is older than this, a new seed will be requested from WebView's IVariationsSeedServer.

  // '--finch-seed-ignore-pending-download',
  //	Forces WebView's service to always schedule a new variations seed download job, even if one is already pending.

  // '--finch-seed-min-download-period',
  //	The minimum amount of time in seconds that WebView's service will wait between two variations seed downloads from the variations server.

  // '--finch-seed-min-update-period',
  //	The minimum amount of time in seconds that the embedded WebView implementation will wait between two requests to WebView's service for a new variations seed.

  // '--finch-seed-no-charging-requirement',
  //	Forces WebView's service to always schedule a new variations seed download job, even if the device is not charging. Note this switch may be necessary for testing on Android emulators as these are not always considered to be charging.

  // '--fingerprint-sensor-location',
  //	Fingerprint sensor location indicates the physical sensor's location. The value is a string with possible values: "power-button-top-left", "keyboard-bottom-left", keyboard-bottom-right", "keyboard-top-right".

  // '--first-exec-after-boot',
  //	Passed to Chrome the first time that it's run after the system boots. Not passed on restart after sign out.

  // '--flag-switches-begin',
  //	These two flags are added around the switches about:flags adds to the command line. This is useful to see which switches were added by about:flags on about:version. They don't have any effect.

  // '--flag-switches-end',
  //	No description

  // '--font-cache-shared-handle',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	DirectWrite FontCache is shared by browser to renderers using shared memory. This switch allows us to pass the shared memory handle to the renderer.

  // '--font-render-hinting',
  //	Sets font render hinting when running headless, affects Skia rendering and whether glyph subpixel positioning is enabled. Possible values: none|slight|medium|full|max. Default: full.

  // '--force-app-mode',
  //	Forces application mode. This hides certain system UI elements and forces the app to be installed if it hasn't been already.

  // '--force-assistant-onboarding',
  //	No description

  // '--force-browser-crash-on-gpu-crash',
  //	Crash Chrome if GPU process crashes. This is to force a test to fail when GPU process crashes unexpectedly.

  // '--force-browser-data-migration-for-testing',
  //	Force skip or force migration. Should only be used for testing.

  // '--force-caption-style',
  //	Forces the caption style for WebVTT captions.

  // '--force-color-profile',
  //	Force all monitors to be treated as though they have the specified color profile. Accepted values are "srgb" and "generic-rgb" (currently used by Mac layout tests) and "color-spin-gamma24" (used by layout tests).

  // '--force-cryptohome-recovery-for-testing',
  //	Forces fetching tokens for Cryptohome Recovery.

  // '--force-dark-mode',
  //	Forces dark mode in UI for platforms that support it.

  // '--force-dev-mode-highlighting',
  //	Whether to force developer mode extensions highlighting.

  // '--force-device-ownership',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces the device to report being owned by an enterprise. This mimics the presence of an app signaling device ownerhsip.

  // '--force-device-scale-factor',
  //	Overrides the device scale factor for the browser UI and the contents.

  // '--force-devtools-available',
  //	Forces developer tools availability, no matter what values the enterprise policies DeveloperToolsDisabled and DeveloperToolsAvailability are set to.

  // '--force-disable-signin-fre',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces the FRE to go through the legacy sync consent flow for testing.

  // '--force-disable-variation-ids',
  //	Forces to remove Chrome Variation Ids from being sent in X-Client-Data header, specified as a 64-bit encoded list of numeric experiment ids. Ids prefixed with the character "t" will be treated as Trigger Variation Ids.

  // '--force-effective-connection-type',
  //	Forces Network Quality Estimator (NQE) to return a specific effective connection type.

  // '--force-enable-metrics-reporting',
  //	Forces metrics reporting to be enabled. Should not be used for tests as it will send data to servers.

  // '--force-enable-night-mode',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces the night mode to be enabled.

  // '--force-enable-pepper-video-decoder-dev-api',
  //	Force-enables the PPB_VideoDecoder(Dev) API, overriding the value from any ongoing Finch experiment.

  // '--force-enable-signin-fre',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces signin FRE flow.

  // '--force-enable-stylus-tools',
  //	Enables the stylus tools next to the status area.

  // '--force-fieldtrial-params',
  //	This option can be used to force parameters of field trials when testing changes locally. The argument is a param list of (key, value) pairs prefixed by an associated (trial, group) pair. You specify the param list for multiple (trial, group) pairs with a comma separator. Example: "Trial1.Group1:k1/v1/k2/v2,Trial2.Group2:k3/v3/k4/v4" Trial names, groups names, parameter names, and value should all be URL escaped for all non-alphanumeric characters.

  // '--force-fieldtrials',
  //	This option can be used to force field trials when testing changes locally. The argument is a list of name and value pairs, separated by slashes. If a trial name is prefixed with an asterisk, that trial will start activated. For example, the following argument defines two trials, with the second one activated: "GoogleNow/Enable/*MaterialDesignNTP/Default/" This option can also be used by the browser process to send the list of trials to a non-browser process, using the same format. See FieldTrialList::CreateTrialsFromString() in field_trial.h for details.

  // '--force-first-run',
  //	Displays the First Run experience when the browser is started, regardless of whether or not it's actually the First Run (this overrides kNoFirstRun).

  // '--force-first-run-ui',
  //	Forces first-run UI to be shown for every login.

  // '--force-gpu-mem-available-mb',
  //	Sets the total amount of memory that may be allocated for GPU resources

  // '--force-gpu-mem-discardable-limit-mb',
  //	Sets the maximum GPU memory to use for discardable caches.

  // '--force-happiness-tracking-system',
  //	Force enables the Happiness Tracking System for the device. This ignores user profile check and time limits and shows the notification every time for any type of user. Should be used only for testing.

  // '--force-headless-for-tests',
  //	No description

  // '--force-hidden-network-migration',
  //	Removes the condition that a network has had to existed for at least two weeks and allows the user to provide the frequency at which the HiddenNetworkHandler class checks for and removes wrongly hidden networks. The frequency should be provided in seconds, should follow the format "--force-hidden-network-migration=#", and should be >= 1.

  // '--force-high-contrast',
  //	Forces high-contrast mode in native UI drawing, regardless of system settings. Note that this has limited effect on Windows: only Aura colors will be switched to high contrast, not other system colors.

  // '--force-hwid-check-result-for-test',
  //	Forces Hardware ID check (happens during OOBE) to fail or succeed. Possible values: "failure" or "success". Should be used only for testing.

  // '--force-launch-browser',
  //	Forces FullRestoreService to launch browser for telemetry tests.

  // '--force-login-manager-in-tests',
  //	Usually in browser tests the usual login manager bringup is skipped so that tests can change how it's brought up. This flag disables that.

  // '--force-logs-upload-failure',
  //	Force a logs upload failure to help test the logs upload retry.

  // '--force-max-texture-size',
  //	Sets the maximum texture size in pixels.

  // '--force-media-resolution-height',
  //	When present overrides the screen resolution used by CanDisplayType API, instead of using the values obtained from avsettings.

  // '--force-media-resolution-width',
  //	No description

  // '--force-online-connection-state-for-indicator',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Prevent the offline indicator from showing.

  // '--force-pnacl-subzero',
  //	Force use of the Subzero as the PNaCl translator instead of LLC.

  // '--force-prefers-reduced-motion',
  //	Forces whether the user desires reduced motion, regardless of system settings.

  // '--force-presentation-receiver-for-testing',
  //	This forces pages to be loaded as presentation receivers. Useful for testing behavior specific to presentation receivers. Spec: https://www.w3.org/TR/presentation-api/#interface-presentationreceiver

  // '--force-protected-video-output-buffers',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	Forces protected memory for all output video buffers generated by FuchsiaVideoDecoder, including unencrypted streams. Ignored unless --enable-protected-video-buffers is also specified.

  // '--force-raster-color-profile',
  //	Force rastering to take place in the specified color profile. Accepted values are the same as for the kForceDisplayColorProfile case above.

  // '--force-recovery-component',
  //	Force the recovery component, when running an unofficial build. This only applies to the cleaner, not the reporter.

  // '--force-renderer-accessibility',
  //	Force renderer accessibility to be on instead of enabling it on demand when a screen reader is detected. The disable-renderer-accessibility switch overrides this if present.

  // '--force-self-delete',
  //	Force self-deletion even on non-official builds.

  // '--force-show-cursor',
  //	Forces the cursor to be shown even if we are mimicking touch events. Note that cursor changes are locked when using this switch.

  // '--force-show-release-track',
  //	Force the "release track" UI to show in the system tray. Simulates the system being on a non-stable release channel with feedback enabled.

  // '--force-show-update-menu-badge',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces the update menu badge to show.

  // '--force-status-area-collapsible',
  //	Forces the status area to allow collapse/expand regardless of the current state.

  // '--force-tablet-mode',
  //	Enables required things for the selected UI mode, regardless of whether the Chromebook is currently in the selected UI mode.

  // '--force-tablet-power-button',
  //	If set, tablet-like power button behavior (i.e. tapping the button turns the screen off) is used even if the device is in laptop mode.

  // '--force-text-direction',
  //	Force the text rendering to a specific direction. Valid values are "ltr" (left-to-right) and "rtl" (right-to-left). Only tested meaningfully with RTL.

  // '--force-ui-direction',
  //	Force the UI to a specific direction. Valid values are "ltr" (left-to-right) and "rtl" (right-to-left).

  // '--force-update-menu-type',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Forces the update menu type to a specific type.

  // '--force-update-remote-url',
  //	Per-product customization of force update UI remote url, also used in testing.

  // '--force-variation-ids',
  //	Forces additional Chrome Variation Ids that will be sent in X-Client-Data header, specified as a 64-bit encoded list of numeric experiment ids. Ids prefixed with the character "t" will be treated as Trigger Variation Ids.

  // '--force-video-overlays',
  //	Force media player using SurfaceView instead of SurfaceTexture on Android.

  // '--force-wave-audio',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Use Windows WaveOut/In audio API even if Core Audio is supported.

  // '--force-webrtc-ip-handling-policy',
  //	Override WebRTC IP handling policy to mimic the behavior when WebRTC IP handling policy is specified in Preferences.

  // '--force-webxr-runtime',
  //	Forcibly enable and select the specified runtime for webxr. Note that this provides an alternative means of enabling a runtime, and will also functionally disable all other runtimes.

  // '--force-whats-new',
  //	Displays the What's New experience when the browser is started if it has not yet been shown for the current milestone (this overrides kNoFirstRun, without showing the First Run experience).

  // '--form-factor',
  //	Specifies the device's form factor. If provided, this flag overrides the value from the LSB release info. Possible values are: "CHROMEBASE", "CHROMEBIT", "CHROMEBOOK", "REFERENCE", "CHROMEBOX"

  // '--frame-throttle-fps',
  //	Sets the throttle fps for compositor frame submission.

  // '--full-memory-crash-report',
  //	Generates full memory crash dump.

  // '--gaia-config',
  //	No description

  // '--gaia-config-contents',
  //	No description

  // '--gaia-url',
  //	No description

  // '--gamepad-polling-interval',
  //	Overrides the gamepad polling interval. Decreasing the interval improves input latency of buttons and axes but may negatively affect performance due to more CPU time spent in the input polling thread.

  // '--gcm-checkin-url',
  //	Sets the checkin service endpoint that will be used for performing Google Cloud Messaging checkins.

  // '--gcm-mcs-endpoint',
  //	Sets the Mobile Connection Server endpoint that will be used for Google Cloud Messaging.

  // '--gcm-registration-url',
  //	Sets the registration endpoint that will be used for creating new Google Cloud Messaging registrations.

  // '--generate-accessibility-test-expectations',
  //	No description

  // '--get-access-token-for-test',
  //	Enable the getAccessToken autotest API which creates access tokens using the internal OAuth client ID.

  // '--gl',
  //	No description

  // '--gl-egl',
  //	No description

  // '--gl-null',
  //	No description

  // '--gl-shader-interm-output',
  //	Include ANGLE's intermediate representation (AST) output in shader compilation info logs.

  // '--gles',
  //	No description

  // '--gles-egl',
  //	No description

  // '--gles-null',
  //	No description

  // '--google-api-key',
  //	No description

  // '--google-apis-url',
  //	No description

  // '--google-base-url',
  //	Specifies an alternate URL to use for speaking to Google. Useful for testing.

  // '--google-doodle-url',
  //	Overrides the URL used to fetch the current Google Doodle. Example: https://www.google.com/async/ddljson Testing? Try: https://www.gstatic.com/chrome/ntp/doodle_test/ddljson_android0.json https://www.gstatic.com/chrome/ntp/doodle_test/ddljson_android1.json https://www.gstatic.com/chrome/ntp/doodle_test/ddljson_android2.json https://www.gstatic.com/chrome/ntp/doodle_test/ddljson_android3.json https://www.gstatic.com/chrome/ntp/doodle_test/ddljson_android4.json

  // '--google-url',
  //	No description

  // '--gpu',
  //	No description

  // '--gpu-blocklist-test-group',
  //	Select a different set of GPU blocklist entries with the specified test_group ID.

  // '--gpu-device-id',
  //	Passes the active graphics device id from browser process to info collection GPU process.

  // '--gpu-disk-cache-size-kb',
  //	Allows explicitly specifying the shader disk cache size for embedded devices. Default value is 6MB. On Android, 2MB is default and 128KB for low-end devices.

  // '--gpu-driver-bug-list-test-group',
  //	Enable an extra set of GPU driver bug list entries with the specified test_group ID. Note the default test group (group 0) is still active.

  // '--gpu-driver-version',
  //	Passes the active graphics driver version from browser process to info collection GPU process.

  // '--gpu-launcher',
  //	Extra command line options for launching the GPU process (normally used for debugging). Use like renderer-cmd-prefix.

  // '--gpu-no-context-lost',
  //	Inform Chrome that a GPU context will not be lost in power saving mode, screen saving mode, etc. Note that this flag does not ensure that a GPU context will never be lost in any situations, say, a GPU reset.

  // '--gpu-preferences',
  //	Passes encoded GpuPreferences to GPU process.

  // '--gpu-process',
  //	No description

  // '--gpu-program-cache-size-kb',
  //	Sets the maximum size of the in-memory gpu program cache, in kb

  // '--gpu-rasterization-msaa-sample-count',
  //	The number of multisample antialiasing samples for GPU rasterization. Requires MSAA support on GPU to have an effect. 0 disables MSAA.

  // '--gpu-revision',
  //	Passes the active graphics revision info from browser process to info collection GPU process.

  // '--gpu-sandbox-allow-sysv-shm',
  //	Allows shmat() system call in the GPU sandbox.

  // '--gpu-sandbox-failures-fatal',
  //	Makes GPU sandbox failures fatal.

  // '--gpu-sandbox-start-early',
  //	Starts the GPU sandbox before creating a GL context.

  // '--gpu-startup-dialog',
  //	Causes the GPU process to display a dialog on launch.

  // '--gpu-sub-system-id',
  //	Passes the active graphics sub system id from browser process to info collection GPU process.

  // '--gpu-vendor-id',
  //	Passes the active graphics vendor id from browser process to info collection GPU process.

  // '--gpu-watchdog-timeout-seconds',
  //	Override value for the GPU watchdog timeout in seconds.

  // '--gpu2-startup-dialog',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Causes the second GPU process used for gpu info collection to display a dialog on launch.

  // '--graphics-buffer-count',
  //	No description

  // '--guest',
  // (The constants BUILDFLAG(IS_CHROMEOS), BUILDFLAG(IS_LINUX), BUILDFLAG(IS_MAC) and \ must be defined.)
  //	Causes the browser to launch directly in guest mode.

  // '--guest-wallpaper-large',
  //	Large wallpaper to use in guest mode (as path to trusted, non-user-writable JPEG file).

  // '--guest-wallpaper-small',
  //	Small wallpaper to use in guest mode (as path to trusted, non-user-writable JPEG file).

  // '--h',
  // (The constants !BUILDFLAG(IS_CHROMEOS_ASH) and !BUILDFLAG(IS_MAC) must not be defined, and the constant BUILDFLAG(IS_POSIX) must be defined.)
  //	No description

  // '--hardware-video-decode-framerate',
  // (The constant BUILDFLAG(USE_CHROMEOS_MEDIA_ACCELERATION) must be defined.)
  //	Some (Qualcomm only at the moment) V4L2 video decoders require setting the framerate so that the hardware decoder can scale the clocks efficiently. This provides a mechanism during testing to lock the decoder framerate to a specific value.

  // '--hardware_video_decoding',
  // (The constants BUILDFLAG(IS_CHROMEOS_ASH) and BUILDFLAG(IS_LINUX) must be defined.)
  //	No description

  // '--hardware_video_encoding',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	No description

  // '--has-chromeos-keyboard',
  //	If set, the system is a Chromebook with a "standard Chrome OS keyboard", which generally means one with a Search key in the standard Caps Lock location above the Left Shift key. It should be unset for Chromebooks with both Search and Caps Lock keys (e.g. stout) and for devices like Chromeboxes that only use external keyboards.

  // '--has-hps',
  //	Whether this device that has hps.

  // '--has-internal-stylus',
  //	Whether this device has an internal stylus.

  // '--has-number-pad',
  //	If set, the system is a Chromebook with a number pad as part of its internal keyboard.

  // '--headless',
  //	Run in headless mode, i.e., without a UI or display server dependencies.

  // '--help',
  //	No description

  // '--hermes-fake',
  //	Enables Hermes fake behavior. By default, no carrier profiles are setup. If a value of "on" is passed for this switch, then hermes fakes are initialized with a single installed carrier profile. Fake cellular service corresponding to carrier profiles are also setup in Shill.

  // '--hide-crash-restore-bubble',
  //	Does not show the crash restore bubble when the browser is started during the system startup phase in ChromeOS, if the ChromeOS full restore feature is enabled, because the ChromeOS full restore notification is shown for the user to select restore or not.

  // '--hide-icons',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Makes Windows happy by allowing it to show "Enable access to this program" checkbox in Add/Remove Programs->Set Program Access and Defaults. This only shows an error box because the only way to hide Chrome is by uninstalling it.

  // '--hide-scrollbars',
  //	Prevents creating scrollbars for web content. Useful for taking consistent screenshots.

  // '--highlight-all-webviews',
  //	Highlight the contents (including web contents) of all WebViews with a yellow tint. This is useful for identifying WebViews in an Android application.

  // '--highlight-non-lcd-text-layers',
  //	Highlights layers that can't use lcd text. Layers containing no text won't be highlighted. See DebugColors::NonLCDTextHighlightColor() for the colors.

  // '--homedir',
  //	Defines user homedir. This defaults to primary user homedir.

  // '--homepage',
  //	Specifies which page will be displayed in newly-opened tabs. We need this for testing purposes so that the UI tests don't depend on what comes up for http://google.com.

  // '--host',
  //	No description

  // '--host-resolver-rules',
  //	These mappings only apply to the host resolver.

  // '--icon_reader',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--ignore-arcvm-dev-conf',
  //	If set, the "ignore_dev_conf" field in StartArcVmRequest message will consequently be set such that all development configuration directives in /usr/local/vms/etc/arcvm_dev.conf will be ignored during ARCVM start.

  // '--ignore-autocomplete-off-autofill',
  //	Ignores autocomplete="off" for Autofill data (profiles + credit cards).

  // '--ignore-certificate-errors-spki-list',
  //	A set of public key hashes for which to ignore certificate-related errors. If the certificate chain presented by the server does not validate, and one or more certificates have public key hashes that match a key from this list, the error is ignored. The switch value must be a comma-separated list of Base64-encoded SHA-256 SPKI Fingerprints (RFC 7469, Section 2.4). This switch has no effect unless --user-data-dir (as defined by the content embedder) is also present.

  // '--ignore-google-port-numbers',
  //	When set, this will ignore the PortPermission passed in the google_util.h methods and ignore the port numbers. This makes it easier to run tests for features that use these methods (directly or indirectly) with the EmbeddedTestServer, which is more representative of production.

  // '--ignore-gpu-blocklist',
  //	Ignores GPU blocklist.

  // '--ignore-urlfetcher-cert-requests',
  //	Causes net::URLFetchers to ignore requests for SSL client certificates, causing them to attempt an unauthenticated SSL/TLS session. This is intended for use when testing various service URLs (eg: kPromoServerURL, kSbURLPrefix, kSyncServiceURL, etc).

  // '--ignore-user-profile-mapping-for-tests',
  //	If true, profile selection in UserManager will always return active user's profile. TODO(nkostlyev): http://crbug.com/364604 - Get rid of this switch after we turn on multi-profile feature on ChromeOS.

  // '--ime',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	No description

  // '--in-mem-http-cache-size',
  //	No description

  // '--in-process-broker',
  //	Creates the service broker inside of this process. Only one process should host the service broker.

  // '--in-process-gpu',
  //	Run the GPU process as a thread in the browser process.

  // '--incognito',
  '//	Forces Incognito mode even if user data directory is specified using the --user-data-dir switch.',

  // '--init-done-notifier',
  //	The handle of an event to signal when the initialization of the main process is complete (including loading all DLL's). This is used by the integration test to check that forbidden modules aren't loaded outside the sandbox. If this is set, the main process will signal the event and then wait for the integration test to signal it as well before continuing. Ignored in official builds.

  // '--initial-preferences-file',
  // (The constant BUILDFLAG(IS_CHROMEOS_LACROS) must be defined.)
  //	Manually sets the initial preferences file. This is required to change the initial preferences when the default file is read-only (eg. on lacros). Passing this flag will reset the preferences regardless of whether this is the first run.

  // '--initialize-client-hints-storage',
  //	Pre-load the client hint storage. Takes a JSON dict, with each key being an origin (RFC 6454 Section 6.2) and each value a comma-separated list of client hint tokens (RFC 8942 Section 3.1, client-hints-infrastructure Section 7.1). Each origin/token-list entry will be parsed and persisted to the Client Hints storage as though the token-list had come through an Accept-CH response header from a navigation from the origin. The initialization will only apply to non-OffTheRecord profiles, meaning incognito or guest profiles will not have the storage applied.

  // '--input',
  //	No description

  // '--install-autogenerated-theme',
  //	Installs an autogenerated theme based on the given RGB value. The format is "r,g,b", where r, g, b are a numeric values from 0 to 255.

  // '--install-chrome-app',
  //	Causes Chrome to initiate an installation flow for the given app.

  // '--install-isolated-web-app-from-file',
  //	Causes Chrome to install the unsigned Web Bundle at the given path as a developer mode Isolated Web App.

  // '--install-isolated-web-app-from-url',
  //	Causes Chrome to install a developer mode Isolated Web App whose contents are hosted at the given HTTP(S) URL.

  // '--install-log-fast-upload-for-tests',
  //	Decreases delay in uploading installation event logs for integration test.

  // '--install-system-extension',
  //	When specified, Chrome OS will install a System Extension from the specified directory. For now, only one extension can be specified.

  // '--instant-process',
  //	Marks a renderer as an Instant process.

  // '--integration-test-timeout-minutes',
  //	Set the timeout for integration tests in minutes. 0 disables the timeout entirely.

  // '--ip-address-space-overrides',
  //	Specifies manual overrides to the IP endpoint -> IP address space mapping. This allows running local tests against "public" and "private" IP addresses. This switch is specified as a comma-separated list of overrides. Each override is given as a colon-separated "<endpoint>:<address space>" pair. Grammar, in pseudo-BNF format: switch := override-list override-list := override â€œ,â€ override-list | <nil> override := ip-endpoint â€œ=â€ address-space address-space := â€œpublicâ€ | â€œprivateâ€ | â€œlocalâ€ ip-endpoint := ip-address ":" port ip-address := see `net::ParseURLHostnameToAddress()` for details port := integer in the [0-65535] range Any invalid entries in the comma-separated list are ignored. See also the design doc: https://docs.google.com/document/d/1-umCGylIOuSG02k9KGDwKayt3bzBXtGwVlCQHHkIcnQ/edit# And the Web Platform Test RFC #72 behind it: https://github.com/web-platform-tests/rfcs/blob/master/rfcs/address_space_overrides.md

  // '--ip-anonymization-proxy-allow-list',
  //	Specifies a list of origins on which to use the server specified by `kIPAnonymizationProxyServer`. if `kIPAnonymizationProxyServer` is empty this list will be ignored. This is intended as a reverse bypass rules list.

  // '--ip-anonymization-proxy-password',
  //	Specifies a value for the "password" header to be passed to the proxy specified by `kIPAnonymizationProxyServer`. if `kIPAnonymizationProxyServer` is empty this list will be ignored.

  // '--ip-anonymization-proxy-server',
  //	Specifies a proxy server for origins specified in kIPAnonymizationProxyAllowList. This proxy will be used on a best-effort basis when normal proxy resolution would result in trying direct connections (possibly after trying some other proxy server).

  // '--ipc-connection-timeout',
  //	Overrides the timeout, in seconds, that a child process waits for a connection from the browser before killing itself.

  // '--ipc-dump-directory',
  // (The constant ENABLE_IPC_FUZZER must be defined.)
  //	Dumps IPC messages sent from renderer processes to the browser process to the given directory. Used primarily to gather samples for IPC fuzzing.

  // '--ipc-fuzzer-testcase',
  // (The constant ENABLE_IPC_FUZZER must be defined.)
  //	Specifies the testcase used by the IPC fuzzer.

  // '--isolate-origins',
  //	Require dedicated processes for a set of origins, specified as a comma-separated list. For example: --isolate-origins=https://www.foo.com,https://www.bar.com

  // '--isolated-app-origins',
  //	Enable Isolated App restrictions for a set of origins, specified as a comma-separated list. For example: --isolated-app-origins=https://www.foo.com,https://www.bar.com

  // '--isolated-context-origins',
  //	Enables APIs guarded with the [IsolatedContext] IDL attribute for the given comma-separated list of origins.

  // '--isolation-by-default',
  //	Enables the web-facing behaviors that will enable origin-isolation by default at some point in the relatively near future. https://crbug.com/1140371

  // '--javascript-harmony',
  //	Enables experimental Harmony (ECMAScript 6) features.

  // '--js-flags',
  //	Specifies the flags passed to JS engine.

  // '--keep-alive-for-test',
  //	Used for testing - keeps browser alive after last browser window closes.

  // '--kiosk',
  //	Enable kiosk mode. Please note this is not Chrome OS kiosk mode.

  // '--kiosk-printing',
  //	Enable automatically pressing the print button in print preview.

  // '--lacros-availability-ignore',
  //	When this flag is set, the lacros-availability policy is ignored.

  // '--lacros-chrome-additional-args',
  //	If this switch is set, then ash-chrome will pass additional arguments when launching lacros-chrome. The string '####' is used as a delimiter. Example: --lacros-chrome-additional-args="--foo=5####--bar=/tmp/dir name". Will result in two arguments passed to lacros-chrome: --foo=5 --bar=/tmp/dir name

  // '--lacros-chrome-additional-args-file',
  //	If this switch is set, then ash-chrome will read from the provided path and pass additional arguments when launching lacros-chrome. Each non-empty line in the file will be treated as an argument. Example file contents: --foo=5 --bar=/tmp/dir name

  // '--lacros-chrome-additional-env',
  //	Additional environment variables set for lacros-chrome. The string '####' is used as a delimiter. For example: --lacros-chrome-additional-env=WAYLAND_DEBUG=client####FOO=bar will enable Wayland protocol logging and set FOO=bar.

  // '--lacros-chrome-path',
  //	If this switch is set, then ash-chrome will exec the lacros-chrome binary from the indicated path rather than from component updater. Note that the path should be to a directory that contains a binary named 'chrome'.

  // '--lacros-mojo-socket-for-testing',
  //	If set, ash-chrome will drop a Unix domain socket to wait for a process to connect to it, and the connection will be used to request file descriptors from ash-chrome, and when the process forks to start a lacros-chrome, the obtained file descriptor will be used by lacros-chrome to set up the mojo connection with ash-chrome. There are mainly two use cases: 1. Test launcher to run browser tests in testing environment. 2. A terminal to start lacros-chrome with a debugger.

  // '--lang',
  //	The language file that we want to try to open. Of the form language[-country] where language is the 2 letter code from ISO-639.

  // '--last-launched-app',
  //	Pass the app id information to the renderer process, to be used for logging. last-launched-app should be the app that just launched and is spawning the renderer.

  // '--launch-rma',
  //	Start Chrome in RMA mode. Launches RMA app automatically. kRmaNotAllowed switch takes priority over this one.

  // '--launch-time-ticks',
  //	Time the browser launched the renderer process (in TimeTicks).

  // '--layer',
  //	No description

  // '--libassistant',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	No description

  // '--list-apps',
  // (The constants BUILDFLAG(IS_LINUX), BUILDFLAG(IS_MAC) and BUILDFLAG(IS_WIN) must be defined.)
  //	Writes open and installed web apps for each profile to the specified file without launching a new browser window or tab. Pass a absolute file path to specify where to output the information. Can be used together with optional --profile-base-name switch to only write information for a given profile.

  // '--list-audio-devices',
  // (The constant BUILDFLAG(IS_APPLE) must be defined.)
  //	No description

  // '--load-and-launch-app',
  //	Loads an app from the specified directory and launches it.

  // '--load-apps',
  //	Comma-separated list of paths to apps to load at startup. The first app in the list will be launched.

  // '--load-empty-dll',
  //	Attempt to load empty-dll.dll whenever this flag is set. For testing DLL loading.

  // '--load-extension',
  //	Comma-separated list of paths to extensions to load at startup.

  // '--load-guest-mode-test-extension',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Path to the unpacked test extension to load into guest mode. The extension ID must match kGuestModeTestExtensionId.

  // '--load-signin-profile-test-extension',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Path to the unpacked test extension to load into the signin profile. The ID extension loaded must match kTestSigninProfileExtensionId.

  // '--loading-predictor-allow-local-request-for-testing',
  //	Allows the loading predictor to do prefetches to local IP addresses. This is needed for testing as such requests are blocked by default for security.

  // '--log-best-effort-tasks',
  //	Logs information about all tasks posted with TaskPriority::BEST_EFFORT. Use this to diagnose issues that are thought to be caused by TaskPriority::BEST_EFFORT execution fences. Note: Tasks posted to a non-BEST_EFFORT UpdateableSequencedTaskRunner whose priority is later lowered to BEST_EFFORT are not logged.

  // '--log-file',
  //	Overrides the default file name to use for general-purpose logging (does not affect which events are logged).

  // '--log-gpu-control-list-decisions',
  //	Logs GPU control list decisions when enforcing blocklist rules.

  // '--log-interface-calls-to',
  //	Specifies a file to log all the interface calls of EngineRequestsImpl and CleanerEngineRequestsImpl.

  // '--log-level',
  //	Sets the minimum log level. Valid values are from 0 to 3: INFO = 0, WARNING = 1, LOG_ERROR = 2, LOG_FATAL = 3.

  // '--log-net-log',
  //	Enables saving net log events to a file. If a value is given, it used as the path the the file, otherwise the file is named netlog.json and placed in the user data directory.

  // '--log-on-ui-double-background-blur',
  // (The constant DCHECK_IS_ON() must be defined.)
  //	Checks and logs double background blur as an error if any.

  // '--log-with-hash',
  //	Log user actions with action name hashed.

  // '--log-without-hash',
  //	Log user actions with action name unhashed.

  // '--login-manager',
  //	Enables Chrome-as-a-login-manager behavior.

  // '--login-profile',
  //	Specifies the profile to use once a chromeos user is logged in. This parameter is ignored if user goes through login screen since user_id hash defines which profile directory to use. In case of browser restart within active session this parameter is used to pass user_id hash for primary user.

  // '--login-user',
  //	Specifies the user which is already logged in.

  // '--logs-upload-retry-interval',
  //	Specify the time to wait between logs upload retries, in minutes.

  // '--lso-url',
  //	No description

  // '--ltr',
  //	No description

  // '--make-chrome-default',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Indicates whether Chrome should be set as the default browser during installation.

  // '--make-default-browser',
  //	Makes Chrome default browser

  // '--managed-mode',
  //	Whether in hospitality mode

  // '--managed-user-id',
  //	Sets the supervised user ID for any loaded or newly created profile to the given value. Pass an empty string to mark the profile as non-supervised. Used for testing.

  // '--mangle-localized-strings',
  //	Transform localized strings to be longer, with beginning and end markers to make truncation visually apparent.

  // '--manual',
  //	No description

  // '--market-url-for-testing',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Sets the market URL for Chrome for use in testing.

  // '--marketing-opt-in-url',
  //	Determines the URL to be used when calling the backend.

  // '--max-active-webgl-contexts',
  //	Allows user to override maximum number of active WebGL contexts per renderer process.

  // '--max-chromeos-decoder-threads',
  // (The constant BUILDFLAG(USE_CHROMEOS_MEDIA_ACCELERATION) must be defined.)
  //	Set the maximum number of decoder threads for hardware video decoders on ChromeOS. This is intended to be used for development only. TODO(b/195769334): Propagate this to Chrome utility process for Out-of-Process video decoding.

  // '--max-decoded-image-size-mb',
  //	Sets the maximium decoded image size limitation.

  // '--max-file-size',
  //	Limit the size of files the scanning engine is allowed to open.

  // '--max-gum-fps',
  //	Override the maximum framerate as can be specified in calls to getUserMedia. This flag expects a value. Example: --max-gum-fps=17.5

  // '--max-output-volume-dba1m',
  //	Calibrated max output volume dBa for voice content at 1 meter, if known.

  // '--max-untiled-layer-height',
  //	Sets the width and height above which a composited layer will get tiled.

  // '--max-untiled-layer-width',
  //	No description

  // '--max-web-media-player-count',
  //	Sets the maximum number of WebMediaPlayers allowed per frame.

  // '--mem-pressure-system-reserved-kb',
  //	Some platforms typically have very little 'free' memory, but plenty is available in buffers+cached. For such platforms, configure this amount as the portion of buffers+cached memory that should be treated as unavailable. If this switch is not used, a simple pressure heuristic based purely on free memory will be used.

  // '--memlog',
  //	No description

  // '--memlog-sampling-rate',
  //	No description

  // '--memlog-stack-mode',
  //	No description

  // '--message-loop-type-ui',
  //	Indicates the utility process should run with a message loop type of UI.

  // '--metal',
  //	No description

  // '--metal-null',
  //	No description

  // '--metrics-client-id',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	This is how the metrics client ID is passed from the browser process to its children. With Crashpad, the metrics client ID is distinct from the crash client ID.

  // '--metrics-recording-only',
  //	Enables the recording of metrics reports but disables reporting. In contrast to kForceEnableMetricsReporting, this executes all the code that a normal client would use for reporting, except the report is dropped rather than sent to the server. This is useful for finding issues in the metrics code during UI and performance tests.

  // '--metrics-upload-interval',
  //	Override the standard time interval between each metrics report upload for UMA and UKM. It is useful to set to a short interval for debugging. Unit in seconds. (The default is 1800 seconds on desktop).

  // '--mf_cdm',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--min-height-for-gpu-raster-tile',
  //	Sets the min tile height for GPU raster.

  // '--min-video-decoder-output-buffer-size',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	Minimum size for buffer size used for output video frames in FuchsiaVideoDecoder. May be set to avoid re-allocating video buffers when an application upgrades video resolution mid-stream.

  // '--minimal',
  //	No description

  // '--mirroring',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	No description

  // '--mixed',
  //	No description

  // '--mixer-enable-dynamic-channel-count',
  //	Enable dynamically changing the channel count in the mixer depending on the input streams.

  // '--mixer-service-endpoint',
  //	Endpoint that the mixer service listens on. This is a path for a UNIX domain socket (default is /tmp/mixer-service).

  // '--mixer-service-port',
  //	TCP port that the mixer service listens on on non-Linux platforms. (default 12854).

  // '--mixer-source-audio-ready-threshold-ms',
  //	Specify the start threshold frames for audio output when using our mixer. This is mostly used to override the default value to a larger value, for platforms that can't handle the default start threshold without running into audio underruns.

  // '--mixer-source-input-queue-ms',
  //	Specify the buffer size for audio output when using our mixer. This is mostly used to override the default value to a larger value, for platforms that can't handle an audio buffer so small without running into audio underruns.

  // '--mock',
  //	No description

  // '--mock-cert-verifier-default-result-for-testing',
  //	Set the default result for MockCertVerifier. This only works in test code.

  // '--mojo-core-library-path',
  //	Initializes Mojo Core from a shared library at the specified path, rather than using the version of Mojo Core embedded within the Content executable.

  // '--mojo-is-broker',
  //	Forces the process's global Mojo node to be configured as a broker. Only honored for test runners using MojoTestSuiteBase.

  // '--mojo-local-storage',
  //	Use a Mojo-based LocalStorage implementation.

  // '--mojo-pipe-token',
  //	No description

  // '--monitoring-destination-id',
  //	Allows setting a different destination ID for connection-monitoring GCM messages. Useful when running against a non-prod management server.

  // '--mse-audio-buffer-size-limit-mb',
  //	Allows explicitly specifying MSE audio/video buffer sizes as megabytes. Default values are 150M for video and 12M for audio.

  // '--mse-video-buffer-size-limit-mb',
  //	No description

  // '--mute-audio',
  //	Mutes audio sent to the audio device so it is not audible during automated testing.

  // '--nacl-broker',
  //	No description

  // '--nacl-debug-mask',
  //	Uses NaCl manifest URL to choose whether NaCl program will be debugged by debug stub. Switch value format: [!]pattern1,pattern2,...,patternN. Each pattern uses the same syntax as patterns in Chrome extension manifest. The only difference is that * scheme matches all schemes instead of matching only http and https. If the value doesn't start with !, a program will be debugged if manifest URL matches any pattern. If the value starts with !, a program will be debugged if manifest URL does not match any pattern.

  // '--nacl-gdb',
  //	Native Client GDB debugger that will be launched automatically when needed.

  // '--nacl-gdb-script',
  //	GDB script to pass to the nacl-gdb debugger at startup.

  // '--nacl-loader',
  //	No description

  // '--native',
  //	No description

  // '--native-messaging-connect-extension',
  //	Requests a native messaging connection be established between the extension with ID specified by this switch and the native messaging host named by the kNativeMessagingConnectHost switch.

  // '--native-messaging-connect-host',
  //	Requests a native messaging connection be established between the native messaging host named by this switch and the extension with ID specified by kNativeMessagingConnectExtension.

  // '--native-messaging-connect-id',
  //	If set when kNativeMessagingConnectHost and kNativeMessagingConnectExtension are specified, is reflected to the native messaging host as a command line parameter.

  // '--native-with-thread-names',
  //	No description

  // '--nearby-share-certificate-validity-period-hours',
  //	Overrides the default validity period for Nearby Share certificates. Value must be larger than 0.

  // '--nearby-share-device-id',
  //	Overrides the default device ID to provide a stable ID in test environments. By default we generate a random 10-character string.

  // '--nearby-share-num-private-certificates',
  //	Overrides the default number of private certificates generated. Value must be larger than 0.

  // '--nearby-share-verbose-logging',
  //	Enables verbose logging level for Nearby Share.

  // '--nearbysharing-http-host',
  //	Overrides the default URL for Google APIs (https://www.googleapis.com) used by Nearby Share

  // '--net-log-capture-mode',
  //	Sets the granularity of events to capture in the network log. The mode can be set to one of the following values: "Default" "IncludeSensitive" "Everything" See the enums of the corresponding name in net_log_capture_mode.h for a description of their meanings.

  // '--netifs-to-ignore',
  //	List of network interfaces to ignore. Ignored interfaces will not be used for network connectivity.

  // '--network',
  //	No description

  // '--network-quiet-timeout',
  //	Sets the timeout seconds of the network-quiet timers in IdlenessDetector. Used by embedders who want to change the timeout time in order to run web contents on various embedded devices and changeable network bandwidths in different regions. For example, it's useful when using FirstMeaningfulPaint signal to dismiss a splash screen.

  // '--new-window',
  //	Launches URL in new browser window.

  // '--no-crash-upload',
  //	Prevent the crash client from uploading crash reports.

  // '--no-default-browser-check',
  //	Disables the default browser check. Useful for UI/browser tests where we want to avoid having the default browser info-bar displayed.

  // '--no-delay-for-dx12-vulkan-info-collection',
  //	Start the non-sandboxed GPU process for DX12 and Vulkan info collection immediately after the browser starts. The default is to delay for 120 seconds.

  // '--no-experiments',
  //	Disables all experiments set on about:flags. Does not disable about:flags itself. Useful if an experiment makes chrome crash at startup: One can start chrome with --no-experiments, disable the problematic lab at about:flags and then restart chrome without this switch again.

  // '--no-first-run',
  //	Skip First Run tasks, whether or not it's actually the First Run, and the What's New page. Overridden by kForceFirstRun (for FRE) and kForceWhatsNew (for What's New). This does not drop the First Run sentinel and thus doesn't prevent first run from occurring the next time chrome is launched without this flag. It also does not update the last What's New milestone, so does not prevent What's New from occurring the next time chrome is launched without this flag.

  // '--no-initial-navigation',
  //	Stops new Shell objects from navigating to a default url.

  // '--no-network-profile-warning',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Whether or not the browser should warn if the profile is on a network share. This flag is only relevant for Windows currently.

  // '--no-pings',
  //	Don't send hyperlink auditing pings

  // '--no-proxy-server',
  //	Don't use a proxy server, always make direct connections. Overrides any other proxy server flags that are passed.

  // '--no-recovery-component',
  //	Prevent downloading and running the recovery component.

  // '--no-report-upload',
  //	Prevent the logging service from uploading logs and reports. WARNING: this switch is used by internal test systems. Be careful when making changes.

  '--no-sandbox',
  //	Disables the sandbox for all process types that are normally sandboxed. Meant to be used as a browser-level switch for testing purposes only.

  // '--no-self-delete',
  //	Prevent the executable from deleting itself after running.

  // '--no-service-autorun',
  //	Disables the service process from adding itself as an autorun process. This does not delete existing autorun registrations, it just prevents the service from registering a new one.

  '--no-startup-window',
  //	Does not automatically open a browser window on startup (used when launching Chrome for the purpose of hosting background apps).

  // '--no-system-proxy-config-service',
  //	Do not use system proxy configuration service.

  // '--no-unsandboxed-zygote',
  //	Disables the unsandboxed zygote. Note: this flag should not be used on most platforms. It is introduced because some platforms (e.g. Cast) have very limited memory and binaries won't be updated when the browser process is running.

  // '--no-user-gesture-required',
  //	Autoplay policy that does not require any user gesture.

  // '--no-vr-runtime',
  //	Tell WebXr to assume that it does not support any runtimes.

  // '--no-xshm',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Disables MIT-SHM extension. In use only with Ozone/X11.

  '--no-zygote',
  //	Disables the use of a zygote process for forking child processes. Instead, child processes will be forked and exec'd directly. Note that --no-sandbox should also be used together with this flag because the sandbox needs the zygote to work.

  // '--no-zygote-sandbox',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Instructs the zygote to launch without a sandbox. Processes forked from this type of zygote will apply their own custom sandboxes later.

  // '--noerrdialogs',
  //	Suppresses all error dialogs when present.

  // '--none',
  //	Must be in sync with "sandbox_type" values as used in service manager's manifest.json catalog files.

  // '--none_and_elevated',
  //	No description

  // '--note-taking-app-ids',
  //	An optional comma-separated list of IDs of apps that can be used to take notes. If unset, a hardcoded list is used instead.

  // '--notification-inline-reply',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Used in combination with kNotificationLaunchId to specify the inline reply entered in the toast in the Windows Action Center.

  // '--notification-launch-id',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Used for launching Chrome when a toast displayed in the Windows Action Center has been activated. Should contain the launch ID encoded by Chrome.

  // '--ntp-snippets-add-incomplete',
  //	If this flag is set, we will add downloaded snippets that are missing some critical data to the list.

  // '--null',
  //	No description

  // '--num-raster-threads',
  //	Number of worker threads used to rasterize content.

  // '--nv12',
  //	Swap chain formats for direct composition SDR video overlays.

  // '--oauth-account-manager-url',
  //	No description

  // '--oauth2-client-id',
  //	No description

  // '--oauth2-client-secret',
  //	No description

  // '--offer-in-settings',
  //	No description

  // '--offscreen-document-testing',
  //	Allows the use of the `testing` reason in offscreen documents.

  // '--on-disk-http-cache-size',
  //	No description

  // '--on-the-fly-mhtml-hash-computation',
  //	Calculate the hash of an MHTML file as it is being saved. The browser process will write the serialized MHTML contents to a file and calculate its hash as it is streamed back from the renderer via a Mojo data pipe.

  // '--ondevice_handwriting',
  //	Used to determine if and how on-device handwriting recognition is supported (e.g. via rootfs or downloadable content).

  // '--oobe-eula-url-for-tests',
  //	Allows the eula url to be overridden for tests.

  // '--oobe-force-tablet-first-run',
  //	Indicates that the first user run flow (sequence of OOBE screens after the first user login) should show tablet mode centric screens, even if the device is not in tablet mode.

  // '--oobe-large-screen-special-scaling',
  //	Indicates that OOBE should be scaled for big displays similar to how Meets app scales UI. TODO(crbug.com/1205364): Remove after adding new scheme.

  // '--oobe-screenshot-dir',
  //	Specifies directory for screenshots taken with OOBE UI Debugger.

  // '--oobe-show-accessibility-button-on-marketing-opt-in-for-testing',
  //	Shows a11y button on the marketing opt in without visiting gesture navigation screen.

  // '--oobe-skip-postlogin',
  //	Skips all other OOBE pages after user login.

  // '--oobe-skip-to-login',
  //	Skip to login screen.

  // '--oobe-timer-interval',
  //	Interval at which we check for total time on OOBE.

  // '--oobe-timezone-override-for-tests',
  //	Allows the timezone to be overridden on the marketing opt-in screen.

  // '--oobe-trigger-sync-timeout-for-tests',
  //	Trigger sync engine initialization timeout in OOBE for testing.

  // '--opengraph',
  //	No description

  // '--openxr',
  //	The following are the runtimes that WebXr supports.

  // '--optimization-guide-fetch-hints-override',
  //	Overrides scheduling and time delays for fetching hints and causes a hints fetch immediately on start up using the provided comma separate lists of hosts.

  // '--optimization-guide-fetch-hints-override-timer',
  //	Overrides the hints fetch scheduling and delay, causing a hints fetch immediately on start up using the TopHostProvider. This is meant for testing.

  // '--optimization-guide-model-override',
  //	Disables the fetching of models and overrides the file path and metadata to be used for the session to use what's passed via command-line instead of what is already stored. We expect that the string be a comma-separated string of model overrides with each model override be: OPTIMIZATION_TARGET_STRING:file_path or OPTIMIZATION_TARGET_STRING:file_path:base64_encoded_any_proto_model_metadata. It is possible this only works on Desktop since file paths are less easily accessible on Android, but may work.

  // '--optimization-guide-model-validate',
  //	Triggers validation of the model. Used for manual testing.

  // '--optimization-guide-service-api-key',
  //	Overrides the Optimization Guide Service API Key for remote requests to be made.

  // '--optimization-guide-service-get-hints-url',
  //	Overrides the Optimization Guide Service URL that the HintsFetcher will request remote hints from.

  // '--optimization-guide-service-get-models-url',
  //	Overrides the Optimization Guide Service URL that the PredictionModelFetcher will request remote models and host features from.

  // '--optimization_guide_hints_override',
  //	Overrides the Hints Protobuf that would come from the component updater. If the value of this switch is invalid, regular hint processing is used. The value of this switch should be a base64 encoding of a binary Configuration message, found in optimization_guide's hints.proto. Providing a valid value to this switch causes Chrome startup to block on hints parsing.

  // '--orientation-sensors',
  //	No description

  // '--origin-trial-disabled-features',
  //	Contains a list of feature names for which origin trial experiments should be disabled. Names should be separated by "|" characters.

  // '--origin-trial-disabled-tokens',
  //	Contains a list of token signatures for which origin trial experiments should be disabled. Tokens should be separated by "|" characters.

  // '--origin-trial-public-key',
  //	Comma-separated list of keys which will override the default public keys for checking origin trial tokens.

  // '--output',
  //	No description

  // '--override-enabled-cdm-interface-version',
  //	Overrides the default enabled library CDM interface version(s) with the one specified with this switch, which will be the only version enabled. For example, on a build where CDM 8, CDM 9 and CDM 10 are all supported (implemented), but only CDM 8 and CDM 9 are enabled by default: --override-enabled-cdm-interface-version=8 : Only CDM 8 is enabled --override-enabled-cdm-interface-version=9 : Only CDM 9 is enabled --override-enabled-cdm-interface-version=10 : Only CDM 10 is enabled --override-enabled-cdm-interface-version=11 : No CDM interface is enabled This can be used for local testing and debugging. It can also be used to enable an experimental CDM interface (which is always disabled by default) for testing while it's still in development.

  // '--override-hardware-secure-codecs-for-testing',
  //	Overrides hardware secure codecs support for testing. If specified, real platform hardware secure codecs check will be skipped. Valid codecs are: - video: "vp8", "vp9", "avc1", "hevc", "dolbyvision", "av01" - video that does not support clear lead: `<video>-no-clearlead`, where <video> is from the list above. - audio: "mp4a", "vorbis" Codecs are separated by comma. For example: --override-hardware-secure-codecs-for-testing=vp8,vp9-no-clearlead,vorbis --override-hardware-secure-codecs-for-testing=avc1,mp4a CENC encryption scheme is assumed to be supported for the specified codecs. If no valid codecs specified, no hardware secure codecs are supported. This can be used to disable hardware secure codecs support: --override-hardware-secure-codecs-for-testing

  // '--override-language-detection',
  //	Overrides the language detection result determined based on the page contents.

  // '--override-metrics-upload-url',
  //	Override the URL to which metrics logs are sent for debugging.

  // '--override-use-software-gl-for-tests',
  //	Forces the use of software GL instead of hardware gpu for tests.

  // '--ozone-dump-file',
  //	Specify location for image dumps.

  // '--ozone-override-screen-size',
  //	Specifies ozone screen size.

  // '--ozone-platform',
  //	Specify ozone platform implementation to use.

  // '--ozone-platform-hint',
  //	Suggests the ozone platform to use (desktop Linux only). Can be set on chrome://flags. See https://crbug.com/1246928.

  // '--pack-extension',
  //	Packages an extension to a .crx installable file from a given directory.

  // '--pack-extension-key',
  //	Optional PEM private key to use in signing packaged .crx.

  // '--page-content-annotations-validation-batch-size',
  //	No description

  // '--page-content-annotations-validation-content-visibility',
  //	No description

  // '--page-content-annotations-validation-page-entities',
  //	No description

  // '--page-content-annotations-validation-page-topics',
  //	Enables the specific annotation type to run validation at startup after a delay. A comma separated list of inputs can be given as a value which will be used as input for the validation job.

  // '--page-content-annotations-validation-startup-delay-seconds',
  //	No description

  // '--page-content-annotations-validation-write-to-file',
  //	Writes the output of page content annotation validations to the given file.

  // '--parent-window',
  //	No description

  // '--passthrough',
  //	No description

  // '--password-store',
  //	Specifies which encryption storage backend to use. Possible values are kwallet, kwallet5, gnome, gnome-keyring, gnome-libsecret, basic. Any other value will lead to Chrome detecting the best backend automatically. TODO(crbug.com/571003): Once PasswordStore no longer uses the Keyring or KWallet for storing passwords, rename this flag to stop referencing passwords. Do not rename it sooner, though; developers and testers might rely on it keeping large amounts of testing passwords out of their Keyrings or KWallets.

  // '--pdf-renderer',
  //	Renderer process that runs the non-PPAPI PDF plugin.

  // '--pdf_conversion',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--pen-devices',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Tells chrome to interpret events from these devices as pen events. Only available with XInput 2 (i.e. X server 1.8 or above). The id's of the devices can be retrieved from 'xinput list'.

  // '--perf-test-print-uma-means',
  //	Show the mean value of histograms that native performance tests are monitoring. Note that this is only applicable for PerformanceTest subclasses.

  // '--perfetto-disable-interning',
  //	Repeat internable data for each TraceEvent in the perfetto proto format.

  // '--performance',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	No description

  // '--platform-disallows-chromeos-direct-video-decoder',
  // (The constant BUILDFLAG(IS_CHROMEOS) must be defined.)
  //	ChromeOS uses one of two VideoDecoder implementations based on SoC/board specific configurations that are signalled via this command line flag. TODO(b/159825227): remove when the "old" video decoder is fully launched.

  // '--playready-key-system',
  //	No description

  // '--policy',
  //	Set policy value by command line.

  // '--post-reboot',
  //	Indicates this run is post-reboot.

  // '--post-reboot-override-cmd',
  //	Indicates that this is a post-reboot run that should fetch its switches from an external registry key. Important note: When this switch is present in the command line, all other switches are ignored except for kCleanupIdSwitch, which is used to read post-reboot switches from the correct registry location.

  // '--post-reboot-trigger',
  //	A freeform text string that records what triggered a post-reboot run.

  // '--ppapi',
  //	No description

  // '--ppapi-antialiased-text-enabled',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	The boolean value (0/1) of FontRenderParams::antialiasing to be passed to Ppapi processes.

  // '--ppapi-in-process',
  //	Runs PPAPI (Pepper) plugins in-process.

  // '--ppapi-plugin-launcher',
  //	Specifies a command that should be used to launch the ppapi plugin process. Useful for running the plugin process through purify or quantify. Ex: --ppapi-plugin-launcher="path\to\purify /Run=yes"

  // '--ppapi-startup-dialog',
  //	Causes the PPAPI sub process to display a dialog on launch. Be sure to use --no-sandbox as well or the sandbox won't allow the dialog to display.

  // '--ppapi-subpixel-rendering-setting',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	The enum value of FontRenderParams::subpixel_rendering to be passed to Ppapi processes.

  // '--pre-crashpad-crash-test',
  //	Causes the browser process to crash very early in startup, just before crashpad (or breakpad) is initialized.

  // '--prediction-service-mock-likelihood',
  //	Used to mock the response received from the Web Permission Prediction Service. Used for testing.

  // '--prefixed-storage-info-enabled',
  //	Controls whether legacy quota API webkitStorageInfo is forced enabled.

  // '--preinstalled-web-apps-dir',
  //	A directory where Chrome looks for json files describing default/preinstalled web apps. This overrides any default directory to load preinstalled web apps from.

  // '--previous-app',
  //	previous-app should be the app that was running when last-launched-app started.

  // '--print-to-pdf',
  //	Save a pdf file of the loaded page.

  // '--print-to-pdf-no-header',
  //	Do not display header and footer in the pdf file.

  // '--print_backend',
  // (The constant BUILDFLAG(ENABLE_PRINTING) must be defined.)
  //	No description

  // '--print_compositor',
  //	No description

  // '--privacy-policy-host-for-tests',
  //	Sets Privacy Policy hostname url for testing.

  // '--private-aggregation-developer-mode',
  //	Causes the Private Aggregation API to run without reporting delays.

  // '--privet-ipv6-only',
  //	Use IPv6 only for privet HTTP.

  // '--process-per-site',
  //	Enable the "Process Per Site" process model for all domains. This mode consolidates same-site pages so that they share a single process. More details here: - https://www.chromium.org/developers/design-documents/process-models - The class comment in site_instance.h, listing the supported process models. IMPORTANT: This isn't to be confused with --site-per-process (which is about isolation, not consolidation). You probably want the other one.

  // '--process-per-tab',
  //	Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own renderer process. We default to using a renderer process for each site instance (i.e., group of pages from the same registered domain with script connections to each other). TODO(creis): This flag is currently a no-op. We should refactor it to avoid "unnecessary" process swaps for cross-site navigations but still swap when needed for security (e.g., isolated origins).

  // '--product-version',
  //	Outputs the product version information and quit. Used as an internal api to detect the installed version of Chrome on Linux.

  // '--profile-base-name',
  // (The constants BUILDFLAG(IS_LINUX), BUILDFLAG(IS_MAC) and BUILDFLAG(IS_WIN) must be defined.)
  //	Pass the basename of the profile directory to specify which profile to get information. Only relevant when used with --list-apps switch.

  // '--profile-directory',
  //	Selects directory of profile to associate with the first browser launched.

  // '--profile-email',
  //	Like kProfileDirectory, but selects the profile by email address. If the email is not found in any existing profile, this switch has no effect. If both kProfileDirectory and kProfileUserName are specified, kProfileDirectory takes priority.

  // '--profile-requires-policy',
  //	If set to "true", the profile requires policy during restart (policy load must succeed, otherwise session restart should fail).

  // '--profiling-at-start',
  //	Starts the sampling based profiler for the browser process at startup. This will only work if chrome has been built with the gn arg enable_profiling = true. The output will go to the value of kProfilingFile.

  // '--profiling-file',
  //	Specifies a location for profiling output. This will only work if chrome has been built with the gyp variable profiling=1 or gn arg enable_profiling=true. {pid} if present will be replaced by the pid of the process. {count} if present will be incremented each time a profile is generated for this process. The default is chrome-profile-{pid} for the browser and test-profile-{pid} for tests.

  // '--profiling-flush',
  //	Controls whether profile data is periodically flushed to a file. Normally the data gets written on exit but cases exist where chromium doesn't exit cleanly (especially when using single-process). A time in seconds can be specified.

  // '--proxy-auto-detect',
  //	Forces proxy auto-detection.

  // '--proxy-bypass-list',
  //	Specifies a list of hosts for whom we bypass proxy settings and use direct connections. Ignored unless --proxy-server is also specified. This is a comma-separated list of bypass rules. See: "net/proxy_resolution/proxy_bypass_rules.h" for the format of these rules.

  // '--proxy-pac-url',
  //	Uses the pac script at the given URL

  // '--proxy-server',
  //	Uses a specified proxy server, overrides system settings. This switch only affects HTTP and HTTPS requests.

  // '--proxy_resolver_win',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--pseudo',
  //	No description

  // '--public-accounts-saml-acl-url',
  //	SAML assertion consumer URL, used to detect when Gaia-less SAML flows end (e.g. for SAML managed guest sessions) TODO(984021): Remove when URL is sent by DMServer.

  // '--pull-to-refresh',
  //	Enables or disables pull-to-refresh gesture in response to vertical overscroll. Set the value to '0' to disable the feature, set to '1' to enable it for both touchpad and touchscreen, and set to '2' to enable it only for touchscreen. Defaults to disabled.

  // '--purge-model-and-features-store',
  //	Purges the store containing prediction medels and host model features on startup, so that it's guaranteed to be using fresh data.

  // '--purge-optimization-guide-store',
  //	Purges the store containing fetched and component hints on startup, so that it's guaranteed to be using fresh data.

  // '--pwa-launcher-version',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Specifies the version of the Progressive-Web-App launcher that launched Chrome, used to determine whether to update all launchers. NOTE: changing this switch requires adding legacy handling for the previous method, as older PWA launchers still using this switch will rely on Chrome to update them to use the new method.

  // '--qs-add-fake-bluetooth-devices',
  //	Adds fake Bluetooth devices to the quick settings menu for UI testing.

  // '--qs-add-fake-cast-devices',
  //	Adds fake Cast devices to the quick settings menu for UI testing.

  // '--quarantine-dir',
  //	Specifies the quarantine folder instead of the default one.

  // '--query-tiles-country-code',
  //	No description

  // '--query-tiles-enable-trending',
  //	No description

  // '--query-tiles-instant-background-task',
  //	No description

  // '--query-tiles-rank-tiles',
  //	No description

  // '--query-tiles-single-tier',
  //	No description

  // '--quota-change-event-interval',
  //	Specifies the minimum amount of time, in seconds, that must pass before consecutive quota change events can be fired. Set the value to '0' to disable the debounce mechanimsm.

  // '--raise-timer-frequency',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Raise the timer interrupt frequency in all Chrome processes, for experimental purposes. This feature is needed because as of Windows 10 2004 the scheduling effects of changing the timer interrupt frequency are not global, and this lets us prove/disprove whether this matters. See https://crbug.com/1128917

  // '--rdp_desktop_session',
  //	No description

  // '--reached-code-sampling-interval-us',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Specifies the profiling interval in microseconds for reached code profiler.

  // '--reader-mode-feedback',
  //	No description

  // '--reader-mode-heuristics',
  //	No description

  // '--realtime-reporting-url',
  //	Specifies the URL at which to upload real-time reports.

  // '--redirect-libassistant-logging',
  //	No description

  // '--reduce-accept-language',
  //	Reduce the accept-language http header, and only send one language in the request header: https://github.com/Tanych/accept-language.

  // '--reduce-user-agent-minor-version',
  //	Reduce the minor version number in the User-Agent string. This flag implements phase 4 of User-Agent reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html.

  // '--reduce-user-agent-platform-oscpu',
  //	Reduce the platform and oscpu in the desktop User-Agent string. This flag implements phase 5 of User-Agent reduction: https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html.

  // '--register-font-files',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Registers additional font files on Windows (for fonts outside the usual %WINDIR%\Fonts location). Multiple files can be used by separating them with a semicolon (;).

  // '--register-max-dark-suspend-delay',
  //	Makes Chrome register the maximum dark suspend delay possible on Chrome OS i.e. give the device the maximum amount of time to do its work in dark resume as is allowed by the power manager.

  // '--register-pepper-plugins',
  //	Register Pepper plugins (see pepper_plugin_list.cc for its format).

  // '--regulatory-label-dir',
  //	The name of the per-model directory which contains per-region subdirectories with regulatory label files for this model. The per-model directories (if there are any) are located under "/usr/share/chromeos-assets/regulatory_labels/".

  // '--reject-square-display',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Used to find the test that uses square display.

  // '--relauncher',
  //	No description

  // '--remote-allow-origins',
  //	Enables web socket connections from the specified origins only. '*' allows any origin.

  // '--remote-debug-mode',
  //	No description

  // '--remote-debugging-address',
  //	Use the given address instead of the default loopback for accepting remote debugging connections. Should be used together with --remote-debugging-port. Note that the remote debugging protocol does not perform any authentication, so exposing it too widely can be a security risk.

  // '--remote-debugging-pipe',
  //	Enables remote debug over stdio pipes [in=3, out=4]. Optionally, specifies the format for the protocol messages, can be either "JSON" (the default) or "CBOR".

  // '--remote-debugging-port',
  //	Enables remote debug over HTTP on the specified port.

  // '--remote-debugging-socket-name',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Enables remote debug over HTTP on the specified socket name.

  // '--remote-debugging-targets',
  //	Porvides a list of addresses to discover DevTools remote debugging targets. The format is <host>:<port>,...,<host>:port.

  // '--remove-scan-only-uws',
  //	Allow the engine to remove UwS that isn't marked cleanable. For testing only.

  // '--renderer',
  //	No description

  // '--renderer-client-id',
  //	No description

  // '--renderer-cmd-prefix',
  //	The contents of this flag are prepended to the renderer command line. Useful values might be "valgrind" or "xterm -e gdb --args".

  // '--renderer-process-limit',
  //	Overrides the default/calculated limit to the number of renderer processes. Very high values for this setting can lead to high memory/resource usage or instability.

  // '--renderer-sampling',
  //	No description

  // '--renderer-startup-dialog',
  //	Causes the renderer process to display a dialog on launch. Passing this flag also adds sandbox::policy::kNoSandbox on Windows non-official builds, since that's needed to show a dialog.

  // '--renderer-wait-for-java-debugger',
  // (The constant BUILDFLAG(IS_ANDROID) must be defined.)
  //	Block ChildProcessMain thread of the renderer's ChildProcessService until a Java debugger is attached.

  // '--renderpass',
  //	Parameters for kUIShowCompositedLayerBorders.

  // '--report-vp9-as-an-unsupported-mime-type',
  //	Force to report VP9 as an unsupported MIME type.

  // '--require-audio-hardware-for-testing',
  //	When running tests on a system without the required hardware or libraries, this flag will cause the tests to fail. Otherwise, they silently succeed.

  // '--require-wlan',
  //	Only connect to WLAN interfaces.

  // '--reset-browsing-instance-between-tests',
  //	Forces each web test to be run in a new BrowsingInstance. Required for origin isolation web tests where the BrowsingInstance retains state from origin isolation requests, but this flag may benefit other web tests.

  // '--reset-variation-state',
  //	Forces a reset of the one-time-randomized FieldTrials on this client, also known as the Chrome Variations state.

  // '--restart',
  //	Indicates that Chrome was restarted (e.g., after a flag change). This is used to ignore the launch when recording the Launch.Mode2 metric.

  // '--restore-last-session',
  //	Indicates the last session should be restored on startup. This overrides the preferences value. Note that this does not force automatic session restore following a crash, so as to prevent a crash loop. This switch is used to implement support for OS-specific "continue where you left off" functionality on OS X and Windows.

  // '--restrict-gamepad-access',
  //	Enables Feature Policy and Secure Context requirements on getGamepads.

  // '--reven-branding',
  //	Indicates that reven UI strings and features should be shown.

  // '--rlz-ping-delay',
  //	The rlz ping delay (in seconds) that overwrites the default value.

  // '--rma-not-allowed',
  //	Start Chrome without opening RMA or checking the current RMA state.

  // '--rtl',
  //	No description

  // '--run-all-compositor-stages-before-draw',
  //	Effectively disables pipelining of compositor frame production stages by waiting for each stage to finish before completing a frame.

  // '--run-manual',
  //	Manual tests only run when --run-manual is specified. This allows writing tests that don't run automatically but are still in the same test binary. This is useful so that a team that wants to run a few tests doesn't have to add a new binary that must be compiled on all builds.

  // '--run-web-tests',
  //	Runs Content Shell in web test mode, injecting test-only behaviour for blink web tests.

  // '--run-without-sandbox-for-testing',
  // (The constant !BUILDFLAG(IS_OFFICIAL_CHROME_CLEANER_BUILD) must not be defined.)
  //	Load the engine outside the sandbox. This is only to be used for manual testing.

  // '--safe-mode',
  //	The switch added by session_manager daemon when chrome crashes 3 times or more within the first 60 seconds on start. See BrowserJob::ExportArgv in platform2/login_manager/browser_job.cc.

  // '--safebrowsing-enable-enhanced-protection',
  //	Enable Safe Browsing Enhanced Protection.

  // '--safebrowsing-manual-download-blacklist',
  //	List of comma-separated sha256 hashes of executable files which the download-protection service should treat as "dangerous." For a file to show a warning, it also must be considered a dangerous filetype and not be allowlisted otherwise (by signature or URL) and must be on a supported OS. Hashes are in hex. This is used for manual testing when looking for ways to by-pass download protection.

  // '--saml-password-change-url',
  //	Password change url for SAML users. TODO(941489): Remove when the bug is fixed.

  // '--sandbox-ipc',
  //	Causes the process to run as a sandbox IPC subprocess.

  // '--sandbox-mojo-pipe-token',
  //	Mojo pipe token generated in the broker process and passed to the sandbox process to bind with the EngineCommands IPC interface.

  // '--sandboxed-process-id',
  //	Used to identify the id of the sandbox process that is intended to be spawned.

  // '--save-page-as-mhtml',
  //	Disable saving pages as HTML-only, disable saving pages as HTML Complete (with a directory of sub-resources). Enable only saving pages as MHTML. See http://crbug.com/120416 for how to remove this switch.

  // '--scan-locations',
  //	Used to limit trace locations that will be scanned. Trace locations should be specified as integers, separated by commas. For example: --scan-locations=1,2,3,5

  // '--scanning-timeout',
  //	Set the timeout for the scanning phase, in minutes. 0 disables the timeout entirely. WARNING: this switch is used by internal test systems. Be careful when making changes.

  // '--scheduler-boost-urgent',
  // (The constant BUILDFLAG(IS_CHROMEOS) must be defined.)
  //	Override the default scheduling boosting value for urgent tasks. This can be adjusted if a specific chromeos device shows better perf/power ratio (e.g. by running video conference tests). Currently, this values directs to linux scheduler's utilization min clamp. Range is 0(no biased load) ~ 100(mamximum load value).

  // '--scheduler-configuration',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Selects the scheduler configuration specified in the parameter.

  // '--scheduler-configuration-default',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Specifies what the default scheduler configuration value is if the user does not set one.

  // '--screen-capture-audio-default-unchecked',
  //	This flag sets the checkboxes for sharing audio during screen capture to off by default. It is primarily intended to be used for tests.

  // '--screen-config',
  //	Specifies the initial screen configuration, or state of all displays, for FakeDisplayDelegate, see class for format details.

  // '--screenshot',
  //	Save a screenshot of the loaded page.

  // '--screen_ai',
  // (The constant BUILDFLAG(ENABLE_SCREEN_AI_SERVICE) must be defined.)
  //	No description

  // '--search-provider-logo-url',
  //	Use a static URL for the logo of the default search engine. Example: https://www.google.com/branding/logo.png

  // '--secondary-display-layout',
  //	Specifies the layout mode and offsets for the secondary display for testing. The format is "<t|r|b|l>,<offset>" where t=TOP, r=RIGHT, b=BOTTOM and L=LEFT. For example, 'r,-100' means the secondary display is positioned on the right with -100 offset. (above than primary)

  // '--secure-connect-api-url',
  //	Specifies the base URL to contact the secure connect Api.

  // '--service',
  //	No description

  // '--service-name',
  //	Indicates the name of the service to run. Useful for debugging, or if a service executable is built to support being run as a number of potential different services.

  // '--service-request-attachment-name',
  //	The name of the |mojo::PendingReceiver<service_manager::mojom::Service>| message pipe handle that is attached to the incoming Mojo invitation received by the service.

  // '--service-sandbox-type',
  //	Type of sandbox to apply to the process running the service, one of the values in the next block.

  // '--service_with_jit',
  //	No description

  // '--set-extension-throttle-test-params',
  //	Set the parameters for ExtensionURLLoaderThrottleBrowserTest.

  // '--setup',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--shared-array-buffer-allowed-origins',
  //	Comma-separated list of origins that can use SharedArrayBuffer without enabling cross-origin isolation.

  // '--shared-array-buffer-unrestricted-access-allowed',
  // (The constant !BUILDFLAG(IS_ANDROID) must not be defined.)
  //	Enables shared array buffer on desktop, gated by an Enterprise Policy. TODO(crbug.com/1144104) Remove when migration to COOP+COEP is complete.

  // '--shared-files',
  //	Describes the file descriptors passed to a child process in the following list format: <file_id>:<descriptor_id>,<file_id>:<descriptor_id>,... where <file_id> is an ID string from the manifest of the service being launched and <descriptor_id> is the numeric identifier of the descriptor for the child process can use to retrieve the file descriptor from the global descriptor table.

  // '--shelf-hotseat',
  //	New modular design for the shelf with apps separated into a hotseat UI and smaller shelf in clamshell mode.

  // '--shelf-hover-previews',
  //	App window previews when hovering over the shelf.

  // '--shill-stub',
  //	Overrides Shill stub behavior. By default, ethernet, wifi and vpn are enabled, and transitions occur instantaneously. Multiple options can be comma separated (no spaces). Note: all options are in the format 'foo=x'. Values are case sensitive and based on Shill names in service_constants.h. See FakeShillManagerClient::SetInitialNetworkState for implementation. Examples: 'clear=1' - Clears all default configurations 'wifi=on' - A wifi network is initially connected ('1' also works) 'wifi=off' - Wifi networks are all initially disconnected ('0' also works) 'wifi=disabled' - Wifi is initially disabled 'wifi=none' - Wifi is unavailable 'wifi=portal' - Wifi connection will be in Portal state 'cellular=1' - Cellular is initially connected 'cellular=LTE' - Cellular is initially connected, technology is LTE 'interactive=3' - Interactive mode, connect/scan/etc requests take 3 secs

  // '--short-merge-session-timeout-for-test',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Use a short (1 second) timeout for merge session loader throttle testing.

  // '--short-reporting-delay',
  //	Sets the Reporting API delay to under a second to allow much quicker reports.

  // '--show-aggregated-damage',
  //	Adds a DebugBorderDrawQuad to the top of the root RenderPass showing the damage rect after surface aggregation. Note that when enabled this feature sets the entire output rect as damaged after adding the quad to highlight the real damage rect, which could hide damage rect problems.

  // '--show-autofill-signatures',
  //	Annotates forms and fields with Autofill signatures.

  // '--show-autofill-type-predictions',
  //	Annotates forms with Autofill field type predictions.

  // '--show-component-extension-options',
  //	Makes component extensions appear in chrome://settings/extensions.

  // '--show-composited-layer-borders',
  //	Renders a border around compositor layers to help debug and study layer compositing.

  // '--show-dc-layer-debug-borders',
  //	Show debug borders for DC layers - red for overlays and blue for underlays. The debug borders are offset from the layer rect by a few pixels for clarity.

  // '--show-fps-counter',
  //	Draws a heads-up-display showing Frames Per Second as well as GPU memory usage. If you also use --enable-logging=stderr --vmodule="head*=1" then FPS will also be output to the console log.

  // '--show-icons',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	See kHideIcons.

  // '--show-layer-animation-bounds',
  //	Renders a border that represents the bounding box for the layer's animation.

  // '--show-layout-shift-regions',
  //	Visibly render a border around layout shift rects in the web page to help debug and study layout shifts.

  // '--show-login-dev-overlay',
  //	If true, the developer tool overlay will be shown for the login/lock screen. This makes it easier to test layout logic.

  // '--show-mac-overlay-borders',
  // (The constant BUILDFLAG(IS_MAC) must be defined.)
  //	Show borders around CALayers corresponding to overlays and partial damage.

  // '--show-oobe-dev-overlay',
  //	Enables OOBE UI Debugger for ease of navigation between screens during manual testing. Limited to ChromeOS-on-linux and test images only.

  // '--show-overdraw-feedback',
  //	Visualize overdraw by color-coding elements based on if they have other elements drawn underneath. This is good for showing where the UI might be doing more rendering work than necessary. The colors are hinting at the amount of overdraw on your screen for each pixel, as follows: True color: No overdraw. Blue: Overdrawn once. Green: Overdrawn twice. Pink: Overdrawn three times. Red: Overdrawn four or more times.

  // '--show-paint-rects',
  //	Visibly render a border around paint rects in the web page to help debug and study painting behavior.

  // '--show-property-changed-rects',
  //	Show rects in the HUD around layers whose properties have changed.

  // '--show-screenspace-rects',
  //	Show rects in the HUD around the screen-space transformed bounds of every layer.

  // '--show-surface-damage-rects',
  //	Show rects in the HUD around damage as it is recorded into each render surface.

  // '--show-taps',
  //	Draws a circle at each touch point, similar to the Android OS developer option "Show taps".

  // '--silent-debugger-extension-api',
  //	Does not show an infobar when an extension attaches to a page using chrome.debugger page. Required to attach to extension background pages.

  // '--silent-launch',
  //	Causes Chrome to launch without opening any windows by default. Useful if one wishes to use Chrome as an ash server.

  // '--simulate-critical-update',
  //	Simulates a critical update being available.

  // '--simulate-elevated-recovery',
  //	Simulates that elevation is needed to recover upgrade channel.

  // '--simulate-outdated',
  //	Simulates that current version is outdated.

  // '--simulate-outdated-no-au',
  //	Simulates that current version is outdated and auto-update is off.

  // '--simulate-update-error-code',
  //	Simulates a GoogleUpdateErrorCode error by the update check. Must be supplied with |kSimulateUpdateHresult| switch.

  // '--simulate-update-hresult',
  //	Simulates a specific HRESULT error code returned by the update check. If the switch value is not specified (as hex) then it defaults to E_FAIL.

  // '--simulate-upgrade',
  //	Simulates an update being available.

  // '--single-process',
  //	Runs the renderer and plugins in the same process as the browser

  // '--site-per-process',
  //	Enforces a one-site-per-process security policy: * Each renderer process, for its whole lifetime, is dedicated to rendering pages for just one site. * Thus, pages from different sites are never in the same process. * A renderer process's access rights are restricted based on its site. * All cross-site navigations force process swaps. * <iframe>s are rendered out-of-process whenever the src= is cross-site. More details here: - https://www.chromium.org/developers/design-documents/site-isolation - https://www.chromium.org/developers/design-documents/process-models - The class comment in site_instance.h, listing the supported process models. IMPORTANT: this isn't to be confused with --process-per-site (which is about process consolidation, not isolation). You probably want this one.

  // '--skia-font-cache-limit-mb',
  //	Specifies the max number of bytes that should be used by the skia font cache. If the cache needs to allocate more, skia will purge previous entries.

  // '--skia-resource-cache-limit-mb',
  //	Specifies the max number of bytes that should be used by the skia resource cache. The previous entries are purged from the cache when the memory useage exceeds this limit.

  // '--skip-force-online-signin-for-testing',
  //	Disables online sign-in enforcement in tast tests.

  // '--skip-reorder-nudge-show-threshold-duration',
  //	Used to skip the threshold duration that the reorder nudge has to show before the nudge is considered as shown.

  // '--slow-down-compositing-scale-factor',
  //	Re-draw everything multiple times to simulate a much slower machine. Give a slow down factor to cause renderer to take that many times longer to complete, such as --slow-down-compositing-scale-factor=2.

  // '--slow-down-raster-scale-factor',
  //	Re-rasters everything multiple times to simulate a much slower machine. Give a scale factor to cause raster to take that many times longer to complete, such as --slow-down-raster-scale-factor=25.

  // '--sms-test-messages',
  //	Sends test messages on first call to RequestUpdate (stub only).

  // '--source-shortcut',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	When rendezvousing with an existing process, used to pass the path of the shortcut that launched the new Chrome process. This is used to record launch metrics.

  // '--speech_recognition',
  //	No description

  // '--ssl-key-log-file',
  //	Causes SSL key material to be logged to the specified file for debugging purposes. See https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Key_Log_Format for the format.

  // '--ssl-version-max',
  //	Specifies the maximum SSL/TLS version ("tls1.2" or "tls1.3").

  // '--ssl-version-min',
  //	Specifies the minimum SSL/TLS version ("tls1.2" or "tls1.3").

  // '--stabilize-time-dependent-view-for-tests',
  //	If true, the time dependent views (such as the time view) show with the predefined fixed time.

  // '--stable-release-mode',
  //	This makes us disable some web-platform runtime features so that we test content_shell as if it was a stable release. It is only followed when kRunWebTest is set. For the features' level, see third_party/blink/renderer/platform/RuntimeEnabledFeatures.md

  // '--start-fullscreen',
  //	Specifies if the browser should start in fullscreen mode, like if the user had pressed F11 right after startup.

  // '--start-in-incognito',
  //	Starts the shell with the profile in incognito mode.

  // '--start-maximized',
  //	Starts the browser maximized, regardless of any previous settings.

  // '--start-stack-profiler',
  //	Starts the stack sampling profiler in the child process.

  // '--storage-pressure-notification-interval',
  //	Interval, in minutes, used for storage pressure notification throttling. Useful for developers testing applications that might use non-trivial amounts of disk space.

  // '--structured-metrics-disabled',
  //	Disable structured metrics logging of cros actions.

  // '--stub',
  //	No description

  // '--supports-clamshell-auto-rotation',
  //	If set, the device will be forced to stay in clamshell UI mode but screen auto rotation will be supported. E.g, chromebase device Dooly.

  // '--suppress-message-center-popups',
  //	Hides all Message Center notification popups (toasts). Used for testing.

  // '--surface',
  //	No description

  // '--swiftshader',
  //	No description

  // '--swiftshader-webgl',
  //	No description

  // '--sys-info-file-path',
  //	System info file path. Default is an empty string, which means that dummy info will be used.

  // '--system-developer-mode',
  //	Used by FakeDebugDaemonClient to specify that the system is running in dev mode when running in a Linux environment. The dev mode probing is done by session manager.

  // '--system-gesture-start-height',
  //	The number of pixels from the very top or bottom of the screen to consider as a valid origin for the top or bottom swipe gesture. Overrides the default value in cast_system_gesture_handler.cc.

  // '--system-gesture-start-width',
  //	The number of pixels from the very left or right of the screen to consider as a valid origin for the left or right swipe gesture. Overrides the default value in cast_system_gesture_handler.cc.

  // '--system-log-upload-frequency',
  //	Frequency in Milliseconds for system log uploads. Should only be used for testing purposes.

  // '--telemetry-extension-dir',
  //	Specifies directory for the Telemetry System Web Extension.

  // '--test-child-process',
  //	When running certain tests that spawn child processes, this switch indicates to the test framework that the current process is a child process.

  // '--test-do-not-initialize-icu',
  //	When running certain tests that spawn child processes, this switch indicates to the test framework that the current process should not initialize ICU to avoid creating any scoped handles too early in startup.

  // '--test-encryption-migration-ui',
  //	Enables testing for encryption migration UI.

  // '--test-gl-lib',
  //	Flag used for Linux tests: for desktop GL bindings, try to load this GL library first, but fall back to regular library if loading fails.

  // '--test-logging-path',
  //	Set a path to save logs in while testing.

  // '--test-logging-url',
  //	Set a test logging URL, where logs will be uploaded.

  // '--test-name',
  //	Passes the name of the current running automated test to Chrome.

  // '--test-type',
  //	Type of the current test harness ("browser" or "ui" or "gpu").

  // '--test-wallpaper-server',
  //	Enables the wallpaper picker to fetch images from the test server.

  // '--testing',
  //	Flag set during testing and stored as a crash key, to differentiate from crashes received from actual users. WARNING: this switch is used by internal test systems. Be careful when making changes.

  // '--tether-host-scans-ignore-wired-connections',
  //	Tells the Chromebook to scan for a tethering host even if there is already a wired connection. This allows end-to-end tests to be deployed over ethernet without that connection preventing scans and thereby blocking the testing of cases with no preexisting connection. Should be used only for testing.

  // '--tether-stub',
  //	Overrides Tether with stub service. Provide integer arguments for the number of fake networks desired, e.g. 'tether-stub=2'.

  // '--third-party-doodle-url',
  //	Overrides the Doodle URL to use for third-party search engines. Testing? Try: https://www.gstatic.com/chrome/ntp/doodle_test/third_party_simple.json https://www.gstatic.com/chrome/ntp/doodle_test/third_party_animated.json

  // '--time-before-onboarding-survey-in-seconds-for-testing',
  //	Used for overriding the required user activity time before running the onboarding survey.

  // '--time-ticks-at-unix-epoch',
  //	Accepts a number representing the time-ticks value at the Unix epoch. Since different processes can produce a different value for this due to system clock changes, this allows synchronizing them to a single value.

  // '--time-zone-for-testing',
  //	The time zone to use for testing. Passed to renderers and plugins on startup.

  // '--timeout',
  //	Issues a stop after the specified number of milliseconds. This cancels all navigation and causes the DOMContentLoaded event to fire.

  // '--tint-composited-content',
  //	Tint composited color.

  // '--tint-composited-content-modulate',
  //	Modulates the debug compositor tint color so that damage and page flip updates are made clearly visible. This feature was useful in determining the root cause of https://b.corp.google.com/issues/183260320 . The tinting flag "tint-composited-content" must also be enabled for this flag to used.

  // '--tls1.2',
  //	TLS 1.2 mode for |kSSLVersionMax| and |kSSLVersionMin| switches.

  // '--tls1.3',
  //	TLS 1.3 mode for |kSSLVersionMax| and |kSSLVersionMin| switches.

  // '--top-chrome-touch-ui',
  //	Controls touch-optimized UI layout for top chrome.

  // '--top-controls-hide-threshold',
  //	Percentage of the browser controls need to be hidden before they will auto hide.

  // '--top-controls-show-threshold',
  //	Percentage of the browser controls need to be shown before they will auto show.

  // '--touch-devices',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	Tells chrome to interpret events from these devices as touch events. Only available with XInput 2 (i.e. X server 1.8 or above). The id's of the devices can be retrieved from 'xinput list'.

  // '--touch-events',
  //	Enable support for touch event feature detection.

  // '--touch-selection-strategy',
  //	Controls how text selection granularity changes when touch text selection handles are dragged. Should be "character" or "direction". If not specified, the platform default is used.

  // '--touch-slop-distance',
  //	Overrides touch slop distance for gesture detection. The touch slop distance is the maximum distance from the starting point of a touch sequence that a gesture can travel before it can no longer be considered a tap. Scroll gestures can only begin after this distance has been travelled. The switch value is a floating point number that is interpreted as a distance in pixels.

  // '--touchscreen-usable-while-screen-off',
  //	Chromebases' touchscreens can be used to wake from suspend, unlike the touchscreens on other Chrome OS devices. If set, the touchscreen is kept enabled while the screen is off so that it can be used to turn the screen back on after it has been turned off for inactivity but before the system has suspended.

  // '--touch_view',
  //	No description

  // '--tpm-is-dynamic',
  //	Enables TPM selection in runtime.

  // '--trace-config-file',
  //	Causes TRACE_EVENT flags to be recorded from startup. This flag will be ignored if --trace-startup or --trace-shutdown is provided.

  // '--trace-smb-size',
  //	Configures the size of the shared memory buffer used for tracing. Value is provided in kB. Defaults to 4096. Should be a multiple of the SMB page size (currently 32kB on Desktop or 4kB on Android).

  // '--trace-startup',
  //	Causes TRACE_EVENT flags to be recorded from startup. Optionally, can specify the specific trace categories to include (e.g. --trace-startup=base,net) otherwise, all events are recorded. Setting this flag results in the first call to BeginTracing() to receive all trace events since startup. Historically, --trace-startup was used for browser startup profiling and --enable-tracing was used for browsertest tracing. Now they are share the same implementation, but both are still supported to avoid disrupting existing workflows. The only difference between them is the default duration (5 seconds for trace-startup, unlimited for enable-tracing). If both are specified, 'trace-startup' takes precedence. In Chrome, you may find --trace-startup-file and --trace-startup-duration to control the auto-saving of the trace (not supported in the base-only TraceLog component).

  // '--trace-startup-duration',
  //	Sets the time in seconds until startup tracing ends. If omitted: - if --trace-startup is specified, a default of 5 seconds is used. - if --enable-tracing is specified, tracing lasts until the browser is closed. Has no effect otherwise.

  // '--trace-startup-enable-privacy-filtering',
  //	If the perfetto tracing backend is used, this enables privacy filtering in the TraceEvent data sources for the startup tracing session.

  // '--trace-startup-file',
  //	If supplied, sets the file which startup tracing will be stored into, if omitted the default will be used "chrometrace.log" in the current directory. Has no effect unless --trace-startup is also supplied. Example: --trace-startup --trace-startup-file=/tmp/trace_event.log As a special case, can be set to 'none' - this disables automatically saving the result to a file and the first manually recorded trace will then receive all events since startup.

  // '--trace-startup-format',
  //	Sets the output format for the trace, valid values are "json" and "proto". If not set, the current default is "proto". "proto", unlike json, supports writing the trace into the output file incrementally and is more likely to retain more data if the browser process unexpectedly terminates. Ignored if "trace-startup-owner" is not "controller".

  // '--trace-startup-owner',
  //	Specifies the coordinator of the startup tracing session. If the legacy tracing backend is used instead of perfetto, providing this flag is not necessary. Valid values: 'controller', 'devtools', or 'system'. Defaults to 'controller'. If 'controller' is specified, the session is controlled and stopped via the TracingController (e.g. to implement the timeout). If 'devtools' is specified, the startup tracing session will be owned by DevTools and thus can be controlled (i.e. stopped) via the DevTools Tracing domain on the first session connected to the browser endpoint. If 'system' is specified, the system Perfetto service should already be tracing on a supported platform (currently only Android). Session is stopped through the normal methods for stopping system traces.

  // '--trace-startup-record-mode',
  //	If supplied, sets the tracing record mode and options; otherwise, the default "record-until-full" mode will be used.

  // '--trace-to-console',
  //	Sends a pretty-printed version of tracing info to the console.

  // '--trace-to-file',
  //	Sends trace events from these categories to a file. --trace-to-file on its own sends to default categories.

  // '--trace-to-file-name',
  //	Specifies the file name for --trace-to-file. If unspecified, it will go to a default file name.

  // '--translate-ranker-model-url',
  //	Overrides the URL from which the translate ranker model is downloaded.

  // '--translate-script-url',
  //	Overrides the default server used for Google Translate.

  // '--translate-security-origin',
  //	Overrides security-origin with which Translate runs in an isolated world.

  // '--true',
  //	Value indicating whether flag from command line switch is true.

  // '--trustable-web-bundles-file-url',
  //	Accepts specified file URL of a trustable WebBundle file. This flag should be used only for testing purpose.

  // '--trusted-download-sources',
  //	Identifies a list of download sources as trusted, but only if proper group policy is set.

  // '--try-chrome-again',
  //	Experimental. Shows a dialog asking the user to try chrome. This flag is to be used only by the upgrade process.

  // '--try-supported-channel-layouts',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Instead of always using the hardware channel layout, check if a driver supports the source channel layout. Avoids outputting empty channels and permits drivers to enable stereo to multichannel expansion. Kept behind a flag since some drivers lie about supported layouts and hang when used. See http://crbug.com/259165 for more details.

  // '--tts',
  // (The constant BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	No description

  // '--type',
  //	Flags spied upon from other layers.

  // '--ui-disable-partial-swap',
  //	Disable partial swap which is needed for some OpenGL drivers / emulators.

  // '--ui-disable-zero-copy',
  //	No description

  // '--ui-enable-layer-lists',
  //	Switches the ui compositor to use layer lists instead of layer trees.

  // '--ui-enable-rgba-4444-textures',
  //	No description

  // '--ui-enable-zero-copy',
  //	No description

  // '--ui-show-composited-layer-borders',
  //	No description

  // '--ui-show-fps-counter',
  //	No description

  // '--ui-show-layer-animation-bounds',
  //	No description

  // '--ui-show-paint-rects',
  //	No description

  // '--ui-show-property-changed-rects',
  //	No description

  // '--ui-show-screenspace-rects',
  //	No description

  // '--ui-show-surface-damage-rects',
  //	No description

  // '--ui-slow-animations',
  //	No description

  // '--ukm-server-url',
  //	Overrides the URL of the server that UKM reports are uploaded to. This can only be used in debug builds.

  // '--uma-insecure-server-url',
  //	Overrides the URL of the server that UMA reports are uploaded to when the connection to the default secure URL fails (see |kUmaServerUrl|). This can only be used in debug builds.

  // '--uma-server-url',
  //	Overrides the URL of the server that UMA reports are uploaded to. This can only be used in debug builds.

  // '--unfiltered-bluetooth-devices',
  //	Shows all Bluetooth devices in UI (System Tray/Settings Page.)

  // '--uninstall',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Runs un-installation steps that were done by chrome first-run.

  // '--uninstall-app-id',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Specifies that the WebApp with the specified id should be uninstalled.

  // '--unlimited-storage',
  //	Overrides per-origin quota settings to unlimited storage for any apps/origins. This should be used only for testing purpose.

  // '--unsafely-allow-protected-media-identifier-for-domain',
  //	For automated testing of protected content, this switch allows specific domains (e.g. example.com) to always allow the permission to share the protected media identifier. In this context, domain does not include the port number. User's content settings will not be affected by enabling this switch. Reference: http://crbug.com/718608 Example: --unsafely-allow-protected-media-identifier-for-domain=a.com,b.ca

  // '--unsafely-treat-insecure-origin-as-secure',
  //	Treat given (insecure) origins as secure origins. Multiple origins can be supplied as a comma-separated list. For the definition of secure contexts, see https://w3c.github.io/webappsec-secure-contexts/ and https://www.w3.org/TR/powerful-features/#is-origin-trustworthy Example: --unsafely-treat-insecure-origin-as-secure=http://a.test,http://b.test

  // '--upload-log-file',
  //	Specifies the full path to a protocol buffer log file to be uploaded.

  // '--url_forwarder_configurator',
  //	No description

  // '--use-adapter-luid',
  //	Initialize the GPU process using the adapter with the specified LUID. This is only used on Windows, as LUID is a Windows specific structure.

  // '--use-angle',
  //	Select which ANGLE backend to use. Options are: default: Attempts several ANGLE renderers until one successfully initializes, varying ES support by platform. d3d9: Legacy D3D9 renderer, ES2 only. d3d11: D3D11 renderer, ES2 and ES3. warp: D3D11 renderer using software rasterization, ES2 and ES3. gl: Desktop GL renderer, ES2 and ES3. gles: GLES renderer, ES2 and ES3.

  // '--use-cast-browser-pref-config',
  //	Rather than share a common pref config file with cast_service, use a dedicated browser pref config file. This must be set when `cast_browser` is running in a different process from `cast_service`.

  // '--use-cmd-decoder',
  //	Use the Pass-through command decoder, skipping all validation and state tracking. Switch lives in ui/gl because it affects the GL binding initialization on platforms that would otherwise not default to using EGL bindings.

  // '--use-cras',
  // (The constant USE_CRAS must be defined.)
  //	Use CRAS, the ChromeOS audio server.

  // '--use-crash-handler-in-tests',
  //	If present, the test harness will use the crash reporter.

  // '--use-crash-handler-with-id',
  //	Specifies the IPC pipe name of the crash handler to use (instead of starting a new crash handler process).

  // '--use-fake-codec-for-peer-connection',
  //	Replaces the existing codecs supported in peer connection with a single fake codec entry that create a fake video encoder and decoder.

  // '--use-fake-device-for-media-stream',
  //	Use fake device for Media Stream to replace actual camera and microphone. For the list of allowed parameters, see FakeVideoCaptureDeviceFactory::ParseFakeDevicesConfigFromOptionsString().

  // '--use-fake-mjpeg-decode-accelerator',
  //	Use a fake device for accelerated decoding of MJPEG. This allows, for example, testing of the communication to the GPU service without requiring actual accelerator hardware to be present.

  // '--use-fake-ui-for-fedcm',
  //	Bypass the FedCM account selection dialog. If a value is provided for this switch, that account ID is selected, otherwise the first account is chosen.

  // '--use-fake-ui-for-media-stream',
  //	Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC). Works with --use-fake-device-for-media-stream.

  // '--use-file-for-fake-audio-capture',
  //	Play a .wav file as the microphone. Note that for WebRTC calls we'll treat the bits as if they came from the microphone, which means you should disable audio processing (lest your audio file will play back distorted). The input file is converted to suit Chrome's audio buses if necessary, so most sane .wav files should work. You can pass either <path> to play the file looping or <path>%noloop to stop after playing the file to completion.

  // '--use-file-for-fake-video-capture',
  //	Use an .y4m file to play as the webcam. See the comments in media/capture/video/file_video_capture_device.h for more details.

  // '--use-first-display-as-internal',
  //	Uses the 1st display in --ash-host-window-bounds as internal display. This is for debugging on linux desktop.

  // '--use-first-party-set',
  //	Allows the manual specification of a First-Party Set, as a comma-separated list of origins. The first origin in the list is treated as the owner of the set.

  // '--use-gl',
  //	Select which implementation of GL the GPU process should use. Options are: desktop: whatever desktop OpenGL the user has installed (Linux and Mac default). egl: whatever EGL / GLES2 the user has installed (Windows default - actually ANGLE). swiftshader: The SwiftShader software renderer.

  // '--use-gpu-high-thread-priority-for-perf-tests',
  //	Changes the type (to kRealtimeAudio) of gpu process and compositor thread. This is only to be used for perf tests on macOS for more reliable values.

  // '--use-gpu-in-tests',
  //	Use hardware gpu, if available, for tests.

  // '--use-heap-profiling-proto-writer',
  //	No description

  // '--use-legacy-metrics-service',
  // (The constant BUILDFLAG(ENABLE_CAST_RECEIVER) must be defined.)
  //	No description

  // '--use-memory-tracking-json-writer',
  //	No description

  // '--use-mobile-user-agent',
  //	Set when Chromium should use a mobile user agent.

  // '--use-mock-cert-verifier-for-testing',
  //	Use the MockCertVerifier. This only works in test code.

  // '--use-mock-keychain',
  // (The constant BUILDFLAG(IS_APPLE) must be defined.)
  //	No description

  // '--use-myfiles-in-user-data-dir-for-testing',
  //	Flag that stored MyFiles folder inside the user data directory. $HOME/Downloads is used as MyFiles folder for ease access to local files for debugging when running on Linux. By setting this flag, <cryptohome>/MyFiles is used even on Linux.

  // '--use-overlays-for-video',
  // (The constant BUILDFLAG(IS_FUCHSIA) must be defined.)
  //	Present video content as overlays.

  // '--use-system-clipboard',
  //	Enables the ozone x11 clipboard for linux-chromeos.

  // '--use-system-default-printer',
  // (The constants !BUILDFLAG(IS_ANDROID) and !BUILDFLAG(IS_CHROMEOS_ASH) must not be defined.)
  //	Uses the system default printer as the initially selected destination in print preview, instead of the most recently used destination.

  // '--use-system-proxy-resolver',
  //	Uses WinHttp to resolve proxies instead of using Chromium's normal proxy resolution logic. This is only supported in Windows. TODO(https://crbug.com/1032820): Only use WinHttp whenever Chrome is exclusively using system proxy configs.

  // '--use-temp-registry-path',
  //	Override the registry with the specified temporary registry. Used for tests.

  // '--use-va-dev-keys',
  //	No description

  // '--use-vulkan',
  //	Enable Vulkan support and select Vulkan implementation, must also have ENABLE_VULKAN defined. This only initializes Vulkan, the flag --enable-features=Vulkan must also be used to select Vulkan for compositing and rasterization.

  // '--use-wayland-explicit-grab',
  //	Use explicit grab when opening popup windows. See https://crbug.com/1220274

  // '--user-agent',
  //	A string used to override the default user agent with a custom one.

  // '--user-agent-product',
  //	No description

  // '--user-data-dir',
  //	Directory where the browser stores the user profile. Note that if this switch is added, the session will no longer be Incognito, unless Incognito mode is forced with --incognito switch.

  // '--user-data-migrated',
  // (The constant BUILDFLAG(ENABLE_DOWNGRADE_PROCESSING) must be defined.)
  //	Indicates that this process is the product of a relaunch following migration of User Data.

  // '--user-gesture-required',
  //	Autoplay policy to require a user gesture in order to play.

  // '--user-response-timeout',
  //	Set the timeout for how long to wait for user response from Chrome, in minutes. 0 disables the timeout entirely.

  // '--utility',
  //	No description

  // '--utility-and-browser',
  //	No description

  // '--utility-cmd-prefix',
  //	The contents of this flag are prepended to the utility process command line. Useful values might be "valgrind" or "xterm -e gdb --args".

  // '--utility-sampling',
  //	No description

  // '--utility-startup-dialog',
  //	Causes the utility process to display a dialog on launch.

  // '--utility-sub-type',
  //	This switch indicates the type of a utility process. It does not affect the services offered by the process, but is added to the command line for debugging and profiling purposes.

  // '--v',
  //	Gives the default maximal active V-logging level; 0 is the default. Normally positive values are used for V-logging levels.

  // '--v8-cache-options',
  //	Set options to cache V8 data. (none, code, or default)

  // '--validate-crx',
  //	Examines a .crx for validity and prints the result.

  // '--validate-input-event-stream',
  //	In debug builds, asserts that the stream of input events is valid.

  // '--validating',
  //	The command decoder names that can be passed to --use-cmd-decoder.

  // '--variations-insecure-server-url',
  //	Specifies a custom URL for the server to use as an insecure fallback when requests to |kVariationsServerURL| fail. Requests to this URL will be encrypted.

  // '--variations-override-country',
  //	Allows overriding the country used for evaluating variations. This is similar to the "Override Variations Country" entry on chrome://translate-internals, but is exposed as a command-line flag to allow testing First Run scenarios. Additionally, unlike chrome://translate-internals, the value isn't persisted across sessions.

  // '--variations-seed-fetch-interval',
  //	Override the time interval between each variation seed fetches. Unit is in minutes. The minimum is 1 minute. The default is 30 minutes.

  // '--variations-server-url',
  //	Specifies a custom URL for the server which reports variation data to the client. Specifying this switch enables the Variations service on unofficial builds. See variations_service.cc.

  // '--variations-test-seed-path',
  //	Specifies the location of a seed file for Local State's seed to be populated from. The seed file must be in json format with the keys |kVariationsCompressedSeed| and |kVariationsSeedSignature|.

  // '--verbose-logging-in-nacl',
  //	Sets NACLVERBOSITY to enable verbose logging. This should match the string used in chrome/browser/about_flags.cc

  // '--version',
  //	No description

  // '--video-capture-use-gpu-memory-buffer',
  //	Enables GpuMemoryBuffer-based buffer pool.

  // '--video-image-texture-target',
  //	Texture target for CHROMIUM_image backed video frame textures.

  // '--video-threads',
  //	Set number of threads to use for video decoding.

  // '--video-tutorials-instant-fetch',
  //	No description

  // '--video-underflow-threshold-ms',
  //	Allows clients to override the threshold for when the media renderer will declare the underflow state for the video stream when audio is present. TODO(dalecurtis): Remove once experiments for http://crbug.com/470940 finish.

  // '--video_capture',
  //	No description

  // '--view-stack-traces',
  //	Captures stack traces on View construction to provide better debug info.

  // '--virtual-time-budget',
  //	If set the system waits the specified number of virtual milliseconds before deeming the page to be ready. For determinism virtual time does not advance while there are pending network fetches (i.e no timers will fire). Once all network fetches have completed, timers fire and if the system runs out of virtual time is fastforwarded so the next timer fires immediately, until the specified virtual time budget is exhausted.

  // '--vmodule',
  //	Gives the per-module maximal V-logging levels to override the value given by --v. E.g. "my_module=2,foo*=3" would change the logging level for all code in source files "my_module.*" and "foo*.*" ("-inl" suffixes are also disregarded for this matching). Any pattern containing a forward or backward slash will be tested against the whole pathname and not just the module. E.g., "*/foo/bar/*=2" would change the logging level for all code in source files under a "foo/bar" directory.

  // '--vsync-interval',
  //	Overrides the vsync interval used by the GPU process to refresh the display.

  // '--vulkan',
  //	No description

  // '--vulkan-heap-memory-limit-mb',
  //	Specifies the heap limit for Vulkan memory. TODO(crbug/1158000): Remove this switch.

  // '--vulkan-null',
  //	No description

  // '--vulkan-sync-cpu-memory-limit-mb',
  //	Specifies the sync CPU limit for total Vulkan memory. TODO(crbug/1158000): Remove this switch.

  // '--wait-for-debugger',
  //	Will wait for 60 seconds for a debugger to come to attach to the process.

  // '--wait-for-debugger-children',
  //	Will add kWaitForDebugger to every child processes. If a value is passed, it will be used as a filter to determine if the child process should have the kWaitForDebugger flag passed on or not.

  // '--wait-for-debugger-on-navigation',
  //	On every navigation a message with the renderer's URL will be logged and the renderer will wait for a debugger to be attached or SIGUSR1 to be sent to continue execution.

  // '--wait-for-debugger-webui',
  //	Flag used by WebUI test runners to wait for debugger to be attached.

  // '--wait-for-initial-policy-fetch-for-test',
  //	Used to tell the policy infrastructure to not let profile initialization complete until policy is manually set by a test. This is used to provide backward compatibility with a few tests that incorrectly use the synchronously-initialized login profile to run their tests - do not add new uses of this flag.

  // '--wallet-service-use-sandbox',
  //	Use the sandbox Online Wallet service URL (for developer testing).

  // '--waveout-buffers',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	Number of buffers to use for WaveOut.

  // '--web-otp-backend',
  //	Enables specified backend for the Web OTP API.

  // '--web-otp-backend-auto',
  //	Enables auto backend selection for Web OTP API.

  // '--web-otp-backend-sms-verification',
  //	Enables Sms Verification backend for Web OTP API which requires app hash in SMS body.

  // '--web-otp-backend-user-consent',
  //	Enables User Consent backend for Web OTP API.

  // '--web-sql-access',
  //	Controls whether WebSQL is force enabled.

  // '--web-sql-non-secure-context-enabled',
  //	Controls whether WebSQL for non-secure context is force enabled.

  // '--web-ui-data-source-path-for-testing',
  //	If provided, any webui will be loaded from <flag value>/<handler_name>, where handler_name is the name passed to MaybeConfigureTestableDataSource, if the file exists. For example, if the flag is /tmp/resource_overrides, attempting to load js/app_main.js from the data source named "help_app/untrusted" will first attempt to load from /tmp/resource_overrides/help_app/untrusted/js/main.js.

  // '--webapk-server-url',
  // (The constants BUILDFLAG(IS_ANDROID) and BUILDFLAG(IS_CHROMEOS_ASH) must be defined.)
  //	Custom WebAPK server URL for the sake of testing.

  // '--webauthn-permit-enterprise-attestation',
  //	No description

  // '--webauthn-remote-desktop-support',
  //	Allows trusted remote desktop clients to make WebAuthn requests on behalf of other origins. This switch only controls availability of the `remoteDesktopClientOverride` extension but doesn't by itself enable any origin to use it.

  // '--webauthn-remote-proxied-requests-allowed-additional-origin',
  //	No description

  // '--webengine-user-data-dir',
  //	Makes WebEngine Shell use the given path for its data directory. NOTE: If changing this value, change the corresponding Java-side value in WebLayerBrowserTestsActivity.java#getUserDataDirectoryCommandLineSwitch() to match.

  // '--webgl-antialiasing-mode',
  //	Set the antialiasing method used for webgl. (none, explicit, implicit)

  // '--webgl-msaa-sample-count',
  //	Set a default sample count for webgl if msaa is enabled.

  // '--webrtc-event-log-proactive-pruning-delta',
  //	Sets the delay (in seconds) between proactive prunings of remote-bound WebRTC event logs which are pending upload. All positive values are legal. All negative values are illegal, and ignored. If set to 0, the meaning is "no proactive pruning".

  // '--webrtc-event-log-upload-delay-ms',
  //	WebRTC event logs will only be uploaded if the conditions hold for this many milliseconds.

  // '--webrtc-event-log-upload-no-suppression',
  //	Normally, remote-bound WebRTC event logs are uploaded only when no peer connections are active. With this flag, the upload is never suppressed.

  // '--webrtc-event-logging',
  //	Enable capture and local storage of WebRTC event logs without visiting chrome://webrtc-internals. This is useful for automated testing. It accepts the path to which the local logs would be stored. Disabling is not possible without restarting the browser and relaunching without this flag.

  // '--webrtc-ip-handling-policy',
  //	Override WebRTC IP handling policy to mimic the behavior when WebRTC IP handling policy is specified in Preferences.

  // '--webrtc-max-cpu-consumption-percentage',
  //	Configure the maximum CPU time percentage of a single core that can be consumed for desktop capturing. Default is 50. Set 100 to disable the throttling of the capture.

  // '--webview-disable-app-recovery',
  //	Disables WebView from checking for app recovery mitigations.

  // '--webview-disable-package-allowlist-throttling',
  //	Disables throttling querying apps package names allowlist components in WebView clients.

  // '--webview-disable-safebrowsing-support',
  //	used to disable safebrowsing functionality in webview

  // '--webview-draw-functor-uses-vulkan',
  //	Indicate that the this is being used by Android WebView and its draw functor is using vulkan.

  // '--webview-enable-app-recovery',
  //	Enables WebView to check for app recovery mitigations.

  // '--webview-enable-modern-cookie-same-site',
  //	Enables modern SameSite cookie behavior (as opposed to legacy behavior). This is used for WebView versions prior to when the modern behavior will be enabled by default. This enables the same-site-by-default-cookies, cookies-without-SameSite-must-be-secure, and schemeful-same-site features.

  // '--webview-log-js-console-messages',
  //	No description

  // '--webview-mparch-fenced-frames',
  //	Enables MPArch-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI.

  // '--webview-safebrowsing-block-all-resources',
  //	Enables SafeBrowsing and causes WebView to treat all resources as malicious. Use care: this will block all resources from loading.

  // '--webview-sandboxed-renderer',
  //	No description

  // '--webview-selective-image-inversion-darkening',
  //	Enables use selective image inversion to automatically darken page, it will be used when WebView is in dark mode, but website doesn't provide dark style.

  // '--webview-shadow-dom-fenced-frames',
  //	Enables ShadowDOM-based FencedFrames. This also implies PrivacySandboxAdsAPIsOverride and SharedStorageAPI.

  // '--webview-verbose-logging',
  //	WebView will log additional debugging information to logcat, such as variations and commandline state.

  // '--whitelisted-extension-id',
  //	Provides the same functionality as kAllowlistedExtensionID. TODO(b/204179234): Remove at the end of the deprecation period. Deprecated on 10/2021.

  // '--win-jumplist-action',
  //	Specifies which category option was clicked in the Windows Jumplist that resulted in a browser startup.

  // '--window-position',
  //	Specify the initial window position: --window-position=x,y

  // '--window-size',
  //	Sets the initial window size. Provided as string in the format "800,600".

  // '--window-workspace',
  //	Specify the initial window workspace: --window-workspace=id

  // '--windows-mixed-reality',
  //	No description

  // '--winhttp-proxy-resolver',
  //	Uses WinHTTP to fetch and evaluate PAC scripts. Otherwise the default is to use Chromium's network stack to fetch, and V8 to evaluate.

  // '--with-cleanup-mode-logs',
  //	Identify that the elevated cleaner process is allowed to collect logs. This shouldn't be set if |kExecutionModeSwitch| is not ExecutionMode::kCleaner.

  // '--wm-window-animations-disabled',
  //	If present animations are disabled.

  // '--xr_compositing',
  // (The constant BUILDFLAG(IS_WIN) must be defined.)
  //	No description

  // '--xsession_chooser',
  // (The constants BUILDFLAG(IS_CHROMEOS) and BUILDFLAG(IS_LINUX) must be defined.)
  //	No description

  // '--yuy2',
  //	No description

  // '--zygote',
  //	No description
];
