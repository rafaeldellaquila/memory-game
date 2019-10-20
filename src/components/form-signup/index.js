const formSignup = (() => {
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
    const $emailLabelCollabCode = labelCollabCode.render("E-mail");
    const $emailInputCollabCode = inputCollabCode.render(
      "rafadellaquila@gmail.com",
      "email"
    );

    const $usernameLabelCollabCode = labelCollabCode.render("Username");
    const $usernameInputCollabCode = inputCollabCode.render("rafadellaquila");

    const $passwordLabelCollabCode = labelCollabCode.render("Password");
    const $passwordInputCollabCode = inputCollabCode.render(
      "********",
      "password"
    );

    const $confirmPasswordLabelCollabCode = labelCollabCode.render(
      "Confirm password"
    );
    const $confirmPasswordInputCollabCode = inputCollabCode.render(
      "********",
      "password"
    );

    const $btnCollabCode = btnCollabCode.render("submit");

    return `
    ${$emailLabelCollabCode + $emailInputCollabCode}

    ${$usernameLabelCollabCode + $usernameInputCollabCode}

    ${$passwordLabelCollabCode + $passwordInputCollabCode}

    ${$confirmPasswordLabelCollabCode + $confirmPasswordInputCollabCode} 
    ${$btnCollabCode}
    `;
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
