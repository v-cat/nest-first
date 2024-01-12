"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoffeesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coffees_dto_1 = require("./create-coffees.dto");
class UpdateCoffeesDto extends (0, mapped_types_1.PartialType)(create_coffees_dto_1.CreateCoffeesDto) {
}
exports.UpdateCoffeesDto = UpdateCoffeesDto;
//# sourceMappingURL=update-coffees.dto.js.map