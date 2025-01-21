import { Heart } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-4 text-4xl font-serif text-rose-600">
      <span>Allan</span>
      <Heart className="fill-rose-600" />
      <span>Maria</span>
    </div>
  );
}
