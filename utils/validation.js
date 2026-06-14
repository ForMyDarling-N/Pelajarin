// Input Validation Module
class ValidationManager {
    constructor() {
        this.rules = {
            username: { minLength: 3, maxLength: 50, pattern: /^[a-zA-Z0-9_-]+$/ },
            email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            text: { minLength: 1, maxLength: 1000 },
            name: { minLength: 3, maxLength: 100, pattern: /^[a-zA-Z\s'-]+$/ }
        };
    }

    validateEmail(email) {
        return this.rules.email.pattern.test(email);
    }

    validateUsername(username) {
        const rule = this.rules.username;
        if (username.length < rule.minLength || username.length > rule.maxLength) {
            return { valid: false, error: `Username harus 3-50 karakter` };
        }
        if (!rule.pattern.test(username)) {
            return { valid: false, error: 'Username hanya bisa mengandung huruf, angka, underscore, dan dash' };
        }
        return { valid: true };
    }

    validateName(name) {
        const rule = this.rules.name;
        if (name.length < rule.minLength || name.length > rule.maxLength) {
            return { valid: false, error: `Nama harus 3-100 karakter` };
        }
        if (!rule.pattern.test(name)) {
            return { valid: false, error: 'Nama hanya bisa mengandung huruf, spasi, dan tanda hubung' };
        }
        return { valid: true };
    }

    validateTextInput(text) {
        const rule = this.rules.text;
        if (text.length < rule.minLength || text.length > rule.maxLength) {
            return { valid: false, error: `Input harus 1-1000 karakter` };
        }
        return { valid: true };
    }

    sanitizeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    sanitizeInput(input) {
        return input.trim().replace(/[<>"']/g, (char) => {
            const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
            return entities[char];
        });
    }
}

const validator = new ValidationManager();
window.validator = validator;