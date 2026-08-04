import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateNotaDto {
  @ApiProperty({ example: 1, description: 'Kode tenan yang melakukan transaksi' })
  @IsInt()
  @IsNotEmpty()
  kode_tenan: number;

  @ApiProperty({ example: 1, description: 'Kode kasir yang melayani transaksi' })
  @IsInt()
  @IsNotEmpty()
  kode_kasir: number;

  @ApiProperty({ example: '2024-08-05', description: 'Tanggal nota (format: YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  tgl_nota: string;

  @ApiProperty({ example: '09:30', description: 'Jam nota (format: HH:mm)' })
  @IsString()
  @IsNotEmpty()
  jam_nota: string;

  @ApiProperty({ example: 75000, description: 'Jumlah total belanja sebelum diskon (rupiah)' })
  @IsInt()
  @Min(0)
  jml_belanja: number;

  @ApiProperty({ example: 5000, description: 'Nilai diskon yang diberikan (rupiah)' })
  @IsInt()
  @Min(0)
  diskon: number;

  @ApiProperty({ example: 70000, description: 'Total yang harus dibayar setelah diskon (rupiah)' })
  @IsInt()
  @Min(0)
  total: number;
}
