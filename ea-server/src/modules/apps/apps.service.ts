import { Component, Inject } from '@nestjs/common';
import { AppModel, App } from './app.model';
import { CreateAppDto } from 'ea-shared';

@Component()
export class AppsService {
  constructor(
    @Inject('AppModelToken') private readonly appModel: typeof AppModel) {}

  async create(createAppDto: CreateAppDto): Promise<App> {
    const createdApp = new this.appModel(createAppDto);
    return await createdApp.save();
  }

  async findAll(): Promise<App[]> {
    return await this.appModel.find().exec();
  }
}