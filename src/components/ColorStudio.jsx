import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, RotateCcw, ExternalLink, ChevronDown } from 'lucide-react'; // Not: Bazı sistemlerde 'lucide-react'
import { useTranslation } from "react-i18next";
import { YARN_DATABASE } from '../data/yarnDatabase';

export const ColorStudio = () => {
    const { t } = useTranslation();
    
    // State Tanımlamaları
    const [color1, setColor1] = useState(() => localStorage.getItem('yarn-color-1') || "#D4A373");
    const [color2, setColor2] = useState(() => localStorage.getItem('yarn-color-2') || "#606C38");
    const [category, setCategory] = useState("socks");
    const [matchedYarn, setMatchedYarn] = useState(null);

    // Yerel Depolama Güncelleme
    useEffect(() => {
        localStorage.setItem('yarn-color-1', color1);
        localStorage.setItem('yarn-color-2', color2);
    }, [color1, color2]);

    // Renk Eşleştirme Algoritması
    const findBestYarn = (targetHex) => {
        // Seçilen kategoriye göre filtrele
        const filtered = YARN_DATABASE.filter(y => y.category === category);
        
        if (filtered.length === 0) {
            setMatchedYarn(null);
            return;
        }

        const getRGB = (hex) => {
            const r = parseInt(hex.substring(1, 3), 16);
            const g = parseInt(hex.substring(3, 5), 16);
            const b = parseInt(hex.substring(5, 7), 16);
            return { r, g, b };
        };

        const target = getRGB(targetHex);
        let best = filtered[0];
        let minDistance = Infinity;

        filtered.forEach(yarn => {
            const current = getRGB(yarn.hex);
            const distance = Math.sqrt(
                Math.pow(target.r - current.r, 2) + 
                Math.pow(target.g - current.g, 2) + 
                Math.pow(target.b - current.b, 2)
            );
            if (distance < minDistance) {
                minDistance = distance;
                best = yarn;
            }
        });
        setMatchedYarn(best);
    };

    const resetColors = () => {
        setColor1("#D4A373");
        setColor2("#606C38");
        setMatchedYarn(null);
    };

    return (
        <section id="color-studio" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <span className="glass px-4 py-2 rounded-full text-xs font-bold text-(--color-primary) flex items-center gap-2 uppercase tracking-[0.2em]">
                                <Sparkles size={14} /> {t("color_studio.badge")}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif italic">{t("color_studio.title")}</h2>
                        <p className="text-(--color-muted-foreground) mt-4 max-w-xl mx-auto text-lg">
                            {t("color_studio.description")}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            
                            {/* Color Pickers */}
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">
                                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 group">
                                    <label className="block text-[10px] uppercase tracking-widest mb-3 opacity-50 font-bold">{t("color_studio.label_main")}</label>
                                    <div className="flex items-center gap-4">
                                        <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-12 h-12 rounded-lg cursor-pointer bg-transparent border-none shadow-lg transition-transform group-hover:scale-110" />
                                        <span className="font-mono text-sm">{color1.toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 group">
                                    <label className="block text-[10px] uppercase tracking-widest mb-3 opacity-50 font-bold">{t("color_studio.label_accent")}</label>
                                    <div className="flex items-center gap-4">
                                        <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-12 h-12 rounded-lg cursor-pointer bg-transparent border-none shadow-lg transition-transform group-hover:scale-110" />
                                        <span className="font-mono text-sm">{color2.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Category Selector */}
                            <div className="space-y-4">
                                <label className="block text-[10px] uppercase tracking-widest opacity-50 font-bold ml-2">{t("color_studio.select_category")}</label>
                                <div className="relative">
                                    <select 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none focus:border-(--color-primary)/50 transition-all appearance-none cursor-pointer text-white"
                                    >
                                        <option value="socks" className="bg-neutral-900">{t("color_studio.categories.socks")}</option>
                                        <option value="baby" className="bg-neutral-900">{t("color_studio.categories.baby")}</option>
                                        <option value="toys" className="bg-neutral-900">{t("color_studio.categories.toys")}</option>
                                        <option value="fashion" className="bg-neutral-900">{t("color_studio.categories.fashion")}</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none" size={20} />
                                </div>

                                <button 
                                    onClick={() => findBestYarn(color1)}
                                    className="w-full py-4 bg-(--color-primary) text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                                >
                                    <Palette size={18} /> {t("color_studio.find_yarn")}
                                </button>
                            </div>

                            {/* Match Result Card */}
                            {matchedYarn && (
                                <div className="p-6 rounded-3xl bg-white/5 border border-(--color-primary)/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl shadow-inner relative overflow-hidden shrink-0 border border-white/10" style={{ backgroundColor: matchedYarn.hex }}>
                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/knitted-net.png')] opacity-30"></div>
                                        </div>
                                        <div className="grow">
                                            <p className="text-[10px] uppercase font-bold text-(--color-primary) tracking-widest">{t("color_studio.match_found")}</p>
                                            <h4 className="font-bold text-lg leading-tight">{matchedYarn.name}</h4>
                                            <p className="text-xs opacity-60">{matchedYarn.brand}</p>
                                        </div>
                                        <a href={matchedYarn.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-(--color-primary) transition-all group">
                                            <ExternalLink size={18} className="group-hover:scale-110" />
                                        </a>
                                    </div>
                                </div>
                            )}

                            <button onClick={resetColors} className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">
                                <RotateCcw size={14} /> {t("color_studio.reset")}
                            </button>
                        </div>

                        {/* Visualizer (Motif) */}
                        <div className="relative flex justify-center items-center order-1 lg:order-2 py-10 w-full min-w-0">
                            <div className="absolute inset-0 blur-[120px] opacity-20 transition-colors duration-1000" style={{ background: color1 }}></div>
                            <div className=" relative w-48 h-48  md:w-80 md:h-80  grid grid-cols-3 grid-rows-3 gap-2 md:gap-3 p-3 md:p-5 glass rounded-4xl rotate-3 hover:rotate-0 transition-transform duration-700">
                                {[...Array(9)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        style={{ backgroundColor: i === 4 ? color2 : color1 }} 
                                        className={`rounded-xl shadow-inner transition-colors duration-700 relative overflow-hidden ${i === 4 ? 'ring-2 ring-white/30 z-10 scale-105' : ''}`}
                                    >
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/knitted-net.png')]"></div>
                                        <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};