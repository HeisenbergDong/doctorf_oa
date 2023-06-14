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
                    v-model="patientInfo.distantNakedOptometryL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.distantFrameOptometryL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.distantOnOptometryL"
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
                    v-model="patientInfo.distantNakedOptometryR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.distantFrameOptometryR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.distantOnOptometryR"
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
                    v-model="patientInfo.nearNakedOptometryL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.nearFrameOptometryL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.nearOnOptometryL"
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
                    v-model="patientInfo.nearNakedOptometryR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="框架">
                  <el-input
                    v-model="patientInfo.nearFrameOptometryR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="片上" class="font14">
                  <el-input
                    v-model="patientInfo.nearOnOptometryR"
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
                  <el-checkbox-group v-model="patientInfo.lensScratchOptometry">
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
                  <el-checkbox-group
                    v-model="patientInfo.eyeglassFrameOptometry"
                  >
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
  distantNakedOptometryL: "",
  distantFrameOptometryL: "",
  distantOnOptometryL: "",
  distantNakedOptometryR: "",
  distantFrameOptometryR: "",
  distantOnOptometryR: "",
  nearNakedOptometryL: "",
  nearFrameOptometryL: "",
  nearOnOptometryL: "",
  nearNakedOptometryR: "",
  nearFrameOptometryR: "",
  nearOnOptometryR: "",
  lensScratchOptometry: [],
  eyeglassFrameOptometry: [],
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    distantNakedOptometryL: "",
    distantFrameOptometryL: "",
    distantOnOptometryL: "",
    distantNakedOptometryR: "",
    distantFrameOptometryR: "",
    distantOnOptometryR: "",
    nearNakedOptometryL: "",
    nearFrameOptometryL: "",
    nearOnOptometryL: "",
    nearNakedOptometryR: "",
    nearFrameOptometryR: "",
    nearOnOptometryR: "",
    lensScratchOptometry: [],
    eyeglassFrameOptometry: [],
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    distantNakedOptometryL: patientInfo.value.distantNakedOptometryL,
    distantFrameOptometryL: patientInfo.value.distantFrameOptometryL,
    distantOnOptometryL: patientInfo.value.distantOnOptometryL,
    distantNakedOptometryR: patientInfo.value.distantNakedOptometryR,
    distantFrameOptometryR: patientInfo.value.distantFrameOptometryR,
    distantOnOptometryR: patientInfo.value.distantOnOptometryR,
    nearNakedOptometryL: patientInfo.value.nearNakedOptometryL,
    nearFrameOptometryL: patientInfo.value.nearFrameOptometryL,
    nearOnOptometryL: patientInfo.value.nearOnOptometryL,
    nearNakedOptometryR: patientInfo.value.nearNakedOptometryR,
    nearFrameOptometryR: patientInfo.value.nearFrameOptometryR,
    nearOnOptometryR: patientInfo.value.nearOnOptometryR,
    lensScratchOptometry: patientInfo.value.lensScratchOptometry.toString(),
    eyeglassFrameOptometry: patientInfo.value.eyeglassFrameOptometry.toString(),
  };
  const contant = JSON.stringify({ sightTestRoom: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
</script>

<style>
</style>