import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Asesor} from './asesor.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Estado: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @belongsTo(() => Pedido)
  pedidoId: string;

  @hasOne(() => Asesor)
  asesor: Asesor;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
