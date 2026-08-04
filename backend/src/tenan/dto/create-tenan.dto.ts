import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTenanDto {
  @ApiProperty({ example: 'Warung Bu Sari', description: 'Nama tenan / penyewa lapak' })
  @IsString()
  @IsNotEmpty()
  nama_tenan: string;

  @ApiProperty({ example: '085678901234', description: 'Nomor HP tenan' })
  @IsString()
  @IsNotEmpty()
  HP: string;
}
