window.onload = () => {
  "use strict";
  if ("serviceWorker in navigator") {
    navigator.serviceWorker.register("../sw.js").then((data) => {
      // console.log("service worker registered -->", data);
    });
  }
  if ("serviceWorker in navigator") {
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log(event.data.msg, event.data.url);
    });
  }
};
