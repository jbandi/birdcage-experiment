## npm link workaround
Data access modules should be linked via `npm link`

However there is a bug in ReactNative and it does not work with symlinks in `node_modules`:
https://github.com/facebook/react-native/issues/637

As a workaround you should copy the linked libs to your lokal `npm_modules`.

This is hardcoded in `package.json` ... adjust the paths ...


## Genymotion
Genymotion can't access localhost or 127.0.0.1.

You have to use the real network address of the host ...

I did not manage to get React Native when configuring the Android VM to use a proxy ...


## iOS Simulator
You can only access localhost over http.   
127.0.0.1 does not work ...

See also `ios/birdcage/Info.plist`



