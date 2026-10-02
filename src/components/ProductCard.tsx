import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Check, Phone } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickWhatsApp: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickWhatsApp,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.isPopular && (
            <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
              Mais Escolhido
            </div>
          )}
          <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-100 text-xs font-semibold px-2.5 py-1 rounded">
            {product.packSize}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Metadata quiet row */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>{product.badges[0]}</span>
            <span aria-hidden="true">·</span>
            <span>{product.badges[1] || 'Colheita Diária'}</span>
          </div>

          <div>
            <h3 className="font-serif-brand text-xl font-bold text-stone-900 leading-snug group-hover:text-emerald-900 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Features list */}
          <ul className="space-y-1.5 pt-2 border-t border-stone-100">
            {product.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="p-5 sm:p-6 pt-0 space-y-3">
        <div className="pt-4 border-t border-stone-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-stone-500 block">Valor</span>
            <span className="font-serif-brand text-2xl font-bold text-emerald-950">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-[11px] text-stone-500 ml-1">/ {product.unit}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 active:scale-98 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Adicionar</span>
          </button>
          <button
            onClick={() => onQuickWhatsApp(product)}
            className="w-full py-2.5 px-3 bg-emerald-800 hover:bg-emerald-700 active:scale-98 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
            title="Pedir direto no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
