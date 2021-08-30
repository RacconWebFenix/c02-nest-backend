import { Personagem } from 'src/personagem/entities/personagem.entity';

export class Localizacao extends Personagem {
  id?: number;
  nome: string;
  imagemUrl: string;
  localizacao: string;
}
