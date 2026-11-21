const params = new URLSearchParams(window.location.search);
const level = params.get('level');

const data = [];
const arti = [];

const t = document.getElementById('tbody');

async function api() {
    const response = await fetch(
        `https://kanjiapi.dev/v1/kanji/jlpt-${level}-enriched`
    );

    const hasil = await response.json();
    data.push(...hasil);
    console.log(data);
}

async function apiarti() {
    const response = await fetch('data/artiKanji.json');

    const hasil = await response.json();

    arti.push(...hasil);
}

async function init() {
    t.innerHTML = 'Memuat Data...';

    await api();
    await apiarti();

    isitabel();
}

function isitabel() {
    t.innerHTML = '';

    data.forEach((e, index) => {

        const terjemahan = arti.find(i => i.kanji === e.kanji);

        t.innerHTML += `
            <tr class="transition hover:bg-white/5">
                <td class="p-3 text-gray-400 text-sm">
                    ${index + 1}
                </td>

                <td class="p-3 text-xl font-bold">
                    ${e.kanji}
                </td>

                <td class="p-3 text-sm sm:text-base whitespace-nowrap text-gray-400">
                    ${e.kun_readings?.[0] || '-'}
                </td>

                <td class="p-3 text-sm sm:text-base">
                    ${terjemahan ? terjemahan.arti : '-'}
                </td>
            </tr>
        `;
    });
}

init();