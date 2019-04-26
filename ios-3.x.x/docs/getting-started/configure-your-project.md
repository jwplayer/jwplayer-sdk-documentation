# Configure your project

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

<sup>Last updated: April 26, 2019</sup>

To complete the SDK import process, you must add the player license key and import the `JWPlayerController`.

## Objective-C

1. In Xcode, open **AppDelegate.m**.
2. Set the player license key by adding `JWPlayerController setPlayerKey` in `application:didFinishLaunchingWithOptions`.  This approach allows you to either set the license within the code or to insert a methos to retrieve the license key from a remote location.
3. Import **JWPlayerController.h** into any file that will have an embedded player.<br/><br/>`#import <JWPlayer_iOS_SDK/JWPlayerController.h>`

You have configured your project. You can now [add a player to your view](../add-a-player-to-your-view).

<br/>

## Swift

1. In Xcode, open **AppDelegate.swift**.
2. Set the player license key by adding `JWPlayerController setPlayerKey` in `application:didFinishLaunchingWithOptions`. This approach allows you to either set the license within the code or to insert a methos to retrieve the license key from a remote location.
3. Create a <a href="https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift" target="_blank">bridging header file</a> and import **JWPlayerController.h**. If Xcode does not display a pop-up window with an option to create a bridging header file, you will have to create this file manually.

You have configured your project. You can now [add a player to your view](../add-a-player-to-your-view).


<br/>

**AppDelegate**

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

!!!tip
As an alternative to steps 1-2, you can add the player license key to the **Info.plist** of your app. <br/><br/>&bull; Create a **Key** named **JWPlayerKey**.<br/>&bull; From the **Type** options, select **String**.<br/>&bull; Set your player license key as the **Value**.
!!!

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
