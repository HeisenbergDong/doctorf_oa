import request from '@/utils/request'

// 查询阈值列表
export function listWarning(query) {
  return request({
    url: '/doc/warning/list',
    method: 'get',
    params: query
  })
}

// 查询阈值详细
export function getWarning(id) {
  return request({
    url: '/doc/warning/' + id,
    method: 'get'
  })
}

// 新增阈值
export function addWarning(data) {
  return request({
    url: '/doc/warning',
    method: 'post',
    data: data
  })
}

// 修改阈值
export function updateWarning(data) {
  return request({
    url: '/doc/warning',
    method: 'put',
    data: data
  })
}

// 删除阈值
export function delWarning(id) {
  return request({
    url: '/doc/warning/' + id,
    method: 'delete'
  })
}
