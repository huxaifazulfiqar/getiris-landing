'use client'

import { motion } from 'framer-motion'

const GREEN = '#96C624'
const BLUE = '#213F7D'

export default function FounderSection() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — quote card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 text-8xl font-black leading-none select-none" style={{ color: GREEN + '30' }}>&ldquo;</div>
            <div className="rounded-3xl p-8 sm:p-10 border-2 relative z-10" style={{ borderColor: BLUE + '20', backgroundColor: BLUE + '05' }}>
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed mb-8">
                I spent years seeing patients, dispensing glasses, and managing a store — all while hunting through notebooks for old prescriptions and writing orders on slips of paper that kept getting lost.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I looked for software that understood how an optical store actually works — the lens queue, the lab orders, the family prescriptions, the supplier accounts. Nothing fit. So I built it.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Iris POS runs my own store today. Every feature exists because I needed it. Every problem it solves is one I lived through.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: BLUE }}>
                  OD
                </div>
                <div>
                  <p className="font-bold text-gray-900">Founder, Iris Technologies</p>
                  <p className="text-sm text-gray-500">Optometrist · Optical store owner · Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — credibility points */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>Why it matters</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Built by someone who actually runs an optical store.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Clinically accurate',
                  desc: 'Prescription formats, lens recommendations, contact lens parameters — designed by an optometrist, not a generic software developer.',
                },
                {
                  title: 'Operationally honest',
                  desc: 'The lens queue, lab order tracking, and fitting workflow match how optical stores in Pakistan actually operate — not how a textbook says they should.',
                },
                {
                  title: 'Battle-tested in a real store',
                  desc: 'This software has been running a live optical store before it was offered to anyone else. The bugs were found. The edge cases were handled.',
                },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: GREEN + '20' }}>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: GREEN }}>
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
