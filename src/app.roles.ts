import { RolesBuilder } from 'nest-access-control';
export enum AppRoles {
  AUTHOR = 'AUTHOR',
  ADMIN = 'ADMIN',
}

export enum AppResources {
  USER = 'USER',
  ENTRY = 'ENTRY',
}

export const roles: RolesBuilder = new RolesBuilder();

roles

  //*AUTHOR ROLES
  .grant(AppRoles.AUTHOR)
  .updateOwn([AppResources.USER])
  .deleteOwn([AppResources.USER])
  .readOwn([AppResources.ENTRY])
  .createOwn([AppResources.ENTRY])
  .deleteOwn([AppResources.ENTRY])
  .updateOwn([AppResources.ENTRY])

  //*ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.AUTHOR)
  .createAny([AppResources.USER])
  .updateAny([AppResources.USER, AppResources.ENTRY])
  .deleteAny([AppResources.USER, AppResources.ENTRY]);
