(function() {
    // 1. INJECT BASE CSS & FONTS DYNAMICALLY INTO HEAD
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
    `;
    headNode.appendChild(coreStyleNode);

    // 2. INITIALIZE BODY ATTRIBUTES & MOUNT ROOT APP DEPLOYMENT NODE
    document.body.className = "theme-girly text-base min-h-screen";
    
    let appMountRoot = document.getElementById('app');
    if (!appMountRoot) {
        appMountRoot = document.createElement('div');
        appMountRoot.id = 'app';
        document.body.appendChild(appMountRoot);
    }

    // HIGH-STABILITY ENGINE CONFIGURATION (MENGGUNAKAN GLM-4-FLASH)
    const API_ENDPOINT = 'https://api.siputzx.my.id/api/ai/glm47flash';
    
    // SYSTEM MANDATE TEMPLATE BASE
    const DOSEN_BASE_PROMPT = `KAMU ADALAH DOSEN WANITA MUDA BERNAMA "MBAK YOU" (UMUR 25 TAHUN). KAMU BERBICARA LANGSUNG SEBAGAI MBAK YOU DENGAN GAYA CHATTING NYATA, CASUAL, MANIS, TAPI SANGAT DISIPLIN AKADEMIK DAN TIDAK KAKU.

ATURAN STRUKTUR BELAJAR & PARAMETER (SANGAT KETAT):
1. MATAKULIAH YANG DIKAJI: Saat ini kamu sedang berada di dalam ruang kelas perkuliahan mata kuliah [MATKUL_AKTIF]. Kamu DILARANG KERAS membahas topik di luar mata kuliah [MATKUL_AKTIF]. Ingat, materi yang harus dibahas detik ini HANYA seputar [MATKUL_AKTIF]! Lupakan mata kuliah atau sesi diskusi di kelas lainnya. Jangan pernah memberikan analogi atau jawaban yang bergeser ke topik lain. Jaga pembahasan tetap mengalir linier dan runtut di dalam parameter keilmuan [MATKUL_AKTIF].
2. WAJIB GROUNDING AWALAN DATA: Setiap kali menjelaskan topik atau menjawab pertanyaan, kamu harus memulainya dari akar fondasi dasarnya terlebih dahulu (definisi awal, filosofi esensi materi, serta urgensi bidang ilmu tersebut). Jangan pernah melompat ke rumus rumit atau instruksi tingkat lanjut sebelum landasan dasarnya clear!
3. DISIPLIN PARAMETER: Jaga agar mahasiswa tahu batasan materi harinya sudah sampai mana. Di akhir penjelasan materi utama, wajib buatkan peta posisi materi secara tekstual sederhana memakai tanda panah di dalam tag <pre class="peta-visual-box"> (contoh: Konsep Dasar -> Ruang Lingkup -> Aplikasi Kasus).
4. JANGAN PERNAH MENGGUNAKAN FORMAT MARKDOWN SEPERTI TAG LINK, "#", "##", ATAU "###". Tuliskan materi mengalir seperti struktur obrolan atau pesan panjang di aplikasi chat. Gunakan pemisah baris biasa saja.
5. JANGAN PERNAH MENULISKAN ANALISIS INTERNAL ATAU "CHAIN OF THOUGHT" (seperti: "First, let me break down...", "Okay, so I need to handle...") ke dalam teks respons. Langsung berikan jawaban dalam karakter persona!
6. Gaya bahasa harus natural, mengalir, manis, menggunakan panggilan "Sayang" atau "Bimbinganku". Jangan gunakan kalimat template robot seperti "Okay, berikut adalah...", "Sebagai AI...", langsung saja masuk to the point ke topik obrolan.
7. JELASKAN MATERI DENGAN MERUJUK PADA PARA AHLI ATAU TOKOH LITERATUR. Misal jika membahas manajemen merujuk ke Kotler, jika psikologi merujuk ke Sigmund Freud/Descartes, jika hukum ke Prof. Subekti, jika IT ke Tanenbaum.
8. KETIKA KOREKSI KUIS: Evaluasi jawaban mahasiswa dengan tegas namun manis. Sebutkan secara eksplisit letak kesalahan argumen mereka secara ilmiah serta berikan alasan pembenaran literatur empirisnya secara langsung.`;

    // SYLLABUS KAMPUS INTERNAL DATABASE
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

    // PERSISTENT ENGINE STATE CONTROL STRUCTURE
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
        presensiHistory: []
    };

    // CONTENT RENDER CLEANER & PARSER
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

    // DYNAMIC INTELLIGENCE API CONNECTOR (GLM-4-FLASH COMPLIANT)
    async function contactAiNeuralEngine(compiledPrompt) {
        const currentActiveMatkul = (appState.selectedMatkul && appState.selectedMatkul.nama) ? appState.selectedMatkul.nama : "Umum";
        const tailoredSystemPrompt = DOSEN_BASE_PROMPT.replace(/\[MATKUL_AKTIF\]/g, currentActiveMatkul);
        const queryParameters = `${API_ENDPOINT}?prompt=${encodeURIComponent(compiledPrompt)}&system=${encodeURIComponent(tailoredSystemPrompt)}&temperature=0.4`;
        
        try {
            const networkResponse = await fetch(queryParameters);
            if (!networkResponse.ok) throw new Error(`Status Jaringan Menolak: ${networkResponse.status}`);
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
                throw new Error("Koneksi pikiran Mbak You terganggu!");
            }
            
            return cleanAndParseResponse(outputString);
        } catch (networkException) {
            console.error(networkException);
            return `ERROR_SIGNAL_FALLBACK: ${networkException.message}`;
        }
    }

    // ACTION CONTROLLERS
    window.launchRegistrationModal = async () => {
        const { value: studentNameInput } = await Swal.fire({
            title: 'Daftar Kartu Mahasiswa',
            text: 'Ketik nama lengkap kamu untuk basis data universitas:',
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
                title: 'Pilih Program Studi Utama',
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
                
                saveApplicationStateToDisk();
                appState.currentPage = 'dashboard';
                render();

                Swal.fire({
                    icon: 'success',
                    title: 'Pendaftaran Mahasiswa Sukses!',
                    text: `Selamat datang di Pelajarin, ${studentNameInput}. Silakan masuk ke dalam kelas perkuliahan perdana kamu.`,
                    confirmButtonColor: '#f43f5e'
                });
            }
        }
    };

    window.triggerCardProdiRegister = (prodiId) => {
        const targetObj = AKADEMIK_PRODI_DATA.find(p => p.id === prodiId);
        Swal.fire({
            title: `Ambil Jurusan ${targetObj.nama}?`,
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
            numericalMatrixOptions[step] = `Semester Perkuliahan ${step} (${JADWAL_MATA_KULIAH[appState.jurusan.id]?.[step]?.length || 0} MK)`;
        }

        const { value: targetPickedSemester } = await Swal.fire({
            title: 'Pindah Tingkat Semester',
            input: 'select',
            inputOptions: numericalMatrixOptions,
            inputValue: appState.semesterAktif,
            confirmButtonText: 'Sinkronisasi Kelas',
            confirmButtonColor: '#f43f5e',
            showCancelButton: true
        });

        if (targetPickedSemester) {
            appState.semesterAktif = parseInt(targetPickedSemester);
            saveApplicationStateToDisk();
            render();
            Swal.fire('Data Disinkronkan', `Sekarang kurikulum Anda berpindah ke Semester ${targetPickedSemester}.`, 'success');
        }
    };

    window.commitDailyAttendanceSignature = () => {
        const internalTimeObject = new Date();
        const contextualDateString = internalTimeObject.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        if (appState.presensiHistory.some(historyRecord => historyRecord.tanggal === contextualDateString)) {
            return Swal.fire({
                icon: 'warning',
                title: 'Presensi Sudah Tercatat',
                text: 'Kamu sudah mengisi daftar hadir hari ini, sayang!',
                confirmButtonColor: '#f43f5e'
            });
        }

        appState.presensiHistory.push({ tanggal: contextualDateString, jam: internalTimeObject.toLocaleTimeString('id-ID') });
        saveApplicationStateToDisk();
        render();

        Swal.fire({
            icon: 'success',
            title: 'Presensi Disimpan!',
            text: 'Mbak You sudah mencatat kehadiranmu hari ini.',
            confirmButtonColor: '#f43f5e'
        });
    };

    window.navigateToClassroomTerminal = (targetMatkulName) => {
        appState.selectedMatkul = {
            nama: targetMatkulName,
            semester: appState.semesterAktif,
            prodi: appState.jurusan.nama
        };

        if (!appState.classroomSessions[targetMatkulName]) {
            appState.classroomSessions[targetMatkulName] = {
                chats: [
                    {
                        id: 'init-core-msg',
                        sender: 'dosen',
                        type: 'text',
                        text: `Halo sayang, selamat datang di kelas ${targetMatkulName}. Ini ruang diskusi eksklusif kita berdua ya. Yuk langsung klik tombol "Ambil Modul Sesi Ini" di menu bawah biar aku jabarin materi kuliah kita hari ini lengkap secara runut dari awalan dasarnya, didukung referensi ahli, biar parameter pemahaman kamu jelas dan gak ke mana-mana. Semangat belajar bimbinganku!`,
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
        appState.currentPage = 'dashboard';
        appState.selectedMatkul = null;
        render();
    };

    window.executePdfDownloadPipeline = (topicKeyword) => {
        Swal.fire({
            title: 'Menyiapkan Berkas PDF...',
            text: 'Mengunduh Dokumen Referensi Akademik Terkait ' + topicKeyword,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
                setTimeout(() => {
                    const dummyPdfContent = "%PDF-1.4 ... Content Simulation ...";
                    const blobStorageBox = new Blob([dummyPdfContent], { type: 'application/pdf' });
                    const secureObjectUrl = window.URL.createObjectURL(blobStorageBox);
                    
                    const downloadTriggerNode = document.createElement('a');
                    downloadTriggerNode.href = secureObjectUrl;
                    downloadTriggerNode.download = `Jurnal_Referensi_${topicKeyword.replace(/\s+/g, '_')}_Aksis.pdf`;
                    document.body.appendChild(downloadTriggerNode);
                    downloadTriggerNode.click();
                    
                    document.body.removeChild(downloadTriggerNode);
                    window.URL.revokeObjectURL(secureObjectUrl);
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'PDF Berhasil Diunduh!',
                        text: 'Dokumen riset pendukung berhasil diamankan ke penyimpanan lokal kamu, sayang.',
                        confirmButtonColor: '#10b981'
                    });
                }, 1500);
            }
        });
    };

    window.triggerGenerateModulMateriWorkflow = async () => {
        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];
        
        if (sessionContext.modulDiambil) {
            return Swal.fire('Informasi Sesi', 'Modul utama sudah aku jabarkan di ruang chat ini, dibaca pelan-pelan ya sayang!', 'info');
        }

        const visualTypingId = 'typing-' + Date.now();
        sessionContext.chats.push({ id: visualTypingId, sender: 'dosen', isTyping: true, timestamp: 'Proses' });
        render();
        autoScrollTerminalTimeline();

        const cleanKeyword = contextMatkul.replace(/[^a-zA-Z0-9 S]/g, "");
        
        const youtubeEmbedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent("Materi Kuliah " + cleanKeyword)}`;
        const youtubeExternalUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent("Materi Kuliah S1 " + cleanKeyword)}`;

        const imageContextKeyword = encodeURIComponent(cleanKeyword.toLowerCase().replace(/\s+/g, ","));
        const dynamicImageSource = `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80`; 
        const dynamicLiveImage = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80&q=${imageContextKeyword}`;

        const corePromptRequest = `Berikan materi pokok perkuliahan S1 komprehensif untuk kelas mata kuliah "${contextMatkul}" Semester ${appState.semesterAktif}. Jelaskan isi modul ini secara naratif mengalir alami dan mendalam mulai dari awalan fondasi dasarnya, latar belakang filosofisnya, serta batasan parameter keilmuannya. Ingat, fokus penuh pada bidang keilmuan "${contextMatkul}" dan dilarang melompat keluar topik atau membahas pemrograman jika ini bukan kelas IT! Wajib sertakan kutipan referensi nama para ahli terkemuka yang relevan. Di akhir materi wajib cantumkan bagan parameter belajar menggunakan diagram tekstual sederhana (ASCII/Text) di dalam tag <pre class="peta-visual-box"> agar saya tahu batas materinya.`;

        const neuralNetworkResponse = await contactAiNeuralEngine(corePromptRequest);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (neuralNetworkResponse.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = neuralNetworkResponse.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Koneksi Terganggu', `Ih sayang, internet di kelas kita agak lemot nih (${cleanErrorMessage}). Coba klik tombol ambil modul lagi ya, aku tungguin kok!`, 'error');
            render();
            autoScrollTerminalTimeline();
            return;
        }

        sessionContext.chats.push({
            id: 'modul-block-' + Date.now(),
            sender: 'dosen',
            type: 'text',
            text: `<div class="modul-container">
                    <div class="text-xs uppercase font-black text-rose-500 mb-2 tracking-widest"><i class="fas fa-book-open"></i> Bahan Ajar & Studi Literatur Empiris</div>
                    
                    <div class="mb-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-sm">
                        <span class="block text-[11px] font-bold text-slate-500 mb-1.5"><i class="fas fa-image"></i> Ilustrasi Visual Sektor ${contextMatkul}:</span>
                        <img src="${dynamicLiveImage}" onerror="this.onerror=null; this.src='${dynamicImageSource}';" alt="Ilustrasi ${contextMatkul}" class="w-full h-48 object-cover rounded-lg shadow-sm">
                    </div>

                    <div class="mb-4 p-4 bg-slate-950 text-white rounded-xl overflow-hidden shadow-xl border border-slate-800">
                        <span class="block text-xs text-rose-400 font-bold mb-2"><i class="fab fa-youtube"></i> Video Referensi Pembelajaran Visual: ${contextMatkul}</span>
                        <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-black mb-2">
                            <iframe class="absolute top-0 left-0 w-full h-full shadow-inner" src="${youtubeEmbedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <a href="${youtubeExternalUrl}" target="_blank" class="block text-center text-[11px] font-bold text-white bg-red-600 hover:bg-red-700 py-2 rounded-lg transition"><i class="fas fa-external-link-alt mr-1"></i> Video Tidak Muncul? Klik Untuk Cari Rujukan Alternatif Di YouTube</a>
                    </div>

                    <div class="text-sm space-y-2 leading-relaxed text-justify whitespace-pre-line">${neuralNetworkResponse}</div>
                    
                    <div class="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                        <span class="block text-xs text-emerald-600 font-black uppercase mb-1"><i class="fas fa-scroll"></i> Bedah Jurnal & Karya Riset Pendukung</span>
                        <p class="text-xs opacity-90 mb-2">Artikel Ilmiah Terkait: "Analisis Perkembangan Mutakhir Kontemporer Sektor ${contextMatkul}" via Google Scholar Open Access.</p>
                        <div class="flex flex-wrap gap-2">
                            <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(contextMatkul)}" target="_blank" class="inline-block text-xs font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition"><i class="fas fa-search mr-1"></i> Buka Repositori Jurnal</a>
                            <button onclick="window.executePdfDownloadPipeline('${contextMatkul.replace(/'/g, "\\'")}')" class="inline-block text-xs font-bold text-white bg-teal-600 px-3 py-1.5 rounded-lg hover:bg-teal-700 transition"><i class="fas fa-file-pdf mr-1"></i> Ambil PDF Terkait</button>
                        </div>
                    </div>
                   </div>`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        sessionContext.chats.push({
            id: 'modul-followup-' + Date.now(),
            sender: 'dosen',
            type: 'text',
            text: `Nah, materi kuliah and rujukan ahlinya sudah aku jabarkan di atas ya sayang. Ilustrasi visual beserta videonya juga sudah tersusun rapi di atas rujukan jurnal ilmiah biar ngga berantakan lagi. Kalau ada pembahasan awalan konsep yang kamu belum paham, tanyain aja langsung ke aku. Tapi kalau kamu udah siap menguji parameter kompetensi kamu, klik tombol "Uji Kompetensi Kuis" di bawah biar langsung aku tes ya!`,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        });

        sessionContext.currentPhase = 'learning';
        sessionContext.modulDiambil = true;
        saveApplicationStateToDisk();
        render();
        autoScrollTerminalTimeline();
    };

    window.triggerAppKuisWorkflow = async () => {
        const contextMatkul = appState.selectedMatkul.nama;
        const sessionContext = appState.classroomSessions[contextMatkul];

        if (!sessionContext.modulDiambil) {
            return Swal.fire('Akses Ditolak', 'Kamu belum mengambil modul materi hari ini sayang, pelajari dulu materinya ya!', 'warning');
        }
        if (sessionContext.kuisStep > 0 && sessionContext.currentPhase === 'kuis') {
            return Swal.fire('Sesi Berjalan', 'Selesaikan kuis yang sedang aktif terlebih dahulu, jangan kabur!', 'info');
        }

        sessionContext.currentPhase = 'kuis';
        sessionContext.kuisStep = 1;
        sessionContext.kuisScore = 0;

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
            promptInstruction = `Berikan Soal Kuis Nomor ${sessionContext.kuisStep} berjenis Pilihan Ganda (A, B, C, D) seputar materi pokok keilmuan "${activeMatkulName}". Pastikan pertanyaan berfokus penuh pada materi tersebut tanpa keluar jalur, buat struktur kalimat chat santai terarah tanpa embel-embel judul sistem formal.`;
        } else {
            promptInstruction = `Berikan Soal Kuis Nomor ${sessionContext.kuisStep} berjenis Esai Analisis Kasus Riil Industri untuk mata kuliah "${activeMatkulName}". Pertanyaan harus menuntut analisis kritis mahasiswa sesuai batasan parameter data keilmuan materi terkait.`;
        }

        const responseFromNeural = await contactAiNeuralEngine(promptInstruction);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (responseFromNeural.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = responseFromNeural.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Koneksi Terputus', `Gagal memuat bank soal kuis (${cleanErrorMessage}). Sesi kuis direset, silakan klik tombol kuis lagi sayang.`, 'error');
            sessionContext.currentPhase = 'learning';
            sessionContext.kuisStep = 0;
            render();
            autoScrollTerminalTimeline();
            return;
        }

        let formattedContent = `<div class="p-4 bg-surface rounded-xl border card-border shadow-inner">
            <span class="block text-xs uppercase font-extrabold tracking-widest text-rose-500 mb-2"><i class="fas fa-tasks"></i> Pertanyaan Nomor ${sessionContext.kuisStep} dari 5</span>
            <div class="text-sm leading-relaxed">${responseFromNeural}</div>
        </div>`;

        if (determinatorType === 'pg') {
            formattedContent += `<div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="window.submitInteractiveClickAnswer('A')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">Pilih Jawaban A</button>
                <button onclick="window.submitInteractiveClickAnswer('B')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">Pilih Jawaban B</button>
                <button onclick="window.submitInteractiveClickAnswer('C')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">Pilih Jawaban C</button>
                <button onclick="window.submitInteractiveClickAnswer('D')" class="bg-surface hover:bg-rose-500 hover:text-white border border-rose-300 text-xs font-bold py-2 px-3 rounded-xl shadow-sm text-left transition duration-150">Pilih Jawaban D</button>
            </div>`;
        } else {
            formattedContent += `<p class="text-xs italic text-rose-400 mt-2">*Kuis jenis Esai aktif. Silakan ketik langsung analisis argumen jawaban kamu di kolom input pesan bawah lalu klik kirim!*</p>`;
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
            text: `Saya memilih lembar jawaban: Pilihan ${selectedLetterAbjad}`,
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

        const generalChatPromptCompiled = `Jawab pertanyaan akademis mahasiswa bernama "${appState.user.nama}" mengenai topik bahasan spesifik kelas "${contextMatkul}". Isi pertanyaan mahasiswa: "${processedUserText}". Berikan jawaban mengalir natural dari fondasi dasarnya, pertahankan parameter keilmuan bidang "${contextMatkul}", jangan OOT/melenceng ke bidang pemrograman atau komputasi lain kecuali jika kelas aktifnya memang kelas IT! Sertakan referensi teoretis ahli bila dibutuhkan.`;

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

        const evaluationPromptCompiled = `Berikan penilaian korektif yang tajam dan manis untuk jawaban mahasiswa: "${userSubmittedPayload}" pada soal nomor ${sessionContext.kuisStep} mata kuliah "${activeMatkulName}". Terangkan secara eksplisit letak kebenaran atau kekeliruan argumen ilmiah mereka berdasarkan parameter literatur empiris teoretis bidang "${activeMatkulName}" tanpa melenceng ke mana-mana.`;

        const gradingFeedbackResponse = await contactAiNeuralEngine(evaluationPromptCompiled);
        sessionContext.chats = sessionContext.chats.filter(c => c.id !== visualTypingId);

        if (gradingFeedbackResponse.startsWith("ERROR_SIGNAL_FALLBACK:")) {
            const cleanErrorMessage = gradingFeedbackResponse.replace("ERROR_SIGNAL_FALLBACK: ", "");
            Swal.fire('Evaluasi Gagal', `Sistem gagal mengoreksi lembar jawaban (${cleanErrorMessage}). Silakan kirim ulang jawaban terbaikmu sayang.`, 'error');
            sessionContext.chats.pop(); 
            render();
            autoScrollTerminalTimeline();
            return;
        }

        if (sessionContext.lastQuestionType === 'pg') {
            if (["A", "C"].includes(userSubmittedPayload)) sessionContext.kuisScore += 20;
        } else {
            if (userSubmittedPayload.length > 15) sessionContext.kuisScore += 20;
        }

        sessionContext.chats.push({
            id: 'grading-feedback-block-' + sessionContext.kuisStep,
            sender: 'dosen',
            type: 'text',
            text: `<div class="p-3 bg-rose-500/5 rounded-xl border border-dashed border-rose-400">
                    <span class="block text-xs font-bold text-rose-600 mb-1"><i class="fas fa-clipboard-check"></i> Hasil Review & Pembahasan Edukatif:</span>
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

            sessionContext.chats.push({
                id: 'kuis-complete-banner-' + Date.now(),
                sender: 'dosen',
                type: 'text',
                text: `<div class="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-5 rounded-2xl shadow-xl text-center">
                        <i class="fas fa-award text-3xl text-yellow-300 mb-2 block"></i>
                        <div class="text-xs uppercase font-black tracking-widest text-rose-100">Laporan Hasil Akhir Evaluasi</div>
                        <div class="text-4xl font-black my-1">${scoreYield} / 100</div>
                        <div class="text-xs bg-black/20 py-1 px-3 rounded-full inline-block">Indeks IPK Akumulatif: ${appState.ipk.toFixed(2)}</div>
                       </div><br> Mbak You: "Sesi kuis kita hari ini selesai ya sayang. Nilai akhir kamu ${scoreYield}. Progres SKS kamu di dasbor portal kampus sudah otomatis aku perbarui ya!"`,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            });

            saveApplicationStateToDisk();
            render();
            autoScrollTerminalTimeline();
        }
    }

    window.triggerHardResetApplicationData = () => {
        Swal.fire({
            title: 'Hapus Semua Berkas Kuliah?',
            text: "Seluruh basis data nilai IPK, progres SKS, presensi, serta riwayat modul kelas akan dibersihkan total!",
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
                appState.currentPage = 'landing';
                render();
                Swal.fire('Data Dikosongkan!', 'Sistem Pelajarin kembali ke konfigurasi awal pabrik.', 'success');
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

    // WINDOW VIEWPORT MARKUP GENERATOR COMPONENT BLOCKS
    function generateLandingPageHTMLView() {
        let dynamicGradient = "gradient-brand-girly";
        if (appState.currentTheme === 'theme-manly') dynamicGradient = "gradient-brand-manly";
        if (appState.currentTheme === 'theme-soft') dynamicGradient = "gradient-brand-soft";

        return `
        <div class="${dynamicGradient} text-white">
            <div class="container mx-auto px-6 py-5 flex justify-between items-center max-w-6xl">
                <div class="text-xl font-black tracking-tight flex items-center gap-2">
                    <div class="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center border border-white/20"><i class="fas fa-heart text-white text-xs"></i></div>
                    <span>Pelajarin <span class="text-xs font-normal opacity-80">Platform V3 PRO</span></span>
                </div>
                <div class="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold">
                    <i class="fas fa-clock text-yellow-300"></i> Tahun Ajaran: 2026
                </div>
            </div>

            <div class="container mx-auto px-6 py-24 text-center max-w-4xl">
                <div class="inline-flex items-center gap-2 bg-white/10 text-rose-100 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 mb-6 shadow-inner">
                    <span class="w-2 h-2 rounded-full bg-rose-200 animate-ping"></span> Sistem Pendidikan Interaktif Terbuka
                </div>
                <h1 class="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-none">Ubah Pengalaman Kuliah S1 <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-white">Dengan Modul Progresif AI</span></h1>
                <p class="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">Mulai perkuliahan mandiri kamu secara realistis dari 0 SKS. Kumpulkan pemahaman modul bersama Mbak You (Dosen AI Pengampu S1 Anda).</p>
                <button onclick="window.launchRegistrationModal()" class="bg-white text-rose-900 font-black text-base px-8 py-4 rounded-xl shadow-2xl hover:bg-slate-50 transform hover:-translate-y-0.5 transition duration-150"><i class="fas fa-id-card mr-2"></i> Buat KTM Mahasiswa Baru Sekarang</button>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16 max-w-6xl">
            <div class="text-center max-w-xl mx-auto mb-12">
                <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Pilih Fokus Program Keilmuan</h2>
                <p class="opacity-60 text-xs sm:text-sm mt-2">Daftar prodi sarjana terbuka dengan kurikulum terintegrasi kecerdasan buatan.</p>
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
                            <div class="text-[10px] opacity-40 font-black uppercase tracking-wider">Rekomendasi Karir:</div>
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
                    <i class="fas fa-graduation-cap"></i> Portal Academic Pelajarin
                </div>
                <div class="flex items-center gap-3">
                    <div class="bg-chat-area p-1 rounded-lg border card-border flex gap-1 text-xs font-bold text-slate-800">
                        <button onclick="window.switchApplicationTheme('theme-manly')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-manly' ? 'bg-sky-600 text-white' : 'opacity-60'}">Manly Black</button>
                        <button onclick="window.switchApplicationTheme('theme-girly')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-girly' ? 'bg-rose-500 text-white' : 'opacity-60'}">Girly Pink</button>
                        <button onclick="window.switchApplicationTheme('theme-soft')" class="px-2 py-1 rounded ${appState.currentTheme === 'theme-soft' ? 'bg-indigo-600 text-white' : 'opacity-60'}">Soft Aesthetic</button>
                    </div>
                    <div class="h-6 w-px bg-slate-300"></div>
                    <button onclick="window.triggerHardResetApplicationData()" class="text-xs font-extrabold bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-500 px-3 py-2 rounded-xl transition"><i class="fas fa-trash-alt"></i> Reset</button>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8 max-w-6xl">
            <div class="bg-surface rounded-2xl p-6 border card-border shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <span class="text-xs font-black uppercase tracking-widest dynamic-text"><i class="fas fa-shield-alt"></i> Jurnal Mahasiswa Aktif</span>
                    <h1 class="text-2xl font-black mt-1 tracking-tight">${appState.user.nama}</h1>
                    <p class="text-xs opacity-70 mt-0.5">${structuralProdiObj.nama} • Jenjang Sarjana Terbuka S1</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="window.commitDailyAttendanceSignature()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-sm transition"><i class="fas fa-fingerprint mr-1.5"></i> Absen Kehadiran</button>
                    <button onclick="window.modifyActiveSemesterState()" class="dynamic-btn font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-sm transition"><i class="fas fa-exchange-alt mr-1.5"></i> Ganti Semester (${appState.semesterAktif})</button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">IPK Kumulatif</div>
                    <div class="text-2xl font-black dynamic-text mt-1">${parseFloat(appState.ipk).toFixed(2)}</div>
                    <div class="text-[9px] opacity-40 mt-1">Skala Maksimum 4.00</div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">Total SKS Lulus</div>
                    <div class="text-2xl font-black mt-1">${appState.totalSks} <span class="text-xs opacity-40 font-normal">/ 144</span></div>
                    <div class="w-full bg-chat-area h-1.5 rounded-full mt-2 overflow-hidden border card-border">
                        <div class="bg-rose-500 h-full progress-fill-anim" style="width: ${sksProgressPercentage}%"></div>
                    </div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">Beban Kuliah Semester</div>
                    <div class="text-2xl font-black mt-1 text-amber-500">${actualMatkulCollection.length} MK</div>
                    <div class="text-[9px] opacity-40 mt-1">Kurikulum Berlaku</div>
                </div>
                <div class="bg-surface p-5 rounded-2xl border card-border shadow-sm">
                    <div class="text-[10px] font-black opacity-50 uppercase tracking-wider">Rasio Presensi</div>
                    <div class="text-2xl font-black text-emerald-500 mt-1">${scorePercentageAttendance}%</div>
                    <div class="w-full bg-chat-area h-1.5 rounded-full mt-2 overflow-hidden border card-border">
                        <div class="bg-emerald-500 h-full progress-fill-anim" style="width: ${scorePercentageAttendance}%"></div>
                    </div>
                </div>
            </div>

            <div class="bg-surface rounded-2xl border card-border p-6 shadow-sm">
                <div class="border-b card-border pb-4 mb-4 flex justify-between items-center">
                    <h2 class="text-lg font-black flex items-center gap-2"><i class="fas fa-layer-group dynamic-text"></i> Daftar Mata Kuliah Sesi - Semester ${appState.semesterAktif}</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${actualMatkulCollection.map((matkulLabel, sequenceIdx) => {
                        const currentSessionLog = appState.classroomSessions[matkulLabel];
                        let operationalStatusHTML = `<span class="text-[11px] opacity-40"><i class="far fa-circle mr-1"></i>Belum diambil</span>`;
                        if (currentSessionLog) {
                            if (currentSessionLog.currentPhase === 'complete') {
                                operationalStatusHTML = `<span class="text-[11px] text-emerald-500 font-bold"><i class="fas fa-check-circle mr-1"></i>Selesai (Kuis Rampung)</span>`;
                            } else if (currentSessionLog.modulDiambil) {
                                operationalStatusHTML = `<span class="text-[11px] text-amber-500 font-bold animate-pulse"><i class="fas fa-book-open mr-1"></i>Sedang Dipelajari</span>`;
                            }
                        }

                        return `
                        <div onclick="window.navigateToClassroomTerminal('${matkulLabel.replace(/'/g, "\\'")}')" class="border card-border rounded-xl p-4 cursor-pointer hover:bg-rose-500/5 transition flex justify-between items-center group card-scale">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-lg bg-chat-area text-xs font-bold flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white border card-border transition">
                                    ${sequenceIdx + 1}
                                </div>
                                <div>
                                    <div class="font-bold text-sm group-hover:text-rose-500 transition">${matkulLabel}</div>
                                    <div class="flex items-center gap-2 mt-0.5">
                                        <span class="text-[9px] bg-chat-area px-1.5 py-0.5 rounded border card-border font-bold uppercase">3 SKS</span>
                                        ${operationalStatusHTML}
                                    </div>
                                </div>
                            </div>
                            <i class="fas fa-chevron-right text-xs opacity-20 group-hover:opacity-100 group-hover:text-rose-500 transform group-hover:translate-x-1 transition"></i>
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
                    <button onclick="window.exitClassroomTerminalToDashboard()" class="hover:bg-rose-500/10 w-9 h-9 rounded-full flex items-center justify-center text-rose-500 transition"><i class="fas fa-arrow-left text-base"></i></button>
                    <div>
                        <h2 class="font-black text-sm sm:text-base leading-tight tracking-tight">${activeMatkulName}</h2>
                        <p class="text-[11px] text-rose-500 font-bold flex items-center gap-1"><i class="fas fa-circle text-[7px] text-green-400 animate-pulse"></i> Terminal Eksklusif Mbak You</p>
                    </div>
                </div>
                <div class="text-xs font-bold px-3 py-1.5 rounded-lg bg-chat-area border card-border uppercase text-rose-400">
                    Fase: ${workingSession?.currentPhase || 'idle'}
                </div>
            </div>

            <div id="terminalTimelineScrollWrapper" class="flex-1 bg-chat-area overflow-y-auto px-4 py-6 space-y-4">
                <div class="max-w-4xl w-full mx-auto space-y-4">
                    ${conversationHistory.map(bubbleItem => {
                        if (bubbleItem.sender === 'user') {
                            return `
                            <div class="flex justify-end msg-entry">
                                <div class="bg-slate-800 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md max-w-[85%] border border-slate-700">
                                    <span class="block text-[10px] font-black text-slate-300 uppercase mb-0.5"><i class="fas fa-user-graduate"></i> Anda (Mahasiswa)</span>
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
                                                <div class="text-xs font-semibold opacity-70 italic text-rose-400">Mbak You sedang merangkum keilmuan...</div>
                                            </div>
                                        </div>
                                        `;
                                    }

                                    return `
                                    <div class="flex justify-start msg-entry">
                                        <div class="bg-surface rounded-2xl rounded-tl-none px-4 py-4 border card-border shadow-sm max-w-[92%] sm:max-w-[85%]">
                                            <div class="text-xs font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                                                <i class="fas fa-user-shield"></i> Mbak You <span class="bg-rose-500/10 text-[9px] text-rose-400 px-2 py-0.5 rounded-full font-black border border-rose-500/20">Dosen Pengampu S1</span>
                                            </div>
                                            <div class="text-sm sm:text-base leading-relaxed opacity-95 text-justify whitespace-normal">${bubbleItem.text}</div>
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
                                    <i class="fas fa-book-open"></i> Ambil Modul Sesi Ini
                                </button>
                                <button onclick="window.triggerAppKuisWorkflow()" class="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 whitespace-nowrap transition">
                                    <i class="fas fa-star text-xs"></i> Uji Kompetensi Kuis
                                </button>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="flex-1 bg-chat-area rounded-xl px-4 py-3 flex items-center border card-border gap-2">
                                    <i class="fas fa-terminal text-rose-500 text-sm opacity-40"></i>
                                    <input type="text" id="terminalCoreInputField" onkeydown="if(event.key === 'Enter') window.processUserTextMessagingInput()" class="w-full text-sm sm:text-base bg-transparent focus:outline-none font-medium placeholder-slate-400" placeholder="Ketik jawaban esai atau ajukan pertanyaan diskusi...">
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

            // BOOTSTRAP INITIALIZATION PIPELINE RUNNER
            loadApplicationStateFromDisk();
            render();
            autoScrollTerminalTimeline();
        })();
