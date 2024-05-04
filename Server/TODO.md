# P2-Challenge-1 (Server Side)

- Tema Aplikasi: ...

Struktur Folder:

- server (PORT: 3000)

## **W1D1**

Target:

### **REST API**

- [ ] Membuat entitas utama (Create / POST)
  - [ ] Endpoint ini akan menerima request body berdasar field-field di entitas utama sesuai [tema aplikasi](https://docs.google.com/document/d/1GZwh8OJGZZQVUuWE0Cr13iMA2lLNE9mMoHfrbmETEBs/edit#heading=h.mcqrsbt2auhv).
  - [ ] Jika request  berhasil, kembalikan response dengan 201 status code dan response body berupa object yang berisikan data baru yang berhasil di-input.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Mengambil semua data entitas utama (Read / GET)
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data entitas utama include User sebagai pemilik data (tanpa menampilkan passwordnya).
  - [ ] Jika request gagal, kembalikan response dengan 500 status code.

- [ ]  Mengambil detail entitas utama berdasar id (Read / GET)
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data todo.
  - [ ] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.

- [ ] Mengupdate entitas utama (Update/ PUT)
  - [ ] Endpoint ini akan menerima request body berdasar field-field di entitas utama.
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data yang diupdate.
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Menghapus entitas utama (Delete / DELETE)
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response berupa object yang berisikan data yang berhasil di-delete atau bisa juga mengembalikan data message saja message: '[entity name] success to delete'
  - [ ] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Membuat entitas kedua genres/categories/types (Create / POST)
  - [ ] Endpoint ini akan menerima request body berdasar field-field di entitas kedua sesuai [tema aplikasi](https://docs.google.com/document/d/1GZwh8OJGZZQVUuWE0Cr13iMA2lLNE9mMoHfrbmETEBs/edit#heading=h.mcqrsbt2auhv).
  - [ ] Jika request  berhasil, kembalikan response dengan 201 status code dan response body berupa object yang berisikan data baru yang berhasil di-input.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Mengambil semua data genres/categories/types (Read / GET)
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data genres/categories/types.
  - [ ] Jika request gagal, kembalikan response dengan 500 status code.

- [ ] Mengupdate kedua genres/categories/types (Update/ PUT)
  - [ ] Endpoint ini akan menerima request body berdasar field-field di entitas kedua genres/categories/types.
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data yang diupdate.
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Menghapus entitas kedua genres/categories/types (Delete / DELETE)
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response berupa object yang berisikan data yang berhasil di-delete atau bisa juga mengembalikan data message saja message: '[entity name] success to delete'
  - [ ] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Mengambil semua data entitas utama (Read / GET) untuk public site
  - [ ] Tambahkan prefix /pub pada endpoint ini
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data entitas utama.
  - [ ] Jika request gagal, kembalikan response dengan 500 status code.

- [ ] Mengambil detail entitas utama berdasar id (Read / GET) untuk public site
  - [ ] Tambahkan prefix /pub pada endpoint kalian
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data.
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.

### **API Documentation**

- [ ] Route /path yang digunakan di aplikasi yang kamu buat
- [ ] Informasi yang diperlukan oleh user saat ingin menggunakan route/path API (seperti body, header, parameter, dll)
- [ ] Response serta status code yang akan didapatkan oleh pengguna (info, error, warning, dsb)

Lebih lanjut untuk contoh, bisa dilihat di:

- [Example API Documentation](https://gist.github.com/ziterz/56d2cd8b2d5f5d52101265c0182c2aff)

## **W1D2**

Target:

### **Authentication + Authorization**

- [ ] POST /add-user (khusus untuk staff, dilakukan oleh admin)
  - [ ] Request Headers: { Authorization: "Bearer [your access token]" }
  - [ ] Request body: { email, password }
  - [ ] Response:
    - [ ] 201: { id, email }
    - [ ] 400: { errors }

  Note: Pastikan password telah terhash sebelum data user masuk ke dalam database.

- [ ] POST /login (semua role, baik admin atau staff)
  - [ ] Request body: { email, password }
  - [ ] Response:
    - [ ] 200: { access_token, email/username, role }
    - [ ] 401: { error invalid username or email or password }

- [ ] Menambahkan Authentication dan Authorization

| Role  | Create | Read  | Update                             | Delete                             |
| ----- | ------ | ----- | ---------------------------------- | ---------------------------------- |
| Admin | [ ] ✅  | [ ] ✅ | [ ] ✅                              | [ ] ✅                              |
| Staff | [ ]  ✅ | [ ] ✅ | [ ] Hanya bisa menghapus miliknya. | [ ] Hanya bisa menghapus miliknya. |

- [ ] Error status code 401, apabila user yang belum login, atau yang mempunyai token yang salah mencoba mengakses endpoint CRD.
- [ ] Error status code 403, apabila staff mengakses delete pada entitas yang bukan miliknya.

  Note: Untuk mengirim access_token, gunakan request header (diterima sebagai req.headers di Express).

### **Error Handler**

- [ ] 401 - Error login user not found atau password not matched
- [ ] 401 - Error authentication
- [ ] 403 - Forbidden error di authorization
- [ ] 400 - Error validation saat create.
- [ ] 404 - Data not found.
- [ ] 500 - Internal error server, dsb

### **Upload File**

- [ ] Meng-update data imgUrl entitas utama (Update / PATCH)
  - [ ] Endpoint ini akan menerima request body berupa ("multipart/form-data") untuk meng-update data imgUrl.
  - [ ] Id dikirimkan via request params.
  - [ ] Membuat fitur upload menggunakan [multer](https://www.npmjs.com/package/multer) dan [imageKit](https://imagekit.io/)/[Cloudinary](https://cloudinary.com) untuk menyimpan file tersebut.
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object message: 'Image [entity name] success to update'
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan status code 404 dan response body berupa object yang berisikan error not found.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan status code 400 dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan status code 500.

## **W1D3**

Target:

### **TDD**

Mengimplementasikan testing terhadap endpoint yang sudah dibuat

- [ ] Login (Admin), perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Email tidak diberikan / tidak diinput
  - [ ] Password tidak diberikan / tidak diinput
  - [ ] Email diberikan invalid / tidak terdaftar
  - [ ] Password diberikan salah / tidak match
  - Pastikan untuk testing ini sediakan dulu data Admin

- [ ] Add Staff, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil register
  - [ ] Email tidak diberikan / tidak diinput
  - [ ] Password tidak diberikan / tidak diinput
  - [ ] Email diberikan string kosong
  - [ ] Password diberikan string kosong
  - [ ] Email sudah terdaftar
  - [ ] Format Email salah / invalid
  - [ ] Gagal register staff karena admin belum login
  - [ ] Gagal register staff karena token yang diberikan tidak valid (random string)

- [ ] Create, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil membuat entitas utama
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid  
  - [ ] Gagal ketika request body tidak sesuai (validation required)
  - Buatlah testing untuk masing-masing fitur

- [ ] Read, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan data Entitas Utama
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid

- [ ] Read Detail, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan 1  Entitas Utama sesuai dengan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal mendapatkan Entitas Utama karena params id yang diberikan tidak ada di database / invalid

- [ ] Update PUT, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mengupdate data Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff mengolah data entity yang bukan miliknya
  - [ ] Gagal ketika request body yang diberikan tidak sesuai

- [ ] Delete, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil menghapus data Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff menghapus entity yang bukan miliknya

- [ ] Update PATCH, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mengupdate imgUrl Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gaga menjalankan fiturl karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff mengolah data entity yang bukan miliknya
  - [ ] Gagal ketika request body yang diberikan tidak sesuai

- [ ] Read  Entitas kedua data genres/categories/types  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan data entitas kedua
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid

- [ ] Endpoint  List pada public site,  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan Entitas Utama tanpa menggunakan query filter parameter
  - [ ] Berhasil mendapatkan Entitas Utama dengan 1 query filter parameter
  - [ ] Berhasil mendapatkan  Entitas Utama serta panjang yang sesuai ketika memberikan page tertentu (cek pagination-nya)
  - Pastikan untuk testing ini sediakan dulu sekitar 20 data untuk diinput di beforeAll, sehingga kita bisa melakukan ekspektasi pada data dan jumlahnya yang kita dapat ketika filter dan pagination

- [ ] Endpoint  Detail pada public site,  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan 1  Entitas Utama sesuai dengan params id yang diberikan
  - [ ] Gagal mendapatkan Entitas Utama karena params id yang diberikan tidak ada di database / invalid

### **Sorting and Pagination, Filter**

Mengimplementasikan sorting, pagination dan filter pada aplikasi server yang sudah dibuat

- [ ] Get list entitas utama pada Public Site
  - [ ] Search menggunakan title/name Entitas Utama
  - [ ] Sorting berdasarkan data terbaru/terlama (ASC/DESC)
  - [ ] Filter Entitas Utama berdasarkan Entitas Kedua (genres/categories/types)
  - [ ] Pagination dengan limit data per page berjumlah 10

## **W1D4 & W1D6**

Target: Melakukan deployment menggunakan AWS EC2/GCP/Cloud Deployment lainnya untuk server yang telah dibuat
