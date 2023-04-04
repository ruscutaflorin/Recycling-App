const express = require("express");
const cors = require("cors");
const router = require("./routes");
const fileUpload = require("express-fileupload");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

app.use("/api", router);
