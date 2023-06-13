<template>
  <!-- 数据导入 -->
  <div>
    <div class="app-container">
      <el-row>
        <el-col class="card-box">
          <el-card class="form_card" shadow="never">
            <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
              <div class="flex-row just-between">
                <div>
                  <el-form-item label="文件名" prop="fileName">
                    <el-input v-model="queryParams.fileName" placeholder="请输入" clearable style="width: 240px"
                      @keyup.enter="handleQuery" />
                  </el-form-item>
                  <el-form-item class="ml24">
                    <el-button @click="resetQuery">重置</el-button>
                    <el-button type="primary" @click="handleQuery">查询</el-button>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="" shadow="never">
            <el-row :gutter="10" class="mb8">
              <el-col :span="1.5">
                <el-button type="primary" plain icon="Plus" @click="handleAdd"
                  v-hasPermi="['dataManagement:dataImport:add']">新增</el-button>
              </el-col>
              <el-col :span="1.5">
                <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete"
                  v-hasPermi="['dataManagement:dataImport:remove']">删除</el-button>
              </el-col>
              <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
            </el-row>

            <el-table :data="typeList" @selection-change="handleSelectionChange" v-loading="loading">
              <el-table-column type="selection" width="55" align="center" />
              <el-table-column label="文件" align="left" prop="fileName" />
              <el-table-column label="操作" align="center" width="160" class-name="small-padding fixed-width">
                <template #default="scope">
                  <!-- <el-button
                  link
                  type="primary"
                  icon="Edit"
                  @click="handleUpdate(scope.row)"
                  v-hasPermi="['dataManagement:dataImport:edit']"
                  >提醒
                </el-button> -->
                  <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                    v-hasPermi="['system:dict:edit']">修改</el-button>
                  <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"
                    v-hasPermi="['system:dict:remove']">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <!-- <pagination
         v-show="total > 0"
         :total="total"
         v-model:page="queryParams.pageNum"
         v-model:limit="queryParams.pageSize"
         @pagination="getList"
      /> -->

      <!-- 添加或修改参数配置对话框 -->
      <el-dialog :title="title" v-model="open" width="500px">
        <el-form ref="dataRef" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="上传附件">
            <UploadFile ref="fileUpload" :modelValue="fileList" @uploadChange="onchange" :limit="1" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="submitForm">确 定</el-button>
            <el-button @click="cancel">取 消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script setup name="Dict">
import useDictStore from "@/store/modules/dict";
import {
  listFile,
  getFile,
  addFile,
  updateFile,
  delFile,
} from "@/api/system/file";

import UploadFile from "@/components/FileUpload/index.vue";
import { ElMessage } from 'element-plus'

const { proxy } = getCurrentInstance();
const { sys_normal_disable } = proxy.useDict("sys_normal_disable");

const typeList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");
const dateRange = ref([]);
const fileUpload = ref();
const fileList = ref([]);
const isUpdate = ref(false);

const data = reactive({
  form: {
    id: null,
    fileUrl: null,
    fileName: null,
  },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    fileUrl: null,
    fileName: null,
  },
  rules: {},
});

const { queryParams, form, rules } = toRefs(data);

/** 查询列表 */
function getList() {
  loading.value = true;
  listFile(proxy.addDateRange(queryParams.value, dateRange.value)).then(
    (response) => {
      typeList.value = response.rows;
      total.value = response.total;
      loading.value = false;
      console.log("object :>> ", response.rows);
    }
  );
  // typeList.value = new Array(25).fill("").map((el, idx) => ({
  //   name: "患者" + idx,
  //   gender: idx % 2 ? "女" : "男",
  //   age: idx,
  //   phone: "电话号码" + idx,
  //   isFirstVisit: "是",
  //   isOrder: idx % 2 ? "是" : "否",
  //   orderTime: idx % 2 ? "2023-05-10 10:10:10.00 " : "-",
  //   fileInfo: " 20230513.pdf",
  //   remark: "备注" + idx,
  //   creatAt: "2023-05-10 10:10:10.00 ",
  //   isShow: idx % 2 ? true : false,
  // }));
}
/** 取消按钮 */
function cancel() {
  console.log('fileUpload.value', fileUpload.value);
  open.value = false;
  reset();
}
/** 表单重置 */
function reset() {
  form.value = {
    id: null,
    fileUrl: null,
    fileName: null,
  };
  proxy.resetForm("dataRef");
  fileList.value = [];
}
/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}
/** 重置按钮操作 */
function resetQuery() {
  dateRange.value = [];
  proxy.resetForm("queryRef");
  handleQuery();
}
/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加文件";
}
/** 多选框选中数据 */
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}
/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const fileId = row.id || ids.value;
  isUpdate.value = true;
  getFile(fileId).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改文件";
  });
}
/** 提交按钮 */
async function submitForm() {
  if (!fileList.value.length) {

    proxy.$modal.msgError(`未上传文件！`);

    return;
  }
  console.log('fileUpload.value', fileList.value);
  if (isUpdate.value) {
    const { name: fileName, url: fileUrl } = fileList.value[0];
    const id = form.value.id;
    updateFile({
      id, fileName, fileUrl
    }).then(res => {
      if (res.code === 200) {
        proxy.$modal.msgSuccess(`修改成功！`);
        handleQuery();
        open.value = false;
        reset();
        isUpdate.value = false;

      }

    })
    return;
  }
  const { name: fileName, url: fileUrl } = fileList.value[0]
  addFile({ fileName, fileUrl }).then(res => {
    if (res.code === 200) {
      proxy.$modal.msgSuccess(`上传成功！`);
      handleQuery();
      open.value = false;
      reset();
    }
  })
}
/** 删除按钮操作 */
function handleDelete(row) {
  const fileId = row.id || ids.value;
  proxy.$modal
    .confirm('是否确认删除文件编号为"' + fileId + '"的数据项？')
    .then(function () {
      return delFile(fileId);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess("删除成功");
    })
    .catch(() => { });
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    "system/file/export",
    {
      ...queryParams.value,
    },
    `dict_${new Date().getTime()}.xlsx`
  );
}
/** 刷新缓存按钮操作 */
function handleRefreshCache() {
  refreshCache().then(() => {
    proxy.$modal.msgSuccess("刷新成功");
    useDictStore().cleanDict();
  });
}
function updateFileFid(e, obj, val) {
  console.log(e, obj, val);
};
const onchange = (val) => {
  console.log('onchange -- val === ', val)
  fileList.value = val;
}
getList();
</script>
<style lang="scss">
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>
