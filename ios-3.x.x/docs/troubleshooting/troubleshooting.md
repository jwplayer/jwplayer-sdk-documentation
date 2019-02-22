# Troubleshooting


!!!important
Use of the iOS SDK v3 requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&amp;utm_medium=CTA&amp;utm_campaign=player-docs) if you would like to upgrade your account.
!!!

### Where can I find the JW Player demo app?

[https://github.com/jwplayer/jwplayer-sdk-ios-demo](https://github.com/jwplayer/jwplayer-sdk-ios-demo)


### Where can I find the CocoaPods for this SDK?

[https://cocoapods.org/?q=jwplayer](https://cocoapods.org/?q=jwplayer)


### Where can I find my SDK and license key?

Please log into your dashboard and click on 'Downloads & Keys'. You will find the SDK download and license
key under the 'Downloads' section.

### How do I change the information in the Control Center?

We recommend to avoid using the `MPNowPlayingInfoCenter` to modify the information in the Control Center when using the SDK; modifying it will lead to unpredictable behavior. Instead, allow the SDK to handle conveying your media's metadata to the Control Center.
If you nevertheless wish to override the Control Center yourself, make sure to inform the SDK by setting the JWPlayerController's `displayLockScreenControls` property to `false`.

### I received an error on my import header: 'JWPlayer-iOS-SDK/JWPlayerController.h' file not found. What should I do?

This error is most likely due to XCode not being able to find the path of the SDK framework. Please go to 'Build Settings', 'Search Paths' then 'Framework Search Path' and examine the path listed for the framework. 

### (a) Why is my app not playing any sound?
and
### (b) Why is my app playing another app's audio at the same time as mine? 

(a) This could be for a number of reasons, but check to see if your device is on silent mode, and if sound is restored when silent mode is off. If so, and also for issue (b), you just need to add a couple of lines of code to your project to let iOS know to handle your app for media playback – where your app is not silenced by the ring/silent switch or screen locking, and by default it interrupts a 'nonmixable' app's audio. Specifically, set the audio session's category to 'playback', and set your audio session to be the active one, as in the snippet below (or see our [iOS SDK Developer's Guide](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/embedding/features/#background-audio)).

Tip: Since updating the session is a blocking operation, best practice is to perform this operation on a background concurrent thread (not shown).

In your AppDelegate, add:

```swift
    do { try AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayback)
        do { try AVAudioSession.sharedInstance().setActive(true) }
        catch { print(error) }
    } catch { print(error) }
```

```objcx
    NSError *error;
    [AVAudioSession.sharedInstance setCategory:AVAudioSessionCategoryPlayback error:&error];
    if (error) { NSLog(@"%@", error); error = nil; }
    [AVAudioSession.sharedInstance setActive:YES error:&error];
    if (error) { NSLog(@"%@", error); }
```

as the case may be. (For more on this topic, see the Apple docs [System Audio Interaction](https://developer.apple.com/documentation/avfoundation/system_audio_interaction), and especially
[Audio Session Categories and Modes](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioSessionCategoriesandModes/AudioSessionCategoriesandModes.html#//apple_ref/doc/uid/TP40007875-CH10).)

## CocoaPods Guide 
(Please note that there are a few ways to work with CocoaPods. This is one method.)

###### Install CocoaPods. 
In terminal enter:

```bash
$ gem install cocoapods
```

Depending on your setup, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo) and then enter your mac profile password to install. (If instead of installing, you see `-bash: gem: command not found`, then you will need to [install RubyGems](https://rubygems.org/) on your machine first.) Once complete, navigate to your project. Then enter

```bash
$ pod init
```

which will (among other changes) add `Podfile` to the directory.

###### Configure Your Project's Podfile
Open `Podfile` in any text editor. Edit it so that it looks something like this:

```ruby
1  # Uncomment the next line to define a global platform for your project
2  platform :ios, '11.0'
3
4  target 'MyAwesomeProject' do
5  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
6  use_frameworks!
7
8  # Pods for MyAwesomeProject
9   pod 'JWPlayer-SDK'
10  end
```

What changed? We...

1. ...specified the iOS version by uncommenting and editing **line 2**. 
  * Remember that the JWPlayer iOS SDK requires a target of:

      | SDK ver | iOS ver |
      | ------- | ------- |
      | ≤ 3.1.4 | ≥ 10.x  |
      | ≥ 3.2.0 | ≥ 11.x  |
If left unspecified in your podfile, CocoaPods will need to choose a target iOS version for you, which may be lower than the SDK's required version, and silently refuse to download the expected SDK version, or any at all.

2. ...(if using Swift), we uncommented **line 6**, `use_frameworks!`. 

3. ...under `target MyAwesomeProject do`, **line 8** to be specific, we added `pod 'JWPlayer-SDK'`.
  * If you need to specify a particular version of the SDK, check out the podfile syntax on [their website](https://guides.cocoapods.org/using/the-podfile.html) for that and many other useful customizations.

Save your changes to `Podfile` and close your text editor. 

###### Install the SDK (and Your Other Dependencies) Into Your Project

In terminal, enter

```bash
$ pod install
```
CocoaPods will resolve dependencies between libraries, fetch the resulting source code, and link it together in an [Xcode workspace](https://developer.apple.com/library/archive/featuredarticles/XcodeConcepts/Concept-Workspace.html) (creating one around your project if necessary) to build your project. 

###### Expose Header Files in Your Project
Close your project, if it was open, and then open your project's *workspace* (`.xcworkspace` extension, not `.xcproj`), so you can expose the header files:

* **Objective-C**
  * Import the SDK like any other framework, `#import <JWPlayer_iOS_SDK/JWPlayerController.h>` in the files which call on it, or in a pre-compiled header (`pch`) file to expose it to all files at once. Note that the import path uses under_scores, not dash–es!

* **Swift** – Add a 'Bridging Header'
  * **Method 1 (recommended):** Have Xcode create a bridging header – and make the necessary changes to your project settings – for you. Prompt this by adding a new Objective-C file to your project (⌘ + n → *Objective-C File*). The filename you give it does not matter, just agree to let Xcode create the bridging header, and then you can delete that Objective-C file immediately. If Xcode does not give you this option, you may have to:
  * **Method 2:** Create a bridging header manually. See [Apple's docs](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) for more detail. 
 * Go to the newly created bridging header file, and expose the SDK to your Swift code by `#import`ing it in that file, as in the Objective-C method above.

If you have any issues in this process, you can find much more on the CocoaPods project on [their website](https://guides.cocoapods.org/using/getting-started.html), [Stack Overflow](https://stackoverflow.com/questions/tagged/jwplayer), or contacting Support from your [JWP dashboard](https://dashboard.jwplayer.com/).
