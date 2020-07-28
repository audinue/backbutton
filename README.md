# backbutton

Simple backbutton event provider for JavaScript web apps which maintain their own history stack.

Usage:

```js
addEventListener('backbutton', function (e) {
  console.log('back button pressed')
  // Call e.preventDefault() to exit your app
})
```
