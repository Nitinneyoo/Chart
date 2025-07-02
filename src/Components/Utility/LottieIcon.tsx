import { useEffect, useRef } from 'react';

interface LottieIconProps {
  animationData: any;
  width?: number;
  height?: number;
}

export function LottieIcon({ animationData, width = 24, height = 24 }: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: any = null;

    const loadLottie = async () => {
      try {
        const lottie = await import('lottie-web');
        
        if (containerRef.current) {
          animationInstance = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
        }
      } catch (error) {
        console.error('Failed to load Lottie animation:', error);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width, height }} />;
}