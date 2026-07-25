import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Privacy policy page — URL stable for RGPD / GDPR (e.g. https://unveilr.ai/privacy).
 * Replace placeholder sections with counsel-reviewed text before production.
 */
const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Unveilr";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01012E] via-[#030304] to-[#050505] text-white">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <p className="text-sm text-gray-400 mb-6">
          <Link to="/" className="text-unveilr-blue hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">
          Politique de confidentialité — Last updated: April 18, 2026
        </p>

        <div className="space-y-8 text-gray-300 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-0">1. Data controller</h2>
            <p>
              This page describes how Unveilr (“we”, “us”) processes personal data when you
              visit <strong className="text-white">unveilr.ai</strong> or contact us. Update this
              section with your legal entity name, address, and contact details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Data we collect</h2>
            <p>
              Examples: pages viewed, approximate location (IP-derived), device/browser
              information, and data you submit via forms (e.g. email for a demo request). Describe
              cookies and analytics tools you actually use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Purposes and legal bases (GDPR)</h2>
            <p>
              For EU/EEA users, state the legal basis for each processing activity (e.g. consent,
              legitimate interest, contract). List purposes such as website operation, security,
              analytics, and responding to inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Retention</h2>
            <p>How long you keep each category of data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Your rights</h2>
            <p>
              Under the GDPR, individuals may have rights including access, rectification,
              erasure, restriction, portability, and objection. Explain how to exercise these
              rights and how to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. International transfers</h2>
            <p>
              If data leaves the EEA, describe safeguards (e.g. Standard Contractual Clauses).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Contact</h2>
            <p>
              For privacy questions: <strong className="text-white">privacy@unveilr.ai</strong>{" "}
              (replace with your real DPO or privacy inbox).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
