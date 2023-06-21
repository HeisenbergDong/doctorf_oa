<template>
  <div>
    <!-- 指派 -->
    <div class="app-container">
      <el-row>
        <!-- <el-col class="card-box">
          <el-card class="form_card" shadow="never">
            <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="100px">
              <div class="flex-row">
                <div>
                  <el-form-item label="患者姓名" prop="patientName">
                    <el-input v-model="queryParams.patientName" placeholder="请输入患者姓名" clearable style="width: 240px"
                      @keyup.enter="handleQuery" />
                  </el-form-item>
                  <el-form-item label="患者电话" prop="patientPhone">
                    <el-input v-model="queryParams.patientPhone" placeholder="请输入患者电话" clearable style="width: 240px"
                      @keyup.enter="handleQuery" />
                  </el-form-item>
                  <el-form-item label="进入队列时间" prop="waitTime">
                    <el-date-picker clearable v-model="queryParams.waitTime" type="datetime"
                      value-format="YYYY-MM-DD HH:mm:ss" style="width: 240px" placeholder="请选择进入队列时间">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="接待医生姓名" prop="receptionDocName">
                    <el-input v-model="queryParams.receptionDocName" placeholder="请输入接待医生姓名" style="width: 240px"
                      clearable @keyup.enter="handleQuery" />
                  </el-form-item>
                  <el-form-item label="诊室" prop="room">
                    <el-input v-model="queryParams.room" placeholder="请输入诊室" style="width: 240px" clearable
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
        </el-col> -->
        <el-col class="card-box">
          <el-card class="" shadow="never">
            <el-row :gutter="10" class="mb8">
              <!-- <el-col :span="1.5">
                <el-button
                  type="primary"
                  plain
                  icon="Plus"
                  @click="handleAdd"
                  v-hasPermi="['business:HOIS:add']"
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
                v-hasPermi="['business:HOIS:edit']"
                >修改</el-button
              >
            </el-col> -->
              <el-col :span="1.5">
                <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete"
                  v-hasPermi="['business:HOIS:remove']">取消</el-button>
              </el-col>
              <!-- <el-col :span="1.5">
                <el-button
                  type="warning"
                  plain
                  icon="Download"
                  @click="handleExport"
                  v-hasPermi="['business:HOIS:export']"
                  >导出</el-button
                >
              </el-col> -->
              <!-- <el-col :span="1.5">
                <el-button
                  type="danger"
                  plain
                  icon="Refresh"
                  @click="handleRefreshCache"
                  v-hasPermi="['business:HOIS:remove']"
                  >刷新缓存</el-button
                >
              </el-col> -->
              <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
            </el-row>

            <el-table :data="typeList" @selection-change="handleSelectionChange" style="width: 100%" v-loading="loading">
              <el-table-column type="selection" width="55" align="center" />
              <el-table-column label="排队id" align="center" prop="id" />
              <el-table-column label="患者姓名" width="120" fixed="left" align="center" prop="patientName" />
              <el-table-column label="患者电话" width="120" align="center" prop="patientPhone"
                :show-overflow-tooltip="true" />
              <el-table-column label="患者排队状态" width="120" align="center" prop="patientStatusTxt"
                :show-overflow-tooltip="true">
              </el-table-column>
              <!-- <el-table-column label="进入队列时间" align="center" prop="waitTime" width="220" :show-overflow-tooltip="true" /> -->
              <el-table-column label="诊室" align="center" width="120" prop="room">
              </el-table-column>
              <el-table-column label="备注" width="220" align="center" prop="remark" :show-overflow-tooltip="true" />
              <el-table-column label="操作" align="center" fixed="right" width="220" class-name="small-padding fixed-width">
                <template #default="scope">
                  <el-button link type="primary" icon="Edit" @click="handleAssign(scope.row)"
                    v-hasPermi="['business:HOIS:edit']">指派
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="12" class="card-box">
          <el-card class="" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "诊室1" }}</span>
              </div>
            </template>
            <div class="body">1</div>
          </el-card>
        </el-col>
        <el-col :span="12" class="card-box">
          <el-card class="" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "诊室2" }}</span>
              </div>
            </template>
            <div class="body">2</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="card-box">
          <el-card class="" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "诊室3" }}</span>
              </div>
            </template>
            <div class="body">3</div>
          </el-card>
        </el-col>
        <el-col :span="12" class="card-box">
          <el-card class="" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "诊室4" }}</span>
              </div>
            </template>
            <div class="body">4</div>
          </el-card>
        </el-col>
      </el-row> -->
      <!-- <pagination
         v-show="total > 0"
         :total="total"
         v-model:page="queryParams.pageNum"
         v-model:limit="queryParams.pageSize"
         @pagination="getList"
      /> -->
      <!-- 指派对话框 -->
      <el-dialog title="指派" v-model="waitOpen" width="600px" append-to-body>
        <!-- :rules="rules" -->
        <el-form ref="dataRef" :model="waitForm" label-width="120px">
          <el-form-item label="指派科室-人员" prop="waitTime" class="mr24">
            <el-cascader :props="waitProps" v-model="waitForm.waitIdList"></el-cascader>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="waitSubmitForm">确 定</el-button>
            <el-button @click="waitCancel">取 消</el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 添加或修改参数配置对话框 -->
      <el-dialog :title="title" v-model="open" width="600px" append-to-body>
        <el-form ref="dataRef" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="进入队列时间" prop="waitTime" class="mr24">
            <el-date-picker clearable v-model="form.waitTime" type="datetime" value-format="YYYY-MM-DD HH:mm:ss"
              class="w100i" placeholder="请选择进入队列时间">
            </el-date-picker>
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
  listWait,
  getWait,
  delWait,
  addWait,
  updateWait,
  consultingWaitListApi
} from "@/api/system/wait";
import { onMounted } from "vue";
// import { onUnmounted } from "vue";
import Speech from "speak-tts";
import {
  listUser,
  deptTreeSelect,
} from "@/api/system/user";
import moment from 'moment';

