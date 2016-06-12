import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Trainer } from './trainer';
import { TrainerService } from './trainer.service';

@Component({
	selector: 'trainer-details',
	templateUrl: 'app/trainer-details.component.html',	
  styleUrls: ['app/trainer-details.component.css']
})

export class TrainerDetailsComponent implements OnInit {

	@Input() trainer: Trainer;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false; // True if navigated here

	constructor(
		private trainerService: TrainerService,
		private routeParams: RouteParams) { 
	}

	ngOnInit() {
		if (this.routeParams.get('id') !== null) {
			let id = +this.routeParams.get('id');
			this.navigated = true;
			this.trainerService.getTrainer(id)
				.then(trainer => this.trainer = trainer);
		} else {
			this.navigated = false;
			this.trainer = new Trainer();
		}
	}
	save() {
		this.trainerService
			.save(this.trainer)
			.then(trainer => {
				this.trainer = trainer; // Saved trainer with ID if new
				this.goBack(trainer);
			})
			.catch(error => this.error = error); // TODO: Display error message
	}

	goBack(savedTrainer: Trainer = null) {
		this.close.emit(savedTrainer);
		if (this.navigated) { window.history.back(); }
	}
}