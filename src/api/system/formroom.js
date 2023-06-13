import request from '@/utils/request'

// 查询单列表
export function listRoomForm(query) {
  return request({
    url: '/doc/room/form/list',
    method: 'get',
    params: query
  })
}

// 查询单详细
export function getRoomForm(id) {
  return request({
    url: '/doc/room/form/' + id,
    method: 'get'
  })
}

// 新增单
export function addRoomForm(data) {
  return request({
    url: '/doc/room/form',
    method: 'post',
    data: data
  })
}

// 修改单
export function updateRoomForm(data) {
  return request({
    url: '/doc/room/form',
    method: 'put',
    data: data
  })
}

// 删除单
export function delRoomForm(id) {
  return request({
    url: '/doc/room/form/' + id,
    method: 'delete'
  })
}
