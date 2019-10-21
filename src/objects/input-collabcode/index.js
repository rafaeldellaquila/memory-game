const inputCollabCode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .input-collabcode {
           display: block;
           color: #3a4042;
           font-size: 18px;
           font-weight: bold;
           border-bottom: 2px rgba(58, 64, 66, .5) solid;
           padding-top: 12px;
           padding-bottom: 12px;
           width: 100%;
        }

        .input-collabcode + .label-collabcode {
          margin-top: 30px;
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();
    return `
      <input 
        id="${id}"
        class="input-collabcode" 
        type="${type}" 
        placeholder="${placeholder || ""}"
      />
    `;
  };
  return {
    render: module.render
  };
})();
