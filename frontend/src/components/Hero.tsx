import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatorsSection = () => {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fff7ed 100%)',
                padding: '80px 24px',
            }}
        >
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                {/* Section label */}
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #f97316, #fb923c)',
                    color: '#ffffff',
                    borderRadius: '999px',
                    padding: '6px 20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '28px',
                    boxShadow: '0 4px 14px rgba(249,115,22,0.35)',
                }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    Meet the Team
                </span>

                {/* Heading */}
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                    fontWeight: 800,
                    color: '#1f2937',
                    lineHeight: 1.15,
                    marginBottom: '12px',
                    letterSpacing: '-0.04em',
                }}>
                    Hello,{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #ea580c, #f97316, #fb923c)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Judges!
                    </span>
                </h2>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: '#6b7280',
                    fontWeight: 500,
                    marginBottom: '52px',
                    letterSpacing: '-0.01em',
                }}>
                    We are the <strong style={{ color: '#f97316', fontWeight: 700 }}>Creators of MasterG</strong>
                </p>

                {/* Framed Photo */}
                <div style={{ display: 'inline-block', position: 'relative' }}>

                    {/* Outer glow ring */}
                    <div style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '28px',
                        background: 'linear-gradient(135deg, #f97316, #fb923c, #fdba74, #f97316)',
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease infinite',
                        zIndex: 0,
                        filter: 'blur(2px)',
                    }} />

                    {/* Frame border */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        padding: '6px',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #f97316, #fb923c, #fed7aa, #fb923c, #f97316)',
                        backgroundSize: '200% 200%',
                        animation: 'gradientShift 4s ease infinite',
                        boxShadow: '0 20px 60px rgba(249,115,22,0.4), 0 8px 24px rgba(249,115,22,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
                    }}>
                        {/* Inner white mat */}
                        <div style={{
                            padding: '10px',
                            borderRadius: '20px',
                            background: '#ffffff',
                        }}>
                            {/* Photo */}
                            <div style={{
                                position: 'relative',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                width: 'clamp(280px, 55vw, 520px)',
                                aspectRatio: '3/4',
                                maxHeight: '640px',
                            }}>
                                <img
                                    src="/creators.jpg"
                                    alt="MasterG Creators"
                                    draggable={false}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        display: 'block',
                                        userSelect: 'none',
                                    }}
                                    onDragStart={(e) => e.preventDefault()}
                                />
                                {/* Subtle vignette overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(249,115,22,0.12) 0%, transparent 40%)',
                                    pointerEvents: 'none',
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Decorative corner accents */}
                    {[
                        { top: '-18px', left: '-18px', transform: 'rotate(0deg)' },
                        { top: '-18px', right: '-18px', transform: 'rotate(90deg)' },
                        { bottom: '-18px', right: '-18px', transform: 'rotate(180deg)' },
                        { bottom: '-18px', left: '-18px', transform: 'rotate(270deg)' },
                    ].map((pos, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            width: '36px',
                            height: '36px',
                            zIndex: 2,
                            ...pos,
                        }}>
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 32 L4 6 Q4 4 6 4 L32 4" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                                <circle cx="4" cy="4" r="3" fill="#fb923c" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Caption below frame */}
                <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <div style={{ height: '1px', width: '48px', background: 'linear-gradient(to right, transparent, #fb923c)' }} />
                        <span style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#f97316',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                        }}>MasterG — 2025</span>
                        <div style={{ height: '1px', width: '48px', background: 'linear-gradient(to left, transparent, #fb923c)' }} />
                    </div>
                    <p style={{
                        fontSize: '15px',
                        color: '#9ca3af',
                        fontWeight: 400,
                        fontStyle: 'italic',
                    }}>
                        Building the future of AI-powered education in India 🇮🇳
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
};

const Avatar = ({ src, alt }: { src: string; alt: string }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full opacity-50"></div>
            {imageError ? (
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white shadow-md"></div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white shadow-md select-none"
                    onError={() => setImageError(true)}
                    onDragStart={(e) => e.preventDefault()}
                />
            )}
        </div>
    );
};

