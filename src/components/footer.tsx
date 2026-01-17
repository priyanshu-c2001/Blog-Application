import Logo from "../assets/Logo.jpg"

export default function Footer() {
    return (
        <footer className="border-t border-border bg-foreground/95 text-background mt-16 md:mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 animate-fade-in-up">

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                className="w-24 md:w-30 h-auto object-contain transition-all duration-300"
                                src={Logo}
                                alt="CA Monk Logo"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-background/80 font-light max-w-xs">
                            Empowering the next generation of financial leaders with tools, community, and knowledge.
                        </p>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-sm font-serif mb-4 uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Blog
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Webinars
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Case Studies
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-sm font-serif mb-4 uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Job Board
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Practice Tests
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Mentorship
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-sm font-serif mb-4 uppercase tracking-wider">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    LinkedIn
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Twitter
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-serif text-background/70 hover:text-background transition-colors duration-200 relative group"
                                >
                                    Instagram
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/20 pt-8"></div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-background/60">
                    <p>© 2026 CA Monk. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-background transition-colors duration-200 relative group">
                            Privacy Policy
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#" className="hover:text-background transition-colors duration-200 relative group">
                            Terms of Service
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
