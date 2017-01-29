import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html'
})
export class UniversityComponent implements OnInit {

    univs: any = [];

    constructor(public configService: ConfigService) { }

    ngOnInit(){
        this.fetchData();
    }

    fetchData(){
        this.configService.getUniversities().then( //using Promises
            response => this.univs = response,
            error => console.log(error)
        )
    }

}
