const layerStart = (() => {
  const module = {};

  module.handleClick = $component => {
    const $children = $component.querySelectorAll("*");

    $children.forEach($item => $item.classList.add("-disabled"));
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("transparency-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $startButton = startButton.render(content);

    return `<div class="layer-start" onclick="layerStart.handleClick(this)" ontransitionend="layerStart.handleTransitionEnd(event, this)">
        ${$transparencyLayer}
        ${$startButton}
        </div>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
