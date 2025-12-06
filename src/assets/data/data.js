export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Herdian Maulana ',
            child: 'Putra ke 1',
            father: 'Tatang Setiawan',
            mother: 'Ayi Rosanah',
            image: './src/assets/images/cowo.jpeg'
        },
        P: {
            id: 2,
            name: 'Huna Khoerotun Hisan',
            child: 'Putri ke 2',
            father: 'H.Edi Sopyan',
            mother: 'Nani Kurniani',
            image: './src/assets/images/cewe.jpeg'
        },

        couple: './src/assets/images/Couple.jpeg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '04',
            day: 'Minggu',
            hours: {
                start: '09.00',
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
        calendar: 'https://calendar.google.com/calendar/u/0/r/day/2026/1/4?pli=1',
        map: 'https://maps.app.goo.gl/qwB4Uzwr8K39jmsR9',
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
            image: './src/assets/images/5.jpg'
        },
        {
            id: 6,
            image: './src/assets/images/6.jpg'
        },
        {
            id: 7,
            image: './src/assets/images/7.jpg'
        },
        {
            id: 8,
            image: './src/assets/images/Couple.jpeg'
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

    api: 'https://script.google.com/macros/s/AKfycbySJcZFZ6s0XeQwdho-muu2B-XDvwdHvuUr-x8tU528mppyo6nlDtbjLDp1RAwrz9Um/exec',

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
        {
            id: 6,
            teks: 'Link',
            icon: 'bx bx-link',
            path: '#links',
        },
    ],
}
