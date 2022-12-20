import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'initiation-app',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'cliente-form',
    loadChildren: () => import('./cliente-form/cliente-form.module').then( m => m.ClienteFormPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'detalle-cliente',
    loadChildren: () => import('./detalle-cliente/detalle-cliente.module').then( m => m.DetalleClientePageModule)
  },
  {
    path: 'productos-crud',
    loadChildren: () => import('./productos-crud/productos-crud.module').then( m => m.ProductosCRUDPageModule)
  },
  {
    path: 'producto-form',
    loadChildren: () => import('./producto-form/producto-form.module').then( m => m.ProductoFormPageModule)
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'mensaje-compra',
    loadChildren: () => import('./mensaje-compra/mensaje-compra.module').then( m => m.MensajeCompraPageModule)
  },
  {
    path: 'initiation-app',
    loadChildren: () => import('./initiation-app/initiation-app.module').then( m => m.InitiationAppPageModule)
  },
  {
    path: 'initiation-app-one',
    loadChildren: () => import('./initiation-app-one/initiation-app-one.module').then( m => m.InitiationAppOnePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
