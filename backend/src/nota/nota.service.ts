import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Injectable()
export class NotaService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.nota.findMany();
  }

  async insert(dto: CreateNotaDto) {
    return this.prisma.nota.create({
      data: {
        kode_tenan: dto.kode_tenan,
        kode_kasir: dto.kode_kasir,
        tgl_nota: new Date(dto.tgl_nota),
        jam_nota: dto.jam_nota,
        jml_belanja: dto.jml_belanja,
        diskon: dto.diskon,
        total: dto.total,
      },
    });
  }

  async update(kode_nota: number, dto: UpdateNotaDto) {
    const data: any = { ...dto };
    if (dto.tgl_nota) {
      data.tgl_nota = new Date(dto.tgl_nota);
    }
    return this.prisma.nota.update({
      where: { kode_nota },
      data,
    });
  }

  async delete(kode_nota: number) {
    return this.prisma.nota.delete({
      where: { kode_nota },
    });
  }
}
