import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-listagem',
  template: `
    <mat-card class="card-container">
      <mat-card-title class="title-bar">
        Lista de Clientes
        <span class="spacer"></span>
        <button mat-icon-button color="primary" routerLink="/cadastro">
          <mat-icon>add</mat-icon>
        </button>
      </mat-card-title>

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
    </mat-card>
  `,
  styles: [`
    .card-container {
      padding: 16px;
      border-radius: 8px;
    }
    
    .title-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      font-weight: bold;
    }

    .spacer {
      flex: 1;
    }

    table {
      width: 100%;
      margin-top: 10px;
    }

    th {
      font-weight: bold;
    }
  `]
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'autor'];
  data = [
    { titulo: 'Coca-cola', autor: 'Refrigerante' }
  ];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.data = this.dadosService.obterItens();
  }
}
