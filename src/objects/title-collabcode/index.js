const titleCollabCode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .title-collabcode {
      color: #f25a70;
      text-transform: uppercase;
      font-size: 24px;
      letter-spacing: .6px;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<h1 class="title-collabcode">${content}</h1>`;
  };

  return {
    render: module.render
  };
})();
