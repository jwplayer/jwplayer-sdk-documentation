TODO: Show basic ad embed

# Ad Configuration

To customize the Advertising experience (for example, to enable ad skipping or to display a custom ad message), an instance of the JWAdConfig can be set to the JWConfig's advertising property:

Objective C:

	JWAdConfig *adConfig = [JWAdConfig new];
	adConfig.adMessage = @"Ad duration countdown xx";
	adConfig.skipMessage = @"Skip in xx";
	adConfig.skipText = @"Move on";
	adConfig.skipOffset = 3;
	config.advertising = adConfig;

Swift: 

	var adConfig: JWAdConfig = JWAdConfig()
	adConfig.adMessage = "Ad duration countdown xx"
	adConfig.skipMessage = "Skip in xx"
	adConfig.skipText = "Move on"
	adConfig.skipOffset = 3
	config.advertising = adConfig