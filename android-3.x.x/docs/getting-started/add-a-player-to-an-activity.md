# Add a player to an activity

<sup>Last Updated: April 24, 2019</sup>

The `JWPlayerView` is the central UI component of our SDK. This class allows you to easily load new media into the player, manage video and audio playback, and register multiple event listeners that could help you with custom analytics or error handling.

You must add `JWPlayerView` to the **app/res/layout/activity_main.xml** and **app/java/MainActivity.java** files of your app.

<br/>

app/res/layout/activity_main.xml
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

app/java/MainActivity.java
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
            .build();
        mPlayerView.setup(config);

    }
}
```

1. <p>In <strong>app/res/layout/activity_main.xml</strong>, add the <code>JWPlayerView</code>.</p>
2. <p>In <strong>app/java/MainActivity.java</strong>, define <code>mPlayerView</code> to reference the <code>JWPlayerView</code> in <strong>app/res/layout/activity_main.xml</strong>.</p>
3. <p>Create a <code>PlaylistItem</code> object named <code>playlistItem</code>. <br/><br/>At the minimum, you must include the <code>file</code> and <code>mediaId</code> properties.</p>
4. <p>Create a <code>List<PlaylistItem></code> object called <code>playlist</code>. <br/><br/>For example: <code>List<PlaylistItem> playlist = new ArrayList<>();</code></p>
5. <p>Add <code>playlistItem</code> to <code>playlist</code>.</p>
6. <p>Use <code>PlayerConfig.Builder()</code> to create a <code>config</code> object that defines the properties of the player.</p>
7. <p>Assign <code>playlist</code> to the <code>config</code> object.</p>
8. <p>Set up <code>mPlayerView</code> with <code>config</code>.