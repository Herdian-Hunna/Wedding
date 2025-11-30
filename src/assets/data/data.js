export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Herdian Maulana ',
            child: 'Putra ke 1',
            father: 'Tatang Setiawan',
            mother: 'Ayi Rosanah',
            image: './src/assets/images/cowo.JPG'
        },
        P: {
            id: 2,
            name: 'Huna Khoerotun Hisan',
            child: 'Putri ke 2',
            father: 'Nani Kurniani',
            mother: 'H.Edi Sopyan',
            image: './src/assets/images/cewe.JPG'
        },

        couple: './src/assets/images/Couple.JPG'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '04',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Januari',
            date: '04',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp.Pasir Malaka, RT 001/ RW 003, Desa.Neglasari, Kec.Cipongkor, Kab.Bandung Barat, Kode.Pos (40564)'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.JPG'
        },
        {
            id: 2,
            image: './src/assets/images/2.JPG'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        },
        {
            id: 6,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 7,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 8,
            image: './src/assets/images/4.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Herdian Maulana',
            icon: './src/assets/images/bca.png',
            rekening: '1393986852'
        },
        {
            id: 2,
            name: 'Huna Khoerotun Hisan',
            icon: './src/assets/images/bri.png',
            rekening: '411601052934539'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
