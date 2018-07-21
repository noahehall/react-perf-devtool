// chrome.runtime.onConnect.addListener(function(port) {
//   port.onMessage.addListener(function(msg) {
//     console.log('\n\n\n\n [age msg]', msg)
//     port.postMessage({counter: msg.counter+1});
//   });
// });
// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//     console.log('\n\n\n\n [send response msg]', request)
//     sendResponse({counter: request.counter+1});
//   });

console.log('\n\n\n\n page')

var port = chrome.runtime.connect()

window.addEventListener(
  'message',
  function(event) {
    // We only accept messages from ourselves
    if (event.source != window) {
      console.log('\n\n\n content script source not window', event)
      return
    }

    if (event.data.type && event.data.type == 'FROM_PAGE') {
      console.log('Content script received: ' + event.data.text)
      // port.postMessage(event.data.text);
      chrome.runtime.sendMessage({ greeting: 'hello' }, function(response) {
        console.log('\n\n\n\n got resp in page', response)
      })
    }
  },
  false
)
