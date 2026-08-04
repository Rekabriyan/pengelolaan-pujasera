import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKasirDto } from './dto/create-kasir.dto';
import { UpdateKasirDto } from './dto/update-kasir.dto';

@Injectable()
export class KasirService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.kasir.findMany();
  }

  async insert(dto: CreateKasirDto) {
    return this.prisma.kasir.create({
      data: {
        nama_kasir: dto.nama_kasir,
        hp: dto.hp,
      },
    });
  }

  async update(kode_kasir: number, dto: UpdateKasirDto) {
    return this.prisma.kasir.update({
      where: { kode_kasir },
      data: dto,
    });
  }

  async delete(kode_kasir: number) {
    return this.prisma.kasir.delete({
      where: { kode_kasir },
    });
  }
}
