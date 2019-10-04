(() => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("log in");
  const $signupButton = flatButton.render("sign up", true);

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();
