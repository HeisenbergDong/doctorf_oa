import request from '@/utils/request'

// 查询就诊列表
export function listVisit(query) {
  return request({
    url: '/doc/visit/list',
    method: 'get',
    params: query
  })
}

// 查询就诊详细
export function getVisit(id) {
  return request({
    url: '/doc/visit/' + id,
    method: 'get'
  })
}

// 新增就诊
export function addVisit(data) {
  return request({
    url: '/doc/visit',
    method: 'post',
    data: data
  })
}

// 修改就诊
export function updateVisit(data) {
  return request({
    url: '/doc/visit',
    method: 'put',
    data: data
  })
}

// 删除就诊
export function delVisit(id) {
  return request({
    url: '/doc/visit/' + id,
    method: 'delete'
  })
}
