[![Build Status](https://api.travis-ci.org/kmdrn7/blankon-linux-arsip-web.svg?branch=master)](https://travis-ci.org/kmdrn7/blankon-linux-arsip-web)

# Arsip BlankOn Linux
Semua tentang BlankOn Linux bisa dilihat disini, mulai dari alamat repositori hingga cara menggunakannya.

## Requirements

- `node`
- `npm`

## Persiapan

- Jalankan `npm install` untuk melakukan pemasangan paket-paket npm yang dibutuhkan untuk melakukan build kode sumber.
- Jalankan `npm install -g gulp-cli` untuk melakukan pemasangan paket yang digunakan untuk berinteraksi dengan *gulp*.


## Perintah NPM

- `npm run build` untuk build kode sumber dan meletakkannya di dalam folder dist dan resource yang digunakan sudah di-*minified* dan siap untuk dimasukkan ke server produksi.
- `npm run production` untuk membuka halaman web yang telah berhasil di build dari perintah *npm run build*.
- `npm run clean` untuk membersihkan file dan folder dist.
- `npm run dev` untuk menjalankan halaman web ketika sedang melakukan perubahan atau penambahan fitur.

## Luncurkan ke Server

Tidak disarankan untuk menggunakan npm ketika akan memindah ke server produksi. Disarankan menggunakan file yang ada di dalam folder dist.

## Kustomisasi Website

Perubahan atau kustomisasi dapat dilakukan di folder `src`. Tidak disarankan melakukan perubahan di folder dist karena konten di dalam folder dist akan berubah-ubah seiring dengan dijalankannya `npm run ...`

## Catatan
*Bila ada penambahan source maka lakukan perubahan pada file gulpfile, kemudian jalankan npm run build lagi untuk bisa menggunakan resource yang baru saja digunakan*.

*file resource yang ada disini diambil dari repo resmi* 
[BlankOn/blankon-linux-static-web](https://github.com/BlankOn/blankon-linux-static-web)