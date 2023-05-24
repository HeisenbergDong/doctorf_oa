<template>
  <!-- 叫号 -->
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
          label-width="80px"
          :model="formData"
          style="
            border: 1px solid #dcdfe6;
            border-radius: 5px;
            padding: 24px 24px 20px 20px;
            width: 40%;
          "
        >
          <div class="flex-row just-between">
            <div class="w100i">
              <el-form-item label="姓名" class="font14">
                <el-input
                  v-model="formData.name"
                  placeholder="请输入"
                  class="mr24"
                ></el-input>
              </el-form-item>
            </div>
            <div>
              <el-button type="primary">重名检测</el-button>
            </div>
          </div>

          <el-form-item label="性别">
            <el-select
              v-model="formData.gender"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="item in IopOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="formData.age" placeholder="请输入"></el-input>
          </el-form-item>
          <div class="flex-row just-between">
            <div class="w100i">
              <el-form-item label="电话号码">
                <el-input
                  v-model="formData.phone"
                  placeholder="请输入"
                  class="mr24"
                ></el-input>
              </el-form-item>
            </div>
            <div>
              <el-button type="primary">黑名单检测</el-button>
            </div>
          </div>
          <el-form-item label="预约时间">
            <el-date-picker
              v-model="formData.appointmentTime"
              type="datetime"
              placeholder="选择日期时间"
              class="date_picker w100i"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="备注说明">
            <el-input
              type="textarea"
              placeholder="请输入"
              v-model="formData.remark"
              :autosize="{ minRows: 2, maxRows: 4 }"
              show-word-limit
            >
            </el-input>
          </el-form-item>
          <el-form-item label="是否首次">
            <el-radio-group v-model="formData.isFirstVisit">
              <el-radio-button label="是"></el-radio-button>
              <el-radio-button label="否"></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div class="mt20">
          <el-button>重置</el-button>
          <el-button type="primary">登记</el-button>
        </div>
      </div>
    </el-card>
  </div>
  <el-backtop></el-backtop>
</template>
<script setup name="Index">
const formData = ref({
  name: "",
  gender: "",
  age: "",
  phone: "",
  appointmentTime: "",
  isFirstVisit: "是",
  remark: "",
});
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