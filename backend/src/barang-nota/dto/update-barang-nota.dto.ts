import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, Min, IsOptional } from 'class-validator';

export class UpdateBarangNotaDto {
  @ApiPropertyOptional({ example: 1, description: 'Kode nota transaksi yang terkait' })
  @IsInt()
  @IsOptional()
  kode_nota?: number;

  @ApiPropertyOptional({ example: 1, description: 'Kode barang yang dibeli' })
  @IsInt()
  @IsOptional()
  kode_barang?: number;

  @ApiPropertyOptional({ example: 3, description: 'Jumlah barang yang dibeli' })
  @IsInt()
  @Min(0)
  @IsOptional()
  jml_barang?: number;

  @ApiPropertyOptional({ example: 15000, description: 'Harga per satuan barang (rupiah)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  harga_satuan?: number;

  @ApiPropertyOptional({ example: 45000, description: 'Total harga (jml_barang × harga_satuan) dalam rupiah' })
  @IsInt()
  @Min(0)
  @IsOptional()
  jumlah?: number;
}
