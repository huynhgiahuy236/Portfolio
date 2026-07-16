import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Copy, Github, Linkedin, Moon, Sun } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { copy, Language, projects } from './content'

gsap.registerPlugin(ScrollTrigger)

type Theme = 'dark' | 'light'

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'phone') {
    return (
      <div className="phone-scene" aria-hidden="true">
        <div className="phone-orbit orbit-one" />
        <div className="phone-orbit orbit-two" />
        <div className="phone-shell phone-back">
          <div className="phone-screen stayz-screen secondary-screen">
            <span className="mini-label">StayZ</span><div className="mini-photo" />
          </div>
        </div>
        <div className="phone-shell phone-front">
          <div className="phone-island" />
          <div className="phone-screen stayz-screen">
            <div className="stayz-top"><span>StayZ</span><i /></div>
            <div className="stayz-copy"><small>DISCOVER</small><b>Find your next<br />stay.</b></div>
            <div className="stayz-search">Where do you want to go?</div>
            <div className="stayz-card"><span>Recommended</span><strong>Coastal escape</strong></div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'cinema') {
    return (
      <div className="cinema-scene" aria-hidden="true">
        <div className="movie-poster poster-one"><span>01</span><b>THE<br />LAST<br />FRAME</b></div>
        <div className="movie-poster poster-two"><span>02</span><b>DARK<br />MATTER</b></div>
        <div className="seat-map">
          <div className="screen-line">SCREEN</div>
          {Array.from({ length: 28 }, (_, i) => <i className={i === 17 || i === 18 ? 'selected' : ''} key={i} />)}
        </div>
      </div>
    )
  }
  if (kind === 'shoe') {
    return (
      <div className="shoe-scene" aria-hidden="true">
        <div className="shoe-number">01</div>
        <div className="shoe-shape"><div className="shoe-sole" /><div className="shoe-laces">///</div></div>
        <div className="shoe-meta"><small>HIKU SELECTED</small><strong>Everyday<br />motion.</strong></div>
      </div>
    )
  }
  return (
    <div className="device-scene" aria-hidden="true">
      <div className="device-card card-a"><small>NEW ARRIVAL</small><b>14 Pro</b><span>Explore device</span></div>
      <div className="device-card card-b"><div className="device-camera" /><div className="device-camera second" /></div>
      <div className="device-ring" />
    </div>
  )
}

