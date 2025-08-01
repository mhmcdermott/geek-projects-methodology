export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gradient mb-6">
              Built with Enhanced Geek Projects Methodology v4.0
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed">
              This template demonstrates the bulletproof foundation for professional web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Primary Action
              </button>
              <button className="btn-secondary">
                Secondary Action
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-primary-950">
            Proven Template Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-accent-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-950">Bulletproof Setup</h3>
              <p className="text-primary-700">
                95%+ first-time success rate with proven dependency combinations and nuclear reset procedures.
              </p>
            </div>
            <div className="bg-accent-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-950 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-950">Fast Development</h3>
              <p className="text-primary-700">
                Custom Tailwind utilities and proven component patterns for rapid professional development.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-accent-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-950">Production Ready</h3>
              <p className="text-primary-700">
                Security, performance, and accessibility built-in from the foundation level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 text-primary-950">
              Technical Foundation
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-950">Proven Stack</h3>
                  <ul className="space-y-2 text-primary-700">
                    <li>• Next.js 15.1.4 (stable)</li>
                    <li>• React 19 RC (tested)</li>
                    <li>• Tailwind CSS 3.4.17 (no v4 beta)</li>
                    <li>• TypeScript 5.7.3 (strict mode)</li>
                    <li>• Proven utility libraries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-950">Quality Assurance</h3>
                  <ul className="space-y-2 text-primary-700">
                    <li>• 95%+ setup success rate</li>
                    <li>• &lt;30 minute setup time</li>
                    <li>• Nuclear reset procedures</li>
                    <li>• Build reliability protocols</li>
                    <li>• Static fallback options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Demonstration */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-primary-950">
            Custom Color System
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-950 h-24 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Primary 950</span>
            </div>
            <div className="bg-accent-500 h-24 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Accent 500</span>
            </div>
            <div className="bg-neutral-200 h-24 rounded-lg flex items-center justify-center">
              <span className="text-primary-950 font-semibold">Neutral 200</span>
            </div>
            <div className="bg-primary-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-primary-950 font-semibold">Primary 100</span>
            </div>
          </div>
          <p className="text-center mt-6 text-primary-700">
            Easily customizable color system - replace primary and accent colors in tailwind.config.ts
          </p>
        </div>
      </section>
    </main>
  );
}