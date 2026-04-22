import { Instagram } from "lucide-react"; // Instagram ikonunu ekledik
import { useTranslation } from "react-i18next";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/crochet_cafe_finland?igsh=MTdyYjRqcjI2NTQ4Mw%3D%3D&utm_source=qr", // Instagram adresin
    label: "Instagram" 
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = [
    { href: "#about", label: t("footer.about") },
    { href: "#projects", label: t("footer.projects") },
    { href: "#experience", label: t("footer.experience") },
    { href: "#contact", label: t("footer.contact") }
  ];

  return (
    <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="group">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform group-hover:scale-110">
                <img 
                  src="projects/logo.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </a>
            <p className="text-sm text-(--color-muted-foreground) text-center md:text-left">
              © {currentYear} {t('footer.rights')}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-(--color-muted-foreground) hover:text-(--color-primary) transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links - Instagram */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank" // Yeni sekmede açılması için
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-2xl glass hover:bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white transition-all duration-500 shadow-md"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};