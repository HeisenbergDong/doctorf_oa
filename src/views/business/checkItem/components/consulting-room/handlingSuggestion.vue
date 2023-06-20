<!-- 处理意见 -->
<template>
  <div class="visual-inspect">
    <div class="item-body">
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼别</span>
        </div>
        <div class="item-table">
          <div class="row-label">R</div>
        </div>
        <div class="item-table">
          <div class="row-label">L</div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">人工泪液</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.artificialTears">
              <el-checkbox :label="'3%丽爱思'">3%丽爱思</el-checkbox>
              <el-checkbox :label="'0.3%爱丽'">0.3%爱丽</el-checkbox>
              <el-checkbox :label="'0.3%爱丽(MINI)'"
                >0.3%爱丽(MINI)</el-checkbox
              >
              <el-checkbox :label="'0.1%海露 滴眼液'"
                >0.1%海露 滴眼液</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="table-row">
            <div class="row-label-w">使用(次/日)：</div>
            <el-input
              v-model="patientInfo.num"
              placeholder="请输入"
              class="w180i"
            ></el-input>滴双眼
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">处理意见</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.opinion">
              <el-checkbox :label="'注意用眼卫生，多做户外活动'"
                >注意用眼卫生，多做户外活动</el-checkbox
              >
              <el-checkbox :label="'辐辏训练'">辐辏训练</el-checkbox>
              <el-checkbox :label="'调节训练'">调节训练</el-checkbox>
              <el-checkbox :label="'注意镜片位置'">注意镜片位置</el-checkbox>
              <el-checkbox :label="'注意镜片清洁度'"
                >注意镜片清洁度</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <el-row class="card-btn">
        <el-button @click="resetQuery">重置</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-row>
    </div>
  </div>
</template>
  
<script setup name="handlingSuggestion">
const emit = defineEmits(["update"]);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  data: {
    type: Object,
    default: () => ({}),
  },
});
watch(
  () => props.data,
  (val) => {
    patientInfo.value = val;
  }
);
const form = ref({
  id: "",
  type: "",
  patientId: props.id,
  patientName: "",
  patientPhone: "",
  patientIdCard: "",
  docId: "",
  docName: "",
  formTime: "",
  formContent: "",
});

const patientInfo = ref({
  artificialTears: [],
  num: "",
  opinion: [],
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    artificialTears: [],
    num: "",
    opinion: [],
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    artificialTears: patientInfo.value.artificialTears.toString(),
    num: patientInfo.value.num,
    opinion: patientInfo.value.opinion.toString(),
  };
  const contant = JSON.stringify({ handlingSuggestion: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
</script>
  
<style scoped>
.visual-inspect {
}
:deep(.el-form-item--default) {
  margin: 0px !important;
}
:deep(.el-form-item) {
  margin: 0px !important;
}
.item-title {
  height: 20px;
  font-size: 14px;
  font-weight: 600;
}
.item-body {
  padding-top: 10px;
}
.item-row {
  display: flex;
}
.table-title-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;
  
}
.item-table-text {
    font-size: 14px;
    font-weight: 600px !important;
  }
.item-table {
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;
}
.table-row {
  display: flex;
  padding: 2px;
  align-items: center;
}
.row-label {
  width: 60px;
}
.item-table-title {
  font-size: 14px;
  font-weight: 600px !important;
}
  
.time-body {
  padding-top: 15px;
}
.time-item {
  position: relative;
  min-height: 50px;
}
.time-icon-text {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 21px;
  border-radius: 8px;
  top: 3px;
}
.item-mr {
  margin-bottom: 15px;
}
.check-body {
  padding-left: 10px;
  position: relative;
}
.check-line {
  position: absolute;
  height: 50px;
  border-left: 2px solid;
  top: 7px;
  left: 2px;
}
:deep(.el-form-item__label) {
  width: 100px;
  justify-content: flex-start;
}
</style>