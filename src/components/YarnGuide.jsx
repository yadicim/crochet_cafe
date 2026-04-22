import React from 'react';
import { ExternalLink, Thermometer, Baby, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const YarnGuide = () => {
    const { t } = useTranslation();

    const yarnKeys = ['socks', 'baby', 'toys', 'fashion'];
    const icons = {
        socks: <Thermometer className="text-blue-400" />,
        baby: <Baby className="text-pink-400" />,
        toys: <Heart className="text-red-400" />,
        fashion: <ShoppingBag className="text-amber-400" />
    };

    return (
        <section id="yarn-guide" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <span className="glass px-4 py-2 rounded-full text-xs font-bold text-(--color-primary) flex items-center gap-2 uppercase tracking-widest">
                            <Sparkles size={14} /> {t("yarn_guide.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif italic">{t("yarn_guide.title")}</h2>
                    <p className="text-(--color-muted-foreground) mt-4 max-w-2xl mx-auto text-lg">
                        {t("yarn_guide.subtitle")}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {yarnKeys.map((key) => (
                        <div key={key} className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-(--color-primary)/30 transition-all duration-500 group relative flex flex-col h-full">
                            <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                {icons[key]}
                            </div>
                            
                            <span className="text-[10px] uppercase tracking-widest text-(--color-primary) font-bold">
                                {t(`yarn_guide.items.${key}.tag`)}
                            </span>
                            
                            <h3 className="text-xl font-bold mt-2 mb-1">{t(`yarn_guide.items.${key}.title`)}</h3>
                            <p className="text-sm font-mono text-white/50 mb-4">{t(`yarn_guide.items.${key}.yarn`)}</p>
                            
                            <p className="text-sm text-(--color-muted-foreground) leading-relaxed mb-8 grow">
                                {t(`yarn_guide.items.${key}.desc`)}
                            </p>

                            <a 
                                href={t(`yarn_guide.items.${key}.url`)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-(--color-primary) hover:text-white transition-all group/link"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider">{t("yarn_guide.buy_now")}</span>
                                <ExternalLink size={16} className="opacity-50 group-hover/link:opacity-100" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Local Tip Footer */}
                <div className="mt-16 p-8 glass rounded-[3rem] border border-(--color-primary)/20 bg-linear-to-br from-(--color-primary)/5 to-transparent relative">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-full text-3xl shadow-inner">
                            🇫🇮
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
                                {t("yarn_guide.local_tip_title")}
                            </h4>
                            <p className="text-(--color-muted-foreground) text-sm mt-1 max-w-3xl">
                                {t("yarn_guide.local_tip_desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};