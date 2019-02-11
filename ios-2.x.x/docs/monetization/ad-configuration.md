TODO: Show basic ad embed

# Ad Configuration

If custom ad handling is necessary (for example, to enable ad skipping or to display a custom ad message), adConfig (which is an instance of JWAdConfig) can be passed:

Objective C:

	JWAdConfig *adConfig = [JWAdConfig new];
	adConfig.adMessage = @"Ad duration countdown xx";
	adConfig.skipMessage = @"Skip in xx";
	adConfig.skipText = @"Move on";
	adConfig.skipOffset = 3;
	config.adConfig = adConfig;

Swift: 

	var adConfig: JWAdConfig = JWAdConfig()
	adConfig.adMessage = "Ad duration countdown xx"
	adConfig.skipMessage = "Skip in xx"
	adConfig.skipText = "Move on"
	adConfig.skipOffset = 3
	config.adConfig = adConfig