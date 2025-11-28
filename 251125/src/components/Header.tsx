import logo from '../assets/logo.svg'

function Header() {
  const navItems: string[] = [
    'Эффективность',
    'Мнения экспертов',
    'Способ применения',
    'Механизм действия',
    'Безопасность'
  ]

  return (
    <header 
      className="fixed top-0 left-0 right-0 w-full backdrop-blur-[40px] shadow-[0_1px_48px_0_rgba(0,0,0,0.05)] py-4 px-6 md:px-5 flex items-center justify-between flex-wrap gap-10 z-50"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.80)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="w-[165px] h-auto flex items-center justify-center px-[17px] py-[11px] pb-[19px]">
          <img 
            src={logo} 
            alt="Tibsovo_logo_new 1" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 min-w-[240px] max-w-full flex-wrap">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-[#151518] text-sm font-semibold leading-[1.4] font-['Geist',_-apple-system,_Roboto,_Helvetica,_sans-serif] hover:opacity-80 transition-opacity"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header

