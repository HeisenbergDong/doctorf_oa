<template>
  <div>
    <!-- 提醒 -->
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
              <div class="flex-row">
                <div>
                  <el-form-item label="提醒时间" prop="remindDate">
                    <el-date-picker
                      clearable
                      v-model="queryParams.remindDate"
                      style="width: 240px"
                      type="datetime"
                      value-format="YYYY-MM-DD HH:mm:ss"
                      placeholder="请选择提醒时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="患者姓名" prop="patientName">
                    <el-input
                      v-model="queryParams.patientName"
                      placeholder="请输入患者姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="患者电话" prop="patientPhone">
                    <el-input
                      v-model="queryParams.patientPhone"
                      placeholder="请输入患者电话"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="提醒医生姓名" prop="docName">
                    <el-input
                      v-model="queryParams.docName"
                      placeholder="请输入提醒医生姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
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
                  v-hasPermi="['system:remind:add']"
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
                v-hasPermi="['system:remind:edit']"
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
                  v-hasPermi="['system:remind:remove']"
                  >取消</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button
                  type="warning"
                  plain
                  icon="Download"
                  @click="handleExport"
                  v-hasPermi="['system:remind:export']"
                  >导出</el-button
                >
              </el-col>
              <!-- <el-col :span="1.5">
                <el-button
                  type="danger"
                  plain
                  icon="Refresh"
                  @click="handleRefreshCache"
                  v-hasPermi="['system:remind:remove']"
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
                width="120"
                fixed="left"
                align="center"
                prop="patientName"
              />
              <el-table-column
                label="患者电话"
                width="120"
                align="center"
                prop="patientPhone"
              />
              <el-table-column
                label="患者身份证"
                width="220"
                align="center"
                prop="patientIdCard"
              />
              <el-table-column
                label="提醒时间"
                align="center"
                prop="remindDate"
                width="220"
              >
              </el-table-column>
              <el-table-column
                label="提醒说明"
                minWidth="220"
                align="center"
                prop="remindContent"
              >
                <template #default="scope">
                  <div v-html="scope.row.remindContent"></div>
                </template>
              </el-table-column>
              <el-table-column
                label="提醒医生姓名"
                width="120"
                align="center"
                prop="docName"
              />
              <el-table-column
                label="备注"
                width="220"
                align="center"
                prop="remark"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="操作"
                align="center"
                fixed="right"
                width="180"
                class-name="small-padding fixed-width"
              >
                <template #default="scope">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleUpdate(scope.row)"
                    v-hasPermi="['system:remind:edit']"
                    >修改
                  </el-button>
                  <el-button
                    link
                    type="primary"
                    icon="Delete"
                    @click="handleDelete(scope.row)"
                    v-hasPermi="['system:remind:remove']"
                    >取消</el-button
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
          <el-form-item label="患者姓名" prop="patientName" class="mr24">
            <el-input
              @focus="handChange"
              v-model="form.patientName"
              placeholder="请输入患者姓名"
            />
          </el-form-item>
          <el-form-item label="患者电话" prop="patientPhone" class="mr24">
            <el-input
              v-model="form.patientPhone"
              placeholder="请输入患者电话"
            />
          </el-form-item>
          <el-form-item label="患者身份证" prop="patientIdCard" class="mr24">
            <el-input
              v-model="form.patientIdCard"
              placeholder="请输入患者身份证"
            />
          </el-form-item>
          <el-form-item label="提醒时间" prop="remindDate" class="mr24">
            <el-date-picker
              clearable
              v-model="form.remindDate"
              class="w100i"
              type="datetime"
              value-format="YYYY-MM-DD HH:mm:ss"
              placeholder="请选择提醒时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="提醒说明"  class="mr24">
            <editor v-model="content" :min-height="192" />
          </el-form-item>
          <el-form-item label="提醒医生姓名" prop="docName" class="mr24">
            <el-input @focus="handChangeDoc" v-model="form.docName" placeholder="请输入提醒医生姓名" />
          </el-form-item>
          <el-form-item label="备注" prop="remark" class="mr24">
            <el-input
              v-model="form.remark"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 3 }"
              placeholder="请输入内容"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="submitForm">确 定</el-button>
            <el-button @click="cancel">取 消</el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 选择患者 -->
      <el-dialog :title="titleP" v-model="openP" width="650px" append-to-body>
        <div>
          <el-col>
            <el-form
              :model="queryPatientParams"
              ref="queryPatientRef"
              :inline="true"
              v-show="showSearch"
              label-width="80px"
            >
              <el-form-item label="患者姓名" prop="name">
                <el-input
                  v-model="queryPatientParams.name"
                  placeholder="请输入患者姓名"
                  clearable
                  style="width: 240px"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="resetPatientQuery">重置</el-button>
                <el-button type="primary" @click="handlePatientQuery"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
          <el-col>
            <el-table :data="patientList" style="width: 100%">
              <el-table-column width="55" align="center" />
              <el-table-column
                label="患者姓名"
                align="center"
                fixed="left"
                prop="name"
              />
              <el-table-column
                label="患者电话"
                align="center"
                prop="phone"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="操作"
                align="center"
                fixed="right"
                width="80"
                class-name="small-padding fixed-width"
              >
                <template #default="scope">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleChoose(scope.row)"
                    v-hasPermi="['dataManagement:patientInfo:edit']"
                    >选择</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col style="padding-right: 8px">
            <pagination
              v-show="total > 0"
              :total="total"
              v-model:page="queryPatientParams.pageNum"
              v-model:limit="queryPatientParams.pageSize"
              @pagination="getPatientList"
            />
          </el-col>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="onCancel">取 消</el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 选择医生 -->
      <el-dialog :title="titleD" v-model="openD" width="650px" append-to-body>
        <div>
          <el-col>
            <el-form
              :model="queryDocParams"
              ref="queryPatientRef"
              :inline="true"
              v-show="showSearch"
              label-width="80px"
            >
              <el-form-item label="医生姓名" prop="name">
                <el-input
                  v-model="queryDocParams.name"
                  placeholder="请输入医生姓名"
                  clearable
                  style="width: 240px"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="resetDocQuery">重置</el-button>
                <el-button type="primary" @click="handleDocQuery"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
          <el-col>
            <el-table :data="docList" style="width: 100%">
              <el-table-column width="55" align="center" />
              <el-table-column
                label="医生姓名"
                align="center"
                fixed="left"
                prop="userName"
              />
              <el-table-column
                label="医生电话"
                align="center"
                prop="phonenumber"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="操作"
                align="center"
                fixed="right"
                width="80"
                class-name="small-padding fixed-width"
              >
                <template #default="scope">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleChooseDoc(scope.row)"
                    v-hasPermi="['dataManagement:doc:edit']"
                    >选择</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col style="padding-right: 8px">
            <pagination
              v-show="total > 0"
              :total="total"
              v-model:page="queryDocParams.pageNum"
              v-model:limit="queryDocParams.pageSize"
              @pagination="getDocList"
            />
          </el-col>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="onCancelDoc">取 消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script setup name="Dict">
