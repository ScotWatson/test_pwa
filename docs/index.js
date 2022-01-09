// (c) 2022 Scot Watson  All Rights Reserved
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function projectFile(filename) {
  return window.location.pathname + filename;
}

function notify() {
  if (document.body.style.backgroundColor === "#404040") {
    document.body.style.backgroundColor === "#C0C0C0";
  } else {
    document.body.style.backgroundColor === "#404040";
  }
}
setInterval(notify, 2000);

// Register service worker to control making site work offline

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(projectFile("sw.js"))
    .then(() => { alert("Service Worker Registered"); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  // Stash the event so it can be triggered later.
  // Update UI to notify the user they can add to home screen
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = "block";
  addBtn.addEventListener("click", () => {
    // hide our user interface that shows our A2HS button
    // Show the prompt
    // Wait for the user to respond to the prompt
    addBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});
