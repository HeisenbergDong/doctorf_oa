<!-- 干眼检查 -->
<template>
  <div>
    <el-card class="update-log" shadow="never">
      <div class="body">
        <el-form
          :inline="true"
          label-position="right"
          label-width="80px"
          :model="patientInfo"
        >
          <el-form-item
            label="上传附件"
            class="font14"
            style="margin-bottom: 0px"
          >
            <UploadFile />
          </el-form-item>
          <el-row class="card-btn">
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
        
  <script setup name="dryEyeTest">
import {
  listForm,
  getForm,
  delForm,
  addForm,
  updateForm,
} from "@/api/system/form";
import UploadFile from "/src/components/FileUpload/index.vue";

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
const isInfo = ref();
/** 获取表单详情 */
function getData() {
  resetQuery();
  const Id = props.id;
  getForm(Id).then((response) => {
    isInfo.value = response.data || null;
    if (isInfo.value) {
      const dataJson = JSON.parse(isInfo.value);
      patientInfo.value = {
        ...dataJson.value,
        lensScratch: dataJson.value.lensScratch.split(),
        eyeglassFrame: dataJson.value.eyeglassFrame.split(),
      };
    }
    // form.value = response.data;
    // open.value = true;
    console.log("getForm", response, isInfo.value);
  });
}
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
  const contant = JSON.stringify({ dryEyeTest: sq });
  emit("update", isFile, contant);
}
getData();
</script>
        
  <style>
</style>