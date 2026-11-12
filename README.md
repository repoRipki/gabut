# RIPKI // ANALOG HORROR SURVEY (GitHub Pages)

Versi ini hanya memakai HTML, CSS, dan JavaScript biasa. Tidak membutuhkan Node.js, Express, SQLite, atau panel Pterodactyl.

## Cara memasang di GitHub Pages
1. Ekstrak ZIP ini.
2. Upload `index.html`, `admin.html`, `app.js`, `admin.js`, dan `style.css` ke root repository GitHub.
3. Pastikan nama file dan hurufnya sama persis.
4. Aktifkan GitHub Pages melalui **Settings → Pages → Deploy from a branch → main → /(root)**.
5. Buka `https://DOMAIN-KAMU/admin.html` untuk dashboard.

## PIN dashboard
PIN awal: `ripki07`
Ubah nilai `ADMIN_PIN` di `admin.js` jika ingin menggantinya.

## PENTING: batasan penyimpanan
GitHub Pages adalah hosting statis. Versi ini menyimpan respons memakai `localStorage` browser:
- Respons hanya tersimpan di browser/perangkat yang mengirimkannya.
- Dashboard hanya dapat melihat respons yang tersimpan di browser/perangkat yang sama dan pada domain yang sama.
- Respons dari pengunjung lain TIDAK otomatis terkumpul di dashboard milikmu.
- Menghapus data situs/browser dapat menghapus arsip. Gunakan **EKSPOR JSON** untuk membuat backup.
- PIN di `admin.js` hanya pengunci tampilan, bukan keamanan sungguhan. Jangan gunakan untuk menyimpan data sensitif.

Agar semua pengunjung mengirim ke satu arsip pusat dan admin bisa melihat semuanya dari perangkatmu, tetap diperlukan backend/database eksternal (misalnya Supabase atau Google Apps Script). GitHub Pages sendiri tidak menyediakan database atau API untuk menyimpan kiriman.
