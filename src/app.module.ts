import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentsModule } from './instruments/instruments.module';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ShiftModule } from './shift/shift.module';
import { ClassroomModule } from './classroom/classroom.module';
import { ImagesModule } from './images/images.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    InstrumentsModule,
    CommonModule,
    RoleModule,
    UserModule,
    ShiftModule,
    ClassroomModule,
    ImagesModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
