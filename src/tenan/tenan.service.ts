import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTenanDto } from './dto/create-tenan.dto';
import { UpdateTenanDto } from './dto/update-tenan.dto';

@Injectable()
export class TenanService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.tenan.findMany();
  }

  async insert(dto: CreateTenanDto) {
    return this.prisma.tenan.create({
      data: {
        nama_tenan: dto.nama_tenan,
        hp: dto.HP,
      },
    });
  }

  async update(kode_tenan: number, dto: UpdateTenanDto) {
    return this.prisma.tenan.update({
      where: { kode_tenan },
      data: {
        nama_tenan: dto.nama_tenan,
        hp: dto.HP,
      },
    });
  }

  async delete(kode_tenan: number) {
    return this.prisma.tenan.delete({
      where: { kode_tenan },
    });
  }
}
