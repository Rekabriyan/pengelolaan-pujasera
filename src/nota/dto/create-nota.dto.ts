import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateNotaDto {
  @IsInt()
  @IsNotEmpty()
  kode_tenan: number;

  @IsInt()
  @IsNotEmpty()
  kode_kasir: number;

  @IsString()
  @IsNotEmpty()
  tgl_nota: string;

  @IsString()
  @IsNotEmpty()
  jam_nota: string;

  @IsInt()
  @Min(0)
  jml_belanja: number;

  @IsInt()
  @Min(0)
  diskon: number;

  @IsInt()
  @Min(0)
  total: number;
}
