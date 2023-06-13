<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "视力检查" }}</span>
        </div>
      </template>
      <div class="body">
        <el-form
          label-position="right"
          label-width="110px"
          :model="patientInfo"
        >
          <el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "远视力L：" }}
                </div>
                <el-form-item label="裸眼" class="font14">
                  <el-input
                    v-model="patientInfo.distantNakedL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.distantFrameL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.distantOnL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "远视力R：" }}
                </div>
                <el-form-item label="裸眼" class="font14">
                  <el-input
                    v-model="patientInfo.distantNakedR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.distantFrameR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.distantOnR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "近视力L：" }}
                </div>
                <el-form-item label="裸眼" class="font14">
                  <el-input
                    v-model="patientInfo.nearNakedL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.nearFrameL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.nearOnL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "近视力R：" }}
                </div>
                <el-form-item label="裸眼" class="font14">
                  <el-input
                    v-model="patientInfo.nearNakedR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.nearFrameR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.nearOnR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
          <el-row class="flex-row">
            <el-col :span="10">
              <el-col>
                <el-form-item label="镜片划痕：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.lensScratch">
                    <el-checkbox label="-">( - )</el-checkbox>
                    <el-checkbox label="+">( + )</el-checkbox>
                    <el-checkbox label="++">( ++ )</el-checkbox>
                    <el-checkbox label="+++">( +++ )</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="10">
              <el-col>
                <el-form-item label="镜架：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.eyeglassFrame">
                    <el-checkbox label="-">( - )</el-checkbox>
                    <el-checkbox label="+">( + )</el-checkbox>
                    <el-checkbox label="++">( ++ )</el-checkbox>
                    <el-checkbox label="+++">( +++ )</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-row class="card-btn">
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup name="sightTestRoom">
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
  distantNakedL: "",
  distantFrameL: "",
  distantOnL: "",
  distantNakedR: "",
  distantFrameR: "",
  distantOnR: "",
  nearNakedL: "",
  nearFrameL: "",
  nearOnL: "",
  nearNakedR: "",
  nearFrameR: "",
  nearOnR: "",
  lensScratch: [],
  eyeglassFrame: [],
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    distantNakedL: "",
    distantFrameL: "",
    distantOnL: "",
    distantNakedR: "",
    distantFrameR: "",
    distantOnR: "",
    nearNakedL: "",
    nearFrameL: "",
    nearOnL: "",
    nearNakedR: "",
    nearFrameR: "",
    nearOnR: "",
    lensScratch: [],
    eyeglassFrame: [],
  };
}
/** 提交按钮 */
function submitForm() {
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
  const isFile = false;
  const contant = JSON.stringify({ sightTest: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", contant);
}
</script>

<style>
</style>