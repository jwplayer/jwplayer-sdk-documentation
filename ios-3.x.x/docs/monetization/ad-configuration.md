TODO: Show basic ad embed

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

# Ad Configuration

To customize the Advertising experience (for example, to enable ad skipping or to display a custom ad message), an instance of the `JWAdConfig` can be set to the `JWConfig`'s `advertising` property:

```Objective-C
	JWAdConfig *adConfig = [JWAdConfig new];
	adConfig.adMessage = @"Ad duration countdown xx";
	adConfig.skipMessage = @"Skip in xx";
	adConfig.skipText = @"Move on";
	adConfig.skipOffset = 3;
	config.advertising = adConfig;
```

```swift
	var adConfig: JWAdConfig = JWAdConfig()
	adConfig.adMessage = "Ad duration countdown xx"
	adConfig.skipMessage = "Skip in xx"
	adConfig.skipText = "Move on"
	adConfig.skipOffset = 3
	config.advertising = adConfig
```