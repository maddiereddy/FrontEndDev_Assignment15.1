import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { CompanyComponent } from './company/company.component';
import { UniversityComponent } from './university/university.component';

const appRoutes: Routes = [
    { path: 'company', component: CompanyComponent },
    { path: 'university', component: UniversityComponent },
    { path: '',   redirectTo: '/company', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

