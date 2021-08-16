import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons/buttons.component';


import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { TreeComponent } from './tree/tree.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SwitchComponent } from './switch/switch.component';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzSwitchModule } from 'ng-zorro-antd/switch';



@NgModule({
  declarations: [
   
    ButtonsComponent,
    GridComponent,
    TreeComponent,
    FormsComponent,
    TableComponent,
    SwitchComponent
  ],
  exports:[
    
    ButtonsComponent,
    FormsComponent,
    GridComponent,
    TableComponent,
    SwitchComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzBadgeModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzListModule,
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzSelectModule,
    NzTreeModule,
    NzUploadModule,
    NzSwitchModule,
    NzAnchorModule
  ]
})
export class ZorroControlsModule { }
