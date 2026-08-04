import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBarangNotaDto {
  @ApiProperty({ example: 1, description: 'Kode nota transaksi yang terkait' })
  @IsInt()
  @IsNotEmpty()
  kode_nota: number;

  @ApiProperty({ example: 1, description: 'Kode barang yang dibeli' })
  @IsInt()
  @IsNotEmpty()
  kode_barang: number;

  @ApiProperty({ example: 3, description: 'Jumlah barang yang dibeli' })
  @IsInt()
  @Min(0)
  jml_barang: number;

  @ApiProperty({ example: 15000, description: 'Harga per satuan barang (rupiah)' })
  @IsInt()
  @Min(0)
  harga_satuan: number;

  @ApiProperty({ example: 45000, description: 'Total harga (jml_barang × harga_satuan) dalam rupiah' })
  @IsInt()
  @Min(0)
  jumlah: number;
}
