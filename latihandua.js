// persegi panjang
panjang_pp = 20,
lebar_pp = 10,
luas_pp = panjang_pp*lebar_pp
keliling_pp = 2*(panjang_pp+lebar_pp)



let menghitung_persegi_panjang = `
=================
Menghitung Persegi Panjang
=================
Panjang = ${panjang_pp}
Lebar = ${lebar_pp}
Maka, Luas Persegi Panjang adalah ${luas_pp}
Maka, Keliling Persegi Panjang adalah ${keliling_pp}
=================
`

console.log(menghitung_persegi_panjang)

// Lingkaran
lingkaran = {
    phi:3.14,
    r:17
}

luas_lingkaran = lingkaran.phi * (lingkaran.r^2)
diameter_lingkaran = lingkaran.r*2
keliling_lingkaran = 2*lingkaran.phi*lingkaran.r

let menghitung_lingkaran = `
=================
Menghitung Lingkaran
=================
Jari-jari Lingkaran = ${lingkaran.r}
Maka, Diameter Lingkaran adalah ${diameter_lingkaran}
Maka, Keliling Lingkaran adalah ${keliling_lingkaran}
Maka, Luas Lingkaran adalah ${luas_lingkaran}
=================
`
console.log(menghitung_lingkaran)

// Segitiga 
segitiga = {
    sudut_a:30,
    sudut_b:90
}

sudut_c_segitiga = 180-(segitiga.sudut_a + segitiga.sudut_b)

let menghitung_segitiga = `
=================
Menghitung Sudut C Segitiga
=================
Sudut A = ${segitiga.sudut_a}
Sudut B = ${segitiga.sudut_b}
Maka, Sudut C adalah ${sudut_c_segitiga}
=================
`

console.log(menghitung_segitiga)

// Selisih Tanggal
tanggal={
    today : new Date(),
    deadline: new Date('2024-08-31'),
    hari : 1000*60*60*24,
}

selisih_tanggal = Math.round((tanggal.deadline - tanggal.today)/tanggal.hari)

let mencari_selisih_tanggal = `
=================
Mencari Selisih Tanggal
=================
Tanggal Hari ini = ${tanggal.today}
Tanggal Deadline = ${tanggal.deadline}
Maka, Selisih Tanggal adalah ${selisih_tanggal} 
=================
`

console.log(mencari_selisih_tanggal)


// Konversi hari ke tahun, bulan, dan hari
durasi={
    jumlah_hari:525
}

konversi_tahun = Math.round(durasi.jumlah_hari/365)
konversi_bulan = Math.round((durasi.jumlah_hari-365)/30)
konversi_hari = Math.round((durasi.jumlah_hari-365)-(konversi_bulan*30))

let detik_demi_detik = `
=================
Menghitung Hari
=================
Jumlah Hari = ${durasi.jumlah_hari}
Dengan kata lain, durasi yang dimiliki adalah ${konversi_tahun} Tahun, ${konversi_bulan} Bulan, ${konversi_hari} Hari

=================
`

console.log(detik_demi_detik)