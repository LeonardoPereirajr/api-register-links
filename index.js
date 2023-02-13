import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

const links = [];

app.get("/", (req, res) => {
  return res.json("app links");
});

app.get("/api/links", (req, res) => {
  return res.json(links);
});

app.post("/api/links", (req, res) => {
  const { name, email } = req.body;

  const newLink = {
    id: Math.random().toString(36),
    title,
    link,
  };

  links.push(newLink);
  return res.json(newLink);
});

app.delete("/api/links/:id", (req, res) => {
  const { id } = req.params;

  const index = links.findIndex((link) => link.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  links.splice(index, 1);
  return res.status(204).json();
});

app.listen(port, () => console.log(`listening on ${port}`));