const { proxy } = getCurrentInstance();
// const { sys_normal_disable } = proxy.useDict("sys_normal_disable");

const typeList = ref([]);
const open = ref(false);
const waitOpen = ref(false);
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
    pageSize: 999,
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientStatus: null,
    waitTime: moment(new Date()).format("YYYY-MM-DD"),
    room: '分诊室',
    adjustTime: null,
    adjustDocId: null,
    adjustDocName: null,
    receptionDocId: null,
    receptionDocName: null,
    assignDocId: null,
    assignDocName: null,
    assignContent: null,
    parentId: null,
  },
  rules: {
    waitTime: [
      { required: true, message: "进入队列时间不能为空", trigger: "blur" },
    ],
  },
  waitForm: {
    assignDocId: '',
    assignDocName: '',
    room: '',
    waitIdList:[],
  }
});

// onUnmounted(() => {});

// 语音播报
const speech = ref(null);
function speechInit() {
  speech.value = new Speech();
  speech.value.setLanguage("zh-CN");
  speech.value.init().then(() => {
    console.log("语音播报初始化完成...");
  });
}
function handleAssign(row) {
  form.value.id = row.id;
  waitOpen.value = true;
  waitForm.value = row;
  waitForm.value.waitIdList = [];
  // addWait(form.value).then((response) => {
  //   open.value = false;
  //   getList();
  // });
  // speech.value
  //   .speak({ text: `请${row.id}号患者到${row.room}就诊` })
  //   .then(() => {
  //     console.log("读取成功");
  //   });
}
onMounted(() => {
  speechInit();
});

const { queryParams, form, rules, waitForm } = toRefs(data);

/** 查询列表 */
function getList() {
  loading.value = true;
  const temp = {
    0:'排队中',
    1:'进行中',
    2:'已完成',
  }
  consultingWaitListApi(proxy.addDateRange(queryParams.value)).then((response) => {
    loading.value = false;
    typeList.value = response.data.map(el=>({
      ...el,
      patientStatusTxt:temp[el.patientStatus]
      // 0-排队中 1-进行中 2-已完成
    }));
    total.value = response.total;
    console.log("listWait :>> ", typeList.value);
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
  title.value = "添加队列时间";
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
  const waitIds = row.id || ids.value;
  console.log("waitIds :>> ", waitIds);

  getWait(waitIds).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = "修改队列时间";
  });
}
/** 指派确定按钮 */
function waitSubmitForm() {
  if(!waitForm.value.waitIdList || waitForm.value.waitIdList.length === 0){
    proxy.$modal.msgError('请选择科室及指派医生！');
    return;
  }
  addWait({
    ...waitForm.value,
    assignDocId:waitForm.value.waitIdList[3],
    room:waitForm.value.waitIdList[2]
  }).then((response) => {
    waitOpen.value = false;
    getList();
  });
  // speech.value
  //   .speak({ text: `请${waitForm.value.id}号患者到${waitForm.value.room}就诊` })
  //   .then(() => {
  //     console.log("读取成功");
  //   });
}
/** 指派取消按钮 */
function waitCancel() {
  waitOpen.value = false;
  reset();
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["dataRef"].validate((valid) => {
    if (valid) {
      if (form.value.id != undefined) {
        updateWait(form.value).then((response) => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addWait(form.value).then((response) => {
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
  console.log("object :>> ", row);
  const waitIds = row.id || ids.value;
  proxy.$modal
    .confirm('是否确认取消排队编号为"' + waitIds + '"的数据项？')
    .then(function () {
      return delWait(waitIds);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess("取消成功");
    })
    .catch(() => { });
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    "system/wait/export",
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
const loopFormat = (data)=>{
  if(!data){
    return [];
  }
  return data.map(el=>({
    ...el,
    value:el.label,
    children:loopFormat(el.children)
  }))
}
/** 查询部门下拉树结构 */
function getDeptTree() {
  return new Promise(resolve => {

    deptTreeSelect().then((response) => {
      resolve(loopFormat(response.data));
    });
  })
}
getList();
const waitProps = {
  checkStrictly: true,
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node;
    if(level===0){
      getDeptTree().then(res=>{
        resolve(res);
      })
    }else if(node.children.length ===0){
      listUser({
        pageNum: 1,
        pageSize: 990,
        userName: undefined,
        phonenumber: undefined,
        status: undefined,
        deptId: node.data.id,
      }).then(res=>{
        resolve(res.rows.map(el=>({
          ...el,
          value:el.userId,
          label:el.nickName,
          leaf:true
        })));
      });
    }else{
      resolve([]);
    }
  }
}
</script>
<style lang="scss">
.form_card .el-card__body {
  padding: 15px 20px 0px 20px !important;
}
</style>
