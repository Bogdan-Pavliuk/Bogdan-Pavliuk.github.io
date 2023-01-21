window.addEventListener("load", () => {
  start(renderWindow);
  clearAll(renderWindow);
  addTips(renderWindow);
});

function getElementByID(id) {
  return document.getElementById(id);
}

function getItem(name) {
  return localStorage.getItem(name) !== null
    ? JSON.parse(localStorage.getItem(name))
    : undefined;
}

function setItem(name, data) {
  return localStorage.setItem(name, JSON.stringify(data));
}

function start(render) {
  const data = getItem("data");
  if (data === undefined) {
    setItem("data", []);
    setItem("showMoney", false);
    setItem("showCount", false);
    setItem("showOverLoad", false);
  }
  render(data);
}

function clearAll(render) {
  document.getElementById("clear_all").addEventListener("click", () => {
    if (confirm("Хочеш очистити все?")) {
      setItem("data", []);
      render([]);
    }
  });
}

function addTips(render) {
  document.getElementById("add").addEventListener("click", () => {
    const input = document.getElementById("tips");
    const data = getItem("data");
    const res = [...data, +input.value];
    setItem("data", res);
    render(res);
    input.value = "";
  });
}

function renderWindow(data) {
  renderData(data);
  addEventDeleteOneBlock(renderWindow);
  renderResult(data, renderWindow);
}

function renderData(data) {
  const dataBlock = document.getElementById("data");
  dataBlock.innerHTML = data
    .map((number) => `<div class='block'>${number}</div>`)
    .join("");
}

function addEventDeleteOneBlock(render) {
  const dataBlockItem = document.getElementsByClassName("block");
  for (let i = 0; i < dataBlockItem.length; i++) {
    dataBlockItem[i].addEventListener("click", function () {
      if (confirm(`Хочеш видалити чай: ${this.innerHTML}?`)) {
        const data = getItem("data");
        const res = [...data.slice(0, i), ...data.slice(i + 1)];
        setItem("data", res);
        render(res);
      }
    });
  }
}

function renderResult(data, render) {
  document.getElementById("result").innerHTML = `${renderSumTips(
    data
  )}${renderCountTips(data)}${renderOverLoad(data)}`;
  addEventToResult(render);
}

function renderSumTips(data) {
  const showMoney = getItem("showMoney");
  return `<div id='result_sum'>Чай - ${
    showMoney ? data.reduce((ac, it) => ac + it, 0) : "?"
  } грн</div>`;
}

function renderCountTips(data) {
  const showCount = getItem("showCount");
  return `<div id='result_count'>Замовлень - ${
    showCount ? data.length : "?"
  } шт</div>`;
}

function renderOverLoad(data) {
  const showOverLoad = getItem("showOverLoad");
  const isOverLoad = data.length > 30;
  return `<div id='result_overload'>Додаткові - ${
    showOverLoad
      ? isOverLoad
        ? `${(data.length - 30) * 20} грн (${data.length - 30} шт)`
        : "0 грн (0 шт)"
      : "? грн (? шт)"
  }</div>`;
}

function addEventToResult(render) {
  document
    .getElementById("result_sum")
    .addEventListener("click", addEventToResultFunction("showMoney", render));
  document
    .getElementById("result_count")
    .addEventListener("click", addEventToResultFunction("showCount", render));
  document
    .getElementById("result_overload")
    .addEventListener(
      "click",
      addEventToResultFunction("showOverLoad", render)
    );
}

function addEventToResultFunction(type, render) {
  return () => {
    const parseLabel = {
      showMoney: "чай",
      showCount: "замовлення",
      showOverLoad: "додаткові",
    };

    const value = !getItem(type);
    if (confirm(`${value ? "Показати" : "Приховати"} ${parseLabel[type]}`)) {
      setItem(type, value);
      render(getItem("data"));
    }
  };
}
