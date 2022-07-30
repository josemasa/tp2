const jms = document.querySelector(`.conteiner`);
const colors = [`#a00512`, `#640b11`, `#1a4dbd`, `#1abd30`];

const figures = () => {
  for (let i = 0; i <= 320; i++) {
    let figure = document.createElement(`span`);
    let select = Math.round(colors.length * Math.random());
    figure.style.top = innerHeight * Math.random() + `px`;
    figure.style.left = innerHeight * Math.random() + `px`;
    figure.style.background =
      colors[select >= colors.length ? select - 1 : select];
    jms.appendChild(figure);
    setInterval(() => {
      figure.style.top = innerHeight * Math.random() + `px`;
      figure.style.left = innerHeight * Math.random() + `px`;
    }, 5000);
  }
};

figures();
