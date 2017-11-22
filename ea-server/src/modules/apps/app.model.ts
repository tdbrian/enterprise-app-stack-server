import { prop, Typegoose } from 'typegoose';
import { Component } from '@nestjs/common';

@Component()
export class App extends Typegoose {
    @prop({ required: true }) name: string;
    @prop() description?: string;
}

export const AppModel = new App().getModelForClass(App);