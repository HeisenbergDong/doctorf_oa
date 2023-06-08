<template>
  <!-- 挂号 -->
  <div>
    <div class="app-container home flex-row">
      <el-card class="full_box" shadow="never">
        <template v-slot:header>
          <div class="clearfix">
            <span class="font14">{{ "挂号" }}</span>
          </div>
        </template>
        <div class="form_box flex-column align-center just-center">
          <div class="font20 fontW600 mb20">范大夫私人诊所挂号</div>
          <el-form
            label-position="right"
            label-width="100px"
            :model="form"
            ref="dataRef"
            style="
              border: 1px solid #dcdfe6;
              border-radius: 5px;
              padding: 24px 24px 20px 20px;
              width: 40%;
            "
          >
            <el-form-item label="挂号号码">
              <el-input
                v-model="form.regNo"
                placeholder="请输入挂号号码"
                :ref="(el) => (formRefs['regNo'] = el)"
                @keyup.enter="formRefs['name'].focus()"
              />
            </el-form-item>
            <el-form-item label="患者姓名">
              <el-input
                v-model="form.name"
                placeholder="请输入患者姓名"
                :ref="(el) => (formRefs['name'] = el)"
                @keyup.enter="formRefs['idCard'].focus()"
                @change="changeName"
              ></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input
                v-model="form.idCard"
                placeholder="请输入身份证号"
                :ref="(el) => (formRefs['idCard'] = el)"
                @keyup.enter="formRefs['phone'].focus()"
              ></el-input>
            </el-form-item>
            <el-form-item label="患者电话">
              <el-input
                v-model="form.phone"
                placeholder="请输入患者电话"
                :ref="(el) => (formRefs['phone'] = el)"
                @keyup.enter="formRefs['regFee'].focus()"
                @change="changePhone"
              ></el-input>
            </el-form-item>

            <el-form-item label="已缴纳挂号费">
              <el-input
                v-model="form.regFee"
                placeholder="请输入"
                :ref="(el) => (formRefs['regFee'] = el)"
                @keyup.enter="formRefs['checkFee'].focus()"
              ></el-input>
            </el-form-item>
            <el-form-item label="已缴纳检查费">
              <el-input
                v-model="form.checkFee"
                placeholder="请输入"
                :ref="(el) => (formRefs['checkFee'] = el)"
                @keyup.enter="formRefs['remark'].focus()"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注说明">
              <el-input
                v-model="form.remark"
                placeholder="请输入"
                :ref="(el) => (formRefs['remark'] = el)"
                @keyup.enter="formRefs['regDate'].focus()"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="挂号时间">
              <el-date-picker
                v-model="form.regDate"
                type="datetime"
                value-format="YYYY-MM-DD HH:mm:ss"
                placeholder="选择日期时间"
                class="date_picker w100i"
                :ref="(el) => (formRefs['regDate'] = el)"
              >
              </el-date-picker>
            </el-form-item>
          </el-form>
          <div class="mt20">
            <el-button @click="cancel">重置</el-button>
            <el-button type="primary" @click="submitForm">登记</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 添加或修改参数配置对话框 -->
    <el-dialog title="挂号单" v-model="open" width="500px" append-to-body>
      <div id="printBox" class="text-center">
        <div class="font20 fontW600 mb16">范大夫视光门诊</div>
        <div class="font18 fontW500 mb8" >{{ form.regNo }}</div>
        <div class="font18 fontW500 mb8">{{ parseTime(form.regDate) }}</div>
        <div class="font14 fontW500 mb8">姓名：{{ form.name }}</div>
        <div class="font14 fontW500 mb8">已缴纳挂号费：{{ form.regFee }}</div>
        <div class="font14 fontW500 mb8">已缴纳检查费：{{ form.checkFee }}</div>
        <div class="font14 fontW500 mb8">温馨提示：请按序就诊，待诊</div>
        <div class="font14 fontW500 mb8">请保持安静，号码当日有效</div>
        <div class="font14 fontW500 mb8">专注近视防控与视力健康管理</div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelDialog">取 消</el-button>
          <el-button type="primary" v-print="print" @click="submitForm">打 印</el-button>
        </div>
      </template>
    </el-dialog>
    <el-backtop></el-backtop>
  </div>
