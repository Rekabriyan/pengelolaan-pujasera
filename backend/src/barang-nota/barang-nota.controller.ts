import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { BarangNotaService } from './barang-nota.service';
import { CreateBarangNotaDto } from './dto/create-barang-nota.dto';
import { UpdateBarangNotaDto } from './dto/update-barang-nota.dto';

@ApiTags('Barang Nota')
@Controller('api/barangnota')
export class BarangNotaController {
  constructor(private readonly barangNotaService: BarangNotaService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data barang nota', description: 'Mengembalikan seluruh daftar item barang yang terkait dengan nota transaksi.' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data barang nota.' })
  async getAll() {
    return this.barangNotaService.getAll();
  }

  @Post('insert')
  @ApiOperation({ summary: 'Tambah barang ke nota', description: 'Menambahkan item barang ke dalam nota transaksi tertentu.' })
  @ApiResponse({ status: 201, description: 'Barang nota berhasil ditambahkan.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async insert(@Body() dto: CreateBarangNotaDto) {
    await this.barangNotaService.insert(dto);
    return 'Insert Nota success';
  }

  @Put('update/:kode_barang_nota')
  @ApiOperation({ summary: 'Update data barang nota', description: 'Memperbarui item barang di dalam nota berdasarkan kode barang nota.' })
  @ApiParam({ name: 'kode_barang_nota', type: Number, description: 'Kode unik barang nota' })
  @ApiResponse({ status: 200, description: 'Barang nota berhasil diupdate.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async update(
    @Param('kode_barang_nota', ParseIntPipe) kode_barang_nota: number,
    @Body() dto: UpdateBarangNotaDto,
  ) {
    await this.barangNotaService.update(kode_barang_nota, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_barang_nota')
  @ApiOperation({ summary: 'Hapus barang nota', description: 'Menghapus item barang dari nota berdasarkan kode barang nota.' })
  @ApiParam({ name: 'kode_barang_nota', type: Number, description: 'Kode unik barang nota' })
  @ApiResponse({ status: 200, description: 'Barang nota berhasil dihapus.' })
  async delete(@Param('kode_barang_nota', ParseIntPipe) kode_barang_nota: number) {
    await this.barangNotaService.delete(kode_barang_nota);
    return `Delete barang nota dengan id ${kode_barang_nota} berhasil`;
  }
}
