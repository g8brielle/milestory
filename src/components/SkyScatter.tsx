import React, { useEffect, useRef, useState } from 'react';
import pink_big_star from '../assets/pink_star_big.svg';
import pink_little_star from '../assets/pink_star_little.svg';
import yellow_big_star from '../assets/yellow_star_big.svg';
import yellow_little_star from '../assets/yellow_star_little.svg';
import blue_big_star from '../assets/blue_star_big.svg';
import blue_little_star from '../assets/blue_star_little.svg';
import grey_big_star from '../assets/big_grey_star.svg';
import grey_little_star from '../assets/little_grey_star.svg';

const starTypes = [
  { src: pink_big_star, count: 5 },
  { src: pink_little_star, count: 3 },
  { src: yellow_big_star, count: 5 },
  { src: yellow_little_star, count: 3 },
  { src: blue_big_star, count: 5 },
  { src: blue_little_star, count: 3 },
  { src: grey_big_star, count: 4 },
  { src: grey_little_star, count: 6 },
];

interface SkyScatterProps {
  className?: string; 
}

const getIconWidth = (iconSrc: string, width : number) => {
  if (iconSrc === pink_big_star || iconSrc === yellow_big_star || iconSrc === blue_big_star) {
    if (width <= 1440 && width > 768) {
      return width * 0.03;
    } else if (width > 1440) {
      return 35;
    }
    return width * 0.05;
  } else if (iconSrc === pink_little_star || iconSrc === yellow_little_star || iconSrc === blue_little_star) {
    if (width <= 1440 && width > 768) {
      return width * 0.018;
    } else if (width > 1440) {
      return 26;
    }
    return width * 0.03;
  } else if (iconSrc === grey_big_star) {
    if (width <= 1440 && width > 768) {
      return width * 0.02;
    } else if (width > 1440) {
      return 32;
    }
    return width * 0.05;
  } else if (iconSrc === grey_little_star) {
    if (width <= 1440 && width > 768) {
      return width * 0.01;
    } else if (width > 1440) {
      return 18;
    }
    return width * 0.02;
  }
  return width * 0.04; // Default size
}

const isCollision = (
  x1: number, y1: number, width1: number, height1: number, 
  x2: number, y2: number, width2: number, height2: number
) => {
  return !(x1 + width1 < x2 || 
           x1 > x2 + width2 || 
           y1 + height1 < y2 || 
           y1 > y2 + height2);
};

const getAvoidedAreas = (containerRef: React.RefObject<HTMLDivElement>) => {
  const avoidedAreas: { x: number; y: number; width: number; height: number; }[] = [];

  if (containerRef.current) {
    // Example: Add specific elements to avoid
    const elementsToAvoid = document.querySelectorAll('.fullName, .tag, .social-icon'); // Adjust the selector
    elementsToAvoid.forEach(el => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      avoidedAreas.push({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    });
  }

  return avoidedAreas;
};

const getNonCollidingPosition = (
  icons: { x: number; y: number; width: number; height: number; }[], 
  avoidedAreas: { x: number; y: number; width: number; height: number; }[],
  containerWidth: number, containerHeight: number
) => {
  const maxAttempts = 100;
  let attempts = 0;
  let position = { x: 0, y: 0 };
  let collision = true;

  while (collision && attempts < maxAttempts) {
    position = {
      x: Math.random() * (containerWidth - 30), // Adjust size as needed
      y: Math.random() * (containerHeight - 40)
    };

    collision = icons.some(icon => 
      isCollision(position.x, position.y, 35, 35, icon.x, icon.y, icon.width, icon.height) // Adjust size as needed
    ) || avoidedAreas.some(area => 
      isCollision(position.x, position.y, 35, 35, area.x, area.y, area.width, area.height) // Adjust size as needed
    );

    attempts++;
  }

  return position;
};

const SkyScatter: React.FC<SkyScatterProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number; width: number; height: number; src: string }[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const newIconPositions: { x: number; y: number; width: number; height: number; src: string }[] = [];
    const avoidedAreas = getAvoidedAreas(containerRef);

    starTypes.forEach(starType => {
      for (let i = 0; i < starType.count; i++) {
        const iconWidth = getIconWidth(starType.src, containerDimensions.width);
        const iconHeight = iconWidth; // Assuming square icons; adjust if necessary
        const position = getNonCollidingPosition(newIconPositions, avoidedAreas, containerDimensions.width, containerDimensions.height);

        newIconPositions.push({
          x: position.x,
          y: position.y,
          width: iconWidth,
          height: iconHeight,
          src: starType.src,
        });
      }
    });

    setIconPositions(newIconPositions);
  }, [containerDimensions]);

  const iconElements = iconPositions.map((icon, index) => (
    <img
      key={index}
      src={icon.src}
      alt={`icon-${index}`}
      style={{
        position: 'absolute',
        left: `${icon.x}px`,
        top: `${icon.y}px`,
        width: `${icon.width}px`,
        height: `${icon.height}px`,
      }}
    />
  ));

  return (
    <div ref={containerRef} className='position-relative w-100 h-100' style={{ height: '100vh' }}>
      {iconElements}
    </div>
  );
};

export default SkyScatter;
