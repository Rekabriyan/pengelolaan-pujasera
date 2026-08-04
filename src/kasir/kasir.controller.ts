import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { KasirService } from './kasir.service';
import { CreateKasirDto } from './dto/create-kasir.dto';
import { UpdateKasirDto } from './dto/update-kasir.dto';

@Controller('api/kasir')
export class KasirController {
  constructor(private readonly kasirService: KasirService) {}

  @Get()
  async getAll() {
    return this.kasirService.getAll();
  }

  @Post('insert')
  async insert(@Body() dto: CreateKasirDto) {
    await this.kasirService.insert(dto);
    return 'Insert kasir success';
  }

  @Put('update/:kode_kasir')
  async update(
    @Param('kode_kasir', ParseIntPipe) kode_kasir: number,
    @Body() dto: UpdateKasirDto,
  ) {
    await this.kasirService.update(kode_kasir, dto);
    return 'Update kasir success';
  }

  @Delete('delete/:kode_kasir')
  async delete(@Param('kode_kasir', ParseIntPipe) kode_kasir: number) {
    await this.kasirService.delete(kode_kasir);
    return `Delete kasir dengan id ${kode_kasir} berhasil`;
  }
}
