<!-- 眼底检查 -->
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
          <span class="item-table-text">玻璃体</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.vitreumR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="vitreumTextR">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="vitreumTextR"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.vitreumL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="vitreumTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="vitreumTextL"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">视网膜</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.retinaR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'豹纹状改变'">豹纹状改变</el-checkbox>
              <el-checkbox :label="'脉络膜环'">脉络膜环</el-checkbox>
              <el-checkbox :label="'视盘边界'">视盘边界</el-checkbox>
              <el-checkbox :label="'色'">色</el-checkbox>
              <el-checkbox :label="'C/D'">C/D</el-checkbox>
              <el-checkbox :label="'中心凹反射'">中心凹反射</el-checkbox>
              <el-checkbox :label="'出血'">出血</el-checkbox>
              <el-checkbox :label="'渗出'">渗出</el-checkbox>
              <el-checkbox :label="'A/V'">A/V</el-checkbox>
              <el-checkbox :label="retinaTextR">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="retinaTextR"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.retinaL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'豹纹状改变'">豹纹状改变</el-checkbox>
              <el-checkbox :label="'脉络膜环'">脉络膜环</el-checkbox>
              <el-checkbox :label="'视盘边界'">视盘边界</el-checkbox>
              <el-checkbox :label="'色'">色</el-checkbox>
              <el-checkbox :label="'C/D'">C/D</el-checkbox>
              <el-checkbox :label="'中心凹反射'">中心凹反射</el-checkbox>
              <el-checkbox :label="'出血'">出血</el-checkbox>
              <el-checkbox :label="'渗出'">渗出</el-checkbox>
              <el-checkbox :label="'A/V'">A/V</el-checkbox>
              <el-checkbox :label="retinaTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="retinaTextL"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
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
  
<script setup name="fundusTest">

const emit = defineEmits(['update']);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  data:{
    type:Object,
    default:()=>({})
  }
});
watch(()=>props.data,(val)=>{
  patientInfo.value = val;
})
const vitreumTextL = ref("");
const vitreumTextR = ref("");
const retinaTextL = ref("");
const retinaTextR = ref("");
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
  vitreumL: [],
  vitreumR: [],
  retinaL: [],
  retinaR: [],
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    vitreumL: [],
    vitreumR: [],
    retinaL: [],
    retinaR: [],
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    vitreumL: patientInfo.value.vitreumL.toString(),
    vitreumR: patientInfo.value.vitreumR.toString(),
    retinaL: patientInfo.value.retinaL.toString(),
    retinaR: patientInfo.value.retinaR.toString(),
  };
  const contant = JSON.stringify({fundusTest:sq});
  emit("update", isFile, contant);
}
</script>
  
<style lang="scss" scoped>
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
  width: 20%;
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
:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
}
</style>