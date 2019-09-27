const $root = document.querySelector("#root");
const $memoryCardActive = document.createElement("article");

createMemoryCard();
const $cIcon = `
    <img
        src="/img/icon-c.png"
        alt="icone gueio"
        class="icon -front"
      />
`;

$memoryCardActive.classList.add("memory-card", "-front");
$root.insertBefore($memoryCardActive, null);

$memoryCardActive.insertAdjacentHTML("beforeend", $cIcon);
