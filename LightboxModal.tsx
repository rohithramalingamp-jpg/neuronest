import React, { useEffect } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryImageItem } from '../types';
import { GALLERY_ITEMS } from '../data/brochureData';

interface LightboxModalProps {
  item: GalleryImageItem | null;
  onClose: () => void;
  onNavigate: (newItem: GalleryImageItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onNavigate }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
        const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
        const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 text-white">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border"
                style={{
                  color: item.categoryColor || '#45D7C9',
                  backgroundColor: item.badgeBg || 'rgba(69, 215, 201, 0.15)',
                  borderColor: item.badgeBorder || 'rgba(69, 215, 201, 0.3)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.categoryColor || '#45D7C9' }} />
                {item.category}
              </span>
              <span className="text-xs text-slate-400">
                ({currentIndex + 1} of {GALLERY_ITEMS.length})
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close image viewer"
            >
              <Icon icon="solar:close-circle-linear" className="w-5 h-5" />
            </button>
          </div>

          {/* Image Display Area with Fade Switch */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[440px] overflow-hidden">
            <motion.img
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={item.src}
              alt={item.title}
              className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              referrerPolicy="no-referrer"
            />

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <Icon icon="solar:alt-arrow-left-linear" className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <Icon icon="solar:alt-arrow-right-linear" className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Bottom Caption */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 text-white">
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-1"
              style={{ color: item.categoryColor || '#45D7C9' }}
            >
              {item.category}
            </span>
            <h3
              className="text-xl font-bold mb-1.5 tracking-tight"
              style={{ color: item.titleColor || '#FFFFFF' }}
            >
              {item.title}
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed max-w-3xl"
              style={{ color: item.descColor || '#CBD5E1' }}
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
