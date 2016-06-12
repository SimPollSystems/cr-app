import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { TrainersComponent } from './trainers.component';
import { TrainerDetailsComponent } from './trainer-details.component';
import { TrainerService } from './trainer.service';


@Component({
	selector: 'cr-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		TrainerService
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/trainers',
		name: 'Trainers',
		component: TrainersComponent
	},
	{
		path: '/detail/:id',
		name: 'TrainerDetails',
		component: TrainerDetailsComponent
	}
])

export class AppComponent {
	title = "Clash Royale - Assistant";
}