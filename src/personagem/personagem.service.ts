import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
  constructor(private readonly prisma: PrismaService) {}

  async create(createPersonagemDto: CreatePersonagemDto) {
    const personagem: Personagem = {
      // id: this.personagens.length + 1,
      ...createPersonagemDto,
    };
    return await this.prisma.personagem.create({
      data: personagem,
    });
    //this.personagens.push(personagem);

    // return personagem;
  }

  findAll() {
    return this.prisma.personagem.findMany();
  }

  async findOne(id: number) {
    const personagem = await this.prisma.personagem.findUnique({
      where: {
        id: id,
      },
    });
    return personagem;

    // return this.personagens.find((personagem) => personagem.id === id);
  }

  async update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    const updatePers = await this.prisma.personagem.update({
      where: {
        id: id, //buca o objeto
      },
      data: {
        ...updatePersonagemDto, //efetua o update para o ojeto novo
      },
    });
    // const personagemUp = await this.prisma.personagem.findUnique({
    //   where: {
    //     id: id,
    //   },
    // });
    // const updatePersonagem = await this.prisma.personagem.update({
    //   where: {
    //     data: ...personagemUp,
    //     data: ...updatePersonagemDto,
    //   },
    // });
    // const index = this.personagens.findIndex(
    //   (personagem) => personagem.id === id,
    // );
    // Jeito 1
    // const personagemAtual = this.personagens[index];
    // const novoPersonagem = {
    //   ...personagemAtual,
    //   ...updatePersonagemDto,
    // };
    // this.personagens[index] = novoPersonagem;
    // Jeito 2
    // this.personagens[index] = {
    //   ...this.personagens[index],
    //   ...updatePersonagemDto,
    // };
    return updatePers;
  }

  async remove(id: number) {
    const deletePers = await this.prisma.personagem.delete({
      where: {
        id: id,
      },
    });
    // const index = this.personagens.findIndex(
    //   (personagem) => personagem.id === id,
    // );

    // // delete this.personagens[index];
    // // this.personagens = this.personagens.filter((p) => p.id !== id);

    // this.personagens.splice(index, 1);
    return deletePers;
  }
}
