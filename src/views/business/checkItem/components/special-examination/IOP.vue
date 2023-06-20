<!-- 眼压 -->
<template>
  <div>
    <div class="item-body">
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼 压</span>
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
          <span class="item-table-text">检查方式</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-select
              v-model="patientInfo.labelPosition"
              placeholder="请选择"
            >
              <el-option
                v-for="item in labelPositionOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">{{patientInfo.labelPosition === '0' ? '指测法' : 'Icare'}}</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-select
              v-model="patientInfo.fingerMethodR"
              placeholder="请选择"
              v-if="patientInfo.labelPosition === '0'"
            >
              <el-option
                v-for="item in IopOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <template v-else>
              <el-input
                v-model="patientInfo.IcareR"
                class="mr24 w180i"
                placeholder="请输入"
              ></el-input>mmHg
            </template>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-select
              v-model="patientInfo.fingerMethodL"
              placeholder="请选择"
              v-if="patientInfo.labelPosition === '0'"
            >
              <el-option
                v-for="item in IopOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <template v-else>
              <el-input
                v-model="patientInfo.IcareL"
                class="mr24 w180i"
                placeholder="请输入"
              ></el-input>mmHg
            </template>
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
  
<script setup name="IOP">
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
  labelPosition: "0",
  fingerMethodL: "",
  IcareL: "",
  fingerMethodR: "",
  IcareR: "",
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    labelPosition: "0",
    fingerMethodL: "",
    IcareL: "",
    fingerMethodR: "",
    IcareR: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    labelPosition: patientInfo.value.labelPosition,
    fingerMethodL: patientInfo.value.fingerMethodL,
    IcareL: patientInfo.value.IcareL,
    fingerMethodR: patientInfo.value.fingerMethodR,
    IcareR: patientInfo.value.IcareR,
  };
  const contant = JSON.stringify({ IOP: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
const IopOptions = ref([
  {
    value: "Tn-3",
    label: "Tn-3",
  },
  {
    value: "Tn-2",
    label: "Tn-2",
  },
  {
    value: "Tn-1",
    label: "Tn-1",
  },
  {
    value: "Tn",
    label: "Tn",
  },
  {
    value: "Tn+1",
    label: "Tn+1",
  },
  {
    value: "Tn+2",
    label: "Tn+2",
  },
  {
    value: "Tn+3",
    label: "Tn+3",
  },
]);
const labelPositionOpt = [
  {
    value: '0',
    label: "指测法",
  },
  {
    value: '1',
    label: "Icare",
  }
]
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