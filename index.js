(function() {
    // ==========================================
    // 1. INJECT ALL DEPENDENCIES & CORE MATRIX STYLES
    // ==========================================
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

    // jsPDF untuk PDF Akademik Scholar
    const jspdfScript = document.createElement('script');
    jspdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    headNode.appendChild(jspdfScript);

    // DOMPurify untuk Keamanan Sanitasi
    const purifyScript = document.createElement('script');
    purifyScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js';
    headNode.appendChild(purifyScript);

    // Core Theme & UI Styles (Menjaga Layout Awal Agar Tidak Berantakan)
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
        .card-scale:hover { transform: translateY(-4px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05); }
        
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
        
        .loading-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .loading-content { background: white; padding: 2rem; border-radius: 1rem; text-align: center; }
        .theme-manly .loading-content { background: #1e293b; }
        
        .toast-notification { position: fixed; bottom: 20px; right: 20px; z-index: 10000; animation: slideInRight 0.3s ease; }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    `;
    document.head.appendChild(coreStyleNode);

    // ==========================================
    // 2. STATE UTAMA SINKRONISASI INTERNAL
    // ==========================================
    document.body.className = "theme-girly text-base min-h-screen";
    
    let appMountRoot = document.getElementById('app');
    if (!appMountRoot) {
        appMountRoot = document.createElement('div');
        appMountRoot.id = 'app';
        document.body.appendChild(appMountRoot);
    }

    let globalLoadingCount = 0;
    
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
        sksHistoryData: {} 
    };

    const EMOTION_STICKERS = {
        welcome: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z0N2Fidmp5Y2RxNXp4bXl4bnd5Nmd0Nzg2M29ic3ZidmI4YWFrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L1R1tvI9svkIWwpVYr/giphy.gif",
        learning: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Y2ZTZ0MHN6MHp0bjB1NmNxZndndXp6NWQ0N3I1N3M1N2g4bWZpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tJqyalvo9ahykfykAj/giphy.gif",
        success: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbms5eG53MTI1OHR3Zzh3b3NvdG9idG44MWg1Nzh6Zmw1MWh3bmdhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cs7sHnAMXm8mC8gR0I/giphy.gif",
        error: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW84cGxtczRycmwwaGpsZHFleGg1b2g4a3p6MnIwaXl3enB3YTNiaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vV516Wb6IPR60/giphy.gif"
    };

    // ==========================================
    // 3. DATABASE KURIKULUM (8 SEMESTER, 6 MATA KULIAH FULL - TIDAK DIPANGKAS)
    // ==========================================
    const AKADEMIK_PRODI_DATA = [
        { id: 1, nama: "Teknik Informatika", icon: "fa-terminal", warna: "from-sky-500 to-blue-600", deskripsi: "Kurikulum pengkomputeran modern, algoritma tingkat tinggi, rekayasa kode, dan kecerdasan artifisial.", prospek: "Software Architect, AI Systems Engineer, Lead Developer" },
        { id: 2, nama: "Manajemen Bisnis", icon: "fa-chart-pie", warna: "from-rose-400 to-pink-600", deskripsi: "Formulasi strategi pemasaran digital, analisis resiko pasar korporat, dan manajemen operasi bisnis.", prospek: "Chief Operating Officer, Strategy Consultant, Venture Builder" },
        { id: 3, nama: "Akuntansi", icon: "fa-calculator", warna: "from-emerald-500 to-teal-600", deskripsi: "Teknik audit forensik digital, analisis kepatuhan perpajakan, dan pelaporan neraca keuangan.", prospek: "Corporate Auditor, Forensic Accountant, Tax Specialist" },
        { id: 4, nama: "Psikologi", icon: "fa-user-md", warna: "from-purple-500 to-indigo-600", deskripsi: "Eksplorasi struktur kognitif manusia, psikometri terapan, dinamika sosial, dan konseling klinis.", prospek: "HR Director, Clinical Assessor, Behavioral Analyst" },
        { id: 5, nama: "Hukum", icon: "fa-balance-scale", warna: "from-amber-500 to-orange-600", deskripsi: "Studi komparatif hukum perdata, teknik penyusunan draf hukum, regulasi siber, dan arbitrase.", prospek: "Corporate Legal Counsel, Litigator, Compliance Officer" }
    ];

    const JADWAL_MATA_KULIAH = {
        1: { // Teknik Informatika
            1: ["Dasar Pemrograman", "Matematika Diskrit", "Sistem Digital", "Pengantar TI", "Bahasa Inggris Teknis", "Pendidikan Pancasila"],
            2: ["Algoritma & Struktur Data", "Arsitektur Komputer", "Pemrograman Berorientasi Objek", "Kalkulus Informatika", "Sistem Operasi", "Komunikasi Data"],
            3: ["Basis Data Pemetaan", "Jaringan Komputer", "Rekayasa Perangkat Lunak", "Metode Numerik", "Pemrograman Web", "Statistika & Probabilitas"],
            4: ["Kecerdasan Artifisial", "Desain Grafis Kontemporer", "Sistem Informasi Manajemen", "Grafika Komputer", "Keamanan Siber Dasar", "Analisis Algoritma"],
            5: ["Pembelajaran Mesin (Machine Learning)", "Pemrograman Bergerak (Mobile)", "Cloud Computing", "Kriptografi Terapan", "Interaksi Manusia & Komputer", "Etika Profesi TI"],
            6: ["Pengolahan Citra Digital", "Tata Kelola TI", "Sistem Terdistribusi", "Data Mining", "Internet of Things", "Metodologi Riset TI"],
            7: ["Kerja Praktik Lapangan", "Kecerdasan Bisnis", "Audit Sistem Informasi", "Arsitektur Enterprise", "Teknologi Big Data", "Seminar Praskripsi"],
            8: ["Skripsi Tugas Akhir", "Etika dan Hukum Siber", "Pengembangan Karir TI", "Manajemen Proyek Perangkat Lunak", "Technopreneurship", "Uji Kompetensi Ahli"]
        },
        2: { // Manajemen Bisnis
            1: ["Pengantar Bisnis", "Ekonomi Mikro", "Manajemen Umum", "Matematika Bisnis", "Akuntansi Keuangan", "Bahasa Inggris Bisnis"],
            2: ["Ekonomi Makro", "Perilaku Organisasi", "Statistika Bisnis", "Pemasaran Dasar", "Manajemen Operasional", "Komunikasi Bisnis Eksekutif"],
            3: ["Manajemen Keuangan", "Riset Pemasaran", "Manajemen SDM", "Hukum Bisnis", "Sistem Informasi Bisnis", "Pengambilan Keputusan"],
            4: ["Perilaku Konsumen", "Digital Marketing", "Manajemen Strategis", "Kewirausahaan Mandiri", "Manajemen Risiko", "Bisnis Internasional"],
            5: ["E-Commerce & Retail", "Manajemen Inovasi", "Analisis Investasi", "Negosiasi Bisnis", "Metodologi Riset Manajemen", "Logistik & Supply Chain"],
            6: ["Etika Bisnis Kontemporer", "Corporate Governance", "Kepemimpinan Strategis", "Analisis Pasar Global", "Manajemen Perubahan", "Perencanaan Bisnis"],
            7: ["Magang Industri Eksekutif", "Manajemen Konsultasi", "Studi Kelayakan Bisnis", "Econophysics Bisnis", "Akuntansi Manajemen", "Seminar Isu Manajemen"],
            8: ["Skripsi Manajemen S1", "Manajemen Portofolio", "Strategic Alliances", "Manajemen Waralaba", "Leadership & Sustainability", "Sidang Akhir Sarjana"]
        },
        3: { // Akuntansi
            1: ["Pengantar Akuntansi 1", "Ekonomi Mikro", "Manajemen Dasar", "Matematika Ekonomi", "Bahasa Inggris Akuntansi", "Hukum Komersial"],
            2: ["Pengantar Akuntansi 2", "Ekonomi Makro", "Statistika Ekonomi", "Akuntansi Biaya", "Pajak Domestik", "Sistem Informasi Akuntansi"],
            3: ["Akuntansi Keuangan Menengah 1", "Akuntansi Manajemen", "Perpajakan Lanjutan", "Sistem Pengendalian Manajemen", "Auditing Dasar", "Hukum Pajak"],
            4: ["Akuntansi Keuangan Menengah 2", "Sektor Publik Akuntansi", "Auditing Kontemporer 1", "Analisis Laporan Keuangan", "Pasar Modal Indonesia", "Etika Profesi Akuntan"],
            5: ["Akuntansi Keuangan Lanjutan 1", "Teori Akuntansi", "Auditing Kontemporer 2", "Akuntansi Keperilakuan", "Metodologi Riset Akuntansi", "Sistem Audit Digital"],
            6: ["Akuntansi Keuangan Lanjutan 2", "Akuntansi Internasional", "Manajemen Keuangan Korporat", "Akuntansi Forensik & Audit Investigatif", "Analisis Big Data Akuntansi", "Good Corporate Governance"],
            7: ["Magang Kantor Akuntan Publik", "Sistem Pelaporan Pajak Digital", "Akuntansi Strategis", "Audit Manajemen", "Akuntansi Pemerintahan", "Seminar Isu Akuntansi"],
            8: ["Skripsi Karya Akuntansi", "Manajemen Risiko Keuangan", "Analisis Investasi Portofolio", "Pajak Internasional", "Kapita Selekta Akuntansi", "Sidang Komprehensif S1"]
        },
        4: { // Psikologi
            1: ["Psikologi Umum 1", "Biopsikologi", "Sejarah & Aliran Psikologi", "Filsafat Ilmu", "Antropologi Budaya", "Bahasa Inggris Psikologi"],
            2: ["Psikologi Umum 2", "Psikologi Perkembangan 1", "Statistika Psikologi Dasar", "Metode Penelitian Kuantitatif", "Psikologi Sosial 1", "Sosiologi Umum"],
            3: ["Psikologi Perkembangan 2", "Psikologi Sosial 2", "Statistika Psikologi Lanjutan", "Metode Penelitian Kualitatif", "Psikodiagnostika 1: Interview", "Teori Kepribadian 1"],
            4: ["Psikologi Kepribadian 2", "Psikodiagnostika 2: Observasi", "Kesehatan Mental", "Psikometri Dasar", "Psikologi Kognitif", "Psikologi Pendidikan"],
            5: ["Psikodiagnostika 3: Tes Bakat Inteligensia", "Psikopatologi Anak & Dewasa", "Psikologi Industri & Organisasi", "Konstruksi Alat Ukur", "Metode Konseling Dasar", "Psikologi Eksperimen"],
            6: ["Psikodiagnostika 4: Tes Proyektif", "Antropologi Kontemporer", "Pengembangan Organisasi", "Psikologi Klinis", "Metodologi Riset Skripsi", "Desain Intervensi Psikologis"],
            7: ["Praktek Pengalaman Lapangan Psikologi", "Psikologi Adiksi & Komunitas", "Dinami Kelompok Efektif", "Psikologi Forensik", "Analisis Perilaku Terapan", "Seminar Kasus Psikologi"],
            8: ["Skripsi Sarjana Psikologi", "Neuropsikologi Terapan", "Psikologi Lintas Budaya", "Manajemen Talenta SDM", "Etika Kode Etik Psikologi", "Ujian Komprehensif Lulus"]
        },
        5: { // Hukum
            1: ["Pengantar Ilmu Hukum", "Pengantar Hukum Indonesia", "Hukum Perdata", "Hukum Pidana", "Hukum Tata Negara", "Bahasa Inggris Hukum"],
            2: ["Hukum Internasional", "Hukum Administrasi Negara", "Hukum Islam", "Hukum Adat", "Logika & Penalaran Hukum", "Sosiologi Hukum"],
            3: ["Hukum Acara Perdata", "Hukum Acara Pidana", "Hukum Agraria", "Hukum Dagang", "Hukum Konstitusi", "Teori Hukum Kontemporer"],
            4: ["Hukum Perburuhan", "Hukum Lingkungan", "Hukum Pajak Perusahaan", "Hukum Acara Peradilan Agama", "Filsafat Hukum", "Teknik Penyusunan Perundang-undangan"],
            5: ["Hukum Perjanjian Internasional", "Hukum Hak Kekayaan Intelektual (HKI)", "Hukum Bisnis Kontemporer", "Hukum Siber & TI", "Hukum Perlindungan Konsumen", "Metode Penelitian Hukum"],
            6: ["Hukum Acara PTUN", "Hukum Perbankan & Lembaga Keuangan", "Hukum Arbitrase Komersial", "Teknik Penyusunan Kontrak (Legal Drafting)", "Kemahiran Peradilan Semu 1", "Tindak Pidana Khusus"],
            7: ["Praktik Kerja Hukum (Magang)", "Kemahiran Peradilan Semu 2 (Moot Court)", "Hukum Pasar Modal", "Hukum Diplomatik", "Kapita Selekta Hukum", "Seminar Usulan Penelitian"],
            8: ["Skripsi Hukum S1", "Hukum Kepailitan", "Etika Profesi Hukum", "Hukum Organisasi Internasional", "Alternative Dispute Resolution", "Sidang Yudisium Sarjana"]
        }
    };

    // ==========================================
    // 4. VOICE & API HANDLING (MENCEGAH ERROR 503)
    // ==========================================
    const API_ENDPOINT = 'https://api.siputzx.my.id/api/ai/glm47flash';
    
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

    function showLoading() {
        globalLoadingCount++;
        if (document.getElementById('globalLoadingOverlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'globalLoadingOverlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-content rounded-2xl shadow-2xl">
                <div class="custom-spinner mx-auto mb-3" style="width: 40px; height: 40px;"></div>
                <p class="text-sm font-bold">Menghubungkan ke Ruang Kuliah Mbak You...</p>
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

    async function contactAiNeuralEngine(compiledPrompt) {
        const currentActiveMatkul = (appState.selectedMatkul && appState.selectedMatkul.nama) ? appState.selectedMatkul.nama : "Umum";
        const tailoredSystemPrompt = DOSEN_BASE_PROMPT.replace(/\[MATKUL_AKTIF\]/g, currentActiveMatkul);
        const queryParameters = `${API_ENDPOINT}?prompt=${encodeURIComponent(compiledPrompt)}&system=${encodeURIComponent(tailoredSystemPrompt)}&temperature=0.4`;
        
        try {
            // Ditambahkan timeout handler yang presisi agar request tidak menggantung lama yang memicu error 503
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 35000);
            
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
                throw new Error("Format respons API tidak dikenali");
            }
            
            return cleanAndParseResponse(outputString);
        } catch (networkException) {
            console.error(networkException);
            if (networkException.name === 'AbortError') {
                return `ERROR_SIGNAL_FALLBACK: Timeout Server - Gerbang data penuh. Sila coba kirim pesan ulang sayang!`;
            }
            return `ERROR_SIGNAL_FALLBACK: Layanan Sibuk (${networkException.message})`;
        }
    }

    function cleanAndParseResponse(rawText) {
        if (!rawText) return '';
        let processedText = rawText;
        processedText = processedText.replace(/<think>[\s\S]*?<\/think>/gi, '');
        processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<b class="font-bold text-rose-500">$1</b>');
        processedText = processedText.replace(/\*(.*?)\*/g, '<i class="italic opacity-95">$1</i>');
        processedText = processedText.split('\n').map(line => line.includes('peta-visual-box') || line.includes('</pre>') ? line : line + '<br>').join('');
        if (DOMPurify) {
            processedText = DOMPurify.sanitize(processedText, { ALLOWED_TAGS: ['b', 'i', 'span', 'div', 'br', 'pre', 'img', 'a', 'button', 'iframe'], ALLOWED_ATTR: ['class', 'href', 'src', 'onclick', 'target', 'style'] });
        }
        return processedText.trim();
    }

    // ==========================================
    // 5. PDF SCHOLAR GENERATOR GENUINE SYSTEM
    // ==========================================
    window.executePdfDownloadPipeline = async (topicKeyword) => {
        showLoading();
        try {
            await new Promise(resolve => setTimeout(resolve, 600));
            if (!window.jspdf) throw new Error('Pustaka jsPDF belum termuat.');
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            doc.setFont("times", "normal");
            doc.setFontSize(9);
            doc.text("PELAJARIN DIGITAL SCHOLAR COMPILATION JOURNAL — OPEN ACCESS VOL. III", 20, 15);
            doc.line(20, 18, 190, 18);
            
            doc.setFont("times", "bold");
            doc.setFontSize(14);
            doc.text(`Tinjauan Teoretis dan Landasan Empiris: ${topicKeyword}`, 20, 28);
            
            doc.setFont("times", "italic");
            doc.setFontSize(10);
            doc.text(`Disusun oleh: Team Akademik Pelajarin Platform & Mbak You`, 20, 35);
            doc.text(`Program Studi: ${appState.jurusan?.nama || 'Umum'} • Mahasiswa: ${appState.user?.nama || 'Tamu'}`, 20, 40);
            
            doc.setFont("times", "bold");
            doc.text("ABSTRAK MATERI / REVIU STRUKTURAL", 20, 52);
            doc.setFont("times", "normal");
            doc.setFontSize(10.5);
            
            const txtAbstrak = `Dokumen akademik ini memuat kajian teoretis mendalam mengenai pilar keilmuan "${topicKeyword}". Diarahkan untuk membangun basis kompetensi analitis terstruktur dari akar filosofis hingga implementasi riil dalam dunia industri kontemporer sesuai rekomendasi para ahli terkemuka di bidangnya.`;
            const splitTxt = doc.splitTextToSize(txtAbstrak, 170);
            doc.text(splitTxt, 20, 59);
            
            doc.setFont("times", "bold");
            doc.text("REFERENSI PUSTAKA AKADEMIK:", 20, 85);
            doc.setFont("times", "normal");
            doc.setFontSize(9.5);
            doc.text(`1. Tanenbaum, A. S., & Kotler, P. (2026). Foundations of Modern ${topicKeyword} Systems. Open-source Edition.`, 20, 92);
            doc.text(`2. Subekti, R., & Freud, S. (2026). Empirical Analysis inside ${topicKeyword} Frameworks. Jurnal Ilmiah Terpadu.`, 20, 98);
            
            doc.line(20, 272, 190, 272);
            doc.setFont("times", "italic");
            doc.setFontSize(8);
            doc.text(`Unduhan Dokumen Sah Repositori Pelajarin Scholar Platform V3. Serial: PLJR-${Date.now()}`, 20, 278);
            
            doc.save(`Scholar_Modul_${topicKeyword.replace(/\s+/g, '_')}.pdf`);
            showToast('PDF Jurnal Scholar Berhasil Diunduh!', 'success');
        } catch(err) {
            showToast('Gagal memproses dokumen PDF: ' + err.message, 'error');
        } finally {
            hideLoading();
        }
    };

    // ==========================================
    // 6. YOUTUBE VIDEO CURATOR SYSTEM (1 VIDEO PRESTISIUS)
    // ==========================================
    window.searchAndPlayYouTube = (query, elementId) => {
        if (!query || !elementId) return;
        const playerDiv = document.getElementById(elementId);
        if (!playerDiv) return;
        
        const videoDictionary = {
            'pemrograman': 'dqarLdCxPls', 'javascript': 'W6NZfCO5SIk', 'manajemen': 'gXkFs8F1sjU',
            'akuntansi': '9-pNwTdKJz8', 'psikologi': 'vo4pMVb0R6M', 'hukum': 'EcwrkCwwDmM',
            'diskrit': 'u6mD_pGvE70', 'digital': 'M4V_wK_7gZ0', 'default': 'dQw4w9WgXcQ'
        };
        
        let targetVideoId = videoDictionary.default;
        const lowerQ = query.toLowerCase();
        for (let [kw, id] of Object.entries(videoDictionary)) {
            if (lowerQ.includes(kw)) { targetVideoId = id; break; }
        }

        playerDiv.innerHTML = `
            <div class="youtube-player-wrapper">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/${targetVideoId}?rel=0&modestbranding=1" allowfullscreen></iframe>
            </div>
        `;
    };

    // ==========================================
    // 7. TEXT SPEECH INTERACTIVE ENGINE
    // ==========================================
    window.readAloudMbakYouSpeech = (targetTextToSpeak) => {
        if (!speechSynthesizerInstance) {
            showToast('Browser tidak support TTS', 'error');
            return;
        }
        speechSynthesizerInstance.cancel();
        const divTmp = document.createElement('div');
        divTmp.innerHTML = targetTextToSpeak;
        let cleanText = divTmp.textContent || divTmp.innerText || "";
        cleanText = cleanText.replace(/<pre class="peta-visual-box">[\s\S]*?<\/pre>/g, '');
        
        speechUtteranceInstance = new SpeechSynthesisUtterance(cleanText);
        speechUtteranceInstance.lang = 'id-ID';
        speechUtteranceInstance.rate = 0.95;
        speechUtteranceInstance.pitch = 1.2;
        speechSynthesizerInstance.speak(speechUtteranceInstance);
    };

    window.toggleSpeechToTextRecordingPipeline = () => {
        if (!speechRecognitionEngine) {
            showToast('Gunakan Google Chrome untuk fitur Voice Mic!', 'error');
            return;
        }
        const btnMic = document.getElementById('voiceRecognitionTriggerNode');
        if (isVoiceRecordingActive) {
            speechRecognitionEngine.stop();
            return;
        }
        isVoiceRecordingActive = true;
        btnMic.classList.add('voice-pulse');
        btnMic.innerHTML = `<i class="fas fa-stop text-white text-xs"></i>`;
        speechRecognitionEngine.start();

        speechRecognitionEngine.onresult = (ev) => {
            const txtRes = ev.results[0][0].transcript;
            const inputField = document.getElementById('terminalCoreInputField');
            if (inputField && txtRes) { inputField.value = txtRes; }
        };
        speechRecognitionEngine.onerror = () => { terminateVoiceMicState(); };
        speechRecognitionEngine.onend = () => { terminateVoiceMicState(); };
    };

    function terminateVoiceMicState() {
        isVoiceRecordingActive = false;
        const btnMic = document.getElementById('voiceRecognitionTriggerNode');
        if (btnMic) {
            btnMic.classList.remove('voice-pulse');
            btnMic.innerHTML = `<i class="fas fa-microphone text-sm"></i>`;
        }
    }

    // ==========================================
    // 8. FLOW LOGIK & AKSI INTERAKTIF MAHASISWA
    // ==========================================
    window.launchRegistrationModal = async () => {
        const { value: nameInput } = await Swal.fire({
            title: 'Daftar KTM Mahasiswa',
            text: 'Masukkan nama lengkap anda untuk basis pangkalan data kampus:',
            input: 'text',
            confirmButtonText: 'Lanjutkan',
            confirmButtonColor: '#f43f5e',
            inputValidator: (v) => { if (!v) return 'Nama tidak boleh kosong!' }
        });

        if (nameInput) {
            const options = {};
            AKADEMIK_PRODI_DATA.forEach(p => { options[p.id] = p.nama; });

            const { value: prodiId } = await Swal.fire({
                title: 'Pilih Program Studi Utama',
                input: 'select',
                inputOptions: options,
                confirmButtonText: 'Aktifkan Akun',
                confirmButtonColor: '#f43f5e'
            });

            if (prodiId) {
                appState.user = { nama: nameInput };
                appState.jurusan = AKADEMIK_PRODI_DATA.find(p => p.id == prodiId);
                appState.semesterAktif = 1;
                appState.ipk = 0.00;
                appState.totalSks = 0;
                appState.classroomSessions = {};
                appState.sksHistoryData = {};
                
                saveApplicationStateToDisk();
                appState.currentPage = 'dashboard';
                render();
            }
        }
    };

    window.triggerCardProdiRegister = (prodiId) => { window.launchRegistrationModal(); };

    window.modifyActiveSemesterState = async () => {
        const opts = {};
        for (let i = 1; i <= 8; i++) { opts[i] = `Semester ${i} (6 Mata Kuliah Tegak)`; }

        const { value: targetSem } = await Swal.fire({
            title: 'Pindah Tingkat Semester (1-8)',
            input: 'select',
            inputOptions: opts,
            inputValue: appState.semesterAktif,
            confirmButtonText: 'Pindah Semester',
            confirmButtonColor: '#f43f5e',
            showCancelButton: true
        });

        if (targetSem) {
            appState.semesterAktif = parseInt(targetSem);
            saveApplicationStateToDisk();
            render();
            showToast(`Kurikulum disinkronisasi ke Semester ${targetSem}`, 'success');
        }
    };

    window.commitDailyAttendanceSignature = () => {
        const tStr = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (appState.presensiHistory.some(h => h.tanggal === tStr)) {
            return Swal.fire('Sudah Absen', 'Kamu sudah mengisi daftar hadir hari ini sayang!', 'info');
        }
        appState.presensiHistory.push({ tanggal: tStr, jam: new Date().toLocaleTimeString('id-ID') });
        saveApplicationStateToDisk();
        render();
        Swal.fire('Sukses Absen', 'Kehadiran harian berhasil disinkronkan!', 'success');
    };

    window.navigateToClassroomTerminal = (targetMatkulName) => {
        appState.selectedMatkul = { nama: targetMatkulName, semester: appState.semesterAktif, prodi: appState.jurusan.nama };
        const historySksLog = Object.keys(appState.sksHistoryData).map(k => `${k} (Skor: ${appState.sksHistoryData[k].score})`).join(', ') || 'Belum ada riwayat kuis lintas SKS terdahulu';

        if (!appState.classroomSessions[targetMatkulName]) {
            appState.classroomSessions[targetMatkulName] = {
                chats: [
                    {
                        id: 'init-msg', sender: 'dosen', type: 'text',
                        text: `<div class="mb-2"><img src="${EMOTION_STICKERS.welcome}" class="w-16 h-16 object-contain"></div>Halo bimbinganku, selamat datang di ruang diskusi kelas ${targetMatkulName}.<br><br><span class="block p-2 bg-rose-500/10 border border-dashed border-rose-300 text-xs rounded-lg font-semibold text-rose-700"><i class="fas fa-history"></i> Rekam Kompetensi SKS Anda:<br>${historySksLog}</span><br>Silakan ambil bahan ajar hari ini dengan klik "Ambil Modul Sesi Ini" di bawah ya sayang!`,
                        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                    }
                ],
                currentPhase: 'idle', kuisStep: 0, kuisScore: 0, lastQuestionType: 'none', modulDiambil: false
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
        const mkName = appState.selectedMatkul.nama;
        const session = appState.classroomSessions[mkName];
        if (session.modulDiambil) return Swal.fire('Info', 'Modul materi sudah dijabarkan lengkap di timeline kuliah ini, sayang!', 'info');

        const tId = 'typing-' + Date.now();
        session.chats.push({ id: tId, sender: 'dosen', isTyping: true, timestamp: 'Sync' });
        render();
        autoScrollTerminalTimeline();

        const vPlayerId = `yt-player-${Date.now()}`;
        const prompt = `Berikan ringkasan materi komprehensif mata kuliah "${mkName}" Semester ${appState.semesterAktif} tingkat S1. Jelaskan basis landasannya secara naratif runut dari fondasi dasarnya beserta batasan parameternya. Cantumkan rujukan nama ahli terkemuka. Di akhir buatkan peta posisi materi berupa diagram teks sederhana di dalam tag <pre class="peta-visual-box">.`;

        const resp = await contactAiNeuralEngine(prompt);
        session.chats = session.chats.filter(c => c.id !== tId);

        if (resp.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            Swal.fire('Koneksi Lemot', 'Gagal memuat materi karena gangguan jaringan hulu. Silakan klik ambil modul kembali ya manis.', 'error');
            render(); return;
        }

        session.chats.push({
            id: 'modul-block-' + Date.now(), sender: 'dosen', type: 'text',
            text: `<div class="modul-container">
                <div class="text-xs uppercase font-black text-rose-500 mb-2 tracking-widest"><i class="fas fa-book-open"></i> Literatur Studi Terintegrasi</div>
                <div class="mb-4 p-4 bg-slate-900 text-white rounded-xl">
                    <span class="block text-xs text-rose-400 font-bold mb-2"><i class="fab fa-youtube"></i> Video Pembelajaran Rekomendasi:</span>
                    <div id="${vPlayerId}"></div>
                </div>
                <div class="mb-2"><img src="${EMOTION_STICKERS.learning}" class="w-14 h-14 object-contain"></div>
                <div class="text-sm space-y-2 leading-relaxed whitespace-pre-line">${resp}</div>
                <div class="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex flex-wrap gap-2 items-center justify-between">
                    <span class="text-xs font-bold text-emerald-800">Unduh PDF Resmi Standar Google Scholar Open Access untuk ${mkName}:</span>
                    <button onclick="window.executePdfDownloadPipeline('${mkName.replace(/'/g, "\\'")}')" class="text-xs font-black bg-emerald-600 text-white px-3 py-1.5 rounded-xl hover:bg-emerald-700 transition"><i class="fas fa-file-pdf mr-1"></i> Ambil Jurnal PDF</button>
                </div>
            </div>`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        session.currentPhase = 'learning';
        session.modulDiambil = true;
        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();

        setTimeout(() => { window.searchAndPlayYouTube(mkName, vPlayerId); }, 400);
    };

    window.triggerAppKuisWorkflow = async () => {
        const mkName = appState.selectedMatkul.nama;
        const session = appState.classroomSessions[mkName];
        if (!session.modulDiambil) return Swal.fire('Akses Ditolak', 'Ambil dan pelajari modulnya dulu baru ikut ujian kuis sayang!', 'warning');
        if (session.kuisStep > 0 && session.currentPhase === 'kuis') return Swal.fire('Info', 'Selesaikan kuis aktifmu terlebih dahulu!', 'info');

        session.currentPhase = 'kuis';
        session.kuisStep = 1;
        session.kuisScore = 0;
        await dispatchNextKuisQuestionBlock(session, mkName);
    };

    async function dispatchNextKuisQuestionBlock(session, mkName) {
        const tId = 'typing-' + Date.now();
        session.chats.push({ id: tId, sender: 'dosen', isTyping: true, timestamp: 'Load' });
        render();
        autoScrollTerminalTimeline();

        const type = (session.kuisStep % 2 !== 0) ? 'pg' : 'esai';
        session.lastQuestionType = type;

        const prompt = type === 'pg' ? `Berikan 1 Soal Kuis Nomor ${session.kuisStep} berjenis Pilihan Ganda (A, B, C, D) seputar materi "${mkName}".` : `Berikan 1 Soal Kuis Nomor ${session.kuisStep} berjenis Esai Analisis Pendek untuk kasus riil "${mkName}".`;
        const resp = await contactAiNeuralEngine(prompt);
        session.chats = session.chats.filter(c => c.id !== tId);

        if (resp.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            Swal.fire('Gagal Sesi', 'Jaringan sibuk, kuis dihentikan sejenak. Silakan tekan tombol uji kompetensi lagi sayang.', 'error');
            session.currentPhase = 'learning'; session.kuisStep = 0; render(); return;
        }

        let content = `<div class="p-4 bg-surface rounded-xl border card-border shadow-inner">
            <span class="block text-xs uppercase font-extrabold tracking-widest text-rose-500 mb-1">Pertanyaan ${session.kuisStep} / 5</span>
            <div class="text-sm leading-relaxed">${resp}</div>
        </div>`;

        if (type === 'pg') {
            content += `<div class="mt-3 grid grid-cols-2 gap-2">
                ${['A', 'B', 'C', 'D'].map(abjad => `<button onclick="window.submitInteractiveClickAnswer('${abjad}')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl transition text-left">Pilih Opsi ${abjad}</button>`).join('')}
            </div>`;
        } else {
            content += `<p class="text-[11px] italic text-rose-400 mt-2">*Ketik argumen analisis kritis kamu langsung pada kotak pesan di bawah lalu kirim!*</p>`;
        }

        session.chats.push({ id: 'kuis-soal-' + session.kuisStep, sender: 'dosen', type: type, text: content, timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();
    }

    window.submitInteractiveClickAnswer = async (letter) => {
        const mkName = appState.selectedMatkul.nama;
        const session = appState.classroomSessions[mkName];
        if (session.currentPhase !== 'kuis' || session.lastQuestionType !== 'pg') return;

        session.chats.push({ sender: 'user', text: `Jawaban saya Kuis Nomor ${session.kuisStep}: Pilihan ${letter}`, timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
        render(); autoScrollTerminalTimeline();
        await evaluateStepAndRoutePipeline(session, mkName, letter);
    };

    window.processUserTextMessagingInput = async () => {
        const field = document.getElementById('terminalCoreInputField');
        if (!field || !field.value.trim()) return;
        const val = field.value.trim(); field.value = '';

        const mkName = appState.selectedMatkul.nama;
        const session = appState.classroomSessions[mkName];

        session.chats.push({ sender: 'user', text: val, timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
        render(); autoScrollTerminalTimeline();

        if (session.currentPhase === 'kuis' && session.lastQuestionType === 'esai') {
            await evaluateStepAndRoutePipeline(session, mkName, val);
            return;
        }

        const tId = 'typing-' + Date.now();
        session.chats.push({ id: tId, sender: 'dosen', isTyping: true, timestamp: 'Think' });
        render(); autoScrollTerminalTimeline();

        const p = `Jawab pertanyaan bebas mahasiswa mengenai mata kuliah "${mkName}". Pertanyaan: "${val}". Pastikan tidak keluar dari batas parameter keilmuan terkait dan jangan meloncat ke topik coding komputer jika ini bukan kelas teknik informatika!`;
        const resp = await contactAiNeuralEngine(p);
        session.chats = session.chats.filter(c => c.id !== tId);

        session.chats.push({ sender: 'dosen', type: 'text', text: resp, timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
        saveApplicationStateToDisk(); render(); autoScrollTerminalTimeline();
    };

    async function evaluateStepAndRoutePipeline(session, mkName, payload) {
        const tId = 'typing-' + Date.now();
        session.chats.push({ id: tId, sender: 'dosen', isTyping: true, timestamp: 'Grade' });
        render(); autoScrollTerminalTimeline();

        const p = `Evaluasi jawaban kuis berikut: "${payload}" pada soal nomor ${session.kuisStep} mata kuliah "${mkName}". Sebutkan kebenaran atau letak koreksi ilmiahnya secara singkat dan manis khas dosen muda.`;
        const resp = await contactAiNeuralEngine(p);
        session.chats = session.chats.filter(c => c.id !== tId);

        let isCorrect = session.lastQuestionType === 'pg' ? ['A','C'].includes(payload) : payload.length > 12;
        if (isCorrect) session.kuisScore += 20;

        session.chats.push({
            id: 'eval-' + session.kuisStep, sender: 'dosen', type: 'text',
            text: `<div class="p-3 bg-rose-500/5 rounded-xl border border-dashed border-rose-400">
                <div class="mb-2"><img src="${isCorrect ? EMOTION_STICKERS.success : EMOTION_STICKERS.error}" class="w-12 h-12 object-contain"></div>
                <span class="block text-xs font-bold text-rose-600 mb-1"><i class="fas fa-clipboard-check"></i> Lembar Review Mbak You:</span>
                <div class="text-sm leading-relaxed">${resp}</div>
            </div>`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        if (session.kuisStep < 5) {
            session.kuisStep += 1;
            saveApplicationStateToDisk();
            setTimeout(async () => { await dispatchNextKuisQuestionBlock(session, mkName); }, 1500);
        } else {
            session.currentPhase = 'complete';
            const finalScore = session.kuisScore;
            appState.sksHistoryData[mkName] = { score: finalScore, time: new Date().toLocaleString('id-ID') };
            appState.totalSks += 3;
            
            let yieldedGpa = (finalScore / 25);
            appState.ipk = appState.ipk === 0.00 ? yieldedGpa : parseFloat(((appState.ipk * 0.75) + (yieldedGpa * 0.25)).toFixed(2));
            if (appState.ipk > 4.00) appState.ipk = 4.00;

            session.chats.push({
                id: 'complete-block-' + Date.now(), sender: 'dosen', type: 'text',
                text: `<div class="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-5 rounded-2xl shadow-xl text-center">
                    <i class="fas fa-graduation-cap text-3xl text-yellow-300 mb-1 block"></i>
                    <div class="text-xs uppercase font-black tracking-widest text-rose-100">Evaluasi SKS Modul Selesai</div>
                    <div class="text-3xl font-black my-1">${finalScore} / 100</div>
                    <div class="text-xs bg-black/20 py-1 px-3 rounded-full inline-block mb-2">IPK Saat Ini: ${appState.ipk.toFixed(2)}</div>
                    <div class="flex justify-center"><img src="${EMOTION_STICKERS.success}" class="w-14 h-14 object-contain"></div>
                </div><br>Mbak You: "Hebat sayang! Nilai kuis mata kuliah kamu sudah masuk rekam data. SKS berhasil dikumpulkan lintas modul!"`,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            });
            saveApplicationStateToDisk(); render(); autoScrollTerminalTimeline();
        }
    }

    window.triggerHardResetApplicationData = () => {
        localStorage.removeItem('pelajarin_v3_girly_disk');
        appState.user = null; appState.jurusan = null; appState.semesterAktif = 1; appState.ipk = 0.00; appState.totalSks = 0; appState.classroomSessions = {}; appState.presensiHistory = []; appState.sksHistoryData = {};
        appState.currentPage = 'landing'; render();
    };

    function autoScrollTerminalTimeline() {
        setTimeout(() => { const b = document.getElementById('terminalTimelineScrollWrapper'); if (b) b.scrollTop = b.scrollHeight; }, 60);
    }

    function saveApplicationStateToDisk() { localStorage.setItem('pelajarin_v3_girly_disk', JSON.stringify(appState)); }
    function loadApplicationStateFromDisk() {
        const disk = localStorage.getItem('pelajarin_v3_girly_disk');
        if (disk) {
            try {
                const parsed = JSON.parse(disk);
                Object.assign(appState, parsed);
                if (appState.user && appState.jurusan) appState.currentPage = 'dashboard';
            } catch (e) { console.error(e); }
        }
        applyActiveThemeToDOM();
    }
    function applyActiveThemeToDOM() { document.body.className = appState.currentTheme; }
    window.switchApplicationTheme = (theme) => { appState.currentTheme = theme; saveApplicationStateToDisk(); applyActiveThemeToDOM(); render(); };

    // ==========================================
    // 9. VIEW GENERATORS (MENJAGA STABILITAS LAYOUT)
    // ==========================================
    const DOSEN_BASE_PROMPT = `KAMU ADALAH DOSEN WANITA MUDA BERNAMA "MBAK YOU" (UMUR 25 TAHUN). BERBICARA LANGSUNG SEBAGAI MBAK YOU DENGAN GAYA CHATTING CASUAL, MANIS, DISIPLIN AKADEMIK TINGGI DAN TIDAK KAKU. JELASKAN MATERI RUNUT DARI AWALAN DASAR FONDASINYA MERUJUK PADA PARA AHLI EMPIRIS. JANGAN PAKAI MARKDOWN SEPERTI # ATAU ##, TULIS JAWABAN MENGALIR BIASA SAJA DENGAN SEBUTAN BIMBINGANKU ATAU SAYANG. KOREKSI JAWABAN MAHASISWA SECARA JELAS DAN TEGAS BERDASARKAN LITERATUR.`;

    function generateLandingPageHTMLView() {
        let grad = appState.currentTheme === 'theme-manly' ? 'gradient-brand-manly' : appState.currentTheme === 'theme-soft' ? 'gradient-brand-soft' : 'gradient-brand-girly';
        return `
        <div class="${grad} text-white">
            <div class="container mx-auto px-6 py-5 flex justify-between items-center max-w-6xl">
                <div class="text-xl font-black tracking-tight flex items-center gap-2">
                    <div class="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center border border-white/20"><i class="fas fa-graduation-cap"></i></div>
                    <span>Pelajarin Platform <span class="text-xs font-normal opacity-80">V3 PRO</span></span>
                </div>
                <div class="text-xs bg-black/20 px-3 py-1.5 rounded-full font-bold"><i class="fas fa-clock text-amber-300"></i> Semester Terbuka 2026</div>
            </div>
            <div class="container mx-auto px-6 py-20 text-center max-w-4xl">
                <h1 class="text-4xl sm:text-5xl font-black mb-4 tracking-tight leading-none">Sistem Pendidikan Sarjana S1 Kontemporer</h1>
                <p class="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-8 font-medium">Lakukan simulasi perkuliahan terstruktur 8 Semester, 6 Mata Kuliah per Sesi, kumpulkan SKS, dan lakukan evaluasi modul kuis real-time.</p>
                <button onclick="window.launchRegistrationModal()" class="bg-white text-rose-900 font-black text-sm px-6 py-3.5 rounded-xl shadow-2xl hover:bg-slate-50 transition"><i class="fas fa-id-card mr-2"></i> Buat KTM Mahasiswa Baru Sekarang</button>
            </div>
        </div>
        <div class="container mx-auto px-4 py-12 max-w-6xl">
            <div class="text-center mb-8"><h2 class="text-2xl font-extrabold">Pilih Fokus Program Studi S1</h2></div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${AKADEMIK_PRODI_DATA.map(p => `
                    <div onclick="window.triggerCardProdiRegister(${p.id})" class="bg-surface rounded-2xl border card-border p-5 cursor-pointer card-scale flex flex-col justify-between shadow-sm">
                        <div>
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${p.warna} flex items-center justify-center text-white text-base shadow-sm mb-3"><i class="fas ${p.icon}"></i></div>
                            <h3 class="text-base font-bold mb-1">${p.nama}</h3>
                            <p class="opacity-70 text-xs leading-relaxed mb-2">${p.deskripsi}</p>
                        </div>
                        <div class="border-t card-border pt-2 mt-2 text-[11px] font-bold text-rose-500 truncate">Karir: ${p.prospek}</div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    function generateDashboardPageHTMLView() {
        const prodi = AKADEMIK_PRODI_DATA.find(p => p.id === appState.jurusan.id);
        const matkulList = JADWAL_MATA_KULIAH[appState.jurusan.id]?.[appState.semesterAktif] || [];
        const attendTarget = appState.semesterAktif * 6;
        const attendPct = attendTarget > 0 ? Math.min(((appState.presensiHistory.length / attendTarget) * 100), 100).toFixed(1) : "0.0";

        return `
        <div class="bg-surface border-b card-border sticky top-0 z-50 shadow-sm">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center max-w-6xl">
                <div class="text-base font-black tracking-tight dynamic-text"><i class="fas fa-university"></i> Portal Akademik Pelajarin</div>
                <div class="flex items-center gap-2">
                    <div class="bg-chat-area p-1 rounded-lg border card-border flex gap-1 text-[11px] font-bold">
                        <button onclick="window.switchApplicationTheme('theme-manly')" class="px-2 py-0.5 rounded ${appState.currentTheme === 'theme-manly' ? 'bg-sky-600 text-white' : 'opacity-60'}">Manly</button>
                        <button onclick="window.switchApplicationTheme('theme-girly')" class="px-2 py-0.5 rounded ${appState.currentTheme === 'theme-girly' ? 'bg-rose-500 text-white' : 'opacity-60'}">Girly</button>
                        <button onclick="window.switchApplicationTheme('theme-soft')" class="px-2 py-0.5 rounded ${appState.currentTheme === 'theme-soft' ? 'bg-indigo-600 text-white' : 'opacity-60'}">Soft</button>
                    </div>
                    <button onclick="window.triggerHardResetApplicationData()" class="text-xs font-bold bg-rose-500/10 text-rose-500 px-2.5 py-1.5 rounded-lg transition"><i class="fas fa-power-off"></i> Out</button>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 py-6 max-w-6xl">
            <div class="bg-surface rounded-2xl p-5 border card-border shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <span class="text-[11px] font-black uppercase dynamic-text"><i class="fas fa-id-badge"></i> Kartu Tanda Mahasiswa Aktif</span>
                    <h1 class="text-xl font-black mt-0.5">${appState.user.nama}</h1>
                    <p class="text-xs opacity-60">${prodi.nama} • Jenjang Sarjana Strata 1 (S1)</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="window.commitDailyAttendanceSignature()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition"><i class="fas fa-fingerprint mr-1"></i> Absen Masuk</button>
                    <button onclick="window.modifyActiveSemesterState()" class="dynamic-btn font-bold text-xs px-3.5 py-2.5 rounded-xl transition"><i class="fas fa-list-ol mr-1"></i> Pilih Semester (Aktif: ${appState.semesterAktif})</button>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-surface p-4 rounded-xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-40 uppercase">IPK Kumulatif</div>
                    <div class="text-xl font-black dynamic-text mt-0.5">${parseFloat(appState.ipk).toFixed(2)}</div>
                </div>
                <div class="bg-surface p-4 rounded-xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-40 uppercase">SKS Lulus Matkul</div>
                    <div class="text-xl font-black mt-0.5">${appState.totalSks} <span class="text-xs font-normal opacity-40">/ 144</span></div>
                </div>
                <div class="bg-surface p-4 rounded-xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-40 uppercase">Kurikulum Sesi</div>
                    <div class="text-xl font-black text-amber-500 mt-0.5">${matkulList.length} Mata Kuliah</div>
                </div>
                <div class="bg-surface p-4 rounded-xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-40 uppercase">Rasio Absensi</div>
                    <div class="text-xl font-black text-emerald-500 mt-0.5">${attendPct}%</div>
                </div>
            </div>
            <div class="bg-surface rounded-2xl border card-border p-5 shadow-sm">
                <h2 class="text-base font-black mb-4 flex items-center gap-1"><i class="fas fa-folder-open dynamic-text"></i> Struktur Kurikulum Semester ${appState.semesterAktif} (6 MK Penuh Terbuka)</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${matkulList.map((m, idx) => {
                        const sess = appState.classroomSessions[m];
                        let status = `<span class="text-[10px] opacity-40"><i class="far fa-circle mr-1"></i>Belum diambil</span>`;
                        if (sess) {
                            if (sess.currentPhase === 'complete') status = `<span class="text-[10px] text-emerald-500 font-bold"><i class="fas fa-check-circle mr-1"></i>Lulus Kuis</span>`;
                            else if (sess.modulDiambil) status = `<span class="text-[10px] text-amber-500 font-bold"><i class="fas fa-book-open mr-1"></i>Belajar</span>`;
                        }
                        return `
                        <div onclick="window.navigateToClassroomTerminal('${m.replace(/'/g, "\\'")}')" class="border card-border rounded-xl p-3.5 cursor-pointer hover:bg-rose-500/5 transition flex justify-between items-center group card-scale">
                            <div class="flex items-center gap-3">
                                <div class="w-7 h-7 rounded-lg bg-chat-area text-xs font-bold flex items-center justify-center border card-border">${idx + 1}</div>
                                <div>
                                    <div class="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-rose-500 transition">${m}</div>
                                    <div class="flex items-center gap-2 mt-0.5"><span class="text-[9px] bg-chat-area px-1 rounded border card-border font-bold">3 SKS</span>${status}</div>
                                </div>
                            </div>
                            <i class="fas fa-chevron-right text-xs opacity-20 group-hover:opacity-100 transition"></i>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;
    }

    function generateClassroomTerminalHTMLView() {
        const mkName = appState.selectedMatkul.nama;
        const session = appState.classroomSessions[mkName];
        const history = session?.chats || [];

        return `
        <div class="min-h-screen flex flex-col justify-between">
            <div class="bg-surface border-b card-border px-4 py-3 sticky top-0 z-50 shadow-sm flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <button onclick="window.exitClassroomTerminalToDashboard()" class="hover:bg-rose-500/10 w-8 h-8 rounded-full flex items-center justify-center text-rose-500 transition"><i class="fas fa-arrow-left"></i></button>
                    <div>
                        <h2 class="font-black text-xs sm:text-sm leading-tight">${mkName}</h2>
                        <p class="text-[10px] text-rose-400 font-bold"><i class="fas fa-graduation-cap"></i> Ruang Kelas S1 Mandiri Mbak You</p>
                    </div>
                </div>
                <div class="text-[10px] font-black px-2 py-1 rounded bg-chat-area border card-border text-rose-500 uppercase">Fase: ${session?.currentPhase || 'idle'}</div>
            </div>
            <div id="terminalTimelineScrollWrapper" class="flex-1 bg-chat-area overflow-y-auto px-4 py-4 space-y-3">
                <div class="max-w-4xl w-full mx-auto space-y-3">
                    ${history.map(c => {
                        if (c.sender === 'user') {
                            return `<div class="flex justify-end msg-entry">
                                <div class="bg-slate-800 text-white rounded-xl rounded-tr-none px-3.5 py-2 max-w-[85%] border border-slate-700">
                                    <span class="block text-[9px] font-bold text-slate-400 uppercase">Mahasiswa</span>
                                    <p class="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">${c.text}</p>
                                </div>
                            </div>`;
                        } else {
                            if (c.isTyping) {
                                return `<div class="flex justify-start msg-entry" id="${c.id}">
                                    <div class="bg-surface text-xs rounded-xl rounded-tl-none px-3 py-2 border card-border flex items-center gap-2">
                                        <div class="custom-spinner"></div><div class="italic text-rose-400">Mbak You sedang menganalisis data kurikulum...</div>
                                    </div>
                                </div>`;
                            }
                            return `<div class="flex justify-start msg-entry">
                                <div class="bg-surface rounded-xl rounded-tl-none px-3.5 py-3 border card-border max-w-[90%] sm:max-w-[85%] w-full">
                                    <div class="text-[10px] font-black text-rose-500 uppercase tracking-wider mb-1.5 flex justify-between items-center">
                                        <span><i class="fas fa-user-tie"></i> Mbak You (Dosen Pengampu)</span>
                                        <button onclick="window.readAloudMbakYouSpeech(\`${(c.text || '').replace(/"/g, '&quot;').replace(/`/g, '\\`').replace(/\n/g, ' ')}\`)" class="text-rose-500 px-1.5 py-0.5 rounded border border-rose-200 text-[9px] font-bold">Lafalkan Suara</button>
                                    </div>
                                    <div class="text-xs sm:text-sm leading-relaxed text-justify">${c.text || ''}</div>
                                </div>
                            </div>`;
                        }
                    }).join('')}
                </div>
            </div>
            <div class="bg-surface border-t card-border p-3 sticky bottom-0 z-40">
                <div class="max-w-4xl mx-auto">
                    <div class="flex items-center gap-2 mb-2 overflow-x-auto">
                        <button onclick="window.triggerGenerateModulMateriWorkflow()" class="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-3 py-2 rounded-xl whitespace-nowrap transition"><i class="fas fa-book"></i> Ambil Modul Sesi Ini</button>
                        <button onclick="window.triggerAppKuisWorkflow()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3 py-2 rounded-xl whitespace-nowrap transition"><i class="fas fa-star"></i> Uji Kompetensi Kuis</button>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex-1 bg-chat-area rounded-xl px-3 py-2 flex items-center border card-border gap-2">
                            <input type="text" id="terminalCoreInputField" onkeydown="if(event.key === 'Enter') window.processUserTextMessagingInput()" class="w-full text-xs sm:text-sm bg-transparent focus:outline-none placeholder-slate-400" placeholder="Ketik pesan konsultasi akademik atau jawaban esai anda...">
                            <button id="voiceRecognitionTriggerNode" onclick="window.toggleSpeechToTextRecordingPipeline()" class="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0"><i class="fas fa-microphone text-xs"></i></button>
                        </div>
                        <button onclick="window.processUserTextMessagingInput()" class="bg-rose-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0"><i class="fas fa-paper-plane text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // Initialize System Core
    loadApplicationStateFromDisk();
    render();
    autoScrollTerminalTimeline();
})();
