const ratingContainer = document.querySelector(".rating");
const ratingTextContainer = document.querySelector("#rating-text"); 
let currentValue = 0;
const limit = 5;

html = Array.from(Array(limit)).map((item, i) => {
  return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join("");


function updateRatingText(value) {
  switch(value) {
    case 1:
      ratingTextContainer.textContent = "Muy Malo";
      break;
    case 2:
      ratingTextContainer.textContent = "Malo";
      break;
    case 3:
      ratingTextContainer.textContent = "Regular";
      break;
    case 4:
      ratingTextContainer.textContent = "Bueno";
      break;
    case 5:
      ratingTextContainer.textContent = "Muy Bueno";
      break;
    default:
      ratingTextContainer.textContent = "";
      break;
  }
}

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const pos = item.getAttribute("data-pos");

    if (currentValue === parseInt(pos) + 1) {
      return;
    }
    document.querySelectorAll(".item").forEach((item) => {
      if (item.classList.contains("item-full")) {
        item.classList.remove("item-full");
      }
    });
    for (let i = 0; i <= pos; i++) {
      const item = document.querySelector(`.item-${i}`);
      if (!item.classList.contains("item-full")) {
        item.classList.add("item-full");
      }
    }
    currentValue = parseInt(pos) + 1;
  });

  item.addEventListener("click", (e) => {
    const pos = item.getAttribute("data-pos");
    currentValue = parseInt(pos) + 1;
    updateRatingText(currentValue); 
    console.log(currentValue);
  });
});
