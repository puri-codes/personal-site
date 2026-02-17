import React from 'react';

export default function MyCV() {
  const coreSkills = [
    'UI/UX Design (Figma, wireframing, prototyping, design systems)',
    'Graphic Design (branding, social creatives, marketing assets)',
    'Frontend Development (React, JavaScript, Tailwind CSS)',
    'Web Fundamentals (responsive layouts, accessibility, performance)',
    'AI for Product Workflows (prompt design, automation, AI-assisted UX research)'
  ];

  const experience = [
    {
      role: 'UI/UX and Graphic Designer',
      period: '2024 - Present',
      highlights: [
        'Designed user flows, wireframes, and polished interfaces for web products.',
        'Created brand assets, social media kits, and campaign graphics for business clients.',
        'Improved usability by simplifying navigation and interaction patterns.'
      ]
    },
    {
      role: 'Web Designer and Frontend Developer',
      period: '2023 - 2024',
      highlights: [
        'Built responsive portfolio and business websites with modern frontend stacks.',
        'Translated design concepts into clean reusable components.',
        'Optimized page speed, mobile behavior, and cross-browser consistency.'
      ]
    },
    {
      role: 'AI-Enabled Creative Technologist',
      period: '2023 - Present',
      highlights: [
        'Integrated AI tools to speed up content ideation and design exploration.',
        'Used AI-assisted workflows for UI copy drafts, visual concept generation, and research.',
        'Applied responsible AI usage with human review for quality and brand fit.'
      ]
    }
  ];

  const projectFocus = [
    'End-to-end UI/UX from discovery to final handoff',
    'Brand identity systems for digital-first businesses',
    'Web interfaces that combine design quality and engineering reliability',
    'Practical AI integration in websites and product experiences'
  ];

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-bold">Curriculum Vitae</p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">My CV</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
            IT professional focused on UI/UX design, graphics, web development, and practical AI integration to build useful and visually strong digital products.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Creative IT professional with hands-on experience in designing UI/UX interfaces, producing high-quality graphics, and building responsive websites.
              Combines design thinking with modern frontend development and AI-enabled workflows to deliver digital experiences that are clear, usable, and goal-driven.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="border border-slate-200/70 dark:border-white/10 rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    <span className="text-sm text-primary font-semibold">{item.period}</span>
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-8">
          <article className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Core Skills</h2>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {coreSkills.map((skill) => (
                <li key={skill} className="border border-slate-200/70 dark:border-white/10 rounded-lg px-3 py-2">
                  {skill}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Project Focus</h2>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {projectFocus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base">arrow_forward</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>
    </main>
  );
}
