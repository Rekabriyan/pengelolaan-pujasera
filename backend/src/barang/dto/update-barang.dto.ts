import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateBarangDto {
  @ApiPropertyOptional({ example: 'Nasi Goreng', description: 'Nama barang / produk' })
  @IsString()
  @IsOptional()
  nama_barang?: string;

  @ApiPropertyOptional({ example: 'porsi', description: 'Satuan ukuran barang' })
  @IsString()
  @IsOptional()
  satuan?: string;

  @ApiPropertyOptional({ example: 15000, description: 'Harga per satuan (dalam rupiah)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  harga_satuan?: number;

  @ApiPropertyOptional({ example: 100, description: 'Jumlah stok yang tersedia' })
  @IsInt()
  @Min(0)
  @IsOptional()
  stok?: number;
}
