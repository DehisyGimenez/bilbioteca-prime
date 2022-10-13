import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { Libro } from '../interfaces/libro.interface';
import { FormularioLibrosComponent } from '../libro/formulario-libros/formulario-libros.component';
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  @ViewChild('formulario') formLibro!: FormularioLibrosComponent;

  listaLibros: Libro[] = []; //Aquí se guarda la lista de libros
  cargando: boolean = false; //Esta variable muestra la animacion de carga
  dialogoVisible: boolean = false; //Indica se el dialogo esta visible u oculto

  mensajes: Message[] = [];
  tituloDialogo: string = 'Registrar Libro';

  constructor(
    private servicioLibros: LibrosService
  ) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void{
    this.cargando = true;
    this.servicioLibros.get().subscribe({
      next: (datos) => {
        this.listaLibros = datos;
        this.cargando = false;
      },
      error: (e) => {
        console.log(e);
        this.cargando = false;
        this.mensajes = [{severity: 'errror', summary: 'Error al cargar libros', detail: e.mensajes}]
      }
    });
  }

  nuevo(){
    this.tituloDialogo = 'Registrar libro';
    this.formLibro.limpiarFormulario();
    this.formLibro.modo = 'Registrar';
    this.dialogoVisible = true;
  }

  editar(libro: Libro){
    this.formLibro.codigo = libro.id;
    this.formLibro.titulo= libro.titulo;
    this.formLibro.autor = libro.autor;
    this.formLibro.paginas = libro.paginas;
    this.formLibro.modo = 'Editar';
    this.dialogoVisible = true;
    this.tituloDialogo = "Editar libros";
  }
}
