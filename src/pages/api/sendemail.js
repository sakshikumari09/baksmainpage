import conndb from "../../../middleware/conndb";
import Request from "../../../models/Requests";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.NODEMAILER_API_KEY,
    },
  });

  const { restaurantName, email, phone, address, name } = req.body;
  try {
    const existing = await Request.findOne({
      email: email,
      status: { $in: ["pending", "verified", "accepted"] },
    });
    console.log(existing);
    let resdata;

    if (!existing) {
      const newupdate = await Request.findOneAndUpdate(
        { email: email },
        {
          restaurant_name: restaurantName,
          name,
          phone,
          address,
          status: "pending",
        }
      );
      if(!newupdate){

      const newRequest = new Request({
        restaurant_name: restaurantName,
        name,
        email,
        phone,
        address,
      });
    
      resdata = await newRequest.save();
    }
      if (resdata||newupdate) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to: email ?? "baksish247@gmail.com", // list of receivers
            subject: "Request Received",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <h2 style="color: #661268; text-align: center;">Request Received</h2>
                <p style="font-size: 16px;">Dear <strong>${restaurantName}</strong>,</p>
                <p style="font-size: 16px;">
                  We have received your request and will review it shortly.
                </p>
                <h3 style="color: #661268;">Details:</h3>
                <ul style="font-size: 16px; list-style: none; padding: 0;">
                  <li><strong>Restaurant Name:</strong> ${restaurantName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  <li><strong>Address:</strong> ${address}</li>
                </ul>
                <p style="font-size: 16px;">
                  Thank you,
                </p>
                <p style="font-size: 16px; font-weight: bold; color: #661268;">Baksish</p>
              </div>
            `,
          });
          console.log("Email sent successfully");
        } catch (err) {
          console.error("Error sending email:", err);
        }

        res.status(200).json({ success: true, data: resdata });
      } else {
        res.status(201).json({ success: false, data: null });
      }
    } else {
      res
        .status(203)
        .json({ success: false, message: "Request already exists" });
    }
  } catch (err) {
    console.error("Error processing request:", err);
    res.status(201).json({ success: false, data: null });
  }
};

export default conndb(handler);
