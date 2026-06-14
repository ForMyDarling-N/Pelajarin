// Error Handling Module
class ErrorHandler {
    constructor() {
        this.maxRetries = 3;
        this.retryDelay = 1000;
        this.timeout = 15000;
        this.errorLog = [];
    }

    async fetchWithRetry(url, options = {}, retryCount = 0) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);

            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            this.logError(error, url);

            if (retryCount < this.maxRetries) {
                console.warn(`Retry attempt ${retryCount + 1}/${this.maxRetries} untuk ${url}`);
                await new Promise(resolve => setTimeout(resolve, this.retryDelay * (retryCount + 1)));
                return this.fetchWithRetry(url, options, retryCount + 1);
            }

            throw new Error(`Gagal mengambil data setelah ${this.maxRetries} percobaan: ${error.message}`);
        }
    }

    logError(error, context = '') {
        const errorEntry = {
            timestamp: new Date().toISOString(),
            message: error.message,
            context,
            stack: error.stack
        };
        this.errorLog.push(errorEntry);
        console.error('Error logged:', errorEntry);
    }

    getErrorLog() {
        return this.errorLog.slice(-50); // Last 50 errors
    }

    clearErrorLog() {
        this.errorLog = [];
    }
}

const errorHandler = new ErrorHandler();
window.errorHandler = errorHandler;