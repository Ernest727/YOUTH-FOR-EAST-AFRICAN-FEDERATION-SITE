import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
    <div className="mt-6">{children}</div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Youth for East African Federation" className="w-9 h-9 rounded-md ring-1 ring-neutral-800" />
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-400">Youth for</p>
              <h1 className="text-lg font-bold tracking-tight">East African Federation</h1>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#why" className="hover:text-white">Why Unite</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#join" className="hover:text-white">Join</a>
          </nav>
          <a href="#join" className="px-4 py-2 rounded-xl bg-brand-green text-black font-semibold hover:brightness-110 transition">Join Us</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,122,51,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.12),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(0,122,51,0.15),transparent_40%)]" />
        </motion.div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              One People. One Destiny. <span className="text-brand-green">One Federation.</span>
            </h2>
            <p className="mt-5 text-neutral-300 text-lg md:text-xl max-w-xl">
              A youth-led movement to unite East Africa — unlocking shared power in trade, culture, sport and technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="px-5 py-3 rounded-2xl bg-brand-green text-black font-semibold hover:brightness-110 transition">Join the Movement</a>
              <a href="#why" className="px-5 py-3 rounded-2xl border border-neutral-700 hover:border-neutral-500 transition">Why Unite?</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900 p-6">
              <img src="/logo.png" alt="Y4EAF Logo" className="w-48 md:w-60 mx-auto" />
              <p className="text-center text-sm text-neutral-400 mt-3">Unite. Inspire. Transform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About the Movement">
        <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
          <p>
            Youth for East African Federation is a non-partisan, youth-driven initiative championing unity across East Africa.
            We believe colonial borders divide one people. Our mission is to build a generation that thinks, trades, learns and creates together.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Unity", "We are stronger together."],
              ["Opportunity", "One market. One passport. More jobs."],
              ["Culture", "Celebrate our shared heritage."],
              ["Peace", "Cooperation over conflict."]
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl p-4 ring-1 ring-neutral-800 bg-neutral-900">
                <p className="font-semibold">{h}</p>
                <p className="text-sm text-neutral-400 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY UNITE */}
      <Section id="why" title="Why Unite?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Free Movement", "Study, work, and build anywhere in East Africa."],
            ["Bigger Markets", "Open trade across 300M+ people lowers prices and boosts jobs."],
            ["Shared Power", "One voice in global affairs: trade, climate, tech, defense."],
            ["Youth First", "Culture, sport, and innovation at the center."]
          ].map(([title, desc]) => (
            <div key={title} className="group rounded-2xl p-5 ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROADMAP */}
      <Section id="roadmap" title="12-Month Roadmap">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Phase 1: Ignite (0–3 mo)",
              ["Daily content: satire + explainers", "Recruit campus captains & Telegram squads", "Brand kit: slogans, stickers, templates"]],
            ["Phase 2: Breakout (3–6 mo)",
              ["Cross-border creator collabs", "#OneEastAfrica challenge", "Monthly campus debates → recap threads"]],
            ["Phase 3: Movement (6–12 mo)",
              ["Regional ambassadors & city chapters", "Unity concert + sports friendlies", "Youth manifesto & policy explainers"]],
          ].map(([phase, points]) => (
            <div key={phase} className="rounded-2xl p-6 ring-1 ring-neutral-800 bg-neutral-900/40">
              <p className="text-brand-gold font-semibold">{phase}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300 list-disc list-inside">
                {points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* JOIN — Netlify Forms */}
      <section id="join" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,122,51,0.15),transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pb-24">
          <div className="rounded-3xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/60">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-4xl font-bold">Join the Movement</h3>
                <p className="mt-3 text-neutral-300">Become a chapter lead, volunteer your skills, or help spread the message. Fill the form and we’ll reach out.</p>

                <form name="join" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-6 grid gap-3 sm:grid-cols-2">
                  <input type="hidden" name="form-name" value="join" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <input name="name" type="text" placeholder="Your name" required className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-brand-green" />
                  <input name="email" type="email" placeholder="Email address" required className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-brand-green" />
                  <select name="country" required className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-brand-green">
                    <option value="">Choose your country</option>
                    <option>Uganda</option><option>Kenya</option><option>Tanzania</option>
                    <option>Rwanda</option><option>Burundi</option><option>South Sudan</option>
                    <option>DRC</option><option>Somalia</option>
                  </select>
                  <input name="skills" type="text" placeholder="Skills (design, organizing, etc.)" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-brand-green" />
                  <textarea name="message" placeholder="How would you like to help?" rows="3" className="sm:col-span-2 w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-brand-green"></textarea>
                  <button type="submit" className="rounded-xl bg-brand-green text-black font-semibold px-4 py-3 hover:brightness-110 sm:col-span-2">Join Now</button>
                </form>
                <p className="mt-3 text-xs text-neutral-500">By joining you agree to our Youth Code: respect, unity, non-violence.</p>
              </div>

              <div className="bg-neutral-950/60 p-8 md:p-12 flex flex-col gap-4">
                <h4 className="text-lg font-semibold">Stay Connected</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <a className="rounded-xl border border-neutral-800 px-4 py-3 hover:bg-neutral-900" href="https://t.me/" target="_blank" rel="noreferrer">Telegram HQ</a>
                  <a className="rounded-xl border border-neutral-800 px-4 py-3 hover:bg-neutral-900" href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer">WhatsApp Chapters</a>
                  <a className="rounded-xl border border-neutral-800 px-4 py-3 hover:bg-neutral-900" href="#" rel="noreferrer">Brand Kit</a>
                  <a className="rounded-xl border border-neutral-800 px-4 py-3 hover:bg-neutral-900" href="#" rel="noreferrer">Volunteer Form</a>
                </div>
                <div className="mt-2 text-neutral-400 text-sm">
                  Tip: Share the site and tag <span className="text-neutral-100 font-medium">#OneEastAfrica</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Youth for East African Federation. All rights reserved.
          </div>
          <div className="flex gap-4 justify-start md:justify-end text-sm">
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
            <a href="mailto:hello@y4eaf.org" className="hover:underline underline-offset-4">hello@y4eaf.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
