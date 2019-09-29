const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }
    .memory-card > .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      flex-wrap: nowrap;
      position: absolute;
      cursor: pointer;
    }

    .memory-card.-active > .card {
      display: none;
    }
    .memory-card.-active > .card.-front {
      display: flex;
    }
    .memory-card > .card.-front {
      background-color: white;
    }
    
    .memory-card > .card.-front::before {
      content: "";
      width: 94px;
      height: 94px;
      background-color: #d4d4d4;
      border-radius: 100%;
      position: absolute;
    }
    .memory-card > .card > .icon {
      width: 100px;
    }
    
    .memory-card > .card.-front > .icon {
      position: absolute;
      transform: translateY(-10px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) => `
  <div class="memory-card " 
    onclick="handleClick(this)">

    <article class="card -front">
      <img
        src=${src} 
        alt=${alt} 
        class="icon"
      >
    </article>

    <article class="card">
      <img
        src="/img/icon-collabcode.png" 
        alt="mascote da collbcode, o gueio" 
        class="icon"
      >
    </article>
  </div>
`;
};
const handleClick = $component => {
  if (qtdActiveMemoryCard < 2) {
    $component.classList.toggle("-active");
  }

  if (qtdActiveMemoryCard === 1) {
    setTimeout(() => {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );

      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.remove("-active");
      });

      qtdActiveMemoryCard = 0;
    }, 800);
  }
};
