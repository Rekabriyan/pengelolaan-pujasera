import { IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBarangNotaDto {
  @IsInt()
  @IsNotEmpty()
  kode_nota: number;

  @IsInt()
  @IsNotEmpty()
  kode_barang: number;

  @IsInt()
  @Min(0)
  jml_barang: number;

  @IsInt()
  @Min(0)
  harga_satuan: number;

  @IsInt()
  @Min(0)
  jumlah: number;
}
