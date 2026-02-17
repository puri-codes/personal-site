import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'Web Design & Development',
      description: 'A complete UX overhaul that improved checkout completion and reduced support tickets.',
      tags: ['React', 'Tailwind', 'UI/UX'],
      outcome: 'Conversion up 45%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41'
    },
    {
      id: 2,
      title: 'SaaS Dashboard with AI Analytics',
      category: 'AI-Integrated Solutions',
      description: 'Real-time analytics with AI insights to forecast churn and surface growth opportunities.',
      tags: ['React', 'Data Viz', 'AI'],
      outcome: 'Decision time down 30%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmlAli8xYwCEQolm9RNYd-pXdd1qnVmHd7hSBgqkcanrxl9vk_cNR9jWATL_WvQUWDdjq7QSNu2DJ90A2-dMR6MOc-2w0wP9CHlkKZPIkcbFI2YO1-EGjr_FJN0up3h9uvAR0OQoLtxqXR7UDCpr5rP9_fYPUSQzv5V8mjD33rcMclgYrvWzFJy9Cvq4kcFs--wllK_k1RlbaBbbjNnKR4WnZBLnX6prSsFe6twQG52OeIxbuDvkKJq9H6voCZW3PSZpCYJE3megj'
    },
    {
      id: 3,
      title: 'Brand Identity for Tech Startup',
      category: 'Branding & Graphics',
      description: 'A full brand system including identity, typography, and marketing collateral.',
      tags: ['Branding', 'Design', 'Graphics'],
      outcome: 'Investor deck refresh',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ8VaY0R2f5a7fSjMlvjsWJJlX036cjsPWvl2dMgC4KM4YIGp4OHLVEoT5RJXgyzPuKyDN3ozv0enBw484b6vB69_RvLzpjiRQiOaojcOjTNu00DZb_A9-vkVovaX-4vVq9vQf3EmMB3l8Y6ucOj6fhKYts-IDWDKK_fIq_jZWoNUBj4kNbjnnU0KpeeJP8X2YCGra8kNwMwUCfwkmQFsHErD8CLCyWj9AIuxP8kHRX7p2TMH9032o8tljD9DuRVmmZGNPdJ4Z9H'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'Web Design & Development',
      description: 'Cross-platform app with offline sync, modern UI, and performance optimization.',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      outcome: 'Retention up 22%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSXEdAz-rcNUaBEm842yRLmzg_qvvbcLL3wfbM-hOIMVkcJEfNK57ZLzjgkx95awPYeaidHC6MdOniXqf-jQyW_qTHi00_5WlJewWrYLaFRMAFZlixwLazJsAKofcWMtTAvFPe41iJswvBEKa7dpi7808x95sQm-ksN0BukbHnMrcqYAuVTBd5QF-1nqvIN-w3rQ8JDxULoOfD33vN3XNPMSqs3tEbnNJuFd2UN2khNnwS6Z0pQFJmVlet27QE8Aj618JQu8vueev'
    },
    {
      id: 5,
      title: 'Marketing Collateral Suite',
      category: 'Graphics & Product Design',
      description: 'Campaign assets across print, social, and web for a product launch.',
      tags: ['Design', 'Illustrator', 'Photoshop'],
      outcome: 'Launch kit delivered',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-gRosTN2Pl2HX4FRtgaqWrJ2IIOzy_1DGqjHY5KUTnpwXK4AOl_7-4p_mOgLkFnLupwtatXhuRvstFr7ASLnc4JPS-DeFCa3-z-b4b5PuhoMpNpVbIfJw7VofjBGwTT-3Njshz8p10N0ZrMJ1lSf3gJHQyCWM36KbRWI1zqSiHlzp2G9lrmLe9SbXeZnUzwDdhqWZ7rqA_HY_DVXF32JYdnybM5ysEvF1Y3D6RrOfn_oSwXMbCDeFt7oUwi7qT6higBwcGblo51li'
    },
    {
      id: 6,
      title: 'Studio Website System',
      category: 'Branding & Web',
      description: 'A modular marketing site built for speed, SEO, and content updates.',
      tags: ['Next.js', 'Content', 'SEO'],
      outcome: 'Lead flow up 35%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41'
    }
  ];

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary font-bold">Projects</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold">Featured Work</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A curated set of projects that blend strategy, design, and engineering with measurable outcomes.
            </p>
          </div>
          <div className="w-full md:w-auto bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">Available for projects</div>
            <div className="font-bold text-slate-900 dark:text-white">Let us build your next product</div>
            <div className="mt-4">
              <button className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/15 text-primary px-3 py-1.5 rounded-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{project.outcome}</span>
                  <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    View Project
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
