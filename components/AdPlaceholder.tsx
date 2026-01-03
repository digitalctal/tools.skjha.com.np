import React, { useState, useCallback } from 'react';

interface AdPlaceholderProps {
  type: 'banner' | 'sidebar' | 'inline';
  label?: string;
  /** Ad network identifier */
  adNetwork?: 'google' | 'custom' | 'affiliate';
  /** Ad slot ID for tracking */
  slotId?: string;
  /** Callback when ad is clicked */
  onAdClick?: () => void;
  /** Show refresh button */
  showRefresh?: boolean;
}

/**
 * Enhanced AdPlaceholder component with:
 * - Multiple ad types (banner/sidebar/inline)
 * - Ad network support
 * - Click tracking
 * - Refresh capability
 * - Accessibility features
 * - Hover animations
 */
const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  type, 
  label = 'Promoted Content',
  adNetwork = 'custom',
  slotId,
  onAdClick,
  showRefresh = false
}) => {
  const [impressions, setImpressions] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const styles = {
    banner: {
      container: 'w-full h-40 md:h-52 my-12',
      icon: 'text-4xl',
      padding: 'px-6'
    },
    sidebar: {
      container: 'w-full h-[600px] sticky top-28',
      icon: 'text-5xl',
      padding: 'px-8'
    },
    inline: {
      container: 'w-full h-32 my-10',
      icon: 'text-3xl',
      padding: 'px-6'
    }
  };

  const handleAdClick = useCallback(() => {
    setImpressions(prev => prev + 1);
    onAdClick?.();
    // Track click event
    console.log(`Ad clicked: ${slotId || 'unknown'}`, { network: adNetwork });
  }, [onAdClick, slotId, adNetwork]);

  const handleRefresh = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRefreshing(true);
    // Simulate refresh - in production, would fetch new ad
    setTimeout(() => {
      setImpressions(0);
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const getScreenReaderText = () => {
    const networkLabels = {
      google: 'Google Advertisement',
      custom: 'Sponsored Content',
      affiliate: 'Affiliate Link'
    };
    return `${networkLabels[adNetwork]}: ${label}`;
  };

  return (
    <div
      role="region"
      aria-label="Advertisement"
      aria-roledescription="advertisement"
    >
      <div
        className={`
          ${styles[type].container} 
          bg-slate-100 
          border-4 border-dashed 
          border-slate-200 
          rounded-[2rem] 
          flex 
          items-center 
          justify-center 
          text-slate-400 
          overflow-hidden 
          group 
          cursor-pointer
          transition-all 
          duration-300
          ${isHovered ? 'border-[#28a745] bg-slate-50' : ''}
        `}
        onClick={handleAdClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleAdClick()}
      >
        {/* Animated Background Gradient */}
        <div 
          className={`
            absolute inset-0 
            bg-gradient-to-r 
            from-transparent 
            via-[#28a745]/5 
            to-transparent
            translate-x-[-100%]
            group-hover:translate-x-[100%]
            transition-transform 
            duration-1500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Content */}
        <div className={`text-center ${styles[type].padding} relative z-10`}>
          {/* Icon */}
          <div 
            className={`
              mb-3 
              transition-all 
              duration-300
              ${isHovered ? 'text-[#28a745] opacity-100 scale-110' : 'opacity-20'}
            `}
          >
            <i className={`fa-solid fa-rectangle-ad ${styles[type].icon}`}></i>
          </div>
          
          {/* Label */}
          <p className="text-xs uppercase font-black tracking-[0.2em]">
            {label}
          </p>
          
          {/* Subtitle */}
          <p className="text-xs font-bold opacity-60 mt-1">
            Revenue supports free hosting
          </p>

          {/* Network Badge */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-[10px] px-2 py-1 bg-slate-200 rounded-full opacity-50">
              {adNetwork === 'google' && <><i className="fa-brands fa-google mr-1"></i> Ads</>}
              {adNetwork === 'custom' && <><i className="fa-solid fa-star mr-1"></i> Sponsored</>}
              {adNetwork === 'affiliate' && <><i className="fa-solid fa-link mr-1"></i> Affiliate</>}
            </span>
          </div>
        </div>

        {/* Refresh Button */}
        {showRefresh && (
          <button
            onClick={handleRefresh}
            className={`
              absolute top-4 right-4 
              p-2 
              bg-white 
              rounded-xl 
              shadow-md
              text-slate-400
              hover:text-[#28a745]
              transition-all
              ${isRefreshing ? 'animate-spin' : ''}
            `}
            title="Refresh ad"
            aria-label="Refresh advertisement"
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        )}

        {/* Screen Reader Only */}
        <span className="sr-only">
          {getScreenReaderText()}
        </span>
      </div>
    </div>
  );
};

export default AdPlaceholder;

