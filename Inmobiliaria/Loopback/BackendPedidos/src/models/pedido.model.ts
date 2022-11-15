import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Inmueble} from './inmueble.model';
import {Usuario} from './usuario.model';
import {Solicitud} from './solicitud.model';

@model()
export class Pedido extends Entity {
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
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'number',
    required: true,
  })
  Estado: number;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  @hasOne(() => Usuario)
  usuario: Usuario;

  @hasOne(() => Solicitud)
  solicitud: Solicitud;

  @property({
    type: 'string',
  })
  solicitudId?: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
