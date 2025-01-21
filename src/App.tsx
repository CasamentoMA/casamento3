import { useState } from 'react';
import { Logo } from './components/Logo';
import { Countdown } from './components/Countdown';
import { Seal } from './components/Seal';
import { Invitation } from './components/Invitation';

export default function App() {
  const [isInvitationRevealed, setIsInvitationRevealed] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start pt-12 gap-12 px-4"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
        <Logo />
      </div>

      <div className="flex flex-col items-center gap-4">
        <img
          src="/logo.png"
          alt="A&M Wedding Logo"
          className="h-32 object-contain mix-blend-darken"
        />
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
          <Countdown />
        </div>
      </div>

      <Seal 
        onClick={() => setIsInvitationRevealed(true)} 
        isRevealed={isInvitationRevealed}
      />

      <Invitation isVisible={isInvitationRevealed} />
    </div>
  );
}