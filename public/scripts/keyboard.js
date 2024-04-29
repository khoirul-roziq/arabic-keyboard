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
function multiValueKeyButton(classBtn, indicatorValue, arabicData) {
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
  if (arabicData.arabicSecond) {
    var secondValueSpan = document.createElement("span");
    secondValueSpan.classList.add("second-value");
    secondValueSpan.textContent = eval(
      '"' + arabicData.arabicSecond.unicode + '"'
    );
  }

  // Append indicator and second value spans to key-info div
  keyInfoDiv.appendChild(indicatorSpan);
  if (arabicData.arabicSecond) {
    keyInfoDiv.appendChild(secondValueSpan);
  }

  // Create main-value div
  var mainValueDiv = document.createElement("div");
  if (arabicData.arabic) {
    mainValueDiv.classList.add("main-value", "font-kitab");
    mainValueDiv.textContent = eval('"' + arabicData.arabic.unicode + '"');
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

function generateValueButton() {
  buttonData.forEach((element) => {
    if (element.key === "1") {
      multiValueKeyButton("btn-n1", 1, element);
    } else if (element.key === "2") {
      multiValueKeyButton("btn-n2", 2, element);
    } else if (element.key === "3") {
      multiValueKeyButton("btn-n3", 3, element);
    } else if (element.key === "4") {
      multiValueKeyButton("btn-n4", 4, element);
    } else if (element.key === "5") {
      multiValueKeyButton("btn-n5", 5, element);
    } else if (element.key === "6") {
      multiValueKeyButton("btn-n6", 6, element);
    } else if (element.key === "7") {
      multiValueKeyButton("btn-n7", 7, element);
    } else if (element.key === "8") {
      multiValueKeyButton("btn-n8", 8, element);
    } else if (element.key === "9") {
      multiValueKeyButton("btn-n9", 9, element);
    } else if (element.key === "0") {
      multiValueKeyButton("btn-n0", 0, element);
    } else if (element.key === "q") {
      multiValueKeyButton("btn-q", "q", element);
    } else if (element.key === "w") {
      multiValueKeyButton("btn-w", "w", element);
    } else if (element.key === "e") {
      multiValueKeyButton("btn-e", "e", element);
    } else if (element.key === "r") {
      multiValueKeyButton("btn-r", "r", element);
    } else if (element.key === "t") {
      multiValueKeyButton("btn-t", "t", element);
    } else if (element.key === "y") {
      multiValueKeyButton("btn-y", "y", element);
    } else if (element.key === "u") {
      multiValueKeyButton("btn-u", "u", element);
    } else if (element.key === "i") {
      multiValueKeyButton("btn-i", "i", element);
    } else if (element.key === "o") {
      multiValueKeyButton("btn-o", "o", element);
    } else if (element.key === "p") {
      multiValueKeyButton("btn-p", "p", element);
    } else if (element.key === "[") {
      multiValueKeyButton("btn-lsb", "[", element);
    } else if (element.key === "]") {
      multiValueKeyButton("btn-rsb", "]", element);
    } else if (element.key === "a") {
      multiValueKeyButton("btn-a", "a", element);
    } else if (element.key === "s") {
      multiValueKeyButton("btn-s", "s", element);
    } else if (element.key === "d") {
      multiValueKeyButton("btn-d", "d", element);
    } else if (element.key === "f") {
      multiValueKeyButton("btn-f", "f", element);
    } else if (element.key === "g") {
      multiValueKeyButton("btn-g", "g", element);
    } else if (element.key === "h") {
      multiValueKeyButton("btn-h", "h", element);
    } else if (element.key === "j") {
      multiValueKeyButton("btn-j", "j", element);
    } else if (element.key === "k") {
      multiValueKeyButton("btn-k", "k", element);
    } else if (element.key === "l") {
      multiValueKeyButton("btn-l", "l", element);
    } else if (element.key === ";") {
      multiValueKeyButton("btn-sc", ";", element);
    } else if (element.key === "'") {
      multiValueKeyButton("btn-sq", "'", element);
    } else if (element.key === "\\") {
      multiValueKeyButton("btn-bsl", "\\", element);
    } else if (element.key === "z") {
      multiValueKeyButton("btn-z", "z", element);
    } else if (element.key === "x") {
      multiValueKeyButton("btn-x", "x", element);
    } else if (element.key === "c") {
      multiValueKeyButton("btn-c", "c", element);
    } else if (element.key === "v") {
      multiValueKeyButton("btn-v", "a", element);
    } else if (element.key === "b") {
      multiValueKeyButton("btn-b", "b", element);
    } else if (element.key === "n") {
      multiValueKeyButton("btn-n", "n", element);
    } else if (element.key === "m") {
      multiValueKeyButton("btn-m", "m", element);
    } else if (element.key === ",") {
      multiValueKeyButton("btn-comma", ",", element);
    } else if (element.key === ".") {
      multiValueKeyButton("btn-dot", ".", element);
    } else if (element.key === "/") {
      multiValueKeyButton("btn-sl", "/", element);
    } else if (element.key === "`") {
      multiValueKeyButton("btn-bt", "`", element);
    } else if (element.key === "-") {
      multiValueKeyButton("btn-min", "-", element);
    } else if (element.key === "=") {
      multiValueKeyButton("btn-es", "=", element);
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
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchButtonData();
  generateValueButton();
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
        valueKey = "\\u0020";
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
      unicodeTemp = mergedText;

      if(eventParam === "Backspace") {
        unicodeTemp = unicodeTemp.slice(0, -6);
      }

      // Kembalikan teks yang telah digabungkan ke dalam panel
      document.getElementById("panel").innerText = eval('"' + unicodeTemp + '"');
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

function switchValueButon(btnClass) {
  const mainValue = document.querySelector(`#keyboard  .key.${btnClass} .main-value`)
  const secondValue = document.querySelector(`#keyboard  .key.${btnClass} .key-info .second-value`)
  
  let tempValue = mainValue.textContent
  mainValue.textContent = secondValue.textContent
  secondValue.textContent = tempValue
}

// Array untuk menyimpan daftar tombol yang ingin diubah nilainya saat tombol "Shift" ditekan
const buttonsToSwitch = ["btn-n1", "btn-n2", "btn-n3", "btn-n4", "btn-n5", "btn-n6", "btn-n7", "btn-n8"];

// Function untuk menangani keydown event
document.addEventListener("keydown", function (event) {
  for (const [key, value] of Object.entries(buttonAlias)) {
    clickProcess(key, value);
  }

  // Jika tombol "Shift" ditekan, ubah nilainya untuk tombol yang ada dalam array
  if (event.key === "Shift") {
    buttonsToSwitch.forEach(button => switchValueButon(button));
  }
});

// Function untuk menangani keyup event
document.addEventListener("keyup", function (event) {
  // Jika tombol "Shift" dilepas, kembalikan nilainya untuk tombol yang ada dalam array
  if (event.key === "Shift") {
    buttonsToSwitch.forEach(button => switchValueButon(button));
  }
});
