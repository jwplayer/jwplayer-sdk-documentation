# Google IMA

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

## Overview
* Implementing your ad schedules for Google IMA are done the same way – using the same objects and properties –  as when using our default ad client, the VAST plugin (also see **Notes** on this page).
* The Google IMA ad client can be used in playlists and supports waterfalling, bumpers, as well as standard and optimized ad pods.

<br/>

### Requirements

* To play ads using Google Interactive Media Ads (Google IMA), you must download and integrate [Google IMA SDK version 3.3.1](https://developers.google.com/interactive-media-ads/docs/sdks/ios/v3/history) into your project.

!!!
We are currently upgrading our integration for the most current IMA SDK (3.9.x as of this writing), so check back with your JW Player point of contact for updates!
!!!

<br/>

### Instructions

Set your `JWAdConfig` object’s `client` property to `JWAdClientGoogima`.

```objc
config.advertising.client = JWAdClientGoogima;
```

```swift
config.advertising.client = .googima
```

<br/>

#### Notes:

* The VMAP control ad insertion (`vmap` property) overrides any `adSchedule` arrays when using Google IMA.
* Customization of ad messages and skipping are not handled with Google IMA at the moment, but can be done when creating an ad tag.
