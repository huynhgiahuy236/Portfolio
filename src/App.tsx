import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
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

function ProjectMedia({ id, title }: { id: string; title: string }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = projectImages[id]

  return (
    <div className={`project-gallery ${id === 'stayz' ? 'is-mobile-gallery' : ''}`} aria-label={`${title} project gallery`}>
      <div className="gallery-stage">
        {id !== 'stayz' && <div className="browser-bar"><i /><i /><i /><span>{id === 'movie' ? 'movieapp' : id === 'shoes' ? 'hikushoes' : 'hikuphone'}.vercel.app</span></div>}
        <div className="gallery-image-wrap">
          <img key={images[activeImage].src} src={images[activeImage].src} alt={images[activeImage].alt} loading="lazy" />
        </div>
        <span className="gallery-count" aria-hidden="true">{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
      </div>
      <div className="gallery-thumbnails" aria-label={`${title} screenshots`}>
        {images.map((image, index) => (
          <button key={image.src} className={activeImage === index ? 'is-active' : ''} onClick={() => setActiveImage(index)} aria-label={`Show ${title} screenshot ${index + 1}`} aria-pressed={activeImage === index}>
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

  const skillGroups = language === 'en' ? [
    ['Frontend', 'JavaScript, TypeScript, ReactJS, Next.js, Redux Toolkit, TanStack Query, React Router'],
    ['UI Engineering', 'HTML5, CSS3, Tailwind CSS, Sass/SCSS, Responsive Design, Accessibility'],
    ['Mobile', 'Flutter, Dart, Feature Architecture, Responsive Interfaces'],
    ['Backend & Data', 'Node.js, Express.js, MongoDB, SQL, REST API'],
    ['Workflow', 'Git, GitHub, Figma, Vercel, Docker, Swagger, Postman'],
    ['AI-assisted', 'ChatGPT, Claude, Prompt Engineering, Code Review, Technical Documentation'],
  ] : [
    ['Frontend', 'JavaScript, TypeScript, ReactJS, Next.js, Redux Toolkit, TanStack Query, React Router'],
    ['UI Engineering', 'HTML5, CSS3, Tailwind CSS, Sass/SCSS, Responsive Design, Accessibility'],
    ['Mobile', 'Flutter, Dart, Kiến trúc theo tính năng, Giao diện responsive'],
    ['Backend & Dữ liệu', 'Node.js, Express.js, MongoDB, SQL, REST API'],
    ['Quy trình', 'Git, GitHub, Figma, Vercel, Docker, Swagger, Postman'],
    ['Hỗ trợ bởi AI', 'ChatGPT, Claude, Prompt Engineering, Review code, Tài liệu kỹ thuật'],
  ]

  const aboutLead = language === 'en' ? (
    <>I am a final-year IT student focused on <strong>frontend development</strong>, with hands-on experience building <mark>Flutter applications</mark> and integrating <mark>REST APIs</mark>. I care about accessible UI, responsive layouts and practical user flows, and use <strong>AI tools</strong> to support code review, interface exploration and technical documentation.</>
  ) : (
    <>Tôi là sinh viên CNTT năm cuối, định hướng <strong>Frontend Developer</strong> và có kinh nghiệm xây dựng <mark>ứng dụng Flutter</mark>, tích hợp <mark>REST API</mark>. Tôi quan tâm đến UI dễ tiếp cận, <strong>responsive</strong> và luồng người dùng thực tế; đồng thời dùng <mark>công cụ AI</mark> để hỗ trợ review code, phát triển giao diện và viết tài liệu kỹ thuật.</>
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
    const onScroll = () => setShowBackToTop(window.scrollY > 700)
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
        .from('.nav-shell', { y: -24, opacity: 0, duration: .7 })
        .from('.hero-copy > *', { y: 34, opacity: 0, duration: .85, stagger: .075 }, '-=.35')
        .from('.hero-portrait', { x: 46, scale: .94, rotate: 2, opacity: 0, duration: 1.15 }, '-=.9')
        .from('.technology-track > div', { y: 18, opacity: 0, duration: .55, stagger: .06 }, '-=.35')

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 28, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const media = card.querySelector('.project-media')
        const content = card.querySelectorAll('.project-content > *')
        gsap.from(media, { scale: .94, opacity: 0, duration: .9, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 82%', once: true } })
        gsap.from(content, { x: card.classList.contains('is-reversed') ? -24 : 24, opacity: 0, duration: .62, stagger: .055, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 78%', once: true } })
        gsap.to(card.querySelector('.gallery-stage'), { yPercent: -4, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .7 } })
      })

      gsap.from('.about-notes article', { y: 24, opacity: 0, stagger: .12, duration: .7, ease: 'power3.out', scrollTrigger: { trigger: '.about-notes', start: 'top 85%', once: true } })
      gsap.from('.skills-grid article', { y: 30, scale: .97, opacity: 0, stagger: .08, duration: .7, ease: 'expo.out', scrollTrigger: { trigger: '.skills-grid', start: 'top 84%', once: true } })
    }, root)
    return () => context.revert()
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('huynhgiahuy236@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:huynhgiahuy236@gmail.com'
    }
  }

  const navIds = ['work', 'about', 'stack', 'contact']

  return (
    <div ref={root} className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-shell">
        <a className="brand-mark" href="#top" aria-label="Back to top"><strong>HGH</strong><span>Frontend + Mobile</span></a>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {t.nav.map((label, index) => <a className={activeSection === navIds[index] ? 'is-active' : ''} key={label} onClick={() => setMenuOpen(false)} href={`#${navIds[index]}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')} aria-label="Change language">{language === 'en' ? 'VI' : 'EN'}</button>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero page-width">
          <div className="hero-copy">
            <div className="availability"><i />{t.available}</div>
            <p className="hero-role">{t.role}</p>
            <h1>{language === 'en' ? <>Building interfaces<br />that feel <em>effortless.</em></> : <>Xây dựng giao diện<br /><em>rõ ràng, mượt mà.</em></>}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-stack">{coreTechnologies.slice(0, 4).map(item => <span key={item.name}><img src={item.icon} alt="" />{item.name}</span>)}</div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{t.explore}<ArrowDown size={18} /></a>
              <a className="button button-secondary" href="#contact">{t.contactCta}<ArrowUpRight size={18} /></a>
              <a className="text-link" href="/cv/Frontend-Intern-HuynhGiaHuy.pdf" download>{t.resume} · PDF</a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/images/huy-portrait.png" alt="Huynh Gia Huy, Frontend and Mobile Developer" />
            <div className="portrait-meta"><span>Based in Ho Chi Minh City</span><strong>Open to internship</strong></div>
          </div>
        </section>

        <section className="technology-strip" aria-label="Core technologies">
          <div className="technology-track page-width">{coreTechnologies.map((technology, index) => <div key={technology.name}><span>{String(index + 1).padStart(2, '0')}</span><span className="technology-logo"><img src={technology.icon} alt="" /></span><strong>{technology.name}</strong></div>)}</div>
        </section>

        <section id="work" className="work-section page-width">
          <header className="section-heading" data-reveal>
            <div><span className="eyebrow">01 / {language === 'en' ? 'SELECTED WORK' : 'DỰ ÁN TIÊU BIỂU'}</span><h2>{t.selected}</h2></div>
            <p>{t.selectedSub}</p>
          </header>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article key={project.id} className={`project-card project-${project.id} ${index % 2 ? 'is-reversed' : ''}`} data-reveal>
                <div className="project-media"><ProjectMedia id={project.id} title={project.title} /></div>
                <div className="project-content">
                  <div className="project-number"><span>{project.index}</span><span>{project.year}</span></div>
                  <p className="project-type">{project.type[language]}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description[language]}</p>
                  <dl className="project-facts">
                    <div><dt>{t.projectRole}</dt><dd>{project.role[language]}</dd></div>
                    <div><dt>{t.projectProblem}</dt><dd>{project.problem[language]}</dd></div>
                  </dl>
                  <p className="project-highlights-label">{t.highlights}</p>
                  <ul className="project-highlights">{project.highlights[language].map(item => <li key={item}>{item}</li>)}</ul>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">{t.viewLive}<ArrowUpRight size={17} /></a>}
                    {project.github && <a className="button button-ghost" href={project.github} target="_blank" rel="noreferrer">{t.viewCode}<Github size={17} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="page-width about-layout" data-reveal>
            <div><span className="eyebrow">02 / ABOUT</span><h2>{t.aboutTitle}</h2></div>
            <div className="about-copy"><p>{aboutLead}</p><div className="about-notes"><article><span>01</span><strong>{t.principle1}</strong><p>{t.principle1Body}</p></article><article><span>02</span><strong>{t.principle2}</strong><p>{t.principle2Body}</p></article></div><div className="education"><span>Education</span><strong>{t.education}</strong><p>{t.school}</p></div></div>
          </div>
        </section>

        <section id="stack" className="skills-section page-width">
          <header className="section-heading" data-reveal><div><span className="eyebrow">03 / STACK</span><h2>{t.stackTitle}</h2></div><p>{language === 'en' ? 'A focused toolkit for turning product requirements into reliable interfaces.' : 'Bộ công cụ tập trung để chuyển yêu cầu sản phẩm thành giao diện đáng tin cậy.'}</p></header>
          <div className="skills-grid" data-reveal>{skillGroups.map(([title, items], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{items}</p></article>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-width contact-inner" data-reveal>
            <span className="eyebrow">04 / CONTACT</span>
            <p>{t.contactKicker}</p>
            <h2>{t.contactTitleA}<br /><em>{t.contactTitleB}</em></h2>
            <div className="contact-row"><p>{t.contactBody}</p><div className="contact-actions"><a className="button button-light" href="mailto:huynhgiahuy236@gmail.com">{t.email}<ArrowUpRight /></a><button className="button button-outline" onClick={copyEmail}>{copied ? <Check /> : <Copy />}{copied ? t.copied : 'Copy email'}</button></div></div>
            <footer><span>© {new Date().getFullYear()} · Huynh Gia Huy</span><div><a href="/cv/Frontend-Intern-HuynhGiaHuy.pdf" download>CV</a><a href="https://github.com/huynhgiahuy236" target="_blank" rel="noreferrer"><Github />GitHub</a><a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-gia-huy-246bb641a/" target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a></div></footer>
          </div>
        </section>
      </main>

      <a className={showBackToTop ? 'back-to-top is-visible' : 'back-to-top'} href="#top" aria-label={t.backToTop}><ArrowUp /></a>
    </div>
  )
}

export default App
