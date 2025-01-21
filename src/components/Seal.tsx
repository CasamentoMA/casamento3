import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface SealProps {
  onClick: () => void;
  isRevealed: boolean;
}

export function Seal({ onClick, isRevealed }: SealProps) {
  const handleClick = () => {
    onClick();
    
    // Trigger confetti from multiple angles
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      spread: 360,
      ticks: 100,
      gravity: 0.5,
      decay: 0.94,
      startVelocity: 30,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isRevealed ? [0, -10, 0] : 0 }}
      onClick={handleClick}
    >
      <div className="relative w-40 h-40">
        <img
          src="/seal.png"
          alt="Wedding Seal"
          className="w-full h-full transition-opacity duration-500 object-contain mix-blend-darken"
          style={{ opacity: isRevealed ? 0.5 : 1 }}
        />
      </div>
      {!isRevealed && (
        <p className="text-center mt-4 text-rose-700 font-serif">
          Clique no selo para revelar o convite
        </p>
      )}
    </motion.div>
  );
}