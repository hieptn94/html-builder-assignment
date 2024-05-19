import path from "path";
import { fileURLToPath } from 'url';
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
