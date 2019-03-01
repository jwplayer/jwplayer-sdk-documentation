# Enable casting to Chromecast devices

<sup>Last Updated: March 14, 2019

The Google Cast framework enables a viewer to stream video and audio content to a compatible TV or sound system. By enabling the Google Cast framework in your app, a viewer can use a cast button to stream your content on a Chromecast-enabled device. The viewer's device must be on the same network as a Chromecast-enabled device.

!!!important
&bull; The JW Player iOS SDK supports casting to the Default Media Receiver and to Styled Media Receivers.<br/><br/>&bull; Custom receivers are not officially supported. However, if the video playback implements the same interface used in the Default Media Receiver, you may be able to initiate a casting session with a custom receiver.<br/><br/>&bull; To specify a receiver, set a media receiver app ID to the `chromeCastReceiverAppID` property of the `JWCastController`.
!!!

**1.** In a text editor, open **Podfile**.

<br/>

**2.** If you are using CocoaPods to add dependencies, add `google-cast-sdk` to your **Podfile**, as shown in the following code example. You can specify any Google Cast version that is greater or equal to 4.3, but less than 5.0.  

If you are manually adding dependencies to your project, follow these <a href="https://developers.google.com/cast/docs/ios_sender/#manual_setup" target="_blank">manual setup instructions</a>.

```groovy
# Uncomment the next line to define a global platform for your project
platform :ios, '11.0'

target 'MyAwesomeProject' do
    # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
    use_frameworks!

    # Pods for MyAwesomeProject
    pod 'JWPlayer-SDK', '~> 3.0'
    pod 'google-cast-sdk', '~> 4.3' 
end
```

<br/>

**3.** If you are using Xcode 10 and targeting iOS 12+, click the app target **> Capabilities > Access WiFi Information**. Click the toggle to **ON** to enable **Access Wifi Information**.

<br/>

**4.** In your app, create a `JWCastController` object and set its delegate. The delegate must adhere to the [JWCastingDelegate](https://developer.jwplayer.com/sdk/ios/reference/Protocols/JWCastingDelegate.html) protocol and implement its delegate methods.

```Objective-C
- (void)setUpCastController
{
    self.castController = [[JWCastController alloc] initWithPlayer:self.player];
    self.castController.chromeCastReceiverAppID = kGCKMediaDefaultReceiverApplicationID;
    self.castController.delegate = self;
}
```

<br/>

**5.** Call the `scanForDevices` method to scan for devices: `[self.castController scanForDevices];`. When devices become available, the `JWCastingDelegate` method, `onCastingDevicesAvailable:`, is called and returns an array of `JWCastingDevices`.

<br/>

**6.** Call the `connectToDevice:` method to connect to a device.  When a connection is established, the `JWCastingDelegate` method, `onConnectedToCastingDevice:`, is called. This signals the ability to cast the video that is reproduced by the `JWPlayerController`.

```Objective-C
-(void)onCastingDevicesAvailable:(NSArray *)devices
{
    JWCastingDevice *chosenDevice = devices[0];
    [self.castController connectToDevice:chosenDevice];
}
```

<br/>

**7.** Call the `cast` method on your `JWCastController`.

```Objective-C
-(void)onConnectedToCastingDevice:(JWCastingDevice *)device
{
    [self.castController cast];
}
```

The `JWPlayerController` API controls the playback of the video being casted, and the JWPlayerDelegate will provide you with the playback callbacks while casting.

!!!tip
The <a href="https://github.com/jwplayer/jwplayer-ios-bestPracticeApps" target="_blank">JW Player iOS Best Practice Apps repository</a> contains several best practice apps, including an example of the code necessary for a casting experience. The target containing relevant code is named **JWCasting**.<br/><br/>Additionally, you can learn more about the Google Cast <a href="https://developers.google.com/cast/docs/ux_guidelines" target="_blank">User Experience</a> guidelines.


## FAQ

**Are any features disabled when casting with an iOS SDK player?**
Yes. The following features that are disabled during a casting session with an iOS SDK player:

* Google IMA ads
* Multiple-audio tracks or AudioTrack switching
* In-manifest WebVTT captions
* DVR and live streaming capabilities
