import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTenanDto {
  @ApiPropertyOptional({ example: 'Warung Bu Sari', description: 'Nama tenan / penyewa lapak' })
  @IsString()
  @IsOptional()
  nama_tenan?: string;

  @ApiPropertyOptional({ example: '085678901234', description: 'Nomor HP tenan' })
  @IsString()
  @IsOptional()
  HP?: string;
}
