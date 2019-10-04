const startButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .start-button {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1abc9c;
            color: #fffcee;
            border: 3px solid #fffcee;
            font-weigth: bold;
            text-transform: uppercase;
            font-size: 1em;
            cursor: pointer;
            box-shadow: 1px 5px 20px #3a4042;
            transition: opacity 200ms linear, transform 200ms linear;
            z-index:3;
        }

        .start-button.-disabled {
          opacity: 0;
          transform: translate(-50%, -30%) scale(2);
         
        }
        
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
    <button class="start-button">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
