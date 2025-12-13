import { useState, useEffect } from 'preact/hooks'

interface NavLink {
  href: string
  label: string
  external?: boolean
}

interface Props {
  navLinks: NavLink[]
}

export default function MobileMenu({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div class="md:hidden overflow-hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        class="relative z-50 p-2 text-text-primary"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div class="w-6 h-5 flex flex-col justify-between">
          <span
            class={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            class={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            class={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        class={`fixed inset-0 z-40 transition-all duration-300 overflow-hidden ${
          isOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          class={`absolute inset-0 bg-bg-base/90 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <nav
          class={`absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center gap-8 transform transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class="text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}

          <div class="flex flex-col gap-4 mt-8">
            <a
              href="https://app.247terminal.com"
              class="text-lg text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href="#pricing"
              class="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get Access
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
