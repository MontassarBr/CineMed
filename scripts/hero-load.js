(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    setTimeout(() => hero.classList.add('loaded'), 100);
    const scrollCue = hero.querySelector('.scroll-cue');
    if (scrollCue) {
      scrollCue.addEventListener('click', () => {
        const next = hero.nextElementSibling;
        if (next) next.scrollIntoView({ behavior: 'smooth' });
      });
    }
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width, height;
      function resizeCanvas() {
        width = canvas.width = hero.offsetWidth;
        height = canvas.height = hero.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particles = [];
      const mouse = { x: null, y: null };
      const numParticles = Math.floor((width * height) / 6000);
      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.2; 
          this.vy = (Math.random() - 0.5) * 0.2;
          this.radius = Math.random() * 2 + 1;
        }
        update() {

          if (this.x + this.vx > width || this.x + this.vx < 0) this.vx *= -1;
          if (this.y + this.vy > height || this.y + this.vy < 0) this.vy *= -1;
         
          if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = 120; 
            if (dist < minDist) {
              const force = (minDist - dist) / minDist;
              this.vx += (dx / dist) * force * 0.05; 
              this.vy += (dy / dist) * force * 0.05;
            }
          }
          this.x += this.vx;
          this.y += this.vy;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.7)';
          ctx.fill();
        }
      }
      for (let i = 0; i < numParticles; i++) particles.push(new Particle());

      const lights = [];
      for (let i = 0; i < 3; i++) {
        lights.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 100 + 50,
          alpha: 0,
          inc: Math.random() * 0.02 + 0.005
        });
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);
        lights.forEach(light => {
          light.alpha += light.inc;
          if (light.alpha > 1 || light.alpha < 0) light.inc *= -1;
          const grd = ctx.createRadialGradient(
            light.x, light.y, 0,
            light.x, light.y, light.radius
          );
          grd.addColorStop(0, `rgba(255,255,255,${light.alpha * 0.3})`);
          grd.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.strokeStyle = `rgba(255,255,255,${1 - dist/100})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }
      canvas.addEventListener('mousemove', e => { mouse.x = e.offsetX; mouse.y = e.offsetY; });
      canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
      animate();
    }
  });
})();
