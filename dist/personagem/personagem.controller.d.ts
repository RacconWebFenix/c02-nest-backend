import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PersonagemClient<import(".prisma/client").Personagem & {
        origem: {
            nome: string;
        };
    }>;
}
