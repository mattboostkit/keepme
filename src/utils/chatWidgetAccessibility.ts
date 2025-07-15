// Fix accessibility for third-party chat widget
export function fixChatWidgetAccessibility() {
  // Use MutationObserver to watch for the chat widget to load
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      // Find the close button that's missing an accessible name
      const closeButton = document.querySelector('.lc_text-widget_prompt--prompt-close');
      if (closeButton && !closeButton.getAttribute('aria-label')) {
        closeButton.setAttribute('aria-label', 'Close chat');
        closeButton.setAttribute('title', 'Close chat');
      }
      
      // Also check for any other buttons in the chat widget
      const chatButtons = document.querySelectorAll('#lc_text-widget button');
      chatButtons.forEach((button) => {
        if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
          // Try to determine button purpose from class names
          if (button.classList.contains('close')) {
            button.setAttribute('aria-label', 'Close');
          } else if (button.classList.contains('minimize')) {
            button.setAttribute('aria-label', 'Minimize chat');
          } else if (button.classList.contains('send')) {
            button.setAttribute('aria-label', 'Send message');
          }
        }
      });
    });
  });

  // Start observing the document body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also run once immediately in case the widget is already loaded
  setTimeout(() => {
    const closeButton = document.querySelector('.lc_text-widget_prompt--prompt-close');
    if (closeButton && !closeButton.getAttribute('aria-label')) {
      closeButton.setAttribute('aria-label', 'Close chat');
      closeButton.setAttribute('title', 'Close chat');
    }
  }, 2000);
}