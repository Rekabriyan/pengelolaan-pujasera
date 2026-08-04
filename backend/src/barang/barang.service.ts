import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';

@Injectable()
export class BarangService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.barang.findMany();
  }

  async insert(dto: CreateBarangDto) {
    return this.prisma.barang.create({
      data: {
        nama_barang: dto.nama_barang,
        satuan: dto.satuan,
        harga_satuan: dto.harga_satuan,
        stok: dto.stok,
      },
    });
  }

  async update(kode_barang: number, dto: UpdateBarangDto) {
    return this.prisma.barang.update({
      where: { kode_barang },
      data: dto,
    });
  }

  async delete(kode_barang: number) {
    return this.prisma.barang.delete({
      where: { kode_barang },
    });
  }
}
