declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      URL: string;
      ORIGIN: string;
    }
  }
}

export {};
