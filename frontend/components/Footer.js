export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-8 flex justify-between">
        <p>&copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}