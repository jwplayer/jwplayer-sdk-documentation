# Download the SDK
<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last updated: April 15, 2019</sup>

!!!important
If you are using JW Player SDK for Android 2.x.x, use this [SDK documentation](https://developer.jwplayer.com/sdk/android/docs/v2/developer-guide/index.html).
!!!

To add a player to your app, you must import the JW Player SDK for Android and then configure your project. You can choose one of three approaches to complete these tasks. In the following table, several notes about each approach are listed. Read each approach and click the GET STARTED link for the approach that suits your implementation needs.



|Approach|Notes|
|---|---|
|[Gradle](#gradle)|- No SDK download is required.<br/> - Core and optional modules must be added to your app. <br/>- ProGuard automatically applied. ProGuard protects the SDK classes.<br/>- An existing app is required.<br/>- Either the standard SDK repository or SDK with Amazon Fire (Fire OS 5+) support repository can be accessed.<br/><br/>[GET STARTED](#gradle)|
|[Local](#local)|- JW Player SDK for Android must be downloaded and unzipped.<br/>- Core and optional modules must be imported.<br/>- ProGuard must be configured. ProGuard protects the SDK classes.<br/>- An existing app is required.<br/><br/>[GET STARTED](#local)|
|[Demo](#demo)|- JW Player SDK for Android Open Source Demo must be downloaded.<br/>- All modules are included. No modules need to be imported or set as dependencies.<br/>- ProGuard automatically applied. ProGuard protects the SDK classes.<br/>- An existing app is not required. The open source demo is a basic demonstration app that allows you to experiment with the SDK.<br/><br/>[GET STARTED](#demo)|

<br/><br/>
<a name="gradle"></a>

## Gradle
In the following subsections, you will learn how to complete these tasks:

1. [Get required items](#gradle-reqitems).
2. [Import SDK](#gradle-import).

If you have problems completing any of these tasks, please [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.


<a name="gradle-reqitems"></a>

### Get required items

Before you begin the Gradle approach to add the SDK to your project, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player SDK for Android requires an [Enterprise](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Android Studio| 1. Download <a href="https://developer.android.com/studio/" target="_blank">Android Studio<a/>.<br/>2. <a href="https://developer.android.com/studio/install" target="_blank">Install Android Studio</a>.|
|License key | 1. From your [JW Player dashboard](https://dashboard.jwplayer.com/#/welcome), click **Players > PLAYER DOWNLOADS & KEYS**.<br/>2. In the **Downloads** section, copy the **LICENSE KEY** for the Android SDK.|


<a name="gradle-import"></a>
### Import SDK

Now that you have the required items listed in the previous subsection, you can import the JW Player SDK for Android to your project and add dependencies.

#### Add SDK to your project

1. From within Android Studio, open your app.
2. Open the build.gradle file for your project.
3. Add the JW Player Maven repository URL to your project. You can choose on one of two repositories:<br/><br/>- For the standard JW Player SDK for Android, add `https://mvn.jwplayer.com/content/repositories/releases/` to your project.<br/>- For the JW Player SDK for Android with Amazon Fire support, add `https://mvn.jwplayer.com/content/repositories/amazon/` to your project. 

```groovy
allprojects {
	repositories {
		...
		maven {
			url 'https://mvn.jwplayer.com/content/repositories/releases/'
		}
	}
}
```

#### Add SDK dependencies

1. Open the build.gradle file for your app.
2. Add the `com.longtailvideo.jwplayer:jwplayer-core` and `com.longtailvideo.jwplayer:jwplayer-common` dependencies.
3. Sync Gradle.

```groovy
dependencies {
  ...
  implementation 'com.longtailvideo.jwplayer:jwplayer-core:#sdk_version_simple#'
  implementation 'com.longtailvideo.jwplayer:jwplayer-common:#sdk_version_simple#'
}
```

You have retrieved your JW Player license key and imported the JW Player SDK for Android into your project. You can now [configure your project](../configure-project).

---

<a name="local"></a>

## Local

In the following subsections, you will learn how to complete these tasks:

1. [Get required items](#local-reqitems).
2. [Import SDK](#local-import).

If you have problems completing any of these tasks, please [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.


<a name="local-reqitems"></a>

### Get required items

Before you begin the Local approach to add the SDK to your project, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player SDK for Android requires an [Enterprise](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Android Studio| 1. Download <a href="https://developer.android.com/studio/" target="_blank">Android Studio<a/>.<br/>2. <a href="https://developer.android.com/studio/install" target="_blank">Install Android Studio</a>.|
|JW Player SDK for Android and license key | 1. From your [JW Player dashboard](https://dashboard.jwplayer.com/#/welcome), click **Players > PLAYER DOWNLOADS & KEYS**.<br/>2. In the **Downloads** section, select a **VERSION** of the Android SDK from the dropdown menu.<br/>3. Click the icon in the **DOWNLOAD** column.<br/>4. Copy the **LICENSE KEY** for the Android SDK.<br/>5. On your computer, unzip the SDK ZIP file.|

<a name="local-import"></a>

### Import SDK

Now that you have the required items listed in the previous subsection, you can add JW Player SDK for Android modules to your project and add dependencies.

#### Add module to your project

1. From within Android Studio, open your app.
2. Click **File > New > New Module... > Import .JAR / .AAR Package**.
3. Click **Next**.
4. Select jwplayer-core-#sdk_version_simple#.aar from your computer.
5. Click **Finish**.
6. Repeat the previous steps and add jwplayer-common-#sdk_version_simple#.aar.

#### Add SDK dependencies

1. Click **File > Project Structure... > Dependencies**. Under **Modules**, be sure that your app is selected.
2. Click the plus sign in the main panel.
3. Select **Module dependency**.
4. Select jwplayer-core-#sdk_version_simple# and jwplayer-common-#sdk_version_simple#.
5. Click **OK**.

You have retrieved your JW Player license key and imported the JW Player SDK for Android into your project. You can now [configure your project](../configure-project). If necessary, you can also [configure ProGuard](../configure-proguard).

---

<a name="demo"></a>

## Demo

The JW Player SDK for Android Open Source Demo is a basic demonstration app. In the following subsection, you will learn how to get required items.

If you have problems completing any of these tasks, please [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.

### Get required items

Before you can start experimenting with the JW Player SDK for Android Open Source Demo, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player SDK for Android requires an [Enterprise](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Android Studio| 1. Download <a href="https://developer.android.com/studio/" target="_blank">Android Studio<a/>.<br/>2. <a href="https://developer.android.com/studio/install" target="_blank">Install Android Studio</a>.|
|JW Player SDK for Android Open Source Demo and license key | 1. Clone the repository into your Android Studio workspace: <br/><br/>`git clone git@github.com:jwplayer/jwplayer-sdk-android-demo.git`.<br/><br/>2. From your [JW Player dashboard](https://dashboard.jwplayer.com/#/welcome), click **Players > PLAYER DOWNLOADS & KEYS**.<br/>3. In the **Downloads** section, copy the **LICENSE KEY** for the Android SDK.|

You have retrieved your JW Player license key and imported the JW Player SDK for Android Open Source Demo into Android Studio. You can now [configure your project](../configure-project).

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
