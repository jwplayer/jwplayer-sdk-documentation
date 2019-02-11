# Configure project
<sup>Last updated: January 8, 2019</sup>

To complete the SDK import process, you must configure your project.

1. Open the AndroidManifest.xml.
2. In the `<application>` element, use a `<meta-data/>` element to add your JW Player license key. If you are using the Demo app, be sure to uncomment the `<meta-data/>` element.
3. In all `<activity>` elements that will contain a player, add `android:configChanges="keyboard|keyboardHidden|orientation|screenSize"`.  This prevents the Activity from being destroyed when rotated. If you are using the Demo app, this is already included.
4. (Optional) If your app reads media content from the user's device, add `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>`. <a href="https://developer.android.com/training/permissions/requesting" target="_blank">Request App Permissions</a> explains how requesting permissions works.

```groovy
<application>
    ...
    <meta-data
        android:name="JW_LICENSE_KEY"
        android:value="abcD1234edf56GHiJK789lm0N" />
    <activity
        ...
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize">
        ...
    </activity>
</application>
```

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