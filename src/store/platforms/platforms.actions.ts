import { Platform } from './types/platform.interface';

export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';
export const FETCH_PLATFORMS_SUCCESS = 'FETCH_PLATFORMS_SUCCESS';
export const FETCH_PLATFORMS_FAILED = 'FETCH_PLATFORMS_FAILED';

export function fetchPlatforms() {
  return { type: FETCH_PLATFORMS };
}

export function fetchPlatformsSuccess(platforms: Platform[]) {
  return { type: FETCH_PLATFORMS_SUCCESS, platforms };
}

export function fetchPlatformsFailed(error: any) {
  return { type: FETCH_PLATFORMS_FAILED, error };
}
