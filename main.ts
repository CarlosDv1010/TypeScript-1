import { series } from './data.js';

const table = document.querySelector('.table tbody')!;


series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${serie.numero}</th>
        <td class="show-card">${serie.nombre}</td>
        <td>${serie.distribuidora}</td>
        <td>${serie.temporadas}</td>
    `;
    table.appendChild(row);
});


const summary = document.querySelector('p')!;

let avgSeasons = 0;
series.forEach((serie) => {
    avgSeasons += serie.temporadas/series.length;
});
summary.innerHTML = `Seasons average: ${avgSeasons}`;
