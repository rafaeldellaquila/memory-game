eyeCollabCode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
          .eye-collabcode {
              text-indent: -9999px;
              display: block;
              background: url(/img/eye.png) no-repeat center;
              width: 23px;
              height: 15px;
              cursor: pointer;
              opacity: .5;
              transition: opacity 250ms linear;
              margin-left: auto;
              transform: translateY(-200%);
          }

          .eye-collabcode.-active {
              opacity: 1;
          }
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "text") {
      $input.setAttribute("type", "password");
      this.classList.remove("-active");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "text");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `
        <label 
            for="${attrFor}"
            onclick="eyeCollabCode.handleClick.bind(this)()" 
            class="eye-collabcode">Mostrar senha
        </label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
