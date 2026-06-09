'use client'

import { motion } from 'framer-motion'

const GREEN = '#96C624'
const BLUE = '#213F7D'

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Orders lost in notebooks',
    desc: 'A customer comes to collect their glasses. You flip through pages trying to find their order. The notebook is full, the handwriting is unclear — and they are waiting.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prescriptions impossible to find',
    desc: 'A patient returns after two years. Their old prescription is somewhere — a card, a paper, WhatsApp — but finding it quickly while they stand there is nearly impossible.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'No idea what\'s in stock',
    desc: 'You think you have a certain frame in stock. You go to the shelf — it\'s not there. You over-order some things, run out of others. Stock is always a mystery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Supplier balances are a guessing game',
    desc: 'How much do you owe National Optical? What did you pay last month? Without a proper record, every supplier visit is a negotiation based on memory.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: GREEN }}>The reality</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
            Most optical stores in Pakistan are still running on notebooks and WhatsApp.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            It works — until it doesn&apos;t. One missed order, one wrong prescription, one disputed supplier bill. The cost of not having a system is invisible until it hits you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-400 bg-red-400/10">
                {p.icon}
              </div>
              <h3 className="font-bold text-base text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution bridge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 rounded-3xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: BLUE }}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-300">The solution</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Iris POS puts your entire store<br />into one system.
          </h3>
          <p className="text-blue-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Orders, prescriptions, inventory, supplier accounts, analytics — all connected, all real-time, accessible from any device.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['No lost orders', 'Instant prescription lookup', 'Live stock levels', 'Clear supplier balances', 'Daily closing reports'].map((item) => (
              <span key={item} className="bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                ✓ {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
