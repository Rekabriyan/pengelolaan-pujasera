import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateBarangDto {
  @IsString()
  @IsOptional()
  nama_barang?: string;

  @IsString()
  @IsOptional()
  satuan?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  harga_satuan?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  stok?: number;
}
