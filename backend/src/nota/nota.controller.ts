import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NotaService } from './nota.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Controller('api/nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Get()
  async getAll() {
    return this.notaService.getAll();
  }

  @Post('insert')
  async insert(@Body() dto: CreateNotaDto) {
    await this.notaService.insert(dto);
    return 'Insert Nota success';
  }

  @Put('update/:kode_nota')
  async update(
    @Param('kode_nota', ParseIntPipe) kode_nota: number,
    @Body() dto: UpdateNotaDto,
  ) {
    await this.notaService.update(kode_nota, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_nota')
  async delete(@Param('kode_nota', ParseIntPipe) kode_nota: number) {
    await this.notaService.delete(kode_nota);
    return `Delete nota dengan id ${kode_nota} berhasil`;
  }
}
