export const getMenus = (params: any) => {
  console.log("getMenus", params);
  return Promise.resolve({
    success: true,
    data: [
      {
        id: 1,
        permissionName: "申请记录管理",
        path: "/apply-history",
        parentId: undefined,
      },
      { id: 2, permissionName: "用户管理", path: "/user", parentId: undefined },
      {
        id: 3,
        permissionName: "操作流管理",
        path: "/actions",
        parentId: undefined,
      },
      { id: 12, permissionName: "字典管理", path: "/dict", parentId: 3 },
      { id: 13, permissionName: "接口管理", path: "/interface", parentId: 3 },
      { id: 14, permissionName: "操作流", path: "/actions-list", parentId: 3 },
      {
        id: 4,
        permissionName: "审批流管理",
        path: "/workflow",
        parentId: undefined,
      },
    ],
  });
};
