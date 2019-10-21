const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
          .form-signup {
            padding: 0 35px 40px;
          }
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $usernameLabelCollabCode = labelCollabCode.render(
      "Username ou e-mail"
    );
    const $usernameInputCollabCode = inputCollabCode.render({
      placeholder: "rafadellaquila@gmail.com"
    });

    const $passwordLabelCollabCode = labelCollabCode.render("Password");
    const $passwordInputCollabCode = inputCollabCode.render({
      id: "password",
      placeholder: "・・・・・・・",
      type: "password"
    });

    const $eyeCollabCode = eyeCollabCode.render({
      attrFor: "password"
    });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forgot password?"
    });

    const $btnCollabCode = btnCollabCode.render({
      content: "Login",
      path: "game"
    });

    return `
      ${$usernameLabelCollabCode + $usernameInputCollabCode}
  
      ${$passwordLabelCollabCode + $passwordInputCollabCode + $eyeCollabCode}

      ${$linkCollab}
      
      ${$btnCollabCode}
      `;
  };

  module.render = () => {
    module._style();

    return `
        <form 
          class="form-signup"
          action ="" 
          method="POST">${module._children()}
        </form>
      `;
  };

  return {
    render: module.render
  };
})();
