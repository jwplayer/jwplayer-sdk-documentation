# Monetize your content

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: May 29, 2019</sup>

JW Player's advertising features help you to monetize your content with video ads while keeping your viewers engaged. JW Player supports standard ad types (VAST, VPAID, VMAP), accommodates third-party technologies (Google IMA SDK, FreeWheel SDK), and supports any ad server that returns the previously-mentioned ad types. You can customize your viewers' ad experiences with ad rules, ad breaks, and localized player messaging.

!!!important
To monetize your content with advertising, you must have a JW Player Business or Enterprise license. Please [contact our team](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) to upgrade your account.
!!!

<br/>

## Get the required items

To begin running advertising through your JW Player, you need the items in the following table.

| Item | Description |
| -- | -- |
| An embedded JW Player | A JW Player with content<br/><br/>If you have not already, [add a player to your activity](../../getting-started/add-a-player-to-an-activity).|
| An ad tag | URL of the ad tag for VAST and IMA plugins, or a string placeholder for FreeWheel<br/><br/>The ad tag should be an active tag generated from an advertising platform in a [supported ad format](https://support.jwplayer.com/articles/ad-formats-reference">supported ad format</a>). |

<br/>

## Add a pre-roll ad break to a player

The most basic advertising implementation is to run a single VAST ad tag as a pre-roll before each Playlist item.

Use the following steps to add a pre-roll to the [player you added to your activity](../../getting-started/add-a-player-to-an-activity): 

1. In **app/java/MainActivity.java**, create a `List<AdBreak>` object called `adSchedule`.
2. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html" target="_blank">AdBreak</a> object named `adBreak`. At the minimum, you must pass an ad tag to the `tag` property.
3. Add `adBreak` to `adSchedule`.
4. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/Advertising.html" target="_blank">Advertising</a> object named `advertising`. Use `AdSource.VAST`(which defines the ad client) and `adSchedule` (which defines the ad schedule to use) as the arguments.
5. Add `advertising(advertising)` to the `config` object of the player. This adds the ad schedule to the player.

<br/>

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .build();
        
adSchedule.add(adBreak);

Advertising advertising = new Advertising(AdSource.VAST, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .mediaId("123acb4e")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);


PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .autostart(true)
    .build();

mPlayerView.setup(config);
```

You can build upon this basic implementation by [adding more ad breaks](#multiple-ad-breaks) or [defining ad rules](../define-ad-rules).

<br/>

<a name="multiple-ad-breaks"></a>

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous VAST pre-roll example:

1. Define an additional `AdBreak` object.
2. Assign an ad tag to the `tag` property. 
3. When defining the <a href="https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html#offset-java.lang.String-" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll or post-roll ad:<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (Number) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{xx%}**: (String) Ad plays after xx% of the content has played.<br/><br/>**Post-roll**<br/>&nbsp;&nbsp;- `post`: (String) Ad plays after the content.
4. Add the additional `AdBreak` object to `adSchedule`.

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .offset("pre")
    .build();

AdBreak adBreak2 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll1.xml")
    .offset("10")
    .build();

AdBreak adBreak3 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll2.xml")
    .offset("00:00:15:000")
    .build();

AdBreak adBreak4 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll3.xml")
    .offset("25%")
    .build();

AdBreak adBreak5 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-post-roll.xml")
    .offset("post")
    .build();
        
adSchedule.add(adBreak);
adSchedule.add(adBreak2);
adSchedule.add(adBreak3);
adSchedule.add(adBreak4);
adSchedule.add(adBreak5);

Advertising advertising = new Advertising(AdSource.VAST, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .mediaId("123acb4e")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);


PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .autostart(true)
    .build();

mPlayerView.setup(config);
```

You can build on this basic implementation by [defining ad rules](../define-ad-rules).

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