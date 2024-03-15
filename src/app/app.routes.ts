import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'result',
        component:ResultComponent,
        title:'Result'

    }
];
