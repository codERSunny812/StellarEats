const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");


const app = express();
const PORT = 9911;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id:"rzp_test_AyOLQgp6ivsmMT",
            key_secret:"6m8MeC5nhnJisfkqx9iU4x2w",
        });

        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send("Error");
        }

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});


app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});