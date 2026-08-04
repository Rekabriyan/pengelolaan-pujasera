import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { NotaService } from './nota.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@ApiTags('Nota')
@Controller('api/nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data nota', description: 'Mengembalikan seluruh daftar nota / transaksi yang ada.' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data nota.' })
  async getAll() {
    return this.notaService.getAll();
  }

  @Post('insert')
  @ApiOperation({ summary: 'Tambah nota baru', description: 'Membuat nota transaksi baru. Field total = jml_belanja - diskon.' })
  @ApiResponse({ status: 201, description: 'Nota berhasil dibuat.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async insert(@Body() dto: CreateNotaDto) {
    await this.notaService.insert(dto);
    return 'Insert Nota success';
  }

  @Put('update/:kode_nota')
  @ApiOperation({ summary: 'Update data nota', description: 'Memperbarui data nota berdasarkan kode nota.' })
  @ApiParam({ name: 'kode_nota', type: Number, description: 'Kode unik nota' })
  @ApiResponse({ status: 200, description: 'Nota berhasil diupdate.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async update(
    @Param('kode_nota', ParseIntPipe) kode_nota: number,
    @Body() dto: UpdateNotaDto,
  ) {
    await this.notaService.update(kode_nota, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_nota')
  @ApiOperation({ summary: 'Hapus nota', description: 'Menghapus nota beserta seluruh barang nota terkait (cascade delete).' })
  @ApiParam({ name: 'kode_nota', type: Number, description: 'Kode unik nota' })
  @ApiResponse({ status: 200, description: 'Nota berhasil dihapus.' })
  async delete(@Param('kode_nota', ParseIntPipe) kode_nota: number) {
    await this.notaService.delete(kode_nota);
    return `Delete nota dengan id ${kode_nota} berhasil`;
  }
}
