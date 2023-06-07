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
      <div class="ml24">
        <el-button type="primary" @click="submitForm">打 印</el-button>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelDialog">取 消</el-button>
        </div>
      </template>
    </el-dialog>
    <el-backtop></el-backtop>
  </div>
</template>
<script setup name="Index">
import { addReg } from "@/api/system/reg";
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
  proxy.$refs["dataRef"].validate((valid) => {
    addReg(form.value)
      .then((response) => {
        proxy.$modal.msgSuccess("登记成功");
        title.value = "打印";
        open.value = true;
      })
      .catch((response) => {
        proxy.$modal.msgSuccess("登记失败");
      });
  });
}
function cancelDialog() {
  open.value = false;
}
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
