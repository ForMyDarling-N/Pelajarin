// Toast & Notification System
class NotificationManager {
    constructor() {
        this.notifications = [];
        this.maxNotifications = 5;
        this.defaultDuration = 3000;
    }

    createToast(message, type = 'info', duration = this.defaultDuration) {
        const id = `toast-${Date.now()}`;
        const notification = { id, message, type, duration, timestamp: Date.now() };
        this.notifications.push(notification);

        if (this.notifications.length > this.maxNotifications) {
            this.notifications.shift();
        }

        this.renderToasts();

        if (duration > 0) {
            setTimeout(() => this.removeToast(id), duration);
        }

        return id;
    }

    success(message, duration) {
        return this.createToast(message, 'success', duration);
    }

    error(message, duration) {
        return this.createToast(message, 'error', duration);
    }

    warning(message, duration) {
        return this.createToast(message, 'warning', duration);
    }

    info(message, duration) {
        return this.createToast(message, 'info', duration);
    }

    removeToast(id) {
        this.notifications = this.notifications.filter(n => n.id !== id);
        this.renderToasts();
    }

    renderToasts() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed top-4 right-4 z-[999] space-y-2 max-w-sm';
            document.body.appendChild(container);
        }

        container.innerHTML = this.notifications.map(notification => `
            <div class="toast toast-${notification.type} p-4 rounded-lg shadow-lg animate-slideInRight text-sm">
                <div class="flex items-center gap-2">
                    <span>${this.getIcon(notification.type)}</span>
                    <span>${notification.message}</span>
                    <button onclick="window.notificationManager.removeToast('${notification.id}')" class="ml-auto text-xs opacity-60 hover:opacity-100">✕</button>
                </div>
            </div>
        `).join('');
    }

    getIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || '●';
    }
}

const notificationManager = new NotificationManager();
window.notificationManager = notificationManager;