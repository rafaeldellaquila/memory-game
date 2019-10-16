const formSignup = (() => {
  const module = {};

  module._children = () => {
    const $emailLabelCollabCode = labelCollabCode.render("E-mail");
    const $emailInputCollabCode = inputCollabCode.render();

    const $usernameLabelCollabCode = labelCollabCode.render("Username");
    const $usernameInputCollabCode = inputCollabCode.render();

    const $passwordLabelCollabCode = labelCollabCode.render("Password");
    const $passwordInputCollabCode = inputCollabCode.render();

    const $confirmPasswordLabelCollabCode = labelCollabCode.render(
      "Confirm password"
    );
    const $confirmPasswordInputCollabCode = inputCollabCode.render();

    return `
    ${$emailLabelCollabCode + $emailInputCollabCode}
    ${$usernameLabelCollabCode + $usernameInputCollabCode}
    ${$passwordLabelCollabCode + $passwordInputCollabCode}
    ${$confirmPasswordLabelCollabCode + $confirmPasswordInputCollabCode} 
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-signup {
            padding-left: 35px;
            padding-right: 35px;
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `
        <form class="form-signup"action ="" method="POST">${module._children()}</form>

    `;
  };

  return {
    render: module.render
  };
})();
