import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBarangDto {
  @ApiProperty({ example: 'Nasi Goreng', description: 'Nama barang / produk' })
  @IsString()
  @IsNotEmpty()
  nama_barang: string;

  @ApiProperty({ example: 'porsi', description: 'Satuan ukuran barang' })
  @IsString()
  @IsNotEmpty()
  satuan: string;

  @ApiProperty({ example: 15000, description: 'Harga per satuan (dalam rupiah)' })
  @IsInt()
  @Min(0)
  harga_satuan: number;

  @ApiProperty({ example: 100, description: 'Jumlah stok yang tersedia' })
  @IsInt()
  @Min(0)
  stok: number;
}
