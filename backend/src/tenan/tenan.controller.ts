import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { TenanService } from './tenan.service';
import { CreateTenanDto } from './dto/create-tenan.dto';
import { UpdateTenanDto } from './dto/update-tenan.dto';

@ApiTags('Tenan')
@Controller('api/tenan')
export class TenanController {
  constructor(private readonly tenanService: TenanService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data tenan', description: 'Mengembalikan seluruh daftar tenan yang terdaftar.' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data tenan.' })
  async getAll() {
    return this.tenanService.getAll();
  }

  @Post('insert')
  @ApiOperation({ summary: 'Tambah tenan baru', description: 'Menambahkan data tenan / penyewa lapak baru ke database.' })
  @ApiResponse({ status: 201, description: 'Tenan berhasil ditambahkan.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async insert(@Body() dto: CreateTenanDto) {
    await this.tenanService.insert(dto);
    return 'Insert success';
  }

  @Put('update/:kode_tenan')
  @ApiOperation({ summary: 'Update data tenan', description: 'Memperbarui data tenan berdasarkan kode tenan.' })
  @ApiParam({ name: 'kode_tenan', type: Number, description: 'Kode unik tenan' })
  @ApiResponse({ status: 200, description: 'Tenan berhasil diupdate.' })
  @ApiResponse({ status: 400, description: 'Data tidak valid.' })
  async update(
    @Param('kode_tenan', ParseIntPipe) kode_tenan: number,
    @Body() dto: UpdateTenanDto,
  ) {
    await this.tenanService.update(kode_tenan, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_tenan')
  @ApiOperation({ summary: 'Hapus tenan', description: 'Menghapus data tenan berdasarkan kode tenan.' })
  @ApiParam({ name: 'kode_tenan', type: Number, description: 'Kode unik tenan' })
  @ApiResponse({ status: 200, description: 'Tenan berhasil dihapus.' })
  async delete(@Param('kode_tenan', ParseIntPipe) kode_tenan: number) {
    await this.tenanService.delete(kode_tenan);
    return `Delete tenan dengan id ${kode_tenan} berhasil`;
  }
}
