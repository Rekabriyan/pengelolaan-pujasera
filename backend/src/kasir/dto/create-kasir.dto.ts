import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateKasirDto {
  @ApiProperty({ example: 'Budi Santoso', description: 'Nama lengkap kasir' })
  @IsString()
  @IsNotEmpty()
  nama_kasir: string;

  @ApiProperty({ example: '081234567890', description: 'Nomor HP kasir' })
  @IsString()
  @IsNotEmpty()
  hp: string;
}
