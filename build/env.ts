import path from "path";

// ----------------------------------------------------------------

const DEV_ENV = "dev";
const TEST_ENV = "test";
const STAGE_ENV = "stage";
const PROD_ENV = "prod";

// ----------------------------------------------------------------

export function devFn(mode: string): boolean {
  return DEV_ENV === mode;
}

export function testFn(mode: string): boolean {
  return TEST_ENV === mode;
}

export function stageFn(mode: string): boolean {
  return STAGE_ENV === mode;
}

export function prodFn(mode: string): boolean {
  return PROD_ENV === mode;
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
