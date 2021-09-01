import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';
export declare class LocalizacaoService {
    create(createLocalizacaoDto: CreateLocalizacaoDto): CreateLocalizacaoDto;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLocalizacaoDto: UpdateLocalizacaoDto): string;
    remove(id: number): string;
}
