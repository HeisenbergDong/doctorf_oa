import request from '@/utils/request'

// 查询分诊室排队列表
export function listWait(query) {
  return request({
    url: '/doc/wait/list',
    method: 'get',
    params: query
  })
}

// 其他诊室排队列表
export function consultingWaitListApi(query) {
  return request({
    url: '/doc/wait/dispatch/list',
    method: 'get',
    params: query
  })
}

// 查询排队详细
export function getWait(id) {
  return request({
    url: '/doc/wait/' + id,
    method: 'get'
  })
}

// 指派排队
export function addWait(data) {
  return request({
    url: '/doc/wait/dispatch',
    method: 'post',
    data: data
  })
}

// 叫号
export function callWait(data) {
  return request({
    url: '/doc/wait/call',
    method: 'post',
    data: data
  })
}

// 修改排队
export function updateWait(data) {
  return request({
    url: '/doc/wait',
    method: 'put',
    data: data
  })
}

// 删除排队
export function delWait(id) {
  return request({
    url: '/doc/wait/' + id,
    method: 'delete'
  })
}
