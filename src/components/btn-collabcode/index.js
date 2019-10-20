const btnCollabCode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .btn-collabcode {
            text-transform: uppercase;
            font-size: 14px;
            color: white;
            background-color: #f25a70;
            width: 100%;
            height: 48px;
            border-radius: 24px;
            cursor: pointer;
        }
        .input-collabcode + .btn-collabcode {
            margin-top: 45px;
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();
    return `<input class="btn-collabcode" type="submit" value=${content}>`;
  };

  return {
    render: module.render
  };
})();
