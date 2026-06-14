# API Reference - Pelajarin V3 PRO

## Authentication Module

### `authManager.generateToken(userId)`
Generates a new authentication token.

**Parameters:**
- `userId` (string): Unique user identifier

**Returns:** Token string

**Example:**
```javascript
const token = authManager.generateToken('user123');
```

### `authManager.verifyToken()`
Verifies if the current token is valid.

**Returns:** `{ token, userId }` or `null`

### `authManager.isAuthenticated()`
Checks if user is authenticated.

**Returns:** Boolean

### `authManager.logout()`
Clears authentication and session data.

---

## Validation Module

### `validator.validateEmail(email)`
Validates email format.

**Returns:** Boolean

### `validator.validateUsername(username)`
Validates username (3-50 chars, alphanumeric + underscore/dash).

**Returns:** `{ valid: boolean, error?: string }`

### `validator.validateName(name)`
Validates name (3-100 chars, letters + spaces/hyphens).

**Returns:** `{ valid: boolean, error?: string }`

### `validator.sanitizeInput(input)`
Sanitizes HTML/XSS threats from input.

**Returns:** Sanitized string

---

## Error Handler Module

### `errorHandler.fetchWithRetry(url, options, retryCount)`
Makes HTTP request with automatic retry.

**Parameters:**
- `url` (string): API endpoint
- `options` (object): Fetch options
- `retryCount` (number): Current retry attempt

**Features:**
- 3 automatic retries
- 15 second timeout
- Exponential backoff
- Error logging

**Example:**
```javascript
try {
  const data = await errorHandler.fetchWithRetry('/api/endpoint');
} catch (error) {
  console.error('Failed after retries:', error);
}
```

### `errorHandler.logError(error, context)`
Logs error for debugging.

### `errorHandler.getErrorLog()`
Retrieves last 50 logged errors.

---

## Analytics Module

### `analytics.trackEvent(eventName, data)`
Tracks custom event.

**Example:**
```javascript
analytics.trackEvent('quiz_completed', {
  score: 85,
  duration: 1200
});
```

### `analytics.trackPageView(page)`
Tracks page navigation.

### `analytics.trackApiCall(endpoint, status, duration)`
Tracks API performance.

### `analytics.getSessionMetrics()`
Gets current session metrics.

**Returns:**
```javascript
{
  sessionDuration: 120000,
  eventCount: 25,
  errorCount: 2,
  startTime: '2026-06-14T10:30:00Z'
}
```

### `analytics.exportEvents()`
Exports all events as JSON.

---

## Notification Manager

### `notificationManager.success(message, duration)`
Shows success toast.

### `notificationManager.error(message, duration)`
Shows error toast.

### `notificationManager.warning(message, duration)`
Shows warning toast.

### `notificationManager.info(message, duration)`
Shows info toast.

**Example:**
```javascript
notificationManager.success('Kuis diselesaikan!', 3000);
notificationManager.error('Koneksi gagal', 5000);
```

---

## Storage Manager

### `storageManager.save(data)`
Saves data with automatic backup.

**Returns:** `{ success: boolean, error?: string }`

### `storageManager.load()`
Loads saved data.

**Returns:** Data object or null

### `storageManager.getBackups()`
Lists all backups (max 5).

### `storageManager.restoreFromBackup(timestamp)`
Restores from specific backup.

**Example:**
```javascript
const backups = storageManager.getBackups();
storageManager.restoreFromBackup(backups[0].timestamp);
```

---

## Scoring Engine

### `scoringEngine.scoreMultipleChoice(questionNum, userAnswer)`
Scores multiple choice answer.

**Returns:** 0 or 20 points

### `scoringEngine.scoreEssay(answer)`
Scores essay answer based on length and quality.

**Returns:** 0-20 points

### `scoringEngine.calculateGPA(scores)`
Calculates GPA from array of scores.

**Returns:** 0.0-4.0

### `scoringEngine.getLetterGrade(score)`
Converts numeric score to letter grade.

**Returns:** 'A', 'B', 'C', 'D', or 'E'

**Grading Scale:**
- A: 85-100
- B: 75-84
- C: 65-74
- D: 55-64
- E: 0-54

---

## Accessibility Manager

### `accessibilityManager.init()`
Initializes accessibility features.

### `accessibilityManager.announce(message)`
Announces message to screen readers.

### `accessibilityManager.setFontSize(size)`
Changes font size (pixels).

### `accessibilityManager.toggleHighContrast()`
Toggles high contrast mode.

---

## Examples

### Complete User Flow
```javascript
// 1. Generate token on login
const token = authManager.generateToken('user123');

// 2. Save user data
const userData = {
  name: 'John Doe',
  major: 'Teknik Informatika',
  semester: 1
};
storageManager.save(userData);
notificationManager.success('Data tersimpan!');

// 3. Track event
analytics.trackEvent('login', { userId: 'user123' });

// 4. Load data later
const saved = storageManager.load();

// 5. Export session on logout
const exportedData = analytics.exportEvents();
console.log(exportedData);

// 6. Verify auth before action
if (authManager.isAuthenticated()) {
  // Proceed with action
}
```

### Error Handling Example
```javascript
try {
  const data = await errorHandler.fetchWithRetry(
    'https://api.siputzx.my.id/api/ai/glm47flash?prompt=test'
  );
  notificationManager.success('Data loaded!');
} catch (error) {
  notificationManager.error(error.message);
  analytics.trackError(error.message, 'api_call');
}
```
