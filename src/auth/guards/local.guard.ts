import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('order of bening call first when use fx login (localguard)', 1);
    return super.canActivate(context); // Triggers LocalStrategy's validate method
  }
}
