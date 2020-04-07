export type EnvVar = {
  name: string;
  default?: string;
};

export type Config = {
  serverPort: string;
  db: {
    host: string;
    port: string;
    name: string;
    user: string;
    password: string;
  };
};
