const Privacy = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative bg-hero text-hero-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-teal-light/20 blur-3xl" />
      </div>
      <div className="container relative z-10 py-12 md:py-20 text-center max-w-3xl">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
          Legal
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <p className="text-hero-foreground/60 mt-3 text-sm">Last Updated: March 2026</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-secondary rounded-t-[2rem] md:rounded-t-[4rem]" />
    </section>

    {/* Content */}
    <section className="py-10 md:py-14 bg-secondary">
      <div className="container max-w-3xl">
        <div className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-sm space-y-7">
          {[
            { title: "1. Information We Collect", body: "We collect personal information you provide when you create an account, enroll in courses, or contact us. This includes your name, email address, phone number, payment information, and professional background." },
            { title: "2. How We Use Your Information", body: "We use your personal data to: provide and manage training services, process payments, send course materials and updates, improve our services, communicate about new courses and offers (with your consent), and comply with legal obligations." },
            { title: "3. Data Sharing", body: "We do not sell your personal data. We may share information with: payment processors to complete transactions, certification bodies (PMI, CompTIA, etc.) as required for exam registration, service providers who assist in delivering our training, and law enforcement when required by law." },
            { title: "4. Data Security", body: "We implement industry-standard security measures including SSL/TLS encryption, secure payment processing through PCI-compliant gateways, regular security audits, and access controls for staff handling personal data." },
            { title: "5. Cookies & Tracking", body: "We use cookies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings." },
            { title: "6. Your Rights", body: "You have the right to: access your personal data, correct inaccurate information, request deletion of your data, opt out of marketing communications, and export your data in a portable format." },
            { title: "7. Data Retention", body: "We retain your personal data for as long as your account is active or as needed to provide services. Course completion records are maintained indefinitely for certification verification purposes." },
            { title: "8. Children's Privacy", body: "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children." },
            { title: "9. International Data Transfers", body: "Your data may be processed in countries where our servers or service providers are located. We ensure appropriate safeguards are in place for international data transfers." },
            { title: "10. Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website." },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-1.5">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-heading text-base md:text-lg font-bold text-foreground mb-1.5">11. Contact</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:contact@theeduedge.org" className="text-accent hover:underline font-medium">contact@theeduedge.org</a>{" "}
              or call{" "}
              <a href="tel:+918851467220" className="text-accent hover:underline font-medium">+91 88514 67220</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