</template>
<script setup name="Index">
import { addReg } from "@/api/system/reg";
import { listPatient } from "@/api/system/patient";
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
    name: [{ required: true, message: "", trigger: "blur" }],
  },
});

// 打印
const print = ref({
  id: 'printBox',//这里的id就是上面我们的打印区域id，实现指哪打哪
  popTitle: '配置页眉标题',// 打印配置页上方的标感
  extraHead: '',// 最上方的头部文字，附加在head标签上的额外标签，使用逗号分割
  perview: false,// 是否启动预览模式，飘认是false
  previewTitle: '预览的标题',// 打印览的标感
  previewPrintBtnLabel: '预览结束，开始打印',// 打印预览的标题下方的按钮文本，点击可进入打印
  zIndex: 20002,// 预览窗口的z-index，飘认是20002，最好比款从值更高
  previewBeforeOpenCallback(){ console.log('正在加载预览窗口!');},// 预览窗口打开之的callback
  previewOpenCallback(){ console.log('已经加载完预览窗口，预览打开了!');},// 预窗口打开时的callback
  beforeOpenCallback(){ console.log('开始打印之前!');},// 开始打印之的calLback
  openCallback(){ console.log('执行打印了!');},// 辆朋打印时的calLback
  closeCallback(){ console.log('关闭了打印工具!');},// 关打印的callback(无法区分确队or歌消)
  clickMounted(){ console.log('点击v-print绑定的按钮了!');},
})

const { proxy } = getCurrentInstance();
const { queryParams, form, rules } = toRefs(data);
/** 表单重置 */
function reset() {
  form.value = {
    id: null,
    regNo: null,
    name: null,
    phone: null,
    idCard: null,
    regDate: null,
    regFee: null,
    checkFee: null,
    delFlag: null,
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
  };
  proxy.resetForm("dataRef");
}

const formRefs = ref([]);
const open = ref(false);
function cancel() {
  reset();
}

/** 新增按钮操作 */
function submitForm() {
  console.log("form.value :>> ", form.value);
  // proxy.$refs["dataRef"].validate((valid) => {
  //   addReg(form.value)
  //     .then((response) => {
  //       proxy.$modal.msgSuccess("登记成功");
  //       title.value = "打印";
        open.value = true;
  //     })
  //     .catch((response) => {
  //       proxy.$modal.msgError("登记失败");
  //     });
  // });
}
function cancelDialog() {
  open.value = false;
}
const total = ref(0);
function changeName(e) {
  queryParams.value.name = e;
  listPatient(proxy.addDateRange(queryParams.value)).then((response) => {
    total.value = response.total;
  });
  if (total.value !== 0) {
    proxy.$modal.msgError("患者姓名重复");
  }
}
function changePhone(e) {
  console.log("e :>> ", e);
  queryParams.value.phone = e;
  console.log("queryParams.value.phone :>> ", queryParams.value.phone);
  listPatient(proxy.addDateRange(queryParams.value)).then((response) => {
    total.value = response.total;
  });
  if (total.value !== 0) {
    proxy.$modal.msgError("该患者已列入黑名单");
  }
}

changeName();
changePhone();
</script>
<style scoped lang="scss">
.home {
  .full_box {
    width: 100%;
    height: calc(100vh - 130px);
  }
  .form_box {
    padding: 20px;
    width: 100%;
    height: calc(100vh - 220px);
    .date_picker {
      :deep(.el-input__wrapper) {
        width: 50px !important;
      }
    }
  }
}
</style>
