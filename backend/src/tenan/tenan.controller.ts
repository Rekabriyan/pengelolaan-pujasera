import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TenanService } from './tenan.service';
import { CreateTenanDto } from './dto/create-tenan.dto';
import { UpdateTenanDto } from './dto/update-tenan.dto';

@Controller('api/tenan')
export class TenanController {
  constructor(private readonly tenanService: TenanService) {}

  @Get()
  async getAll() {
    return this.tenanService.getAll();
  }

  @Post('insert')
  async insert(@Body() dto: CreateTenanDto) {
    await this.tenanService.insert(dto);
    return 'Insert success';
  }

  @Put('update/:kode_tenan')
  async update(
    @Param('kode_tenan', ParseIntPipe) kode_tenan: number,
    @Body() dto: UpdateTenanDto,
  ) {
    await this.tenanService.update(kode_tenan, dto);
    return 'Update berhasil';
  }

  @Delete('delete/:kode_tenan')
  async delete(@Param('kode_tenan', ParseIntPipe) kode_tenan: number) {
    await this.tenanService.delete(kode_tenan);
    return `Delete tenan dengan id ${kode_tenan} berhasil`;
  }
}
