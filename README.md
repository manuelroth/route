# route
If a developer wants to launch a new app or push out a major update, they post links to every appstore their app is available on. The users have to decide which one works for their device.
Wouldn't it be great if there was just one short link, which automatically routes them to the corresponding appstore. Thats exactly what route does.
It lets you add links to all appstores and provides a simple short link. If a user touches the link, the services determines the appstore based on the user agent string and routes to that appstore.

## Internals

We use [express-useragent](https://github.com/biggora/express-useragent) for
detecting mobile platforms.

## Build

You need gulp to run the tests.

```
npm install -g gulp
```

Now you can execute the tests and lint the project.

```
gulp
```
