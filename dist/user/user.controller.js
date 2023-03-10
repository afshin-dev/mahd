"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const auth_service_1 = require("./auth/auth.service");
const user_credential_dto_1 = require("./dtos/user-credential.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const user_service_1 = require("./user.service");
const current_user_1 = require("./decoratores/current-user");
const current_user_interceptor_1 = require("./interceptors/current-user.interceptor");
const only_logged_user_guard_1 = require("./guards/only-logged-user.guard");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    me(user) {
        return user;
    }
    async signup(user, session) {
        const usr = await this.authService.signup(user.email, user.password);
        session.userId = usr.id;
        return usr;
    }
    async signin(user, session) {
        const usr = await this.authService.signin(user.email, user.password);
        session.userId = usr.id;
        return usr;
    }
    signout(session) {
        session.userId = null;
    }
    getOne(id) {
        const NumberId = parseInt(id);
        if (isNaN(NumberId)) {
            return "id not a number";
        }
        return this.userService.findOne(NumberId);
    }
    all(email) {
        if (!email) {
            return [];
        }
        return this.userService.find(email);
    }
    delete(id) {
        const NumberId = parseInt(id);
        if (isNaN(NumberId)) {
            return "id not a number";
        }
        return this.userService.remove(NumberId);
    }
    update(id, userInfo) {
        let NumberId = parseInt(id);
        if (isNaN(NumberId)) {
            return "id not a number";
        }
        return this.userService.update(NumberId, userInfo);
    }
};
__decorate([
    (0, common_1.Get)('/users/me'),
    (0, common_1.UseInterceptors)(current_user_interceptor_1.CurrentUserInterceptor),
    (0, common_1.UseGuards)(only_logged_user_guard_1.OnlyLoggedUserGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "me", null);
__decorate([
    (0, common_1.Post)("/signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_credential_dto_1.UserCredentialDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("/signin"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_credential_dto_1.UserCredentialDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)("/signout"),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signout", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.UseInterceptors)(serialize_interceptor_1.UserSerializeInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "all", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
UserController = __decorate([
    (0, common_1.Controller)('/auth'),
    __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map