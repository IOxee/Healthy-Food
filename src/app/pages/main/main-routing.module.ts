import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
	{
		path: '',
		component: MainPage,
		children: [
			{
				path: 'discover',
				loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
			},
			{
				path: 'plus',
				loadChildren: () => import('./plus/plus.module').then(m => m.PlusPageModule)
			},
			{
				path: 'scanner',
				loadChildren: () => import('./scanner/scanner.module').then(m => m.ScannerPageModule)
			},
			{
				path: 'stadistics',
				loadChildren: () => import('./stadistics/stadistics.module').then(m => m.StadisticsPageModule)
			},
			{
				path: 'community',
				loadChildren: () => import('./community/community.module').then(m => m.CommunityPageModule)
			},
			{
				path: '',
				redirectTo: '/main/discover',
				pathMatch: 'full'
			}
		]
	}



];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class MainPageRoutingModule { }
