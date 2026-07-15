import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { industries } from '../../data/industriesAndWhy';
import iconMap from './icons';
import './IndustriesMarquee.css';

/**
 * Infinite horizontal auto-scrolling carousel of 8 industry cards.
 * Uses Embla with Autoplay plugin, loop mode, pause on hover/focus.
 * Reduced-motion: renders one static card (no carousel).
 */
export default function IndustriesMarquee({ reducedMotion = false }) {
  const viewportRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false, playOnMount: true })],
  );

  // Combine Embla's callback ref with our own ref for event listeners
  const setViewportRef = (node) => {
    emblaRef(node);
    viewportRef.current = node;
  };

  // Pause on hover + focus; resume on leave/blur
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const stop = () => autoplay.stop();
    const play = () => autoplay.play();

    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', play);
    viewport.addEventListener('focusin', stop);
    viewport.addEventListener('focusout', play);

    return () => {
      viewport.removeEventListener('mouseenter', stop);
      viewport.removeEventListener('mouseleave', play);
      viewport.removeEventListener('focusin', stop);
      viewport.removeEventListener('focusout', play);
    };
  }, [emblaApi]);

  // -- Reduced motion: single static card --
  if (reducedMotion) {
    return (
      <div className="iw-marquee iw-marquee--static">
        <div className="iw-marquee__viewport">
          <div className="iw-marquee__container">
            <div className="iw-marquee__slide">
              <div className={`iw-marquee__card iw-marquee__card--${industries[0].iconKey}`}>
                <div className="iw-marquee__icon">{iconMap[industries[0].iconKey]}</div>
                <span className="iw-marquee__name">{industries[0].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="iw-marquee"
      aria-roledescription="carousel"
      aria-label="Industrias que servimos"
    >
      <div className="iw-marquee__viewport" ref={setViewportRef}>
        <div className="iw-marquee__container">
          {industries.map((ind, idx) => (
            <div className="iw-marquee__slide" key={idx}>
              <div className={`iw-marquee__card iw-marquee__card--${ind.iconKey}`}>
                <div className="iw-marquee__icon">{iconMap[ind.iconKey]}</div>
                <span className="iw-marquee__name">{ind.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}