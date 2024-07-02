// import jsonServer from "json-server";
// import path from "path";
// import express, { Request, Response } from "express";

// const app = express();
// const router = jsonServer.router(path.join(__dirname, "db.json"));
// const middlewares = jsonServer.defaults();

// const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "build")));

// // Use JSON Server as middleware
// app.use(middlewares);
// app.use("/api", router);

// // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get("*", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors()); // Enable CORS for all routes

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
