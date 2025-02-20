import { Routes } from '@angular/router';

export const routes: Routes = [{
        path: '',
        pathMatch: 'full',
        loadComponent: () => 
        import('./home/home.component').then(m => m.HomeComponent)
    }, {
        path: 'todos',   
        pathMatch: 'full',
        loadComponent: () =>
        import('./todos/todos.component').then(m => m.TodosComponent)
    }];