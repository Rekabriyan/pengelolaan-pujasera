import { IsString, IsOptional } from 'class-validator';

export class UpdateKasirDto {
  @IsString()
  @IsOptional()
  nama_kasir?: string;

  @IsString()
  @IsOptional()
  hp?: string;
}
