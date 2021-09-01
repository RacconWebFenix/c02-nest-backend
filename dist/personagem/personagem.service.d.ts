import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemService {
    private readonly prisma;
    private personagens;
    constructor(prisma: PrismaService);
    create(createPersonagemDto: CreatePersonagemDto): Promise<import(".prisma/client").Personagem>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Personagem[]>;
    findOne(id: number): Promise<import(".prisma/client").Personagem>;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): Promise<import(".prisma/client").Personagem>;
    remove(id: number): Promise<import(".prisma/client").Personagem>;
}
