import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Revenue: [
        {
            type : Number,
        }
    ],
    Tenant: [
        {
            type : Number,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Stats = mongoose.model("Stats", schema, "Stats");