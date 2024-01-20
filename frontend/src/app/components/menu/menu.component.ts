import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuI } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
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

}
