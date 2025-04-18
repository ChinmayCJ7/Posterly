import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-white text-gray-900">
      {/* Hero */}
      <header className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Create Stunning Posters with AI ✨</h1>
          <p className="text-lg mb-6">
            Posterly helps influencers design eye-catching thumbnails, reels covers, and promo posters using AI — no designer needed.
          </p>
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            🚀 Get Started Free
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Creators ❤️ Posterly</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold">🎨 AI Poster Generator</h3>
              <p>Create visuals instantly from your ideas + photos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🧠 Smart Templates</h3>
              <p>Use niche-specific templates (gaming, fitness, etc).</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">⚡ Instant Download</h3>
              <p>No wait — download your poster in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Image */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">See It in Action 🔥</h2>
          <img
            src="/poster-preview.png"
            alt="Posterly demo"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Posterly — Built for Creators</p>
        <div className="mt-2 text-sm space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
