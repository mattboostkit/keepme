// Fix font-display for third-party fonts
export function fixFontDisplay() {
  // Function to process stylesheets
  const processStylesheet = (sheet: CSSStyleSheet) => {
    try {
      const rules = sheet.cssRules || sheet.rules;
      if (!rules) return;
      
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule instanceof CSSFontFaceRule) {
          // Add font-display: swap if not already present
          if (!rule.style.getPropertyValue('font-display')) {
            rule.style.setProperty('font-display', 'swap', 'important');
          }
        }
      }
    } catch {
      // Ignore cross-origin stylesheet errors
    }
  };

  // Process existing stylesheets
  const processAllStylesheets = () => {
    Array.from(document.styleSheets).forEach(processStylesheet);
  };

  // Process on load
  processAllStylesheets();

  // Watch for new stylesheets
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLLinkElement && node.rel === 'stylesheet') {
          node.addEventListener('load', () => {
            const sheet = Array.from(document.styleSheets).find(
              s => s.href === node.href
            );
            if (sheet) processStylesheet(sheet);
          });
        }
      });
    });
  });

  observer.observe(document.head, {
    childList: true,
    subtree: true
  });
}