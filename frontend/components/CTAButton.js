import Link from "next/link";

export default function CTAButton({ href, children }) {
  return (
    <Link href={href}
       className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition">
        {children}
    </Link>
  );
}