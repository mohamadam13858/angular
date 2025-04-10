import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('خطا خطا خطا خطا خطا خطا خطا')
        console.log(error);
    }
}