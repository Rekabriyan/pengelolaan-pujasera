import { Module } from '@nestjs/common';
import { BarangNotaService } from './barang-nota.service';
import { BarangNotaController } from './barang-nota.controller';

@Module({
  controllers: [BarangNotaController],
  providers: [BarangNotaService],
})
export class BarangNotaModule {}
