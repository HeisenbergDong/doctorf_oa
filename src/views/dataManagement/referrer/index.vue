<template>
  <!-- 推荐人设置 -->
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
              label-width="110px"
            >
              <div class="flex-row">
                <div>
                  <el-form-item label="推荐人姓名" prop="pointPatientName">
                    <el-input
                      v-model="queryParams.pointPatientName"
                      placeholder="请输入推荐人姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="推荐人电话" prop="pointPatientPhone">
                    <el-input
                      v-model="queryParams.pointPatientPhone"
                      placeholder="请输入推荐人电话"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="推荐人身份证" prop="pointPatientIdCard">
                    <el-input
                      v-model="queryParams.pointPatientIdCard"
                      placeholder="请输入推荐人身份证"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>

                  <el-form-item label="被推荐人姓名" prop="newPatientName">
                    <el-input
                      v-model="queryParams.newPatientName"
                      placeholder="请输入被推荐人姓名"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="被推荐人电话" prop="newPatientPhone">
                    <el-input
                      v-model="queryParams.newPatientPhone"
                      placeholder="请输入被推荐人电话"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="被推荐人身份证" prop="newPatientIdCard">
                    <el-input
                      v-model="queryParams.newPatientIdCard"
                      placeholder="请输入被推荐人身份证"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="眼睛片数" prop="glassesNum">
                    <el-input
                      v-model="queryParams.glassesNum"
                      placeholder="请输入眼睛片数"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="折扣" prop="pointNum">
                    <el-input
                      v-model="queryParams.pointNum"
                      placeholder="请输入折扣"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
                    />
                  </el-form-item>
                  <el-form-item label="积分" prop="pointScore">
                    <el-input
                      v-model="queryParams.pointScore"
                      placeholder="请输入积分"
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
                  >删除</el-button
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
                label="推荐人姓名"
                align="center"
                fixed="left"
                width="120"
                prop="pointPatientName"
              />
              <el-table-column
                label="推荐人电话"
                align="center"
                width="120"
                prop="pointPatientPhone"
              />
              <el-table-column
                label="推荐人身份证"
                align="center"
                width="220"
                prop="pointPatientIdCard"
              />
              <el-table-column label="折扣id" align="center" prop="id" />
              <el-table-column
                label="折扣类型0-折扣1-积分"
                align="center"
                width="180"
                prop="pointType"
              />
              <el-table-column
                label="眼睛片数"
                align="center"
                width="120"
                prop="glassesNum"
              />
              <el-table-column label="折扣" align="center" prop="pointNum" />
              <el-table-column label="积分" align="center" prop="pointScore" />
              <el-table-column
                label="被推荐人姓名"
                align="center"
                width="120"
                prop="newPatientName"
              />
              <el-table-column
                label="被推荐人电话"
                align="center"
                width="120"
                prop="newPatientPhone"
              />
              <el-table-column
                label="被推荐人身份证"
                align="center"
                width="220"
                prop="newPatientIdCard"
              />
              <el-table-column
                label="备注"
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
                <template #default="{ scope }">
                  <el-button
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleUpdate(scope.row)"
                    v-hasPermi="['system:dict:edit']"
                    >修改</el-button
                  >
                  <el-button
                    link
                    type="primary"
                    icon="Delete"
                    @click="handleDelete(scope.row)"
                    v-hasPermi="['system:dict:remove']"
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
          <el-form-item label="推荐人姓名" prop="pointPatientName" class="mr24">
            <el-input v-model="form.pointPatientName" placeholder="请输入推荐人姓名" />
          </el-form-item>
          <el-form-item label="推荐人电话" prop="dipointPatientPhonectType" class="mr24">
            <el-input v-model="form.pointPatientPhone" placeholder="请输入推荐人电话" />
          </el-form-item>
          <el-form-item label="推荐人身份证" prop="pointPatientIdCard" class="mr24">
            <el-input v-model="form.pointPatientIdCard" placeholder="请输入推荐人身份证" />
          </el-form-item>
          <el-form-item label="眼睛片数" prop="glassesNum" class="mr24">
            <el-input v-model="form.glassesNum" placeholder="请输入眼睛片数" />
          </el-form-item>
          <el-form-item label="折扣" prop="pointNum" class="mr24">
            <el-input v-model="form.pointNum" placeholder="请输入折扣" />
          </el-form-item>
          <el-form-item label="积分" prop="pointScore" class="mr24">
            <el-input v-model="form.pointScore" placeholder="请输入积分" />
          </el-form-item>
          <el-form-item label="被推荐人姓名" prop="newPatientName" class="mr24">
            <el-input v-model="form.newPatientName" placeholder="请输入被推荐人姓名" />
          </el-form-item>
          <el-form-item label="被推荐人电话" prop="newPatientPhone" class="mr24">
            <el-input v-model="form.newPatientPhone" placeholder="请输入被推荐人电话" />
          </el-form-item>
          <el-form-item label="被推荐人身份证" prop="newPatientIdCard" class="mr24">
            <el-input v-model="form.newPatientIdCard" placeholder="请输入被推荐人身份证" />
          </el-form-item>
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
  listPoint,
  getPoint,
  delPoint,
  addPoint,
  updatePoint,
} from "@/api/system/point";

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
    label: "全部",
  },
  {
    value: "1",
    label: "是",
  },
  {
    value: "2",
    label: "否",
  },
]);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    pointPatientId: null,
    pointPatientName: null,
    pointPatientPhone: null,
    pointPatientIdCard: null,
    pointType: null,
    glassesNum: null,
    pointNum: null,
    pointScore: null,
    newPatientId: null,
    newPatientName: null,
    newPatientPhone: null,
    newPatientIdCard: null,
  },
  rules: {
    dictName: [
      { required: true, message: "字典名称不能为空", trigger: "blur" },
    ],
    dictType: [
      { required: true, message: "字典类型不能为空", trigger: "blur" },
    ],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询字典类型列表 */
function getList() {
  loading.value = true;
  listPoint(proxy.addDateRange(queryParams.value)).then((response) => {
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
  //   isOrder: idx % 2 ? "是" : "否",
  //   orderTime: idx % 2 ? "2023-05-10 10:10:10.00 " : "-",
  //   remark: "备注" + idx,
  //   creatAt: "2023-05-10 10:10:10.00 ",
  //   isShow: idx % 2 ? true : false,
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
    pointPatientId: null,
    pointPatientName: null,
    pointPatientPhone: null,
    pointPatientIdCard: null,
    pointType: null,
    glassesNum: null,
    pointNum: null,
    pointScore: null,
    newPatientId: null,
    newPatientName: null,
    newPatientPhone: null,
    newPatientIdCard: null,
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
  title.value = "添加推荐人折扣积分";
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
  const referreId = row.id || ids.value;
  getPoint(referreId).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改推荐人折扣积分";
  });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dataRef"].validate((valid) => {
    if (valid) {
      if (form.value.dictId != undefined) {
        updatePoint(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addPoint(form.value).then((response) => {
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
  const referreId = row.id || ids.value;
  proxy.$modal
    .confirm('是否确认删除推荐人编号为"' + referreId + '"的数据项？')
    .then(function () {
      return delType(referreId);
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
    "system/point/export",
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
<style lang="scss">
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>
