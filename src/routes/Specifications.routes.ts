import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});


export { specificationRoutes }
