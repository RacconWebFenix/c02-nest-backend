import { IsNotEmpty, IsString } from 'class-validator';
import { Localizacao } from '../entities/localizacao.entity';

export class CreateLocalizacaoDto implements Localizacao {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
