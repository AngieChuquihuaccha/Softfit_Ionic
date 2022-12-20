import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../services/productos/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.page.html',
  styleUrls: ['./producto-form.page.scss'],
})
export class ProductoFormPage implements OnInit {

  productorForm: FormGroup = new FormGroup<any>({});
  constructor(private fb: FormBuilder,
    public productoService:ProductoService,
    private router:Router) { }

  ngOnInit() {
    this.inicializador();
  }


  inicializador(){
    this.productorForm = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['V', Validators.required],
      tamaño:['', Validators.required],
      stock: ['', Validators.required],
      estado: ['A', Validators.required],
      descripcion: ['', Validators.required],
      
    });
    if(this.productoService.productoregistrar){
      this.productorForm.patchValue(this.productoService.productoregistrar);
     }
  }

  register(){
    this.productoService.register(this.productorForm.value).subscribe(res =>{
      console.log('res ' ,res)
      this.productorForm.reset();
      this.router.navigate(['productos-crud']);
    })
  }

  cancelar(){
    this.router.navigate(['productos-crud']);
  }

  updateEmpleado(){
    console.log('Datos empleado:', this.productorForm.value);
    this.productoService.update(this.productorForm.value).subscribe(res =>{
      console.log('Se actualizo correctamente: ', res);
      this.productorForm.reset();
      this.router.navigate(['productos-crud']);
    })
  }

  ngOnDestroy(){
    this.productoService.productoregistrar = undefined;
  }

  saveProducto(){
    if(this.productoService.productoregistrar){
      //Actualizar 
      this.updateEmpleado();
    }else{
      // Crear
      this.register();
    }
  }
}
