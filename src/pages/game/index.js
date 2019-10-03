(() => {
  const $root = document.querySelector("#root");
  const $cardWrapper = createCardWrapper();
  const createMemoryCard = memoryCard.create();
  const $scoreBar = scoreBar.create();
  const $layerStart = layerStart.render("Iniciar");

  const $memoryCardC = createMemoryCard({
    src: "/img/icon-c.png",
    alt: "icon de um livro de C++"
  });

  const $memoryCardJs = createMemoryCard({
    src: "/img/icon-js.png",
    alt: "icon de um livro de Javascript"
  });

  const $memoryCardPhp = createMemoryCard({
    src: "/img/icon-php.png",
    alt: "icon de um livro de PHP"
  });

  const $memoryCardWoman = createMemoryCard({
    src: "/img/icon-woman.png",
    alt: "icon de uma garota codando"
  });

  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

  $root.insertAdjacentHTML("afterbegin", $scoreBar);
  $root.insertAdjacentElement("beforeend", $cardWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
})();
