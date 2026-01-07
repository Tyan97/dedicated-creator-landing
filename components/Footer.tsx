export default function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-20 bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Use Case Studio. Viral scenario videos for AI SaaS, executed monthly.
        </p>
      </div>
    </footer>
  );
}
