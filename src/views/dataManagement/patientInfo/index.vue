<template>
  <!-- 患者信息管理 -->
  <div>
    <div class="app-container">
      <el-row>
        <el-col class="card-box">
          <el-card class="form_card" shadow="never">
            <el-form
              :model="queryParams"
              ref="queryRef"
              :inline="true"
              v-show="showSearch"
              label-width="100px"
            >
              <div class="flex-row just-between">
                <div>
                  <el-form-item label="患者姓名" prop="name">
                    <el-input
                      v-model="queryParams.name"
                      placeholder="请输入患者姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="患者电话" prop="phone">
                    <el-input
                      v-model="queryParams.phone"
                      placeholder="请输入患者电话"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="患者身份证" prop="idCard">
                    <el-input
                      v-model="queryParams.idCard"
                      placeholder="请输入患者身份证"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="是否黑名单" prop="black">
                    <el-select
                      v-model="queryParams.black"
                      placeholder="请选择"
                      @keyup.enter="handleQuery"
                      style="width: 240px"
                    >
                      <el-option
                        v-for="item in option"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="是否新患者" prop="newPatient">
                    <el-select
                      v-model="queryParams.newPatient"
                      placeholder="请选择"
                      @keyup.enter="handleQuery"
                      style="width: 240px"
                    >
                      <el-option
                        v-for="item in option"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="ml24">
                    <el-button @click="resetQuery">重置</el-button>
                    <el-button type="primary" @click="handleQuery"
                      >查询</el-button
                    >
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
                <el-button
                  type="primary"
                  plain
                  icon="Plus"
                  @click="handleAdd"
                  v-hasPermi="['dataManagement:patientInfo:add']"
                  >新增</el-button
                >
              </el-col>
              <!-- <el-col :span="1.5">
              <el-button
                type="success"
                plain
                icon="Edit"
                :disabled="single"
                @click="handleUpdate"
                v-hasPermi="['dataManagement:patientInfo:edit']"
                >修改</el-button
              >
            </el-col> -->
              <el-col :span="1.5">
                <el-button
                  type="danger"
                  plain
                  icon="Delete"
                  :disabled="multiple"
                  @click="handleDelete"
                  v-hasPermi="['dataManagement:patientInfo:remove']"
                  >删除</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button
                  type="warning"
                  plain
                  icon="Download"
                  @click="handleExport"
                  v-hasPermi="['dataManagement:patientInfo:export']"
                  >导出</el-button
                >
              </el-col>
              <!-- <el-col :span="1.5">
                <el-button
                  type="danger"
                  plain
                  icon="Refresh"
                  @click="handleRefreshCache"
                  v-hasPermi="['dataManagement:patientInfo:remove']"
                  >刷新缓存</el-button
                >
              </el-col> -->
              <right-toolbar
                v-model:showSearch="showSearch"
                @queryTable="getList"
              ></right-toolbar>
            </el-row>

            <el-table
              :data="typeList"
              @selection-change="handleSelectionChange"
              style="width: 100%"
              v-loading="loading"
            >
              <el-table-column type="selection" width="55" align="center" />
              <el-table-column
                label="患者姓名"
                align="center"
                width="120"
                fixed="left"
                prop="name"
              />
              <el-table-column
                label="患者电话"
                align="center"
                prop="phone"
                width="120"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="患者身份证"
                align="center"
                width="220"
                prop="idCard"
                :show-overflow-tooltip="true"
              >
              </el-table-column>
              <el-table-column
                label="是否黑名单"
                align="center"
                prop="black"
                width="120"
              >
                <template #default="scope">
                  <span>{{ scope.row.black === "0" ? "否" : "是" }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="是否是否新患者"
                align="center"
                width="120"
                prop="newPatient"
              >
                <template #default="scope">
                  <span>{{ scope.row.black === "0" ? "否" : "是" }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="备注"
                minWidth="220"
                align="center"
                prop="remark"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="操作"
                align="center"
                fixed="right"
                width="160"
                class-name="small-padding fixed-width"
              >
                <template #default="scope">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleUpdate(scope.row)"
                    v-hasPermi="['dataManagement:patientInfo:edit']"
                    >修改</el-button
                  >
                  <el-button
                    link
                    type="primary"
                    icon="Delete"
                    @click="handleDelete(scope.row)"
                    v-hasPermi="['dataManagement:patientInfo:remove']"
                    >删除</el-button
                  >
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
      <el-dialog :title="title" v-model="open" width="600px" append-to-body>
        <el-form ref="dataRef" :model="form" :rules="rules" label-width="110px">
          <el-form-item label="患者姓名" prop="name" class="mr24">
            <el-input v-model="form.name" placeholder="请输入患者姓名" />
          </el-form-item>
          <el-form-item label="患者电话" prop="phone" class="mr24">
            <el-input v-model="form.phone" placeholder="请输入患者电话" />
          </el-form-item>
          <el-form-item label="患者身份证" prop="idCard" class="mr24">
            <el-input v-model="form.idCard" placeholder="请输入患者身份证" />
          </el-form-item>
          <el-form-item label="是否黑名单" prop="black" class="mr24">
            <el-select v-model="form.black" placeholder="请选择" class="w100i">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="是否新患者" prop="newPatient" class="mr24">
            <el-select v-model="form.newPatient" placeholder="请选择" class="w100i">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="备注" prop="remark" class="mr24">
            <el-input
              v-model="form.remark"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 3 }"
              placeholder="请输入内容"
            ></el-input>
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

<script setup name="Patient">
import useDictStore from "@/store/modules/dict";

import {
  listPatient,
  getPatient,
  delPatient,
  addPatient,
  updatePatient,
} from "@/api/system/patient";

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
const option = ref([
  {
    value: "0",
    label: "否",
  },
  {
    value: "1",
    label: "是",
  },
]);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    name: null,
    phone: null,
    idCard: null,
    black: null,
    newPatient: null,
  },
  rules: {
    dictName: [
      { required: true, message: "字典名称不能为空", trigger: "blur" },
    ],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询列表 */
function getList() {
  loading.value = true;
  listPatient(proxy.addDateRange(queryParams.value)).then((response) => {
    typeList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
}
/** 取消按钮 */
function cancel() {
  open.value = false;
  reset();
}
/** 表单重置 */
function reset() {
  form.value = {
    id: null,
    name: null,
    phone: null,
    idCard: null,
    black: null,
    newPatient: null,
    delFlag: null,
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
  };
  proxy.resetForm("dataRef");
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
  title.value = "添加患者信息";
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
  const patientId = row.id || ids.value;
  getPatient(patientId).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改患者信息";
  });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dataRef"].validate((valid) => {
    if (valid) {
      if (form.value.id != undefined) {
        updatePatient(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addPatient(form.value).then((response) => {
          proxy.$modal.msgSuccess("新增成功");
          open.value = false;
          getList();
        });
      }
    }
  });
}
/** 删除按钮操作 */
function handleDelete(row) {
  const patientId = row.id || ids.value;
  proxy.$modal
    .confirm('是否确认删除患者信息编号为"' + patientId + '"的数据项？')
    .then(function () {
      return delPatient(patientId);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess("删除成功");
    })
    .catch(() => {});
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    "doc/patient/export",
    {
      ...queryParams.value,
    },
    `patient_${new Date().getTime()}.xlsx`
  );
}
/** 刷新缓存按钮操作 */
function handleRefreshCache() {
  refreshCache().then(() => {
    proxy.$modal.msgSuccess("刷新成功");
    useDictStore().cleanDict();
  });
}

getList();
</script>
<style lang="scss">
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>
