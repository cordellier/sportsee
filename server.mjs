import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a server
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes
server.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const users = router.db.get("USER_MAIN_DATA").find({ id: userId }).value();
  res.jsonp(users);
});

server.get("/user/:id/activity", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const activities = router.db.get("USER_ACTIVITY").find({ userId }).value();
  res.jsonp(activities);
});

server.get("/user/:id/average-sessions", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const averageSessions = router.db
    .get("USER_AVERAGE_SESSIONS")
    .find({ userId })
    .value();
  res.jsonp(averageSessions);
});

server.get("/user/:id/performance", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const performance = router.db
    .get("USER_PERFORMANCE")
    .find({ userId })
    .value();
  res.jsonp(performance);
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
