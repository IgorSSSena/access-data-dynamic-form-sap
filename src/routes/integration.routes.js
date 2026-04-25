import { Router } from "express";
import {
  handleFormSaved,
  handleFormPayload
} from "../controllers/integration.controller.js";

const router = Router();

router.post("/form-saved", handleFormSaved);
router.post("/form-payload", handleFormPayload);

export default router;
