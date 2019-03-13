# SDK Version 3.2.3 Requirements
* [iOS version 9.0 and above](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewIniOS/Articles/iOS9.html#//apple_ref/doc/uid/TP40016198-SW1)
* Includes [JW Player version 8.7.1](https://developer.jwplayer.com/release-notes/jw-player/?id=14373250)

##### Conditional Requirements
* If using our SDK's integration with Google Interactive Media Ads ad server:
  * [Google IMA SDK version 3.8.1](https://developers.google.com/interactive-media-ads/docs/sdks/ios/v3/history)
* If implementing Chromecast functionality:
  * [Google Chromecast SDK version 2.10.0.4070](https://developers.google.com/cast/docs/release-notes#october-19-2015)
* If using our SDK's integration with Freewheel ad server:
  * [FreeWheel AdManager](https://hub.freewheel.tv/pages/viewpage.action?spaceKey=techdocs&title=MRM+Integration+SDK+Downloads).

   !!!important
   Freewheel's SDK does not enable [bitcode](https://www.infoq.com/articles/ios-9-bitcode) (an Xcode 9+ [app thinning optimization](https://developer.apple.com/videos/play/wwdc2015/104/?time=445)), which makes it incompatible with the JW Player SDK for iOS, which does. **Freewheel should provide a bitcode-enabled version of their SDK build upon request.**
   !!!

# SDK Version 2.9 Requirements

* [iOS version 9+](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewIniOS/Articles/iOS9.html#//apple_ref/doc/uid/TP40016198-SW1)
* [Google IMA SDK version 3.7.0](https://developers.google.com/interactive-media-ads/docs/sdks/ios/v3/history)
* [Google Chromecast SDK version 2.10.0.4070](https://developers.google.com/cast/docs/release-notes#october-19-2015)
* FreeWheel AdManager. You must download it yourself from [FreeWheel Hub Portal](https://hub.freewheel.tv/pages/viewpage.action?spaceKey=techdocs&title=MRM+Integration+SDK+Downloads)
* Includes [JW Player version 7.12](https://developer.jwplayer.com/release-notes/jw-player/#7388776)

##### Conditional Requirements
* If using our SDK's integration with Google Interactive Media Ads ad server:
  * [Google IMA SDK version 3.7.0](https://developers.google.com/interactive-media-ads/docs/sdks/ios/v3/history)
* If implementing Chromecast functionality:
  * [Google Chromecast SDK version 2.10.0.4070](https://developers.google.com/cast/docs/release-notes#october-19-2015)

---
####Comparison Table

| SDK version | iOS ver required | IMA SDK ver required | Chromecast SDK ver required | Freewheel SDK required | (JWP ver included) |
|:-----------:|:----------------:|:--------------------:|:---------------------------:|:----------------------:|:------------------:|
|  **3.2.3**  |       9.0+       |         3.8.1        |         2.10.0.4070*        | dynamic/<br/>bitcode-enabled|   8.7.1       |
|   **2.9**   |       10.0+      |         3.7.0        |         2.10.0.4070         |      not supported     |        7.12        |


*Chromecast SDK v4.x support coming soon!