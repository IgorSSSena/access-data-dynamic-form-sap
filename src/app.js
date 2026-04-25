import express from "express";
import cors from "cors";
import integrationRoutes from "./routes/integration.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.text({ type: ["application/xml", "text/xml"], limit: "10mb" }));

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Dynamic Forms online"
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/api/integration", integrationRoutes);

export default app;