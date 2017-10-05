console.log("Embedded WebExtension", window.location.href);

browser.runtime.sendMessage("embedded_webext -> overlay addon container");

let onError = (err) => { console.error(err) };

console.log('writing foo = 42 to local storage...');
browser.storage.local.set({foo: 42}).then(() => {
  console.log('reading from local storage...');
  browser.storage.local.get('foo').then((result) => {
    console.log('the value of foo is ', result.foo);
  }, onError);
}, onError);
