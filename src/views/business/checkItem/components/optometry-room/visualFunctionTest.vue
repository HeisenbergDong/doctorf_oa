<!-- 视功能检查 -->
<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "视功能检查" }}</span>
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
    
<script setup name="visualFunctionTest">
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
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
  fileUrl: "",
  fileName: "",
});

/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    fileUrl: "",
    fileName: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    distantNakedL: patientInfo.value.distantNakedL,
    distantFrameL: patientInfo.value.distantFrameL,
    distantOnL: patientInfo.value.distantOnL,
    distantNakedR: patientInfo.value.distantNakedR,
    distantFrameR: patientInfo.value.distantFrameR,
    distantOnR: patientInfo.value.distantOnR,
    nearNakedL: patientInfo.value.nearNakedL,
    nearFrameL: patientInfo.value.nearFrameL,
    nearOnL: patientInfo.value.nearOnL,
    nearNakedR: patientInfo.value.nearNakedR,
    nearFrameR: patientInfo.value.nearFrameR,
    nearOnR: patientInfo.value.nearOnR,
    lensScratch: patientInfo.value.lensScratch.toString(),
    eyeglassFrame: patientInfo.value.eyeglassFrame.toString(),
  };
  const contant = JSON.stringify({ visualFunctionTest: sq });
  emit("update", isFile, contant);
}
</script>
    
    <style>
</style>