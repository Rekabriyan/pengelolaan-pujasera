import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { KasirService } from './kasir.service';
import { CreateKasirDto } from './dto/create-kasir.dto';
import { UpdateKasirDto } from './dto/update-kasir.dto';

@ApiTags('Kasir')
@Controller('api/kasir')
export class KasirController {
  constructor(private readonly kasirService: KasirService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data kasir', description: 'Mengembalikan seluruh daftar kasir yang terdaftar.' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data kasir.' })
  async getAll() {
    return this.kasirService.getAll();
  }

  @Post('insert')
  @ApiOperation({ summary: 'Tambah kasir baru', description: 'Menambahkan data kasir baru ke database.' })
  @ApiResponse({ status: 201, description: 'Kasir berhasil ditambahkan.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async insert(@Body() dto: CreateKasirDto) {
    await this.kasirService.insert(dto);
    return 'Insert kasir success';
  }

  @Put('update/:kode_kasir')
  @ApiOperation({ summary: 'Update data kasir', description: 'Memperbarui data kasir berdasarkan kode kasir.' })
  @ApiParam({ name: 'kode_kasir', type: Number, description: 'Kode unik kasir' })
  @ApiResponse({ status: 200, description: 'Kasir berhasil diupdate.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async update(
    @Param('kode_kasir', ParseIntPipe) kode_kasir: number,
    @Body() dto: UpdateKasirDto,
  ) {
    await this.kasirService.update(kode_kasir, dto);
    return 'Update kasir success';
  }

  @Delete('delete/:kode_kasir')
  @ApiOperation({ summary: 'Hapus kasir', description: 'Menghapus data kasir berdasarkan kode kasir.' })
  @ApiParam({ name: 'kode_kasir', type: Number, description: 'Kode unik kasir' })
  @ApiResponse({ status: 200, description: 'Kasir berhasil dihapus.' })
  async delete(@Param('kode_kasir', ParseIntPipe) kode_kasir: number) {
    await this.kasirService.delete(kode_kasir);
    return `Delete kasir dengan id ${kode_kasir} berhasil`;
  }
}
