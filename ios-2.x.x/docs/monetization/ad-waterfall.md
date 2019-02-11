# Ad Waterfalling 

To create an ad waterfall, an array of ad tags is passed to a JWAdBreak object:

	NSArray *tags = @[@"/firstVast.xml", @"/secondVast.xml"];
	JWAdBreak *adBreak = [JWAdBreak adBreakWithTags:tags offset:@”10%”];

If the first tag in the tags array fails to play, the player falls back to the second in the list and so on, until it finds one that can be played.
