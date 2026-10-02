import React, { useState, useEffect } from 'react';
import { PageType, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { NutritionPage } from './pages/NutritionPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage if exists
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tp_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Adicionado ao carrinho: ${product.name}!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuickWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `Olá Thomaz! Gostaria de pedir: 1x ${product.name} (${product.packSize} - R$ ${product.price.toFixed(2).replace('.', ',')}). Poderia me informar o dia de entrega na minha região?`
    );
    window.open(`https://wa.me/5519953312503?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-fade-in border border-stone-800">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-amber-300 underline font-bold"
          >
            Ver Carrinho
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onAddToCart={handleAddToCart}
            onQuickWhatsApp={handleQuickWhatsApp}
          />
        )}

        {currentPage === 'nutrition' && (
          <NutritionPage onNavigate={setCurrentPage} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={setCurrentPage} />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Direct WhatsApp Action Button */}
      <aside aria-label="Ações Rápidas">
        <a
          href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-40 bg-emerald-700 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 group active:scale-95"
          title="Falar no WhatsApp (19) 95331-2503"
        >
          <div className="relative">
            <Phone className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></span>
          </div>
          <span className="hidden sm:inline font-bold text-xs">
            (19) 95331-2503
          </span>
        </a>
      </aside>

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
