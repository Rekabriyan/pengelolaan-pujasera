import { Module } from '@nestjs/common';
import { TenanService } from './tenan.service';
import { TenanController } from './tenan.controller';

@Module({
  controllers: [TenanController],
  providers: [TenanService],
})
export class TenanModule {}
