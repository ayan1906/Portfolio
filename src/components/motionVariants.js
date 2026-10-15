export const EASE = [0.22, 1, 0.36, 1];

export const viewport = { once: true, amount: 0.15, margin: "0px 0px -60px 0px" };

// `custom` = index, so grid items can cascade: <motion.div variants={fadeUp} custom={i} />
const reveal = (hidden) => ({
  hidden: { opacity: 0, ...hidden },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: EASE, delay: i * 0.15 },
  }),
});

export const fadeUp = reveal({ y: 50 });
export const fadeLeft = reveal({ x: -60 });
export const fadeRight = reveal({ x: 60 });
export const scaleIn = reveal({ scale: 0.85 });

// Parent container: children with `variants` animate one after another
export const stagger = (gap = 0.18, delay = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});