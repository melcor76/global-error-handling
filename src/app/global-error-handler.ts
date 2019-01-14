import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  handleError(error) {
    console.log('global error handler', error);
    
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}