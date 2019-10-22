const status404 = () => {
  const $root = document.querySelector("#root");

  $root.insertAdjacentHTML("beforeend", `<h1>404</h1>`);
};
