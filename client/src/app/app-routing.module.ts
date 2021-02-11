import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormListComponent} from './components/form-list/form-list.component';
import {FormComponent} from './components/form/form.component';
const routes: Routes = [
  {
    path  :'',
    redirectTo:'/usuario',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: FormListComponent
  },
  {
    path: 'usuario/add',
    component: FormComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
