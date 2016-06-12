import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Trainer } from './trainer';
import { TrainerService } from './trainer.service';
import { TrainerDetailsComponent } from './trainer-details.component';

@Component({
    selector: 'our-trainers',
    templateUrl: 'app/trainers.component.html',
    styleUrls: ['app/trainers.component.css'],
    directives: [TrainerDetailsComponent]
})

export class TrainersComponent implements OnInit { 
	trainers: Trainer[];
	selectedTrainer: Trainer;
	addingTrainer = false;
	error: any;

	constructor(
		private router: Router,
		private trainerService: TrainerService) { }

	getTrainers() {
		this.trainerService
			.getTrainers()
			.then(trainers => this.trainers = trainers)
			.catch(error => this.error = error); // TODO: Display error message
	}

  addTrainer() {
    this.addingTrainer = true;
    this.selectedTrainer = null;
  }

  close(savedTrainer: Trainer) {
    this.addingTrainer = false;
    if (savedTrainer) { this.getTrainers(); }
  }

  delete(trainer: Trainer, event: any) {
    event.stopPropagation();
    this.trainerService
        .delete(trainer)
        .then(res => {
          this.trainers = this.trainers.filter(h => h !== trainer);
          if (this.selectedTrainer === trainer) { this.selectedTrainer = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

	ngOnInit() {
		this.getTrainers();
	}

	onSelect(trainer: Trainer) { 
		this.selectedTrainer = trainer;
		this.addingTrainer = false;
	}

	gotoDetails() {
		this.router.navigate(['TrainerDetails', { id: this.selectedTrainer.id }]);
	}
}
