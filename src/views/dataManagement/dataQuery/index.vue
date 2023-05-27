<template>
  <!-- 统计查询 -->
  <div class="app-container">
    <el-row>
      <el-col class="card-box">
        <el-card class="form_card" shadow="never">
          <el-form
            :model="queryParams"
            ref="queryRef"
            :inline="true"
            v-show="showSearch"
            label-width="68px"
          >
            <div class="flex-row just-between">
              <div>
                <el-form-item label="姓名" prop="dictName">
                  <el-input
                    v-model="queryParams.dictName"
                    placeholder="请输入"
                    clearable
                    style="width: 240px"
                    @keyup.enter="handleQuery"
                  />
                </el-form-item>
                <el-form-item
                  v-if="activeName === 'second'"
                  label="手机号码"
                  prop="dictType"
                >
                  <el-input
                    v-model="queryParams.dictType"
                    placeholder="请输入"
                    clearable
                    style="width: 240px"
                    @keyup.enter="handleQuery"
                  />
                </el-form-item>
                <el-form-item
                  v-if="activeName === 'second'"
                  label="主治医生"
                  prop="status"
                >
                  <el-select
                    v-model="queryParams.status"
                    placeholder="请选择"
                    clearable
                    style="width: 240px"
                  >
                    <el-option
                      v-for="dict in option"
                      :key="dict.value"
                      :label="dict.label"
                      :value="dict.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item
                  v-if="activeName === 'second'"
                  label="问诊时间"
                  style="width: 308px"
                >
                  <el-date-picker
                    v-model="dateRange"
                    value-format="YYYY-MM-DD"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div>
                <el-form-item>
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
            <!-- <el-col :span="1.5">
              <el-button
                type="primary"
                plain
                icon="Plus"
                @click="handleAdd"
                v-hasPermi="['system:dict:add']"
                >新增</el-button
              >
            </el-col> -->
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
            <!-- <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="Delete"
                :disabled="multiple"
                @click="handleDelete"
                v-hasPermi="['system:dict:remove']"
                >取消</el-button
              >
            </el-col> -->
            <!-- <el-col :span="1.5">
              <el-button
                type="warning"
                plain
                icon="Download"
                @click="handleExport"
                v-hasPermi="['system:dict:export']"
                >导出</el-button
              >
            </el-col> -->
            <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="Refresh"
                @click="handleRefreshCache"
                v-hasPermi="['system:dict:remove']"
                >刷新缓存</el-button
              >
            </el-col>
            <right-toolbar
              v-model:showSearch="showSearch"
              @queryTable="getList"
            ></right-toolbar>
          </el-row>
          <el-row class="w100i">
            <el-tabs
              v-model="activeName"
              @tab-click="handleClick"
              class="w100i"
            >
              <el-tab-pane label="医生工作量" name="first"></el-tab-pane>
              <el-tab-pane label="患者人流量" name="second"></el-tab-pane>
            </el-tabs>
          </el-row>
          <el-table
            v-if="activeName === 'first'"
            :data="typeList"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="医生" align="center" prop="doc" />
            <el-table-column label="日接待患者" align="center" prop="dayNum" />
            <el-table-column label="月接待患者" align="center" prop="monthNum" />
            <el-table-column label="接待患者总数" align="center" prop="sum" />
          </el-table>
          <el-table
            v-else
            :data="typeList"
            @selection-change="handleSelectionChange"
          >
            <!-- v-loading="loading" -->
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="姓名" align="center" prop="name" />
            <el-table-column
              label="性别"
              align="center"
              prop="gender"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="年龄"
              align="center"
              prop="age"
              :show-overflow-tooltip="true"
            >
              <!-- <template #default="scope">
                <router-link
                  :to="'/system/dict-data/index/' + scope.row.dictId"
                  class="link-type"
                >
                  <span>{{ scope.row.dictType }}</span>
                </router-link>
              </template> -->
            </el-table-column>
            <el-table-column
              label="电话号码"
              align="center"
              prop="phone"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="问诊时间"
              align="center"
              prop="orderTime"
              width="180"
            >
              <!-- <template #default="scope">
                <span>{{ parseTime(scope.row.createTime) }}</span>
              </template> -->
            </el-table-column>
            <el-table-column
              label="主治医生"
              align="center"
              prop="doctor"
              width="180"
            >
              <!-- <template #default="scope">
                <span>{{ parseTime(scope.row.createTime) }}</span>
              </template> -->
            </el-table-column>
            <el-table-column
              label="备注"
              width="250"
              align="center"
              prop="remark"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="创建时间"
              align="center"
              prop="creatAt"
              width="180"
            >
              <!-- <template #default="scope">
                <span>{{ parseTime(scope.row.createTime) }}</span>
              </template> -->
            </el-table-column>
            <!-- <el-table-column
              label="操作"
              align="center"
              width="100"
              class-name="small-padding fixed-width"
            >
              <template #default="{ scope }">
                <el-button
                  link
                  type="primary"
                  icon="Edit"
                  @click="handleUpdate(scope.row)"
                  v-hasPermi="['system:dict:edit']"
                  >提醒
                </el-button>
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
                  >取消</el-button
                >
              </template>
            </el-table-column> -->
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
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="dictRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="字典名称" prop="dictName">
          <el-input v-model="form.dictName" placeholder="请输入字典名称" />
        </el-form-item>
        <el-form-item label="字典类型" prop="dictType">
          <el-input v-model="form.dictType" placeholder="请输入字典类型" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in sys_normal_disable"
              :key="dict.value"
              :label="dict.value"
              >{{ dict.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
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

const { proxy } = getCurrentInstance();
const { sys_normal_disable } = proxy.useDict("sys_normal_disable");

const typeList = ref([]);
const open = ref(false);
// const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");
const dateRange = ref([]);
const activeName = ref("first");
const option = ref([
  {
    value: "0",
    label: "医生A",
  },
  {
    value: "1",
    label: "医生B",
  },
  {
    value: "2",
    label: "医生C",
  },
]);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    dictName: undefined,
    dictType: undefined,
    status: undefined,
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

function handleClick(tab, event) {
  console.log(tab, event);
}

const { queryParams, form, rules } = toRefs(data);

/** 查询字典类型列表 */
function getList() {
  //   loading.value = true;
  //   listType(proxy.addDateRange(queryParams.value, dateRange.value)).then(
  //     (response) => {
  //       typeList.value = response.rows;
  //       total.value = response.total;
  //       loading.value = false;
  //     }
  //   );
  typeList.value = new Array(25).fill("").map((el, idx) => ({
    name: "患者" + idx,
    gender: idx % 2 ? "女" : "男",
    age: idx,
    phone: "电话号码" + idx,
    doctor: "医生" + idx,
    orderTime: idx % 2 ? "2023-05-10 10:10:10.00 " : "-",
    remark: "备注" + idx,
    creatAt: "2023-05-10 10:10:10.00 ",
    isShow: idx % 2 ? true : false,

    doc: "医生" + idx,
    dayNum: "1" + idx,
    monthNum: "1" + idx,
    sum: "1" + idx,
  }));
}
/** 取消按钮 */
function cancel() {
  open.value = false;
  reset();
}
/** 表单重置 */
function reset() {
  form.value = {
    dictId: undefined,
    dictName: undefined,
    dictType: undefined,
    status: "0",
    remark: undefined,
  };
  proxy.resetForm("dictRef");
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
  title.value = "添加字典类型";
}
/** 多选框选中数据 */
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.dictId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}
/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const dictId = row.dictId || ids.value;
  getType(dictId).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改字典类型";
  });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dictRef"].validate((valid) => {
    if (valid) {
      if (form.value.dictId != undefined) {
        updateType(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addType(form.value).then((response) => {
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
  const dictIds = row.dictId || ids.value;
  proxy.$modal
    .confirm('是否确认删除字典编号为"' + dictIds + '"的数据项？')
    .then(function () {
      return delType(dictIds);
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
    "system/dict/type/export",
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