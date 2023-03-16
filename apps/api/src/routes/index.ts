import { FastifyInstance, RouteOptions } from "fastify";

const routes: RouteOptions[] = [];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
