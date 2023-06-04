import request from '@/utils/request'

// 查询挂号列表
export function listReg(query) {
  return request({
    url: '/doc/reg/list',
    method: 'get',
    params: query
  })
}

// 查询挂号详细
export function getReg(id) {
  return request({
    url: '/doc/reg/' + id,
    method: 'get'
  })
}

// 新增挂号
export function addReg(data) {
  return request({
    url: '/doc/reg',
    method: 'post',
    data: data
  })
}

// 修改挂号
export function updateReg(data) {
  return request({
    url: '/doc/reg',
    method: 'put',
    data: data
  })
}

// 删除挂号
export function delReg(id) {
  return request({
    url: '/doc/reg/' + id,
    method: 'delete'
  })
}
