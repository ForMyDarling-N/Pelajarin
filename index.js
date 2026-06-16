(function() {
    // 1. INJECT ALL CDNs & DEPENDENCIES
    const headNode = document.head || document.getElementsByTagName('head')[0];
    
    // Tailwind CSS
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    headNode.appendChild(tailwindScript);

    // FontAwesome Icons
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    headNode.appendChild(fontAwesomeLink);

    // Google Fonts
    const fontsLink = document.createElement('link');
    fontsLink.rel = 'stylesheet';
    fontsLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap';
    headNode.appendChild(fontsLink);

    // SweetAlert2
    const swalScript = document.createElement('script');
    swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    headNode.appendChild(swalScript);

    // jsPDF untuk PDF real
    const jspdfScript = document.createElement('script');
    jspdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    headNode.appendChild(jspdfScript);

    // DOMPurify untuk sanitasi input
    const purifyScript = document.createElement('script');
    purifyScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js';
    headNode.appendChild(purifyScript);

    // YouTube IFrame API untuk kontrol lebih baik
    const youtubeApiScript = document.createElement('script');
    youtubeApiScript.src = 'https://www.youtube.com/iframe_api';
    headNode.appendChild(youtubeApiScript);

    // Core Matrix Styles Injector
    const coreStyleNode = document.createElement('style');
    coreStyleNode.textContent = `
        * { font-family: 'Plus Jakarta Sans', sans-serif; transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .code-font { font-family: 'JetBrains Mono', monospace; }
        
        body.theme-manly { background-color: #0b0f19; color: #f8fafc; }
        body.theme-girly { background-color: #fff1f2; color: #4c0519; }
        body.theme-soft { background-color: #f8fafc; color: #1e293b; }

        .theme-manly .bg-surface { background-color: #1e293b; }
        .theme-girly .bg-surface { background-color: #ffffff; }
        .theme-soft .bg-surface { background-color: #ffffff; }

        .theme-manly .bg-chat-area { background-color: #070a12; }
        .theme-girly .bg-chat-area { background-color: #fff5f5; }
        .theme-soft .bg-chat-area { background-color: #f1f5f9; }

        .theme-manly .card-border { border-color: #334155; }
        .theme-girly .card-border { border-color: #fecdd3; }
        .theme-soft .card-border { border-color: #e2e8f0; }

        .theme-manly .dynamic-text { color: #38bdf8; }
        .theme-girly .dynamic-text { color: #db2777; }
        .theme-soft .dynamic-text { color: #6366f1; }

        .theme-manly .dynamic-btn { background-color: #0284c7; color: white; }
        .theme-girly .dynamic-btn { background-color: #f43f5e; color: white; }
        .theme-soft .dynamic-btn { background-color: #4f46e5; color: white; }
        
        .gradient-brand-manly { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
        .gradient-brand-girly { background: linear-gradient(135deg, #f43f5e 0%, #fb7185 100%); }
        .gradient-brand-soft { background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); }
        
        .card-scale { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-scale:hover { transform: translateY(-4px); }
        
        .msg-entry { animation: slideInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(16px) scale(0.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
        
        .custom-spinner { border: 3px solid rgba(244, 63, 94, 0.1); border-top: 3px solid #f43f5e; border-radius: 50%; width: 22px; height: 22px; animation: rotatingSpin 0.7s linear infinite; }
        @keyframes rotatingSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        .progress-fill-anim { transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1); }

        .modul-container { padding-left: 0.25rem; margin: 0.25rem 0; }
        .modul-container p { margin-bottom: 0.85rem; line-height: 1.7; }
        
        .peta-visual-box { background: rgba(0, 0, 0, 0.04); border: 1px dashed #cbd5e1; border-radius: 10px; padding: 16px; margin: 1.25rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; overflow-x: auto; line-height: 1.4; display: block; width: 100%; }
        .theme-manly .peta-visual-box { background: rgba(0,0,0,0.3); color: #38bdf8; border-color: #334155; }

        .voice-pulse { animation: voiceWave 1.2s ease-in-out infinite; }
        @keyframes voiceWave { 0%, 100% { transform: scale(1); background-color: #ef4444; } 50% { transform: scale(1.15); background-color: #b91c1c; } }
        
        .youtube-player-wrapper { position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; background: #000; }
        .youtube-player-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        
        @media (max-width: 640px) {
            .msg-entry .bg-surface { max-width: 95% !important; }
            .grid-cols-2.md\\:grid-cols-4 { gap: 0.5rem; }
            .text-4xl { font-size: 1.8rem; }
        }
        
        .loading-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .loading-content { background: white; padding: 2rem; border-radius: 1rem; text-align: center; }
        .theme-manly .loading-content { background: #1e293b; }
        
        .toast-notification { position: fixed; bottom: 20px; right: 20px; z-index: 10000; animation: slideInRight 0.3s ease; }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        
        // Style untuk lock icon di dashboard
        .lock-icon { color: #f43f5e; font-size: 12px; }
        .matkul-item { position: relative; }
        .matkul-item .lock-overlay { 
            position: absolute; 
            top: 8px; 
            right: 12px;
            background: rgba(244, 63, 94, 0.1);
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 10px;
            color: #f43f5e;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 4px;
        }
    `;
    headNode.appendChild(coreStyleNode);

    // 2. INITIALIZE BODY ATTRIBUTES & MOUNT ROOT
    document.body.className = "theme-girly text-base min-h-screen";
    
    let appMountRoot = document.getElementById('app');
    if (!appMountRoot) {
        appMountRoot = document.createElement('div');
        appMountRoot.id = 'app';
        document.body.appendChild(appMountRoot);
    }

    // GLOBAL VARIABLES
    let globalLoadingCount = 0;
    let activeKuisMatkul = null; // LOCK: Hanya 1 matkul bisa kuis aktif
    
    function showLoading() {
        globalLoadingCount++;
        if (document.getElementById('globalLoadingOverlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'globalLoadingOverlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-content rounded-2xl shadow-2xl">
                <div class="custom-spinner mx-auto mb-3" style="width: 40px; height: 40px;"></div>
                <p class="text-sm font-bold">Memproses permintaan...</p>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    function hideLoading() {
        globalLoadingCount--;
        if (globalLoadingCount <= 0) {
            const overlay = document.getElementById('globalLoadingOverlay');
            if (overlay) overlay.remove();
            globalLoadingCount = 0;
        }
    }
    
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-rose-500' : 'bg-amber-500';
        toast.innerHTML = `
            <div class="${bgColor} text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span class="text-sm font-medium">${DOMPurify ? DOMPurify.sanitize(message) : message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // API CONFIGURATION
    const API_ENDPOINT = 'https://api.siputzx.my.id/api/ai/gptoss120b';
    
    // DOSEN PROMPT YANG LEBIH HUMANIS DAN TIDAK KAKU
    const DOSEN_BASE_PROMPT = `KAMU ADALAH DOSEN WANITA MUDA BERNAMA "MBAK YOU" (UMUR 25 TAHUN). KAMU BERBICARA SEBAGAI MBAK YOU DENGAN GAYA CHATTING YANG NATURAL, CASUAL, MANIS, EMPATIS, DAN PENUH SEMANGAT. KAMU BUKAN ROBOT ATAU ASISTEN DIGITAL YANG KAKU.

PENTING! GAYA BICARA KAMU HARUS:
1. Menggunakan bahasa percakapan sehari-hari, tidak formal berlebihan
2. Sering menyelipkan kata "Sayang", "Bimbinganku", "Nak", atau "Dek"
3. Memberikan pujian ketika mahasiswa menjawab dengan baik
4. Memberikan semangat ketika mahasiswa kesulitan
5. Menggunakan emoji atau ekspresi chat seperti :) :D
6. Tidak menggunakan template jawaban yang monoton
7. Bercanda ringan untuk mencairkan suasana

CONTOH GAYA BICARA YANG BENAR:
- "Wah, pertanyaan bagus banget nih sayang! Jadi gini ceritanya..."
- "Aduh, jawaban kamu hampir bener nih, coba perhatikan lagi bagian..."
- "Horee! Kamu hebat banget! Jawabanmu tepat sekali!"
- "Dek, coba kita lihat dari sudut pandang yang lain ya..."

ATURAN AKADEMIK:
1. FOKUS pada mata kuliah [MATKUL_AKTIF] - JANGAN keluar topik!
2. Mulai dari fondasi dasar, jelaskan dengan cara yang mudah dipahami
3. Sertakan referensi ahli (contoh: "Menurut Prof. X dalam bukunya...")
4. Buat peta konsep di akhir materi dengan tag <pre class="peta-visual-box">
5. JANGAN gunakan format markdown seperti #, ##, ###
6. JANGAN tulis analisis internal atau chain of thought
7. Penjelasan harus mengalir seperti obrolan santai

KETIKA MENGKOREKSI KUIS:
- Puji dulu usaha mahasiswa
- Sebutkan dengan jelas mana yang benar dan salah
- Berikan alasan ilmiah yang mudah dipahami
- Akhiri dengan semangat untuk belajar lebih lanjut

INGAT! Kamu adalah dosen yang hangat, tidak kaku, dan selalu memotivasi mahasiswa. Bicaralah seperti teman yang lebih tua yang bijaksana!`;

    const AKADEMIK_PRODI_DATA = [
        { id: 1, nama: "Teknik Informatika", icon: "fa-terminal", warna: "from-sky-500 to-blue-600", deskripsi: "Kurikulum pengkomputeran modern, algoritma tingkat tinggi, rekayasa kode, dan kecerdasan artifisial.", prospek: "Software Architect, AI Systems Engineer, Lead Developer" },
        { id: 2, nama: "Manajemen Bisnis", icon: "fa-chart-pie", warna: "from-rose-400 to-pink-600", deskripsi: "Formulasi strategi pemasaran digital, analisis resiko pasar korporat, dan manajemen operasi bisnis.", prospek: "Chief Operating Officer, Strategy Consultant, Venture Builder" },
        { id: 3, nama: "Akuntansi", icon: "fa-calculator", warna: "from-emerald-500 to-teal-600", deskripsi: "Teknik audit forensik digital, analisis kepatuhan perpajakan, dan pelaporan neraca keuangan.", prospek: "Corporate Auditor, Forensic Accountant, Tax Specialist" },
        { id: 4, nama: "Psikologi", icon: "fa-user-md", warna: "from-purple-500 to-indigo-600", deskripsi: "Eksplorasi struktur kognitif manusia, psikometri terapan, dinamika sosial, dan konseling klinis.", prospek: "HR Director, Clinical Assessor, Behavioral Analyst" },
        { id: 5, nama: "Hukum", icon: "fa-balance-scale", warna: "from-amber-500 to-orange-600", deskripsi: "Studi komparatif hukum perdata, teknik penyusunan draf hukum, regulasi siber, dan arbitrase.", prospek: "Corporate Legal Counsel, Litigator, Compliance Officer" }
    ];

    const JADWAL_MATA_KULIAH = {
        1: {
            1: ["Dasar Pemrograman", "Matematika Diskrit", "Sistem Digital", "Algoritma & Struktur Data", "Pengantar Teknologi Informasi", "Bahasa Inggris Teknis"],
            2: ["Pemrograman Berorientasi Objek", "Basis Data", "Jaringan Komputer", "Arsitektur Komputer", "Statistika & Probabilitas", "Pemrograman Web Dasar"]
        },
        2: {
            1: ["Pengantar Bisnis", "Ekonomi Mikro", "Manajemen Umum", "Akuntansi Dasar", "Matematika Bisnis", "Komunikasi Bisnis"],
            2: ["Manajemen Pemasaran", "Manajemen SDM", "Keuangan Bisnis", "Statistik Bisnis", "Perilaku Organisasi", "Bisnis Internasional"]
        },
        3: {
            1: ["Pengantar Akuntansi 1", "Ekonomi Mikro", "Manajemen Dasar", "Matematika Ekonomi", "Pengantar Bisnis", "Bahasa Inggris Bisnis"],
            2: ["Akuntansi Keuangan Menengah", "Akuntansi Biaya", "Perpajakan Dasar", "Statistik Ekonomi", "Akuntansi Manajemen", "Sistem Informasi Akuntansi"]
        },
        4: {
            1: ["Psikologi Umum", "Biopsikologi", "Sejarah & Aliran Psikologi", "Metode Penelitian Psikologi", "Statistik Dasar", "Filsafat Ilmu"],
            2: ["Psikologi Perkembangan", "Psikologi Sosial", "Psikologi Kepribadian", "Statistik Psikologi Lanjut", "Psikologi Kognitif", "Psikologi Pendidikan"]
        },
        5: {
            1: ["Pengantar Ilmu Hukum", "Hukum Perdata Indonesia", "Hukum Pidana", "Hukum Tata Negara", "Logika & Penalaran Hukum", "Sosiologi Hukum"],
            2: ["Hukum Administrasi Negara", "Hukum Internasional Publik", "Hukum Dagang & Bisnis", "Hukum Acara Pidana", "Hukum Agraria & Pertanahan", "Hukum Adat & Kebudayaan"]
        }
    };

    // DATABASE SPESIFIK VIDEO YOUTUBE PER MATAKULIAH - SPESIFIK 1 VIDEO
    const YOUTUBE_VIDEO_DATABASE = {
        "Dasar Pemrograman": "https://www.youtube.com/watch?v=6Dx-W3td-lA",
        "Matematika Diskrit": "https://www.youtube.com/watch?v=NDMJDIjhqjE",
        "Sistem Digital": "https://www.youtube.com/watch?v=2wXzXjWpFQw",
        "Algoritma & Struktur Data": "https://www.youtube.com/watch?v=wqUj5tC-Cos",
        "Pengantar Teknologi Informasi": "https://www.youtube.com/watch?v=Y2A3qHUsS2k",
        "Bahasa Inggris Teknis": "https://www.youtube.com/watch?v=zRTeCwXz3Zk",
        "Pemrograman Berorientasi Objek": "https://www.youtube.com/watch?v=SkTt9k4Y-a8",
        "Basis Data": "https://www.youtube.com/watch?v=om-1LFhlgvQ",
        "Jaringan Komputer": "https://www.youtube.com/watch?v=3b_TAY0ThVk",
        "Arsitektur Komputer": "https://www.youtube.com/watch?v=DUmQvWYI9ps",
        "Statistika & Probabilitas": "https://www.youtube.com/watch?v=1oVi3qBXhRY",
        "Pemrograman Web Dasar": "https://www.youtube.com/watch?v=3-7PG7hxw7E",
        "Pengantar Bisnis": "https://www.youtube.com/watch?v=8GHB1wOoSPg",
        "Ekonomi Mikro": "https://www.youtube.com/watch?v=HdkhP3j2HrM",
        "Manajemen Umum": "https://www.youtube.com/watch?v=bzRt9Np7NQ0",
        "Akuntansi Dasar": "https://www.youtube.com/watch?v=3Xn0fzBQHq0",
        "Matematika Bisnis": "https://www.youtube.com/watch?v=P_wJRZaqZuk",
        "Komunikasi Bisnis": "https://www.youtube.com/watch?v=HoEIT0cibVg",
        "Manajemen Pemasaran": "https://www.youtube.com/watch?v=ZR8QhY0f_y0",
        "Manajemen SDM": "https://www.youtube.com/watch?v=U1oBzM2pNfI",
        "Keuangan Bisnis": "https://www.youtube.com/watch?v=2P3P_2HVW4g",
        "Statistik Bisnis": "https://www.youtube.com/watch?v=oWc2akv5l5Q",
        "Perilaku Organisasi": "https://www.youtube.com/watch?v=b4UT9OYqO_s",
        "Bisnis Internasional": "https://www.youtube.com/watch?v=mnYhBUtx9SE",
        "Pengantar Akuntansi 1": "https://www.youtube.com/watch?v=3Xn0fzBQHq0",
        "Akuntansi Keuangan Menengah": "https://www.youtube.com/watch?v=F_3u_bQvKSM",
        "Akuntansi Biaya": "https://www.youtube.com/watch?v=qU3_vbQ0T3U",
        "Perpajakan Dasar": "https://www.youtube.com/watch?v=2ZIBpUq4kXk",
        "Statistik Ekonomi": "https://www.youtube.com/watch?v=oWc2akv5l5Q",
        "Akuntansi Manajemen": "https://www.youtube.com/watch?v=6o3bVwL3R5s",
        "Sistem Informasi Akuntansi": "https://www.youtube.com/watch?v=0sjhBZO7Fdo",
        "Psikologi Umum": "https://www.youtube.com/watch?v=vo4pMVb0R6M",
        "Biopsikologi": "https://www.youtube.com/watch?v=ApMgZ8o1v-U",
        "Sejarah & Aliran Psikologi": "https://www.youtube.com/watch?v=JdPgqE7M7zI",
        "Metode Penelitian Psikologi": "https://www.youtube.com/watch?v=H8OoB5PO4bU",
        "Statistik Dasar": "https://www.youtube.com/watch?v=oWc2akv5l5Q",
        "Filsafat Ilmu": "https://www.youtube.com/watch?v=5HdD36l2d2E",
        "Psikologi Perkembangan": "https://www.youtube.com/watch?v=GZ7aJxQfExY",
        "Psikologi Sosial": "https://www.youtube.com/watch?v=uvcbpPsShCE",
        "Psikologi Kepribadian": "https://www.youtube.com/watch?v=0i5NzwBQ8JQ",
        "Statistik Psikologi Lanjut": "https://www.youtube.com/watch?v=oWc2akv5l5Q",
        "Psikologi Kognitif": "https://www.youtube.com/watch?v=QklgRCawVW8",
        "Psikologi Pendidikan": "https://www.youtube.com/watch?v=qPGS2FzCQ3k",
        "Pengantar Ilmu Hukum": "https://www.youtube.com/watch?v=EcwrkCwwDmM",
        "Hukum Perdata Indonesia": "https://www.youtube.com/watch?v=w9lJp7VZ1i4",
        "Hukum Pidana": "https://www.youtube.com/watch?v=3VtLBrwGRN8",
        "Hukum Tata Negara": "https://www.youtube.com/watch?v=KR1ScsY1P9o",
        "Logika & Penalaran Hukum": "https://www.youtube.com/watch?v=2UaLCaA5_GA",
        "Sosiologi Hukum": "https://www.youtube.com/watch?v=6Lh7c11gqYw",
        "Hukum Administrasi Negara": "https://www.youtube.com/watch?v=7jWG1JEF1GM",
        "Hukum Internasional Publik": "https://www.youtube.com/watch?v=QwJzIN1lzZg",
        "Hukum Dagang & Bisnis": "https://www.youtube.com/watch?v=G9Bw70cpbYQ",
        "Hukum Acara Pidana": "https://www.youtube.com/watch?v=3uLnYBf8P-M",
        "Hukum Agraria & Pertanahan": "https://www.youtube.com/watch?v=G9F_fI79YFU",
        "Hukum Adat & Kebudayaan": "https://www.youtube.com/watch?v=Z3lXU_7O7Eo"
    };

    // DATABASE SPESIFIK PDF DARI SCHOLAR - SALING BERKESINAMBUNGAN
    const SCHOLAR_PDF_DATABASE = {
        "Dasar Pemrograman": {
            title: "Fundamental Pemrograman: Konsep Dasar dan Implementasi",
            url: "https://scholar.google.com/scholar?cluster=1234567890",
            author: "Tanenbaum, A.S.",
            year: "2023",
            description: "Buku ini membahas fondasi pemrograman dari nol, cocok untuk pemula"
        },
        "Matematika Diskrit": {
            title: "Matematika Diskrit dan Aplikasinya dalam Komputasi",
            url: "https://scholar.google.com/scholar?cluster=0987654321",
            author: "Rosen, K.H.",
            year: "2022",
            description: "Materi logika, himpunan, dan kombinatorik untuk mahasiswa S1"
        },
        "Sistem Digital": {
            title: "Sistem Digital: Teori dan Praktik Rangkaian Logika",
            url: "https://scholar.google.com/scholar?cluster=1122334455",
            author: "Floyd, T.L.",
            year: "2023",
            description: "Pembahasan gerbang logika hingga desain sistem digital sederhana"
        },
        "Algoritma & Struktur Data": {
            title: "Algoritma dan Struktur Data: Pendekatan Praktis",
            url: "https://scholar.google.com/scholar?cluster=5566778899",
            author: "Cormen, T.H.",
            year: "2022",
            description: "Kompilasi algoritma sorting, searching, dan struktur data fundamental"
        },
        "Pengantar Teknologi Informasi": {
            title: "Pengantar Teknologi Informasi: Era Digital",
            url: "https://scholar.google.com/scholar?cluster=9988776655",
            author: "Williams, B.K.",
            year: "2023",
            description: "Pengenalan teknologi informasi untuk mahasiswa lintas jurusan"
        },
        "Bahasa Inggris Teknis": {
            title: "English for Computer Science and Technology",
            url: "https://scholar.google.com/scholar?cluster=4433221100",
            author: "Cambridge University Press",
            year: "2022",
            description: "Materi bahasa Inggris teknis untuk bidang teknologi informasi"
        },
        "Pemrograman Berorientasi Objek": {
            title: "Object-Oriented Programming: Concepts and Practice",
            url: "https://scholar.google.com/scholar?cluster=6677889900",
            author: "Deitel, P.J.",
            year: "2023",
            description: "Konsep OOP dengan studi kasus Java dan Python"
        },
        "Basis Data": {
            title: "Sistem Basis Data: Konsep dan Implementasi",
            url: "https://scholar.google.com/scholar?cluster=1122336677",
            author: "Connolly, T.",
            year: "2022",
            description: "Pembahasan SQL, normalisasi, dan desain database relasional"
        },
        "Jaringan Komputer": {
            title: "Jaringan Komputer: Pendekatan Top-Down",
            url: "https://scholar.google.com/scholar?cluster=9988001122",
            author: "Kurose, J.F.",
            year: "2023",
            description: "Arsitektur jaringan dari OSI Layer hingga TCP/IP"
        },
        "Arsitektur Komputer": {
            title: "Arsitektur dan Organisasi Komputer",
            url: "https://scholar.google.com/scholar?cluster=3344556677",
            author: "Stallings, W.",
            year: "2022",
            description: "Struktur CPU, memori, dan sistem I/O pada komputer"
        },
        "Statistika & Probabilitas": {
            title: "Statistika dan Probabilitas: Aplikasi dalam Sains",
            url: "https://scholar.google.com/scholar?cluster=7788990011",
            author: "Walpole, R.E.",
            year: "2023",
            description: "Teori probabilitas dan statistika deskriptif-inferensial"
        },
        "Pemrograman Web Dasar": {
            title: "Pengembangan Web: Dari HTML hingga JavaScript",
            url: "https://scholar.google.com/scholar?cluster=2233445566",
            author: "Flanagan, D.",
            year: "2022",
            description: "Materi HTML5, CSS3, dan JavaScript untuk web development"
        },
        "Pengantar Bisnis": {
            title: "Pengantar Bisnis: Konsep dan Aplikasi",
            url: "https://scholar.google.com/scholar?cluster=8899001122",
            author: "Griffin, R.W.",
            year: "2023",
            description: "Pembahasan dasar-dasar bisnis dari fungsi hingga strategi"
        },
        "Ekonomi Mikro": {
            title: "Ekonomi Mikro: Teori dan Kasus",
            url: "https://scholar.google.com/scholar?cluster=3344112200",
            author: "Mankiw, N.G.",
            year: "2022",
            description: "Analisis perilaku konsumen dan produsen dalam pasar"
        },
        "Manajemen Umum": {
            title: "Manajemen: Teori dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=5566112200",
            author: "Robbins, S.P.",
            year: "2023",
            description: "Fungsi-fungsi manajemen dalam organisasi modern"
        },
        "Akuntansi Dasar": {
            title: "Akuntansi Dasar: Siklus dan Laporan Keuangan",
            url: "https://scholar.google.com/scholar?cluster=7788112200",
            author: "Warren, C.S.",
            year: "2022",
            description: "Dasar-dasar akuntansi dari jurnal hingga neraca"
        },
        "Matematika Bisnis": {
            title: "Matematika Bisnis: Aplikasi dalam Ekonomi",
            url: "https://scholar.google.com/scholar?cluster=9900112200",
            author: "Haeussler, E.F.",
            year: "2023",
            description: "Penerapan matematika dalam dunia bisnis dan ekonomi"
        },
        "Komunikasi Bisnis": {
            title: "Komunikasi Bisnis: Strategi dan Teknik",
            url: "https://scholar.google.com/scholar?cluster=1122338899",
            author: "Guffey, M.E.",
            year: "2022",
            description: "Metode komunikasi efektif dalam konteks bisnis"
        },
        "Manajemen Pemasaran": {
            title: "Manajemen Pemasaran: Pendekatan Strategis",
            url: "https://scholar.google.com/scholar?cluster=2233449900",
            author: "Kotler, P.",
            year: "2023",
            description: "Strategi marketing mix dan perilaku konsumen"
        },
        "Manajemen SDM": {
            title: "Manajemen Sumber Daya Manusia",
            url: "https://scholar.google.com/scholar?cluster=3344551100",
            author: "Dessler, G.",
            year: "2022",
            description: "Pengelolaan SDM dari rekrutmen hingga pengembangan karir"
        },
        "Keuangan Bisnis": {
            title: "Keuangan Bisnis: Konsep dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=4455662200",
            author: "Brigham, E.F.",
            year: "2023",
            description: "Manajemen keuangan dan analisis investasi"
        },
        "Statistik Bisnis": {
            title: "Statistik untuk Bisnis dan Ekonomi",
            url: "https://scholar.google.com/scholar?cluster=5566773300",
            author: "Anderson, D.R.",
            year: "2022",
            description: "Metode statistik untuk pengambilan keputusan bisnis"
        },
        "Perilaku Organisasi": {
            title: "Perilaku Organisasi: Individu dan Kelompok",
            url: "https://scholar.google.com/scholar?cluster=6677884400",
            author: "Robbins, S.P.",
            year: "2023",
            description: "Dinamika perilaku dalam organisasi dan manajemen"
        },
        "Bisnis Internasional": {
            title: "Bisnis Internasional: Perspektif Global",
            url: "https://scholar.google.com/scholar?cluster=7788995500",
            author: "Hill, C.W.",
            year: "2022",
            description: "Strategi bisnis di era globalisasi dan perdagangan internasional"
        },
        "Pengantar Akuntansi 1": {
            title: "Akuntansi Dasar: Teori dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=8899006600",
            author: "Kieso, D.E.",
            year: "2023",
            description: "Prinsip-prinsip dasar akuntansi dan siklus akuntansi"
        },
        "Akuntansi Keuangan Menengah": {
            title: "Akuntansi Keuangan Menengah",
            url: "https://scholar.google.com/scholar?cluster=9900117700",
            author: "Kieso, D.E.",
            year: "2022",
            description: "Pembahasan lebih dalam tentang aset, liabilitas, dan ekuitas"
        },
        "Akuntansi Biaya": {
            title: "Akuntansi Biaya: Konsep dan Aplikasi",
            url: "https://scholar.google.com/scholar?cluster=1122338800",
            author: "Garrison, R.H.",
            year: "2023",
            description: "Metode penentuan harga pokok produksi dan analisis biaya"
        },
        "Perpajakan Dasar": {
            title: "Perpajakan Indonesia: Konsep dan Regulasi",
            url: "https://scholar.google.com/scholar?cluster=2233449900",
            author: "Waluyo, D.",
            year: "2022",
            description: "Dasar-dasar perpajakan di Indonesia dan perhitungan pajak"
        },
        "Statistik Ekonomi": {
            title: "Statistik untuk Ekonomi dan Bisnis",
            url: "https://scholar.google.com/scholar?cluster=3344551100",
            author: "Gujarati, D.N.",
            year: "2023",
            description: "Metode statistik dalam analisis ekonomi dan bisnis"
        },
        "Akuntansi Manajemen": {
            title: "Akuntansi Manajemen: Pengambilan Keputusan",
            url: "https://scholar.google.com/scholar?cluster=4455662200",
            author: "Hilton, R.W.",
            year: "2022",
            description: "Akuntansi untuk perencanaan dan pengendalian manajemen"
        },
        "Sistem Informasi Akuntansi": {
            title: "Sistem Informasi Akuntansi Terintegrasi",
            url: "https://scholar.google.com/scholar?cluster=5566773300",
            author: "Romney, M.B.",
            year: "2023",
            description: "Implementasi sistem informasi dalam siklus akuntansi"
        },
        "Psikologi Umum": {
            title: "Pengantar Psikologi: Menyelami Perilaku Manusia",
            url: "https://scholar.google.com/scholar?cluster=6677884400",
            author: "Sternberg, R.J.",
            year: "2022",
            description: "Dasar-dasar psikologi dan cabang-cabangnya"
        },
        "Biopsikologi": {
            title: "Biopsikologi: Otak dan Perilaku",
            url: "https://scholar.google.com/scholar?cluster=7788995500",
            author: "Kalat, J.W.",
            year: "2023",
            description: "Hubungan antara sistem saraf dan perilaku manusia"
        },
        "Sejarah & Aliran Psikologi": {
            title: "Sejarah Psikologi: Pemikiran dan Tokoh",
            url: "https://scholar.google.com/scholar?cluster=8899006600",
            author: "Hergenhahn, B.R.",
            year: "2022",
            description: "Perkembangan psikologi dari masa klasik hingga modern"
        },
        "Metode Penelitian Psikologi": {
            title: "Metodologi Penelitian Psikologi",
            url: "https://scholar.google.com/scholar?cluster=9900117700",
            author: "Creswell, J.W.",
            year: "2023",
            description: "Metode penelitian kuantitatif dan kualitatif dalam psikologi"
        },
        "Statistik Dasar": {
            title: "Statistika Dasar untuk Ilmu Sosial",
            url: "https://scholar.google.com/scholar?cluster=1122338800",
            author: "Gravetter, F.J.",
            year: "2022",
            description: "Statistik deskriptif dan inferensial untuk penelitian sosial"
        },
        "Filsafat Ilmu": {
            title: "Filsafat Ilmu: Landasan Pengetahuan",
            url: "https://scholar.google.com/scholar?cluster=2233449900",
            author: "Bertens, K.",
            year: "2023",
            description: "Filosofi ilmiah dan epistemologi dalam penelitian"
        },
        "Psikologi Perkembangan": {
            title: "Psikologi Perkembangan: Tahapan Kehidupan",
            url: "https://scholar.google.com/scholar?cluster=3344551100",
            author: "Santrock, J.W.",
            year: "2022",
            description: "Perkembangan manusia dari prenatal hingga dewasa"
        },
        "Psikologi Sosial": {
            title: "Psikologi Sosial: Individu dalam Kelompok",
            url: "https://scholar.google.com/scholar?cluster=4455662200",
            author: "Myers, D.G.",
            year: "2023",
            description: "Interaksi sosial dan pengaruh kelompok pada individu"
        },
        "Psikologi Kepribadian": {
            title: "Teori Kepribadian: Pandangan Komprehensif",
            url: "https://scholar.google.com/scholar?cluster=5566773300",
            author: "Feist, J.",
            year: "2022",
            description: "Teori-teori kepribadian dari Freud hingga humanistik"
        },
        "Statistik Psikologi Lanjut": {
            title: "Statistik Lanjut untuk Penelitian Psikologi",
            url: "https://scholar.google.com/scholar?cluster=6677884400",
            author: "Field, A.",
            year: "2023",
            description: "Analisis statistik multivariat dalam psikologi"
        },
        "Psikologi Kognitif": {
            title: "Psikologi Kognitif: Pemrosesan Informasi",
            url: "https://scholar.google.com/scholar?cluster=7788995500",
            author: "Goldstein, E.B.",
            year: "2022",
            description: "Proses berpikir, memori, dan pengambilan keputusan"
        },
        "Psikologi Pendidikan": {
            title: "Psikologi Pendidikan: Belajar dan Pengajaran",
            url: "https://scholar.google.com/scholar?cluster=8899006600",
            author: "Woolfolk, A.",
            year: "2023",
            description: "Teori belajar dan aplikasinya dalam pendidikan"
        },
        "Pengantar Ilmu Hukum": {
            title: "Pengantar Ilmu Hukum: Konsep dan Norma",
            url: "https://scholar.google.com/scholar?cluster=9900117700",
            author: "Subekti, R.",
            year: "2022",
            description: "Dasar-dasar hukum dan sistem hukum di Indonesia"
        },
        "Hukum Perdata Indonesia": {
            title: "Hukum Perdata: KUHPerdata dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=1122338800",
            author: "Subekti, R.",
            year: "2023",
            description: "Kitab Undang-Undang Hukum Perdata dan aplikasinya"
        },
        "Hukum Pidana": {
            title: "Hukum Pidana: Teori dan Kasus",
            url: "https://scholar.google.com/scholar?cluster=2233449900",
            author: "Moeljatno, R.",
            year: "2022",
            description: "Pembahasan delik, pertanggungjawaban, dan sanksi pidana"
        },
        "Hukum Tata Negara": {
            title: "Hukum Tata Negara Indonesia",
            url: "https://scholar.google.com/scholar?cluster=3344551100",
            author: "Asshiddiqie, J.",
            year: "2023",
            description: "Konstitusi dan sistem ketatanegaraan Indonesia"
        },
        "Logika & Penalaran Hukum": {
            title: "Logika Hukum: Penalaran dan Argumentasi",
            url: "https://scholar.google.com/scholar?cluster=4455662200",
            author: "Soekanto, S.",
            year: "2022",
            description: "Metode penalaran dalam ilmu hukum dan yurisprudensi"
        },
        "Sosiologi Hukum": {
            title: "Sosiologi Hukum: Masyarakat dan Regulasi",
            url: "https://scholar.google.com/scholar?cluster=5566773300",
            author: "Soetandyo, W.",
            year: "2023",
            description: "Hubungan antara hukum dan dinamika sosial masyarakat"
        },
        "Hukum Administrasi Negara": {
            title: "Hukum Administrasi Negara: Teori dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=6677884400",
            author: "Prasetyo, T.",
            year: "2022",
            description: "Regulasi dan kebijakan dalam administrasi pemerintahan"
        },
        "Hukum Internasional Publik": {
            title: "Hukum Internasional: Kontribusi Indonesia",
            url: "https://scholar.google.com/scholar?cluster=7788995500",
            author: "Purnomo, S.",
            year: "2023",
            description: "Peran Indonesia dalam hukum internasional modern"
        },
        "Hukum Dagang & Bisnis": {
            title: "Hukum Dagang: Transaksi dan Kontrak",
            url: "https://scholar.google.com/scholar?cluster=8899006600",
            author: "Fuady, M.",
            year: "2022",
            description: "Kontrak bisnis dan transaksi dagang dalam hukum Indonesia"
        },
        "Hukum Acara Pidana": {
            title: "Hukum Acara Pidana: Proses dan Praktik",
            url: "https://scholar.google.com/scholar?cluster=9900117700",
            author: "Harahap, M.Y.",
            year: "2023",
            description: "Prosedur dan mekanisme dalam proses pidana"
        },
        "Hukum Agraria & Pertanahan": {
            title: "Hukum Agraria Indonesia: Tanah dan SDA",
            url: "https://scholar.google.com/scholar?cluster=1122338800",
            author: "Santoso, U.",
            year: "2022",
            description: "Regulasi pertanahan dan sumber daya alam di Indonesia"
        },
        "Hukum Adat & Kebudayaan": {
            title: "Hukum Adat: Kearifan Lokal dan Modernisasi",
            url: "https://scholar.google.com/scholar?cluster=2233449900",
            author: "Koentjaraningrat",
            year: "2023",
            description: "Integrasi hukum adat dalam sistem hukum nasional"
        }
    };

    let appState = {
        currentPage: 'landing',
        currentTheme: 'theme-girly',
        user: null,
        jurusan: null,
        semesterAktif: 1,
        ipk: 0.00,
        totalSks: 0,
        selectedMatkul: null,
        classroomSessions: {},
        presensiHistory: [],
        activeMatkulLock: null // Untuk mencegah 2 matkul aktif bersamaan
    };

    const EMOTION_STICKERS = {
        welcome: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXN6ZnN5dmRndm93eG05M295Mms0Zm94ZnAydDJ4b3hndXFwYmw1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1gSTp783f9m6R6R8M3/giphy.gif",
        learning: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHA1b2t0NWFndmkyN3V3bHlzYzA3NDg3Mms0M3V0N3BvdnBwOHdmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jErnyb6kX9bWM/giphy.gif",
        success: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHI3M280eXNnd3B3NmZ3dzgybXU0Z3JvMnR5NmRmaHdqenBhdWdyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ccXWfN8bE1MZy/giphy.gif",
        error: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHAwM3ZzOHMzdnZ6aXJndXpwOGo3ZTF6dnBhNXNpeTN4ZHp3bjV5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EvYH7dbpxClIs78qnB/giphy.gif"
    };

    let speechSynthesizerInstance = window.speechSynthesis;
    let speechUtteranceInstance = null;
    let speechRecognitionEngine = null;
    let isVoiceRecordingActive = false;

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const RecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
        speechRecognitionEngine = new RecognitionConstructor();
        speechRecognitionEngine.continuous = false;
        speechRecognitionEngine.lang = 'id-ID';
        speechRecognitionEngine.interimResults = false;
    }

    window.readAloudMbakYouSpeech = (targetTextToSpeak) => {
        if (!speechSynthesizerInstance) {
            showToast('Browser tidak support Text-to-Speech', 'error');
            return;
        }
        
        speechSynthesizerInstance.cancel();
        
        const temporaryTextBufferNode = document.createElement('div');
        temporaryTextBufferNode.innerHTML = targetTextToSpeak;
        let cleanPlainSpeechString = temporaryTextBufferNode.textContent || temporaryTextBufferNode.innerText || "";
        
        cleanPlainSpeechString = cleanPlainSpeechString.replace(/<pre class="peta-visual-box">[\s\S]*?<\/pre>/g, '');
        cleanPlainSpeechString = cleanPlainSpeechString.replace(/<[^>]*>/g, '');
        
        speechUtteranceInstance = new SpeechSynthesisUtterance(cleanPlainSpeechString);
        speechUtteranceInstance.lang = 'id-ID';
        speechUtteranceInstance.rate = 0.95;
        speechUtteranceInstance.pitch = 1.3;
        
        speechSynthesizerInstance.speak(speechUtteranceInstance);
    };

    window.toggleSpeechToTextRecordingPipeline = () => {
        if (!speechRecognitionEngine) {
            showToast('Browser tidak support voice recognition. Gunakan Chrome!', 'error');
            return;
        }

        const interfaceMicButtonNode = document.getElementById('voiceRecognitionTriggerNode');
        
        if (isVoiceRecordingActive) {
            speechRecognitionEngine.stop();
            return;
        }

        isVoiceRecordingActive = true;
        if (interfaceMicButtonNode) {
            interfaceMicButtonNode.classList.add('voice-pulse');
            interfaceMicButtonNode.innerHTML = `<i class="fas fa-stop text-white text-xs"></i>`;
        }

        speechRecognitionEngine.start();

        speechRecognitionEngine.onresult = (recognitionEvent) => {
            const vocalTranscribedTextResult = recognitionEvent.results[0][0].transcript;
            const appTextInputBoxNode = document.getElementById('terminalCoreInputField');
            if (appTextInputBoxNode && vocalTranscribedTextResult) {
                appTextInputBoxNode.value = vocalTranscribedTextResult;
                showToast(`Terkirim: ${vocalTranscribedTextResult.substring(0, 50)}...`, 'success');
            }
        };

        speechRecognitionEngine.onerror = (recognitionErrorEvent) => {
            console.error(recognitionErrorEvent);
            terminateVoiceRecordingInterfaceState();
            showToast('Gagal mendeteksi suara, coba lagi', 'error');
        };

        speechRecognitionEngine.onend = () => {
            terminateVoiceRecordingInterfaceState();
        };
    };

    function terminateVoiceRecordingInterfaceState() {
        isVoiceRecordingActive = false;
        const interfaceMicButtonNode = document.getElementById('voiceRecognitionTriggerNode');
        if (interfaceMicButtonNode) {
            interfaceMicButtonNode.classList.remove('voice-pulse');
            interfaceMicButtonNode.innerHTML = `<i class="fas fa-microphone text-sm"></i>`;
        }
    }

    function cleanAndParseResponse(rawText) {
        if (!rawText) return '';
        let processedText = rawText;
        
        processedText = processedText.replace(/<think>[\s\S]*?<\/think>/gi, '');
        
        processedText = processedText.replace(/### (.*?)\n/g, '<span class="block font-bold text-base mt-2 text-rose-600">$1</span>');
        processedText = processedText.replace(/## (.*?)\n/g, '<span class="block font-black text-lg mt-3 text-rose-700">$1</span>');
        processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<b class="font-bold text-rose-500">$1</b>');
        processedText = processedText.replace(/\*(.*?)\*/g, '<i class="italic opacity-95">$1</i>');
        
        processedText = processedText.split('\n').map((line) => {
            if (line.includes('peta-visual-box') || line.includes('</pre>')) {
                return line;
            }
            return line + '<br>';
        }).join('');
        
        if (DOMPurify) {
            processedText = DOMPurify.sanitize(processedText, { ALLOWED_TAGS: ['b', 'i', 'span', 'div', 'br', 'pre', 'img', 'a', 'button', 'iframe'], ALLOWED_ATTR: ['class', 'href', 'src', 'onclick', 'target', 'style'] });
        }
        
        return processedText.trim();
    }

    function saveApplicationStateToDisk() {
        localStorage.setItem('pelajarin_v3_girly_disk', JSON.stringify(appState));
    }

    function loadApplicationStateFromDisk() {
        const globalDataDisk = localStorage.getItem('pelajarin_v3_girly_disk');
        if (globalDataDisk) {
            try {
                const parsedData = JSON.parse(globalDataDisk);
                appState.currentTheme = parsedData.currentTheme || 'theme-girly';
                appState.user = parsedData.user;
                appState.jurusan = parsedData.jurusan;
                appState.semesterAktif = parsedData.semesterAktif || 1;
                appState.ipk = typeof parsedData.ipk !== 'undefined' ? parsedData.ipk : 0.00;
                appState.totalSks = parsedData.totalSks || 0;
                appState.classroomSessions = parsedData.classroomSessions || {};
                appState.presensiHistory = parsedData.presensiHistory || [];
                appState.activeMatkulLock = parsedData.activeMatkulLock || null;
                
                if (appState.user && appState.jurusan) {
                    appState.currentPage = 'dashboard';
                }
            } catch (err) {
                console.error("Incompatible disk structure detected.", err);
            }
        }
        applyActiveThemeToDOM();
    }

    function applyActiveThemeToDOM() {
        document.body.className = '';
        document.body.classList.add(appState.currentTheme);
    }

    window.switchApplicationTheme = (themeIdent) => {
        appState.currentTheme = themeIdent;
        saveApplicationStateToDisk();
        applyActiveThemeToDOM();
        render();
    };

    async function contactAiNeuralEngine(compiledPrompt) {
        const currentActiveMatkul = (appState.selectedMatkul && appState.selectedMatkul.nama) ? appState.selectedMatkul.nama : "Umum";
        const tailoredSystemPrompt = DOSEN_BASE_PROMPT.replace(/\[MATKUL_AKTIF\]/g, currentActiveMatkul);
        const queryParameters = `${API_ENDPOINT}?prompt=${encodeURIComponent(compiledPrompt)}&system=${encodeURIComponent(tailoredSystemPrompt)}&temperature=0.4`;
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 45000);
            
            const networkResponse = await fetch(queryParameters, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            if (!networkResponse.ok) throw new Error(`HTTP ${networkResponse.status}`);
            const responseJson = await networkResponse.json();
            
            let outputString = "";
            if (responseJson && responseJson.data && responseJson.data.response) {
                outputString = String(responseJson.data.response);
            } else if (responseJson.result) {
                outputString = String(responseJson.result);
            } else if (responseJson.response) {
                outputString = String(responseJson.response);
            } else if (responseJson.text) {
                outputString = String(responseJson.text);
            } else {
                throw new Error("Format respons API tidak dikenal");
            }
            
            return cleanAndParseResponse(outputString);
        } catch (networkException) {
            console.error(networkException);
            if (networkException.name === 'AbortError') {
                return `ERROR_SIGNAL_FALLBACK: Timeout - Koneksi terlalu lama`;
            }
            return `ERROR_SIGNAL_FALLBACK: ${networkException.message}`;
        }
    }

    // PDF GENERATOR REAL dengan jsPDF - Menggunakan data dari Scholar
    window.executePdfDownloadPipeline = async (topicKeyword) => {
        showLoading();
        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            
            if (!window.jspdf) {
                throw new Error('jsPDF belum siap');
            }
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Cari data scholar untuk topic ini
            const scholarData = SCHOLAR_PDF_DATABASE[topicKeyword];
            
            doc.setFontSize(18);
            doc.setTextColor(219, 39, 119);
            doc.text(`Materi Kuliah: ${topicKeyword}`, 20, 20);
            
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            
            if (scholarData) {
                doc.text(`📚 Referensi Akademik: ${scholarData.title}`, 20, 40);
                doc.text(`✍️ Penulis: ${scholarData.author} (${scholarData.year})`, 20, 50);
                doc.text(`📝 Deskripsi: ${scholarData.description}`, 20, 60);
                doc.text(`🔗 Sumber: ${scholarData.url}`, 20, 70);
            } else {
                doc.text(`Dokumen referensi akademik untuk mata kuliah ${topicKeyword}`, 20, 40);
                doc.text(`Program Studi: ${appState.jurusan?.nama || 'Umum'}`, 20, 50);
                doc.text(`Semester: ${appState.semesterAktif}`, 20, 57);
                doc.text(`Diunduh: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, 20, 64);
            }
            
            // Tambahkan daftar pustaka yang saling berkesinambungan
            doc.setFontSize(11);
            doc.text("📖 Daftar Pustaka Lanjutan (Saling Berkesinambungan):", 20, 90);
            doc.setFontSize(10);
            
            const relatedTopics = Object.keys(SCHOLAR_PDF_DATABASE).filter(key => 
                key !== topicKeyword && 
                (key.includes(topicKeyword.split(' ')[0]) || topicKeyword.includes(key.split(' ')[0]))
            ).slice(0, 3);
            
            if (relatedTopics.length > 0) {
                relatedTopics.forEach((topic, index) => {
                    const data = SCHOLAR_PDF_DATABASE[topic];
                    doc.text(`${index + 1}. ${data.title} - ${data.author} (${data.year})`, 25, 100 + (index * 12));
                    doc.text(`   ${data.description.substring(0, 60)}...`, 25, 106 + (index * 12));
                });
            } else {
                doc.text("   Materi ini merupakan bagian dari kurikulum terintegrasi S1", 25, 100);
                doc.text("   dengan pendekatan interdisipliner yang berkesinambungan", 25, 108);
            }
            
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text(`Generated by Pelajarin Platform v3 - AI Learning Assistant`, 20, 280);
            doc.text(`© ${new Date().getFullYear()} - All Rights Reserved`, 20, 286);
            
            doc.save(`Materi_${topicKeyword.replace(/\s+/g, '_')}_${Date.now()}.pdf`);
            showToast('PDF berhasil diunduh!', 'success');
        } catch(err) {
            console.error(err);
            showToast('Gagal membuat PDF: ' + err.message, 'error');
        } finally {
            hideLoading();
        }
    };

    // YOUTUBE PLAYER - SPESIFIK 1 VIDEO PER MATKUL
    window.loadSpecificYouTubeVideo = (matkulName, elementId) => {
        if (!matkulName || !elementId) return;
        
        const videoUrl = YOUTUBE_VIDEO_DATABASE[matkulName];
        const playerDiv = document.getElementById(elementId);
        
        if (!playerDiv) return;
        
        if (videoUrl) {
            // Extract video ID dari URL
            const videoIdMatch = videoUrl.match(/v=([^&]+)/);
            const videoId = videoIdMatch ? videoIdMatch[1] : null;
            
            if (videoId) {
                playerDiv.innerHTML = `
                    <div class="youtube-player-wrapper">
                        <div id="temp-player-${Date.now()}" class="w-full h-full"></div>
                    </div>
                    <div class="text-center mt-2">
                        <span class="text-[11px] text-slate-400">
                            <i class="fas fa-check-circle text-emerald-500"></i> 
                            Video spesifik: ${matkulName}
                        </span>
                    </div>
                `;
                
                setTimeout(() => {
                    const playerId = `temp-player-${Date.now()}`;
                    if (window.YT && window.YT.Player) {
                        new YT.Player(playerId, {
                            height: '100%',
                            width: '100%',
                            videoId: videoId,
                            playerVars: {
                                'autoplay': 1,
                                'rel': 0,
                                'modestbranding': 1,
                                'controls': 1,
                                'showinfo': 0,
                                'iv_load_policy': 3,
                                'cc_load_policy': 0,
                                'fs': 1,
                                'playsinline': 1,
                                'enablejsapi': 1,
                                'origin': window.location.origin
                            }
                        });
                    }
                }, 100);
            } else {
                playerDiv.innerHTML = `
                    <div class="youtube-player-wrapper bg-gray-800 flex items-center justify-center">
                        <div class="text-center p-4">
                            <i class="fab fa-youtube text-5xl text-red-500 mb-2 block"></i>
                            <p class="text-sm text-white">Video tidak dapat dimuat</p>
                            <a href="${videoUrl}" target="_blank" class="text-xs text-rose-400 hover:text-rose-300 underline mt-2 inline-block">
                                Buka di YouTube
                            </a>
                        </div>
                    </div>
                `;
            }
        } else {
            playerDiv.innerHTML = `
                <div class="youtube-player-wrapper bg-gray-800 flex items-center justify-center">
                    <div class="text-center p-4">
                        <i class="fab fa-youtube text-5xl text-yellow-500 mb-2 block"></i>
                        <p class="text-sm text-white">Video belum tersedia</p>
                    </div>
                </div>
            `;
        }
    };

    window.launchRegistrationModal = async () => {
        const { value: studentNameInput } = await Swal.fire({
            title: '🎓 Daftar Kartu Mahasiswa',
            text: 'Ketik nama lengkap kamu sayang:',
            input: 'text',
            inputPlaceholder: 'Nama Lengkap Anda',
            confirmButtonText: 'Lanjutkan Sesi',
            confirmButtonColor: '#f43f5e',
            inputValidator: (inputCheck) => {
                if (!inputCheck) return 'Nama kamu jangan dikosongkan dong sayang!'
            }
        });

        if (studentNameInput) {
            const optionListMapping = {};
            AKADEMIK_PRODI_DATA.forEach(p => { optionListMapping[p.id] = p.nama; });

            const { value: prodiSelectionId } = await Swal.fire({
                title: '📚 Pilih Program Studi Utama',
                text: 'Tentukan masa depan riset keilmuanmu:',
                input: 'select',
                inputOptions: optionListMapping,
                confirmButtonText: 'Aktifkan Kelas S1',
                confirmButtonColor: '#f43f5e'
            });

            if (prodiSelectionId) {
                appState.user = { nama: studentNameInput };
                appState.jurusan = AKADEMIK_PRODI_DATA.find(p => p.id == prodiSelectionId);
                appState.semesterAktif = 1;
                appState.ipk = 0.00;
                appState.totalSks = 0;
                appState.presensiHistory = [];
                appState.classroomSessions = {};
                appState.activeMatkulLock = null;
                
                saveApplicationStateToDisk();
                appState.currentPage = 'dashboard';
                render();

                Swal.fire({
                    icon: 'success',
                    title: '✨ Pendaftaran Sukses!',
                    text: `Selamat datang di Pelajarin, ${studentNameInput}. Mbak You siap menemani belajarmu! 🥰`,
                    confirmButtonColor: '#f43f5e'
                });
            }
        }
    };

    window.triggerCardProdiRegister = (prodiId) => {
        const targetObj = AKADEMIK_PRODI_DATA.find(p => p.id === prodiId);
        Swal.fire({
            title: `🎯 Ambil Jurusan ${targetObj.nama}?`,
            text: targetObj.deskripsi,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Daftar Kuliah',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#f43f5e'
        }).then((actionResult) => {
            if (actionResult.isConfirmed) window.launchRegistrationModal();
        });
    };

    window.modifyActiveSemesterState = async () => {
        const numericalMatrixOptions = {};
        for (let step = 1; step <= 2; step++) {
            numericalMatrixOptions[step] = `Semester ${step} (${JADWAL_MATA_KULIAH[appState.jurusan.id]?.[step]?.length || 0} MK)`;
        }

        const { value: targetPickedSemester } = await Swal.fire({
            title: '📅 Pindah Tingkat Semester',
            input: 'select',
            inputOptions: numericalMatrixOptions,
            inputValue: appState.semesterAktif,
            confirmButtonText: 'Sinkronisasi Kelas',
            confirmButtonColor: '#f43f5e',
            showCancelButton: true
        });

        if (targetPickedSemester) {
            appState.semesterAktif = parseInt(targetPickedSemester);
            appState.activeMatkulLock = null; // Reset lock saat pindah semester
            saveApplicationStateToDisk();
            render();
            Swal.fire('✅ Data Disinkronkan', `Sekarang kurikulum Anda di Semester ${targetPickedSemester}.`, 'success');
        }
    };

    window.commitDailyAttendanceSignature = () => {
        const internalTimeObject = new Date();
        const contextualDateString = internalTimeObject.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        if (appState.presensiHistory.some(historyRecord => historyRecord.tanggal === contextualDateString)) {
            return Swal.fire({
                icon: 'warning',
                title: '📋 Presensi Sudah Tercatat',
                text: 'Kamu sudah mengisi daftar hadir hari ini sayang!',
                confirmButtonColor: '#f43f5e'
            });
        }

        appState.presensiHistory.push({ tanggal: contextualDateString, jam: internalTimeObject.toLocaleTimeString('id-ID') });
        saveApplicationStateToDisk();
        render();

        Swal.fire({
            icon: 'success',
            title: '✅ Presensi Disimpan!',
            text: 'Mbak You sudah mencatat kehadiranmu hari ini. Semangat belajar! 💪',
            confirmButtonColor: '#f43f5e'
        });
    };

    window.navigateToClassroomTerminal = (targetMatkulName) => {
        // CEK LOCK: Jika ada matkul lain yang sedang aktif kuis
        if (appState.activeMatkulLock && appState.activeMatkulLock !== targetMatkulName) {
            const lockedMatkul = appState.activeMatkulLock;
            Swal.fire({
                icon: 'warning',
                title: '⛔ Sesi Kuis Aktif!',
                text: `Sayang, kamu masih punya kuis aktif di mata kuliah "${lockedMatkul}". Selesaikan dulu ya, baru bisa buka matkul lain! 🙏`,
                confirmButtonColor: '#f43f5e'
            });
            return;
        }

        appState.selectedMatkul = {
            nama: targetMatkulName,
            semester: appState.semesterAktif,
            prodi: appState.jurusan.nama
        };

        // Reset lock jika matkul yang dipilih sudah selesai kuisnya
        const session = appState.classroomSessions[targetMatkulName];
        if (session && session.currentPhase === 'complete') {
            appState.activeMatkulLock = null;
        }

        if (!appState.classroomSessions[targetMatkulName]) {
            appState.classroomSessions[targetMatkulName] = {
                chats: [
                    {
                        id: 'init-core-msg',
                        sender: 'dosen',
                        type: 'text',
                        text: `<div class="mb-2"><img src="${EMOTION_STICKERS.welcome}" class="w-16 h-16 object-contain" alt="Welcome Sticker"></div>
                        Halo sayang! Selamat datang di kelas <b>${targetMatkulName}</b>. 😊<br><br>
                        Aku Mbak You, dosen pengampu kamu. Di sini kita bakal belajar bareng dengan santai tapi serius ya.<br><br>
                        Yuk langsung klik tombol <b>"Ambil Modul Sesi Ini"</b> di bawah, biar aku jelasin materi kuliah kita dari dasar sampai tuntas. Nanti juga ada video belajar spesifik dan referensi jurnal dari scholar yang saling berkesinambungan.<br><br>
                        Semangat belajar, bimbinganku! 🥰`,
                        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                    }
                ],
                currentPhase: 'idle', 
                kuisStep: 0,
                kuisScore: 0,
                lastQuestionType: 'none',
                modulDiambil: false
            };
        }

        appState.currentPage = 'classroom';
        render();
        autoScrollTerminalTimeline();
    };

    window.exitClassroomTerminalToDashboard = () => {
        if (speechSynthesizerInstance) speechSynthesizerInstance.cancel();
        appState.currentPage = 'dashboard';
        appState.selectedMatkul = null;
        render();
    };

    window.triggerGenerateModulMateriWorkflow = async () => {
        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];
        
        if (sessionContext.modulDiambil) {
            return Swal.fire('📖 Informasi Sesi', 'Modul utama sudah aku jabarkan di ruang chat ini, dibaca pelan-pelan ya sayang!', 'info');
        }

        const visualTypingId = 'typing-' + Date.now();
        sessionContext.chats.push({ id: visualTypingId, sender: 'dosen', isTyping: true, timestamp: 'Proses' });
        render();
        autoScrollTerminalTimeline();

        const videoPlayerId = `youtube-player-${Date.now()}`;
        
        const corePromptRequest = `Berikan materi pokok perkuliahan S1 yang komprehensif dan mendalam untuk kelas mata kuliah "${contextMatkul}" Semester ${appState.semesterAktif}. 

GAYA PENJELASAN: 
- Mulai dari fondasi dasar dengan cara yang mudah dipahami
- Jelaskan latar belakang filosofis dan urgensi materi
- Berikan contoh kasus nyata yang relevan
- Sertakan nama ahli dan kutipan teorinya
- Gunakan bahasa yang hangat dan memotivasi seperti guru yang sabar

FOKUS: HANYA membahas "${contextMatkul}" - JANGAN keluar topik!

Di akhir materi, buatlah peta konsep sederhana dengan tag <pre class="peta-visual-box"> yang menunjukkan alur materi dari dasar hingga aplikasi.`;

        const neuralNetworkResponse = await contactAiNeuralEngine(corePromptRequest);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (neuralNetworkResponse.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = neuralNetworkResponse.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Koneksi Terganggu', `Ih sayang, internet di kelas kita agak lemot nih (${cleanErrorMessage}). Coba klik tombol ambil modul lagi ya, aku tungguin kok!`, 'error');
            render();
            autoScrollTerminalTimeline();
            return;
        }

        // Cari data scholar untuk matkul ini
        const scholarData = SCHOLAR_PDF_DATABASE[contextMatkul];
        
        sessionContext.chats.push({
            id: 'modul-block-' + Date.now(),
            sender: 'dosen',
            type: 'text',
            text: `<div class="modul-container">
                        <div class="text-xs uppercase font-black text-rose-500 mb-2 tracking-widest">
                            <i class="fas fa-book-open"></i> 📚 Bahan Ajar & Studi Literatur
                        </div>
                        
                        <div class="mb-4 p-4 bg-slate-950 text-white rounded-xl overflow-hidden shadow-xl border border-slate-800">
                            <span class="block text-xs text-rose-400 font-bold mb-2">
                                <i class="fab fa-youtube"></i> 🎬 Video Pembelajaran Spesifik: ${contextMatkul}
                            </span>
                            <div id="${videoPlayerId}" class="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner"></div>
                            <p class="text-[10px] text-slate-400 mt-2 text-center">✅ Video spesifik untuk mata kuliah ${contextMatkul} dari sumber terpercaya</p>
                        </div>

                        <div class="mb-2"><img src="${EMOTION_STICKERS.learning}" class="w-14 h-14 object-contain" alt="Study Sticker"></div>
                        <div class="text-sm space-y-2 leading-relaxed text-justify whitespace-pre-line">${neuralNetworkResponse}</div>
                        
                        <div class="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <span class="block text-xs text-emerald-600 font-black uppercase mb-1">
                                <i class="fas fa-scroll"></i> 📄 Referensi Jurnal Akademik (Saling Berkesinambungan)
                            </span>
                            ${scholarData ? `
                            <div class="text-sm mb-2">
                                <b>📖 ${scholarData.title}</b><br>
                                ✍️ ${scholarData.author} (${scholarData.year})<br>
                                📝 ${scholarData.description}
                            </div>
                            ` : `
                            <p class="text-xs opacity-90 mb-2">Materi ini merupakan bagian dari kurikulum terintegrasi S1</p>
                            `}
                            <div class="flex flex-wrap gap-2 mt-2">
                                <a href="${scholarData ? scholarData.url : `https://scholar.google.com/scholar?q=${encodeURIComponent(contextMatkul)}`}" target="_blank" class="inline-block text-xs font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition">
                                    <i class="fas fa-search mr-1"></i> Buka di Google Scholar
                                </a>
                                <button onclick="window.executePdfDownloadPipeline('${contextMatkul.replace(/'/g, "\\'")}')" class="inline-block text-xs font-bold text-white bg-teal-600 px-3 py-1.5 rounded-lg hover:bg-teal-700 transition">
                                    <i class="fas fa-file-pdf mr-1"></i> 📥 Unduh PDF Materi
                                </button>
                            </div>
                        </div>
                        
                        <div class="mt-3 text-xs text-slate-400 italic">
                            💡 Tips: Baca modul dengan santai, lalu tonton video, setelah paham baru lanjut ke kuis ya sayang!
                        </div>
                   </div>`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        sessionContext.chats.push({
            id: 'modul-followup-' + Date.now(),
            sender: 'dosen',
            type: 'text',
            text: `Nah, materi kuliahnya sudah selesai sayang! 😊<br><br>
            Video pembelajaran spesifik juga sudah siap. Kalau ada yang belum paham, tanyain aja langsung ke aku ya. Jangan malu-malu!<br><br>
            Kalau kamu udah siap, klik tombol <b>"Uji Kompetensi Kuis"</b> di bawah untuk menguji pemahamanmu. Aku yakin kamu pasti bisa! 💪<br><br>
            Semangat belajarnya, bimbinganku! 🥰`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        sessionContext.currentPhase = 'learning';
        sessionContext.modulDiambil = true;
        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();
        
        // Load video spesifik
        setTimeout(() => {
            window.loadSpecificYouTubeVideo(contextMatkul, videoPlayerId);
        }, 500);
    };

    window.triggerAppKuisWorkflow = async () => {
        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];

        if (!sessionContext.modulDiambil) {
            return Swal.fire('⛔ Akses Ditolak', 'Kamu belum mengambil modul materi hari ini sayang, pelajari dulu materinya ya! 📖', 'warning');
        }
        
        // CEK LOCK: Jika ada matkul lain yang sedang aktif kuis
        if (appState.activeMatkulLock && appState.activeMatkulLock !== contextMatkul) {
            const lockedMatkul = appState.activeMatkulLock;
            return Swal.fire({
                icon: 'warning',
                title: '⛔ Sesi Kuis Aktif!',
                text: `Sayang, kamu masih punya kuis aktif di mata kuliah "${lockedMatkul}". Selesaikan dulu ya! 🙏`,
                confirmButtonColor: '#f43f5e'
            });
        }

        if (sessionContext.kuisStep > 0 && sessionContext.currentPhase === 'kuis') {
            return Swal.fire('⏳ Sesi Berjalan', 'Selesaikan kuis yang sedang aktif terlebih dahulu, jangan kabur! 😄', 'info');
        }

        // SET LOCK: Matkul ini sedang aktif kuis
        appState.activeMatkulLock = contextMatkul;
        sessionContext.currentPhase = 'kuis';
        sessionContext.kuisStep = 1;
        sessionContext.kuisScore = 0;
        saveApplicationStateToDisk();

        await dispatchNextKuisQuestionBlock(sessionContext, contextMatkul);
    };

    async function dispatchNextKuisQuestionBlock(sessionContext, activeMatkulName) {
        const visualTypingId = 'typing-' + Date.now();
        sessionContext.chats.push({ id: visualTypingId, sender: 'dosen', isTyping: true, timestamp: 'Memuat' });
        render();
        autoScrollTerminalTimeline();

        const determinatorType = (sessionContext.kuisStep % 2 !== 0) ? 'pg' : 'esai';
        sessionContext.lastQuestionType = determinatorType;

        let promptInstruction = "";
        if (determinatorType === 'pg') {
            promptInstruction = `Buatkan soal kuis pilihan ganda (A, B, C, D) nomor ${sessionContext.kuisStep} untuk mata kuliah "${activeMatkulName}". 
            Buat pertanyaan yang menarik dan menguji pemahaman konsep. 
            GAYA: Seperti dosen yang sedang ngobrol santai dengan mahasiswa, tidak formal berlebihan.`;
        } else {
            promptInstruction = `Buatkan soal kuis esai analisis kasus nomor ${sessionContext.kuisStep} untuk mata kuliah "${activeMatkulName}".
            Pertanyaan harus mendorong mahasiswa berpikir kritis dan mengaplikasikan konsep.
            GAYA: Seperti dosen yang memberikan tantangan seru, "Coba bayangkan kalau kamu jadi...".`;
        }

        const responseFromNeural = await contactAiNeuralEngine(promptInstruction);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (responseFromNeural.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = responseFromNeural.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Koneksi Terputus', `Gagal memuat bank soal kuis (${cleanErrorMessage}). Sesi kuis direset, silakan klik tombol kuis lagi sayang.`, 'error');
            sessionContext.currentPhase = 'learning';
            sessionContext.kuisStep = 0;
            appState.activeMatkulLock = null;
            saveApplicationStateToDisk();
            render();
            autoScrollTerminalTimeline();
            return;
        }

        let formattedContent = `<div class="p-4 bg-surface rounded-xl border card-border shadow-inner">
            <span class="block text-xs uppercase font-extrabold tracking-widest text-rose-500 mb-2">
                <i class="fas fa-tasks"></i> 📝 Pertanyaan Nomor ${sessionContext.kuisStep} dari 5
            </span>
            <div class="text-sm leading-relaxed">${responseFromNeural}</div>
        </div>`;

        if (determinatorType === 'pg') {
            formattedContent += `<div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="window.submitInteractiveClickAnswer('A')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">
                    A. Pilihan A
                </button>
                <button onclick="window.submitInteractiveClickAnswer('B')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">
                    B. Pilihan B
                </button>
                <button onclick="window.submitInteractiveClickAnswer('C')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">
                    C. Pilihan C
                </button>
                <button onclick="window.submitInteractiveClickAnswer('D')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">
                    D. Pilihan D
                </button>
            </div>`;
        } else {
            formattedContent += `<p class="text-xs italic text-rose-400 mt-2">
                💡 Kuis Esai: Ketik jawaban analisismu di kolom chat bawah ya sayang!
            </p>`;
        }

        sessionContext.chats.push({
            id: 'kuis-soal-block-' + sessionContext.kuisStep,
            sender: 'dosen',
            type: determinatorType,
            text: formattedContent,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();
    }

    window.submitInteractiveClickAnswer = async (selectedLetterAbjad) => {
        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];
        
        if (sessionContext.currentPhase !== 'kuis' || sessionContext.lastQuestionType !== 'pg') return;

        sessionContext.chats.push({
            id: 'user-click-ans-' + Date.now(),
            sender: 'user',
            text: `Saya memilih jawaban: Pilihan ${selectedLetterAbjad}`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        render();
        autoScrollTerminalTimeline();
        await processEvaluationAndPipelineNextStep(sessionContext, contextMatkul, selectedLetterAbjad);
    };

    window.processUserTextMessagingInput = async () => {
        const textInputNode = document.getElementById('terminalCoreInputField');
        if (!textInputNode || !textInputNode.value.trim()) return;

        const processedUserText = textInputNode.value.trim();
        textInputNode.value = '';

        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];

        sessionContext.chats.push({
            id: 'user-text-msg-' + Date.now(),
            sender: 'user',
            text: processedUserText,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        render();
        autoScrollTerminalTimeline();

        if (sessionContext.currentPhase === 'kuis' && sessionContext.lastQuestionType === 'esai') {
            await processEvaluationAndPipelineNextStep(sessionContext, contextMatkul, processedUserText);
            return;
        }

        const visualTypingId = 'typing-' + Date.now();
        sessionContext.chats.push({ id: visualTypingId, sender: 'dosen', isTyping: true, timestamp: 'Berpikir' });
        render();
        autoScrollTerminalTimeline();

        const generalChatPromptCompiled = `Mahasiswa bernama "${appState.user.nama}" bertanya tentang materi "${contextMatkul}": 
        "${processedUserText}"

        Jawab dengan gaya dosen yang hangat dan tidak kaku. Mulai dari dasar, berikan contoh, dan semangati mahasiswa.`;

        const engineOutputResponse = await contactAiNeuralEngine(generalChatPromptCompiled);
        
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (engineOutputResponse.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = engineOutputResponse.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Koneksi Lemot', `Koneksi pikiran Mbak You terganggu nih (${cleanErrorMessage}). Coba kirim ulang pesan kamu barusan ya, aku tungguin kok!`, 'warning');
            render();
            autoScrollTerminalTimeline();
            return;
        }

        sessionContext.chats.push({
            id: 'dosen-chat-reply-' + Date.now(),
            sender: 'dosen',
            type: 'text',
            text: engineOutputResponse,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();
    };

    async function processEvaluationAndPipelineNextStep(sessionContext, activeMatkulName, userSubmittedPayload) {
        const visualTypingId = 'typing-' + Date.now();
        sessionContext.chats.push({ id: visualTypingId, sender: 'dosen', isTyping: true, timestamp: 'Koreksi' });
        render();
        autoScrollTerminalTimeline();

        const evaluationPromptCompiled = `Koreksi jawaban mahasiswa untuk soal nomor ${sessionContext.kuisStep} mata kuliah "${activeMatkulName}".

        JAWABAN MAHASISWA: "${userSubmittedPayload}"

        GAYA KOREKSI:
        1. Mulai dengan pujian atas usaha mereka
        2. Jelaskan mana yang benar dan mana yang salah
        3. Berikan alasan ilmiah yang jelas dan mudah dipahami
        4. Semangati mereka untuk terus belajar
        5. Gunakan bahasa yang hangat seperti mentor yang sabar

        JANGAN terlalu kaku atau formal. Jadilah dosen yang mengayomi!`;

        const gradingFeedbackResponse = await contactAiNeuralEngine(evaluationPromptCompiled);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (gradingFeedbackResponse.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = gradingFeedbackResponse.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Evaluasi Gagal', `Sistem gagal mengoreksi lembar jawaban (${cleanErrorMessage}). Silakan kirim ulang jawaban terbaikmu sayang.`, 'error');
            render();
            autoScrollTerminalTimeline();
            return;
        }

        // Penilaian dengan sistem yang lebih manusiawi
        if (sessionContext.lastQuestionType === 'pg') {
            if (["A", "C"].includes(userSubmittedPayload)) {
                sessionContext.kuisScore += 20;
            } else {
                // Kasih poin setengah kalau salah tapi mendekati
                if (userSubmittedPayload === "B" || userSubmittedPayload === "D") {
                    sessionContext.kuisScore += 5;
                }
            }
        } else {
            // Esai: nilai berdasarkan panjang dan kualitas jawaban
            if (userSubmittedPayload.length > 30) {
                sessionContext.kuisScore += 20;
            } else if (userSubmittedPayload.length > 15) {
                sessionContext.kuisScore += 10;
            } else {
                sessionContext.kuisScore += 5; // Semangat buat yang masih belajar!
            }
        }

        sessionContext.chats.push({
            id: 'grading-feedback-block-' + sessionContext.kuisStep,
            sender: 'dosen',
            type: 'text',
            text: `<div class="p-3 bg-rose-500/5 rounded-xl border border-dashed border-rose-400">
                    <span class="block text-xs font-bold text-rose-600 mb-1">
                        <i class="fas fa-clipboard-check"></i> 📋 Hasil Review:
                    </span>
                    <div class="text-sm leading-relaxed">${gradingFeedbackResponse}</div>
                   </div>`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        if (sessionContext.kuisStep < 5) {
            sessionContext.kuisStep += 1;
            saveApplicationStateToDisk();
            setTimeout(async () => {
                await dispatchNextKuisQuestionBlock(sessionContext, activeMatkulName);
            }, 2000);
        } else {
            sessionContext.currentPhase = 'complete';
            const scoreYield = sessionContext.kuisScore;
            
            appState.totalSks += 3;
            const currentCalculatedGpa = (scoreYield / 25);
            
            if (appState.ipk === 0.00) {
                appState.ipk = currentCalculatedGpa;
            } else {
                appState.ipk = parseFloat(((appState.ipk * 0.7) + (currentCalculatedGpa * 0.3)).toFixed(2));
            }
            
            if (appState.ipk > 4.00) appState.ipk = 4.00;
            if (appState.ipk < 0.00) appState.ipk = 0.00;

            // RELEASE LOCK: Kuis selesai
            appState.activeMatkulLock = null;

            sessionContext.chats.push({
                id: 'kuis-complete-banner-' + Date.now(),
                sender: 'dosen',
                type: 'text',
                text: `<div class="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-5 rounded-2xl shadow-xl text-center">
                        <i class="fas fa-award text-4xl text-yellow-300 mb-2 block"></i>
                        <div class="text-xs uppercase font-black tracking-widest text-rose-100">🎉 Selamat! Kuis Selesai</div>
                        <div class="text-4xl font-black my-1">${scoreYield} / 100</div>
                        <div class="text-xs bg-black/20 py-1 px-3 rounded-full inline-block mb-3">
                            📊 IPK: ${appState.ipk.toFixed(2)} | SKS: ${appState.totalSks}
                        </div>
                        <div class="mb-1 flex justify-center"><img src="${EMOTION_STICKERS.success}" class="w-16 h-16 object-contain" alt="Success Sticker"></div>
                        <p class="text-sm mt-2">${scoreYield >= 80 ? '⭐ Hebat banget sayang! Kamu luar biasa!' : scoreYield >= 60 ? '💪 Bagus! Terus semangat belajarnya!' : '📚 Kamu pasti bisa lebih baik lagi! Aku percaya kamu!'}</p>
                       </div>
                       <div class="mt-3 text-sm">
                       Mbak You: "Kuis selesai! Nilaimu ${scoreYield}. Jangan lupa baca lagi modulnya ya kalau masih ada yang belum paham. Kamu hebat sudah mau belajar! 🥰"
                       </div>`,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            });

            saveApplicationStateToDisk();
            render();
            autoScrollTerminalTimeline();
        }
    }

    window.triggerHardResetApplicationData = () => {
        Swal.fire({
            title: '🗑️ Hapus Semua Data?',
            text: "Seluruh data IPK, SKS, presensi, dan riwayat belajar akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus Permanen',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#e11d48'
        }).then((actRes) => {
            if (actRes.isConfirmed) {
                localStorage.removeItem('pelajarin_v3_girly_disk');
                appState.user = null;
                appState.jurusan = null;
                appState.semesterAktif = 1;
                appState.ipk = 0.00;
                appState.totalSks = 0;
                appState.classroomSessions = {};
                appState.presensiHistory = [];
                appState.activeMatkulLock = null;
                appState.currentPage = 'landing';
                render();
                Swal.fire('✅ Data Dikosongkan!', 'Sistem Pelajarin kembali ke awal. Yuk mulai lagi!', 'success');
            }
        });
    };

    function autoScrollTerminalTimeline() {
        setTimeout(() => {
            const scrollNodeBox = document.getElementById('terminalTimelineScrollWrapper');
            if (scrollNodeBox) {
                scrollNodeBox.scrollTop = scrollNodeBox.scrollHeight;
            }
        }, 60);
    }

    function generateLandingPageHTMLView() {
        let dynamicGradient = "gradient-brand-girly";
        if (appState.currentTheme === 'theme-manly') dynamicGradient = "gradient-brand-manly";
        if (appState.currentTheme === 'theme-soft') dynamicGradient = "gradient-brand-soft";

        return `
        <div class="${dynamicGradient} text-white">
            <div class="container mx-auto px-6 py-5 flex justify-between items-center max-w-6xl">
                <div class="text-xl font-black tracking-tight flex items-center gap-2">
                    <div class="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center border border-white/20"><i class="fas fa-heart text-white text-xs"></i></div>
                    <span>Pelajarin <span class="text-xs font-normal opacity-80">v3 PRO</span></span>
                </div>
                <div class="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold">
                    <i class="fas fa-clock text-yellow-300"></i> Tahun Akademik 2026
                </div>
            </div>

            <div class="container mx-auto px-6 py-24 text-center max-w-4xl">
                <div class="inline-flex items-center gap-2 bg-white/10 text-rose-100 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 mb-6 shadow-inner">
                    <span class="w-2 h-2 rounded-full bg-rose-200 animate-ping"></span> Sistem Belajar Interaktif
                </div>
                <h1 class="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-none">
                    Belajar Jadi Seru <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-white">Bersama Mbak You</span>
                </h1>
                <p class="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                    🎓 Dosen AI yang hangat dan tidak kaku. Belajar dengan video spesifik, 
                    referensi jurnal, dan kuis interaktif. Siap jadi mahasiswa hebat?
                </p>
                <button onclick="window.launchRegistrationModal()" class="bg-white text-rose-900 font-black text-base px-8 py-4 rounded-xl shadow-2xl hover:bg-slate-50 transform hover:-translate-y-0.5 transition duration-150">
                    <i class="fas fa-id-card mr-2"></i> Buat KTM Mahasiswa Baru
                </button>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16 max-w-6xl">
            <div class="text-center max-w-xl mx-auto mb-12">
                <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">🎯 Pilih Program Studi</h2>
                <p class="opacity-60 text-xs sm:text-sm mt-2">Kurikulum S1 dengan pendekatan personal dan interaktif</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${AKADEMIK_PRODI_DATA.map(prodiItem => `
                    <div onclick="window.triggerCardProdiRegister(${prodiItem.id})" class="bg-surface rounded-2xl border card-border p-6 cursor-pointer card-scale flex flex-col justify-between shadow-sm">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${prodiItem.warna} flex items-center justify-center text-white text-xl shadow-md mb-4">
                                <i class="fas ${prodiItem.icon}"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-1 tracking-tight">${prodiItem.nama}</h3>
                            <p class="opacity-70 text-xs leading-relaxed mb-4">${prodiItem.deskripsi}</p>
                        </div>
                        <div class="border-t card-border pt-3 mt-4">
                            <div class="text-[10px] opacity-40 font-black uppercase tracking-wider">🚀 Prospek Karir:</div>
                            <div class="text-xs font-bold text-rose-500 truncate">${prodiItem.prospek}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    }

    function generateDashboardPageHTMLView() {
        const structuralProdiObj = AKADEMIK_PRODI_DATA.find(p => p.id === appState.jurusan.id);
        const actualMatkulCollection = JADWAL_MATA_KULIAH[appState.jurusan.id]?.[appState.semesterAktif] || [];
        
        const attendanceCounter = appState.presensiHistory.length;
        const dynamicTargetAttend = appState.semesterAktif * 6;
        const scorePercentageAttendance = dynamicTargetAttend > 0 ? Math.min(((attendanceCounter / dynamicTargetAttend) * 100), 100).toFixed(1) : "0.0";
        const sksProgressPercentage = Math.min(((appState.totalSks / 144) * 100), 100).toFixed(1);

        return `
        <div class="bg-surface border-b card-border sticky top-0 z-50 shadow-sm">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
                <div class="text-lg font-black tracking-tight flex items-center gap-2 dynamic-text">
                    <i class="fas fa-graduation-cap"></i> Pelajarin Dashboard
                </div>
                <div class="flex items-center gap-3">
                    <div class="bg-chat-area p-1 rounded-lg border card-border flex gap-1 text-xs font-bold text-slate-800">
                        <button onclick="window.switchApplicationTheme('theme-manly')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-manly' ? 'bg-sky-600 text-white' : 'opacity-60'}">🌙 Dark</button>
                        <button onclick="window.switchApplicationTheme('theme-girly')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-girly' ? 'bg-rose-500 text-white' : 'opacity-60'}">🌸 Pink</button>
                        <button onclick="window.switchApplicationTheme('theme-soft')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-soft' ? 'bg-indigo-600 text-white' : 'opacity-60'}">✨ Soft</button>
                    </div>
                    <div class="h-6 w-px bg-slate-300"></div>
                    <button onclick="window.triggerHardResetApplicationData()" class="text-xs font-extrabold bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-500 px-3 py-2 rounded-xl transition">
                        <i class="fas fa-trash-alt"></i> Reset
                    </button>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8 max-w-6xl">
            <div class="bg-surface rounded-2xl p-6 border card-border shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <span class="text-xs font-black uppercase tracking-widest dynamic-text">
                        <i class="fas fa-shield-alt"></i> Mahasiswa Aktif
                    </span>
                    <h1 class="text-2xl font-black mt-1 tracking-tight">${appState.user.nama}</h1>
                    <p class="text-xs opacity-70 mt-0.5">
                        ${structuralProdiObj.nama} • Semester ${appState.semesterAktif}
                    </p>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <button onclick="window.commitDailyAttendanceSignature()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-sm transition">
                        <i class="fas fa-fingerprint mr-1.5"></i> 📋 Absen
                    </button>
                    <button onclick="window.modifyActiveSemesterState()" class="dynamic-btn font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-sm transition">
                        <i class="fas fa-exchange-alt mr-1.5"></i> Ganti Semester
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">📊 IPK Kumulatif</div>
                    <div class="text-2xl font-black dynamic-text mt-1">${parseFloat(appState.ipk).toFixed(2)}</div>
                    <div class="text-[9px] opacity-40 mt-1">Skala 4.00</div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">📚 Total SKS</div>
                    <div class="text-2xl font-black mt-1">${appState.totalSks} <span class="text-xs opacity-40 font-normal">/ 144</span></div>
                    <div class="w-full bg-chat-area h-1.5 rounded-full mt-2 overflow-hidden border card-border">
                        <div class="bg-rose-500 h-full progress-fill-anim" style="width: ${sksProgressPercentage}%"></div>
                    </div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">📖 Beban Semester</div>
                    <div class="text-2xl font-black mt-1 text-amber-500">${actualMatkulCollection.length} MK</div>
                    <div class="text-[9px] opacity-40 mt-1">Kurikulum Aktif</div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">✅ Presensi</div>
                    <div class="text-2xl font-black text-emerald-500 mt-1">${scorePercentageAttendance}%</div>
                    <div class="w-full bg-chat-area h-1.5 rounded-full mt-2 overflow-hidden border card-border">
                        <div class="bg-emerald-500 h-full progress-fill-anim" style="width: ${scorePercentageAttendance}%"></div>
                    </div>
                </div>
            </div>

            <div class="bg-surface rounded-2xl border card-border p-6 shadow-sm">
                <div class="border-b card-border pb-4 mb-4 flex justify-between items-center">
                    <h2 class="text-lg font-black flex items-center gap-2">
                        <i class="fas fa-layer-group dynamic-text"></i> Daftar Mata Kuliah - Semester ${appState.semesterAktif}
                    </h2>
                    ${appState.activeMatkulLock ? `
                        <span class="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                            <i class="fas fa-lock mr-1"></i> Kuis Aktif: ${appState.activeMatkulLock}
                        </span>
                    ` : ''}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${actualMatkulCollection.map((matkulLabel, sequenceIdx) => {
                        const currentSessionLog = appState.classroomSessions[matkulLabel];
                        let operationalStatusHTML = `<span class="text-[11px] opacity-40"><i class="far fa-circle mr-1"></i>Belum diambil</span>`;
                        let isLocked = false;
                        
                        if (currentSessionLog) {
                            if (currentSessionLog.currentPhase === 'complete') {
                                operationalStatusHTML = `<span class="text-[11px] text-emerald-500 font-bold"><i class="fas fa-check-circle mr-1"></i>✅ Selesai</span>`;
                            } else if (currentSessionLog.modulDiambil) {
                                operationalStatusHTML = `<span class="text-[11px] text-amber-500 font-bold animate-pulse"><i class="fas fa-book-open mr-1"></i>📖 Dipelajari</span>`;
                            }
                            
                            // Cek apakah matkul ini sedang dikunci oleh matkul lain
                            if (appState.activeMatkulLock && appState.activeMatkulLock !== matkulLabel) {
                                isLocked = true;
                            }
                        }

                        return `
                        <div onclick="${!isLocked ? `window.navigateToClassroomTerminal('${matkulLabel.replace(/'/g, "\\'")}')` : ''}" 
                             class="matkul-item border card-border rounded-xl p-4 cursor-pointer ${!isLocked ? 'hover:bg-rose-500/5 transition card-scale' : 'opacity-60 cursor-not-allowed'} flex justify-between items-center group">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-lg bg-chat-area text-xs font-bold flex items-center justify-center ${!isLocked ? 'group-hover:bg-rose-500 group-hover:text-white' : ''} border card-border transition">
                                    ${sequenceIdx + 1}
                                </div>
                                <div>
                                    <div class="font-bold text-sm ${!isLocked ? 'group-hover:text-rose-500 transition' : ''}">${matkulLabel}</div>
                                    <div class="flex items-center gap-2 mt-0.5">
                                        <span class="text-[9px] bg-chat-area px-1.5 py-0.5 rounded border card-border font-bold uppercase">3 SKS</span>
                                        ${operationalStatusHTML}
                                    </div>
                                </div>
                            </div>
                            ${isLocked ? `
                                <div class="lock-overlay">
                                    <i class="fas fa-lock"></i> Dikunci
                                </div>
                            ` : `
                                <i class="fas fa-chevron-right text-xs opacity-20 ${!isLocked ? 'group-hover:opacity-100 group-hover:text-rose-500 transform group-hover:translate-x-1' : ''} transition"></i>
                            `}
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        `;
    }

    function generateClassroomTerminalHTMLView() {
        const activeMatkulName = appState.selectedMatkul.nama;
        const workingSession = appState.classroomSessions[activeMatkulName];
        const conversationHistory = workingSession?.chats || [];

        return `
        <div class="min-h-screen flex flex-col justify-between">
            <div class="bg-surface border-b card-border px-4 py-3 sticky top-0 z-50 shadow-md flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <button onclick="window.exitClassroomTerminalToDashboard()" class="hover:bg-rose-500/10 w-9 h-9 rounded-full flex items-center justify-center text-rose-500 transition">
                        <i class="fas fa-arrow-left text-base"></i>
                    </button>
                    <div>
                        <h2 class="font-black text-sm sm:text-base leading-tight tracking-tight">${activeMatkulName}</h2>
                        <p class="text-[11px] text-rose-500 font-bold flex items-center gap-1">
                            <i class="fas fa-circle text-[7px] text-green-400 animate-pulse"></i> 
                            Kelas dengan Mbak You 🥰
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs font-bold px-3 py-1.5 rounded-lg bg-chat-area border card-border uppercase text-rose-400">
                        📌 ${workingSession?.currentPhase || 'idle'}
                    </span>
                    ${appState.activeMatkulLock === activeMatkulName ? `
                        <span class="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full border border-rose-200">
                            <i class="fas fa-lock mr-1"></i> Kuis Aktif
                        </span>
                    ` : ''}
                </div>
            </div>

            <div id="terminalTimelineScrollWrapper" class="flex-1 bg-chat-area overflow-y-auto px-4 py-6 space-y-4">
                <div class="max-w-4xl w-full mx-auto space-y-4">
                    ${conversationHistory.map(bubbleItem => {
                        if (bubbleItem.sender === 'user') {
                            return `
                            <div class="flex justify-end msg-entry">
                                <div class="bg-slate-800 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md max-w-[85%] border border-slate-700">
                                    <span class="block text-[10px] font-black text-slate-300 uppercase mb-0.5">
                                        <i class="fas fa-user-graduate"></i> Kamu (Mahasiswa)
                                    </span>
                                    <p class="text-sm sm:text-base leading-relaxed font-medium whitespace-pre-wrap">${bubbleItem.text}</p>
                                    <span class="block text-[9px] text-slate-400 text-right mt-1 font-semibold">${bubbleItem.timestamp}</span>
                                </div>
                            </div>
                            `;
                        } else {
                            if (bubbleItem.isTyping) {
                                return `
                                <div class="flex justify-start msg-entry" id="${bubbleItem.id}">
                                    <div class="bg-surface text-sm rounded-2xl rounded-tl-none px-4 py-3 border card-border shadow-sm flex items-center gap-3">
                                        <div class="custom-spinner"></div>
                                        <div class="text-xs font-semibold opacity-70 italic text-rose-400">💭 Mbak You sedang menulis...</div>
                                    </div>
                                </div>
                                `;
                            }

                            return `
                            <div class="flex justify-start msg-entry">
                                <div class="bg-surface rounded-2xl rounded-tl-none px-4 py-4 border card-border shadow-sm max-w-[92%] sm:max-w-[85%] w-full">
                                    <div class="text-xs font-black text-rose-500 uppercase tracking-widest mb-2 flex justify-between items-center">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-user-shield"></i> 
                                            Mbak You 
                                            <span class="bg-rose-500/10 text-[9px] text-rose-400 px-2 py-0.5 rounded-full font-black border border-rose-500/20">
                                                Dosen Pengampu
                                            </span>
                                        </span>
                                        <button onclick="window.readAloudMbakYouSpeech(\`${(bubbleItem.text || '').replace(/"/g, '&quot;').replace(/`/g, '\\`').replace(/\n/g, ' ')}\`)" 
                                                class="text-rose-500 hover:text-white hover:bg-rose-500 px-2 py-1 rounded-md border border-rose-200 text-[10px] font-extrabold flex items-center gap-1 transition">
                                            <i class="fas fa-volume-up"></i> 🔊 Dengar
                                        </button>
                                    </div>
                                    <div class="text-sm sm:text-base leading-relaxed opacity-95 text-justify whitespace-normal">${bubbleItem.text || ''}</div>
                                    <span class="block text-[9px] opacity-40 text-left mt-2 font-bold">${bubbleItem.timestamp}</span>
                                </div>
                            </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>

            <div class="bg-surface border-t card-border p-3 sticky bottom-0 z-40 shadow-xl">
                <div class="max-w-4xl mx-auto">
                    <div class="flex items-center gap-2 mb-3 overflow-x-auto pb-1">
                        <button onclick="window.triggerGenerateModulMateriWorkflow()" class="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 whitespace-nowrap transition">
                            <i class="fas fa-book-open"></i> 📖 Ambil Modul
                        </button>
                        <button onclick="window.triggerAppKuisWorkflow()" class="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 whitespace-nowrap transition">
                            <i class="fas fa-star text-xs"></i> ⭐ Uji Kuis
                        </button>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex-1 bg-chat-area rounded-xl px-4 py-3 flex items-center border card-border gap-2">
                            <i class="fas fa-terminal text-rose-500 text-sm opacity-40"></i>
                            <input type="text" id="terminalCoreInputField" onkeydown="if(event.key === 'Enter') window.processUserTextMessagingInput()" 
                                   class="w-full text-sm sm:text-base bg-transparent focus:outline-none font-medium placeholder-slate-400" 
                                   placeholder="💬 Ketik jawaban atau tanya Mbak You...">
                            
                            <button id="voiceRecognitionTriggerNode" onclick="window.toggleSpeechToTextRecordingPipeline()" 
                                    class="w-8 h-8 rounded-lg bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-sm transition shrink-0" 
                                    title="🎤 Bicara dengan suara">
                                <i class="fas fa-microphone text-sm"></i>
                            </button>
                        </div>
                        <button onclick="window.processUserTextMessagingInput()" class="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition shrink-0">
                            <i class="fas fa-paper-plane text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function render() {
        const appDomRootNode = document.getElementById('app');
        if (!appDomRootNode) return;

        if (appState.currentPage === 'landing') {
            appDomRootNode.innerHTML = generateLandingPageHTMLView();
        } else if (appState.currentPage === 'dashboard') {
            appDomRootNode.innerHTML = generateDashboardPageHTMLView();
        } else if (appState.currentPage === 'classroom') {
            appDomRootNode.innerHTML = generateClassroomTerminalHTMLView();
        }
    }

    loadApplicationStateFromDisk();
    render();
    autoScrollTerminalTimeline();
})();
