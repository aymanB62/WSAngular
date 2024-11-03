import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';

export const routes: Routes = [
    { path: 'items', component: ItemListComponent },
    { path: 'items/create', component: ItemCreateComponent },
    { path: 'items/edit/:id', component: ItemEditComponent },
    { path: '', redirectTo: '/items', pathMatch: 'full' }
];
