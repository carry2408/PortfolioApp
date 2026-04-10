import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).send("Invalid email");
    }

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <veereshvijay24082006@gmail.com>`,
            replyTo: email,   // important
            to: "veereshvijay24082006@gmail.com",
            subject: `Message from ${name}`,
            text: message,
        });

        res.send("Email sent");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

