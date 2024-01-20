import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { RoomComponent } from './components/room/room.component';
import { IntroComponent } from './components/intro/intro.component';
import { FeatureComponent } from './components/feature/feature.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DateComponent } from './admin/date/date.component';
import { MenuAdmComponent } from './admin/menu-adm/menu-adm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { NavComponent } from './admin/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditRoomComponent } from './admin/edit-room/edit-room.component';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CreateRoomComponent } from './admin/create-room/create-room.component';
import { ClientsComponent } from './admin/clients/clients.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    AboutComponent,
    RoomComponent,
    IntroComponent,
    FeatureComponent,
    MenuComponent,
    NewsComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    DateComponent,
    MenuAdmComponent,
    RoomsComponent,
    NavComponent,
    EditRoomComponent,
    EditMenuComponent,
    PaymentComponent,
    CreateRoomComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000, // Tiempo de duración predeterminado en milisegundos
      positionClass: 'toast-top-right', // Posición de las notificaciones (arriba a la derecha)
      preventDuplicates: true, // Evitar mostrar notificaciones duplicadas
      progressBar: true, // Mostrar barra de progreso
      closeButton: true, // Mostrar botón de cierre
      progressAnimation: 'increasing', // Animación de la barra de progreso
      enableHtml: true, // Habilitar HTML en los mensajes
      newestOnTop: true, // Mostrar las notificaciones más nuevas en la parte superior
      tapToDismiss: true, // Cerrar notificaciones al hacer clic en ellas
      extendedTimeOut: 1000, // Tiempo de duración adicional para las notificaciones (en milisegundos)
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