const Herobox = () => {
    // Fallback gradient backgrounds for missing images
    const fallbackGradients = [
        "linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FED7AA 100%)",
        "linear-gradient(135deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
    ];

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
            parent.style.background = fallbackGradients[Math.floor(Math.random() * fallbackGradients.length)];
        }
    };

    return (
        <div className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 items-stretch">
                {/* Left Image */}
                <div className="md:col-span-2 relative group">
                    <div className="relative h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden border-2 border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1573894999291-f440466112cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            alt="Indian Students Learning"
                            draggable={false}
                            className="absolute inset-0 w-full h-full object-cover z-10 select-none"
                            onError={handleImageError}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                </div>

                {/* Center Cards */}
                <div className="md:col-span-2 flex flex-col gap-4 sm:gap-6">
                    {/* Top Card - LMR */}
                    <div className="relative bg-white border-2 border-orange-400 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col justify-center h-full hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center mb-3 sm:mb-4 gap-2 sm:gap-3">
                            <div className="flex -space-x-2 sm:-space-x-3">
                                {[
                                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80",
                                    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=faces&q=80",
                                    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=faces&q=80",
                                    "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=100&h=100&fit=crop&crop=faces&q=80",
                                ].map((src, idx) => (
                                    <Avatar key={idx} src={src} alt="Indian Teacher Avatar" />
                                ))}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">
                                and 500+ more Users!
                            </p>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed mb-2 sm:mb-3">
                            Transform Your Study <br /> Materials with AI
                        </h3>
                        <Link to="/posters" className="inline-block bg-orange-400 text-white border-2 border-orange-400 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 w-fit">
                            Try Generating Posters →
                        </Link>
                    </div>

                    {/* Bottom Card - LMR */}
                    <div className="relative bg-orange-400 border-2 border-orange-400 rounded-xl p-4 sm:p-5 md:p-6 md:px-8 flex flex-col justify-center h-full hover:shadow-lg transition-all duration-300">
                        <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-2 sm:mb-3">
                            AI-Powered Study <br />
                            Material Generator
                        </p>
                        <p className="text-xs sm:text-sm text-orange-50 mb-3 sm:mb-4 leading-relaxed">
                            Upload PDFs, PPTs & docs. Get summaries, quizzes, recall notes & more in 22+ languages.
                        </p>
                        <Link to="/lmr" className="inline-block bg-white text-orange-400 border-2 border-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 w-fit">
                            Try LMR →
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:col-span-2 relative group">
                    <div className="relative h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden border-2 border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-bl from-orange-500 via-orange-400 to-orange-300 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1597743622436-c6b5661731e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
                            alt="Indian Classroom"
                            draggable={false}
                            className="absolute inset-0 w-full h-full object-cover z-10 select-none"
                            onError={handleImageError}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Landing = () => {

    return (
        <div className="py-3 sm:py-4 md:py-5">
            <div className="px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden flex justify-center items-start md:items-center">

                <div className="max-w-7xl my-2 mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
                        <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border-2 text-white border-orange-400 bg-orange-400 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                            <span className="text-[10px] sm:text-xs md:text-sm">MasterG: Your AI Powered Education Companion</span>
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tight font-semibold text-orange-400 mb-2 px-2">
                            Your Personlised  <br className="hidden sm:block" />
                            <span className="inline-flex items-center align-middle flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
                                <span className="inline-flex items-center justify-center border-2 border-orange-400 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 transform -rotate-6 origin-center mr-1 sm:mr-2 md:mr-3">
                                    <svg className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4H8z" />
                                        <path d="M8 12h16m-16 4h12m-12 4h8" />
                                        <circle cx="24" cy="24" r="4.5" />
                                        <path d="M24 22v4m-2-2h4" strokeWidth="1.2" />
                                    </svg>
                                </span>
                                <span
                                    className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-orange-400 font-semibold"
                                    style={{
                                        WebkitTextStroke: '2px #FB923C',
                                        WebkitTextFillColor: 'transparent',
                                        color: 'transparent',
                                        paintOrder: 'stroke fill'
                                    }}
                                >
                                    Lightweight
                                </span>
                                <span className="inline-flex items-center mx-1 sm:mx-2 md:mx-3 align-middle">
                                    <span className="inline-flex items-center justify-center border-2 border-orange-400 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 transform rotate-6 origin-center">
                                        <svg className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 6.67a4 4 0 1 0-7.996.167 5.33 5.33 0 0 0-3.368 7.693 5.33 5.33 0 0 0 .741 8.784A5.33 5.33 0 1 0 16 24Z" />
                                            <path d="M12 17.33a6 6 0 0 0 4-5.33" />
                                            <path d="M8.004 6.833a4 4 0 0 0 .531 1.833" />
                                            <path d="M4.636 14.528a5.33 5.33 0 0 1 .78-.528" />
                                            <path d="M8 24a5.33 5.33 0 0 1-2.623-.688" />
                                            <path d="M16 17.33h5.33" />
                                            <path d="M16 24h8a2.67 2.67 0 0 1 2.67 2.67v1.33" />
                                            <path d="M16 10.67h10.67" />
                                            <path d="M21.33 10.67V6.67a2.67 2.67 0 0 1 2.67-2.67" />
                                            <circle cx="21.33" cy="17.33" r=".67" />
                                            <circle cx="24" cy="4" r=".67" />
                                            <circle cx="26.67" cy="28" r=".67" />
                                            <circle cx="26.67" cy="10.67" r=".67" />
                                        </svg>
                                    </span>
                                </span>
                            </span>
                            <br className="hidden sm:block" /> <span className="block sm:inline">Growth Companion</span>
                        </h1>

                        <p className="text-gray-800 text-xs sm:text-sm md:text-lg lg:text-xl max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mt-3 sm:mt-4 mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-8 leading-relaxed">
                            Experience best in class Modern, lightweight, and AI enabled Learning Experience with MasterG.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                            <Link to="/benchmarks" className="bg-orange-400 text-white border-2 border-orange-400 font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 whitespace-nowrap">
                                View Benchmarks
                            </Link>
                            <Link to="/stitch" className="bg-white text-orange-400 border-2 border-orange-400 font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 whitespace-nowrap">
                                Try Stitch
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Herobox />
            <CreatorsSection />
        </div>
    );
};

export default Landing;
