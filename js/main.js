const english = document.querySelectorAll(".english");
const japanese = document.querySelectorAll(".japanese");

function switchLanguage() {
  if (this.checked) {
    english.forEach((text) => {
      text.style.display = "none";
    });
    japanese.forEach((text) => {
      text.style.display = "block";
    });
  } else {
    english.forEach((text) => {
      text.style.display = "block";
    });
    japanese.forEach((text) => {
      text.style.display = "none";
    });
  }
}

const toggle = document.querySelector("#language-toggle");
toggle.addEventListener("change", switchLanguage);

function setLanguage() {
  if (navigator.language === "ja") {
    toggle.checked = true;
    switchLanguage.call(toggle);
  }
}

setLanguage();
