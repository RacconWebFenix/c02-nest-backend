import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): import("./entities/personagem.entity").Personagem;
    findAll(): import("./entities/personagem.entity").Personagem[];
    findOne(id: string): import("./entities/personagem.entity").Personagem;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): import("./entities/personagem.entity").Personagem;
    remove(id: string): void;
}
