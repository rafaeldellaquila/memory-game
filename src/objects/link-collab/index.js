const linkCollab = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
          .link-collab {
            color: #3a4042;
            font-size: 14px;
            opacity: .7;
            text-align: right;
            display: block;
            margin-top: 45px;
            margin-bottom: 60px;
          }
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ href, content }) => {
    module._style();
    return `
        <a 
            class="link-collab" 
            href="${href}">
            ${content}
        </a>
    `;
  };

  return {
    render: module.render
  };
})();
