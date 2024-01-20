import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeatureComponent } from './components/feature/feature.component';
import { IntroComponent } from './components/intro/intro.component';
import { RoomComponent } from './components/room/room.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DateComponent } from './admin/date/date.component';
import { MenuAdmComponent } from './admin/menu-adm/menu-adm.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { EditRoomComponent } from './admin/edit-room/edit-room.component';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CreateRoomComponent } from './admin/create-room/create-room.component';
import { ClientsComponent } from './admin/clients/clients.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'room', component: RoomComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'news', component: NewsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/date', component: DateComponent},
  { path: 'admin/menu', component: MenuAdmComponent},
  { path: 'admin/rooms', component: RoomsComponent},
  { path: 'admin/rooms/edit/:id', component: EditRoomComponent},
  { path: 'admin/menu/edit', component: EditMenuComponent},
  { path: 'admin/menu/edit/:id', component: EditMenuComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'admin/rooms/create', component: CreateRoomComponent},
  { path: 'admin/clients', component: ClientsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }        
];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
