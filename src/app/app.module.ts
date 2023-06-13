import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UniversityService } from 'src/Services/university.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, UniversityListComponent, FilterOptionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule, 
    MatInputModule, 
    MatDividerModule, 
    MatButtonModule, 
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [UniversityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
