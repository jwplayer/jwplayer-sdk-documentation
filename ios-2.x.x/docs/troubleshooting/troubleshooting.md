# Troubleshooting

## Where can I find the JW Player demo app?

[https://github.com/jwplayer/jwplayer-sdk-ios-demo](https://github.com/jwplayer/jwplayer-sdk-ios-demo)


## Where can I find the CocoaPods for this SDK?

[https://cocoapods.org/?q=jwplayer](https://cocoapods.org/?q=jwplayer)


## Where can I find my SDK and license key?

Please log into your dashboard and click on 'Downloads & Keys'. You will find the SDK download and license
key under the 'Downloads' section.

### Oct 18, 2017
**Free, Premium, and Platinum edition** customers please note: the JW Player SDK for iOS will no longer be included in these editions beginning **OCT 18th 2018**. This provides our Free, Premium, and Platinum edition customers one (1) year to find an alternative to our SDK. Enterprise customers will continue to have access to the JW Player SDK for iOS and will not be impacted. Please contact support+sdk@jwplayer.com if you have additional questions.

## How do I change the information in the Control Center?

You can change the information in the Control Center by implementing the controlCenter function. This function is available as a callback in both our Swift and Objective-C classes. You can also review Apple's documentation for more information: https://developer.apple.com/library/prerelease/ios/documentation/MediaPlayer/Reference/MPNowPlayingInfoCenter_Class/index.html.

## I received an error on my import header: 'JWPlayer-iOS-SDK/JWPlayerController.h' file not found. What should I do?
This error is most likely due to XCode not being able to find the path of the SDK framework. Please go to 'Build Settings', 'Search Paths' then 'Framework Search Path' and examine the path listed for the framework. 

## CocoaPods Guide 
(Please note that there are a few ways to work with CocoaPods. This is one method.)

In terminal enter

    sudo gem install cocoapods

then enter your password and wait for CocoaPods to install.
Once complete, navigate to your project. Then enter

    pod init

to create a pod file.
You now need to add the pod file to your project. In your XCode project, click on 'File' then 'Add Files' then click on your newly created pod file. You should now see the pod file in your XCode project. Be sure to uncomment the line if you are using Swift (if you are in fact using Swift) and use_frameworks!. Then visit the cocoapods.org web site for the latest JW Player CocoaPod. Go back to your pod file in your XCode project and enter the latest JW Player pod file between the target and end. In terminal, navigate to your project folder and type pod install to integarte your pod file. You will now be instructed to open .xcworkspace file going forward. You can now import the JW Player library. 
