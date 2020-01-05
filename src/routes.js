import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";

import authMiddlewere from "./app/middlewares/auth";
import AppointmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";
import NotificationController from "./app/controllers/NotificationController";
import AvailableController from "./app/controllers/AvailableController";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store); //Logar
routes.post("/users", UserController.store); // Criar User

routes.use(authMiddlewere);

routes.put("/users", UserController.update); // Atualizar User

routes.get("/providers", ProviderController.index); // Listar prestador de serviço
routes.get("/providers/:providerId/available", AvailableController.index); // Listar horários disponíveis em um dado dia de uma prestador

routes.get("/appointments", AppointmentController.index); // Listar agendamentos do usuário
routes.post("/appointments", AppointmentController.store); // Cadastrar agendamentos
routes.delete("/appointments/:id", AppointmentController.delete); // Cancelar agendamentos

routes.get("/schedule", ScheduleController.index); // Listar agendamentos do prestador de serviço

routes.get("/notifications", NotificationController.index); // Listar notificações
routes.put("/notifications/:id", NotificationController.update); // Editar notificação como lida

routes.post("/files", upload.single("file"), FileController.store); // Fazer upload de arquivos
export default routes;
