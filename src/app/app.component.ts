import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('campoUsuario') campoUsuario?: ElementRef<HTMLInputElement>;

  usuario = '';
  clave = '';
  mostrarClave = false;
  mostrarAcercaDe = false;
  mensajeAcceso = '';

  aceptar(): void {
    this.mensajeAcceso = 'Se procederá a validar las credenciales de acceso';
    window.alert(this.mensajeAcceso);
  }

  irAlLogin(): void {
    this.mostrarAcercaDe = false;
    this.campoUsuario?.nativeElement.focus();
    document.getElementById('login')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  alternarAcercaDe(): void {
    this.mostrarAcercaDe = !this.mostrarAcercaDe;
  }

  alternarVisibilidadClave(): void {
    this.mostrarClave = !this.mostrarClave;
  }
}
