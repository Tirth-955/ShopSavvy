import { Router } from "express";
import { requireAuth } from "@clerk/express";

import * as commentController from "../controllers/commentController";

const router = Router();

router.post("/:productId", requireAuth(), commentController.createComment);

router.delete("/:productId", requireAuth(), commentController.deleteComment);

export default router;