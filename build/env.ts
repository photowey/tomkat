import path from "path";

// ----------------------------------------------------------------

const TAURI_APP_ENV_DEV = "development";
const TAURI_APP_ENV_TEST = "test";
const TAURI_APP_ENV_STAGE = "stage";
const TAURI_APP_ENV_PROD = "production";

// ----------------------------------------------------------------

export function isDevFn(mode: string): boolean {
  return TAURI_APP_ENV_DEV === mode;
}

export function isTestFn(mode: string): boolean {
  return TAURI_APP_ENV_TEST === mode;
}

export function isStageFn(mode: string): boolean {
  return TAURI_APP_ENV_STAGE === mode;
}

export function isProdFn(mode: string): boolean {
  return TAURI_APP_ENV_PROD === mode;
}

// ----------------------------------------------------------------

/**
 * Get user root directory
 *
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}
