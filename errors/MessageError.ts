import {BaseError} from "./BaseError";

export class MessageError extends BaseError {
    constructor(errorString: string) {
        super(errorString, 501, MessageError.name);
    }
}