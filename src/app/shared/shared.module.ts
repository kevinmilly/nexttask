import { NgModule } from "@angular/core";
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisablePipe } from './pipes/disable.pipe';
import { ChartsModule } from 'ng2-charts';
import { FactorTranslatePipe } from "./pipes/factor-translate.pipe";
import { HoursSumPipe } from "./pipes/hours-sum.pipe";
import { TimeTranslatePipe } from "./pipes/time-translate.pipe";


const modules = [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule, 
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    ChartsModule
]

const other = [
    HoursSumPipe,
    TimeTranslatePipe,
    FactorTranslatePipe,
    DisablePipe
];

@NgModule({
    imports: [modules],
    declarations: [other],
    exports:[modules,other]
})
export class SharedModule {}