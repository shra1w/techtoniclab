// app/utils/SendEmail.js
"use server"
import nodemailer from 'nodemailer';

export async function sendHiringEmail(data) {
    try {
        // Validate environment variables
        const smtp_email = process.env.SMTP_EMAIL;
        const smtp_password = process.env.SMTP_PASSWORD;
        const email_to = process.env.EMAIL_SEND_TO;
        const email_from = process.env.EMAIL_FROM;
        
        if (!smtp_email || !smtp_password || !email_to || !email_from) {
            throw new Error("Missing email configuration. Please check environment variables.");
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: smtp_email,
                pass: smtp_password,
            },
        });

        // Validate required input data
        if (!data.jobRole || !data.companyName || !data.education || 
            !data.experience || !data.location || !data.jobDescription || !data.skills) {
            throw new Error("Missing required fields in form submission");
        }

        // Configure email
        const mailOptions = {
            from: email_from,
            to: email_to,
            subject: `Hiring Request: ${data.jobRole} at ${data.companyName}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
                    <h2 style="color: #008080; border-bottom: 2px solid #008080; padding-bottom: 10px;">New Hiring Request</h2>
                    
                    <div style="margin: 20px 0; line-height: 1.6;">
                        <p><strong>Company Name:</strong> ${data.companyName}</p>
                        <p><strong>Job Role:</strong> ${data.jobRole}</p>
                        <p><strong>Education Required:</strong> ${data.education}</p>
                        <p><strong>Experience:</strong> ${data.experience}</p>
                        <p><strong>Location:</strong> ${data.location}</p>
                        <p><strong>Mode of Job:</strong> ${data.jobMode}</p>
                        <p><strong>Employment Type:</strong> ${data.employmentType}</p>
                        <p><strong>Skills Required:</strong> ${data.skills}</p>
                    </div>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #008080; margin-top: 0;">Job Description</h3>
                        <p style="white-space: pre-line;">${data.jobDescription}</p>
                    </div>
                    
                    <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
                        This is an automated message from your hiring form.
                    </p>
                </div>
            `,
        };

        // Send email
        const result = await transporter.sendMail(mailOptions);
        
        if (!result) {
            throw new Error("Failed to send email");
        }

        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error('Error sending hiring email:', error);
        return { success: false, message: error.message || "Failed to send email" };
    }
}