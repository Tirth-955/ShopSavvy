import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";

import * as queries from "../db/queries";

export const createComment = async (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const productId = req.params.productId as string;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: "Comment content is required" });
        }

        const product = await queries.getProductById(productId);
        if (!productId) {
            return res.status(404).json({ error: "Product Not Found" });
        }

        const comment = await queries.createComment({
            content,
            userId,
            productId,
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Failed to create comment" });
    }
}

export const deleteComment = async (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const commentId = req.params.commentId as string;

        const existingComment = await queries.getCommentById(commentId);
        if (!existingComment) {
            return res.status(404).json({ error: "Comment Not Found" });
        }

        if (existingComment.userId !== userId) {
            return res.status(403).json({ error: "You can only delete your own comments " });
        }

        await queries.deleteComment(commentId);

        res.status(200).json({ error: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Failed delete comment" });
    }
}