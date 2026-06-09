'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BLUE = '#213F7D'
const GREEN = '#96C624'

const POSMockup = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-full max-w-sm mx-auto font-mono text-xs">
    <div className="flex justify-between items-center mb-3">
      <span className="font-bold text-sm text-gray-800">New Order</span>
      <span className="bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500">A0847</span>
    </div>
    <div className="bg-blue-50 rounded-lg px-3 py-2 mb-3 text-blue-800 font-semibold text-xs">👤 Ahmad Raza — 0312-4567890</div>
    <div className="border-t border-dashed border-gray-200 py-3 space-y-2">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-gray-800">Ray-Ban RB3025</p>
          <p className="text-gray-400">Frame</p>
        </div>
        <span className="font-semibold text-gray-800">Rs. 8,500</span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-gray-800">SV AR Coat 1.60</p>
          <p className="text-gray-400">Lens · SPH -2.50 CYL -0.75</p>
        </div>
        <span className="font-semibold text-gray-800">Rs. 2,400</span>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-3 space-y-1">
      <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>Rs. 10,900</span></div>
      <div className="flex justify-between text-red-500"><span>Discount</span><span>− Rs. 500</span></div>
      <div className="flex justify-between font-bold text-gray-900 text-sm"><span>TOTAL</span><span>Rs. 10,400</span></div>
      <div className="flex justify-between text-gray-500"><span>Advance Paid</span><span>Rs. 5,000</span></div>
      <div className="flex justify-between font-bold text-sm" style={{ color: BLUE }}><span>BALANCE DUE</span><span>Rs. 5,400</span></div>
    </div>
    <button className="w-full mt-4 text-white font-bold py-2.5 rounded-xl text-sm" style={{ backgroundColor: BLUE }}>
      Confirm Order & Print
    </button>
  </div>
)

