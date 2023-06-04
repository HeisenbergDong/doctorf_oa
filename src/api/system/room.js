import request from '@/utils/request'

// 查询诊室列表
export function listRoom(query) {
  return request({
    url: '/system/room/list',
    method: 'get',
    params: query
  })
}

// 查询诊室详细
export function getRoom(id) {
  return request({
    url: '/system/room/' + id,
    method: 'get'
  })
}

// 新增诊室
export function addRoom(data) {
  return request({
    url: '/system/room',
    method: 'post',
    data: data
  })
}

// 修改诊室
export function updateRoom(data) {
  return request({
    url: '/system/room',
    method: 'put',
    data: data
  })
}

// 删除诊室
export function delRoom(id) {
  return request({
    url: '/system/room/' + id,
    method: 'delete'
  })
}
