import request from '@/utils/request'

// 查询单列表
export function listForm(query) {
  return request({
    url: '/doc/form/list',
    method: 'get',
    params: query
  })
}

// 查询单详细
export function getForm(id) {
  return request({
    url: '/doc/form/' + id,
    method: 'get'
  })
}

// 新增单
export function addForm(data) {
  return request({
    url: '/doc/form',
    method: 'post',
    data: data
  })
}

// 修改单
export function updateForm(data) {
  return request({
    url: '/doc/form',
    method: 'put',
    data: data
  })
}

// 删除单
export function delForm(id) {
  return request({
    url: '/doc/form/' + id,
    method: 'delete'
  })
}
