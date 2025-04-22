import { applyTypes } from '../plugins/apply-types.js';
import { BaseModel } from '../models/base-model.js';

export class VehicleModel extends BaseModel {
    constructor() {
        super();

        this.CorPlaca = null;
        this.Placa = null;
        this.Marca = null;
        this.Modelo = null;
        this.Chassi = null;
        this.Ano = null;
        this.Categoria = null;
        this.QuilometragemAtual = null;
        this.Documentos = null;
        this.Situacao = null;
        this.CaminhoImagem = null;

        this.schema = {
            ...this.schema, 
            CorPlaca: 'string',
            Placa: 'string',
            Marca: 'string',
            Modelo: 'string',
            Chassi: 'string',
            Ano: 'number',
            Categoria: 'string',
            QuilometragemAtual: 'number',
            Documentos: 'string',
            Situacao: 'string',
            CaminhoImagem: 'string',
        };
    }

    update(data) {
        applyTypes(data, this.schema, this);
    }
}