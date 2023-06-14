<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "眼压" }}</span>
        </div>
      </template>
      <div class="body">
        <el-form
          label-position="right"
          label-width="110px"
          :model="patientInfo"
        >
          <el-row class="mb16">
            <el-radio-group
              v-model="patientInfo.labelPosition"
              size=""
              @change="typeOnChange"
            >
              <el-radio-button :label="'0'">指测法</el-radio-button>
              <el-radio-button :label="'1'">Icare</el-radio-button>
            </el-radio-group>
          </el-row>
          <el-row>
            <el-row class="flex-row w100i">
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "眼压L：" }}
                </div>
                <el-form-item label="眼压" class="font14">
                  <el-select
                    v-if="patientInfo.labelPosition"
                    v-model="patientInfo.fingerMethodL"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in IopOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <div v-else>
                    <el-input
                      v-model="patientInfo.IcareL"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                    <div style="position: absolute; top: 0; left: 185px">
                      (mmhg)
                    </div>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "眼压R：" }}
                </div>
                <el-form-item label="眼压" class="font14">
                  <el-select
                    v-if="patientInfo.labelPosition"
                    v-model="patientInfo.fingerMethodR"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in IopOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <div v-else>
                    <el-input
                      v-model="patientInfo.IcareR"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                    <div style="position: absolute; top: 0; left: 185px">
                      (mmhg)
                    </div>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
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
</script>
  
  <style>
</style>