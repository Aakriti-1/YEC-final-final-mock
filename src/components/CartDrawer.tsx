import React from 'react';
import { X, ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-[#121620] text-white h-full border-l border-white/10 shadow-2xl flex flex-col justify-between p-6"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#ff9900]" />
              <h3 className="font-display text-2xl uppercase tracking-wider">Your Shopping Cart</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Empty cart state */}
          <div className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-zinc-500">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="font-display text-xl uppercase tracking-wider text-zinc-300 mb-2">
              Your cart is empty
            </h4>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto mb-6">
              Looking for official Lassonde Engineering discipline patches, engineering hoodies, or merch?
            </p>
            <a
              id="cart-visit-engshop-btn"
              href="https://lasengsoc.com/engshop-y7m66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff9900] text-black font-bold text-sm hover:bg-[#e08900] transition-colors"
            >
              <span>Visit EngShop Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Continue Browsing YEC
          </button>
        </div>
      </div>
    </div>
  );
};
