import { Component } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    template: `
      <mat-toolbar color="primary">
        <span>Angular</span>
        <span class="spacer"></span>
        <button mat-button routerLink="/">Listagem</button>
        <button mat-button routerLink="/cadastro">Cadastro</button>
      </mat-toolbar>
    `,
    styles: ['.spacer { flex: 1; }']
})
export class ToolbarComponent { }
