"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserModel = void 0;
class CreateUserModel {
    constructor(userProfile) {
        this.userProfile = userProfile;
    }
    get() {
        return {
            githubId: this.userProfile.id,
            login: this.userProfile.displayName,
            photo: this.userProfile.photos ? this.userProfile.photos[0].value : '',
            _solutions: [],
            _tasks: [],
        };
    }
}
exports.CreateUserModel = CreateUserModel;
//# sourceMappingURL=CreateUser.js.map