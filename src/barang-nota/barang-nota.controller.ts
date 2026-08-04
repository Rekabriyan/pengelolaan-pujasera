import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BarangNotaService } from './barang-nota.service';
import { CreateBarangNotaDto } from './dto/create-barang-nota.dto';
import { UpdateBarangNotaDto } from './dto/update-barang-nota.dto';

@Controller('api/barangnota')
export class BarangNotaController {
  constructor(private readonly barangNotaService: BarangNotaService) {}

  @Get()
  async getAll() {
    return this.barangNotaService.getAll();
  }

  @Post('insert')
  async insert(@Body() dto: CreateBarangNotaDto) {
    await this.barangNotaService.insert(dto);
    return 'Insert Nota success';
  }

  @Put('update/:kode_barang_nota')
  async update(
    @Param('kode_barang_nota', ParseIntPipe) kode_barang_nota: number,
    @Body() dto: UpdateBarangNotaDto,
  ) {
    await this.barangNotaService.update(kode_barang_nota, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_barang_nota')
  async delete(@Param('kode_barang_nota', ParseIntPipe) kode_barang_nota: number) {
    await this.barangNotaService.delete(kode_barang_nota);
    return `Delete barang nota dengan id ${kode_barang_nota} berhasil`;
  }
}
