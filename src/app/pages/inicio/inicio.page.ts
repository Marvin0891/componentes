import { Component, OnInit } from '@angular/core';


interface Componente{
icon: string;
name: string;
redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]= [
    {icon: 'accessibility-outline', 
    name: 'Información personal',
    redirectTo: '/action-sheet'
    },

    {icon: 'analytics-outline', 
    name: 'Metas personales y profesionales',
    redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
