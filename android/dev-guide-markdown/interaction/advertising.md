# Advertising API

## Advertising Callbacks

### Callbacks

| Callback | Description |
| --- | --- |
| onBeforePlay([BeforePlayEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/BeforePlayEvent.html) beforePlayEvent) | Fired just before the player begins playing. |
| onBeforeComplete([BeforeCompleteEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/BeforeCompleteEvent.html) beforeCompleteEvent) | Fired just before the player completes playing. |
| onAdStarted([AdStartedEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdStartedEvent.html) adStartedEvent) | VPAID-only This API will trigger when a VPAID ad creative signals to our player that it is starting. |
| onAdClick([AdClickEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdClickEvent.html) adClickEvent) | Fired whenever a user clicks an ad to be redirected to its landing page. |
| onAdSchedule([AdScheduleEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdScheduleEvent.html) adScheduleEvent) | VAST only. Fires when the ad schedule is loaded and parsed by the plugin. |
| onAdCompanions([AdCompanionsEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdCompanionsEvent.html) adCompanionsEvent) | VAST and IMA. Fired whenever an ad contains companions. |
| onAdRequest([AdRequestEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdRequestEvent.html) adRequestEvent) | VAST only. Fired whenever an ad is requested by the player. |
| onAdImpression([AdImpressionEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdImpressionEvent.html) adImpressionEvent) | Fired based on the IAB definition of an ad impression. |
| onAdComplete([AdCompleteEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdCompleteEvent.html) adCompleteEvent) | Fired whenever an ad has completed playback. |
| onAdSkipped([AdSkippedEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdSkippedEvent.html) adSkippedEvent) | Fired whenever an ad has been skipped. |
| onAdRequest([AdRequestEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdRequestEvent.html) adRequestEvent) | Fired whenever an ad is requested by the player. |
| onAdTime([AdTimeEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdTimeEvent.html) adTimeEvent) | Fired while ad playback is in progress. |
| onAdPause([AdPauseEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdPauseEvent.html) adPauseEvent) | Fired whenever an ad is paused. |
| onAdPlay([AdPlayEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdPlayEvent.html) adPlayEvent) | Fired whenever an ad starts playing or when an ad is unpaused. |
| onAdError([AdErrorEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AdErrorEvent.html) adErrorEvent) |  Fired whenever an error prevents the ad from playing. Supported for VAST and IMA. |
