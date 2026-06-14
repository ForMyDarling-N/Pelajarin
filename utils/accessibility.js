// Accessibility Module
class AccessibilityManager {
    constructor() {
        this.keyboardShortcuts = {
            'Alt+H': 'goHome',
            'Alt+L': 'toggleLayout',
            'Alt+D': 'toggleDarkMode',
            'Alt+?': 'showHelp'
        };
        this.ariaLiveRegion = null;
    }

    init() {
        this.createAriaLiveRegion();
        this.setupKeyboardShortcuts();
        this.improveSemantics();
    }

    createAriaLiveRegion() {
        if (this.ariaLiveRegion) return;
        this.ariaLiveRegion = document.createElement('div');
        this.ariaLiveRegion.setAttribute('aria-live', 'polite');
        this.ariaLiveRegion.setAttribute('aria-atomic', 'true');
        this.ariaLiveRegion.className = 'sr-only';
        document.body.appendChild(this.ariaLiveRegion);
    }

    announce(message) {
        if (this.ariaLiveRegion) {
            this.ariaLiveRegion.textContent = message;
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            const combination = `${e.altKey ? 'Alt+' : ''}${e.shiftKey ? 'Shift+' : ''}${e.key.toUpperCase()}`;
            if (this.keyboardShortcuts[combination]) {
                e.preventDefault();
                this.executeShortcut(this.keyboardShortcuts[combination]);
            }
        });
    }

    executeShortcut(command) {
        console.log(`Executing shortcut: ${command}`);
        this.announce(`Shortcut executed: ${command}`);
    }

    improveSemantics() {
        // Add ARIA labels to interactive elements
        document.querySelectorAll('button:not([aria-label])').forEach((btn, idx) => {
            if (!btn.textContent.trim()) {
                btn.setAttribute('aria-label', `Button ${idx}`);
            }
        });

        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'sr-only focus:not-sr-only';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    setFontSize(size) {
        document.documentElement.style.fontSize = size + 'px';
        localStorage.setItem('accessibility_font_size', size);
    }

    toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('accessibility_high_contrast', document.body.classList.contains('high-contrast'));
    }
}

const accessibilityManager = new AccessibilityManager();
window.accessibilityManager = accessibilityManager;