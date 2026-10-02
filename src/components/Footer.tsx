import React from 'react';
import { PageType } from '../types';
import { Phone, Instagram, MapPin, Heart, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-serif-brand font-bold text-xl flex items-center justify-center">
                TP
              </div>
              <div className="font-serif-brand text-2xl font-bold text-stone-100">
                Thomaz Prado
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Ovos orgânicos de galinhas criadas soltas e livres no pasto verde. Nutrição verdadeira, respeito à vida animal e agricultura sustentável regenerativa.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20falar%20com%20a%20equipe%20Thomaz%20Prado"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thomazpradoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 border border-stone-700 text-amber-300 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Navegação
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Início & Fazenda
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('nutrition'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Nutrição & Superalimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contato & Pedidos
                </button>
              </li>
              <li>
                <a
                  href="#catalogo"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Tabela de Preços e Ovos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato & WhatsApp */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Canais Diretos
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs text-stone-500">WhatsApp de Atendimento & Pedidos:</span>
                <a
                  href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>(19) 95331-2503</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <span className="block text-xs text-stone-500">Instagram Oficial:</span>
                <a
                  href="https://www.instagram.com/thomazpradoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 mt-0.5"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>@thomazpradoo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <span className="block text-xs text-stone-500">Região de Entrega:</span>
                <div className="flex items-start gap-1.5 text-stone-400 mt-0.5 text-xs">
                  <MapPin className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>Campinas, Piracicaba, Limeira, Rio Claro, Americana e cidades do interior de SP (DDD 19).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Garantias & Certificações */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Nosso Compromisso
            </div>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Galinhas Livres e Criadas no Pasto (Pasture-Raised)</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero Hormônios, Antibióticos Profiláticos ou Ração Transgênica</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Embalagens 100% Biodegradáveis e Recicladas</span>
              </div>
              <div className="p-3 bg-stone-800/80 rounded-lg border border-stone-700/60 text-stone-300">
                <p className="text-xs">
                  🌿 <strong>Colheita Fresca:</strong> Da fazenda para a sua mesa em menos de 48 horas após a postura.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Thomaz Prado Ovos Orgânicos. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Cuidado com as aves, respeito à terra e amor pelo que fazemos.</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
