import { transporter, mailOptions } from "config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const result = await transporter.sendMail({
        ...mailOptions,
        subject: `Enquiry from ${data?.name}`,
        text: `Enquiry from ${data?.name}`,
        html: `name: ${data?.name} <br/> 
        email: ${data?.email} <br/> 
        phone: ${data?.phone} <br/> 
        company: ${data?.company} <br/>
        service: ${data?.service} <br/> 
        budget: ${data?.budget} <br/> 
        description: ${data?.description} <br/>`,
      });
      return res
        .status(200)
        .json({
          success: true,
          message: "Thank you! Message sent successfully.",
        });
    } catch (err) {
      return res
        .status(422)
        .json({
          success: false,
          message: "Something went wrong! Please try again later.",
        });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
