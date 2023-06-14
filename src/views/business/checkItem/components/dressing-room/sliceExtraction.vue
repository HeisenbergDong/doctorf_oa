<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "取片" }}</span>
        </div>
      </template>
      <div class="body">
        <el-form
          :inline="true"
          label-position="right"
          label-width="80px"
          :model="patientInfo"
        >
          <el-form-item label="待定" class="font14"> </el-form-item>
          <el-row class="card-btn">
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
    
<script setup name="sliceExtraction">

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
const convergeOptions = ref([
  {
    value: "良",
    label: "良",
  },
  {
    value: "欠",
    label: "欠",
  },
]);
const euphoropsiaOptions = ref([
  {
    value: "右",
    label: "右",
  },
  {
    value: "左",
    label: "左",
  },
]);
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
  convergence: "",
  positionOne: "",
  positionTwo: "",
  dominant: "",
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    convergence: "",
    positionOne: "",
    positionTwo: "",
    dominant: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    convergence: patientInfo.value.convergence,
    positionOne: patientInfo.value.positionOne,
    positionTwo: patientInfo.value.positionTwo,
    dominant: patientInfo.value.dominant,
  };
  const contant = JSON.stringify({ sliceExtraction: sq });
  emit("update", isFile, contant);
}
</script>
    
  <style>
</style>