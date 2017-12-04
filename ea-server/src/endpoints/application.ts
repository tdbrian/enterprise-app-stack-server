import { Validator } from "validator.ts/Validator";
import { IsLength, IsBoolean } from "validator.ts/decorator/Validation";
import * as _ from 'lodash';

export class Application {
    id: string;

    @IsLength(2, 120)
    name: string;

    @IsLength(2, 400)
    description: string;

    @IsLength(2, 60)
    type: string;

    createdDate: Date;

    @IsLength(2, 120)
    createdBy: string;

    @IsBoolean()
    deleted: boolean;
}

export const validateApplication = (app: Application) => {
    return new Validator().validate(_.merge(new Application(), app));
}