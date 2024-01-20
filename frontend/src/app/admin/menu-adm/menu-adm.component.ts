import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuI } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent implements OnInit{

  inputView!: string;

  menu: MenuI[] = []

  constructor(
    private menuService: MenuService,
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.getMenu()
  }

  getMenu() {
    this.menuService.getMenu().subscribe(
      res => {
        this.menu = res
      }, 
      err => {
        console.log(err)
      }
    )
  }


  deleteMenu(id: string) {
    if (this.toastr.info('¿Estás seguro de que deseas eliminar esta habitación?')) {
      this.menuService.deleteMenu(id).subscribe(
        res => {
          this.getMenu();
          this.toastr.success('Habitación eliminada con éxito', 'Éxito');
        },
        err => {
          console.error(err);
          this.toastr.error('Error al eliminar la habitación', 'Error');
        }
      );
    }
  }

}
