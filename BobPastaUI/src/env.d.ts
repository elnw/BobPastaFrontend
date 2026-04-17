interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * API URL for BobPasta
   */
  readonly NG_APP_API_URL: string;
  [key: string]: any;
}
