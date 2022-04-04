const express = require('express');
const crypto = require('crypto');
const { resolve } = require('path');

const app = express();

function generateDate() {
	const hour = String(Math.floor(Math.random() * 23));
	const minute = String(Math.floor(Math.random() * 59));

	return `${hour}:${minute}`;
}

function createPrograms() {
	const programs = {};

	for (let item of ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']) {
		programs[item] = [1, 2, 3, 4, 5].map(item => {
			return {
				id: crypto.randomUUID(),
				hour: generateDate(),
				name: Math.random().toString(36).substring(2),
			};
		});
	}

	return programs;
}

app.use('/static', express.static(resolve(__dirname, '../static')));
app.get('/podcasts', (req, res) => {
	return res.json([
		{
			id: crypto.randomUUID(),
			name: 'Progama Muxima',
			thumb: 'http://localhost:3333/static/muxima.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8030/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8030/mobile' },
			],
			programs: createPrograms(),
		},
		{
			id: crypto.randomUUID(),
			name: 'Maine Voice',
			thumb: 'https://doceimg.s3.amazonaws.com/radio_tunga_ne/main.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8000/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8000/mobile' },
			],
			programs: {
				Dom: [1, 2, 3, 4].map(item => ({
					id: crypto.randomUUID(),
					hour: generateDate(),
					name: Math.random().toString(36).substring(2),
				})),
				Seg: [
					{
						id: crypto.randomUUID(),
						hour: '00:00',
						name: 'Relax',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:15',
						name: 'Juventude Maine',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45',
						name: 'Notícias',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00',
						name: 'FDMA',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00',
						name: 'Roda do Semba',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00',
						name: 'Estação da Música ',
					},
				],
				Ter: [
					{
						id: crypto.randomUUID(),
						hour: '00:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45',
						name: 'Publicidades',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '20:00',
						name: 'Carta na Mesa',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00',
						name: 'Música',
					},
				],
				Qua: [
					{
						id: crypto.randomUUID(),
						hour: '00:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '15:15',
						name: 'Vaga de emprego',
					},
					{
						id: crypto.randomUUID(),
						hour: '16:15',
						name: 'Aprenda Inglês',
					},
					{
						id: crypto.randomUUID(),
						hour: '17:15',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:15',
						name: 'Diáspora',
					},
					{
						id: crypto.randomUUID(),
						hour: '18:45',
						name: 'Notícia',
					},
					{
						id: crypto.randomUUID(),
						hour: '19:00',
						name: 'Cotidiano',
					},
					{
						id: crypto.randomUUID(),
						hour: '2:00',
						name: 'Música',
					},
					{
						id: crypto.randomUUID(),
						hour: '21:00',
						name: 'Jornada Desportiva',
					},
				],

				Qui: [1, 2, 3, 4].map(item => ({
					id: crypto.randomUUID(),
					hour: generateDate(),
					name: Math.random().toString(36).substring(2),
				})),
				Sex: [1, 2, 3, 4].map(item => ({
					id: crypto.randomUUID(),
					hour: generateDate(),
					name: Math.random().toString(36).substring(2),
				})),
				Sab: [1, 2, 3, 4].map(item => ({
					id: crypto.randomUUID(),
					hour: generateDate(),
					name: Math.random().toString(36).substring(2),
				})),
			},
		},
		{
			id: crypto.randomUUID(),
			name: 'Promo Music Angola',
			thumb: 'http://localhost:3333/static/promo.jpeg',
			urls: [
				{ name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8020/radio' },
				{ name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8020/mobile' },
			],
			programs: createPrograms(),
		},
	]);
});

app.listen(process.env.PORT || 3333);
