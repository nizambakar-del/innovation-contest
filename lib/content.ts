export const eventInfo = {
  name: "Innovation Contest 2027",
  brand: "Anugerah Inovasi 2027",
  theme: "Innovation Go Global",
  organizer: "Kementerian Komunikasi",
  organizerEn: "Ministry of Communication",
  ceremony: "8 Ogos 2027",
  ceremonyIso: "2027-08-08",
  venue: "Millennium Ballroom, Le Méridien Hotel, Putrajaya",
  registration: "Dalam talian",
  closeDate: "Akan disahkan",
  status: "Belum dibuka",
} as const;

export const navLinks = [
  { href: "#utama", label: "Utama" },
  { href: "#mengenai", label: "Mengenai" },
  { href: "#kategori", label: "Kategori" },
  { href: "#syarat", label: "Syarat Penyertaan" },
  { href: "#garis-panduan", label: "Garis Panduan" },
  { href: "#soalan", label: "Soalan Lazim" },
  { href: "#hubungi", label: "Hubungi Kami" },
] as const;

export const objectives = [
  {
    title: "Mengiktiraf idea dan inovasi yang berkualiti.",
    text: "Memberi pengiktirafan rasmi kepada kerja yang menyelesaikan masalah sebenar, bukan sekadar idea yang baharu pada kertas.",
  },
  {
    title: "Menggalakkan budaya kreativiti.",
    text: "Membuka ruang supaya penjawat awam dan pasukan agensi berani mencuba pendekatan yang lebih baik.",
  },
  {
    title: "Memperkasakan transformasi digital.",
    text: "Menjadikan teknologi alat kepada perkhidmatan dan keputusan, bukan tujuan pada dirinya.",
  },
  {
    title: "Meningkatkan kecekapan penyampaian perkhidmatan.",
    text: "Mengurangkan geseran yang dirasai oleh pengguna perkhidmatan awam dan oleh pasukan yang menyampaikannya.",
  },
  {
    title: "Menggalakkan perkongsian ilmu dan amalan terbaik.",
    text: "Supaya kejayaan satu pasukan boleh dipelajari, disesuaikan dan dikembangkan oleh agensi lain.",
  },
] as const;

export const categories = [
  {
    id: "digital",
    index: "01",
    title: "Inovasi Digital",
    summary:
      "Penyelesaian berasaskan teknologi digital yang menambah baik proses, data atau pengalaman pengguna.",
    suits: "Pasukan yang membina sistem, automasi, analitik atau perkhidmatan dalam talian.",
    emphasis: "Nyatakan masalah operasi, seni bina penyelesaian, dan bukti bahawa ia digunakan.",
    tone: "from-violet/20",
  },
  {
    id: "pengurusan",
    index: "02",
    title: "Inovasi Pengurusan",
    summary:
      "Pendekatan baharu dalam tadbir urus, proses kerja dan pengurusan sumber organisasi.",
    suits: "Pasukan yang mengubah cara keputusan dibuat, diukur atau diselaraskan.",
    emphasis: "Tunjukkan perubahan tata kerja dan kesannya kepada kelajuan atau kualiti keputusan.",
    tone: "from-gold/15",
  },
  {
    id: "perkhidmatan",
    index: "03",
    title: "Inovasi Penyampaian Perkhidmatan",
    summary:
      "Penambahbaikan yang memudahkan rakyat dan pihak berkepentingan menerima perkhidmatan.",
    suits: "Pasukan barisan hadapan, kaunter, pusat panggilan dan perkhidmatan dalam talian.",
    emphasis: "Mulakan daripada pengalaman pengguna, kemudian terangkan apa yang dipendekkan atau dijelaskan.",
    tone: "from-white/10",
  },
  {
    id: "produk",
    index: "04",
    title: "Inovasi Produk",
    summary:
      "Produk atau alat baharu yang menyelesaikan keperluan operasi dengan fungsi yang jelas.",
    suits: "Pasukan yang menghasilkan alat, kit, peranti atau produk guna sama.",
    emphasis: "Huraikan fungsi, pengguna sebenar, dan perbezaannya daripada alat sedia ada.",
    tone: "from-gold/10",
  },
  {
    id: "sosial",
    index: "05",
    title: "Inovasi Sosial",
    summary:
      "Inisiatif yang memperkukuh kesejahteraan, inklusiviti dan nilai kepada masyarakat.",
    suits: "Pasukan yang bekerja dengan komuniti, literasi, akses atau penyertaan awam.",
    emphasis: "Namakan siapa yang dibantu dan bagaimana perubahan itu diperhatikan.",
    tone: "from-violet/10",
  },
  {
    id: "hijau",
    index: "06",
    title: "Inovasi Hijau",
    summary:
      "Amalan atau teknologi yang mengurangkan impak alam sekitar secara yang dapat dijelaskan.",
    suits: "Pasukan yang menangani tenaga, sisa, perjalanan, atau penggunaan sumber.",
    emphasis: "Sertakan asas perbandingan: sebelum dan selepas, walaupun angka masih awal.",
    tone: "from-emerald-400/10",
  },
] as const;

