// Polyfill to make touch and wheel event listeners passive by default
export function applyPassiveListenerPolyfill() {
  // Store the original addEventListener
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  
  // Events that should be passive by default
  const passiveEvents = ['touchstart', 'touchmove', 'wheel', 'mousewheel'];
  
  // Override addEventListener
  EventTarget.prototype.addEventListener = function(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    // If it's a passive event and options weren't specified or is just a boolean
    if (passiveEvents.includes(type) && (options === undefined || typeof options === 'boolean')) {
      // Make it passive
      options = {
        capture: typeof options === 'boolean' ? options : false,
        passive: true
      };
    }
    
    // Call the original addEventListener
    return originalAddEventListener.call(this, type, listener, options);
  };
}