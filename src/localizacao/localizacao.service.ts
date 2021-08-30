import { Injectable } from '@nestjs/common';
import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';

@Injectable()
export class LocalizacaoService {
  create(createLocalizacaoDto: CreateLocalizacaoDto) {
    return 'This action adds a new localizacao';
  }

  findAll() {
    return `This action returns all localizacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localizacao`;
  }

  update(id: number, updateLocalizacaoDto: UpdateLocalizacaoDto) {
    return `This action updates a #${id} localizacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} localizacao`;
  }
}
