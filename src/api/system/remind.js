import request from '@/utils/request'

// 查询提醒列表
export function listRemind(query) {
  return request({
    url: '/doc/remind/list',
    method: 'get',
    params: query
  })
}

// 查询提醒详细
export function getRemind(id) {
  return request({
    url: '/doc/remind/' + id,
    method: 'get'
  })
}

// 新增提醒
export function addRemind(data) {
  return request({
    url: '/doc/remind',
    method: 'post',
    data: data
  })
}

// 修改提醒
export function updateRemind(data) {
  return request({
    url: '/doc/remind',
    method: 'put',
    data: data
  })
}

// 删除提醒
export function delRemind(id) {
  return request({
    url: '/doc/remind/' + id,
    method: 'delete'
  })
}
