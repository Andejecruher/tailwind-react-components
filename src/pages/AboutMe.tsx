import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Andejecruher from "@src/assets/images/andejecruher.png";

export default function AboutMePage() {
    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "TailwindCSS", level: 85 },
    ];

    const experiences = [
        {
            title: "Developer Full Stack",
            company: "Clupp (Y2 W22)",
            period: "dic. 2024 - Presente",
            description:
                "En mi rol en Clupp, utilizo tecnologías modernas como NextJS, ReactJS, NodeJS y Firebase para crear soluciones robustas y escalables. Me especializo en el desarrollo de interfaces de usuario dinámicas y responsivas, asegurando una experiencia de usuario intuitiva y eficiente.",
        },
        {
            title: "Developer Full Stack",
            company: "Diferente Web",
            period: "sept. 2023 - jun. 2024",
            description:
                "Creación de interfaces de usuario responsivas y accesibles. Colaboración en equipos multidisciplinarios para entregar productos de alta calidad.",
        },
        {
            title: "Developer Full Stack",
            company: "CreativeLab",
            period: "abr. 2023 - jun. 2023",
            description:
                "Desarrollo de sitios web y aplicaciones utilizando Laravel y Vue.js. Implementación de soluciones personalizadas para clientes.",
        },
        {
            title: "Developer Full Stack",
            company: "The Rocket Code",
            period: "mar. 2022 - jun. 2023",
            description:
                "Desarrollo de aplicaciones web utilizando tecnologías modernas y metodologías ágiles.",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-[#1e2124] text-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[#1a1d20]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d20] via-[#1a1d20] to-[#1e2124] opacity-90"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTIxMjQiIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAwIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 py-24">
                    <Link
                        to="/"
                        className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#1e2124]/50 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm transition-colors hover:bg-[#1e2124]/80 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Antonio De Jesús <br />
                                <span className="text-[#d4b572]">Cruz Hernández</span>
                            </h1>
                            <p className="mb-8 max-w-2xl text-lg text-gray-300">
                                Desarrollador Full Stack especializado en crear experiencias
                                digitales excepcionales con tecnologías web modernas.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/andejecruher"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#23272b] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#2a2f34]"
                                >
                                    <Github className="h-5 w-5" />
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/andejecruher"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#23272b] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#2a2f34]"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/andejecruher"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#23272b] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#2a2f34]"
                                >
                                    <Twitter className="h-5 w-5" />
                                    Twitter
                                </a>
                                <a
                                    href="mailto:andejecruher@gmail.com"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#23272b] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#2a2f34]"
                                >
                                    <Mail className="h-5 w-5" />
                                    Email
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mx-auto aspect-square w-full max-w-md"
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#d4b572] bg-[#23272b] p-2">
                                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#1e2124]">
                                    <div className="text-center">
                                        <div className="text-[8rem] font-bold text-[#d4b572]">
                                            <img
                                                src={Andejecruher}
                                                alt="andejecruher"
                                                className="h-full w-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-400">
                                            andejecruher
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="mb-16 rounded-xl border border-[#2a2f34] bg-[#23272b] p-8 shadow-lg"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white">Sobre Mí</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Soy un apasionado desarrollador de software con un interés
                                especial en el desarrollo web, aprendizaje automático y
                                tecnologías emergentes. Mi objetivo es crear soluciones
                                innovadoras que aborden desafíos del mundo real y compartirlas
                                con la comunidad para fomentar el crecimiento y el conocimiento
                                mutuo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white">Habilidades</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-[#2a2f34] bg-[#23272b] p-4 shadow-lg"
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="font-medium text-white">{skill.name}</span>
                                        <span className="text-sm text-[#d4b572]">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2124]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full rounded-full bg-gradient-to-r from-[#d4b572] to-[#e5c989]"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white">Experiencia</h2>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-[#2a2f34] bg-[#23272b] p-6 shadow-lg"
                                >
                                    <h3 className="mb-1 text-xl font-semibold text-white">
                                        {exp.title}
                                    </h3>
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-[#d4b572]">{exp.company}</span>
                                        <span className="text-sm text-gray-400">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-300">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="border-t border-[#2a2f34] bg-[#1a1d20]">
                <div className="container mx-auto px-4 py-16">
                    <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#23272b] to-[#1e2124] p-8 shadow-lg">
                        <div className="text-center">
                            <h2 className="mb-2 text-2xl font-bold text-white">
                                ¿Interesado en trabajar juntos?
                            </h2>
                            <p className="mb-6 text-gray-300">
                                Estoy abierto a nuevas oportunidades y colaboraciones.
                                ¡Contáctame!
                            </p>
                            <a
                                href="mailto:contacto@andejecruher.com"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#d4b572] px-6 py-3 font-medium text-[#1e2124] transition-colors hover:bg-[#e5c989]"
                            >
                                <Mail className="h-5 w-5" />
                                Enviar mensaje
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
