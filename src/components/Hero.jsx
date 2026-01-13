import { motion } from 'framer-motion';
import { Zap, ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                    >
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Performance Score: 100/100</span>
                        <Sparkles className="w-4 h-4 text-green-400" />
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        <span className="text-white">Seu site deve </span>
                        <span className="gradient-text">vender</span>
                        <span className="text-white">,</span>
                        <br />
                        <span className="text-gray-400">não apenas existir.</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                        Desenvolvo Landing Pages de <span className="text-purple-400 font-medium">alta performance</span> que
                        carregam instantaneamente e convertem visitantes em clientes.
                        <span className="text-green-400 font-medium"> Tecnologia moderna</span>, sem templates pesados.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 glow-purple"
                        >
                            Solicitar Orçamento Rápido
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="#portfolio"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300"
                        >
                            Ver Portfólio
                        </motion.a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-gray-500">Performance</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">+50%</div>
                            <div className="text-sm text-gray-500">Conversão</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">&lt;1s</div>
                            <div className="text-sm text-gray-500">Carregamento</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right content - Code mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative animate-float">
                        {/* Code window */}
                        <div className="glass-strong rounded-2xl p-1 glow-purple">
                            <div className="bg-[#0d0d14] rounded-xl overflow-hidden">
                                {/* Window header */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-xs text-gray-500">LandingPage.jsx</span>
                                </div>

                                {/* Code content */}
                                <div className="p-6 font-mono text-sm">
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">1</span>
                                        <span><span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">2</span>
                                        <span><span className="text-purple-400">import</span> {"{ motion }"} <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span>;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">3</span>
                                        <span></span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">4</span>
                                        <span><span className="text-purple-400">export default function</span> <span className="text-yellow-400">Hero</span>() {"{"}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">5</span>
                                        <span className="pl-4"><span className="text-purple-400">return</span> (</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">6</span>
                                        <span className="pl-8">&lt;<span className="text-blue-400">motion.section</span></span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">7</span>
                                        <span className="pl-12"><span className="text-purple-300">animate</span>={"{{ opacity: 1 }}"}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">8</span>
                                        <span className="pl-8">&gt;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">9</span>
                                        <span className="pl-12 text-gray-500">{"// ✨ Magic happens here"}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-8">10</span>
                                        <span className="pl-8">&lt;/<span className="text-blue-400">motion.section</span>&gt;</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 glass px-3 py-2 rounded-lg"
                        >
                            <Code2 className="w-5 h-5 text-purple-400" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-lg"
                        >
                            <Sparkles className="w-5 h-5 text-green-400" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
