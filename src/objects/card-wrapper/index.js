function createCardWrapper() {
  const $cardWrapper = document.createElement("section");
  $cardWrapper.classList.add("card-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .card-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-top: 15px;
    }
    
    .card-wrapper > .memory-card {
      margin-bottom: 15px;
    }
  `;

  $head.insertBefore($style, null);

  return $cardWrapper;
}
