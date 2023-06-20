<!-- 视功能训练 -->
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
            <UploadFile
              ref="fileUpload"
              :modelValue="fileList"
              @uploadChange="onchange"
              :limit="1"
            />
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
  
<script setup name="train">
import UploadFile from "@/components/FileUpload/index.vue";
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
// const form = ref({
//   id: "",
//   type: "",
//   patientId: props.id,
//   patientName: "",
//   patientPhone: "",
//   patientIdCard: "",
//   docId: "",
//   docName: "",
//   formTime: "",
//   formContent: "",
// });
const fileList = ref([]);
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
  fileList.value = [];
}
const onchange = (val) => {
  console.log("onchange -- val === ", val);
  fileList.value = val;
};
/** 提交按钮 */
function submitForm() {
  if (!fileList.value.length) {
    proxy.$modal.msgError(`未上传文件！`);
    return;
  }
  const isFile = true;
  let sq = {
    fileUrl: fileList.value[0].url,
    fileName: fileList.value[0].name,
  };
  const contant = JSON.stringify({ train: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", fileUrl);
}
</script>
  
<style>
</style>