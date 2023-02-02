import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-discover',
	templateUrl: './discover.page.html',
	styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
	selectedTab: string = 'recepies';
	subRecipes: string = 'new';
	sliderOptions = {
		initialSlide: 0,
		slidesPerView: 2,
		loop: true,
		ltr: true,
	};


	constructor() { }

	ngOnInit() {
	}

	recipes = [
		{
			id: 1,
			image: 'https://www.miscosillasdecocina.com/wp-content/uploads/2013/12/bunuelos-bacalao-.jpg',
			title: 'Buñuelos de bacalao',
			author: 'Edu7719',
			likes: 0
		},
		{
			id: 2,
			image: 'https://cdn0.recetasgratis.net/es/posts/7/2/0/estofado_de_ternera_con_setas_75027_600_square.jpg',
			title: 'Ternera Estofada',
			author: 'Guepsait',
			likes: 0
		},
		{
			id: 3,
			image: 'https://intremo.cl/wp-content/uploads/2019/11/kefir-con-avena-y-frutas.jpg',
			title: 'Kefir con fruta y avena',
			author: 'Mireia Gomez',
			likes: 0
		},
		{
			id: 4,
			image: 'https://lacocinademasito.com/wp-content/uploads/Lomo-e-cerdo-asado-con-salsa-de-cebolla-20.jpg',
			title: 'Lomo de cerdo con salsa',
			author: 'Lauszv',
			likes: 0
		},
		{
			id: 5,
			image: 'https://www.lovemysalad.com/sites/default/files/misc/pan_de_brocoli_by_tia_lou_2.jpg',
			title: 'Pan de brócoli',
			author: 'Cris Helo',
			likes: 0
		},
	];

	categories = [
		{
			id: 1,
			name: 'Acompañamiento',
			image: 'https://static1.diariovasco.com/www/multimedia/202210/20/media/cortadas/KIMCHI-RNvvFQBhpngE6C2uYLD1PsJ-624x385@Diario%20Vasco.jpg'
		},
		{
			id: 2,
			name: 'Aprovechamiento',
			image: 'https://montsia.es/images/recipes/arroz-cantones-1.jpg'
		},
		{
			id: 3,
			name: 'Arroz',
			image: 'https://i.imgur.com/bgd4Nlq.png'
		},
		{
			id: 4,
			name: 'Asiático',
			image: 'https://webunwto.s3.eu-west-1.amazonaws.com/2020-05/asia.jpg'
		},
		{
			id: 5,
			name: 'Batidos',
			image: 'https://myfreshfood.es/wp-content/uploads/2021/09/Batido-energe%CC%81tico-de-pla%CC%81tano.jpg'
		},
		{
			id: 6,
			name: 'Bebidas',
			image: 'https://images.ecestaticos.com/fliXmI1SknvE-pBdU3I_b5x2AVo=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F966%2F3f7%2F235%2F9663f72358847e0894f1cb608100d848.jpg'
		}
	];




	like(id: number) {
		this.recipes[id].likes++;
		console.log(this.recipes[id].likes);
	}


	showAllRecipes() {

	}
}