export const benefits = [
  {
    index: "01",
    title: "Pengiktirafan rasmi.",
    text: "Penyertaan yang cemerlang menerima pengiktirafan penganjur di majlis rasmi. Yang diiktiraf ialah kerja pasukan, bukan sekadar kehadiran.",
  },
  {
    index: "02",
    title: "Platform mengetengahkan idea.",
    text: "Idea yang selama ini kekal di dalam unit atau agensi mendapat ruang untuk dilihat, difahami dan dinilai secara terbuka.",
  },
  {
    index: "03",
    title: "Peluang memperluaskan jaringan.",
    text: "Majlis dan proses penilaian mempertemukan pasukan inovasi, penilai dan agensi yang menghadapi cabaran yang serupa.",
  },
  {
    index: "04",
    title: "Perkongsian pengalaman.",
    text: "Setiap penyertaan menjadi bahan pembelajaran. Pasukan yang tidak terpilih tetap menyumbang kepada himpunan amalan sektor awam.",
  },
  {
    index: "05",
    title: "Pengiktirafan pencapaian pasukan.",
    text: "Kerja kolektif — penyelidikan, pelaksanaan dan penambahbaikan — mendapat nama, bukan hanya tersimpan dalam laporan dalaman.",
  },
] as const;

export const statPlaceholders = [
  { value: "—", label: "Peserta", note: "Angka rasmi belum diterbitkan." },
  { value: "—", label: "Agensi", note: "Angka rasmi belum diterbitkan." },
  { value: "—", label: "Pemenang edisi lepas", note: "Edisi ini belum mempunyai rekod pemenang." },
  { value: "06", label: "Kategori edisi ini", note: "Bilangan laluan penyertaan, bukan statistik pencapaian." },
] as const;

export const steps = [
  {
    index: "01",
    title: "Daftar Akaun",
    text: "Nama pegawai, agensi dan pasukan didaftarkan melalui borang penyertaan dalam talian. Satu profil mewakili organisasi yang dinamakan.",
  },
  {
    index: "02",
    title: "Pilih Kategori",
    text: "Tentukan kategori yang paling hampir dengan sifat inovasi. Jika inovasi menyentuh lebih daripada satu bidang, pilih laluan yang paling utama.",
  },
  {
    index: "03",
    title: "Hantar Dokumen Inovasi",
    text: "Hantar ringkasan, bukti impak dan bahan sokongan mengikut garis panduan. Pastikan tiada maklumat sulit yang tidak diluluskan untuk perkongsian.",
  },
  {
    index: "04",
    title: "Penilaian Panel",
    text: "Panel meneliti setiap penyertaan berdasarkan kriteria yang diumumkan. Keputusan rasmi hanya sah setelah diumumkan oleh penganjur.",
  },
] as const;

export const criteria = [
  {
    title: "Kreativiti dan keaslian.",
    text: "Pendekatan itu baharu bagi konteks organisasi, dan kerja itu adalah hasil pasukan yang menghantar.",
  },
  {
    title: "Impak dan keberkesanan.",
    text: "Perubahan dapat diterangkan dengan jelas: apa yang bertambah baik, dan kepada siapa.",
  },
  {
    title: "Kebolehgunaan.",
    text: "Inovasi boleh digunakan dalam operasi sebenar, bukan hanya dalam demonstrasi yang terkawal.",
  },
  {
    title: "Potensi pengembangan.",
    text: "Agensi lain boleh menyesuaikan idea ini tanpa bermula dari sifar.",
  },
  {
    title: "Kelestarian inovasi.",
    text: "Ia dapat diteruskan dari segi kos, manusia, tadbir urus dan, jika berkaitan, alam sekitar.",
  },
] as const;

