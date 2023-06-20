/*
 * @Author: upeartaker 123@123.com
 * @Date: 2023-06-19 17:15:07
 * @LastEditors: upeartaker 123@123.com
 * @LastEditTime: 2023-06-20 07:39:30
 * @FilePath: \doctorf_oa\src\api\system\settingApi.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 查询诊室和单类型关联关系列表
export function getSettingListApi(query) {
  return request({
    url: `/doc/room/form/list`,
    method: 'get',
    params: query
  })
}

// 新增检查项
export function addSettingApi(data) {
	return request({
		url: '/doc/room/form',
		method: 'POST',
		data: data
	})
}

// 修改检查项
export function updateSettingApi(data) {
  return request({
    url: '/doc/room/form',
    method: 'put',
    data: data
  })
}

// 删除检查项
export function delSettingApi(ids) {
  return request({
    url: `/doc/room/form/${ids}`,
    method: 'delete'
  })
}

