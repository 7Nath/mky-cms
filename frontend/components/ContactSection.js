import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-mkyviolet-dark via-mkyviolet to-mkyviolet-light py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Tell us what you need!</h2>
        <p className="text-white">
          Tell us what you need —{' '}
          <Link href="/contact" className="underline decoration-mkyviolet-light text-white">
            we'll handle the rest.
          </Link>
        </p>
      </div>
    </section>
  );
}