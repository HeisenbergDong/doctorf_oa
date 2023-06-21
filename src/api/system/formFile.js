/*
 * @Author: upeartaker 123@123.com
 * @Date: 2023-06-18 11:58:53
 * @LastEditors: yudong yudong@dlaero.com
 * @LastEditTime: 2023-06-21 09:55:46
 * @FilePath: \doctorf_oa\src\api\system\formFile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 新增表单文件
export function addFormFile(data) {
  return request({
    url: '/upload',
    method: 'post',
    data: data
  })
}

// 下载表单文件
export function updateFormFile(data) {
  return request({
    url: '/download',
    method: 'get',
    data: data
  })
}

// 删除表单文件
export function delFormFile(id) {
  return request({
    url: '/del' + id,
    method: 'delete'
  })
}

// 获取患者信息
export function getPatientInfo(id) {
  return request({
    url: `/doc/wait/${id}`,
    method: 'get'
  })
}
