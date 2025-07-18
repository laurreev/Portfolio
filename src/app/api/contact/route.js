import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.formData();
    const name = data.get("Name") || "";
    const email = data.get("Email") || "";
    const subject = data.get("Subject") || "Contact Form Submission";
    const message = data.get("Message") || "";

    // Configure your SMTP transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // your Gmail app password
      },
    });

    // Email to you
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Professional Inquiry from Laurreev Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Subject:</b> ${subject}<br/><b>Message:</b><br/>${message}`,
    });

    // Auto-response to sender
    await transporter.sendMail({
      from: `Laurreev Portfolio <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Laurreev Portfolio",
      text: `Dear ${name || "Guest"},\n\nThank you for your email. Your message has been received and we will get back to you as soon as possible.\n\nIf you need to reach us directly, contact ${process.env.SMTP_USER}.\n\nBest regards,\nLaurreev Portfolio`,
      html: `<p>Dear ${name || "Guest"},</p><p>Thank you for your email. Your message has been received and we will get back to you as soon as possible.</p><p>If you need to reach us directly, contact <a href="mailto:${process.env.SMTP_USER}">${process.env.SMTP_USER}</a>.</p><p>Best regards,<br/>Laurreev Portfolio</p>`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
}
