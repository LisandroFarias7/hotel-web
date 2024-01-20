import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuI } from 'src/app/interfaces/menu';
import { MenuDto } from 'src/app/models/menu.dto';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit{

  menu: MenuI = {
    id:  '',
    title: '',
    description: '',
    imageUrl: '',
    image: ''
  }

  

  edit: boolean = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.menuService.getMenuId(id).subscribe(
      res => {
        this.menu = res;
        this.edit = true;
      }

    )
  }

  createMenu() {
    console.log(this.menu)
    this.menuService.createMenu(this.menu).subscribe(
      res => {
        this.edit = false
        console.log(res)
        this.toastr.success('Plato creado con éxito', 'Éxito')
        this.router.navigate(['/admin/menu'])
      },
      err => {
        console.log(err)
        this.toastr.error('Error al crear el plato', 'ERROR')
      }
    )
  }

  updateMenu() {
    const id = this.activatedRoute.snapshot.params['id']
    this.menuService.updateMenu(this.menu, id).subscribe(
      res => {
        console.log(res)
        this.toastr.success('Plato actualizado', 'Éxito')
        this.router.navigate(['/admin/menu'])
        this.edit = true
      },
      err => {
        console.log(err),
        this.toastr.error('Plato no actualizado', 'ERROR')
      }
    )
  }

}
