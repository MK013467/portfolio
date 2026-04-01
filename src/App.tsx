import React, { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const projectCards = [
  {
    imgSrc: '/desktop.png',
    title: 'Forum App',
    desc: 'Full-stack social platform with REST API architecture, session-based authentication, posts, comments, and likes.',
    skills: ['React', 'NestJS', 'Prisma', 'MySQL', 'Vercel', 'Railway'],
    github: 'https://github.com/MK013467/forum/tree/main',
    demo: 'https://forum-client-22ty.vercel.app/',
  },
  {
    imgSrc: '/clipboard.png',
    title: 'Clipboard Manager',
    desc: 'Desktop app that tracks and manages clipboard history in real-time using Electron IPC and persistent SQLite storage.',
    skills: ['Electron', 'Node.js', 'SQLite'],
    github: 'https://github.com/MK013467/forum/tree/main',
    demo: '',
  },
  {
    imgSrc: 'prosthetics.jpeg',
    title: 'NeuroTech Prosthetic ML',
    desc: 'Machine learning project predicting hand movements from EMG signals using LightGBM and XGBoost on imbalanced biosignal data.',
    skills: ['Python', 'LightGBM', 'XGBoost', 'imbalanced-learn'],
    github: 'https://github.com/NeuroTech-UCSD/Prosthetics_ML',
    demo: '',
  },
]

const stacks = [
  'TypeScript',
  'React',
  'NestJS',
  'Node.js',
  'Express',
  'Electron',
  'MySQL',
  'Prisma',
  'Redis',
  'GraphQL',
  'Tailwind CSS',
  'Docker',
  'AWS',
  'Git',
]

const experiences = [
  {
    role: 'Semiconductor Construction Technician (Piping)',
    company: 'Samsung Pyeongtaek Campus',
    period: '2025 – Present',
    desc: 'Performed installation work on a large-scale semiconductor construction site. Collaborated with team members to ensure efficient workflow and strict adherence to safety and quality standards.',
  },
  {
    role: 'Mathematics Instructor',
    company: 'Aneunjoo Math Academy, Gwangju',
    period: 'Aug 2020 – Sep 2021',
    desc: 'Taught calculus and statistics to 200+ students. Created tailored study materials and collaborated with fellow instructors to design curricula.',
  },
]

const languages = [
  { lang: 'Korean', level: 'Native' },
  { lang: 'English', level: 'Fluent' },
  { lang: 'French', level: 'Fluent' },
  { lang: 'German', level: 'Intermediate' },
  { lang: 'Chinese', level: 'Intermediate' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420]">
      <header className="sticky top-0 z-50 border-b border-[#E5DDD0] bg-[rgba(250,247,242,0.88)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-base font-medium tracking-[0.01em] sm:text-lg">
            Minseok Kwon
          </span>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="border-b border-transparent py-1 text-sm tracking-[0.04em] text-[#7A6555] transition hover:border-[#8B6A3E] hover:text-[#8B6A3E]"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-[#E5DDD0] bg-white p-2 text-[#2C2420] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#E5DDD0] bg-[#FAF7F2] md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm tracking-[0.04em] text-[#7A6555] transition hover:text-[#8B6A3E]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section
        id="about"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B6A3E]">
          Portfolio
        </p>

        <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          Hello, I&apos;m
          <br />
          Minseok Kwon.
        </h1>

        <p className="mb-4 text-base font-medium text-[#8B6A3E] sm:text-lg">
          Full Stack Web Developer
        </p>

        <p className="mb-8 max-w-2xl text-sm leading-7 text-[#7A6555] sm:text-base sm:leading-8">
          I build practical web applications with React, NestJS, Prisma, and MySQL.
          I studied Physics and Math-CSE at UC San Diego and enjoy crafting clean APIs
          alongside well-structured, readable front-end interfaces.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          {[
            { href: 'https://github.com/MK013467', icon: '/github.svg', alt: 'GitHub' },
            {
              href: 'https://www.linkedin.com/in/minsok-kwon-178b38182/',
              icon: '/linkedin.svg',
              alt: 'LinkedIn',
            },
            { href: 'mailto:minsuk603@gmail.com', icon: '/email.svg', alt: 'Email' },
          ].map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DDD0] bg-white transition hover:border-[#8B6A3E] hover:bg-[#F0E8DC]"
            >
              <img src={icon} alt={alt} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        <div className="border-t border-[#E5DDD0] pt-6">
          <p className="mb-4 text-sm font-medium text-[#7A6555]">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack) => (
              <span
                key={stack}
                className="rounded-full bg-[#EAE0D3] px-3 py-1 text-xs font-medium text-[#7A6555] sm:text-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-y border-[#E5DDD0] bg-[#F3EDE3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B6A3E]">
            Selected Work
          </p>
          <h2 className="mb-10 text-3xl font-medium sm:text-4xl">Projects</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-2xl border border-[#E5DDD0] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(44,36,32,0.08)]"
              >
                {card.imgSrc ? (
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-[#F3EDE3] text-sm text-[#7A6555]">
                    No preview available
                  </div>
                )}

                <div className="p-5">
                  <h3 className="mb-2 text-lg font-medium">{card.title}</h3>
                  <p className="mb-4 text-sm leading-6 text-[#7A6555]">{card.desc}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#EAE0D3] px-3 py-1 text-xs font-medium text-[#7A6555]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={card.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#E5DDD0] px-4 py-2 text-sm font-medium text-[#2C2420] transition hover:border-[#8B6A3E] hover:bg-[#F3EDE3]"
                    >
                      <img src="/github.svg" alt="" className="h-4 w-4" />
                      GitHub
                    </a>

                    {card.demo && (
                      <a
                        href={card.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#8B6A3E] px-4 py-2 text-sm font-medium text-[#FAF7F2] transition hover:opacity-85"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="resume"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B6A3E]">
          Background
        </p>
        <h2 className="mb-10 text-3xl font-medium sm:text-4xl">Resume</h2>

        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-[#7A6555]">
            Experience
          </p>

          {experiences.map((item) => (
            <div
              key={item.role}
              className="flex flex-col gap-4 border-b border-[#E5DDD0] py-5 md:flex-row md:items-start md:justify-between md:gap-8"
            >
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-base font-medium">{item.role}</p>
                <p className="mb-2 text-sm text-[#8B6A3E]">{item.company}</p>
                <p className="text-sm leading-6 text-[#7A6555]">{item.desc}</p>
              </div>
              <span className="shrink-0 text-sm text-[#7A6555]">{item.period}</span>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-[#7A6555]">
            Education
          </p>

          <div className="flex flex-col gap-4 border-b border-[#E5DDD0] py-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-1 text-base font-medium">
                University of California, San Diego
              </p>
              <p className="text-sm text-[#8B6A3E]">B.S. Physics & Mathematics-CS</p>
            </div>
            <span className="text-sm text-[#7A6555]">Sep 2020 – Dec 2025</span>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-[#7A6555]">
            Languages
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map(({ lang, level }) => (
              <div
                key={lang}
                className="rounded-xl border border-[#E5DDD0] bg-white px-4 py-3"
              >
                <p className="text-sm font-medium sm:text-base">{lang}</p>
                <p className="text-xs text-[#7A6555] sm:text-sm">{level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-[#E5DDD0] bg-[#F3EDE3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B6A3E]">
            Get in Touch
          </p>
          <h2 className="mb-3 text-3xl font-medium sm:text-4xl">Contact</h2>

          <p className="mb-8 max-w-xl text-sm leading-7 text-[#7A6555] sm:text-base">
            Open to new opportunities. Feel free to reach out via email or LinkedIn.
          </p>

          <div className="grid max-w-2xl grid-cols-1 gap-3">
            {[
              {
                icon: '/email.svg',
                label: 'minsuk603@gmail.com',
                href: 'mailto:minsuk603@gmail.com',
              },
              {
                icon: '/linkedin.svg',
                label: 'linkedin.com/in/minsok-kwon-178b38182',
                href: 'https://www.linkedin.com/in/minsok-kwon-178b38182/',
              },
              {
                icon: '/github.svg',
                label: 'github.com/MK013467',
                href: 'https://github.com/MK013467',
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-[#E5DDD0] bg-white px-4 py-3 text-sm text-[#2C2420] transition hover:border-[#8B6A3E]"
              >
                <img src={icon} alt="" className="h-[18px] w-[18px] shrink-0" />
                <span className="break-all text-[#7A6555]">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5DDD0] px-4 py-5 text-center text-xs text-[#7A6555] sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Minseok Kwon · Built with React
      </footer>
    </div>
  )
}