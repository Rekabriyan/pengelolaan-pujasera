import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { BarangService } from './barang.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';

@ApiTags('Barang')
@Controller('api/barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data barang', description: 'Mengembalikan seluruh daftar barang yang tersedia.' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data barang.' })
  async getAll() {
    return this.barangService.getAll();
  }

  @Post('insert')
  @ApiOperation({ summary: 'Tambah barang baru', description: 'Menambahkan data barang baru ke database.' })
  @ApiResponse({ status: 201, description: 'Barang berhasil ditambahkan.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async insert(@Body() dto: CreateBarangDto) {
    await this.barangService.insert(dto);
    return 'Insert success';
  }

  @Put('update/:kode_barang')
  @ApiOperation({ summary: 'Update data barang', description: 'Memperbarui data barang berdasarkan kode barang.' })
  @ApiParam({ name: 'kode_barang', type: Number, description: 'Kode unik barang' })
  @ApiResponse({ status: 200, description: 'Barang berhasil diupdate.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async update(
    @Param('kode_barang', ParseIntPipe) kode_barang: number,
    @Body() dto: UpdateBarangDto,
  ) {
    await this.barangService.update(kode_barang, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_barang')
  @ApiOperation({ summary: 'Hapus barang', description: 'Menghapus data barang berdasarkan kode barang.' })
  @ApiParam({ name: 'kode_barang', type: Number, description: 'Kode unik barang' })
  @ApiResponse({ status: 200, description: 'Barang berhasil dihapus.' })
  async delete(@Param('kode_barang', ParseIntPipe) kode_barang: number) {
    await this.barangService.delete(kode_barang);
    return `Delete barang dengan id ${kode_barang} berhasil`;
  }
}
