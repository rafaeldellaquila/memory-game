(() => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("log in");
  const $signupButton = flatButton.render("sign up", true);

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $labelCollabCode = labelCollabCode.render("E-mail");
  const $inputCollabCode = inputCollabCode.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelCollabCode);
  $root.insertAdjacentHTML("beforeend", $inputCollabCode);
})();
