import { Component } from '@angular/core';

@Component({
    selector: 'app-listagem',
    template: `
      <mat-card class="lista-card">
        <mat-card-title>Lista de Clientes</mat-card-title>
        <table mat-table [dataSource]="data" class="mat-elevation-z8">
  
          <ng-container matColumnDef="titulo">
            <th mat-header-cell *matHeaderCellDef> Título </th>
            <td mat-cell *matCellDef="let element"> {{element.titulo}} </td>
          </ng-container>
  
          <ng-container matColumnDef="autor">
            <th mat-header-cell *matHeaderCellDef> Autor </th>
            <td mat-cell *matCellDef="let element"> {{element.autor}} </td>
          </ng-container>
  
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
  
        <button mat-fab color="accent" class="add-button" routerLink="/cadastro">
          <mat-icon>add</mat-icon>
        </button>
      </mat-card>
    `,
    styles: [`
      .lista-card { padding: 16px; }
      .add-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
      }
      table { width: 100%; margin-top: 10px; }
    `]
})
export class ListagemComponent {
    displayedColumns: string[] = ['titulo', 'autor'];
    data = [
        { titulo: 'Coca-cola', autor: 'Refrigerante' },
    ];
}
