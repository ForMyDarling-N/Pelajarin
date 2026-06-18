// Authentication Module
class AuthManager {
    constructor() {
        this.authKey = 'pelajarin_auth_token';
        this.sessionKey = 'pelajarin_session';
        this.tokenExpiry = 24 * 60 * 60 * 1000; // 24 hours
    }

    generateToken(userId) {
        const token = `${userId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const expiryTime = Date.now() + this.tokenExpiry;
        localStorage.setItem(this.authKey, JSON.stringify({ token, expiryTime, userId }));
        return token;
    }

    verifyToken() {
        const authData = localStorage.getItem(this.authKey);
        if (!authData) return null;
        
        try {
            const { token, expiryTime, userId } = JSON.parse(authData);
            if (Date.now() > expiryTime) {
                this.logout();
                return null;
            }
            return { token, userId };
        } catch (err) {
            console.error('Token verification failed:', err);
            return null;
        }
    }

    logout() {
        localStorage.removeItem(this.authKey);
        localStorage.removeItem('pelajarin_v3_girly_disk');
    }

    isAuthenticated() {
        return this.verifyToken() !== null;
    }
}

const authManager = new AuthManager();
window.authManager = authManager;