import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react"; 
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import { ThemeContext, SearchContext } from "@/Context"; // Context'leri buradan çekiyoruz
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Context'ler
    const theme = useContext(ThemeContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    
    const { state, dispatch } = theme; 
    const isLight = !state.lightMode;
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Arama Fonksiyonu
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            if (location.pathname === "/") {
                // Ana sayfadaysak projeler kısmına yumuşak kaydır
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            } else if (location.pathname !== "/gallery") {
                // Başka sayfadaysak (ve galeri değilse) galeriye yönlendir
                navigate("/gallery");
            }
        }
    };

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE" });
    };

    const navLinks = [
        { href: "/#about", label: t('navbar.about'), id: 'about' },
        { href: "/#projects", label: t('navbar.projects'), id: 'projects' },
        { href: "/#experience", label: t('navbar.experience'), id: 'experience' },
        { href: "/#color-studio", label: t('navbar.ColorStudio'), id: 'color-studio' },
    ];

    const languages = [
        { code: 'en', label: 'En', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fi', label: 'Fi', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'tr', label: 'Tr', flag: 'https://flagcdn.com/w40/tr.png' },
    ];

    const clickHandle = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleNavLinkClick = (e, href, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
            isScrolled ? "glass-strong py-2 shadow-md" : "bg-transparent py-4"
        } z-50`}>
            <nav className="w-full px-6 md:px-12 flex items-center justify-between">
                
                {/* LOGO & BRAND */}
                <div className="flex items-center gap-4 shrink-0"> 
                    <button onClick={toggleTheme} className="group cursor-pointer border-none bg-transparent outline-none transition-transform hover:scale-110 active:scale-95"> 
                        <div className={`w-10 h-10 rounded-xl overflow-hidden border transition-all duration-500 shadow-lg ${
                            isLight ? "border-slate-200 bg-white" : "border-(--color-primary)/20 bg-white/5"
                        }`}>
                            <img src="projects/logo.jpg" alt="Logo" className={`w-full h-full object-cover transition-opacity duration-500 ${isLight ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`} />
                        </div>
                    </button>
                    <Link to="/" className={`text-xl font-serif font-bold tracking-tight hidden xl:block hover:opacity-70 transition-colors ${isLight ? "text-black" : "text-white"}`}>
                        Yadigar Arslan
                    </Link>
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex flex-1 justify-center px-4">
                    <div className="glass rounded-full px-1 py-1 flex items-center gap-1 lg:gap-3">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} onClick={(e) => handleNavLinkClick(e, link.href, link.id)}
                                className={`px-3 lg:px-5 py-2 text-xs lg:text-sm font-medium hover:text-(--color-primary) rounded-full transition-all ${isLight ? "text-slate-800" : "text-(--color-muted-foreground)"}`}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* SEARCH & TOOLS */}
                <div className="flex items-center gap-2 lg:gap-4 shrink-0">
                    
                    {/* Language Switcher */}
                    <div className="hidden xl:flex glass rounded-full px-1 py-1 items-center gap-1">
                        {languages.map((lang) => (
                            <button key={lang.code} onClick={() => clickHandle(lang.code)}
                                className={`px-2 py-1 text-[10px] flex items-center gap-1.5 rounded-full transition-all cursor-pointer ${i18n.language === lang.code ? "bg-(--color-surface) text-(--color-foreground) shadow-inner" : `hover:bg-(--color-surface)/30 ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`}`}>
                                <img src={lang.flag} alt={lang.code} className="w-3 h-3 rounded-full object-cover" />
                                <span className="font-bold uppercase">{lang.code}</span>
                            </button>
                        ))}
                    </div>

                    {/* SEARCH INPUT (Güncellendi) */}
                    <div className="hidden sm:block">
                        <div className="flex items-center group bg-white/5 rounded-full px-3 py-1.5 border border-white/10 focus-within:border-(--color-primary) transition-all">
                            <input 
                                type="text" 
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder={t('navbar.search')}
                                className="bg-transparent text-xs focus:outline-none w-0 group-hover:w-20 lg:group-hover:w-32 transition-all duration-500 text-(--color-opposite)" 
                            />
                            <div className="p-1">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" className="text-(--color-muted-foreground)" />
                            </div>
                        </div>
                    </div>

                    <Button size="sm" className="hidden sm:flex bg-linear-to-r from-[#86a38e] to-[#a3869b] text-white text-xs font-bold px-5 py-2.5 rounded-full border-none shadow-sm hover:scale-105 transition-transform"
                        onClick={(e) => handleNavLinkClick(e, '/#contact', 'contact')}>
                        {t('navbar.contact_me')}
                    </Button>

                    {/* Mobile Toggle */}
                    <button className="md:hidden p-2 text-(--color-foreground) hover:bg-white/10 rounded-full" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-strong animate-fade-in border-t border-white/5 shadow-2xl">
                    <div className="px-6 py-8 flex flex-col gap-5 text-(--color-opposite)">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} onClick={(e) => handleNavLinkClick(e, link.href, link.id)} 
                                className="text-lg font-medium border-b border-white/5 pb-2">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};