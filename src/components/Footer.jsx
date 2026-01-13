import { motion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Heart, Coffee, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-16 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">Pronto para ter um site que </span>
                        <span className="gradient-text">realmente converte?</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-8">
                        Vamos conversar sobre o seu projeto. Retorno em até 2 horas no horário comercial.
                    </p>

                    {/* Large WhatsApp CTA */}
                    <motion.a
                        href="https://wa.me/5511999999999?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 
              hover:from-green-500 hover:to-green-400 px-10 py-5 rounded-2xl font-bold text-white 
              text-lg transition-all duration-300 glow-green"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Chamar no WhatsApp
                    </motion.a>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

                {/* Footer content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo/Name */}
                    <div className="text-center md:text-left">
                        <div className="text-xl font-bold gradient-text mb-1">Otávio Dev</div>
                        <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-start">
                            Desenvolvido com React e muito <Coffee className="w-4 h-4 text-amber-500" />
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="https://github.com/otavio"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 glass rounded-xl flex items-center justify-center 
                hover:bg-white/10 transition-all duration-300"
                        >
                            <Github className="w-5 h-5 text-gray-400" />
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/otavio"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 glass rounded-xl flex items-center justify-center 
                hover:bg-white/10 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5 text-gray-400" />
                        </motion.a>

                        <motion.a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 glass rounded-xl flex items-center justify-center 
                hover:bg-white/10 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5 text-gray-400" />
                        </motion.a>
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 glass rounded-xl flex items-center justify-center 
              hover:bg-white/10 transition-all duration-300"
                    >
                        <ArrowUp className="w-5 h-5 text-gray-400" />
                    </motion.button>
                </div>

                {/* Copyright */}
                <div className="text-center mt-12 pt-6 border-t border-white/5">
                    <p className="text-gray-600 text-sm flex items-center gap-1 justify-center">
                        © 2024 Otávio Dev. Feito com <Heart className="w-4 h-4 text-red-500" /> no Brasil.
                    </p>
                </div>
            </div>
        </footer>
    );
}
