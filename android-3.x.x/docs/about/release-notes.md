# JW SDK for Android Release Notes

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

##### Major Version Releases
* [Version 3.5.0 (Mar 14, 2019)](#3-5-0)
* [Version 3.4.0 (Jan 03, 2019)](#3-4-0)
* [Version 3.3.0 (Nov 29, 2018)](#3-3-0)
* [Version 3.2.0 (Sep 07, 2018)](#3-2-0)
* [Version 3.1.0 (Jul 22, 2018)](#3-1-0)
* [Version 3.0.0 (Jun 18, 2018)](#3-0-0)
* [Version 2.9.0 (May 29, 2018)](#2-9-0)
* [Version 2.8.0 (Feb 22, 2018)](#2-8-0)
* [Version 2.7.0 (Feb 23, 2017)](#2-7-0)
* [Version 2.6.0 (Dec 09, 2016)](#2-6-0)
* [Version 2.5.0 (Sep 14, 2016)](#2-5-0)
* [Version 2.4.0 (Jun 29, 2016)](#2-4-0)
* [Version 2.3.0 (Jun 20, 2016)](#2-3-0)
* [Version 2.2.0 (Apr 08, 2016)](#2-2-0)
* [Version 2.1.0 (Feb 01, 2016)](#2-1-0)
* [Version 2.0.135 (Dec 16, 2015)](#2-0-135)
* [Version 2.0.131 (Dec 03, 2015)](#2-0-131)
* [Version 2.0.129 (Nov 17, 2015)](#2-0-129)
* [Version 1.x](#1-x) 

<a name="3-5-1"></a>
## Version 3.5.1 (April 29, 2019)
### Updates
* Added a new "Experimental API" class that enables the registration of video controls that overlay the media element. Typically, these video controls are considered obstructions and reduce the viewability rate calculated by the Open Measurement SDK. Learn more about Google IMA’s Open Measurement SDK integration and how to register video controls overlay obstructions [here](https://developers.google.com/interactive-media-ads/docs/sdks/android/omsdk).
* Improved JW Player expired license user experience by adding an error message notification and halting player setup or playback
* Added `onWarning` callback for non-fatal error debugging or troubleshooting purposes.

### Fixes
* Fixed issue where video content restarts from the beginning after ad playback if two midrolls are scheduled for the same time position.
* Fixed issue where video is shortly displayed before IMA VMAP preroll in playlist.
* Fixed issue where Google IMA ads play with sound when the [advertising](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising) player configuration is set to mute.
* Fixed issue where the app crashes if related items file is not found.

_Chromecast_
* Fixed issue where players with Chromecast buttons using `Fragments` lose connection to a casting session.
* Fixed issue where the title and image are not available for playlists with related videos during a casting session.
* Fixed issue where the parent video is casted when the user selects a related video.
* Fixed issue where audio plays on the sender app when the casting session starts and a VAST or Freewheel ad is already in progress.

### Known Issue
* Intermittently Freewheel pre-roll VPAID ads continue to load after ad completion and prevent video playback to start. This issue will be fixed in the next Android release. 

<a name="3-5-0"></a>
## Version 3.5.0 (Build 70 - Mar 14, 2019)
### Enhancements
* Upgraded SDK to use JW Player [8.7.3](https://developer.jwplayer.com/release-notes/jw-player/?id=14373250)
* Upgraded to [Google IMA version 3.10.6](https://developers.google.com/interactive-media-ads/docs/sdks/android/v3/history)which includes IAB’s Open Measurement SDK that enables third-party viewability and verification measurement for ads served to mobile and desktop environments.
* Migrated the Chromecast implementation to the latest Google Cast library (version 16.1.2). Please refer to the [Chromecast documentation](https://developer.jwplayer.com/sdk/android/docs/developer-guide/chromecast/enable-casting-to-chromecast-devices/) for implementation details.

### Bug fixes
* Fixed an issue where some VPAID ads continue playing in background after having been skipped
* Fixed an issue where spinner shows during content playback after VPAID ad
* Fixed issue where player controls do not automatically hide during video playback if user clicks the pause button and then the play button after the completion of a VPAID ad
* Fixed an issue where `onAdComplete` event does not fire for FreeWheel VPAID ads
* Fixed an issue where `onPause` event does not fire on Android 5.1 if playback is interrupted by external actions such as phone call
* Fixed an issue where a playlist with IMA VMAP would not switch to next items automatically
* Fixed issue that prevents localized error messages
* Fixed an issue where `onAdRequest` does not fire for the first ad instance starting from the second ad pod or when inline IMA VMAP ads are used
* Fixed an issue where ad instances within one ad pod are missing controls when configured using IMA VMAP
* Fixed an issue where only one `onAdRequest` fires for an IMA VMAP ad pod with multiple instances
* Fixed an issue where the replay button shows before IMA VMAP post-roll
* Fixed an issue where FreeWheel ad with relative offset plays as a pre-roll for the second playlist item or after video replay
* Fixed an issue where `AdRequestEvent` does not have an `offset` parameter when ad is manually requested during video playback
* Fixed an issue where callbacks fire only for the first ad instance in an ad pod
 
<a name="3-4-3"></a>
## Version 3.4.3 (Build 69 - Feb 11, 2019)
### Bug fixes
* Fixed an issue where the player buffers infinitely if there is an ad error received for IMA pre-roll

<a name="3-4-2"></a>
## Version 3.4.2 (Build 68 - Jan 22, 2019)
### Enhancements
* Added support for Developer license

<a name="3-4-1"></a>
## Version 3.4.1 (Build 67 - Jan 08, 2019)
### Bug Fixes
* Fixed an issue where the player would not enter fullscreen mode, if a device has Chrome 71+

<a name="3-4-0"></a>
## Version 3.4.0 (Build 66 - Jan 03, 2019)
### Bug Fixes
* Fixed an issue where IMA pre-roll is delayed on the second playlist item
* Fixed an issue where some VPAID ads show a white screen instead of ad content
* Fixed an issue where casting is unstable in some cases
* Fixed an issue where the player autostarts when `onPause()` lifecycle event is called
* Fixed an issue where the player shows the first frame of a content before IMA VMAP pre-roll.
* Fixed an issue where forced switching playlist items with VAST mid-rolls causes playlist items to be missed
* Fixed an issue where the app crashes with casting is stopped
* Fixed an issue where wrong captions are shown during casting
* Fixed an issue where the player buffers infinitely if a non-buffered MP4 stream with configured FreeWheel pre-roll starts playing
* Fixed an issue where player background is draggable as a result of a long press on it
* Fixed an issue where no controls are present to switch on/off 608 captions
* Fixed an issue where playback starts from the very beginning if seek action occurred for paused video with IMA preroll
* Fixed an issue where 'xx' in custom message for FreeWheel ad is not replaced with countdown
* Fixed an issue where the CC button appears on the first player setup when a stream has no captions defined
* Fixed an issue where VAST ad with built-in skip offset can be skipped before the end of countdown
* Fixed an issue where the player cannot detect when video has captions in the manifest
* Fixed an issue where the IMA ad request disrupts video playback
* Fixed an issue where IMA VMAP with bad tag (invalid video url) breaks playback
* Fixed an issue where the player would report a positive duration in case of DVR streams
* Fixed an issue where the player's UI shifts up in case of connectivity issue
* Fixed an issue where clicking through VAST ad before its full loading makes player work in background
* Fixed an issue where VAST VMAP has no mid-roll ad points on seek bar
* Fixed an issue where video with configured FreeWheel ad cannot be played for the second time.

### Features
* Upgraded SDK to use JW Player 8.6.3
* Changed base protocol to `https://` to improve security of the SDK. Please ensure that your content and ads are delivered through HTTPS.
* Seeked position was added to `onSeeked()` event, so that the actual position can be retrieved 
* Upgraded IMA dependency to 3.9.4

### Enhancements
* The SDK now can be used with multi-window mode. Check [this page](https://developer.jwplayer.com/sdk/android/docs/developer-guide/interaction/multiwindow/) out for more details

<a name="3-3-0"></a>
## Version 3.3.0 (Build 65 - Nov 29, 2018)
### Bug Fixes
* Fixed an issue where the player fails to seek forward if seek performed during IMA ad request
* Fixed an issue where RelatedPluginEvents.OnRelatedCloseListener cannot be imported
* Fixed an issue where IMA preroll causes endless buffering if playback is started before an MP4 video started buffering. 
* Fixed an issue where the player overlaps cue points for IMA mid-rolls with the relative offset for playlists
* Fixed an issue where Ad Duration displays 6## instead of actual data in case of VAST mid-roll
* Fixed an issue where the player crashes if its size is 0 and VPAID ad is loaded
* Fixed an issue where `getDuration()` and `getPosition()` return `-.001` for live streams 
* Fixed an issue where a pre-roll shows incorrect duration in case of using startOnSeek

### Features
* Added the ability to set custom parameters to FreeWheel and IMA ad configurations, so that publishers can target their campaigns better. Please refer to the [FreeWheel](https://developer.jwplayer.com/sdk/android/docs/developer-guide/advertising/freewheel/) and [IMA](https://developer.jwplayer.com/sdk/android/docs/developer-guide/advertising/google-ima/) sections for the examples of usage.
* Added the ability to customize Look-Ahead HLS buffer time. Please refer to [this section](https://developer.jwplayer.com/sdk/android/docs/developer-guide/interaction/exoplayer/) for the example.
* Introduced a separate version of the SDK for Amazon tablets. The ExoPlayer is replaced with its Amazon fork. It can be accessed through Maven. Please refer to the [Amazon section](https://developer.jwplayer.com/sdk/android/docs/developer-guide/getting-started/download-sdk/#gradle) for more details.

<a name="3-2-2"></a>
## Version 3.2.2 (Build 63 - Oct 24, 2018)
### Bug Fixes
* Fixed an issue where closed captions are partially hidden when controls are hidden
* Fixed an issue where certain VPAID 2.0 ads persist until the 3rd playlist item
* Fixed an issue where IMA post-roll ad causes abnormal playlist behavior
* Fixed an issue where mid-roll ad does not play when controls are hidden or set to false
* Fixed an issue where the player fails to seek forward if call to seek happens during IMA ad request

<a name="3-2-1"></a>
## Version 3.2.1 (Build 61 - Sep 19, 2018)
### Bug Fixes
* Fixed an issue where `onErrorListener()` does not invoke after the player stops and idles

<a name="3-2-0"></a>
## Version 3.2.0 (Build 60 - Sep 07, 2018)
### Features
* Added pitch correction for variable rate playback
* Added a toggle that allows developers to place the player either on a SurfaceView or TextureView. For more details please refer to our [developer guide](https://developer.jwplayer.com/sdk/android/docs/developer-guide/interaction/playback/)

### Enhancements
* Updated ExoPlayer to version 2.8.2

### Bug Fixes
* Fixed a potential vulnerability in the SSL Error Handler
* Fixed an issue where captions would not adjust position after the control bar was hidden
* Fixed an issue where IMA mid-roll ad pods would freeze playback after a clickthrough
* Fixed an issue where the player would end playback in 'idle' state instead of 'complete' state
* Fixed an issue where an 'Unknown' caption label would be shown in captions menu
* Fixed an issue where setMute(true) would not work
* Fixed an issue where the player would infer MediaType from the original URL in the case of a 302 redirect
* Fixed an HLS playback issue where STATE_READY wasn't called due to different instances of DefaultBandWidthMeter

<a name="3-1-0"></a>
## Version 3.1.0 (Build 58 - Jul 22, 2018)
### Features
* As another step towards parity between SDK and the web player we have added the ability set up custom playback rates for your media. Please refer to the sample in [this documentation section](https://developer.jwplayer.com/sdk/android/docs/developer-guide/interaction/playback/).

### Bug Fixes
* Fixed some memory leaks
* Fixed an issue where finalize() wouldn't trigger when an IMA ad was skipped
* Fixed an issue where the fullscreen button was missing during FreeWheel ad playback
* Fixed an issue where playback controls would disappear for audio-only streams
* Fixed an issue where the HD menu button would appear even if the stream had one quality level
* Fixed an issue where configuration Livestream + Preroll would return null
* Fixed an issue where playback controls would appear for FreeWheel VPAID ads
* Fixed an issue where onAdTime() would be invoked continuously after an ad was skipped
* Fixed an issue where the "Learn More" button and Ad Message would be delayed six seconds into the ad
* Fixed an issue where live HLS stream would stop because of an error after some time
* Fixed an issue where seek controls were missing for DVR-enabled live streams
* Fixed an issue where ad breaks wouldn't be shown on the seek bar until the first one is played
* Fixed an issue where a clickthrough action would be auto-triggered on Android 4.x devices

<a name="3-0-0"></a>
## Version 3.0.0 (Build 53 - Jun 18, 2018)
We are excited to announce JW Player SDK 3.0 for Android. This release updates the SDK to [JW8](https://www.jwplayer.com/jw8/) and leverages its new UI & UX, optimization, and advertising enhancements to engage your audiences intelligently and monetize your content. In the coming months we will deploy more JW8 features into the JW Player SDKs for iOS & Android, so stay tuned!

Please refer to this important [3.x migration guide for Android](https://developer.jwplayer.com/sdk/android/docs/developer-guide/migration/v3/) to update your current application from version 2.x to 3.x. This guide includes important information about API changes, new features & callbacks, and will help your team with the transition process.

You may use Maven to update to SDK 3.x, or you can download the SDK 3 packages and new 3.x license keys from the Publish -> Tools section of your JW Player Dashboard. Please note that version 3 of the SDKs are available to our Enterprise edition customers, and require new license keys because 2.x license keys will not work.

### Features
* Support for new advertising rules, including timeBetweenAds, startOnSeek, frequency, and startOn. Please refer to our [Ad Rules Reference](https://support.jwplayer.com/articles/ad-rules-reference) for details on how to use them.

<a name="2-9-2"></a>
## Version 2.9.2 (Build 2 - Aug 14, 2018)
### Bug Fixes
* Fixed an issue where MediaType wouldn't be recognized in case of a redirect
* Fixed an issue where the player would freeze due to ad timeout errors from the IMA SDK
* Fixed an issue where the player would sometimes crash when loading the next playlist item
* Fixed an issue where OnAdError wouldn't fire with VMAP ads
* Fixed an issue where VPAID controls were not appearing

<a name="2-9-1"></a>
## Version 2.9.1 (Build 1 - Jun 28, 2018)
### Bug Fixes
* Fixed an issue where the HD menu button would appear even if the stream had one quality level
* Fixed an issue where the fullscreen button was missing during FreeWheel ad playback
* Fixed an issue where playback controls would appear for FreeWheel VPAID ads
* Fixed an issue where playback controls would disappear for audio-only streams
* Fixed an issue where "Live Broadcasting" message was displayed while static video was buffering upon replay
* Fixed an issue where seek controls were missing for DVR-enabled live streams
* Fixed some memory leaks
* Fixed an issue where finalize() wouldn't trigger when an IMA ad was skipped
* Fixed an issue where onAdTime() would be invoked continuously after an ad was skipped
* Fixed an issue where onError() would be erroneously invoked when the player was setting up
* Fixed an issue where the "Learn More" button and Ad Message would be delayed six seconds into the ad
* Fixed an issue where a clickthrough action would be auto-triggered on Android 4.x devices

### Features
* Added an option to enable [cross protocol redirects](https://developer.jwplayer.com/sdk/android/docs/developer-guide/customization/xml-options-and-playerconfig/)

<a name="2-9-0"></a>
## Version 2.9.0 (Build 47 - May 29, 2018)
### Features
* We have integrated support for the FreeWheel ad-serving platform. Configure your FreeWheel Ad Manager settings in our new FreeWheel ad client to serve pre-rolls and mid-rolls with other features such as ad-skip and ad-click. Please refer to the new FreeWheel advertising section in our [developer guide documentation](https://developer.jwplayer.com/sdk/android/docs/developer-guide/advertising/freewheel/) to get started.

<a name="2-8-3"></a>
## Version 2.8.3 (Build 46 - May 19, 2018)
### Bug Fixes
* Fixed an issue where IMA midrolls would play immediately after a preroll

<a name="2-8-2"></a>
## Version 2.8.2 (Build 44 - April 24, 2018)
### Bug Fixes
* Fixed an issue where HLS live streams didn't play if stream type was absent in the URL

<a name="2-8-1"></a>
## Version 2.8.1 (Build 43 - Mar 20, 2018)
### Enhancements
* Updated Google IMA library to version 3.8.2 and Play Services to 11.8.0. Please don't forget to update the dependencies in your project if you import the AAR file directly instead of using Maven.

### Bug Fixes
* Fixed an IMA ad client issue where the app would crash when loading the second playlist item if using a VMAP
* Fixed an issue where calling getPosition() after an ad completed (media resumed), would return the ad position instead of the media position.
* Fixed an issue where the app would crash on devices using API Level 18 and lower
* Fixed an issue that blocked custom headers from being set correctly

<a name="2-8-0"></a>
## Version 2.8.0 (Build 42 - Feb 22, 2018)
### Enhancements
* Updating from ExoPlayer v1 to v2. Please refer to the [Migration Guide](https://developer.jwplayer.com/sdk/android/docs/developer-guide/migration/v2-8/) for details and instructions to update to this version.

<a name="2-7-13"></a>
## Version 2.7.13 (Build 38 - Feb 15, 2018)
### Bug Fixes
* Fixed an issue where the app would crash if exiting the activity during IMA setup
* Fixed a typo in the naming of removeOnAdScheduleListener method. Please update your code accordingly when updating to this version

<a name="2-7-12"></a>
## Version 2.7.12 (Build 37 - Feb 06, 2018)
### Bug Fixes
* Fixed an issue where the two-letter language codes specified in the HLS manifest for audio tracks were not being displayed correctly

<a name="2-7-11"></a>
## Version 2.7.11 (Build 33 - Jan 23, 2018)
### Enhancements
* Added synchronization and improved thread handling when a player is created and destroyed in rapid succession

### Bug Fixes
* Fixed an issue where the app would crash for multitrack live streams

<a name="2-7-10"></a>
## Version 2.7.10 (Build 32 - Jan 09, 2018)
### Bug Fixes
* Fixed an issue where an IMA VMAP ad error would autostart the player

<a name="2-7-9"></a>
## Version 2.7.9 (Build 31 - Dec 11, 2017)
### Bug Fixes
* Fixed an issue where livestream with large DVR windows takes too long to load
* Fixed an issue where setControls would not persist after a call to load()
* Fixed an issue where valid VMAP schedules would block content playback when using Google IMA

<a name="2-7-8"></a>
## Version 2.7.8 (Build 28 - Nov 17, 2017)
### Bug Fixes
* Fixed an issue where navigating from one activity to a new activity (using a different player), then returning back to the first activity would freeze the player
* Fixed an issue where the two letter language code in the manifest of the AudioTrack objects was not being returned
* Fixed an issue where the timeSliderAbove UI of the controlbar would not stay consistent when exiting fullscreen mode
* Fixed an issue where finishing an activity from onSetupError could crash the app. Equivalent to pressing back when the player encountered a setup error
* Fixed an issue where the HD Button was not visible even though multiple sources had been configured
* Fixed an issue where backgrounding the app caused in-manifest captions to appear twice in the caption menu
* Fixed an issue where Quality and AudioTrack selectors would disappear in fullscreen
* Fixed an issue where changing the visual quality from a paused state after device lock could crash the app
* Fixed an issue Where programmatically instantiating another JWPlayerView could break the controls and other Web resources of the first player

<a name="2-7-7"></a>
## Version 2.7.7 (Build 26 - Oct 09, 2017)
### Features
* HTTP Headers can now be updated midstream without reloading the player. Useful for updating expired AES key tokens passed in the HTTP Authorization request header without interrupting AES Encrypted HLS playback
 
### Bug Fixes
* Fixed an issue where the player would hang if the IMA pre-roll was empty 
* Fixed an issue where onAdError would get triggered repeatedly if an IMA mid-roll fails
* Fixed an issue where HTTP Headers were missing from audio chunk requests

<a name="2-7-6"></a>
## Version 2.7.6 (Build 24 - Sep 15, 2017)
### Features
* onAdImpression: now includes click-through URL parameter
 
### Enhancements
* Upgraded SDK to use JW Player 7.12.6
 
### Bug Fixes
* Fixed a regression issue where defaultImpression for VAST did not fire
* Fixed a regression issue with onAdImpression firing in VAST ads

<a name="2-7-5"></a>
## Version 2.7.5 (Build 23 - Jul 21, 2017)
### Enhancements
* Upgraded SDK to use JW Player 7.12.1

### Bug Fixes
* Fixed an issue where setting up the player with IMA ads a number of times consecutively, would eventually cause the player to crash

<a name="2-7-4"></a>
## Version 2.7.4 (Build 22 - Jun 23, 2017)
### Enhancements
* Upgraded SDK to use JW Player 7.11.3

### Bug Fixes
* Fixed an issue where onControlBarVisible callback was not firing when in paused state and display was being toggled
* Fixed an issue where double tapping the player while playing an ad would cause an exception

<a name="2-7-3"></a>
## Version 2.7.3 (Build 19 - May 08, 2017)
### Bug Fixes
* Fixed an issue where quality levels were sometimes available before jwplayer.js was in a playing state resulting in the HD button not appearing
* Fixed an issue where OnControlbarVisibilityChanged fired when the player was in a buffering state
* Fixed an issue where an HLS VOD duration displayed as live following an IMA ad
* Fixed an issue where onAdError was not thrown when loading an ad with 0 duration, resulting in an indefinite loading state
* Fixed an issue where getQualityLevels() and onLevels() callbacks were not consistently returning data
* Fixed an issue where timeSliderAbove was not behaving correctly due to inconsistent casing

<a name="2-7-2"></a>
## Version 2.7.2 (Build 18 - Apr 27, 2017)
### Bug Fixes
* Fixed an issue where playback was broken in Android 4.x devices. OnControlBarVisibilityListener will not be supported at this time on any 4.x Android version that doesn't support MutationObserver.

<a name="2-7-1"></a>
## Version 2.7.1 (Build 16 - Apr 10, 2017)
### Features
* New onAdSchedule callback for the VAST ad client that provides detailed information of a VMAP ad schedule.
 
### Enhancements
* Upgraded SDK to use JW Player 7.10.4
* onAdImpression now includes VMAP ad schedule details
 
### Bug Fixes
* Fixed an issue where VMAP breakstart/breakend callbacks would not fire when no ad source was present
* Fixed an issue where setting autostart to true was not enabling autostart
* Fixed an issue where the first frame of media would play for a split-second before the start of an IMA pre-roll ad
* Fixed an issue where the player would become unresponsive after seeking to the end and letting the media complete.
* Fixed an issue where an improperly formed IMA ad would cause a crash instead of throwing an error.

<a name="2-7-0"></a>
## Version 2.7.0 (Build 15 - Feb 23, 2017)
### New Features
* Added support for "preload" where media is preloaded after the player is setup but before the play button is pressed. This allows JW Player to fetch media information prior to playback and enhances perceived performance by users
* Added onControlBarVisible callback that indicates when the player control bar's visibility changes. Sync your custom UI elements to display & hide with the player control bar
* Added localization of Casting error messages

### Bug Fixes
* Fixed an issue where double-clicking on an ad with a click-through URL would cause a crash

### Enhancements
* Upgraded to Cast Companion Library 2.9.1

<a name="2-6-3"></a>
## Version 2.6.3 (Build 14 - Dec 09, 2016)
### New Features
* Various error message strings can now be localized to a preferred language
* Added API methods to pause and resume IMA ad playback

### Bug Fixes
* Improved memory consistency in various classes, this should resolve intermittent NullPointerExceptions
* Fixed a NullPointerException when sending player error analytics 
* Fixed an issue where `JWPlayerView.getPlaylist()` would return null when `JWPlayerView.getConfig().getPlaylist()` would return the correct playlist before setup
* Fixed an app crash when tyring to cast a stream with WebVTT thumbnails
* Fixed the subtitle button showing up for streams that did not contain any cues
* Fixed an exception that would be thrown when using a timecode (00:30:00.000) with the IMA ad client
* Fixed a NullPointerException in the `toJSON()` method of Ad Source

### Enhancements
* The SDK now logs an error message when it encounters an invalid SSL certificate, for example when requesting a VAST creative.

<a name="2-6-2"></a>
## Version 2.6.2 (Build 12 - Jan 27, 2017)
### Enhancements
* Upgraded SDK to use JW Player 7.8.7

<a name="2-6-1"></a>
## Version 2.6.1 (Build 11 - Dec 21, 2016)
### Bug Fixes
* Fixed an issue where the SDK would crash on Android 7.1.1 if the Chromecast module was not added as a dependency
* Fixed an issue where ImaAdvertising or ImaVMAPAdvertising instances without an associated ImaSdkSettings instance would cause a crash

<a name="2-6-0"></a>
## Version 2.6.0 (Build 7 - Dec 09, 2016)
### Important Note!
The JW Player SDK for Android is now distributed as several modules, to reduce the size of your application you will only need to import the modules you are using in your project.  Please note the updated configuration instructions here: 

* [Library and Project Setup](https://developer.jwplayer.com/sdk/android/docs/developer-guide/getting-started/library-project-setup/)
* [Google IMA Setup](https://developer.jwplayer.com/sdk/android/docs/developer-guide/advertising/google-ima/)
* [Chromecast Getting Started](https://developer.jwplayer.com/sdk/android/docs/developer-guide/chromecast/getting-started/)

You will also need to change the xmlns entry in your layout XMLs if you are using our custom attributes, [as described here](https://developer.jwplayer.com/sdk/android/docs/developer-guide/usage/jwplayer-view/)

### New Features
* Modularized JW SDK: choose only the modules you want and leave the rest.  Optimize the JW SDK to your needs
* Added Google IMA ad UI text localization support to display your preferred language
* VPAID 2.0 ad support in ad pods using the VAST client
* Added onAdCompanion() callback for VAST client that returns companion ad data

### Enhancements
* Upgraded SDK to use JW Player 7.8
* General improvements to SDK player UI
* Upgraded Google IMA version to 3.4.0

### Bug Fixes
* Fixed an issue where the WindowOpenHandler interface used by setWindowOpenHandler() was obfuscated
* Fixed a race condition that caused the playAd() API call to malfunction when called shortly after playback has begun
* Fixed an issue where 302 redirects would fail when an HttpResponseCache was being used

<a name="2-5-3"></a>
## Version 2.5.3 (Build 164 - Nov 15, 2016)
### Bug Fixes
* Fixed an issue where onAdRequest(AdRequestEvent) would not fire on calls to playAd() for IMA

### Enhancements
* Improved the efficiency of the SDKs initial setup process
* Replaced dependency on CastCompanionLibrary submodule with jCenter dependency
* Upgraded Chromecast to support Google Cast Companion Library version 2.8.4

<a name="2-5-2"></a>
## Version 2.5.2 (Build 163 - Oct 24, 2016)
### Bug Fixes
* Fixed an issue where custom HTTP Headers were missing after media resumed after playing a Google IMA ad
* Fixed an issue where ad events were not firing when calling playAd()
* Fixed an issue where copying a Captions object would throw a null pointer exception if isDefault was not defined
* Fixed an issue where configuring setBackgroundAudio(true), during onCreate() would result in a null pointer exception
* Addressed an issue where the media would freeze when background audio was enabled and the user would lock, then unlock the screen
* Fixed an issue where onFirstFrame() reported the correct time-to-first-frame (TtFF) except when an IMA preroll was scheduled

<a name="2-5-1"></a>
## Version 2.5.1 (Build 162 - Oct 05, 2016)
### Bug Fixes
* Fixed an issue where IMA Midrolls were not playing when scheduled through an AdSchedule

<a name="2-5-0"></a>
## Version 2.5.0 (Build 161 - Sep 14, 2016)
### New Features
* Added support for Related Feeds player setup options
* Added support for custom HTTP headers for video streams (including signed cookies or tokens)
* onAdError message for both VAST and IMA mode now specifies if the ad was unreachable (404) or if the ad tag was empty and can differentiate between the two
* PlayAd() is now supported for AdSource.IMA
* Added JWPlayerView.setLicenseKey() to support the ability to set the player license key programmatically instead of in the manifest
* Added PlaylistItem.mediaId to allow developers to specify the JW Media ID for an externally hosted media file in the JW Platform in order to track analytics for that video

### Enhancements
* Removed READ_EXTERNAL_STORAGE permission from the SDK manifest. Developers must add this themselves to support local file playback
* Added OnErrorListenerV2, improved version of onError which includes the Exception object that was thrown along with the error message
* Upgraded IMA version to 3.3.2
* Addressed an issue where Android 4.3 does not support WOFF fonts, which leads to missing player control icons so we now ship TTF fonts
* New and updated callbacks events (eg. onBufferChange) for parity with HTML5 player
* Added WindowOpenHandler in JWPlayerView to support the ability to handle an Ad Clickthru event with the ad's clickthru URL

### Bug Fixes
* Fixed a nullpointer issue when killing and restarting the app while connected to Chromecast
* Fixed an issue in Android 4.1 and 4.3 where if a landscape layout is set, the application would crash on orientation changes from rotating the device.
* Fixed an issue where PlayerConfig.fromJson() would not populate VmapAdvertising objects
* Fixed an issue where the SDK would crash when the user pressed back during IMA ad playback

<a name="2-4-3"></a>
## Version 2.4.3 (Build 160 - Aug 23, 2016)
### Bug Fixes
* Fixed an issue with HLS in-manifest subtitle tracks where the "Name" label was not being displayed properly

<a name="2-4-2"></a>
## Version 2.4.2 (Build 159 - Aug 17, 2016)
### Bug Fixes
* Fixed an issue where unsupported/incompatible ad creative file types were not being ignored (e.g. Flash ads)
* Fixed an issue where a selected audio track didn't persist after an ad break
* Fixed an issue where player skins defaulted to Seven skin colors unless explicitly overidden
* Fixed an issue where onAdTime() for the Google IMA ad client was not reported in milliseconds and firing frequency was low
* Fixed an issue where midroll ads were requested right after the previous ad had finished rather than at the time of the next ad break

<a name="2-4-1"></a>
## Version 2.4.1 (Build 158 - Jul 13, 2016)
### Bug Fixes
* Fixed an IMA issue where a mid-roll would play after the post-roll and sometimes end in a black screen
* Fixed an issue with setMute() where it wasn't in effect prior to playback and would unmute during ads
* Fixed an issue where ad clickthrough would not trigger and onAdClick() would not fire if controls were set to false
* Fixed an issue where seek() could not be called before playback began
* Fixed an issue where locally hosted poster images wouldn't load
* Fixed an issue where PlayerConfig.setFile() would not work with locally hosted videos
* Fixed an issue where JWPlayerView.getPosition() would not be up-to-date when onSeeked() is fired

<a name="2-4-0"></a>
## Version 2.4.0 (Build 156 - Jun 29, 2016)
### New Features
* Free, Premium, and Platinum license editions are now supported
* Ad impression limits are now checked when ad playback is requested in order to prevent ad impression overage charges

### Bug Fixes
* Fixed a bug where the captions button would not show up on some streams with 608 captions

<a name="2-3-0"></a>
## Version 2.3.0 (Build 155 - Jun 20, 2016)
### New Features
* VPAID 2.0 support
* Widevine DRM decryption
* HLS multiple track audio support
* Player stretching option support (uniform, fill, exact fit, none)
* Mute/unmute player instance
* Start playback of a specific playlist item - playlistItem(int index)
* New onVisualQuality() callback event fired when visual quality changes

### Bug Fixes
* Fixed an issue where logo position and logo margin were not set using PlayerConfig
* Fixed an issue where skin enum option was missing from PlayerConfig builder
* Fixed an inconsistency where player.seek() parameter was accepting an int value instead of long

<a name="2-2-2"></a>
## Version 2.2.2 (Build 150 - May 10, 2016)
### Bug Fixes
* Fixed an issue where the SDK would crash if the containing Activity finished during an IMA ad request
* Fixed an issue where IMA midrolls would not play if a postroll was defined
* Fixed an issue where discontinuities would result in a frozen or black screen

<a name="2-2-1"></a>
## Version 2.2.1 (Build 149 - Apr 25, 2016)
### New Features
* Audio Playback in Background
* Full-Playlist IMA Ad Schedules
* Added cookie support, including ability to play HLS streams using Akamai's SecureHD HD Token Authorization

### Bug Fixes
* Fixed an issue where IMA prerolls wouldn't play during a live stream
* Fixed an issue where HLS streams would show up as DVR after an IMA ad played
* Fixed an issue where the SDK would crash after a postroll if an IMA ad had been defined with a percentage offset
* Fixed an issue where pressing reply after an bad IMA (e.g. empty VAST) would result in a doubled UI
* Fixed an issue where seeking ahead past midroll ads would force all ads to play instead of the last one
* Fixed an issue where the player would not initialize when it had been instantiated with a PlayerConfig containing a playlist
* Fixed an issue where HLS streams that did not contain 'm3u8' in the URL would not play
* Fixed an issue where IMA VMAP postrolls would not play in a playlist except for the last playlist item

<a name="2-2-0"></a>
## Version 2.2.0 (Build 148 - Apr 08, 2016)
### New Features
* DVR for Live Streams in HLS
* CEA-608 Captions in HLS
* In-Manifest WebVTT subtitles in HLS & MPEG-DASH
* VAST 3.0 Non-Linear Ads

### Bug Fixes
* Fixed an issue where the poster image in audio-only playlists did not remain on screen
* Fixed an issue related to loading new media during an IMA ad break
* Fixed an issue where finishing an activity before initialization is done results in a phantom player playing in background.
* Fixed an issue where controls(false) still allowed the loading spinner to show and the captions to shift position for a controlbar that is not there.
* Fixed an issue where the replay button would rotate after playing an IMA postroll.

<a name="2-1-1"></a>
## Version 2.1.1 (Build 142 - Feb 11, 2016)
### Bug Fixes
* Fixed an issue with seek() where calling seek() before play() would cause the seekbar to not update the playhead position during playback

<a name="2-1-0"></a>
## Version 2.1.0 (Build 141 - Feb 01, 2016)
### New Features
* ID3 Timed Metadata
* Local Media File Playback
* Chromecast Beta
* Support for newly added JW7 API callbacks (onSeeked, onFirstFrame, onAdRequest, etc.)

### Updated Features
* Enhanced fullscreen in various layouts (Linear, Frame, Relative)
* Improved Fragment Fullscreening

### Bug Fixes
* Fixed an issue with VAST 3.0 VMAP not working as expected
* Fixed an issue where IMA pre-roll tags did not work as expected for live streams
* Fixed a bug where dragging to seek would cause an infinite buffer state
* Fixed an issue where Autostart config option was not being honored
* Fixed an issue where a player control bar that is set to hidden would become visible in fullscreen
* Fixed an issue where ExoPlayerWrapper is null in SurfaceHolder callback

### Known Issues
* Developers who are already using Google's Cast Companion Library and are not using version 2.6.1, should add -dontwarn com.longtailvideo.jwplayer.cast.* to your ProGuard configuration to avoid conflicts.

<a name="2-0-135"></a>
## Version 2.0.135 (Build 135 - Dec 16, 2015)
### Bug Fixes
* Fixed an issue where calling load() or setup() immediately after setSkin(String) would throw an error
* Fixed a bug where playhead position would not update on the seek bar when calling seek() before play()
* Improved CSS skin downloading

<a name="2-0-131"></a>
## Version 2.0.131 (Build 131 - Dec. 03, 2015)
### Bug Fixes
* Fixed an issue where the Video Quality button would be broken for HLS streams that contained two quality levels.
* Fixed a bug with onTime() where sometimes the webplayer truncated the last zero (e.g. returning 1.23 instead of 1.230)
* Fixed an issue where getPosition() and getDuration() always returned 0.
* Fixed an issue where several listeners in PlayerStateHandler were not registered.


<a name="2-0-129"></a>
## Version 2.0.129 (Build 129 - Nov. 17, 2015)
Version 2.0 is a complete rewrite of the JW Player SDK for Android to make it easier for developers to add world-class media playback to any Android app. The [migration guide](https://developer.jwplayer.com/sdk/android/docs/developer-guide/migration/v2/ "JW SDK for Android Migration Guide") with API changes and code examples, makes upgrading from 1.x to 2.0 a breeze.

2.0 also marks a significant step toward our goal of “One JW Player”. The developer-facing APIs in the SDK are native to the target platform, but they are wrappers around our flagship JW Player 7 JavaScript/HTML5 library (jwplayer.js). The core functionality of the SDK (player customization, captions, analytics, etc.) is powered by JavaScript, but all the developer-facing APIs in the SDK are native Java classes. As a result, we still achieve very high performance by doing the actual video decoding and playback in native code.

One of the many benefits of this “One JW Player” architectural change is our ability to leverage JW Player 7 features such as CSS skinning and a DPI-responsive player UI optimized for mobile.

For more information about our JW Player SDK for Android 2.0 release, please read our [blog post](http://www.jwplayer.com/blog/ "JW Blog"). Thanks!

### New Features
* WebVTT & DFXP/TTML Caption Support
* Programmatic Player Instantiation & Configuration
* Player Customization
  * CSS Skinning
  * DPI-responsive player UI with mobile optimization
  * Custom Logo Overlay
* Smooth Streaming support
* Multiple Players in a view
* JWPlayerFragment & JWPlayerSupportFragment classes

### Updated Features
* VAST 3.0 Linear Ads, & Ad Pods
* Google IMA
* Fullscreen Handling
* Manual Quality Switching
* Captions
  * Sidecar SRT
  * Custom styling
  * Multi-track Captions

### Bug Fixes
* Fixed an issue where Google IMA was throwing stacktraces during and after Ad-Playback.
* Fixed an issue For Google IMA Preroll Ads where there was a delay between pressing play and displaying the Ad. 
* Fixed an issue where after a Google IMA Midroll Ad was played, the player restarted the video instead of resuming it at the correct position.

### Known Issues
* TTML (DFXP) subtitles are working but there is no styling applied to them. We do not currently support styling them.
* Playlist icon does not display on the control bar on some phones.

---
<a name="1-x"></a>
## Version 1.x
Release Notes prior to JW SDK version 2.0 (1.x) are available in the readme.txt file included in the 1.x download packages
