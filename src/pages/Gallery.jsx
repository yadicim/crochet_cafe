import { useTranslation } from 'react-i18next';
import { PROJECTS_DATA } from "../data/project.js";
import { ArrowLeft, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, SearchContext } from "@/Context";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const Gallery = () => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);
    const { searchTerm } = useContext(SearchContext);
    const isLight = !theme.state.lightMode;

    // WhatsApp İletişim Bilgisi
    const phoneNumber = "358465933154"; 

    // Filtreleme mantığı
    const filteredGallery = PROJECTS_DATA.filter(item => {
        if (!searchTerm) return true;
        
        const lowerSearch = searchTerm.toLowerCase();
        const translation = t(`projects.items.${item.id}`, { returnObjects: true });

        return (
            item.tags?.some(tag => tag.toLowerCase().includes(lowerSearch)) ||
            translation.title?.toLowerCase().includes(lowerSearch) ||
            translation.category?.toLowerCase().includes(lowerSearch)
        );
    });

    return (
        <div className="min-h-screen py-32 relative overflow-hidden bg-(--color-background)">
            {/* Arka Plan Dekorasyonu */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-75 h-75 bg-(--color-highlight)/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* ÜST NAVİGASYON */}
                <div className="flex justify-between items-center mb-16 animate-fade-in">
                    <Link 
                        to="/" 
                        className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all border border-white/5 text-(--color-opposite)"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">{t('common.back', 'Home')}</span>
                    </Link>

                    <a href="https://instagram.com/crochet_cafe_finland" target="_blank" rel="noopener noreferrer" 
                       className="p-3 rounded-full glass hover:text-pink-500 transition-colors border border-white/5 text-(--color-opposite)">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* BAŞLIK ALANI */}
                <div className="max-w-3xl mb-20 animate-fade-in text-(--color-opposite)">
                    <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase">
                        {t('projects.badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
                        {t('projects.title_1')}{" "}
                        <span className="font-handwriting text-(--color-primary) font-normal italic">
                            {t('projects.title_2')}
                        </span>
                    </h1>
                    {searchTerm && (
                        <p className="mb-4 text-(--color-primary) font-medium">
                            "{searchTerm}" için sonuçlar listeleniyor...
                        </p>
                    )}
                    <p className="text-lg text-(--color-muted-foreground) leading-relaxed">
                        {t('projects.description_main')}
                    </p>
                </div>

                {/* PROJE IZGARASI */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGallery.length > 0 ? (
                        filteredGallery.map((item, idx) => {
                            const translation = t(`projects.items.${item.id}`, { returnObjects: true });
                            
                            return (
                                <div 
                                    key={item.id} 
                                    className="group glass rounded-2xl overflow-hidden animate-fade-in hover:translate-y-2 transition-all duration-500 border border-white/5 flex flex-col"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    {/* Medya Alanı */}
                                    <div className="relative aspect-4/5 overflow-hidden group/image-box bg-zinc-900">
                                        {item.video ? (
                                            <video 
                                                src={item.video}
                                                poster={item.image}
                                                controls
                                                loop 
                                                playsInline 
                                                className="w-full h-full object-cover" 
                                            />
                                        ) : item.slides ? (
                                            <div className="w-full h-full">
                                                <Slide arrows={true} duration={3000} transitionDuration={500}>
                                                    {item.slides.map((slide, index) => (
                                                        <div key={index} className="w-full aspect-4/5">
                                                            <img 
                                                                src={slide.url} 
                                                                alt={slide.caption || translation.title} 
                                                                className="w-full h-full object-contain bg-zinc-900" 
                                                            />
                                                        </div>
                                                    ))}
                                                </Slide>
                                            </div>
                                        ) : (
                                            <img 
                                                src={item.image} 
                                                alt={translation.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/image-box:scale-110"
                                            />
                                        )}
                                    </div>

                                    {/* İçerik Alanı */}
                                    <div className="p-6 space-y-4 text-(--color-opposite) grow">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-(--color-primary) mb-1 block">
                                                {translation.category}
                                            </span>
                                            <h3 className="text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                                                {translation.title}
                                            </h3>
                                        </div>
                                        
                                        <p className={`text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-(--color-muted-foreground)"}`}>
                                            {translation.desc}
                                        </p>

                                        {/* Etiketler */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {item.tags?.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-bold border border-white/10 text-(--color-highlight) uppercase tracking-tighter"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SATIŞ VE FİYAT ALANI */}
                                        <div className="p-6 pt-0 mt-auto border-t border-white/5 flex items-center justify-between bg-white/5">
                                        <div className="mt-4">
                                            {/* Durum Yazısı (Status) */}
                                            <span className={`text-[12px] font-bold uppercase tracking-tighter mb-1 block ${
                                                item.status === 'sold_out' ? 'text-red-400' : 'text-green-400'
                                            }`}>
                                                {t(`projects.statuses.${item.status}`)}
                                            </span>
                                            
                                            <span className="text-xl font-bold text-(--color-primary)">
                                                {item.price} {item.currency || '€'}
                                            </span>
                                        </div>

                                        {/* Buton (Sadece stokta varsa veya sipariş üzerineyse göster) */}
                                        {item.status !== 'sold_out' && (
                                            <a 
                                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                                    t('projects.wa_message', { item: translation.title })
                                                )}`}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-[10px] font-bold transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
                                            >
                                                {t('projects.order_now')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-20 text-(--color-muted-foreground)">
                            Aradığınız kriterlere uygun ürün bulunamadı.
                        </div>
                    )}
                </div>

                {/* ALT AKSİYON */}
                <div className="mt-32 text-center animate-fade-in border-t border-white/5 pt-20">
                    <p className="text-sm text-(--color-muted-foreground) italic mb-8">
                        {t('projects.cta_text')}
                    </p>
                    <a 
                        href="https://instagram.com/crochet_cafe_finland" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 glass rounded-full hover:bg-(--color-primary) hover:text-white transition-all border border-white/10 text-(--color-opposite)"
                    >
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-widest">
                            {t('projects.cta_button')}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};