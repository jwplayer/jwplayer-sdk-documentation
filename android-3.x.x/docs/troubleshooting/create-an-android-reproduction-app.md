# Create an Android reproduction app

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: March 14, 2019</sup>

After reading our [documentation](https://developer.jwplayer.com/sdk/android/docs/developer-guide/), reviewing our [code samples](https://developer.jwplayer.com/android-sdk/demos/), and examining our demo, you may still be unable to resolve an implementation issue. At this point, you should replicate the issue using the JW Player SDK for Android Open Source Demo and submit a support ticket with a link to a zipped version of the entire Android Studio Project for review. 

Reproduction apps reduce the time necessary to resolve your issue in several ways:

- Clearly shows the implementation of your code
- Eliminates non-essential code and libraries
- Enables the Support Team to suggest code revisions

!!!
Be sure that your Android app is written in Java.
!!!

## Create a reproduction app
When submitting a support ticket for an Android SDK issue, follow these steps:

1. Download the <a href="https://github.com/jwplayer/jwplayer-sdk-android-demo" target="_blank">JW Player SDK for Android Open Source Demo</a>.
2. Using <a href="https://developer.android.com/studio/" target="_blank">Android Studio</a>, replicate the issue in the JW Player Demo app.
3. Zip the entire Android Studio project.
4. Upload the zipped project to your server. 

## Submit a support ticket
When [submitting support ticket](https://support.jwplayer.com/submit-support-case) for an Android SDK issue, please provide the following information in the **Description** field of your support ticket: 

- Android version of the device:
- Device make and model:
- Version number of the JW Player SDK for Android (not the demo app):
- What behavior did you expect from the player?:
- What behavior is actually occuring with the player?:
- Please provide stey-by-step instructions to reproduce this behavior in your reproduction app:
- (Optional) Provide a link to a video or screencast of the behavior:

In the **Reproduction page** field, enter the URL of your zipped project.

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