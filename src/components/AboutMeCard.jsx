import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AboutMeCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative rounded-2xl p-8 bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-xl font-semibold">About Me</h3>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-full border border-white/30 text-white/90 text-sm hover:bg-white/10 transition-colors"
          >
            Learn More
          </button>
        </div>
        <p className="text-white/80 text-justify text-[18px] leading-[1.6]">
          I design and build minimal, motion-forward interfaces with a focus on clarity and
          performance. My work blends solid engineering with refined visual design.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
            alt="Personal 1"
            className="rounded-xl shadow-md object-cover h-28 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
            alt="Personal 2"
            className="rounded-xl shadow-md object-cover h-28 w-full"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 text-white/80"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 md:p-8">
                  <h4 className="text-white text-2xl font-semibold mb-2">Hello! I’m Alex.</h4>
                  <p className="text-white/80 text-[18px] leading-[1.6] text-justify">
                    I specialize in product design and front-end engineering, creating calm,
                    premium experiences across fintech and SaaS. I care about motion, detail,
                    and accessibility.
                  </p>
                </div>
                <div className="p-6 md:p-8 bg-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1000&auto=format&fit=crop"
                    alt="Portrait"
                    className="rounded-xl shadow-lg object-cover w-full h-48 md:h-64"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
