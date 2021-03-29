window.onload = () => {
  "use strict";
  if ("serviceWorker in navigator") {
    navigator.serviceWorker.register("../sw.js").then((data) => {
      console.log("service worker registered -->", data);
    });
  }
};
