# Pelajarin V3 PRO - Platform Pendidikan Interaktif

## 🎓 Deskripsi

Pelajarin adalah platform pembelajaran interaktif berbasis web yang dirancang untuk mahasiswa sarjana. Platform ini menyediakan pengalaman belajar yang menyenangkan dengan fitur chat interaktif dengan AI tutor, modul pembelajaran, kuis, dan tracking akademik.

## ✨ Fitur Utama

### Core Features
- 📚 **Pembelajaran Interaktif**: Chat dengan AI tutor (Mbak You) untuk setiap mata kuliah
- 📖 **Modul Pembelajaran**: Materi komprehensif dengan visual dan video
- 🧪 **Sistem Kuis**: Multiple choice dan essay questions dengan penilaian otomatis
- 📊 **Dashboard Akademik**: Tracking IPK, SKS, presensi, dan progress semester
- 🎨 **Multiple Themes**: Pilihan tema (Manly, Girly, Soft)

### Enhanced Features (v3.1)
- 🔐 **Authentication System**: Token-based authentication dengan expiry management
- ✅ **Input Validation**: Validasi input komprehensif dengan sanitasi HTML
- 🔄 **Advanced Error Handling**: Retry logic, timeout handling, error logging
- 📊 **Analytics & Tracking**: Event tracking, session metrics, dan performance monitoring
- 🔔 **Toast Notifications**: Non-intrusive notifications untuk user feedback
- 💾 **Backup System**: Automatic data backup dengan restore capabilities
- 🎯 **Advanced Scoring**: Sophisticated scoring algorithm dengan GPA calculation
- ♿ **Accessibility**: ARIA labels, keyboard shortcuts, high contrast mode
- 🎨 **UI/UX Improvements**: Loading skeletons, better focus indicators, smooth transitions

## 📋 Struktur Project

```
Pelajarin/
├── index.html              # Main HTML entry point
├── index.js                # Main application logic
├── utils/
│   ├── auth.js             # Authentication management
│   ├── validation.js       # Input validation & sanitization
│   ├── errorHandler.js     # Error handling & retry logic
│   ├── analytics.js        # Analytics & event tracking
│   ├── notification.js     # Toast notification system
│   ├── storage.js          # Advanced storage & backup
│   ├── scoring.js          # Advanced scoring engine
│   └── accessibility.js    # Accessibility features
├── styles/
│   └── enhancements.css    # Enhanced styles
├── vercel.json             # Vercel configuration
└── README.md              # This file
```

## 🚀 Cara Menggunakan

### 1. Registration
- Klik tombol "Daftar Mahasiswa" di halaman landing
- Masukkan nama lengkap
- Pilih program studi (Teknik Informatika, Manajemen, Akuntansi, Psikologi, Hukum)
- Sistem akan membuat akun dan menampilkan dashboard

### 2. Dashboard
- Lihat IPK, SKS, beban kuliah, dan presensi
- Pilih mata kuliah untuk mulai belajar
- Ganti semester dengan dropdown semester
- Isi presensi harian

### 3. Classroom (Learning)
- **Ambil Modul**: Download materi pembelajaran komprehensif
- **Kuis**: Uji pemahaman dengan 5 soal (3 pilihan ganda + 2 esai)
- **Chat**: Tanyakan pertanyaan ke Mbak You
- **Text-to-Speech**: Dengarkan penjelasan Mbak You
- **Speech-to-Text**: Gunakan voice input untuk pesan

## 🔐 Security Features

### Authentication
- Token-based authentication dengan 24-hour expiry
- Session management
- Secure logout

### Input Validation
- Email validation
- Username validation (3-50 chars, alphanumeric + underscore/dash)
- Name validation (3-100 chars, letters + spaces/hyphens)
- Text input limits (1-1000 chars)
- HTML sanitization untuk mencegah XSS

### Error Handling
- Automatic retry dengan exponential backoff (max 3 retries)
- Request timeout (15 seconds)
- Comprehensive error logging
- User-friendly error messages

## 📊 Analytics

Sistem mencatat:
- Page views
- User actions
- API calls dan response times
- Errors dengan context
- Session metrics (duration, event count)

### Akses Analytics
```javascript
window.analytics.getSessionMetrics()  // Get current metrics
window.analytics.exportEvents()        // Export all events
```

## 💾 Data Storage

Semua data disimpan di browser localStorage:
- User profile (nama, jurusan, semester)
- Academic data (IPK, SKS, presensi)
- Classroom sessions (chat history, modul status, kuis scores)
- Automatic backup creation

### Backup & Restore
```javascript
window.storageManager.getBackups()              // List all backups
window.storageManager.restoreFromBackup(time)   // Restore from specific backup
```

## 🎯 Scoring System

### Multiple Choice
- 1 soal = 20 poin
- Correct answers: A, C, B, D, A (for questions 1-5)

### Essay
- Scoring berdasarkan:
  - Panjang jawaban (min 50, good 150, excellent 300 chars)
  - Structure (multiple sentences)
  - Keyword usage (sebab, melalui, dll)
  - Analysis indicators (analisis, kesimpulan, dll)

### GPA Calculation
- Score dikonversi ke GPA (0.0 - 4.0)
- Weighted average dari semua kuis

## ♿ Accessibility

### Features
- ARIA live regions untuk announcements
- Keyboard shortcuts (Alt+H, Alt+L, Alt+D, Alt+?)
- Screen reader friendly
- High contrast mode
- Focus indicators
- Semantic HTML

### Keyboard Shortcuts
- `Alt+H`: Go to home
- `Alt+L`: Toggle layout
- `Alt+D`: Toggle dark mode
- `Alt+?`: Show help

## 🛠️ Development

### Tech Stack
- **Frontend**: HTML5, CSS3 (Tailwind CSS via CDN), JavaScript (ES6+)
- **UI Components**: SweetAlert2 for modals
- **Icons**: FontAwesome 6.5.1
- **Fonts**: Plus Jakarta Sans, JetBrains Mono
- **API**: GLM-4-Flash (via siputzx API)

### Browser Support
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### API Integration
```javascript
// Endpoint
https://api.siputzx.my.id/api/ai/glm47flash

// Usage
const response = await errorHandler.fetchWithRetry(url, options);
```

## 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS responsive classes
- Touch-friendly interfaces
- Optimized for devices 320px+

## 🐛 Troubleshooting

### Session tidak tersimpan
- Clear browser cache: Ctrl+Shift+Delete
- Cek localStorage: F12 > Application > LocalStorage
- Gunakan restore backup: `storageManager.restoreFromBackup()`

### AI tutor tidak respond
- Check internet connection
- Verify API endpoint availability
- Check browser console for errors: F12 > Console
- Retry akan otomatis berjalan 3x

### Scoring tidak akurat
- Reload halaman
- Check answer key di `scoringEngine.correctAnswers`

## 📞 Support

Untuk pertanyaan atau issues:
1. Check error log: `errorHandler.getErrorLog()`
2. Export session: `analytics.exportEvents()`
3. Contact developer dengan logs tersebut

## 📄 License

MIT License - Feel free to use and modify

## 👨‍💻 Developer

Created by ForMyDarling-N
Last Updated: June 2026

---

**Selamat Belajar! 📚✨**
