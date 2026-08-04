import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateNotaDto {
  @IsInt()
  @IsOptional()
  kode_tenan?: number;

  @IsInt()
  @IsOptional()
  kode_kasir?: number;

  @IsString()
  @IsOptional()
  tgl_nota?: string;

  @IsString()
  @IsOptional()
  jam_nota?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  jml_belanja?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  diskon?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  total?: number;
}
