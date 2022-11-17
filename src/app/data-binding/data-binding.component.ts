import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'Esse é um alerta de sucesso',
  },
  {
    type: 'info',
    message: 'Esse é um alerta de informe',
  },
  {
    type: 'warning',
    message: 'Esse é um alerta de aviso',
  },
  {
    type: 'danger',
    message: 'Esse é um alerta de perigo',
  },
  {
    type: 'primary',
    message: 'Esse é um alerta primário',
  },
  {
    type: 'secondary',
    message: 'Esse é um alerta secundário',
  },
  {
    type: 'light',
    message: 'Esse é um alerta claro',
  },
  {
    type: 'dark',
    message: 'Esse é um alerta escuro',
  },
];

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  person: Person;
  name: string;
  age: number;
  url: string;
  cursoAngular: boolean;
  urlImagem: string;
  isOpen: boolean;
  typeAlert:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'primary'
    | 'secondary'
    | 'light'
    | 'dark'
    | undefined;

  alerts: Alert[];
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  nomeDoCurso: string;

  getValor(value: number) {
    return value;
  }
  getCurtirCurso() {
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }

  botaoClicado() {
    alert('Fui clicado!');
  }
  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
  salvarValor(value: string) {
    this.valorSalvo = value;
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {
    this.person = {
      name: 'Leonardo',
      age: 23,
    };
    this.name = 'Leonardo';
    this.age = 23;
    this.url = 'https://leonardo.dev/';
    this.cursoAngular = true;
    this.urlImagem = 'http://lorempixel.com.br/300/200/';
    this.nomeDoCurso = 'Angular';

    this.isOpen = true;

    this.alerts = Array.from(ALERTS);
    this.reset();

    this.valorAtual = '';
    this.valorSalvo = '';
  }

  ngOnInit(): void {}
}
