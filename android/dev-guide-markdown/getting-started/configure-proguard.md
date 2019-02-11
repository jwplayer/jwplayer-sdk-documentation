# Configure ProGuard

<sup>Last updated: January 8, 2019</sup>

!!!
If you used the [Gradle](download-sdk/#gradle) or [Demo](download-sdk/#demo) approach to import the JW Player SDK for Android or the JW Player SDK for Android Open Source Demo, JW Player's `consumer-proguard.pro` configuration has been applied automatically. You can skip this article and [configure your project](configure-project).
!!!

If you used the [Local](download-sdk/#local) approach, no ProGuard configuration has been added. If you choose to obfuscate your code with ProGuard, add the following ProGuard configuration. This suggested ProGuard configuration ensures that the JW Player SDK for Android will work as intended.

```
ProGuard Configuration
-keepclassmembers class com.longtailvideo.jwplayer.** {
    @android.webkit.JavascriptInterface *;
}

# Block warnings about missing module classes
-dontwarn com.longtailvideo.jwplayer.**
-dontwarn com.google.ads.interactivemedia.**

# Classes get rejected without this when running the app if the app has been run through ProGuard
-keepattributes InnerClasses,EnclosingMethod

# Keep module indicator classes
-keep class com.longtailvideo.jwplayer.modules.** { *; }
```

You can now [configure your project](configure-project).

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
