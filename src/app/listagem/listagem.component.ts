import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-listagem',
  template: `
    <mat-card class="card-container">
      <div class="title-bar">
        <span>Lista de Clientes</span>
        <span class="spacer"></span>
        <button mat-icon-button color="primary" routerLink="/cadastro">
          <mat-icon>add</mat-icon>
        </button>
      </div>

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
      width: 100%;
      max-width: 800px;
      margin: auto;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0px 4px 6px #424242;
    }

    .title-bar {
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      background:#424242;
      border-radius: 4px 4px 0 0;
    }

    .spacer {
      flex: 1;
    }

    table {
      width: 100%;
    }

    th {
      text-align: left;
      font-weight: bold;
      background:#424242;
    }

    td {
      background:#424242;
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
