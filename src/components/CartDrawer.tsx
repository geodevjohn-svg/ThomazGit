import React, { useState } from 'react';
import { CartItem, DeliveryDetails } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [delivery, setDelivery] = useState<DeliveryDetails>({
    customerName: '',
    phone: '',
    address: '',
    city: 'Campinas e Região',
    neighborhood: '',
    notes: '',
    deliveryOption: 'standard',
    paymentMethod: 'pix',
  });

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const deliveryFee = subtotal >= 70 ? 0 : 8.0;
  const grandTotal = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleFinishOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (!delivery.customerName.trim() || !delivery.address.trim()) {
      alert('Por favor, preencha seu nome e endereço de entrega.');
      return;
    }

    setIsSubmitting(true);

    const itemsSummary = cartItems
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} (R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')})`
      )
      .join('\n');

    const paymentLabel =
      delivery.paymentMethod === 'pix'
        ? 'PIX (Chave enviada na confirmação)'
        : delivery.paymentMethod === 'cartao'
        ? 'Cartão (Maquininha na entrega)'
        : 'Dinheiro na entrega';

    const deliveryLabel =
      deliveryFee === 0 ? 'Grátis (Pedido acima de R$ 70)' : 'R$ 8,00';

    const message = `🌿 *NOVO PEDIDO - OVOS ORGÂNICOS THOMAZ PRADO* 🌿\n\n` +
      `Olá Thomaz! Gostaria de confirmar meu pedido de ovos frescos direto da fazenda:\n\n` +
      `📦 *Itens do Pedido:*\n${itemsSummary}\n\n` +
      `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n` +
      `🚚 *Taxa de Entrega:* ${deliveryLabel}\n` +
      `⭐ *TOTAL:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n\n` +
      `👤 *Dados do Cliente:*\n` +
      `• *Nome:* ${delivery.customerName}\n` +
      `• *WhatsApp:* ${delivery.phone || 'Não informado'}\n` +
      `• *Endereço:* ${delivery.address}\n` +
      `• *Bairro / Cidade:* ${delivery.neighborhood ? `${delivery.neighborhood}, ` : ''}${delivery.city}\n` +
      `• *Forma de Pagamento:* ${paymentLabel}\n` +
      (delivery.notes ? `• *Observações:* ${delivery.notes}\n` : '') +
      `\nAguardo a confirmação do dia de entrega! Obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5519953312503?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      onClearCart();
      setStep('cart');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-50 border-l border-stone-200 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-900 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif-brand text-lg font-bold text-stone-900">
                  {step === 'cart' ? 'Seu Carrinho Fresco' : 'Dados para Entrega'}
                </h2>
                <p className="text-xs text-stone-500">
                  {step === 'cart'
                    ? `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'itens'} selecionados`
                    : 'Finalize via WhatsApp oficial (19 95331-2503)'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-brand text-lg font-semibold text-stone-800">
                  Seu carrinho está vazio
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Escolha ovos caipiras orgânicos colhidos no pasto e aproveite o melhor sabor e nutrição.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline underline-offset-4"
                >
                  Ver opções de ovos
                </button>
              </div>
            ) : step === 'cart' ? (
              <div className="space-y-4">
                {/* Free shipping progress */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-900">
                  {subtotal >= 70 ? (
                    <div className="flex items-center gap-2 font-semibold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Parabéns! Você ganhou Frete Grátis na sua região!</span>
                    </div>
                  ) : (
                    <div>
                      <span>
                        Faltam apenas <strong>R$ {(70 - subtotal).toFixed(2).replace('.', ',')}</strong> para ganhar <strong>Frete Grátis</strong> na região!
                      </span>
                      <div className="w-full bg-emerald-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-emerald-700 h-full rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (subtotal / 70) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Items List */}
                <div className="space-y-3 divide-y divide-stone-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover border border-stone-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-stone-900 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-stone-500">
                          {item.product.packSize}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-stone-300 rounded bg-white">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="p-1 text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="p-1 text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-bold text-stone-900">
                              R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                            </span>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="ml-2 text-stone-400 hover:text-red-600 p-1 transition-colors"
                              title="Remover"
                            >
                              <Trash2 className="w-3.5 h-3.5 inline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handleFinishOnWhatsApp} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={delivery.customerName}
                    onChange={(e) => setDelivery({ ...delivery, customerName: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      WhatsApp para contato *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(19) 99999-9999"
                      value={delivery.phone}
                      onChange={(e) => setDelivery({ ...delivery, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Cidade / Região *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Campinas, Limeira..."
                      value={delivery.city}
                      onChange={(e) => setDelivery({ ...delivery, city: e.target.value })}
                      className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Endereço Completo (Rua, Número, Apto) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rua das Palmeiras, 120 - Apto 34"
                    value={delivery.address}
                    onChange={(e) => setDelivery({ ...delivery, address: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Cambuí, Taquaral..."
                    value={delivery.neighborhood}
                    onChange={(e) => setDelivery({ ...delivery, neighborhood: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Forma de Pagamento Preferida
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'pix', label: 'PIX' },
                      { id: 'cartao', label: 'Cartão' },
                      { id: 'dinheiro', label: 'Dinheiro' },
                    ].map((m) => (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setDelivery({ ...delivery, paymentMethod: m.id as any })}
                        className={`py-1.5 px-2 text-xs rounded-lg font-medium border text-center transition-all ${
                          delivery.paymentMethod === m.id
                            ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Observações de Entrega (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Deixar com a portaria, avisar 30min antes..."
                    value={delivery.notes}
                    onChange={(e) => setDelivery({ ...delivery, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Footer & Actions */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal dos produtos</span>
                  <span className="font-semibold text-stone-800">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de entrega local</span>
                  <span className="font-semibold text-stone-800">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold">GRÁTIS</span>
                    ) : (
                      `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-100">
                  <span>Total do Pedido</span>
                  <span className="text-base text-emerald-900">
                    R$ {grandTotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {step === 'cart' ? (
                <div className="space-y-2">
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Continuar para Entrega</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-75"
                  >
                    <Phone className="w-4 h-4" />
                    <span>
                      {isSubmitting ? 'Gerando Pedido...' : 'Enviar Pedido no WhatsApp (19 95331-2503)'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-full py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    ← Voltar ao carrinho
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Atendimento humanizado direto com a Fazenda Thomaz Prado</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
