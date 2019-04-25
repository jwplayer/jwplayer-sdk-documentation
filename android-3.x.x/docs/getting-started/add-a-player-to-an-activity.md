# Add a player to an activity

<sup>Last Updated: April 25, 2019</sup>

The `JWPlayerView` is the central UI component of our SDK. This class allows you to easily load new media into the player, manage video and audio playback, and register multiple event listeners that could help you with custom analytics or error handling.

Use the following steps and code examples to add the `JWPlayerView` to the **app/res/layout/activity_main.xml** and **app/java/MainActivity.java** files of your app:

1. In **app/res/layout/activity_main.xml**, add the `JWPlayerView`.
2. In **app/java/MainActivity.java**, define `mPlayerView` to reference the `JWPlayerView` in **app/res/layout/activity_main.xml**.
3. Create a `PlaylistItem` object named `playlistItem`. At the minimum, you *must include* the `file` and `mediaId` properties.
4. Create a `List<PlaylistItem>` object called `playlist`. <br/><br/>For example: `List<PlaylistItem> playlist = new ArrayList<>();`<br/><br/>
5. Add `playlistItem` to `playlist`.
6. Use `PlayerConfig.Builder()` to create a `config` object that defines the properties of the player.
7. Assign `playlist` to `config`.
8. Set up `mPlayerView` with `config`.

<br/>

**app/res/layout/activity_main.xml**:

```xml
 <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="horizontal">

        <com.longtailvideo.jwplayer.JWPlayerView
            xmlns:jwp="http://schemas.android.com/apk/lib/com.longtailvideo.jwplayer"
            android:id="@+id/jwplayer"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            jwp:jw_autostart="true" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Hello World!"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintLeft_toLeftOf="parent"
            app:layout_constraintRight_toRightOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

    </LinearLayout>
```

<br/>

**app/java/MainActivity.java**:

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mPlayerView = (JWPlayerView) findViewById(R.id.jwplayer);
        PlaylistItem playlistItem = new PlaylistItem.Builder()
            .file("https://content.jwplatform.com/videos/zf79GW51-VhzQqByf.mp4")
            .image("https://content.jwplatform.com/thumbs/zf79GW51-720.jpg")
            .mediaId("zf79GW51")
            .build();

        List<PlaylistItem> playlist = new ArrayList<>();
        playlist.add(playlistItem);
        PlayerConfig config = new PlayerConfig.Builder()
            .playlist(playlist)
            .autostart(true)
            .build();
        mPlayerView.setup(config);

    }
}
```

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