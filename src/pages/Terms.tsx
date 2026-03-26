import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-gradient-to-br from-primary/10 via-secondary to-background py-14 md:py-20">
      <div className="container text-center max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mt-3 text-sm">Last Updated: March 2026</p>
      </div>
    </section>
    <section className="py-14 bg-background">
      <div className="container max-w-3xl prose prose-sm dark:prose-invert prose-headings:font-heading">
        <p>Welcome to The EduEdge (theeduedge.org). By accessing or using our website and services, you agree to be bound by the following Terms and Conditions.</p>

        <h2>1. Definitions</h2>
        <p>"The EduEdge," "we," "us," or "our" refers to The EduEdge and its operators. "User," "you," or "your" refers to any individual or entity accessing or using our website and services. "Services" refers to all training programs, courses, study materials, practice tests, and related educational offerings. "Content" refers to all text, images, videos, course materials, and other information available on our platform.</p>

        <h2>2. Eligibility &amp; Account Registration</h2>
        <p>You must be at least 18 years of age to purchase our services. By creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>

        <h2>3. Course Enrollment &amp; Payment</h2>
        <p>All course fees are listed on the respective course pages and are payable in full at the time of enrollment unless an installment plan is explicitly offered. Prices are subject to change without prior notice, but changes will not affect confirmed enrollments. Payment can be made via credit/debit card, bank transfer, UPI, or other methods available at checkout.</p>

        <h2>4. Refund &amp; Cancellation Policy</h2>
        <p>Cancellation requests made 7 or more days before the scheduled training start date are eligible for a full refund minus a 10% administrative fee. Cancellations made within 7 days of the training start date are eligible for a 50% refund or a one-time batch transfer at no additional cost. No refunds will be issued after the training has commenced or after access to self-paced content has been activated. Refunds are processed within 10–15 business days to the original payment method.</p>

        <h2>5. Rescheduling Policy</h2>
        <p>You may reschedule your training batch once at no charge, provided the request is made at least 72 hours before the training start date. Subsequent rescheduling requests may incur a rescheduling fee of 10% of the course fee. Rescheduling is subject to batch availability.</p>

        <h2>6. Intellectual Property</h2>
        <p>All content on The EduEdge website, including course materials, videos, presentations, practice tests, study guides, and branding, is the intellectual property of The EduEdge and/or its licensors. You may not reproduce, distribute, modify, display, or create derivative works from any content without our prior written consent.</p>

        <h2>7. Certification &amp; Exam Disclaimer</h2>
        <p>The EduEdge provides training and exam preparation services. We do not guarantee exam results or certification outcomes. Certification decisions are made solely by the relevant certification body (PMI, CompTIA, Microsoft, AWS, Scaled Agile, etc.).</p>

        <h2>8. Code of Conduct</h2>
        <p>All participants are expected to maintain professional conduct during training sessions. Disruptive behavior, harassment, or sharing of confidential course content may result in removal from the program without a refund. Recording of live sessions is not permitted unless explicitly authorized.</p>

        <h2>9. Limitation of Liability</h2>
        <p>The EduEdge shall not be held liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question.</p>

        <h2>10. Privacy</h2>
        <p>Your privacy is important to us. Please refer to our <a href="/privacy">Privacy Policy</a> for detailed information on how we collect, use, store, and protect your personal data.</p>

        <h2>11. Governing Law &amp; Dispute Resolution</h2>
        <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.</p>

        <h2>12. Modifications</h2>
        <p>The EduEdge reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated date.</p>

        <h2>13. Contact</h2>
        <p>For questions about these Terms and Conditions, please contact us at <a href="mailto:contact@theeduedge.org">contact@theeduedge.org</a> or call +91 88514 67220.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;
