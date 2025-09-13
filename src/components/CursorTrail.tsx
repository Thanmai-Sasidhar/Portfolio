import React, { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  angle: number;
  distance: number;
  spiralSpeed: number;
  glowIntensity: number;
  element: HTMLDivElement;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
  twinkle: number;
  element: HTMLDivElement;
}

const CursorTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorCoreRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const velocityTrailRef = useRef<HTMLDivElement>(null);
  
  const particles = useRef<Particle[]>([]);
  const sparkles = useRef<Sparkle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);
  const sparkleId = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const createParticleElement = (): HTMLDivElement => {
      const element = document.createElement('div');
      element.className = 'fixed rounded-full pointer-events-none';
      element.style.position = 'fixed';
      element.style.borderRadius = '50%';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '49';
      containerRef.current?.appendChild(element);
      return element;
    };

    const createSparkleElement = (): HTMLDivElement => {
      const element = document.createElement('div');
      element.className = 'fixed pointer-events-none';
      element.style.position = 'fixed';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '49';
      
      const star = document.createElement('div');
      star.className = 'w-full h-full relative';
      element.appendChild(star);
      
      containerRef.current?.appendChild(element);
      return element;
    };

    const createParticles = (x: number, y: number, velocity: { x: number; y: number }) => {
      const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      const particleCount = Math.min(Math.max(speed * 0.3, 2), 8);

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const spiralRadius = Math.random() * 30 + 10;
        const baseVelocity = Math.random() * 2 + 1;
        const life = Math.random() * 60 + 30;
        
        const element = createParticleElement();
        
        const particle: Particle = {
          id: particleId.current++,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * baseVelocity + velocity.x * 0.1,
          vy: Math.sin(angle) * baseVelocity + velocity.y * 0.1,
          life,
          maxLife: life,
          size: Math.random() * 4 + 2,
          hue: 200 + Math.random() * 60,
          angle: angle,
          distance: spiralRadius,
          spiralSpeed: Math.random() * 0.1 + 0.05,
          glowIntensity: Math.random() * 0.5 + 0.5,
          element
        };

        particles.current.push(particle);
      }
    };

    const createSparkles = (x: number, y: number) => {
      if (Math.random() < 0.2) {
        const sparkleCount = Math.random() * 2 + 1;

        for (let i = 0; i < sparkleCount; i++) {
          const life = Math.random() * 30 + 15;
          const element = createSparkleElement();
          
          const sparkle: Sparkle = {
            id: sparkleId.current++,
            x: x + (Math.random() - 0.5) * 40,
            y: y + (Math.random() - 0.5) * 40,
            life,
            maxLife: life,
            size: Math.random() * 3 + 1,
            twinkle: Math.random() * Math.PI * 2,
            element
          };

          sparkles.current.push(sparkle);
        }
      }
    };

    const updateParticles = () => {
      // Update particles
      particles.current = particles.current.filter(particle => {
        particle.angle += particle.spiralSpeed;
        particle.distance *= 0.98;
        
        const spiralX = Math.cos(particle.angle) * particle.distance * 0.1;
        const spiralY = Math.sin(particle.angle) * particle.distance * 0.1;
        
        particle.x += particle.vx + spiralX;
        particle.y += particle.vy + spiralY;
        particle.vx *= 0.95;
        particle.vy *= 0.95;
        particle.life -= 1;

        if (particle.life <= 0) {
          particle.element.remove();
          return false;
        }

        const opacity = (particle.life / particle.maxLife) * particle.glowIntensity;
        const scale = 0.5 + opacity * 0.5;
        const glowSize = particle.size * 3;

        particle.element.style.left = `${particle.x - particle.size / 2}px`;
        particle.element.style.top = `${particle.y - particle.size / 2}px`;
        particle.element.style.width = `${particle.size}px`;
        particle.element.style.height = `${particle.size}px`;
        particle.element.style.background = `hsl(${particle.hue}, 100%, 70%)`;
        particle.element.style.opacity = `${opacity}`;
        particle.element.style.transform = `scale(${scale})`;
        particle.element.style.boxShadow = `
          0 0 ${glowSize}px hsl(${particle.hue}, 100%, 60%),
          0 0 ${glowSize * 2}px hsl(${particle.hue}, 100%, 50%, 0.3),
          inset 0 0 ${particle.size}px hsl(${particle.hue}, 100%, 90%)
        `;
        particle.element.style.filter = 'blur(0.5px)';

        return true;
      });

      // Update sparkles
      sparkles.current = sparkles.current.filter(sparkle => {
        sparkle.life -= 1;
        sparkle.twinkle += 0.2;

        if (sparkle.life <= 0) {
          sparkle.element.remove();
          return false;
        }

        const opacity = sparkle.life / sparkle.maxLife;
        const twinkleOpacity = (Math.sin(sparkle.twinkle) + 1) * 0.5;
        const finalOpacity = opacity * twinkleOpacity;

        sparkle.element.style.left = `${sparkle.x - sparkle.size / 2}px`;
        sparkle.element.style.top = `${sparkle.y - sparkle.size / 2}px`;
        sparkle.element.style.width = `${sparkle.size}px`;
        sparkle.element.style.height = `${sparkle.size}px`;
        sparkle.element.style.opacity = `${finalOpacity}`;
        sparkle.element.style.transform = `rotate(${sparkle.twinkle * 20}deg)`;

        const star = sparkle.element.firstChild as HTMLDivElement;
        if (star) {
          star.style.background = `
            linear-gradient(45deg, transparent 40%, #00d4ff 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, #00d4ff 50%, transparent 60%)
          `;
          star.style.boxShadow = `0 0 ${sparkle.size * 4}px #00d4ff`;
        }

        return true;
      });

      animationFrame = requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      const velocity = {
        x: newPos.x - lastMousePos.current.x,
        y: newPos.y - lastMousePos.current.y,
      };

      mousePosition.current = newPos;
      mouseVelocity.current = velocity;

      // Update cursor elements directly
      if (cursorCoreRef.current) {
        cursorCoreRef.current.style.left = `${newPos.x - 4}px`;
        cursorCoreRef.current.style.top = `${newPos.y - 4}px`;
      }

      if (cursorRingRef.current) {
        const scale = 1 + Math.abs(velocity.x + velocity.y) * 0.01;
        cursorRingRef.current.style.left = `${newPos.x - 20}px`;
        cursorRingRef.current.style.top = `${newPos.y - 20}px`;
        cursorRingRef.current.style.transform = `scale(${scale})`;
      }

      if (velocityTrailRef.current) {
        const opacity = Math.min(Math.abs(velocity.x + velocity.y) * 0.1, 0.8);
        velocityTrailRef.current.style.left = `${newPos.x - velocity.x * 2 - 3}px`;
        velocityTrailRef.current.style.top = `${newPos.y - velocity.y * 2 - 3}px`;
        velocityTrailRef.current.style.opacity = `${opacity}`;
      }
      
      // Create particles and sparkles
      if (Math.random() < 0.4) {
        createParticles(newPos.x, newPos.y, velocity);
      }
      createSparkles(newPos.x, newPos.y);
      
      lastMousePos.current = newPos;
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      
      // Clean up particles
      particles.current.forEach(particle => particle.element.remove());
      sparkles.current.forEach(sparkle => sparkle.element.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor core */}
      <div
        ref={cursorCoreRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00d4ff, #0099cc)',
          boxShadow: `
            0 0 10px #00d4ff,
            0 0 20px #00d4ff,
            0 0 30px #00d4ff50
          `,
          zIndex: 51,
        }}
      />

      {/* Outer cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed rounded-full pointer-events-none"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid #00d4ff40',
          background: 'radial-gradient(circle, transparent 70%, #00d4ff10)',
          boxShadow: `
            0 0 20px #00d4ff30,
            inset 0 0 20px #00d4ff20
          `,
          zIndex: 50,
        }}
      />

      {/* Velocity-based trail */}
      <div
        ref={velocityTrailRef}
        className="fixed rounded-full pointer-events-none"
        style={{
          width: '6px',
          height: '6px',
          background: 'radial-gradient(circle, #00d4ff80, transparent)',
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default CursorTrail;