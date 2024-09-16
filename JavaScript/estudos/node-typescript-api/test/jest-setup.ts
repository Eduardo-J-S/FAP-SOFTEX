import { SetupServer } from '@src/server';
import supertest from 'supertest';
// import path from 'path';
// import {
//   DockerComposeEnvironment,
//   StartedDockerComposeEnvironment,
//   Wait,
// } from 'testcontainers';

// const composeFilePath = path.resolve(__dirname, '..');
// const composeFile = 'docker-compose.yml';
// let environment: StartedDockerComposeEnvironment;

// let server: SetupServer;

// jest.setTimeout(20000);

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});

// afterAll(async () => {
//   await server.close();
//   await environment.down();
// });
