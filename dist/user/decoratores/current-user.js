"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const req = context.switchToHttp().getRequest();
    console.log(req.session.userId);
    return "hi";
});
//# sourceMappingURL=current-user.js.map