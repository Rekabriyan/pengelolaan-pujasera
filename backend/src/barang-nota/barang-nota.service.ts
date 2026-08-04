import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBarangNotaDto } from './dto/create-barang-nota.dto';
import { UpdateBarangNotaDto } from './dto/update-barang-nota.dto';

@Injectable()
export class BarangNotaService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.barangNota.findMany();
  }

  async insert(dto: CreateBarangNotaDto) {
    return this.prisma.barangNota.create({
      data: {
        kode_nota: dto.kode_nota,
        kode_barang: dto.kode_barang,
        jml_barang: dto.jml_barang,
        harga_satuan: dto.harga_satuan,
        jumlah: dto.jumlah,
      },
    });
  }

  async update(kode_barang_nota: number, dto: UpdateBarangNotaDto) {
    return this.prisma.barangNota.update({
      where: { kode_barang_nota },
      data: dto,
    });
  }

  async delete(kode_barang_nota: number) {
    return this.prisma.barangNota.delete({
      where: { kode_barang_nota },
    });
  }
}
