const express = require("express");
const app = express();
const PORT = 8080

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "index.html");
});

app.get("./src/productos.txt", (request, response) => {
  response.json(productos);
});

const listener = app.listen(PORT, () => {
  console.log("La app usa el puerto " + listener.address().port);
});
