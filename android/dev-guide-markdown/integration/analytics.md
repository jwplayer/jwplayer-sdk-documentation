# Analytics

The `setAnalyticsListener` function exposes ExoPlayer’s [AnalyticsListener](https://google.github.io/ExoPlayer/doc/reference/com/google/android/exoplayer2/analytics/AnalyticsListener.html). With access to the AnalyticsListener, plug-in developers can listen for analytics events.

**Code Example:**

```java
player.setAnalyticsListener(new AnalyticsListener() {
   ...
});
```
