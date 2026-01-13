import { motion } from 'framer-motion';
import { X, Check, Snail, Zap, Smartphone, Palette, Clock, Rocket } from 'lucide-react';

const problems = [
    { icon: Snail, text: 'Site Lento (WordPress antigo)', subtext: 'Carregamento de 5+ segundos' },
    { icon: Smartphone, text: 'Perde clientes no 3G', subtext: 'Não otimizado para mobile' },
    { icon: Palette, text: 'Design genérico', subtext: 'Templates usados por milhares' },
    { icon: Clock, text: 'Manutenção cara', subtext: 'Plugins desatualizados' },
];

const solutions = [
    { icon: Rocket, text: 'React + Tailwind', subtext: 'Carregamento instantâneo' },
    { icon: Smartphone, text: 'Mobile First', subtext: '100% otimizado para celular' },
    { icon: Palette, text: 'Design Sob Medida', subtext: 'Exclusivo para seu negócio' },
    { icon: Zap, text: 'Zero Manutenção', subtext: 'Código limpo e moderno' },
];

export default function ProblemSolution() {
    return (
        <section className="py-24 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gray-400">Por que</span>{' '}
                        <span className="gradient-text">trocar de tecnologia?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A diferença entre um site que afasta clientes e um que converte está na tecnologia por trás dele.
                    </p>
                </motion.div>

                {/* Comparison grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Problem side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-8 border border-red-500/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <X className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-red-400">O Velho</h3>
                                    <p className="text-sm text-gray-500">Sites tradicionais</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {problems.map((problem, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                            <problem.icon className="w-5 h-5 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-200">{problem.text}</p>
                                            <p className="text-sm text-gray-500">{problem.subtext}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass rounded-2xl p-8 border border-green-500/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>

                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-green-400">O Seu</h3>
                                    <p className="text-sm text-gray-500">React + Performance</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {solutions.map((solution, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <solution.icon className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-200">{solution.text}</p>
                                            <p className="text-sm text-gray-500">{solution.subtext}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
