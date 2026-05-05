import express from "express";
import {
    getOrders,
    getOrderById
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/",getOrders);

router.get("/:orderId", getOrderById);

export default router;