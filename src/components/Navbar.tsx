import React, { useState } from 'react';
import { PageType, CartItem } from '../types';
import { ShoppingBag, Menu, X, Phone, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  cartItems: CartItem[];
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartItems,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { id: PageType; label: string; badge?: string }[] = [
    { id: 'home', label: 'Início & Fazenda' },
    { id: 'nutrition', label: 'Nutrição & Saúde', badge: 'Superalimento' },
    { id: 'contact', label: 'Contato & Pedidos' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Ovos Frescos Orgânicos colhidos no pasto | Produção 100% Sustentável</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20ovos%20orgânicos%20Thomaz%20Prado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>(19) 95331-2503</span>
            </a>
            <span className="text-emerald-500">|</span>
            <a
              href="https://www.instagram.com/thomazpradoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-amber-300" />
              <span>@thomazpradoo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-900 flex items-center justify-center font-serif-brand font-bold text-xl shadow-sm group-hover:bg-amber-400 transition-colors">
            TP
          </div>
          <div>
            <div className="font-serif-brand text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-emerald-900 transition-colors">
              Thomaz Prado
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
              <span>Ovos Orgânicos de Pasto</span>
              <ShieldCheck className="w-3 h-3 text-emerald-600 inline" />
            </div>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded ${
                  isActive
                    ? 'text-emerald-900 font-bold'
                    : 'text-stone-600 hover:text-emerald-800'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-700 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Pedir no WhatsApp</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrinho de compras"
            className="relative p-2.5 rounded-lg border border-stone-300 text-stone-800 hover:bg-amber-100/50 hover:border-amber-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <ShoppingBag className="w-5 h-5 text-stone-800" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navegação"
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-100 border-b border-stone-200 px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-md font-semibold text-sm flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-emerald-900 text-white'
                    : 'text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold text-sm py-2.5 rounded-md"
            >
              <Phone className="w-4 h-4" />
              <span>Conversar no WhatsApp (19 95331-2503)</span>
            </a>
            <a
              href="https://www.instagram.com/thomazpradoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-stone-200 text-stone-800 font-semibold text-sm py-2 rounded-md hover:bg-stone-300"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Acompanhar no Instagram @thomazpradoo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
