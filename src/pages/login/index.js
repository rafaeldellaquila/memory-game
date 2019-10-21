const login = () => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("log in", true, "login");
  const $signupButton = flatButton.render("sign up", false, "signup");

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("hello!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
