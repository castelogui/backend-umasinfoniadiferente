export class CreateUserDto {
  /**
   * Utilizado para identificar o user
   * @example 1
   */
  id?: number;
  /**
   * Utilizado para nomear o user
   * @example 'João Silva'
   */
  name: string;
  /**
   * Utilizado para o login do user
   * @example email@email.com
   */
  email: string;
  /**
   * Utilizado para o login do user
   * @example @#Abc12345
   */
  password: string;
  /**
   * Utilizado para saber quando o user foi criado
   * @example 2023-09-17T05:09:53.335Z
   */
  createdAt?: Date;
  /**
   * Utilizado para saber quando o user foi atualizado
   * @example 2023-09-17T05:09:53.335Z
   */
  updatedAt?: Date;
  /**
   * Utilizado para identificar as permissões do user
   * @example 1
   */
  roleId: number;
  /**
   * Utilizado para identificar se o user esta ativo ou nao
   * @example true | false
   */
  status?: boolean;
}
