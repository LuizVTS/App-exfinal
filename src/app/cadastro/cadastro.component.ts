import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro',
  template: `
      <mat-card>
        <mat-card-title class="titulo-card">Cadastro de Clientes</mat-card-title>
        <mat-card-content>
          <mat-form-field class="full-width">
            <mat-label>Nome</mat-label>
            <input matInput [(ngModel)]="nome" required>
          </mat-form-field>
          
          <mat-form-field class="full-width">
            <mat-label>Idade</mat-label>
            <input matInput type="number" [(ngModel)]="idade" required>
          </mat-form-field>
  
          <div class="botoes">
            <button mat-raised-button color="primary" (click)="salvar()">Salvarar</button>
            <button mat-raised-button color="warn" routerLink="/">Cancelar</button>
          </div>
        </mat-card-content>
      </mat-card>
    `,
  styles: [`
      .titulo-card {
        background: #3f51b5;
        color: white;
        padding: 16px;
        margin: -16px -16px 16px -16px;
        text-align: center;
      }
      .full-width { width: 100%; }
      .botoes { display: flex; gap: 10px; margin-top: 10px; }
    `]
})

export class CadastroComponent {
  nome = '';
  idade = '';

  constructor(private snackBar: MatSnackBar) { }


  salvar() {
    if (!this.nome || !this.idade) {
      this.snackBar.open('Preencha todos os campos obrigatórios!', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    console.log({ nome: this.nome, idade: this.idade });

    this.snackBar.open('Cadastro salvo com sucesso!', 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

}
