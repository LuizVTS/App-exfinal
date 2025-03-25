import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DadosService {
    private itens = [
        { titulo: 'Coca-cola', autor: 'Refrigerante' }
    ];

    obterItens() {
        return this.itens;
    }

    adicionarItem(item: { titulo: string, autor: string }) {
        this.itens.push(item);
    }
}
