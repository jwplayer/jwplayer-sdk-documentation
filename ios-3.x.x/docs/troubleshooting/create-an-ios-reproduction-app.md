# Create an iOS reproduction app

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

<sup>Last Updated: March 14, 2019</sup>

After reading our [documentation](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/), reviewing our [code samples](https://developer.jwplayer.com/ios-sdk/demos/), and examining our demo, you may still be unable to resolve an implementation issue. At this point, you should replicate the issue using the JW Player Open Source Demo for iOS and submit a support ticket that includes a link to a zipped Xcode project of a reproduction app.

Reproduction apps reduce the time necessary to resolve your issue in several ways:

- Clearly shows your implementation using our framework
- Eliminates non-essential code and libraries
- Enables the Support Team suggest code revisions

!!!
Be sure that your iOS app is written in Objective-C.
!!!

<br/>

## Create a reproduction app

When submitting a support ticket for an iOS SDK issue, follow these steps:

1. Download the [JW Player Open Source Demo for iOS](https://github.com/jwplayer/jwplayer-sdk-ios-demo).
2. Using Xcode, replicate the issue in the JW Player Demo app.
3. Zip the entire Xcode project.
4. Upload the zipped project to your server. 

## Submit a support ticket
When [submitting support ticket](https://support.jwplayer.com/submit-support-case) for an iOS SDK issue, please provide the following information in the **Description** field of your support ticket: 

- Version number of the JW Player SDK for iOS (not of the demo app):
- Test device/simulator model and iOS version:
- What behavior do you expect from the player?:
- What behavior is actually occuring with the player?:
- Please provide stey-by-step instructions to reproduce this behavior on your reproduction page. When in doubt, it is better to have more simple steps than fewer complex steps:
- (Optional) Provide a link to a video or screencast of the behavior:

In the **Reproduction** page field, enter the URL of your zipped project.

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