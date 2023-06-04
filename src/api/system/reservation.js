import request from '@/utils/request'

// 查询预约列表
export function listReservation(query) {
  return request({
    url: '/doc/reservation/list',
    method: 'get',
    params: query
  })
}

// 查询预约详细
export function getReservation(id) {
  return request({
    url: '/doc/reservation/' + id,
    method: 'get'
  })
}

// 新增预约
export function addReservation(data) {
  return request({
    url: '/doc/reservation',
    method: 'post',
    data: data
  })
}

// 修改预约
export function updateReservation(data) {
  return request({
    url: '/doc/reservation',
    method: 'put',
    data: data
  })
}

// 删除预约
export function delReservation(id) {
  return request({
    url: '/doc/reservation/' + id,
    method: 'delete'
  })
}
