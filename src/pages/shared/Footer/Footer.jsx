import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-brand-footer px-6 md:px-12 pb-16 relative z-30">
      <div className="max-w-[1400px] mx-auto border-t border-brand-text/10 pt-16 flex flex-col md:flex-row justify-between items-start gap-16 text-brand-text font-bold uppercase tracking-widest text-sm">
        <div className="flex flex-col gap-6">
          <span className="opacity-40 text-xs mb-2">Navigation</span>
          <a
            href="/expertises"
            className="hover:text-brand-orange transition-colors"
          >
            Expertises
          </a>
          <a href="/work" className="hover:text-brand-orange transition-colors">
            Work
          </a>
          <a
            href="/about"
            className="hover:text-brand-orange transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-brand-orange transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <span className="opacity-40 text-xs mb-2">Contact</span>
          <a
            href="mailto:info@gethyped.nl"
            className="hover:text-brand-orange transition-colors lowercase"
          >
            info@gethyped.nl
          </a>
          <a
            href="tel:+31615337496"
            className="hover:text-brand-orange transition-colors"
          >
            +31 6 1533 7496
          </a>
          <p className="normal-case tracking-normal font-medium mt-2 max-w-[200px] text-brand-text-muted leading-relaxed">
            Beltrumsestraat 6,
            <br />
            7141 AL Groenlo
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <span className="opacity-40 text-xs mb-2">Legal</span>
          <a
            href="/privacy"
            className="hover:text-brand-orange transition-colors"
          >
            Privacyvoorwaarden
          </a>
          <a
            href="https://dylanbrouwer.design/"
            target="_blank"
            className="hover:text-brand-orange transition-colors mt-8"
          >
            © Design by Dylan
          </a>
          <span className="mt-2 text-brand-text-muted">© 2026 Get Hyped</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
