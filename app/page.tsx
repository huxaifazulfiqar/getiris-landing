import Image from 'next/image'
import FeaturesShowcase from './components/FeaturesShowcase'
import ProblemSection from './components/ProblemSection'
import FounderSection from './components/FounderSection'

const WA_LINK = "https://wa.me/923330209272?text=Hi%2C%20I%27m%20interested%20in%20Iris%20POS%20for%20my%20optical%20store."
const DEMO_LINK = "https://demo.getiris.tech"
const BLUE = '#213F7D'
const GREEN = '#96C624'

const plans = [
  {
    name: 'Starter',
    monthly: 'Rs. 5,000',
    annual: 'Rs. 50,000',
    setup: 'Rs. 8,000',
    desc: 'For small stores that need the essentials.',
    features: ['POS & Billing', 'Order Board', 'Customers & Prescriptions', 'Lens Queue', 'Inventory', '2 Staff Accounts'],
    missing: ['Expenses & Suppliers', 'Analytics', 'Iris AI'],
    highlight: false,
  },
  {
    name: 'Business',
    monthly: 'Rs. 8,000',
    annual: 'Rs. 80,000',
    setup: 'Rs. 8,000',
    desc: 'Full operations and financial control.',
    features: ['Everything in Starter', 'Expenses Tracking', 'Suppliers & Accounts', 'Analytics & Reports', '4 Staff Accounts'],
    missing: ['Iris AI'],
    highlight: true,
  },
  {
    name: 'Pro',
    monthly: 'Rs. 12,000',
    annual: 'Rs. 1,20,000',
    setup: 'Free with annual',
    desc: 'The complete suite for serious stores.',
    features: ['Everything in Business', 'Iris AI Assistant', 'Lens Index Calculator', 'CL Power Calculator', 'Unlimited Staff Accounts'],
    missing: [],
    highlight: false,
  },
]

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/logo.png" alt="Iris" width={90} height={32} className="object-contain" />
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block transition-colors">Pricing</a>
            <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block transition-colors">Demo</a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: BLUE }}
              className="text-white text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 sm:py-32 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8 border"
              style={{ color: GREEN, borderColor: GREEN + '40', backgroundColor: GREEN + '10' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
              Built for optical stores in Pakistan
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
              Your optical store.<br />
              <span style={{ color: BLUE }}>Finally organised.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
              Iris POS is complete software built specifically for optical stores — orders, prescriptions, inventory, suppliers, and an AI assistant that understands optics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: BLUE }}
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold px-8 py-4 rounded-xl text-base border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View Live Demo
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-5">No sign-up needed for the demo · Your store live within 24 hours</p>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <ProblemSection />

      {/* FOUNDER */}
      <FounderSection />

      {/* FEATURES */}
      <FeaturesShowcase />

      {/* PRICING */}
      <section className="py-24 px-6 bg-gray-50" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Pay annually and the Rs. 8,000 setup fee is waived. No hidden charges, no surprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border-2 relative flex flex-col ${
                  p.highlight ? 'border-transparent shadow-2xl' : 'border-gray-200 bg-white'
                }`}
                style={p.highlight ? { backgroundColor: BLUE, borderColor: BLUE } : {}}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg" style={{ backgroundColor: GREEN }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="flex-1">
                  <h3 className={`text-xl font-extrabold mb-1 ${p.highlight ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                  <p className={`text-sm mb-6 ${p.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{p.desc}</p>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-gray-900'}`}>{p.monthly}</span>
                    <span className={`text-sm ${p.highlight ? 'text-blue-200' : 'text-gray-400'}`}>/mo</span>
                  </div>
                  <p className={`text-sm mb-1 ${p.highlight ? 'text-blue-200' : 'text-gray-400'}`}>or {p.annual}/year</p>
                  <p className={`text-sm font-bold mb-8`} style={{ color: p.highlight ? GREEN : BLUE }}>
                    Setup: {p.setup}
                  </p>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GREEN }}>
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className={p.highlight ? 'text-white' : 'text-gray-700'}>{f}</span>
                      </li>
                    ))}
                    {p.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-30">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0 text-gray-400">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center font-bold py-3.5 rounded-xl transition-opacity hover:opacity-90 text-white text-sm"
                  style={{ backgroundColor: p.highlight ? GREEN : BLUE }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 sm:p-16 text-center text-white" style={{ backgroundColor: BLUE }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">See it before you commit.</h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              The demo store is fully loaded — real orders, customers, inventory, and financials. No sign-up, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white font-bold px-8 py-4 rounded-xl text-base hover:bg-gray-50 transition-colors"
                style={{ color: BLUE }}
              >
                Open Live Demo
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: GREEN }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/logo.png" alt="Iris" width={80} height={28} className="object-contain brightness-0 invert opacity-50" />
          <p className="text-sm">© {new Date().getFullYear()} Iris Technologies. All rights reserved.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
            +92 333 020 9272
          </a>
        </div>
      </footer>

    </main>
  )
}
