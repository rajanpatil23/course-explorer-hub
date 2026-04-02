const Privacy = () => (
  <div className="min-h-screen">
    {/* Hero — light theme matching contact */}
    <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

      <div className="container relative z-10 py-10 md:py-20 text-center max-w-3xl">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
          Legal
        </p>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.12]">
          Privacy <span className="text-gradient-primary">Policy</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-3">Last Updated: March 2026</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container max-w-6xl">
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
