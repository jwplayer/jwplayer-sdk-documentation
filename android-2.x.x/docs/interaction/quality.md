# QualityLevel

The `QualityLevel` class represents a quality variant in a HLS or DASH stream. Quality levels are sent to the developer via the `onQualityLevels()` callback.

## Quality API Methods

| Method                                  | Description                                                                                 |
|:----------------------------------------|:--------------------------------------------------------------------------------------------|
| `List<QualityLevel> getQualityLevels()` | Returns a list of the currently available quality levels                                    |
| `int getCurrentQuality()`               | Returns the index of the current quality level in the List returned by `getQualityLevels()` |
| `setCurrentQuality(int index)`          | Sets the quality level to the provided index                                                |

## Quality Callbacks

| Callback                                    | Description                                                                                                                               |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| `onLevels(final List<QualityLevel> levels)` | Fired when the list of quality levels is updated. Happens shortly after an item starts playing.                                           |
| `onLevelsChanged(int currentQuality)`       | Fired when the active quality level is changed. Happens in response to a user clicking the control bar or a call to `setCurrentQuality()` |
