import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { LocalizacaoModule } from './localizacao/localizacao.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PersonagemModule, LocalizacaoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
