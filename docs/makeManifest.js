let webManifest = {};
webManifest.description = "Bare minimum to provide a PWA  (c) 2022 Scot Watson  All Rights Reserved";
webManifest.display = "fullscreen";
webManifest.icons = [];
webManifest.icons.push({
  "src": "https://scotwatson.github.io/test_pwa/icon.png",
  "sizes": "192x192",
  "type": "image/png"
});
webManifest.name = "Test Web App";
webManifest.short_name = "PWA";
webManifest.start_url = "https://scotwatson.github.io/test_pwa/index.html";
let strWebManifest = JSON.stringify(webManifest);
console.log(strWebManifest);
let blobWebManifest = new Blob( [ strWebManifest ] );
let linkWebManifest = document.createElement("link");
let urlWebManifest = URL.createObjectURL(blobWebManifest);
linkWebManifest.setAttribute("rel", "manifest");
linkWebManifest.setAttribute("href", urlWebManifest);
document.head.appendChild(linkWebManifest);
