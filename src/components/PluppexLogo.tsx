import React from 'react';

interface PluppexLogoProps {
  variant?: 'full' | 'wordmark' | 'icon' | 'badge';
  theme?: 'white' | 'dark' | 'white-purple';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useOriginalPhoto?: boolean;
}

export const PluppexLogo: React.FC<PluppexLogoProps> = ({
  variant = 'full',
  theme = 'white-purple',
  className = '',
  size = 'md',
  useOriginalPhoto = false,
}) => {
  // Sizing definitions for the logo image - increased for high visibility & impact
  const sizeMap = {
    sm: {
      full: 'h-11 sm:h-12',
      icon: 'w-8 h-8',
    },
    md: {
      full: 'h-14 sm:h-16 md:h-20',
      icon: 'w-11 h-11',
    },
    lg: {
      full: 'h-20 sm:h-24 md:h-28',
      icon: 'w-14 h-14',
    },
    xl: {
      full: 'h-28 sm:h-36 md:h-44',
      icon: 'w-20 h-20',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  // Icon-only variant (The dynamic rocket X from the user photo)
  if (variant === 'icon') {
    return (
      <div 
        id="pluppex-brand-icon"
        className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      >
        <img
          src="/pluppex-icon-transparent.png"
          alt="Pluppex Rocket Icon"
          className={`${currentSize.icon} object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  // Determine which image source to use based on theme and options
  // - useOriginalPhoto: displays the exact original uploaded photo as-is
  // - theme 'dark' (on light backgrounds): uses transparent with dark text
  // - theme 'white' or 'white-purple' (on dark backgrounds): uses transparent with white text for maximum legibility and sleek look
  let imgSrc = '/pluppex-logo-dark-theme.png';
  if (useOriginalPhoto) {
    imgSrc = '/pluppex-logo.png';
  } else if (theme === 'dark') {
    imgSrc = '/pluppex-logo-transparent.png';
  }

  return (
    <div className={`relative inline-flex items-center select-none group ${className}`}>
      <img
        src={imgSrc}
        alt="Pluppex - Performance & Lucro com Crescimento Exponencial"
        className={`${currentSize.full} w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_4px_20px_rgba(168,85,247,0.35)]`}
        loading="eager"
      />
    </div>
  );
};
