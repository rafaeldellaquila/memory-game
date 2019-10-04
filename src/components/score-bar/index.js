const scoreBar = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .score-bar {
        background-color: #3a4042;
        height: 40px;
        text-align: center;
        position: fixed;
        width: 100vw;
        z-index: 1;
          
      }
      .score-bar .score {
        color: #fff;
        line-height: 40px;
        font-weight: 700;
    }
      .score-bar .counter {
          color: #fff;
          line-height: 40px;
          font-weight: 700;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <header class="score-bar">
            <span class="score">Score: <span class="counter">0</span></span>
        </header>
    `;
  };
  return {
    create: module.create
  };
})();
