// Analytics & Event Tracking Module
class Analytics {
    constructor() {
        this.events = [];
        this.sessionStart = new Date();
        this.maxEvents = 500;
    }

    trackEvent(eventName, data = {}) {
        const event = {
            timestamp: new Date().toISOString(),
            eventName,
            data,
            sessionDuration: Date.now() - this.sessionStart.getTime()
        };
        this.events.push(event);

        if (this.events.length > this.maxEvents) {
            this.events.shift();
        }

        console.log(`Event tracked: ${eventName}`, data);
    }

    trackPageView(page) {
        this.trackEvent('page_view', { page });
    }

    trackUserAction(action, target) {
        this.trackEvent('user_action', { action, target });
    }

    trackApiCall(endpoint, status, duration) {
        this.trackEvent('api_call', { endpoint, status, duration });
    }

    trackError(errorMessage, context) {
        this.trackEvent('error', { errorMessage, context });
    }

    getSessionMetrics() {
        const sessionDuration = Date.now() - this.sessionStart.getTime();
        const eventCount = this.events.length;
        const errorCount = this.events.filter(e => e.eventName === 'error').length;

        return {
            sessionDuration,
            eventCount,
            errorCount,
            startTime: this.sessionStart.toISOString()
        };
    }

    exportEvents() {
        return JSON.stringify({
            metrics: this.getSessionMetrics(),
            events: this.events
        }, null, 2);
    }
}

const analytics = new Analytics();
window.analytics = analytics;