// Advanced Storage & Backup Module
class StorageManager {
    constructor() {
        this.storageKey = 'pelajarin_v3_enhanced';
        this.backupKey = 'pelajarin_backups';
        this.maxBackups = 5;
    }

    save(data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(this.storageKey, serialized);
            this.createBackup(data);
            return { success: true };
        } catch (error) {
            console.error('Storage save failed:', error);
            return { success: false, error: error.message };
        }
    }

    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Storage load failed:', error);
            return null;
        }
    }

    createBackup(data) {
        try {
            let backups = this.getBackups();
            backups.unshift({
                timestamp: new Date().toISOString(),
                data: JSON.stringify(data)
            });

            if (backups.length > this.maxBackups) {
                backups = backups.slice(0, this.maxBackups);
            }

            localStorage.setItem(this.backupKey, JSON.stringify(backups));
        } catch (error) {
            console.warn('Backup creation failed:', error);
        }
    }

    getBackups() {
        try {
            const backups = localStorage.getItem(this.backupKey);
            return backups ? JSON.parse(backups) : [];
        } catch (error) {
            console.error('Failed to retrieve backups:', error);
            return [];
        }
    }

    restoreFromBackup(timestamp) {
        try {
            const backups = this.getBackups();
            const backup = backups.find(b => b.timestamp === timestamp);
            if (backup) {
                const data = JSON.parse(backup.data);
                this.save(data);
                return { success: true, data };
            }
            return { success: false, error: 'Backup not found' };
        } catch (error) {
            console.error('Restore failed:', error);
            return { success: false, error: error.message };
        }
    }

    clear() {
        localStorage.removeItem(this.storageKey);
    }
}

const storageManager = new StorageManager();
window.storageManager = storageManager;