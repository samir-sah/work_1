import Order from "../models/device_orders.model.js"

// GET ALL ORDERS

export const getOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;

    let filter = {};

    // Filter by status
    if (status) {
      filter.currentStatus = status;
    }

    // Search by orderId
    if (search) {
      filter.orderId = { $regex: search, $options: "i" };
    }

    const orders = await Order.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Order.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      orders
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// GET ORDER BY ID
export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
