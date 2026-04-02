const Terms = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative bg-hero text-hero-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-teal-light/20 blur-3xl" />
      </div>
      <div className="container relative z-10 py-12 md:py-20 text-center max-w-3xl">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
          Legal
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">Terms &amp; Conditions</h1>
        <p className="text-hero-foreground/60 mt-3 text-sm">Last Updated: March 2026</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-background rounded-t-[2rem] md:rounded-t-[4rem]" />
    </section>

    {/* Content */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container max-w-3xl space-y-8">
        <div className="bg-card border border-border rounded-xl p-5 md:p-7 shadow-sm">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Welcome to The EduEdge (theeduedge.org). By accessing or using our website and services, you agree to be bound by the following Terms and Conditions.
          </p>
        </div>

        {[
          { title: "1. Definitions", body: "\"The EduEdge,\" \"we,\" \"us,\" or \"our\" refers to The EduEdge and its operators. \"User,\" \"you,\" or \"your\" refers to any individual or entity accessing or using our website and services. \"Services\" refers to all training programs, courses, study materials, practice tests, and related educational offerings. \"Content\" refers to all text, images, videos, course materials, and other information available on our platform." },
          { title: "2. Eligibility & Account Registration", body: "You must be at least 18 years of age to purchase our services. By creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account." },
          { title: "3. Course Enrollment & Payment", body: "All course fees are listed on the respective course pages and are payable in full at the time of enrollment unless an installment plan is explicitly offered. Prices are subject to change without prior notice, but changes will not affect confirmed enrollments. Payment can be made via credit/debit card, bank transfer, UPI, or other methods available at checkout." },
          { title: "4. Refund & Cancellation Policy", body: "Cancellation requests made 7 or more days before the scheduled training start date are eligible for a full refund minus a 10% administrative fee. Cancellations made within 7 days of the training start date are eligible for a 50% refund or a one-time batch transfer at no additional cost. No refunds will be issued after the training has commenced or after access to self-paced content has been activated. Refunds are processed within 10–15 business days to the original payment method." },
          { title: "5. Rescheduling Policy", body: "You may reschedule your training batch once at no charge, provided the request is made at least 72 hours before the training start date. Subsequent rescheduling requests may incur a rescheduling fee of 10% of the course fee. Rescheduling is subject to batch availability." },
          { title: "6. Intellectual Property", body: "All content on The EduEdge website, including course materials, videos, presentations, practice tests, study guides, and branding, is the intellectual property of The EduEdge and/or its licensors. You may not reproduce, distribute, modify, display, or create derivative works from any content without our prior written consent." },
          { title: "7. Certification & Exam Disclaimer", body: "The EduEdge provides training and exam preparation services. We do not guarantee exam results or certification outcomes. Certification decisions are made solely by the relevant certification body (PMI, CompTIA, Microsoft, AWS, Scaled Agile, etc.)." },
          { title: "8. Code of Conduct", body: "All participants are expected to maintain professional conduct during training sessions. Disruptive behavior, harassment, or sharing of confidential course content may result in removal from the program without a refund. Recording of live sessions is not permitted unless explicitly authorized." },
          { title: "9. Limitation of Liability", body: "The EduEdge shall not be held liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question." },
          { title: "10. Privacy", body: "Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, store, and protect your personal data.", hasLink: true },
          { title: "11. Governing Law & Dispute Resolution", body: "These Terms and Conditions are governed by the laws of India. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India." },
          { title: "12. Modifications", body: "The EduEdge reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated date." },
          { title: "13. Contact", body: "For questions about these Terms and Conditions, please contact us at contact@theeduedge.org or call +91 88514 67220.", isContact: true },
        ].map((item, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 md:p-7 shadow-sm">
            <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">{item.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.isContact ? (
                <>
                  For questions about these Terms and Conditions, please contact us at{" "}
                  <a href="mailto:contact@theeduedge.org" className="text-accent hover:underline font-medium">contact@theeduedge.org</a>{" "}
                  or call{" "}
                  <a href="tel:+918851467220" className="text-accent hover:underline font-medium">+91 88514 67220</a>.
                </>
              ) : item.hasLink ? (
                <>
                  Your privacy is important to us. Please refer to our{" "}
                  <a href="/privacy" className="text-accent hover:underline font-medium">Privacy Policy</a>{" "}
                  for detailed information on how we collect, use, store, and protect your personal data.
                </>
              ) : item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Terms;
