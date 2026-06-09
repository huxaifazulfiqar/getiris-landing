import Image from "next/image";

const WA_LINK = "https://wa.me/923330209272?text=Hi%2C%20I%27m%20interested%20in%20Iris%20POS%20for%20my%20optical%20store.";
const DEMO_LINK = "https://demo.irispos.com";

const BLUE = "#213F7D";
const GREEN = "#96C624";

const features = [
  {
    icon: "🖥️",
    title: "Point of Sale",
    desc: "Fast, clean billing for frames, lenses, contact lenses, and accessories. Multi-member family orders in one invoice.",
  },
  {
    icon: "📋",
    title: "Order Management",
    desc: "Visual Kanban board to track every order from pending to delivered. Never lose track of a lens order again.",
  },
  {
    icon: "👁️",
    title: "Customers & Prescriptions",
    desc: "Complete customer profiles with full prescription history. Family grouping so you know every member's Rx at a glance.",
  },
  {
    icon: "🔬",
    title: "Lens Queue",
    desc: "Track lenses sent to labs. Mark ordered, received, and fitted — syncs automatically with the order board.",
  },
  {
    icon: "📦",
    title: "Inventory",
    desc: "Real-time stock for frames, lenses, and accessories. Barcode support, Excel import/export, and supplier tracking.",
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Daily closing reports, revenue trends, top-selling products, and cashier-wise breakdowns. Know your numbers.",
  },
  {
    icon: "🏭",
    title: "Suppliers & Accounts",
    desc: "Track what you owe every supplier. Record stock receipts, payments, and outstanding balances in one place.",
  },
  {
    icon: "✨",
    title: "Iris AI",
    desc: "Built-in AI assistant trained for optics. Lens index calculator, CL power calculator, and expert guidance — always on.",
  },
];

const steps = [
  { num: "01", title: "WhatsApp us", desc: "Tell us your store name and which plan you want. No forms, no sign-ups." },
  { num: "02", title: "We set it up", desc: "Your store is live within 24 hours — branded, configured, and ready to use." },
  { num: "03", title: "Start using it", desc: "Your team logs in from any device. No installation, no maintenance, no IT." },
];

const plans = [
  {
    name: "Starter",
    monthly: "Rs. 5,000",
    annual: "Rs. 50,000",
    setup: "Rs. 8,000",
    desc: "Perfect for small optical stores just getting started.",
    features: [
      "POS & Billing",
      "Order Board",
      "Customers & Prescriptions",
      "Lens Queue",
      "Inventory Management",
      "2 Staff Accounts",
    ],
    missing: ["Expenses & Suppliers", "Analytics", "Iris AI"],
    highlight: false,
  },
  {
    name: "Business",
    monthly: "Rs. 8,000",
    annual: "Rs. 80,000",
    setup: "Rs. 8,000",
    desc: "For growing stores that need full financial control.",
    features: [
      "Everything in Starter",
      "Expenses Tracking",
      "Suppliers & Accounts",
      "Analytics & Reports",
      "4 Staff Accounts",
    ],
    missing: ["Iris AI"],
    highlight: true,
  },
  {
    name: "Pro",
    monthly: "Rs. 12,000",
    annual: "Rs. 1,20,000",
    setup: "Free with annual",
    desc: "The complete suite for serious optical businesses.",
    features: [
      "Everything in Business",
      "Iris AI Assistant",
      "Lens Index Calculator",
      "CL Power Calculator",
      "Unlimited Staff Accounts",
    ],
    missing: [],
    highlight: false,
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/logo.png" alt="Iris" width={100} height={36} className="object-contain" />
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block transition-colors">Pricing</a>
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
      <section style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #162d5e 100%)` }} className="text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase border border-white/20">
            <span style={{ color: GREEN }}>●</span> Built for Optical Stores in Pakistan
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Run your optical store<br />
            <span style={{ color: GREEN }}>smarter, faster, better.</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Iris POS handles your orders, prescriptions, inventory, supplier accounts, and analytics — so you can focus on your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: GREEN }}
              className="text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg border border-white/20 transition-colors"
            >
              View Live Demo →
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">No sign-up needed for the demo · Live within 24 hours</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-gray-50" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything your store needs</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Built specifically for optical stores — not a generic POS adapted for optics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Up and running in 24 hours</h2>
            <p className="text-gray-500 text-lg">No technical knowledge required. We handle everything.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-5xl font-black mb-4" style={{ color: GREEN }}>{s.num}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-gray-50" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Pay annually and get setup for free — saving you Rs. 8,000 from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border-2 relative flex flex-col ${
                  p.highlight ? "border-[#213F7D] shadow-xl" : "border-gray-200 bg-white"
                }`}
                style={p.highlight ? { backgroundColor: BLUE, color: "white", borderColor: BLUE } : {}}
              >
                {p.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: GREEN }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${p.highlight ? "text-white" : "text-gray-900"}`}>{p.name}</h3>
                  <p className={`text-sm mb-6 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}>{p.desc}</p>
                  <div className="mb-1">
                    <span className="text-3xl font-black">{p.monthly}</span>
                    <span className={`text-sm ml-1 ${p.highlight ? "text-blue-200" : "text-gray-400"}`}>/month</span>
                  </div>
                  <div className={`text-sm mb-1 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}>
                    or {p.annual}/year
                  </div>
                  <div className={`text-sm font-semibold mb-8 ${p.highlight ? "" : ""}`} style={{ color: p.highlight ? GREEN : BLUE }}>
                    Setup: {p.setup}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="font-bold mt-0.5" style={{ color: GREEN }}>✓</span>
                        <span className={p.highlight ? "text-white" : "text-gray-700"}>{f}</span>
                      </li>
                    ))}
                    {p.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm opacity-35">
                        <span className="mt-0.5">✗</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-bold py-3 rounded-xl transition-opacity hover:opacity-90 text-white"
                    style={{ backgroundColor: p.highlight ? GREEN : BLUE }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-white" style={{ backgroundColor: BLUE }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to modernise your store?</h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Try the live demo first — no sign up needed. If you like it, WhatsApp us and we will have your store live within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors"
            >
              View Live Demo
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-8 py-4 rounded-xl transition-opacity hover:opacity-90 text-white"
              style={{ backgroundColor: GREEN }}
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/logo.png" alt="Iris" width={80} height={28} className="object-contain brightness-0 invert opacity-50" />
          <p className="text-sm">© {new Date().getFullYear()} Iris Technologies. All rights reserved.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
          >
            +92 333 020 9272
          </a>
        </div>
      </footer>

    </main>
  );
}
