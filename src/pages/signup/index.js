(() => {
  const $root = document.querySelector("#root");
  $loginButton = flatButton.render("log in");
  $signupButton = flatButton.render("sign up", "-active");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
