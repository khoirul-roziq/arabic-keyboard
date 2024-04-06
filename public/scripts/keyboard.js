let buttonData = [];
let unicodeTemp = "";

async function fetchButtonData() {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch(baseUrl + "/button/get/all");
    if (!response.ok) {
      throw new Error("Failed to fetch button data");
    }
    buttonData = await response.json();

    return buttonData;
  } catch (error) {
    console.error(error);
  }
}

// Function to generate the keyboard element
function multiValueKeyButton(classBtn, indicatorValue, mainValue) {
  // Get the reference to the keyboard div
  var keyboardDiv = document.getElementById("keyboard");

  // Create a new div element for the key
  var keyDiv = document.createElement("div");
  keyDiv.classList.add("key", "multi-value", classBtn);

  // Create key-info div
  var keyInfoDiv = document.createElement("div");
  keyInfoDiv.classList.add("key-info");

  // Create span for indicator
  var indicatorSpan = document.createElement("span");
  indicatorSpan.classList.add("indicator");
  indicatorSpan.textContent = indicatorValue;

  // Create span for second value
  // var secondValueSpan = document.createElement("span");
  // secondValueSpan.classList.add("second-value");
  // secondValueSpan.textContent = "ظ";

  // Append indicator and second value spans to key-info div
  keyInfoDiv.appendChild(indicatorSpan);
  // keyInfoDiv.appendChild(secondValueSpan);

  // Create main-value div
  var mainValueDiv = document.createElement("div");
  if (mainValue) {
    mainValueDiv.classList.add("main-value", "font-kitab");
    mainValueDiv.textContent = eval('"' + mainValue + '"');
  } else {
    mainValueDiv.classList.add("main-value");
    mainValueDiv.textContent = "";
  }

  // Append key-info div and main-value div to key div
  keyDiv.appendChild(keyInfoDiv);
  keyDiv.appendChild(mainValueDiv);

  // Append the key div to the keyboard div
  keyboardDiv.appendChild(keyDiv);
}

// Function to generate the keyboard element
function singleValueKeyButton(classBtn, mainValue) {
  // Get the reference to the keyboard div
  var keyboardDiv = document.getElementById("keyboard");

  // Create a new div element for the key
  var keyDiv = document.createElement("div");
  keyDiv.classList.add("key", classBtn);

  // Create main-value div
  var mainValueDiv = document.createElement("div");
  mainValueDiv.classList.add("main-value");
  mainValueDiv.textContent = mainValue;

  // Append main-value div to key div
  keyDiv.appendChild(mainValueDiv);

  // Append the key div to the keyboard div
  keyboardDiv.appendChild(keyDiv);
}

