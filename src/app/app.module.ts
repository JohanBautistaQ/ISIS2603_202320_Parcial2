import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';
import { HttpClientModule } from '@angular/common/http'; 
import { cursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [	
    AppComponent,
    cursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
