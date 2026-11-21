// document.querySelector('#btn-hiragana').addEventListener('click',() => window.location.href = 'hiragana.html');
// document.querySelector('#btn-katakana').addEventListener('click',() => window.location.href = 'katakana.html');
// document.querySelector('#btn-N5').addEventListener('click',() => window.location.href = 'N5.html');



const dataKartu = [
    {
        id: 'btn-hiragana',
        nama: 'HIRAGANA',
        karakter: 'あ',
        url: 'hiragana.html',
        comingSoon: false
    },
    {
        id: 'btn-katakana',
        nama: 'KATAKANA',
        karakter: 'ア',
        url: 'katakana.html',
        comingSoon: false
    },
    {
        id: 'btn-N5',
        nama: 'KANJI N5',
        karakter: '学',
        url: 'N.html?level=5',
        comingSoon: false
    },
    {
        id: 'btn-N4',
        nama: 'KANJI N4',
        karakter: '駅',
        url: 'N.html?level=4',
        comingSoon: false
    },
    {
        id: 'btn-N3',
        nama: 'KANJI N3',
        karakter: '与',
        url: 'N.html?level=3',
        comingSoon: false
    },
    {
        id: 'btn-N2',
        nama: 'KANJI N2',
        karakter: '与',
        url: 'N.html?level=2',
        comingSoon: false
    },
    {
        id: 'btn-N1',
        nama: 'KANJI N1',
        karakter: '与',
        url: 'N.html?level=1',
        comingSoon: false
    }
];

const container = document.getElementById('daftar-kartu');


dataKartu.forEach(kartu => {

    container.innerHTML += `
        <button id="${kartu.id}"
            class="group w-48 h-72 bg-white rounded-2xl
            shadow-2xl p-5 flex flex-col justify-between
            transition-all duration-200
            hover:-translate-y-3 hover:shadow-white/20
            active:scale-95">

            <div class="flex-1 flex items-center justify-center">
                <span class="text-8xl font-bold text-gray-900">
                    ${kartu.karakter}
                </span>
            </div>

            <div class="text-center">
                <div class="text-xl font-bold text-gray-900">
                    ${kartu.nama}
                </div>

                ${kartu.comingSoon
            ? '<span class="text-sm text-gray-500 italic font-light">coming soon</span>'
            : ''
        }
            </div>

        </button>
    `;
});

dataKartu.forEach(kartu => {
    if (!kartu.comingSoon) {
        document.getElementById(kartu.id).addEventListener('click', () => {
            window.location.href = kartu.url;
        });
    }
});
