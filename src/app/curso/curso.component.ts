
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
  idsConCertificado: number[] = [];


  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.getCursosList();
  }

 
  getCursosList(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.listacursos = cursos;
      this.idsConCertificado = cursos.filter(c => c.offers_certificate).map(c => c.id);
    });
  }

  onSelect(curso: Curso): void {
    this.cursoSeleccionado = curso;
  }
}
