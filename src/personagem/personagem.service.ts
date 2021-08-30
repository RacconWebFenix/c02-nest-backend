import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';

@Injectable()
export class PersonagemService {
  private personagens: Personagem[] = [
    {
      id: 1,
      nome: 'Rick Sanchez',
      imagemUrl: 'http://imagem.com',
    },
    {
      id: 2,
      nome: 'Morthy Smith',
      imagemUrl: 'http://imagem.com',
    },
    {
      id: 3,
      nome: 'Summer Smith',
      imagemUrl: 'http://imagem.com',
    },
  ];

  create(createPersonagemDto: CreatePersonagemDto) {
    const personagem: Personagem = {
      id: this.personagens.length + 1,
      ...createPersonagemDto,
    };
    this.personagens.push(personagem);
    return personagem;
  }

  findAll() {
    return this.personagens;
  }

  findOne(id: number) {
    const pers = this.personagens.filter((p) => p.id === id);
    return pers;
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    const pers = this.personagens.filter((p) => p.id === id);
    const newPers = {
      nome: updatePersonagemDto.nome,
      imagemUrl: updatePersonagemDto.imagemUrl,
    };
    pers[0].nome = newPers.nome;
    pers[0].imagemUrl = newPers.imagemUrl;
    return pers;
  }

  remove(id: number) {
    this.personagens = this.personagens.filter((p) => p.id !== id);
    return this.personagens;
  }
}
