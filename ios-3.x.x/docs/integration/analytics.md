# Analytics

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

JW Player enables plugin developers to listen for media playback and VAST/VPAID native ads analytics events.

!!!important
Analytics events are not available for `AVPlayer` instances instantiated by IMA or FreeWheel plugins.
!!!

To receive analytics events, include the `JWAVPlayerAnalyticsDelegate` in a class that can be used as a delegate. Then, implement delegated methods. 

**Code Example:**

```objc
@interface JWAVPlayerAnalyticsObserver : NSObject <JWAVPlayerAnalyticsDelegate>

// implement the methods
- (void)playbackRateDidChange:(CGFloat)rate {}
- (void)playerStatusDidChange:(AVPlayerStatus)status {}
- (void)playerItemDidChange:(AVPlayerItem *)item {}
- (void)playerErrorDidChange:(NSError *)error {}
- (void)playerLayerVideoRectDidChange:(CGRect)videoRect {}

//set the class as a delegate into the player
self.player.analyticsDelegate = [JWAVPlayerAnalyticsObserver new];
```
```swift
// Note: The protocol in the snippet below does not actually exist in Swift.
// It is what the actual Objective-C protocol would look like, if written
// in Swift, for illlustration only. 
protocol JWAVPlayerAnalyticsDelegate: NSObjectProtocol {
    func playbackRateDidChange(_ rate: CGFloat)
    func playerStatusDidChange(_ status: AVPlayer.Status)
    func playerItemDidChange(_ item: AVPlayerItem?)
    func playerErrorDidChange(_ error: Error?)
    func playerLayerVideoRectDidChange(_ videoRect: CGRect)
}

// A class that conforms to the protocol
class JWAVPlayerAnalyticsObserver: NSObject, JWAVPlayerAnalyticsDelegate {
    // implements the methods
}

//set the class as a delegate into the player
player.analyticsDelegate = JWAVPlayerAnalyticsObserver()
```
