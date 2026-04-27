import { ArrowUpRight, Instagram, Heart } from "lucide-react"; 
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from "../data/project.js"; // Merkezi veri

export const Projects = () => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;

    // Ana sayfada sadece ilk 3 projeyi gösteriyoruz
   const homeProjects = PROJECTS_DATA.reduce((acc, current) => {
        // Eğer bu kategori daha önce eklenmediyse, listeye ekle
        const categoryExists = acc.find(item => item.category === current.category);
        if (!categoryExists && acc.length < 3) { // Toplam 3 tane ile sınırlamak istersen
            acc.push(current);
        }
        return acc;
    }, []);

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Arka Plan Süslemeleri */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-(--color-highlight)/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* BAŞLIK */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase">
                        {t('projects.badge')}
                    </span>
                    <h2 className="text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6">
                        {t('projects.title_1')}{" "} 
                        <span className="font-serif italic font-normal text-white"> {t('projects.title_2')}</span>
                    </h2>
                    <p className="text-(--color-muted-foreground)">
                        {t('projects.description_main')}
                    </p>
                </div>

                {/* PROJE IZGARASI */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeProjects.map((item, idx) => {
                        // Çeviriyi ID üzerinden yakalıyoruz
                        const translation = t(`projects.items.${item.id}`, { returnObjects: true });

                        return (
                            <div key={item.id} 
                                 className="group glass rounded-2xl overflow-hidden animate-fade-in hover:translate-y-2 transition-all duration-500"
                                 style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                                
                                {/* Resim Alanı */}
                                <div className="relative overflow-hidden aspect-4/5 group/image-box">
                                    <img src={item.image}
                                         loading="lazy"
                                         alt={translation.title}
                                         className="w-full h-full object-cover transition-transform duration-700 group-hover/image-box:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                                        <Heart className="w-8 h-8 text-red-400 fill-current" />
                                    </div>    
                                </div>

                                {/* İçerik Alanı */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-(--color-primary) mb-1 block">
                                                {translation.category}
                                            </span>
                                            <h3 className="text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                                                {translation.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-(--color-muted-foreground) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                    </div>
                                    
                                    <p className={`text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-(--color-muted-foreground)"}`}>
                                        {translation.desc}
                                    </p>

                                    {/* Etiketler (Teknik veriden geliyor) */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.tags?.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-(--color-surface) text-[10px] font-bold border border-(--color-border) text-(--color-opposite) uppercase tracking-tighter">
                                                #{tag}
                                            </span>
                                        ))} 
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA BUTONLARI */}
                <div className="mt-20 flex flex-col items-center gap-8 animate-fade-in">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <a href="https://instagram.com/crochet_cafe_finland" target="_blank" rel="noopener noreferrer">
                            <AnimatedBorderButton>
                                <span className="flex items-center gap-2 px-2">
                                    <Instagram className="w-5 h-5" />
                                    {t('projects.cta_button')}
                                </span>
                            </AnimatedBorderButton>
                        </a>

                       <a 
    href="/gallery" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex items-center gap-3 px-8 py-4 glass rounded-full hover:bg-white/10 transition-all border border-white/5"
>
    <span className="text-sm font-bold uppercase tracking-widest text-white">
        {t('projects.view_all_works')}
    </span>
    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
</a>
                    </div>
                    <p className="text-sm text-(--color-muted-foreground) italic">{t('projects.cta_text')}</p>
                </div>
            </div>
        </section> 
    );
}