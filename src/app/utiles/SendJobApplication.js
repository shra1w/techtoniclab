"use server"
import nodemailer from 'nodemailer';

export async function sendJobApplication(formData) {
    try {
        // Validate environment variables
        const smtp_email = process.env.SMTP_EMAIL;
        const smtp_password = process.env.SMTP_PASSWORD;
        const email_to = process.env.EMAIL_SEND_TO;
        const email_from = process.env.EMAIL_FROM;
        
        if (!smtp_email || !smtp_password || !email_to || !email_from) {
            throw new Error("Missing email configuration");
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: smtp_email,
                pass: smtp_password,
            },
        });

        // Validate required fields
        if (!formData.email || !formData.fullName) {
            throw new Error("Missing required fields");
        }

        // Convert resume file to buffer if it exists
        let attachments = [];
        if (formData.resume) {
            const resumeBuffer = await formData.resume.arrayBuffer();
            attachments.push({
                filename: formData.resume.name,
                content: Buffer.from(resumeBuffer),
                contentType: formData.resume.type
            });
        }

        // Configure email
        const mailOptions = {
            from: email_from,
            to: email_to,
            replyTo: formData.email,
            subject: `Job Application: ${formData.position}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">Job Application Submission</h2>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #444;">Personal Details</h3>
                        <p><strong>Full Name:</strong> ${formData.fullName}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                        <p><strong>Location:</strong> ${formData.location || 'Not provided'}</p>
                    </div>

                    <div style="margin: 20px 0;">
                        <h3 style="color: #444;">Professional Details</h3>
                        <p><strong>Position Applied For:</strong> ${formData.position}</p>
                        <p><strong>Total Experience:</strong> ${formData.experience}</p>
                        <p><strong>Current Employer:</strong> ${formData.currentEmployer || 'Not provided'}</p>
                        <p><strong>Skills:</strong> ${formData.skills}</p>
                    </div>

                    <div style="margin: 20px 0;">
                        <h3 style="color: #444;">Additional Information</h3>
                        <p><strong>LinkedIn Profile:</strong> ${formData.linkedIn || 'Not provided'}</p>
                    </div>

                    ${formData.resume ? '<p><strong>Resume attached</strong></p>' : '<p>No resume attached</p>'}
                </div>
            `,
            attachments: attachments
        };

        // Send email
        const result = await transporter.sendMail(mailOptions);
        
        if (!result) {
            return false
        }

        return true;
    } catch (error) {
        return false
    }
}