import useDictStore from "@/store/modules/dict";
// import {
//   listType,
//   getType,
//   delType,
//   addType,
//   updateType,
//   refreshCache,
// } from "@/api/system/dict/type";

import {
  listRemind,
  getRemind,
  delRemind,
  addRemind,
  updateRemind,
} from "@/api/system/remind";

import { listPatient } from "@/api/system/patient";
import { listUser } from "@/api/system/user";

const { proxy } = getCurrentInstance();
// const { sys_normal_disable } = proxy.useDict("sys_normal_disable");

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
const content = ref("");

const patientList = ref([]);
const titleP = ref("");
const openP = ref(false);

const docList = ref([]);
const titleD = ref("");
const openD = ref(false);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    remindDate: null,
    remindContent: null,
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientIdCard: null,
    docId: null,
    docName: null,
  },
  queryPatientParams: {
    pageNum: 1,
    pageSize: 10,
    name: null,
    phone: null,
    idCard: null,
    black: null,
    newPatient: null,
  },
  queryDocParams: {
    pageNum: 1,
    pageSize: 10,
    name: null,
    phone: null,
    idCard: null,
    black: null,
    newPatient: null,
  },
  rules: {
    remindDate: [
      { required: true, message: "提醒时间不能为空", trigger: "blur" },
    ],
    patientName: [
      { required: true, message: "患者姓名不能为空" },
    ],
    patientPhone: [
      { required: true, message: "患者电话不能为空", trigger: "blur" },
    ],
    docName: [
      { required: true, message: "提醒医生姓名不能为空" },
    ],
  },
});

