import { Component } from '@angular/core';
import { MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  items: MenuItem[] = [
    {
      label : "Bilbioteca",
      icon: PrimeIcons.BOOK,
      items: [
        {
          label: "Libros",
          icon: PrimeIcons.BOOKMARK,
          routerLink: ['/libros']
        },
        {
          label: "Autores",
          icon: PrimeIcons.USER,
          routerLink: ['/autores']
        }
      ]
    }
  ];
}
