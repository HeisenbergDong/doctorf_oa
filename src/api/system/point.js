import request from '@/utils/request'

// 查询推荐人折扣积分列表
export function listPoint(query) {
  return request({
    url: '/doc/point/list',
    method: 'get',
    params: query
  })
}

// 查询推荐人折扣积分详细
export function getPoint(id) {
  return request({
    url: '/doc/point/' + id,
    method: 'get'
  })
}

// 新增推荐人折扣积分
export function addPoint(data) {
  return request({
    url: '/doc/point',
    method: 'post',
    data: data
  })
}

// 修改推荐人折扣积分
export function updatePoint(data) {
  return request({
    url: '/doc/point',
    method: 'put',
    data: data
  })
}

// 删除推荐人折扣积分
export function delPoint(id) {
  return request({
    url: '/doc/point/' + id,
    method: 'delete'
  })
}
