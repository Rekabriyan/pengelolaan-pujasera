import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BarangModule } from './barang/barang.module';
import { KasirModule } from './kasir/kasir.module';
import { TenanModule } from './tenan/tenan.module';
import { NotaModule } from './nota/nota.module';
import { BarangNotaModule } from './barang-nota/barang-nota.module';

@Module({
  imports: [
    PrismaModule,
    BarangModule,
    KasirModule,
    TenanModule,
    NotaModule,
    BarangNotaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
