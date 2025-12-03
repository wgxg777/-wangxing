

export enum SelectedItemType {
  /**
   * 组织
   */
  ORG = 'ORG',
  /**
   * 员工
   */
  USER = 'USER',
  /**
   * 外部员工
   */
  EXTERNAL = 'EXTERNAL',
  /**
   * 岗位
   */
  POSITION = 'POSITION',
  /**
   * 职务
   */
  DUTY = 'DUTY',

  /**
   * 排除员工
   */
  EX_EMPLOYEE = 'EX_EMPLOYEE',

  /**
   * 角色
   */
  ROLE = 'ROLE',

  /**
   * 角色分组
   */
  ROLE_GROUP = 'ROLE_GROUP',
  /**
   * 演示账号
   */
  PUBLIC = 'PUBLIC',
}

/**
 * @description 根据类型获取图标
 * @param type 类型
 * @returns {string} 图标
 */
export function getIcon(type: SelectedItemType) {
  switch (type) {
    // case SelectedItemType.EMPLOYEE:
    //   return 'icon_common_user_principal'
    case SelectedItemType.ORG:
      return 'onebase-suoshuzuzhi'
    case SelectedItemType.POSITION:
      return 'icon_common_user_principal'
    case SelectedItemType.ROLE_GROUP:
      return 'onebase-jiaose'
    case SelectedItemType.ROLE:
      return 'onebase-yonghu'
    default:
      return ''
  }
}