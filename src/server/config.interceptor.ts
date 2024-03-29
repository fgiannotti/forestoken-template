// ./src/server/config.interceptor.ts
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CONFIG } from './config';

@Injectable()
export class ConfigInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        return next.handle().pipe(
            map((data) => ({
                ...data,
                config: CONFIG,
            })),
        );
    }
}