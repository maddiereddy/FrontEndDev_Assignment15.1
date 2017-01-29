import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {

    comps: any = [];

    constructor(public configService: ConfigService) {}

    ngOnInit(){
        this.fetchData();
    }

    fetchData(){
        this.configService.getCompanies().then(
            response => this.comps = response,
            error => console.log(error)
        )
    }


}
