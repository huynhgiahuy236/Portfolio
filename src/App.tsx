import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Maximize2,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { copy, cvOptions, Language, ProjectCategory, projects } from './content'

gsap.registerPlugin(ScrollTrigger)

type Theme = 'dark' | 'light'

const coreTechnologies = [
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
  { name: 'NestJS', icon: '/icons/tech/nestjs.svg' },
  { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
  { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
  { name: 'Docker', icon: '/icons/tech/docker.svg' },
  { name: 'MySQL', icon: '/icons/tech/mysql.svg' },
  { name: 'Flutter', icon: '/icons/tech/flutter.svg' },
] as const

const projectImages: Record<string, { src: string; alt: string }[]> = {
  nestapi: [
    { src: '/images/projects/nest_swagger_api.jpg', alt: 'NestJS Swagger OpenAPI interactive documentation interface' },
    { src: '/images/projects/prisma_docker_dashboard.jpg', alt: 'Prisma Studio, MySQL relational schema and Docker container metrics' },
  ],
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
    id: 'backend',
    titleEn: 'Backend & APIs',
    titleVi: 'Backend & APIs',
    skills: [
      { name: 'NestJS', icon: '/icons/tech/nestjs.svg' },
      { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
      { name: 'Express.js', icon: '/icons/tech/express.svg' },
      { name: 'RESTful API' },
      { name: 'JWT & Auth (RBAC / Bcrypt)' },
      { name: 'Swagger / OpenAPI' },
    ],
  },
  {
    id: 'database-orm',
    titleEn: 'Databases & ORM',
    titleVi: 'Cơ sở dữ liệu & ORM',
    skills: [
      { name: 'MySQL', icon: '/icons/tech/mysql.svg' },
      { name: 'Prisma ORM', icon: '/icons/tech/prisma.svg' },
      { name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
      { name: 'SQL Schema Design' },
      { name: 'Query Optimization' },
      { name: 'Transactions & Relations' },
    ],
  },
  {
    id: 'devops-workflow',
    titleEn: 'DevOps & Tooling',
    titleVi: 'DevOps & Công cụ',
    skills: [
      { name: 'Docker', icon: '/icons/tech/docker.svg' },
      { name: 'Git', icon: '/icons/tech/git.svg' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Vercel', icon: '/icons/tech/vercel.svg' },
      { name: 'Clean Architecture' },
    ],
  },
  {
    id: 'frontend',
    titleEn: 'Frontend Engineering',
    titleVi: 'Lập trình Frontend',
    skills: [
      { name: 'React', icon: '/icons/tech/react.svg' },
      { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
      { name: 'JavaScript (ES6+)', icon: '/icons/tech/javascript.svg' },
      { name: 'Redux Toolkit', icon: '/icons/tech/redux.svg' },
      { name: 'TanStack Query' },
      { name: 'React Router' },
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
      { name: 'PayOS Integration' },
    ],
  },
  {
    id: 'ui-engineering',
    titleEn: 'UI & Styling',
    titleVi: 'Giao diện & Thiết kế',
    skills: [
      { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg' },
      { name: 'HTML5', icon: '/icons/tech/html5.svg' },
      { name: 'CSS3', icon: '/icons/tech/css3.svg' },
      { name: 'Sass / SCSS' },
      { name: 'Responsive Layouts' },
      { name: 'Figma', icon: '/icons/tech/figma.svg' },
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
      { name: 'Rapid Prototyping' },
    ],
  },
]

interface LightboxState {
  images: { src: string; alt: string }[]
  currentIndex: number
  title: string
}

interface ProjectMediaProps {
  id: string
  title: string
  zoomHint: string
  onOpenLightbox: (images: { src: string; alt: string }[], index: number, title: string) => void
}

function ProjectMedia({ id, title, zoomHint, onOpenLightbox }: ProjectMediaProps) {
  const [activeImage, setActiveImage] = useState(0)
  const images = projectImages[id] || []

  const urlMap: Record<string, string> = {
    nestapi: 'api.production.dev/swagger-docs (NestJS + Docker)',
    movie: 'capstone-movie-ten.vercel.app',
    shoes: 'shoes-store-react-js.vercel.app',
    phone: 'phone-store-js-html-tailwindcss.vercel.app',
  }

  if (!images.length) return null

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
              <span>{urlMap[id] || 'localhost:3000'}</span>
            </div>
          </div>
        ) : (
          <div className="phone-notch-bar">
            <span className="phone-camera" />
            <span className="phone-speaker" />
          </div>
        )}

        <div
          className="gallery-image-wrap"
          onClick={() => onOpenLightbox(images, activeImage, title)}
          title={zoomHint}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenLightbox(images, activeImage, title)}
          aria-label={`Expand ${title} image`}
        >
          <img key={images[activeImage]?.src} src={images[activeImage]?.src} alt={images[activeImage]?.alt} loading="lazy" />
          <button
            type="button"
            className="gallery-zoom-badge"
            aria-label="Expand image"
            onClick={(e) => {
              e.stopPropagation()
              onOpenLightbox(images, activeImage, title)
            }}
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {images.length > 1 && (
          <span className="gallery-count" aria-hidden="true">
            {String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        )}
      </div>

      {images.length > 1 && (
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
      )}
    </div>
  )
}

interface CvDropdownProps {
  language: Language
  buttonClass?: string
  align?: 'left' | 'right' | 'top'
}

function CvDropdown({ language, buttonClass = 'button button-ghost resume-button', align = 'left' }: CvDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = copy[language]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  return (
    <div className="cv-dropdown-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className={buttonClass}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.resume}
      >
        <FileText size={16} />
        <span>{t.resume} (PDF)</span>
        <ChevronDown size={14} className={`dropdown-chevron ${isOpen ? 'is-open' : ''}`} />
      </button>

      {isOpen && (
        <div className={`cv-dropdown-menu align-${align}`} role="menu">
          <div className="cv-dropdown-header">
            <span>{t.selectCv}</span>
          </div>
          <div className="cv-dropdown-list">
            {cvOptions.map((cv) => (
              <a
                key={cv.id}
                href={cv.file}
                download={cv.fileName}
                className="cv-dropdown-item"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <div className="cv-item-icon">
                  <Download size={16} />
                </div>
                <div className="cv-item-text">
                  <strong>{cv.title[language]}</strong>
                  <small>{cv.sub[language]}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface LightboxModalProps {
  state: LightboxState
  onClose: () => void
  onNavigate: (index: number) => void
}

function LightboxModal({ state, onClose, onNavigate }: LightboxModalProps) {
  const { images, currentIndex, title } = state
  const currentImg = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length)
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [currentIndex, images.length, onClose, onNavigate])

  if (!currentImg) return null

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${title} screenshot lightbox`}>
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <div className="lightbox-meta">
            <span className="lightbox-title">{title}</span>
            {images.length > 1 && (
              <span className="lightbox-counter">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close preview">
            <X size={20} />
          </button>
        </div>

        <div className="lightbox-main">
          {images.length > 1 && (
            <button
              className="lightbox-nav-btn prev"
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="lightbox-image-stage">
            <img src={currentImg.src} alt={currentImg.alt} className="lightbox-full-image" />
            <p className="lightbox-caption">{currentImg.alt}</p>
          </div>

          {images.length > 1 && (
            <button
              className="lightbox-nav-btn next"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="lightbox-thumbs-bar">
            {images.map((img, idx) => (
              <button
                key={img.src}
                className={`lightbox-thumb-btn ${currentIndex === idx ? 'is-active' : ''}`}
                onClick={() => onNavigate(idx)}
                aria-label={`View image ${idx + 1}`}
                aria-pressed={currentIndex === idx}
              >
                <img src={img.src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const root = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const t = copy[language]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  const categoryLabels: Record<ProjectCategory, string> = {
    all: t.filterAll,
    backend: t.filterBackend,
    fullstack: t.filterFullstack,
    mobile: t.filterMobile,
  }

  const aboutLead = language === 'en' ? (
    <>
      I am a final-year IT student focused on <strong>fullstack development</strong>, with hands-on experience building scalable <mark>NestJS & Express APIs</mark>, modeling data with <mark>Prisma & MySQL</mark>, containerizing with <mark>Docker</mark>, and crafting intuitive interfaces with <mark>React, Next.js & Flutter</mark>. I care about clean architecture, secure authentication, and practical system flows, leveraging <strong>AI tools</strong> to accelerate code review, system design, and technical documentation.
    </>
  ) : (
    <>
      Tôi là sinh viên CNTT năm cuối, định hướng <strong>Fullstack Developer</strong> và có kinh nghiệm xây dựng hệ thống API mở rộng với <mark>NestJS & Express</mark>, thiết kế CSDL với <mark>Prisma & MySQL</mark>, đóng gói môi trường <mark>Docker</mark>, cùng phát triển giao diện trực quan trên <mark>React, Next.js & Flutter</mark>. Tôi chú trọng kiến trúc sạch, xác thực bảo mật và quy trình thực tế; đồng thời dùng <mark>công cụ AI</mark> để hỗ trợ review code, thiết kế hệ thống và viết tài liệu kỹ thuật.
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
    
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll)
      }
      setShowBackToTop(window.scrollY > 600)
    }
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

  const handleOpenLightbox = (images: { src: string; alt: string }[], index: number, title: string) => {
    setLightbox({ images, currentIndex: index, title })
  }

  const navIds = ['work', 'about', 'stack', 'contact']
  const filterCategories: ProjectCategory[] = ['all', 'backend', 'fullstack', 'mobile']

  return (
    <div ref={root} className="site-shell">
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-shell">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          <span className="brand-badge">HGH</span>
          <span className="brand-role">Fullstack Developer</span>
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
                  Engineering systems<br />and <em>fluid interfaces.</em>
                </>
              ) : (
                <>
                  Xây dựng hệ thống<br /><em>vững chắc & mượt mà.</em>
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
              <CvDropdown language={language} />
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-image-wrapper">
              <img src="/images/huy-portrait.png" alt="Huynh Gia Huy, Fullstack Developer" />
            </div>
            <div className="portrait-meta">
              <span>📍 Ho Chi Minh City, VN</span>
              <strong>Open to Opportunities</strong>
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

          <div className="project-filters-bar" role="tablist" aria-label="Filter projects">
            {filterCategories.map((cat) => {
              const count = cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`filter-chip ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span>{categoryLabels[cat]}</span>
                  <span className="filter-badge">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="projects-list">
            {filteredProjects.map((project, index) => (
              <article key={project.id} className={`project-card project-${project.id} ${index % 2 ? 'is-reversed' : ''}`} data-reveal>
                <div className="project-media">
                  <ProjectMedia
                    id={project.id}
                    title={project.title}
                    zoomHint={t.zoomHint}
                    onOpenLightbox={handleOpenLightbox}
                  />
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
                <CvDropdown
                  language={language}
                  buttonClass="footer-link cv-footer-trigger"
                  align="top"
                />
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

      {lightbox && (
        <LightboxModal
          state={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox({ ...lightbox, currentIndex: index })}
        />
      )}
    </div>
  )
}

export default App
