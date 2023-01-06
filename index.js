function traer() {
  fetch('leer.txt')
    .then((data) => data.text())
    .then((data) => {
      console.log(data);
    });
}

traer();