const OrderBoardMockup = () => {
  const columns = [
    { label: 'Pending', color: 'bg-gray-100', dot: 'bg-gray-400', orders: ['A0843 · Ali', 'A0844 · Sana'] },
    { label: 'Lens Ordered', color: 'bg-yellow-50', dot: 'bg-yellow-400', orders: ['A0841 · Bilal'] },
    { label: 'Ready', color: 'bg-green-50', dot: 'bg-green-400', orders: ['A0839 · Sara'] },
    { label: 'Delivered', color: 'bg-blue-50', dot: 'bg-blue-400', orders: ['A0837 · Omar', 'A0838 · Zara'] },
  ]
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {columns.map((col) => (
        <div key={col.label} className={`${col.color} rounded-xl p-3`}>
          <div className="flex items-center gap-1.5 mb-3">
            <span className={`w-2 h-2 rounded-full shrink-0 ${col.dot}`} />
            <span className="text-xs font-bold text-gray-600 truncate">{col.label}</span>
          </div>
          <div className="space-y-2">
            {col.orders.map((o) => (
              <div key={o} className="bg-white rounded-lg px-2 py-2 text-xs font-semibold text-gray-700 shadow-sm border border-gray-100 truncate">
                {o}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const PrescriptionMockup = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-full max-w-sm mx-auto">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="font-bold text-gray-900">Ahmad Raza</p>
        <p className="text-xs text-gray-400">0312-4567890 · Family: Raza</p>
      </div>
      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Latest Rx</span>
    </div>
    <div className="bg-gray-50 rounded-xl overflow-hidden mb-4">
      <table className="w-full text-xs text-center">
        <thead>
          <tr className="bg-gray-200 text-gray-600 font-bold">
            <td className="py-2 px-3 text-left"></td>
            <td className="py-2">SPH</td><td className="py-2">CYL</td><td className="py-2">AXIS</td><td className="py-2">ADD</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-3 font-bold text-left text-gray-700">R</td>
            <td className="py-2 font-semibold">−2.50</td><td className="py-2 font-semibold">−0.75</td><td className="py-2 font-semibold">180°</td><td className="py-2 text-gray-400">—</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-bold text-left text-gray-700">L</td>
            <td className="py-2 font-semibold">−3.00</td><td className="py-2 font-semibold">−1.00</td><td className="py-2 font-semibold">175°</td><td className="py-2 text-gray-400">—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      <span>PD: 63.5 mm</span>
      <span className="text-gray-400">5 Jun 2026</span>
    </div>
    <div className="mt-3 pt-3 border-t border-gray-100">
      <p className="text-xs text-gray-400 mb-1">Previous prescriptions</p>
      <div className="flex gap-2">
        {['Jan 2025', 'Mar 2024', 'Aug 2023'].map(d => (
          <span key={d} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{d}</span>
        ))}
      </div>
    </div>
  </div>
)

const InventoryMockup = () => {
  const items = [
    { name: 'Ray-Ban RB3025', brand: 'Ray-Ban', stock: 4, price: '8,500', low: false },
    { name: 'Oakley OX8046', brand: 'Oakley', stock: 2, price: '12,000', low: true },
    { name: 'SV AR 1.60 Clear', brand: 'Standard', stock: 45, price: '2,400', low: false },
    { name: 'Titan T-1234', brand: 'Titan', stock: 1, price: '6,500', low: true },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-sm mx-auto">
      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
        <span className="font-bold text-sm text-gray-800">Inventory</span>
        <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">2 low stock</span>
      </div>
      <div className="divide-y divide-gray-50">
        {items.map((item) => (
          <div key={item.name} className="px-4 py-3 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{item.name}</p>
              <p className="text-xs text-gray-400">{item.brand}</p>
            </div>
            <div className="flex items-center gap-3 ml-2">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.low ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
                {item.stock} left
              </span>
              <span className="text-xs font-semibold text-gray-600">Rs. {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnalyticsMockup = () => {
  const bars = [
    { month: 'Jan', value: 58, amount: '58k' },
    { month: 'Feb', value: 72, amount: '72k' },
    { month: 'Mar', value: 65, amount: '65k' },
    { month: 'Apr', value: 90, amount: '90k' },
    { month: 'May', value: 84, amount: '84k' },
    { month: 'Jun', value: 95, amount: '95k' },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-full max-w-sm mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-bold text-gray-800">Revenue</p>
          <p className="text-2xl font-black text-gray-900">Rs. 4,64,000</p>
          <p className="text-xs text-green-600 font-semibold">↑ 18% vs last month</p>
        </div>
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Last 6 months</span>
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((b) => (
          <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{ height: `${b.value}%`, backgroundColor: b.month === 'Jun' ? GREEN : '#E8F0FB' }}
            />
            <span className="text-xs text-gray-400">{b.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2">
        {[['Orders', '142'], ['Avg Order', 'Rs. 3.2k'], ['Frames Sold', '89']].map(([label, val]) => (
          <div key={label} className="text-center">
            <p className="font-bold text-sm text-gray-800">{val}</p>
            <p className="text-xs text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const IrisMockup = () => {
  const messages = [
    { role: 'user', text: 'What lens index should I recommend for -5.00 SPH?' },
    { role: 'ai', text: 'For -5.00 SPH, I recommend 1.67 index. The lens will be significantly thinner than 1.56 and the cost-to-value ratio is better than 1.74 for this power range.' },
    { role: 'user', text: 'What about adding AR coating?' },
    { role: 'ai', text: 'Definitely recommend AR coating at this index — it eliminates the increased reflections that come with higher-index lenses. It\'s almost a necessity for 1.67 and above.' },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-sm mx-auto">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2" style={{ backgroundColor: BLUE }}>
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">✦</div>
        <span className="font-bold text-sm text-white">Iris AI</span>
      </div>
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`text-xs rounded-2xl px-3 py-2 max-w-[85%] leading-relaxed ${
                m.role === 'user'
                  ? 'text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-700 rounded-bl-sm'
              }`}
              style={m.role === 'user' ? { backgroundColor: BLUE } : {}}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    id: 'pos',
    title: 'POS & Billing',
    desc: 'Create multi-member family orders in one invoice. Frames, lenses, contact lenses, and accessories — with prescription attached to each item.',
    mockup: <POSMockup />,
  },
  {
    id: 'orders',
    title: 'Order Board',
    desc: 'A visual Kanban board that shows every order at every stage. Pending, lens ordered, received, fitting, ready, delivered — all in one view.',
    mockup: <OrderBoardMockup />,
  },
  {
    id: 'rx',
    title: 'Customers & Prescriptions',
    desc: 'Every customer has a full prescription history. Family grouping means you can see all members\' Rx in one place.',
    mockup: <PrescriptionMockup />,
  },
  {
    id: 'inventory',
    title: 'Inventory',
    desc: 'Real-time stock levels for every product. Low stock alerts, cost vs sell price tracking, and supplier-linked stock receipts.',
    mockup: <InventoryMockup />,
  },
  {
    id: 'analytics',
    title: 'Analytics',
    desc: 'Revenue charts, daily closing reports, cashier-wise breakdowns, and top products. Know exactly how your store is performing.',
    mockup: <AnalyticsMockup />,
  },
  {
    id: 'ai',
    title: 'Iris AI',
    desc: 'An AI assistant that actually knows optics. Ask about lens index recommendations, CL power conversions, or anything clinical — it understands.',
    mockup: <IrisMockup />,
  },
]

export default function FeaturesShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Built for every part<br />of your optical store
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Not a generic POS system adapted for optics — every feature was designed specifically for how optical stores actually work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Feature list */}
          <div className="space-y-2 lg:order-1 order-2">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl px-5 py-4 transition-all duration-200 ${
                  active === i ? 'shadow-md' : 'hover:bg-gray-50'
                }`}
                style={active === i ? { backgroundColor: BLUE, color: 'white' } : {}}
              >
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-base ${active === i ? 'text-white' : 'text-gray-800'}`}>{f.title}</p>
                  <span className={`text-lg ${active === i ? 'text-white' : 'text-gray-300'}`}>→</span>
                </div>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-blue-100 mt-2 leading-relaxed"
                  >
                    {f.desc}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          {/* Visual mockup */}
          <div className="lg:sticky lg:top-24 lg:order-2 order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="bg-gray-50 rounded-2xl p-4 sm:p-8 flex items-center justify-center overflow-hidden"
              >
                {features[active].mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
