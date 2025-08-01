import React, { useState, useEffect } from 'react';
import { Battery, Clock, MapPin, HardDrive, Home, User, Code, Briefcase, Mail, Menu } from 'lucide-react';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(false);
  const [ramUsage, setRamUsage] = useState('8GB');
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    const updateBattery = async () => {
      if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        const update = () => {
          setBatteryLevel(Math.floor(battery.level * 100));
          setIsCharging(battery.charging);
        };
        update();
        battery.addEventListener('levelchange', update);
        battery.addEventListener('chargingchange', update);
        return () => {
          battery.removeEventListener('levelchange', update);
          battery.removeEventListener('chargingchange', update);
        };
      }
    };

    const updateRAM = () => {
      if ('deviceMemory' in navigator) {
        setRamUsage(`${navigator.deviceMemory}GB`);
      }
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateBattery();
    updateRAM();

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-5 h-5" />, id: 'home' },
    { href: '#about', label: 'About', icon: <User className="w-5 h-5" />, id: 'about' },
    { href: '#skills', label: 'Skills', icon: <Code className="w-5 h-5" />, id: 'skills' },
    { href: '#projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" />, id: 'projects' },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-5 h-5" />, id: 'contact' }
  ];

  const getBatteryIcon = () => {
    const color = isCharging ? 'text-yellow-400' : batteryLevel > 50 ? 'text-green-400' : batteryLevel > 20 ? 'text-yellow-400' : 'text-red-400';
    return <Battery className={`w-4 h-4 ${color}`} />;
  };

  return (
    <>
      {/* Top Navigation - System Status */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-300 md:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                <a href="#home">
                  tej<span className="text-amber-400">{'{}'}</span>
                </a>
              </div>
            </div>

            {/* System Status */}
            <div className="flex items-center flex-wrap justify-end gap-x-3 gap-y-1 sm:gap-x-6 text-[10px] sm:text-xs text-slate-300">
              <div className="flex items-center space-x-1 sm:space-x-2">
                {getBatteryIcon()}
                <span className="hidden sm:inline">{isCharging ? '⚡' : ''}</span>
                <span>{batteryLevel}%</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">{formatTime(time)}</span>
                <span className="sm:hidden">{time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Akure, Nigeria 🇳🇬</span>
              </div>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur px-4 py-3">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 py-1 px-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation - hidden on mobile if hamburger is used */}
      <nav className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-emerald-400 bg-emerald-400/10 scale-110'
                    : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50'
                }`}
              >
                <div
                  className={`transition-transform duration-300 ${
                    activeSection === item.id ? 'animate-bounce' : ''
                  }`}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
