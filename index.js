const express = require("express");
const app = express();

app.use(express.static("data"));

app.get("/", (_req, res) => {
      res.sendFile(__dirname + "/index.html");
});

app.get("/secret.key", (req, res) => {
      if (req.headers["x-access-token"] != "MASTERPASSWORD") {
            res.writeHead(400, "Bad request.");
            res.end();
            return;
      }

      res.sendFile(__dirname + "/secret.key");
});

app.listen(process.env.PORT || 8080, () => {
      console.log("Listening!");
});
