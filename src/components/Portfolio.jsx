import { motion } from 'framer-motion';
import { TrendingUp, Smartphone, Sparkles, Timer, Heart, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Felipe Investimentos',
        category: 'Conversão',
        description: 'Landing page focada em captação de leads com taxa de conversão de 12%.',
        highlight: '+340% leads',
        icon: TrendingUp,
        color: 'purple',
        size: 'large',
        gradient: 'from-purple-600 to-blue-600',
        url: 'https://felipeinvportifolio.vercel.app/',
    },
    {
        id: 2,
        title: 'CleanCar',
        category: 'Mobile First',
        description: 'Aplicativo de agendamento de lavagem automotiva otimizado para celular.',
        highlight: '98% mobile',
        icon: Smartphone,
        color: 'green',
        size: 'medium',
        gradient: 'from-green-600 to-emerald-600',
        url: 'https://cleancarportifolio.vercel.app/',
    },
    {
        id: 3,
        title: 'Fluxo.ai',
        category: 'SaaS',
        description: 'Dashboard de automação com design moderno e intuitivo.',
        highlight: 'Design system',
        icon: Sparkles,
        color: 'blue',
        size: 'small',
        gradient: 'from-blue-600 to-cyan-600',
        url: 'https://fluxoai.vercel.app/',
    },
    {
        id: 4,
        title: 'Semana Fullstack',
        category: 'Evento',
        description: 'Página de inscrição com timer de urgência e checkout integrado.',
        highlight: '+2.5k inscritos',
        icon: Timer,
        color: 'orange',
        size: 'small',
        gradient: 'from-orange-600 to-red-600',
        url: 'https://semana-fullstack-portifolio.vercel.app/',
    },
    {
        id: 5,
        title: 'Dra. Helena',
        category: 'Saúde',
        description: 'Site elegante para consultório de dermatologia com agendamento online.',
        highlight: 'Elegante',
        icon: Heart,
        color: 'pink',
        size: 'medium',
        gradient: 'from-pink-600 to-rose-600',
        url: 'https://helena-martins-otavio0machados-projects.vercel.app/',
    },
];

const colorClasses = {
    purple: 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40',
    green: 'bg-green-500/10 border-green-500/20 hover:border-green-500/40',
    blue: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40',
    orange: 'bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40',
    pink: 'bg-pink-500/10 border-pink-500/20 hover:border-pink-500/40',
};

const iconColorClasses = {
    purple: 'text-purple-400 bg-purple-500/20',
    green: 'text-green-400 bg-green-500/20',
    blue: 'text-blue-400 bg-blue-500/20',
    orange: 'text-orange-400 bg-orange-500/20',
    pink: 'text-pink-400 bg-pink-500/20',
};

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">Projetos que </span>
                        <span className="gradient-text">convertem</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Cada projeto é construído com foco em performance, usabilidade e resultados reais.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {projects.map((project, index) => {
                        const sizeClasses = {
                            large: 'md:col-span-2 md:row-span-2',
                            medium: 'md:col-span-2 lg:col-span-1 md:row-span-1 lg:row-span-2',
                            small: 'md:col-span-1 md:row-span-1',
                        };

                        const Icon = project.icon;

                        return (
                            <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className={`${sizeClasses[project.size]} ${colorClasses[project.color]} 
                  glass rounded-2xl p-6 border cursor-pointer transition-all duration-300 
                  relative overflow-hidden group block`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300`}></div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-auto">
                                        <div className={`w-10 h-10 rounded-xl ${iconColorClasses[project.color]} 
                      flex items-center justify-center`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: -10 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ExternalLink className="w-5 h-5 text-gray-400" />
                                        </motion.div>
                                    </div>

                                    <div className="mt-auto">
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>

                                        {project.size !== 'small' && (
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                        )}

                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full 
                      ${iconColorClasses[project.color]} text-xs font-medium`}>
                                            {project.highlight}
                                        </div>
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br 
                  ${project.gradient} opacity-20 blur-3xl group-hover:opacity-40 
                  transition-opacity duration-300`}></div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
