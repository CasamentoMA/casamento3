import { motion } from 'framer-motion';

interface InvitationProps {
  isVisible: boolean;
}

export function Invitation({ isVisible }: InvitationProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-serif text-rose-700 mb-6">
        Com o coração cheio de amor...
      </h2>
      <div className="text-gray-700 space-y-6 leading-relaxed">
        <p>
          Nós, Allan e Maria Eduarda, estamos muito felizes em convidar você para celebrar conosco o início de uma nova jornada.
        </p>
        <p>
          Nosso casamento será mais do que uma cerimônia, será um momento de união, alegria e muitos sorrisos. A sua presença será o que tornará esse dia ainda mais especial e inesquecível!
        </p>
        <p>
          Esperamos que você esteja conosco para compartilhar risadas, abraços e os melhores momentos desse dia tão esperado!
        </p>
      </div>
      <div className="mt-8 text-lg text-rose-600">
        <p className="font-serif">15 de Maio de 2025</p>
        <p className="font-serif">às 16:00</p>
        <p className="mt-4">Chácara Rancho Artevil</p>
        <p className="text-sm mt-2">PR-510 Estrada para Balsa Nova, 94 - Jardim Itaqui</p>
        <p className="text-sm">Campo Largo - PR, 83604-140</p>
      </div>
      <div className="mt-8 text-rose-700 font-serif">
        <p>Com amor,</p>
        <p>Allan e Maria </p>
      </div>
    </motion.div>
  );
}