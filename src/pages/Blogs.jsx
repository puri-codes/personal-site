import React from 'react';

export default function Blogs() {
  const posts = [
    {
      id: 1,
      title: 'Design Systems That Scale',
      date: 'Jan 15, 2026',
      tag: 'Design',
      read: '5 min read',
      excerpt: 'A practical framework for building component libraries that stay cohesive as teams and products grow.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41'
    },
    {
      id: 2,
      title: 'Crafting High-Impact Landing Pages',
      date: 'Dec 02, 2025',
      tag: 'UX',
      read: '6 min read',
      excerpt: 'How layout, motion, and copy decisions work together to drive conversions and reduce bounce.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmlAli8xYwCEQolm9RNYd-pXdd1qnVmHd7hSBgqkcanrxl9vk_cNR9jWATL_WvQUWDdjq7QSNu2DJ90A2-dMR6MOc-2w0wP9CHlkKZPIkcbFI2YO1-EGjr_FJN0up3h9uvAR0OQoLtxqXR7UDCpr5rP9_fYPUSQzv5V8mjD33rcMclgYrvWzFJy9Cvq4kcFs--wllK_k1RlbaBbbjNnKR4WnZBLnX6prSsFe6twQG52OeIxbuDvkKJq9H6voCZW3PSZpCYJE3megj'
    },
    {
      id: 3,
      title: 'AI for Real Products',
      date: 'Oct 28, 2025',
      tag: 'AI',
      read: '4 min read',
      excerpt: 'A no-hype checklist for choosing the right AI use cases and shipping them responsibly.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ8VaY0R2f5a7fSjMlvjsWJJlX036cjsPWvl2dMgC4KM4YIGp4OHLVEoT5RJXgyzPuKyDN3ozv0enBw484b6vB69_RvLzpjiRQiOaojcOjTNu00DZb_A9-vkVovaX-4vVq9vQf3EmMB3l8Y6ucOj6fhKYts-IDWDKK_fIq_jZWoNUBj4kNbjnnU0KpeeJP8X2YCGra8kNwMwUCfwkmQFsHErD8CLCyWj9AIuxP8kHRX7p2TMH9032o8tljD9DuRVmmZGNPdJ4Z9H'
    },
    {
      id: 4,
      title: 'Designing with Motion',
      date: 'Sep 10, 2025',
      tag: 'Motion',
      read: '7 min read',
      excerpt: 'Subtle, purposeful animation patterns that make interfaces feel fast and human.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSXEdAz-rcNUaBEm842yRLmzg_qvvbcLL3wfbM-hOIMVkcJEfNK57ZLzjgkx95awPYeaidHC6MdOniXqf-jQyW_qTHi00_5WlJewWrYLaFRMAFZlixwLazJsAKofcWMtTAvFPe41iJswvBEKa7dpi7808x95sQm-ksN0BukbHnMrcqYAuVTBd5QF-1nqvIN-w3rQ8JDxULoOfD33vN3XNPMSqs3tEbnNJuFd2UN2khNnwS6Z0pQFJmVlet27QE8Aj618JQu8vueev'
    },
    {
      id: 5,
      title: 'Brand Systems for Startups',
      date: 'Aug 03, 2025',
      tag: 'Branding',
      read: '5 min read',
      excerpt: 'How to build a brand system that is flexible enough for rapid product iteration.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-gRosTN2Pl2HX4FRtgaqWrJ2IIOzy_1DGqjHY5KUTnpwXK4AOl_7-4p_mOgLkFnLupwtatXhuRvstFr7ASLnc4JPS-DeFCa3-z-b4b5PuhoMpNpVbIfJw7VofjBGwTT-3Njshz8p10N0ZrMJ1lSf3gJHQyCWM36KbRWI1zqSiHlzp2G9lrmLe9SbXeZnUzwDdhqWZ7rqA_HY_DVXF32JYdnybM5ysEvF1Y3D6RrOfn_oSwXMbCDeFt7oUwi7qT6higBwcGblo51li'
    },
    {
      id: 6,
      title: 'Building a Design Ops Stack',
      date: 'Jun 18, 2025',
      tag: 'Ops',
      read: '6 min read',
      excerpt: 'Templates, tooling, and rituals that keep design delivery consistent at scale.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41'
    }
  ];

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary font-bold">Blog</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold">Latest Insights</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Short reads on design, development, and AI to inspire better products and stronger brands.
            </p>
          </div>
          <div className="w-full md:w-auto bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">Monthly brief</div>
            <div className="font-bold text-slate-900 dark:text-white">Design, product, and AI insights</div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 bg-white/80 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-all dark:text-white"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest mb-3">
                  <span className="text-primary font-bold">{post.tag}</span>
                  <span className="text-slate-500 dark:text-slate-400">{post.read}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{post.date}</div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="mt-auto inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Read Article
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
