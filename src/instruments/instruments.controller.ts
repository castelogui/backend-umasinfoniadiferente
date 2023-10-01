import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Post()
  create(@Body() createInstrumentDto: Prisma.InstrumentCreateInput) {
    return this.instrumentsService.create(createInstrumentDto);
  }

  @Get()
  findAll() {
    return this.instrumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instrumentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateInstrumentDto: Prisma.InstrumentUpdateInput,
  ) {
    return this.instrumentsService.update(+id, updateInstrumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instrumentsService.remove(+id);
  }
}
