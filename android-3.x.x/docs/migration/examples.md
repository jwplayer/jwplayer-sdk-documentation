# Examples

These examples assume that you have a reference to a `JWPlayerView` called player.

## Loading a Single Stream

| 1.x                                                                  | 2.x                                                                  | Description of Changes                                |
|:---------------------------------------------------------------------|:---------------------------------------------------------------------|:------------------------------------------------------|
| `player.load(new SingleSource("http://url-pointing-to/file.m3u8"));` | `player.load(new PlaylistItem("http://url-pointing-to/file.m3u8"));` | Class names changed for SingleSource vs. PlaylistItem |

## Loading a Playlist

| 1.x                                                                                                                                                                                                                                                                                                 | 2.x                                                                                                                                                                                                                                                                           | Description of Changes                                                  |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
| <code>List&lt;JWMediaSource&gt; pl = new ArrayList&lt;&gt;();<br> pl.add(new SingleSource("http://url-pointing-to/first_stream.m3u8"));<br> pl.add(new SingleSource("http://url-pointing-to/second_stream.m3u8"));<br><br> player.load(pl);<br><br> Playlist playlist = p.getPlayList();<br></code> | <code>List&lt;PlaylistItem&gt; playlist = new ArrayList&lt;&gt;();<br> playlist.add(new PlaylistItem("http://url-pointing-to/first_stream.m3u8"));<br> playlist.add(new PlaylistItem("http://url-pointing-to/second_stream.m3u8"));<br><br> player.load(playlist);<br></code> | Playlist class was removed in favor of a simple List<PlaylistItem></td> |

## Loading a Stream with an Advertising Schedule

Loading a stream with an advertising schedule containing one preroll and one midroll at 50%.

| 1.x                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 2.x                                                                                                                                                                                                                                                                                                                                                                                                               |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <code>SingleSource item = new SingleSource("http://url-to/media.m3u8");<br><br> List&lt;AdBreak&gt; adSchedule = new ArrayList&lt;&gt;();<br> adSchedule.add(new AdBreak(AdBreak.PRE_ROLL, "http://url-to/preroll.xml"));<br> adSchedule.add(new AdBreak(AdBreak.MID_ROLL, "50%", "http://url-to/midroll.xml"));<br><br> Advertising advertising = new Advertising();<br> advertising.setListOfBreaks(adSchedule);<br> item.setAdvertising(advertising);<br><br> player.load(item);<br></code> | <code>PlaylistItem plItem = new PlaylistItem("http://url-to/media.m3u8");<br><br> List&lt;AdBreak&gt; adSchedule = new ArrayList&lt;&gt;();<br> adSchedule.add(new AdBreak("pre", new Ad(AdSource.VAST, "http://url-to/preroll.xml")));<br> adSchedule.add(new AdBreak("50%", new Ad(AdSource.VAST, "http://url-to/midroll.xml")));<br> plItem.setAdSchedule(adSchedule);<br><br> player.load(plItem);<br></code> |

## Loading a Playlist with an Advertising Schedule for the Entire Playlist

Loading a playlist with an advertising schedule for the entire playlist where the schedule contains one midroll at 10% and one at 30 seconds.

| 1.x                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 2.x                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <code>List&lt;AdBreak&gt; adSchedule = new ArrayList&lt;&gt;();<br> adSchedule.add(new AdBreak(AdBreak.MID_ROLL, "10%", "http://url-to/midroll1.xml"));<br> adSchedule.add(new AdBreak(AdBreak.MID_ROLL, "30", "http://url-to/midroll2.xml"));<br> Advertising advertising = new Advertising();<br> advertising.setListOfBreaks(adSchedule);<br><br> SingleSource item1 = new SingleSource("http://url-to/media.m3u8");<br> item1.setAdvertising(advertising);<br> SingleSource item2 = new SingleSource("http://url-to/second-media.m3u8");<br> item2.setAdvertising(advertising);<br><br> List&lt;JWMediaSource&gt; playlist = new ArrayList&lt;&gt;();<br> playlist.add(item1);<br> playlist.add(item2);<br><br> player.load(playlist);<br></code> | <code>List&lt;PlaylistItem&gt; playlist = new ArrayList&lt;&gt;();<br> playlist.add(new PlaylistItem("http://url-to/media.m3u8"));<br> playlist.add(new PlaylistItem("http://url-to/second-media.m3u8"));<br><br> List&lt;AdBreak&gt; adSchedule = new ArrayList&lt;&gt;();<br> adSchedule.add(new AdBreak("10%", new Ad(AdSource.VAST, "http://url-to/midroll1.xml")));<br> adSchedule.add(new AdBreak("30", new Ad(AdSource.VAST, "http://url-to/midroll2.xml")));<br> Advertising advertising = new Advertising(AdSource.VAST, adSchedule);<br><br> player.load(playlist, advertising);<br></code> |