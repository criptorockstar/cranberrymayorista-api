import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RefreshUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.refreshUser;
  },
);