export const dates = [
  {
    date: "2 Mac 2027",
    title: "Pembukaan penyertaan",
    text: "Borang dalam talian dibuka kepada agensi dan pasukan yang layak.",
    state: "Indikatif",
  },
  {
    date: "18 Jun 2027",
    title: "Tarikh tutup penyertaan",
    text: "Dokumen yang tidak lengkap selepas tarikh tutup tidak dinilai.",
    state: "Indikatif",
  },
  {
    date: "21 Jun – 16 Julai 2027",
    title: "Penilaian",
    text: "Panel meneliti penyertaan mengikut kriteria yang diterbitkan.",
    state: "Indikatif",
  },
  {
    date: "23 Julai 2027",
    title: "Pengumuman finalis",
    text: "Finalis dimaklumkan melalui saluran rasmi penganjur.",
    state: "Indikatif",
  },
  {
    date: "8 Ogos 2027",
    title: "Majlis penyampaian anugerah",
    text: "Millennium Ballroom, Le Méridien Hotel, Putrajaya.",
    state: "Ditetapkan",
  },
] as const;

export const winners = [
  {
    title: "Contoh: Meja Perkhidmatan Bersepadu",
    organization: "Organisasi Contoh A",
    category: "Inovasi Penyampaian Perkhidmatan",
    text: "Naratif contoh tentang sebuah inovasi yang memendekkan langkah pengguna. Ini bukan projek sebenar dan tidak mewakili mana-mana agensi.",
    wash: "from-[#3a2158] via-[#140a22] to-[#07040f]",
  },
  {
    title: "Contoh: Papan Pemuka Operasi",
    organization: "Organisasi Contoh B",
    category: "Inovasi Digital",
    text: "Contoh bagi paparan data operasi yang membantu keputusan harian. Diletakkan di sini semata-mata untuk menunjukkan reka bentuk galeri.",
    wash: "from-[#6a4a1d] via-[#1a1208] to-[#07040f]",
  },
  {
    title: "Contoh: Kitar Semula Aliran Kerja",
    organization: "Organisasi Contoh C",
    category: "Inovasi Hijau",
    text: "Contoh bagi penambahbaikan proses yang mengurangkan pembaziran. Nama, organisasi dan hasil adalah rekaan untuk demonstrasi.",
    wash: "from-[#1d3a32] via-[#0c1614] to-[#07040f]",
  },
] as const;

export const rules = [
  {
    id: "kelayakan",
    title: "Kelayakan",
    text: "Penyertaan terbuka kepada agensi kerajaan, penjawat awam dan pasukan inovasi sektor awam. Penyertaan dibuat atas nama organisasi, melalui pegawai yang diberi kuasa untuk menghantar.",
  },
  {
    id: "saluran",
    title: "Penyertaan dalam talian",
    text: "Pendaftaran dan penghantaran dokumen dibuat secara dalam talian. Saluran fizikal tidak menggantikan borang rasmi setelah sistem dibuka.",
  },
  {
    id: "keaslian",
    title: "Keaslian",
    text: "Inovasi mestilah hasil pasukan yang menghantar. Penggunaan kerja pihak lain perlu diiktiraf. Penyertaan yang mengandungi tuntutan palsu boleh ditolak.",
  },
  {
    id: "satu-inovasi",
    title: "Satu inovasi, satu penyertaan",
    text: "Setiap penyertaan membawa satu inovasi. Inovasi yang berbeza boleh dihantar secara berasingan. Had bilangan penyertaan bagi setiap agensi akan disahkan dalam pekeliling.",
  },
  {
    id: "sulit",
    title: "Maklumat sulit",
    text: "Jangan muat naik data peribadi orang awam, rahsia rasmi, atau maklumat yang belum diluluskan untuk perkongsian luar unit.",
  },
  {
    id: "panel",
    title: "Keputusan panel",
    text: "Panel menilai berdasarkan kriteria yang diterbitkan. Keputusan hanya muktamad setelah diumumkan secara rasmi oleh penganjur.",
  },
  {
    id: "tarikh",
    title: "Tarikh",
    text: "Tarikh yang ditanda indikatif belum muktamad. Tarikh majlis, 8 Ogos 2027, ialah tarikh yang ditetapkan dalam taklimat ini.",
  },
  {
    id: "yuran",
    title: "Yuran",
    text: "Taklimat ini tidak menetapkan sebarang yuran penyertaan. Jika ada caj, ia hanya terpakai setelah diumumkan dalam pekeliling rasmi.",
  },
] as const;

