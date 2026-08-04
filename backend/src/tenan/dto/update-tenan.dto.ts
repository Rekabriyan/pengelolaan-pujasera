import { IsString, IsOptional } from 'class-validator';

export class UpdateTenanDto {
  @IsString()
  @IsOptional()
  nama_tenan?: string;

  @IsString()
  @IsOptional()
  HP?: string;
}
