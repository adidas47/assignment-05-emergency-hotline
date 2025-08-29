let callButtons = document.getElementsByClassName("callbtn");
let coinsCount = document.getElementById("coincount");
let coinsCurrent;
const historyContainer = document.getElementById("history-container");
const newHistory = document.createElement("div");
const time = new Date().toLocaleTimeString();

// Call button Functionality

for (let callbtn of callButtons) {
  callbtn.addEventListener("click", function () {
    let coinsCurrent = Number(coinsCount.innerText);
    if (coinsCurrent < 20) {
      alert("Not enough coins! Please recharge.");
      return;
    }
    const serviceName =
      callbtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callbtn.parentNode.parentNode.children[2].children[0].innerText;

    coinsCurrent -= 20;
    coinsCount.innerText = coinsCurrent;

    alert(`Calling...
${serviceName}
${serviceNumber}`);

    // Adding History List with showing time Functionality

    const historyContainer = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    const time = new Date().toLocaleTimeString();
    newHistory.innerHTML = `<div
          class="p-2 my-4 mx-2 rounded-xl flex justify-between items-center bg-gray-100"
        >
          <div>
            <h3 class="font-bold text-[14px]">${serviceName}</h3>
            <span class="font-semibold text-grey-500 text-[12px]">${serviceNumber}</span>
          </div>
          <div class="font-semibold text-grey-500 text-[12px]">${time}</div>
        </div>`;

    historyContainer.append(newHistory);
  });
}

// Call history clear button functionality

let clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  historyContainer.innerHTML = `<div class="flex justify-between items-center p-4 hind-madurai">
            <div><i class="fa-regular fa-clock w-[24px]"></i> Call History</div>
            <button
              id="clear-btn"
              class="btn w-[100px] h-[40px] text-white font-medium rounded-full bg-[#00A63E]"
            >
              Clear
            </button>
          </div>`;
});

// Copy button Functionality

let copyButtons = document.getElementsByClassName("copybtn");
let copyCounts = document.getElementById("copycount");

for (let copybtn of copyButtons) {
  copybtn.addEventListener("click", function () {
    let copyCurrent = Number(copyCounts.innerText);
    const serviceName =
      copybtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      copybtn.parentNode.parentNode.children[2].children[0].innerText;

    copyCurrent += 1;
    copyCounts.innerText = copyCurrent;

    // Copied text & Number pasting functionality

    navigator.clipboard
      .writeText(`${serviceNumber}`)
      .then(function () {
        alert(`Number Copied Successfully... ${serviceNumber}`);
      })
      .catch(function () {
        console.error("Failed to copy:", err);
      });
  });
}

// heart icon clicking Functionality

let heartIcons = document.getElementsByClassName("heart-icon");
let heartCounts = document.getElementById("heartcount");
for (let heart of heartIcons) {
  heart.addEventListener("click", function () {
    let currentHeartCount = Number(heartCounts.innerText);
    // if (heart.classList.contains("fa-regular")) {
    currentHeartCount += 1;
    heartCounts.innerText = currentHeartCount;
    // heart.classList.remove("fa-regular");
    // heart.classList.add("fa-solid", "text-red-500");

    //   } else {
    //     currentHeartCount -= 1;
    //     heartCounts.innerText = currentHeartCount;
    //     heart.classList.remove("fa-solid", "text-red-500");
    //     heart.classList.add("fa-regular");
    //   }
  });
}
