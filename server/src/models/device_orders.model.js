import mongoose, {Schema} from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    price: Number,
    quantity: Number
});

const statusSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["placed", "shipped","delivered","cancelled"],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const orderSchema = new mongoose.Schema(
    {
        userId:String,
        orderId: {
            type: String,
            required: true,
            unique: true
        },

        orderItem: [orderItemSchema],
        statusHistory: [statusSchema],

        currentStatus: {
            type: String,
            enum: ["placed","shipped","delivered","cancelled"],
            default: "placed"
        },

        expectedArrivalDate: Date,
        shippingCharges: Number,

        payment: {
            method: String,
            status: String
        },

        totalAmount: Number
    },
    { timestamps: true}
    
);

export default mongoose.model("device_orders", orderSchema);