import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Crown } from 'lucide-react';

const packages = [
    {
        name: 'Start',
        icon: Sparkles,
        price: 'A partir de R$ 497',
        description: 'Perfeito para quem está começando',
        highlight: false,
        features: [
            'Página única responsiva',
            'Link na Bio avançado',
            'Design personalizado',
            '1 revisão inclusa',
            'Entrega em 5 dias',
        ],
        gradient: 'from-gray-600 to-gray-500',
        borderColor: 'border-gray-500/20',
        iconBg: 'bg-gray-500/20 text-gray-400',
    },
    {
        name: 'Pro',
        icon: Rocket,
        price: 'A partir de R$ 997',
        description: 'O mais escolhido pelos clientes',
        highlight: true,
        features: [
            'Landing Page completa',
            'Até 5 seções',
            'Seção de depoimentos',
            'FAQ interativo',
            'Formulário de contato',
            'Integração WhatsApp',
            '3 revisões inclusas',
            'Entrega em 7 dias',
        ],
        gradient: 'from-purple-600 to-blue-600',
        borderColor: 'border-purple-500/40',
        iconBg: 'bg-purple-500/20 text-purple-400',
    },
    {
        name: 'Custom',
        icon: Crown,
        price: 'Sob consulta',
        description: 'Para projetos complexos',
        highlight: false,
        features: [
            'Sistemas personalizados',
            'Dashboard administrativo',
            'Banco de dados (Supabase)',
            'Autenticação de usuários',
            'Múltiplas páginas',
            'Suporte prioritário',
            'Revisões ilimitadas',
        ],
        gradient: 'from-amber-600 to-orange-600',
        borderColor: 'border-amber-500/20',
        iconBg: 'bg-amber-500/20 text-amber-400',
    },
];

export default function Pricing() {
    return (
        <section id="precos" className="py-24 px-4 relative">
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
                        <span className="text-white">Investimento </span>
                        <span className="gradient-text">transparente</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Escolha o pacote ideal para seu projeto. Sem surpresas, sem taxas escondidas.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;

                        return (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`relative ${pkg.highlight ? 'md:-mt-4 md:mb--4' : ''}`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                            Mais Popular
                                        </span>
                                    </div>
                                )}

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`h-full glass rounded-2xl p-8 border ${pkg.borderColor} 
                    relative overflow-hidden transition-all duration-300 
                    ${pkg.highlight ? 'glow-purple' : ''}`}
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pkg.gradient}`}></div>

                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${pkg.iconBg} flex items-center justify-center`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Pacote {pkg.name}</h3>
                                            <p className="text-sm text-gray-500">{pkg.description}</p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="text-2xl md:text-3xl font-bold text-white">{pkg.price}</div>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-purple-400' : 'text-green-400'
                                                    }`} />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <motion.a
                                        href="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20pacote%20${pkg.name}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${pkg.highlight
                                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                                : 'glass text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Escolher {pkg.name}
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-500 text-sm mt-8"
                >
                    🔒 Pagamento seguro via Pix ou cartão. Parcelamento disponível.
                </motion.p>
            </div>
        </section>
    );
}
