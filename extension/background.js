// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     switch (msg.type) {
//         case 'popupInit':
//             response(tabStorage[msg.tabId]);
//             break;
//         default:
//             response('unknown request');
//             break;
//     }
// });

// document.addEventListener("hello", function(data) {
//     chrome.runtime.sendMessage({ message: 'hello'});
// });

// chrome.runtime.onMessage.addListener(function(message, callback) {
//   console.log('\n\n\n\n message', message)
//     if (message.data == “setAlarm”) {
//       chrome.alarms.create({delayInMinutes: 5})
//     } else if (message.data == “runLogic”) {
//       chrome.tabs.executeScript({file: 'logic.js'});
//     } else if (message.data == “changeColor”) {
//       chrome.tabs.executeScript(
//           {code: 'document.body.style.backgroundColor="orange"'});
//     } else if (message == 'hello') {
//       callback({greeting: 'welcome!'})
//     } else if (message == 'goodbye') {
//       chrome.runtime.Port.disconnect();
//     }
  // });

	chrome.runtime.onMessage.addListener(function(message, callback) {
		console.log('\n\n\n\n got messsage', message);
     if (message.data == “setAlarm”) {
       chrome.alarms.create({delayInMinutes: 5})
     } else if (message.data == “runLogic”) {
       chrome.tabs.executeScript({file: 'logic.js'});
     } else if (message.data == “changeColor”) {
       chrome.tabs.executeScript(
           {code: 'document.body.style.backgroundColor="orange"'});
     };
   });
console.log('\n\n\n\n background')
