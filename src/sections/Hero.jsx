import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Instagram, Mail } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from 'react-i18next'; // 1. Import eklendi
import { Sprout, Scissors, Disc, Flower, Heart } from 'lucide-react';

export const Hero = () => {
    const { t } = useTranslation(); // 2. Hook tanımlandı
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;

    // Skills kısmını da istersen JSON'a taşıyabilirsin ama şimdilik burada bıraktım
    const skills = [
        "Amigurumi", "Pattern Design", "Wearable Art", "Color Theory", 
        "Embroidery", "Natural Fibers", "Cotton Yarn", "Home Decor", 
        "Custom Gifts", "Handmade with Love"
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className={`absolute inset-0 `}>
               
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            {/* Crochet Stitch görsel efekt */}
            

{Array.from({ length: 40 }).map((_, i) => {
    // İkon havuzu: Örgü ve dikişi anımsatanlar
    const icons = [
        <Scissors size={20} />, 
        <Flower size={20} />, 
        <Heart size={20} />, 
        <Sprout size={20} />,
    ];
    
    const randomIcon = icons[i % icons.length];
    const rotation = (i * 360) / 40;
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * -20;

    return (
        <div
            key={i}
            className="absolute opacity-0"
            style={{
                left: "50%",
                top: "50%",
                color: "var(--color-primary, #d946ef)", // Örgüye uygun bir pembe/mor tonu
                animation: `spiral-stitch 15s linear infinite`,
                animationDelay: `${delay}s`,
                "--rotation": `${rotation}deg`,
            }}
        >
            <div className="flex flex-col items-center gap-6">
                {/* İkonlardan oluşan bir 'iplik' dizisi */}
                {Array.from({ length: 6 }).map((_, j) => (
                    <div 
                        key={j} 
                        style={{ 
                            opacity: (6 - j) * 0.15,
                            transform: `scale(${1 - j * 0.1})` 
                        }}
                    >
                        {randomIcon}
                    </div>
                ))}
            </div>
        </div>
    );
})}

            {/* Content */}
            <div className="container mx-auto px-6 pt-20 lg:pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left-Column Text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in animate-delay-100">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-(--color-primary)">
                                <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse" /> 
                                Based in Oulu, Finland 
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* JSON'daki title'lar ile güncellendi */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-300"> 
                                {t('hero.title_2')} <br/>
                                <span className="text-(--color-opposite) glow-text">{t('hero.title_2_2')}</span> 
                                <br/>
                                {t('hero.title_4')}
                            </h1>

                            <p className={`text-lg max-w-lg animate-fade-in animate-delay-600 ${isLight ? "text-slate-700" : "text-(--color-muted-foreground)"}`}>
                                {t('hero.description')}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button className="text-black">
                                    {t('hero.contact_me')} <ArrowRight className="w-5 h-5 text-black" />
                                </Button>
                            </a>
                            
                            <a href="https://www.instagram.com/crochet_cafe_finland"
                            target="_blank">
                                <AnimatedBorderButton>
                                    {t('projects.cta_button')} {/* Ya da JSON'da nereye koyduysan */}
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-(--color-muted-foreground)">{t('hero.follow_me')}</span>
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/crochet_cafe_finland" },
                                { icon: Mail, href: "mailto:yadigar.benli@gmail.com" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-opposite) transition-all duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right-Column Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/30 via-transparent to-(--color-opposite)/20 blur-2xl animate-pulse"></div>
                            <div className="relative glass rounded-3xl p-2 glow-border overflow-hidden">
                                <img src="projects/profil-photo-3.webp" alt="Yadigar Arslan" 
                                     className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">{t('hero.available')}</span>
                                </div>
                            </div>

                            <div className="hidden md:block absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div>
                                    <div className="text-xs text-(--color-opposite) uppercase tracking-wider">Expertise</div>
                                    <div className="text-xl font-bold text-(--color-primary)">{t('hero.title_1_1')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SKILLS MARQUEE */}
                <div className="mt-24 animate-fade-in animation-delay-500">
                    <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted-foreground) mb-8 text-center">Specialize In</p>
                    <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-background after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-background">
                        <div className="flex animate-marquee gap-12">
                            {[...skills, ...skills].map((skill, idx) => (
                                <span key={idx} className="text-2xl font-serif italic text-(--color-muted-foreground)/30 hover:text-(--color-primary) transition-colors whitespace-nowrap cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};