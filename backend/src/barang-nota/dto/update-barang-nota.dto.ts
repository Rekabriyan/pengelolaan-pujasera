import { IsInt, Min, IsOptional } from 'class-validator';

export class UpdateBarangNotaDto {
  @IsInt()
  @IsOptional()
  kode_nota?: number;

  @IsInt()
  @IsOptional()
  kode_barang?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  jml_barang?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  harga_satuan?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  jumlah?: number;
}
