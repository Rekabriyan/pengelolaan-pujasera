import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateKasirDto {
  @ApiPropertyOptional({ example: 'Budi Santoso', description: 'Nama lengkap kasir' })
  @IsString()
  @IsOptional()
  nama_kasir?: string;

  @ApiPropertyOptional({ example: '081234567890', description: 'Nomor HP kasir' })
  @IsString()
  @IsOptional()
  hp?: string;
}
