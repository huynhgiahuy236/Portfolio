import { useEffect, useRef, useState, useMemo } from 'react'
import {
  Search,
  FolderGit2,
  FileText,
  Copy,
  Sun,
  Moon,
  Globe,
  Github,
  Linkedin,
  Compass,
  ArrowRight,
  X,
  Code2,
} from 'lucide-react'
import { Language, ProjectItem, copy, cvOptions, projects } from '../content'

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: 'navigation' | 'projects' | 'downloads' | 'actions'
  icon: React.ReactNode
  perform: () => void
  badge?: string
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  language: Language
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onToggleLanguage: () => void
  onSelectProject: (project: ProjectItem) => void
  onCopyEmail: () => void
}

export function CommandPalette({
  isOpen,
  onClose,
  language,
  theme,
  onToggleTheme,
  onToggleLanguage,
  onSelectProject,
  onCopyEmail,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const t = copy[language]

  const items = useMemo<CommandItem[]>(() => {
    const list: CommandItem[] = [
      // Navigation
      {
        id: 'nav-work',
        title: language === 'en' ? 'Go to Projects' : 'Đi tới Danh mục Dự án',
        subtitle: '#work',
        category: 'navigation',
        icon: <Compass size={18} />,
        perform: () => {
          onClose()
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'nav-about',
        title: language === 'en' ? 'Go to About Me' : 'Đi tới Giới thiệu',
        subtitle: '#about',
        category: 'navigation',
        icon: <Compass size={18} />,
        perform: () => {
          onClose()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'nav-stack',
        title: language === 'en' ? 'Go to Tech Stack' : 'Đi tới Kỹ năng & Công nghệ',
        subtitle: '#stack',
        category: 'navigation',
        icon: <Code2 size={18} />,
        perform: () => {
          onClose()
          document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: 'nav-contact',
        title: language === 'en' ? 'Go to Contact' : 'Đi tới Liên hệ',
        subtitle: '#contact',
        category: 'navigation',
        icon: <Compass size={18} />,
        perform: () => {
          onClose()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
      },

      // Projects
      ...projects.map((proj) => ({
        id: `proj-${proj.id}`,
        title: proj.title,
        subtitle: `${proj.type[language]} · ${proj.tags.slice(0, 3).join(', ')}`,
        category: 'projects' as const,
        icon: <FolderGit2 size={18} />,
        badge: proj.category.toUpperCase(),
        perform: () => {
          onClose()
          onSelectProject(proj)
        },
      })),

      // Downloads
      ...cvOptions.map((cv) => ({
        id: `cv-${cv.id}`,
        title: `${language === 'en' ? 'Download' : 'Tải'} ${cv.title[language]}`,
        subtitle: cv.sub[language],
        category: 'downloads' as const,
        icon: <FileText size={18} />,
        badge: 'PDF',
        perform: () => {
          onClose()
          const a = document.createElement('a')
          a.href = cv.file
          a.download = cv.fileName
          a.click()
        },
      })),

      // Actions
      {
        id: 'act-copy-email',
        title: language === 'en' ? 'Copy Email Address' : 'Sao chép địa chỉ Email',
        subtitle: 'huynhgiahuy236@gmail.com',
        category: 'actions',
        icon: <Copy size={18} />,
        perform: () => {
          onClose()
          onCopyEmail()
        },
      },
      {
        id: 'act-toggle-theme',
        title: language === 'en' ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode` : `Chuyển sang giao diện ${theme === 'dark' ? 'Sáng' : 'Tối'}`,
        category: 'actions',
        icon: theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />,
        perform: () => {
          onClose()
          onToggleTheme()
        },
      },
      {
        id: 'act-toggle-lang',
        title: language === 'en' ? 'Switch to Tiếng Việt' : 'Switch to English',
        category: 'actions',
        icon: <Globe size={18} />,
        perform: () => {
          onClose()
          onToggleLanguage()
        },
      },
      {
        id: 'act-github',
        title: 'Open GitHub Profile',
        subtitle: 'github.com/huynhgiahuy236',
        category: 'actions',
        icon: <Github size={18} />,
        perform: () => {
          onClose()
          window.open('https://github.com/huynhgiahuy236', '_blank')
        },
      },
      {
        id: 'act-linkedin',
        title: 'Open LinkedIn Profile',
        subtitle: 'linkedin.com/in/huỳnh-gia-huy-246bb641a',
        category: 'actions',
        icon: <Linkedin size={18} />,
        perform: () => {
          onClose()
          window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-gia-huy-246bb641a/', '_blank')
        },
      },
    ]

    return list
  }, [language, theme, onClose, onSelectProject, onCopyEmail, onToggleTheme, onToggleLanguage])

  const filteredItems = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return items
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q),
    )
  }, [items, query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      setQuery('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].perform()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, onClose])

  if (!isOpen) return null

  const categoriesOrder: Array<{ key: CommandItem['category']; label: string }> = [
    { key: 'navigation', label: language === 'en' ? 'Navigation' : 'Điều hướng' },
    { key: 'projects', label: language === 'en' ? 'Projects & Case Studies' : 'Dự án & Kiến trúc' },
    { key: 'downloads', label: language === 'en' ? 'Resume / CV Downloads' : 'Tải hồ sơ CV' },
    { key: 'actions', label: language === 'en' ? 'Quick Actions' : 'Tác vụ nhanh' },
  ]

  return (
    <div className="cmdk-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command Palette">
      <div className="cmdk-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-header">
          <Search size={18} className="cmdk-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmdk-input"
            placeholder={t.cmdKPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search command palette"
          />
          {query && (
            <button className="cmdk-clear-btn" onClick={() => setQuery('')} aria-label="Clear query">
              <X size={15} />
            </button>
          )}
          <span className="cmdk-esc-badge">ESC</span>
        </div>

        <div className="cmdk-list" ref={listRef}>
          {filteredItems.length === 0 ? (
            <div className="cmdk-empty">{t.noResults}</div>
          ) : (
            categoriesOrder.map((cat) => {
              const catItems = filteredItems.filter((i) => i.category === cat.key)
              if (catItems.length === 0) return null

              return (
                <div key={cat.key} className="cmdk-group">
                  <div className="cmdk-group-title">{cat.label}</div>
                  {catItems.map((item) => {
                    const globalIdx = filteredItems.indexOf(item)
                    const isSelected = globalIdx === selectedIndex
                    return (
                      <button
                        key={item.id}
                        className={`cmdk-item ${isSelected ? 'is-active' : ''}`}
                        onClick={() => item.perform()}
                        onMouseEnter={() => setSelectedIndex(globalIdx)}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="cmdk-item-icon">{item.icon}</div>
                        <div className="cmdk-item-content">
                          <span className="cmdk-item-title">{item.title}</span>
                          {item.subtitle && <span className="cmdk-item-sub">{item.subtitle}</span>}
                        </div>
                        {item.badge && <span className="cmdk-item-badge">{item.badge}</span>}
                        <ArrowRight size={14} className="cmdk-item-arrow" />
                      </button>
                    )
                  })}
                </div>
              )
            })
          )}
        </div>

        <div className="cmdk-footer">
          <div className="cmdk-shortcuts">
            <span>
              <kbd>↑</kbd> <kbd>↓</kbd> to navigate
            </span>
            <span>
              <kbd>↵</kbd> to select
            </span>
            <span>
              <kbd>esc</kbd> to close
            </span>
          </div>
          <span className="cmdk-branding">Portfolio Command Bar</span>
        </div>
      </div>
    </div>
  )
}
