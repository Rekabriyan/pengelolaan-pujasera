import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBarangDto {
  @IsString()
  @IsNotEmpty()
  nama_barang: string;

  @IsString()
  @IsNotEmpty()
  satuan: string;

  @IsInt()
  @Min(0)
  harga_satuan: number;

  @IsInt()
  @Min(0)
  stok: number;
}
