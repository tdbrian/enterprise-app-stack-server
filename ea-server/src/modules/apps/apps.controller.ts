import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateAppDto } from 'ea-shared';
import { AppsService } from './apps.service';
import { App } from './app.model';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  async create(@Body() createCatDto: CreateAppDto) {
    this.appsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<App[]> {
    return this.appsService.findAll();
  }
}