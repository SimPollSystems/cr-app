import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Trainer } from './trainer';
import { TrainerService } from './trainer.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent {
	trainers: Trainer[] = [];

	constructor(
		private router: Router,
		private trainerService: TrainerService) {

	}

	ngOnInit() {
		this.trainerService.getTrainers()
			.then(trainers => this.trainers = trainers.slice(1,5));
	}

	gotoDetails(trainer: Trainer) {
		let link = ['TrainerDetails', { id: trainer.id }];
		this.router.navigate(link);
	}
}