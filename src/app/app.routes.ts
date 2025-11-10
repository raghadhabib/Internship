import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
},
{
    path:'todos',
    
    loadComponent: () => import('./pages/todos/todos').then(m => m.Todos)
}
];