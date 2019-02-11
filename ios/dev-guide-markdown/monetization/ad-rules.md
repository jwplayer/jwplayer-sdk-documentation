# Ad Rules

The JW Player iOS SDK supports the JW8 Ad Rules. For more information about Ad Rules please visit the [JW8 Ad Rules reference](https://support.jwplayer.com/articles/ad-rules-reference).

To set ad rules:

    JWAdRules *adRules = [JWAdRules new];
    adRules.startOn = 2;
    adRules.frequency = 5;
    adRules.timeBetweenAds = 30;
    adRules.startOnSeek = JWAdShownPre;
    config.advertising.adRules = adRules;
    