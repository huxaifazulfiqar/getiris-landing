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

function HeroMockup() {
  return (
    <div className="relative">
      {/* glow behind mockup */}
      <div className="absolute -inset-8 rounded-full pointer-events-none" style={{
        background: `radial-gradient(circle, #213F7D20 0%, transparent 65%)`,
        filter: 'blur(20px)',
      }} />

      {/* browser frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80" style={{ rotate: '1deg' }}>
        {/* chrome bar */}
        <div className="bg-gray-900 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400 text-center font-mono">
            your-store.getiris.tech
          </div>
        </div>

        {/* app UI */}
        <div className="flex overflow-hidden bg-gray-50" style={{ height: '340px' }}>
          {/* sidebar */}
          <div className="w-14 shrink-0 flex flex-col items-center py-4 gap-1" style={{ backgroundColor: BLUE }}>
            <div className="w-7 h-7 bg-white/25 rounded-lg mb-3" />
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-0.5">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
            </div>
            {[
              <svg key="b" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>,
              <svg key="u" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>,
              <svg key="c" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>,
            ].map((icon, i) => (
              <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40">{icon}</div>
            ))}
          </div>

          {/* main content */}
          <div className="flex-1 p-3 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-sm text-gray-800">Order Board</p>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">9 Jun 2026</span>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { label: 'Today', val: 'Rs. 24,500', c: BLUE },
                { label: 'Active', val: '12 orders', c: '#374151' },
                { label: 'Ready', val: '3 orders', c: GREEN },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
                  <p className="text-gray-400 text-xs mb-0.5">{s.label}</p>
                  <p className="font-black text-xs leading-tight" style={{ color: s.c }}>{s.val}</p>
                </div>
              ))}
            </div>

            {/* kanban */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { status: 'Pending', bg: 'bg-gray-100', dot: 'bg-gray-400', orders: ['A0847 · Ali R.', 'A0848 · Sara M.'] },
                { status: 'Lens Ordered', bg: 'bg-yellow-50', dot: 'bg-yellow-400', orders: ['A0845 · Bilal K.'] },
                { status: 'Ready', bg: 'bg-green-50', dot: 'bg-green-400', orders: ['A0842 · Omar', 'A0843 · Zara'] },
              ].map(col => (
                <div key={col.status} className={`${col.bg} rounded-xl p-2`}>
                  <div className="flex items-center gap-1 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                    <p className="text-xs font-bold text-gray-500 truncate">{col.status}</p>
                  </div>
                  {col.orders.map(o => (
                    <div key={o} className="bg-white rounded-lg px-2 py-1.5 text-xs text-gray-700 font-medium mb-1 truncate shadow-sm border border-gray-100">{o}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating badge — order ready */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2.5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-600">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800 whitespace-nowrap">Order Ready</p>
          <p className="text-xs text-gray-400">A0842 · Omar</p>
        </div>
      </div>

      {/* floating badge — revenue */}
      <div className="absolute -right-10 top-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2.5">
        <p className="text-xs text-gray-400 mb-0.5">This month</p>
        <p className="text-base font-black text-gray-900 leading-tight">Rs. 4,64,000</p>
        <p className="text-xs font-semibold text-green-600">↑ 18% vs last month</p>
      </div>

      {/* floating badge — AI */}
      <div className="absolute -right-6 bottom-10 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2.5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ backgroundColor: BLUE }}>✦</div>
        <div>
          <p className="text-xs font-bold text-gray-800 whitespace-nowrap">Iris AI</p>
          <p className="text-xs text-gray-400 whitespace-nowrap">Ask anything</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* top accent line */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${GREEN})` }} />

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
      <section className="relative py-20 sm:py-28 px-6 border-b border-gray-100 overflow-hidden">
        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #213F7D30 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px',
        }} />
        {/* blue glow — top right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
          background: `radial-gradient(circle, #213F7D26 0%, transparent 60%)`,
          filter: 'blur(32px)',
        }} />
        {/* green glow — bottom left */}
        <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full pointer-events-none" style={{
          background: `radial-gradient(circle, #96C62430 0%, transparent 60%)`,
          filter: 'blur(32px)',
        }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* left: text */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8 border"
                style={{ color: GREEN, borderColor: GREEN + '40', backgroundColor: GREEN + '10' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
                Built for optical stores in Pakistan
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
                Your optical store<br />
                <span style={{ color: BLUE }}>Finally organised.</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
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

            {/* right: mockup — desktop only */}
            <div className="hidden lg:block">
              <HeroMockup />
            </div>

          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-gray-200">
          {[
            { val: 'Orders → Delivered', label: 'Full order lifecycle tracked' },
            { val: 'Pakistan-first', label: 'Rs. currency · 80mm thermal receipts' },
            { val: 'Live in 24 hours', label: 'We set everything up for you' },
          ].map(s => (
            <div key={s.val} className="px-6 first:pl-0 last:pr-0">
              <p className="font-extrabold text-sm text-gray-900">{s.val}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

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
