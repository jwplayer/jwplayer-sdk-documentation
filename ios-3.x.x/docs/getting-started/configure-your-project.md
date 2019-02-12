# Configure your project
<sup>Last updated: February 12, 2019</sup>

To complete the SDK import process, you must add the player license key and import the `JWPlayerController`.

## Add the player license key

Use one of the methods below to add your license key to your project.

### Plist approach

This approach allows you to add the license key to your app.

1. In the **info.plist** file in your Xcode project, create a **Key** called `JWPlayerKey`. If you used CocoaPods to integrate the SDK, be sure to edit the **info.plist** of your Xcode project and not the **info.plist** of the Pods project.
2. Set the **Type** to **String**.
3. Enter the player key for the **Value**.

### Programmatic approach

This approach allows you to add the license key within your code or decoupled from your app. As an example, you could insert a method in your app that retrieves the license key from a remote location. This is useful if you foresee a need to change your license key and you want to avoid having to resubmit your app to the App Store.

In the **AppDelegate.m** file, use `JWPlayerController setPlayerKey` in `application:didFinishLaunchingWithOptions` to set your license key.

```Objective-C
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [JWPlayerController setPlayerKey:@"YOUR_KEY_HERE"]; 
    return YES; 
}
```
```Swift
func application(_ application: UIApplication, 
didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]?) -> Bool {   
    JWPlayerController.setPlayerKey("YOUR_KEY_HERE") 
    return true
}
```

## Import the JWPlayerController object

The `JWPlayerController` object provides the playback control interface that encapsulates the player and its state. Due to this, **JWPlayerController.h** becomes the umbrella header file that enables access to the JW Player iOS SDK.

In Objective-C files, you must import this header either into individual files or into a precompiled header (.pch) file. In Swift files, the [bridging header](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) acts like a .pch file.

### Objective-C

1. From Xcode, open the **.xcworkspace** file for your project.
2. Import **JWPlayerController.h**: `#import <JWPlayer_iOS_SDK/JWPlayerController.h>`. The path must use underscores (`_`) instead of dashes (`-`).

```Objective-C
#import <UIKit/UIKit.h>
#import "JWPlayer_iOS_SDK/JWPlayerController.h"

@interface ViewController : UIViewController

@property (nonatomic) JWPlayerController *player;

@end
```

You have configured your project.

### Swift

1. From Xcode, open the **.xcworkspace** file for your project.
2. Create a <a href="https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift" target="_blank">bridging header file</a>. If Xcode does not display a pop-up window with an option to create a bridging header file, you will have to create this file manually.
3. Within the bridging header file, import **JWPlayerController.h**.

You have configured your project.

<br/><br/>
<div id="wufoo-mff60sc1xnn4cu">
Use this <a href="https://jwplayerdocs.wufoo.com/forms/mff60sc1xnn4cu">form</a> to provide your feedback.
</div>
<script type="text/javascript">var mff60sc1xnn4cu;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'jwplayerdocs',
'formHash':'mff60sc1xnn4cu',
'autoResize':true,
'height':'288',
'async':true,
'host':'wufoo.com',
'header':'show',
'ssl':true,
'defaultValues': 'field118=' + location.pathname};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { mff60sc1xnn4cu = new WufooForm();mff60sc1xnn4cu.initialize(options);mff60sc1xnn4cu.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');</script>
