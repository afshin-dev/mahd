"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSerializeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("../user/dtos/user.dto");
let UserSerializeInterceptor = class UserSerializeInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            const x = (0, class_transformer_1.plainToClass)(user_dto_1.UserDTO, data, { excludeExtraneousValues: true });
            return x;
        }));
    }
};
UserSerializeInterceptor = __decorate([
    (0, common_1.Injectable)()
], UserSerializeInterceptor);
exports.UserSerializeInterceptor = UserSerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map