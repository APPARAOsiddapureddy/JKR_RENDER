import React, { useState, useEffect, useRef } from "react";
import clientsBg from "../assets/Clients.jpeg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Services data with icons
  const services = [
    {
      title: "Strategic Planning",
      description: "We create a clear roadmap for your campaign, analyzing voters and the political landscape to build a winning strategy.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      title: "Targeted Voter Outreach",
      description: "Our team uses data-driven methods to find the right voters and deliver personalized messages that make an impact.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-700"
    },
    {
      title: "Message Development",
      description: "We help you craft a strong and emotional message that connects with people and highlights your strengths.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      color: "bg-gradient-to-r from-purple-500 to-purple-700"
    },
    {
      title: "Digital Campaigning",
      description: "From social media management to online ads and content creation, we ensure you reach and engage voters effectively.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      color: "bg-gradient-to-r from-green-500 to-green-700"
    },
    {
      title: "Strong Ground Game",
      description: "Our network of campaigners and volunteers organizes rallies, meetings, and door-to-door campaigns to build strong public support.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      color: "bg-gradient-to-r from-red-500 to-red-700"
    },
    {
      title: "Smart Data Insights",
      description: "We track voter sentiment and campaign performance using advanced analytics, helping you make the right decisions at the right time.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "bg-gradient-to-r from-yellow-500 to-yellow-700"
    }
  ];

  // Enhanced animation on scroll with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      id="services-section" 
      className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 z-0 opacity-15 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${clientsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Parallax effect
          filter: "blur(2px)",
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 text-center mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}
        >
          WHY CHOOSE OUR SERVICES
        </h2>
        
        <div 
          className={`h-1 mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{
            background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)",
            boxShadow: "0 0 10px rgba(96, 165, 250, 0.7)"
          }}
        ></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glassmorphism-card rounded-lg p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${0.2 + index * 0.15}s`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Service icon with background */}
              <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mb-6 icon-container`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                </svg>
              </div>
              
              {/* Service title with gradient effect */}
              <h3 className="text-xl font-bold text-white mb-3 service-title">
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="text-gray-300 service-description">
                {service.description}
              </p>
              
              {/* Gradient hover line */}
              <div className="gradient-line mt-4"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action button */}
        <div className={`flex justify-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
        </div>
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        /* Glassmorphism Card Effect */
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .glassmorphism-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 100, 255, 0.2);
        }
        
        /* Icon animation */
        .icon-container {
          position: relative;
          transition: all 0.5s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .icon-container:before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .glassmorphism-card:hover .icon-container {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        
        .glassmorphism-card:hover .icon-container:before {
          opacity: 1;
          animation: rotate 2s linear infinite;
        }
        
        /* Service title animation */
        .service-title {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .service-title:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa);
          transition: width 0.4s ease;
        }
        
        .glassmorphism-card:hover .service-title {
          transform: translateX(5px);
          background: linear-gradient(90deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .glassmorphism-card:hover .service-title:after {
          width: 100%;
        }
        
        /* Service description animation */
        .service-description {
          transition: all 0.4s ease;
        }
        
        .glassmorphism-card:hover .service-description {
          color: #e5e7eb;
        }
        
        /* Gradient line animation */
        .gradient-line {
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.7), transparent);
          transition: width 0.5s ease;
        }
        
        .glassmorphism-card:hover .gradient-line {
          width: 100%;
        }
        
        /* CTA button animation */
        .cta-button {
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }
        
        .cta-button:after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }
        
        .cta-button:hover:after {
          left: 0;
          opacity: 1;
          animation: shine 1.5s ease;
        }
        
        /* Background particles */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(96, 165, 250, 0.3);
          border-radius: 50%;
          animation: float 15s infinite linear;
        }
        
        .particle:nth-child(odd) {
          background: rgba(129, 140, 248, 0.3);
          width: 4px;
          height: 4px;
        }
        
        .particle:nth-child(3n) {
          background: rgba(167, 139, 250, 0.3);
          width: 8px;
          height: 8px;
        }
        
        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 20s; }
        .particle:nth-child(2) { top: 40%; left: 25%; animation-delay: 1s; animation-duration: 25s; }
        .particle:nth-child(3) { top: 60%; left: 40%; animation-delay: 2s; animation-duration: 18s; }
        .particle:nth-child(4) { top: 80%; left: 60%; animation-delay: 3s; animation-duration: 22s; }
        .particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 4s; animation-duration: 23s; }
        .particle:nth-child(6) { top: 30%; left: 85%; animation-delay: 5s; animation-duration: 19s; }
        .particle:nth-child(7) { top: 50%; left: 5%; animation-delay: 6s; animation-duration: 21s; }
        .particle:nth-child(8) { top: 70%; left: 20%; animation-delay: 7s; animation-duration: 24s; }
        .particle:nth-child(9) { top: 90%; left: 35%; animation-delay: 8s; animation-duration: 17s; }
        .particle:nth-child(10) { top: 15%; left: 50%; animation-delay: 9s; animation-duration: 26s; }
        .particle:nth-child(11) { top: 35%; left: 65%; animation-delay: 10s; animation-duration: 20s; }
        .particle:nth-child(12) { top: 55%; left: 80%; animation-delay: 11s; animation-duration: 22s; }
        .particle:nth-child(13) { top: 75%; left: 95%; animation-delay: 12s; animation-duration: 19s; }
        .particle:nth-child(14) { top: 25%; left: 15%; animation-delay: 13s; animation-duration: 23s; }
        .particle:nth-child(15) { top: 45%; left: 30%; animation-delay: 14s; animation-duration: 25s; }
        .particle:nth-child(16) { top: 65%; left: 45%; animation-delay: 15s; animation-duration: 18s; }
        .particle:nth-child(17) { top: 85%; left: 55%; animation-delay: 16s; animation-duration: 21s; }
        .particle:nth-child(18) { top: 5%; left: 75%; animation-delay: 17s; animation-duration: 24s; }
        .particle:nth-child(19) { top: 22%; left: 90%; animation-delay: 18s; animation-duration: 20s; }
        .particle:nth-child(20) { top: 42%; left: 8%; animation-delay: 19s; animation-duration: 23s; }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};


export default Clients;