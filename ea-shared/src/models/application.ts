import { Validator } from "validator.ts/Validator";
import { IsLength, IsDate, IsBoolean } from "validator.ts/decorator/Validation";

export class Application {
    id: string;

    @IsLength(2, 120) 
    name: string;
    
    @IsLength(2, 400) 
    description: string;

    @IsDate()
    createdDate: Date;

    @IsLength(2, 120)
    createdBy: string;

    @IsBoolean()
    deleted: boolean;
}

export const validateApplication = (app: Application) => {
    let validator = new Validator();
    let errors = validator.validate(app);
    return errors;
}