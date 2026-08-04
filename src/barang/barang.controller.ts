import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BarangService } from './barang.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';

@Controller('api/barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  @Get()
  async getAll() {
    return this.barangService.getAll();
  }

  @Post('insert')
  async insert(@Body() dto: CreateBarangDto) {
    await this.barangService.insert(dto);
    return 'Insert success';
  }

  @Put('update/:kode_barang')
  async update(
    @Param('kode_barang', ParseIntPipe) kode_barang: number,
    @Body() dto: UpdateBarangDto,
  ) {
    await this.barangService.update(kode_barang, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_barang')
  async delete(@Param('kode_barang', ParseIntPipe) kode_barang: number) {
    await this.barangService.delete(kode_barang);
    return `Delete barang dengan id ${kode_barang} berhasil`;
  }
}
