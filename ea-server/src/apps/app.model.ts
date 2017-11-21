import { prop, Typegoose } from 'typegoose';

class App extends Typegoose {
    @prop() name: string;
    @prop() description?: string;
}

export default new App().getModelForClass(App);