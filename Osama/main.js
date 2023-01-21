window.addEventListener("load", () => {
  const clearAll = document.getElementById("clear_all");

  clearAll.addEventListener("click", () => {
    if (confirm("Хчеш очистити все?")) {
      localStorage.setItem("data", JSON.stringify([]));
      rerender([]);
    }
  });

  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify([]));
  } else {
    const data = JSON.parse(localStorage.getItem("data"));
    rerender(data);
  }

  const button = document.getElementById("add");

  button.addEventListener("click", () => {
    const input = document.getElementById("tips");
    const data = JSON.parse(localStorage.getItem("data"));
    const res = [...data, +input.value];
    localStorage.setItem("data", JSON.stringify(res));
    rerender(res);
    input.value = "";
  });

  function rerender(data) {
    const dataWrapper = document.getElementById("data");
    const resultWrapper = document.getElementById("result");
    dataWrapper.innerHTML = data
      .map((number) => `<div class='block'>${number}</div>`)
      .join("");

    resultWrapper.innerHTML = `<div>сума - ${data.reduce(
      (ac, it) => ac + it,
      0
    )} грн;</div><div>кількість - ${data.length} шт.</div>`;

    const deleteOnes = document.getElementsByClassName("block");

    for (let i = 0; i < deleteOnes.length; i++) {
      deleteOnes[i].addEventListener("click", function () {
        if (confirm(`Хчеш видалити чай: ${this.innerHTML}?`)) {
          const data = JSON.parse(localStorage.getItem("data"));
          const res = [...data.slice(0, i), ...data.slice(i + 1)];
          localStorage.setItem("data", JSON.stringify(res));
          rerender(res);
        }
      });
    }
  }

  function deleteOne(number, index) {
    console.log(index);
  }
});
