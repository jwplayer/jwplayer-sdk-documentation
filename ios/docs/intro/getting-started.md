# Getting Started

- [Important Notice](#Important-Notice)
- [SDK Installation via CocoaPods](#Installation)
- [SDK Manual Installation](#Manual-Installation)
- [Installing Google IMA](#Installing-Google-IMA)

### Important Notice
#### **Please Note: Free, Premium, and Platinum edition Customers** 
*[Update from 18 Oct 2017]* The JW Player SDK for iOS will no longer be included in these editions beginning **18 Oct 2018**. This provides our Free, Premium, and Platinum edition customers one (1) year to find an alternative to our SDK. Enterprise customers will continue to have access to the JW Player SDK for iOS and will not be impacted. Please contact support+sdk@jwplayer.com if you have additional questions.

## Installation

#### Swift Note:
However you choose to integrate the SDK into your project, you may need to import the framework into your bridging header.

> #### Importing Objective-C into Swift
> To import a set of Objective-C files in the same app target as your Swift code, you rely on an Objective-C bridging header to expose those files to Swift. Xcode offers to create this header file when you add a Swift file to an existing Objective-C app, or an Objective-C file to an existing Swift app.

> If you accept, Xcode creates the header file along with the file you were creating, and names it by your product module name followed by adding "-Bridging-Header.h". (You’ll learn more about the product module name later, in Naming Your Product Module.)”

*Excerpt From: Apple Inc. “Using Swift with Cocoa and Objective-C (4.1)" .*
### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Cocoa projects. You can install it with the following command:

```bash
$ gem install cocoapods
```

To integrate the JWPlayer iOS SDK into your Xcode project using CocoaPods, specify it in your `Podfile` (created when running the `pod init` command in your project's root directory:

```ruby
target '<Your Target Name>' do
    pod 'JWPlayer-SDK', '~> 3.0'
end
```

Then, run the following command in your terminal, or from the CocoaPods app:

```bash
$ pod install
```

### Carthage

[Carthage](https://github.com/Carthage/Carthage) is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks.

The JWPlayer iOS SDK framework does not support Carthage at this time.

## Manual Installation

If you prefer not to use a dependency manager, you can integrate the SDK into your project manually:


### Downloading the SDK Software

1. Sign in to your JW Player dashboard at [https://dashboard.jwplayer.com](https://dashboard.jwplayer.com).
2. Browse to the **Publisher** -> **Tools** page.
3. In the **Downloads** section, click the JW Player SDK download link.

The unzipped package contains the following folders:

* **Framework**: The JW Player SDK software.  
* **Documentation**: inline API reference documentation for the JW Player framework for use in XCode.


### Setting up your XCode Environment

1. Add the JW Player framework to your XCode project:
![Step 1a](../images/step_1.png)
![Step 1b](../images/step_2.png)

2. In the Build settings, add the **`-all_load`** linker flag:
![Step 2](../images/step_3.png)

3. Add your license key either in code, or in your `info.plist` properties file. Either way, make sure you enter this string exactly as you received it from JW Player, or as it appears in your JW Player dashboard. The string is cAse-seNsiTive. The methods:
  
- **Programmatic method:** In your `AppDelegate.m`, set your Player Key using the JWPlayerController's class method `setPlayerKey:` in the  `application:didFinishLaunchingWithOptions:` method, like so:

    #### Objective-C
    ```Objective-c
    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        [JWPlayerController setPlayerKey:@"YOUR_KEY_HERE"];
        return YES;
    }
	```

	#### Swift
	```Swift    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        JWPlayerController.setPlayerKey("YOUR_KEY_HERE")
        return true
    }
	```
	- **Info.plist method:** Create a `string` entry named **`JWPlayerKey`**, and set its value to be your JW Player license key:

	![Step 3](../images/step_4.png)

.    
4. Import the **`JWPlayerController.h`** file into the view controller where you want to use the player. Alternately, you can import it in a `.pch` file to make it available across your whole project.

![Step 4](../images/step_5_new.png)

## Installing Google IMA

In order to use our Google IMA Ad Client, [you must install](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/intro/requirements/) the Google IMA framework version 3.7.x. This framework can also be integrated into your project via CocoaPods...

```ruby
pod 'GoogleAds-IMA-iOS-SDK'
```

...as well as manually: download the Google IMA iOS SDK [here](https://developers.google.com/interactive-media-ads/docs/sdks/ios/download). The zip file contains two folders; you will need the Google IMA folder (GoogleInteractiveMediaAds-GoogleIMA3), **NOT** the Google IMA for Ad Mobs folder (GoogleInteractiveMediaAds-GoogleIMA3ForAdMob). 

To link the library, open XCode, select your project, and proceed to the Targets Section. Under the General tab, proceed to “Linked Framework and Libraries” and tap the plus sign. 

![Step 5](../images/ima_step_1.png)

Select the “Add Other” button in the pop-up view and navigate to the Goole IMA SDK folder.

![Step 6](../images/ima_step_2.png)

Select the GoogleInteractiveMediaAds.framework in the GoogleInteractiveMediaAds-GoogleIMA3 folder and select Open.

![Step 7](../images/ima_step_3.png)

