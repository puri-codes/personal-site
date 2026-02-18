import React, { useEffect, useRef, useState } from 'react';
import Blogs from './pages/Blogs';
import MyCV from './pages/MyCV';
import Projects from './pages/Projects';

const INITIAL_FORM_VALUES = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
};

const INITIAL_FORM_ERRORS = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
};

const INITIAL_TOUCHED = {
  fullName: false,
  phone: false,
  email: false,
  message: false
};

const FULL_NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]*$/;
const PHONE_ALLOWED_REGEX = /^[+]?[0-9()\-\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Portfolio() {
  const sectionsRef = useRef([]);
  const serviceCardsRef = useRef([]);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const ctaRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const [hoveredServiceId, setHoveredServiceId] = useState(null);
  const [pendingScroll, setPendingScroll] = useState(null);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [formErrors, setFormErrors] = useState(INITIAL_FORM_ERRORS);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const services = [
    {
      id: 1,
      title: 'Graphics and Product Design',
      icon: 'palette',
      shortDesc: 'Visual design that tells your story',
      fullDesc: 'From logo design and brand identity to product mockups and packaging, we create visually stunning graphics that resonate with your audience.',
      details: [
        'Logo & Brand Identity Design',
        'UI/UX Mockups & Prototypes',
        'Packaging & Print Design',
        'Marketing Collaterals',
        'Illustration & Custom Graphics'
      ],
      price: 'Starting from $500',
      timeline: '2-4 weeks'
    },
    {
      id: 2,
      title: 'Web Designing and Development',
      icon: 'code',
      shortDesc: 'Modern websites that convert',
      fullDesc: 'We design and develop responsive websites that are beautiful, fast, and optimized for conversions. From concept to deployment, we handle it all.',
      details: [
        'Responsive Web Design',
        'Frontend Development (React, Vue, etc)',
        'Backend Development & APIs',
        'E-commerce Solutions',
        'CMS Integration & Maintenance'
      ],
      price: 'Starting from $1500',
      timeline: '4-8 weeks'
    },
    {
      id: 3,
      title: 'AI-Integrated Solutions',
      icon: 'smart_toy',
      shortDesc: 'Intelligent automation for your business',
      fullDesc: 'Harness the power of AI and machine learning to automate processes, gain insights, and create innovative solutions that drive growth.',
      details: [
        'AI-Powered Chatbots',
        'Data Analysis & Visualization',
        'Machine Learning Models',
        'Process Automation',
        'Predictive Analytics'
      ],
      price: 'Starting from $2000',
      timeline: '6-12 weeks'
    },
    {
      id: 4,
      title: 'Branding',
      icon: 'star',
      shortDesc: 'Build a brand that stands out',
      fullDesc: 'Complete branding solutions that define your identity, establish your market presence, and create lasting connections with your audience.',
      details: [
        'Brand Strategy & Positioning',
        'Visual Identity System',
        'Brand Guidelines & Manuals',
        'Messaging & Communication',
        'Brand Refresh & Rebranding'
      ],
      price: 'Starting from $1000',
      timeline: '3-6 weeks'
    }
  ];

  const featuredProjects = [
    {
      title: 'E-commerce Platform Redesign',
      category: 'Web Design & Development',
      description: 'Complete redesign of a legacy e-commerce platform, improving user experience and conversion rates by 45%.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41',
      tags: ['React', 'Tailwind', 'UI/UX']
    },
    {
      title: 'SaaS Dashboard with AI Analytics',
      category: 'AI-Integrated Solutions',
      description: 'Intelligent dashboard with real-time analytics and AI-powered insights for business intelligence.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmlAli8xYwCEQolm9RNYd-pXdd1qnVmHd7hSBgqkcanrxl9vk_cNR9jWATL_WvQUWDdjq7QSNu2DJ90A2-dMR6MOc-2w0wP9CHlkKZPIkcbFI2YO1-EGjr_FJN0up3h9uvAR0OQoLtxqXR7UDCpr5rP9_fYPUSQzv5V8mjD33rcMclgYrvWzFJy9Cvq4kcFs--wllK_k1RlbaBbbjNnKR4WnZBLnX6prSsFe6twQG52OeIxbuDvkKJq9H6voCZW3PSZpCYJE3megj',
      tags: ['React', 'Data Viz', 'AI']
    },
    {
      title: 'Brand Identity for Tech Startup',
      category: 'Branding & Graphics',
      description: 'Complete brand identity system including logo, color palette, typography, and brand guidelines.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ8VaY0R2f5a7fSjMlvjsWJJlX036cjsPWvl2dMgC4KM4YIGp4OHLVEoT5RJXgyzPuKyDN3ozv0enBw484b6vB69_RvLzpjiRQiOaojcOjTNu00DZb_A9-vkVovaX-4vVq9vQf3EmMB3l8Y6ucOj6fhKYts-IDWDKK_fIq_jZWoNUBj4kNbjnnU0KpeeJP8X2YCGra8kNwMwUCfwkmQFsHErD8CLCyWj9AIuxP8kHRX7p2TMH9032o8tljD9DuRVmmZGNPdJ4Z9H',
      tags: ['Branding', 'Design', 'Graphics']
    },
    {
      title: 'Mobile App Development',
      category: 'Web Design & Development',
      description: 'Full-stack mobile application with seamless user experience and offline functionality.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSXEdAz-rcNUaBEm842yRLmzg_qvvbcLL3wfbM-hOIMVkcJEfNK57ZLzjgkx95awPYeaidHC6MdOniXqf-jQyW_qTHi00_5WlJewWrYLaFRMAFZlixwLazJsAKofcWMtTAvFPe41iJswvBEKa7dpi7808x95sQm-ksN0BukbHnMrcqYAuVTBd5QF-1nqvIN-w3rQ8JDxULoOfD33vN3XNPMSqs3tEbnNJuFd2UN2khNnwS6Z0pQFJmVlet27QE8Aj618JQu8vueev',
      tags: ['React Native', 'TypeScript', 'Firebase']
    },
    {
      title: 'Marketing Collateral Suite',
      category: 'Graphics & Product Design',
      description: 'Comprehensive marketing materials including brochures, posters, and social media assets.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-gRosTN2Pl2HX4FRtgaqWrJ2IIOzy_1DGqjHY5KUTnpwXK4AOl_7-4p_mOgLkFnLupwtatXhuRvstFr7ASLnc4JPS-DeFCa3-z-b4b5PuhoMpNpVbIfJw7VofjBGwTT-3Njshz8p10N0ZrMJ1lSf3gJHQyCWM36KbRWI1zqSiHlzp2G9lrmLe9SbXeZnUzwDdhqWZ7rqA_HY_DVXF32JYdnybM5ysEvF1Y3D6RrOfn_oSwXMbCDeFt7oUwi7qT6higBwcGblo51li',
      tags: ['Design', 'Illustrator', 'Photoshop']
    }
  ];

  const testimonials = [
    {
      quote: 'The level of detail and care put into our project was exceptional. Our conversion rate increased by 40% since the redesign.',
      name: 'Alex Johnson',
      role: 'CEO at TechFlow',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ8VaY0R2f5a7fSjMlvjsWJJlX036cjsPWvl2dMgC4KM4YIGp4OHLVEoT5RJXgyzPuKyDN3ozv0enBw484b6vB69_RvLzpjiRQiOaojcOjTNu00DZb_A9-vkVovaX-4vVq9vQf3EmMB3l8Y6ucOj6fhKYts-IDWDKK_fIq_jZWoNUBj4kNbjnnU0KpeeJP8X2YCGra8kNwMwUCfwkmQFsHErD8CLCyWj9AIuxP8kHRX7p2TMH9032o8tljD9DuRVmmZGNPdJ4Z9H'
    },
    {
      quote: 'Incredible design sensibilities. They really understood our brand essence and translated it into a beautiful digital experience.',
      name: 'Sarah Chen',
      role: 'Founder of Bloom',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-gRosTN2Pl2HX4FRtgaqWrJ2IIOzy_1DGqjHY5KUTnpwXK4AOl_7-4p_mOgLkFnLupwtatXhuRvstFr7ASLnc4JPS-DeFCa3-z-b4b5PuhoMpNpVbIfJw7VofjBGwTT-3Njshz8p10N0ZrMJ1lSf3gJHQyCWM36KbRWI1zqSiHlzp2G9lrmLe9SbXeZnUzwDdhqWZ7rqA_HY_DVXF32JYdnybM5ysEvF1Y3D6RrOfn_oSwXMbCDeFt7oUwi7qT6higBwcGblo51li'
    },
    {
      quote: "The most professional developer I've worked with. Clean code, timely delivery, and great communication throughout.",
      name: 'Marcus Ridley',
      role: 'Product Manager at Nexus',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSXEdAz-rcNUaBEm842yRLmzg_qvvbcLL3wfbM-hOIMVkcJEfNK57ZLzjgkx95awPYeaidHC6MdOniXqf-jQyW_qTHi00_5WlJewWrYLaFRMAFZlixwLazJsAKofcWMtTAvFPe41iJswvBEKa7dpi7808x95sQm-ksN0BukbHnMrcqYAuVTBd5QF-1nqvIN-w3rQ8JDxULoOfD33vN3XNPMSqs3tEbnNJuFd2UN2khNnwS6Z0pQFJmVlet27QE8Aj618JQu8vueev'
    }
  ];

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    try {
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', theme);
    } catch (e) { }
  }, [theme]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.animate === 'service-card') {
            entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(20px) scale(0.98)' },
                { opacity: 1, transform: 'translateY(0) scale(1)' }
              ],
              { duration: 900, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' }
            );
          } else {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
      }
    });

    serviceCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.98)';
        observer.observe(card);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
      serviceCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addServiceCardRef = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  const validateFullName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Full Name is required.';
    if (trimmed.length < 2) return 'Full Name must be at least 2 characters.';
    if (!FULL_NAME_REGEX.test(trimmed)) return 'Use letters, spaces, apostrophes, periods, or hyphens only.';
    return '';
  };

  const validatePhone = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Phone Number is required.';
    if (!PHONE_ALLOWED_REGEX.test(trimmed)) return 'Phone Number format is invalid.';
    const digits = trimmed.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) return 'Phone Number must contain 7 to 15 digits.';
    return '';
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required.';
    if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email address.';
    return '';
  };

  const validateMessage = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Message is required.';
    return '';
  };

  const getFieldError = (fieldName, value) => {
    if (fieldName === 'fullName') return validateFullName(value);
    if (fieldName === 'phone') return validatePhone(value);
    if (fieldName === 'email') return validateEmail(value);
    if (fieldName === 'message') return validateMessage(value);
    return '';
  };

  const validateForm = (values) => ({
    fullName: validateFullName(values.fullName),
    phone: validatePhone(values.phone),
    email: validateEmail(values.email),
    message: validateMessage(values.message)
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus('idle');

    if (touched[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
    }
  };

  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFormErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTouched({ fullName: true, phone: true, email: true, message: true });
    const nextErrors = validateForm(formValues);
    setFormErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setSubmitStatus('idle');
      return;
    }

    setSubmitStatus('success');
    setFormValues(INITIAL_FORM_VALUES);
    setFormErrors(INITIAL_FORM_ERRORS);
    setTouched(INITIAL_TOUCHED);
  };

  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      hero: heroRef,
      about: aboutRef,
      services: servicesRef,
      projects: projectsRef,
      blogs: blogsRef,
      cta: ctaRef
    };

    const ref = sectionRefs[sectionId];

    if (route !== '/') {
      setPendingScroll(sectionId);
      window.location.hash = '/';
      return;
    }

    if (ref && ref.current) {
      const yOffset = sectionId === 'hero' ? -95 : -100; // offset for fixed header
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (route === '/' && pendingScroll) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(pendingScroll);
        setPendingScroll(null);
      }, 100);
    }
  }, [route, pendingScroll]);

  useEffect(() => {
    if (route === '/projects' || route === '/blogs' || route === '/cv') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [route]);

  const isProjectsRoute = route === '/projects';
  const isBlogsRoute = route === '/blogs';
  const isCvRoute = route === '/cv';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&family=Birthstone&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

        .marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 2rem;
        }
        .marquee-content {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          min-width: 100%;
          gap: 2rem;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .scribble-accent {
          position: absolute;
          z-index: 10;
          filter: drop-shadow(0 0 10px rgba(63, 169, 246, 1));
        }

        /* Theme toggle (custom) */
        .theme {
          display: flex;
          align-items: center;
          -webkit-tap-highlight-color: transparent;
          --bg: #0b0f1a;
          --primary: #f97316;
          --primaryT: rgba(249, 115, 22, 0.45);
          --transDur: 0.35s;
        }
        .theme__icon {
          transition: 0.3s;
        }
        .theme__icon,
        .theme__toggle {
          z-index: 1;
        }
        .theme__icon,
        .theme__icon-part {
          position: absolute;
        }
        .theme__toggle-wrap {
          width: 3.25em;
          height: 1.7em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .theme__icon {
          display: block;
          top: 50%;
          left: 0.28em;
          width: 0.85em;
          height: 0.85em;
          transform: translateY(-50%);
        }
        .theme__icon-part {
          border-radius: 50%;
          box-shadow: 0.2em -0.2em 0 0.28em hsl(0,0%,100%) inset;
          top: calc(50% - 0.28em);
          left: calc(50% - 0.28em);
          width: 0.56em;
          height: 0.56em;
          transition: box-shadow var(--transDur) ease-in-out,
                    opacity var(--transDur) ease-in-out,
                    transform var(--transDur) ease-in-out;
          transform: scale(0.5);
        }
        .theme__icon-part ~ .theme__icon-part {
          background-color: hsl(0,0%,100%);
          border-radius: 0.04em;
          top: 50%;
          left: calc(50% - 0.04em);
          transform: rotate(0deg) translateY(0.28em);
          transform-origin: 50% 0;
          width: 0.06em;
          height: 0.12em;
        }
        .theme__icon-part:nth-child(3) { transform: rotate(45deg) translateY(0.26em); }
        .theme__icon-part:nth-child(4) { transform: rotate(90deg) translateY(0.26em); }
        .theme__icon-part:nth-child(5) { transform: rotate(135deg) translateY(0.26em); }
        .theme__icon-part:nth-child(6) { transform: rotate(180deg) translateY(0.3em); }
        .theme__icon-part:nth-child(7) { transform: rotate(225deg) translateY(0.3em); }
        .theme__icon-part:nth-child(8) { transform: rotate(270deg) translateY(0.33em); }
        .theme__icon-part:nth-child(9) { transform: rotate(315deg) translateY(0.33em); }
        .theme__label,
        .theme__toggle,
        .theme__toggle-wrap {
          position: relative;
        }
        .theme__toggle,
        .theme__toggle:before {
          display: block;
        }
        .theme__toggle {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(59, 130, 246, 0.25));
          border-radius: 25% / 50%;
          box-shadow: 0 0 0 0.125em var(--primaryT);
          padding: 0.25em;
          width: 3.25em;
          height: 1.7em;
          -webkit-appearance: none;
          appearance: none;
          transition: background-color var(--transDur) ease-in-out,
                    box-shadow 0.15s ease-in-out,
                    transform var(--transDur) ease-in-out;
        }
        .theme__toggle:before {
          background: linear-gradient(135deg, #f97316, #3b82f6);
          border-radius: 50%;
          content: "";
          width: 1.15em;
          height: 1.15em;
          transition: 0.3s;
        }
        .theme__toggle:focus {
          box-shadow: 0 0 0 0.125em var(--primary);
          outline: transparent;
        }
        .theme__toggle:checked {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.9));
        }
        .theme__toggle:checked:before,
        .theme__toggle:checked ~ .theme__icon {
          transform: translateX(1.25em);
        }
        .theme__toggle:checked:before {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
        }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
          box-shadow: 0.2em -0.2em 0 0.2em hsl(0,0%,100%) inset;
          transform: scale(1);
          top: 0.12em;
          left: -0.12em;
        }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part ~ .theme__icon-part {
          opacity: 0;
        }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(2) { transform: rotate(45deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(3) { transform: rotate(90deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(4) { transform: rotate(135deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(5) { transform: rotate(180deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(6) { transform: rotate(225deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(7) { transform: rotate(270deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(8) { transform: rotate(315deg) translateY(0.48em); }
        .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(9) { transform: rotate(360deg) translateY(0.48em); }
        .theme__toggle-wrap {
          margin: 0 0.15em;
        }
        @supports selector(:focus-visible) {
          .theme__toggle:focus {
            box-shadow: 0 0 0 0.125em var(--primaryT);
          }
          .theme__toggle:focus-visible {
            box-shadow: 0 0 0 0.125em var(--primary);
          }
        }
      `}</style>

      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl px-8 py-3">
            <div className="flex items-center gap-2">
              {/* 
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">bolt</span>
              </div>
              */}
              <button
                onClick={() => scrollToSection('hero')}
                style={{ fontFamily: 'Birthstone, cursive', textDecoration: 'none' }}
                className="font-display text-primary text-3xl font-bold tracking-tight cursor-pointer bg-transparent border-0 p-0"
              >
                Nischal
              </button>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">About</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Projects</button>
              <button onClick={() => scrollToSection('blogs')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Blog</button>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => scrollToSection('cta')} className="text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all transform hover:scale-105">
                Let's Talk
              </button>
              <label className="theme" aria-label="Toggle theme">
                <span className="theme__toggle-wrap">
                  <input
                    className="theme__toggle"
                    type="checkbox"
                    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    checked={theme === 'dark'}
                  />
                  <span className="theme__icon" aria-hidden="true">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
              </label>
            </div>
          </nav>
        </header>

        {/* Main */}
        {isProjectsRoute ? (
          <Projects />
        ) : isBlogsRoute ? (
          <Blogs />
        ) : isCvRoute ? (
          <MyCV />
        ) : (
          <main className="pt-24">
            {/* Hero Section */}
            <section ref={(el) => { addToRefs(el); heroRef.current = el; }} className="max-w-7xl mx-auto px-6 py-8 md:py-12 relative overflow-hidden -mt-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 z-10">
                  {/* 'Available for hire' badge removed as requested */}
                  <h1 className="font-display text-7xl md:text-9xl font-extrabold leading-[1.1] tracking-tight">
                    Nischal <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Puri</span>
                  </h1>
                  <h2 style={{ fontFamily: 'Birthstone, cursive' }} className="text-4xl md:text-4xl font-light leading-tight tracking-tight mt-2">
                    UI/UX, Graphic & Motion Designer · Creative Technologist
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
                    Designing intuitive experiences, building modern web systems, and integrating AI into real products.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all">Start Your Project</button>
                    <a href="#/cv" className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary hover:text-white transition-all">
                      View Portfolio
                    </a>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="relative w-full aspect-square max-w-lg mx-auto bg-slate-100 dark:bg-surface-dark rounded-xl overflow-hidden border border-white/10">
                    <img alt="Portrait of the creator" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="./public/images/nischal.png
                    " />
                    {/*
                  <div className="absolute top-10 right-10 bg-white/90 dark:bg-black/80 backdrop-blur p-4 rounded-xl shadow-xl animate-pulse border border-white/20">
                    <span className="material-symbols-outlined text-secondary text-3xl">design_services</span>
                  </div>
                  <div className="absolute bottom-10 left-10 bg-white/90 dark:bg-black/80 backdrop-blur p-4 rounded-xl shadow-xl animate-pulse border border-white/20">
                    <span className="material-symbols-outlined text-secondary text-3xl">code</span>
                  </div>
                  */}
                  </div>
                  {/* Decorative scribble accents 
                <div className="absolute -top-6 -right-6 text-secondary animate-pulse">
                  <span className="material-symbols-outlined text-7xl opacity-50">draw</span>
                </div>
                */}

                </div>
              </div>
            </section>
            {/* Marquee Section */}
            <section ref={addToRefs} className="bg-primary py-12 overflow-hidden border-y border-white/10">
              <div className="marquee">
                <div className="marquee-content">
                  <div className="flex items-center gap-8 whitespace-nowrap">
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INNOVATE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INSPIRE</span>
                    <span className="material-symbols-outlined text-white text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">CREATE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INNOVATE</span>
                    <span className="material-symbols-outlined text-white text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INSPIRE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">CREATE</span>
                  </div>
                  <div className="flex items-center gap-8 whitespace-nowrap">
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INNOVATE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INSPIRE</span>
                    <span className="material-symbols-outlined text-white text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">CREATE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INNOVATE</span>
                    <span className="material-symbols-outlined text-white text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">INSPIRE</span>
                    <span className="material-symbols-outlined text-secondary text-5xl">add</span>
                    <span className="font-display text-4xl md:text-6xl font-black text-white italic tracking-tighter">CREATE</span>
                  </div>
                </div>
              </div>
            </section>



            {/* About Section */}
            <section ref={(el) => { addToRefs(el); aboutRef.current = el; }} className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-5xl font-extrabold">About<span className="text-secondary"> Me</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    I’m a graphic and UI/UX designer who builds modern web systems and integrates AI into real products. My strength lies in crafting visually strong, intuitive experiences where branding, layout, and interaction design meet clean, scalable code.</p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    I focus on turning complex ideas into simple, functional interfaces where design isn’t just visual, but engineered for performance and impact.</p>
                  <div className="pt-4">
                    <a className="inline-flex items-center gap-2 font-bold text-primary group" href="#">
                      Learn more about my projects
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
                <div className="relative h-[500px]">
                  <div className="absolute top-0 left-0 w-4/5 aspect-square bg-slate-100 dark:bg-surface-dark rounded-xl overflow-hidden border border-white/5 rotate-[-6deg] z-0 shadow-2xl">
                    <img alt="Team meeting" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkmlAli8xYwCEQolm9RNYd-pXdd1qnVmHd7hSBgqkcanrxl9vk_cNR9jWATL_WvQUWDdjq7QSNu2DJ90A2-dMR6MOc-2w0wP9CHlkKZPIkcbFI2YO1-EGjr_FJN0up3h9uvAR0OQoLtxqXR7UDCpr5rP9_fYPUSQzv5V8mjD33rcMclgYrvWzFJy9Cvq4kcFs--wllK_k1RlbaBbbjNnKR4WnZBLnX6prSsFe6twQG52OeIxbuDvkKJq9H6voCZW3PSZpCYJE3megj" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3/4 aspect-square bg-slate-200 dark:bg-surface-dark rounded-xl overflow-hidden border-4 border-white dark:border-black rotate-[6deg] z-10 shadow-2xl">
                    <img alt="Working on wireframes" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlv1Mlr2Bc_mrph5OJzhsp7myR_6YqvWm_J9Ntb8ZEZEq5Jnlur1zJazgu4kstOPrh0Zr6SNqspwUWU07GhRh3Ay-RbFwR4YSP0Bsj-4kh3iEhAV6g8hG679rpn6NCnqtP__3-jUOp7l3-kjvqsZ42QsM5Ht6ARQi2lRXMC-l7KOmBk7iFaa2HhyGaECqkUCbNvXMiwwcGPcustOHy1L9SvOsvwAe6jNvyIaxeybBui2BFaOtvr64nxQ8mQsBn5kN76pjHdqLR41" />
                  </div>
                  {/* Decorative signature accent 
                <div className="absolute -bottom-10 -right-4 text-secondary z-20">
                  <span className="material-symbols-outlined text-8xl">signature</span>
                </div>
                */}
                </div>
              </div>
            </section>


            {/* Stats Section */}
            <section ref={addToRefs} className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-xl text-center">
                <div>
                  <div className="text-5xl font-extrabold text-primary mb-2">2+</div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-sm">Years Experience</div>
                </div>
                <div className="border-y md:border-y-0 md:border-x border-slate-200 dark:border-white/10 py-8 md:py-0">
                  <div className="text-5xl font-extrabold text-primary mb-2">50+</div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold text-primary mb-2">20+</div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-sm">Happy Clients</div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section ref={(el) => { addToRefs(el); servicesRef.current = el; }} className="max-w-7xl mx-auto px-6 py-20">
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                  <h2 className="font-display text-4xl font-extrabold mb-6">My Services</h2>
                  <p className="text-slate-500">We offer a range of creative and digital services designed to help your brand stand out.</p>
                </div>
                <div className="md:w-2/3 space-y-4">
                  {services.map((service, idx) => (
                    <div
                      key={service.id}
                      onClick={() => setExpandedServiceId(prev => (prev === service.id ? null : service.id))}
                      onMouseEnter={() => setHoveredServiceId(service.id)}
                      onMouseLeave={() => setHoveredServiceId(null)}
                      className="group relative overflow-visible border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 rounded-xl p-8 flex items-center justify-between cursor-pointer transition-all hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/5"
                      ref={addServiceCardRef}
                      data-animate="service-card"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-8">
                          <span className="text-xl font-bold text-primary">{String(idx + 1).padStart(2, '0')}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{service.shortDesc}</p>
                          </div>
                        </div>
                        {(expandedServiceId === service.id || hoveredServiceId === service.id) && (
                          <div className="mt-6 border-t border-slate-200/60 dark:border-white/10 pt-5 space-y-4">
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {service.fullDesc}
                            </p>
                          </div>
                        )}
                      </div>
                      <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary text-3xl transition-colors">
                        {(expandedServiceId === service.id || hoveredServiceId === service.id) ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section - Animated Cards */}
            <section ref={(el) => { addToRefs(el); projectsRef.current = el; }} className="max-w-7xl mx-auto px-6 py-20">
              <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl md:text-5xl font-extrabold">Featured <span className="text-primary">Projects</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    A selection of recent work showcasing design, development, and strategic thinking.
                  </p>
                </div>
              </div>

              <div className="cards-marquee [--cards-duration:30s]">
                {[0, 1].map((trackIndex) => {
                  const isClone = trackIndex === 1;
                  return (
                    <div key={trackIndex} className={`cards-track ${isClone ? 'pointer-events-none' : ''}`} aria-hidden={isClone}>
                      {featuredProjects.map((project) => (
                        <div key={`${trackIndex}-${project.title}`} className="cards-item w-[20rem] md:w-96">
                          <div className="overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</span>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1 leading-relaxed">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="text-xs bg-primary/15 text-primary px-3 py-1.5 rounded-lg font-medium">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <button type="button" tabIndex={isClone ? -1 : 0} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                View Project
                                <span className="material-symbols-outlined text-base">arrow_outward</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center">
                  <a href="#/projects" className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 whitespace-nowrap">
                    View All Projects
                  </a>
                </div>
              </div>
            </section>

            {/* Blog Section */}
            <section ref={(el) => { addToRefs(el); blogsRef.current = el; }} className="max-w-7xl mx-auto px-6 py-20">
              <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl md:text-5xl font-extrabold">Latest <span className="text-primary">Insights</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    Short reads on design, development, and AI — crafted to inspire and inform.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Design Systems That Scale',
                    excerpt: 'How to build a cohesive visual language that grows with your product.',
                    tag: 'Design',
                    read: '5 min read'
                  },
                  {
                    title: 'Crafting High-Impact Landing Pages',
                    excerpt: 'Layouts, motion, and copy choices that improve conversions.',
                    tag: 'UX',
                    read: '6 min read'
                  },
                  {
                    title: 'AI for Real Products',
                    excerpt: 'Practical ways to integrate AI without overengineering.',
                    tag: 'AI',
                    read: '4 min read'
                  }
                ].map((post, i) => (
                  <article
                    key={post.title}
                    className="relative overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl group"
                  >
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/15 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/15 rounded-full blur-3xl"></div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                        <span className="text-primary font-bold">{post.tag}</span>
                        <span className="text-slate-500 dark:text-slate-400">{post.read}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{post.excerpt}</p>
                      <button className="inline-flex items-center gap-2 text-primary font-bold">
                        Read More
                        <span className="material-symbols-outlined text-base">arrow_outward</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <a href="#/blogs" className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 whitespace-nowrap">
                  View All Blogs
                </a>
              </div>
            </section>


            {/* Testimonials Section */}
            <section ref={addToRefs} className="max-w-7xl mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <h2 className="font-display text-5xl font-extrabold mb-4">What Clients Say</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-xl"></div>
              </div>
              <div className="cards-marquee [--cards-duration:24s]">
                {[0, 1].map((trackIndex) => (
                  <div key={trackIndex} className="cards-track" aria-hidden={trackIndex === 1}>
                    {testimonials.map((testimonial) => (
                      <div key={`${trackIndex}-${testimonial.name}`} className="cards-item w-[20rem] md:w-[24rem]">
                        <div className="bg-white dark:bg-surface-dark p-10 rounded-xl border border-slate-200 dark:border-white/5 relative group hover:border-primary/50 transition-all h-full">
                          <span className="material-symbols-outlined text-primary text-5xl absolute top-8 right-8 opacity-20">format_quote</span>
                          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden">
                              <img alt={testimonial.name} src={testimonial.image} />
                            </div>
                            <div>
                              <div className="font-bold">{testimonial.name}</div>
                              <div className="text-sm text-slate-500">{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section ref={(el) => { addToRefs(el); ctaRef.current = el; }} className="max-w-7xl mx-auto px-6 py-20">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-12 md:p-24 text-center border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-xl blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-xl blur-3xl"></div>
                <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 relative z-10 leading-tight">
                  Let's Work Together on Your <span className="text-primary">Next Project</span>
                </h2>
                <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10" onSubmit={handleFormSubmit} noValidate>
                  <div className="text-left">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={formValues.fullName}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      className={`w-full bg-white dark:bg-black/50 border-2 rounded-xl px-5 py-4 text-base outline-none transition-all dark:text-white ${touched.fullName && formErrors.fullName ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'}`}
                      placeholder="Enter your full name"
                    />
                    {touched.fullName && formErrors.fullName && (
                      <p className="text-sm text-red-500 mt-2">{formErrors.fullName}</p>
                    )}
                  </div>
                  <div className="text-left">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formValues.phone}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      className={`w-full bg-white dark:bg-black/50 border-2 rounded-xl px-5 py-4 text-base outline-none transition-all dark:text-white ${touched.phone && formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {touched.phone && formErrors.phone && (
                      <p className="text-sm text-red-500 mt-2">{formErrors.phone}</p>
                    )}
                  </div>
                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern={EMAIL_REGEX.source}
                      autoComplete="email"
                      value={formValues.email}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      className={`w-full bg-white dark:bg-black/50 border-2 rounded-xl px-5 py-4 text-base outline-none transition-all dark:text-white ${touched.email && formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'}`}
                      placeholder="you@example.com"
                    />
                    {touched.email && formErrors.email && (
                      <p className="text-sm text-red-500 mt-2">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="md:col-span-3 text-left">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formValues.message}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      className={`w-full bg-white dark:bg-black/50 border-2 rounded-xl px-5 py-4 text-base outline-none transition-all dark:text-white resize-y min-h-[140px] ${touched.message && formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'}`}
                      placeholder="Write your message"
                    />
                    {touched.message && formErrors.message && (
                      <p className="text-sm text-red-500 mt-2">{formErrors.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-3 flex justify-center">
                    <button type="submit" className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1">Get Started</button>
                  </div>
                </form>
                {submitStatus === 'success' && (
                  <p className="relative z-10 mt-4 text-primary font-semibold">Thanks! Your details were submitted successfully.</p>
                )}
              </div>
            </section>
          </main>
        )}

        {/* Footer */}
        <footer className="bg-primary pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">bolt</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-white tracking-tight">Nischal Puri</span>
                </div>
                <p className="text-white/80 max-w-sm text-lg">Creating meaningful digital experiences that empower brands to reach their full potential.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-xl">Quick Links</h4>
                <ul className="space-y-4">
                  <li><a className="text-white/70 hover:text-secondary transition-colors text-lg" href="#">About Us</a></li>
                  <li><a className="text-white/70 hover:text-secondary transition-colors text-lg" href="#">Services</a></li>
                  <li><a className="text-white/70 hover:text-secondary transition-colors text-lg" href="#">Projects</a></li>
                  <li><a className="text-white/70 hover:text-secondary transition-colors text-lg" href="#">Reviews</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-xl">Socials</h4>
                <div className="flex gap-4">
                  <a className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-secondary transition-all" href="#">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path></svg>
                  </a>
                  <a className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-secondary transition-all" href="#">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a>
                  <a className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-secondary transition-all" href="#">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© 2024 Personal Brand. All Rights Reserved.</p>
              <div className="flex gap-8 text-sm text-white/60">
                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
