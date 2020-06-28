"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskModel = void 0;
class CreateTaskModel {
    constructor(createTaskRequest, authorId) {
        this.createTaskRequest = createTaskRequest;
        this.authorId = authorId;
    }
    get() {
        const { content, images, tips, title, tags } = this.createTaskRequest;
        return {
            content,
            title,
            images: images ? images : [],
            tips: tips ? tips : [],
            tags: tags ? tags : [],
            _user: this.authorId,
            _solutions: [],
            repo: '',
            rating: 0,
            difficulty: 0,
            reviewCount: 0,
        };
    }
}
exports.CreateTaskModel = CreateTaskModel;
//# sourceMappingURL=CreateTask.js.map