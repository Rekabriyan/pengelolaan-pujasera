import { IsString, IsNotEmpty } from 'class-validator';

export class CreateKasirDto {
  @IsString()
  @IsNotEmpty()
  nama_kasir: string;

  @IsString()
  @IsNotEmpty()
  hp: string;
}
