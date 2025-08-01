import Link from 'next/link'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

const features = [
  'Multi-tenant architecture',
  'Enterprise authentication',
  'Advanced analytics dashboard',
  'Stripe billing integration',
  'Role-based access control',
  'Audit logging',
  'API-first design',
  'Real-time notifications',
]

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 users',
      'Basic dashboard',
      'Email support',
      '10GB storage',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Best for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Custom integrations',
      'Dedicated support',
      'Unlimited storage',
      'SLA guarantee',
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-brand-600">
                  Enterprise SaaS
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="btn-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise SaaS Platform
              <span className="block text-brand-600">Built for Scale</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional enterprise application with multi-tenant architecture,
              advanced security, and comprehensive business features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="btn-primary text-lg px-8 py-4"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="btn-outline text-lg px-8 py-4"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful SaaS business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-hover p-6">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card p-8 relative ${
                  plan.popular 
                    ? 'ring-2 ring-brand-500 shadow-lg' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/auth/signup"
                  className={`w-full ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  } text-center block py-3`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-brand-100">
            Join thousands of companies already using our platform
          </p>
          <Link
            href="/auth/signup"
            className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold mb-4">Enterprise SaaS</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Professional enterprise SaaS platform built with Enhanced Geek Projects 
                Methodology for reliability and scalability.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
                <li><Link href="/demo" className="text-gray-300 hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-300 text-sm">
              © {new Date().getFullYear()} Enterprise SaaS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}