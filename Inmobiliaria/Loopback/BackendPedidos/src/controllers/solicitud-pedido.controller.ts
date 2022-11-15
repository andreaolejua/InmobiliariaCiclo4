import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  Pedido,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudPedidoController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/pedido', {
    responses: {
      '200': {
        description: 'Pedido belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async getPedido(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
  ): Promise<Pedido> {
    return this.solicitudRepository.pedido(id);
  }
}
