// ============================================================
// config.js  -  DATA KELAS (satu-satunya file data yang perlu diganti)
// Untuk kelas lain: ubah isi file ini, ganti foto (foto-hero.jpg,
// galeri-1..3.jpg), ikon, dan manifest.json. Kode index.html tidak diubah.
// ============================================================
const CFG = {
  // --- Identitas kelas ---
  namaApp: 'TUGASKU',
  kelas: '01IKOK005',
  prodi: 'Ilmu Komunikasi',
  kampus: 'UNPAM',
  semester: 'Semester Gasal 2026/2027',
  pemilik: 'Arif Hidayat',          // tertulis di hak cipta bagian bawah
  tahunHakCipta: '2026',

  // --- Google Sheets data kelas (ID ada di URL: /d/ID/edit). Dibagikan "siapa saja yang memiliki link: Pelihat" ---
  sheetId: '10YzLwmNqhlPCCsfNOzvptGG9MFzXNduhbG-TB-nXdus',

  // --- Foto (unggah file dengan nama yang sama ke GitHub) ---
  fotoHero: 'foto-hero.jpg',
  galeri: ['galeri-1.jpg', 'galeri-2.jpg', 'galeri-3.jpg'],
  galeriJudul: 'Foto kelas 01IKOK005',
  galeriKet: 'Kenangan bersama teman-teman kelas.',

  // --- Semester ---
  semesterMulai: '2026-08-31',
  semesterSelesai: '2026-12-19',
  hitungMundur: [['UTS', '2026-10-19', '19–24 Okt'], ['UAS', '2026-12-14', '14–19 Des']],

  // --- Kalender akademik (dari SK Rektor). Kategori: k=awal kuliah, u=UTS/UAS, b=pembayaran/registrasi, l=libur, i=info ---
  kalenderJudul: 'Kalender Akademik UNPAM · Semester Gasal 2026/2027',
  kalenderSumber: 'Kalender Akademik UNPAM 2026/2027 (SK Rektor)',
  kalenderBulan: [[2026,7],[2026,8],[2026,9],[2026,10],[2026,11],[2027,0],[2027,1]],          // [tahun, bulan(0=Januari)]
  akademik: [
  ["2026-08-31","","k","Awal perkuliahan Reg. A & B dan Reg. CK & CS Kelompok MK 2"],
  ["2026-09-03","","k","Awal perkuliahan Reg. CK Kelompok MK 1"],
  ["2026-09-05","","k","Awal perkuliahan Reg. CS Kelompok MK 1"],
  ["2026-10-13","","b","Batas akhir pelunasan biaya kuliah Reg. A & B s.d. angsuran ke-3 dan UTS"],
  ["2026-10-15","","b","Batas akhir pelunasan biaya kuliah Reg. CK & CS s.d. angsuran ke-3 dan UTS"],
  ["2026-10-19","2026-10-24","u","Pekan UTS"],
  ["2026-10-19","2026-10-27","b","Pendaftaran UTS susulan"],
  ["2026-10-29","","u","Pelaksanaan UTS susulan"],
  ["2026-10-31","","u","Pelaksanaan UTS susulan"],
  ["2026-11-02","","i","Batas akhir input nilai UTS (dosen)"],
  ["2026-12-08","","b","Batas akhir pelunasan biaya kuliah dan pembayaran UAS Reg. A & B"],
  ["2026-12-10","","b","Batas akhir pelunasan biaya kuliah dan pembayaran UAS Reg. CK & CS"],
  ["2026-12-14","2026-12-19","u","Pekan UAS"],
  ["2026-12-14","2027-01-02","b","Pendaftaran UTS revisi dan UAS susulan/revisi"],
  ["2026-12-24","","l","Cuti bersama Kelahiran Yesus Kristus"],
  ["2026-12-25","","l","Kelahiran Yesus Kristus"],
  ["2026-12-26","2026-12-31","l","Libur akhir tahun"],
  ["2027-01-01","","l","Libur Tahun Baru Masehi"],
  ["2027-01-05","","l","Isra Miraj Nabi Muhammad SAW"],
  ["2027-01-07","","u","Pelaksanaan UTS revisi dan UAS susulan/revisi"],
  ["2027-01-09","","u","Pelaksanaan UTS revisi dan UAS susulan/revisi"],
  ["2027-01-18","2027-01-26","b","Heregistrasi mahasiswa lama"],
  ["2027-02-05","","i","Batas akhir Semester Gasal 2026/2027"],
  ["2027-02-06","","l","Tahun Baru Imlek"],
  ["2027-02-08","2027-02-09","l","Libur awal puasa"],
  ["2027-02-10","2027-02-13","b","Revisi KRS"],
  ["2027-02-15","","k","Awal perkuliahan Semester Genap Reg. A & B dan Reg. CK & CS Kelompok MK 2"],
  ["2027-02-18","","k","Awal perkuliahan Semester Genap Reg. CK Kelompok MK 1"],
  ["2027-02-20","","k","Awal perkuliahan Semester Genap Reg. CS Kelompok MK 1"]
  ],

  // --- Mata kuliah: [nama, SKS, kelompok, emoji] ---
  matkul: [
  ["Pengantar Komunikasi & Visual",3,1,"🎨"],
  ["Agama Islam",2,1,"🕌"],
  ["Pancasila",2,1,"🦅"],
  ["Basic English for International Communication",2,1,"🗣️"],
  ["Pengantar Produksi Penyiaran",3,2,"🎬"],
  ["Pengantar Public Speaking",3,2,"🎤"],
  ["Pengantar Ilmu Sosial & Humaniora Komunikasi",2,2,"🌏"],
  ["Pengantar Komunikasi Korporat",3,2,"🏢"]
  ],

  // --- Dosen bawaan (nomor mata kuliah mulai 0). Sisanya diisi lewat tab "Dosen" di Google Sheets ---
  dosenAwal: {"1":{"d":"Dr. H. Subhan Fadli, S.Pd.I., M.A.","j":"Kamis, 07.40 - 09.20","r":"V.640"}},

  // --- Jadwal pekan: [pekan, tanggal tatap muka (Kamis), awal pekan daring (Senin), [2sks K1, 3sks K1, 4sks K1, 2sks K2, 3sks K2, 4sks K2]] ---
  // Format sel "pertemuan tatap muka|pertemuan daring". Pekan ujian ditulis 'UTS' atau 'UAS'.
  jadwalPekan: [
  ["I","2026-09-03","2026-08-31",["1|","1|","1,2|","|1","|1","|1,2"]],
  ["II","2026-09-10","2026-09-07",["2|","2|3","3,4|","|2","|2,3","|3,4"]],
  ["III","2026-09-17","2026-09-14",["3|","4|","5,6|","|3","|4","|5,6"]],
  ["IV","2026-09-24","2026-09-21",["4|","5|6","7,8|","|4","|5,6","|7,8"]],
  ["V","2026-10-01","2026-09-28",["5|","7|","9,10|","|5","|7","|9,10"]],
  ["VI","2026-10-08","2026-10-05",["6|","8|9","11,12|","|6","|8,9","|11,12"]],
  ["VII","2026-10-15","2026-10-12",["7|","10|","13,14|","|7","|10","|13,14"]],
  ["VIII","2026-10-22","2026-10-19","UTS"],
  ["IX","2026-10-29","2026-10-26",["|8","|11,12","|15,16","8|","11|12","15,16|"]],
  ["X","2026-11-05","2026-11-02",["|9","|13","|17,18","9|","13|","17,18|"]],
  ["XI","2026-11-12","2026-11-09",["|10","|14,15","|19,20","10|","14|15","19,20|"]],
  ["XII","2026-11-19","2026-11-16",["|11","|16","|21,22","11|","16|","21,22|"]],
  ["XIII","2026-11-26","2026-11-23",["|12","|17,18","|23,24","12|","17|18","23,24|"]],
  ["XIV","2026-12-03","2026-11-30",["|13","|19","|25,26","13|","19|","25,26|"]],
  ["XV","2026-12-10","2026-12-07",["|14","|20,21","|27,28","14|","20|21","27,28|"]],
  ["XVI","2026-12-17","2026-12-14","UAS"]
  ],

  // --- Pengurus kelas (w = nomor WhatsApp format 62...) ---
  pengurus: [
  {"r":"Dosen pembimbing","n":"Choirunnisa, S.I.Kom., M.I.Kom.","c":"#2F6FED","w":"6285172247112"},
  {"r":"Ketua kelas","n":"Arif Hidayat","c":"#FFC93C","w":"6285117231372","d":"#17294D"},
  {"r":"Wakil ketua","n":"Rahmat Andika Saputra","c":"#4CB878","w":"628978261366","d":"#17294D"},
  {"r":"Sekretaris","n":"Shayla Ramadani","c":"#17294D","w":"6285692824584"}
  ],

  // --- Daftar mahasiswa (nama persis seperti di daftar hadir) ---
  mahasiswa: [
  "AHMAD LUTHFI SAUKI",
  "AISYAH SATIRA",
  "ALFIANA NURUL LISANA",
  "AREL BISRI AL AYUBI",
  "ARIF HIDAYAT",
  "AULIA AL FILLAH",
  "FAREL ADI PRAMUDYA",
  "HILMAN NUARI ILYAS",
  "HILWA NURMAULIDA",
  "IIF DIKA ARNANDA",
  "JESSICA AMELIA JOSMAN",
  "KENTI UMI GUSMIARNI",
  "KEYSAN NOVAL MUSAFA",
  "LUSI DARMAYANTI",
  "MAULINA KARISMA",
  "MEISYA ALY",
  "MUHAMAD ALFIANSYAH FIRDAUS",
  "MUHAMAD RIZAL SUBAGZA",
  "MUHAMAD SABRIYANSYAH",
  "MUHAMMAD AMAR MA'RUF NATUNGGA",
  "MUHAMMAD GILBRAN FIRDAUS",
  "MUHAMMAD IFFALDO GYMNASTIAR",
  "MUTIARA ZAKILLA DEWI",
  "NABIL MAULANA",
  "NADIA KHAIRUN NISA",
  "NADIA PUTRI PRAWITA SARI",
  "NOVERIANUS GULO",
  "PANCA ZULIYANA KARTIKA",
  "PUTRI MASYIFA KHAIRIYAH RULLY",
  "RAHMAT ANDIKA SAPUTRA",
  "SALSA INDAH WIDYA SANTOSO",
  "SHAYLA RAMADANI",
  "SYAHRIANI PUTRI",
  "TALITHA ZERLINA EVENDI",
  "VHANESSA APRILLITA",
  "YULIA TRI AMANDA",
  "ZULFA KHAIRIYAH"
  ]
};