export const guidelines = [
  {
    id: "struktur",
    title: "Struktur dokumen inovasi",
    points: [
      "Tajuk inovasi dan kategori yang dipilih.",
      "Organisasi, nama pasukan dan pegawai untuk dihubungi.",
      "Masalah yang diselesaikan, dalam konteks operasi sebenar.",
      "Penyelesaian: apa yang diubah, dibina atau diperkenalkan.",
      "Impak, kebolehgunaan, potensi pengembangan dan kelestarian.",
    ],
  },
  {
    id: "bahasa",
    title: "Bahasa dan format",
    points: [
      "Bahasa Melayu atau English.",
      "Dokumen utama dalam PDF apabila sistem dibuka.",
      "Had saiz fail dan templat rasmi akan ditetapkan dalam pekeliling.",
      "Nama fail yang jelas, mengandungi nama agensi dan tajuk ringkas.",
    ],
  },
  {
    id: "bukti",
    title: "Bukti impak",
    points: [
      "Gunakan perbandingan sebelum dan selepas jika ada.",
      "Angka yang belum diaudit perlu dilabel sebagai anggaran dalaman.",
      "Jangan mencipta metrik. Jika bukti masih kualitatif, terangkan pemerhatian dengan jujur.",
      "Bahan sokongan seperti gambar skrin atau foto proses adalah pilihan, bukan syarat tersembunyi.",
    ],
  },
  {
    id: "media",
    title: "Media sokongan",
    points: [
      "Video adalah pilihan. Jika disertakan, gunakan orientasi landskap dan pastikan hak muzik atau imej adalah milik pasukan atau berlesen.",
      "Jangan gunakan kaedah tiruan untuk meningkatkan tontonan atau penilaian.",
      "Pautan luar, jika dibenarkan kemudian, mestilah boleh diakses oleh penilai tanpa kata laluan peribadi.",
    ],
  },
  {
    id: "semakan",
    title: "Semakan sebelum menghantar",
    points: [
      "Kategori sepadan dengan inti inovasi.",
      "Nama organisasi dieja seperti dalam dokumen rasmi.",
      "Tiada maklumat sulit atau data peribadi yang tidak perlu.",
      "Perakuan keaslian ditandakan oleh pegawai yang diberi kuasa.",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Siapakah yang layak menyertai?",
    a: "Agensi kerajaan, penjawat awam dan pasukan inovasi sektor awam. Penyertaan dibuat atas nama organisasi melalui pegawai yang diberi kuasa untuk menghantar.",
  },
  {
    q: "Adakah penyertaan dikenakan bayaran?",
    a: "Taklimat ini tidak menetapkan sebarang yuran. Penyertaan tidak boleh diandaikan percuma atau berbayar sehingga penganjur mengumumkannya dalam pekeliling rasmi.",
  },
  {
    q: "Berapa kategori yang boleh disertai?",
    a: "Terdapat enam kategori. Setiap inovasi dihantar sebagai penyertaan berasingan. Had bagi setiap agensi akan disahkan dalam garis panduan rasmi. Pilih kategori yang paling hampir dengan inti inovasi tersebut.",
  },
  {
    q: "Apakah dokumen yang diperlukan?",
    a: "Tajuk inovasi, organisasi dan pasukan, ringkasan masalah dan penyelesaian, serta penerangan impak, kebolehgunaan, potensi pengembangan dan kelestarian. Perakuan keaslian diperlukan. Format fail muktamad akan ditetapkan apabila sistem dibuka.",
  },
  {
    q: "Bagaimanakah proses penilaian dijalankan?",
    a: "Selepas penghantaran ditutup, panel meneliti penyertaan berdasarkan kreativiti dan keaslian, impak dan keberkesanan, kebolehgunaan, potensi pengembangan, serta kelestarian. Keputusan hanya muktamad setelah diumumkan secara rasmi.",
  },
  {
    q: "Bilakah keputusan diumumkan?",
    a: "Pengumuman finalis dan keputusan mengikut garis masa rasmi. Tarikh pada laman ini yang ditanda indikatif belum muktamad. Majlis penyampaian anugerah ditetapkan pada 8 Ogos 2027 di Putrajaya.",
  },
] as const;

export const draftNotice =
  "Draf untuk laman ini. Butiran muktamad tertakluk kepada pekeliling rasmi Kementerian Komunikasi.";
