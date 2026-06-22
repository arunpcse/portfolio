import { useEffect, useRef } from "react";

const LiquidBackground = () => {
  const canvasRef = useRef(null);
  // Generate a unique canvas ID for this instance to avoid collisions during transitions
  const canvasIdRef = useRef(`liquid-canvas-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    const canvasId = canvasIdRef.current;
    const script = document.createElement("script");
    script.type = "module";

    script.innerHTML = `
      import LiquidBackground from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js";

      const canvas = document.getElementById("${canvasId}");

      if (canvas) {
        try {
          const app = LiquidBackground(canvas);

          app.loadImage("https://assets.codepen.io/33787/liquid.webp");
          app.liquidPlane.material.metalness = 0.75;
          app.liquidPlane.material.roughness = 0.25;
          app.liquidPlane.uniforms.displacementScale.value = 5;
          app.setRain(false);
        } catch (err) {
          console.error("Failed to initialize liquid background:", err);
        }
      }
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas id={canvasIdRef.current} className="liquid-canvas" ref={canvasRef}></canvas>;
};

export default LiquidBackground;