import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule} from 'primeng/menubar';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { HttpClientModule} from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CardModule} from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FormularioLibrosComponent } from './libro/formulario-libros/formulario-libros.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule} from 'primeng/message';
import { MessagesModule} from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AutoresComponent,
    FormularioLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    DropdownModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
