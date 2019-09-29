const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      flex-wrap: nowrap;
      position: relative;
      cursor: pointer;
    }
    
    .memory-card.-front {
      background-color: white;
    }
    
    .memory-card.-front::before {
      content: "";
      width: 94px;
      height: 94px;
      background-color: #d4d4d4;
      border-radius: 100%;
      position: absolute;
    }
    .memory-card > .icon {
      width: 100px;
    }
    
    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-10px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ nameClass, src, alt }) => `
  <article class="memory-card ${nameClass}">
    <img
      src=${src} 
      alt=${alt} 
      class="icon"
      onclick="handleClick()"
    >
  </article>
`;
};
const handleClick = () => {
  console.log("object");
};
