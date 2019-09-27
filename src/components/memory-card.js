function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $icon = `
    <img 
        src="../img/icon-collabcode.png" 
        alt="icone gueio" 
        class="icon" 
    />
`;

  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $icon);
}