document.addEventListener("DOMContentLoaded", async function () {
  const dataKeyButton = await fetchButtonData();

  dataKeyButton.forEach((element) => {
    if (element.key === "1") {
      if (element.arabic) {
        multiValueKeyButton("btn-n1", 1, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n1", 1, null);
      }
    } else if (element.key === "2") {
      if (element.arabic) {
        multiValueKeyButton("btn-n2", 2, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n2", 2, null);
      }
    } else if (element.key === "3") {
      if (element.arabic) {
        multiValueKeyButton("btn-n3", 3, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n3", 3);
      }
    } else if (element.key === "4") {
      if (element.arabic) {
        multiValueKeyButton("btn-n4", 4, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n4", 4);
      }
    } else if (element.key === "5") {
      if (element.arabic) {
        multiValueKeyButton("btn-n5", 5, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n5", 5);
      }
    } else if (element.key === "6") {
      if (element.arabic) {
        multiValueKeyButton("btn-n6", 6, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n6", 6);
      }
    } else if (element.key === "7") {
      if (element.arabic) {
        multiValueKeyButton("btn-n7", 7, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n7", 7);
      }
    } else if (element.key === "8") {
      if (element.arabic) {
        multiValueKeyButton("btn-n8", 8, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n8", 8);
      }
    } else if (element.key === "9") {
      if (element.arabic) {
        multiValueKeyButton("btn-n9", 9, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n9", 9);
      }
    } else if (element.key === "0") {
      if (element.arabic) {
        multiValueKeyButton("btn-n0", 0, element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n0", 0);
      }
    } else if (element.key === "q") {
      if (element.arabic) {
        multiValueKeyButton("btn-q", "q", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-q", "q");
      }
    } else if (element.key === "w") {
      if (element.arabic) {
        multiValueKeyButton("btn-w", "w", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-w", "w");
      }
    } else if (element.key === "e") {
      if (element.arabic) {
        multiValueKeyButton("btn-e", "e", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-e", "e");
      }
    } else if (element.key === "r") {
      if (element.arabic) {
        multiValueKeyButton("btn-r", "r", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-r", "r");
      }
    } else if (element.key === "t") {
      if (element.arabic) {
        multiValueKeyButton("btn-t", "t", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-t", "t");
      }
    } else if (element.key === "y") {
      if (element.arabic) {
        multiValueKeyButton("btn-y", "y", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-y", "y");
      }
    } else if (element.key === "u") {
      if (element.arabic) {
        multiValueKeyButton("btn-u", "u", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-u", "u");
      }
    } else if (element.key === "i") {
      if (element.arabic) {
        multiValueKeyButton("btn-i", "i", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-i", "i");
      }
    } else if (element.key === "o") {
      if (element.arabic) {
        multiValueKeyButton("btn-o", "o", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-o", "o");
      }
    } else if (element.key === "p") {
      if (element.arabic) {
        multiValueKeyButton("btn-p", "p", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-p", "p");
      }
    } else if (element.key === "[") {
      if (element.arabic) {
        multiValueKeyButton("btn-lsb", "[", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-lsb", "[");
      }
    } else if (element.key === "]") {
      if (element.arabic) {
        multiValueKeyButton("btn-rsb", "]", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-rsb", "]");
      }
    } else if (element.key === "a") {
      if (element.arabic) {
        multiValueKeyButton("btn-a", "a", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-a", "a");
      }
    } else if (element.key === "s") {
      if (element.arabic) {
        multiValueKeyButton("btn-s", "s", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-s", "s");
      }
    } else if (element.key === "d") {
      if (element.arabic) {
        multiValueKeyButton("btn-d", "d", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-d", "d");
      }
    } else if (element.key === "f") {
      if (element.arabic) {
        multiValueKeyButton("btn-f", "f", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-f", "f");
      }
    } else if (element.key === "g") {
      if (element.arabic) {
        multiValueKeyButton("btn-g", "g", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-g", "g");
      }
    } else if (element.key === "h") {
      if (element.arabic) {
        multiValueKeyButton("btn-h", "h", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-h", "h");
      }
    } else if (element.key === "j") {
      if (element.arabic) {
        multiValueKeyButton("btn-j", "j", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-j", "j");
      }
    } else if (element.key === "k") {
      if (element.arabic) {
        multiValueKeyButton("btn-k", "k", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-k", "k");
      }
    } else if (element.key === "l") {
      if (element.arabic) {
        multiValueKeyButton("btn-l", "l", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-l", "l");
      }
    } else if (element.key === ";") {
      if (element.arabic) {
        multiValueKeyButton("btn-sc", ";", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-sc", ";");
      }
    } else if (element.key === "'") {
      if (element.arabic) {
        multiValueKeyButton("btn-sq", "'", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-sq", "'");
      }
    } else if (element.key === "\\") {
      if (element.arabic) {
        multiValueKeyButton("btn-bsl", "\\", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-bsl", "\\");
      }
    } else if (element.key === "z") {
      if (element.arabic) {
        multiValueKeyButton("btn-z", "z", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-z", "z");
      }
    } else if (element.key === "x") {
      if (element.arabic) {
        multiValueKeyButton("btn-x", "x", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-x", "x");
      }
    } else if (element.key === "c") {
      if (element.arabic) {
        multiValueKeyButton("btn-c", "c", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-c", "c");
      }
    } else if (element.key === "v") {
      if (element.arabic) {
        multiValueKeyButton("btn-v", "a", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-v", "v");
      }
    } else if (element.key === "b") {
      if (element.arabic) {
        multiValueKeyButton("btn-b", "b", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-b", "b");
      }
    } else if (element.key === "n") {
      if (element.arabic) {
        multiValueKeyButton("btn-n", "n", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-n", "n");
      }
    } else if (element.key === "m") {
      if (element.arabic) {
        multiValueKeyButton("btn-m", "m", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-m", "m");
      }
    } else if (element.key === ",") {
      if (element.arabic) {
        multiValueKeyButton("btn-comma", ",", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-comma", ",");
      }
    } else if (element.key === ".") {
      if (element.arabic) {
        multiValueKeyButton("btn-dot", ".", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-dot", ".");
      }
    } else if (element.key === "/") {
      if (element.arabic) {
        multiValueKeyButton("btn-sl", "/", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-sl", "/");
      }
    } else if (element.key === "`") {
      if (element.arabic) {
        multiValueKeyButton("btn-bt", "`", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-bt", "`");
      }
    } else if (element.key === "-") {
      if (element.arabic) {
        multiValueKeyButton("btn-min", "-", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-min", "-");
      }
    } else if (element.key === "=") {
      if (element.arabic) {
        multiValueKeyButton("btn-es", "=", element.arabic.unicode);
      } else {
        multiValueKeyButton("btn-es", "=");
      }
    } else if (element.code === "Space") {
      singleValueKeyButton("btn-spc", element.code);
    } else if (element.key === "Backspace") {
      singleValueKeyButton("btn-bs", element.key);
    } else if (element.key === "Delete") {
      singleValueKeyButton("btn-dlt", element.key);
    } else if (element.key === "Enter") {
      singleValueKeyButton("btn-enter", element.key);
    } else if (element.key === "PageUp") {
      singleValueKeyButton("btn-pu", element.key);
    } else if (element.key === "PageDown") {
      singleValueKeyButton("btn-pd", element.key);
    } else if (element.key === "Tab") {
      singleValueKeyButton("btn-tab", element.key);
    } else if (element.key === "CapsLock") {
      singleValueKeyButton("btn-cl", element.key);
    } else if (element.code === "ShiftRight") {
      singleValueKeyButton("btn-rs", element.key);
    } else if (element.key === "Home") {
      singleValueKeyButton("btn-home", element.key);
    } else if (element.key === "End") {
      singleValueKeyButton("btn-end", element.key);
    } else if (element.code === "ShiftLeft") {
      singleValueKeyButton("btn-ls", element.key);
    } else if (element.key === "ArrowUp") {
      singleValueKeyButton("btn-up", "\u2191");
    } else if (element.key === "ArrowRight") {
      singleValueKeyButton("btn-right", "\u2192");
    } else if (element.key === "ArrowDown") {
      singleValueKeyButton("btn-down", "\u2193");
    } else if (element.key === "ArrowLeft") {
      singleValueKeyButton("btn-left", "\u2190");
    } else if (element.key === "WakeUp") {
      singleValueKeyButton("btn-fn", "Fn");
    } else if (element.code === "ControlRight") {
      singleValueKeyButton("btn-rctrl", "Ctrl");
    } else if (element.code === "ControlLeft") {
      singleValueKeyButton("btn-lctrl", "Ctrl");
    } else if (element.code === "AltRight") {
      singleValueKeyButton("btn-ralt", element.key);
    } else if (element.code === "AltLeft") {
      singleValueKeyButton("btn-lalt", element.key);
    } else if (element.key === "Meta") {
      singleValueKeyButton("btn-win", element.key);
    } else if (element.key === "Insert") {
      singleValueKeyButton("btn-in", element.key);
    } else if (element.key === "Escape") {
      singleValueKeyButton("btn-esc", "Esc");
    }
  });
});

function clickProcess(btnKey, btnClass) {
  let eventParam;
  // Memeriksa apakah tombol yang ditekan adalah "Shift", "Control", "Alt", atau "Space"
  if (
    event.key === "Shift" ||
    event.key === "Control" ||
    event.key === "Alt" ||
    event.code === "Space"
  ) {
    eventParam = event.code;
  } else {
    // Jika tombol yang ditekan bukan "Shift", "Control", "Alt", atau "Space"
    eventParam = event.key;
  }

  if (eventParam === btnKey) {
    event.preventDefault(); // Mencegah perilaku default
    const keyElement = document.querySelector(`.${btnClass}`);
    if (keyElement) {
      keyElement.classList.add("btn-keydown");

      // Fungsi untuk menangani event keyup
      document.addEventListener("keyup", function (event) {
        keyElement.classList.remove("btn-keydown");
      });

      let valueKey = "";

      if (eventParam === "Space") {
        valueKey = "\\u0020"
      } else {
        buttonData.forEach((data) => {
          if (data.key === event.key) {
            if (data.arabic) {
              valueKey = data.arabic.unicode;
            }
          }
        });
      }
      
      const mergedText = unicodeTemp + valueKey;
      unicodeTemp = mergedText

      // Kembalikan teks yang telah digabungkan ke dalam panel
      document.getElementById("panel").innerText = eval('"' + mergedText + '"')
    }
  }
}

const buttonAlias = {
  1: "btn-n1",
  2: "btn-n2",
  3: "btn-n3",
  4: "btn-n4",
  5: "btn-n5",
  6: "btn-n6",
  7: "btn-n7",
  8: "btn-n8",
  9: "btn-n9",
  0: "btn-n0",
  q: "btn-q",
  w: "btn-w",
  e: "btn-e",
  r: "btn-r",
  t: "btn-t",
  y: "btn-y",
  u: "btn-u",
  i: "btn-i",
  o: "btn-o",
  p: "btn-p",
  a: "btn-a",
  s: "btn-s",
  d: "btn-d",
  f: "btn-f",
  g: "btn-g",
  h: "btn-h",
  j: "btn-j",
  k: "btn-k",
  l: "btn-l",
  z: "btn-z",
  x: "btn-x",
  c: "btn-c",
  v: "btn-v",
  b: "btn-b",
  n: "btn-n",
  m: "btn-m",
  "`": "btn-bt",
  "-": "btn-min",
  "=": "btn-es",
  "[": "btn-lsb",
  "]": "btn-rsb",
  ";": "btn-sc",
  "'": "btn-sq",
  "\\": "btn-bsl",
  ",": "btn-comma",
  ".": "btn-dot",
  "/": "btn-sl",
  Enter: "btn-enter",
  Backspace: "btn-bs",
  Delete: "btn-dlt",
  PageUp: "btn-pu",
  PageDown: "btn-pd",
  Home: "btn-home",
  End: "btn-end",
  ShiftLeft: "btn-ls",
  ShiftRight: "btn-rs",
  ControlLeft: "btn-lctrl",
  ControlRight: "btn-rctrl",
  WakeUp: "btn-fn",
  Space: "btn-spc",
  AltLeft: "btn-lalt",
  AltRight: "btn-ralt",
  Insert: "btn-in",
  ArrowUp: "btn-up",
  ArrowDown: "btn-down",
  ArrowLeft: "btn-left",
  ArrowRight: "btn-right",
  Escape: "btn-esc",
  Tab: "btn-tab",
  CapsLock: "btn-cl",
};

// Function to handle keydown event
document.addEventListener("keydown", function (event) {
  for (const [key, value] of Object.entries(buttonAlias)) {
    clickProcess(key, value);
  }
});
