import { useEffect, useState } from 'react'
import {
  X,
  Github,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ArrowUpRight,
} from 'lucide-react'
import { Language, ProjectItem, copy } from '../content'

interface ProjectModalProps {
  project: ProjectItem | null
  language: Language
  onClose: () => void
  onOpenLightbox: (images: { src: string; alt: string }[], index: number, title: string) => void
  projectImages: Record<string, { src: string; alt: string }[]>
}

export function ProjectModal({
  project,
  language,
  onClose,
  onOpenLightbox,
  projectImages,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'features' | 'gallery'>('architecture')
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const t = copy[language]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const images = projectImages[project.id] || []
  const { caseStudy } = project

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal-dialog case-study-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <header className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badges">
              <span className="modal-category-badge">{project.category.toUpperCase()}</span>
              <span className="modal-year-badge">{project.year}</span>
              <span className="modal-role-badge">{project.role[language]}</span>
            </div>
            <h2>{project.title}</h2>
            <p className="modal-subtitle">{project.type[language]}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label={t.close}>
            <X size={20} />
          </button>
        </header>

        {/* Action Bar */}
        <div className="modal-action-bar">
          <div className="modal-nav-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'architecture'}
              className={`modal-tab ${activeTab === 'architecture' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              <Cpu size={16} />
              <span>{language === 'en' ? 'Architecture & Decisions' : 'Kiến trúc & Quyết định'}</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'features'}
              className={`modal-tab ${activeTab === 'features' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              <Sparkles size={16} />
              <span>{language === 'en' ? 'Key Features & Impact' : 'Tính năng & Tác động'}</span>
            </button>
            {images.length > 0 && (
              <button
                role="tab"
                aria-selected={activeTab === 'gallery'}
                className={`modal-tab ${activeTab === 'gallery' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('gallery')}
              >
                <Layers size={16} />
                <span>{language === 'en' ? `Visuals (${images.length})` : `Hình ảnh (${images.length})`}</span>
              </button>
            )}
          </div>

          <div className="modal-external-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="button button-primary modal-action-link"
              >
                <span>{t.viewLive}</span>
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary modal-action-link"
              >
                <Github size={16} />
                <span>{t.viewCode}</span>
              </a>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="modal-body">
          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="modal-tab-pane">
              {/* Challenge vs Solution */}
              <div className="case-study-split-grid">
                <div className="case-card challenge-card">
                  <div className="case-card-header">
                    <span className="case-icon red">⚠️</span>
                    <h3>{t.challenges}</h3>
                  </div>
                  <p>{caseStudy.challenge[language]}</p>
                </div>

                <div className="case-card solution-card">
                  <div className="case-card-header">
                    <span className="case-icon blue">💡</span>
                    <h3>{t.solution}</h3>
                  </div>
                  <p>{project.description[language]}</p>
                </div>
              </div>

              {/* Architecture Pillars */}
              <div className="case-section">
                <div className="case-section-title">
                  <Database size={18} className="section-icon" />
                  <h3>{t.architecture}</h3>
                </div>
                <div className="architecture-list">
                  {caseStudy.architecture[language].map((archPoint, idx) => (
                    <div key={idx} className="architecture-item">
                      <div className="arch-num">{String(idx + 1).padStart(2, '0')}</div>
                      <div className="arch-content">
                        <p>{archPoint}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="case-section">
                <div className="case-section-title">
                  <Code2 size={18} className="section-icon" />
                  <h3>{t.techStack}</h3>
                </div>
                <div className="modal-tech-pills">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill-large">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Takeaways */}
              <div className="case-section">
                <div className="case-section-title">
                  <ShieldCheck size={18} className="section-icon" />
                  <h3>{language === 'en' ? 'Engineering Lessons & Growth' : 'Bài học Kỹ thuật & Giá trị Đạt được'}</h3>
                </div>
                <div className="takeaways-grid">
                  {caseStudy.takeaways[language].map((item, idx) => (
                    <div key={idx} className="takeaway-item">
                      <CheckCircle2 size={16} className="takeaway-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="modal-tab-pane">
              <div className="case-section">
                <div className="case-section-title">
                  <Sparkles size={18} className="section-icon" />
                  <h3>{t.keyFeatures}</h3>
                </div>
                <div className="features-grid">
                  {caseStudy.features[language].map((feat, idx) => (
                    <div key={idx} className="feature-card">
                      <span className="feature-counter">#{idx + 1}</span>
                      <p>{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-section">
                <div className="case-section-title">
                  <Layers size={18} className="section-icon" />
                  <h3>{t.highlights}</h3>
                </div>
                <div className="highlights-pills-list">
                  {project.highlights[language].map((hl, idx) => (
                    <div key={idx} className="highlight-row">
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && images.length > 0 && (
            <div className="modal-tab-pane">
              <div className="modal-gallery-showcase">
                <div
                  className="modal-gallery-stage"
                  onClick={() => onOpenLightbox(images, activeImgIndex, project.title)}
                >
                  <img
                    src={images[activeImgIndex]?.src}
                    alt={images[activeImgIndex]?.alt}
                    className="stage-img"
                  />
                  <button
                    className="modal-gallery-expand"
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenLightbox(images, activeImgIndex, project.title)
                    }}
                    title={t.zoomHint}
                  >
                    <Maximize2 size={16} />
                  </button>
                  <p className="stage-caption">{images[activeImgIndex]?.alt}</p>
                </div>

                <div className="modal-gallery-controls">
                  <button
                    className="gallery-nav-button"
                    onClick={() => setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="gallery-thumbs-row">
                    {images.map((img, idx) => (
                      <button
                        key={img.src}
                        className={`thumb-btn-modal ${idx === activeImgIndex ? 'is-active' : ''}`}
                        onClick={() => setActiveImgIndex(idx)}
                      >
                        <img src={img.src} alt="" />
                      </button>
                    ))}
                  </div>
                  <button
                    className="gallery-nav-button"
                    onClick={() => setActiveImgIndex((prev) => (prev + 1) % images.length)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
