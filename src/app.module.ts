import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { LocalizacaoModule } from './localizacao/localizacao.module';

@Module({
  imports: [PersonagemModule, LocalizacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
