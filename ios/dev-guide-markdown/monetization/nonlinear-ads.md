# Non-linear ads

Non-linear ads are now supported by our vast plugin. You can either pass in a non-linear ad tag or pass in a VMAP file containing an ad overlay; in the case of a non-linear ad tag, you must set the `JWAdBreak`'s `type` property to `JWAdTypeNonlinear`.
Please note that Google IMA does not support non-linear ads currently. 


	JWAdBreak *nonlinearAdBreak = [JWAdBreak adBreakWithTag:@"nonlinear/ad.xml" offset:@"5"];
     nonlinearAdBreak.type = JWAdTypeNonlinear;