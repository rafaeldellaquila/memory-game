const signup = () => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("log in", false, "login");
  const $signupButton = flatButton.render("sign up", true, "signup");

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);

  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $formSignup);
};
