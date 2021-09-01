"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemService = void 0;
const common_1 = require("@nestjs/common");
let PersonagemService = class PersonagemService {
    constructor() {
        this.personagens = [
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
    }
    create(createPersonagemDto) {
        const personagem = Object.assign({ id: this.personagens.length + 1 }, createPersonagemDto);
        this.personagens.push(personagem);
        return personagem;
    }
    findAll() {
        return this.personagens;
    }
    findOne(id) {
        return this.personagens.find((personagem) => personagem.id === id);
    }
    update(id, updatePersonagemDto) {
        const index = this.personagens.findIndex((personagem) => personagem.id === id);
        this.personagens[index] = Object.assign(Object.assign({}, this.personagens[index]), updatePersonagemDto);
        return this.personagens[index];
    }
    remove(id) {
        const index = this.personagens.findIndex((personagem) => personagem.id === id);
        this.personagens.splice(index, 1);
    }
};
PersonagemService = __decorate([
    (0, common_1.Injectable)()
], PersonagemService);
exports.PersonagemService = PersonagemService;
//# sourceMappingURL=personagem.service.js.map