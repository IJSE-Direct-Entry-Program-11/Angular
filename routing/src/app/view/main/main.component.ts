import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <header class="flex justify-between
                border-b p-2 items-center">
        <h1 class="text-2xl font-bold">
            Angular Routing
        </h1>
        <button class="border p-1.5
            border-sky-400 hover:border-sky-500
            hover:bg-sky-500 hover:text-white
            rounded">Logout</button>
    </header>
    <nav class="flex list-none justify-center border-b">
        <li [class]="classList1">HOME</li>
        <li [class]="classList2">MANAGE CUSTOMERS</li>
        <li [class]="'p-2 border-x cursor-pointer hover:bg-slate-200'">MANAGE ITEMS</li>
    </nav>
    <main class="flex justify-center">
        <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {
  classList1 = ['p-2', 'border-x', 'cursor-pointer',
              'hover:bg-slate-200'];
  classList2 = {
    "p-2": true,
    "cursor-pointer": true,
    "hover:bg-slate-200": true
  }
}
