<template>
  <div>
    <!-- 预约 -->
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
                  <el-form-item label="预约时间" prop="preDate">
                    <el-date-picker
                      clearable
                      v-model="queryParams.preDate"
                      type="date"
                      style="width: 240px"
                      value-format="yyyy-MM-dd"
                      placeholder="请选择预约时间"
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
                  <el-form-item label="预约医生姓名" prop="docName">
                    <el-input
                      v-model="queryParams.docName"
                      placeholder="请输入预约医生姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <!-- <el-form-item label="状态" prop="status">
                  <el-select
                    v-model="queryParams.status"
                    placeholder="字典状态"
                    clearable
                    style="width: 240px"
                  >
                    <el-option
                      v-for="dict in sys_normal_disable"
                      :key="dict.value"
                      :label="dict.label"
                      :value="dict.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="创建时间" style="width: 308px">
                  <el-date-picker
                    v-model="dateRange"
                    value-format="YYYY-MM-DD"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item> -->
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
                  v-hasPermi="['system:dict:add']"
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
                v-hasPermi="['system:dict:edit']"
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
                  v-hasPermi="['system:dict:remove']"
                  >取消</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button
                  type="warning"
                  plain
                  icon="Download"
                  @click="handleExport"
                  v-hasPermi="['system:dict:export']"
                  >导出</el-button
                >
              </el-col>
              <!-- <el-col :span="1.5">
                <el-button
                  type="danger"
                  plain
                  icon="Refresh"
                  @click="handleRefreshCache"
                  v-hasPermi="['system:dict:remove']"
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
                label="预约时间"
                align="center"
                prop="preDate"
                width="220"
              >
                <!-- <template slot-scope="scope">
          <span>{{ parseTime(scope.row.preDate, '{y}-{m}-{d}') }}</span>
        </template> -->
              </el-table-column>
              <el-table-column
                label="预约说明"
                minWidth="220"
                align="center"
                prop="preContent"
              />

              <el-table-column
                label="预约医生姓名"
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
                <template #default="{ scope }">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleUpdate(scope.row)"
                    v-hasPermi="['system:dict:edit']"
                    >修改
                  </el-button>
                  <el-button
                    link
                    type="primary"
                    icon="Delete"
                    @click="handleDelete(scope.row)"
                    v-hasPermi="['system:dict:remove']"
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
            <el-input v-model="form.patientName" placeholder="请输入患者姓名" />
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
          <el-form-item label="预约时间" prop="preDate" class="mr24">
            <el-date-picker
              clearable
              v-model="form.preDate"
              type="datet"
              class="w100i"
              value-format="yyyy-MM-dd"
              placeholder="请选择预约时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="预约说明" class="mr24">
            <editor v-model="form.preContent" :min-height="192" />
          </el-form-item>
          <el-form-item label="预约医生姓名" prop="docName" class="mr24">
            <el-input v-model="form.docName" placeholder="请输入预约医生姓名" />
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
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script setup name="Dict">
import useDictStore from "@/store/modules/dict";
import {
  listType,
  getType,
  delType,
  addType,
  updateType,
  refreshCache,
} from "@/api/system/dict/type";

import {
  listReservation,
  getReservation,
  delReservation,
  addReservation,
  updateReservation,
} from "@/api/system/reservation";

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

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    preDate: null,
    preContent: null,
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientIdCard: null,
    docId: null,
    docName: null,
  },
  rules: {
    preDate: [{ required: true, message: "预约时间不能为空", trigger: "blur" }],
    patientName: [{ required: true, message: "患者姓名不能为空", trigger: "blur" }],
    patientPhone: [{ required: true, message: "患者电话不能为空", trigger: "blur" }],
    docName: [{ required: true, message: "预约医生姓名不能为空", trigger: "blur" }],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询字典类型列表 */
function getList() {
  loading.value = true;
  listReservation(proxy.addDateRange(queryParams.value)).then((response) => {
    typeList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });

  // typeList.value = new Array(25).fill("").map((el, idx) => ({
  //   name: "患者" + idx,
  //   gender: idx % 2 ? "女" : "男",
  //   age: idx,
  //   phone: "电话号码" + idx,
  //   isFirstVisit: "是",
  //   isOrder: "否",
  //   remark: "备注" + idx,
  //   creatAt: "2023-05-10 10:10:10.00 ",
  // }));
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
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientStatus: null,
    waitTime: null,
    room: null,
    adjustTime: null,
    adjustDocId: null,
    adjustDocName: null,
    receptionDocId: null,
    receptionDocName: null,
    assignDocId: null,
    assignDocName: null,
    assignContent: null,
    parentId: null,
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
  title.value = "添加预约";
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
  getReservation(id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改预约";
  });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dataRef"].validate((valid) => {
    if (valid) {
      if (form.value.id != undefined) {
        updateReservation(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addReservation(form.value).then((response) => {
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
    .confirm('是否确认取消预约编号为"' + reservationIds + '"的数据项？')
    .then(function () {
      return delReservation(reservationIds);
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
    "system/reservation/export",
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

getList();
</script>
<style  lang="scss" >
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>