const { queryParams, queryPatientParams, queryDocParams, form, rules } = toRefs(data);

/** 查询列表 */
function getList() {
  loading.value = true;
  listRemind(proxy.addDateRange(queryParams.value)).then((response) => {
    typeList.value = response.rows;

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
    remindDate: null,
    remindContent: null,
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientIdCard: null,
    docId: null,
    docName: null,
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
  title.value = "添加提醒";
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
  const id = row.dictId || ids.value;
  getRemind(id).then((response) => {
    form.value = response.data;
    content.value = response.data.remindContent;
    open.value = true;
    title.value = "修改提醒";
  });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dataRef"].validate((valid) => {
    if (valid) {
      if (form.value.id != undefined) {
        updateRemind(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        form.value.remindContent = content.value;
        addRemind(form.value).then((response) => {
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
  const reservationIds = row.id || ids.value;
  proxy.$modal
    .confirm('是否确认取消提醒编号为"' + reservationIds + '"的数据项？')
    .then(function () {
      return delRemind(reservationIds);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess("取消成功");
    })
    .catch(() => {});
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    "doc/remind/export",
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

// 选择患者弹窗
function handChange() {
  titleP.value = "选择患者";
  openP.value = true;
}
/** 患者搜索按钮操作 */
function handlePatientQuery() {
  queryPatientParams.value.pageNum = 1;
  getPatientList();
}
/** 患者重置按钮操作 */
function resetPatientQuery() {
  proxy.resetForm("queryPatientRef");
  handlePatientQuery();
}
/** 查询患者列表 */
function getPatientList() {
  listPatient(proxy.addDateRange(queryPatientParams.value)).then((response) => {
    patientList.value = response.rows;
    total.value = response.total;
  });
}
function handleChoose(row) {
  console.log("row", row);
  form.value.patientId = row.id;
  form.value.patientName = row.name;
  form.value.patientIdCard = row.idCard;
  form.value.patientPhone = row.phone;
  openP.value = false;
  console.log("handleChoose", form.value);
}
function onCancel() {
  openP.value = false;
}

// 选择医生弹窗
function handChangeDoc() {
  titleD.value = "选择医生";
  openD.value = true;
}
/** 医生搜索按钮操作 */
function handleDocQuery() {
  queryDocParams.value.pageNum = 1;
  getDocList();
}
/** 医生重置按钮操作 */
function resetDocQuery() {
  proxy.resetForm("queryDocRef");
  handleDocQuery();
}
/** 查询医生列表 */
function getDocList() {
  listUser(proxy.addDateRange(queryDocParams.value)).then((response) => {
    docList.value = response.rows;
    total.value = response.total;
  });
}
function handleChooseDoc(row) {
  console.log("row", row);
  form.value.docId = row.userId;
  form.value.docName = row.userName;
  openD.value = false;
  console.log("handleChoose", form.value);
}
function onCancelDoc() {
  openD.value = false;
}

getList();
getPatientList();
getDocList();
</script>
<style  lang="scss" >
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>