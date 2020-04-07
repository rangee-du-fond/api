import { EnvVar, Config } from './core.d';
import { getEnvDefaultValue } from './expected-env';

export const createConfig = (expectedEnvVariables: EnvVar[]): Config => {
  return {
    serverPort: process.env.PORT || getEnvDefaultValue(expectedEnvVariables, 'PORT'),
    db: {
      host: process.env.PG_HOST || getEnvDefaultValue(expectedEnvVariables, 'PG_HOST'),
      port: process.env.PG_PORT || getEnvDefaultValue(expectedEnvVariables, 'PG_PORT'),
      name: process.env.PG_DATABASE || getEnvDefaultValue(expectedEnvVariables, 'PG_DATABASE'),
      user: process.env.PG_USER || getEnvDefaultValue(expectedEnvVariables, 'PG_USER'),
      password: process.env.PG_PASSWORD || getEnvDefaultValue(expectedEnvVariables, 'PG_PASSWORD'),
    },
  };
};
