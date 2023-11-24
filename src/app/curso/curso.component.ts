
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class cursoComponent implements OnInit{
  listacursos: Curso[] = [];
  cursoSeleccionado?: Curso;


  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.getCursosList();
  }

  getCursosList(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.listacursos = cursos;
      
    });
  }

  onSelect(curso: Curso): void {
    this.cursoSeleccionado = curso;
  }
}
