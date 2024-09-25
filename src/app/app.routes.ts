import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./iniciar-sesion/iniciar-sesion.page').then( m => m.IniciarSesionPage)
  },
  {
    path: 'cambiar-clave',
    loadComponent: () => import('./cambiar-clave/cambiar-clave.page').then( m => m.CambiarClavePage)
  },
  {
    path: 'mis-asignaturas',
    loadComponent: () => import('./mis-asignaturas/mis-asignaturas.page').then( m => m.MisAsignaturasPage)
  },
  {
    path: 'mis-asistencias',
    loadComponent: () => import('./mis-asistencias/mis-asistencias.page').then( m => m.MisAsistenciasPage)
  },
  {
    path: 'registrar-asistencia',
    loadComponent: () => import('./registrar-asistencia/registrar-asistencia.page').then( m => m.RegistrarAsistenciaPage)
  },

];
