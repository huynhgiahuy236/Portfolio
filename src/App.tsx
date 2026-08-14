import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Copy, ExternalLink, Github, Linkedin, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { copy, Language, projects } from './content'

gsap.registerPlugin(ScrollTrigger)

type Theme = 'dark' | 'light'

const coreTechnologies = [
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
  { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
  { name: 'Flutter', icon: '/icons/tech/flutter.svg' },
  { name: 'Dart', icon: '/icons/tech/dart.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg' },
] as const

const projectImages: Record<string, { src: string; alt: string }[]> = {
  stayz: [
    { src: '/imgs%20app/home.png', alt: 'StayZ home and hotel discovery screen' },
    { src: '/imgs%20app/tim%20kiem%20co%20goi%20y.png', alt: 'StayZ hotel search with live suggestions' },
    { src: '/imgs%20app/chon%20phong%201.png', alt: 'StayZ room selection screen' },
    { src: '/imgs%20app/AI.png', alt: 'StayZ AI booking assistant' },
    { src: '/imgs%20app/qr%20thanh%20toan.png', alt: 'StayZ PayOS QR payment screen' },
    { src: '/imgs%20app/admin%201.png', alt: 'StayZ administration overview' },
  ],
  movie: [
    { src: '/images/projects/%7B3FC97632-1F2E-4EE8-9D5C-B42F5FFF9CC4%7D.png', alt: 'Movie Booking featured movies page' },
    { src: '/images/projects/%7B641ADE54-E36D-4A26-8BCB-D48545055F4D%7D.png', alt: 'Movie Booking customer experience' },
    { src: '/images/projects/%7B6E36DE89-4E8A-42A0-9583-25AFA6988D53%7D.png', alt: 'Movie Booking seat and showtime experience' },
    { src: '/images/projects/%7B8794EE0F-787D-42E0-8197-445A57708D6D%7D.png', alt: 'Movie Booking administration interface' },
  ],
  shoes: [
    { src: '/images/projects/shoes.png', alt: 'HiKu Shoes storefront home page' },
    { src: '/images/projects/shoes%20(2).png', alt: 'HiKu Shoes product catalogue' },
    { src: '/images/projects/shoes%20(3).png', alt: 'HiKu Shoes product details' },
    { src: '/images/projects/shoes%20(4).png', alt: 'HiKu Shoes administration interface' },
  ],
  phone: [
    { src: '/images/projects/phone.png', alt: 'HiKu Phone storefront home page' },
    { src: '/images/projects/phone%20(2).png', alt: 'HiKu Phone product catalogue' },
    { src: '/images/projects/phone%20(3).png', alt: 'HiKu Phone shopping experience' },
    { src: '/images/projects/phone%20(4).png', alt: 'HiKu Phone administration interface' },
  ],
}

interface SkillItem {
  name: string
  icon?: string
}

interface SkillGroup {
  id: string
  titleEn: string
  titleVi: string
  skills: SkillItem[]
}

const detailedSkillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    titleEn: 'Frontend',
    titleVi: 'Frontend',
    skills: [
      { name: 'React', icon: '/icons/tech/react.svg' },
      { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
      { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
      { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
      { name: 'Redux Toolkit', icon: '/icons/tech/redux.svg' },
      { name: 'TanStack Query' },
      { name: 'React Router' },
    ],
  },
  {
    id: 'ui-engineering',
    titleEn: 'UI Engineering',
    titleVi: 'UI Engineering',
    skills: [
      { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg' },
      { name: 'HTML5', icon: '/icons/tech/html5.svg' },
      { name: 'CSS3', icon: '/icons/tech/css3.svg' },
      { name: 'Sass / SCSS' },
      { name: 'Responsive Layouts' },
      { name: 'Web Accessibility' },
    ],
  },
  {
    id: 'mobile',
    titleEn: 'Mobile Development',
    titleVi: 'Lập trình Mobile',
    skills: [
      { name: 'Flutter', icon: '/icons/tech/flutter.svg' },
      { name: 'Dart', icon: '/icons/tech/dart.svg' },
      { name: 'Feature Architecture' },
      { name: 'Responsive Mobile UI' },
    ],
  },
  {
    id: 'backend-data',
    titleEn: 'Backend & Data',
    titleVi: 'Backend & Dữ liệu',
    skills: [
      { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
      { name: 'Express.js' },
      { name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
      { name: 'REST API' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'workflow',
    titleEn: 'Workflow & Tools',
    titleVi: 'Quy trình & Công cụ',
    skills: [
      { name: 'Git', icon: '/icons/tech/git.svg' },
      { name: 'GitHub' },
      { name: 'Figma', icon: '/icons/tech/figma.svg' },
      { name: 'Vercel', icon: '/icons/tech/vercel.svg' },
      { name: 'Postman' },
      { name: 'Swagger' },
    ],
  },
  {
    id: 'ai-assisted',
    titleEn: 'AI-Assisted Workflow',
    titleVi: 'Hỗ trợ bởi AI',
    skills: [
      { name: 'Prompt Engineering' },
      { name: 'Code Review Support' },
      { name: 'Technical Docs' },
      { name: 'UI Exploration' },
    ],
  },
]

function ProjectMedia({ id, title }: { id: string; title: string }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = projectImages[id]

  return (
    <div className={`project-gallery ${id === 'stayz' ? 'is-mobile-gallery' : 'is-web-gallery'}`} aria-label={`${title} project gallery`}>
      <div className="gallery-stage">
        {id !== 'stayz' ? (
          <div className="browser-bar">
            <div className="browser-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-url">
              <span className="lock-icon">🔒</span>
              <span>{id === 'movie' ? 'capstone-movie-ten.vercel.app' : id === 'shoes' ? 'shoes-store-react-js.vercel.app' : 'phone-store-js-html-tailwindcss.vercel.app'}</span>
            </div>
          </div>
        ) : (
          <div className="phone-notch-bar">
            <span className="phone-camera" />
            <span className="phone-speaker" />
          </div>
        )}
        <div className="gallery-image-wrap">
          <img key={images[activeImage].src} src={images[activeImage].src} alt={images[activeImage].alt} loading="lazy" />
        </div>
        <span className="gallery-count" aria-hidden="true">
          {String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>

      <div className="gallery-thumbnails" aria-label={`${title} screenshots navigation`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            className={`thumb-btn ${activeImage === index ? 'is-active' : ''}`}
            onClick={() => setActiveImage(index)}
            aria-label={`Show ${title} screenshot ${index + 1}`}
            aria-pressed={activeImage === index}
          >
            <img src={image.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

function App() {
  const root = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const t = copy[language]

  const aboutLead = language === 'en' ? (
    <>
      I am a final-year IT student focused on <strong>frontend development</strong>, with hands-on experience building <mark>Flutter applications</mark> and integrating <mark>REST APIs</mark>. I care about accessible UI, responsive layouts and practical user flows, and use <strong>AI tools</strong> to support code review, interface exploration and technical documentation.
    </>
  ) : (
    <>
      Tôi là sinh viên CNTT năm cuối, định hướng <strong>Frontend Developer</strong> và có kinh nghiệm xây dựng <mark>ứng dụng Flutter</mark>, tích hợp <mark>REST API</mark>. Tôi quan tâm đến UI dễ tiếp cận, <strong>responsive</strong> và luồng người dùng thực tế; đồng thời dùng <mark>công cụ AI</mark> để hỗ trợ review code, phát triển giao diện và viết tài liệu kỹ thuật.
    </>
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', close)
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = ['top', 'work', 'about', 'stack', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
      intro
        .from('.nav-shell', { y: -24, opacity: 0, duration: 0.7 })
        .from('.hero-copy > *', { y: 34, opacity: 0, duration: 0.85, stagger: 0.075 }, '-=.35')
        .from('.hero-portrait', { x: 46, scale: 0.94, rotate: 2, opacity: 0, duration: 1.15 }, '-=.9')
        .from('.technology-track > div', { y: 18, opacity: 0, duration: 0.55, stagger: 0.06 }, '-=.35')

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 28, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const media = card.querySelector('.project-media')
        const content = card.querySelectorAll('.project-content > *')
        gsap.from(media, { scale: 0.94, opacity: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 82%', once: true } })
        gsap.from(content, { x: card.classList.contains('is-reversed') ? -24 : 24, opacity: 0, duration: 0.62, stagger: 0.055, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 78%', once: true } })
      })

      gsap.from('.about-notes article', { y: 24, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.about-notes', start: 'top 85%', once: true } })
      gsap.from('.skills-grid article', { y: 30, scale: 0.97, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: '.skills-grid', start: 'top 84%', once: true } })
    }, root)
    return () => context.revert()
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('huynhgiahuy236@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = 'mailto:huynhgiahuy236@gmail.com'
    }
  }

  const navIds = ['work', 'about', 'stack', 'contact']

  return (
    <div ref={root} className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-shell">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          <span className="brand-badge">HGH</span>
          <span className="brand-role">Frontend + Mobile</span>
        </a>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {t.nav.map((label, index) => (
            <a className={activeSection === navIds[index] ? 'is-active' : ''} key={label} onClick={() => setMenuOpen(false)} href={`#${navIds[index]}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')} aria-label="Change language">
            {language === 'en' ? 'VI' : 'EN'}
          </button>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero page-width">
          <div className="hero-ambient-glow" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              <span>{t.available}</span>
            </div>
            <p className="hero-role">{t.role}</p>
            <h1>
              {language === 'en' ? (
                <>
                  Building interfaces<br />that feel <em>effortless.</em>
                </>
              ) : (
                <>
                  Xây dựng giao diện<br /><em>rõ ràng, mượt mà.</em>
                </>
              )}
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-stack">
              {coreTechnologies.map((item) => (
                <span key={item.name} className="core-tech-pill">
                  <img src={item.icon} alt="" />
                  {item.name}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {t.explore}
                <ArrowDown size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                {t.contactCta}
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost resume-button" href="/cv/Frontend-Intern-HuynhGiaHuy.pdf" download>
                {t.resume} (PDF)
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-image-wrapper">
              <img src="/images/huy-portrait.png" alt="Huynh Gia Huy, Frontend and Mobile Developer" />
            </div>
            <div className="portrait-meta">
              <span>📍 Ho Chi Minh City, VN</span>
              <strong>Open to Internship</strong>
            </div>
          </div>
        </section>

        <section className="technology-strip" aria-label="Core technologies">
          <div className="technology-track page-width">
            {coreTechnologies.map((technology, index) => (
              <div key={technology.name} className="tech-item">
                <span className="tech-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="technology-logo">
                  <img src={technology.icon} alt="" />
                </span>
                <strong>{technology.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work-section page-width">
          <header className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">01 / {language === 'en' ? 'SELECTED WORK' : 'DỰ ÁN TIÊU BIỂU'}</span>
              <h2>{t.selected}</h2>
            </div>
            <p>{t.selectedSub}</p>
          </header>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article key={project.id} className={`project-card project-${project.id} ${index % 2 ? 'is-reversed' : ''}`} data-reveal>
                <div className="project-media">
                  <ProjectMedia id={project.id} title={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-number">
                    <span>{project.index}</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="project-type">{project.type[language]}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description[language]}</p>

                  <dl className="project-facts">
                    <div>
                      <dt>{t.projectRole}</dt>
                      <dd>{project.role[language]}</dd>
                    </div>
                    <div>
                      <dt>{t.projectProblem}</dt>
                      <dd>{project.problem[language]}</dd>
                    </div>
                  </dl>

                  <p className="project-highlights-label">{t.highlights}</p>
                  <ul className="project-highlights">
                    {project.highlights[language].map((item) => (
                      <li key={item}>
                        <Sparkles size={13} className="sparkle-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live && (
                      <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">
                        {t.viewLive}
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                    {project.github && (
                      <a className="button button-ghost" href={project.github} target="_blank" rel="noreferrer">
                        {t.viewCode}
                        <Github size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="page-width about-layout" data-reveal>
            <div>
              <span className="eyebrow">02 / ABOUT</span>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              <p>{aboutLead}</p>
              <div className="about-notes">
                <article>
                  <span className="note-num">01</span>
                  <strong>{t.principle1}</strong>
                  <p>{t.principle1Body}</p>
                </article>
                <article>
                  <span className="note-num">02</span>
                  <strong>{t.principle2}</strong>
                  <p>{t.principle2Body}</p>
                </article>
              </div>
              <div className="education">
                <span className="edu-label">Education</span>
                <div>
                  <strong>{t.education}</strong>
                  <p>{t.school}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="skills-section page-width">
          <header className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">03 / STACK</span>
              <h2>{t.stackTitle}</h2>
            </div>
            <p>
              {language === 'en'
                ? 'A practical toolkit focused on turning requirements into responsive, production-ready applications.'
                : 'Bộ công cụ thực tế giúp hiện thực hóa yêu cầu sản phẩm thành ứng dụng responsive chỉn chu.'}
            </p>
          </header>

          <div className="skills-grid" data-reveal>
            {detailedSkillGroups.map((group, index) => (
              <article key={group.id} className="skill-card">
                <span className="skill-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{language === 'en' ? group.titleEn : group.titleVi}</h3>
                <div className="skill-badges">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="skill-chip">
                      {skill.icon && <img src={skill.icon} alt="" className="chip-icon" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-width contact-inner" data-reveal>
            <span className="eyebrow">04 / CONTACT</span>
            <p className="contact-kicker">{t.contactKicker}</p>
            <h2>
              {t.contactTitleA}
              <br />
              <em>{t.contactTitleB}</em>
            </h2>
            <div className="contact-row">
              <p>{t.contactBody}</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:huynhgiahuy236@gmail.com">
                  {t.email}
                  <ArrowUpRight size={18} />
                </a>
                <button className="button button-outline" onClick={copyEmail}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span>{copied ? t.copied : 'Copy email'}</span>
                </button>
              </div>
            </div>

            <footer>
              <span>© {new Date().getFullYear()} · Huynh Gia Huy</span>
              <div className="footer-links">
                <a href="/cv/Frontend-Intern-HuynhGiaHuy.pdf" download className="footer-link">
                  <ExternalLink size={14} />
                  <span>CV</span>
                </a>
                <a href="https://github.com/huynhgiahuy236" target="_blank" rel="noreferrer" className="footer-link">
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-gia-huy-246bb641a/" target="_blank" rel="noreferrer" className="footer-link">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>

      <a className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`} href="#top" aria-label={t.backToTop}>
        <ArrowUp size={20} />
      </a>
    </div>
  )
}

export default App
