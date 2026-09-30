import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/brochureData';
import { GalleryImageItem } from '../types';
import { AnimatedHeading } from './AnimatedHeading';

interface TeachingGalleryProps {
  onSelectImage: (item: GalleryImageItem) => void;
}

export const TeachingGallery: React.FC<TeachingGalleryProps> = ({ onSelectImage }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F5F1EB]/85 border-t border-amber-950/5 bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Fade-in-up */}
        <AnimatedHeading
          eyebrow="TEACHING GALLERY & PRACTICUM"
          eyebrowColor="#12A89D"
          title={
            <>
              Learn by Doing.{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                Teach with Confidence.
              </span>
            </>
          }
          subtitle="Real classroom diagnostic simulations, tactile teaching materials in action, and immersive educator peer learning."
          className="mb-16"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Item 1 - Marquee Feature (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectImage(GALLERY_ITEMS[0])}
            className="sm:col-span-2 lg:col-span-7 group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[320px] sm:min-h-[380px] bg-slate-900"
          >
            <img
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white flex items-end justify-between gap-4">
              <div className="max-w-xl">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border shadow-xs"
                  style={{
                    color: GALLERY_ITEMS[0].categoryColor,
                    backgroundColor: GALLERY_ITEMS[0].badgeBg,
                    borderColor: GALLERY_ITEMS[0].badgeBorder,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GALLERY_ITEMS[0].categoryColor }} />
                  {GALLERY_ITEMS[0].category}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight transition-colors drop-shadow-xs"
                  style={{ color: GALLERY_ITEMS[0].titleColor }}
                >
                  {GALLERY_ITEMS[0].title}
                </h3>
                <p
                  className="text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed font-normal"
                  style={{ color: GALLERY_ITEMS[0].descColor }}
                >
                  {GALLERY_ITEMS[0].description}
                </p>
              </div>
              <div
                className="w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shrink-0 transition-all ml-2 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: GALLERY_ITEMS[0].badgeBg,
                  borderColor: GALLERY_ITEMS[0].badgeBorder,
                }}
              >
                <Icon
                  icon="solar:maximize-square-3-linear"
                  className="w-4 h-4"
                  style={{ color: GALLERY_ITEMS[0].categoryColor }}
                />
              </div>
            </div>
          </motion.div>

          {/* Item 2 - (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectImage(GALLERY_ITEMS[1])}
            className="sm:col-span-2 lg:col-span-5 group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[320px] sm:min-h-[380px] bg-slate-900"
          >
            <img
              src={GALLERY_ITEMS[1].src}
              alt={GALLERY_ITEMS[1].title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white flex items-end justify-between gap-4">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border shadow-xs"
                  style={{
                    color: GALLERY_ITEMS[1].categoryColor,
                    backgroundColor: GALLERY_ITEMS[1].badgeBg,
                    borderColor: GALLERY_ITEMS[1].badgeBorder,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GALLERY_ITEMS[1].categoryColor }} />
                  {GALLERY_ITEMS[1].category}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight transition-colors drop-shadow-xs"
                  style={{ color: GALLERY_ITEMS[1].titleColor }}
                >
                  {GALLERY_ITEMS[1].title}
                </h3>
                <p
                  className="text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed font-normal"
                  style={{ color: GALLERY_ITEMS[1].descColor }}
                >
                  {GALLERY_ITEMS[1].description}
                </p>
              </div>
              <div
                className="w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shrink-0 transition-all ml-2 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: GALLERY_ITEMS[1].badgeBg,
                  borderColor: GALLERY_ITEMS[1].badgeBorder,
                }}
              >
                <Icon
                  icon="solar:maximize-square-3-linear"
                  className="w-4 h-4"
                  style={{ color: GALLERY_ITEMS[1].categoryColor }}
                />
              </div>
            </div>
          </motion.div>

          {/* Item 3 - (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectImage(GALLERY_ITEMS[2])}
            className="lg:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[300px] bg-slate-900"
          >
            <img
              src={GALLERY_ITEMS[2].src}
              alt={GALLERY_ITEMS[2].title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between gap-3">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border shadow-xs"
                  style={{
                    color: GALLERY_ITEMS[2].categoryColor,
                    backgroundColor: GALLERY_ITEMS[2].badgeBg,
                    borderColor: GALLERY_ITEMS[2].badgeBorder,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GALLERY_ITEMS[2].categoryColor }} />
                  {GALLERY_ITEMS[2].category}
                </span>
                <h3
                  className="text-base sm:text-lg font-extrabold leading-snug tracking-tight transition-colors drop-shadow-xs"
                  style={{ color: GALLERY_ITEMS[2].titleColor }}
                >
                  {GALLERY_ITEMS[2].title}
                </h3>
                <p
                  className="text-xs mt-1.5 line-clamp-2 leading-relaxed"
                  style={{ color: GALLERY_ITEMS[2].descColor }}
                >
                  {GALLERY_ITEMS[2].description}
                </p>
              </div>
              <div
                className="w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center shrink-0 transition-all ml-2 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: GALLERY_ITEMS[2].badgeBg,
                  borderColor: GALLERY_ITEMS[2].badgeBorder,
                }}
              >
                <Icon
                  icon="solar:maximize-square-3-linear"
                  className="w-3.5 h-3.5"
                  style={{ color: GALLERY_ITEMS[2].categoryColor }}
                />
              </div>
            </div>
          </motion.div>

          {/* Item 4 - (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectImage(GALLERY_ITEMS[3])}
            className="lg:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[300px] bg-slate-900"
          >
            <img
              src={GALLERY_ITEMS[3].src}
              alt={GALLERY_ITEMS[3].title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between gap-3">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border shadow-xs"
                  style={{
                    color: GALLERY_ITEMS[3].categoryColor,
                    backgroundColor: GALLERY_ITEMS[3].badgeBg,
                    borderColor: GALLERY_ITEMS[3].badgeBorder,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GALLERY_ITEMS[3].categoryColor }} />
                  {GALLERY_ITEMS[3].category}
                </span>
                <h3
                  className="text-base sm:text-lg font-extrabold leading-snug tracking-tight transition-colors drop-shadow-xs"
                  style={{ color: GALLERY_ITEMS[3].titleColor }}
                >
                  {GALLERY_ITEMS[3].title}
                </h3>
                <p
                  className="text-xs mt-1.5 line-clamp-2 leading-relaxed"
                  style={{ color: GALLERY_ITEMS[3].descColor }}
                >
                  {GALLERY_ITEMS[3].description}
                </p>
              </div>
              <div
                className="w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center shrink-0 transition-all ml-2 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: GALLERY_ITEMS[3].badgeBg,
                  borderColor: GALLERY_ITEMS[3].badgeBorder,
                }}
              >
                <Icon
                  icon="solar:maximize-square-3-linear"
                  className="w-3.5 h-3.5"
                  style={{ color: GALLERY_ITEMS[3].categoryColor }}
                />
              </div>
            </div>
          </motion.div>

          {/* Item 5 - (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectImage(GALLERY_ITEMS[4])}
            className="lg:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[300px] bg-slate-900"
          >
            <img
              src={GALLERY_ITEMS[4].src}
              alt={GALLERY_ITEMS[4].title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between gap-3">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border shadow-xs"
                  style={{
                    color: GALLERY_ITEMS[4].categoryColor,
                    backgroundColor: GALLERY_ITEMS[4].badgeBg,
                    borderColor: GALLERY_ITEMS[4].badgeBorder,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GALLERY_ITEMS[4].categoryColor }} />
                  {GALLERY_ITEMS[4].category}
                </span>
                <h3
                  className="text-base sm:text-lg font-extrabold leading-snug tracking-tight transition-colors drop-shadow-xs"
                  style={{ color: GALLERY_ITEMS[4].titleColor }}
                >
                  {GALLERY_ITEMS[4].title}
                </h3>
                <p
                  className="text-xs mt-1.5 line-clamp-2 leading-relaxed"
                  style={{ color: GALLERY_ITEMS[4].descColor }}
                >
                  {GALLERY_ITEMS[4].description}
                </p>
              </div>
              <div
                className="w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center shrink-0 transition-all ml-2 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: GALLERY_ITEMS[4].badgeBg,
                  borderColor: GALLERY_ITEMS[4].badgeBorder,
                }}
              >
                <Icon
                  icon="solar:maximize-square-3-linear"
                  className="w-3.5 h-3.5"
                  style={{ color: GALLERY_ITEMS[4].categoryColor }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8 flex items-center justify-center gap-1.5">
          <Icon icon="solar:magic-stick-3-bold-duotone" className="w-3.5 h-3.5 text-[#E9A800]" />
          <span>Click any image to inspect practical teaching simulations and clinical materials</span>
        </p>
      </div>
    </section>
  );
};
