const flatButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .flat-button {
            background-color: #eae6da;
            color: #fffcee;
            width: 50%;
            height: 176px;
            text-transform: uppercase;
            font-size: 24px;
            font-weigth: bold;
            border: none;
        }
        .flat-button.-active {
          background-color: #f25a70;
        }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = (content, variation) => {
    module._style();
    return `<button class="flat-button ${variation}">${content}</button>`;
  };
  return {
    render: module.render
  };
})();