function App() {
  const root = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('.nav-shell', { y: -40, opacity: 0, duration: 0.8 })
        .from('.hero-kicker', { y: 24, opacity: 0, duration: 0.6 }, '-=.35')
        .from('.hero-line-inner', { yPercent: 115, duration: 1.15, stagger: 0.12, ease: 'power4.out' }, '-=.35')
        .from('.hero-support > *', { y: 22, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=.65')
        .from('.portrait-wrap', { clipPath: 'inset(100% 0 0 0)', scale: 1.08, duration: 1.15 }, '-=1.05')

      gsap.to('.portrait-image', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 56,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const visual = card.querySelector('.project-visual')
        gsap.fromTo(visual, { y: 40 }, {
          y: -24,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('huynhgiahuy236@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const navIds = ['work', 'about', 'stack', 'contact']

  return (
    <div ref={root} className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-shell">
        <a className="brand-mark" href="#top" aria-label="Back to top">H<span>G</span>H.</a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {t.nav.map((label, index) => <a key={label} onClick={() => setMenuOpen(false)} href={`#${navIds[index]}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="text-toggle" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')} aria-label="Change language">
            <span className={language === 'en' ? 'active' : ''}>EN</span><i /><span className={language === 'vi' ? 'active' : ''}>VI</span>
          </button>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero section-pad">
          <div className="hero-grid grid-lines" />
          <div className="hero-content">
            <div className="hero-kicker"><i />{t.available}</div>
            <h1 aria-label={`${t.heroA} ${t.heroB}`}>
              <span className="hero-line"><span className="hero-line-inner">{t.heroA}</span></span>
              <span className="hero-line serif"><span className="hero-line-inner">{t.heroB}</span></span>
            </h1>
            <div className="hero-support">
              <p>{t.intro}</p>
              <div className="hero-cta-row">
                <a className="primary-button" href="#work">{t.explore}<ArrowDown size={18} /></a>
                <div className="resume-links">
                  <span>{t.resume}</span>
                  <a href="/cv/Frontend-Intern-HuynhGiaHuy.pdf" download>WEB ↘</a>
                  <a href="/cv/CV-Intern-Mobile-HuynhGiaHuy.pdf" download>MOBILE ↘</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portrait-wrap">
            <img className="portrait-image" src="/images/huy-portrait.png" alt="Portrait of Huynh Gia Huy" />
            <div className="portrait-caption"><span>{t.eyebrow}</span><small>Ho Chi Minh City · VN</small></div>
          </div>
          <div className="scroll-note">SCROLL TO EXPLORE <ArrowDown size={14} /></div>
        </section>

        <section id="work" className="work-section section-pad">
          <header className="section-header" data-reveal>
            <span className="section-index">01 — WORK</span>
            <div><h2>{t.selected}</h2><p>{t.selectedSub}</p></div>
          </header>
          <div className="projects-list">
            {projects.map((project) => (
              <article key={project.id} className={`project-card project-${project.id}`}>
                <div className="project-topline"><span>{project.index}</span><span>{project.type[language]}</span><span>{project.year}</span></div>
                <div className="project-copy" data-reveal>
                  {project.id === 'stayz' && <span className="project-badge">{t.flagship}</span>}
                  <h3>{project.title}</h3>
                  <p>{project.description[language]}</p>
                  <ul className="project-stats">{project.stats.map(stat => <li key={stat}>{stat}</li>)}</ul>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">{t.viewLive}<ArrowUpRight size={17} /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer">{t.viewCode}<Github size={17} /></a>}
                  </div>
                </div>
                <div className="project-visual"><ProjectVisual kind={project.visual} /></div>
              </article>
            ))}
          </div>
          <a className="additional-work" href="https://capstone-tailwind-three.vercel.app/" target="_blank" rel="noreferrer" data-reveal>
            <span>05</span><strong>Solid SaaS Landing</strong><em>{t.additional}</em><ArrowUpRight />
          </a>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="about-grid">
            <div className="about-heading" data-reveal><span className="section-index">02 — ABOUT</span><p>{t.aboutKicker}</p><h2>{t.aboutTitle}</h2></div>
            <div className="about-content" data-reveal>
              <p className="about-lead">{t.aboutBody}</p>
              <div className="principles">
                <article><span>01</span><h3>{t.principle1}</h3><p>{t.principle1Body}</p></article>
                <article><span>02</span><h3>{t.principle2}</h3><p>{t.principle2Body}</p></article>
              </div>
              <div className="education"><small>EDUCATION</small><div><strong>{t.education}</strong><span>{t.school}</span></div></div>
            </div>
          </div>
        </section>

        <section id="stack" className="stack-section section-pad">
          <header className="stack-header" data-reveal><span className="section-index">03 — STACK</span><p>{t.stackKicker}</p><h2>{t.stackTitle}</h2></header>
          <div className="stack-table" data-reveal>
            <div><span>01</span><strong>Frontend</strong><p>ReactJS · Next.js · TypeScript · JavaScript · Tailwind CSS</p></div>
            <div><span>02</span><strong>Mobile</strong><p>Flutter · Dart · Responsive interfaces · Feature architecture</p></div>
            <div><span>03</span><strong>Data & State</strong><p>Redux Toolkit · TanStack Query · Axios · RESTful APIs · JWT</p></div>
            <div><span>04</span><strong>Workflow</strong><p>Git · GitHub · Postman · Swagger · Figma · Vercel · Render</p></div>
            <div><span>05</span><strong>Backend exposure</strong><p>Node.js · Express.js · MongoDB · Redis · Socket.IO · PayOS</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <span className="section-index" data-reveal>04 — CONTACT</span>
          <div className="contact-content" data-reveal>
            <p>{t.contactKicker}</p>
            <h2>{t.contactTitleA}<br /><em>{t.contactTitleB}</em></h2>
            <div className="contact-bottom">
              <p>{t.contactBody}</p>
              <div className="contact-actions">
                <a className="contact-primary" href="mailto:huynhgiahuy236@gmail.com">{t.email}<ArrowUpRight /></a>
                <button onClick={copyEmail}>{copied ? <Check /> : <Copy />} {copied ? t.copied : 'huynhgiahuy236@gmail.com'}</button>
              </div>
            </div>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} · {t.rights}</span>
            <div><a href="https://github.com/huynhgiahuy236" target="_blank" rel="noreferrer"><Github />GitHub</a><a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-gia-huy-246bb641a/" target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a></div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
