"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizerRoutes = void 0;
const express_1 = require("express");
const CreateOrganizerController_1 = require("../modules/organizer/useCases/createOrganizer/CreateOrganizerController");
const createValidationMiddleware_1 = require("../shared/middlewares/createValidationMiddleware");
const validators_1 = require("../shared/validators");
// import { createOrganizerMiddleware } from "../shared/middlewares/createOrganizerMiddleware";
const organizerRoutes = (0, express_1.Router)();
exports.organizerRoutes = organizerRoutes;
const createOrganizerController = new CreateOrganizerController_1.CreateOrganizerController();
organizerRoutes.post("/", (0, createValidationMiddleware_1.createValidation)(validators_1.createOrganizerSchema), createOrganizerController.handle);
