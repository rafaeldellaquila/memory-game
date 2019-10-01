(() => {
  const $root = document.querySelector("#root");
  const createMemoryCard = memoryCard.create();

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

  const $cardWrapper = createCardWrapper();

  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

  $root.insertAdjacentElement("beforeend", $cardWrapper);
})();
