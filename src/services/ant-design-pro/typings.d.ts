// @ts-ignore
/* eslint-disable */

declare namespace API {
  /**
   * 统一响应结果
   */
  type Response<T> = {
    code: number;
    message: string;
    data?: T
  }

  type CurrentUser = {
    id?: number;
    username?: string;
    nickname?: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    // 性别 0 男 1 女
    gender?: number;
    // 状态 0 正常 1封号
    status?: number;
    createTime?: Date;
    // 角色 0 - 普通用户 1 - 管理员
    role?: number;
    // 星球编号
    planetCode?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
  };

  type RegisterParams = {
    username?: string;
    password?: string;
    passwordConfirmation?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
