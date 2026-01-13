import { motion } from 'framer-motion';
import { Code2, Sparkles, Database, Layout } from 'lucide-react';

const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-cyan-400 bg-cyan-500/20' },
    { name: 'Tailwind', icon: '🎨', color: 'text-teal-400 bg-teal-500/20' },
    { name: 'Supabase', icon: '⚡', color: 'text-green-400 bg-green-500/20' },
    { name: 'Next.js', icon: '▲', color: 'text-white bg-white/20' },
];

export default function About() {
    return (
        <section id="sobre" className="py-24 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Avatar/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto lg:mx-0">
                            {/* Avatar container */}
                            <div className="aspect-square rounded-3xl glass-strong overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>

                                {/* Memoji-style avatar placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                                            <span className="text-6xl">👨‍💻</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating tech icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-8 right-8 glass px-3 py-2 rounded-lg"
                                >
                                    <Code2 className="w-5 h-5 text-purple-400" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-8 left-8 glass px-3 py-2 rounded-lg"
                                >
                                    <Database className="w-5 h-5 text-green-400" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-1/2 left-8 glass px-3 py-2 rounded-lg"
                                >
                                    <Layout className="w-5 h-5 text-blue-400" />
                                </motion.div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-3xl border border-purple-500/20"></div>
                            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl border border-blue-500/20"></div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-gray-300">Sobre o Desenvolvedor</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="text-white">Olá, sou </span>
                            <span className="gradient-text">Otávio</span>
                            <span className="text-white">.</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Sou estudante e desenvolvedor focado em{' '}
                            <span className="text-purple-400 font-medium">React</span> e o{' '}
                            <span className="text-blue-400 font-medium">Ecossistema Moderno</span>.
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-8">
                            Diferente de agências tradicionais que cobram caro por tecnologias antigas,
                            eu uso a stack mais atual do mercado{' '}
                            <span className="text-gray-400">(a mesma usada por Netflix e Uber)</span>{' '}
                            para entregar resultados rápidos com custo acessível.
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Tech Stack</p>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl ${tech.color} font-medium`}
                                    >
                                        <span>{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            <div>
                                <div className="text-2xl font-bold text-white">2+</div>
                                <div className="text-sm text-gray-500">Anos estudando</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">10+</div>
                                <div className="text-sm text-gray-500">Projetos</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-500">Dedicação</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
