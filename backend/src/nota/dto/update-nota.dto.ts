import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateNotaDto {
  @ApiPropertyOptional({ example: 1, description: 'Kode tenan yang melakukan transaksi' })
  @IsInt()
  @IsOptional()
  kode_tenan?: number;

  @ApiPropertyOptional({ example: 1, description: 'Kode kasir yang melayani transaksi' })
  @IsInt()
  @IsOptional()
  kode_kasir?: number;

  @ApiPropertyOptional({ example: '2024-08-05', description: 'Tanggal nota (format: YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  tgl_nota?: string;

  @ApiPropertyOptional({ example: '09:30', description: 'Jam nota (format: HH:mm)' })
  @IsString()
  @IsOptional()
  jam_nota?: string;

  @ApiPropertyOptional({ example: 75000, description: 'Jumlah total belanja sebelum diskon (rupiah)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  jml_belanja?: number;

  @ApiPropertyOptional({ example: 5000, description: 'Nilai diskon yang diberikan (rupiah)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  diskon?: number;

  @ApiPropertyOptional({ example: 70000, description: 'Total yang harus dibayar setelah diskon (rupiah)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  total?: number;
}
