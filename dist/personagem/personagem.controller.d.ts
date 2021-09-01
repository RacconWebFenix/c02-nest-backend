import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): Promise<import(".prisma/client").Personagem>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Personagem[]>;
    findOne(id: string): Promise<import(".prisma/client").Personagem>;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<import(".prisma/client").Personagem>;
    remove(id: string): Promise<import(".prisma/client").Personagem>;
}
