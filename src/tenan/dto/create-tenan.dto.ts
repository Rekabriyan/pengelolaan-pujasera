import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTenanDto {
  @IsString()
  @IsNotEmpty()
  nama_tenan: string;

  @IsString()
  @IsNotEmpty()
  HP: string;
}
