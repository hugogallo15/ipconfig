export interface User_Session_Post_Body {
  username: string;
  password: string;
  expiresIn?: number;
  cookie?: string;
}

// SessionResource related interfaces
export type Permission = 'live' | 'playback' | 'ptz' | 'export' | 'stats' | 'config' | 'talk';

export type SessionType = 'user' | 'remote';

export interface StringResourceLink {
  href: string;
  id: string;
}

export interface CameraScope {
  id: number;
  scope: Permission[];
}

export interface Scope {
  baseScope: Permission[];
  cameraScopes: CameraScope[];
}

export interface SessionResource {
  type: SessionType;
  id: string;
  href: string;
  name: string;
  role: string;
  scope: Scope;
  owner: StringResourceLink;
  expiresIn: number;
  userId: string;
}
