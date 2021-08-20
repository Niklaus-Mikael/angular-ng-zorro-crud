import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './Components/list/list.component';
import { ShowComponent } from './Components/show/show.component';
import { LoginComponent } from './login/login.component';
import { ButtonsComponent } from './zorro-controls/buttons/buttons.component';
import { FormsComponent } from './zorro-controls/forms/forms.component';
import { GridComponent } from './zorro-controls/grid/grid.component';
import { SwitchComponent } from './zorro-controls/switch/switch.component';
import { TableComponent } from './zorro-controls/table/table.component';
import { TreeComponent } from './zorro-controls/tree/tree.component';


const routes: Routes = [
  {path:'',component:ListComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
 
{path:'comments/:id',component:ShowComponent},
{path:'controls/button',component:ButtonsComponent,canActivate:[AuthGuard]},
{path:'controls/switch',component:SwitchComponent},
{path:'controls/tree',component:TreeComponent},
{path:'controls/table',component:TableComponent},
{path:'controls/grid',component:GridComponent},
{path:'controls/form',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
